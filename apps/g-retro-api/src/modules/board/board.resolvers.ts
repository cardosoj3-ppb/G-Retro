import type { GQLBoardResolvers, GQLQueryResolvers } from '@gql-types';

export const Board: GQLBoardResolvers = {
  id: () => {
    return '1';
  },
  title: () => {
    return 'Board1';
  },
  creationDate: () => {
    return new Date();
  },
};

export const Query: GQLQueryResolvers = {
  board: () => {
    return {
      id: '1',
      title: 'Board',
      creationDate: new Date(),
    };
  },
};
