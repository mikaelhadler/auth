import { ValidityDateUtil } from "@/utils/methods/validity-date-util";
import { ValidityDate } from "@/utils/protocols/methods-utils";
import MockDate from 'mockdate';

describe('ValidityDateUtil', () => {
  beforeAll(() => {
    MockDate.set(new Date('2012-05-16T12:00:00.000Z'))
  })
  afterAll(() => {
    MockDate.reset()
  })
  it('should return true if createdOn equal current date', async () => {
    const { sut } = makeSut()
    const createdOn = new Date()
    const now = new Date()
    const duration = 20
    const valid = sut.validity(createdOn, now, duration)
    expect(valid).toBeTruthy()
  });
  it('should return true if createdOn + duration greater than current date', async () => {
    const { sut } = makeSut()
    const createdOn = new Date()
    const now = new Date('2012-05-16T12:00:19.000Z')
    const duration = 20
    const valid = sut.validity(createdOn, now, duration)
    expect(valid).toBeTruthy()
  });
  it('should return false if createdOn + duration less than or equal to current date', async () => {
    const { sut } = makeSut()
    const createdOn = new Date()
    const now = new Date('2012-05-16T12:00:20.000Z')
    const duration = 20
    const valid = sut.validity(createdOn, now, duration)
    expect(valid).toBeFalsy()

    const now2 = new Date('2012-05-16T12:00:30.000Z')
    const valid2 = sut.validity(createdOn, now2, duration)
    expect(valid2).toBeFalsy()
  });
});

type SutTypes = {
  sut: ValidityDate
}
function makeSut (): SutTypes {
  const sut = new ValidityDateUtil()
  return { sut }
}