import type { GQLMessageResolvers, GQLQueryResolvers } from '@gql-types';

export const Message: GQLMessageResolvers = {
  id: ({ id }) => {
    return id;
  },
  text: () => {
    return 'Some text2';
  },
  user: () => {
    return {
      id: '1',
    };
  },
  board: () => {
    return {
      id: '1',
    };
  },
  section: () => {
    return {
      id: '1',
    };
  },
  creationDate: () => {
    return new Date();
  },
};

export const Query: GQLQueryResolvers = {
  message: () => {
    return {
      id: '1',
    };
  },
};
