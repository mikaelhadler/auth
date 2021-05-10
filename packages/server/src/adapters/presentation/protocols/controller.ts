import { HttpRequest, HttpResponse } from '@/adapters/presentation/protocols/http'

export interface Controller {
  handler(request?: HttpRequest): Promise<HttpResponse>
}
