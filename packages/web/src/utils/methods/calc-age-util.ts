import { CalcAge } from "../protocols/methods-utils";

export default class CalcAgeUtil implements CalcAge  {
  age(createdOn: Date, birthday: Date): string {
    const days = createdOn.getDate() - birthday.getDate();
    const hours = createdOn.getHours() - birthday.getHours();
    const minutes = createdOn.getMinutes() - birthday.getMinutes();

    if (days) {
      if (days === 1) {
        return "a day ago";
      }
      return `${days} days ago`;
    }
    if (hours) {
      if (hours === 1) {
        return "a hour ago";
      }
      return `${hours} hours ago`;
    }
    if (minutes) {
      if (minutes === 1) {
        return "a minute ago";
      }
      return `${minutes} minutes ago`;
    }
    return "just now";
  }
}