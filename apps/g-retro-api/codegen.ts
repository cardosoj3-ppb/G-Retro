import type { CodegenConfig } from '@graphql-codegen/cli';

const header = '/* eslint-disable */';

const config: CodegenConfig = {
  schema: './src/modules/**/*.graphql',
  generates: {
    './src/generated/graphql-types.ts': {
      plugins: [
        {
          add: {
            content: header.trimStart(),
          },
        },
        'typescript',
        'typescript-resolvers',
        'typescript-operations',
      ],
      config: {
        enumsAsTypes: true,
        makeResolverTypeCallable: true,
        useTypeImports: true,
        contextType: '../graphql/context/types#MyContext',
        maybeValue: 'T | null | undefined',
        typesPrefix: 'GQL',
        scalars: {
          DateTime: 'Date',
        },
      },
    },
  },
};

export default config;
