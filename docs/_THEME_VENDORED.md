# Vendored Theme

The layouts, includes, SCSS, and bundled JS in this repo are vendored from
[raviriley/agency-jekyll-theme](https://github.com/raviriley/agency-jekyll-theme).

Last synced: commit `9721f15` (May 2025, "migrate to self-contained Jekyll").

## What's vendored

| Path | Origin |
|------|--------|
| `_layouts/` | theme layouts |
| `_includes/` | theme partials (with local customizations — see below) |
| `assets/css/agency.scss` | theme stylesheet — **do not edit** |
| `assets/css/bootstrap.min.css` | Bootstrap 4 bundle — **do not edit** |
| `assets/css/all.min.css` | Font Awesome bundle — **do not edit** |
| `assets/js/` | theme JS — **do not edit** |

## Local customizations

- `_includes/footer.html` — replaced entirely: white background, Cornell EEO link, JS for short-page positioning
- `assets/css/custom.css` — all site-specific style overrides live here

## Upgrading the theme

To pull in upstream changes, diff the upstream repo against the vendored files
and apply patches manually, being careful not to overwrite the local customizations above.
