# SAF Specification Source
If you would like to read the TdSE 2026 Release System Architecture Framework (SAF) documentation, please visit [saf.gfse.org/version/TdSE2026](https://saf.gfse.org/version/TdSE2026)
For the latest version head over to  [saf.gfse.org](https://saf.gfse.org)

The this is the source repo of the TdSE2026 release branch of the SAF Specification. 

## Forking this repository

Forks of this repository can publish their own copy of the site on GitHub Pages without any configuration:

1. **Fork** (or clone) this repository.
2. In your fork, open **Settings → Pages → Build and deployment** and set **Source** to *Deploy from a branch* with branch **`gh-pages`**, path **(root)**.
3. Push your changes to `main` (or run the *Deploy Jekyll site to Pages* workflow manually). The workflow builds the Jekyll site with the correct `baseurl` and deploys it to the `gh-pages` branch.
4. Your site is then live at `https://<your-username>.github.io/<repository-name>/`.

The site detects at build time that it is being built outside the canonical `GfSE/SAF-Specification` repository (see `canonical_repository` in `_config.yml`) and automatically shows a fork notice on the landing page and in the site footer; the imprint assigns the responsibility for the content to the repository owner. If your fork does not host the release branches, trim `src/_data/releases.yml` to the releases it actually deploys.

Branches other than `main` are deployed as version previews under `/version/<branch>/` of your site (only branches listed in `on: push` of the workflow trigger a deployment).
