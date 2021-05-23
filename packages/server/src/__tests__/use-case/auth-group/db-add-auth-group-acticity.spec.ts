import { DbAddAuthGroupActivity } from '@/use-case/auth-group/db-add-auth-group-activity'
import {
  GetAuthGroupRepository,
  UpdateAuthGroupRepository
} from '@auth/use-case'

import { mockAuthGroupActivity } from '@/__tests__/entity/mock/auth-group'
import {
  mockedAuthGroup,
  makeGetAuthGroupStub,
  makeUpdateAuthGroupStub
} from '../stubs/auth-group'

describe('DbAddAuthGroupActivity', () => {
  it('should call GetAuthGroupRepository', async () => {
    const { sut, getAuthGroupStub } = makeSut()
    const functionName = 'get'
    const authGroupId = 'a1-a1-a1-a1'
    const spy = jest.spyOn(getAuthGroupStub, functionName)
    await sut.addActivity(authGroupId, null)
    expect(spy).toHaveBeenCalledWith(authGroupId)
  })
  it('should throw if GetAuthGroupRepository throw', async () => {
    const { sut, getAuthGroupStub } = makeSut()
    const functionName = 'get'
    const expectedThrow = new Error('any_list_auth_group_error')
    const authGroupId = 'a1-a1-a1-a1'
    jest
      .spyOn(getAuthGroupStub, functionName)
      .mockReturnValueOnce(Promise.reject(expectedThrow))
    const promise = sut.addActivity(authGroupId, null)
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should throw if GetAuthGroupRepository not found auth group', async () => {
    const { sut, getAuthGroupStub } = makeSut()
    const functionName = 'get'
    const authGroupId = 'a1-a1-a1-a1'
    const expectedThrow = new Error(
      `auth group not found for id: ${authGroupId}`
    )
    jest
      .spyOn(getAuthGroupStub, functionName)
      .mockReturnValueOnce(Promise.resolve(null))
    const promise = sut.addActivity(authGroupId, null)
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should call updateAuthGroupRepository with correct values', async () => {
    const { sut, updateAuthGroupStub } = makeSut()
    const functionName = 'update'
    const authGroupId = 'a1-a1-a1-a1'
    const { mockedAuthGroupActivity, authGroupToUpdate } =
      mockUpdatedAuthGroup()
    const spy = jest.spyOn(updateAuthGroupStub, functionName)
    await sut.addActivity(authGroupId, mockedAuthGroupActivity)
    expect(spy).toHaveBeenCalledWith(authGroupId, authGroupToUpdate)
  })
  it('should throw if updateAuthGroupRepository throws', async () => {
    const { sut, updateAuthGroupStub } = makeSut()
    const functionName = 'update'
    const expectedThrow = new Error('any_update_auth_group_error')
    const authGroupId = 'a1-a1-a1-a1'
    jest
      .spyOn(updateAuthGroupStub, functionName)
      .mockReturnValueOnce(Promise.reject(expectedThrow))
    const promise = sut.addActivity(authGroupId, null)
    await expect(promise).rejects.toThrowError(expectedThrow)
  })
  it('should return a authGroup on success', async () => {
    const { sut } = makeSut()
    const authGroupId = 'a1-a1-a1-a1'
    const { mockedAuthGroupActivity, authGroupToUpdate } =
      mockUpdatedAuthGroup()
    const response = await sut.addActivity(authGroupId, mockedAuthGroupActivity)
    expect(response).toEqual(authGroupToUpdate)
  })
})

type SutTypes = {
  sut: DbAddAuthGroupActivity
  getAuthGroupStub: GetAuthGroupRepository
  updateAuthGroupStub: UpdateAuthGroupRepository
}

function makeSut(): SutTypes {
  const getAuthGroupStub = makeGetAuthGroupStub()
  const updateAuthGroupStub = makeUpdateAuthGroupStub()
  const sut = new DbAddAuthGroupActivity(getAuthGroupStub, updateAuthGroupStub)

  return {
    sut,
    getAuthGroupStub,
    updateAuthGroupStub
  }
}

function mockUpdatedAuthGroup() {
  const mockedAuthGroupActivity = mockAuthGroupActivity()
  const authGroupToUpdate = Object.assign({}, mockedAuthGroup)
  authGroupToUpdate.activities.push(mockedAuthGroupActivity)

  return {
    authGroupToUpdate,
    mockedAuthGroupActivity
  }
}
