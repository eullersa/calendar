type Primitive = string | number | boolean | bigint | null | undefined | symbol;

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${P extends "" ? "" : "."}${P}`
    : never
  : never;

export type RemovePrefix<
  S extends string,
  P extends string,
> = S extends `${P}.${infer R}` ? R : never;

export type KeyPaths<T, D extends string = ""> = T extends Primitive
  ? D
  : {
      [K in keyof T & (string | number)]-?: K extends string | number
        ? `${D}${D extends "" ? "" : "."}${K}` | Join<K, KeyPaths<T[K], "">>
        : never;
    }[keyof T & (string | number)];

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
  P extends string,
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
