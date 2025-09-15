import { createOpenAPI } from 'fumadocs-openapi/server';

export const openapi = createOpenAPI({
    input: ['./api-docs/deploy-engine-v1.yaml'],
});
