import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, IDsList, ShopifySmartCollect, ShopifySmartCollectSort, ShopifySmartCollectFilter, AvailableShopifySmartCollectSelection, CreateShopifySmartCollectInput, UpdateShopifySmartCollectInput } from "../types.js";
export declare const DefaultShopifySmartCollectSelection: {
    readonly __typename: true;
    readonly createdAt: true;
    readonly id: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifySmartCollect". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifySmartCollectOrDefault<Options extends Selectable<AvailableShopifySmartCollectSelection>> = DeepFilterNever<Select<ShopifySmartCollect, DefaultSelection<AvailableShopifySmartCollectSelection, Options, typeof DefaultShopifySmartCollectSelection>>>;
/** Options that can be passed to the `ShopifySmartCollectManager#findOne` method */
export interface FindOneShopifySmartCollectOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySmartCollectSelection;
}
/** Options that can be passed to the `ShopifySmartCollectManager#maybeFindOne` method */
export interface MaybeFindOneShopifySmartCollectOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySmartCollectSelection;
}
/** Options that can be passed to the `ShopifySmartCollectManager#findMany` method */
export interface FindManyShopifySmartCollectsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySmartCollectSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifySmartCollectSort | ShopifySmartCollectSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifySmartCollectFilter | ShopifySmartCollectFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifySmartCollectManager#findFirst` method */
export interface FindFirstShopifySmartCollectOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySmartCollectSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifySmartCollectSort | ShopifySmartCollectSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifySmartCollectFilter | ShopifySmartCollectFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifySmartCollectManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifySmartCollectOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySmartCollectSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifySmartCollectSort | ShopifySmartCollectSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifySmartCollectFilter | ShopifySmartCollectFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateShopifySmartCollectOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySmartCollectSelection;
}
export interface UpdateShopifySmartCollectOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifySmartCollectSelection;
}
export interface DeleteShopifySmartCollectOptions {
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateShopifySmartCollectVariables = {
    shopifySmartCollect?: CreateShopifySmartCollectInput;
};
/**
 * The inputs for executing create on shopifySmartCollect.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateShopifySmartCollectVariables = CreateShopifySmartCollectInput;
/**
 * The return value from executing create on shopifySmartCollect.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifySmartCollectResult<Options extends CreateShopifySmartCollectOptions> = SelectedShopifySmartCollectOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifySmartCollectOrDefault<Options>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createShopifySmartCollect<Options extends CreateShopifySmartCollectOptions>(variables: CreateShopifySmartCollectVariables, options?: LimitToKnownKeys<Options, CreateShopifySmartCollectOptions>): Promise<CreateShopifySmartCollectResult<Options>>;
declare function createShopifySmartCollect<Options extends CreateShopifySmartCollectOptions>(variables: FullyQualifiedCreateShopifySmartCollectVariables, options?: LimitToKnownKeys<Options, CreateShopifySmartCollectOptions>): Promise<CreateShopifySmartCollectResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateShopifySmartCollectVariables = {
    shopifySmartCollect?: UpdateShopifySmartCollectInput;
};
/**
 * The inputs for executing update on shopifySmartCollect.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateShopifySmartCollectVariables = UpdateShopifySmartCollectInput;
/**
 * The return value from executing update on shopifySmartCollect.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifySmartCollectResult<Options extends UpdateShopifySmartCollectOptions> = SelectedShopifySmartCollectOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifySmartCollectOrDefault<Options>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateShopifySmartCollect<Options extends UpdateShopifySmartCollectOptions>(id: string, variables: UpdateShopifySmartCollectVariables, options?: LimitToKnownKeys<Options, UpdateShopifySmartCollectOptions>): Promise<UpdateShopifySmartCollectResult<Options>>;
declare function updateShopifySmartCollect<Options extends UpdateShopifySmartCollectOptions>(id: string, variables: FullyQualifiedUpdateShopifySmartCollectVariables, options?: LimitToKnownKeys<Options, UpdateShopifySmartCollectOptions>): Promise<UpdateShopifySmartCollectResult<Options>>;
/**
 * The return value from executing delete on shopifySmartCollect.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifySmartCollectResult<Options extends DeleteShopifySmartCollectOptions> = void extends void ? void : GadgetRecord<SelectedShopifySmartCollectOrDefault<Options>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteShopifySmartCollect<Options extends DeleteShopifySmartCollectOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteShopifySmartCollectOptions>): Promise<DeleteShopifySmartCollectResult<Options>>;
/** All the actions available at the collection level and record level for "shopifySmartCollect" */
export declare class ShopifySmartCollectManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifySmartCollect by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifySmartCollectOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifySmartCollectOptions>): Promise<GadgetRecord<SelectedShopifySmartCollectOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifySmartCollect";
        modelApiIdentifier: "shopifySmartCollect";
        defaultSelection: typeof DefaultShopifySmartCollectSelection;
        selectionType: AvailableShopifySmartCollectSelection;
        optionsType: FindOneShopifySmartCollectOptions;
        schemaType: Query["shopifySmartCollect"];
    };
    /**
 * Finds one shopifySmartCollect by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifySmartCollectOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifySmartCollectOptions>): Promise<GadgetRecord<SelectedShopifySmartCollectOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifySmartCollect";
        modelApiIdentifier: "shopifySmartCollect";
        defaultSelection: typeof DefaultShopifySmartCollectSelection;
        selectionType: AvailableShopifySmartCollectSelection;
        optionsType: MaybeFindOneShopifySmartCollectOptions;
        schemaType: Query["shopifySmartCollect"];
    };
    /**
 * Finds many shopifySmartCollect. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifySmartCollectsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifySmartCollectsOptions>): Promise<GadgetRecordList<SelectedShopifySmartCollectOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifySmartCollects";
        modelApiIdentifier: "shopifySmartCollect";
        defaultSelection: typeof DefaultShopifySmartCollectSelection;
        selectionType: AvailableShopifySmartCollectSelection;
        optionsType: FindManyShopifySmartCollectsOptions;
        schemaType: Query["shopifySmartCollect"];
    };
    /**
 * Finds the first matching shopifySmartCollect. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifySmartCollectOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifySmartCollectOptions>): Promise<GadgetRecord<SelectedShopifySmartCollectOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifySmartCollects";
        modelApiIdentifier: "shopifySmartCollect";
        defaultSelection: typeof DefaultShopifySmartCollectSelection;
        selectionType: AvailableShopifySmartCollectSelection;
        optionsType: FindFirstShopifySmartCollectOptions;
        schemaType: Query["shopifySmartCollect"];
    };
    /**
 * Finds the first matching shopifySmartCollect. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifySmartCollectOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifySmartCollectOptions>): Promise<GadgetRecord<SelectedShopifySmartCollectOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifySmartCollects";
        modelApiIdentifier: "shopifySmartCollect";
        defaultSelection: typeof DefaultShopifySmartCollectSelection;
        selectionType: AvailableShopifySmartCollectSelection;
        optionsType: MaybeFindFirstShopifySmartCollectOptions;
        schemaType: Query["shopifySmartCollect"];
    };
    /**
  * Finds one shopifySmartCollect by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneShopifySmartCollectOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifySmartCollectOptions>): Promise<GadgetRecord<SelectedShopifySmartCollectOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifySmartCollects";
        modelApiIdentifier: "shopifySmartCollect";
        defaultSelection: typeof DefaultShopifySmartCollectSelection;
        selectionType: AvailableShopifySmartCollectSelection;
        optionsType: FindOneShopifySmartCollectOptions;
        schemaType: Query["shopifySmartCollect"];
    };
    create: typeof createShopifySmartCollect & {
        type: "action";
        operationName: "createShopifySmartCollect";
        namespace: null;
        modelApiIdentifier: "shopifySmartCollect";
        modelSelectionField: "shopifySmartCollect";
        isBulk: false;
        defaultSelection: typeof DefaultShopifySmartCollectSelection;
        selectionType: AvailableShopifySmartCollectSelection;
        optionsType: CreateShopifySmartCollectOptions;
        schemaType: Query["shopifySmartCollect"];
        variablesType: ((FullyQualifiedCreateShopifySmartCollectVariables | CreateShopifySmartCollectVariables)) | undefined;
        variables: {
            "shopifySmartCollect": {
                required: false;
                type: "CreateShopifySmartCollectInput";
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
        <Options extends CreateShopifySmartCollectOptions>(inputs: (FullyQualifiedCreateShopifySmartCollectVariables | CreateShopifySmartCollectVariables)[], options?: LimitToKnownKeys<Options, CreateShopifySmartCollectOptions>): Promise<CreateShopifySmartCollectResult<Options>[]>;
        type: "action";
        operationName: "bulkCreateShopifySmartCollects";
        namespace: null;
        modelApiIdentifier: "shopifySmartCollect";
        modelSelectionField: "shopifySmartCollects";
        isBulk: true;
        defaultSelection: typeof DefaultShopifySmartCollectSelection;
        selectionType: AvailableShopifySmartCollectSelection;
        optionsType: CreateShopifySmartCollectOptions;
        schemaType: Query["shopifySmartCollect"];
        variablesType: (FullyQualifiedCreateShopifySmartCollectVariables | CreateShopifySmartCollectVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCreateShopifySmartCollectsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    update: typeof updateShopifySmartCollect & {
        type: "action";
        operationName: "updateShopifySmartCollect";
        namespace: null;
        modelApiIdentifier: "shopifySmartCollect";
        modelSelectionField: "shopifySmartCollect";
        isBulk: false;
        defaultSelection: typeof DefaultShopifySmartCollectSelection;
        selectionType: AvailableShopifySmartCollectSelection;
        optionsType: UpdateShopifySmartCollectOptions;
        schemaType: Query["shopifySmartCollect"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedUpdateShopifySmartCollectVariables | UpdateShopifySmartCollectVariables));
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifySmartCollect": {
                required: false;
                type: "UpdateShopifySmartCollectInput";
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
        <Options extends UpdateShopifySmartCollectOptions>(inputs: (FullyQualifiedUpdateShopifySmartCollectVariables | UpdateShopifySmartCollectVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, UpdateShopifySmartCollectOptions>): Promise<UpdateShopifySmartCollectResult<Options>[]>;
        type: "action";
        operationName: "bulkUpdateShopifySmartCollects";
        namespace: null;
        modelApiIdentifier: "shopifySmartCollect";
        modelSelectionField: "shopifySmartCollects";
        isBulk: true;
        defaultSelection: typeof DefaultShopifySmartCollectSelection;
        selectionType: AvailableShopifySmartCollectSelection;
        optionsType: UpdateShopifySmartCollectOptions;
        schemaType: Query["shopifySmartCollect"];
        variablesType: (FullyQualifiedUpdateShopifySmartCollectVariables | UpdateShopifySmartCollectVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkUpdateShopifySmartCollectsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    delete: typeof deleteShopifySmartCollect & {
        type: "action";
        operationName: "deleteShopifySmartCollect";
        namespace: null;
        modelApiIdentifier: "shopifySmartCollect";
        modelSelectionField: "shopifySmartCollect";
        isBulk: false;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteShopifySmartCollectOptions;
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
        <Options extends DeleteShopifySmartCollectOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteShopifySmartCollectOptions>): Promise<DeleteShopifySmartCollectResult<Options>[]>;
        type: "action";
        operationName: "bulkDeleteShopifySmartCollects";
        namespace: null;
        modelApiIdentifier: "shopifySmartCollect";
        modelSelectionField: "shopifySmartCollects";
        isBulk: true;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteShopifySmartCollectOptions;
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
