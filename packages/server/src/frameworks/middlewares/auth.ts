import { adaptMiddleware } from "../adapters/express-middleware-adapter";
import { makeAuthMiddeware } from "../factores/middlewares/auth-middleware-factory";

export const auth = adaptMiddleware(makeAuthMiddeware());
