export interface ValidityDate {
  validity (createdOn: Date, now: Date, duration: number): boolean
}

export interface CalcAge {
  age (createdOn: Date, birthday: Date): string
}