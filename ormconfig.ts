import { DataSource } from 'typeorm'
import { dbConfig } from './src/orm/db-config'

export const AppDataSource = new DataSource(dbConfig)
