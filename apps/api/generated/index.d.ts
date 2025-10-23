
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
 * Model LLMModel
 * 
 */
export type LLMModel = $Result.DefaultSelection<Prisma.$LLMModelPayload>
/**
 * Model SamplingProfile
 * 
 */
export type SamplingProfile = $Result.DefaultSelection<Prisma.$SamplingProfilePayload>
/**
 * Model Prompt
 * 
 */
export type Prompt = $Result.DefaultSelection<Prisma.$PromptPayload>
/**
 * Model ModelToPrompt
 * 
 */
export type ModelToPrompt = $Result.DefaultSelection<Prisma.$ModelToPromptPayload>
/**
 * Model ProfileToPrompt
 * 
 */
export type ProfileToPrompt = $Result.DefaultSelection<Prisma.$ProfileToPromptPayload>
/**
 * Model PromptResponse
 * 
 */
export type PromptResponse = $Result.DefaultSelection<Prisma.$PromptResponsePayload>
/**
 * Model LengthMetrics
 * 
 */
export type LengthMetrics = $Result.DefaultSelection<Prisma.$LengthMetricsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more LLMModels
 * const lLMModels = await prisma.lLMModel.findMany()
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
   * // Fetch zero or more LLMModels
   * const lLMModels = await prisma.lLMModel.findMany()
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
   * `prisma.lLMModel`: Exposes CRUD operations for the **LLMModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LLMModels
    * const lLMModels = await prisma.lLMModel.findMany()
    * ```
    */
  get lLMModel(): Prisma.LLMModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.samplingProfile`: Exposes CRUD operations for the **SamplingProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SamplingProfiles
    * const samplingProfiles = await prisma.samplingProfile.findMany()
    * ```
    */
  get samplingProfile(): Prisma.SamplingProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prompt`: Exposes CRUD operations for the **Prompt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prompts
    * const prompts = await prisma.prompt.findMany()
    * ```
    */
  get prompt(): Prisma.PromptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modelToPrompt`: Exposes CRUD operations for the **ModelToPrompt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModelToPrompts
    * const modelToPrompts = await prisma.modelToPrompt.findMany()
    * ```
    */
  get modelToPrompt(): Prisma.ModelToPromptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profileToPrompt`: Exposes CRUD operations for the **ProfileToPrompt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfileToPrompts
    * const profileToPrompts = await prisma.profileToPrompt.findMany()
    * ```
    */
  get profileToPrompt(): Prisma.ProfileToPromptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promptResponse`: Exposes CRUD operations for the **PromptResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromptResponses
    * const promptResponses = await prisma.promptResponse.findMany()
    * ```
    */
  get promptResponse(): Prisma.PromptResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lengthMetrics`: Exposes CRUD operations for the **LengthMetrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LengthMetrics
    * const lengthMetrics = await prisma.lengthMetrics.findMany()
    * ```
    */
  get lengthMetrics(): Prisma.LengthMetricsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    LLMModel: 'LLMModel',
    SamplingProfile: 'SamplingProfile',
    Prompt: 'Prompt',
    ModelToPrompt: 'ModelToPrompt',
    ProfileToPrompt: 'ProfileToPrompt',
    PromptResponse: 'PromptResponse',
    LengthMetrics: 'LengthMetrics'
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
      modelProps: "lLMModel" | "samplingProfile" | "prompt" | "modelToPrompt" | "profileToPrompt" | "promptResponse" | "lengthMetrics"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      LLMModel: {
        payload: Prisma.$LLMModelPayload<ExtArgs>
        fields: Prisma.LLMModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LLMModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LLMModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LLMModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LLMModelPayload>
          }
          findFirst: {
            args: Prisma.LLMModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LLMModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LLMModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LLMModelPayload>
          }
          findMany: {
            args: Prisma.LLMModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LLMModelPayload>[]
          }
          create: {
            args: Prisma.LLMModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LLMModelPayload>
          }
          createMany: {
            args: Prisma.LLMModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LLMModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LLMModelPayload>[]
          }
          delete: {
            args: Prisma.LLMModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LLMModelPayload>
          }
          update: {
            args: Prisma.LLMModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LLMModelPayload>
          }
          deleteMany: {
            args: Prisma.LLMModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LLMModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LLMModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LLMModelPayload>[]
          }
          upsert: {
            args: Prisma.LLMModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LLMModelPayload>
          }
          aggregate: {
            args: Prisma.LLMModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLLMModel>
          }
          groupBy: {
            args: Prisma.LLMModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<LLMModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.LLMModelCountArgs<ExtArgs>
            result: $Utils.Optional<LLMModelCountAggregateOutputType> | number
          }
        }
      }
      SamplingProfile: {
        payload: Prisma.$SamplingProfilePayload<ExtArgs>
        fields: Prisma.SamplingProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SamplingProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplingProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SamplingProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplingProfilePayload>
          }
          findFirst: {
            args: Prisma.SamplingProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplingProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SamplingProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplingProfilePayload>
          }
          findMany: {
            args: Prisma.SamplingProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplingProfilePayload>[]
          }
          create: {
            args: Prisma.SamplingProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplingProfilePayload>
          }
          createMany: {
            args: Prisma.SamplingProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SamplingProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplingProfilePayload>[]
          }
          delete: {
            args: Prisma.SamplingProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplingProfilePayload>
          }
          update: {
            args: Prisma.SamplingProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplingProfilePayload>
          }
          deleteMany: {
            args: Prisma.SamplingProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SamplingProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SamplingProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplingProfilePayload>[]
          }
          upsert: {
            args: Prisma.SamplingProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplingProfilePayload>
          }
          aggregate: {
            args: Prisma.SamplingProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSamplingProfile>
          }
          groupBy: {
            args: Prisma.SamplingProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<SamplingProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.SamplingProfileCountArgs<ExtArgs>
            result: $Utils.Optional<SamplingProfileCountAggregateOutputType> | number
          }
        }
      }
      Prompt: {
        payload: Prisma.$PromptPayload<ExtArgs>
        fields: Prisma.PromptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          findFirst: {
            args: Prisma.PromptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          findMany: {
            args: Prisma.PromptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          create: {
            args: Prisma.PromptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          createMany: {
            args: Prisma.PromptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          delete: {
            args: Prisma.PromptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          update: {
            args: Prisma.PromptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          deleteMany: {
            args: Prisma.PromptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          upsert: {
            args: Prisma.PromptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          aggregate: {
            args: Prisma.PromptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrompt>
          }
          groupBy: {
            args: Prisma.PromptGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromptGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptCountArgs<ExtArgs>
            result: $Utils.Optional<PromptCountAggregateOutputType> | number
          }
        }
      }
      ModelToPrompt: {
        payload: Prisma.$ModelToPromptPayload<ExtArgs>
        fields: Prisma.ModelToPromptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelToPromptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelToPromptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelToPromptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelToPromptPayload>
          }
          findFirst: {
            args: Prisma.ModelToPromptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelToPromptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelToPromptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelToPromptPayload>
          }
          findMany: {
            args: Prisma.ModelToPromptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelToPromptPayload>[]
          }
          create: {
            args: Prisma.ModelToPromptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelToPromptPayload>
          }
          createMany: {
            args: Prisma.ModelToPromptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelToPromptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelToPromptPayload>[]
          }
          delete: {
            args: Prisma.ModelToPromptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelToPromptPayload>
          }
          update: {
            args: Prisma.ModelToPromptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelToPromptPayload>
          }
          deleteMany: {
            args: Prisma.ModelToPromptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelToPromptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModelToPromptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelToPromptPayload>[]
          }
          upsert: {
            args: Prisma.ModelToPromptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelToPromptPayload>
          }
          aggregate: {
            args: Prisma.ModelToPromptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModelToPrompt>
          }
          groupBy: {
            args: Prisma.ModelToPromptGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelToPromptGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelToPromptCountArgs<ExtArgs>
            result: $Utils.Optional<ModelToPromptCountAggregateOutputType> | number
          }
        }
      }
      ProfileToPrompt: {
        payload: Prisma.$ProfileToPromptPayload<ExtArgs>
        fields: Prisma.ProfileToPromptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileToPromptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileToPromptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileToPromptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileToPromptPayload>
          }
          findFirst: {
            args: Prisma.ProfileToPromptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileToPromptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileToPromptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileToPromptPayload>
          }
          findMany: {
            args: Prisma.ProfileToPromptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileToPromptPayload>[]
          }
          create: {
            args: Prisma.ProfileToPromptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileToPromptPayload>
          }
          createMany: {
            args: Prisma.ProfileToPromptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileToPromptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileToPromptPayload>[]
          }
          delete: {
            args: Prisma.ProfileToPromptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileToPromptPayload>
          }
          update: {
            args: Prisma.ProfileToPromptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileToPromptPayload>
          }
          deleteMany: {
            args: Prisma.ProfileToPromptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileToPromptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileToPromptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileToPromptPayload>[]
          }
          upsert: {
            args: Prisma.ProfileToPromptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileToPromptPayload>
          }
          aggregate: {
            args: Prisma.ProfileToPromptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfileToPrompt>
          }
          groupBy: {
            args: Prisma.ProfileToPromptGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileToPromptGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileToPromptCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileToPromptCountAggregateOutputType> | number
          }
        }
      }
      PromptResponse: {
        payload: Prisma.$PromptResponsePayload<ExtArgs>
        fields: Prisma.PromptResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>
          }
          findFirst: {
            args: Prisma.PromptResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>
          }
          findMany: {
            args: Prisma.PromptResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>[]
          }
          create: {
            args: Prisma.PromptResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>
          }
          createMany: {
            args: Prisma.PromptResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromptResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>[]
          }
          delete: {
            args: Prisma.PromptResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>
          }
          update: {
            args: Prisma.PromptResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>
          }
          deleteMany: {
            args: Prisma.PromptResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromptResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromptResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>[]
          }
          upsert: {
            args: Prisma.PromptResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>
          }
          aggregate: {
            args: Prisma.PromptResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromptResponse>
          }
          groupBy: {
            args: Prisma.PromptResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromptResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptResponseCountArgs<ExtArgs>
            result: $Utils.Optional<PromptResponseCountAggregateOutputType> | number
          }
        }
      }
      LengthMetrics: {
        payload: Prisma.$LengthMetricsPayload<ExtArgs>
        fields: Prisma.LengthMetricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LengthMetricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LengthMetricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LengthMetricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LengthMetricsPayload>
          }
          findFirst: {
            args: Prisma.LengthMetricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LengthMetricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LengthMetricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LengthMetricsPayload>
          }
          findMany: {
            args: Prisma.LengthMetricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LengthMetricsPayload>[]
          }
          create: {
            args: Prisma.LengthMetricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LengthMetricsPayload>
          }
          createMany: {
            args: Prisma.LengthMetricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LengthMetricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LengthMetricsPayload>[]
          }
          delete: {
            args: Prisma.LengthMetricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LengthMetricsPayload>
          }
          update: {
            args: Prisma.LengthMetricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LengthMetricsPayload>
          }
          deleteMany: {
            args: Prisma.LengthMetricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LengthMetricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LengthMetricsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LengthMetricsPayload>[]
          }
          upsert: {
            args: Prisma.LengthMetricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LengthMetricsPayload>
          }
          aggregate: {
            args: Prisma.LengthMetricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLengthMetrics>
          }
          groupBy: {
            args: Prisma.LengthMetricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LengthMetricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LengthMetricsCountArgs<ExtArgs>
            result: $Utils.Optional<LengthMetricsCountAggregateOutputType> | number
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
    lLMModel?: LLMModelOmit
    samplingProfile?: SamplingProfileOmit
    prompt?: PromptOmit
    modelToPrompt?: ModelToPromptOmit
    profileToPrompt?: ProfileToPromptOmit
    promptResponse?: PromptResponseOmit
    lengthMetrics?: LengthMetricsOmit
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
   * Count Type LLMModelCountOutputType
   */

  export type LLMModelCountOutputType = {
    prompts: number
    responses: number
  }

  export type LLMModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompts?: boolean | LLMModelCountOutputTypeCountPromptsArgs
    responses?: boolean | LLMModelCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * LLMModelCountOutputType without action
   */
  export type LLMModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LLMModelCountOutputType
     */
    select?: LLMModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LLMModelCountOutputType without action
   */
  export type LLMModelCountOutputTypeCountPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelToPromptWhereInput
  }

  /**
   * LLMModelCountOutputType without action
   */
  export type LLMModelCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptResponseWhereInput
  }


  /**
   * Count Type SamplingProfileCountOutputType
   */

  export type SamplingProfileCountOutputType = {
    prompts: number
    responses: number
  }

  export type SamplingProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompts?: boolean | SamplingProfileCountOutputTypeCountPromptsArgs
    responses?: boolean | SamplingProfileCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * SamplingProfileCountOutputType without action
   */
  export type SamplingProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SamplingProfileCountOutputType
     */
    select?: SamplingProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SamplingProfileCountOutputType without action
   */
  export type SamplingProfileCountOutputTypeCountPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileToPromptWhereInput
  }

  /**
   * SamplingProfileCountOutputType without action
   */
  export type SamplingProfileCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptResponseWhereInput
  }


  /**
   * Count Type PromptCountOutputType
   */

  export type PromptCountOutputType = {
    profiles: number
    models: number
    responses: number
  }

  export type PromptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiles?: boolean | PromptCountOutputTypeCountProfilesArgs
    models?: boolean | PromptCountOutputTypeCountModelsArgs
    responses?: boolean | PromptCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * PromptCountOutputType without action
   */
  export type PromptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptCountOutputType
     */
    select?: PromptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromptCountOutputType without action
   */
  export type PromptCountOutputTypeCountProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileToPromptWhereInput
  }

  /**
   * PromptCountOutputType without action
   */
  export type PromptCountOutputTypeCountModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelToPromptWhereInput
  }

  /**
   * PromptCountOutputType without action
   */
  export type PromptCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model LLMModel
   */

  export type AggregateLLMModel = {
    _count: LLMModelCountAggregateOutputType | null
    _avg: LLMModelAvgAggregateOutputType | null
    _sum: LLMModelSumAggregateOutputType | null
    _min: LLMModelMinAggregateOutputType | null
    _max: LLMModelMaxAggregateOutputType | null
  }

  export type LLMModelAvgAggregateOutputType = {
    rpm: number | null
    rpd: number | null
    tpm: number | null
  }

  export type LLMModelSumAggregateOutputType = {
    rpm: number | null
    rpd: number | null
    tpm: number | null
  }

  export type LLMModelMinAggregateOutputType = {
    id: string | null
    name: string | null
    rpm: number | null
    rpd: number | null
    tpm: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LLMModelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    rpm: number | null
    rpd: number | null
    tpm: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LLMModelCountAggregateOutputType = {
    id: number
    name: number
    rpm: number
    rpd: number
    tpm: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LLMModelAvgAggregateInputType = {
    rpm?: true
    rpd?: true
    tpm?: true
  }

  export type LLMModelSumAggregateInputType = {
    rpm?: true
    rpd?: true
    tpm?: true
  }

  export type LLMModelMinAggregateInputType = {
    id?: true
    name?: true
    rpm?: true
    rpd?: true
    tpm?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LLMModelMaxAggregateInputType = {
    id?: true
    name?: true
    rpm?: true
    rpd?: true
    tpm?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LLMModelCountAggregateInputType = {
    id?: true
    name?: true
    rpm?: true
    rpd?: true
    tpm?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LLMModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LLMModel to aggregate.
     */
    where?: LLMModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LLMModels to fetch.
     */
    orderBy?: LLMModelOrderByWithRelationInput | LLMModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LLMModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LLMModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LLMModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LLMModels
    **/
    _count?: true | LLMModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LLMModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LLMModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LLMModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LLMModelMaxAggregateInputType
  }

  export type GetLLMModelAggregateType<T extends LLMModelAggregateArgs> = {
        [P in keyof T & keyof AggregateLLMModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLLMModel[P]>
      : GetScalarType<T[P], AggregateLLMModel[P]>
  }




  export type LLMModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LLMModelWhereInput
    orderBy?: LLMModelOrderByWithAggregationInput | LLMModelOrderByWithAggregationInput[]
    by: LLMModelScalarFieldEnum[] | LLMModelScalarFieldEnum
    having?: LLMModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LLMModelCountAggregateInputType | true
    _avg?: LLMModelAvgAggregateInputType
    _sum?: LLMModelSumAggregateInputType
    _min?: LLMModelMinAggregateInputType
    _max?: LLMModelMaxAggregateInputType
  }

  export type LLMModelGroupByOutputType = {
    id: string
    name: string
    rpm: number
    rpd: number
    tpm: number
    createdAt: Date
    updatedAt: Date
    _count: LLMModelCountAggregateOutputType | null
    _avg: LLMModelAvgAggregateOutputType | null
    _sum: LLMModelSumAggregateOutputType | null
    _min: LLMModelMinAggregateOutputType | null
    _max: LLMModelMaxAggregateOutputType | null
  }

  type GetLLMModelGroupByPayload<T extends LLMModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LLMModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LLMModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LLMModelGroupByOutputType[P]>
            : GetScalarType<T[P], LLMModelGroupByOutputType[P]>
        }
      >
    >


  export type LLMModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rpm?: boolean
    rpd?: boolean
    tpm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prompts?: boolean | LLMModel$promptsArgs<ExtArgs>
    responses?: boolean | LLMModel$responsesArgs<ExtArgs>
    _count?: boolean | LLMModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lLMModel"]>

  export type LLMModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rpm?: boolean
    rpd?: boolean
    tpm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["lLMModel"]>

  export type LLMModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rpm?: boolean
    rpd?: boolean
    tpm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["lLMModel"]>

  export type LLMModelSelectScalar = {
    id?: boolean
    name?: boolean
    rpm?: boolean
    rpd?: boolean
    tpm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LLMModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "rpm" | "rpd" | "tpm" | "createdAt" | "updatedAt", ExtArgs["result"]["lLMModel"]>
  export type LLMModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompts?: boolean | LLMModel$promptsArgs<ExtArgs>
    responses?: boolean | LLMModel$responsesArgs<ExtArgs>
    _count?: boolean | LLMModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LLMModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LLMModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LLMModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LLMModel"
    objects: {
      prompts: Prisma.$ModelToPromptPayload<ExtArgs>[]
      responses: Prisma.$PromptResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      rpm: number
      rpd: number
      tpm: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lLMModel"]>
    composites: {}
  }

  type LLMModelGetPayload<S extends boolean | null | undefined | LLMModelDefaultArgs> = $Result.GetResult<Prisma.$LLMModelPayload, S>

  type LLMModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LLMModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LLMModelCountAggregateInputType | true
    }

  export interface LLMModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LLMModel'], meta: { name: 'LLMModel' } }
    /**
     * Find zero or one LLMModel that matches the filter.
     * @param {LLMModelFindUniqueArgs} args - Arguments to find a LLMModel
     * @example
     * // Get one LLMModel
     * const lLMModel = await prisma.lLMModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LLMModelFindUniqueArgs>(args: SelectSubset<T, LLMModelFindUniqueArgs<ExtArgs>>): Prisma__LLMModelClient<$Result.GetResult<Prisma.$LLMModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LLMModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LLMModelFindUniqueOrThrowArgs} args - Arguments to find a LLMModel
     * @example
     * // Get one LLMModel
     * const lLMModel = await prisma.lLMModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LLMModelFindUniqueOrThrowArgs>(args: SelectSubset<T, LLMModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LLMModelClient<$Result.GetResult<Prisma.$LLMModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LLMModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LLMModelFindFirstArgs} args - Arguments to find a LLMModel
     * @example
     * // Get one LLMModel
     * const lLMModel = await prisma.lLMModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LLMModelFindFirstArgs>(args?: SelectSubset<T, LLMModelFindFirstArgs<ExtArgs>>): Prisma__LLMModelClient<$Result.GetResult<Prisma.$LLMModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LLMModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LLMModelFindFirstOrThrowArgs} args - Arguments to find a LLMModel
     * @example
     * // Get one LLMModel
     * const lLMModel = await prisma.lLMModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LLMModelFindFirstOrThrowArgs>(args?: SelectSubset<T, LLMModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__LLMModelClient<$Result.GetResult<Prisma.$LLMModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LLMModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LLMModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LLMModels
     * const lLMModels = await prisma.lLMModel.findMany()
     * 
     * // Get first 10 LLMModels
     * const lLMModels = await prisma.lLMModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lLMModelWithIdOnly = await prisma.lLMModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LLMModelFindManyArgs>(args?: SelectSubset<T, LLMModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LLMModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LLMModel.
     * @param {LLMModelCreateArgs} args - Arguments to create a LLMModel.
     * @example
     * // Create one LLMModel
     * const LLMModel = await prisma.lLMModel.create({
     *   data: {
     *     // ... data to create a LLMModel
     *   }
     * })
     * 
     */
    create<T extends LLMModelCreateArgs>(args: SelectSubset<T, LLMModelCreateArgs<ExtArgs>>): Prisma__LLMModelClient<$Result.GetResult<Prisma.$LLMModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LLMModels.
     * @param {LLMModelCreateManyArgs} args - Arguments to create many LLMModels.
     * @example
     * // Create many LLMModels
     * const lLMModel = await prisma.lLMModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LLMModelCreateManyArgs>(args?: SelectSubset<T, LLMModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LLMModels and returns the data saved in the database.
     * @param {LLMModelCreateManyAndReturnArgs} args - Arguments to create many LLMModels.
     * @example
     * // Create many LLMModels
     * const lLMModel = await prisma.lLMModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LLMModels and only return the `id`
     * const lLMModelWithIdOnly = await prisma.lLMModel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LLMModelCreateManyAndReturnArgs>(args?: SelectSubset<T, LLMModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LLMModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LLMModel.
     * @param {LLMModelDeleteArgs} args - Arguments to delete one LLMModel.
     * @example
     * // Delete one LLMModel
     * const LLMModel = await prisma.lLMModel.delete({
     *   where: {
     *     // ... filter to delete one LLMModel
     *   }
     * })
     * 
     */
    delete<T extends LLMModelDeleteArgs>(args: SelectSubset<T, LLMModelDeleteArgs<ExtArgs>>): Prisma__LLMModelClient<$Result.GetResult<Prisma.$LLMModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LLMModel.
     * @param {LLMModelUpdateArgs} args - Arguments to update one LLMModel.
     * @example
     * // Update one LLMModel
     * const lLMModel = await prisma.lLMModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LLMModelUpdateArgs>(args: SelectSubset<T, LLMModelUpdateArgs<ExtArgs>>): Prisma__LLMModelClient<$Result.GetResult<Prisma.$LLMModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LLMModels.
     * @param {LLMModelDeleteManyArgs} args - Arguments to filter LLMModels to delete.
     * @example
     * // Delete a few LLMModels
     * const { count } = await prisma.lLMModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LLMModelDeleteManyArgs>(args?: SelectSubset<T, LLMModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LLMModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LLMModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LLMModels
     * const lLMModel = await prisma.lLMModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LLMModelUpdateManyArgs>(args: SelectSubset<T, LLMModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LLMModels and returns the data updated in the database.
     * @param {LLMModelUpdateManyAndReturnArgs} args - Arguments to update many LLMModels.
     * @example
     * // Update many LLMModels
     * const lLMModel = await prisma.lLMModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LLMModels and only return the `id`
     * const lLMModelWithIdOnly = await prisma.lLMModel.updateManyAndReturn({
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
    updateManyAndReturn<T extends LLMModelUpdateManyAndReturnArgs>(args: SelectSubset<T, LLMModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LLMModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LLMModel.
     * @param {LLMModelUpsertArgs} args - Arguments to update or create a LLMModel.
     * @example
     * // Update or create a LLMModel
     * const lLMModel = await prisma.lLMModel.upsert({
     *   create: {
     *     // ... data to create a LLMModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LLMModel we want to update
     *   }
     * })
     */
    upsert<T extends LLMModelUpsertArgs>(args: SelectSubset<T, LLMModelUpsertArgs<ExtArgs>>): Prisma__LLMModelClient<$Result.GetResult<Prisma.$LLMModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LLMModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LLMModelCountArgs} args - Arguments to filter LLMModels to count.
     * @example
     * // Count the number of LLMModels
     * const count = await prisma.lLMModel.count({
     *   where: {
     *     // ... the filter for the LLMModels we want to count
     *   }
     * })
    **/
    count<T extends LLMModelCountArgs>(
      args?: Subset<T, LLMModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LLMModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LLMModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LLMModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LLMModelAggregateArgs>(args: Subset<T, LLMModelAggregateArgs>): Prisma.PrismaPromise<GetLLMModelAggregateType<T>>

    /**
     * Group by LLMModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LLMModelGroupByArgs} args - Group by arguments.
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
      T extends LLMModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LLMModelGroupByArgs['orderBy'] }
        : { orderBy?: LLMModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LLMModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLLMModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LLMModel model
   */
  readonly fields: LLMModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LLMModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LLMModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prompts<T extends LLMModel$promptsArgs<ExtArgs> = {}>(args?: Subset<T, LLMModel$promptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelToPromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responses<T extends LLMModel$responsesArgs<ExtArgs> = {}>(args?: Subset<T, LLMModel$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LLMModel model
   */
  interface LLMModelFieldRefs {
    readonly id: FieldRef<"LLMModel", 'String'>
    readonly name: FieldRef<"LLMModel", 'String'>
    readonly rpm: FieldRef<"LLMModel", 'Int'>
    readonly rpd: FieldRef<"LLMModel", 'Int'>
    readonly tpm: FieldRef<"LLMModel", 'Int'>
    readonly createdAt: FieldRef<"LLMModel", 'DateTime'>
    readonly updatedAt: FieldRef<"LLMModel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LLMModel findUnique
   */
  export type LLMModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LLMModel
     */
    select?: LLMModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LLMModel
     */
    omit?: LLMModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LLMModelInclude<ExtArgs> | null
    /**
     * Filter, which LLMModel to fetch.
     */
    where: LLMModelWhereUniqueInput
  }

  /**
   * LLMModel findUniqueOrThrow
   */
  export type LLMModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LLMModel
     */
    select?: LLMModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LLMModel
     */
    omit?: LLMModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LLMModelInclude<ExtArgs> | null
    /**
     * Filter, which LLMModel to fetch.
     */
    where: LLMModelWhereUniqueInput
  }

  /**
   * LLMModel findFirst
   */
  export type LLMModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LLMModel
     */
    select?: LLMModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LLMModel
     */
    omit?: LLMModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LLMModelInclude<ExtArgs> | null
    /**
     * Filter, which LLMModel to fetch.
     */
    where?: LLMModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LLMModels to fetch.
     */
    orderBy?: LLMModelOrderByWithRelationInput | LLMModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LLMModels.
     */
    cursor?: LLMModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LLMModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LLMModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LLMModels.
     */
    distinct?: LLMModelScalarFieldEnum | LLMModelScalarFieldEnum[]
  }

  /**
   * LLMModel findFirstOrThrow
   */
  export type LLMModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LLMModel
     */
    select?: LLMModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LLMModel
     */
    omit?: LLMModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LLMModelInclude<ExtArgs> | null
    /**
     * Filter, which LLMModel to fetch.
     */
    where?: LLMModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LLMModels to fetch.
     */
    orderBy?: LLMModelOrderByWithRelationInput | LLMModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LLMModels.
     */
    cursor?: LLMModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LLMModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LLMModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LLMModels.
     */
    distinct?: LLMModelScalarFieldEnum | LLMModelScalarFieldEnum[]
  }

  /**
   * LLMModel findMany
   */
  export type LLMModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LLMModel
     */
    select?: LLMModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LLMModel
     */
    omit?: LLMModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LLMModelInclude<ExtArgs> | null
    /**
     * Filter, which LLMModels to fetch.
     */
    where?: LLMModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LLMModels to fetch.
     */
    orderBy?: LLMModelOrderByWithRelationInput | LLMModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LLMModels.
     */
    cursor?: LLMModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LLMModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LLMModels.
     */
    skip?: number
    distinct?: LLMModelScalarFieldEnum | LLMModelScalarFieldEnum[]
  }

  /**
   * LLMModel create
   */
  export type LLMModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LLMModel
     */
    select?: LLMModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LLMModel
     */
    omit?: LLMModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LLMModelInclude<ExtArgs> | null
    /**
     * The data needed to create a LLMModel.
     */
    data: XOR<LLMModelCreateInput, LLMModelUncheckedCreateInput>
  }

  /**
   * LLMModel createMany
   */
  export type LLMModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LLMModels.
     */
    data: LLMModelCreateManyInput | LLMModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LLMModel createManyAndReturn
   */
  export type LLMModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LLMModel
     */
    select?: LLMModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LLMModel
     */
    omit?: LLMModelOmit<ExtArgs> | null
    /**
     * The data used to create many LLMModels.
     */
    data: LLMModelCreateManyInput | LLMModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LLMModel update
   */
  export type LLMModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LLMModel
     */
    select?: LLMModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LLMModel
     */
    omit?: LLMModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LLMModelInclude<ExtArgs> | null
    /**
     * The data needed to update a LLMModel.
     */
    data: XOR<LLMModelUpdateInput, LLMModelUncheckedUpdateInput>
    /**
     * Choose, which LLMModel to update.
     */
    where: LLMModelWhereUniqueInput
  }

  /**
   * LLMModel updateMany
   */
  export type LLMModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LLMModels.
     */
    data: XOR<LLMModelUpdateManyMutationInput, LLMModelUncheckedUpdateManyInput>
    /**
     * Filter which LLMModels to update
     */
    where?: LLMModelWhereInput
    /**
     * Limit how many LLMModels to update.
     */
    limit?: number
  }

  /**
   * LLMModel updateManyAndReturn
   */
  export type LLMModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LLMModel
     */
    select?: LLMModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LLMModel
     */
    omit?: LLMModelOmit<ExtArgs> | null
    /**
     * The data used to update LLMModels.
     */
    data: XOR<LLMModelUpdateManyMutationInput, LLMModelUncheckedUpdateManyInput>
    /**
     * Filter which LLMModels to update
     */
    where?: LLMModelWhereInput
    /**
     * Limit how many LLMModels to update.
     */
    limit?: number
  }

  /**
   * LLMModel upsert
   */
  export type LLMModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LLMModel
     */
    select?: LLMModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LLMModel
     */
    omit?: LLMModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LLMModelInclude<ExtArgs> | null
    /**
     * The filter to search for the LLMModel to update in case it exists.
     */
    where: LLMModelWhereUniqueInput
    /**
     * In case the LLMModel found by the `where` argument doesn't exist, create a new LLMModel with this data.
     */
    create: XOR<LLMModelCreateInput, LLMModelUncheckedCreateInput>
    /**
     * In case the LLMModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LLMModelUpdateInput, LLMModelUncheckedUpdateInput>
  }

  /**
   * LLMModel delete
   */
  export type LLMModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LLMModel
     */
    select?: LLMModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LLMModel
     */
    omit?: LLMModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LLMModelInclude<ExtArgs> | null
    /**
     * Filter which LLMModel to delete.
     */
    where: LLMModelWhereUniqueInput
  }

  /**
   * LLMModel deleteMany
   */
  export type LLMModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LLMModels to delete
     */
    where?: LLMModelWhereInput
    /**
     * Limit how many LLMModels to delete.
     */
    limit?: number
  }

  /**
   * LLMModel.prompts
   */
  export type LLMModel$promptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelToPrompt
     */
    select?: ModelToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelToPrompt
     */
    omit?: ModelToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelToPromptInclude<ExtArgs> | null
    where?: ModelToPromptWhereInput
    orderBy?: ModelToPromptOrderByWithRelationInput | ModelToPromptOrderByWithRelationInput[]
    cursor?: ModelToPromptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModelToPromptScalarFieldEnum | ModelToPromptScalarFieldEnum[]
  }

  /**
   * LLMModel.responses
   */
  export type LLMModel$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    where?: PromptResponseWhereInput
    orderBy?: PromptResponseOrderByWithRelationInput | PromptResponseOrderByWithRelationInput[]
    cursor?: PromptResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromptResponseScalarFieldEnum | PromptResponseScalarFieldEnum[]
  }

  /**
   * LLMModel without action
   */
  export type LLMModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LLMModel
     */
    select?: LLMModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LLMModel
     */
    omit?: LLMModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LLMModelInclude<ExtArgs> | null
  }


  /**
   * Model SamplingProfile
   */

  export type AggregateSamplingProfile = {
    _count: SamplingProfileCountAggregateOutputType | null
    _avg: SamplingProfileAvgAggregateOutputType | null
    _sum: SamplingProfileSumAggregateOutputType | null
    _min: SamplingProfileMinAggregateOutputType | null
    _max: SamplingProfileMaxAggregateOutputType | null
  }

  export type SamplingProfileAvgAggregateOutputType = {
    temperature: number | null
    top_k: number | null
    top_p: number | null
    presence_penalty: number | null
    frequency_penalty: number | null
    max_tokens: number | null
  }

  export type SamplingProfileSumAggregateOutputType = {
    temperature: number | null
    top_k: number | null
    top_p: number | null
    presence_penalty: number | null
    frequency_penalty: number | null
    max_tokens: number | null
  }

  export type SamplingProfileMinAggregateOutputType = {
    id: string | null
    profile_name: string | null
    temperature: number | null
    top_k: number | null
    top_p: number | null
    presence_penalty: number | null
    frequency_penalty: number | null
    max_tokens: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SamplingProfileMaxAggregateOutputType = {
    id: string | null
    profile_name: string | null
    temperature: number | null
    top_k: number | null
    top_p: number | null
    presence_penalty: number | null
    frequency_penalty: number | null
    max_tokens: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SamplingProfileCountAggregateOutputType = {
    id: number
    profile_name: number
    temperature: number
    top_k: number
    top_p: number
    presence_penalty: number
    frequency_penalty: number
    max_tokens: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SamplingProfileAvgAggregateInputType = {
    temperature?: true
    top_k?: true
    top_p?: true
    presence_penalty?: true
    frequency_penalty?: true
    max_tokens?: true
  }

  export type SamplingProfileSumAggregateInputType = {
    temperature?: true
    top_k?: true
    top_p?: true
    presence_penalty?: true
    frequency_penalty?: true
    max_tokens?: true
  }

  export type SamplingProfileMinAggregateInputType = {
    id?: true
    profile_name?: true
    temperature?: true
    top_k?: true
    top_p?: true
    presence_penalty?: true
    frequency_penalty?: true
    max_tokens?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SamplingProfileMaxAggregateInputType = {
    id?: true
    profile_name?: true
    temperature?: true
    top_k?: true
    top_p?: true
    presence_penalty?: true
    frequency_penalty?: true
    max_tokens?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SamplingProfileCountAggregateInputType = {
    id?: true
    profile_name?: true
    temperature?: true
    top_k?: true
    top_p?: true
    presence_penalty?: true
    frequency_penalty?: true
    max_tokens?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SamplingProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SamplingProfile to aggregate.
     */
    where?: SamplingProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SamplingProfiles to fetch.
     */
    orderBy?: SamplingProfileOrderByWithRelationInput | SamplingProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SamplingProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SamplingProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SamplingProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SamplingProfiles
    **/
    _count?: true | SamplingProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SamplingProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SamplingProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SamplingProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SamplingProfileMaxAggregateInputType
  }

  export type GetSamplingProfileAggregateType<T extends SamplingProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateSamplingProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSamplingProfile[P]>
      : GetScalarType<T[P], AggregateSamplingProfile[P]>
  }




  export type SamplingProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SamplingProfileWhereInput
    orderBy?: SamplingProfileOrderByWithAggregationInput | SamplingProfileOrderByWithAggregationInput[]
    by: SamplingProfileScalarFieldEnum[] | SamplingProfileScalarFieldEnum
    having?: SamplingProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SamplingProfileCountAggregateInputType | true
    _avg?: SamplingProfileAvgAggregateInputType
    _sum?: SamplingProfileSumAggregateInputType
    _min?: SamplingProfileMinAggregateInputType
    _max?: SamplingProfileMaxAggregateInputType
  }

  export type SamplingProfileGroupByOutputType = {
    id: string
    profile_name: string
    temperature: number
    top_k: number
    top_p: number
    presence_penalty: number | null
    frequency_penalty: number | null
    max_tokens: number | null
    createdAt: Date
    updatedAt: Date
    _count: SamplingProfileCountAggregateOutputType | null
    _avg: SamplingProfileAvgAggregateOutputType | null
    _sum: SamplingProfileSumAggregateOutputType | null
    _min: SamplingProfileMinAggregateOutputType | null
    _max: SamplingProfileMaxAggregateOutputType | null
  }

  type GetSamplingProfileGroupByPayload<T extends SamplingProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SamplingProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SamplingProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SamplingProfileGroupByOutputType[P]>
            : GetScalarType<T[P], SamplingProfileGroupByOutputType[P]>
        }
      >
    >


  export type SamplingProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profile_name?: boolean
    temperature?: boolean
    top_k?: boolean
    top_p?: boolean
    presence_penalty?: boolean
    frequency_penalty?: boolean
    max_tokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prompts?: boolean | SamplingProfile$promptsArgs<ExtArgs>
    responses?: boolean | SamplingProfile$responsesArgs<ExtArgs>
    _count?: boolean | SamplingProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["samplingProfile"]>

  export type SamplingProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profile_name?: boolean
    temperature?: boolean
    top_k?: boolean
    top_p?: boolean
    presence_penalty?: boolean
    frequency_penalty?: boolean
    max_tokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["samplingProfile"]>

  export type SamplingProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profile_name?: boolean
    temperature?: boolean
    top_k?: boolean
    top_p?: boolean
    presence_penalty?: boolean
    frequency_penalty?: boolean
    max_tokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["samplingProfile"]>

  export type SamplingProfileSelectScalar = {
    id?: boolean
    profile_name?: boolean
    temperature?: boolean
    top_k?: boolean
    top_p?: boolean
    presence_penalty?: boolean
    frequency_penalty?: boolean
    max_tokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SamplingProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profile_name" | "temperature" | "top_k" | "top_p" | "presence_penalty" | "frequency_penalty" | "max_tokens" | "createdAt" | "updatedAt", ExtArgs["result"]["samplingProfile"]>
  export type SamplingProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompts?: boolean | SamplingProfile$promptsArgs<ExtArgs>
    responses?: boolean | SamplingProfile$responsesArgs<ExtArgs>
    _count?: boolean | SamplingProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SamplingProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SamplingProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SamplingProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SamplingProfile"
    objects: {
      prompts: Prisma.$ProfileToPromptPayload<ExtArgs>[]
      responses: Prisma.$PromptResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profile_name: string
      temperature: number
      top_k: number
      top_p: number
      presence_penalty: number | null
      frequency_penalty: number | null
      max_tokens: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["samplingProfile"]>
    composites: {}
  }

  type SamplingProfileGetPayload<S extends boolean | null | undefined | SamplingProfileDefaultArgs> = $Result.GetResult<Prisma.$SamplingProfilePayload, S>

  type SamplingProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SamplingProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SamplingProfileCountAggregateInputType | true
    }

  export interface SamplingProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SamplingProfile'], meta: { name: 'SamplingProfile' } }
    /**
     * Find zero or one SamplingProfile that matches the filter.
     * @param {SamplingProfileFindUniqueArgs} args - Arguments to find a SamplingProfile
     * @example
     * // Get one SamplingProfile
     * const samplingProfile = await prisma.samplingProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SamplingProfileFindUniqueArgs>(args: SelectSubset<T, SamplingProfileFindUniqueArgs<ExtArgs>>): Prisma__SamplingProfileClient<$Result.GetResult<Prisma.$SamplingProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SamplingProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SamplingProfileFindUniqueOrThrowArgs} args - Arguments to find a SamplingProfile
     * @example
     * // Get one SamplingProfile
     * const samplingProfile = await prisma.samplingProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SamplingProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, SamplingProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SamplingProfileClient<$Result.GetResult<Prisma.$SamplingProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SamplingProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SamplingProfileFindFirstArgs} args - Arguments to find a SamplingProfile
     * @example
     * // Get one SamplingProfile
     * const samplingProfile = await prisma.samplingProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SamplingProfileFindFirstArgs>(args?: SelectSubset<T, SamplingProfileFindFirstArgs<ExtArgs>>): Prisma__SamplingProfileClient<$Result.GetResult<Prisma.$SamplingProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SamplingProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SamplingProfileFindFirstOrThrowArgs} args - Arguments to find a SamplingProfile
     * @example
     * // Get one SamplingProfile
     * const samplingProfile = await prisma.samplingProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SamplingProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, SamplingProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__SamplingProfileClient<$Result.GetResult<Prisma.$SamplingProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SamplingProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SamplingProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SamplingProfiles
     * const samplingProfiles = await prisma.samplingProfile.findMany()
     * 
     * // Get first 10 SamplingProfiles
     * const samplingProfiles = await prisma.samplingProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const samplingProfileWithIdOnly = await prisma.samplingProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SamplingProfileFindManyArgs>(args?: SelectSubset<T, SamplingProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SamplingProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SamplingProfile.
     * @param {SamplingProfileCreateArgs} args - Arguments to create a SamplingProfile.
     * @example
     * // Create one SamplingProfile
     * const SamplingProfile = await prisma.samplingProfile.create({
     *   data: {
     *     // ... data to create a SamplingProfile
     *   }
     * })
     * 
     */
    create<T extends SamplingProfileCreateArgs>(args: SelectSubset<T, SamplingProfileCreateArgs<ExtArgs>>): Prisma__SamplingProfileClient<$Result.GetResult<Prisma.$SamplingProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SamplingProfiles.
     * @param {SamplingProfileCreateManyArgs} args - Arguments to create many SamplingProfiles.
     * @example
     * // Create many SamplingProfiles
     * const samplingProfile = await prisma.samplingProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SamplingProfileCreateManyArgs>(args?: SelectSubset<T, SamplingProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SamplingProfiles and returns the data saved in the database.
     * @param {SamplingProfileCreateManyAndReturnArgs} args - Arguments to create many SamplingProfiles.
     * @example
     * // Create many SamplingProfiles
     * const samplingProfile = await prisma.samplingProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SamplingProfiles and only return the `id`
     * const samplingProfileWithIdOnly = await prisma.samplingProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SamplingProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, SamplingProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SamplingProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SamplingProfile.
     * @param {SamplingProfileDeleteArgs} args - Arguments to delete one SamplingProfile.
     * @example
     * // Delete one SamplingProfile
     * const SamplingProfile = await prisma.samplingProfile.delete({
     *   where: {
     *     // ... filter to delete one SamplingProfile
     *   }
     * })
     * 
     */
    delete<T extends SamplingProfileDeleteArgs>(args: SelectSubset<T, SamplingProfileDeleteArgs<ExtArgs>>): Prisma__SamplingProfileClient<$Result.GetResult<Prisma.$SamplingProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SamplingProfile.
     * @param {SamplingProfileUpdateArgs} args - Arguments to update one SamplingProfile.
     * @example
     * // Update one SamplingProfile
     * const samplingProfile = await prisma.samplingProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SamplingProfileUpdateArgs>(args: SelectSubset<T, SamplingProfileUpdateArgs<ExtArgs>>): Prisma__SamplingProfileClient<$Result.GetResult<Prisma.$SamplingProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SamplingProfiles.
     * @param {SamplingProfileDeleteManyArgs} args - Arguments to filter SamplingProfiles to delete.
     * @example
     * // Delete a few SamplingProfiles
     * const { count } = await prisma.samplingProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SamplingProfileDeleteManyArgs>(args?: SelectSubset<T, SamplingProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SamplingProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SamplingProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SamplingProfiles
     * const samplingProfile = await prisma.samplingProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SamplingProfileUpdateManyArgs>(args: SelectSubset<T, SamplingProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SamplingProfiles and returns the data updated in the database.
     * @param {SamplingProfileUpdateManyAndReturnArgs} args - Arguments to update many SamplingProfiles.
     * @example
     * // Update many SamplingProfiles
     * const samplingProfile = await prisma.samplingProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SamplingProfiles and only return the `id`
     * const samplingProfileWithIdOnly = await prisma.samplingProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends SamplingProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, SamplingProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SamplingProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SamplingProfile.
     * @param {SamplingProfileUpsertArgs} args - Arguments to update or create a SamplingProfile.
     * @example
     * // Update or create a SamplingProfile
     * const samplingProfile = await prisma.samplingProfile.upsert({
     *   create: {
     *     // ... data to create a SamplingProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SamplingProfile we want to update
     *   }
     * })
     */
    upsert<T extends SamplingProfileUpsertArgs>(args: SelectSubset<T, SamplingProfileUpsertArgs<ExtArgs>>): Prisma__SamplingProfileClient<$Result.GetResult<Prisma.$SamplingProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SamplingProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SamplingProfileCountArgs} args - Arguments to filter SamplingProfiles to count.
     * @example
     * // Count the number of SamplingProfiles
     * const count = await prisma.samplingProfile.count({
     *   where: {
     *     // ... the filter for the SamplingProfiles we want to count
     *   }
     * })
    **/
    count<T extends SamplingProfileCountArgs>(
      args?: Subset<T, SamplingProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SamplingProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SamplingProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SamplingProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SamplingProfileAggregateArgs>(args: Subset<T, SamplingProfileAggregateArgs>): Prisma.PrismaPromise<GetSamplingProfileAggregateType<T>>

    /**
     * Group by SamplingProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SamplingProfileGroupByArgs} args - Group by arguments.
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
      T extends SamplingProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SamplingProfileGroupByArgs['orderBy'] }
        : { orderBy?: SamplingProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SamplingProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSamplingProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SamplingProfile model
   */
  readonly fields: SamplingProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SamplingProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SamplingProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prompts<T extends SamplingProfile$promptsArgs<ExtArgs> = {}>(args?: Subset<T, SamplingProfile$promptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileToPromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responses<T extends SamplingProfile$responsesArgs<ExtArgs> = {}>(args?: Subset<T, SamplingProfile$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SamplingProfile model
   */
  interface SamplingProfileFieldRefs {
    readonly id: FieldRef<"SamplingProfile", 'String'>
    readonly profile_name: FieldRef<"SamplingProfile", 'String'>
    readonly temperature: FieldRef<"SamplingProfile", 'Float'>
    readonly top_k: FieldRef<"SamplingProfile", 'Float'>
    readonly top_p: FieldRef<"SamplingProfile", 'Float'>
    readonly presence_penalty: FieldRef<"SamplingProfile", 'Float'>
    readonly frequency_penalty: FieldRef<"SamplingProfile", 'Float'>
    readonly max_tokens: FieldRef<"SamplingProfile", 'Int'>
    readonly createdAt: FieldRef<"SamplingProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"SamplingProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SamplingProfile findUnique
   */
  export type SamplingProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SamplingProfile
     */
    select?: SamplingProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SamplingProfile
     */
    omit?: SamplingProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SamplingProfileInclude<ExtArgs> | null
    /**
     * Filter, which SamplingProfile to fetch.
     */
    where: SamplingProfileWhereUniqueInput
  }

  /**
   * SamplingProfile findUniqueOrThrow
   */
  export type SamplingProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SamplingProfile
     */
    select?: SamplingProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SamplingProfile
     */
    omit?: SamplingProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SamplingProfileInclude<ExtArgs> | null
    /**
     * Filter, which SamplingProfile to fetch.
     */
    where: SamplingProfileWhereUniqueInput
  }

  /**
   * SamplingProfile findFirst
   */
  export type SamplingProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SamplingProfile
     */
    select?: SamplingProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SamplingProfile
     */
    omit?: SamplingProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SamplingProfileInclude<ExtArgs> | null
    /**
     * Filter, which SamplingProfile to fetch.
     */
    where?: SamplingProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SamplingProfiles to fetch.
     */
    orderBy?: SamplingProfileOrderByWithRelationInput | SamplingProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SamplingProfiles.
     */
    cursor?: SamplingProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SamplingProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SamplingProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SamplingProfiles.
     */
    distinct?: SamplingProfileScalarFieldEnum | SamplingProfileScalarFieldEnum[]
  }

  /**
   * SamplingProfile findFirstOrThrow
   */
  export type SamplingProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SamplingProfile
     */
    select?: SamplingProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SamplingProfile
     */
    omit?: SamplingProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SamplingProfileInclude<ExtArgs> | null
    /**
     * Filter, which SamplingProfile to fetch.
     */
    where?: SamplingProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SamplingProfiles to fetch.
     */
    orderBy?: SamplingProfileOrderByWithRelationInput | SamplingProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SamplingProfiles.
     */
    cursor?: SamplingProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SamplingProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SamplingProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SamplingProfiles.
     */
    distinct?: SamplingProfileScalarFieldEnum | SamplingProfileScalarFieldEnum[]
  }

  /**
   * SamplingProfile findMany
   */
  export type SamplingProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SamplingProfile
     */
    select?: SamplingProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SamplingProfile
     */
    omit?: SamplingProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SamplingProfileInclude<ExtArgs> | null
    /**
     * Filter, which SamplingProfiles to fetch.
     */
    where?: SamplingProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SamplingProfiles to fetch.
     */
    orderBy?: SamplingProfileOrderByWithRelationInput | SamplingProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SamplingProfiles.
     */
    cursor?: SamplingProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SamplingProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SamplingProfiles.
     */
    skip?: number
    distinct?: SamplingProfileScalarFieldEnum | SamplingProfileScalarFieldEnum[]
  }

  /**
   * SamplingProfile create
   */
  export type SamplingProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SamplingProfile
     */
    select?: SamplingProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SamplingProfile
     */
    omit?: SamplingProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SamplingProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a SamplingProfile.
     */
    data: XOR<SamplingProfileCreateInput, SamplingProfileUncheckedCreateInput>
  }

  /**
   * SamplingProfile createMany
   */
  export type SamplingProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SamplingProfiles.
     */
    data: SamplingProfileCreateManyInput | SamplingProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SamplingProfile createManyAndReturn
   */
  export type SamplingProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SamplingProfile
     */
    select?: SamplingProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SamplingProfile
     */
    omit?: SamplingProfileOmit<ExtArgs> | null
    /**
     * The data used to create many SamplingProfiles.
     */
    data: SamplingProfileCreateManyInput | SamplingProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SamplingProfile update
   */
  export type SamplingProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SamplingProfile
     */
    select?: SamplingProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SamplingProfile
     */
    omit?: SamplingProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SamplingProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a SamplingProfile.
     */
    data: XOR<SamplingProfileUpdateInput, SamplingProfileUncheckedUpdateInput>
    /**
     * Choose, which SamplingProfile to update.
     */
    where: SamplingProfileWhereUniqueInput
  }

  /**
   * SamplingProfile updateMany
   */
  export type SamplingProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SamplingProfiles.
     */
    data: XOR<SamplingProfileUpdateManyMutationInput, SamplingProfileUncheckedUpdateManyInput>
    /**
     * Filter which SamplingProfiles to update
     */
    where?: SamplingProfileWhereInput
    /**
     * Limit how many SamplingProfiles to update.
     */
    limit?: number
  }

  /**
   * SamplingProfile updateManyAndReturn
   */
  export type SamplingProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SamplingProfile
     */
    select?: SamplingProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SamplingProfile
     */
    omit?: SamplingProfileOmit<ExtArgs> | null
    /**
     * The data used to update SamplingProfiles.
     */
    data: XOR<SamplingProfileUpdateManyMutationInput, SamplingProfileUncheckedUpdateManyInput>
    /**
     * Filter which SamplingProfiles to update
     */
    where?: SamplingProfileWhereInput
    /**
     * Limit how many SamplingProfiles to update.
     */
    limit?: number
  }

  /**
   * SamplingProfile upsert
   */
  export type SamplingProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SamplingProfile
     */
    select?: SamplingProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SamplingProfile
     */
    omit?: SamplingProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SamplingProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the SamplingProfile to update in case it exists.
     */
    where: SamplingProfileWhereUniqueInput
    /**
     * In case the SamplingProfile found by the `where` argument doesn't exist, create a new SamplingProfile with this data.
     */
    create: XOR<SamplingProfileCreateInput, SamplingProfileUncheckedCreateInput>
    /**
     * In case the SamplingProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SamplingProfileUpdateInput, SamplingProfileUncheckedUpdateInput>
  }

  /**
   * SamplingProfile delete
   */
  export type SamplingProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SamplingProfile
     */
    select?: SamplingProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SamplingProfile
     */
    omit?: SamplingProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SamplingProfileInclude<ExtArgs> | null
    /**
     * Filter which SamplingProfile to delete.
     */
    where: SamplingProfileWhereUniqueInput
  }

  /**
   * SamplingProfile deleteMany
   */
  export type SamplingProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SamplingProfiles to delete
     */
    where?: SamplingProfileWhereInput
    /**
     * Limit how many SamplingProfiles to delete.
     */
    limit?: number
  }

  /**
   * SamplingProfile.prompts
   */
  export type SamplingProfile$promptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileToPrompt
     */
    select?: ProfileToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileToPrompt
     */
    omit?: ProfileToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileToPromptInclude<ExtArgs> | null
    where?: ProfileToPromptWhereInput
    orderBy?: ProfileToPromptOrderByWithRelationInput | ProfileToPromptOrderByWithRelationInput[]
    cursor?: ProfileToPromptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileToPromptScalarFieldEnum | ProfileToPromptScalarFieldEnum[]
  }

  /**
   * SamplingProfile.responses
   */
  export type SamplingProfile$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    where?: PromptResponseWhereInput
    orderBy?: PromptResponseOrderByWithRelationInput | PromptResponseOrderByWithRelationInput[]
    cursor?: PromptResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromptResponseScalarFieldEnum | PromptResponseScalarFieldEnum[]
  }

  /**
   * SamplingProfile without action
   */
  export type SamplingProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SamplingProfile
     */
    select?: SamplingProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SamplingProfile
     */
    omit?: SamplingProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SamplingProfileInclude<ExtArgs> | null
  }


  /**
   * Model Prompt
   */

  export type AggregatePrompt = {
    _count: PromptCountAggregateOutputType | null
    _avg: PromptAvgAggregateOutputType | null
    _sum: PromptSumAggregateOutputType | null
    _min: PromptMinAggregateOutputType | null
    _max: PromptMaxAggregateOutputType | null
  }

  export type PromptAvgAggregateOutputType = {
    tokens: number | null
  }

  export type PromptSumAggregateOutputType = {
    tokens: number | null
  }

  export type PromptMinAggregateOutputType = {
    id: string | null
    prompt: string | null
    tokens: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptMaxAggregateOutputType = {
    id: string | null
    prompt: string | null
    tokens: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptCountAggregateOutputType = {
    id: number
    prompt: number
    tokens: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromptAvgAggregateInputType = {
    tokens?: true
  }

  export type PromptSumAggregateInputType = {
    tokens?: true
  }

  export type PromptMinAggregateInputType = {
    id?: true
    prompt?: true
    tokens?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptMaxAggregateInputType = {
    id?: true
    prompt?: true
    tokens?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptCountAggregateInputType = {
    id?: true
    prompt?: true
    tokens?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompt to aggregate.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prompts
    **/
    _count?: true | PromptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptMaxAggregateInputType
  }

  export type GetPromptAggregateType<T extends PromptAggregateArgs> = {
        [P in keyof T & keyof AggregatePrompt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrompt[P]>
      : GetScalarType<T[P], AggregatePrompt[P]>
  }




  export type PromptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptWhereInput
    orderBy?: PromptOrderByWithAggregationInput | PromptOrderByWithAggregationInput[]
    by: PromptScalarFieldEnum[] | PromptScalarFieldEnum
    having?: PromptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptCountAggregateInputType | true
    _avg?: PromptAvgAggregateInputType
    _sum?: PromptSumAggregateInputType
    _min?: PromptMinAggregateInputType
    _max?: PromptMaxAggregateInputType
  }

  export type PromptGroupByOutputType = {
    id: string
    prompt: string
    tokens: number
    createdAt: Date
    updatedAt: Date
    _count: PromptCountAggregateOutputType | null
    _avg: PromptAvgAggregateOutputType | null
    _sum: PromptSumAggregateOutputType | null
    _min: PromptMinAggregateOutputType | null
    _max: PromptMaxAggregateOutputType | null
  }

  type GetPromptGroupByPayload<T extends PromptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptGroupByOutputType[P]>
            : GetScalarType<T[P], PromptGroupByOutputType[P]>
        }
      >
    >


  export type PromptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    tokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profiles?: boolean | Prompt$profilesArgs<ExtArgs>
    models?: boolean | Prompt$modelsArgs<ExtArgs>
    responses?: boolean | Prompt$responsesArgs<ExtArgs>
    _count?: boolean | PromptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    tokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    tokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectScalar = {
    id?: boolean
    prompt?: boolean
    tokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PromptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prompt" | "tokens" | "createdAt" | "updatedAt", ExtArgs["result"]["prompt"]>
  export type PromptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiles?: boolean | Prompt$profilesArgs<ExtArgs>
    models?: boolean | Prompt$modelsArgs<ExtArgs>
    responses?: boolean | Prompt$responsesArgs<ExtArgs>
    _count?: boolean | PromptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PromptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PromptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prompt"
    objects: {
      profiles: Prisma.$ProfileToPromptPayload<ExtArgs>[]
      models: Prisma.$ModelToPromptPayload<ExtArgs>[]
      responses: Prisma.$PromptResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prompt: string
      tokens: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["prompt"]>
    composites: {}
  }

  type PromptGetPayload<S extends boolean | null | undefined | PromptDefaultArgs> = $Result.GetResult<Prisma.$PromptPayload, S>

  type PromptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromptCountAggregateInputType | true
    }

  export interface PromptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prompt'], meta: { name: 'Prompt' } }
    /**
     * Find zero or one Prompt that matches the filter.
     * @param {PromptFindUniqueArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromptFindUniqueArgs>(args: SelectSubset<T, PromptFindUniqueArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prompt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromptFindUniqueOrThrowArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromptFindUniqueOrThrowArgs>(args: SelectSubset<T, PromptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prompt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindFirstArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromptFindFirstArgs>(args?: SelectSubset<T, PromptFindFirstArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prompt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindFirstOrThrowArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromptFindFirstOrThrowArgs>(args?: SelectSubset<T, PromptFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prompts
     * const prompts = await prisma.prompt.findMany()
     * 
     * // Get first 10 Prompts
     * const prompts = await prisma.prompt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptWithIdOnly = await prisma.prompt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromptFindManyArgs>(args?: SelectSubset<T, PromptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prompt.
     * @param {PromptCreateArgs} args - Arguments to create a Prompt.
     * @example
     * // Create one Prompt
     * const Prompt = await prisma.prompt.create({
     *   data: {
     *     // ... data to create a Prompt
     *   }
     * })
     * 
     */
    create<T extends PromptCreateArgs>(args: SelectSubset<T, PromptCreateArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prompts.
     * @param {PromptCreateManyArgs} args - Arguments to create many Prompts.
     * @example
     * // Create many Prompts
     * const prompt = await prisma.prompt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromptCreateManyArgs>(args?: SelectSubset<T, PromptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prompts and returns the data saved in the database.
     * @param {PromptCreateManyAndReturnArgs} args - Arguments to create many Prompts.
     * @example
     * // Create many Prompts
     * const prompt = await prisma.prompt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prompts and only return the `id`
     * const promptWithIdOnly = await prisma.prompt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromptCreateManyAndReturnArgs>(args?: SelectSubset<T, PromptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prompt.
     * @param {PromptDeleteArgs} args - Arguments to delete one Prompt.
     * @example
     * // Delete one Prompt
     * const Prompt = await prisma.prompt.delete({
     *   where: {
     *     // ... filter to delete one Prompt
     *   }
     * })
     * 
     */
    delete<T extends PromptDeleteArgs>(args: SelectSubset<T, PromptDeleteArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prompt.
     * @param {PromptUpdateArgs} args - Arguments to update one Prompt.
     * @example
     * // Update one Prompt
     * const prompt = await prisma.prompt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromptUpdateArgs>(args: SelectSubset<T, PromptUpdateArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prompts.
     * @param {PromptDeleteManyArgs} args - Arguments to filter Prompts to delete.
     * @example
     * // Delete a few Prompts
     * const { count } = await prisma.prompt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromptDeleteManyArgs>(args?: SelectSubset<T, PromptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prompts
     * const prompt = await prisma.prompt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromptUpdateManyArgs>(args: SelectSubset<T, PromptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prompts and returns the data updated in the database.
     * @param {PromptUpdateManyAndReturnArgs} args - Arguments to update many Prompts.
     * @example
     * // Update many Prompts
     * const prompt = await prisma.prompt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prompts and only return the `id`
     * const promptWithIdOnly = await prisma.prompt.updateManyAndReturn({
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
    updateManyAndReturn<T extends PromptUpdateManyAndReturnArgs>(args: SelectSubset<T, PromptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prompt.
     * @param {PromptUpsertArgs} args - Arguments to update or create a Prompt.
     * @example
     * // Update or create a Prompt
     * const prompt = await prisma.prompt.upsert({
     *   create: {
     *     // ... data to create a Prompt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prompt we want to update
     *   }
     * })
     */
    upsert<T extends PromptUpsertArgs>(args: SelectSubset<T, PromptUpsertArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptCountArgs} args - Arguments to filter Prompts to count.
     * @example
     * // Count the number of Prompts
     * const count = await prisma.prompt.count({
     *   where: {
     *     // ... the filter for the Prompts we want to count
     *   }
     * })
    **/
    count<T extends PromptCountArgs>(
      args?: Subset<T, PromptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromptAggregateArgs>(args: Subset<T, PromptAggregateArgs>): Prisma.PrismaPromise<GetPromptAggregateType<T>>

    /**
     * Group by Prompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptGroupByArgs} args - Group by arguments.
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
      T extends PromptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptGroupByArgs['orderBy'] }
        : { orderBy?: PromptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prompt model
   */
  readonly fields: PromptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prompt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profiles<T extends Prompt$profilesArgs<ExtArgs> = {}>(args?: Subset<T, Prompt$profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileToPromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    models<T extends Prompt$modelsArgs<ExtArgs> = {}>(args?: Subset<T, Prompt$modelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelToPromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responses<T extends Prompt$responsesArgs<ExtArgs> = {}>(args?: Subset<T, Prompt$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Prompt model
   */
  interface PromptFieldRefs {
    readonly id: FieldRef<"Prompt", 'String'>
    readonly prompt: FieldRef<"Prompt", 'String'>
    readonly tokens: FieldRef<"Prompt", 'Int'>
    readonly createdAt: FieldRef<"Prompt", 'DateTime'>
    readonly updatedAt: FieldRef<"Prompt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prompt findUnique
   */
  export type PromptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt findUniqueOrThrow
   */
  export type PromptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt findFirst
   */
  export type PromptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt findFirstOrThrow
   */
  export type PromptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt findMany
   */
  export type PromptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt create
   */
  export type PromptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The data needed to create a Prompt.
     */
    data: XOR<PromptCreateInput, PromptUncheckedCreateInput>
  }

  /**
   * Prompt createMany
   */
  export type PromptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prompts.
     */
    data: PromptCreateManyInput | PromptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prompt createManyAndReturn
   */
  export type PromptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * The data used to create many Prompts.
     */
    data: PromptCreateManyInput | PromptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prompt update
   */
  export type PromptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The data needed to update a Prompt.
     */
    data: XOR<PromptUpdateInput, PromptUncheckedUpdateInput>
    /**
     * Choose, which Prompt to update.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt updateMany
   */
  export type PromptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prompts.
     */
    data: XOR<PromptUpdateManyMutationInput, PromptUncheckedUpdateManyInput>
    /**
     * Filter which Prompts to update
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to update.
     */
    limit?: number
  }

  /**
   * Prompt updateManyAndReturn
   */
  export type PromptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * The data used to update Prompts.
     */
    data: XOR<PromptUpdateManyMutationInput, PromptUncheckedUpdateManyInput>
    /**
     * Filter which Prompts to update
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to update.
     */
    limit?: number
  }

  /**
   * Prompt upsert
   */
  export type PromptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The filter to search for the Prompt to update in case it exists.
     */
    where: PromptWhereUniqueInput
    /**
     * In case the Prompt found by the `where` argument doesn't exist, create a new Prompt with this data.
     */
    create: XOR<PromptCreateInput, PromptUncheckedCreateInput>
    /**
     * In case the Prompt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptUpdateInput, PromptUncheckedUpdateInput>
  }

  /**
   * Prompt delete
   */
  export type PromptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter which Prompt to delete.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt deleteMany
   */
  export type PromptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompts to delete
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to delete.
     */
    limit?: number
  }

  /**
   * Prompt.profiles
   */
  export type Prompt$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileToPrompt
     */
    select?: ProfileToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileToPrompt
     */
    omit?: ProfileToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileToPromptInclude<ExtArgs> | null
    where?: ProfileToPromptWhereInput
    orderBy?: ProfileToPromptOrderByWithRelationInput | ProfileToPromptOrderByWithRelationInput[]
    cursor?: ProfileToPromptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileToPromptScalarFieldEnum | ProfileToPromptScalarFieldEnum[]
  }

  /**
   * Prompt.models
   */
  export type Prompt$modelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelToPrompt
     */
    select?: ModelToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelToPrompt
     */
    omit?: ModelToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelToPromptInclude<ExtArgs> | null
    where?: ModelToPromptWhereInput
    orderBy?: ModelToPromptOrderByWithRelationInput | ModelToPromptOrderByWithRelationInput[]
    cursor?: ModelToPromptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModelToPromptScalarFieldEnum | ModelToPromptScalarFieldEnum[]
  }

  /**
   * Prompt.responses
   */
  export type Prompt$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    where?: PromptResponseWhereInput
    orderBy?: PromptResponseOrderByWithRelationInput | PromptResponseOrderByWithRelationInput[]
    cursor?: PromptResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromptResponseScalarFieldEnum | PromptResponseScalarFieldEnum[]
  }

  /**
   * Prompt without action
   */
  export type PromptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
  }


  /**
   * Model ModelToPrompt
   */

  export type AggregateModelToPrompt = {
    _count: ModelToPromptCountAggregateOutputType | null
    _min: ModelToPromptMinAggregateOutputType | null
    _max: ModelToPromptMaxAggregateOutputType | null
  }

  export type ModelToPromptMinAggregateOutputType = {
    model_id: string | null
    prompt_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelToPromptMaxAggregateOutputType = {
    model_id: string | null
    prompt_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelToPromptCountAggregateOutputType = {
    model_id: number
    prompt_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModelToPromptMinAggregateInputType = {
    model_id?: true
    prompt_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelToPromptMaxAggregateInputType = {
    model_id?: true
    prompt_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelToPromptCountAggregateInputType = {
    model_id?: true
    prompt_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModelToPromptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelToPrompt to aggregate.
     */
    where?: ModelToPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelToPrompts to fetch.
     */
    orderBy?: ModelToPromptOrderByWithRelationInput | ModelToPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelToPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelToPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelToPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModelToPrompts
    **/
    _count?: true | ModelToPromptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelToPromptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelToPromptMaxAggregateInputType
  }

  export type GetModelToPromptAggregateType<T extends ModelToPromptAggregateArgs> = {
        [P in keyof T & keyof AggregateModelToPrompt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModelToPrompt[P]>
      : GetScalarType<T[P], AggregateModelToPrompt[P]>
  }




  export type ModelToPromptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelToPromptWhereInput
    orderBy?: ModelToPromptOrderByWithAggregationInput | ModelToPromptOrderByWithAggregationInput[]
    by: ModelToPromptScalarFieldEnum[] | ModelToPromptScalarFieldEnum
    having?: ModelToPromptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelToPromptCountAggregateInputType | true
    _min?: ModelToPromptMinAggregateInputType
    _max?: ModelToPromptMaxAggregateInputType
  }

  export type ModelToPromptGroupByOutputType = {
    model_id: string
    prompt_id: string
    createdAt: Date
    updatedAt: Date
    _count: ModelToPromptCountAggregateOutputType | null
    _min: ModelToPromptMinAggregateOutputType | null
    _max: ModelToPromptMaxAggregateOutputType | null
  }

  type GetModelToPromptGroupByPayload<T extends ModelToPromptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelToPromptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelToPromptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelToPromptGroupByOutputType[P]>
            : GetScalarType<T[P], ModelToPromptGroupByOutputType[P]>
        }
      >
    >


  export type ModelToPromptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    model_id?: boolean
    prompt_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    model?: boolean | LLMModelDefaultArgs<ExtArgs>
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modelToPrompt"]>

  export type ModelToPromptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    model_id?: boolean
    prompt_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    model?: boolean | LLMModelDefaultArgs<ExtArgs>
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modelToPrompt"]>

  export type ModelToPromptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    model_id?: boolean
    prompt_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    model?: boolean | LLMModelDefaultArgs<ExtArgs>
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modelToPrompt"]>

  export type ModelToPromptSelectScalar = {
    model_id?: boolean
    prompt_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModelToPromptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"model_id" | "prompt_id" | "createdAt" | "updatedAt", ExtArgs["result"]["modelToPrompt"]>
  export type ModelToPromptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | LLMModelDefaultArgs<ExtArgs>
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }
  export type ModelToPromptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | LLMModelDefaultArgs<ExtArgs>
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }
  export type ModelToPromptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | LLMModelDefaultArgs<ExtArgs>
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }

  export type $ModelToPromptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModelToPrompt"
    objects: {
      model: Prisma.$LLMModelPayload<ExtArgs>
      prompt: Prisma.$PromptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      model_id: string
      prompt_id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["modelToPrompt"]>
    composites: {}
  }

  type ModelToPromptGetPayload<S extends boolean | null | undefined | ModelToPromptDefaultArgs> = $Result.GetResult<Prisma.$ModelToPromptPayload, S>

  type ModelToPromptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelToPromptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelToPromptCountAggregateInputType | true
    }

  export interface ModelToPromptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModelToPrompt'], meta: { name: 'ModelToPrompt' } }
    /**
     * Find zero or one ModelToPrompt that matches the filter.
     * @param {ModelToPromptFindUniqueArgs} args - Arguments to find a ModelToPrompt
     * @example
     * // Get one ModelToPrompt
     * const modelToPrompt = await prisma.modelToPrompt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelToPromptFindUniqueArgs>(args: SelectSubset<T, ModelToPromptFindUniqueArgs<ExtArgs>>): Prisma__ModelToPromptClient<$Result.GetResult<Prisma.$ModelToPromptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModelToPrompt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelToPromptFindUniqueOrThrowArgs} args - Arguments to find a ModelToPrompt
     * @example
     * // Get one ModelToPrompt
     * const modelToPrompt = await prisma.modelToPrompt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelToPromptFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelToPromptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelToPromptClient<$Result.GetResult<Prisma.$ModelToPromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModelToPrompt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelToPromptFindFirstArgs} args - Arguments to find a ModelToPrompt
     * @example
     * // Get one ModelToPrompt
     * const modelToPrompt = await prisma.modelToPrompt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelToPromptFindFirstArgs>(args?: SelectSubset<T, ModelToPromptFindFirstArgs<ExtArgs>>): Prisma__ModelToPromptClient<$Result.GetResult<Prisma.$ModelToPromptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModelToPrompt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelToPromptFindFirstOrThrowArgs} args - Arguments to find a ModelToPrompt
     * @example
     * // Get one ModelToPrompt
     * const modelToPrompt = await prisma.modelToPrompt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelToPromptFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelToPromptFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelToPromptClient<$Result.GetResult<Prisma.$ModelToPromptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModelToPrompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelToPromptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModelToPrompts
     * const modelToPrompts = await prisma.modelToPrompt.findMany()
     * 
     * // Get first 10 ModelToPrompts
     * const modelToPrompts = await prisma.modelToPrompt.findMany({ take: 10 })
     * 
     * // Only select the `model_id`
     * const modelToPromptWithModel_idOnly = await prisma.modelToPrompt.findMany({ select: { model_id: true } })
     * 
     */
    findMany<T extends ModelToPromptFindManyArgs>(args?: SelectSubset<T, ModelToPromptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelToPromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModelToPrompt.
     * @param {ModelToPromptCreateArgs} args - Arguments to create a ModelToPrompt.
     * @example
     * // Create one ModelToPrompt
     * const ModelToPrompt = await prisma.modelToPrompt.create({
     *   data: {
     *     // ... data to create a ModelToPrompt
     *   }
     * })
     * 
     */
    create<T extends ModelToPromptCreateArgs>(args: SelectSubset<T, ModelToPromptCreateArgs<ExtArgs>>): Prisma__ModelToPromptClient<$Result.GetResult<Prisma.$ModelToPromptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModelToPrompts.
     * @param {ModelToPromptCreateManyArgs} args - Arguments to create many ModelToPrompts.
     * @example
     * // Create many ModelToPrompts
     * const modelToPrompt = await prisma.modelToPrompt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelToPromptCreateManyArgs>(args?: SelectSubset<T, ModelToPromptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModelToPrompts and returns the data saved in the database.
     * @param {ModelToPromptCreateManyAndReturnArgs} args - Arguments to create many ModelToPrompts.
     * @example
     * // Create many ModelToPrompts
     * const modelToPrompt = await prisma.modelToPrompt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModelToPrompts and only return the `model_id`
     * const modelToPromptWithModel_idOnly = await prisma.modelToPrompt.createManyAndReturn({
     *   select: { model_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelToPromptCreateManyAndReturnArgs>(args?: SelectSubset<T, ModelToPromptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelToPromptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModelToPrompt.
     * @param {ModelToPromptDeleteArgs} args - Arguments to delete one ModelToPrompt.
     * @example
     * // Delete one ModelToPrompt
     * const ModelToPrompt = await prisma.modelToPrompt.delete({
     *   where: {
     *     // ... filter to delete one ModelToPrompt
     *   }
     * })
     * 
     */
    delete<T extends ModelToPromptDeleteArgs>(args: SelectSubset<T, ModelToPromptDeleteArgs<ExtArgs>>): Prisma__ModelToPromptClient<$Result.GetResult<Prisma.$ModelToPromptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModelToPrompt.
     * @param {ModelToPromptUpdateArgs} args - Arguments to update one ModelToPrompt.
     * @example
     * // Update one ModelToPrompt
     * const modelToPrompt = await prisma.modelToPrompt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelToPromptUpdateArgs>(args: SelectSubset<T, ModelToPromptUpdateArgs<ExtArgs>>): Prisma__ModelToPromptClient<$Result.GetResult<Prisma.$ModelToPromptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModelToPrompts.
     * @param {ModelToPromptDeleteManyArgs} args - Arguments to filter ModelToPrompts to delete.
     * @example
     * // Delete a few ModelToPrompts
     * const { count } = await prisma.modelToPrompt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelToPromptDeleteManyArgs>(args?: SelectSubset<T, ModelToPromptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelToPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelToPromptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModelToPrompts
     * const modelToPrompt = await prisma.modelToPrompt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelToPromptUpdateManyArgs>(args: SelectSubset<T, ModelToPromptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelToPrompts and returns the data updated in the database.
     * @param {ModelToPromptUpdateManyAndReturnArgs} args - Arguments to update many ModelToPrompts.
     * @example
     * // Update many ModelToPrompts
     * const modelToPrompt = await prisma.modelToPrompt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModelToPrompts and only return the `model_id`
     * const modelToPromptWithModel_idOnly = await prisma.modelToPrompt.updateManyAndReturn({
     *   select: { model_id: true },
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
    updateManyAndReturn<T extends ModelToPromptUpdateManyAndReturnArgs>(args: SelectSubset<T, ModelToPromptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelToPromptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModelToPrompt.
     * @param {ModelToPromptUpsertArgs} args - Arguments to update or create a ModelToPrompt.
     * @example
     * // Update or create a ModelToPrompt
     * const modelToPrompt = await prisma.modelToPrompt.upsert({
     *   create: {
     *     // ... data to create a ModelToPrompt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModelToPrompt we want to update
     *   }
     * })
     */
    upsert<T extends ModelToPromptUpsertArgs>(args: SelectSubset<T, ModelToPromptUpsertArgs<ExtArgs>>): Prisma__ModelToPromptClient<$Result.GetResult<Prisma.$ModelToPromptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModelToPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelToPromptCountArgs} args - Arguments to filter ModelToPrompts to count.
     * @example
     * // Count the number of ModelToPrompts
     * const count = await prisma.modelToPrompt.count({
     *   where: {
     *     // ... the filter for the ModelToPrompts we want to count
     *   }
     * })
    **/
    count<T extends ModelToPromptCountArgs>(
      args?: Subset<T, ModelToPromptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelToPromptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModelToPrompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelToPromptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelToPromptAggregateArgs>(args: Subset<T, ModelToPromptAggregateArgs>): Prisma.PrismaPromise<GetModelToPromptAggregateType<T>>

    /**
     * Group by ModelToPrompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelToPromptGroupByArgs} args - Group by arguments.
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
      T extends ModelToPromptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelToPromptGroupByArgs['orderBy'] }
        : { orderBy?: ModelToPromptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModelToPromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelToPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModelToPrompt model
   */
  readonly fields: ModelToPromptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModelToPrompt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelToPromptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model<T extends LLMModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LLMModelDefaultArgs<ExtArgs>>): Prisma__LLMModelClient<$Result.GetResult<Prisma.$LLMModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prompt<T extends PromptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromptDefaultArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ModelToPrompt model
   */
  interface ModelToPromptFieldRefs {
    readonly model_id: FieldRef<"ModelToPrompt", 'String'>
    readonly prompt_id: FieldRef<"ModelToPrompt", 'String'>
    readonly createdAt: FieldRef<"ModelToPrompt", 'DateTime'>
    readonly updatedAt: FieldRef<"ModelToPrompt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModelToPrompt findUnique
   */
  export type ModelToPromptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelToPrompt
     */
    select?: ModelToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelToPrompt
     */
    omit?: ModelToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelToPromptInclude<ExtArgs> | null
    /**
     * Filter, which ModelToPrompt to fetch.
     */
    where: ModelToPromptWhereUniqueInput
  }

  /**
   * ModelToPrompt findUniqueOrThrow
   */
  export type ModelToPromptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelToPrompt
     */
    select?: ModelToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelToPrompt
     */
    omit?: ModelToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelToPromptInclude<ExtArgs> | null
    /**
     * Filter, which ModelToPrompt to fetch.
     */
    where: ModelToPromptWhereUniqueInput
  }

  /**
   * ModelToPrompt findFirst
   */
  export type ModelToPromptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelToPrompt
     */
    select?: ModelToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelToPrompt
     */
    omit?: ModelToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelToPromptInclude<ExtArgs> | null
    /**
     * Filter, which ModelToPrompt to fetch.
     */
    where?: ModelToPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelToPrompts to fetch.
     */
    orderBy?: ModelToPromptOrderByWithRelationInput | ModelToPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelToPrompts.
     */
    cursor?: ModelToPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelToPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelToPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelToPrompts.
     */
    distinct?: ModelToPromptScalarFieldEnum | ModelToPromptScalarFieldEnum[]
  }

  /**
   * ModelToPrompt findFirstOrThrow
   */
  export type ModelToPromptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelToPrompt
     */
    select?: ModelToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelToPrompt
     */
    omit?: ModelToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelToPromptInclude<ExtArgs> | null
    /**
     * Filter, which ModelToPrompt to fetch.
     */
    where?: ModelToPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelToPrompts to fetch.
     */
    orderBy?: ModelToPromptOrderByWithRelationInput | ModelToPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelToPrompts.
     */
    cursor?: ModelToPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelToPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelToPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelToPrompts.
     */
    distinct?: ModelToPromptScalarFieldEnum | ModelToPromptScalarFieldEnum[]
  }

  /**
   * ModelToPrompt findMany
   */
  export type ModelToPromptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelToPrompt
     */
    select?: ModelToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelToPrompt
     */
    omit?: ModelToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelToPromptInclude<ExtArgs> | null
    /**
     * Filter, which ModelToPrompts to fetch.
     */
    where?: ModelToPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelToPrompts to fetch.
     */
    orderBy?: ModelToPromptOrderByWithRelationInput | ModelToPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModelToPrompts.
     */
    cursor?: ModelToPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelToPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelToPrompts.
     */
    skip?: number
    distinct?: ModelToPromptScalarFieldEnum | ModelToPromptScalarFieldEnum[]
  }

  /**
   * ModelToPrompt create
   */
  export type ModelToPromptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelToPrompt
     */
    select?: ModelToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelToPrompt
     */
    omit?: ModelToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelToPromptInclude<ExtArgs> | null
    /**
     * The data needed to create a ModelToPrompt.
     */
    data: XOR<ModelToPromptCreateInput, ModelToPromptUncheckedCreateInput>
  }

  /**
   * ModelToPrompt createMany
   */
  export type ModelToPromptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModelToPrompts.
     */
    data: ModelToPromptCreateManyInput | ModelToPromptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModelToPrompt createManyAndReturn
   */
  export type ModelToPromptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelToPrompt
     */
    select?: ModelToPromptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModelToPrompt
     */
    omit?: ModelToPromptOmit<ExtArgs> | null
    /**
     * The data used to create many ModelToPrompts.
     */
    data: ModelToPromptCreateManyInput | ModelToPromptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelToPromptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModelToPrompt update
   */
  export type ModelToPromptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelToPrompt
     */
    select?: ModelToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelToPrompt
     */
    omit?: ModelToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelToPromptInclude<ExtArgs> | null
    /**
     * The data needed to update a ModelToPrompt.
     */
    data: XOR<ModelToPromptUpdateInput, ModelToPromptUncheckedUpdateInput>
    /**
     * Choose, which ModelToPrompt to update.
     */
    where: ModelToPromptWhereUniqueInput
  }

  /**
   * ModelToPrompt updateMany
   */
  export type ModelToPromptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModelToPrompts.
     */
    data: XOR<ModelToPromptUpdateManyMutationInput, ModelToPromptUncheckedUpdateManyInput>
    /**
     * Filter which ModelToPrompts to update
     */
    where?: ModelToPromptWhereInput
    /**
     * Limit how many ModelToPrompts to update.
     */
    limit?: number
  }

  /**
   * ModelToPrompt updateManyAndReturn
   */
  export type ModelToPromptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelToPrompt
     */
    select?: ModelToPromptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModelToPrompt
     */
    omit?: ModelToPromptOmit<ExtArgs> | null
    /**
     * The data used to update ModelToPrompts.
     */
    data: XOR<ModelToPromptUpdateManyMutationInput, ModelToPromptUncheckedUpdateManyInput>
    /**
     * Filter which ModelToPrompts to update
     */
    where?: ModelToPromptWhereInput
    /**
     * Limit how many ModelToPrompts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelToPromptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModelToPrompt upsert
   */
  export type ModelToPromptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelToPrompt
     */
    select?: ModelToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelToPrompt
     */
    omit?: ModelToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelToPromptInclude<ExtArgs> | null
    /**
     * The filter to search for the ModelToPrompt to update in case it exists.
     */
    where: ModelToPromptWhereUniqueInput
    /**
     * In case the ModelToPrompt found by the `where` argument doesn't exist, create a new ModelToPrompt with this data.
     */
    create: XOR<ModelToPromptCreateInput, ModelToPromptUncheckedCreateInput>
    /**
     * In case the ModelToPrompt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelToPromptUpdateInput, ModelToPromptUncheckedUpdateInput>
  }

  /**
   * ModelToPrompt delete
   */
  export type ModelToPromptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelToPrompt
     */
    select?: ModelToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelToPrompt
     */
    omit?: ModelToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelToPromptInclude<ExtArgs> | null
    /**
     * Filter which ModelToPrompt to delete.
     */
    where: ModelToPromptWhereUniqueInput
  }

  /**
   * ModelToPrompt deleteMany
   */
  export type ModelToPromptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelToPrompts to delete
     */
    where?: ModelToPromptWhereInput
    /**
     * Limit how many ModelToPrompts to delete.
     */
    limit?: number
  }

  /**
   * ModelToPrompt without action
   */
  export type ModelToPromptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelToPrompt
     */
    select?: ModelToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelToPrompt
     */
    omit?: ModelToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelToPromptInclude<ExtArgs> | null
  }


  /**
   * Model ProfileToPrompt
   */

  export type AggregateProfileToPrompt = {
    _count: ProfileToPromptCountAggregateOutputType | null
    _min: ProfileToPromptMinAggregateOutputType | null
    _max: ProfileToPromptMaxAggregateOutputType | null
  }

  export type ProfileToPromptMinAggregateOutputType = {
    profile_id: string | null
    prompt_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileToPromptMaxAggregateOutputType = {
    profile_id: string | null
    prompt_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileToPromptCountAggregateOutputType = {
    profile_id: number
    prompt_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileToPromptMinAggregateInputType = {
    profile_id?: true
    prompt_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileToPromptMaxAggregateInputType = {
    profile_id?: true
    prompt_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileToPromptCountAggregateInputType = {
    profile_id?: true
    prompt_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileToPromptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileToPrompt to aggregate.
     */
    where?: ProfileToPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileToPrompts to fetch.
     */
    orderBy?: ProfileToPromptOrderByWithRelationInput | ProfileToPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileToPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileToPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileToPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfileToPrompts
    **/
    _count?: true | ProfileToPromptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileToPromptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileToPromptMaxAggregateInputType
  }

  export type GetProfileToPromptAggregateType<T extends ProfileToPromptAggregateArgs> = {
        [P in keyof T & keyof AggregateProfileToPrompt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfileToPrompt[P]>
      : GetScalarType<T[P], AggregateProfileToPrompt[P]>
  }




  export type ProfileToPromptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileToPromptWhereInput
    orderBy?: ProfileToPromptOrderByWithAggregationInput | ProfileToPromptOrderByWithAggregationInput[]
    by: ProfileToPromptScalarFieldEnum[] | ProfileToPromptScalarFieldEnum
    having?: ProfileToPromptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileToPromptCountAggregateInputType | true
    _min?: ProfileToPromptMinAggregateInputType
    _max?: ProfileToPromptMaxAggregateInputType
  }

  export type ProfileToPromptGroupByOutputType = {
    profile_id: string
    prompt_id: string
    createdAt: Date
    updatedAt: Date
    _count: ProfileToPromptCountAggregateOutputType | null
    _min: ProfileToPromptMinAggregateOutputType | null
    _max: ProfileToPromptMaxAggregateOutputType | null
  }

  type GetProfileToPromptGroupByPayload<T extends ProfileToPromptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileToPromptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileToPromptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileToPromptGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileToPromptGroupByOutputType[P]>
        }
      >
    >


  export type ProfileToPromptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profile_id?: boolean
    prompt_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | SamplingProfileDefaultArgs<ExtArgs>
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileToPrompt"]>

  export type ProfileToPromptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profile_id?: boolean
    prompt_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | SamplingProfileDefaultArgs<ExtArgs>
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileToPrompt"]>

  export type ProfileToPromptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profile_id?: boolean
    prompt_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | SamplingProfileDefaultArgs<ExtArgs>
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileToPrompt"]>

  export type ProfileToPromptSelectScalar = {
    profile_id?: boolean
    prompt_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileToPromptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"profile_id" | "prompt_id" | "createdAt" | "updatedAt", ExtArgs["result"]["profileToPrompt"]>
  export type ProfileToPromptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | SamplingProfileDefaultArgs<ExtArgs>
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }
  export type ProfileToPromptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | SamplingProfileDefaultArgs<ExtArgs>
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }
  export type ProfileToPromptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | SamplingProfileDefaultArgs<ExtArgs>
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }

  export type $ProfileToPromptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfileToPrompt"
    objects: {
      profile: Prisma.$SamplingProfilePayload<ExtArgs>
      prompt: Prisma.$PromptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      profile_id: string
      prompt_id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profileToPrompt"]>
    composites: {}
  }

  type ProfileToPromptGetPayload<S extends boolean | null | undefined | ProfileToPromptDefaultArgs> = $Result.GetResult<Prisma.$ProfileToPromptPayload, S>

  type ProfileToPromptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileToPromptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileToPromptCountAggregateInputType | true
    }

  export interface ProfileToPromptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfileToPrompt'], meta: { name: 'ProfileToPrompt' } }
    /**
     * Find zero or one ProfileToPrompt that matches the filter.
     * @param {ProfileToPromptFindUniqueArgs} args - Arguments to find a ProfileToPrompt
     * @example
     * // Get one ProfileToPrompt
     * const profileToPrompt = await prisma.profileToPrompt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileToPromptFindUniqueArgs>(args: SelectSubset<T, ProfileToPromptFindUniqueArgs<ExtArgs>>): Prisma__ProfileToPromptClient<$Result.GetResult<Prisma.$ProfileToPromptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfileToPrompt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileToPromptFindUniqueOrThrowArgs} args - Arguments to find a ProfileToPrompt
     * @example
     * // Get one ProfileToPrompt
     * const profileToPrompt = await prisma.profileToPrompt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileToPromptFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileToPromptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileToPromptClient<$Result.GetResult<Prisma.$ProfileToPromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileToPrompt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileToPromptFindFirstArgs} args - Arguments to find a ProfileToPrompt
     * @example
     * // Get one ProfileToPrompt
     * const profileToPrompt = await prisma.profileToPrompt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileToPromptFindFirstArgs>(args?: SelectSubset<T, ProfileToPromptFindFirstArgs<ExtArgs>>): Prisma__ProfileToPromptClient<$Result.GetResult<Prisma.$ProfileToPromptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileToPrompt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileToPromptFindFirstOrThrowArgs} args - Arguments to find a ProfileToPrompt
     * @example
     * // Get one ProfileToPrompt
     * const profileToPrompt = await prisma.profileToPrompt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileToPromptFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileToPromptFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileToPromptClient<$Result.GetResult<Prisma.$ProfileToPromptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfileToPrompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileToPromptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfileToPrompts
     * const profileToPrompts = await prisma.profileToPrompt.findMany()
     * 
     * // Get first 10 ProfileToPrompts
     * const profileToPrompts = await prisma.profileToPrompt.findMany({ take: 10 })
     * 
     * // Only select the `profile_id`
     * const profileToPromptWithProfile_idOnly = await prisma.profileToPrompt.findMany({ select: { profile_id: true } })
     * 
     */
    findMany<T extends ProfileToPromptFindManyArgs>(args?: SelectSubset<T, ProfileToPromptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileToPromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfileToPrompt.
     * @param {ProfileToPromptCreateArgs} args - Arguments to create a ProfileToPrompt.
     * @example
     * // Create one ProfileToPrompt
     * const ProfileToPrompt = await prisma.profileToPrompt.create({
     *   data: {
     *     // ... data to create a ProfileToPrompt
     *   }
     * })
     * 
     */
    create<T extends ProfileToPromptCreateArgs>(args: SelectSubset<T, ProfileToPromptCreateArgs<ExtArgs>>): Prisma__ProfileToPromptClient<$Result.GetResult<Prisma.$ProfileToPromptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfileToPrompts.
     * @param {ProfileToPromptCreateManyArgs} args - Arguments to create many ProfileToPrompts.
     * @example
     * // Create many ProfileToPrompts
     * const profileToPrompt = await prisma.profileToPrompt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileToPromptCreateManyArgs>(args?: SelectSubset<T, ProfileToPromptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfileToPrompts and returns the data saved in the database.
     * @param {ProfileToPromptCreateManyAndReturnArgs} args - Arguments to create many ProfileToPrompts.
     * @example
     * // Create many ProfileToPrompts
     * const profileToPrompt = await prisma.profileToPrompt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfileToPrompts and only return the `profile_id`
     * const profileToPromptWithProfile_idOnly = await prisma.profileToPrompt.createManyAndReturn({
     *   select: { profile_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileToPromptCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileToPromptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileToPromptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfileToPrompt.
     * @param {ProfileToPromptDeleteArgs} args - Arguments to delete one ProfileToPrompt.
     * @example
     * // Delete one ProfileToPrompt
     * const ProfileToPrompt = await prisma.profileToPrompt.delete({
     *   where: {
     *     // ... filter to delete one ProfileToPrompt
     *   }
     * })
     * 
     */
    delete<T extends ProfileToPromptDeleteArgs>(args: SelectSubset<T, ProfileToPromptDeleteArgs<ExtArgs>>): Prisma__ProfileToPromptClient<$Result.GetResult<Prisma.$ProfileToPromptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfileToPrompt.
     * @param {ProfileToPromptUpdateArgs} args - Arguments to update one ProfileToPrompt.
     * @example
     * // Update one ProfileToPrompt
     * const profileToPrompt = await prisma.profileToPrompt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileToPromptUpdateArgs>(args: SelectSubset<T, ProfileToPromptUpdateArgs<ExtArgs>>): Prisma__ProfileToPromptClient<$Result.GetResult<Prisma.$ProfileToPromptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfileToPrompts.
     * @param {ProfileToPromptDeleteManyArgs} args - Arguments to filter ProfileToPrompts to delete.
     * @example
     * // Delete a few ProfileToPrompts
     * const { count } = await prisma.profileToPrompt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileToPromptDeleteManyArgs>(args?: SelectSubset<T, ProfileToPromptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileToPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileToPromptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfileToPrompts
     * const profileToPrompt = await prisma.profileToPrompt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileToPromptUpdateManyArgs>(args: SelectSubset<T, ProfileToPromptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileToPrompts and returns the data updated in the database.
     * @param {ProfileToPromptUpdateManyAndReturnArgs} args - Arguments to update many ProfileToPrompts.
     * @example
     * // Update many ProfileToPrompts
     * const profileToPrompt = await prisma.profileToPrompt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfileToPrompts and only return the `profile_id`
     * const profileToPromptWithProfile_idOnly = await prisma.profileToPrompt.updateManyAndReturn({
     *   select: { profile_id: true },
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
    updateManyAndReturn<T extends ProfileToPromptUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileToPromptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileToPromptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfileToPrompt.
     * @param {ProfileToPromptUpsertArgs} args - Arguments to update or create a ProfileToPrompt.
     * @example
     * // Update or create a ProfileToPrompt
     * const profileToPrompt = await prisma.profileToPrompt.upsert({
     *   create: {
     *     // ... data to create a ProfileToPrompt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileToPrompt we want to update
     *   }
     * })
     */
    upsert<T extends ProfileToPromptUpsertArgs>(args: SelectSubset<T, ProfileToPromptUpsertArgs<ExtArgs>>): Prisma__ProfileToPromptClient<$Result.GetResult<Prisma.$ProfileToPromptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfileToPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileToPromptCountArgs} args - Arguments to filter ProfileToPrompts to count.
     * @example
     * // Count the number of ProfileToPrompts
     * const count = await prisma.profileToPrompt.count({
     *   where: {
     *     // ... the filter for the ProfileToPrompts we want to count
     *   }
     * })
    **/
    count<T extends ProfileToPromptCountArgs>(
      args?: Subset<T, ProfileToPromptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileToPromptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfileToPrompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileToPromptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileToPromptAggregateArgs>(args: Subset<T, ProfileToPromptAggregateArgs>): Prisma.PrismaPromise<GetProfileToPromptAggregateType<T>>

    /**
     * Group by ProfileToPrompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileToPromptGroupByArgs} args - Group by arguments.
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
      T extends ProfileToPromptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileToPromptGroupByArgs['orderBy'] }
        : { orderBy?: ProfileToPromptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileToPromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileToPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfileToPrompt model
   */
  readonly fields: ProfileToPromptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfileToPrompt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileToPromptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends SamplingProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SamplingProfileDefaultArgs<ExtArgs>>): Prisma__SamplingProfileClient<$Result.GetResult<Prisma.$SamplingProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prompt<T extends PromptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromptDefaultArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProfileToPrompt model
   */
  interface ProfileToPromptFieldRefs {
    readonly profile_id: FieldRef<"ProfileToPrompt", 'String'>
    readonly prompt_id: FieldRef<"ProfileToPrompt", 'String'>
    readonly createdAt: FieldRef<"ProfileToPrompt", 'DateTime'>
    readonly updatedAt: FieldRef<"ProfileToPrompt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfileToPrompt findUnique
   */
  export type ProfileToPromptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileToPrompt
     */
    select?: ProfileToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileToPrompt
     */
    omit?: ProfileToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileToPromptInclude<ExtArgs> | null
    /**
     * Filter, which ProfileToPrompt to fetch.
     */
    where: ProfileToPromptWhereUniqueInput
  }

  /**
   * ProfileToPrompt findUniqueOrThrow
   */
  export type ProfileToPromptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileToPrompt
     */
    select?: ProfileToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileToPrompt
     */
    omit?: ProfileToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileToPromptInclude<ExtArgs> | null
    /**
     * Filter, which ProfileToPrompt to fetch.
     */
    where: ProfileToPromptWhereUniqueInput
  }

  /**
   * ProfileToPrompt findFirst
   */
  export type ProfileToPromptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileToPrompt
     */
    select?: ProfileToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileToPrompt
     */
    omit?: ProfileToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileToPromptInclude<ExtArgs> | null
    /**
     * Filter, which ProfileToPrompt to fetch.
     */
    where?: ProfileToPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileToPrompts to fetch.
     */
    orderBy?: ProfileToPromptOrderByWithRelationInput | ProfileToPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileToPrompts.
     */
    cursor?: ProfileToPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileToPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileToPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileToPrompts.
     */
    distinct?: ProfileToPromptScalarFieldEnum | ProfileToPromptScalarFieldEnum[]
  }

  /**
   * ProfileToPrompt findFirstOrThrow
   */
  export type ProfileToPromptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileToPrompt
     */
    select?: ProfileToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileToPrompt
     */
    omit?: ProfileToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileToPromptInclude<ExtArgs> | null
    /**
     * Filter, which ProfileToPrompt to fetch.
     */
    where?: ProfileToPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileToPrompts to fetch.
     */
    orderBy?: ProfileToPromptOrderByWithRelationInput | ProfileToPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileToPrompts.
     */
    cursor?: ProfileToPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileToPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileToPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileToPrompts.
     */
    distinct?: ProfileToPromptScalarFieldEnum | ProfileToPromptScalarFieldEnum[]
  }

  /**
   * ProfileToPrompt findMany
   */
  export type ProfileToPromptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileToPrompt
     */
    select?: ProfileToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileToPrompt
     */
    omit?: ProfileToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileToPromptInclude<ExtArgs> | null
    /**
     * Filter, which ProfileToPrompts to fetch.
     */
    where?: ProfileToPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileToPrompts to fetch.
     */
    orderBy?: ProfileToPromptOrderByWithRelationInput | ProfileToPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfileToPrompts.
     */
    cursor?: ProfileToPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileToPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileToPrompts.
     */
    skip?: number
    distinct?: ProfileToPromptScalarFieldEnum | ProfileToPromptScalarFieldEnum[]
  }

  /**
   * ProfileToPrompt create
   */
  export type ProfileToPromptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileToPrompt
     */
    select?: ProfileToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileToPrompt
     */
    omit?: ProfileToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileToPromptInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfileToPrompt.
     */
    data: XOR<ProfileToPromptCreateInput, ProfileToPromptUncheckedCreateInput>
  }

  /**
   * ProfileToPrompt createMany
   */
  export type ProfileToPromptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfileToPrompts.
     */
    data: ProfileToPromptCreateManyInput | ProfileToPromptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfileToPrompt createManyAndReturn
   */
  export type ProfileToPromptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileToPrompt
     */
    select?: ProfileToPromptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileToPrompt
     */
    omit?: ProfileToPromptOmit<ExtArgs> | null
    /**
     * The data used to create many ProfileToPrompts.
     */
    data: ProfileToPromptCreateManyInput | ProfileToPromptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileToPromptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileToPrompt update
   */
  export type ProfileToPromptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileToPrompt
     */
    select?: ProfileToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileToPrompt
     */
    omit?: ProfileToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileToPromptInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfileToPrompt.
     */
    data: XOR<ProfileToPromptUpdateInput, ProfileToPromptUncheckedUpdateInput>
    /**
     * Choose, which ProfileToPrompt to update.
     */
    where: ProfileToPromptWhereUniqueInput
  }

  /**
   * ProfileToPrompt updateMany
   */
  export type ProfileToPromptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfileToPrompts.
     */
    data: XOR<ProfileToPromptUpdateManyMutationInput, ProfileToPromptUncheckedUpdateManyInput>
    /**
     * Filter which ProfileToPrompts to update
     */
    where?: ProfileToPromptWhereInput
    /**
     * Limit how many ProfileToPrompts to update.
     */
    limit?: number
  }

  /**
   * ProfileToPrompt updateManyAndReturn
   */
  export type ProfileToPromptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileToPrompt
     */
    select?: ProfileToPromptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileToPrompt
     */
    omit?: ProfileToPromptOmit<ExtArgs> | null
    /**
     * The data used to update ProfileToPrompts.
     */
    data: XOR<ProfileToPromptUpdateManyMutationInput, ProfileToPromptUncheckedUpdateManyInput>
    /**
     * Filter which ProfileToPrompts to update
     */
    where?: ProfileToPromptWhereInput
    /**
     * Limit how many ProfileToPrompts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileToPromptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileToPrompt upsert
   */
  export type ProfileToPromptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileToPrompt
     */
    select?: ProfileToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileToPrompt
     */
    omit?: ProfileToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileToPromptInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfileToPrompt to update in case it exists.
     */
    where: ProfileToPromptWhereUniqueInput
    /**
     * In case the ProfileToPrompt found by the `where` argument doesn't exist, create a new ProfileToPrompt with this data.
     */
    create: XOR<ProfileToPromptCreateInput, ProfileToPromptUncheckedCreateInput>
    /**
     * In case the ProfileToPrompt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileToPromptUpdateInput, ProfileToPromptUncheckedUpdateInput>
  }

  /**
   * ProfileToPrompt delete
   */
  export type ProfileToPromptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileToPrompt
     */
    select?: ProfileToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileToPrompt
     */
    omit?: ProfileToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileToPromptInclude<ExtArgs> | null
    /**
     * Filter which ProfileToPrompt to delete.
     */
    where: ProfileToPromptWhereUniqueInput
  }

  /**
   * ProfileToPrompt deleteMany
   */
  export type ProfileToPromptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileToPrompts to delete
     */
    where?: ProfileToPromptWhereInput
    /**
     * Limit how many ProfileToPrompts to delete.
     */
    limit?: number
  }

  /**
   * ProfileToPrompt without action
   */
  export type ProfileToPromptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileToPrompt
     */
    select?: ProfileToPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileToPrompt
     */
    omit?: ProfileToPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileToPromptInclude<ExtArgs> | null
  }


  /**
   * Model PromptResponse
   */

  export type AggregatePromptResponse = {
    _count: PromptResponseCountAggregateOutputType | null
    _min: PromptResponseMinAggregateOutputType | null
    _max: PromptResponseMaxAggregateOutputType | null
  }

  export type PromptResponseMinAggregateOutputType = {
    id: string | null
    prompt_id: string | null
    model_id: string | null
    profile_id: string | null
    response: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptResponseMaxAggregateOutputType = {
    id: string | null
    prompt_id: string | null
    model_id: string | null
    profile_id: string | null
    response: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptResponseCountAggregateOutputType = {
    id: number
    prompt_id: number
    model_id: number
    profile_id: number
    response: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromptResponseMinAggregateInputType = {
    id?: true
    prompt_id?: true
    model_id?: true
    profile_id?: true
    response?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptResponseMaxAggregateInputType = {
    id?: true
    prompt_id?: true
    model_id?: true
    profile_id?: true
    response?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptResponseCountAggregateInputType = {
    id?: true
    prompt_id?: true
    model_id?: true
    profile_id?: true
    response?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromptResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptResponse to aggregate.
     */
    where?: PromptResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptResponses to fetch.
     */
    orderBy?: PromptResponseOrderByWithRelationInput | PromptResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromptResponses
    **/
    _count?: true | PromptResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptResponseMaxAggregateInputType
  }

  export type GetPromptResponseAggregateType<T extends PromptResponseAggregateArgs> = {
        [P in keyof T & keyof AggregatePromptResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromptResponse[P]>
      : GetScalarType<T[P], AggregatePromptResponse[P]>
  }




  export type PromptResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptResponseWhereInput
    orderBy?: PromptResponseOrderByWithAggregationInput | PromptResponseOrderByWithAggregationInput[]
    by: PromptResponseScalarFieldEnum[] | PromptResponseScalarFieldEnum
    having?: PromptResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptResponseCountAggregateInputType | true
    _min?: PromptResponseMinAggregateInputType
    _max?: PromptResponseMaxAggregateInputType
  }

  export type PromptResponseGroupByOutputType = {
    id: string
    prompt_id: string
    model_id: string
    profile_id: string
    response: string | null
    createdAt: Date
    updatedAt: Date
    _count: PromptResponseCountAggregateOutputType | null
    _min: PromptResponseMinAggregateOutputType | null
    _max: PromptResponseMaxAggregateOutputType | null
  }

  type GetPromptResponseGroupByPayload<T extends PromptResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptResponseGroupByOutputType[P]>
            : GetScalarType<T[P], PromptResponseGroupByOutputType[P]>
        }
      >
    >


  export type PromptResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt_id?: boolean
    model_id?: boolean
    profile_id?: boolean
    response?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
    model?: boolean | LLMModelDefaultArgs<ExtArgs>
    profile?: boolean | SamplingProfileDefaultArgs<ExtArgs>
    lengthMetrics?: boolean | PromptResponse$lengthMetricsArgs<ExtArgs>
  }, ExtArgs["result"]["promptResponse"]>

  export type PromptResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt_id?: boolean
    model_id?: boolean
    profile_id?: boolean
    response?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
    model?: boolean | LLMModelDefaultArgs<ExtArgs>
    profile?: boolean | SamplingProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promptResponse"]>

  export type PromptResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt_id?: boolean
    model_id?: boolean
    profile_id?: boolean
    response?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
    model?: boolean | LLMModelDefaultArgs<ExtArgs>
    profile?: boolean | SamplingProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promptResponse"]>

  export type PromptResponseSelectScalar = {
    id?: boolean
    prompt_id?: boolean
    model_id?: boolean
    profile_id?: boolean
    response?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PromptResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prompt_id" | "model_id" | "profile_id" | "response" | "createdAt" | "updatedAt", ExtArgs["result"]["promptResponse"]>
  export type PromptResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
    model?: boolean | LLMModelDefaultArgs<ExtArgs>
    profile?: boolean | SamplingProfileDefaultArgs<ExtArgs>
    lengthMetrics?: boolean | PromptResponse$lengthMetricsArgs<ExtArgs>
  }
  export type PromptResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
    model?: boolean | LLMModelDefaultArgs<ExtArgs>
    profile?: boolean | SamplingProfileDefaultArgs<ExtArgs>
  }
  export type PromptResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
    model?: boolean | LLMModelDefaultArgs<ExtArgs>
    profile?: boolean | SamplingProfileDefaultArgs<ExtArgs>
  }

  export type $PromptResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromptResponse"
    objects: {
      prompt: Prisma.$PromptPayload<ExtArgs>
      model: Prisma.$LLMModelPayload<ExtArgs>
      profile: Prisma.$SamplingProfilePayload<ExtArgs>
      lengthMetrics: Prisma.$LengthMetricsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prompt_id: string
      model_id: string
      profile_id: string
      response: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["promptResponse"]>
    composites: {}
  }

  type PromptResponseGetPayload<S extends boolean | null | undefined | PromptResponseDefaultArgs> = $Result.GetResult<Prisma.$PromptResponsePayload, S>

  type PromptResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromptResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromptResponseCountAggregateInputType | true
    }

  export interface PromptResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromptResponse'], meta: { name: 'PromptResponse' } }
    /**
     * Find zero or one PromptResponse that matches the filter.
     * @param {PromptResponseFindUniqueArgs} args - Arguments to find a PromptResponse
     * @example
     * // Get one PromptResponse
     * const promptResponse = await prisma.promptResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromptResponseFindUniqueArgs>(args: SelectSubset<T, PromptResponseFindUniqueArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PromptResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromptResponseFindUniqueOrThrowArgs} args - Arguments to find a PromptResponse
     * @example
     * // Get one PromptResponse
     * const promptResponse = await prisma.promptResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromptResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, PromptResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromptResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseFindFirstArgs} args - Arguments to find a PromptResponse
     * @example
     * // Get one PromptResponse
     * const promptResponse = await prisma.promptResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromptResponseFindFirstArgs>(args?: SelectSubset<T, PromptResponseFindFirstArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromptResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseFindFirstOrThrowArgs} args - Arguments to find a PromptResponse
     * @example
     * // Get one PromptResponse
     * const promptResponse = await prisma.promptResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromptResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, PromptResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PromptResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromptResponses
     * const promptResponses = await prisma.promptResponse.findMany()
     * 
     * // Get first 10 PromptResponses
     * const promptResponses = await prisma.promptResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptResponseWithIdOnly = await prisma.promptResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromptResponseFindManyArgs>(args?: SelectSubset<T, PromptResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PromptResponse.
     * @param {PromptResponseCreateArgs} args - Arguments to create a PromptResponse.
     * @example
     * // Create one PromptResponse
     * const PromptResponse = await prisma.promptResponse.create({
     *   data: {
     *     // ... data to create a PromptResponse
     *   }
     * })
     * 
     */
    create<T extends PromptResponseCreateArgs>(args: SelectSubset<T, PromptResponseCreateArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PromptResponses.
     * @param {PromptResponseCreateManyArgs} args - Arguments to create many PromptResponses.
     * @example
     * // Create many PromptResponses
     * const promptResponse = await prisma.promptResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromptResponseCreateManyArgs>(args?: SelectSubset<T, PromptResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PromptResponses and returns the data saved in the database.
     * @param {PromptResponseCreateManyAndReturnArgs} args - Arguments to create many PromptResponses.
     * @example
     * // Create many PromptResponses
     * const promptResponse = await prisma.promptResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PromptResponses and only return the `id`
     * const promptResponseWithIdOnly = await prisma.promptResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromptResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, PromptResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PromptResponse.
     * @param {PromptResponseDeleteArgs} args - Arguments to delete one PromptResponse.
     * @example
     * // Delete one PromptResponse
     * const PromptResponse = await prisma.promptResponse.delete({
     *   where: {
     *     // ... filter to delete one PromptResponse
     *   }
     * })
     * 
     */
    delete<T extends PromptResponseDeleteArgs>(args: SelectSubset<T, PromptResponseDeleteArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PromptResponse.
     * @param {PromptResponseUpdateArgs} args - Arguments to update one PromptResponse.
     * @example
     * // Update one PromptResponse
     * const promptResponse = await prisma.promptResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromptResponseUpdateArgs>(args: SelectSubset<T, PromptResponseUpdateArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PromptResponses.
     * @param {PromptResponseDeleteManyArgs} args - Arguments to filter PromptResponses to delete.
     * @example
     * // Delete a few PromptResponses
     * const { count } = await prisma.promptResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromptResponseDeleteManyArgs>(args?: SelectSubset<T, PromptResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromptResponses
     * const promptResponse = await prisma.promptResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromptResponseUpdateManyArgs>(args: SelectSubset<T, PromptResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptResponses and returns the data updated in the database.
     * @param {PromptResponseUpdateManyAndReturnArgs} args - Arguments to update many PromptResponses.
     * @example
     * // Update many PromptResponses
     * const promptResponse = await prisma.promptResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PromptResponses and only return the `id`
     * const promptResponseWithIdOnly = await prisma.promptResponse.updateManyAndReturn({
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
    updateManyAndReturn<T extends PromptResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, PromptResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PromptResponse.
     * @param {PromptResponseUpsertArgs} args - Arguments to update or create a PromptResponse.
     * @example
     * // Update or create a PromptResponse
     * const promptResponse = await prisma.promptResponse.upsert({
     *   create: {
     *     // ... data to create a PromptResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromptResponse we want to update
     *   }
     * })
     */
    upsert<T extends PromptResponseUpsertArgs>(args: SelectSubset<T, PromptResponseUpsertArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PromptResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseCountArgs} args - Arguments to filter PromptResponses to count.
     * @example
     * // Count the number of PromptResponses
     * const count = await prisma.promptResponse.count({
     *   where: {
     *     // ... the filter for the PromptResponses we want to count
     *   }
     * })
    **/
    count<T extends PromptResponseCountArgs>(
      args?: Subset<T, PromptResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromptResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromptResponseAggregateArgs>(args: Subset<T, PromptResponseAggregateArgs>): Prisma.PrismaPromise<GetPromptResponseAggregateType<T>>

    /**
     * Group by PromptResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseGroupByArgs} args - Group by arguments.
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
      T extends PromptResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptResponseGroupByArgs['orderBy'] }
        : { orderBy?: PromptResponseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromptResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromptResponse model
   */
  readonly fields: PromptResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromptResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prompt<T extends PromptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromptDefaultArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    model<T extends LLMModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LLMModelDefaultArgs<ExtArgs>>): Prisma__LLMModelClient<$Result.GetResult<Prisma.$LLMModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profile<T extends SamplingProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SamplingProfileDefaultArgs<ExtArgs>>): Prisma__SamplingProfileClient<$Result.GetResult<Prisma.$SamplingProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lengthMetrics<T extends PromptResponse$lengthMetricsArgs<ExtArgs> = {}>(args?: Subset<T, PromptResponse$lengthMetricsArgs<ExtArgs>>): Prisma__LengthMetricsClient<$Result.GetResult<Prisma.$LengthMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PromptResponse model
   */
  interface PromptResponseFieldRefs {
    readonly id: FieldRef<"PromptResponse", 'String'>
    readonly prompt_id: FieldRef<"PromptResponse", 'String'>
    readonly model_id: FieldRef<"PromptResponse", 'String'>
    readonly profile_id: FieldRef<"PromptResponse", 'String'>
    readonly response: FieldRef<"PromptResponse", 'String'>
    readonly createdAt: FieldRef<"PromptResponse", 'DateTime'>
    readonly updatedAt: FieldRef<"PromptResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PromptResponse findUnique
   */
  export type PromptResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * Filter, which PromptResponse to fetch.
     */
    where: PromptResponseWhereUniqueInput
  }

  /**
   * PromptResponse findUniqueOrThrow
   */
  export type PromptResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * Filter, which PromptResponse to fetch.
     */
    where: PromptResponseWhereUniqueInput
  }

  /**
   * PromptResponse findFirst
   */
  export type PromptResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * Filter, which PromptResponse to fetch.
     */
    where?: PromptResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptResponses to fetch.
     */
    orderBy?: PromptResponseOrderByWithRelationInput | PromptResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptResponses.
     */
    cursor?: PromptResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptResponses.
     */
    distinct?: PromptResponseScalarFieldEnum | PromptResponseScalarFieldEnum[]
  }

  /**
   * PromptResponse findFirstOrThrow
   */
  export type PromptResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * Filter, which PromptResponse to fetch.
     */
    where?: PromptResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptResponses to fetch.
     */
    orderBy?: PromptResponseOrderByWithRelationInput | PromptResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptResponses.
     */
    cursor?: PromptResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptResponses.
     */
    distinct?: PromptResponseScalarFieldEnum | PromptResponseScalarFieldEnum[]
  }

  /**
   * PromptResponse findMany
   */
  export type PromptResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * Filter, which PromptResponses to fetch.
     */
    where?: PromptResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptResponses to fetch.
     */
    orderBy?: PromptResponseOrderByWithRelationInput | PromptResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromptResponses.
     */
    cursor?: PromptResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptResponses.
     */
    skip?: number
    distinct?: PromptResponseScalarFieldEnum | PromptResponseScalarFieldEnum[]
  }

  /**
   * PromptResponse create
   */
  export type PromptResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a PromptResponse.
     */
    data: XOR<PromptResponseCreateInput, PromptResponseUncheckedCreateInput>
  }

  /**
   * PromptResponse createMany
   */
  export type PromptResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromptResponses.
     */
    data: PromptResponseCreateManyInput | PromptResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromptResponse createManyAndReturn
   */
  export type PromptResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * The data used to create many PromptResponses.
     */
    data: PromptResponseCreateManyInput | PromptResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PromptResponse update
   */
  export type PromptResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a PromptResponse.
     */
    data: XOR<PromptResponseUpdateInput, PromptResponseUncheckedUpdateInput>
    /**
     * Choose, which PromptResponse to update.
     */
    where: PromptResponseWhereUniqueInput
  }

  /**
   * PromptResponse updateMany
   */
  export type PromptResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromptResponses.
     */
    data: XOR<PromptResponseUpdateManyMutationInput, PromptResponseUncheckedUpdateManyInput>
    /**
     * Filter which PromptResponses to update
     */
    where?: PromptResponseWhereInput
    /**
     * Limit how many PromptResponses to update.
     */
    limit?: number
  }

  /**
   * PromptResponse updateManyAndReturn
   */
  export type PromptResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * The data used to update PromptResponses.
     */
    data: XOR<PromptResponseUpdateManyMutationInput, PromptResponseUncheckedUpdateManyInput>
    /**
     * Filter which PromptResponses to update
     */
    where?: PromptResponseWhereInput
    /**
     * Limit how many PromptResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PromptResponse upsert
   */
  export type PromptResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the PromptResponse to update in case it exists.
     */
    where: PromptResponseWhereUniqueInput
    /**
     * In case the PromptResponse found by the `where` argument doesn't exist, create a new PromptResponse with this data.
     */
    create: XOR<PromptResponseCreateInput, PromptResponseUncheckedCreateInput>
    /**
     * In case the PromptResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptResponseUpdateInput, PromptResponseUncheckedUpdateInput>
  }

  /**
   * PromptResponse delete
   */
  export type PromptResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * Filter which PromptResponse to delete.
     */
    where: PromptResponseWhereUniqueInput
  }

  /**
   * PromptResponse deleteMany
   */
  export type PromptResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptResponses to delete
     */
    where?: PromptResponseWhereInput
    /**
     * Limit how many PromptResponses to delete.
     */
    limit?: number
  }

  /**
   * PromptResponse.lengthMetrics
   */
  export type PromptResponse$lengthMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LengthMetrics
     */
    select?: LengthMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LengthMetrics
     */
    omit?: LengthMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LengthMetricsInclude<ExtArgs> | null
    where?: LengthMetricsWhereInput
  }

  /**
   * PromptResponse without action
   */
  export type PromptResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
  }


  /**
   * Model LengthMetrics
   */

  export type AggregateLengthMetrics = {
    _count: LengthMetricsCountAggregateOutputType | null
    _avg: LengthMetricsAvgAggregateOutputType | null
    _sum: LengthMetricsSumAggregateOutputType | null
    _min: LengthMetricsMinAggregateOutputType | null
    _max: LengthMetricsMaxAggregateOutputType | null
  }

  export type LengthMetricsAvgAggregateOutputType = {
    response_token_count: number | null
    response_sentence_count: number | null
    response_word_count: number | null
    avg_sentence_length: Decimal | null
    response_to_prompt_ratio: Decimal | null
  }

  export type LengthMetricsSumAggregateOutputType = {
    response_token_count: number | null
    response_sentence_count: number | null
    response_word_count: number | null
    avg_sentence_length: Decimal | null
    response_to_prompt_ratio: Decimal | null
  }

  export type LengthMetricsMinAggregateOutputType = {
    id: string | null
    prompt_response_id: string | null
    response_token_count: number | null
    response_sentence_count: number | null
    response_word_count: number | null
    avg_sentence_length: Decimal | null
    response_to_prompt_ratio: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LengthMetricsMaxAggregateOutputType = {
    id: string | null
    prompt_response_id: string | null
    response_token_count: number | null
    response_sentence_count: number | null
    response_word_count: number | null
    avg_sentence_length: Decimal | null
    response_to_prompt_ratio: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LengthMetricsCountAggregateOutputType = {
    id: number
    prompt_response_id: number
    response_token_count: number
    response_sentence_count: number
    response_word_count: number
    avg_sentence_length: number
    response_to_prompt_ratio: number
    createdAt: number
    updatedAt: number
    extras: number
    _all: number
  }


  export type LengthMetricsAvgAggregateInputType = {
    response_token_count?: true
    response_sentence_count?: true
    response_word_count?: true
    avg_sentence_length?: true
    response_to_prompt_ratio?: true
  }

  export type LengthMetricsSumAggregateInputType = {
    response_token_count?: true
    response_sentence_count?: true
    response_word_count?: true
    avg_sentence_length?: true
    response_to_prompt_ratio?: true
  }

  export type LengthMetricsMinAggregateInputType = {
    id?: true
    prompt_response_id?: true
    response_token_count?: true
    response_sentence_count?: true
    response_word_count?: true
    avg_sentence_length?: true
    response_to_prompt_ratio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LengthMetricsMaxAggregateInputType = {
    id?: true
    prompt_response_id?: true
    response_token_count?: true
    response_sentence_count?: true
    response_word_count?: true
    avg_sentence_length?: true
    response_to_prompt_ratio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LengthMetricsCountAggregateInputType = {
    id?: true
    prompt_response_id?: true
    response_token_count?: true
    response_sentence_count?: true
    response_word_count?: true
    avg_sentence_length?: true
    response_to_prompt_ratio?: true
    createdAt?: true
    updatedAt?: true
    extras?: true
    _all?: true
  }

  export type LengthMetricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LengthMetrics to aggregate.
     */
    where?: LengthMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LengthMetrics to fetch.
     */
    orderBy?: LengthMetricsOrderByWithRelationInput | LengthMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LengthMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LengthMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LengthMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LengthMetrics
    **/
    _count?: true | LengthMetricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LengthMetricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LengthMetricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LengthMetricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LengthMetricsMaxAggregateInputType
  }

  export type GetLengthMetricsAggregateType<T extends LengthMetricsAggregateArgs> = {
        [P in keyof T & keyof AggregateLengthMetrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLengthMetrics[P]>
      : GetScalarType<T[P], AggregateLengthMetrics[P]>
  }




  export type LengthMetricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LengthMetricsWhereInput
    orderBy?: LengthMetricsOrderByWithAggregationInput | LengthMetricsOrderByWithAggregationInput[]
    by: LengthMetricsScalarFieldEnum[] | LengthMetricsScalarFieldEnum
    having?: LengthMetricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LengthMetricsCountAggregateInputType | true
    _avg?: LengthMetricsAvgAggregateInputType
    _sum?: LengthMetricsSumAggregateInputType
    _min?: LengthMetricsMinAggregateInputType
    _max?: LengthMetricsMaxAggregateInputType
  }

  export type LengthMetricsGroupByOutputType = {
    id: string
    prompt_response_id: string
    response_token_count: number
    response_sentence_count: number
    response_word_count: number
    avg_sentence_length: Decimal
    response_to_prompt_ratio: Decimal
    createdAt: Date
    updatedAt: Date
    extras: JsonValue | null
    _count: LengthMetricsCountAggregateOutputType | null
    _avg: LengthMetricsAvgAggregateOutputType | null
    _sum: LengthMetricsSumAggregateOutputType | null
    _min: LengthMetricsMinAggregateOutputType | null
    _max: LengthMetricsMaxAggregateOutputType | null
  }

  type GetLengthMetricsGroupByPayload<T extends LengthMetricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LengthMetricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LengthMetricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LengthMetricsGroupByOutputType[P]>
            : GetScalarType<T[P], LengthMetricsGroupByOutputType[P]>
        }
      >
    >


  export type LengthMetricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt_response_id?: boolean
    response_token_count?: boolean
    response_sentence_count?: boolean
    response_word_count?: boolean
    avg_sentence_length?: boolean
    response_to_prompt_ratio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extras?: boolean
    promptResponse?: boolean | PromptResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lengthMetrics"]>

  export type LengthMetricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt_response_id?: boolean
    response_token_count?: boolean
    response_sentence_count?: boolean
    response_word_count?: boolean
    avg_sentence_length?: boolean
    response_to_prompt_ratio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extras?: boolean
    promptResponse?: boolean | PromptResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lengthMetrics"]>

  export type LengthMetricsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt_response_id?: boolean
    response_token_count?: boolean
    response_sentence_count?: boolean
    response_word_count?: boolean
    avg_sentence_length?: boolean
    response_to_prompt_ratio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extras?: boolean
    promptResponse?: boolean | PromptResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lengthMetrics"]>

  export type LengthMetricsSelectScalar = {
    id?: boolean
    prompt_response_id?: boolean
    response_token_count?: boolean
    response_sentence_count?: boolean
    response_word_count?: boolean
    avg_sentence_length?: boolean
    response_to_prompt_ratio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extras?: boolean
  }

  export type LengthMetricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prompt_response_id" | "response_token_count" | "response_sentence_count" | "response_word_count" | "avg_sentence_length" | "response_to_prompt_ratio" | "createdAt" | "updatedAt" | "extras", ExtArgs["result"]["lengthMetrics"]>
  export type LengthMetricsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promptResponse?: boolean | PromptResponseDefaultArgs<ExtArgs>
  }
  export type LengthMetricsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promptResponse?: boolean | PromptResponseDefaultArgs<ExtArgs>
  }
  export type LengthMetricsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promptResponse?: boolean | PromptResponseDefaultArgs<ExtArgs>
  }

  export type $LengthMetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LengthMetrics"
    objects: {
      promptResponse: Prisma.$PromptResponsePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prompt_response_id: string
      response_token_count: number
      response_sentence_count: number
      response_word_count: number
      avg_sentence_length: Prisma.Decimal
      response_to_prompt_ratio: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
      extras: Prisma.JsonValue | null
    }, ExtArgs["result"]["lengthMetrics"]>
    composites: {}
  }

  type LengthMetricsGetPayload<S extends boolean | null | undefined | LengthMetricsDefaultArgs> = $Result.GetResult<Prisma.$LengthMetricsPayload, S>

  type LengthMetricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LengthMetricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LengthMetricsCountAggregateInputType | true
    }

  export interface LengthMetricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LengthMetrics'], meta: { name: 'LengthMetrics' } }
    /**
     * Find zero or one LengthMetrics that matches the filter.
     * @param {LengthMetricsFindUniqueArgs} args - Arguments to find a LengthMetrics
     * @example
     * // Get one LengthMetrics
     * const lengthMetrics = await prisma.lengthMetrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LengthMetricsFindUniqueArgs>(args: SelectSubset<T, LengthMetricsFindUniqueArgs<ExtArgs>>): Prisma__LengthMetricsClient<$Result.GetResult<Prisma.$LengthMetricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LengthMetrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LengthMetricsFindUniqueOrThrowArgs} args - Arguments to find a LengthMetrics
     * @example
     * // Get one LengthMetrics
     * const lengthMetrics = await prisma.lengthMetrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LengthMetricsFindUniqueOrThrowArgs>(args: SelectSubset<T, LengthMetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LengthMetricsClient<$Result.GetResult<Prisma.$LengthMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LengthMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LengthMetricsFindFirstArgs} args - Arguments to find a LengthMetrics
     * @example
     * // Get one LengthMetrics
     * const lengthMetrics = await prisma.lengthMetrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LengthMetricsFindFirstArgs>(args?: SelectSubset<T, LengthMetricsFindFirstArgs<ExtArgs>>): Prisma__LengthMetricsClient<$Result.GetResult<Prisma.$LengthMetricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LengthMetrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LengthMetricsFindFirstOrThrowArgs} args - Arguments to find a LengthMetrics
     * @example
     * // Get one LengthMetrics
     * const lengthMetrics = await prisma.lengthMetrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LengthMetricsFindFirstOrThrowArgs>(args?: SelectSubset<T, LengthMetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LengthMetricsClient<$Result.GetResult<Prisma.$LengthMetricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LengthMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LengthMetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LengthMetrics
     * const lengthMetrics = await prisma.lengthMetrics.findMany()
     * 
     * // Get first 10 LengthMetrics
     * const lengthMetrics = await prisma.lengthMetrics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lengthMetricsWithIdOnly = await prisma.lengthMetrics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LengthMetricsFindManyArgs>(args?: SelectSubset<T, LengthMetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LengthMetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LengthMetrics.
     * @param {LengthMetricsCreateArgs} args - Arguments to create a LengthMetrics.
     * @example
     * // Create one LengthMetrics
     * const LengthMetrics = await prisma.lengthMetrics.create({
     *   data: {
     *     // ... data to create a LengthMetrics
     *   }
     * })
     * 
     */
    create<T extends LengthMetricsCreateArgs>(args: SelectSubset<T, LengthMetricsCreateArgs<ExtArgs>>): Prisma__LengthMetricsClient<$Result.GetResult<Prisma.$LengthMetricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LengthMetrics.
     * @param {LengthMetricsCreateManyArgs} args - Arguments to create many LengthMetrics.
     * @example
     * // Create many LengthMetrics
     * const lengthMetrics = await prisma.lengthMetrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LengthMetricsCreateManyArgs>(args?: SelectSubset<T, LengthMetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LengthMetrics and returns the data saved in the database.
     * @param {LengthMetricsCreateManyAndReturnArgs} args - Arguments to create many LengthMetrics.
     * @example
     * // Create many LengthMetrics
     * const lengthMetrics = await prisma.lengthMetrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LengthMetrics and only return the `id`
     * const lengthMetricsWithIdOnly = await prisma.lengthMetrics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LengthMetricsCreateManyAndReturnArgs>(args?: SelectSubset<T, LengthMetricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LengthMetricsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LengthMetrics.
     * @param {LengthMetricsDeleteArgs} args - Arguments to delete one LengthMetrics.
     * @example
     * // Delete one LengthMetrics
     * const LengthMetrics = await prisma.lengthMetrics.delete({
     *   where: {
     *     // ... filter to delete one LengthMetrics
     *   }
     * })
     * 
     */
    delete<T extends LengthMetricsDeleteArgs>(args: SelectSubset<T, LengthMetricsDeleteArgs<ExtArgs>>): Prisma__LengthMetricsClient<$Result.GetResult<Prisma.$LengthMetricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LengthMetrics.
     * @param {LengthMetricsUpdateArgs} args - Arguments to update one LengthMetrics.
     * @example
     * // Update one LengthMetrics
     * const lengthMetrics = await prisma.lengthMetrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LengthMetricsUpdateArgs>(args: SelectSubset<T, LengthMetricsUpdateArgs<ExtArgs>>): Prisma__LengthMetricsClient<$Result.GetResult<Prisma.$LengthMetricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LengthMetrics.
     * @param {LengthMetricsDeleteManyArgs} args - Arguments to filter LengthMetrics to delete.
     * @example
     * // Delete a few LengthMetrics
     * const { count } = await prisma.lengthMetrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LengthMetricsDeleteManyArgs>(args?: SelectSubset<T, LengthMetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LengthMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LengthMetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LengthMetrics
     * const lengthMetrics = await prisma.lengthMetrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LengthMetricsUpdateManyArgs>(args: SelectSubset<T, LengthMetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LengthMetrics and returns the data updated in the database.
     * @param {LengthMetricsUpdateManyAndReturnArgs} args - Arguments to update many LengthMetrics.
     * @example
     * // Update many LengthMetrics
     * const lengthMetrics = await prisma.lengthMetrics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LengthMetrics and only return the `id`
     * const lengthMetricsWithIdOnly = await prisma.lengthMetrics.updateManyAndReturn({
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
    updateManyAndReturn<T extends LengthMetricsUpdateManyAndReturnArgs>(args: SelectSubset<T, LengthMetricsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LengthMetricsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LengthMetrics.
     * @param {LengthMetricsUpsertArgs} args - Arguments to update or create a LengthMetrics.
     * @example
     * // Update or create a LengthMetrics
     * const lengthMetrics = await prisma.lengthMetrics.upsert({
     *   create: {
     *     // ... data to create a LengthMetrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LengthMetrics we want to update
     *   }
     * })
     */
    upsert<T extends LengthMetricsUpsertArgs>(args: SelectSubset<T, LengthMetricsUpsertArgs<ExtArgs>>): Prisma__LengthMetricsClient<$Result.GetResult<Prisma.$LengthMetricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LengthMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LengthMetricsCountArgs} args - Arguments to filter LengthMetrics to count.
     * @example
     * // Count the number of LengthMetrics
     * const count = await prisma.lengthMetrics.count({
     *   where: {
     *     // ... the filter for the LengthMetrics we want to count
     *   }
     * })
    **/
    count<T extends LengthMetricsCountArgs>(
      args?: Subset<T, LengthMetricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LengthMetricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LengthMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LengthMetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LengthMetricsAggregateArgs>(args: Subset<T, LengthMetricsAggregateArgs>): Prisma.PrismaPromise<GetLengthMetricsAggregateType<T>>

    /**
     * Group by LengthMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LengthMetricsGroupByArgs} args - Group by arguments.
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
      T extends LengthMetricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LengthMetricsGroupByArgs['orderBy'] }
        : { orderBy?: LengthMetricsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LengthMetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLengthMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LengthMetrics model
   */
  readonly fields: LengthMetricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LengthMetrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LengthMetricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    promptResponse<T extends PromptResponseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromptResponseDefaultArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LengthMetrics model
   */
  interface LengthMetricsFieldRefs {
    readonly id: FieldRef<"LengthMetrics", 'String'>
    readonly prompt_response_id: FieldRef<"LengthMetrics", 'String'>
    readonly response_token_count: FieldRef<"LengthMetrics", 'Int'>
    readonly response_sentence_count: FieldRef<"LengthMetrics", 'Int'>
    readonly response_word_count: FieldRef<"LengthMetrics", 'Int'>
    readonly avg_sentence_length: FieldRef<"LengthMetrics", 'Decimal'>
    readonly response_to_prompt_ratio: FieldRef<"LengthMetrics", 'Decimal'>
    readonly createdAt: FieldRef<"LengthMetrics", 'DateTime'>
    readonly updatedAt: FieldRef<"LengthMetrics", 'DateTime'>
    readonly extras: FieldRef<"LengthMetrics", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * LengthMetrics findUnique
   */
  export type LengthMetricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LengthMetrics
     */
    select?: LengthMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LengthMetrics
     */
    omit?: LengthMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LengthMetricsInclude<ExtArgs> | null
    /**
     * Filter, which LengthMetrics to fetch.
     */
    where: LengthMetricsWhereUniqueInput
  }

  /**
   * LengthMetrics findUniqueOrThrow
   */
  export type LengthMetricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LengthMetrics
     */
    select?: LengthMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LengthMetrics
     */
    omit?: LengthMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LengthMetricsInclude<ExtArgs> | null
    /**
     * Filter, which LengthMetrics to fetch.
     */
    where: LengthMetricsWhereUniqueInput
  }

  /**
   * LengthMetrics findFirst
   */
  export type LengthMetricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LengthMetrics
     */
    select?: LengthMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LengthMetrics
     */
    omit?: LengthMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LengthMetricsInclude<ExtArgs> | null
    /**
     * Filter, which LengthMetrics to fetch.
     */
    where?: LengthMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LengthMetrics to fetch.
     */
    orderBy?: LengthMetricsOrderByWithRelationInput | LengthMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LengthMetrics.
     */
    cursor?: LengthMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LengthMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LengthMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LengthMetrics.
     */
    distinct?: LengthMetricsScalarFieldEnum | LengthMetricsScalarFieldEnum[]
  }

  /**
   * LengthMetrics findFirstOrThrow
   */
  export type LengthMetricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LengthMetrics
     */
    select?: LengthMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LengthMetrics
     */
    omit?: LengthMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LengthMetricsInclude<ExtArgs> | null
    /**
     * Filter, which LengthMetrics to fetch.
     */
    where?: LengthMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LengthMetrics to fetch.
     */
    orderBy?: LengthMetricsOrderByWithRelationInput | LengthMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LengthMetrics.
     */
    cursor?: LengthMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LengthMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LengthMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LengthMetrics.
     */
    distinct?: LengthMetricsScalarFieldEnum | LengthMetricsScalarFieldEnum[]
  }

  /**
   * LengthMetrics findMany
   */
  export type LengthMetricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LengthMetrics
     */
    select?: LengthMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LengthMetrics
     */
    omit?: LengthMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LengthMetricsInclude<ExtArgs> | null
    /**
     * Filter, which LengthMetrics to fetch.
     */
    where?: LengthMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LengthMetrics to fetch.
     */
    orderBy?: LengthMetricsOrderByWithRelationInput | LengthMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LengthMetrics.
     */
    cursor?: LengthMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LengthMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LengthMetrics.
     */
    skip?: number
    distinct?: LengthMetricsScalarFieldEnum | LengthMetricsScalarFieldEnum[]
  }

  /**
   * LengthMetrics create
   */
  export type LengthMetricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LengthMetrics
     */
    select?: LengthMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LengthMetrics
     */
    omit?: LengthMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LengthMetricsInclude<ExtArgs> | null
    /**
     * The data needed to create a LengthMetrics.
     */
    data: XOR<LengthMetricsCreateInput, LengthMetricsUncheckedCreateInput>
  }

  /**
   * LengthMetrics createMany
   */
  export type LengthMetricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LengthMetrics.
     */
    data: LengthMetricsCreateManyInput | LengthMetricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LengthMetrics createManyAndReturn
   */
  export type LengthMetricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LengthMetrics
     */
    select?: LengthMetricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LengthMetrics
     */
    omit?: LengthMetricsOmit<ExtArgs> | null
    /**
     * The data used to create many LengthMetrics.
     */
    data: LengthMetricsCreateManyInput | LengthMetricsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LengthMetricsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LengthMetrics update
   */
  export type LengthMetricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LengthMetrics
     */
    select?: LengthMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LengthMetrics
     */
    omit?: LengthMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LengthMetricsInclude<ExtArgs> | null
    /**
     * The data needed to update a LengthMetrics.
     */
    data: XOR<LengthMetricsUpdateInput, LengthMetricsUncheckedUpdateInput>
    /**
     * Choose, which LengthMetrics to update.
     */
    where: LengthMetricsWhereUniqueInput
  }

  /**
   * LengthMetrics updateMany
   */
  export type LengthMetricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LengthMetrics.
     */
    data: XOR<LengthMetricsUpdateManyMutationInput, LengthMetricsUncheckedUpdateManyInput>
    /**
     * Filter which LengthMetrics to update
     */
    where?: LengthMetricsWhereInput
    /**
     * Limit how many LengthMetrics to update.
     */
    limit?: number
  }

  /**
   * LengthMetrics updateManyAndReturn
   */
  export type LengthMetricsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LengthMetrics
     */
    select?: LengthMetricsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LengthMetrics
     */
    omit?: LengthMetricsOmit<ExtArgs> | null
    /**
     * The data used to update LengthMetrics.
     */
    data: XOR<LengthMetricsUpdateManyMutationInput, LengthMetricsUncheckedUpdateManyInput>
    /**
     * Filter which LengthMetrics to update
     */
    where?: LengthMetricsWhereInput
    /**
     * Limit how many LengthMetrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LengthMetricsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LengthMetrics upsert
   */
  export type LengthMetricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LengthMetrics
     */
    select?: LengthMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LengthMetrics
     */
    omit?: LengthMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LengthMetricsInclude<ExtArgs> | null
    /**
     * The filter to search for the LengthMetrics to update in case it exists.
     */
    where: LengthMetricsWhereUniqueInput
    /**
     * In case the LengthMetrics found by the `where` argument doesn't exist, create a new LengthMetrics with this data.
     */
    create: XOR<LengthMetricsCreateInput, LengthMetricsUncheckedCreateInput>
    /**
     * In case the LengthMetrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LengthMetricsUpdateInput, LengthMetricsUncheckedUpdateInput>
  }

  /**
   * LengthMetrics delete
   */
  export type LengthMetricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LengthMetrics
     */
    select?: LengthMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LengthMetrics
     */
    omit?: LengthMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LengthMetricsInclude<ExtArgs> | null
    /**
     * Filter which LengthMetrics to delete.
     */
    where: LengthMetricsWhereUniqueInput
  }

  /**
   * LengthMetrics deleteMany
   */
  export type LengthMetricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LengthMetrics to delete
     */
    where?: LengthMetricsWhereInput
    /**
     * Limit how many LengthMetrics to delete.
     */
    limit?: number
  }

  /**
   * LengthMetrics without action
   */
  export type LengthMetricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LengthMetrics
     */
    select?: LengthMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LengthMetrics
     */
    omit?: LengthMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LengthMetricsInclude<ExtArgs> | null
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


  export const LLMModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    rpm: 'rpm',
    rpd: 'rpd',
    tpm: 'tpm',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LLMModelScalarFieldEnum = (typeof LLMModelScalarFieldEnum)[keyof typeof LLMModelScalarFieldEnum]


  export const SamplingProfileScalarFieldEnum: {
    id: 'id',
    profile_name: 'profile_name',
    temperature: 'temperature',
    top_k: 'top_k',
    top_p: 'top_p',
    presence_penalty: 'presence_penalty',
    frequency_penalty: 'frequency_penalty',
    max_tokens: 'max_tokens',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SamplingProfileScalarFieldEnum = (typeof SamplingProfileScalarFieldEnum)[keyof typeof SamplingProfileScalarFieldEnum]


  export const PromptScalarFieldEnum: {
    id: 'id',
    prompt: 'prompt',
    tokens: 'tokens',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromptScalarFieldEnum = (typeof PromptScalarFieldEnum)[keyof typeof PromptScalarFieldEnum]


  export const ModelToPromptScalarFieldEnum: {
    model_id: 'model_id',
    prompt_id: 'prompt_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModelToPromptScalarFieldEnum = (typeof ModelToPromptScalarFieldEnum)[keyof typeof ModelToPromptScalarFieldEnum]


  export const ProfileToPromptScalarFieldEnum: {
    profile_id: 'profile_id',
    prompt_id: 'prompt_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileToPromptScalarFieldEnum = (typeof ProfileToPromptScalarFieldEnum)[keyof typeof ProfileToPromptScalarFieldEnum]


  export const PromptResponseScalarFieldEnum: {
    id: 'id',
    prompt_id: 'prompt_id',
    model_id: 'model_id',
    profile_id: 'profile_id',
    response: 'response',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromptResponseScalarFieldEnum = (typeof PromptResponseScalarFieldEnum)[keyof typeof PromptResponseScalarFieldEnum]


  export const LengthMetricsScalarFieldEnum: {
    id: 'id',
    prompt_response_id: 'prompt_response_id',
    response_token_count: 'response_token_count',
    response_sentence_count: 'response_sentence_count',
    response_word_count: 'response_word_count',
    avg_sentence_length: 'avg_sentence_length',
    response_to_prompt_ratio: 'response_to_prompt_ratio',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    extras: 'extras'
  };

  export type LengthMetricsScalarFieldEnum = (typeof LengthMetricsScalarFieldEnum)[keyof typeof LengthMetricsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type LLMModelWhereInput = {
    AND?: LLMModelWhereInput | LLMModelWhereInput[]
    OR?: LLMModelWhereInput[]
    NOT?: LLMModelWhereInput | LLMModelWhereInput[]
    id?: UuidFilter<"LLMModel"> | string
    name?: StringFilter<"LLMModel"> | string
    rpm?: IntFilter<"LLMModel"> | number
    rpd?: IntFilter<"LLMModel"> | number
    tpm?: IntFilter<"LLMModel"> | number
    createdAt?: DateTimeFilter<"LLMModel"> | Date | string
    updatedAt?: DateTimeFilter<"LLMModel"> | Date | string
    prompts?: ModelToPromptListRelationFilter
    responses?: PromptResponseListRelationFilter
  }

  export type LLMModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rpm?: SortOrder
    rpd?: SortOrder
    tpm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prompts?: ModelToPromptOrderByRelationAggregateInput
    responses?: PromptResponseOrderByRelationAggregateInput
  }

  export type LLMModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: LLMModelWhereInput | LLMModelWhereInput[]
    OR?: LLMModelWhereInput[]
    NOT?: LLMModelWhereInput | LLMModelWhereInput[]
    rpm?: IntFilter<"LLMModel"> | number
    rpd?: IntFilter<"LLMModel"> | number
    tpm?: IntFilter<"LLMModel"> | number
    createdAt?: DateTimeFilter<"LLMModel"> | Date | string
    updatedAt?: DateTimeFilter<"LLMModel"> | Date | string
    prompts?: ModelToPromptListRelationFilter
    responses?: PromptResponseListRelationFilter
  }, "id" | "name">

  export type LLMModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    rpm?: SortOrder
    rpd?: SortOrder
    tpm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LLMModelCountOrderByAggregateInput
    _avg?: LLMModelAvgOrderByAggregateInput
    _max?: LLMModelMaxOrderByAggregateInput
    _min?: LLMModelMinOrderByAggregateInput
    _sum?: LLMModelSumOrderByAggregateInput
  }

  export type LLMModelScalarWhereWithAggregatesInput = {
    AND?: LLMModelScalarWhereWithAggregatesInput | LLMModelScalarWhereWithAggregatesInput[]
    OR?: LLMModelScalarWhereWithAggregatesInput[]
    NOT?: LLMModelScalarWhereWithAggregatesInput | LLMModelScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"LLMModel"> | string
    name?: StringWithAggregatesFilter<"LLMModel"> | string
    rpm?: IntWithAggregatesFilter<"LLMModel"> | number
    rpd?: IntWithAggregatesFilter<"LLMModel"> | number
    tpm?: IntWithAggregatesFilter<"LLMModel"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LLMModel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LLMModel"> | Date | string
  }

  export type SamplingProfileWhereInput = {
    AND?: SamplingProfileWhereInput | SamplingProfileWhereInput[]
    OR?: SamplingProfileWhereInput[]
    NOT?: SamplingProfileWhereInput | SamplingProfileWhereInput[]
    id?: UuidFilter<"SamplingProfile"> | string
    profile_name?: StringFilter<"SamplingProfile"> | string
    temperature?: FloatFilter<"SamplingProfile"> | number
    top_k?: FloatFilter<"SamplingProfile"> | number
    top_p?: FloatFilter<"SamplingProfile"> | number
    presence_penalty?: FloatNullableFilter<"SamplingProfile"> | number | null
    frequency_penalty?: FloatNullableFilter<"SamplingProfile"> | number | null
    max_tokens?: IntNullableFilter<"SamplingProfile"> | number | null
    createdAt?: DateTimeFilter<"SamplingProfile"> | Date | string
    updatedAt?: DateTimeFilter<"SamplingProfile"> | Date | string
    prompts?: ProfileToPromptListRelationFilter
    responses?: PromptResponseListRelationFilter
  }

  export type SamplingProfileOrderByWithRelationInput = {
    id?: SortOrder
    profile_name?: SortOrder
    temperature?: SortOrder
    top_k?: SortOrder
    top_p?: SortOrder
    presence_penalty?: SortOrderInput | SortOrder
    frequency_penalty?: SortOrderInput | SortOrder
    max_tokens?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prompts?: ProfileToPromptOrderByRelationAggregateInput
    responses?: PromptResponseOrderByRelationAggregateInput
  }

  export type SamplingProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SamplingProfileWhereInput | SamplingProfileWhereInput[]
    OR?: SamplingProfileWhereInput[]
    NOT?: SamplingProfileWhereInput | SamplingProfileWhereInput[]
    profile_name?: StringFilter<"SamplingProfile"> | string
    temperature?: FloatFilter<"SamplingProfile"> | number
    top_k?: FloatFilter<"SamplingProfile"> | number
    top_p?: FloatFilter<"SamplingProfile"> | number
    presence_penalty?: FloatNullableFilter<"SamplingProfile"> | number | null
    frequency_penalty?: FloatNullableFilter<"SamplingProfile"> | number | null
    max_tokens?: IntNullableFilter<"SamplingProfile"> | number | null
    createdAt?: DateTimeFilter<"SamplingProfile"> | Date | string
    updatedAt?: DateTimeFilter<"SamplingProfile"> | Date | string
    prompts?: ProfileToPromptListRelationFilter
    responses?: PromptResponseListRelationFilter
  }, "id">

  export type SamplingProfileOrderByWithAggregationInput = {
    id?: SortOrder
    profile_name?: SortOrder
    temperature?: SortOrder
    top_k?: SortOrder
    top_p?: SortOrder
    presence_penalty?: SortOrderInput | SortOrder
    frequency_penalty?: SortOrderInput | SortOrder
    max_tokens?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SamplingProfileCountOrderByAggregateInput
    _avg?: SamplingProfileAvgOrderByAggregateInput
    _max?: SamplingProfileMaxOrderByAggregateInput
    _min?: SamplingProfileMinOrderByAggregateInput
    _sum?: SamplingProfileSumOrderByAggregateInput
  }

  export type SamplingProfileScalarWhereWithAggregatesInput = {
    AND?: SamplingProfileScalarWhereWithAggregatesInput | SamplingProfileScalarWhereWithAggregatesInput[]
    OR?: SamplingProfileScalarWhereWithAggregatesInput[]
    NOT?: SamplingProfileScalarWhereWithAggregatesInput | SamplingProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SamplingProfile"> | string
    profile_name?: StringWithAggregatesFilter<"SamplingProfile"> | string
    temperature?: FloatWithAggregatesFilter<"SamplingProfile"> | number
    top_k?: FloatWithAggregatesFilter<"SamplingProfile"> | number
    top_p?: FloatWithAggregatesFilter<"SamplingProfile"> | number
    presence_penalty?: FloatNullableWithAggregatesFilter<"SamplingProfile"> | number | null
    frequency_penalty?: FloatNullableWithAggregatesFilter<"SamplingProfile"> | number | null
    max_tokens?: IntNullableWithAggregatesFilter<"SamplingProfile"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"SamplingProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SamplingProfile"> | Date | string
  }

  export type PromptWhereInput = {
    AND?: PromptWhereInput | PromptWhereInput[]
    OR?: PromptWhereInput[]
    NOT?: PromptWhereInput | PromptWhereInput[]
    id?: UuidFilter<"Prompt"> | string
    prompt?: StringFilter<"Prompt"> | string
    tokens?: IntFilter<"Prompt"> | number
    createdAt?: DateTimeFilter<"Prompt"> | Date | string
    updatedAt?: DateTimeFilter<"Prompt"> | Date | string
    profiles?: ProfileToPromptListRelationFilter
    models?: ModelToPromptListRelationFilter
    responses?: PromptResponseListRelationFilter
  }

  export type PromptOrderByWithRelationInput = {
    id?: SortOrder
    prompt?: SortOrder
    tokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profiles?: ProfileToPromptOrderByRelationAggregateInput
    models?: ModelToPromptOrderByRelationAggregateInput
    responses?: PromptResponseOrderByRelationAggregateInput
  }

  export type PromptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromptWhereInput | PromptWhereInput[]
    OR?: PromptWhereInput[]
    NOT?: PromptWhereInput | PromptWhereInput[]
    prompt?: StringFilter<"Prompt"> | string
    tokens?: IntFilter<"Prompt"> | number
    createdAt?: DateTimeFilter<"Prompt"> | Date | string
    updatedAt?: DateTimeFilter<"Prompt"> | Date | string
    profiles?: ProfileToPromptListRelationFilter
    models?: ModelToPromptListRelationFilter
    responses?: PromptResponseListRelationFilter
  }, "id">

  export type PromptOrderByWithAggregationInput = {
    id?: SortOrder
    prompt?: SortOrder
    tokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromptCountOrderByAggregateInput
    _avg?: PromptAvgOrderByAggregateInput
    _max?: PromptMaxOrderByAggregateInput
    _min?: PromptMinOrderByAggregateInput
    _sum?: PromptSumOrderByAggregateInput
  }

  export type PromptScalarWhereWithAggregatesInput = {
    AND?: PromptScalarWhereWithAggregatesInput | PromptScalarWhereWithAggregatesInput[]
    OR?: PromptScalarWhereWithAggregatesInput[]
    NOT?: PromptScalarWhereWithAggregatesInput | PromptScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Prompt"> | string
    prompt?: StringWithAggregatesFilter<"Prompt"> | string
    tokens?: IntWithAggregatesFilter<"Prompt"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Prompt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Prompt"> | Date | string
  }

  export type ModelToPromptWhereInput = {
    AND?: ModelToPromptWhereInput | ModelToPromptWhereInput[]
    OR?: ModelToPromptWhereInput[]
    NOT?: ModelToPromptWhereInput | ModelToPromptWhereInput[]
    model_id?: UuidFilter<"ModelToPrompt"> | string
    prompt_id?: UuidFilter<"ModelToPrompt"> | string
    createdAt?: DateTimeFilter<"ModelToPrompt"> | Date | string
    updatedAt?: DateTimeFilter<"ModelToPrompt"> | Date | string
    model?: XOR<LLMModelScalarRelationFilter, LLMModelWhereInput>
    prompt?: XOR<PromptScalarRelationFilter, PromptWhereInput>
  }

  export type ModelToPromptOrderByWithRelationInput = {
    model_id?: SortOrder
    prompt_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    model?: LLMModelOrderByWithRelationInput
    prompt?: PromptOrderByWithRelationInput
  }

  export type ModelToPromptWhereUniqueInput = Prisma.AtLeast<{
    model_id_prompt_id?: ModelToPromptModel_idPrompt_idCompoundUniqueInput
    AND?: ModelToPromptWhereInput | ModelToPromptWhereInput[]
    OR?: ModelToPromptWhereInput[]
    NOT?: ModelToPromptWhereInput | ModelToPromptWhereInput[]
    model_id?: UuidFilter<"ModelToPrompt"> | string
    prompt_id?: UuidFilter<"ModelToPrompt"> | string
    createdAt?: DateTimeFilter<"ModelToPrompt"> | Date | string
    updatedAt?: DateTimeFilter<"ModelToPrompt"> | Date | string
    model?: XOR<LLMModelScalarRelationFilter, LLMModelWhereInput>
    prompt?: XOR<PromptScalarRelationFilter, PromptWhereInput>
  }, "model_id_prompt_id">

  export type ModelToPromptOrderByWithAggregationInput = {
    model_id?: SortOrder
    prompt_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModelToPromptCountOrderByAggregateInput
    _max?: ModelToPromptMaxOrderByAggregateInput
    _min?: ModelToPromptMinOrderByAggregateInput
  }

  export type ModelToPromptScalarWhereWithAggregatesInput = {
    AND?: ModelToPromptScalarWhereWithAggregatesInput | ModelToPromptScalarWhereWithAggregatesInput[]
    OR?: ModelToPromptScalarWhereWithAggregatesInput[]
    NOT?: ModelToPromptScalarWhereWithAggregatesInput | ModelToPromptScalarWhereWithAggregatesInput[]
    model_id?: UuidWithAggregatesFilter<"ModelToPrompt"> | string
    prompt_id?: UuidWithAggregatesFilter<"ModelToPrompt"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ModelToPrompt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ModelToPrompt"> | Date | string
  }

  export type ProfileToPromptWhereInput = {
    AND?: ProfileToPromptWhereInput | ProfileToPromptWhereInput[]
    OR?: ProfileToPromptWhereInput[]
    NOT?: ProfileToPromptWhereInput | ProfileToPromptWhereInput[]
    profile_id?: UuidFilter<"ProfileToPrompt"> | string
    prompt_id?: UuidFilter<"ProfileToPrompt"> | string
    createdAt?: DateTimeFilter<"ProfileToPrompt"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileToPrompt"> | Date | string
    profile?: XOR<SamplingProfileScalarRelationFilter, SamplingProfileWhereInput>
    prompt?: XOR<PromptScalarRelationFilter, PromptWhereInput>
  }

  export type ProfileToPromptOrderByWithRelationInput = {
    profile_id?: SortOrder
    prompt_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: SamplingProfileOrderByWithRelationInput
    prompt?: PromptOrderByWithRelationInput
  }

  export type ProfileToPromptWhereUniqueInput = Prisma.AtLeast<{
    profile_id_prompt_id?: ProfileToPromptProfile_idPrompt_idCompoundUniqueInput
    AND?: ProfileToPromptWhereInput | ProfileToPromptWhereInput[]
    OR?: ProfileToPromptWhereInput[]
    NOT?: ProfileToPromptWhereInput | ProfileToPromptWhereInput[]
    profile_id?: UuidFilter<"ProfileToPrompt"> | string
    prompt_id?: UuidFilter<"ProfileToPrompt"> | string
    createdAt?: DateTimeFilter<"ProfileToPrompt"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileToPrompt"> | Date | string
    profile?: XOR<SamplingProfileScalarRelationFilter, SamplingProfileWhereInput>
    prompt?: XOR<PromptScalarRelationFilter, PromptWhereInput>
  }, "profile_id_prompt_id">

  export type ProfileToPromptOrderByWithAggregationInput = {
    profile_id?: SortOrder
    prompt_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileToPromptCountOrderByAggregateInput
    _max?: ProfileToPromptMaxOrderByAggregateInput
    _min?: ProfileToPromptMinOrderByAggregateInput
  }

  export type ProfileToPromptScalarWhereWithAggregatesInput = {
    AND?: ProfileToPromptScalarWhereWithAggregatesInput | ProfileToPromptScalarWhereWithAggregatesInput[]
    OR?: ProfileToPromptScalarWhereWithAggregatesInput[]
    NOT?: ProfileToPromptScalarWhereWithAggregatesInput | ProfileToPromptScalarWhereWithAggregatesInput[]
    profile_id?: UuidWithAggregatesFilter<"ProfileToPrompt"> | string
    prompt_id?: UuidWithAggregatesFilter<"ProfileToPrompt"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProfileToPrompt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProfileToPrompt"> | Date | string
  }

  export type PromptResponseWhereInput = {
    AND?: PromptResponseWhereInput | PromptResponseWhereInput[]
    OR?: PromptResponseWhereInput[]
    NOT?: PromptResponseWhereInput | PromptResponseWhereInput[]
    id?: UuidFilter<"PromptResponse"> | string
    prompt_id?: UuidFilter<"PromptResponse"> | string
    model_id?: UuidFilter<"PromptResponse"> | string
    profile_id?: UuidFilter<"PromptResponse"> | string
    response?: StringNullableFilter<"PromptResponse"> | string | null
    createdAt?: DateTimeFilter<"PromptResponse"> | Date | string
    updatedAt?: DateTimeFilter<"PromptResponse"> | Date | string
    prompt?: XOR<PromptScalarRelationFilter, PromptWhereInput>
    model?: XOR<LLMModelScalarRelationFilter, LLMModelWhereInput>
    profile?: XOR<SamplingProfileScalarRelationFilter, SamplingProfileWhereInput>
    lengthMetrics?: XOR<LengthMetricsNullableScalarRelationFilter, LengthMetricsWhereInput> | null
  }

  export type PromptResponseOrderByWithRelationInput = {
    id?: SortOrder
    prompt_id?: SortOrder
    model_id?: SortOrder
    profile_id?: SortOrder
    response?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prompt?: PromptOrderByWithRelationInput
    model?: LLMModelOrderByWithRelationInput
    profile?: SamplingProfileOrderByWithRelationInput
    lengthMetrics?: LengthMetricsOrderByWithRelationInput
  }

  export type PromptResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromptResponseWhereInput | PromptResponseWhereInput[]
    OR?: PromptResponseWhereInput[]
    NOT?: PromptResponseWhereInput | PromptResponseWhereInput[]
    prompt_id?: UuidFilter<"PromptResponse"> | string
    model_id?: UuidFilter<"PromptResponse"> | string
    profile_id?: UuidFilter<"PromptResponse"> | string
    response?: StringNullableFilter<"PromptResponse"> | string | null
    createdAt?: DateTimeFilter<"PromptResponse"> | Date | string
    updatedAt?: DateTimeFilter<"PromptResponse"> | Date | string
    prompt?: XOR<PromptScalarRelationFilter, PromptWhereInput>
    model?: XOR<LLMModelScalarRelationFilter, LLMModelWhereInput>
    profile?: XOR<SamplingProfileScalarRelationFilter, SamplingProfileWhereInput>
    lengthMetrics?: XOR<LengthMetricsNullableScalarRelationFilter, LengthMetricsWhereInput> | null
  }, "id">

  export type PromptResponseOrderByWithAggregationInput = {
    id?: SortOrder
    prompt_id?: SortOrder
    model_id?: SortOrder
    profile_id?: SortOrder
    response?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromptResponseCountOrderByAggregateInput
    _max?: PromptResponseMaxOrderByAggregateInput
    _min?: PromptResponseMinOrderByAggregateInput
  }

  export type PromptResponseScalarWhereWithAggregatesInput = {
    AND?: PromptResponseScalarWhereWithAggregatesInput | PromptResponseScalarWhereWithAggregatesInput[]
    OR?: PromptResponseScalarWhereWithAggregatesInput[]
    NOT?: PromptResponseScalarWhereWithAggregatesInput | PromptResponseScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PromptResponse"> | string
    prompt_id?: UuidWithAggregatesFilter<"PromptResponse"> | string
    model_id?: UuidWithAggregatesFilter<"PromptResponse"> | string
    profile_id?: UuidWithAggregatesFilter<"PromptResponse"> | string
    response?: StringNullableWithAggregatesFilter<"PromptResponse"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PromptResponse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PromptResponse"> | Date | string
  }

  export type LengthMetricsWhereInput = {
    AND?: LengthMetricsWhereInput | LengthMetricsWhereInput[]
    OR?: LengthMetricsWhereInput[]
    NOT?: LengthMetricsWhereInput | LengthMetricsWhereInput[]
    id?: UuidFilter<"LengthMetrics"> | string
    prompt_response_id?: UuidFilter<"LengthMetrics"> | string
    response_token_count?: IntFilter<"LengthMetrics"> | number
    response_sentence_count?: IntFilter<"LengthMetrics"> | number
    response_word_count?: IntFilter<"LengthMetrics"> | number
    avg_sentence_length?: DecimalFilter<"LengthMetrics"> | Decimal | DecimalJsLike | number | string
    response_to_prompt_ratio?: DecimalFilter<"LengthMetrics"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"LengthMetrics"> | Date | string
    updatedAt?: DateTimeFilter<"LengthMetrics"> | Date | string
    extras?: JsonNullableFilter<"LengthMetrics">
    promptResponse?: XOR<PromptResponseScalarRelationFilter, PromptResponseWhereInput>
  }

  export type LengthMetricsOrderByWithRelationInput = {
    id?: SortOrder
    prompt_response_id?: SortOrder
    response_token_count?: SortOrder
    response_sentence_count?: SortOrder
    response_word_count?: SortOrder
    avg_sentence_length?: SortOrder
    response_to_prompt_ratio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extras?: SortOrderInput | SortOrder
    promptResponse?: PromptResponseOrderByWithRelationInput
  }

  export type LengthMetricsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    prompt_response_id?: string
    AND?: LengthMetricsWhereInput | LengthMetricsWhereInput[]
    OR?: LengthMetricsWhereInput[]
    NOT?: LengthMetricsWhereInput | LengthMetricsWhereInput[]
    response_token_count?: IntFilter<"LengthMetrics"> | number
    response_sentence_count?: IntFilter<"LengthMetrics"> | number
    response_word_count?: IntFilter<"LengthMetrics"> | number
    avg_sentence_length?: DecimalFilter<"LengthMetrics"> | Decimal | DecimalJsLike | number | string
    response_to_prompt_ratio?: DecimalFilter<"LengthMetrics"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"LengthMetrics"> | Date | string
    updatedAt?: DateTimeFilter<"LengthMetrics"> | Date | string
    extras?: JsonNullableFilter<"LengthMetrics">
    promptResponse?: XOR<PromptResponseScalarRelationFilter, PromptResponseWhereInput>
  }, "id" | "prompt_response_id">

  export type LengthMetricsOrderByWithAggregationInput = {
    id?: SortOrder
    prompt_response_id?: SortOrder
    response_token_count?: SortOrder
    response_sentence_count?: SortOrder
    response_word_count?: SortOrder
    avg_sentence_length?: SortOrder
    response_to_prompt_ratio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extras?: SortOrderInput | SortOrder
    _count?: LengthMetricsCountOrderByAggregateInput
    _avg?: LengthMetricsAvgOrderByAggregateInput
    _max?: LengthMetricsMaxOrderByAggregateInput
    _min?: LengthMetricsMinOrderByAggregateInput
    _sum?: LengthMetricsSumOrderByAggregateInput
  }

  export type LengthMetricsScalarWhereWithAggregatesInput = {
    AND?: LengthMetricsScalarWhereWithAggregatesInput | LengthMetricsScalarWhereWithAggregatesInput[]
    OR?: LengthMetricsScalarWhereWithAggregatesInput[]
    NOT?: LengthMetricsScalarWhereWithAggregatesInput | LengthMetricsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"LengthMetrics"> | string
    prompt_response_id?: UuidWithAggregatesFilter<"LengthMetrics"> | string
    response_token_count?: IntWithAggregatesFilter<"LengthMetrics"> | number
    response_sentence_count?: IntWithAggregatesFilter<"LengthMetrics"> | number
    response_word_count?: IntWithAggregatesFilter<"LengthMetrics"> | number
    avg_sentence_length?: DecimalWithAggregatesFilter<"LengthMetrics"> | Decimal | DecimalJsLike | number | string
    response_to_prompt_ratio?: DecimalWithAggregatesFilter<"LengthMetrics"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"LengthMetrics"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LengthMetrics"> | Date | string
    extras?: JsonNullableWithAggregatesFilter<"LengthMetrics">
  }

  export type LLMModelCreateInput = {
    id?: string
    name: string
    rpm: number
    rpd: number
    tpm: number
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: ModelToPromptCreateNestedManyWithoutModelInput
    responses?: PromptResponseCreateNestedManyWithoutModelInput
  }

  export type LLMModelUncheckedCreateInput = {
    id?: string
    name: string
    rpm: number
    rpd: number
    tpm: number
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: ModelToPromptUncheckedCreateNestedManyWithoutModelInput
    responses?: PromptResponseUncheckedCreateNestedManyWithoutModelInput
  }

  export type LLMModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rpm?: IntFieldUpdateOperationsInput | number
    rpd?: IntFieldUpdateOperationsInput | number
    tpm?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: ModelToPromptUpdateManyWithoutModelNestedInput
    responses?: PromptResponseUpdateManyWithoutModelNestedInput
  }

  export type LLMModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rpm?: IntFieldUpdateOperationsInput | number
    rpd?: IntFieldUpdateOperationsInput | number
    tpm?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: ModelToPromptUncheckedUpdateManyWithoutModelNestedInput
    responses?: PromptResponseUncheckedUpdateManyWithoutModelNestedInput
  }

  export type LLMModelCreateManyInput = {
    id?: string
    name: string
    rpm: number
    rpd: number
    tpm: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LLMModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rpm?: IntFieldUpdateOperationsInput | number
    rpd?: IntFieldUpdateOperationsInput | number
    tpm?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LLMModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rpm?: IntFieldUpdateOperationsInput | number
    rpd?: IntFieldUpdateOperationsInput | number
    tpm?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SamplingProfileCreateInput = {
    id?: string
    profile_name: string
    temperature?: number
    top_k?: number
    top_p?: number
    presence_penalty?: number | null
    frequency_penalty?: number | null
    max_tokens?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: ProfileToPromptCreateNestedManyWithoutProfileInput
    responses?: PromptResponseCreateNestedManyWithoutProfileInput
  }

  export type SamplingProfileUncheckedCreateInput = {
    id?: string
    profile_name: string
    temperature?: number
    top_k?: number
    top_p?: number
    presence_penalty?: number | null
    frequency_penalty?: number | null
    max_tokens?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: ProfileToPromptUncheckedCreateNestedManyWithoutProfileInput
    responses?: PromptResponseUncheckedCreateNestedManyWithoutProfileInput
  }

  export type SamplingProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_name?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    top_k?: FloatFieldUpdateOperationsInput | number
    top_p?: FloatFieldUpdateOperationsInput | number
    presence_penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    frequency_penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    max_tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: ProfileToPromptUpdateManyWithoutProfileNestedInput
    responses?: PromptResponseUpdateManyWithoutProfileNestedInput
  }

  export type SamplingProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_name?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    top_k?: FloatFieldUpdateOperationsInput | number
    top_p?: FloatFieldUpdateOperationsInput | number
    presence_penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    frequency_penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    max_tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: ProfileToPromptUncheckedUpdateManyWithoutProfileNestedInput
    responses?: PromptResponseUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type SamplingProfileCreateManyInput = {
    id?: string
    profile_name: string
    temperature?: number
    top_k?: number
    top_p?: number
    presence_penalty?: number | null
    frequency_penalty?: number | null
    max_tokens?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SamplingProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_name?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    top_k?: FloatFieldUpdateOperationsInput | number
    top_p?: FloatFieldUpdateOperationsInput | number
    presence_penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    frequency_penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    max_tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SamplingProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_name?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    top_k?: FloatFieldUpdateOperationsInput | number
    top_p?: FloatFieldUpdateOperationsInput | number
    presence_penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    frequency_penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    max_tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptCreateInput = {
    id?: string
    prompt: string
    tokens?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profiles?: ProfileToPromptCreateNestedManyWithoutPromptInput
    models?: ModelToPromptCreateNestedManyWithoutPromptInput
    responses?: PromptResponseCreateNestedManyWithoutPromptInput
  }

  export type PromptUncheckedCreateInput = {
    id?: string
    prompt: string
    tokens?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profiles?: ProfileToPromptUncheckedCreateNestedManyWithoutPromptInput
    models?: ModelToPromptUncheckedCreateNestedManyWithoutPromptInput
    responses?: PromptResponseUncheckedCreateNestedManyWithoutPromptInput
  }

  export type PromptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfileToPromptUpdateManyWithoutPromptNestedInput
    models?: ModelToPromptUpdateManyWithoutPromptNestedInput
    responses?: PromptResponseUpdateManyWithoutPromptNestedInput
  }

  export type PromptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfileToPromptUncheckedUpdateManyWithoutPromptNestedInput
    models?: ModelToPromptUncheckedUpdateManyWithoutPromptNestedInput
    responses?: PromptResponseUncheckedUpdateManyWithoutPromptNestedInput
  }

  export type PromptCreateManyInput = {
    id?: string
    prompt: string
    tokens?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelToPromptCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    model: LLMModelCreateNestedOneWithoutPromptsInput
    prompt: PromptCreateNestedOneWithoutModelsInput
  }

  export type ModelToPromptUncheckedCreateInput = {
    model_id: string
    prompt_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelToPromptUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: LLMModelUpdateOneRequiredWithoutPromptsNestedInput
    prompt?: PromptUpdateOneRequiredWithoutModelsNestedInput
  }

  export type ModelToPromptUncheckedUpdateInput = {
    model_id?: StringFieldUpdateOperationsInput | string
    prompt_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelToPromptCreateManyInput = {
    model_id: string
    prompt_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelToPromptUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelToPromptUncheckedUpdateManyInput = {
    model_id?: StringFieldUpdateOperationsInput | string
    prompt_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileToPromptCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: SamplingProfileCreateNestedOneWithoutPromptsInput
    prompt: PromptCreateNestedOneWithoutProfilesInput
  }

  export type ProfileToPromptUncheckedCreateInput = {
    profile_id: string
    prompt_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileToPromptUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: SamplingProfileUpdateOneRequiredWithoutPromptsNestedInput
    prompt?: PromptUpdateOneRequiredWithoutProfilesNestedInput
  }

  export type ProfileToPromptUncheckedUpdateInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    prompt_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileToPromptCreateManyInput = {
    profile_id: string
    prompt_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileToPromptUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileToPromptUncheckedUpdateManyInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    prompt_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptResponseCreateInput = {
    id?: string
    response?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompt: PromptCreateNestedOneWithoutResponsesInput
    model: LLMModelCreateNestedOneWithoutResponsesInput
    profile: SamplingProfileCreateNestedOneWithoutResponsesInput
    lengthMetrics?: LengthMetricsCreateNestedOneWithoutPromptResponseInput
  }

  export type PromptResponseUncheckedCreateInput = {
    id?: string
    prompt_id: string
    model_id: string
    profile_id: string
    response?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lengthMetrics?: LengthMetricsUncheckedCreateNestedOneWithoutPromptResponseInput
  }

  export type PromptResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompt?: PromptUpdateOneRequiredWithoutResponsesNestedInput
    model?: LLMModelUpdateOneRequiredWithoutResponsesNestedInput
    profile?: SamplingProfileUpdateOneRequiredWithoutResponsesNestedInput
    lengthMetrics?: LengthMetricsUpdateOneWithoutPromptResponseNestedInput
  }

  export type PromptResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt_id?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
    profile_id?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lengthMetrics?: LengthMetricsUncheckedUpdateOneWithoutPromptResponseNestedInput
  }

  export type PromptResponseCreateManyInput = {
    id?: string
    prompt_id: string
    model_id: string
    profile_id: string
    response?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt_id?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
    profile_id?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LengthMetricsCreateInput = {
    id?: string
    response_token_count: number
    response_sentence_count: number
    response_word_count: number
    avg_sentence_length: Decimal | DecimalJsLike | number | string
    response_to_prompt_ratio: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    extras?: NullableJsonNullValueInput | InputJsonValue
    promptResponse: PromptResponseCreateNestedOneWithoutLengthMetricsInput
  }

  export type LengthMetricsUncheckedCreateInput = {
    id?: string
    prompt_response_id: string
    response_token_count: number
    response_sentence_count: number
    response_word_count: number
    avg_sentence_length: Decimal | DecimalJsLike | number | string
    response_to_prompt_ratio: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    extras?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LengthMetricsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_token_count?: IntFieldUpdateOperationsInput | number
    response_sentence_count?: IntFieldUpdateOperationsInput | number
    response_word_count?: IntFieldUpdateOperationsInput | number
    avg_sentence_length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    response_to_prompt_ratio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extras?: NullableJsonNullValueInput | InputJsonValue
    promptResponse?: PromptResponseUpdateOneRequiredWithoutLengthMetricsNestedInput
  }

  export type LengthMetricsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt_response_id?: StringFieldUpdateOperationsInput | string
    response_token_count?: IntFieldUpdateOperationsInput | number
    response_sentence_count?: IntFieldUpdateOperationsInput | number
    response_word_count?: IntFieldUpdateOperationsInput | number
    avg_sentence_length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    response_to_prompt_ratio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extras?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LengthMetricsCreateManyInput = {
    id?: string
    prompt_response_id: string
    response_token_count: number
    response_sentence_count: number
    response_word_count: number
    avg_sentence_length: Decimal | DecimalJsLike | number | string
    response_to_prompt_ratio: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    extras?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LengthMetricsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_token_count?: IntFieldUpdateOperationsInput | number
    response_sentence_count?: IntFieldUpdateOperationsInput | number
    response_word_count?: IntFieldUpdateOperationsInput | number
    avg_sentence_length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    response_to_prompt_ratio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extras?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LengthMetricsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt_response_id?: StringFieldUpdateOperationsInput | string
    response_token_count?: IntFieldUpdateOperationsInput | number
    response_sentence_count?: IntFieldUpdateOperationsInput | number
    response_word_count?: IntFieldUpdateOperationsInput | number
    avg_sentence_length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    response_to_prompt_ratio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extras?: NullableJsonNullValueInput | InputJsonValue
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

  export type ModelToPromptListRelationFilter = {
    every?: ModelToPromptWhereInput
    some?: ModelToPromptWhereInput
    none?: ModelToPromptWhereInput
  }

  export type PromptResponseListRelationFilter = {
    every?: PromptResponseWhereInput
    some?: PromptResponseWhereInput
    none?: PromptResponseWhereInput
  }

  export type ModelToPromptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromptResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LLMModelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rpm?: SortOrder
    rpd?: SortOrder
    tpm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LLMModelAvgOrderByAggregateInput = {
    rpm?: SortOrder
    rpd?: SortOrder
    tpm?: SortOrder
  }

  export type LLMModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rpm?: SortOrder
    rpd?: SortOrder
    tpm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LLMModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rpm?: SortOrder
    rpd?: SortOrder
    tpm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LLMModelSumOrderByAggregateInput = {
    rpm?: SortOrder
    rpd?: SortOrder
    tpm?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProfileToPromptListRelationFilter = {
    every?: ProfileToPromptWhereInput
    some?: ProfileToPromptWhereInput
    none?: ProfileToPromptWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfileToPromptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SamplingProfileCountOrderByAggregateInput = {
    id?: SortOrder
    profile_name?: SortOrder
    temperature?: SortOrder
    top_k?: SortOrder
    top_p?: SortOrder
    presence_penalty?: SortOrder
    frequency_penalty?: SortOrder
    max_tokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SamplingProfileAvgOrderByAggregateInput = {
    temperature?: SortOrder
    top_k?: SortOrder
    top_p?: SortOrder
    presence_penalty?: SortOrder
    frequency_penalty?: SortOrder
    max_tokens?: SortOrder
  }

  export type SamplingProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    profile_name?: SortOrder
    temperature?: SortOrder
    top_k?: SortOrder
    top_p?: SortOrder
    presence_penalty?: SortOrder
    frequency_penalty?: SortOrder
    max_tokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SamplingProfileMinOrderByAggregateInput = {
    id?: SortOrder
    profile_name?: SortOrder
    temperature?: SortOrder
    top_k?: SortOrder
    top_p?: SortOrder
    presence_penalty?: SortOrder
    frequency_penalty?: SortOrder
    max_tokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SamplingProfileSumOrderByAggregateInput = {
    temperature?: SortOrder
    top_k?: SortOrder
    top_p?: SortOrder
    presence_penalty?: SortOrder
    frequency_penalty?: SortOrder
    max_tokens?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PromptCountOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    tokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptAvgOrderByAggregateInput = {
    tokens?: SortOrder
  }

  export type PromptMaxOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    tokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptMinOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    tokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptSumOrderByAggregateInput = {
    tokens?: SortOrder
  }

  export type LLMModelScalarRelationFilter = {
    is?: LLMModelWhereInput
    isNot?: LLMModelWhereInput
  }

  export type PromptScalarRelationFilter = {
    is?: PromptWhereInput
    isNot?: PromptWhereInput
  }

  export type ModelToPromptModel_idPrompt_idCompoundUniqueInput = {
    model_id: string
    prompt_id: string
  }

  export type ModelToPromptCountOrderByAggregateInput = {
    model_id?: SortOrder
    prompt_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelToPromptMaxOrderByAggregateInput = {
    model_id?: SortOrder
    prompt_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelToPromptMinOrderByAggregateInput = {
    model_id?: SortOrder
    prompt_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SamplingProfileScalarRelationFilter = {
    is?: SamplingProfileWhereInput
    isNot?: SamplingProfileWhereInput
  }

  export type ProfileToPromptProfile_idPrompt_idCompoundUniqueInput = {
    profile_id: string
    prompt_id: string
  }

  export type ProfileToPromptCountOrderByAggregateInput = {
    profile_id?: SortOrder
    prompt_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileToPromptMaxOrderByAggregateInput = {
    profile_id?: SortOrder
    prompt_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileToPromptMinOrderByAggregateInput = {
    profile_id?: SortOrder
    prompt_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type LengthMetricsNullableScalarRelationFilter = {
    is?: LengthMetricsWhereInput | null
    isNot?: LengthMetricsWhereInput | null
  }

  export type PromptResponseCountOrderByAggregateInput = {
    id?: SortOrder
    prompt_id?: SortOrder
    model_id?: SortOrder
    profile_id?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    prompt_id?: SortOrder
    model_id?: SortOrder
    profile_id?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptResponseMinOrderByAggregateInput = {
    id?: SortOrder
    prompt_id?: SortOrder
    model_id?: SortOrder
    profile_id?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PromptResponseScalarRelationFilter = {
    is?: PromptResponseWhereInput
    isNot?: PromptResponseWhereInput
  }

  export type LengthMetricsCountOrderByAggregateInput = {
    id?: SortOrder
    prompt_response_id?: SortOrder
    response_token_count?: SortOrder
    response_sentence_count?: SortOrder
    response_word_count?: SortOrder
    avg_sentence_length?: SortOrder
    response_to_prompt_ratio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extras?: SortOrder
  }

  export type LengthMetricsAvgOrderByAggregateInput = {
    response_token_count?: SortOrder
    response_sentence_count?: SortOrder
    response_word_count?: SortOrder
    avg_sentence_length?: SortOrder
    response_to_prompt_ratio?: SortOrder
  }

  export type LengthMetricsMaxOrderByAggregateInput = {
    id?: SortOrder
    prompt_response_id?: SortOrder
    response_token_count?: SortOrder
    response_sentence_count?: SortOrder
    response_word_count?: SortOrder
    avg_sentence_length?: SortOrder
    response_to_prompt_ratio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LengthMetricsMinOrderByAggregateInput = {
    id?: SortOrder
    prompt_response_id?: SortOrder
    response_token_count?: SortOrder
    response_sentence_count?: SortOrder
    response_word_count?: SortOrder
    avg_sentence_length?: SortOrder
    response_to_prompt_ratio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LengthMetricsSumOrderByAggregateInput = {
    response_token_count?: SortOrder
    response_sentence_count?: SortOrder
    response_word_count?: SortOrder
    avg_sentence_length?: SortOrder
    response_to_prompt_ratio?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ModelToPromptCreateNestedManyWithoutModelInput = {
    create?: XOR<ModelToPromptCreateWithoutModelInput, ModelToPromptUncheckedCreateWithoutModelInput> | ModelToPromptCreateWithoutModelInput[] | ModelToPromptUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ModelToPromptCreateOrConnectWithoutModelInput | ModelToPromptCreateOrConnectWithoutModelInput[]
    createMany?: ModelToPromptCreateManyModelInputEnvelope
    connect?: ModelToPromptWhereUniqueInput | ModelToPromptWhereUniqueInput[]
  }

  export type PromptResponseCreateNestedManyWithoutModelInput = {
    create?: XOR<PromptResponseCreateWithoutModelInput, PromptResponseUncheckedCreateWithoutModelInput> | PromptResponseCreateWithoutModelInput[] | PromptResponseUncheckedCreateWithoutModelInput[]
    connectOrCreate?: PromptResponseCreateOrConnectWithoutModelInput | PromptResponseCreateOrConnectWithoutModelInput[]
    createMany?: PromptResponseCreateManyModelInputEnvelope
    connect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
  }

  export type ModelToPromptUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<ModelToPromptCreateWithoutModelInput, ModelToPromptUncheckedCreateWithoutModelInput> | ModelToPromptCreateWithoutModelInput[] | ModelToPromptUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ModelToPromptCreateOrConnectWithoutModelInput | ModelToPromptCreateOrConnectWithoutModelInput[]
    createMany?: ModelToPromptCreateManyModelInputEnvelope
    connect?: ModelToPromptWhereUniqueInput | ModelToPromptWhereUniqueInput[]
  }

  export type PromptResponseUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<PromptResponseCreateWithoutModelInput, PromptResponseUncheckedCreateWithoutModelInput> | PromptResponseCreateWithoutModelInput[] | PromptResponseUncheckedCreateWithoutModelInput[]
    connectOrCreate?: PromptResponseCreateOrConnectWithoutModelInput | PromptResponseCreateOrConnectWithoutModelInput[]
    createMany?: PromptResponseCreateManyModelInputEnvelope
    connect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ModelToPromptUpdateManyWithoutModelNestedInput = {
    create?: XOR<ModelToPromptCreateWithoutModelInput, ModelToPromptUncheckedCreateWithoutModelInput> | ModelToPromptCreateWithoutModelInput[] | ModelToPromptUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ModelToPromptCreateOrConnectWithoutModelInput | ModelToPromptCreateOrConnectWithoutModelInput[]
    upsert?: ModelToPromptUpsertWithWhereUniqueWithoutModelInput | ModelToPromptUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: ModelToPromptCreateManyModelInputEnvelope
    set?: ModelToPromptWhereUniqueInput | ModelToPromptWhereUniqueInput[]
    disconnect?: ModelToPromptWhereUniqueInput | ModelToPromptWhereUniqueInput[]
    delete?: ModelToPromptWhereUniqueInput | ModelToPromptWhereUniqueInput[]
    connect?: ModelToPromptWhereUniqueInput | ModelToPromptWhereUniqueInput[]
    update?: ModelToPromptUpdateWithWhereUniqueWithoutModelInput | ModelToPromptUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: ModelToPromptUpdateManyWithWhereWithoutModelInput | ModelToPromptUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: ModelToPromptScalarWhereInput | ModelToPromptScalarWhereInput[]
  }

  export type PromptResponseUpdateManyWithoutModelNestedInput = {
    create?: XOR<PromptResponseCreateWithoutModelInput, PromptResponseUncheckedCreateWithoutModelInput> | PromptResponseCreateWithoutModelInput[] | PromptResponseUncheckedCreateWithoutModelInput[]
    connectOrCreate?: PromptResponseCreateOrConnectWithoutModelInput | PromptResponseCreateOrConnectWithoutModelInput[]
    upsert?: PromptResponseUpsertWithWhereUniqueWithoutModelInput | PromptResponseUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: PromptResponseCreateManyModelInputEnvelope
    set?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    disconnect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    delete?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    connect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    update?: PromptResponseUpdateWithWhereUniqueWithoutModelInput | PromptResponseUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: PromptResponseUpdateManyWithWhereWithoutModelInput | PromptResponseUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: PromptResponseScalarWhereInput | PromptResponseScalarWhereInput[]
  }

  export type ModelToPromptUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<ModelToPromptCreateWithoutModelInput, ModelToPromptUncheckedCreateWithoutModelInput> | ModelToPromptCreateWithoutModelInput[] | ModelToPromptUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ModelToPromptCreateOrConnectWithoutModelInput | ModelToPromptCreateOrConnectWithoutModelInput[]
    upsert?: ModelToPromptUpsertWithWhereUniqueWithoutModelInput | ModelToPromptUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: ModelToPromptCreateManyModelInputEnvelope
    set?: ModelToPromptWhereUniqueInput | ModelToPromptWhereUniqueInput[]
    disconnect?: ModelToPromptWhereUniqueInput | ModelToPromptWhereUniqueInput[]
    delete?: ModelToPromptWhereUniqueInput | ModelToPromptWhereUniqueInput[]
    connect?: ModelToPromptWhereUniqueInput | ModelToPromptWhereUniqueInput[]
    update?: ModelToPromptUpdateWithWhereUniqueWithoutModelInput | ModelToPromptUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: ModelToPromptUpdateManyWithWhereWithoutModelInput | ModelToPromptUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: ModelToPromptScalarWhereInput | ModelToPromptScalarWhereInput[]
  }

  export type PromptResponseUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<PromptResponseCreateWithoutModelInput, PromptResponseUncheckedCreateWithoutModelInput> | PromptResponseCreateWithoutModelInput[] | PromptResponseUncheckedCreateWithoutModelInput[]
    connectOrCreate?: PromptResponseCreateOrConnectWithoutModelInput | PromptResponseCreateOrConnectWithoutModelInput[]
    upsert?: PromptResponseUpsertWithWhereUniqueWithoutModelInput | PromptResponseUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: PromptResponseCreateManyModelInputEnvelope
    set?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    disconnect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    delete?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    connect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    update?: PromptResponseUpdateWithWhereUniqueWithoutModelInput | PromptResponseUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: PromptResponseUpdateManyWithWhereWithoutModelInput | PromptResponseUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: PromptResponseScalarWhereInput | PromptResponseScalarWhereInput[]
  }

  export type ProfileToPromptCreateNestedManyWithoutProfileInput = {
    create?: XOR<ProfileToPromptCreateWithoutProfileInput, ProfileToPromptUncheckedCreateWithoutProfileInput> | ProfileToPromptCreateWithoutProfileInput[] | ProfileToPromptUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ProfileToPromptCreateOrConnectWithoutProfileInput | ProfileToPromptCreateOrConnectWithoutProfileInput[]
    createMany?: ProfileToPromptCreateManyProfileInputEnvelope
    connect?: ProfileToPromptWhereUniqueInput | ProfileToPromptWhereUniqueInput[]
  }

  export type PromptResponseCreateNestedManyWithoutProfileInput = {
    create?: XOR<PromptResponseCreateWithoutProfileInput, PromptResponseUncheckedCreateWithoutProfileInput> | PromptResponseCreateWithoutProfileInput[] | PromptResponseUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PromptResponseCreateOrConnectWithoutProfileInput | PromptResponseCreateOrConnectWithoutProfileInput[]
    createMany?: PromptResponseCreateManyProfileInputEnvelope
    connect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
  }

  export type ProfileToPromptUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<ProfileToPromptCreateWithoutProfileInput, ProfileToPromptUncheckedCreateWithoutProfileInput> | ProfileToPromptCreateWithoutProfileInput[] | ProfileToPromptUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ProfileToPromptCreateOrConnectWithoutProfileInput | ProfileToPromptCreateOrConnectWithoutProfileInput[]
    createMany?: ProfileToPromptCreateManyProfileInputEnvelope
    connect?: ProfileToPromptWhereUniqueInput | ProfileToPromptWhereUniqueInput[]
  }

  export type PromptResponseUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<PromptResponseCreateWithoutProfileInput, PromptResponseUncheckedCreateWithoutProfileInput> | PromptResponseCreateWithoutProfileInput[] | PromptResponseUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PromptResponseCreateOrConnectWithoutProfileInput | PromptResponseCreateOrConnectWithoutProfileInput[]
    createMany?: PromptResponseCreateManyProfileInputEnvelope
    connect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileToPromptUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ProfileToPromptCreateWithoutProfileInput, ProfileToPromptUncheckedCreateWithoutProfileInput> | ProfileToPromptCreateWithoutProfileInput[] | ProfileToPromptUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ProfileToPromptCreateOrConnectWithoutProfileInput | ProfileToPromptCreateOrConnectWithoutProfileInput[]
    upsert?: ProfileToPromptUpsertWithWhereUniqueWithoutProfileInput | ProfileToPromptUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ProfileToPromptCreateManyProfileInputEnvelope
    set?: ProfileToPromptWhereUniqueInput | ProfileToPromptWhereUniqueInput[]
    disconnect?: ProfileToPromptWhereUniqueInput | ProfileToPromptWhereUniqueInput[]
    delete?: ProfileToPromptWhereUniqueInput | ProfileToPromptWhereUniqueInput[]
    connect?: ProfileToPromptWhereUniqueInput | ProfileToPromptWhereUniqueInput[]
    update?: ProfileToPromptUpdateWithWhereUniqueWithoutProfileInput | ProfileToPromptUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ProfileToPromptUpdateManyWithWhereWithoutProfileInput | ProfileToPromptUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ProfileToPromptScalarWhereInput | ProfileToPromptScalarWhereInput[]
  }

  export type PromptResponseUpdateManyWithoutProfileNestedInput = {
    create?: XOR<PromptResponseCreateWithoutProfileInput, PromptResponseUncheckedCreateWithoutProfileInput> | PromptResponseCreateWithoutProfileInput[] | PromptResponseUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PromptResponseCreateOrConnectWithoutProfileInput | PromptResponseCreateOrConnectWithoutProfileInput[]
    upsert?: PromptResponseUpsertWithWhereUniqueWithoutProfileInput | PromptResponseUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: PromptResponseCreateManyProfileInputEnvelope
    set?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    disconnect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    delete?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    connect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    update?: PromptResponseUpdateWithWhereUniqueWithoutProfileInput | PromptResponseUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: PromptResponseUpdateManyWithWhereWithoutProfileInput | PromptResponseUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: PromptResponseScalarWhereInput | PromptResponseScalarWhereInput[]
  }

  export type ProfileToPromptUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ProfileToPromptCreateWithoutProfileInput, ProfileToPromptUncheckedCreateWithoutProfileInput> | ProfileToPromptCreateWithoutProfileInput[] | ProfileToPromptUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ProfileToPromptCreateOrConnectWithoutProfileInput | ProfileToPromptCreateOrConnectWithoutProfileInput[]
    upsert?: ProfileToPromptUpsertWithWhereUniqueWithoutProfileInput | ProfileToPromptUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ProfileToPromptCreateManyProfileInputEnvelope
    set?: ProfileToPromptWhereUniqueInput | ProfileToPromptWhereUniqueInput[]
    disconnect?: ProfileToPromptWhereUniqueInput | ProfileToPromptWhereUniqueInput[]
    delete?: ProfileToPromptWhereUniqueInput | ProfileToPromptWhereUniqueInput[]
    connect?: ProfileToPromptWhereUniqueInput | ProfileToPromptWhereUniqueInput[]
    update?: ProfileToPromptUpdateWithWhereUniqueWithoutProfileInput | ProfileToPromptUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ProfileToPromptUpdateManyWithWhereWithoutProfileInput | ProfileToPromptUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ProfileToPromptScalarWhereInput | ProfileToPromptScalarWhereInput[]
  }

  export type PromptResponseUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<PromptResponseCreateWithoutProfileInput, PromptResponseUncheckedCreateWithoutProfileInput> | PromptResponseCreateWithoutProfileInput[] | PromptResponseUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PromptResponseCreateOrConnectWithoutProfileInput | PromptResponseCreateOrConnectWithoutProfileInput[]
    upsert?: PromptResponseUpsertWithWhereUniqueWithoutProfileInput | PromptResponseUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: PromptResponseCreateManyProfileInputEnvelope
    set?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    disconnect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    delete?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    connect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    update?: PromptResponseUpdateWithWhereUniqueWithoutProfileInput | PromptResponseUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: PromptResponseUpdateManyWithWhereWithoutProfileInput | PromptResponseUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: PromptResponseScalarWhereInput | PromptResponseScalarWhereInput[]
  }

  export type ProfileToPromptCreateNestedManyWithoutPromptInput = {
    create?: XOR<ProfileToPromptCreateWithoutPromptInput, ProfileToPromptUncheckedCreateWithoutPromptInput> | ProfileToPromptCreateWithoutPromptInput[] | ProfileToPromptUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: ProfileToPromptCreateOrConnectWithoutPromptInput | ProfileToPromptCreateOrConnectWithoutPromptInput[]
    createMany?: ProfileToPromptCreateManyPromptInputEnvelope
    connect?: ProfileToPromptWhereUniqueInput | ProfileToPromptWhereUniqueInput[]
  }

  export type ModelToPromptCreateNestedManyWithoutPromptInput = {
    create?: XOR<ModelToPromptCreateWithoutPromptInput, ModelToPromptUncheckedCreateWithoutPromptInput> | ModelToPromptCreateWithoutPromptInput[] | ModelToPromptUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: ModelToPromptCreateOrConnectWithoutPromptInput | ModelToPromptCreateOrConnectWithoutPromptInput[]
    createMany?: ModelToPromptCreateManyPromptInputEnvelope
    connect?: ModelToPromptWhereUniqueInput | ModelToPromptWhereUniqueInput[]
  }

  export type PromptResponseCreateNestedManyWithoutPromptInput = {
    create?: XOR<PromptResponseCreateWithoutPromptInput, PromptResponseUncheckedCreateWithoutPromptInput> | PromptResponseCreateWithoutPromptInput[] | PromptResponseUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: PromptResponseCreateOrConnectWithoutPromptInput | PromptResponseCreateOrConnectWithoutPromptInput[]
    createMany?: PromptResponseCreateManyPromptInputEnvelope
    connect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
  }

  export type ProfileToPromptUncheckedCreateNestedManyWithoutPromptInput = {
    create?: XOR<ProfileToPromptCreateWithoutPromptInput, ProfileToPromptUncheckedCreateWithoutPromptInput> | ProfileToPromptCreateWithoutPromptInput[] | ProfileToPromptUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: ProfileToPromptCreateOrConnectWithoutPromptInput | ProfileToPromptCreateOrConnectWithoutPromptInput[]
    createMany?: ProfileToPromptCreateManyPromptInputEnvelope
    connect?: ProfileToPromptWhereUniqueInput | ProfileToPromptWhereUniqueInput[]
  }

  export type ModelToPromptUncheckedCreateNestedManyWithoutPromptInput = {
    create?: XOR<ModelToPromptCreateWithoutPromptInput, ModelToPromptUncheckedCreateWithoutPromptInput> | ModelToPromptCreateWithoutPromptInput[] | ModelToPromptUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: ModelToPromptCreateOrConnectWithoutPromptInput | ModelToPromptCreateOrConnectWithoutPromptInput[]
    createMany?: ModelToPromptCreateManyPromptInputEnvelope
    connect?: ModelToPromptWhereUniqueInput | ModelToPromptWhereUniqueInput[]
  }

  export type PromptResponseUncheckedCreateNestedManyWithoutPromptInput = {
    create?: XOR<PromptResponseCreateWithoutPromptInput, PromptResponseUncheckedCreateWithoutPromptInput> | PromptResponseCreateWithoutPromptInput[] | PromptResponseUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: PromptResponseCreateOrConnectWithoutPromptInput | PromptResponseCreateOrConnectWithoutPromptInput[]
    createMany?: PromptResponseCreateManyPromptInputEnvelope
    connect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
  }

  export type ProfileToPromptUpdateManyWithoutPromptNestedInput = {
    create?: XOR<ProfileToPromptCreateWithoutPromptInput, ProfileToPromptUncheckedCreateWithoutPromptInput> | ProfileToPromptCreateWithoutPromptInput[] | ProfileToPromptUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: ProfileToPromptCreateOrConnectWithoutPromptInput | ProfileToPromptCreateOrConnectWithoutPromptInput[]
    upsert?: ProfileToPromptUpsertWithWhereUniqueWithoutPromptInput | ProfileToPromptUpsertWithWhereUniqueWithoutPromptInput[]
    createMany?: ProfileToPromptCreateManyPromptInputEnvelope
    set?: ProfileToPromptWhereUniqueInput | ProfileToPromptWhereUniqueInput[]
    disconnect?: ProfileToPromptWhereUniqueInput | ProfileToPromptWhereUniqueInput[]
    delete?: ProfileToPromptWhereUniqueInput | ProfileToPromptWhereUniqueInput[]
    connect?: ProfileToPromptWhereUniqueInput | ProfileToPromptWhereUniqueInput[]
    update?: ProfileToPromptUpdateWithWhereUniqueWithoutPromptInput | ProfileToPromptUpdateWithWhereUniqueWithoutPromptInput[]
    updateMany?: ProfileToPromptUpdateManyWithWhereWithoutPromptInput | ProfileToPromptUpdateManyWithWhereWithoutPromptInput[]
    deleteMany?: ProfileToPromptScalarWhereInput | ProfileToPromptScalarWhereInput[]
  }

  export type ModelToPromptUpdateManyWithoutPromptNestedInput = {
    create?: XOR<ModelToPromptCreateWithoutPromptInput, ModelToPromptUncheckedCreateWithoutPromptInput> | ModelToPromptCreateWithoutPromptInput[] | ModelToPromptUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: ModelToPromptCreateOrConnectWithoutPromptInput | ModelToPromptCreateOrConnectWithoutPromptInput[]
    upsert?: ModelToPromptUpsertWithWhereUniqueWithoutPromptInput | ModelToPromptUpsertWithWhereUniqueWithoutPromptInput[]
    createMany?: ModelToPromptCreateManyPromptInputEnvelope
    set?: ModelToPromptWhereUniqueInput | ModelToPromptWhereUniqueInput[]
    disconnect?: ModelToPromptWhereUniqueInput | ModelToPromptWhereUniqueInput[]
    delete?: ModelToPromptWhereUniqueInput | ModelToPromptWhereUniqueInput[]
    connect?: ModelToPromptWhereUniqueInput | ModelToPromptWhereUniqueInput[]
    update?: ModelToPromptUpdateWithWhereUniqueWithoutPromptInput | ModelToPromptUpdateWithWhereUniqueWithoutPromptInput[]
    updateMany?: ModelToPromptUpdateManyWithWhereWithoutPromptInput | ModelToPromptUpdateManyWithWhereWithoutPromptInput[]
    deleteMany?: ModelToPromptScalarWhereInput | ModelToPromptScalarWhereInput[]
  }

  export type PromptResponseUpdateManyWithoutPromptNestedInput = {
    create?: XOR<PromptResponseCreateWithoutPromptInput, PromptResponseUncheckedCreateWithoutPromptInput> | PromptResponseCreateWithoutPromptInput[] | PromptResponseUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: PromptResponseCreateOrConnectWithoutPromptInput | PromptResponseCreateOrConnectWithoutPromptInput[]
    upsert?: PromptResponseUpsertWithWhereUniqueWithoutPromptInput | PromptResponseUpsertWithWhereUniqueWithoutPromptInput[]
    createMany?: PromptResponseCreateManyPromptInputEnvelope
    set?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    disconnect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    delete?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    connect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    update?: PromptResponseUpdateWithWhereUniqueWithoutPromptInput | PromptResponseUpdateWithWhereUniqueWithoutPromptInput[]
    updateMany?: PromptResponseUpdateManyWithWhereWithoutPromptInput | PromptResponseUpdateManyWithWhereWithoutPromptInput[]
    deleteMany?: PromptResponseScalarWhereInput | PromptResponseScalarWhereInput[]
  }

  export type ProfileToPromptUncheckedUpdateManyWithoutPromptNestedInput = {
    create?: XOR<ProfileToPromptCreateWithoutPromptInput, ProfileToPromptUncheckedCreateWithoutPromptInput> | ProfileToPromptCreateWithoutPromptInput[] | ProfileToPromptUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: ProfileToPromptCreateOrConnectWithoutPromptInput | ProfileToPromptCreateOrConnectWithoutPromptInput[]
    upsert?: ProfileToPromptUpsertWithWhereUniqueWithoutPromptInput | ProfileToPromptUpsertWithWhereUniqueWithoutPromptInput[]
    createMany?: ProfileToPromptCreateManyPromptInputEnvelope
    set?: ProfileToPromptWhereUniqueInput | ProfileToPromptWhereUniqueInput[]
    disconnect?: ProfileToPromptWhereUniqueInput | ProfileToPromptWhereUniqueInput[]
    delete?: ProfileToPromptWhereUniqueInput | ProfileToPromptWhereUniqueInput[]
    connect?: ProfileToPromptWhereUniqueInput | ProfileToPromptWhereUniqueInput[]
    update?: ProfileToPromptUpdateWithWhereUniqueWithoutPromptInput | ProfileToPromptUpdateWithWhereUniqueWithoutPromptInput[]
    updateMany?: ProfileToPromptUpdateManyWithWhereWithoutPromptInput | ProfileToPromptUpdateManyWithWhereWithoutPromptInput[]
    deleteMany?: ProfileToPromptScalarWhereInput | ProfileToPromptScalarWhereInput[]
  }

  export type ModelToPromptUncheckedUpdateManyWithoutPromptNestedInput = {
    create?: XOR<ModelToPromptCreateWithoutPromptInput, ModelToPromptUncheckedCreateWithoutPromptInput> | ModelToPromptCreateWithoutPromptInput[] | ModelToPromptUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: ModelToPromptCreateOrConnectWithoutPromptInput | ModelToPromptCreateOrConnectWithoutPromptInput[]
    upsert?: ModelToPromptUpsertWithWhereUniqueWithoutPromptInput | ModelToPromptUpsertWithWhereUniqueWithoutPromptInput[]
    createMany?: ModelToPromptCreateManyPromptInputEnvelope
    set?: ModelToPromptWhereUniqueInput | ModelToPromptWhereUniqueInput[]
    disconnect?: ModelToPromptWhereUniqueInput | ModelToPromptWhereUniqueInput[]
    delete?: ModelToPromptWhereUniqueInput | ModelToPromptWhereUniqueInput[]
    connect?: ModelToPromptWhereUniqueInput | ModelToPromptWhereUniqueInput[]
    update?: ModelToPromptUpdateWithWhereUniqueWithoutPromptInput | ModelToPromptUpdateWithWhereUniqueWithoutPromptInput[]
    updateMany?: ModelToPromptUpdateManyWithWhereWithoutPromptInput | ModelToPromptUpdateManyWithWhereWithoutPromptInput[]
    deleteMany?: ModelToPromptScalarWhereInput | ModelToPromptScalarWhereInput[]
  }

  export type PromptResponseUncheckedUpdateManyWithoutPromptNestedInput = {
    create?: XOR<PromptResponseCreateWithoutPromptInput, PromptResponseUncheckedCreateWithoutPromptInput> | PromptResponseCreateWithoutPromptInput[] | PromptResponseUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: PromptResponseCreateOrConnectWithoutPromptInput | PromptResponseCreateOrConnectWithoutPromptInput[]
    upsert?: PromptResponseUpsertWithWhereUniqueWithoutPromptInput | PromptResponseUpsertWithWhereUniqueWithoutPromptInput[]
    createMany?: PromptResponseCreateManyPromptInputEnvelope
    set?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    disconnect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    delete?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    connect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    update?: PromptResponseUpdateWithWhereUniqueWithoutPromptInput | PromptResponseUpdateWithWhereUniqueWithoutPromptInput[]
    updateMany?: PromptResponseUpdateManyWithWhereWithoutPromptInput | PromptResponseUpdateManyWithWhereWithoutPromptInput[]
    deleteMany?: PromptResponseScalarWhereInput | PromptResponseScalarWhereInput[]
  }

  export type LLMModelCreateNestedOneWithoutPromptsInput = {
    create?: XOR<LLMModelCreateWithoutPromptsInput, LLMModelUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: LLMModelCreateOrConnectWithoutPromptsInput
    connect?: LLMModelWhereUniqueInput
  }

  export type PromptCreateNestedOneWithoutModelsInput = {
    create?: XOR<PromptCreateWithoutModelsInput, PromptUncheckedCreateWithoutModelsInput>
    connectOrCreate?: PromptCreateOrConnectWithoutModelsInput
    connect?: PromptWhereUniqueInput
  }

  export type LLMModelUpdateOneRequiredWithoutPromptsNestedInput = {
    create?: XOR<LLMModelCreateWithoutPromptsInput, LLMModelUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: LLMModelCreateOrConnectWithoutPromptsInput
    upsert?: LLMModelUpsertWithoutPromptsInput
    connect?: LLMModelWhereUniqueInput
    update?: XOR<XOR<LLMModelUpdateToOneWithWhereWithoutPromptsInput, LLMModelUpdateWithoutPromptsInput>, LLMModelUncheckedUpdateWithoutPromptsInput>
  }

  export type PromptUpdateOneRequiredWithoutModelsNestedInput = {
    create?: XOR<PromptCreateWithoutModelsInput, PromptUncheckedCreateWithoutModelsInput>
    connectOrCreate?: PromptCreateOrConnectWithoutModelsInput
    upsert?: PromptUpsertWithoutModelsInput
    connect?: PromptWhereUniqueInput
    update?: XOR<XOR<PromptUpdateToOneWithWhereWithoutModelsInput, PromptUpdateWithoutModelsInput>, PromptUncheckedUpdateWithoutModelsInput>
  }

  export type SamplingProfileCreateNestedOneWithoutPromptsInput = {
    create?: XOR<SamplingProfileCreateWithoutPromptsInput, SamplingProfileUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: SamplingProfileCreateOrConnectWithoutPromptsInput
    connect?: SamplingProfileWhereUniqueInput
  }

  export type PromptCreateNestedOneWithoutProfilesInput = {
    create?: XOR<PromptCreateWithoutProfilesInput, PromptUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: PromptCreateOrConnectWithoutProfilesInput
    connect?: PromptWhereUniqueInput
  }

  export type SamplingProfileUpdateOneRequiredWithoutPromptsNestedInput = {
    create?: XOR<SamplingProfileCreateWithoutPromptsInput, SamplingProfileUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: SamplingProfileCreateOrConnectWithoutPromptsInput
    upsert?: SamplingProfileUpsertWithoutPromptsInput
    connect?: SamplingProfileWhereUniqueInput
    update?: XOR<XOR<SamplingProfileUpdateToOneWithWhereWithoutPromptsInput, SamplingProfileUpdateWithoutPromptsInput>, SamplingProfileUncheckedUpdateWithoutPromptsInput>
  }

  export type PromptUpdateOneRequiredWithoutProfilesNestedInput = {
    create?: XOR<PromptCreateWithoutProfilesInput, PromptUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: PromptCreateOrConnectWithoutProfilesInput
    upsert?: PromptUpsertWithoutProfilesInput
    connect?: PromptWhereUniqueInput
    update?: XOR<XOR<PromptUpdateToOneWithWhereWithoutProfilesInput, PromptUpdateWithoutProfilesInput>, PromptUncheckedUpdateWithoutProfilesInput>
  }

  export type PromptCreateNestedOneWithoutResponsesInput = {
    create?: XOR<PromptCreateWithoutResponsesInput, PromptUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: PromptCreateOrConnectWithoutResponsesInput
    connect?: PromptWhereUniqueInput
  }

  export type LLMModelCreateNestedOneWithoutResponsesInput = {
    create?: XOR<LLMModelCreateWithoutResponsesInput, LLMModelUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: LLMModelCreateOrConnectWithoutResponsesInput
    connect?: LLMModelWhereUniqueInput
  }

  export type SamplingProfileCreateNestedOneWithoutResponsesInput = {
    create?: XOR<SamplingProfileCreateWithoutResponsesInput, SamplingProfileUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: SamplingProfileCreateOrConnectWithoutResponsesInput
    connect?: SamplingProfileWhereUniqueInput
  }

  export type LengthMetricsCreateNestedOneWithoutPromptResponseInput = {
    create?: XOR<LengthMetricsCreateWithoutPromptResponseInput, LengthMetricsUncheckedCreateWithoutPromptResponseInput>
    connectOrCreate?: LengthMetricsCreateOrConnectWithoutPromptResponseInput
    connect?: LengthMetricsWhereUniqueInput
  }

  export type LengthMetricsUncheckedCreateNestedOneWithoutPromptResponseInput = {
    create?: XOR<LengthMetricsCreateWithoutPromptResponseInput, LengthMetricsUncheckedCreateWithoutPromptResponseInput>
    connectOrCreate?: LengthMetricsCreateOrConnectWithoutPromptResponseInput
    connect?: LengthMetricsWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PromptUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<PromptCreateWithoutResponsesInput, PromptUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: PromptCreateOrConnectWithoutResponsesInput
    upsert?: PromptUpsertWithoutResponsesInput
    connect?: PromptWhereUniqueInput
    update?: XOR<XOR<PromptUpdateToOneWithWhereWithoutResponsesInput, PromptUpdateWithoutResponsesInput>, PromptUncheckedUpdateWithoutResponsesInput>
  }

  export type LLMModelUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<LLMModelCreateWithoutResponsesInput, LLMModelUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: LLMModelCreateOrConnectWithoutResponsesInput
    upsert?: LLMModelUpsertWithoutResponsesInput
    connect?: LLMModelWhereUniqueInput
    update?: XOR<XOR<LLMModelUpdateToOneWithWhereWithoutResponsesInput, LLMModelUpdateWithoutResponsesInput>, LLMModelUncheckedUpdateWithoutResponsesInput>
  }

  export type SamplingProfileUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<SamplingProfileCreateWithoutResponsesInput, SamplingProfileUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: SamplingProfileCreateOrConnectWithoutResponsesInput
    upsert?: SamplingProfileUpsertWithoutResponsesInput
    connect?: SamplingProfileWhereUniqueInput
    update?: XOR<XOR<SamplingProfileUpdateToOneWithWhereWithoutResponsesInput, SamplingProfileUpdateWithoutResponsesInput>, SamplingProfileUncheckedUpdateWithoutResponsesInput>
  }

  export type LengthMetricsUpdateOneWithoutPromptResponseNestedInput = {
    create?: XOR<LengthMetricsCreateWithoutPromptResponseInput, LengthMetricsUncheckedCreateWithoutPromptResponseInput>
    connectOrCreate?: LengthMetricsCreateOrConnectWithoutPromptResponseInput
    upsert?: LengthMetricsUpsertWithoutPromptResponseInput
    disconnect?: LengthMetricsWhereInput | boolean
    delete?: LengthMetricsWhereInput | boolean
    connect?: LengthMetricsWhereUniqueInput
    update?: XOR<XOR<LengthMetricsUpdateToOneWithWhereWithoutPromptResponseInput, LengthMetricsUpdateWithoutPromptResponseInput>, LengthMetricsUncheckedUpdateWithoutPromptResponseInput>
  }

  export type LengthMetricsUncheckedUpdateOneWithoutPromptResponseNestedInput = {
    create?: XOR<LengthMetricsCreateWithoutPromptResponseInput, LengthMetricsUncheckedCreateWithoutPromptResponseInput>
    connectOrCreate?: LengthMetricsCreateOrConnectWithoutPromptResponseInput
    upsert?: LengthMetricsUpsertWithoutPromptResponseInput
    disconnect?: LengthMetricsWhereInput | boolean
    delete?: LengthMetricsWhereInput | boolean
    connect?: LengthMetricsWhereUniqueInput
    update?: XOR<XOR<LengthMetricsUpdateToOneWithWhereWithoutPromptResponseInput, LengthMetricsUpdateWithoutPromptResponseInput>, LengthMetricsUncheckedUpdateWithoutPromptResponseInput>
  }

  export type PromptResponseCreateNestedOneWithoutLengthMetricsInput = {
    create?: XOR<PromptResponseCreateWithoutLengthMetricsInput, PromptResponseUncheckedCreateWithoutLengthMetricsInput>
    connectOrCreate?: PromptResponseCreateOrConnectWithoutLengthMetricsInput
    connect?: PromptResponseWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PromptResponseUpdateOneRequiredWithoutLengthMetricsNestedInput = {
    create?: XOR<PromptResponseCreateWithoutLengthMetricsInput, PromptResponseUncheckedCreateWithoutLengthMetricsInput>
    connectOrCreate?: PromptResponseCreateOrConnectWithoutLengthMetricsInput
    upsert?: PromptResponseUpsertWithoutLengthMetricsInput
    connect?: PromptResponseWhereUniqueInput
    update?: XOR<XOR<PromptResponseUpdateToOneWithWhereWithoutLengthMetricsInput, PromptResponseUpdateWithoutLengthMetricsInput>, PromptResponseUncheckedUpdateWithoutLengthMetricsInput>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ModelToPromptCreateWithoutModelInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    prompt: PromptCreateNestedOneWithoutModelsInput
  }

  export type ModelToPromptUncheckedCreateWithoutModelInput = {
    prompt_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelToPromptCreateOrConnectWithoutModelInput = {
    where: ModelToPromptWhereUniqueInput
    create: XOR<ModelToPromptCreateWithoutModelInput, ModelToPromptUncheckedCreateWithoutModelInput>
  }

  export type ModelToPromptCreateManyModelInputEnvelope = {
    data: ModelToPromptCreateManyModelInput | ModelToPromptCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type PromptResponseCreateWithoutModelInput = {
    id?: string
    response?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompt: PromptCreateNestedOneWithoutResponsesInput
    profile: SamplingProfileCreateNestedOneWithoutResponsesInput
    lengthMetrics?: LengthMetricsCreateNestedOneWithoutPromptResponseInput
  }

  export type PromptResponseUncheckedCreateWithoutModelInput = {
    id?: string
    prompt_id: string
    profile_id: string
    response?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lengthMetrics?: LengthMetricsUncheckedCreateNestedOneWithoutPromptResponseInput
  }

  export type PromptResponseCreateOrConnectWithoutModelInput = {
    where: PromptResponseWhereUniqueInput
    create: XOR<PromptResponseCreateWithoutModelInput, PromptResponseUncheckedCreateWithoutModelInput>
  }

  export type PromptResponseCreateManyModelInputEnvelope = {
    data: PromptResponseCreateManyModelInput | PromptResponseCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type ModelToPromptUpsertWithWhereUniqueWithoutModelInput = {
    where: ModelToPromptWhereUniqueInput
    update: XOR<ModelToPromptUpdateWithoutModelInput, ModelToPromptUncheckedUpdateWithoutModelInput>
    create: XOR<ModelToPromptCreateWithoutModelInput, ModelToPromptUncheckedCreateWithoutModelInput>
  }

  export type ModelToPromptUpdateWithWhereUniqueWithoutModelInput = {
    where: ModelToPromptWhereUniqueInput
    data: XOR<ModelToPromptUpdateWithoutModelInput, ModelToPromptUncheckedUpdateWithoutModelInput>
  }

  export type ModelToPromptUpdateManyWithWhereWithoutModelInput = {
    where: ModelToPromptScalarWhereInput
    data: XOR<ModelToPromptUpdateManyMutationInput, ModelToPromptUncheckedUpdateManyWithoutModelInput>
  }

  export type ModelToPromptScalarWhereInput = {
    AND?: ModelToPromptScalarWhereInput | ModelToPromptScalarWhereInput[]
    OR?: ModelToPromptScalarWhereInput[]
    NOT?: ModelToPromptScalarWhereInput | ModelToPromptScalarWhereInput[]
    model_id?: UuidFilter<"ModelToPrompt"> | string
    prompt_id?: UuidFilter<"ModelToPrompt"> | string
    createdAt?: DateTimeFilter<"ModelToPrompt"> | Date | string
    updatedAt?: DateTimeFilter<"ModelToPrompt"> | Date | string
  }

  export type PromptResponseUpsertWithWhereUniqueWithoutModelInput = {
    where: PromptResponseWhereUniqueInput
    update: XOR<PromptResponseUpdateWithoutModelInput, PromptResponseUncheckedUpdateWithoutModelInput>
    create: XOR<PromptResponseCreateWithoutModelInput, PromptResponseUncheckedCreateWithoutModelInput>
  }

  export type PromptResponseUpdateWithWhereUniqueWithoutModelInput = {
    where: PromptResponseWhereUniqueInput
    data: XOR<PromptResponseUpdateWithoutModelInput, PromptResponseUncheckedUpdateWithoutModelInput>
  }

  export type PromptResponseUpdateManyWithWhereWithoutModelInput = {
    where: PromptResponseScalarWhereInput
    data: XOR<PromptResponseUpdateManyMutationInput, PromptResponseUncheckedUpdateManyWithoutModelInput>
  }

  export type PromptResponseScalarWhereInput = {
    AND?: PromptResponseScalarWhereInput | PromptResponseScalarWhereInput[]
    OR?: PromptResponseScalarWhereInput[]
    NOT?: PromptResponseScalarWhereInput | PromptResponseScalarWhereInput[]
    id?: UuidFilter<"PromptResponse"> | string
    prompt_id?: UuidFilter<"PromptResponse"> | string
    model_id?: UuidFilter<"PromptResponse"> | string
    profile_id?: UuidFilter<"PromptResponse"> | string
    response?: StringNullableFilter<"PromptResponse"> | string | null
    createdAt?: DateTimeFilter<"PromptResponse"> | Date | string
    updatedAt?: DateTimeFilter<"PromptResponse"> | Date | string
  }

  export type ProfileToPromptCreateWithoutProfileInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    prompt: PromptCreateNestedOneWithoutProfilesInput
  }

  export type ProfileToPromptUncheckedCreateWithoutProfileInput = {
    prompt_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileToPromptCreateOrConnectWithoutProfileInput = {
    where: ProfileToPromptWhereUniqueInput
    create: XOR<ProfileToPromptCreateWithoutProfileInput, ProfileToPromptUncheckedCreateWithoutProfileInput>
  }

  export type ProfileToPromptCreateManyProfileInputEnvelope = {
    data: ProfileToPromptCreateManyProfileInput | ProfileToPromptCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type PromptResponseCreateWithoutProfileInput = {
    id?: string
    response?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompt: PromptCreateNestedOneWithoutResponsesInput
    model: LLMModelCreateNestedOneWithoutResponsesInput
    lengthMetrics?: LengthMetricsCreateNestedOneWithoutPromptResponseInput
  }

  export type PromptResponseUncheckedCreateWithoutProfileInput = {
    id?: string
    prompt_id: string
    model_id: string
    response?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lengthMetrics?: LengthMetricsUncheckedCreateNestedOneWithoutPromptResponseInput
  }

  export type PromptResponseCreateOrConnectWithoutProfileInput = {
    where: PromptResponseWhereUniqueInput
    create: XOR<PromptResponseCreateWithoutProfileInput, PromptResponseUncheckedCreateWithoutProfileInput>
  }

  export type PromptResponseCreateManyProfileInputEnvelope = {
    data: PromptResponseCreateManyProfileInput | PromptResponseCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type ProfileToPromptUpsertWithWhereUniqueWithoutProfileInput = {
    where: ProfileToPromptWhereUniqueInput
    update: XOR<ProfileToPromptUpdateWithoutProfileInput, ProfileToPromptUncheckedUpdateWithoutProfileInput>
    create: XOR<ProfileToPromptCreateWithoutProfileInput, ProfileToPromptUncheckedCreateWithoutProfileInput>
  }

  export type ProfileToPromptUpdateWithWhereUniqueWithoutProfileInput = {
    where: ProfileToPromptWhereUniqueInput
    data: XOR<ProfileToPromptUpdateWithoutProfileInput, ProfileToPromptUncheckedUpdateWithoutProfileInput>
  }

  export type ProfileToPromptUpdateManyWithWhereWithoutProfileInput = {
    where: ProfileToPromptScalarWhereInput
    data: XOR<ProfileToPromptUpdateManyMutationInput, ProfileToPromptUncheckedUpdateManyWithoutProfileInput>
  }

  export type ProfileToPromptScalarWhereInput = {
    AND?: ProfileToPromptScalarWhereInput | ProfileToPromptScalarWhereInput[]
    OR?: ProfileToPromptScalarWhereInput[]
    NOT?: ProfileToPromptScalarWhereInput | ProfileToPromptScalarWhereInput[]
    profile_id?: UuidFilter<"ProfileToPrompt"> | string
    prompt_id?: UuidFilter<"ProfileToPrompt"> | string
    createdAt?: DateTimeFilter<"ProfileToPrompt"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileToPrompt"> | Date | string
  }

  export type PromptResponseUpsertWithWhereUniqueWithoutProfileInput = {
    where: PromptResponseWhereUniqueInput
    update: XOR<PromptResponseUpdateWithoutProfileInput, PromptResponseUncheckedUpdateWithoutProfileInput>
    create: XOR<PromptResponseCreateWithoutProfileInput, PromptResponseUncheckedCreateWithoutProfileInput>
  }

  export type PromptResponseUpdateWithWhereUniqueWithoutProfileInput = {
    where: PromptResponseWhereUniqueInput
    data: XOR<PromptResponseUpdateWithoutProfileInput, PromptResponseUncheckedUpdateWithoutProfileInput>
  }

  export type PromptResponseUpdateManyWithWhereWithoutProfileInput = {
    where: PromptResponseScalarWhereInput
    data: XOR<PromptResponseUpdateManyMutationInput, PromptResponseUncheckedUpdateManyWithoutProfileInput>
  }

  export type ProfileToPromptCreateWithoutPromptInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: SamplingProfileCreateNestedOneWithoutPromptsInput
  }

  export type ProfileToPromptUncheckedCreateWithoutPromptInput = {
    profile_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileToPromptCreateOrConnectWithoutPromptInput = {
    where: ProfileToPromptWhereUniqueInput
    create: XOR<ProfileToPromptCreateWithoutPromptInput, ProfileToPromptUncheckedCreateWithoutPromptInput>
  }

  export type ProfileToPromptCreateManyPromptInputEnvelope = {
    data: ProfileToPromptCreateManyPromptInput | ProfileToPromptCreateManyPromptInput[]
    skipDuplicates?: boolean
  }

  export type ModelToPromptCreateWithoutPromptInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    model: LLMModelCreateNestedOneWithoutPromptsInput
  }

  export type ModelToPromptUncheckedCreateWithoutPromptInput = {
    model_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelToPromptCreateOrConnectWithoutPromptInput = {
    where: ModelToPromptWhereUniqueInput
    create: XOR<ModelToPromptCreateWithoutPromptInput, ModelToPromptUncheckedCreateWithoutPromptInput>
  }

  export type ModelToPromptCreateManyPromptInputEnvelope = {
    data: ModelToPromptCreateManyPromptInput | ModelToPromptCreateManyPromptInput[]
    skipDuplicates?: boolean
  }

  export type PromptResponseCreateWithoutPromptInput = {
    id?: string
    response?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    model: LLMModelCreateNestedOneWithoutResponsesInput
    profile: SamplingProfileCreateNestedOneWithoutResponsesInput
    lengthMetrics?: LengthMetricsCreateNestedOneWithoutPromptResponseInput
  }

  export type PromptResponseUncheckedCreateWithoutPromptInput = {
    id?: string
    model_id: string
    profile_id: string
    response?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lengthMetrics?: LengthMetricsUncheckedCreateNestedOneWithoutPromptResponseInput
  }

  export type PromptResponseCreateOrConnectWithoutPromptInput = {
    where: PromptResponseWhereUniqueInput
    create: XOR<PromptResponseCreateWithoutPromptInput, PromptResponseUncheckedCreateWithoutPromptInput>
  }

  export type PromptResponseCreateManyPromptInputEnvelope = {
    data: PromptResponseCreateManyPromptInput | PromptResponseCreateManyPromptInput[]
    skipDuplicates?: boolean
  }

  export type ProfileToPromptUpsertWithWhereUniqueWithoutPromptInput = {
    where: ProfileToPromptWhereUniqueInput
    update: XOR<ProfileToPromptUpdateWithoutPromptInput, ProfileToPromptUncheckedUpdateWithoutPromptInput>
    create: XOR<ProfileToPromptCreateWithoutPromptInput, ProfileToPromptUncheckedCreateWithoutPromptInput>
  }

  export type ProfileToPromptUpdateWithWhereUniqueWithoutPromptInput = {
    where: ProfileToPromptWhereUniqueInput
    data: XOR<ProfileToPromptUpdateWithoutPromptInput, ProfileToPromptUncheckedUpdateWithoutPromptInput>
  }

  export type ProfileToPromptUpdateManyWithWhereWithoutPromptInput = {
    where: ProfileToPromptScalarWhereInput
    data: XOR<ProfileToPromptUpdateManyMutationInput, ProfileToPromptUncheckedUpdateManyWithoutPromptInput>
  }

  export type ModelToPromptUpsertWithWhereUniqueWithoutPromptInput = {
    where: ModelToPromptWhereUniqueInput
    update: XOR<ModelToPromptUpdateWithoutPromptInput, ModelToPromptUncheckedUpdateWithoutPromptInput>
    create: XOR<ModelToPromptCreateWithoutPromptInput, ModelToPromptUncheckedCreateWithoutPromptInput>
  }

  export type ModelToPromptUpdateWithWhereUniqueWithoutPromptInput = {
    where: ModelToPromptWhereUniqueInput
    data: XOR<ModelToPromptUpdateWithoutPromptInput, ModelToPromptUncheckedUpdateWithoutPromptInput>
  }

  export type ModelToPromptUpdateManyWithWhereWithoutPromptInput = {
    where: ModelToPromptScalarWhereInput
    data: XOR<ModelToPromptUpdateManyMutationInput, ModelToPromptUncheckedUpdateManyWithoutPromptInput>
  }

  export type PromptResponseUpsertWithWhereUniqueWithoutPromptInput = {
    where: PromptResponseWhereUniqueInput
    update: XOR<PromptResponseUpdateWithoutPromptInput, PromptResponseUncheckedUpdateWithoutPromptInput>
    create: XOR<PromptResponseCreateWithoutPromptInput, PromptResponseUncheckedCreateWithoutPromptInput>
  }

  export type PromptResponseUpdateWithWhereUniqueWithoutPromptInput = {
    where: PromptResponseWhereUniqueInput
    data: XOR<PromptResponseUpdateWithoutPromptInput, PromptResponseUncheckedUpdateWithoutPromptInput>
  }

  export type PromptResponseUpdateManyWithWhereWithoutPromptInput = {
    where: PromptResponseScalarWhereInput
    data: XOR<PromptResponseUpdateManyMutationInput, PromptResponseUncheckedUpdateManyWithoutPromptInput>
  }

  export type LLMModelCreateWithoutPromptsInput = {
    id?: string
    name: string
    rpm: number
    rpd: number
    tpm: number
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: PromptResponseCreateNestedManyWithoutModelInput
  }

  export type LLMModelUncheckedCreateWithoutPromptsInput = {
    id?: string
    name: string
    rpm: number
    rpd: number
    tpm: number
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: PromptResponseUncheckedCreateNestedManyWithoutModelInput
  }

  export type LLMModelCreateOrConnectWithoutPromptsInput = {
    where: LLMModelWhereUniqueInput
    create: XOR<LLMModelCreateWithoutPromptsInput, LLMModelUncheckedCreateWithoutPromptsInput>
  }

  export type PromptCreateWithoutModelsInput = {
    id?: string
    prompt: string
    tokens?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profiles?: ProfileToPromptCreateNestedManyWithoutPromptInput
    responses?: PromptResponseCreateNestedManyWithoutPromptInput
  }

  export type PromptUncheckedCreateWithoutModelsInput = {
    id?: string
    prompt: string
    tokens?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profiles?: ProfileToPromptUncheckedCreateNestedManyWithoutPromptInput
    responses?: PromptResponseUncheckedCreateNestedManyWithoutPromptInput
  }

  export type PromptCreateOrConnectWithoutModelsInput = {
    where: PromptWhereUniqueInput
    create: XOR<PromptCreateWithoutModelsInput, PromptUncheckedCreateWithoutModelsInput>
  }

  export type LLMModelUpsertWithoutPromptsInput = {
    update: XOR<LLMModelUpdateWithoutPromptsInput, LLMModelUncheckedUpdateWithoutPromptsInput>
    create: XOR<LLMModelCreateWithoutPromptsInput, LLMModelUncheckedCreateWithoutPromptsInput>
    where?: LLMModelWhereInput
  }

  export type LLMModelUpdateToOneWithWhereWithoutPromptsInput = {
    where?: LLMModelWhereInput
    data: XOR<LLMModelUpdateWithoutPromptsInput, LLMModelUncheckedUpdateWithoutPromptsInput>
  }

  export type LLMModelUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rpm?: IntFieldUpdateOperationsInput | number
    rpd?: IntFieldUpdateOperationsInput | number
    tpm?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: PromptResponseUpdateManyWithoutModelNestedInput
  }

  export type LLMModelUncheckedUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rpm?: IntFieldUpdateOperationsInput | number
    rpd?: IntFieldUpdateOperationsInput | number
    tpm?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: PromptResponseUncheckedUpdateManyWithoutModelNestedInput
  }

  export type PromptUpsertWithoutModelsInput = {
    update: XOR<PromptUpdateWithoutModelsInput, PromptUncheckedUpdateWithoutModelsInput>
    create: XOR<PromptCreateWithoutModelsInput, PromptUncheckedCreateWithoutModelsInput>
    where?: PromptWhereInput
  }

  export type PromptUpdateToOneWithWhereWithoutModelsInput = {
    where?: PromptWhereInput
    data: XOR<PromptUpdateWithoutModelsInput, PromptUncheckedUpdateWithoutModelsInput>
  }

  export type PromptUpdateWithoutModelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfileToPromptUpdateManyWithoutPromptNestedInput
    responses?: PromptResponseUpdateManyWithoutPromptNestedInput
  }

  export type PromptUncheckedUpdateWithoutModelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfileToPromptUncheckedUpdateManyWithoutPromptNestedInput
    responses?: PromptResponseUncheckedUpdateManyWithoutPromptNestedInput
  }

  export type SamplingProfileCreateWithoutPromptsInput = {
    id?: string
    profile_name: string
    temperature?: number
    top_k?: number
    top_p?: number
    presence_penalty?: number | null
    frequency_penalty?: number | null
    max_tokens?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: PromptResponseCreateNestedManyWithoutProfileInput
  }

  export type SamplingProfileUncheckedCreateWithoutPromptsInput = {
    id?: string
    profile_name: string
    temperature?: number
    top_k?: number
    top_p?: number
    presence_penalty?: number | null
    frequency_penalty?: number | null
    max_tokens?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: PromptResponseUncheckedCreateNestedManyWithoutProfileInput
  }

  export type SamplingProfileCreateOrConnectWithoutPromptsInput = {
    where: SamplingProfileWhereUniqueInput
    create: XOR<SamplingProfileCreateWithoutPromptsInput, SamplingProfileUncheckedCreateWithoutPromptsInput>
  }

  export type PromptCreateWithoutProfilesInput = {
    id?: string
    prompt: string
    tokens?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ModelToPromptCreateNestedManyWithoutPromptInput
    responses?: PromptResponseCreateNestedManyWithoutPromptInput
  }

  export type PromptUncheckedCreateWithoutProfilesInput = {
    id?: string
    prompt: string
    tokens?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ModelToPromptUncheckedCreateNestedManyWithoutPromptInput
    responses?: PromptResponseUncheckedCreateNestedManyWithoutPromptInput
  }

  export type PromptCreateOrConnectWithoutProfilesInput = {
    where: PromptWhereUniqueInput
    create: XOR<PromptCreateWithoutProfilesInput, PromptUncheckedCreateWithoutProfilesInput>
  }

  export type SamplingProfileUpsertWithoutPromptsInput = {
    update: XOR<SamplingProfileUpdateWithoutPromptsInput, SamplingProfileUncheckedUpdateWithoutPromptsInput>
    create: XOR<SamplingProfileCreateWithoutPromptsInput, SamplingProfileUncheckedCreateWithoutPromptsInput>
    where?: SamplingProfileWhereInput
  }

  export type SamplingProfileUpdateToOneWithWhereWithoutPromptsInput = {
    where?: SamplingProfileWhereInput
    data: XOR<SamplingProfileUpdateWithoutPromptsInput, SamplingProfileUncheckedUpdateWithoutPromptsInput>
  }

  export type SamplingProfileUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_name?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    top_k?: FloatFieldUpdateOperationsInput | number
    top_p?: FloatFieldUpdateOperationsInput | number
    presence_penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    frequency_penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    max_tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: PromptResponseUpdateManyWithoutProfileNestedInput
  }

  export type SamplingProfileUncheckedUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_name?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    top_k?: FloatFieldUpdateOperationsInput | number
    top_p?: FloatFieldUpdateOperationsInput | number
    presence_penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    frequency_penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    max_tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: PromptResponseUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type PromptUpsertWithoutProfilesInput = {
    update: XOR<PromptUpdateWithoutProfilesInput, PromptUncheckedUpdateWithoutProfilesInput>
    create: XOR<PromptCreateWithoutProfilesInput, PromptUncheckedCreateWithoutProfilesInput>
    where?: PromptWhereInput
  }

  export type PromptUpdateToOneWithWhereWithoutProfilesInput = {
    where?: PromptWhereInput
    data: XOR<PromptUpdateWithoutProfilesInput, PromptUncheckedUpdateWithoutProfilesInput>
  }

  export type PromptUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ModelToPromptUpdateManyWithoutPromptNestedInput
    responses?: PromptResponseUpdateManyWithoutPromptNestedInput
  }

  export type PromptUncheckedUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ModelToPromptUncheckedUpdateManyWithoutPromptNestedInput
    responses?: PromptResponseUncheckedUpdateManyWithoutPromptNestedInput
  }

  export type PromptCreateWithoutResponsesInput = {
    id?: string
    prompt: string
    tokens?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profiles?: ProfileToPromptCreateNestedManyWithoutPromptInput
    models?: ModelToPromptCreateNestedManyWithoutPromptInput
  }

  export type PromptUncheckedCreateWithoutResponsesInput = {
    id?: string
    prompt: string
    tokens?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profiles?: ProfileToPromptUncheckedCreateNestedManyWithoutPromptInput
    models?: ModelToPromptUncheckedCreateNestedManyWithoutPromptInput
  }

  export type PromptCreateOrConnectWithoutResponsesInput = {
    where: PromptWhereUniqueInput
    create: XOR<PromptCreateWithoutResponsesInput, PromptUncheckedCreateWithoutResponsesInput>
  }

  export type LLMModelCreateWithoutResponsesInput = {
    id?: string
    name: string
    rpm: number
    rpd: number
    tpm: number
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: ModelToPromptCreateNestedManyWithoutModelInput
  }

  export type LLMModelUncheckedCreateWithoutResponsesInput = {
    id?: string
    name: string
    rpm: number
    rpd: number
    tpm: number
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: ModelToPromptUncheckedCreateNestedManyWithoutModelInput
  }

  export type LLMModelCreateOrConnectWithoutResponsesInput = {
    where: LLMModelWhereUniqueInput
    create: XOR<LLMModelCreateWithoutResponsesInput, LLMModelUncheckedCreateWithoutResponsesInput>
  }

  export type SamplingProfileCreateWithoutResponsesInput = {
    id?: string
    profile_name: string
    temperature?: number
    top_k?: number
    top_p?: number
    presence_penalty?: number | null
    frequency_penalty?: number | null
    max_tokens?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: ProfileToPromptCreateNestedManyWithoutProfileInput
  }

  export type SamplingProfileUncheckedCreateWithoutResponsesInput = {
    id?: string
    profile_name: string
    temperature?: number
    top_k?: number
    top_p?: number
    presence_penalty?: number | null
    frequency_penalty?: number | null
    max_tokens?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: ProfileToPromptUncheckedCreateNestedManyWithoutProfileInput
  }

  export type SamplingProfileCreateOrConnectWithoutResponsesInput = {
    where: SamplingProfileWhereUniqueInput
    create: XOR<SamplingProfileCreateWithoutResponsesInput, SamplingProfileUncheckedCreateWithoutResponsesInput>
  }

  export type LengthMetricsCreateWithoutPromptResponseInput = {
    id?: string
    response_token_count: number
    response_sentence_count: number
    response_word_count: number
    avg_sentence_length: Decimal | DecimalJsLike | number | string
    response_to_prompt_ratio: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    extras?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LengthMetricsUncheckedCreateWithoutPromptResponseInput = {
    id?: string
    response_token_count: number
    response_sentence_count: number
    response_word_count: number
    avg_sentence_length: Decimal | DecimalJsLike | number | string
    response_to_prompt_ratio: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    extras?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LengthMetricsCreateOrConnectWithoutPromptResponseInput = {
    where: LengthMetricsWhereUniqueInput
    create: XOR<LengthMetricsCreateWithoutPromptResponseInput, LengthMetricsUncheckedCreateWithoutPromptResponseInput>
  }

  export type PromptUpsertWithoutResponsesInput = {
    update: XOR<PromptUpdateWithoutResponsesInput, PromptUncheckedUpdateWithoutResponsesInput>
    create: XOR<PromptCreateWithoutResponsesInput, PromptUncheckedCreateWithoutResponsesInput>
    where?: PromptWhereInput
  }

  export type PromptUpdateToOneWithWhereWithoutResponsesInput = {
    where?: PromptWhereInput
    data: XOR<PromptUpdateWithoutResponsesInput, PromptUncheckedUpdateWithoutResponsesInput>
  }

  export type PromptUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfileToPromptUpdateManyWithoutPromptNestedInput
    models?: ModelToPromptUpdateManyWithoutPromptNestedInput
  }

  export type PromptUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfileToPromptUncheckedUpdateManyWithoutPromptNestedInput
    models?: ModelToPromptUncheckedUpdateManyWithoutPromptNestedInput
  }

  export type LLMModelUpsertWithoutResponsesInput = {
    update: XOR<LLMModelUpdateWithoutResponsesInput, LLMModelUncheckedUpdateWithoutResponsesInput>
    create: XOR<LLMModelCreateWithoutResponsesInput, LLMModelUncheckedCreateWithoutResponsesInput>
    where?: LLMModelWhereInput
  }

  export type LLMModelUpdateToOneWithWhereWithoutResponsesInput = {
    where?: LLMModelWhereInput
    data: XOR<LLMModelUpdateWithoutResponsesInput, LLMModelUncheckedUpdateWithoutResponsesInput>
  }

  export type LLMModelUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rpm?: IntFieldUpdateOperationsInput | number
    rpd?: IntFieldUpdateOperationsInput | number
    tpm?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: ModelToPromptUpdateManyWithoutModelNestedInput
  }

  export type LLMModelUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rpm?: IntFieldUpdateOperationsInput | number
    rpd?: IntFieldUpdateOperationsInput | number
    tpm?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: ModelToPromptUncheckedUpdateManyWithoutModelNestedInput
  }

  export type SamplingProfileUpsertWithoutResponsesInput = {
    update: XOR<SamplingProfileUpdateWithoutResponsesInput, SamplingProfileUncheckedUpdateWithoutResponsesInput>
    create: XOR<SamplingProfileCreateWithoutResponsesInput, SamplingProfileUncheckedCreateWithoutResponsesInput>
    where?: SamplingProfileWhereInput
  }

  export type SamplingProfileUpdateToOneWithWhereWithoutResponsesInput = {
    where?: SamplingProfileWhereInput
    data: XOR<SamplingProfileUpdateWithoutResponsesInput, SamplingProfileUncheckedUpdateWithoutResponsesInput>
  }

  export type SamplingProfileUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_name?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    top_k?: FloatFieldUpdateOperationsInput | number
    top_p?: FloatFieldUpdateOperationsInput | number
    presence_penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    frequency_penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    max_tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: ProfileToPromptUpdateManyWithoutProfileNestedInput
  }

  export type SamplingProfileUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_name?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    top_k?: FloatFieldUpdateOperationsInput | number
    top_p?: FloatFieldUpdateOperationsInput | number
    presence_penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    frequency_penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    max_tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: ProfileToPromptUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type LengthMetricsUpsertWithoutPromptResponseInput = {
    update: XOR<LengthMetricsUpdateWithoutPromptResponseInput, LengthMetricsUncheckedUpdateWithoutPromptResponseInput>
    create: XOR<LengthMetricsCreateWithoutPromptResponseInput, LengthMetricsUncheckedCreateWithoutPromptResponseInput>
    where?: LengthMetricsWhereInput
  }

  export type LengthMetricsUpdateToOneWithWhereWithoutPromptResponseInput = {
    where?: LengthMetricsWhereInput
    data: XOR<LengthMetricsUpdateWithoutPromptResponseInput, LengthMetricsUncheckedUpdateWithoutPromptResponseInput>
  }

  export type LengthMetricsUpdateWithoutPromptResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_token_count?: IntFieldUpdateOperationsInput | number
    response_sentence_count?: IntFieldUpdateOperationsInput | number
    response_word_count?: IntFieldUpdateOperationsInput | number
    avg_sentence_length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    response_to_prompt_ratio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extras?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LengthMetricsUncheckedUpdateWithoutPromptResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_token_count?: IntFieldUpdateOperationsInput | number
    response_sentence_count?: IntFieldUpdateOperationsInput | number
    response_word_count?: IntFieldUpdateOperationsInput | number
    avg_sentence_length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    response_to_prompt_ratio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extras?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PromptResponseCreateWithoutLengthMetricsInput = {
    id?: string
    response?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompt: PromptCreateNestedOneWithoutResponsesInput
    model: LLMModelCreateNestedOneWithoutResponsesInput
    profile: SamplingProfileCreateNestedOneWithoutResponsesInput
  }

  export type PromptResponseUncheckedCreateWithoutLengthMetricsInput = {
    id?: string
    prompt_id: string
    model_id: string
    profile_id: string
    response?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptResponseCreateOrConnectWithoutLengthMetricsInput = {
    where: PromptResponseWhereUniqueInput
    create: XOR<PromptResponseCreateWithoutLengthMetricsInput, PromptResponseUncheckedCreateWithoutLengthMetricsInput>
  }

  export type PromptResponseUpsertWithoutLengthMetricsInput = {
    update: XOR<PromptResponseUpdateWithoutLengthMetricsInput, PromptResponseUncheckedUpdateWithoutLengthMetricsInput>
    create: XOR<PromptResponseCreateWithoutLengthMetricsInput, PromptResponseUncheckedCreateWithoutLengthMetricsInput>
    where?: PromptResponseWhereInput
  }

  export type PromptResponseUpdateToOneWithWhereWithoutLengthMetricsInput = {
    where?: PromptResponseWhereInput
    data: XOR<PromptResponseUpdateWithoutLengthMetricsInput, PromptResponseUncheckedUpdateWithoutLengthMetricsInput>
  }

  export type PromptResponseUpdateWithoutLengthMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompt?: PromptUpdateOneRequiredWithoutResponsesNestedInput
    model?: LLMModelUpdateOneRequiredWithoutResponsesNestedInput
    profile?: SamplingProfileUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type PromptResponseUncheckedUpdateWithoutLengthMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt_id?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
    profile_id?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelToPromptCreateManyModelInput = {
    prompt_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptResponseCreateManyModelInput = {
    id?: string
    prompt_id: string
    profile_id: string
    response?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelToPromptUpdateWithoutModelInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompt?: PromptUpdateOneRequiredWithoutModelsNestedInput
  }

  export type ModelToPromptUncheckedUpdateWithoutModelInput = {
    prompt_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelToPromptUncheckedUpdateManyWithoutModelInput = {
    prompt_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptResponseUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompt?: PromptUpdateOneRequiredWithoutResponsesNestedInput
    profile?: SamplingProfileUpdateOneRequiredWithoutResponsesNestedInput
    lengthMetrics?: LengthMetricsUpdateOneWithoutPromptResponseNestedInput
  }

  export type PromptResponseUncheckedUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt_id?: StringFieldUpdateOperationsInput | string
    profile_id?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lengthMetrics?: LengthMetricsUncheckedUpdateOneWithoutPromptResponseNestedInput
  }

  export type PromptResponseUncheckedUpdateManyWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt_id?: StringFieldUpdateOperationsInput | string
    profile_id?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileToPromptCreateManyProfileInput = {
    prompt_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptResponseCreateManyProfileInput = {
    id?: string
    prompt_id: string
    model_id: string
    response?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileToPromptUpdateWithoutProfileInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompt?: PromptUpdateOneRequiredWithoutProfilesNestedInput
  }

  export type ProfileToPromptUncheckedUpdateWithoutProfileInput = {
    prompt_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileToPromptUncheckedUpdateManyWithoutProfileInput = {
    prompt_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptResponseUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompt?: PromptUpdateOneRequiredWithoutResponsesNestedInput
    model?: LLMModelUpdateOneRequiredWithoutResponsesNestedInput
    lengthMetrics?: LengthMetricsUpdateOneWithoutPromptResponseNestedInput
  }

  export type PromptResponseUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt_id?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lengthMetrics?: LengthMetricsUncheckedUpdateOneWithoutPromptResponseNestedInput
  }

  export type PromptResponseUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt_id?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileToPromptCreateManyPromptInput = {
    profile_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelToPromptCreateManyPromptInput = {
    model_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptResponseCreateManyPromptInput = {
    id?: string
    model_id: string
    profile_id: string
    response?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileToPromptUpdateWithoutPromptInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: SamplingProfileUpdateOneRequiredWithoutPromptsNestedInput
  }

  export type ProfileToPromptUncheckedUpdateWithoutPromptInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileToPromptUncheckedUpdateManyWithoutPromptInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelToPromptUpdateWithoutPromptInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: LLMModelUpdateOneRequiredWithoutPromptsNestedInput
  }

  export type ModelToPromptUncheckedUpdateWithoutPromptInput = {
    model_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelToPromptUncheckedUpdateManyWithoutPromptInput = {
    model_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptResponseUpdateWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: LLMModelUpdateOneRequiredWithoutResponsesNestedInput
    profile?: SamplingProfileUpdateOneRequiredWithoutResponsesNestedInput
    lengthMetrics?: LengthMetricsUpdateOneWithoutPromptResponseNestedInput
  }

  export type PromptResponseUncheckedUpdateWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
    profile_id?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lengthMetrics?: LengthMetricsUncheckedUpdateOneWithoutPromptResponseNestedInput
  }

  export type PromptResponseUncheckedUpdateManyWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string
    model_id?: StringFieldUpdateOperationsInput | string
    profile_id?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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