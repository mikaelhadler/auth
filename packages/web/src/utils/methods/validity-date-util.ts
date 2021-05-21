import { ValidityDate } from "../protocols/methods-utils";

export class ValidityDateUtil implements ValidityDate {
  validity(createdOn: Date, now: Date, duration: number): boolean {
    const time = createdOn.getTime();
    const validate = time + duration * 1000;
    const valid = validate > now.getTime();
    return valid;
  }
}
