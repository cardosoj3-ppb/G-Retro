import { join } from 'node:path';

import { DataSource, type EntityManager } from 'typeorm';

import type { ServerConfig } from '../server-config';

export async function buildDatabaseConnection(serverConfig: ServerConfig): Promise<EntityManager> {
  const appDataSource = new DataSource({
    type: 'postgres',
    host: serverConfig.databaseHost,
    port: serverConfig.databasePort,
    username: serverConfig.databaseUsername,
    password: serverConfig.databasePassword,
    database: serverConfig.databaseName,
    // entities: ['../../entity/**/*{.js,.ts}'],
    entities: [join(__dirname, '../../entity/**/*.entity{.ts,.js}')],
    synchronize: false,
    logging: true,
  });

  try {
    const dataSource = await appDataSource.initialize();
    console.log('Data Source has been initialized!');

    return dataSource.manager;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Error during Data Source initialization', error);
    }

    throw new Error('Error during Data Source initialization');
  }
}
