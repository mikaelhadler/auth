import { DbListActivityLogByAccount } from '@/use-case/activity-log/db-list-activity-log-by-account'
import { ListActivityLogByAccountRepository } from '@/use-case/activity-log/protocols/list-activity-log-by-account-repository'
import { mockedActivityLogList } from '@/__tests__/entity/mock/activity-log'
import { makeListActivityLogByAccountRepositoryStub } from '../stubs/activity-log'

describe('DbListActivityLogByAccount', () => {
  it('should call listActivityLogByAccountRepository with correct values', async () => {
    const { sut, listActivityLogByAccountStub } = makeSut()
    const functionName = 'listByAccountId'
    const accountId = 'a1-a1-a1-a1'
    const spy = jest.spyOn(listActivityLogByAccountStub, functionName)
    await sut.listByAccountId(accountId)
    expect(spy).toHaveBeenCalledWith(accountId)
  })
  it('should throw if listActivityLogByAccountRepository throw', async () => {
    const { sut, listActivityLogByAccountStub } = makeSut()
    const functionName = 'listByAccountId'
    const accountId = 'a1-a1-a1-a1'
    const expectedThrow = new Error('any-list-activity-repo-error')
    jest.spyOn(listActivityLogByAccountStub, functionName).mockReturnValueOnce(Promise.reject(expectedThrow))
    const promise = sut.listByAccountId(accountId)
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should return a list of activity logs for account', async () => {
    const { sut } = makeSut()
    const accountId = 'a1-a1-a1-a1'
    const expectedReturn = mockedActivityLogList
    const response = await sut.listByAccountId(accountId)
    expect(response).toEqual(expectedReturn)
  })
})

type SutTypes = {
  sut: DbListActivityLogByAccount,
  listActivityLogByAccountStub: ListActivityLogByAccountRepository
}

function makeSut (): SutTypes {
  const listActivityLogByAccountStub = makeListActivityLogByAccountRepositoryStub()
  const sut = new DbListActivityLogByAccount(listActivityLogByAccountStub)

  return {
    sut,
    listActivityLogByAccountStub
  }
}
