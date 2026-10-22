#!/usr/bin/env python3
"""Deploy SAF skills as OMP skills (two sets, chosen with --set):

  user  the <VP_ID>.md context recipes (this directory) + the 'saf-modeling'
        router (SAF_MODELING.md)
  dev   the spec-maintenance reference (../dev-skills/): the 'saf-spec-modeling'
        router skill (model-structure.md bundled) + one OMP skill per Development
        Domain viewpoint (saf-<vp>)

OMP harness skill conventions (omp://skills.md):

  <skills-root>/<skill-name>/SKILL.md      one level, NON-recursive; the native
                                           .omp provider only scans this layout
  --- frontmatter: name + description ---  description is REQUIRED for the
                                           native .omp provider
  <skill-name>/...                         bundled reference assets, referenced
                                           from the body via skill://<name>/...

Only user recipes that follow the current modeler-facing template are deployed
(detected by their "Reuse check" step); v0 / spec-focused files are skipped.
AGENTS.md and README.md are dev/meta docs and are never deployed.

Usage:
  python3 deploy.py                # deploy both sets into /workspace/.omp
  python3 deploy.py --set user     # user recipes + saf-modeling router only
  python3 deploy.py --set dev      # saf-spec-modeling only
  python3 deploy.py --dry-run      # preview; write nothing
  python3 deploy.py --skills-root DIR

"""
import argparse
import posixpath
import re
import shutil
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
VP_ID = re.compile(r"^[OPC]\d_[A-Z]{4}$")
SVG = re.compile(r"exa_[A-Za-z0-9_]+\.svg")
NEW_TEMPLATE_MARK = "Reuse check"  # hallmark of the modeler-facing template
GENERAL_SKILL = "SAF_MODELING"  # hand-authored router skill (not a per-viewpoint recipe)
GENERAL_NAME = "saf-modeling"
GENERAL_DESCRIPTION = (
    "Router for SAF context modeling in a Cameo system model. Picks the right "
    "SAF context viewpoint from the question you are answering across 3 fidelity "
    "domains (Operational, Conceptual, Physical) x 3 kinds (Definition, Exchange, "
    "Interaction), then directs to the matching VP_ID modeler recipe. Use when "
    "building a SAF context view via the cameo-model MCP tools and unsure which "
    "viewpoint skill to apply."
)

DEV_SKILLS_DIR = HERE.parent / "dev-skills"  # sibling of this (user-skills/) directory
DEV_SKILL_NAME = "saf-spec-modeling"
DEV_BUNDLED_FILES = {"model-structure.md"}  # files bundled in the router, not their own skill
DEV_DESCRIPTION = (
    "SAF specification modeling - how to develop and maintain the SAF specification "
    "model: the SCM conceptual model, the SPM profile, viewpoint packages, and the "
    "seven SAF Development Domain viewpoints. Carries the global spec-modeling "
    "policies (SCM/SPM/view/hygiene rules) and the per-viewpoint maintenance "
    "procedures. Use when adding or changing SAF concepts, stakeholders, concerns, "
    "viewpoints, profile stereotypes, or any element of the SAF specification model."
)


def parse_args():
    ap = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter
    )
    ap.add_argument("--dry-run", action="store_true", help="preview, write nothing")
    ap.add_argument("--skills-root", default="/workspace/.omp",
                    help="dir scanned one-level-deep for <name>/SKILL.md (default /workspace/.omp)")
    ap.add_argument("--src-diagrams", default=str(HERE.parent / "src" / "diagrams" / "examples_md"),
                    help="directory holding the reference example SVGs")
    ap.add_argument("--set", choices=["user", "dev", "all"], default="all",
                    help="which skill set(s) to deploy (default: all)")
    return ap.parse_args()


def vp_name(text):
    m = re.search(r"^#\s+(.*)$", text, re.M)
    if not m:
        return ""
    t = m.group(1)
    t = re.sub(r"^[OPC]\d_[A-Z]{4}\s*[—–-]\s*", "", t)  # strip "C1_SCXD — "
    t = re.sub(r"\s*\(view\)\s*$", "", t)                # strip " (view)"
    return t.strip()


def grid_field(text):
    m = re.search(r"\*\*Grid cell:\*\*\s*([^·\n]+)", text)
    return m.group(1).strip() if m else ""


def field_ml(text, label):
    """Value after **label:** — multi-line, collapsed to one line."""
    m = re.search(r"\*\*" + re.escape(label) + r":\*\*\s*(.*?)(?:\n\s*\n|\n\*\*)", text, re.S)
    if m:
        return " ".join(m.group(1).split())
    m2 = re.search(r"\*\*" + re.escape(label) + r":\*\*\s*(.+?)\s*$", text, re.M)
    return m2.group(1).strip() if m2 else ""


def make_description(vpid, text):
    name = vp_name(text) or vpid
    grid = re.sub(r"\s*\(aspect \d+\)\s*$", "", grid_field(text))
    what = field_ml(text, "What a view gives you")
    if what:
        what = what[0].upper() + what[1:]
    parts = [f"Recipe for modeling a view of the {name} SAF viewpoint ({grid}) in a system model."]
    if what:
        parts.append(what)
    parts.append(
        f"Use when building the {vpid} SAF context view in a Cameo model via the "
        "cameo-model MCP tools."
    )
    desc = " ".join(parts)
    desc = desc.replace(":", "—").replace('"', "'")  # keep the YAML plain scalar safe
    if len(desc) > 1024:
        raise ValueError(f"description too long ({len(desc)} chars) for {vpid}")
    return desc


def dev_description(text):
    """Description for a Development Domain viewpoint skill: the viewpoint
    name (H1 minus the trailing `(`VP_ID`)` / 'Viewpoint') plus its Purpose
    field."""
    m = re.search(r"^#\s+(.*)$", text, re.M)
    name = m.group(1).strip() if m else ""
    name = re.sub(r"\s*\(`[^`]+`\)\s*$", "", name)   # strip " (`D2_COTD`)"
    name = re.sub(r"\s*Viewpoint\s*$", "", name)      # strip " Viewpoint"
    purpose = field_ml(text, "Purpose")
    parts = [f"SAF Development Domain viewpoint '{name}'."]
    if purpose:
        parts.append(purpose)
    parts.append(
        "Use when developing or maintaining the SAF specification model in "
        "Cameo via the cameo-model MCP tools."
    )
    desc = " ".join(parts).replace(":", "—").replace('"', "'")
    if len(desc) > 1024:
        raise ValueError(f"description too long ({len(desc)} chars) for {name}")
    return desc


def bundle_svgs(text, name, src_diagrams, dest_dir, dry):
    """Copy referenced example SVGs into <dest>/examples/ and rewrite their
    references to skill://<name>/examples/<file>."""
    files = sorted(set(SVG.findall(text)))
    for f in files:
        sp = Path(src_diagrams) / f
        if not sp.exists():
            print(f"    warn: referenced SVG not found in source: {f}")
            continue
        if not dry:
            ex = Path(dest_dir) / "examples"
            ex.mkdir(parents=True, exist_ok=True)
            shutil.copy2(sp, ex / f)
        # 1) repo-relative path form, with or without the ../src/diagrams/ prefix
        text = re.sub(r"(\.\./src/diagrams/)?examples_md/" + re.escape(f),
                      f"skill://{name}/examples/{f}", text)
        # 2) any bare filename reference (not already part of a path)
        text = re.sub(r"(?<![A-Za-z0-9_/])" + re.escape(f),
                      f"skill://{name}/examples/{f}", text)
    return text


def candidates():
    return sorted(p.stem for p in HERE.glob("*.md") if VP_ID.fullmatch(p.stem))


def deploy(vpid, args):
    text = (HERE / f"{vpid}.md").read_text(encoding="utf-8")
    if NEW_TEMPLATE_MARK not in text:
        print(f"skip   {vpid:<8} not the current modeler-facing template (no '{NEW_TEMPLATE_MARK}')")
        return False
    name = f"saf-{vpid.lower().replace('_', '-')}"
    dest_dir = Path(args.skills_root) / name
    if not args.dry_run and (dest_dir / "examples").exists():
        shutil.rmtree(dest_dir / "examples")  # idempotent: drop stale bundled SVGs
    body = bundle_svgs(text, name, args.src_diagrams, dest_dir, args.dry_run)
    content = f"---\nname: {name}\ndescription: {make_description(vpid, text)}\n---\n\n{body}"
    if args.dry_run:
        print(f"dry    {vpid:<8} -> {dest_dir}/SKILL.md  (+{len(set(SVG.findall(text)))} example svg)")
        return True
    dest_dir.mkdir(parents=True, exist_ok=True)
    (dest_dir / "SKILL.md").write_text(content, encoding="utf-8")
    print(f"wrote  {dest_dir}/SKILL.md")
    return True


def deploy_general(args):
    """Deploy the hand-authored general router skill (SAF_MODELING.md)."""
    src = HERE / f"{GENERAL_SKILL}.md"
    if not src.exists():
        print(f"skip   {GENERAL_SKILL:<8} not present")
        return False
    text = src.read_text(encoding="utf-8")
    desc = GENERAL_DESCRIPTION.replace(":", "—").replace('"', "'")
    if len(desc) > 1024:
        raise ValueError(f"description too long ({len(desc)} chars) for {GENERAL_SKILL}")
    dest_dir = Path(args.skills_root) / GENERAL_NAME
    content = f"---\nname: {GENERAL_NAME}\ndescription: {desc}\n---\n\n{text}"
    if args.dry_run:
        print(f"dry    {GENERAL_SKILL:<8} -> {dest_dir}/SKILL.md")
        return True
    dest_dir.mkdir(parents=True, exist_ok=True)
    (dest_dir / "SKILL.md").write_text(content, encoding="utf-8")
    print(f"wrote  {dest_dir}/SKILL.md")
    return True


def rewrite_skill_links(text, tree_path, skill_name=DEV_SKILL_NAME):
    """Rewrite relative .md markdown links to skill://<skill_name>/<resolved-path>,
    leaving http/skill:///# links, absolute paths, and links that escape the tree."""
    base = posixpath.dirname(tree_path)

    def fix(m):
        link = m.group(1)
        if link.startswith(("http://", "https://", "skill://", "#")) or posixpath.isabs(link):
            return m.group(0)
        resolved = posixpath.normpath(posixpath.join(base, link))
        if resolved.startswith(".."):
            return m.group(0)
        return f"](skill://{skill_name}/{resolved})"

    return re.sub(r"\]\(([^)]+)\)", fix, text)


def deploy_dev_skills(args):
    """Deploy ../dev-skills/ as the 'saf-spec-modeling' router skill plus one
    OMP skill per Development Domain viewpoint.

    README.md becomes the router (SKILL.md, carrying the global policies). The
    reference files in DEV_BUNDLED_FILES are bundled into the router, reachable
    via skill://saf-spec-modeling/... . Every other .md file is a Development
    Domain viewpoint, deployed as its own OMP skill named saf-<vp> (the same
    convention as the user recipes). Returns the number of skills written.
    """
    src = DEV_SKILLS_DIR
    if not src.is_dir():
        print(f"skip   dev-skills dir not found at {src}")
        return 0
    name = DEV_SKILL_NAME
    dest_dir = Path(args.skills_root) / name
    if not args.dry_run:
        shutil.rmtree(dest_dir, ignore_errors=True)  # idempotent: rebuild the skill
        dest_dir.mkdir(parents=True, exist_ok=True)
    # 1) SKILL.md = README.md (router + global policies), links rewritten
    readme = src / "README.md"
    if not readme.exists():
        print(f"skip   {src}/README.md not found")
        return 0
    desc = DEV_DESCRIPTION.replace(":", "—").replace('"', "'")
    if len(desc) > 1024:
        raise ValueError(f"description too long ({len(desc)} chars) for {name}")
    body = rewrite_skill_links(readme.read_text(encoding="utf-8"), "README.md")
    if args.dry_run:
        print(f"dry    dev-skills -> {dest_dir}/SKILL.md  (router + global policies)")
    else:
        (dest_dir / "SKILL.md").write_text(
            f"---\nname: {name}\ndescription: {desc}\n---\n\n{body}", encoding="utf-8"
        )
        print(f"wrote  {dest_dir}/SKILL.md")
    # 2) bundle reference files + 3) deploy each viewpoint file as its own skill
    bundled = viewpoints = 0
    for p in sorted(src.rglob("*.md")):
        rel = p.relative_to(src).as_posix()
        if rel == "README.md":
            continue  # already written as SKILL.md
        if rel in DEV_BUNDLED_FILES:
            if args.dry_run:
                print(f"dry    bundle {rel}")
            else:
                outp = dest_dir / rel
                outp.parent.mkdir(parents=True, exist_ok=True)
                outp.write_text(
                    rewrite_skill_links(p.read_text(encoding="utf-8"), rel),
                    encoding="utf-8",
                )
            bundled += 1
        else:
            if deploy_dev_viewpoint(src, p, args):
                viewpoints += 1
    print(f"wrote  {dest_dir}/  (+{bundled} bundled, +{viewpoints} viewpoint skill(s))")
    return 1 + viewpoints


def deploy_dev_viewpoint(src, p, args):
    """Deploy one Development Domain viewpoint file as its own OMP skill (saf-<vp>)."""
    rel = p.relative_to(src).as_posix()
    stem = p.stem
    name = f"saf-{stem.lower().replace('_', '-')}"
    text = p.read_text(encoding="utf-8")
    desc = dev_description(text)
    dest_dir = Path(args.skills_root) / name
    if not args.dry_run:
        shutil.rmtree(dest_dir, ignore_errors=True)  # idempotent: rebuild the skill
        dest_dir.mkdir(parents=True, exist_ok=True)
    body = rewrite_skill_links(text, rel, name)
    content = f"---\nname: {name}\ndescription: {desc}\n---\n\n{body}"
    if args.dry_run:
        print(f"dry    {stem:<34} -> {dest_dir}/SKILL.md")
    else:
        (dest_dir / "SKILL.md").write_text(content, encoding="utf-8")
        print(f"wrote  {dest_dir}/SKILL.md")
    return True


def main():
    args = parse_args()
    deployed = 0
    total = 0
    if args.set in ("user", "all"):
        for vpid in candidates():
            total += 1
            if deploy(vpid, args):
                deployed += 1
        if deploy_general(args):
            total += 1
            deployed += 1
    if args.set in ("dev", "all"):
        n = deploy_dev_skills(args)
        total += n
        deployed += n
    if total == 0:
        print(f"nothing to deploy (set={args.set})")
        return 1
    verb = "would deploy into" if args.dry_run else "deployed into"
    print(f"\ndone: {deployed}/{total} skills {verb} {args.skills_root} (set={args.set})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
