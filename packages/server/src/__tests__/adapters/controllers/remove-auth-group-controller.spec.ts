import { AuthGroup, RemoveAuthGroup } from "@auth/entity"
import { RemoveAuthGroupController } from "@/adapters/controllers/auth-group/remove-auth-group-controller"
import { HttpResponse } from "@/adapters/presentation/protocols/http"
import { mockedAuthGroup } from "@/__tests__/use-case/stubs/auth-group"

describe("RemoveAuthGroupController", () => {
  it("should call RemoveAuthGroup", async () => {
    const { sut, removeAuthGroupStub } = makeSut()
    const functionName = "remove"
    const functionSpy = jest.spyOn(removeAuthGroupStub, functionName)
    const request = { params: { id: "any_auth_group_id" } }
    await sut.handler(request)
    expect(functionSpy).toHaveBeenCalled()
  })
  it("should return HttpResponse.badRequest with authGroupId not provided", async () => {
    const { sut } = makeSut()
    const expectedThrow = new Error("Id not provided!")
    const request = { params: {} }
    const error = await sut.handler(request)
    expect(error).toEqual(HttpResponse.badRequest(expectedThrow))
  })
  it("should return HttpResponse.serverError with RemoveAuthGroup throws", async () => {
    const { sut, removeAuthGroupStub } = makeSut()
    const functionName = "remove"
    const expectedThrow = new Error("any_repository_error")
    const request = { params: { id: "any_auth_group_id" } }
    jest
      .spyOn(removeAuthGroupStub, functionName)
      .mockReturnValueOnce(Promise.reject(expectedThrow))
    const error = await sut.handler(request)
    expect(error).toEqual(HttpResponse.serverError(expectedThrow))
  })
  it("should return HttpResponse.Ok with remove of auth groups on success", async () => {
    const request = { params: { id: "any_auth_group_id" } }
    const { sut } = makeSut()
    const expectedResponse: AuthGroup = mockedAuthGroup
    const response = await sut.handler(request)
    expect(response).toEqual(HttpResponse.ok(expectedResponse))
  })
})

type SutTypes = {
  sut: RemoveAuthGroupController
  removeAuthGroupStub: RemoveAuthGroup
}

function makeSut(): SutTypes {
  const removeAuthGroupStub = makeRemoveAuthGroupStub()
  const sut = new RemoveAuthGroupController(removeAuthGroupStub)
  return {
    sut,
    removeAuthGroupStub
  }
}

function makeRemoveAuthGroupStub(): RemoveAuthGroup {
  class RemoveAuthGroupStub implements RemoveAuthGroup {
    async remove(authGroupId: string): Promise<AuthGroup> {
      return mockedAuthGroup
    }
  }
  return new RemoveAuthGroupStub()
}
