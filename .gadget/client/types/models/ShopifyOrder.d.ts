import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyOrder, ShopifyOrderSort, ShopifyOrderFilter, AvailableShopifyOrderSelection } from "../types.js";
export declare const DefaultShopifyOrderSelection: {
    readonly __typename: true;
    readonly additionalFees: true;
    readonly billingAddress: true;
    readonly browserIp: true;
    readonly buyerAcceptsMarketing: true;
    readonly cancelReason: true;
    readonly cancellation: true;
    readonly cancelledAt: true;
    readonly cartToken: true;
    readonly checkoutToken: true;
    readonly clientDetails: true;
    readonly closedAt: true;
    readonly createdAt: true;
    readonly currency: true;
    readonly currentSubtotalPrice: true;
    readonly currentSubtotalPriceSet: true;
    readonly currentTotalAdditionalFeesSet: true;
    readonly currentTotalDiscounts: true;
    readonly currentTotalDiscountsSet: true;
    readonly currentTotalDutiesSet: true;
    readonly currentTotalPrice: true;
    readonly currentTotalPriceSet: true;
    readonly currentTotalTax: true;
    readonly currentTotalTaxSet: true;
    readonly customerLocale: true;
    readonly discountApplications: true;
    readonly discountCodes: true;
    readonly email: true;
    readonly estimatedTaxes: true;
    readonly financialStatus: true;
    readonly fulfillmentStatus: true;
    readonly id: true;
    readonly landingSite: true;
    readonly name: true;
    readonly note: true;
    readonly noteAttributes: true;
    readonly number: true;
    readonly orderNumber: true;
    readonly orderStatusUrl: true;
    readonly originalTotalAdditionalFeesSet: true;
    readonly originalTotalDutiesSet: true;
    readonly paymentGatewayNames: true;
    readonly phone: true;
    readonly poNumber: true;
    readonly presentmentCurrency: true;
    readonly processedAt: true;
    readonly purchasingEntity: true;
    readonly referringSite: true;
    readonly shippingAddress: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyProtect: true;
    readonly shopifyUpdatedAt: true;
    readonly sourceIdentifier: true;
    readonly sourceName: true;
    readonly sourceUrl: true;
    readonly subtotalPrice: true;
    readonly subtotalPriceSet: true;
    readonly tags: true;
    readonly taxExempt: true;
    readonly taxLines: true;
    readonly taxesIncluded: true;
    readonly test: true;
    readonly token: true;
    readonly totalDiscounts: true;
    readonly totalDiscountsSet: true;
    readonly totalLineItemsPrice: true;
    readonly totalLineItemsPriceSet: true;
    readonly totalOutstanding: true;
    readonly totalPrice: true;
    readonly totalPriceSet: true;
    readonly totalShippingPriceSet: true;
    readonly totalTax: true;
    readonly totalTaxSet: true;
    readonly totalTipReceived: true;
    readonly totalWeight: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyOrder". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyOrderOrDefault<Options extends Selectable<AvailableShopifyOrderSelection>> = DeepFilterNever<Select<ShopifyOrder, DefaultSelection<AvailableShopifyOrderSelection, Options, typeof DefaultShopifyOrderSelection>>>;
/** Options that can be passed to the `ShopifyOrderManager#findOne` method */
export interface FindOneShopifyOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderSelection;
}
/** Options that can be passed to the `ShopifyOrderManager#maybeFindOne` method */
export interface MaybeFindOneShopifyOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderSelection;
}
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
}
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
}
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
}
/** All the actions available at the collection level and record level for "shopifyOrder" */
export declare class ShopifyOrderManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyOrderOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyOrderOptions>): Promise<GadgetRecord<SelectedShopifyOrderOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyOrder";
        modelApiIdentifier: "shopifyOrder";
        defaultSelection: typeof DefaultShopifyOrderSelection;
        selectionType: AvailableShopifyOrderSelection;
        optionsType: FindOneShopifyOrderOptions;
        schemaType: Query["shopifyOrder"];
    };
    /**
 * Finds one shopifyOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyOrderOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyOrderOptions>): Promise<GadgetRecord<SelectedShopifyOrderOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyOrder";
        modelApiIdentifier: "shopifyOrder";
        defaultSelection: typeof DefaultShopifyOrderSelection;
        selectionType: AvailableShopifyOrderSelection;
        optionsType: MaybeFindOneShopifyOrderOptions;
        schemaType: Query["shopifyOrder"];
    };
    /**
 * Finds many shopifyOrder. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyOrdersOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyOrdersOptions>): Promise<GadgetRecordList<SelectedShopifyOrderOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyOrders";
        modelApiIdentifier: "shopifyOrder";
        defaultSelection: typeof DefaultShopifyOrderSelection;
        selectionType: AvailableShopifyOrderSelection;
        optionsType: FindManyShopifyOrdersOptions;
        schemaType: Query["shopifyOrder"];
    };
    /**
 * Finds the first matching shopifyOrder. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyOrderOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyOrderOptions>): Promise<GadgetRecord<SelectedShopifyOrderOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyOrders";
        modelApiIdentifier: "shopifyOrder";
        defaultSelection: typeof DefaultShopifyOrderSelection;
        selectionType: AvailableShopifyOrderSelection;
        optionsType: FindFirstShopifyOrderOptions;
        schemaType: Query["shopifyOrder"];
    };
    /**
 * Finds the first matching shopifyOrder. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyOrderOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyOrderOptions>): Promise<GadgetRecord<SelectedShopifyOrderOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyOrders";
        modelApiIdentifier: "shopifyOrder";
        defaultSelection: typeof DefaultShopifyOrderSelection;
        selectionType: AvailableShopifyOrderSelection;
        optionsType: MaybeFindFirstShopifyOrderOptions;
        schemaType: Query["shopifyOrder"];
    };
}
