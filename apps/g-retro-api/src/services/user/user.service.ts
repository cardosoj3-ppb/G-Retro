import DataLoader from 'dataloader';
import { type EntityManager, In } from 'typeorm';

import { UserEntity } from '../../entity';

export class UserService {
  private userByIdLoader: DataLoader<string, UserEntity | null, string>;
  private userByEmailLoader: DataLoader<string, UserEntity | null, string>;
  private userByTokenLoader: DataLoader<string, UserEntity | null, string>;

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

    this.userByTokenLoader = new DataLoader(async (tokenList: readonly string[]) => {
      const users = await this.entityManager.find(UserEntity, {
        where: {
          token: In(tokenList),
        },
      });

      const usersMap = users.reduce<Record<string, UserEntity>>((map, user) => {
        if (user.token) {
          map[user.token] = user;
        }

        return map;
      }, {});

      return tokenList.map(token => {
        const user = usersMap[token];

        if (user instanceof UserEntity) {
          this.userByIdLoader.prime(user.id, user);
          this.userByEmailLoader.prime(user.email, user);
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

  public async getUserByToken(userEmail: string): Promise<UserEntity | Error> {
    const user = await this.userByTokenLoader.load(userEmail);

    return user ? user : new Error(`User with Token: ${userEmail} not found.`);
  }
}
