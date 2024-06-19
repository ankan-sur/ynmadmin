import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyAppInstallation, ShopifyAppInstallationSort, ShopifyAppInstallationFilter, AvailableShopifyAppInstallationSelection } from "../types.js";
export declare const DefaultShopifyAppInstallationSelection: {
    readonly __typename: true;
    readonly accessScopes: true;
    readonly createdAt: true;
    readonly id: true;
    readonly launchUrl: true;
    readonly uninstallUrl: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyAppInstallation". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyAppInstallationOrDefault<Options extends Selectable<AvailableShopifyAppInstallationSelection>> = DeepFilterNever<Select<ShopifyAppInstallation, DefaultSelection<AvailableShopifyAppInstallationSelection, Options, typeof DefaultShopifyAppInstallationSelection>>>;
/** Options that can be passed to the `ShopifyAppInstallationManager#findOne` method */
export interface FindOneShopifyAppInstallationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyAppInstallationSelection;
}
/** Options that can be passed to the `ShopifyAppInstallationManager#maybeFindOne` method */
export interface MaybeFindOneShopifyAppInstallationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyAppInstallationSelection;
}
/** Options that can be passed to the `ShopifyAppInstallationManager#findMany` method */
export interface FindManyShopifyAppInstallationsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyAppInstallationSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyAppInstallationSort | ShopifyAppInstallationSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyAppInstallationFilter | ShopifyAppInstallationFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyAppInstallationManager#findFirst` method */
export interface FindFirstShopifyAppInstallationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyAppInstallationSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyAppInstallationSort | ShopifyAppInstallationSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyAppInstallationFilter | ShopifyAppInstallationFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyAppInstallationManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyAppInstallationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyAppInstallationSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyAppInstallationSort | ShopifyAppInstallationSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyAppInstallationFilter | ShopifyAppInstallationFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyAppInstallation" */
export declare class ShopifyAppInstallationManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyAppInstallation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyAppInstallationOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyAppInstallationOptions>): Promise<GadgetRecord<SelectedShopifyAppInstallationOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyAppInstallation";
        modelApiIdentifier: "shopifyAppInstallation";
        defaultSelection: typeof DefaultShopifyAppInstallationSelection;
        selectionType: AvailableShopifyAppInstallationSelection;
        optionsType: FindOneShopifyAppInstallationOptions;
        schemaType: Query["shopifyAppInstallation"];
    };
    /**
 * Finds one shopifyAppInstallation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyAppInstallationOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyAppInstallationOptions>): Promise<GadgetRecord<SelectedShopifyAppInstallationOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyAppInstallation";
        modelApiIdentifier: "shopifyAppInstallation";
        defaultSelection: typeof DefaultShopifyAppInstallationSelection;
        selectionType: AvailableShopifyAppInstallationSelection;
        optionsType: MaybeFindOneShopifyAppInstallationOptions;
        schemaType: Query["shopifyAppInstallation"];
    };
    /**
 * Finds many shopifyAppInstallation. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyAppInstallationsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyAppInstallationsOptions>): Promise<GadgetRecordList<SelectedShopifyAppInstallationOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyAppInstallations";
        modelApiIdentifier: "shopifyAppInstallation";
        defaultSelection: typeof DefaultShopifyAppInstallationSelection;
        selectionType: AvailableShopifyAppInstallationSelection;
        optionsType: FindManyShopifyAppInstallationsOptions;
        schemaType: Query["shopifyAppInstallation"];
    };
    /**
 * Finds the first matching shopifyAppInstallation. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyAppInstallationOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyAppInstallationOptions>): Promise<GadgetRecord<SelectedShopifyAppInstallationOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyAppInstallations";
        modelApiIdentifier: "shopifyAppInstallation";
        defaultSelection: typeof DefaultShopifyAppInstallationSelection;
        selectionType: AvailableShopifyAppInstallationSelection;
        optionsType: FindFirstShopifyAppInstallationOptions;
        schemaType: Query["shopifyAppInstallation"];
    };
    /**
 * Finds the first matching shopifyAppInstallation. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyAppInstallationOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyAppInstallationOptions>): Promise<GadgetRecord<SelectedShopifyAppInstallationOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyAppInstallations";
        modelApiIdentifier: "shopifyAppInstallation";
        defaultSelection: typeof DefaultShopifyAppInstallationSelection;
        selectionType: AvailableShopifyAppInstallationSelection;
        optionsType: MaybeFindFirstShopifyAppInstallationOptions;
        schemaType: Query["shopifyAppInstallation"];
    };
}
