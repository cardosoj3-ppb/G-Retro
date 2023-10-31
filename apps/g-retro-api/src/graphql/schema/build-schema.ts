import { join } from 'path';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import type { GraphQLSchema } from 'graphql';

export function buildSchema(): GraphQLSchema {
  const localSchema = loadSchemaSync(join(__dirname, '../../modules/**/*.graphql'), {
    loaders: [new GraphQLFileLoader()],
  });

  return localSchema;
}
