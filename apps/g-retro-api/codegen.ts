import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/modules/**/*.graphql',
  generates: {
    './src/generated/graphql-types.ts': {
      plugins: ['typescript', 'typescript-resolvers', 'typescript-operations'],
      config: {
        enumsAsTypes: true,
        makeResolverTypeCallable: true,
        useTypeImports: true,
        contextType: '../graphql/context/types#MyContext',
        maybeValue: 'T | null | undefined',
        typesPrefix: 'GQL',
      },
    },
  },
};

export default config;
