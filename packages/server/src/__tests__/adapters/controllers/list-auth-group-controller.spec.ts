import { AuthGroup, ListAuthGroup } from '@auth/entity'
import { ListAuthGroupController } from '@/adapters/controllers/auth-group/list-auth-group-controller'
import { HttpResponse } from '@/adapters/presentation/protocols/http'
import { mockedAuthGroupList } from '@/__tests__/use-case/stubs/auth-group'

describe('ListAuthGroupController', () => {
  it('should call ListAuthGroup', async () => {
    const { sut, listAuthGroupStub } = makeSut()
    const functionName = 'list'
    const functionSpy = jest.spyOn(listAuthGroupStub, functionName)
    await sut.handler()
    expect(functionSpy).toHaveBeenCalled()
  })
  it('should return HttpResponse.serverError with ListAuthGroup throws', async () => {
    const { sut, listAuthGroupStub } = makeSut()
    const functionName = 'list'
    const expectedThrow = new Error('any_repository_error')
    jest.spyOn(listAuthGroupStub, functionName).mockReturnValueOnce(Promise.reject(expectedThrow))
    const error = await sut.handler()
    expect(error).toEqual(HttpResponse.serverError(expectedThrow))
  })
  it('should return HttpResponse.Ok with list of auth groups on success', async () => {
    const { sut } = makeSut()
    const expectedResponse: AuthGroup[] = mockedAuthGroupList
    const response = await sut.handler()
    expect(response).toEqual(HttpResponse.ok(expectedResponse))
  })
})

type SutTypes = {
  sut: ListAuthGroupController,
  listAuthGroupStub: ListAuthGroup
}

function makeSut (): SutTypes {
  const listAuthGroupStub = makeListAuthGroupStub()
  const sut = new ListAuthGroupController(listAuthGroupStub)
  return {
    sut,
    listAuthGroupStub
  }
}

function makeListAuthGroupStub (): ListAuthGroup {
  class ListAuthGroupStub implements ListAuthGroup {
    async list (): Promise<AuthGroup[]> {
      return mockedAuthGroupList
    }
  }
  return new ListAuthGroupStub()
}
