import { Router } from 'express'

import { adaptRouter } from '../adapters/express-router-adapter'
import { listAuthGroupControllerFactory } from '../factory/auth-group-factory'

export default (router: Router): void => {
  router.get('/auth-groups', adaptRouter(listAuthGroupControllerFactory()))
}
