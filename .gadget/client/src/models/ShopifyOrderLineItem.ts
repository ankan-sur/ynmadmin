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
      ShopifyOrderLineItem,
      ShopifyOrderLineItemSort,
      ShopifyOrderLineItemFilter,
      AvailableShopifyOrderLineItemSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyOrderLineItemSelection = {
  "__typename": true,
  "attributedStaffs": true,
  "createdAt": true,
  "currentQuantity": true,
  "discountAllocations": true,
  "fulfillableQuantity": true,
  "fulfillmentService": true,
  "fulfillmentStatus": true,
  "giftCard": true,
  "grams": true,
  "id": true,
  "name": true,
  "price": true,
  "priceSet": true,
  "productExists": true,
  "properties": true,
  "quantity": true,
  "requiresShipping": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "sku": true,
  "taxLines": true,
  "taxable": true,
  "title": true,
  "totalDiscount": true,
  "totalDiscountSet": true,
  "updatedAt": true,
  "variantInventoryManagement": true,
  "variantTitle": true,
  "vendor": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyOrderLineItem". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyOrderLineItemOrDefault<Options extends Selectable<AvailableShopifyOrderLineItemSelection>> = DeepFilterNever<
  Select<
    ShopifyOrderLineItem,
    DefaultSelection<
      AvailableShopifyOrderLineItemSelection,
      Options,
      typeof DefaultShopifyOrderLineItemSelection
    >
  >>;

/** Options that can be passed to the `ShopifyOrderLineItemManager#findOne` method */
export interface FindOneShopifyOrderLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyOrderLineItemSelection;
};

/** Options that can be passed to the `ShopifyOrderLineItemManager#maybeFindOne` method */
export interface MaybeFindOneShopifyOrderLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyOrderLineItemSelection;
};

/** Options that can be passed to the `ShopifyOrderLineItemManager#findMany` method */
export interface FindManyShopifyOrderLineItemsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyOrderLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyOrderLineItemSort | ShopifyOrderLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyOrderLineItemFilter | ShopifyOrderLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyOrderLineItemManager#findFirst` method */
export interface FindFirstShopifyOrderLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyOrderLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyOrderLineItemSort | ShopifyOrderLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyOrderLineItemFilter | ShopifyOrderLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyOrderLineItemManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyOrderLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyOrderLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyOrderLineItemSort | ShopifyOrderLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyOrderLineItemFilter | ShopifyOrderLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyOrderLineItem";
const pluralApiIdentifier = "shopifyOrderLineItems";





/** All the actions available at the collection level and record level for "shopifyOrderLineItem" */
export class ShopifyOrderLineItemManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyOrderLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyOrderLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderLineItemOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyOrderLineItem";
  modelApiIdentifier: "shopifyOrderLineItem";
  defaultSelection: typeof DefaultShopifyOrderLineItemSelection;
  selectionType: AvailableShopifyOrderLineItemSelection;
  optionsType: FindOneShopifyOrderLineItemOptions;
  schemaType: Query["shopifyOrderLineItem"];
} = Object.assign(
  async <Options extends FindOneShopifyOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyOrderLineItemOptions>) => {
    return await findOneRunner<SelectedShopifyOrderLineItemOrDefault<Options>>(
      this,
      "shopifyOrderLineItem",
      id,
      DefaultShopifyOrderLineItemSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyOrderLineItem",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyOrderLineItemSelection,
  } as any
)

  
    /**
 * Finds one shopifyOrderLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyOrderLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderLineItemOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyOrderLineItem";
  modelApiIdentifier: "shopifyOrderLineItem";
  defaultSelection: typeof DefaultShopifyOrderLineItemSelection;
  selectionType: AvailableShopifyOrderLineItemSelection;
  optionsType: MaybeFindOneShopifyOrderLineItemOptions;
  schemaType: Query["shopifyOrderLineItem"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyOrderLineItemOptions>) => {
    const record = await findOneRunner<SelectedShopifyOrderLineItemOrDefault<Options>>(
      this,
      "shopifyOrderLineItem",
      id,
      DefaultShopifyOrderLineItemSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyOrderLineItem",
    modelApiIdentifier: "shopifyOrderLineItem",
    defaultSelection: DefaultShopifyOrderLineItemSelection,
  } as any
)

  
    /**
 * Finds many shopifyOrderLineItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyOrderLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyOrderLineItemsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyOrderLineItemOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyOrderLineItems";
  modelApiIdentifier: "shopifyOrderLineItem";
  defaultSelection: typeof DefaultShopifyOrderLineItemSelection;
  selectionType: AvailableShopifyOrderLineItemSelection;
  optionsType: FindManyShopifyOrderLineItemsOptions;
  schemaType: Query["shopifyOrderLineItem"];
} = Object.assign(
  async <Options extends FindManyShopifyOrderLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyOrderLineItemsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyOrderLineItemOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyOrderLineItemOrDefault<Options>>(
      this,
      "shopifyOrderLineItems",
      DefaultShopifyOrderLineItemSelection,
      "shopifyOrderLineItem",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyOrderLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyOrderLineItemSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyOrderLineItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyOrderLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyOrderLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderLineItemOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyOrderLineItems";
  modelApiIdentifier: "shopifyOrderLineItem";
  defaultSelection: typeof DefaultShopifyOrderLineItemSelection;
  selectionType: AvailableShopifyOrderLineItemSelection;
  optionsType: FindFirstShopifyOrderLineItemOptions;
  schemaType: Query["shopifyOrderLineItem"];
} = Object.assign(
  async <Options extends FindFirstShopifyOrderLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyOrderLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderLineItemOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyOrderLineItemOrDefault<Options>>(
      this,
      "shopifyOrderLineItems",
      DefaultShopifyOrderLineItemSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyOrderLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyOrderLineItemSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyOrderLineItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyOrderLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyOrderLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderLineItemOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyOrderLineItems";
  modelApiIdentifier: "shopifyOrderLineItem";
  defaultSelection: typeof DefaultShopifyOrderLineItemSelection;
  selectionType: AvailableShopifyOrderLineItemSelection;
  optionsType: MaybeFindFirstShopifyOrderLineItemOptions;
  schemaType: Query["shopifyOrderLineItem"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyOrderLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyOrderLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderLineItemOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyOrderLineItemOrDefault<Options>>(
      this,
      "shopifyOrderLineItems",
      DefaultShopifyOrderLineItemSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyOrderLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyOrderLineItemSelection,
  } as any
);

  
}
