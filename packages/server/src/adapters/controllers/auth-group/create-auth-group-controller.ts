import { HttpRequest, HttpResponse } from '../../presentation/protocols/http'
import { Controller } from '../../presentation/protocols/controller'
import { AuthGroupModel, CreateAuthGroup } from '@auth/entity'

export class CreateAuthGroupController implements Controller {
  constructor(private readonly authGroup: CreateAuthGroup) {}

  async handler(request?: HttpRequest): Promise<HttpResponse> {
    try {
      const authGroup = new AuthGroupModel(request.body)

      const response = await this.authGroup.create(authGroup)
      return HttpResponse.ok(response)
    } catch (error) {
      return HttpResponse.serverError(error)
    }
  }
}
