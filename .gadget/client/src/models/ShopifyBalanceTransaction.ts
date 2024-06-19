import {
  GadgetConnection,
  GadgetRecord,
  GadgetRecordImplementation,
  GadgetRecordList,
  GadgetNonUniqueDataError,
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner,
  DefaultSelection,
  LimitToKnownKeys,
  Selectable
} from "@gadgetinc/api-client-core";

import {
  Query,
  ExplicitNestingRequired,
  Select,
  DeepFilterNever,
  IDsList,
      ShopifyBalanceTransaction,
      ShopifyBalanceTransactionSort,
      ShopifyBalanceTransactionFilter,
      AvailableShopifyBalanceTransactionSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyBalanceTransactionSelection = {
  "__typename": true,
  "adjustmentOrderTransactions": true,
  "amount": true,
  "createdAt": true,
  "currency": true,
  "fee": true,
  "id": true,
  "net": true,
  "payoutStatus": true,
  "processedAt": true,
  "sourceId": true,
  "sourceType": true,
  "test": true,
  "type": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyBalanceTransaction". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyBalanceTransactionOrDefault<Options extends Selectable<AvailableShopifyBalanceTransactionSelection>> = DeepFilterNever<
  Select<
    ShopifyBalanceTransaction,
    DefaultSelection<
      AvailableShopifyBalanceTransactionSelection,
      Options,
      typeof DefaultShopifyBalanceTransactionSelection
    >
  >>;

/** Options that can be passed to the `ShopifyBalanceTransactionManager#findOne` method */
export interface FindOneShopifyBalanceTransactionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyBalanceTransactionSelection;
};

/** Options that can be passed to the `ShopifyBalanceTransactionManager#maybeFindOne` method */
export interface MaybeFindOneShopifyBalanceTransactionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyBalanceTransactionSelection;
};

/** Options that can be passed to the `ShopifyBalanceTransactionManager#findMany` method */
export interface FindManyShopifyBalanceTransactionsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyBalanceTransactionSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyBalanceTransactionSort | ShopifyBalanceTransactionSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyBalanceTransactionFilter | ShopifyBalanceTransactionFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyBalanceTransactionManager#findFirst` method */
export interface FindFirstShopifyBalanceTransactionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyBalanceTransactionSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyBalanceTransactionSort | ShopifyBalanceTransactionSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyBalanceTransactionFilter | ShopifyBalanceTransactionFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyBalanceTransactionManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyBalanceTransactionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyBalanceTransactionSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyBalanceTransactionSort | ShopifyBalanceTransactionSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyBalanceTransactionFilter | ShopifyBalanceTransactionFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyBalanceTransaction";
const pluralApiIdentifier = "shopifyBalanceTransactions";





/** All the actions available at the collection level and record level for "shopifyBalanceTransaction" */
export class ShopifyBalanceTransactionManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyBalanceTransaction by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyBalanceTransactionOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyBalanceTransactionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyBalanceTransactionOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyBalanceTransaction";
  modelApiIdentifier: "shopifyBalanceTransaction";
  defaultSelection: typeof DefaultShopifyBalanceTransactionSelection;
  selectionType: AvailableShopifyBalanceTransactionSelection;
  optionsType: FindOneShopifyBalanceTransactionOptions;
  schemaType: Query["shopifyBalanceTransaction"];
} = Object.assign(
  async <Options extends FindOneShopifyBalanceTransactionOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyBalanceTransactionOptions>) => {
    return await findOneRunner<SelectedShopifyBalanceTransactionOrDefault<Options>>(
      this,
      "shopifyBalanceTransaction",
      id,
      DefaultShopifyBalanceTransactionSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyBalanceTransaction",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyBalanceTransactionSelection,
  } as any
)

  
    /**
 * Finds one shopifyBalanceTransaction by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyBalanceTransactionOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyBalanceTransactionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyBalanceTransactionOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyBalanceTransaction";
  modelApiIdentifier: "shopifyBalanceTransaction";
  defaultSelection: typeof DefaultShopifyBalanceTransactionSelection;
  selectionType: AvailableShopifyBalanceTransactionSelection;
  optionsType: MaybeFindOneShopifyBalanceTransactionOptions;
  schemaType: Query["shopifyBalanceTransaction"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyBalanceTransactionOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyBalanceTransactionOptions>) => {
    const record = await findOneRunner<SelectedShopifyBalanceTransactionOrDefault<Options>>(
      this,
      "shopifyBalanceTransaction",
      id,
      DefaultShopifyBalanceTransactionSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyBalanceTransaction",
    modelApiIdentifier: "shopifyBalanceTransaction",
    defaultSelection: DefaultShopifyBalanceTransactionSelection,
  } as any
)

  
    /**
 * Finds many shopifyBalanceTransaction. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyBalanceTransactionsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyBalanceTransactionsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyBalanceTransactionOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyBalanceTransactions";
  modelApiIdentifier: "shopifyBalanceTransaction";
  defaultSelection: typeof DefaultShopifyBalanceTransactionSelection;
  selectionType: AvailableShopifyBalanceTransactionSelection;
  optionsType: FindManyShopifyBalanceTransactionsOptions;
  schemaType: Query["shopifyBalanceTransaction"];
} = Object.assign(
  async <Options extends FindManyShopifyBalanceTransactionsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyBalanceTransactionsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyBalanceTransactionOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyBalanceTransactionOrDefault<Options>>(
      this,
      "shopifyBalanceTransactions",
      DefaultShopifyBalanceTransactionSelection,
      "shopifyBalanceTransaction",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyBalanceTransactions",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyBalanceTransactionSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyBalanceTransaction. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyBalanceTransactionOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyBalanceTransactionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyBalanceTransactionOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyBalanceTransactions";
  modelApiIdentifier: "shopifyBalanceTransaction";
  defaultSelection: typeof DefaultShopifyBalanceTransactionSelection;
  selectionType: AvailableShopifyBalanceTransactionSelection;
  optionsType: FindFirstShopifyBalanceTransactionOptions;
  schemaType: Query["shopifyBalanceTransaction"];
} = Object.assign(
  async <Options extends FindFirstShopifyBalanceTransactionOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyBalanceTransactionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyBalanceTransactionOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyBalanceTransactionOrDefault<Options>>(
      this,
      "shopifyBalanceTransactions",
      DefaultShopifyBalanceTransactionSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyBalanceTransactions",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyBalanceTransactionSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyBalanceTransaction. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyBalanceTransactionOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyBalanceTransactionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyBalanceTransactionOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyBalanceTransactions";
  modelApiIdentifier: "shopifyBalanceTransaction";
  defaultSelection: typeof DefaultShopifyBalanceTransactionSelection;
  selectionType: AvailableShopifyBalanceTransactionSelection;
  optionsType: MaybeFindFirstShopifyBalanceTransactionOptions;
  schemaType: Query["shopifyBalanceTransaction"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyBalanceTransactionOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyBalanceTransactionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyBalanceTransactionOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyBalanceTransactionOrDefault<Options>>(
      this,
      "shopifyBalanceTransactions",
      DefaultShopifyBalanceTransactionSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyBalanceTransactions",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyBalanceTransactionSelection,
  } as any
);

  
}
