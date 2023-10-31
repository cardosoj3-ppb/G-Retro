import { join } from 'path';

import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';
import type { IResolvers } from '@graphql-tools/utils';

export function buildResolvers(): IResolvers {
  const resolversArray = loadFilesSync(join(__dirname, '../../modules/**/*.resolvers.*'));
  const resolvers = mergeResolvers(resolversArray);

  return resolvers;
}
