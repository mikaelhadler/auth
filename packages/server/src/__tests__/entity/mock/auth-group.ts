import { Activity, AuthGroup, AuthGroupProperties, uuid } from "@auth/entity";
import faker from "faker";

export function mockAuthGroupActivity(): Activity {
  return {
    id: <uuid>faker.datatype.uuid(),
    name: faker.name.title(),
    permissions: [
      faker.lorem.word(5),
      faker.lorem.word(5),
      faker.lorem.word(5),
    ],
  };
}
export function mockAuthGroup(): AuthGroup {
  return {
    id: <uuid>faker.datatype.uuid(),
    title: faker.name.title(),
    activities: [
      mockAuthGroupActivity(),
      mockAuthGroupActivity(),
      mockAuthGroupActivity(),
      mockAuthGroupActivity(),
    ],
  };
}

export function mockAuthGroupProperties(): AuthGroupProperties {
  const data = Object.assign({}, mockAuthGroup());
  Reflect.deleteProperty(data, "id");
  return data;
}
