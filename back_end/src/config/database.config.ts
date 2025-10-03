import { DataSourceOptions } from 'typeorm';
import { User } from '../entities/user.entity';

export const databaseConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',          // your PostgreSQL host
  port: 5432,                 // default PostgreSQL port
  username: 'postgres',       // your DB username
  password: 'postgres123',       // your DB password
  database: 'project1',       // the database name you want
  entities: [User],           // all your entities
  migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
  synchronize: false,         // always false for migrations
};
