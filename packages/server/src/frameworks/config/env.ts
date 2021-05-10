let DB_NAME, DB_HOST
const NODE_ENV = process.env.NODE_ENV ?? 'development'

if (NODE_ENV === 'production') { DB_NAME = 'clean_node_api' } else if (NODE_ENV === 'development') { DB_NAME = 'cna_dev' } else { DB_NAME = 'cna_test' }
if (NODE_ENV === 'test') { DB_HOST = 'localhost' } else { DB_HOST = 'postgres' }

export const env = {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://mongo:27017/clean-node-api',
  postgresUrl: process.env.DATABASE_URL ?? `postgres://postgres:postgres@${DB_HOST}:5432/${DB_NAME}`,
  port: process.env.PORT ?? 3000,
  jwtSecret: process.env.JWT_SECRET ?? 'a2611p@r19'
}
