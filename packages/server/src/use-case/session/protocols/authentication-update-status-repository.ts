import { Authentication, AuthenticationStatusEnum } from '@/entity/authentication'
import { uuid } from '@/entity/utils'

export interface AuthenticationUpdateStatusRepository {
  updateStatus(authenticationId: uuid, status: AuthenticationStatusEnum): Promise<Authentication>
}
