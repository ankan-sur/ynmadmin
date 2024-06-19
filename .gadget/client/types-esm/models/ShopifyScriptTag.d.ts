import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyScriptTag, ShopifyScriptTagSort, ShopifyScriptTagFilter, AvailableShopifyScriptTagSelection } from "../types.js";
export declare const DefaultShopifyScriptTagSelection: {
    readonly __typename: true;
    readonly cache: true;
    readonly createdAt: true;
    readonly displayScope: true;
    readonly event: true;
    readonly id: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly source: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyScriptTag". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyScriptTagOrDefault<Options extends Selectable<AvailableShopifyScriptTagSelection>> = DeepFilterNever<Select<ShopifyScriptTag, DefaultSelection<AvailableShopifyScriptTagSelection, Options, typeof DefaultShopifyScriptTagSelection>>>;
/** Options that can be passed to the `ShopifyScriptTagManager#findOne` method */
export interface FindOneShopifyScriptTagOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyScriptTagSelection;
}
/** Options that can be passed to the `ShopifyScriptTagManager#maybeFindOne` method */
export interface MaybeFindOneShopifyScriptTagOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyScriptTagSelection;
}
/** Options that can be passed to the `ShopifyScriptTagManager#findMany` method */
export interface FindManyShopifyScriptTagsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyScriptTagSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyScriptTagSort | ShopifyScriptTagSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyScriptTagFilter | ShopifyScriptTagFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyScriptTagManager#findFirst` method */
export interface FindFirstShopifyScriptTagOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyScriptTagSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyScriptTagSort | ShopifyScriptTagSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyScriptTagFilter | ShopifyScriptTagFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyScriptTagManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyScriptTagOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyScriptTagSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyScriptTagSort | ShopifyScriptTagSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyScriptTagFilter | ShopifyScriptTagFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyScriptTag" */
export declare class ShopifyScriptTagManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyScriptTag by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyScriptTagOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyScriptTagOptions>): Promise<GadgetRecord<SelectedShopifyScriptTagOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyScriptTag";
        modelApiIdentifier: "shopifyScriptTag";
        defaultSelection: typeof DefaultShopifyScriptTagSelection;
        selectionType: AvailableShopifyScriptTagSelection;
        optionsType: FindOneShopifyScriptTagOptions;
        schemaType: Query["shopifyScriptTag"];
    };
    /**
 * Finds one shopifyScriptTag by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyScriptTagOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyScriptTagOptions>): Promise<GadgetRecord<SelectedShopifyScriptTagOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyScriptTag";
        modelApiIdentifier: "shopifyScriptTag";
        defaultSelection: typeof DefaultShopifyScriptTagSelection;
        selectionType: AvailableShopifyScriptTagSelection;
        optionsType: MaybeFindOneShopifyScriptTagOptions;
        schemaType: Query["shopifyScriptTag"];
    };
    /**
 * Finds many shopifyScriptTag. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyScriptTagsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyScriptTagsOptions>): Promise<GadgetRecordList<SelectedShopifyScriptTagOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyScriptTags";
        modelApiIdentifier: "shopifyScriptTag";
        defaultSelection: typeof DefaultShopifyScriptTagSelection;
        selectionType: AvailableShopifyScriptTagSelection;
        optionsType: FindManyShopifyScriptTagsOptions;
        schemaType: Query["shopifyScriptTag"];
    };
    /**
 * Finds the first matching shopifyScriptTag. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyScriptTagOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyScriptTagOptions>): Promise<GadgetRecord<SelectedShopifyScriptTagOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyScriptTags";
        modelApiIdentifier: "shopifyScriptTag";
        defaultSelection: typeof DefaultShopifyScriptTagSelection;
        selectionType: AvailableShopifyScriptTagSelection;
        optionsType: FindFirstShopifyScriptTagOptions;
        schemaType: Query["shopifyScriptTag"];
    };
    /**
 * Finds the first matching shopifyScriptTag. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyScriptTagOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyScriptTagOptions>): Promise<GadgetRecord<SelectedShopifyScriptTagOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyScriptTags";
        modelApiIdentifier: "shopifyScriptTag";
        defaultSelection: typeof DefaultShopifyScriptTagSelection;
        selectionType: AvailableShopifyScriptTagSelection;
        optionsType: MaybeFindFirstShopifyScriptTagOptions;
        schemaType: Query["shopifyScriptTag"];
    };
}
