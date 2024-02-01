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
  userById: async (_, { id }) => {
    return {
      id: id,
    };
  },
  userByEmail: async (_, { email }, { userService }) => {
    const user = await userService.getUserByEmail(email);

    if (user instanceof Error) {
      throw user;
    }

    return {
      id: user.id,
    };
  },
  userByToken: async (_, { token }, { userService }) => {
    const user = await userService.getUserByToken(token);

    if (user instanceof Error) {
      throw user;
    }

    return {
      id: user.id,
    };
  },
};
