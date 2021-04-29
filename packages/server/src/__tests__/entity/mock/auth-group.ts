import { Activity, AuthGroup, AuthGroupProperties } from '@/entity/auth-group'
import { uuid } from '@/entity/utils'
import faker from 'faker'

export function mockAuthGroupActivity (): Activity {
  return {
    name: faker.name.title(),
    permissions: [
      faker.lorem.word(5),
      faker.lorem.word(5),
      faker.lorem.word(5)
    ]
  }
}
export function mockAuthGroup (): AuthGroup {
  return {
    id: <uuid>faker.datatype.uuid(),
    title: faker.name.title(),
    activities: [
      mockAuthGroupActivity(),
      mockAuthGroupActivity(),
      mockAuthGroupActivity(),
      mockAuthGroupActivity()
    ]
  }
}

export function mockAuthGroupProperties (): AuthGroupProperties {
  const data = Object.assign({}, mockAuthGroup())
  Reflect.deleteProperty(data, 'id')
  return data
}
