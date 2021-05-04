import { HttpRequest, HttpResponse } from '@/adapters/presentation/http'

export interface Controller {
  handler(request?: HttpRequest): Promise<HttpResponse>
}
