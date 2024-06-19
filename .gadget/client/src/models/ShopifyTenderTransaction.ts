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
      ShopifyTenderTransaction,
      ShopifyTenderTransactionSort,
      ShopifyTenderTransactionFilter,
      AvailableShopifyTenderTransactionSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyTenderTransactionSelection = {
  "__typename": true,
  "amount": true,
  "createdAt": true,
  "currency": true,
  "id": true,
  "paymentDetails": true,
  "paymentMethod": true,
  "processedAt": true,
  "remoteReference": true,
  "test": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyTenderTransaction". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyTenderTransactionOrDefault<Options extends Selectable<AvailableShopifyTenderTransactionSelection>> = DeepFilterNever<
  Select<
    ShopifyTenderTransaction,
    DefaultSelection<
      AvailableShopifyTenderTransactionSelection,
      Options,
      typeof DefaultShopifyTenderTransactionSelection
    >
  >>;

/** Options that can be passed to the `ShopifyTenderTransactionManager#findOne` method */
export interface FindOneShopifyTenderTransactionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyTenderTransactionSelection;
};

/** Options that can be passed to the `ShopifyTenderTransactionManager#maybeFindOne` method */
export interface MaybeFindOneShopifyTenderTransactionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyTenderTransactionSelection;
};

/** Options that can be passed to the `ShopifyTenderTransactionManager#findMany` method */
export interface FindManyShopifyTenderTransactionsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyTenderTransactionSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyTenderTransactionSort | ShopifyTenderTransactionSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyTenderTransactionFilter | ShopifyTenderTransactionFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyTenderTransactionManager#findFirst` method */
export interface FindFirstShopifyTenderTransactionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyTenderTransactionSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyTenderTransactionSort | ShopifyTenderTransactionSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyTenderTransactionFilter | ShopifyTenderTransactionFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyTenderTransactionManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyTenderTransactionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyTenderTransactionSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyTenderTransactionSort | ShopifyTenderTransactionSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyTenderTransactionFilter | ShopifyTenderTransactionFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyTenderTransaction";
const pluralApiIdentifier = "shopifyTenderTransactions";





/** All the actions available at the collection level and record level for "shopifyTenderTransaction" */
export class ShopifyTenderTransactionManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyTenderTransaction by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyTenderTransactionOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyTenderTransactionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyTenderTransactionOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyTenderTransaction";
  modelApiIdentifier: "shopifyTenderTransaction";
  defaultSelection: typeof DefaultShopifyTenderTransactionSelection;
  selectionType: AvailableShopifyTenderTransactionSelection;
  optionsType: FindOneShopifyTenderTransactionOptions;
  schemaType: Query["shopifyTenderTransaction"];
} = Object.assign(
  async <Options extends FindOneShopifyTenderTransactionOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyTenderTransactionOptions>) => {
    return await findOneRunner<SelectedShopifyTenderTransactionOrDefault<Options>>(
      this,
      "shopifyTenderTransaction",
      id,
      DefaultShopifyTenderTransactionSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyTenderTransaction",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyTenderTransactionSelection,
  } as any
)

  
    /**
 * Finds one shopifyTenderTransaction by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyTenderTransactionOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyTenderTransactionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyTenderTransactionOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyTenderTransaction";
  modelApiIdentifier: "shopifyTenderTransaction";
  defaultSelection: typeof DefaultShopifyTenderTransactionSelection;
  selectionType: AvailableShopifyTenderTransactionSelection;
  optionsType: MaybeFindOneShopifyTenderTransactionOptions;
  schemaType: Query["shopifyTenderTransaction"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyTenderTransactionOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyTenderTransactionOptions>) => {
    const record = await findOneRunner<SelectedShopifyTenderTransactionOrDefault<Options>>(
      this,
      "shopifyTenderTransaction",
      id,
      DefaultShopifyTenderTransactionSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyTenderTransaction",
    modelApiIdentifier: "shopifyTenderTransaction",
    defaultSelection: DefaultShopifyTenderTransactionSelection,
  } as any
)

  
    /**
 * Finds many shopifyTenderTransaction. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyTenderTransactionsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyTenderTransactionsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyTenderTransactionOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyTenderTransactions";
  modelApiIdentifier: "shopifyTenderTransaction";
  defaultSelection: typeof DefaultShopifyTenderTransactionSelection;
  selectionType: AvailableShopifyTenderTransactionSelection;
  optionsType: FindManyShopifyTenderTransactionsOptions;
  schemaType: Query["shopifyTenderTransaction"];
} = Object.assign(
  async <Options extends FindManyShopifyTenderTransactionsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyTenderTransactionsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyTenderTransactionOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyTenderTransactionOrDefault<Options>>(
      this,
      "shopifyTenderTransactions",
      DefaultShopifyTenderTransactionSelection,
      "shopifyTenderTransaction",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyTenderTransactions",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyTenderTransactionSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyTenderTransaction. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyTenderTransactionOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyTenderTransactionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyTenderTransactionOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyTenderTransactions";
  modelApiIdentifier: "shopifyTenderTransaction";
  defaultSelection: typeof DefaultShopifyTenderTransactionSelection;
  selectionType: AvailableShopifyTenderTransactionSelection;
  optionsType: FindFirstShopifyTenderTransactionOptions;
  schemaType: Query["shopifyTenderTransaction"];
} = Object.assign(
  async <Options extends FindFirstShopifyTenderTransactionOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyTenderTransactionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyTenderTransactionOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyTenderTransactionOrDefault<Options>>(
      this,
      "shopifyTenderTransactions",
      DefaultShopifyTenderTransactionSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyTenderTransactions",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyTenderTransactionSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyTenderTransaction. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyTenderTransactionOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyTenderTransactionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyTenderTransactionOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyTenderTransactions";
  modelApiIdentifier: "shopifyTenderTransaction";
  defaultSelection: typeof DefaultShopifyTenderTransactionSelection;
  selectionType: AvailableShopifyTenderTransactionSelection;
  optionsType: MaybeFindFirstShopifyTenderTransactionOptions;
  schemaType: Query["shopifyTenderTransaction"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyTenderTransactionOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyTenderTransactionOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyTenderTransactionOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyTenderTransactionOrDefault<Options>>(
      this,
      "shopifyTenderTransactions",
      DefaultShopifyTenderTransactionSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyTenderTransactions",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyTenderTransactionSelection,
  } as any
);

  
}
