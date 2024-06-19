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
      ShopifyShippingLine,
      ShopifyShippingLineSort,
      ShopifyShippingLineFilter,
      AvailableShopifyShippingLineSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyShippingLineSelection = {
  "__typename": true,
  "carrierIdentifier": true,
  "code": true,
  "createdAt": true,
  "discountAllocations": true,
  "discountedPrice": true,
  "discountedPriceSet": true,
  "id": true,
  "phone": true,
  "price": true,
  "priceSet": true,
  "source": true,
  "taxLines": true,
  "title": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyShippingLine". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyShippingLineOrDefault<Options extends Selectable<AvailableShopifyShippingLineSelection>> = DeepFilterNever<
  Select<
    ShopifyShippingLine,
    DefaultSelection<
      AvailableShopifyShippingLineSelection,
      Options,
      typeof DefaultShopifyShippingLineSelection
    >
  >>;

/** Options that can be passed to the `ShopifyShippingLineManager#findOne` method */
export interface FindOneShopifyShippingLineOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyShippingLineSelection;
};

/** Options that can be passed to the `ShopifyShippingLineManager#maybeFindOne` method */
export interface MaybeFindOneShopifyShippingLineOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyShippingLineSelection;
};

/** Options that can be passed to the `ShopifyShippingLineManager#findMany` method */
export interface FindManyShopifyShippingLinesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyShippingLineSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyShippingLineSort | ShopifyShippingLineSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyShippingLineFilter | ShopifyShippingLineFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyShippingLineManager#findFirst` method */
export interface FindFirstShopifyShippingLineOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyShippingLineSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyShippingLineSort | ShopifyShippingLineSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyShippingLineFilter | ShopifyShippingLineFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyShippingLineManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyShippingLineOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyShippingLineSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyShippingLineSort | ShopifyShippingLineSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyShippingLineFilter | ShopifyShippingLineFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyShippingLine";
const pluralApiIdentifier = "shopifyShippingLines";





/** All the actions available at the collection level and record level for "shopifyShippingLine" */
export class ShopifyShippingLineManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyShippingLine by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyShippingLineOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyShippingLineOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyShippingLineOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyShippingLine";
  modelApiIdentifier: "shopifyShippingLine";
  defaultSelection: typeof DefaultShopifyShippingLineSelection;
  selectionType: AvailableShopifyShippingLineSelection;
  optionsType: FindOneShopifyShippingLineOptions;
  schemaType: Query["shopifyShippingLine"];
} = Object.assign(
  async <Options extends FindOneShopifyShippingLineOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyShippingLineOptions>) => {
    return await findOneRunner<SelectedShopifyShippingLineOrDefault<Options>>(
      this,
      "shopifyShippingLine",
      id,
      DefaultShopifyShippingLineSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyShippingLine",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyShippingLineSelection,
  } as any
)

  
    /**
 * Finds one shopifyShippingLine by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyShippingLineOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyShippingLineOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyShippingLineOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyShippingLine";
  modelApiIdentifier: "shopifyShippingLine";
  defaultSelection: typeof DefaultShopifyShippingLineSelection;
  selectionType: AvailableShopifyShippingLineSelection;
  optionsType: MaybeFindOneShopifyShippingLineOptions;
  schemaType: Query["shopifyShippingLine"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyShippingLineOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyShippingLineOptions>) => {
    const record = await findOneRunner<SelectedShopifyShippingLineOrDefault<Options>>(
      this,
      "shopifyShippingLine",
      id,
      DefaultShopifyShippingLineSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyShippingLine",
    modelApiIdentifier: "shopifyShippingLine",
    defaultSelection: DefaultShopifyShippingLineSelection,
  } as any
)

  
    /**
 * Finds many shopifyShippingLine. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyShippingLinesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyShippingLinesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyShippingLineOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyShippingLines";
  modelApiIdentifier: "shopifyShippingLine";
  defaultSelection: typeof DefaultShopifyShippingLineSelection;
  selectionType: AvailableShopifyShippingLineSelection;
  optionsType: FindManyShopifyShippingLinesOptions;
  schemaType: Query["shopifyShippingLine"];
} = Object.assign(
  async <Options extends FindManyShopifyShippingLinesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyShippingLinesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyShippingLineOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyShippingLineOrDefault<Options>>(
      this,
      "shopifyShippingLines",
      DefaultShopifyShippingLineSelection,
      "shopifyShippingLine",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyShippingLines",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyShippingLineSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyShippingLine. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyShippingLineOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyShippingLineOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyShippingLineOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyShippingLines";
  modelApiIdentifier: "shopifyShippingLine";
  defaultSelection: typeof DefaultShopifyShippingLineSelection;
  selectionType: AvailableShopifyShippingLineSelection;
  optionsType: FindFirstShopifyShippingLineOptions;
  schemaType: Query["shopifyShippingLine"];
} = Object.assign(
  async <Options extends FindFirstShopifyShippingLineOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyShippingLineOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyShippingLineOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyShippingLineOrDefault<Options>>(
      this,
      "shopifyShippingLines",
      DefaultShopifyShippingLineSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyShippingLines",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyShippingLineSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyShippingLine. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyShippingLineOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyShippingLineOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyShippingLineOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyShippingLines";
  modelApiIdentifier: "shopifyShippingLine";
  defaultSelection: typeof DefaultShopifyShippingLineSelection;
  selectionType: AvailableShopifyShippingLineSelection;
  optionsType: MaybeFindFirstShopifyShippingLineOptions;
  schemaType: Query["shopifyShippingLine"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyShippingLineOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyShippingLineOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyShippingLineOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyShippingLineOrDefault<Options>>(
      this,
      "shopifyShippingLines",
      DefaultShopifyShippingLineSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyShippingLines",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyShippingLineSelection,
  } as any
);

  
}
