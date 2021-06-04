import { Accounts, AccountStatusEnum } from "@auth/entity"
import faker from "faker"

export function mockAccount(): Accounts {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    active: true,
    createdAt: faker.date.past(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    username: faker.internet.userName(),
    status: AccountStatusEnum.APPROVED,
    address: null
  }
}

export const mocked_as_accounts = {
  active: true,
  address_id: null,
  authentication_id: null,
  created_at: "2021-06-03T00:04:13.052Z",
  email: "adriano_silvareis@hotmail.com",
  id: "40cc1dd4-bb37-4397-9280-9ae0c8eeb0a7",
  name: "Adriano",
  phone: "27998460117",
  status: "WAITING_FOR_APPROVAL",
  username: "adriano_silvareis"
}

export const mocked_as_authentications = {
  active: true,
  as_account_id: "40cc1dd4-bb37-4397-9280-9ae0c8eeb0a7",
  as_accounts: mocked_as_accounts,
  attempts: 1,
  created_at: "2021-06-03T00:04:45.455Z",
  id: "d46ee4ae-4632-4a67-88a6-8210d3a8eef0",
  password: "123456",
  session_limit: 1,
  status: "ONLINE",
  updated_at: "2021-06-03T00:04:45.455Z"
}

export const mocked_authentication__group = {
  auth_groups_id: "a6158cdc-37cb-41b7-9c8a-0b677fc7601e",
  authentication_id: "d46ee4ae-4632-4a67-88a6-8210d3a8eef0",
  created_at: "2021-06-03T00:05:21.796Z",
  as_authentications: mocked_as_authentications
}

export const mockedAccountByAuthGroup = [mocked_authentication__group]
