import type { GQLMessageResolvers, GQLQueryResolvers } from '@gql-types';

export const Message: GQLMessageResolvers = {
  id: ({ id }) => {
    return id;
  },
  text: ({ text }) => {
    return text;
  },
  user: ({ user }) => {
    return user;
  },
  board: ({ board }) => {
    return board;
  },
  section: ({ section }) => {
    return section;
  },
  creationDate: ({ creationDate }) => {
    return creationDate;
  },
};

export const Query: GQLQueryResolvers = {
  message: () => {
    return {
      id: '1',
      text: 'Some text2',
      user: 1,
      board: 1,
      section: 1,
      creationDate: new Date(),
    };
  },
};
