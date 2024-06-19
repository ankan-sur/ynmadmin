import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyBalanceTransaction, ShopifyBalanceTransactionSort, ShopifyBalanceTransactionFilter, AvailableShopifyBalanceTransactionSelection } from "../types.js";
export declare const DefaultShopifyBalanceTransactionSelection: {
    readonly __typename: true;
    readonly adjustmentOrderTransactions: true;
    readonly amount: true;
    readonly createdAt: true;
    readonly currency: true;
    readonly fee: true;
    readonly id: true;
    readonly net: true;
    readonly payoutStatus: true;
    readonly processedAt: true;
    readonly sourceId: true;
    readonly sourceType: true;
    readonly test: true;
    readonly type: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyBalanceTransaction". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyBalanceTransactionOrDefault<Options extends Selectable<AvailableShopifyBalanceTransactionSelection>> = DeepFilterNever<Select<ShopifyBalanceTransaction, DefaultSelection<AvailableShopifyBalanceTransactionSelection, Options, typeof DefaultShopifyBalanceTransactionSelection>>>;
/** Options that can be passed to the `ShopifyBalanceTransactionManager#findOne` method */
export interface FindOneShopifyBalanceTransactionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBalanceTransactionSelection;
}
/** Options that can be passed to the `ShopifyBalanceTransactionManager#maybeFindOne` method */
export interface MaybeFindOneShopifyBalanceTransactionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBalanceTransactionSelection;
}
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
}
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
}
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
}
/** All the actions available at the collection level and record level for "shopifyBalanceTransaction" */
export declare class ShopifyBalanceTransactionManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyBalanceTransaction by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyBalanceTransactionOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyBalanceTransactionOptions>): Promise<GadgetRecord<SelectedShopifyBalanceTransactionOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyBalanceTransaction";
        modelApiIdentifier: "shopifyBalanceTransaction";
        defaultSelection: typeof DefaultShopifyBalanceTransactionSelection;
        selectionType: AvailableShopifyBalanceTransactionSelection;
        optionsType: FindOneShopifyBalanceTransactionOptions;
        schemaType: Query["shopifyBalanceTransaction"];
    };
    /**
 * Finds one shopifyBalanceTransaction by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyBalanceTransactionOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyBalanceTransactionOptions>): Promise<GadgetRecord<SelectedShopifyBalanceTransactionOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyBalanceTransaction";
        modelApiIdentifier: "shopifyBalanceTransaction";
        defaultSelection: typeof DefaultShopifyBalanceTransactionSelection;
        selectionType: AvailableShopifyBalanceTransactionSelection;
        optionsType: MaybeFindOneShopifyBalanceTransactionOptions;
        schemaType: Query["shopifyBalanceTransaction"];
    };
    /**
 * Finds many shopifyBalanceTransaction. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyBalanceTransactionsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyBalanceTransactionsOptions>): Promise<GadgetRecordList<SelectedShopifyBalanceTransactionOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyBalanceTransactions";
        modelApiIdentifier: "shopifyBalanceTransaction";
        defaultSelection: typeof DefaultShopifyBalanceTransactionSelection;
        selectionType: AvailableShopifyBalanceTransactionSelection;
        optionsType: FindManyShopifyBalanceTransactionsOptions;
        schemaType: Query["shopifyBalanceTransaction"];
    };
    /**
 * Finds the first matching shopifyBalanceTransaction. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyBalanceTransactionOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyBalanceTransactionOptions>): Promise<GadgetRecord<SelectedShopifyBalanceTransactionOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyBalanceTransactions";
        modelApiIdentifier: "shopifyBalanceTransaction";
        defaultSelection: typeof DefaultShopifyBalanceTransactionSelection;
        selectionType: AvailableShopifyBalanceTransactionSelection;
        optionsType: FindFirstShopifyBalanceTransactionOptions;
        schemaType: Query["shopifyBalanceTransaction"];
    };
    /**
 * Finds the first matching shopifyBalanceTransaction. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyBalanceTransactionOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyBalanceTransactionOptions>): Promise<GadgetRecord<SelectedShopifyBalanceTransactionOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyBalanceTransactions";
        modelApiIdentifier: "shopifyBalanceTransaction";
        defaultSelection: typeof DefaultShopifyBalanceTransactionSelection;
        selectionType: AvailableShopifyBalanceTransactionSelection;
        optionsType: MaybeFindFirstShopifyBalanceTransactionOptions;
        schemaType: Query["shopifyBalanceTransaction"];
    };
}
