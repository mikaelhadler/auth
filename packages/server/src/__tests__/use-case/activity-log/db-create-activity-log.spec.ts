import { DbCreateActivityLog } from '@/use-case/activity-log/db-create-activity-log'
import { CreateActivityLogRepository } from '@auth/use-case'
import {
  mockedActivityLog,
  mockedActivityLogProperties
} from '@/__tests__/entity/mock/activity-log'
import { makeCreateActivityLogRepositoryStub } from '../stubs/activity-log'

describe('DbCreateActivityLog', () => {
  it('should call create log activity repository with correct values', async () => {
    const functionName = 'create'
    const { sut, createActivityLogStub } = makeSut()
    const spy = jest.spyOn(createActivityLogStub, functionName)
    await sut.logActivity(mockedActivityLogProperties)
    expect(spy).toHaveBeenCalledWith(mockedActivityLogProperties)
  })
  it('should throw if create log activity repository throws', async () => {
    const functionName = 'create'
    const expectedThrow = new Error('any_create_log_activity_error')
    const { sut, createActivityLogStub } = makeSut()
    jest
      .spyOn(createActivityLogStub, functionName)
      .mockReturnValueOnce(Promise.reject(expectedThrow))
    const promise = sut.logActivity(mockedActivityLogProperties)
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should return a created activity on success', async () => {
    const { sut } = makeSut()
    const response = await sut.logActivity(mockedActivityLogProperties)
    expect(response).toEqual(mockedActivityLog)
  })
})

type SutTypes = {
  sut: DbCreateActivityLog
  createActivityLogStub: CreateActivityLogRepository
}

function makeSut(): SutTypes {
  const createActivityLogStub = makeCreateActivityLogRepositoryStub()
  const sut = new DbCreateActivityLog(createActivityLogStub)

  return {
    sut,
    createActivityLogStub
  }
}
