import type { GQLBoardResolvers, GQLQueryResolvers } from '@gql-types';

export const Board: GQLBoardResolvers = {
  id: async ({ id }, _, { boardService }) => {
    const board = await boardService.getBoardById(id);

    if (board instanceof Error) {
      throw board;
    }

    return board.id;
  },
  title: async ({ id }, _, { boardService }) => {
    const board = await boardService.getBoardById(id);

    if (board instanceof Error) {
      throw board;
    }

    return board.title;
  },
  creationDate: async ({ id }, _, { boardService }) => {
    const board = await boardService.getBoardById(id);

    if (board instanceof Error) {
      throw board;
    }

    return board.creationDate;
    //return new Date();
  },
};

export const Query: GQLQueryResolvers = {
  boardById: async (_, { id }) => {
    return {
      id: id,
    };
  },
  boardByTitle: async (_, { title }, { boardService }) => {
    const board = await boardService.getBoardByTitle(title);

    if (board instanceof Error) {
      throw board;
    }

    return {
      id: board.id,
    };
  },
};
