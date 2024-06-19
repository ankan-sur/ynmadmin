import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyApp, ShopifyAppSort, ShopifyAppFilter, AvailableShopifyAppSelection } from "../types.js";
export declare const DefaultShopifyAppSelection: {
    readonly __typename: true;
    readonly apiKey: true;
    readonly appStoreAppUrl: true;
    readonly appStoreDeveloperUrl: true;
    readonly availableAccessScopes: true;
    readonly createdAt: true;
    readonly description: true;
    readonly developerName: true;
    readonly developerType: true;
    readonly embedded: true;
    readonly failedRequirements: true;
    readonly features: true;
    readonly feedback: true;
    readonly handle: true;
    readonly id: true;
    readonly previouslyInstalled: true;
    readonly pricingDetails: true;
    readonly pricingDetailsSummary: true;
    readonly privacyPolicyUrl: true;
    readonly publicCategory: true;
    readonly published: true;
    readonly requestedAccessScopes: true;
    readonly shopifyDeveloped: true;
    readonly title: true;
    readonly uninstallMessage: true;
    readonly updatedAt: true;
    readonly webhookApiVersion: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyApp". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyAppOrDefault<Options extends Selectable<AvailableShopifyAppSelection>> = DeepFilterNever<Select<ShopifyApp, DefaultSelection<AvailableShopifyAppSelection, Options, typeof DefaultShopifyAppSelection>>>;
/** Options that can be passed to the `ShopifyAppManager#findOne` method */
export interface FindOneShopifyAppOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyAppSelection;
}
/** Options that can be passed to the `ShopifyAppManager#maybeFindOne` method */
export interface MaybeFindOneShopifyAppOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyAppSelection;
}
/** Options that can be passed to the `ShopifyAppManager#findMany` method */
export interface FindManyShopifyAppsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyAppSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyAppSort | ShopifyAppSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyAppFilter | ShopifyAppFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyAppManager#findFirst` method */
export interface FindFirstShopifyAppOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyAppSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyAppSort | ShopifyAppSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyAppFilter | ShopifyAppFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyAppManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyAppOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyAppSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyAppSort | ShopifyAppSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyAppFilter | ShopifyAppFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** All the actions available at the collection level and record level for "shopifyApp" */
export declare class ShopifyAppManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyApp by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyAppOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyAppOptions>): Promise<GadgetRecord<SelectedShopifyAppOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyApp";
        modelApiIdentifier: "shopifyApp";
        defaultSelection: typeof DefaultShopifyAppSelection;
        selectionType: AvailableShopifyAppSelection;
        optionsType: FindOneShopifyAppOptions;
        schemaType: Query["shopifyApp"];
    };
    /**
 * Finds one shopifyApp by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyAppOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyAppOptions>): Promise<GadgetRecord<SelectedShopifyAppOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyApp";
        modelApiIdentifier: "shopifyApp";
        defaultSelection: typeof DefaultShopifyAppSelection;
        selectionType: AvailableShopifyAppSelection;
        optionsType: MaybeFindOneShopifyAppOptions;
        schemaType: Query["shopifyApp"];
    };
    /**
 * Finds many shopifyApp. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyAppsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyAppsOptions>): Promise<GadgetRecordList<SelectedShopifyAppOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyApps";
        modelApiIdentifier: "shopifyApp";
        defaultSelection: typeof DefaultShopifyAppSelection;
        selectionType: AvailableShopifyAppSelection;
        optionsType: FindManyShopifyAppsOptions;
        schemaType: Query["shopifyApp"];
    };
    /**
 * Finds the first matching shopifyApp. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyAppOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyAppOptions>): Promise<GadgetRecord<SelectedShopifyAppOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyApps";
        modelApiIdentifier: "shopifyApp";
        defaultSelection: typeof DefaultShopifyAppSelection;
        selectionType: AvailableShopifyAppSelection;
        optionsType: FindFirstShopifyAppOptions;
        schemaType: Query["shopifyApp"];
    };
    /**
 * Finds the first matching shopifyApp. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyAppOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyAppOptions>): Promise<GadgetRecord<SelectedShopifyAppOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyApps";
        modelApiIdentifier: "shopifyApp";
        defaultSelection: typeof DefaultShopifyAppSelection;
        selectionType: AvailableShopifyAppSelection;
        optionsType: MaybeFindFirstShopifyAppOptions;
        schemaType: Query["shopifyApp"];
    };
}
