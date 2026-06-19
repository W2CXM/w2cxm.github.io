# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for the Cornell University Amateur Radio Club (W2CXM). Built with Jekyll using the [Agency Jekyll Theme](https://github.com/raviriley/agency-jekyll-theme-starter) and deployed to Cloudflare Pages.

## Development

The site source lives in `docs/`. Jekyll is run via Docker to avoid needing a local Ruby/bundler setup.

**Start the local dev server:**
```sh
docker compose up
```
Site will be available at http://localhost:4000. Changes to `docs/` are watched and rebuilt automatically.

**Build for production (Cloudflare Pages):**
Cloudflare Pages builds the Jekyll site automatically on push to `main`. The `docs/wrangler.toml` points it at the `docs/_site/` output directory.

## Architecture

- `docs/_config.yml` — Jekyll config: theme, domain, plugins
- `docs/_data/sitetext.yml` — All site content (About, Timeline, Team, Contact, Footer). **This is the primary file to edit for content changes.**
- `docs/_data/navigation.yml` — Nav bar section links
- `docs/_portfolio/` — Project write-ups; filename prefix controls display order (e.g. `0_`, `1_`)
- `docs/_includes/footer.html` — Custom footer override (white background, Cornell EEO link, JS for short-page positioning)
- `docs/index.md` — Homepage entry point, sets `layout: home` and favicon

The theme (based on `raviriley/agency-jekyll-theme`) is fully vendored — all layouts, includes, and assets live directly in `docs/_layouts/`, `docs/_includes/`, and `docs/assets/`. There is no remote theme dependency; edit those files directly to change theme behavior.

## Content Updates

- **Team/Officers:** Edit the `team.people` list in `docs/_data/sitetext.yml`
- **Projects:** Add a new `.md` file in `docs/_portfolio/` with front matter (`title`, `subtitle`, `image`, `caption`)
- **Timeline, About, Contact text:** All in `docs/_data/sitetext.yml` under their respective keys
- **Social links:** `docs/_data/sitetext.yml` → `footer.social`
