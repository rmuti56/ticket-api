import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const env = process.env.NODE_ENV || 'production';
const dbConfig = {
  development: {
    username: 'root',
    password: 'root'
  },
  production: {
    username: 'gebtam',
    password: 'Onnetcompany@1'
  }
}
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: dbConfig[env]?.username ?? 'root',
  password: dbConfig[env]?.password ?? 'root',
  database: 'tickee_pocket',
  entities: [__dirname + '/../tickee/**/*.entity.*'],
  synchronize: true
}