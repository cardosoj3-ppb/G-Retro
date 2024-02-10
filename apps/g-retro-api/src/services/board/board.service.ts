import DataLoader from 'dataloader';
import { type EntityManager, In } from 'typeorm';

import { BoardEntity } from '../../entity';

export class BoardService {
  private boardByIdLoader: DataLoader<string, BoardEntity | null, string>;
  private boardByTitleLoader: DataLoader<string, BoardEntity | null, string>;

  constructor(private entityManager: EntityManager) {
    this.boardByIdLoader = new DataLoader(async (idList: readonly string[]) => {
      const boards = await this.entityManager.find(BoardEntity, {
        where: {
          id: In(idList),
        },
      });

      const boardsMap = boards.reduce<Record<string, BoardEntity>>((map, board) => {
        map[board.id] = board;

        return map;
      }, {});

      return idList.map(id => {
        const board = boardsMap[id];

        if (board instanceof BoardEntity) {
          this.boardByTitleLoader.prime(board.title, board);
        }

        return board ? board : null;
      });
    });

    this.boardByTitleLoader = new DataLoader(async (titleList: readonly string[]) => {
      const boards = await this.entityManager.find(BoardEntity, {
        where: {
          title: In(titleList),
        },
      });

      const boardsMap = boards.reduce<Record<string, BoardEntity>>((map, board) => {
        map[board.title] = board;

        return map;
      }, {});

      return titleList.map(title => {
        const board = boardsMap[title];

        if (board instanceof BoardEntity) {
          this.boardByIdLoader.prime(board.id, board);
        }

        return board ? board : null;
      });
    });
  }

  public async getBoardById(boardId: string): Promise<BoardEntity | Error> {
    const board = await this.boardByIdLoader.load(boardId);

    return board ? board : new Error(`Board with id: ${boardId} not found.`);
  }

  public async getBoardByTitle(title: string): Promise<BoardEntity | Error> {
    const board = await this.boardByTitleLoader.load(title);

    return board ? board : new Error(`Board with id: ${title} not found.`);
  }
}
