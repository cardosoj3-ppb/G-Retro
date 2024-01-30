import DataLoader from 'dataloader';
import { type EntityManager, In } from 'typeorm';

import { UserEntity } from '../../entity';

export class UserService {
  private userByIdLoader: DataLoader<string, UserEntity | null, string>;

  constructor(private entityManager: EntityManager) {
    this.userByIdLoader = new DataLoader(async (idList: readonly string[]) => {
      const users = await this.entityManager.find(UserEntity, {
        where: {
          id: In(idList),
        },
      });

      const usersMap = users.reduce<Record<string, UserEntity>>((map, user) => {
        map[user.id] = user;

        return map;
      }, {});

      return idList.map(id => {
        const user = usersMap[id];

        return user ? user : null;
      });
    });
  }

  public async getUserById(userId: string): Promise<UserEntity | Error> {
    const user = await this.userByIdLoader.load(userId);

    return user ? user : new Error(`User with id: ${userId} not found.`);
  }
}
