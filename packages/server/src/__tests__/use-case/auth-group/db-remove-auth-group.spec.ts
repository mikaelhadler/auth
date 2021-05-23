import {
  AccountsByGroupRepository,
  RemoveAuthGroupRepository
} from '@auth/use-case'
import { DbRemoveAuthGroup } from '@/use-case/auth-group/db-remove-auth-group'

import {
  makeRemoveAuthGroupRepositoryStub,
  mockedAuthGroup
} from '../stubs/auth-group'
import {
  makeAccountByGroupRepositoryStub,
  mockedAccount
} from '../stubs/account'

describe('DbRemoveAuthGroup', () => {
  it('should call accountByGroupRepository with authGroupId', async () => {
    const { sut, accountByGroupRepositoryStub } = makeSut()
    const functionName = 'getAccountByGroup'
    const authGroupId = 'a1-a1-a1-a1'
    const spy = jest.spyOn(accountByGroupRepositoryStub, functionName)
    await sut.remove(authGroupId)
    expect(spy).toHaveBeenCalledWith(authGroupId)
  })
  it('should throw if accountByGroupRepository throws', async () => {
    const { sut, accountByGroupRepositoryStub } = makeSut()
    const functionName = 'getAccountByGroup'
    const authGroupId = 'a1-a1-a1-a1'
    const expectedThrow = new Error('any_accounts_by_auth_group_error')
    jest
      .spyOn(accountByGroupRepositoryStub, functionName)
      .mockReturnValueOnce(Promise.reject(expectedThrow))
    const promise = sut.remove(authGroupId)
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should throw if accountByGroupRepository return any account', async () => {
    const { sut, accountByGroupRepositoryStub } = makeSut()
    const functionName = 'getAccountByGroup'
    const authGroupId = 'a1-a1-a1-a1'
    const expectedThrow = new Error('auth group in use')
    jest
      .spyOn(accountByGroupRepositoryStub, functionName)
      .mockReturnValueOnce(Promise.resolve([mockedAccount]))

    const promise = sut.remove(authGroupId)
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should call removeAuthGroupRepository', async () => {
    const { sut, removeAuthGroupRepositoryStub } = makeSut()
    const functionName = 'remove'
    const authGroupId = 'a1-a1-a1-a1'
    const spy = jest.spyOn(removeAuthGroupRepositoryStub, functionName)
    await sut.remove(authGroupId)
    expect(spy).toHaveBeenCalledWith(authGroupId)
  })
  it('should throw if removeAuthGroupRepository throw', async () => {
    const { sut, removeAuthGroupRepositoryStub } = makeSut()
    const functionName = 'remove'
    const authGroupId = 'a1-a1-a1-a1'
    const expectedThrow = new Error('any_remove_auth_group_error')
    jest
      .spyOn(removeAuthGroupRepositoryStub, functionName)
      .mockReturnValueOnce(Promise.reject(expectedThrow))
    const promise = sut.remove(authGroupId)
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should return AuthGroup deleted on success', async () => {
    const { sut } = makeSut()
    const authGroupId = 'a1-a1-a1-a1'
    const response = await sut.remove(authGroupId)
    expect(response).toEqual(mockedAuthGroup)
  })
})

type SutTypes = {
  sut: DbRemoveAuthGroup
  accountByGroupRepositoryStub: AccountsByGroupRepository
  removeAuthGroupRepositoryStub: RemoveAuthGroupRepository
}

function makeSut(): SutTypes {
  const accountByGroupRepositoryStub = makeAccountByGroupRepositoryStub()
  const removeAuthGroupRepositoryStub = makeRemoveAuthGroupRepositoryStub()
  const sut = new DbRemoveAuthGroup(
    accountByGroupRepositoryStub,
    removeAuthGroupRepositoryStub
  )

  return {
    sut,
    accountByGroupRepositoryStub,
    removeAuthGroupRepositoryStub
  }
}
