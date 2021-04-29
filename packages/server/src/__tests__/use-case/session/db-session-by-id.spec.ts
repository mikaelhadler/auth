import { SessionByIdRepository } from '@/use-case/session/protocols/session-by-id-repository'
import { DbSessionById } from '@/use-case/session/db-session-by-id'
import { makeSessionByIdRepositoryStub, mockedSession } from '../stubs/sessions'

describe('DbSessionById', () => {
  it('should call get session by id repository', async () => {
    const functionName = 'getById'
    const sessionId = '1a-1a-1a-1a'
    const { sut, sessionByIdStub } = makeSut()
    const spy = jest.spyOn(sessionByIdStub, functionName)
    await sut.getById(sessionId)
    expect(spy).toHaveBeenCalledWith(sessionId)
  })
  it('should throw if get session by id repository throws', async () => {
    const functionName = 'getById'
    const sessionId = '1a-1a-1a-1a'
    const expectedThrow = new Error('any_session_id_error')
    const { sut, sessionByIdStub } = makeSut()
    jest.spyOn(sessionByIdStub, functionName).mockReturnValueOnce(Promise.reject(expectedThrow))
    const promise = sut.getById(sessionId)
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should throw session not found if session by id return null or empty', async () => {
    const functionName = 'getById'
    const sessionId = '1a-1a-1a-1a'
    const expectedThrow = new Error('Session not found')
    const { sut, sessionByIdStub } = makeSut()
    jest.spyOn(sessionByIdStub, functionName).mockReturnValueOnce(Promise.resolve(null))
    const promise = sut.getById(sessionId)
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should return a session on success', async () => {
    const sessionId = '1a-1a-1a-1a'
    const expectedReturn = mockedSession
    const { sut } = makeSut()
    const response = await sut.getById(sessionId)
    expect(response).toEqual(expectedReturn)
  })
})

type SutTypes = {
  sut: DbSessionById,
  sessionByIdStub: SessionByIdRepository
}

function makeSut ():SutTypes {
  const sessionByIdStub = makeSessionByIdRepositoryStub()
  const sut = new DbSessionById(sessionByIdStub)

  return {
    sut,
    sessionByIdStub
  }
}
