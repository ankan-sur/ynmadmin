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
      ShopifyOrderAdjustment,
      ShopifyOrderAdjustmentSort,
      ShopifyOrderAdjustmentFilter,
      AvailableShopifyOrderAdjustmentSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyOrderAdjustmentSelection = {
  "__typename": true,
  "amount": true,
  "amountSet": true,
  "createdAt": true,
  "id": true,
  "kind": true,
  "reason": true,
  "taxAmount": true,
  "taxAmountSet": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyOrderAdjustment". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyOrderAdjustmentOrDefault<Options extends Selectable<AvailableShopifyOrderAdjustmentSelection>> = DeepFilterNever<
  Select<
    ShopifyOrderAdjustment,
    DefaultSelection<
      AvailableShopifyOrderAdjustmentSelection,
      Options,
      typeof DefaultShopifyOrderAdjustmentSelection
    >
  >>;

/** Options that can be passed to the `ShopifyOrderAdjustmentManager#findOne` method */
export interface FindOneShopifyOrderAdjustmentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyOrderAdjustmentSelection;
};

/** Options that can be passed to the `ShopifyOrderAdjustmentManager#maybeFindOne` method */
export interface MaybeFindOneShopifyOrderAdjustmentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyOrderAdjustmentSelection;
};

/** Options that can be passed to the `ShopifyOrderAdjustmentManager#findMany` method */
export interface FindManyShopifyOrderAdjustmentsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyOrderAdjustmentSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyOrderAdjustmentSort | ShopifyOrderAdjustmentSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyOrderAdjustmentFilter | ShopifyOrderAdjustmentFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyOrderAdjustmentManager#findFirst` method */
export interface FindFirstShopifyOrderAdjustmentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyOrderAdjustmentSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyOrderAdjustmentSort | ShopifyOrderAdjustmentSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyOrderAdjustmentFilter | ShopifyOrderAdjustmentFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyOrderAdjustmentManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyOrderAdjustmentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyOrderAdjustmentSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyOrderAdjustmentSort | ShopifyOrderAdjustmentSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyOrderAdjustmentFilter | ShopifyOrderAdjustmentFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyOrderAdjustment";
const pluralApiIdentifier = "shopifyOrderAdjustments";





/** All the actions available at the collection level and record level for "shopifyOrderAdjustment" */
export class ShopifyOrderAdjustmentManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyOrderAdjustment by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyOrderAdjustmentOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyOrderAdjustmentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderAdjustmentOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyOrderAdjustment";
  modelApiIdentifier: "shopifyOrderAdjustment";
  defaultSelection: typeof DefaultShopifyOrderAdjustmentSelection;
  selectionType: AvailableShopifyOrderAdjustmentSelection;
  optionsType: FindOneShopifyOrderAdjustmentOptions;
  schemaType: Query["shopifyOrderAdjustment"];
} = Object.assign(
  async <Options extends FindOneShopifyOrderAdjustmentOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyOrderAdjustmentOptions>) => {
    return await findOneRunner<SelectedShopifyOrderAdjustmentOrDefault<Options>>(
      this,
      "shopifyOrderAdjustment",
      id,
      DefaultShopifyOrderAdjustmentSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyOrderAdjustment",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyOrderAdjustmentSelection,
  } as any
)

  
    /**
 * Finds one shopifyOrderAdjustment by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyOrderAdjustmentOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyOrderAdjustmentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderAdjustmentOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyOrderAdjustment";
  modelApiIdentifier: "shopifyOrderAdjustment";
  defaultSelection: typeof DefaultShopifyOrderAdjustmentSelection;
  selectionType: AvailableShopifyOrderAdjustmentSelection;
  optionsType: MaybeFindOneShopifyOrderAdjustmentOptions;
  schemaType: Query["shopifyOrderAdjustment"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyOrderAdjustmentOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyOrderAdjustmentOptions>) => {
    const record = await findOneRunner<SelectedShopifyOrderAdjustmentOrDefault<Options>>(
      this,
      "shopifyOrderAdjustment",
      id,
      DefaultShopifyOrderAdjustmentSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyOrderAdjustment",
    modelApiIdentifier: "shopifyOrderAdjustment",
    defaultSelection: DefaultShopifyOrderAdjustmentSelection,
  } as any
)

  
    /**
 * Finds many shopifyOrderAdjustment. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyOrderAdjustmentsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyOrderAdjustmentsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyOrderAdjustmentOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyOrderAdjustments";
  modelApiIdentifier: "shopifyOrderAdjustment";
  defaultSelection: typeof DefaultShopifyOrderAdjustmentSelection;
  selectionType: AvailableShopifyOrderAdjustmentSelection;
  optionsType: FindManyShopifyOrderAdjustmentsOptions;
  schemaType: Query["shopifyOrderAdjustment"];
} = Object.assign(
  async <Options extends FindManyShopifyOrderAdjustmentsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyOrderAdjustmentsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyOrderAdjustmentOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyOrderAdjustmentOrDefault<Options>>(
      this,
      "shopifyOrderAdjustments",
      DefaultShopifyOrderAdjustmentSelection,
      "shopifyOrderAdjustment",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyOrderAdjustments",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyOrderAdjustmentSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyOrderAdjustment. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyOrderAdjustmentOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyOrderAdjustmentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderAdjustmentOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyOrderAdjustments";
  modelApiIdentifier: "shopifyOrderAdjustment";
  defaultSelection: typeof DefaultShopifyOrderAdjustmentSelection;
  selectionType: AvailableShopifyOrderAdjustmentSelection;
  optionsType: FindFirstShopifyOrderAdjustmentOptions;
  schemaType: Query["shopifyOrderAdjustment"];
} = Object.assign(
  async <Options extends FindFirstShopifyOrderAdjustmentOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyOrderAdjustmentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderAdjustmentOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyOrderAdjustmentOrDefault<Options>>(
      this,
      "shopifyOrderAdjustments",
      DefaultShopifyOrderAdjustmentSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyOrderAdjustments",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyOrderAdjustmentSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyOrderAdjustment. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyOrderAdjustmentOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyOrderAdjustmentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderAdjustmentOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyOrderAdjustments";
  modelApiIdentifier: "shopifyOrderAdjustment";
  defaultSelection: typeof DefaultShopifyOrderAdjustmentSelection;
  selectionType: AvailableShopifyOrderAdjustmentSelection;
  optionsType: MaybeFindFirstShopifyOrderAdjustmentOptions;
  schemaType: Query["shopifyOrderAdjustment"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyOrderAdjustmentOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyOrderAdjustmentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderAdjustmentOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyOrderAdjustmentOrDefault<Options>>(
      this,
      "shopifyOrderAdjustments",
      DefaultShopifyOrderAdjustmentSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyOrderAdjustments",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyOrderAdjustmentSelection,
  } as any
);

  
}
