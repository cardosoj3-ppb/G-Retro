import type { EntityManager } from 'typeorm';

export type MyContext = {
  entityManager: EntityManager;
};
