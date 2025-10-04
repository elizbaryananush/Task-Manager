import { DataSourceOptions } from 'typeorm';
import { User } from '../entities/user.entity';
import { Email } from 'src/entities/email.entity';

export const databaseConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres123',
  database: 'project1',
  entities: [User, Email],
  migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
  synchronize: false,
};
