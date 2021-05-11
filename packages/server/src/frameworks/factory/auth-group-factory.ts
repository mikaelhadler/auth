import { ListAuthGroupController } from '@/adapters/controllers/auth-group/list-auth-group-controller'
import { AuthGroupPrismaRepository } from '@/adapters/gateways/auth-group/auth-group-prisma-repository'
import { Controller } from '@/adapters/presentation/protocols'
import { DbListAuthGroup } from '@/use-case/auth-group/db-list-auth-group'

function authGroupRepository (): AuthGroupPrismaRepository {
  const repo = new AuthGroupPrismaRepository()
  return repo
}

function dbListAuthGroup (): DbListAuthGroup {
  const repo = authGroupRepository()
  const list = new DbListAuthGroup(repo)
  return list
}

export function listAuthGroupControllerFactory (): Controller {
  const listAuthGroup = dbListAuthGroup()
  const controller = new ListAuthGroupController(listAuthGroup)
  return controller
}
