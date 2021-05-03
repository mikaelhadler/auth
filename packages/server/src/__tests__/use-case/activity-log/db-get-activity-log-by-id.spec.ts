import { DbGetActivityLogById } from '@/use-case/activity-log/db-get-activity-log-by-id'
import { GetActivityLogByIdRepository } from '@/use-case/activity-log/protocols/get-activity-log-by-id-repository'
import { mockedActivityLog } from '@/__tests__/entity/mock/activity-log'
import { makeGetActivityLogByIdRepositoryStub } from '../stubs/activity-log'

describe('DbGetActivityLogById', () => {
  it('should call getActivityLogByIdRepository with correct values', async () => {
    const { sut, getActivityLogByIdStub } = makeSut()
    const functionName = 'getById'
    const accountId = 'a1-a1-a1-a1'
    const spy = jest.spyOn(getActivityLogByIdStub, functionName)
    await sut.getById(accountId)
    expect(spy).toHaveBeenCalledWith(accountId)
  })
  it('should throw if getActivityLogByIdRepository throw', async () => {
    const { sut, getActivityLogByIdStub } = makeSut()
    const functionName = 'getById'
    const accountId = 'a1-a1-a1-a1'
    const expectedThrow = new Error('any-list-activity-repo-error')
    jest.spyOn(getActivityLogByIdStub, functionName).mockReturnValueOnce(Promise.reject(expectedThrow))
    const promise = sut.getById(accountId)
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should return a list of activity logs for account', async () => {
    const { sut } = makeSut()
    const accountId = 'a1-a1-a1-a1'
    const expectedReturn = mockedActivityLog
    const response = await sut.getById(accountId)
    expect(response).toEqual(expectedReturn)
  })
})

type SutTypes = {
  sut: DbGetActivityLogById,
  getActivityLogByIdStub: GetActivityLogByIdRepository
}

function makeSut (): SutTypes {
  const getActivityLogByIdStub = makeGetActivityLogByIdRepositoryStub()
  const sut = new DbGetActivityLogById(getActivityLogByIdStub)

  return {
    sut,
    getActivityLogByIdStub
  }
}
