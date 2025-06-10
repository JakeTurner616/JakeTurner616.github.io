# serverboi.org — Static Site

This is the source repo for [serverboi.org](https://serverboi.org), a static site built with a **heavily modified version of [Jekyll Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy)**.

[![Deploy Status](https://github.com/JakeTurner616/JakeTurner616.github.io/actions/workflows/pages-deploy.yml/badge.svg)](https://github.com/JakeTurner616/JakeTurner616.github.io/actions/workflows/pages-deploy.yml)


---

## Development

## Requirements

* Ruby ≥ 2.7
* Bundler (`gem install bundler`)
* Jekyll (installed via Bundler)
* Python ≥ 3.6
* Python packages: `pyyaml`, `requests`


```bash
bundle install
bundle exec jekyll serve
```

---

## Scripts

update_readmes.py is used to bootstrap project README files from an upstream source:

```bash
python scripts/update_readmes.py
```

This uses `repos.yml` in the `scripts/` directory to copy README files hosted on the internet into markdown for the static site.

```yml
- repo_url: https://github.com/mtgscan-cards/monolithic
  branch: main
  page_path: _posts/2025-06-05-mtgcards-scan.md
```
And injects it between `<!-- BEGIN AUTO-README -->` and `<!-- END AUTO-README -->` tags

---

## License

[GNU GPL 3.0](LICENSE.md)