import { DbListActivityLog } from '@/use-case/activity-log/db-list-activity-log'
import { ListActivityLogRepository } from '@auth/use-case'
import { mockedActivityLogList } from '@/__tests__/entity/mock/activity-log'
import { makeListActivityLogRepositoryStub } from '../stubs/activity-log'

describe('DbListActivityLog', () => {
  it('should call listActivityLogRepository with correct values', async () => {
    const { sut, listActivityLogStub } = makeSut()
    const functionName = 'listAll'
    const spy = jest.spyOn(listActivityLogStub, functionName)
    await sut.listAll()
    expect(spy).toHaveBeenCalled()
  })
  it('should throw if listActivityLogRepository throw', async () => {
    const { sut, listActivityLogStub } = makeSut()
    const functionName = 'listAll'
    const expectedThrow = new Error('any-list-activity-repo-error')
    jest
      .spyOn(listActivityLogStub, functionName)
      .mockReturnValueOnce(Promise.reject(expectedThrow))
    const promise = sut.listAll()
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should return a list of activity logs for account', async () => {
    const { sut } = makeSut()
    const expectedReturn = mockedActivityLogList
    const response = await sut.listAll()
    expect(response).toEqual(expectedReturn)
  })
})

type SutTypes = {
  sut: DbListActivityLog
  listActivityLogStub: ListActivityLogRepository
}

function makeSut(): SutTypes {
  const listActivityLogStub = makeListActivityLogRepositoryStub()
  const sut = new DbListActivityLog(listActivityLogStub)

  return {
    sut,
    listActivityLogStub
  }
}
