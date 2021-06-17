import { uuid } from "./utils";

export enum AccountStatusEnum {
  WAITING_FOR_APPROVAL,
  APPROVED,
  REPROVED,
  BLOCKED,
}

export interface Address {
  street: string; // confidential data
  suite: string; // confidential data
  city: string; // confidential data
  zipCode: string; // confidential data
}

export interface AccountModel {
  name: string; // confidential data
  username: string; // confidential data
  email: string; // confidential data
  phone: string; // confidential data
  address?: Address; // confidential data,
  createdAt: Date;
  active: boolean; // only approved status
  status: AccountStatusEnum;
}

// get | update | create | cancel
export type AccountModelProperties = Omit<AccountModel, "id">;
export type AccountModelUpdates = Partial<AccountModel>;

export interface ListAccountByAuthGroup {
  listAccountByAuthGroupId(authGroupId: uuid): Promise<AccountModel[]>;
}

export interface ListAllAccount {
  listAll(): Promise<AccountModel[]>;
}

export interface GetAccountById {
  getById(accountId: uuid): Promise<AccountModel>;
}

export interface CancelAccountById {
  cancel(accountId: uuid): Promise<AccountModel>;
}

export interface UpdateAccountById {
  update(accountId: uuid, data: AccountModelUpdates): Promise<AccountModel>;
}
