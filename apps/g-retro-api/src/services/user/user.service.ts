import { UserEntity } from '../../entity';

import type { EntityManager } from 'typeorm';

export class UserService {
  constructor(private entityManager: EntityManager) {}

  public async getUserById(userId: string): Promise<UserEntity | Error> {
    const user = await this.entityManager.findOneBy(UserEntity, {
      id: userId,
    });

    return user ? user : new Error(`User with id: ${userId} not found.`);
  }
}
