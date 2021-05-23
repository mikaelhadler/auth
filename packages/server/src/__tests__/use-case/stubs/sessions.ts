import { Session, SessionById, uuid } from '@auth/entity'
import {
  SessionByIdRepository,
  SessionCountByAuthenticationRepository,
  SessionDropRepository,
  SessionListByAuthenticationRepository
} from '@auth/use-case'

import {
  mockReturnGetSessionListRepository,
  mockReturnSession
} from '@/__tests__/entity/mock/sessions'

export const mockedReturnGetSessionListRepository =
  mockReturnGetSessionListRepository()
export function makeSessionListByAccountRepositoryStub(): SessionListByAuthenticationRepository {
  class SessionByAccountRepositoryStub
  implements SessionListByAuthenticationRepository {
    async getSessionsByAuthenticationId(accountId: uuid): Promise<Session[]> {
      return mockedReturnGetSessionListRepository
    }
  }
  return new SessionByAccountRepositoryStub()
}

export function makeSessionByIdStub(): SessionById {
  class SessionByIdStub implements SessionById {
    async getById(sessionId: uuid): Promise<Session> {
      return mockedSession
    }
  }
  return new SessionByIdStub()
}

export function makeSessionDropRepositoryStub(): SessionDropRepository {
  class SessionDropRepositoryStub implements SessionDropRepository {
    async drop(sessionId: uuid): Promise<void> {
      return null
    }
  }
  return new SessionDropRepositoryStub()
}

export function makeSessionCountByAuthenticationRepository(): SessionCountByAuthenticationRepository {
  class SessionCountByAuthenticationStub
  implements SessionCountByAuthenticationRepository {
    async count(authenticationId: uuid): Promise<number> {
      return 0
    }
  }
  return new SessionCountByAuthenticationStub()
}

export const mockedSession = mockReturnSession()
export function makeSessionByIdRepositoryStub(): SessionByIdRepository {
  class SessionByIdRepositoryStub implements SessionByIdRepository {
    async getById(sessionId: uuid): Promise<Session> {
      return mockedSession
    }
  }
  return new SessionByIdRepositoryStub()
}
