import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, IDsList, ShopifyMarketRegion, ShopifyMarketRegionSort, ShopifyMarketRegionFilter, AvailableShopifyMarketRegionSelection, CreateShopifyMarketRegionInput, UpdateShopifyMarketRegionInput } from "../types.js";
export declare const DefaultShopifyMarketRegionSelection: {
    readonly __typename: true;
    readonly code: true;
    readonly createdAt: true;
    readonly id: true;
    readonly name: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyMarketRegion". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyMarketRegionOrDefault<Options extends Selectable<AvailableShopifyMarketRegionSelection>> = DeepFilterNever<Select<ShopifyMarketRegion, DefaultSelection<AvailableShopifyMarketRegionSelection, Options, typeof DefaultShopifyMarketRegionSelection>>>;
/** Options that can be passed to the `ShopifyMarketRegionManager#findOne` method */
export interface FindOneShopifyMarketRegionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyMarketRegionSelection;
}
/** Options that can be passed to the `ShopifyMarketRegionManager#maybeFindOne` method */
export interface MaybeFindOneShopifyMarketRegionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyMarketRegionSelection;
}
/** Options that can be passed to the `ShopifyMarketRegionManager#findMany` method */
export interface FindManyShopifyMarketRegionsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyMarketRegionSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyMarketRegionSort | ShopifyMarketRegionSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyMarketRegionFilter | ShopifyMarketRegionFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyMarketRegionManager#findFirst` method */
export interface FindFirstShopifyMarketRegionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyMarketRegionSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyMarketRegionSort | ShopifyMarketRegionSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyMarketRegionFilter | ShopifyMarketRegionFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyMarketRegionManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyMarketRegionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyMarketRegionSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyMarketRegionSort | ShopifyMarketRegionSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyMarketRegionFilter | ShopifyMarketRegionFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateShopifyMarketRegionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyMarketRegionSelection;
}
export interface UpdateShopifyMarketRegionOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyMarketRegionSelection;
}
export interface DeleteShopifyMarketRegionOptions {
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateShopifyMarketRegionVariables = {
    shopifyMarketRegion?: CreateShopifyMarketRegionInput;
};
/**
 * The inputs for executing create on shopifyMarketRegion.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateShopifyMarketRegionVariables = CreateShopifyMarketRegionInput;
/**
 * The return value from executing create on shopifyMarketRegion.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyMarketRegionResult<Options extends CreateShopifyMarketRegionOptions> = SelectedShopifyMarketRegionOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyMarketRegionOrDefault<Options>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createShopifyMarketRegion<Options extends CreateShopifyMarketRegionOptions>(variables: CreateShopifyMarketRegionVariables, options?: LimitToKnownKeys<Options, CreateShopifyMarketRegionOptions>): Promise<CreateShopifyMarketRegionResult<Options>>;
declare function createShopifyMarketRegion<Options extends CreateShopifyMarketRegionOptions>(variables: FullyQualifiedCreateShopifyMarketRegionVariables, options?: LimitToKnownKeys<Options, CreateShopifyMarketRegionOptions>): Promise<CreateShopifyMarketRegionResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateShopifyMarketRegionVariables = {
    shopifyMarketRegion?: UpdateShopifyMarketRegionInput;
};
/**
 * The inputs for executing update on shopifyMarketRegion.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateShopifyMarketRegionVariables = UpdateShopifyMarketRegionInput;
/**
 * The return value from executing update on shopifyMarketRegion.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyMarketRegionResult<Options extends UpdateShopifyMarketRegionOptions> = SelectedShopifyMarketRegionOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyMarketRegionOrDefault<Options>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateShopifyMarketRegion<Options extends UpdateShopifyMarketRegionOptions>(id: string, variables: UpdateShopifyMarketRegionVariables, options?: LimitToKnownKeys<Options, UpdateShopifyMarketRegionOptions>): Promise<UpdateShopifyMarketRegionResult<Options>>;
declare function updateShopifyMarketRegion<Options extends UpdateShopifyMarketRegionOptions>(id: string, variables: FullyQualifiedUpdateShopifyMarketRegionVariables, options?: LimitToKnownKeys<Options, UpdateShopifyMarketRegionOptions>): Promise<UpdateShopifyMarketRegionResult<Options>>;
/**
 * The return value from executing delete on shopifyMarketRegion.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyMarketRegionResult<Options extends DeleteShopifyMarketRegionOptions> = void extends void ? void : GadgetRecord<SelectedShopifyMarketRegionOrDefault<Options>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteShopifyMarketRegion<Options extends DeleteShopifyMarketRegionOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteShopifyMarketRegionOptions>): Promise<DeleteShopifyMarketRegionResult<Options>>;
/** All the actions available at the collection level and record level for "shopifyMarketRegion" */
export declare class ShopifyMarketRegionManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyMarketRegion by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyMarketRegionOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyMarketRegionOptions>): Promise<GadgetRecord<SelectedShopifyMarketRegionOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyMarketRegion";
        modelApiIdentifier: "shopifyMarketRegion";
        defaultSelection: typeof DefaultShopifyMarketRegionSelection;
        selectionType: AvailableShopifyMarketRegionSelection;
        optionsType: FindOneShopifyMarketRegionOptions;
        schemaType: Query["shopifyMarketRegion"];
    };
    /**
 * Finds one shopifyMarketRegion by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyMarketRegionOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyMarketRegionOptions>): Promise<GadgetRecord<SelectedShopifyMarketRegionOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyMarketRegion";
        modelApiIdentifier: "shopifyMarketRegion";
        defaultSelection: typeof DefaultShopifyMarketRegionSelection;
        selectionType: AvailableShopifyMarketRegionSelection;
        optionsType: MaybeFindOneShopifyMarketRegionOptions;
        schemaType: Query["shopifyMarketRegion"];
    };
    /**
 * Finds many shopifyMarketRegion. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyMarketRegionsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyMarketRegionsOptions>): Promise<GadgetRecordList<SelectedShopifyMarketRegionOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyMarketRegions";
        modelApiIdentifier: "shopifyMarketRegion";
        defaultSelection: typeof DefaultShopifyMarketRegionSelection;
        selectionType: AvailableShopifyMarketRegionSelection;
        optionsType: FindManyShopifyMarketRegionsOptions;
        schemaType: Query["shopifyMarketRegion"];
    };
    /**
 * Finds the first matching shopifyMarketRegion. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyMarketRegionOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyMarketRegionOptions>): Promise<GadgetRecord<SelectedShopifyMarketRegionOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyMarketRegions";
        modelApiIdentifier: "shopifyMarketRegion";
        defaultSelection: typeof DefaultShopifyMarketRegionSelection;
        selectionType: AvailableShopifyMarketRegionSelection;
        optionsType: FindFirstShopifyMarketRegionOptions;
        schemaType: Query["shopifyMarketRegion"];
    };
    /**
 * Finds the first matching shopifyMarketRegion. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyMarketRegionOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyMarketRegionOptions>): Promise<GadgetRecord<SelectedShopifyMarketRegionOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyMarketRegions";
        modelApiIdentifier: "shopifyMarketRegion";
        defaultSelection: typeof DefaultShopifyMarketRegionSelection;
        selectionType: AvailableShopifyMarketRegionSelection;
        optionsType: MaybeFindFirstShopifyMarketRegionOptions;
        schemaType: Query["shopifyMarketRegion"];
    };
    create: typeof createShopifyMarketRegion & {
        type: "action";
        operationName: "createShopifyMarketRegion";
        namespace: null;
        modelApiIdentifier: "shopifyMarketRegion";
        modelSelectionField: "shopifyMarketRegion";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyMarketRegionSelection;
        selectionType: AvailableShopifyMarketRegionSelection;
        optionsType: CreateShopifyMarketRegionOptions;
        schemaType: Query["shopifyMarketRegion"];
        variablesType: ((FullyQualifiedCreateShopifyMarketRegionVariables | CreateShopifyMarketRegionVariables)) | undefined;
        variables: {
            "shopifyMarketRegion": {
                required: false;
                type: "CreateShopifyMarketRegionInput";
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
* Executes the bulkCreate action with the given inputs.
*/
    bulkCreate: {
        <Options extends CreateShopifyMarketRegionOptions>(inputs: (FullyQualifiedCreateShopifyMarketRegionVariables | CreateShopifyMarketRegionVariables)[], options?: LimitToKnownKeys<Options, CreateShopifyMarketRegionOptions>): Promise<CreateShopifyMarketRegionResult<Options>[]>;
        type: "action";
        operationName: "bulkCreateShopifyMarketRegions";
        namespace: null;
        modelApiIdentifier: "shopifyMarketRegion";
        modelSelectionField: "shopifyMarketRegions";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyMarketRegionSelection;
        selectionType: AvailableShopifyMarketRegionSelection;
        optionsType: CreateShopifyMarketRegionOptions;
        schemaType: Query["shopifyMarketRegion"];
        variablesType: (FullyQualifiedCreateShopifyMarketRegionVariables | CreateShopifyMarketRegionVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCreateShopifyMarketRegionsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    update: typeof updateShopifyMarketRegion & {
        type: "action";
        operationName: "updateShopifyMarketRegion";
        namespace: null;
        modelApiIdentifier: "shopifyMarketRegion";
        modelSelectionField: "shopifyMarketRegion";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyMarketRegionSelection;
        selectionType: AvailableShopifyMarketRegionSelection;
        optionsType: UpdateShopifyMarketRegionOptions;
        schemaType: Query["shopifyMarketRegion"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedUpdateShopifyMarketRegionVariables | UpdateShopifyMarketRegionVariables));
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifyMarketRegion": {
                required: false;
                type: "UpdateShopifyMarketRegionInput";
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
        <Options extends UpdateShopifyMarketRegionOptions>(inputs: (FullyQualifiedUpdateShopifyMarketRegionVariables | UpdateShopifyMarketRegionVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, UpdateShopifyMarketRegionOptions>): Promise<UpdateShopifyMarketRegionResult<Options>[]>;
        type: "action";
        operationName: "bulkUpdateShopifyMarketRegions";
        namespace: null;
        modelApiIdentifier: "shopifyMarketRegion";
        modelSelectionField: "shopifyMarketRegions";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyMarketRegionSelection;
        selectionType: AvailableShopifyMarketRegionSelection;
        optionsType: UpdateShopifyMarketRegionOptions;
        schemaType: Query["shopifyMarketRegion"];
        variablesType: (FullyQualifiedUpdateShopifyMarketRegionVariables | UpdateShopifyMarketRegionVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkUpdateShopifyMarketRegionsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    delete: typeof deleteShopifyMarketRegion & {
        type: "action";
        operationName: "deleteShopifyMarketRegion";
        namespace: null;
        modelApiIdentifier: "shopifyMarketRegion";
        modelSelectionField: "shopifyMarketRegion";
        isBulk: false;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteShopifyMarketRegionOptions;
        schemaType: null;
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
* Executes the bulkDelete action with the given inputs. Deletes the records on the server.
*/
    bulkDelete: {
        <Options extends DeleteShopifyMarketRegionOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteShopifyMarketRegionOptions>): Promise<DeleteShopifyMarketRegionResult<Options>[]>;
        type: "action";
        operationName: "bulkDeleteShopifyMarketRegions";
        namespace: null;
        modelApiIdentifier: "shopifyMarketRegion";
        modelSelectionField: "shopifyMarketRegions";
        isBulk: true;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteShopifyMarketRegionOptions;
        schemaType: null;
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
