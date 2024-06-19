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
      ShopifyOrder,
      ShopifyOrderSort,
      ShopifyOrderFilter,
      AvailableShopifyOrderSelection,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyOrderSelection = {
  "__typename": true,
  "additionalFees": true,
  "billingAddress": true,
  "browserIp": true,
  "buyerAcceptsMarketing": true,
  "cancelReason": true,
  "cancellation": true,
  "cancelledAt": true,
  "cartToken": true,
  "checkoutToken": true,
  "clientDetails": true,
  "closedAt": true,
  "createdAt": true,
  "currency": true,
  "currentSubtotalPrice": true,
  "currentSubtotalPriceSet": true,
  "currentTotalAdditionalFeesSet": true,
  "currentTotalDiscounts": true,
  "currentTotalDiscountsSet": true,
  "currentTotalDutiesSet": true,
  "currentTotalPrice": true,
  "currentTotalPriceSet": true,
  "currentTotalTax": true,
  "currentTotalTaxSet": true,
  "customerLocale": true,
  "discountApplications": true,
  "discountCodes": true,
  "email": true,
  "estimatedTaxes": true,
  "financialStatus": true,
  "fulfillmentStatus": true,
  "id": true,
  "landingSite": true,
  "name": true,
  "note": true,
  "noteAttributes": true,
  "number": true,
  "orderNumber": true,
  "orderStatusUrl": true,
  "originalTotalAdditionalFeesSet": true,
  "originalTotalDutiesSet": true,
  "paymentGatewayNames": true,
  "phone": true,
  "poNumber": true,
  "presentmentCurrency": true,
  "processedAt": true,
  "purchasingEntity": true,
  "referringSite": true,
  "shippingAddress": true,
  "shopifyCreatedAt": true,
  "shopifyProtect": true,
  "shopifyUpdatedAt": true,
  "sourceIdentifier": true,
  "sourceName": true,
  "sourceUrl": true,
  "subtotalPrice": true,
  "subtotalPriceSet": true,
  "tags": true,
  "taxExempt": true,
  "taxLines": true,
  "taxesIncluded": true,
  "test": true,
  "token": true,
  "totalDiscounts": true,
  "totalDiscountsSet": true,
  "totalLineItemsPrice": true,
  "totalLineItemsPriceSet": true,
  "totalOutstanding": true,
  "totalPrice": true,
  "totalPriceSet": true,
  "totalShippingPriceSet": true,
  "totalTax": true,
  "totalTaxSet": true,
  "totalTipReceived": true,
  "totalWeight": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyOrder". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyOrderOrDefault<Options extends Selectable<AvailableShopifyOrderSelection>> = DeepFilterNever<
  Select<
    ShopifyOrder,
    DefaultSelection<
      AvailableShopifyOrderSelection,
      Options,
      typeof DefaultShopifyOrderSelection
    >
  >>;

/** Options that can be passed to the `ShopifyOrderManager#findOne` method */
export interface FindOneShopifyOrderOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyOrderSelection;
};

/** Options that can be passed to the `ShopifyOrderManager#maybeFindOne` method */
export interface MaybeFindOneShopifyOrderOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyOrderSelection;
};

/** Options that can be passed to the `ShopifyOrderManager#findMany` method */
export interface FindManyShopifyOrdersOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyOrderSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyOrderSort | ShopifyOrderSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyOrderFilter | ShopifyOrderFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyOrderManager#findFirst` method */
export interface FindFirstShopifyOrderOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyOrderSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyOrderSort | ShopifyOrderSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyOrderFilter | ShopifyOrderFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyOrderManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyOrderOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyOrderSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyOrderSort | ShopifyOrderSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyOrderFilter | ShopifyOrderFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


const apiIdentifier = "shopifyOrder";
const pluralApiIdentifier = "shopifyOrders";





/** All the actions available at the collection level and record level for "shopifyOrder" */
export class ShopifyOrderManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyOrderOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyOrder";
  modelApiIdentifier: "shopifyOrder";
  defaultSelection: typeof DefaultShopifyOrderSelection;
  selectionType: AvailableShopifyOrderSelection;
  optionsType: FindOneShopifyOrderOptions;
  schemaType: Query["shopifyOrder"];
} = Object.assign(
  async <Options extends FindOneShopifyOrderOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyOrderOptions>) => {
    return await findOneRunner<SelectedShopifyOrderOrDefault<Options>>(
      this,
      "shopifyOrder",
      id,
      DefaultShopifyOrderSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyOrder",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyOrderSelection,
  } as any
)

  
    /**
 * Finds one shopifyOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyOrderOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyOrder";
  modelApiIdentifier: "shopifyOrder";
  defaultSelection: typeof DefaultShopifyOrderSelection;
  selectionType: AvailableShopifyOrderSelection;
  optionsType: MaybeFindOneShopifyOrderOptions;
  schemaType: Query["shopifyOrder"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyOrderOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyOrderOptions>) => {
    const record = await findOneRunner<SelectedShopifyOrderOrDefault<Options>>(
      this,
      "shopifyOrder",
      id,
      DefaultShopifyOrderSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyOrder",
    modelApiIdentifier: "shopifyOrder",
    defaultSelection: DefaultShopifyOrderSelection,
  } as any
)

  
    /**
 * Finds many shopifyOrder. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyOrdersOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyOrdersOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyOrderOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyOrders";
  modelApiIdentifier: "shopifyOrder";
  defaultSelection: typeof DefaultShopifyOrderSelection;
  selectionType: AvailableShopifyOrderSelection;
  optionsType: FindManyShopifyOrdersOptions;
  schemaType: Query["shopifyOrder"];
} = Object.assign(
  async <Options extends FindManyShopifyOrdersOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyOrdersOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyOrderOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyOrderOrDefault<Options>>(
      this,
      "shopifyOrders",
      DefaultShopifyOrderSelection,
      "shopifyOrder",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyOrders",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyOrderSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyOrder. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyOrderOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyOrders";
  modelApiIdentifier: "shopifyOrder";
  defaultSelection: typeof DefaultShopifyOrderSelection;
  selectionType: AvailableShopifyOrderSelection;
  optionsType: FindFirstShopifyOrderOptions;
  schemaType: Query["shopifyOrder"];
} = Object.assign(
  async <Options extends FindFirstShopifyOrderOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyOrderOrDefault<Options>>(
      this,
      "shopifyOrders",
      DefaultShopifyOrderSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyOrders",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyOrderSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyOrder. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyOrderOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyOrders";
  modelApiIdentifier: "shopifyOrder";
  defaultSelection: typeof DefaultShopifyOrderSelection;
  selectionType: AvailableShopifyOrderSelection;
  optionsType: MaybeFindFirstShopifyOrderOptions;
  schemaType: Query["shopifyOrder"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyOrderOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyOrderOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyOrderOrDefault<Options>>(
      this,
      "shopifyOrders",
      DefaultShopifyOrderSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyOrders",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyOrderSelection,
  } as any
);

  
}
