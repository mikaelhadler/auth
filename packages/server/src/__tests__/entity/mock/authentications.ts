import { Authentication, AuthenticationStatusEnum, uuid } from "@auth/entity";
import faker from "faker";

const SESSION_LIMIT = 3;
export function mockAuthentication(): Authentication {
  const authGroup = [];
  for (let index = 0; index < 3; index++) {
    authGroup.push(faker.datatype.uuid());
  }
  return {
    id: <uuid>faker.datatype.uuid(),
    accountId: <uuid>faker.datatype.uuid(),
    password: faker.internet.password(8),
    attempts: faker.datatype.number(2),
    sessionLimit: SESSION_LIMIT,
    status: AuthenticationStatusEnum.Offline,
    active: true,
    authGroup,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
}
