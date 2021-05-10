import express from 'express'

import { routes as setupRoutes } from './routes'

export const app = express()

setupRoutes(app)
