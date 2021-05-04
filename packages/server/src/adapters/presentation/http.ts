import { Mapper } from '@auth/entity'

type queryType = Mapper
type bodyType = Mapper

export interface HttpRequest {
  queryString: string;
  query: queryType;
  body: bodyType;
}

export type bodyRequest = Mapper | string | number | boolean | Error | null | unknown

export class HttpResponse {
  constructor (private readonly statusCode: number, private readonly body: bodyRequest) {}

  static ok (body: bodyRequest): HttpResponse {
    return new HttpResponse(200, body)
  }

  static serverError (error: Error | string): HttpResponse {
    return new HttpResponse(500, error)
  }
}
