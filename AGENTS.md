# Bluelink Docs

The Bluelink documentation site at bluelink.dev: a Next.js and Fumadocs site, exported
statically and deployed to GitHub Pages. It documents Bluelink, the blueprint framework, the
CLI, the deploy engine and the plugin framework, and holds the deploy engine's OpenAPI spec.

## Workspace

This repo is one of NewStack's. NewStack's maintainers develop it alongside the others in a
shared workspace, using the NewStack Claude Code plugin for how work is planned, reviewed,
committed and coordinated across repos. The plugin isn't public, and nothing here depends on it:
this file and the repo's own docs cover what a contribution needs.

## Layout

| Path | Holds |
|---|---|
| `content/docs/` | The docs, in MDX, one folder per section (`bluelink`, `blueprint-framework`, `cli`, `deploy-engine`, `plugin-framework`), each ordered by its `meta.json` |
| `content/docs/deploy-engine/http-api-reference/v1/` | API reference pages generated from `api-docs/`, except the hand-written `intro.mdx` and `meta.json` |
| `api-docs/deploy-engine-v1.yaml` | The deploy engine's OpenAPI spec |
| `src/` | The site: `app/` (pages, plus the `static.json` search export and `llms` routes), `components/`, `lib/` (content source, OpenAPI), `data/` (release data) |
| `grammars/blueprintlang.tmLanguage.json` | A copy of bluelink-vscode's grammar, for highlighting `blueprintlang` blocks |
| `scripts/` | Build steps: release data, link checks, API page generation, search index sync |

## Checks

- **Tools:** Node 22 (the deploy workflow's) with Yarn 4 through corepack (`packageManager`).
  `yarn install --immutable` first, which also runs `fumadocs-mdx`.
- **Release data first:** every docs page imports the release components, so
  `src/data/releases.json` (gitignored) must exist before `yarn dev` or `next build` can compile
  `/docs`. `yarn fetch-releases` writes it from the GitHub API (set `GITHUB_TOKEN` if
  rate-limited).
- **Checks:** `yarn lint`, then `yarn next build`, which type-checks, lints and fails on MDX
  errors. `yarn check-links` catches broken links to non-docs routes only: every `/docs/...`
  link passes, so after moving or renaming a page, grep `content/` for the old path.
- **Don't run `yarn build` as a check.** It runs `fetch-releases`, `check-links`, `next build`
  and `post-build`, then `sync-content`, which replaces the production Algolia search index
  using the secret key in `.env` (and fails without one, after the site is built).
- **API reference:** after changing `api-docs/deploy-engine-v1.yaml`, run
  `yarn generate-api-docs` and commit the regenerated pages. It never deletes pages, so remove
  the page for a removed or renamed operation yourself.
- **Gates:** no git hooks, no commitlint, and no CI on pull requests. The only workflow,
  `deploy.yml`, runs on pushes to `main`.

## Running locally

`yarn dev` serves the site on port 3000, after `yarn fetch-releases`. Search queries the
production Algolia index, so local edits never appear in it; `.env.example` lists the keys
with placeholder values (the real ones are repository variables and a secret), and without
`.env` search shows an empty dialog. Page dates and the sitemap come from git history, so a
shallow clone gives wrong dates.

## Compatibility

- **Engine API spec:** `api-docs/deploy-engine-v1.yaml` documents the deploy engine's HTTP API
  (bluelink's `apps/deploy-engine`) as it's being developed, ahead of its releases: it already
  covers the unreleased audit and housekeeping routes. An engine API change updates the spec
  and the generated pages here.
- **URLs:** both CLIs link to the site root; deep links come from bluelink and Celerity READMEs,
  Go and Rust doc comments, the Windows installer and the registry API's README. Nothing can
  redirect (static export on GitHub Pages), so moving a page breaks its inbound links unless a
  stub page stays at the old path. Several of those inbound links are already broken.
- **Grammar:** `grammars/` is a copy of bluelink-vscode's `syntaxes/blueprintlang.tmLanguage.json`,
  updated by hand when the grammar changes. The registry app vendors this repo's copy, so update
  it there too.
- **Persisted state:** none.

## Conventions

- Commits: plain lowercase imperative subjects without a conventional-commit type (`update cli
  reference to reflect latest changes`); nothing checks them, and there are no releases.
- Sections aren't versioned yet. When one is, its versions become folders listed newest first
  in its `meta.json` ([README.md](README.md)).

## Safety

- **A push to `main` deploys.** `deploy.yml` builds the site, syncs the Algolia index and
  publishes to GitHub Pages at bluelink.dev, and nothing checks a pull request first, so run
  the checks above before a change reaches `main`.
- Don't run `yarn build` or `yarn sync-content` with Algolia credentials in `.env` unless asked:
  they overwrite the production search index.

## Known mistakes

<!-- One line per mistake an agent has made here, phrased as the rule that prevents it. -->
