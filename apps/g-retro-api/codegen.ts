import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './src/graphql/schema',
  documents: './src/**/*.ts',
  generates: {
    './bin/graphql': {
      preset: 'client',
      plugins: [],
    },
    './bin/graphql/schema/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
