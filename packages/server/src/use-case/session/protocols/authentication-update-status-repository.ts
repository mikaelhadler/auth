import { Authentication, AuthenticationStatusEnum, uuid } from '@auth/entity'

export interface AuthenticationUpdateStatusRepository {
  updateStatus(authenticationId: uuid, status: AuthenticationStatusEnum): Promise<Authentication>
}
