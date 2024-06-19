import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, IDsList, ShopifyCollection, ShopifyCollectionSort, ShopifyCollectionFilter, AvailableShopifyCollectionSelection, UpdateShopifyCollectionInput } from "../types.js";
export declare const DefaultShopifyCollectionSelection: {
    readonly __typename: true;
    readonly body: true;
    readonly collected: true;
    readonly collectionType: true;
    readonly createdAt: true;
    readonly customSales: true;
    readonly disjunctive: true;
    readonly handle: true;
    readonly id: true;
    readonly image: true;
    readonly publishedAt: true;
    readonly publishedScope: true;
    readonly rules: true;
    readonly shopifyUpdatedAt: true;
    readonly shopname: true;
    readonly smartSales: true;
    readonly sortOrder: true;
    readonly templateSuffix: true;
    readonly title: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyCollection". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyCollectionOrDefault<Options extends Selectable<AvailableShopifyCollectionSelection>> = DeepFilterNever<Select<ShopifyCollection, DefaultSelection<AvailableShopifyCollectionSelection, Options, typeof DefaultShopifyCollectionSelection>>>;
/** Options that can be passed to the `ShopifyCollectionManager#findOne` method */
export interface FindOneShopifyCollectionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCollectionSelection;
}
/** Options that can be passed to the `ShopifyCollectionManager#maybeFindOne` method */
export interface MaybeFindOneShopifyCollectionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCollectionSelection;
}
/** Options that can be passed to the `ShopifyCollectionManager#findMany` method */
export interface FindManyShopifyCollectionsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCollectionSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCollectionSort | ShopifyCollectionSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCollectionFilter | ShopifyCollectionFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyCollectionManager#findFirst` method */
export interface FindFirstShopifyCollectionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCollectionSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCollectionSort | ShopifyCollectionSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCollectionFilter | ShopifyCollectionFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyCollectionManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyCollectionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCollectionSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCollectionSort | ShopifyCollectionSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCollectionFilter | ShopifyCollectionFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface UpdateShopifyCollectionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCollectionSelection;
}
export interface SmartCollectorShopifyCollectionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCollectionSelection;
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateShopifyCollectionVariables = {
    shopifyCollection?: UpdateShopifyCollectionInput;
};
/**
 * The inputs for executing update on shopifyCollection.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateShopifyCollectionVariables = UpdateShopifyCollectionInput;
/**
 * The return value from executing update on shopifyCollection.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyCollectionResult<Options extends UpdateShopifyCollectionOptions> = SelectedShopifyCollectionOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyCollectionOrDefault<Options>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateShopifyCollection<Options extends UpdateShopifyCollectionOptions>(id: string, variables: UpdateShopifyCollectionVariables, options?: LimitToKnownKeys<Options, UpdateShopifyCollectionOptions>): Promise<UpdateShopifyCollectionResult<Options>>;
declare function updateShopifyCollection<Options extends UpdateShopifyCollectionOptions>(id: string, variables: FullyQualifiedUpdateShopifyCollectionVariables, options?: LimitToKnownKeys<Options, UpdateShopifyCollectionOptions>): Promise<UpdateShopifyCollectionResult<Options>>;
/**
 * The return value from executing smartCollector on shopifyCollection.
 * "Is a GadgetRecord of the model's type."
 **/
export type SmartCollectorShopifyCollectionResult<Options extends SmartCollectorShopifyCollectionOptions> = SelectedShopifyCollectionOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyCollectionOrDefault<Options>>;
/**
  * Executes the smartCollector action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function smartCollectorShopifyCollection<Options extends SmartCollectorShopifyCollectionOptions>(id: string, options?: LimitToKnownKeys<Options, SmartCollectorShopifyCollectionOptions>): Promise<SmartCollectorShopifyCollectionResult<Options>>;
/** All the actions available at the collection level and record level for "shopifyCollection" */
export declare class ShopifyCollectionManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyCollection by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyCollectionOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCollectionOptions>): Promise<GadgetRecord<SelectedShopifyCollectionOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyCollection";
        modelApiIdentifier: "shopifyCollection";
        defaultSelection: typeof DefaultShopifyCollectionSelection;
        selectionType: AvailableShopifyCollectionSelection;
        optionsType: FindOneShopifyCollectionOptions;
        schemaType: Query["shopifyCollection"];
    };
    /**
 * Finds one shopifyCollection by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyCollectionOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCollectionOptions>): Promise<GadgetRecord<SelectedShopifyCollectionOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyCollection";
        modelApiIdentifier: "shopifyCollection";
        defaultSelection: typeof DefaultShopifyCollectionSelection;
        selectionType: AvailableShopifyCollectionSelection;
        optionsType: MaybeFindOneShopifyCollectionOptions;
        schemaType: Query["shopifyCollection"];
    };
    /**
 * Finds many shopifyCollection. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyCollectionsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCollectionsOptions>): Promise<GadgetRecordList<SelectedShopifyCollectionOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyCollections";
        modelApiIdentifier: "shopifyCollection";
        defaultSelection: typeof DefaultShopifyCollectionSelection;
        selectionType: AvailableShopifyCollectionSelection;
        optionsType: FindManyShopifyCollectionsOptions;
        schemaType: Query["shopifyCollection"];
    };
    /**
 * Finds the first matching shopifyCollection. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyCollectionOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCollectionOptions>): Promise<GadgetRecord<SelectedShopifyCollectionOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyCollections";
        modelApiIdentifier: "shopifyCollection";
        defaultSelection: typeof DefaultShopifyCollectionSelection;
        selectionType: AvailableShopifyCollectionSelection;
        optionsType: FindFirstShopifyCollectionOptions;
        schemaType: Query["shopifyCollection"];
    };
    /**
 * Finds the first matching shopifyCollection. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyCollectionOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCollectionOptions>): Promise<GadgetRecord<SelectedShopifyCollectionOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyCollections";
        modelApiIdentifier: "shopifyCollection";
        defaultSelection: typeof DefaultShopifyCollectionSelection;
        selectionType: AvailableShopifyCollectionSelection;
        optionsType: MaybeFindFirstShopifyCollectionOptions;
        schemaType: Query["shopifyCollection"];
    };
    update: typeof updateShopifyCollection & {
        type: "action";
        operationName: "updateShopifyCollection";
        namespace: null;
        modelApiIdentifier: "shopifyCollection";
        modelSelectionField: "shopifyCollection";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyCollectionSelection;
        selectionType: AvailableShopifyCollectionSelection;
        optionsType: UpdateShopifyCollectionOptions;
        schemaType: Query["shopifyCollection"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedUpdateShopifyCollectionVariables | UpdateShopifyCollectionVariables));
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifyCollection": {
                required: false;
                type: "UpdateShopifyCollectionInput";
            };
        };
        hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: true;
    };
    /**
* Executes the bulkUpdate action with the given inputs.
*/
    bulkUpdate: {
        <Options extends UpdateShopifyCollectionOptions>(inputs: (FullyQualifiedUpdateShopifyCollectionVariables | UpdateShopifyCollectionVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, UpdateShopifyCollectionOptions>): Promise<UpdateShopifyCollectionResult<Options>[]>;
        type: "action";
        operationName: "bulkUpdateShopifyCollections";
        namespace: null;
        modelApiIdentifier: "shopifyCollection";
        modelSelectionField: "shopifyCollections";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyCollectionSelection;
        selectionType: AvailableShopifyCollectionSelection;
        optionsType: UpdateShopifyCollectionOptions;
        schemaType: Query["shopifyCollection"];
        variablesType: (FullyQualifiedUpdateShopifyCollectionVariables | UpdateShopifyCollectionVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkUpdateShopifyCollectionsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    smartCollector: typeof smartCollectorShopifyCollection & {
        type: "action";
        operationName: "smartCollectorShopifyCollection";
        namespace: null;
        modelApiIdentifier: "shopifyCollection";
        modelSelectionField: "shopifyCollection";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyCollectionSelection;
        selectionType: AvailableShopifyCollectionSelection;
        optionsType: SmartCollectorShopifyCollectionOptions;
        schemaType: Query["shopifyCollection"];
        variablesType: ({
            id: string;
        } & {});
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
        };
        hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: false;
    };
    /**
* Executes the bulkSmartCollector action with the given inputs.
*/
    bulkSmartCollector: {
        <Options extends SmartCollectorShopifyCollectionOptions>(ids: string[], options?: LimitToKnownKeys<Options, SmartCollectorShopifyCollectionOptions>): Promise<SmartCollectorShopifyCollectionResult<Options>[]>;
        type: "action";
        operationName: "bulkSmartCollectorShopifyCollections";
        namespace: null;
        modelApiIdentifier: "shopifyCollection";
        modelSelectionField: "shopifyCollections";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyCollectionSelection;
        selectionType: AvailableShopifyCollectionSelection;
        optionsType: SmartCollectorShopifyCollectionOptions;
        schemaType: Query["shopifyCollection"];
        variablesType: IDsList | undefined;
        variables: {
            ids: {
                required: true;
                type: "[GadgetID!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
}
export {};
