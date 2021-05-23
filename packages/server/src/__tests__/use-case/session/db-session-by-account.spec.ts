import {
  AuthenticationByAccountRepository,
  SessionListByAuthenticationRepository
} from '@auth/use-case'

import { DbSessionByAccount } from '@/use-case/session/db-session-by-account'
import {
  makeAuthenticationByAccountStub,
  mockedAuthentication
} from '../stubs/authentications'
import {
  makeSessionListByAccountRepositoryStub,
  mockedReturnGetSessionListRepository
} from '../stubs/sessions'

describe('SessionByAccount', () => {
  it('should call get authentication with account_id', async () => {
    const functionName = 'getByAccountId'
    const accountId = '1a-1a-1a-1a'
    const { sut, authenticationByAccountStub } = makeSut()
    const spy = jest.spyOn(authenticationByAccountStub, functionName)
    await sut.getByAccountId(accountId)
    expect(spy).toHaveBeenCalledWith(accountId)
  })
  it('should throw if getAuthenticationByAccount throws', async () => {
    const functionName = 'getByAccountId'
    const expectedThrow = new Error('any_get_authentication_by_account')
    const accountId = '1a-1a-1a-1a'
    const { sut, authenticationByAccountStub } = makeSut()
    jest
      .spyOn(authenticationByAccountStub, functionName)
      .mockReturnValueOnce(Promise.reject(expectedThrow))
    const promise = sut.getByAccountId(accountId)
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should throw account not found if getAuthenticationByAccount return null or empty', async () => {
    const functionName = 'getByAccountId'
    const expectedThrow = new Error('account not found')
    const accountId = '1a-1a-1a-1a'
    const { sut, authenticationByAccountStub } = makeSut()
    jest
      .spyOn(authenticationByAccountStub, functionName)
      .mockReturnValueOnce(Promise.resolve(null))
    const promise = sut.getByAccountId(accountId)
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should call get sessions active with authentication_id', async () => {
    const functionName = 'getSessionsByAuthenticationId'
    const accountId = '1a-1a-1a-1a'
    const expectedCalled = mockedAuthentication.id
    const { sut, sessionListByAuthenticationStub } = makeSut()
    const spy = jest.spyOn(sessionListByAuthenticationStub, functionName)
    await sut.getByAccountId(accountId)
    expect(spy).toHaveBeenCalledWith(expectedCalled)
  })
  it('should throw if getSessionsByAuthenticationId throws', async () => {
    const functionName = 'getSessionsByAuthenticationId'
    const expectedThrow = new Error('any_get_authentication_by_account')
    const accountId = '1a-1a-1a-1a'
    const { sut, sessionListByAuthenticationStub } = makeSut()
    jest
      .spyOn(sessionListByAuthenticationStub, functionName)
      .mockReturnValueOnce(Promise.reject(expectedThrow))
    const promise = sut.getByAccountId(accountId)
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should return all sessions that belong to him', async () => {
    const accountId = '1a-1a-1a-1a'
    const expectedReturn = mockedReturnGetSessionListRepository
    const { sut } = makeSut()
    const response = await sut.getByAccountId(accountId)
    expect(response).toEqual(expectedReturn)
  })
})

type SutTypes = {
  sut: DbSessionByAccount
  authenticationByAccountStub: AuthenticationByAccountRepository
  sessionListByAuthenticationStub: SessionListByAuthenticationRepository
}

function makeSut(): SutTypes {
  const authenticationByAccountStub = makeAuthenticationByAccountStub()
  const sessionListByAuthenticationStub =
    makeSessionListByAccountRepositoryStub()
  const sut = new DbSessionByAccount(
    authenticationByAccountStub,
    sessionListByAuthenticationStub
  )

  return {
    sut,
    authenticationByAccountStub,
    sessionListByAuthenticationStub
  }
}
