export type Headers<T> = {
  title: string;
  key: keyof T;
};

export type ItemModel = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [k: string]: any;
};

export type ColumnsConfig<T> = (keyof T | Headers<T>)[];
