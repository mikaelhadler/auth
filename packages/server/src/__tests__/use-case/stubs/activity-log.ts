import { ActivityLogProperties, ActivityLog, uuid } from '@auth/entity'
import { CreateActivityLogRepository } from '@/use-case/activity-log/protocols/create-activity-log-repository'
import { GetActivityLogByIdRepository } from '@/use-case/activity-log/protocols/get-activity-log-by-id-repository'
import { ListActivityLogByAccountRepository } from '@/use-case/activity-log/protocols/list-activity-log-by-account-repository'
import { ListActivityLogRepository } from '@/use-case/activity-log/protocols/list-activity-log-repository'
import { mockedActivityLog, mockedActivityLogList } from '@/__tests__/entity/mock/activity-log'

export function makeCreateActivityLogRepositoryStub (): CreateActivityLogRepository {
  class CreateActivityLogRepositoryStub implements CreateActivityLogRepository {
    async create (activity: ActivityLogProperties): Promise<ActivityLog> {
      return mockedActivityLog
    }
  }
  return new CreateActivityLogRepositoryStub()
}

export function makeListActivityLogByAccountRepositoryStub (): ListActivityLogByAccountRepository {
  class ListActivityLogByAccountRepositoryStub implements ListActivityLogByAccountRepository {
    async listByAccountId (accountId: uuid): Promise<ActivityLog[]> {
      return mockedActivityLogList
    }
  }
  return new ListActivityLogByAccountRepositoryStub()
}

export function makeListActivityLogRepositoryStub (): ListActivityLogRepository {
  class ListActivityLogRepositoryStub implements ListActivityLogRepository {
    async listAll (): Promise<ActivityLog[]> {
      return mockedActivityLogList
    }
  }
  return new ListActivityLogRepositoryStub()
}

export function makeGetActivityLogByIdRepositoryStub (): GetActivityLogByIdRepository {
  class GetActivityLogByIdRepositoryStub implements GetActivityLogByIdRepository {
    async getById (activityId: uuid): Promise<ActivityLog> {
      return mockedActivityLog
    }
  }
  return new GetActivityLogByIdRepositoryStub()
}
