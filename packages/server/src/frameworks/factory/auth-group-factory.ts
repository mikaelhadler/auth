import { ListAuthGroupController } from '@/adapters/controllers/auth-group/list-auth-group-controller'
import { AuthGroupPrismaRepository } from '@/adapters/gateways/auth-group/auth-group-prisma-repository'
import { Controller } from '@/adapters/presentation/protocols'

function authGroupRepository (): AuthGroupPrismaRepository {
  const repo = new AuthGroupPrismaRepository()
  return repo
}

export function listAuthGroupControllerFactory (): Controller {
  const repo = authGroupRepository()
  const controller = new ListAuthGroupController(repo)
  return controller
}
