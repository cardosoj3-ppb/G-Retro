import type { GQLUserResolvers, GQLQueryResolvers } from '@gql-types';

export const User: GQLUserResolvers = {
  id: () => {
    return '1';
  },
  email: () => {
    return 'efejfj@gmail.com';
  },
  firstName: () => {
    return 'Smtg';
  },
  lastName: () => {
    return 'lAST';
  },
  token: () => {
    return 'efeirgerge23';
  },
  creationDate: () => {
    return new Date();
  },
};

export const Query: GQLQueryResolvers = {
  user: () => {
    return {
      id: '1',
      firstName: 'smtg',
      lastName: 'ad',
      email: 'email',
      creationDate: new Date(),
    };
  },
};