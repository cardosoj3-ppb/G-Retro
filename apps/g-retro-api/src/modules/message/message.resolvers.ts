import type { GQLMessageResolvers, GQLQueryResolvers } from '@gql-types';

export const Message: GQLMessageResolvers = {
  id: () => {
    return '1';
  },
  text: () => {
    return 'Some text';
  },
  user: () => {
    return 1;
  },
  board: () => {
    return 1;
  },
  section: () => {
    return 1;
  },
  creationDate: () => {
    return new Date();
  },
};

export const Query: GQLQueryResolvers = {
  message: () => {
    return {
      id: '1',
      text: 'Some text',
      user: 1,
      board: 1,
      section: 1,
      creationDate: new Date(),
    };
  },
};
