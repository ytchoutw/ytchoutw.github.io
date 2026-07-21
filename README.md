# NTHU Particle Physics & Fast AI Lab website

This repository contains a static, multi-page research-group website. It does
not require Jekyll, Ruby, Node.js, or a build step.

## Run locally

From the repository root, start any static HTTP server. For example:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/Home.html>.

Do not open the pages directly with a `file://` URL: the home-page metrics fetch
the News and Research pages and therefore require an HTTP origin.

## Structure

- `Home.html` — landing page
- `Research.html`, `People.html`, `Publications.html`, `News.html`,
  `Teaching.html`, `Contact.html`, `Join.html` — section pages
- `site.css` — shared responsive behavior
- `support.js` — generated page runtime
- `vendor/` — pinned local fallbacks for React, ReactDOM, and Babel
- `assets/` and `uploads/` — images and downloadable files

## Conventions

- Internal links use relative `.html` paths.
- Translatable elements use matching `data-en` and `data-zh` attributes.
- Language preference is stored in `localStorage` under `pplab-lang`.
- Keep the runtime files in `vendor/` when deploying. The runtime preserves its
  normal hosted-resource path and automatically falls back to these files when
  the hosted copies are unavailable.
