export interface validityDate {
  validity (createdOn: Date, now: Date, duration: number): boolean
}

export interface calcAge {
  age (createdOn: Date, birthday: Date): string
}