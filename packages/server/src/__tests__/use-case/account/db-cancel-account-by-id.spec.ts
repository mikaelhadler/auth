import { DbCancelAccountById } from '@/use-case/account/db-cancel-account-by-id'
import { CancelAccountByIdRepository } from '@auth/use-case'
import {
  makeCancelAccountByIdRepositoryStub,
  mockedAccount
} from '../stubs/account'

describe('DbCancelAccountById', () => {
  it('should call CancelAccountsByIdRepository with correct values', async () => {
    const { sut, cancelAccountByIdStub } = makeSut()
    const functionName = 'cancel'
    const accountId = '1a-1a-1a-1a'
    const spy = jest.spyOn(cancelAccountByIdStub, functionName)
    await sut.cancel(accountId)
    expect(spy).toHaveBeenCalledWith(accountId)
  })
  it('should throw if CancelAccountsByIdRepository throws', async () => {
    const { sut, cancelAccountByIdStub } = makeSut()
    const functionName = 'cancel'
    const accountId = '1a-1a-1a-1a'
    const expectedThrow = new Error('any_repo_error')
    jest
      .spyOn(cancelAccountByIdStub, functionName)
      .mockReturnValueOnce(Promise.reject(expectedThrow))
    const promise = sut.cancel(accountId)
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should return account on success', async () => {
    const { sut } = makeSut()
    const accountId = '1a-1a-1a-1a'
    const response = await sut.cancel(accountId)
    expect(response).toEqual(mockedAccount)
  })
})

type SutTypes = {
  sut: DbCancelAccountById
  cancelAccountByIdStub: CancelAccountByIdRepository
}

function makeSut(): SutTypes {
  const cancelAccountByIdStub = makeCancelAccountByIdRepositoryStub()
  const sut = new DbCancelAccountById(cancelAccountByIdStub)

  return {
    sut,
    cancelAccountByIdStub
  }
}
