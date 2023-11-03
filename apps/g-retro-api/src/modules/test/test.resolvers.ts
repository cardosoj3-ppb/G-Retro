import type { GQLQueryResolvers } from '@gql-types';

export const Query: GQLQueryResolvers = {
  hello: () => 'Hello World',
};
