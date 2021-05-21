import { ActivityLog, ActivityLogProperties, uuid, ip } from "@auth/domain";
import faker from "faker";

export const mockedActivityLog = mockActivityLog();
export const mockedActivityLogList = [
  mockActivityLog(),
  mockActivityLog(),
  mockActivityLog(),
  mockActivityLog(),
];

export function mockActivityLog(): ActivityLog {
  const activity = {
    id: <uuid>faker.datatype.uuid(),
    name: faker.lorem.word(10),
    permissions: [
      faker.lorem.word(5),
      faker.lorem.word(5),
      faker.lorem.word(5),
    ],
  };
  return {
    id: <uuid>faker.datatype.uuid(),
    activity,
    createdAt: faker.date.recent(),
    username: faker.internet.userName(),
    ip: <ip>faker.internet.ip(),
    sessionId: <uuid>faker.datatype.uuid(),
  };
}
export const mockedActivityLogProperties = mockActivityLogProperties();
export function mockActivityLogProperties(): ActivityLogProperties {
  const activity = Object.assign({}, mockedActivityLog);
  Reflect.deleteProperty(activity, "id");
  return activity;
}
