import type { MyContext } from './types.js';
import type { ContextFunction } from '@apollo/server';
import type { ExpressContextFunctionArgument } from '@apollo/server/express4';

export const buildContext = (): ContextFunction<Array<ExpressContextFunctionArgument>, MyContext> => {
  return async (): Promise<MyContext> => {
    return {};
  };
};
