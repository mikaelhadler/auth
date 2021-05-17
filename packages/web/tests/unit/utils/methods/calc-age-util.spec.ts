import CalcAgeUtil from "@/utils/methods/calc-age-util";
import { CalcAge } from "@/utils/protocols/methods-utils";

const NOW = '2021-05-16T12:35:47.659Z'

describe('CalcAgeUtil', () => {
  it('should return "just now" if create a minute ago', async () => {
    const { sut } = MakeSut()
    const createdOn = new Date(NOW)
    const birthday = new Date(NOW)
    const age = sut.age(createdOn, birthday)
    expect(age).toEqual('just now')
  });
  it('should return "a minute ago" if create a minute ago', async () => {
    const { sut } = MakeSut()
    const createdOn = new Date(NOW)
    const birthday = new Date(NOW)
    birthday.setMinutes(new Date(NOW).getMinutes() - 1)
    const age = sut.age(createdOn, birthday)
    expect(age).toEqual('a minute ago')
  });
  it('should return "n minutes ago" if create longer than 1 minute', async () => {
    const { sut } = MakeSut()
    const createdOn = new Date(NOW)
    const birthday = new Date(NOW)
    birthday.setMinutes(new Date(NOW).getMinutes() - 5)
    const age = sut.age(createdOn, birthday)
    expect(age).toEqual('5 minutes ago')
  });
  it('should return "a hour ago" if create a hour ago', async () => {
    const { sut } = MakeSut()
    const createdOn = new Date(NOW)
    const birthday = new Date(NOW)
    birthday.setHours(new Date(NOW).getHours() - 1)
    const age = sut.age(createdOn, birthday)
    expect(age).toEqual('a hour ago')
  });
  it('should return "n hours ago" if create longer than 1 hours', async () => {
    const { sut } = MakeSut()
    const createdOn = new Date(NOW)
    const birthday = new Date(NOW)
    birthday.setHours(new Date(NOW).getHours() - 5)
    const age = sut.age(createdOn, birthday)
    expect(age).toEqual('5 hours ago')
  });
  it('should return "a day ago" if create a day ago', async () => {
    const { sut } = MakeSut()
    const createdOn = new Date(NOW)
    const birthday = new Date(NOW)
    birthday.setDate(new Date(NOW).getDate() - 1)
    const age = sut.age(createdOn, birthday)
    expect(age).toEqual('a day ago')
  });
  it('should return "n days ago" if create longer than 1 days', async () => {
    const { sut } = MakeSut()
    const createdOn = new Date(NOW)
    const birthday = new Date(NOW)
    birthday.setDate(new Date(NOW).getDate() - 7)
    const age = sut.age(createdOn, birthday)
    expect(age).toEqual('7 days ago')
  });
});


type SutType = {
  sut: CalcAge
}

function MakeSut(): SutType {
  const sut = new CalcAgeUtil();
  return { 
    sut 
  }
}