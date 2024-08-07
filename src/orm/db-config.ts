import { join } from 'path'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from '../config'

export const dbConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  synchronize: false,
  ssl: false,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  migrationsTableName: 'migrations',
  migrations: ['dist/**/migrations/*.js']
}
