import type { GQLUserResolvers, GQLQueryResolvers } from '@gql-types';

export const User: GQLUserResolvers = {
  id: async ({ id }, _, { userService }) => {
    const user = await userService.getUserById(id);

    if (user instanceof Error) {
      throw user;
    }

    return user.id;
  },
  email: async ({ id }, _, { userService }) => {
    const user = await userService.getUserById(id);

    if (user instanceof Error) {
      throw user;
    }

    return user.email;
  },
  firstName: async ({ id }, _, { userService }) => {
    const user = await userService.getUserById(id);

    if (user instanceof Error) {
      throw user;
    }

    return user.firstName;
  },
  lastName: async ({ id }, _, { userService }) => {
    const user = await userService.getUserById(id);

    if (user instanceof Error) {
      throw user;
    }

    return user.lastName;
  },
  token: async ({ id }, _, { userService }) => {
    const user = await userService.getUserById(id);

    if (user instanceof Error) {
      throw user;
    }

    return user.token;
  },
  creationDate: async ({ id }, _, { userService }) => {
    const user = await userService.getUserById(id);

    if (user instanceof Error) {
      throw user;
    }

    return user.creationDate;
  },
};

export const Query: GQLQueryResolvers = {
  user: async (_, { id }) => {
    return {
      id: id,
    };
  },
};
