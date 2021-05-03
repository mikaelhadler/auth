import { AccountModel, uuid } from '@auth/entity'
import { DbUpdateAccountById } from '@/use-case/account/db-update-account-by-id'
import { UpdateAccountByIdRepository } from '@/use-case/account/protocols/update-account-by-id-repository'
import { mockedAccount } from '../stubs/account'

describe('DbUpdateAccountById', () => {
  it('should call UpdateAccountByIdRepository with correct values', async () => {
    const { sut, updateAccountByIdStub } = makeSut()
    const functionName = 'update'
    const accountId = '1a-1a-1a-1a'
    const data = mockedAccount
    const spy = jest.spyOn(updateAccountByIdStub, functionName)
    await sut.update(accountId, data)
    expect(spy).toHaveBeenCalledWith(accountId, data)
  })
  it('should throw if UpdateAccountByIdRepository throws', async () => {
    const { sut, updateAccountByIdStub } = makeSut()
    const functionName = 'update'
    const accountId = '1a-1a-1a-1a'
    const data = mockedAccount
    const expectedThrow = new Error('any_repo_error')
    jest.spyOn(updateAccountByIdStub, functionName).mockReturnValueOnce(Promise.reject(expectedThrow))
    const promise = sut.update(accountId, data)
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should return updated account on success', async () => {
    const { sut } = makeSut()
    const accountId = '1a-1a-1a-1a'
    const data = mockedAccount
    const response = await sut.update(accountId, data)
    expect(response).toEqual(mockedAccount)
  })
})

type SutTypes = {
  sut: DbUpdateAccountById,
  updateAccountByIdStub: UpdateAccountByIdRepository
}

function makeSut (): SutTypes {
  const updateAccountByIdStub = makeUpdateAccountByIdRepositoryStub()
  const sut = new DbUpdateAccountById(updateAccountByIdStub)

  return {
    sut,
    updateAccountByIdStub
  }
}

function makeUpdateAccountByIdRepositoryStub (): UpdateAccountByIdRepository {
  class UpdateAccountByIdRepositoryStub implements UpdateAccountByIdRepository {
    async update (accountId: uuid, data: Partial<AccountModel>): Promise<AccountModel> {
      return mockedAccount
    }
  }
  return new UpdateAccountByIdRepositoryStub()
}
