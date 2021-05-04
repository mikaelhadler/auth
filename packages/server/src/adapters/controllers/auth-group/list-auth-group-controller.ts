import { ListAuthGroupRepository } from '@/use-case/auth-group/protocols/list-auth-group-repository'
import { HttpRequest, HttpResponse } from '../../presentation/http'
import { Controller } from '../protocols/controller'

export class ListAuthGroupController implements Controller {
  constructor (private readonly authGroup: ListAuthGroupRepository) {}

  async handler (request?: HttpRequest): Promise<HttpResponse> {
    try {
      const response = await this.authGroup.list()
      return HttpResponse.ok(response)
    } catch (error) {
      return HttpResponse.serverError(error)
    }
  }
}
