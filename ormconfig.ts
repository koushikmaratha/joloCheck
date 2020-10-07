import { entityList } from '@jolocom/sdk-storage-typeorm'
import { ConnectionOptions } from 'typeorm'

// TODO Add migrations when you create any!
const migrations: any[] = []

export default {
  type: 'react-native',
  database: 'MyApplicationData',
  location: 'default',
  logging: ['error', 'warn', 'schema'],
  entities: entityList,
  migrations,
  migrationsRun: true,
  synchronize: false,
  cli: {
    migrationsDir: 'src/migrations',
  },
} as ConnectionOptions