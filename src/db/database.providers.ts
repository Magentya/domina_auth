import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { User } from './models/user.entity';
import { Task } from './models/task.entity';
import env from '../env';

export const databaseOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: env.bd_host,
  port: 5432,
  username: env.bd_user,
  password: env.bd_pass,
  database: env.bd_name,
  synchronize: true,
  entities: [User, Task],
};

/* docker run --name DOMINA -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=developer -d -p 5432:5432 postgres */
