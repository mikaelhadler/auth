import { Activity } from './AuthGroup'
import { ip, uuid } from './Utils'

export interface ActivityLog {
  id: uuid,
  sessionId: uuid
  activity: Activity
  createdAt: Date
  username: string,
  ip: ip
}

export type ActivityLogProperties = Omit<ActivityLog, 'id'>
export interface CreateActivityLog {
  logActivity(activity: ActivityLogProperties): Promise<ActivityLog>
}

export interface ListActivityLog {
  listAll(accountId: uuid): Promise<ActivityLog[]>
}

export interface ListActivityLogByAccount {
  listByAccountId(accountId: uuid): Promise<ActivityLog[]>
}

export interface ActivityLogById {
  getById(activityId: uuid): Promise<ActivityLog>
}
