import * as dotenv from 'dotenv';

import type { ServerConfig } from './type';

export function buildServerConfig(): ServerConfig {
  dotenv.config();

  if (!process.env['DATABASE_HOST']) {
    throw new Error('Error: Database host not defiend in enviroment.');
  }

  if (!process.env['DATABASE_PORT']) {
    throw new Error('Error: Database port not defiend in enviroment.');
  }

  if (!process.env['DATABASE_USERNAME']) {
    throw new Error('Error: Database username not defiend in enviroment.');
  }

  if (!process.env['DATABASE_PASSWORD']) {
    throw new Error('Error: Database password not defiend in enviroment.');
  }

  if (!process.env['DATABASE_NAME']) {
    throw new Error('Error: Database name not defiend in enviroment.');
  }

  const databaseHost = process.env['DATABASE_HOST'];
  const databasePort = Number(process.env['DATABASE_PORT']);
  const databaseUsername = process.env['DATABASE_USERNAME'];
  const databasePassword = process.env['DATABASE_PASSWORD'];
  const databaseName = process.env['DATABASE_NAME'];

  return {
    databaseHost,
    databasePort,
    databaseUsername,
    databasePassword,
    databaseName,
  };
}
