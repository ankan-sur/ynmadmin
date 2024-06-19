import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyTenderTransaction, ShopifyTenderTransactionSort, ShopifyTenderTransactionFilter, AvailableShopifyTenderTransactionSelection } from "../types.js";
export declare const DefaultShopifyTenderTransactionSelection: {
    readonly __typename: true;
    readonly amount: true;
    readonly createdAt: true;
    readonly currency: true;
    readonly id: true;
    readonly paymentDetails: true;
    readonly paymentMethod: true;
    readonly processedAt: true;
    readonly remoteReference: true;
    readonly test: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyTenderTransaction". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyTenderTransactionOrDefault<Options extends Selectable<AvailableShopifyTenderTransactionSelection>> = DeepFilterNever<Select<ShopifyTenderTransaction, DefaultSelection<AvailableShopifyTenderTransactionSelection, Options, typeof DefaultShopifyTenderTransactionSelection>>>;
/** Options that can be passed to the `ShopifyTenderTransactionManager#findOne` method */
export interface FindOneShopifyTenderTransactionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyTenderTransactionSelection;
}
/** Options that can be passed to the `ShopifyTenderTransactionManager#maybeFindOne` method */
export interface MaybeFindOneShopifyTenderTransactionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyTenderTransactionSelection;
}
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
}
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
}
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
}
/** All the actions available at the collection level and record level for "shopifyTenderTransaction" */
export declare class ShopifyTenderTransactionManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyTenderTransaction by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyTenderTransactionOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyTenderTransactionOptions>): Promise<GadgetRecord<SelectedShopifyTenderTransactionOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyTenderTransaction";
        modelApiIdentifier: "shopifyTenderTransaction";
        defaultSelection: typeof DefaultShopifyTenderTransactionSelection;
        selectionType: AvailableShopifyTenderTransactionSelection;
        optionsType: FindOneShopifyTenderTransactionOptions;
        schemaType: Query["shopifyTenderTransaction"];
    };
    /**
 * Finds one shopifyTenderTransaction by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyTenderTransactionOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyTenderTransactionOptions>): Promise<GadgetRecord<SelectedShopifyTenderTransactionOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyTenderTransaction";
        modelApiIdentifier: "shopifyTenderTransaction";
        defaultSelection: typeof DefaultShopifyTenderTransactionSelection;
        selectionType: AvailableShopifyTenderTransactionSelection;
        optionsType: MaybeFindOneShopifyTenderTransactionOptions;
        schemaType: Query["shopifyTenderTransaction"];
    };
    /**
 * Finds many shopifyTenderTransaction. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyTenderTransactionsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyTenderTransactionsOptions>): Promise<GadgetRecordList<SelectedShopifyTenderTransactionOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyTenderTransactions";
        modelApiIdentifier: "shopifyTenderTransaction";
        defaultSelection: typeof DefaultShopifyTenderTransactionSelection;
        selectionType: AvailableShopifyTenderTransactionSelection;
        optionsType: FindManyShopifyTenderTransactionsOptions;
        schemaType: Query["shopifyTenderTransaction"];
    };
    /**
 * Finds the first matching shopifyTenderTransaction. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyTenderTransactionOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyTenderTransactionOptions>): Promise<GadgetRecord<SelectedShopifyTenderTransactionOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyTenderTransactions";
        modelApiIdentifier: "shopifyTenderTransaction";
        defaultSelection: typeof DefaultShopifyTenderTransactionSelection;
        selectionType: AvailableShopifyTenderTransactionSelection;
        optionsType: FindFirstShopifyTenderTransactionOptions;
        schemaType: Query["shopifyTenderTransaction"];
    };
    /**
 * Finds the first matching shopifyTenderTransaction. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyTenderTransactionOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyTenderTransactionOptions>): Promise<GadgetRecord<SelectedShopifyTenderTransactionOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyTenderTransactions";
        modelApiIdentifier: "shopifyTenderTransaction";
        defaultSelection: typeof DefaultShopifyTenderTransactionSelection;
        selectionType: AvailableShopifyTenderTransactionSelection;
        optionsType: MaybeFindFirstShopifyTenderTransactionOptions;
        schemaType: Query["shopifyTenderTransaction"];
    };
}
