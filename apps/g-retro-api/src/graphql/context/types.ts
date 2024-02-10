import type { BoardService, UserService, SectionService, MessageService } from '../../services';

export type MyContext = {
  userService: UserService;
  sectionService: SectionService;
  boardService: BoardService;
  messageService: MessageService;
};
