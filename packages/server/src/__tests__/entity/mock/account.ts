import { AccountModel, AccountStatusEnum } from "@auth/domain";
import faker from "faker";

export function mockAccount(): AccountModel {
  return {
    name: faker.name.firstName(),
    active: true,
    createdAt: faker.date.past(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    username: faker.internet.userName(),
    status: AccountStatusEnum.APPROVED,
    address: null,
  };
}
