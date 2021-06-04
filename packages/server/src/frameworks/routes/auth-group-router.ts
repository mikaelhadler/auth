import { Router } from "express"

import { adaptRouter } from "../adapters/express-router-adapter"
import {
  listAuthGroupControllerFactory,
  createAuthGroupControllerFactory,
  removeAuthGroupControllerFactory
} from "../factory/auth-group-factory"

export default (router: Router): void => {
  router.get("/auth-groups", adaptRouter(listAuthGroupControllerFactory()))
  router.post("/auth-groups", adaptRouter(createAuthGroupControllerFactory()))
  router.delete(
    "/auth-groups/:id",
    adaptRouter(removeAuthGroupControllerFactory())
  )
}
