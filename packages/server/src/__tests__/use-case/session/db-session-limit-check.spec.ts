import {
  AuthenticationByAccountRepository,
  SessionCountByAuthenticationRepository
} from '@auth/use-case'

import { DbSessionLimitCheckByAccount } from '@/use-case/session/db-session-limit-check'
import {
  makeAuthenticationByAccountStub,
  mockedAuthentication
} from '../stubs/authentications'
import { makeSessionCountByAuthenticationRepository } from '../stubs/sessions'

describe('DbSessionLimitCheckByAccount', () => {
  it('should call get authentication with account_id', async () => {
    const functionName = 'getByAccountId'
    const accountId = '1a-1a-1a-1a'
    const { sut, authenticationByAccountStub } = makeSut()
    const spy = jest.spyOn(authenticationByAccountStub, functionName)
    await sut.check(accountId)
    expect(spy).toHaveBeenCalledWith(accountId)
  })
  it('should throw if getAuthenticationByAccount throws', async () => {
    const accountId = '1a-1a-1a-1a'
    const functionName = 'getByAccountId'
    const expectedThrow = new Error('any_get_authentication_by_account')
    const { sut, authenticationByAccountStub } = makeSut()
    jest
      .spyOn(authenticationByAccountStub, functionName)
      .mockReturnValueOnce(Promise.reject(expectedThrow))
    const promise = sut.check(accountId)
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should throw account not found if getAuthenticationByAccount return null or empty', async () => {
    const accountId = '1a-1a-1a-1a'
    const functionName = 'getByAccountId'
    const expectedThrow = new Error('account not found')
    const { sut, authenticationByAccountStub } = makeSut()
    jest
      .spyOn(authenticationByAccountStub, functionName)
      .mockReturnValueOnce(Promise.resolve(null))
    const promise = sut.check(accountId)
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should call session count with authentication_id', async () => {
    const functionName = 'count'
    const expectedCalled = mockedAuthentication.id
    const { sut, sessionCountByAuthenticationStub } = makeSut()
    const spy = jest.spyOn(sessionCountByAuthenticationStub, functionName)
    await sut.check(expectedCalled)
    expect(spy).toHaveBeenCalledWith(expectedCalled)
  })
  it('should throw if session count throws', async () => {
    const accountId = '1a-1a-1a-1a'
    const functionName = 'count'
    const expectedThrow = new Error('any_session_count_error')
    const { sut, sessionCountByAuthenticationStub } = makeSut()
    jest
      .spyOn(sessionCountByAuthenticationStub, functionName)
      .mockReturnValueOnce(Promise.reject(expectedThrow))
    const promise = sut.check(accountId)
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should return truthy if session count greater than limit of account', async () => {
    const accountId = '1a-1a-1a-1a'
    const functionName = 'count'
    const { sut, sessionCountByAuthenticationStub } = makeSut()
    jest
      .spyOn(sessionCountByAuthenticationStub, functionName)
      .mockReturnValueOnce(
        Promise.resolve(mockedAuthentication.sessionLimit + 1)
      )
    const response = await sut.check(accountId)
    expect(response).toBeTruthy()
  })
  it('should return falsy if session count less than or equal to', async () => {
    const accountId = '1a-1a-1a-1a'
    const functionName = 'count'
    const { sut, sessionCountByAuthenticationStub } = makeSut()
    jest
      .spyOn(sessionCountByAuthenticationStub, functionName)
      .mockReturnValueOnce(Promise.resolve(mockedAuthentication.sessionLimit))
    const response = await sut.check(accountId)
    expect(response).toBeFalsy()
  })
})

type SutTypes = {
  sut: DbSessionLimitCheckByAccount
  authenticationByAccountStub: AuthenticationByAccountRepository
  sessionCountByAuthenticationStub: SessionCountByAuthenticationRepository
}

function makeSut(): SutTypes {
  const authenticationByAccountStub = makeAuthenticationByAccountStub()
  const sessionCountByAuthenticationStub =
    makeSessionCountByAuthenticationRepository()
  const sut = new DbSessionLimitCheckByAccount(
    authenticationByAccountStub,
    sessionCountByAuthenticationStub
  )
  return {
    sut,
    authenticationByAccountStub,
    sessionCountByAuthenticationStub
  }
}
