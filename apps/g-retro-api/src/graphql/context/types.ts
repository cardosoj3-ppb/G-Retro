import type { BoardService, UserService } from '../../services';

export type MyContext = {
  userService: UserService;
  boardService: BoardService;
};
