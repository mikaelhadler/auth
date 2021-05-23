import { DbAccountById } from '@/use-case/account/db-account-by-id'
import { GetAccountByIdRepository } from '@auth/use-case'
import {
  makeGetAccountByIdRepositoryStub,
  mockedAccount
} from '../stubs/account'

describe('DbAccountById', () => {
  it('should call GetAccountsByIdRepository with correct values', async () => {
    const { sut, accountByIdStub } = makeSut()
    const functionName = 'getAccountById'
    const accountId = '1a-1a-1a-1a'
    const spy = jest.spyOn(accountByIdStub, functionName)
    await sut.getById(accountId)
    expect(spy).toHaveBeenCalledWith(accountId)
  })
  it('should throw if GetAccountsByIdRepository throws', async () => {
    const { sut, accountByIdStub } = makeSut()
    const functionName = 'getAccountById'
    const accountId = '1a-1a-1a-1a'
    const expectedThrow = new Error('any_repo_error')
    jest
      .spyOn(accountByIdStub, functionName)
      .mockReturnValueOnce(Promise.reject(expectedThrow))
    const promise = sut.getById(accountId)
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should return account on success', async () => {
    const { sut } = makeSut()
    const accountId = '1a-1a-1a-1a'
    const response = await sut.getById(accountId)
    expect(response).toEqual(mockedAccount)
  })
})

type SutTypes = {
  sut: DbAccountById
  accountByIdStub: GetAccountByIdRepository
}

function makeSut(): SutTypes {
  const accountByIdStub = makeGetAccountByIdRepositoryStub()
  const sut = new DbAccountById(accountByIdStub)

  return {
    sut,
    accountByIdStub
  }
}
