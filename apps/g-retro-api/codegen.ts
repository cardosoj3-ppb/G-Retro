import type { CodegenConfig } from '@graphql-codegen/cli';

const header = '/* eslint-disable */';

const typesContent = `
/**
 * The ResolverTypeWrapperPicked, in conjunction with resolverTypeWrapperSignature in config, will override the resolvers' return type.
 * This forces resolvers that return addressable entities to return their IDs only.
 * This works recursively to support relay relationships (connection - edge - node pattern).
 */
export type ResolverTypeWrapperPicked<T> = T extends NonNullable<T>
	? 'id' extends keyof NonNullable<T>
		? Pick<NonNullable<T>, 'id'>
		: { [K in keyof T]: ResolverTypeWrapperPicked<NonNullable<T>[K]> }
	: null | undefined;

/**
 * The ResolverTypeParentWrapperPicked is similar to the one above, but instead of the return type of resolvers, it Picks the id from the parent param from the resolvers.
 */
export type ResolverTypeParentWrapperPicked<T> = 'id' extends keyof T ? Pick<T, 'id'> : T;
`;

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
        {
          add: {
            placement: 'content',
            content: typesContent,
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
        resolverTypeWrapperSignature: 'ResolverTypeWrapperPicked<T>',
        customResolverFn:
          '(parent: ResolverTypeParentWrapperPicked<TParent>, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise < TResult > | TResult',
        typesPrefix: 'GQL',
        scalars: {
          DateTime: 'Date',
        },
      },
    },
  },
};

export default config;
