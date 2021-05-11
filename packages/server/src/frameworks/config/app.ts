import express from 'express'

import { routes as setupRoutes } from './routes'
import { middlewares as setupMiddlewares } from './middlewares'

export const app = express()

setupMiddlewares(app)
setupRoutes(app)
