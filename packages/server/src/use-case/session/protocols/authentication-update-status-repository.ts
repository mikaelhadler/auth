import { Authentication, AuthenticationStatusEnum, uuid } from "@auth/domain";

export interface AuthenticationUpdateStatusRepository {
  updateStatus(
    authenticationId: uuid,
    status: AuthenticationStatusEnum
  ): Promise<Authentication>;
}
