import type { GQLMessageResolvers, GQLQueryResolvers } from '@gql-types';

export const Message: GQLMessageResolvers = {
  id: async ({ id }, _, { messageService }) => {
    const message = await messageService.getMessageById(id);

    if (message instanceof Error) {
      throw message;
    }

    return message.id;
  },
  text: async ({ id }, _, { messageService }) => {
    const message = await messageService.getMessageById(id);

    if (message instanceof Error) {
      throw message;
    }

    return message.text;
  },
  user: async ({ id }, _, { messageService }) => {
    const message = await messageService.getMessageById(id);

    if (message instanceof Error) {
      throw message;
    }

    return message.user;
  },
  board: async ({ id }, _, { messageService }) => {
    const message = await messageService.getMessageById(id);

    if (message instanceof Error) {
      throw message;
    }

    return message.board;
  },
  section: async ({ id }, _, { messageService }) => {
    const message = await messageService.getMessageById(id);

    if (message instanceof Error) {
      throw message;
    }

    return message.section;
  },
  creationDate: async ({ id }, _, { messageService }) => {
    const message = await messageService.getMessageById(id);

    if (message instanceof Error) {
      throw message;
    }

    return message.creationDate;
  },
};

export const Query: GQLQueryResolvers = {
  messageById: (_, { id }) => {
    return {
      id: id,
    };
  },
};
