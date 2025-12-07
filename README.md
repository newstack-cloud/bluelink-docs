# Bluelink Docs

The website that provides documentation along with a blog for the Bluelink project.
This contains general documentation for the high-level concepts and components of Bluelink along with versioned documentation for the libraries and applications that make up Bluelink.

This is a Next.js application generated with
[Create Fumadocs](https://github.com/fuma-nama/fumadocs).

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `lib/layout.shared.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Partial Versioning

The Celerity docs site is made up of sections for different components of the framework.

The following components are independently versioned:

- CLI
- Deploy Engine
- Blueprint Framework
- Plugin Framework

Versioning is implemented using folders as per the [fumadocs versioning documentation](https://fumadocs.dev/docs/versioning).

Each version folder should have a `meta.json` file that lists the pages for the version, with the first page being the getting started/introduction page.

The component root folder should have a `meta.json` file that lists the version folders in the `pages` directory, the ordering should be most recent version first.

For example, for a component that has 2 versions, the `meta.json` file would look like this:

```javascript
{
  // Other metadata ...
  "pages": ["v2", "v1"]
}
```

## Validating links

To validate links in the documentation, you can run the following command:

```bash
yarn check-links
```

This will look for broken or invalid links, however, it will not detect missing pages under a `[[...slug]]` route such as `docs/framework/auth/missing-page` that comes under the `docs/[[...slug]]` route.

## API Docs Generation

The Deploy Engine provides a HTTP API that is used by the CLI and other clients to interact with the Deploy Engine to validate and deploy blueprints.

To generate the API docs, you can run the following command:

```bash
yarn generate-api-docs
```

Whenever changes are made to the OpenAPI specification, you must run this command to generate the mdx pages for the API docs and commit to source control.

The source OpenAPI specification can be found in the `api-docs` directory.

## Fetching Release Data

The installation page displays download links and version information for Bluelink components. This data is fetched from GitHub releases at build time and stored in `src/data/releases.json`.

This file is not committed to version control and is generated automatically during the deploy workflow. To generate it locally for development:

```bash
yarn fetch-releases
```

This will fetch the latest releases from GitHub and write them to `src/data/releases.json`. You may need to set the `GITHUB_TOKEN` environment variable if you hit rate limits:

```bash
GITHUB_TOKEN=your_token yarn fetch-releases
```

The `yarn build` command automatically runs `fetch-releases` as part of the build process.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.vercel.app) - learn about Fumadocs
