import { ListAuthGroupRepository } from '@/use-case/auth-group/protocols/list-auth-group-repository'
import { AuthGroupPrismaRepository } from '@/adapters/gateways/auth-group/auth-group-prisma-repository'

import { prismaMock } from '@/__tests__/database/prisma-client-mock'

describe('ListAuthGroupRepository', () => {
  fit('should call findMal', async () => {
    const { sut } = makeSut()
    const list = await sut.list()
    expect(list).toEqual([])
  })
})

type SutTypes = {
  sut: ListAuthGroupRepository
}

function makeSut (): SutTypes {
  const sut = new AuthGroupPrismaRepository(prismaMock)
  return { sut }
}
