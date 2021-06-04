import { HttpRequest, HttpResponse } from "../../presentation/protocols/http"
import { Controller } from "../../presentation/protocols/controller"
import { RemoveAuthGroup } from "@auth/entity"

export class RemoveAuthGroupController implements Controller {
  constructor(private readonly authGroup: RemoveAuthGroup) {}

  async handler(request?: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = request.params
      if (!id) {
        return HttpResponse.badRequest(new Error("Id not provided!"))
      }
      const response = await this.authGroup.remove(id)
      return HttpResponse.ok(response)
    } catch (error) {
      return HttpResponse.serverError(error)
    }
  }
}
