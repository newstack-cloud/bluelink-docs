import { generateFiles } from "fumadocs-openapi";
import { createOpenAPI } from "fumadocs-openapi/server";

const openapi = createOpenAPI({
  input: ["./api-docs/deploy-engine-v1.yaml"],
});

void generateFiles({
  input: openapi,
  output: "./content/docs/deploy-engine/http-api-reference/v1",
  // we recommend to enable it
  // make sure your endpoint description doesn't break MDX syntax.
  includeDescription: true,
});
