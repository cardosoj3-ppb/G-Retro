import DataLoader from 'dataloader';
import { type EntityManager, In } from 'typeorm';

import { UserEntity } from '../../entity';

export class UserService {
  private userByIdLoader: DataLoader<string, UserEntity | null, string>;
  private userByEmailLoader: DataLoader<string, UserEntity | null, string>;

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

        if (user instanceof UserEntity) {
          this.userByEmailLoader.prime(user.email, user);
        }

        return user ? user : null;
      });
    });

    this.userByEmailLoader = new DataLoader(async (emailList: readonly string[]) => {
      const users = await this.entityManager.find(UserEntity, {
        where: {
          email: In(emailList),
        },
      });

      const usersMap = users.reduce<Record<string, UserEntity>>((map, user) => {
        map[user.email] = user;

        return map;
      }, {});

      return emailList.map(email => {
        const user = usersMap[email];

        if (user instanceof UserEntity) {
          this.userByIdLoader.prime(user.id, user);
        }

        return user ? user : null;
      });
    });
  }

  public async getUserById(userId: string): Promise<UserEntity | Error> {
    const user = await this.userByIdLoader.load(userId);

    return user ? user : new Error(`User with id: ${userId} not found.`);
  }

  public async getUserByEmail(userEmail: string): Promise<UserEntity | Error> {
    const user = await this.userByEmailLoader.load(userEmail);

    return user ? user : new Error(`User with email: ${userEmail} not found.`);
  }
}
