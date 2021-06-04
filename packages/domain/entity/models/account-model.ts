import { Accounts, AccountStatusEnum, Address, uuid } from "../protocols"

export class AccountModel implements Accounts {
  id: uuid
  name: string
  username: string
  email: string
  phone: string
  address?: Address
  createdAt: Date
  active: boolean
  status: AccountStatusEnum

  constructor(account: Partial<Accounts>) {
    this.id = account.id
    this.name = account.name
    this.username = account.username
    this.email = account.email
    this.phone = account.phone
    this.address = account.address
    this.createdAt = account.createdAt
    this.active = account.active
    this.status = account.status
  }
}
