import { BoardService, SectionService, UserService, MessageService } from '../../services';

import type { MyContext } from './types.js';
import type { ContextFunction } from '@apollo/server';
import type { ExpressContextFunctionArgument } from '@apollo/server/express4';
import type { EntityManager } from 'typeorm';

export const buildContext = (
  entityManager: EntityManager,
): ContextFunction<Array<ExpressContextFunctionArgument>, MyContext> => {
  return async (): Promise<MyContext> => {
    const userService = new UserService(entityManager);
    const boardService = new BoardService(entityManager);
    const sectionService = new SectionService(entityManager);
    const messageService = new MessageService(entityManager);

    return {
      userService,
      boardService,
      sectionService,
      messageService,
    };
  };
};
