import type { BoardService, UserService, SectionService } from '../../services';

export type MyContext = {
  userService: UserService;
  sectionService: SectionService;
  boardService: BoardService;
};
