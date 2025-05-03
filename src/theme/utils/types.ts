export type LeafKeyPaths<T, P extends string = ""> = {
  [K in keyof T]: K extends string | number
    ? T[K] extends object
      ? LeafKeyPaths<T[K], P extends "" ? `${K}` : `${P}.${K}`>
      : P extends ""
      ? `${K}`
      : `${P}.${K}`
    : never;
}[keyof T];

export type PathValue<
  T,
  P extends string
> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? PathValue<T[K], Rest>
    : K extends `${infer N extends number}`
    ? N extends keyof T
      ? PathValue<T[N], Rest>
      : never
    : never
  : P extends keyof T
  ? T[P]
  : P extends `${infer N extends number}`
  ? N extends keyof T
    ? T[N]
    : never
  : never;

export type MergeDeep<T, U> = {
  [K in keyof T | keyof U]: K extends keyof U
    ? K extends keyof T
      ? T[K] extends object
        ? U[K] extends object
          ? MergeDeep<T[K], U[K]>
          : T[K] | U[K]
        : T[K] | U[K]
      : U[K]
    : K extends keyof T
    ? T[K]
    : never;
};
