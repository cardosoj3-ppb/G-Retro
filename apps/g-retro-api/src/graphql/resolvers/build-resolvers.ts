import { join } from 'path';

import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';
import { DateTimeResolver } from 'graphql-scalars';

import type { IResolvers } from '@graphql-tools/utils';
import type { GraphQLScalarType } from 'graphql';

const scalarsResolvers: Array<Record<string, GraphQLScalarType>> = [
  {
    DateTime: DateTimeResolver,
  },
];

export function buildResolvers(): IResolvers {
  const resolversArray = loadFilesSync(join(__dirname, '../../modules/**/*.resolvers.*'));
  const resolvers = mergeResolvers([...resolversArray, ...scalarsResolvers]);

  return resolvers;
}
