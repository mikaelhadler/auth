import { AuthGroup } from '@/../../shared/entity'
import { ListAuthGroupController } from '@/adapters/controllers/auth-group/list-auth-group-controller'
import { HttpResponse } from '@/adapters/presentation/http'
import { ListAuthGroupRepository } from '@/use-case/auth-group/protocols/list-auth-group-repository'
import { mockedAuthGroupList } from '@/__tests__/use-case/stubs/auth-group'

describe('ListAuthGroupController', () => {
  it('should call listAuthGroupRepository', async () => {
    const { sut, listAuthGroupRepositoryStub } = makeSut()
    const functionName = 'list'
    const functionSpy = jest.spyOn(listAuthGroupRepositoryStub, functionName)
    await sut.handler()
    expect(functionSpy).toHaveBeenCalled()
  })
  it('should return HttpResponse.serverError with listAuthGroupRepository throws', async () => {
    const { sut, listAuthGroupRepositoryStub } = makeSut()
    const functionName = 'list'
    const expectedThrow = new Error('any_repository_error')
    jest.spyOn(listAuthGroupRepositoryStub, functionName).mockReturnValueOnce(Promise.reject(expectedThrow))
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
  listAuthGroupRepositoryStub: ListAuthGroupRepository
}

function makeSut (): SutTypes {
  const listAuthGroupRepositoryStub = makeListAuthGroupRepositoryStub()
  const sut = new ListAuthGroupController(listAuthGroupRepositoryStub)
  return {
    sut,
    listAuthGroupRepositoryStub
  }
}

function makeListAuthGroupRepositoryStub (): ListAuthGroupRepository {
  class ListAuthGroupRepositoryStub implements ListAuthGroupRepository {
    async list (): Promise<AuthGroup[]> {
      return mockedAuthGroupList
    }
  }
  return new ListAuthGroupRepositoryStub()
}
