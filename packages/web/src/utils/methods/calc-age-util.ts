import { CalcAge } from "../protocols/methods-utils";

const SECONDS_PER_MINUTE = 60
const MINUTE_PER_HOURS = 60
const HOURS_PER_DAY = 24
const ONE = 1
const TWO = 2
export class CalcAgeUtil implements CalcAge {
  age(createdOn: Date, birthday: Date): string {
    const seconds = (createdOn.getTime() - birthday.getTime()) / 1000
    const minutes = seconds / 60
    const hours = minutes / 60
    const days = hours / 24

    if (seconds < SECONDS_PER_MINUTE) return 'just now'
    if (minutes >= ONE && minutes < TWO) return 'a minute ago'
    if (minutes >= TWO && minutes < MINUTE_PER_HOURS) return `${Math.floor(minutes)} minutes ago`
    if (hours >= ONE && hours < TWO) return 'a hour ago'
    if (hours >= TWO && hours < HOURS_PER_DAY) return `${Math.floor(hours)} hours ago`
    if (days >= ONE && days < TWO) return `a day ago`
    if (days >= TWO) return `${Math.floor(days)} days ago`
  }
}
