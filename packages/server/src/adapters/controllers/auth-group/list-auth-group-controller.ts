import { HttpRequest, HttpResponse } from "../../presentation/protocols/http";
import { Controller } from "../../presentation/protocols/controller";
import { ListAuthGroup } from "@auth/domain";

export class ListAuthGroupController implements Controller {
  constructor(private readonly authGroup: ListAuthGroup) {}

  async handler(request?: HttpRequest): Promise<HttpResponse> {
    try {
      const response = await this.authGroup.list();
      return HttpResponse.ok(response);
    } catch (error) {
      return HttpResponse.serverError(error);
    }
  }
}
