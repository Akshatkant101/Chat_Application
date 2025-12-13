
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ChatGroup
 * 
 */
export type ChatGroup = $Result.DefaultSelection<Prisma.$ChatGroupPayload>
/**
 * Model chatGroupUsers
 * 
 */
export type chatGroupUsers = $Result.DefaultSelection<Prisma.$chatGroupUsersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatGroup`: Exposes CRUD operations for the **ChatGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatGroups
    * const chatGroups = await prisma.chatGroup.findMany()
    * ```
    */
  get chatGroup(): Prisma.ChatGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatGroupUsers`: Exposes CRUD operations for the **chatGroupUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatGroupUsers
    * const chatGroupUsers = await prisma.chatGroupUsers.findMany()
    * ```
    */
  get chatGroupUsers(): Prisma.chatGroupUsersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ChatGroup: 'ChatGroup',
    chatGroupUsers: 'chatGroupUsers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "chatGroup" | "chatGroupUsers"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ChatGroup: {
        payload: Prisma.$ChatGroupPayload<ExtArgs>
        fields: Prisma.ChatGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          findFirst: {
            args: Prisma.ChatGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          findMany: {
            args: Prisma.ChatGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>[]
          }
          create: {
            args: Prisma.ChatGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          createMany: {
            args: Prisma.ChatGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>[]
          }
          delete: {
            args: Prisma.ChatGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          update: {
            args: Prisma.ChatGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          deleteMany: {
            args: Prisma.ChatGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>[]
          }
          upsert: {
            args: Prisma.ChatGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          aggregate: {
            args: Prisma.ChatGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatGroup>
          }
          groupBy: {
            args: Prisma.ChatGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatGroupCountArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupCountAggregateOutputType> | number
          }
        }
      }
      chatGroupUsers: {
        payload: Prisma.$chatGroupUsersPayload<ExtArgs>
        fields: Prisma.chatGroupUsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatGroupUsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupUsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatGroupUsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupUsersPayload>
          }
          findFirst: {
            args: Prisma.chatGroupUsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupUsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatGroupUsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupUsersPayload>
          }
          findMany: {
            args: Prisma.chatGroupUsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupUsersPayload>[]
          }
          create: {
            args: Prisma.chatGroupUsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupUsersPayload>
          }
          createMany: {
            args: Prisma.chatGroupUsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chatGroupUsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupUsersPayload>[]
          }
          delete: {
            args: Prisma.chatGroupUsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupUsersPayload>
          }
          update: {
            args: Prisma.chatGroupUsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupUsersPayload>
          }
          deleteMany: {
            args: Prisma.chatGroupUsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatGroupUsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chatGroupUsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupUsersPayload>[]
          }
          upsert: {
            args: Prisma.chatGroupUsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatGroupUsersPayload>
          }
          aggregate: {
            args: Prisma.ChatGroupUsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatGroupUsers>
          }
          groupBy: {
            args: Prisma.chatGroupUsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupUsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatGroupUsersCountArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupUsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    chatGroup?: ChatGroupOmit
    chatGroupUsers?: chatGroupUsersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    chat_groups: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_groups?: boolean | UserCountOutputTypeCountChat_groupsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChat_groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupWhereInput
  }


  /**
   * Count Type ChatGroupCountOutputType
   */

  export type ChatGroupCountOutputType = {
    chatGroupUsers: number
  }

  export type ChatGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatGroupUsers?: boolean | ChatGroupCountOutputTypeCountChatGroupUsersArgs
  }

  // Custom InputTypes
  /**
   * ChatGroupCountOutputType without action
   */
  export type ChatGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupCountOutputType
     */
    select?: ChatGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatGroupCountOutputType without action
   */
  export type ChatGroupCountOutputTypeCountChatGroupUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatGroupUsersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    provider: string | null
    image: string | null
    oauth_id: string | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    provider: string | null
    image: string | null
    oauth_id: string | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    provider: number
    image: number
    oauth_id: number
    created_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    provider?: true
    image?: true
    oauth_id?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    provider?: true
    image?: true
    oauth_id?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    provider?: true
    image?: true
    oauth_id?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    provider: string
    image: string | null
    oauth_id: string
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    provider?: boolean
    image?: boolean
    oauth_id?: boolean
    created_at?: boolean
    chat_groups?: boolean | User$chat_groupsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    provider?: boolean
    image?: boolean
    oauth_id?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    provider?: boolean
    image?: boolean
    oauth_id?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    provider?: boolean
    image?: boolean
    oauth_id?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "provider" | "image" | "oauth_id" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_groups?: boolean | User$chat_groupsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      chat_groups: Prisma.$ChatGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      provider: string
      image: string | null
      oauth_id: string
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat_groups<T extends User$chat_groupsArgs<ExtArgs> = {}>(args?: Subset<T, User$chat_groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly oauth_id: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.chat_groups
   */
  export type User$chat_groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    where?: ChatGroupWhereInput
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    cursor?: ChatGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ChatGroup
   */

  export type AggregateChatGroup = {
    _count: ChatGroupCountAggregateOutputType | null
    _avg: ChatGroupAvgAggregateOutputType | null
    _sum: ChatGroupSumAggregateOutputType | null
    _min: ChatGroupMinAggregateOutputType | null
    _max: ChatGroupMaxAggregateOutputType | null
  }

  export type ChatGroupAvgAggregateOutputType = {
    user_id: number | null
  }

  export type ChatGroupSumAggregateOutputType = {
    user_id: number | null
  }

  export type ChatGroupMinAggregateOutputType = {
    id: string | null
    user_id: number | null
    title: string | null
    passcode: string | null
    created_at: Date | null
  }

  export type ChatGroupMaxAggregateOutputType = {
    id: string | null
    user_id: number | null
    title: string | null
    passcode: string | null
    created_at: Date | null
  }

  export type ChatGroupCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    passcode: number
    created_at: number
    _all: number
  }


  export type ChatGroupAvgAggregateInputType = {
    user_id?: true
  }

  export type ChatGroupSumAggregateInputType = {
    user_id?: true
  }

  export type ChatGroupMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    passcode?: true
    created_at?: true
  }

  export type ChatGroupMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    passcode?: true
    created_at?: true
  }

  export type ChatGroupCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    passcode?: true
    created_at?: true
    _all?: true
  }

  export type ChatGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroup to aggregate.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatGroups
    **/
    _count?: true | ChatGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatGroupMaxAggregateInputType
  }

  export type GetChatGroupAggregateType<T extends ChatGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateChatGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatGroup[P]>
      : GetScalarType<T[P], AggregateChatGroup[P]>
  }




  export type ChatGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupWhereInput
    orderBy?: ChatGroupOrderByWithAggregationInput | ChatGroupOrderByWithAggregationInput[]
    by: ChatGroupScalarFieldEnum[] | ChatGroupScalarFieldEnum
    having?: ChatGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatGroupCountAggregateInputType | true
    _avg?: ChatGroupAvgAggregateInputType
    _sum?: ChatGroupSumAggregateInputType
    _min?: ChatGroupMinAggregateInputType
    _max?: ChatGroupMaxAggregateInputType
  }

  export type ChatGroupGroupByOutputType = {
    id: string
    user_id: number
    title: string
    passcode: string
    created_at: Date
    _count: ChatGroupCountAggregateOutputType | null
    _avg: ChatGroupAvgAggregateOutputType | null
    _sum: ChatGroupSumAggregateOutputType | null
    _min: ChatGroupMinAggregateOutputType | null
    _max: ChatGroupMaxAggregateOutputType | null
  }

  type GetChatGroupGroupByPayload<T extends ChatGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupGroupByOutputType[P]>
        }
      >
    >


  export type ChatGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    passcode?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chatGroupUsers?: boolean | ChatGroup$chatGroupUsersArgs<ExtArgs>
    _count?: boolean | ChatGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroup"]>

  export type ChatGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    passcode?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroup"]>

  export type ChatGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    passcode?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroup"]>

  export type ChatGroupSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    passcode?: boolean
    created_at?: boolean
  }

  export type ChatGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "passcode" | "created_at", ExtArgs["result"]["chatGroup"]>
  export type ChatGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chatGroupUsers?: boolean | ChatGroup$chatGroupUsersArgs<ExtArgs>
    _count?: boolean | ChatGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatGroup"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chatGroupUsers: Prisma.$chatGroupUsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: number
      title: string
      passcode: string
      created_at: Date
    }, ExtArgs["result"]["chatGroup"]>
    composites: {}
  }

  type ChatGroupGetPayload<S extends boolean | null | undefined | ChatGroupDefaultArgs> = $Result.GetResult<Prisma.$ChatGroupPayload, S>

  type ChatGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatGroupCountAggregateInputType | true
    }

  export interface ChatGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatGroup'], meta: { name: 'ChatGroup' } }
    /**
     * Find zero or one ChatGroup that matches the filter.
     * @param {ChatGroupFindUniqueArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatGroupFindUniqueArgs>(args: SelectSubset<T, ChatGroupFindUniqueArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatGroupFindUniqueOrThrowArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindFirstArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatGroupFindFirstArgs>(args?: SelectSubset<T, ChatGroupFindFirstArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindFirstOrThrowArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatGroups
     * const chatGroups = await prisma.chatGroup.findMany()
     * 
     * // Get first 10 ChatGroups
     * const chatGroups = await prisma.chatGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatGroupWithIdOnly = await prisma.chatGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatGroupFindManyArgs>(args?: SelectSubset<T, ChatGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatGroup.
     * @param {ChatGroupCreateArgs} args - Arguments to create a ChatGroup.
     * @example
     * // Create one ChatGroup
     * const ChatGroup = await prisma.chatGroup.create({
     *   data: {
     *     // ... data to create a ChatGroup
     *   }
     * })
     * 
     */
    create<T extends ChatGroupCreateArgs>(args: SelectSubset<T, ChatGroupCreateArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatGroups.
     * @param {ChatGroupCreateManyArgs} args - Arguments to create many ChatGroups.
     * @example
     * // Create many ChatGroups
     * const chatGroup = await prisma.chatGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatGroupCreateManyArgs>(args?: SelectSubset<T, ChatGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatGroups and returns the data saved in the database.
     * @param {ChatGroupCreateManyAndReturnArgs} args - Arguments to create many ChatGroups.
     * @example
     * // Create many ChatGroups
     * const chatGroup = await prisma.chatGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatGroups and only return the `id`
     * const chatGroupWithIdOnly = await prisma.chatGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatGroup.
     * @param {ChatGroupDeleteArgs} args - Arguments to delete one ChatGroup.
     * @example
     * // Delete one ChatGroup
     * const ChatGroup = await prisma.chatGroup.delete({
     *   where: {
     *     // ... filter to delete one ChatGroup
     *   }
     * })
     * 
     */
    delete<T extends ChatGroupDeleteArgs>(args: SelectSubset<T, ChatGroupDeleteArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatGroup.
     * @param {ChatGroupUpdateArgs} args - Arguments to update one ChatGroup.
     * @example
     * // Update one ChatGroup
     * const chatGroup = await prisma.chatGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatGroupUpdateArgs>(args: SelectSubset<T, ChatGroupUpdateArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatGroups.
     * @param {ChatGroupDeleteManyArgs} args - Arguments to filter ChatGroups to delete.
     * @example
     * // Delete a few ChatGroups
     * const { count } = await prisma.chatGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatGroupDeleteManyArgs>(args?: SelectSubset<T, ChatGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatGroups
     * const chatGroup = await prisma.chatGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatGroupUpdateManyArgs>(args: SelectSubset<T, ChatGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGroups and returns the data updated in the database.
     * @param {ChatGroupUpdateManyAndReturnArgs} args - Arguments to update many ChatGroups.
     * @example
     * // Update many ChatGroups
     * const chatGroup = await prisma.chatGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatGroups and only return the `id`
     * const chatGroupWithIdOnly = await prisma.chatGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatGroup.
     * @param {ChatGroupUpsertArgs} args - Arguments to update or create a ChatGroup.
     * @example
     * // Update or create a ChatGroup
     * const chatGroup = await prisma.chatGroup.upsert({
     *   create: {
     *     // ... data to create a ChatGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatGroup we want to update
     *   }
     * })
     */
    upsert<T extends ChatGroupUpsertArgs>(args: SelectSubset<T, ChatGroupUpsertArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupCountArgs} args - Arguments to filter ChatGroups to count.
     * @example
     * // Count the number of ChatGroups
     * const count = await prisma.chatGroup.count({
     *   where: {
     *     // ... the filter for the ChatGroups we want to count
     *   }
     * })
    **/
    count<T extends ChatGroupCountArgs>(
      args?: Subset<T, ChatGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatGroupAggregateArgs>(args: Subset<T, ChatGroupAggregateArgs>): Prisma.PrismaPromise<GetChatGroupAggregateType<T>>

    /**
     * Group by ChatGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatGroup model
   */
  readonly fields: ChatGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chatGroupUsers<T extends ChatGroup$chatGroupUsersArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroup$chatGroupUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatGroupUsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatGroup model
   */
  interface ChatGroupFieldRefs {
    readonly id: FieldRef<"ChatGroup", 'String'>
    readonly user_id: FieldRef<"ChatGroup", 'Int'>
    readonly title: FieldRef<"ChatGroup", 'String'>
    readonly passcode: FieldRef<"ChatGroup", 'String'>
    readonly created_at: FieldRef<"ChatGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatGroup findUnique
   */
  export type ChatGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where: ChatGroupWhereUniqueInput
  }

  /**
   * ChatGroup findUniqueOrThrow
   */
  export type ChatGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where: ChatGroupWhereUniqueInput
  }

  /**
   * ChatGroup findFirst
   */
  export type ChatGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroups.
     */
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }

  /**
   * ChatGroup findFirstOrThrow
   */
  export type ChatGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroups.
     */
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }

  /**
   * ChatGroup findMany
   */
  export type ChatGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroups to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }

  /**
   * ChatGroup create
   */
  export type ChatGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatGroup.
     */
    data: XOR<ChatGroupCreateInput, ChatGroupUncheckedCreateInput>
  }

  /**
   * ChatGroup createMany
   */
  export type ChatGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatGroups.
     */
    data: ChatGroupCreateManyInput | ChatGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatGroup createManyAndReturn
   */
  export type ChatGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * The data used to create many ChatGroups.
     */
    data: ChatGroupCreateManyInput | ChatGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatGroup update
   */
  export type ChatGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatGroup.
     */
    data: XOR<ChatGroupUpdateInput, ChatGroupUncheckedUpdateInput>
    /**
     * Choose, which ChatGroup to update.
     */
    where: ChatGroupWhereUniqueInput
  }

  /**
   * ChatGroup updateMany
   */
  export type ChatGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatGroups.
     */
    data: XOR<ChatGroupUpdateManyMutationInput, ChatGroupUncheckedUpdateManyInput>
    /**
     * Filter which ChatGroups to update
     */
    where?: ChatGroupWhereInput
    /**
     * Limit how many ChatGroups to update.
     */
    limit?: number
  }

  /**
   * ChatGroup updateManyAndReturn
   */
  export type ChatGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * The data used to update ChatGroups.
     */
    data: XOR<ChatGroupUpdateManyMutationInput, ChatGroupUncheckedUpdateManyInput>
    /**
     * Filter which ChatGroups to update
     */
    where?: ChatGroupWhereInput
    /**
     * Limit how many ChatGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatGroup upsert
   */
  export type ChatGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatGroup to update in case it exists.
     */
    where: ChatGroupWhereUniqueInput
    /**
     * In case the ChatGroup found by the `where` argument doesn't exist, create a new ChatGroup with this data.
     */
    create: XOR<ChatGroupCreateInput, ChatGroupUncheckedCreateInput>
    /**
     * In case the ChatGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatGroupUpdateInput, ChatGroupUncheckedUpdateInput>
  }

  /**
   * ChatGroup delete
   */
  export type ChatGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter which ChatGroup to delete.
     */
    where: ChatGroupWhereUniqueInput
  }

  /**
   * ChatGroup deleteMany
   */
  export type ChatGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroups to delete
     */
    where?: ChatGroupWhereInput
    /**
     * Limit how many ChatGroups to delete.
     */
    limit?: number
  }

  /**
   * ChatGroup.chatGroupUsers
   */
  export type ChatGroup$chatGroupUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupUsers
     */
    select?: chatGroupUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupUsers
     */
    omit?: chatGroupUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupUsersInclude<ExtArgs> | null
    where?: chatGroupUsersWhereInput
    orderBy?: chatGroupUsersOrderByWithRelationInput | chatGroupUsersOrderByWithRelationInput[]
    cursor?: chatGroupUsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatGroupUsersScalarFieldEnum | ChatGroupUsersScalarFieldEnum[]
  }

  /**
   * ChatGroup without action
   */
  export type ChatGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
  }


  /**
   * Model chatGroupUsers
   */

  export type AggregateChatGroupUsers = {
    _count: ChatGroupUsersCountAggregateOutputType | null
    _avg: ChatGroupUsersAvgAggregateOutputType | null
    _sum: ChatGroupUsersSumAggregateOutputType | null
    _min: ChatGroupUsersMinAggregateOutputType | null
    _max: ChatGroupUsersMaxAggregateOutputType | null
  }

  export type ChatGroupUsersAvgAggregateOutputType = {
    id: number | null
  }

  export type ChatGroupUsersSumAggregateOutputType = {
    id: number | null
  }

  export type ChatGroupUsersMinAggregateOutputType = {
    id: number | null
    group_id: string | null
    name: string | null
    created_at: Date | null
  }

  export type ChatGroupUsersMaxAggregateOutputType = {
    id: number | null
    group_id: string | null
    name: string | null
    created_at: Date | null
  }

  export type ChatGroupUsersCountAggregateOutputType = {
    id: number
    group_id: number
    name: number
    created_at: number
    _all: number
  }


  export type ChatGroupUsersAvgAggregateInputType = {
    id?: true
  }

  export type ChatGroupUsersSumAggregateInputType = {
    id?: true
  }

  export type ChatGroupUsersMinAggregateInputType = {
    id?: true
    group_id?: true
    name?: true
    created_at?: true
  }

  export type ChatGroupUsersMaxAggregateInputType = {
    id?: true
    group_id?: true
    name?: true
    created_at?: true
  }

  export type ChatGroupUsersCountAggregateInputType = {
    id?: true
    group_id?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type ChatGroupUsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatGroupUsers to aggregate.
     */
    where?: chatGroupUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatGroupUsers to fetch.
     */
    orderBy?: chatGroupUsersOrderByWithRelationInput | chatGroupUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatGroupUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatGroupUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatGroupUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chatGroupUsers
    **/
    _count?: true | ChatGroupUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatGroupUsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatGroupUsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatGroupUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatGroupUsersMaxAggregateInputType
  }

  export type GetChatGroupUsersAggregateType<T extends ChatGroupUsersAggregateArgs> = {
        [P in keyof T & keyof AggregateChatGroupUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatGroupUsers[P]>
      : GetScalarType<T[P], AggregateChatGroupUsers[P]>
  }




  export type chatGroupUsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatGroupUsersWhereInput
    orderBy?: chatGroupUsersOrderByWithAggregationInput | chatGroupUsersOrderByWithAggregationInput[]
    by: ChatGroupUsersScalarFieldEnum[] | ChatGroupUsersScalarFieldEnum
    having?: chatGroupUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatGroupUsersCountAggregateInputType | true
    _avg?: ChatGroupUsersAvgAggregateInputType
    _sum?: ChatGroupUsersSumAggregateInputType
    _min?: ChatGroupUsersMinAggregateInputType
    _max?: ChatGroupUsersMaxAggregateInputType
  }

  export type ChatGroupUsersGroupByOutputType = {
    id: number
    group_id: string
    name: string
    created_at: Date
    _count: ChatGroupUsersCountAggregateOutputType | null
    _avg: ChatGroupUsersAvgAggregateOutputType | null
    _sum: ChatGroupUsersSumAggregateOutputType | null
    _min: ChatGroupUsersMinAggregateOutputType | null
    _max: ChatGroupUsersMaxAggregateOutputType | null
  }

  type GetChatGroupUsersGroupByPayload<T extends chatGroupUsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupUsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupUsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupUsersGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupUsersGroupByOutputType[P]>
        }
      >
    >


  export type chatGroupUsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    name?: boolean
    created_at?: boolean
    group?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroupUsers"]>

  export type chatGroupUsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    name?: boolean
    created_at?: boolean
    group?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroupUsers"]>

  export type chatGroupUsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    name?: boolean
    created_at?: boolean
    group?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroupUsers"]>

  export type chatGroupUsersSelectScalar = {
    id?: boolean
    group_id?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type chatGroupUsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "group_id" | "name" | "created_at", ExtArgs["result"]["chatGroupUsers"]>
  export type chatGroupUsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }
  export type chatGroupUsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }
  export type chatGroupUsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }

  export type $chatGroupUsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chatGroupUsers"
    objects: {
      group: Prisma.$ChatGroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      group_id: string
      name: string
      created_at: Date
    }, ExtArgs["result"]["chatGroupUsers"]>
    composites: {}
  }

  type chatGroupUsersGetPayload<S extends boolean | null | undefined | chatGroupUsersDefaultArgs> = $Result.GetResult<Prisma.$chatGroupUsersPayload, S>

  type chatGroupUsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatGroupUsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatGroupUsersCountAggregateInputType | true
    }

  export interface chatGroupUsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chatGroupUsers'], meta: { name: 'chatGroupUsers' } }
    /**
     * Find zero or one ChatGroupUsers that matches the filter.
     * @param {chatGroupUsersFindUniqueArgs} args - Arguments to find a ChatGroupUsers
     * @example
     * // Get one ChatGroupUsers
     * const chatGroupUsers = await prisma.chatGroupUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatGroupUsersFindUniqueArgs>(args: SelectSubset<T, chatGroupUsersFindUniqueArgs<ExtArgs>>): Prisma__chatGroupUsersClient<$Result.GetResult<Prisma.$chatGroupUsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatGroupUsers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatGroupUsersFindUniqueOrThrowArgs} args - Arguments to find a ChatGroupUsers
     * @example
     * // Get one ChatGroupUsers
     * const chatGroupUsers = await prisma.chatGroupUsers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatGroupUsersFindUniqueOrThrowArgs>(args: SelectSubset<T, chatGroupUsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatGroupUsersClient<$Result.GetResult<Prisma.$chatGroupUsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroupUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupUsersFindFirstArgs} args - Arguments to find a ChatGroupUsers
     * @example
     * // Get one ChatGroupUsers
     * const chatGroupUsers = await prisma.chatGroupUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatGroupUsersFindFirstArgs>(args?: SelectSubset<T, chatGroupUsersFindFirstArgs<ExtArgs>>): Prisma__chatGroupUsersClient<$Result.GetResult<Prisma.$chatGroupUsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroupUsers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupUsersFindFirstOrThrowArgs} args - Arguments to find a ChatGroupUsers
     * @example
     * // Get one ChatGroupUsers
     * const chatGroupUsers = await prisma.chatGroupUsers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatGroupUsersFindFirstOrThrowArgs>(args?: SelectSubset<T, chatGroupUsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatGroupUsersClient<$Result.GetResult<Prisma.$chatGroupUsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatGroupUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupUsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatGroupUsers
     * const chatGroupUsers = await prisma.chatGroupUsers.findMany()
     * 
     * // Get first 10 ChatGroupUsers
     * const chatGroupUsers = await prisma.chatGroupUsers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatGroupUsersWithIdOnly = await prisma.chatGroupUsers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatGroupUsersFindManyArgs>(args?: SelectSubset<T, chatGroupUsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatGroupUsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatGroupUsers.
     * @param {chatGroupUsersCreateArgs} args - Arguments to create a ChatGroupUsers.
     * @example
     * // Create one ChatGroupUsers
     * const ChatGroupUsers = await prisma.chatGroupUsers.create({
     *   data: {
     *     // ... data to create a ChatGroupUsers
     *   }
     * })
     * 
     */
    create<T extends chatGroupUsersCreateArgs>(args: SelectSubset<T, chatGroupUsersCreateArgs<ExtArgs>>): Prisma__chatGroupUsersClient<$Result.GetResult<Prisma.$chatGroupUsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatGroupUsers.
     * @param {chatGroupUsersCreateManyArgs} args - Arguments to create many ChatGroupUsers.
     * @example
     * // Create many ChatGroupUsers
     * const chatGroupUsers = await prisma.chatGroupUsers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatGroupUsersCreateManyArgs>(args?: SelectSubset<T, chatGroupUsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatGroupUsers and returns the data saved in the database.
     * @param {chatGroupUsersCreateManyAndReturnArgs} args - Arguments to create many ChatGroupUsers.
     * @example
     * // Create many ChatGroupUsers
     * const chatGroupUsers = await prisma.chatGroupUsers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatGroupUsers and only return the `id`
     * const chatGroupUsersWithIdOnly = await prisma.chatGroupUsers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chatGroupUsersCreateManyAndReturnArgs>(args?: SelectSubset<T, chatGroupUsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatGroupUsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatGroupUsers.
     * @param {chatGroupUsersDeleteArgs} args - Arguments to delete one ChatGroupUsers.
     * @example
     * // Delete one ChatGroupUsers
     * const ChatGroupUsers = await prisma.chatGroupUsers.delete({
     *   where: {
     *     // ... filter to delete one ChatGroupUsers
     *   }
     * })
     * 
     */
    delete<T extends chatGroupUsersDeleteArgs>(args: SelectSubset<T, chatGroupUsersDeleteArgs<ExtArgs>>): Prisma__chatGroupUsersClient<$Result.GetResult<Prisma.$chatGroupUsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatGroupUsers.
     * @param {chatGroupUsersUpdateArgs} args - Arguments to update one ChatGroupUsers.
     * @example
     * // Update one ChatGroupUsers
     * const chatGroupUsers = await prisma.chatGroupUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatGroupUsersUpdateArgs>(args: SelectSubset<T, chatGroupUsersUpdateArgs<ExtArgs>>): Prisma__chatGroupUsersClient<$Result.GetResult<Prisma.$chatGroupUsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatGroupUsers.
     * @param {chatGroupUsersDeleteManyArgs} args - Arguments to filter ChatGroupUsers to delete.
     * @example
     * // Delete a few ChatGroupUsers
     * const { count } = await prisma.chatGroupUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatGroupUsersDeleteManyArgs>(args?: SelectSubset<T, chatGroupUsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGroupUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatGroupUsers
     * const chatGroupUsers = await prisma.chatGroupUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatGroupUsersUpdateManyArgs>(args: SelectSubset<T, chatGroupUsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGroupUsers and returns the data updated in the database.
     * @param {chatGroupUsersUpdateManyAndReturnArgs} args - Arguments to update many ChatGroupUsers.
     * @example
     * // Update many ChatGroupUsers
     * const chatGroupUsers = await prisma.chatGroupUsers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatGroupUsers and only return the `id`
     * const chatGroupUsersWithIdOnly = await prisma.chatGroupUsers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends chatGroupUsersUpdateManyAndReturnArgs>(args: SelectSubset<T, chatGroupUsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatGroupUsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatGroupUsers.
     * @param {chatGroupUsersUpsertArgs} args - Arguments to update or create a ChatGroupUsers.
     * @example
     * // Update or create a ChatGroupUsers
     * const chatGroupUsers = await prisma.chatGroupUsers.upsert({
     *   create: {
     *     // ... data to create a ChatGroupUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatGroupUsers we want to update
     *   }
     * })
     */
    upsert<T extends chatGroupUsersUpsertArgs>(args: SelectSubset<T, chatGroupUsersUpsertArgs<ExtArgs>>): Prisma__chatGroupUsersClient<$Result.GetResult<Prisma.$chatGroupUsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatGroupUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupUsersCountArgs} args - Arguments to filter ChatGroupUsers to count.
     * @example
     * // Count the number of ChatGroupUsers
     * const count = await prisma.chatGroupUsers.count({
     *   where: {
     *     // ... the filter for the ChatGroupUsers we want to count
     *   }
     * })
    **/
    count<T extends chatGroupUsersCountArgs>(
      args?: Subset<T, chatGroupUsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatGroupUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatGroupUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatGroupUsersAggregateArgs>(args: Subset<T, ChatGroupUsersAggregateArgs>): Prisma.PrismaPromise<GetChatGroupUsersAggregateType<T>>

    /**
     * Group by ChatGroupUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupUsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chatGroupUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatGroupUsersGroupByArgs['orderBy'] }
        : { orderBy?: chatGroupUsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chatGroupUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chatGroupUsers model
   */
  readonly fields: chatGroupUsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chatGroupUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatGroupUsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends ChatGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroupDefaultArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chatGroupUsers model
   */
  interface chatGroupUsersFieldRefs {
    readonly id: FieldRef<"chatGroupUsers", 'Int'>
    readonly group_id: FieldRef<"chatGroupUsers", 'String'>
    readonly name: FieldRef<"chatGroupUsers", 'String'>
    readonly created_at: FieldRef<"chatGroupUsers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chatGroupUsers findUnique
   */
  export type chatGroupUsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupUsers
     */
    select?: chatGroupUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupUsers
     */
    omit?: chatGroupUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupUsersInclude<ExtArgs> | null
    /**
     * Filter, which chatGroupUsers to fetch.
     */
    where: chatGroupUsersWhereUniqueInput
  }

  /**
   * chatGroupUsers findUniqueOrThrow
   */
  export type chatGroupUsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupUsers
     */
    select?: chatGroupUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupUsers
     */
    omit?: chatGroupUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupUsersInclude<ExtArgs> | null
    /**
     * Filter, which chatGroupUsers to fetch.
     */
    where: chatGroupUsersWhereUniqueInput
  }

  /**
   * chatGroupUsers findFirst
   */
  export type chatGroupUsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupUsers
     */
    select?: chatGroupUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupUsers
     */
    omit?: chatGroupUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupUsersInclude<ExtArgs> | null
    /**
     * Filter, which chatGroupUsers to fetch.
     */
    where?: chatGroupUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatGroupUsers to fetch.
     */
    orderBy?: chatGroupUsersOrderByWithRelationInput | chatGroupUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatGroupUsers.
     */
    cursor?: chatGroupUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatGroupUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatGroupUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatGroupUsers.
     */
    distinct?: ChatGroupUsersScalarFieldEnum | ChatGroupUsersScalarFieldEnum[]
  }

  /**
   * chatGroupUsers findFirstOrThrow
   */
  export type chatGroupUsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupUsers
     */
    select?: chatGroupUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupUsers
     */
    omit?: chatGroupUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupUsersInclude<ExtArgs> | null
    /**
     * Filter, which chatGroupUsers to fetch.
     */
    where?: chatGroupUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatGroupUsers to fetch.
     */
    orderBy?: chatGroupUsersOrderByWithRelationInput | chatGroupUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatGroupUsers.
     */
    cursor?: chatGroupUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatGroupUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatGroupUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatGroupUsers.
     */
    distinct?: ChatGroupUsersScalarFieldEnum | ChatGroupUsersScalarFieldEnum[]
  }

  /**
   * chatGroupUsers findMany
   */
  export type chatGroupUsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupUsers
     */
    select?: chatGroupUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupUsers
     */
    omit?: chatGroupUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupUsersInclude<ExtArgs> | null
    /**
     * Filter, which chatGroupUsers to fetch.
     */
    where?: chatGroupUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatGroupUsers to fetch.
     */
    orderBy?: chatGroupUsersOrderByWithRelationInput | chatGroupUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chatGroupUsers.
     */
    cursor?: chatGroupUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatGroupUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatGroupUsers.
     */
    skip?: number
    distinct?: ChatGroupUsersScalarFieldEnum | ChatGroupUsersScalarFieldEnum[]
  }

  /**
   * chatGroupUsers create
   */
  export type chatGroupUsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupUsers
     */
    select?: chatGroupUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupUsers
     */
    omit?: chatGroupUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupUsersInclude<ExtArgs> | null
    /**
     * The data needed to create a chatGroupUsers.
     */
    data: XOR<chatGroupUsersCreateInput, chatGroupUsersUncheckedCreateInput>
  }

  /**
   * chatGroupUsers createMany
   */
  export type chatGroupUsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chatGroupUsers.
     */
    data: chatGroupUsersCreateManyInput | chatGroupUsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chatGroupUsers createManyAndReturn
   */
  export type chatGroupUsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupUsers
     */
    select?: chatGroupUsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupUsers
     */
    omit?: chatGroupUsersOmit<ExtArgs> | null
    /**
     * The data used to create many chatGroupUsers.
     */
    data: chatGroupUsersCreateManyInput | chatGroupUsersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupUsersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * chatGroupUsers update
   */
  export type chatGroupUsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupUsers
     */
    select?: chatGroupUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupUsers
     */
    omit?: chatGroupUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupUsersInclude<ExtArgs> | null
    /**
     * The data needed to update a chatGroupUsers.
     */
    data: XOR<chatGroupUsersUpdateInput, chatGroupUsersUncheckedUpdateInput>
    /**
     * Choose, which chatGroupUsers to update.
     */
    where: chatGroupUsersWhereUniqueInput
  }

  /**
   * chatGroupUsers updateMany
   */
  export type chatGroupUsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chatGroupUsers.
     */
    data: XOR<chatGroupUsersUpdateManyMutationInput, chatGroupUsersUncheckedUpdateManyInput>
    /**
     * Filter which chatGroupUsers to update
     */
    where?: chatGroupUsersWhereInput
    /**
     * Limit how many chatGroupUsers to update.
     */
    limit?: number
  }

  /**
   * chatGroupUsers updateManyAndReturn
   */
  export type chatGroupUsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupUsers
     */
    select?: chatGroupUsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupUsers
     */
    omit?: chatGroupUsersOmit<ExtArgs> | null
    /**
     * The data used to update chatGroupUsers.
     */
    data: XOR<chatGroupUsersUpdateManyMutationInput, chatGroupUsersUncheckedUpdateManyInput>
    /**
     * Filter which chatGroupUsers to update
     */
    where?: chatGroupUsersWhereInput
    /**
     * Limit how many chatGroupUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupUsersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * chatGroupUsers upsert
   */
  export type chatGroupUsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupUsers
     */
    select?: chatGroupUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupUsers
     */
    omit?: chatGroupUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupUsersInclude<ExtArgs> | null
    /**
     * The filter to search for the chatGroupUsers to update in case it exists.
     */
    where: chatGroupUsersWhereUniqueInput
    /**
     * In case the chatGroupUsers found by the `where` argument doesn't exist, create a new chatGroupUsers with this data.
     */
    create: XOR<chatGroupUsersCreateInput, chatGroupUsersUncheckedCreateInput>
    /**
     * In case the chatGroupUsers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatGroupUsersUpdateInput, chatGroupUsersUncheckedUpdateInput>
  }

  /**
   * chatGroupUsers delete
   */
  export type chatGroupUsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupUsers
     */
    select?: chatGroupUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupUsers
     */
    omit?: chatGroupUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupUsersInclude<ExtArgs> | null
    /**
     * Filter which chatGroupUsers to delete.
     */
    where: chatGroupUsersWhereUniqueInput
  }

  /**
   * chatGroupUsers deleteMany
   */
  export type chatGroupUsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatGroupUsers to delete
     */
    where?: chatGroupUsersWhereInput
    /**
     * Limit how many chatGroupUsers to delete.
     */
    limit?: number
  }

  /**
   * chatGroupUsers without action
   */
  export type chatGroupUsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatGroupUsers
     */
    select?: chatGroupUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatGroupUsers
     */
    omit?: chatGroupUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatGroupUsersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    provider: 'provider',
    image: 'image',
    oauth_id: 'oauth_id',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatGroupScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    passcode: 'passcode',
    created_at: 'created_at'
  };

  export type ChatGroupScalarFieldEnum = (typeof ChatGroupScalarFieldEnum)[keyof typeof ChatGroupScalarFieldEnum]


  export const ChatGroupUsersScalarFieldEnum: {
    id: 'id',
    group_id: 'group_id',
    name: 'name',
    created_at: 'created_at'
  };

  export type ChatGroupUsersScalarFieldEnum = (typeof ChatGroupUsersScalarFieldEnum)[keyof typeof ChatGroupUsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    provider?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    oauth_id?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    chat_groups?: ChatGroupListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    image?: SortOrderInput | SortOrder
    oauth_id?: SortOrder
    created_at?: SortOrder
    chat_groups?: ChatGroupOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    provider?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    oauth_id?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    chat_groups?: ChatGroupListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    image?: SortOrderInput | SortOrder
    oauth_id?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    provider?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    oauth_id?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChatGroupWhereInput = {
    AND?: ChatGroupWhereInput | ChatGroupWhereInput[]
    OR?: ChatGroupWhereInput[]
    NOT?: ChatGroupWhereInput | ChatGroupWhereInput[]
    id?: UuidFilter<"ChatGroup"> | string
    user_id?: IntFilter<"ChatGroup"> | number
    title?: StringFilter<"ChatGroup"> | string
    passcode?: StringFilter<"ChatGroup"> | string
    created_at?: DateTimeFilter<"ChatGroup"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatGroupUsers?: ChatGroupUsersListRelationFilter
  }

  export type ChatGroupOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    passcode?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    chatGroupUsers?: chatGroupUsersOrderByRelationAggregateInput
  }

  export type ChatGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatGroupWhereInput | ChatGroupWhereInput[]
    OR?: ChatGroupWhereInput[]
    NOT?: ChatGroupWhereInput | ChatGroupWhereInput[]
    user_id?: IntFilter<"ChatGroup"> | number
    title?: StringFilter<"ChatGroup"> | string
    passcode?: StringFilter<"ChatGroup"> | string
    created_at?: DateTimeFilter<"ChatGroup"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatGroupUsers?: ChatGroupUsersListRelationFilter
  }, "id">

  export type ChatGroupOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    passcode?: SortOrder
    created_at?: SortOrder
    _count?: ChatGroupCountOrderByAggregateInput
    _avg?: ChatGroupAvgOrderByAggregateInput
    _max?: ChatGroupMaxOrderByAggregateInput
    _min?: ChatGroupMinOrderByAggregateInput
    _sum?: ChatGroupSumOrderByAggregateInput
  }

  export type ChatGroupScalarWhereWithAggregatesInput = {
    AND?: ChatGroupScalarWhereWithAggregatesInput | ChatGroupScalarWhereWithAggregatesInput[]
    OR?: ChatGroupScalarWhereWithAggregatesInput[]
    NOT?: ChatGroupScalarWhereWithAggregatesInput | ChatGroupScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ChatGroup"> | string
    user_id?: IntWithAggregatesFilter<"ChatGroup"> | number
    title?: StringWithAggregatesFilter<"ChatGroup"> | string
    passcode?: StringWithAggregatesFilter<"ChatGroup"> | string
    created_at?: DateTimeWithAggregatesFilter<"ChatGroup"> | Date | string
  }

  export type chatGroupUsersWhereInput = {
    AND?: chatGroupUsersWhereInput | chatGroupUsersWhereInput[]
    OR?: chatGroupUsersWhereInput[]
    NOT?: chatGroupUsersWhereInput | chatGroupUsersWhereInput[]
    id?: IntFilter<"chatGroupUsers"> | number
    group_id?: UuidFilter<"chatGroupUsers"> | string
    name?: StringFilter<"chatGroupUsers"> | string
    created_at?: DateTimeFilter<"chatGroupUsers"> | Date | string
    group?: XOR<ChatGroupScalarRelationFilter, ChatGroupWhereInput>
  }

  export type chatGroupUsersOrderByWithRelationInput = {
    id?: SortOrder
    group_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    group?: ChatGroupOrderByWithRelationInput
  }

  export type chatGroupUsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: chatGroupUsersWhereInput | chatGroupUsersWhereInput[]
    OR?: chatGroupUsersWhereInput[]
    NOT?: chatGroupUsersWhereInput | chatGroupUsersWhereInput[]
    group_id?: UuidFilter<"chatGroupUsers"> | string
    name?: StringFilter<"chatGroupUsers"> | string
    created_at?: DateTimeFilter<"chatGroupUsers"> | Date | string
    group?: XOR<ChatGroupScalarRelationFilter, ChatGroupWhereInput>
  }, "id">

  export type chatGroupUsersOrderByWithAggregationInput = {
    id?: SortOrder
    group_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    _count?: chatGroupUsersCountOrderByAggregateInput
    _avg?: chatGroupUsersAvgOrderByAggregateInput
    _max?: chatGroupUsersMaxOrderByAggregateInput
    _min?: chatGroupUsersMinOrderByAggregateInput
    _sum?: chatGroupUsersSumOrderByAggregateInput
  }

  export type chatGroupUsersScalarWhereWithAggregatesInput = {
    AND?: chatGroupUsersScalarWhereWithAggregatesInput | chatGroupUsersScalarWhereWithAggregatesInput[]
    OR?: chatGroupUsersScalarWhereWithAggregatesInput[]
    NOT?: chatGroupUsersScalarWhereWithAggregatesInput | chatGroupUsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chatGroupUsers"> | number
    group_id?: UuidWithAggregatesFilter<"chatGroupUsers"> | string
    name?: StringWithAggregatesFilter<"chatGroupUsers"> | string
    created_at?: DateTimeWithAggregatesFilter<"chatGroupUsers"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    provider: string
    image?: string | null
    oauth_id: string
    created_at?: Date | string
    chat_groups?: ChatGroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    provider: string
    image?: string | null
    oauth_id: string
    created_at?: Date | string
    chat_groups?: ChatGroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_groups?: ChatGroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_groups?: ChatGroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    provider: string
    image?: string | null
    oauth_id: string
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupCreateInput = {
    id?: string
    title: string
    passcode: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutChat_groupsInput
    chatGroupUsers?: chatGroupUsersCreateNestedManyWithoutGroupInput
  }

  export type ChatGroupUncheckedCreateInput = {
    id?: string
    user_id: number
    title: string
    passcode: string
    created_at?: Date | string
    chatGroupUsers?: chatGroupUsersUncheckedCreateNestedManyWithoutGroupInput
  }

  export type ChatGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChat_groupsNestedInput
    chatGroupUsers?: chatGroupUsersUpdateManyWithoutGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chatGroupUsers?: chatGroupUsersUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type ChatGroupCreateManyInput = {
    id?: string
    user_id: number
    title: string
    passcode: string
    created_at?: Date | string
  }

  export type ChatGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatGroupUsersCreateInput = {
    name: string
    created_at?: Date | string
    group: ChatGroupCreateNestedOneWithoutChatGroupUsersInput
  }

  export type chatGroupUsersUncheckedCreateInput = {
    id?: number
    group_id: string
    name: string
    created_at?: Date | string
  }

  export type chatGroupUsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: ChatGroupUpdateOneRequiredWithoutChatGroupUsersNestedInput
  }

  export type chatGroupUsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    group_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatGroupUsersCreateManyInput = {
    id?: number
    group_id: string
    name: string
    created_at?: Date | string
  }

  export type chatGroupUsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatGroupUsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    group_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ChatGroupListRelationFilter = {
    every?: ChatGroupWhereInput
    some?: ChatGroupWhereInput
    none?: ChatGroupWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChatGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    image?: SortOrder
    oauth_id?: SortOrder
    created_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    image?: SortOrder
    oauth_id?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    image?: SortOrder
    oauth_id?: SortOrder
    created_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChatGroupUsersListRelationFilter = {
    every?: chatGroupUsersWhereInput
    some?: chatGroupUsersWhereInput
    none?: chatGroupUsersWhereInput
  }

  export type chatGroupUsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatGroupCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    passcode?: SortOrder
    created_at?: SortOrder
  }

  export type ChatGroupAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type ChatGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    passcode?: SortOrder
    created_at?: SortOrder
  }

  export type ChatGroupMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    passcode?: SortOrder
    created_at?: SortOrder
  }

  export type ChatGroupSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ChatGroupScalarRelationFilter = {
    is?: ChatGroupWhereInput
    isNot?: ChatGroupWhereInput
  }

  export type chatGroupUsersCountOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type chatGroupUsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type chatGroupUsersMaxOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type chatGroupUsersMinOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type chatGroupUsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatGroupCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatGroupCreateWithoutUserInput, ChatGroupUncheckedCreateWithoutUserInput> | ChatGroupCreateWithoutUserInput[] | ChatGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutUserInput | ChatGroupCreateOrConnectWithoutUserInput[]
    createMany?: ChatGroupCreateManyUserInputEnvelope
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
  }

  export type ChatGroupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatGroupCreateWithoutUserInput, ChatGroupUncheckedCreateWithoutUserInput> | ChatGroupCreateWithoutUserInput[] | ChatGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutUserInput | ChatGroupCreateOrConnectWithoutUserInput[]
    createMany?: ChatGroupCreateManyUserInputEnvelope
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChatGroupUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatGroupCreateWithoutUserInput, ChatGroupUncheckedCreateWithoutUserInput> | ChatGroupCreateWithoutUserInput[] | ChatGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutUserInput | ChatGroupCreateOrConnectWithoutUserInput[]
    upsert?: ChatGroupUpsertWithWhereUniqueWithoutUserInput | ChatGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatGroupCreateManyUserInputEnvelope
    set?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    disconnect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    delete?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    update?: ChatGroupUpdateWithWhereUniqueWithoutUserInput | ChatGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatGroupUpdateManyWithWhereWithoutUserInput | ChatGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChatGroupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatGroupCreateWithoutUserInput, ChatGroupUncheckedCreateWithoutUserInput> | ChatGroupCreateWithoutUserInput[] | ChatGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutUserInput | ChatGroupCreateOrConnectWithoutUserInput[]
    upsert?: ChatGroupUpsertWithWhereUniqueWithoutUserInput | ChatGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatGroupCreateManyUserInputEnvelope
    set?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    disconnect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    delete?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    update?: ChatGroupUpdateWithWhereUniqueWithoutUserInput | ChatGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatGroupUpdateManyWithWhereWithoutUserInput | ChatGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChat_groupsInput = {
    create?: XOR<UserCreateWithoutChat_groupsInput, UserUncheckedCreateWithoutChat_groupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChat_groupsInput
    connect?: UserWhereUniqueInput
  }

  export type chatGroupUsersCreateNestedManyWithoutGroupInput = {
    create?: XOR<chatGroupUsersCreateWithoutGroupInput, chatGroupUsersUncheckedCreateWithoutGroupInput> | chatGroupUsersCreateWithoutGroupInput[] | chatGroupUsersUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: chatGroupUsersCreateOrConnectWithoutGroupInput | chatGroupUsersCreateOrConnectWithoutGroupInput[]
    createMany?: chatGroupUsersCreateManyGroupInputEnvelope
    connect?: chatGroupUsersWhereUniqueInput | chatGroupUsersWhereUniqueInput[]
  }

  export type chatGroupUsersUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<chatGroupUsersCreateWithoutGroupInput, chatGroupUsersUncheckedCreateWithoutGroupInput> | chatGroupUsersCreateWithoutGroupInput[] | chatGroupUsersUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: chatGroupUsersCreateOrConnectWithoutGroupInput | chatGroupUsersCreateOrConnectWithoutGroupInput[]
    createMany?: chatGroupUsersCreateManyGroupInputEnvelope
    connect?: chatGroupUsersWhereUniqueInput | chatGroupUsersWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutChat_groupsNestedInput = {
    create?: XOR<UserCreateWithoutChat_groupsInput, UserUncheckedCreateWithoutChat_groupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChat_groupsInput
    upsert?: UserUpsertWithoutChat_groupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChat_groupsInput, UserUpdateWithoutChat_groupsInput>, UserUncheckedUpdateWithoutChat_groupsInput>
  }

  export type chatGroupUsersUpdateManyWithoutGroupNestedInput = {
    create?: XOR<chatGroupUsersCreateWithoutGroupInput, chatGroupUsersUncheckedCreateWithoutGroupInput> | chatGroupUsersCreateWithoutGroupInput[] | chatGroupUsersUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: chatGroupUsersCreateOrConnectWithoutGroupInput | chatGroupUsersCreateOrConnectWithoutGroupInput[]
    upsert?: chatGroupUsersUpsertWithWhereUniqueWithoutGroupInput | chatGroupUsersUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: chatGroupUsersCreateManyGroupInputEnvelope
    set?: chatGroupUsersWhereUniqueInput | chatGroupUsersWhereUniqueInput[]
    disconnect?: chatGroupUsersWhereUniqueInput | chatGroupUsersWhereUniqueInput[]
    delete?: chatGroupUsersWhereUniqueInput | chatGroupUsersWhereUniqueInput[]
    connect?: chatGroupUsersWhereUniqueInput | chatGroupUsersWhereUniqueInput[]
    update?: chatGroupUsersUpdateWithWhereUniqueWithoutGroupInput | chatGroupUsersUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: chatGroupUsersUpdateManyWithWhereWithoutGroupInput | chatGroupUsersUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: chatGroupUsersScalarWhereInput | chatGroupUsersScalarWhereInput[]
  }

  export type chatGroupUsersUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<chatGroupUsersCreateWithoutGroupInput, chatGroupUsersUncheckedCreateWithoutGroupInput> | chatGroupUsersCreateWithoutGroupInput[] | chatGroupUsersUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: chatGroupUsersCreateOrConnectWithoutGroupInput | chatGroupUsersCreateOrConnectWithoutGroupInput[]
    upsert?: chatGroupUsersUpsertWithWhereUniqueWithoutGroupInput | chatGroupUsersUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: chatGroupUsersCreateManyGroupInputEnvelope
    set?: chatGroupUsersWhereUniqueInput | chatGroupUsersWhereUniqueInput[]
    disconnect?: chatGroupUsersWhereUniqueInput | chatGroupUsersWhereUniqueInput[]
    delete?: chatGroupUsersWhereUniqueInput | chatGroupUsersWhereUniqueInput[]
    connect?: chatGroupUsersWhereUniqueInput | chatGroupUsersWhereUniqueInput[]
    update?: chatGroupUsersUpdateWithWhereUniqueWithoutGroupInput | chatGroupUsersUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: chatGroupUsersUpdateManyWithWhereWithoutGroupInput | chatGroupUsersUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: chatGroupUsersScalarWhereInput | chatGroupUsersScalarWhereInput[]
  }

  export type ChatGroupCreateNestedOneWithoutChatGroupUsersInput = {
    create?: XOR<ChatGroupCreateWithoutChatGroupUsersInput, ChatGroupUncheckedCreateWithoutChatGroupUsersInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutChatGroupUsersInput
    connect?: ChatGroupWhereUniqueInput
  }

  export type ChatGroupUpdateOneRequiredWithoutChatGroupUsersNestedInput = {
    create?: XOR<ChatGroupCreateWithoutChatGroupUsersInput, ChatGroupUncheckedCreateWithoutChatGroupUsersInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutChatGroupUsersInput
    upsert?: ChatGroupUpsertWithoutChatGroupUsersInput
    connect?: ChatGroupWhereUniqueInput
    update?: XOR<XOR<ChatGroupUpdateToOneWithWhereWithoutChatGroupUsersInput, ChatGroupUpdateWithoutChatGroupUsersInput>, ChatGroupUncheckedUpdateWithoutChatGroupUsersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ChatGroupCreateWithoutUserInput = {
    id?: string
    title: string
    passcode: string
    created_at?: Date | string
    chatGroupUsers?: chatGroupUsersCreateNestedManyWithoutGroupInput
  }

  export type ChatGroupUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    passcode: string
    created_at?: Date | string
    chatGroupUsers?: chatGroupUsersUncheckedCreateNestedManyWithoutGroupInput
  }

  export type ChatGroupCreateOrConnectWithoutUserInput = {
    where: ChatGroupWhereUniqueInput
    create: XOR<ChatGroupCreateWithoutUserInput, ChatGroupUncheckedCreateWithoutUserInput>
  }

  export type ChatGroupCreateManyUserInputEnvelope = {
    data: ChatGroupCreateManyUserInput | ChatGroupCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatGroupUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatGroupWhereUniqueInput
    update: XOR<ChatGroupUpdateWithoutUserInput, ChatGroupUncheckedUpdateWithoutUserInput>
    create: XOR<ChatGroupCreateWithoutUserInput, ChatGroupUncheckedCreateWithoutUserInput>
  }

  export type ChatGroupUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatGroupWhereUniqueInput
    data: XOR<ChatGroupUpdateWithoutUserInput, ChatGroupUncheckedUpdateWithoutUserInput>
  }

  export type ChatGroupUpdateManyWithWhereWithoutUserInput = {
    where: ChatGroupScalarWhereInput
    data: XOR<ChatGroupUpdateManyMutationInput, ChatGroupUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatGroupScalarWhereInput = {
    AND?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
    OR?: ChatGroupScalarWhereInput[]
    NOT?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
    id?: UuidFilter<"ChatGroup"> | string
    user_id?: IntFilter<"ChatGroup"> | number
    title?: StringFilter<"ChatGroup"> | string
    passcode?: StringFilter<"ChatGroup"> | string
    created_at?: DateTimeFilter<"ChatGroup"> | Date | string
  }

  export type UserCreateWithoutChat_groupsInput = {
    name: string
    email: string
    provider: string
    image?: string | null
    oauth_id: string
    created_at?: Date | string
  }

  export type UserUncheckedCreateWithoutChat_groupsInput = {
    id?: number
    name: string
    email: string
    provider: string
    image?: string | null
    oauth_id: string
    created_at?: Date | string
  }

  export type UserCreateOrConnectWithoutChat_groupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChat_groupsInput, UserUncheckedCreateWithoutChat_groupsInput>
  }

  export type chatGroupUsersCreateWithoutGroupInput = {
    name: string
    created_at?: Date | string
  }

  export type chatGroupUsersUncheckedCreateWithoutGroupInput = {
    id?: number
    name: string
    created_at?: Date | string
  }

  export type chatGroupUsersCreateOrConnectWithoutGroupInput = {
    where: chatGroupUsersWhereUniqueInput
    create: XOR<chatGroupUsersCreateWithoutGroupInput, chatGroupUsersUncheckedCreateWithoutGroupInput>
  }

  export type chatGroupUsersCreateManyGroupInputEnvelope = {
    data: chatGroupUsersCreateManyGroupInput | chatGroupUsersCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChat_groupsInput = {
    update: XOR<UserUpdateWithoutChat_groupsInput, UserUncheckedUpdateWithoutChat_groupsInput>
    create: XOR<UserCreateWithoutChat_groupsInput, UserUncheckedCreateWithoutChat_groupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChat_groupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChat_groupsInput, UserUncheckedUpdateWithoutChat_groupsInput>
  }

  export type UserUpdateWithoutChat_groupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutChat_groupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatGroupUsersUpsertWithWhereUniqueWithoutGroupInput = {
    where: chatGroupUsersWhereUniqueInput
    update: XOR<chatGroupUsersUpdateWithoutGroupInput, chatGroupUsersUncheckedUpdateWithoutGroupInput>
    create: XOR<chatGroupUsersCreateWithoutGroupInput, chatGroupUsersUncheckedCreateWithoutGroupInput>
  }

  export type chatGroupUsersUpdateWithWhereUniqueWithoutGroupInput = {
    where: chatGroupUsersWhereUniqueInput
    data: XOR<chatGroupUsersUpdateWithoutGroupInput, chatGroupUsersUncheckedUpdateWithoutGroupInput>
  }

  export type chatGroupUsersUpdateManyWithWhereWithoutGroupInput = {
    where: chatGroupUsersScalarWhereInput
    data: XOR<chatGroupUsersUpdateManyMutationInput, chatGroupUsersUncheckedUpdateManyWithoutGroupInput>
  }

  export type chatGroupUsersScalarWhereInput = {
    AND?: chatGroupUsersScalarWhereInput | chatGroupUsersScalarWhereInput[]
    OR?: chatGroupUsersScalarWhereInput[]
    NOT?: chatGroupUsersScalarWhereInput | chatGroupUsersScalarWhereInput[]
    id?: IntFilter<"chatGroupUsers"> | number
    group_id?: UuidFilter<"chatGroupUsers"> | string
    name?: StringFilter<"chatGroupUsers"> | string
    created_at?: DateTimeFilter<"chatGroupUsers"> | Date | string
  }

  export type ChatGroupCreateWithoutChatGroupUsersInput = {
    id?: string
    title: string
    passcode: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutChat_groupsInput
  }

  export type ChatGroupUncheckedCreateWithoutChatGroupUsersInput = {
    id?: string
    user_id: number
    title: string
    passcode: string
    created_at?: Date | string
  }

  export type ChatGroupCreateOrConnectWithoutChatGroupUsersInput = {
    where: ChatGroupWhereUniqueInput
    create: XOR<ChatGroupCreateWithoutChatGroupUsersInput, ChatGroupUncheckedCreateWithoutChatGroupUsersInput>
  }

  export type ChatGroupUpsertWithoutChatGroupUsersInput = {
    update: XOR<ChatGroupUpdateWithoutChatGroupUsersInput, ChatGroupUncheckedUpdateWithoutChatGroupUsersInput>
    create: XOR<ChatGroupCreateWithoutChatGroupUsersInput, ChatGroupUncheckedCreateWithoutChatGroupUsersInput>
    where?: ChatGroupWhereInput
  }

  export type ChatGroupUpdateToOneWithWhereWithoutChatGroupUsersInput = {
    where?: ChatGroupWhereInput
    data: XOR<ChatGroupUpdateWithoutChatGroupUsersInput, ChatGroupUncheckedUpdateWithoutChatGroupUsersInput>
  }

  export type ChatGroupUpdateWithoutChatGroupUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChat_groupsNestedInput
  }

  export type ChatGroupUncheckedUpdateWithoutChatGroupUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupCreateManyUserInput = {
    id?: string
    title: string
    passcode: string
    created_at?: Date | string
  }

  export type ChatGroupUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chatGroupUsers?: chatGroupUsersUpdateManyWithoutGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chatGroupUsers?: chatGroupUsersUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatGroupUsersCreateManyGroupInput = {
    id?: number
    name: string
    created_at?: Date | string
  }

  export type chatGroupUsersUpdateWithoutGroupInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatGroupUsersUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatGroupUsersUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}