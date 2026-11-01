# SAF Specification Source
If you would like to read the System Architecture Framework (SAF) documentation, please visit [saf.gfse.org](https://saf.gfse.org)

We have changed the way the documentation is generated and github is now the source repository for an automatic document generation process. 

The main branch of this repository reflects the current state of development and will be updated as needed. 
Release branches are also available, selectable at the documentation site at [saf.gfse.org](https://saf.gfse.org).

The earlier SAF releases are still available in the legacy documentation format in separate branches.

## Forking this repository

Forks of this repository can publish their own copy of the site on GitHub Pages without any configuration:

1. **Fork** (or clone) this repository.
2. In your fork, open **Settings → Pages → Build and deployment** and set **Source** to *Deploy from a branch* with branch **`gh-pages`**, path **(root)**.
3. Push your changes to `main` (or run the *Deploy Jekyll site to Pages* workflow manually). The workflow builds the Jekyll site with the correct `baseurl` and deploys it to the `gh-pages` branch.
4. Your site is then live at `https://<your-username>.github.io/<repository-name>/`.

The site detects at build time that it is being built outside the canonical `GfSE/SAF-Specification` repository (see `canonical_repository` in `_config.yml`) and automatically shows a fork notice on the landing page and in the site footer; the imprint assigns the responsibility for the content to the repository owner. If your fork does not host the release branches, trim `src/_data/releases.yml` to the releases it actually deploys.

Branches other than `main` are deployed as version previews under `/version/<branch>/` of your site (only branches listed in `on: push` of the workflow trigger a deployment).
