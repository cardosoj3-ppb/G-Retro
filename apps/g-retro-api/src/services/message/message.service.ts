import DataLoader from 'dataloader';
import { type EntityManager, In } from 'typeorm';

import { MessageEntity } from '../../entity';

export class MessageService {
  private messagedByIdLoader: DataLoader<string, MessageEntity | null, string>;

  constructor(private entityManager: EntityManager) {
    this.messagedByIdLoader = new DataLoader(async (idList: readonly string[]) => {
      const messages = await this.entityManager.find(MessageEntity, {
        relations: {
          user: true,
          board: true,
          section: true,
        },
        where: {
          id: In(idList),
        },
      });

      const messagesMap = messages.reduce<Record<string, MessageEntity>>((map, message) => {
        map[message.id] = message;

        return map;
      }, {});

      return idList.map(id => {
        const message = messagesMap[id];

        return message ? message : null;
      });
    });
  }

  public async getMessageById(messageId: string): Promise<MessageEntity | Error> {
    const message = await this.messagedByIdLoader.load(messageId);

    return message ? message : new Error(`Message with id: ${messageId} not found.`);
  }
}
