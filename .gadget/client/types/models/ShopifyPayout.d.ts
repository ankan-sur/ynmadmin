import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyPayout, ShopifyPayoutSort, ShopifyPayoutFilter, AvailableShopifyPayoutSelection } from "../types.js";
export declare const DefaultShopifyPayoutSelection: {
    readonly __typename: true;
    readonly amount: true;
    readonly createdAt: true;
    readonly currency: true;
    readonly date: true;
    readonly id: true;
    readonly status: true;
    readonly summary: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyPayout". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyPayoutOrDefault<Options extends Selectable<AvailableShopifyPayoutSelection>> = DeepFilterNever<Select<ShopifyPayout, DefaultSelection<AvailableShopifyPayoutSelection, Options, typeof DefaultShopifyPayoutSelection>>>;
/** Options that can be passed to the `ShopifyPayoutManager#findOne` method */
export interface FindOneShopifyPayoutOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyPayoutSelection;
}
/** Options that can be passed to the `ShopifyPayoutManager#maybeFindOne` method */
export interface MaybeFindOneShopifyPayoutOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyPayoutSelection;
}
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
}
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
}
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
}
/** All the actions available at the collection level and record level for "shopifyPayout" */
export declare class ShopifyPayoutManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyPayout by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyPayoutOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyPayoutOptions>): Promise<GadgetRecord<SelectedShopifyPayoutOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyPayout";
        modelApiIdentifier: "shopifyPayout";
        defaultSelection: typeof DefaultShopifyPayoutSelection;
        selectionType: AvailableShopifyPayoutSelection;
        optionsType: FindOneShopifyPayoutOptions;
        schemaType: Query["shopifyPayout"];
    };
    /**
 * Finds one shopifyPayout by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyPayoutOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyPayoutOptions>): Promise<GadgetRecord<SelectedShopifyPayoutOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyPayout";
        modelApiIdentifier: "shopifyPayout";
        defaultSelection: typeof DefaultShopifyPayoutSelection;
        selectionType: AvailableShopifyPayoutSelection;
        optionsType: MaybeFindOneShopifyPayoutOptions;
        schemaType: Query["shopifyPayout"];
    };
    /**
 * Finds many shopifyPayout. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyPayoutsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyPayoutsOptions>): Promise<GadgetRecordList<SelectedShopifyPayoutOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyPayouts";
        modelApiIdentifier: "shopifyPayout";
        defaultSelection: typeof DefaultShopifyPayoutSelection;
        selectionType: AvailableShopifyPayoutSelection;
        optionsType: FindManyShopifyPayoutsOptions;
        schemaType: Query["shopifyPayout"];
    };
    /**
 * Finds the first matching shopifyPayout. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyPayoutOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyPayoutOptions>): Promise<GadgetRecord<SelectedShopifyPayoutOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyPayouts";
        modelApiIdentifier: "shopifyPayout";
        defaultSelection: typeof DefaultShopifyPayoutSelection;
        selectionType: AvailableShopifyPayoutSelection;
        optionsType: FindFirstShopifyPayoutOptions;
        schemaType: Query["shopifyPayout"];
    };
    /**
 * Finds the first matching shopifyPayout. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyPayoutOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyPayoutOptions>): Promise<GadgetRecord<SelectedShopifyPayoutOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyPayouts";
        modelApiIdentifier: "shopifyPayout";
        defaultSelection: typeof DefaultShopifyPayoutSelection;
        selectionType: AvailableShopifyPayoutSelection;
        optionsType: MaybeFindFirstShopifyPayoutOptions;
        schemaType: Query["shopifyPayout"];
    };
}
