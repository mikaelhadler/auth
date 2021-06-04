import { ServerError, UnauthorizedError } from "../errors"

export interface HttpRequest {
  queryString?: string
  body?: any
  headers?: any
  params?: any
  accountId?: string
}

export class HttpResponse {
  constructor(
    readonly statusCode: number,
    readonly body: unknown,
    readonly error?: Error
  ) {}

  static ok(body: unknown): HttpResponse {
    return new HttpResponse(200, body)
  }

  static serverError(error: Error): HttpResponse {
    return new HttpResponse(500, null, new ServerError(error.stack))
  }

  static badRequest(error: Error): HttpResponse {
    return new HttpResponse(400, null, error)
  }

  static forbidden(error: Error): HttpResponse {
    return new HttpResponse(403, null, error)
  }

  static unauthorized(): HttpResponse {
    return new HttpResponse(401, null, new UnauthorizedError())
  }

  static noContent(): HttpResponse {
    return new HttpResponse(204, null)
  }
}
