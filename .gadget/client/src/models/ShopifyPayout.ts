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
      ShopifyPayout,
      ShopifyPayoutSort,
      ShopifyPayoutFilter,
      AvailableShopifyPayoutSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyPayoutSelection = {
  "__typename": true,
  "amount": true,
  "createdAt": true,
  "currency": true,
  "date": true,
  "id": true,
  "status": true,
  "summary": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyPayout". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyPayoutOrDefault<Options extends Selectable<AvailableShopifyPayoutSelection>> = DeepFilterNever<
  Select<
    ShopifyPayout,
    DefaultSelection<
      AvailableShopifyPayoutSelection,
      Options,
      typeof DefaultShopifyPayoutSelection
    >
  >>;

/** Options that can be passed to the `ShopifyPayoutManager#findOne` method */
export interface FindOneShopifyPayoutOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPayoutSelection;
};

/** Options that can be passed to the `ShopifyPayoutManager#maybeFindOne` method */
export interface MaybeFindOneShopifyPayoutOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPayoutSelection;
};

/** Options that can be passed to the `ShopifyPayoutManager#findMany` method */
export interface FindManyShopifyPayoutsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPayoutSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyPayoutSort | ShopifyPayoutSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyPayoutFilter | ShopifyPayoutFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyPayoutManager#findFirst` method */
export interface FindFirstShopifyPayoutOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPayoutSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyPayoutSort | ShopifyPayoutSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyPayoutFilter | ShopifyPayoutFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyPayoutManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyPayoutOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyPayoutSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyPayoutSort | ShopifyPayoutSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyPayoutFilter | ShopifyPayoutFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyPayout";
const pluralApiIdentifier = "shopifyPayouts";





/** All the actions available at the collection level and record level for "shopifyPayout" */
export class ShopifyPayoutManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyPayout by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyPayoutOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyPayoutOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPayoutOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyPayout";
  modelApiIdentifier: "shopifyPayout";
  defaultSelection: typeof DefaultShopifyPayoutSelection;
  selectionType: AvailableShopifyPayoutSelection;
  optionsType: FindOneShopifyPayoutOptions;
  schemaType: Query["shopifyPayout"];
} = Object.assign(
  async <Options extends FindOneShopifyPayoutOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyPayoutOptions>) => {
    return await findOneRunner<SelectedShopifyPayoutOrDefault<Options>>(
      this,
      "shopifyPayout",
      id,
      DefaultShopifyPayoutSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyPayout",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyPayoutSelection,
  } as any
)

  
    /**
 * Finds one shopifyPayout by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyPayoutOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyPayoutOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPayoutOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyPayout";
  modelApiIdentifier: "shopifyPayout";
  defaultSelection: typeof DefaultShopifyPayoutSelection;
  selectionType: AvailableShopifyPayoutSelection;
  optionsType: MaybeFindOneShopifyPayoutOptions;
  schemaType: Query["shopifyPayout"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyPayoutOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyPayoutOptions>) => {
    const record = await findOneRunner<SelectedShopifyPayoutOrDefault<Options>>(
      this,
      "shopifyPayout",
      id,
      DefaultShopifyPayoutSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyPayout",
    modelApiIdentifier: "shopifyPayout",
    defaultSelection: DefaultShopifyPayoutSelection,
  } as any
)

  
    /**
 * Finds many shopifyPayout. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyPayoutsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyPayoutsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyPayoutOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyPayouts";
  modelApiIdentifier: "shopifyPayout";
  defaultSelection: typeof DefaultShopifyPayoutSelection;
  selectionType: AvailableShopifyPayoutSelection;
  optionsType: FindManyShopifyPayoutsOptions;
  schemaType: Query["shopifyPayout"];
} = Object.assign(
  async <Options extends FindManyShopifyPayoutsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyPayoutsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyPayoutOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyPayoutOrDefault<Options>>(
      this,
      "shopifyPayouts",
      DefaultShopifyPayoutSelection,
      "shopifyPayout",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyPayouts",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyPayoutSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyPayout. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyPayoutOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyPayoutOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPayoutOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyPayouts";
  modelApiIdentifier: "shopifyPayout";
  defaultSelection: typeof DefaultShopifyPayoutSelection;
  selectionType: AvailableShopifyPayoutSelection;
  optionsType: FindFirstShopifyPayoutOptions;
  schemaType: Query["shopifyPayout"];
} = Object.assign(
  async <Options extends FindFirstShopifyPayoutOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyPayoutOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPayoutOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyPayoutOrDefault<Options>>(
      this,
      "shopifyPayouts",
      DefaultShopifyPayoutSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyPayouts",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyPayoutSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyPayout. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyPayoutOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyPayoutOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPayoutOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyPayouts";
  modelApiIdentifier: "shopifyPayout";
  defaultSelection: typeof DefaultShopifyPayoutSelection;
  selectionType: AvailableShopifyPayoutSelection;
  optionsType: MaybeFindFirstShopifyPayoutOptions;
  schemaType: Query["shopifyPayout"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyPayoutOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyPayoutOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyPayoutOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyPayoutOrDefault<Options>>(
      this,
      "shopifyPayouts",
      DefaultShopifyPayoutSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyPayouts",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyPayoutSelection,
  } as any
);

  
}
