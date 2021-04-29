import { uuid } from './utils'

// not save in database
export interface Activity {
  name: string,
  permissions: string[]
}

export interface AuthGroup {
  id: uuid,
  title: string,
  activities: Activity[]
}

export type AuthGroupProperties = Omit<AuthGroup, 'id'>
export type AuthGroupUpdates = Partial<AuthGroup>

export interface CreateAuthGroup {
  create(authGroup: AuthGroupProperties): Promise<AuthGroup>
}

export interface ListAuthGroup {
  list(): Promise<AuthGroup[]>
}

export interface ListAuthGroupActivity {
  list(authGroupId: uuid): Promise<Activity[]>
}

export interface AddAuthGroupActivity {
  addActivity(authGroupId: uuid, activity: Activity): Promise<AuthGroup>
}

export interface RemoveAuthGroupActivity {
  removeActivity(authGroupId: uuid, activity: Activity): Promise<AuthGroup>
}

export interface RemoveAuthGroup {
  remove(authGroupId: uuid): Promise<AuthGroup>
}
