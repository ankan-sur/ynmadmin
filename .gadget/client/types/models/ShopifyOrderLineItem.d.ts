import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyOrderLineItem, ShopifyOrderLineItemSort, ShopifyOrderLineItemFilter, AvailableShopifyOrderLineItemSelection } from "../types.js";
export declare const DefaultShopifyOrderLineItemSelection: {
    readonly __typename: true;
    readonly attributedStaffs: true;
    readonly createdAt: true;
    readonly currentQuantity: true;
    readonly discountAllocations: true;
    readonly fulfillableQuantity: true;
    readonly fulfillmentService: true;
    readonly fulfillmentStatus: true;
    readonly giftCard: true;
    readonly grams: true;
    readonly id: true;
    readonly name: true;
    readonly price: true;
    readonly priceSet: true;
    readonly productExists: true;
    readonly properties: true;
    readonly quantity: true;
    readonly requiresShipping: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly sku: true;
    readonly taxLines: true;
    readonly taxable: true;
    readonly title: true;
    readonly totalDiscount: true;
    readonly totalDiscountSet: true;
    readonly updatedAt: true;
    readonly variantInventoryManagement: true;
    readonly variantTitle: true;
    readonly vendor: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyOrderLineItem". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyOrderLineItemOrDefault<Options extends Selectable<AvailableShopifyOrderLineItemSelection>> = DeepFilterNever<Select<ShopifyOrderLineItem, DefaultSelection<AvailableShopifyOrderLineItemSelection, Options, typeof DefaultShopifyOrderLineItemSelection>>>;
/** Options that can be passed to the `ShopifyOrderLineItemManager#findOne` method */
export interface FindOneShopifyOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderLineItemSelection;
}
/** Options that can be passed to the `ShopifyOrderLineItemManager#maybeFindOne` method */
export interface MaybeFindOneShopifyOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderLineItemSelection;
}
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
}
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
}
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
}
/** All the actions available at the collection level and record level for "shopifyOrderLineItem" */
export declare class ShopifyOrderLineItemManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyOrderLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyOrderLineItemOptions>): Promise<GadgetRecord<SelectedShopifyOrderLineItemOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyOrderLineItem";
        modelApiIdentifier: "shopifyOrderLineItem";
        defaultSelection: typeof DefaultShopifyOrderLineItemSelection;
        selectionType: AvailableShopifyOrderLineItemSelection;
        optionsType: FindOneShopifyOrderLineItemOptions;
        schemaType: Query["shopifyOrderLineItem"];
    };
    /**
 * Finds one shopifyOrderLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyOrderLineItemOptions>): Promise<GadgetRecord<SelectedShopifyOrderLineItemOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyOrderLineItem";
        modelApiIdentifier: "shopifyOrderLineItem";
        defaultSelection: typeof DefaultShopifyOrderLineItemSelection;
        selectionType: AvailableShopifyOrderLineItemSelection;
        optionsType: MaybeFindOneShopifyOrderLineItemOptions;
        schemaType: Query["shopifyOrderLineItem"];
    };
    /**
 * Finds many shopifyOrderLineItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyOrderLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyOrderLineItemsOptions>): Promise<GadgetRecordList<SelectedShopifyOrderLineItemOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyOrderLineItems";
        modelApiIdentifier: "shopifyOrderLineItem";
        defaultSelection: typeof DefaultShopifyOrderLineItemSelection;
        selectionType: AvailableShopifyOrderLineItemSelection;
        optionsType: FindManyShopifyOrderLineItemsOptions;
        schemaType: Query["shopifyOrderLineItem"];
    };
    /**
 * Finds the first matching shopifyOrderLineItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyOrderLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyOrderLineItemOptions>): Promise<GadgetRecord<SelectedShopifyOrderLineItemOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyOrderLineItems";
        modelApiIdentifier: "shopifyOrderLineItem";
        defaultSelection: typeof DefaultShopifyOrderLineItemSelection;
        selectionType: AvailableShopifyOrderLineItemSelection;
        optionsType: FindFirstShopifyOrderLineItemOptions;
        schemaType: Query["shopifyOrderLineItem"];
    };
    /**
 * Finds the first matching shopifyOrderLineItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyOrderLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyOrderLineItemOptions>): Promise<GadgetRecord<SelectedShopifyOrderLineItemOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyOrderLineItems";
        modelApiIdentifier: "shopifyOrderLineItem";
        defaultSelection: typeof DefaultShopifyOrderLineItemSelection;
        selectionType: AvailableShopifyOrderLineItemSelection;
        optionsType: MaybeFindFirstShopifyOrderLineItemOptions;
        schemaType: Query["shopifyOrderLineItem"];
    };
}
