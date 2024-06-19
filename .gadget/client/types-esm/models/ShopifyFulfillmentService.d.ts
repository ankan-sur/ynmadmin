import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, IDsList, ShopifyFulfillmentService, ShopifyFulfillmentServiceSort, ShopifyFulfillmentServiceFilter, AvailableShopifyFulfillmentServiceSelection, CreateShopifyFulfillmentServiceInput, UpdateShopifyFulfillmentServiceInput } from "../types.js";
export declare const DefaultShopifyFulfillmentServiceSelection: {
    readonly __typename: true;
    readonly callbackUrl: true;
    readonly createdAt: true;
    readonly format: true;
    readonly fulfillmentOrdersOptIn: true;
    readonly handle: true;
    readonly id: true;
    readonly inventoryManagement: true;
    readonly name: true;
    readonly permitsSkuSharing: true;
    readonly requiresShippingMethod: true;
    readonly trackingSupport: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyFulfillmentService". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyFulfillmentServiceOrDefault<Options extends Selectable<AvailableShopifyFulfillmentServiceSelection>> = DeepFilterNever<Select<ShopifyFulfillmentService, DefaultSelection<AvailableShopifyFulfillmentServiceSelection, Options, typeof DefaultShopifyFulfillmentServiceSelection>>>;
/** Options that can be passed to the `ShopifyFulfillmentServiceManager#findOne` method */
export interface FindOneShopifyFulfillmentServiceOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentServiceSelection;
}
/** Options that can be passed to the `ShopifyFulfillmentServiceManager#maybeFindOne` method */
export interface MaybeFindOneShopifyFulfillmentServiceOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentServiceSelection;
}
/** Options that can be passed to the `ShopifyFulfillmentServiceManager#findMany` method */
export interface FindManyShopifyFulfillmentServicesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentServiceSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentServiceSort | ShopifyFulfillmentServiceSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentServiceFilter | ShopifyFulfillmentServiceFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyFulfillmentServiceManager#findFirst` method */
export interface FindFirstShopifyFulfillmentServiceOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentServiceSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentServiceSort | ShopifyFulfillmentServiceSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentServiceFilter | ShopifyFulfillmentServiceFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyFulfillmentServiceManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyFulfillmentServiceOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentServiceSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentServiceSort | ShopifyFulfillmentServiceSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentServiceFilter | ShopifyFulfillmentServiceFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateShopifyFulfillmentServiceOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentServiceSelection;
}
export interface UpdateShopifyFulfillmentServiceOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentServiceSelection;
}
export interface DeleteShopifyFulfillmentServiceOptions {
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateShopifyFulfillmentServiceVariables = {
    shopifyFulfillmentService?: CreateShopifyFulfillmentServiceInput;
};
/**
 * The inputs for executing create on shopifyFulfillmentService.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateShopifyFulfillmentServiceVariables = CreateShopifyFulfillmentServiceInput;
/**
 * The return value from executing create on shopifyFulfillmentService.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyFulfillmentServiceResult<Options extends CreateShopifyFulfillmentServiceOptions> = SelectedShopifyFulfillmentServiceOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyFulfillmentServiceOrDefault<Options>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createShopifyFulfillmentService<Options extends CreateShopifyFulfillmentServiceOptions>(variables: CreateShopifyFulfillmentServiceVariables, options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentServiceOptions>): Promise<CreateShopifyFulfillmentServiceResult<Options>>;
declare function createShopifyFulfillmentService<Options extends CreateShopifyFulfillmentServiceOptions>(variables: FullyQualifiedCreateShopifyFulfillmentServiceVariables, options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentServiceOptions>): Promise<CreateShopifyFulfillmentServiceResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateShopifyFulfillmentServiceVariables = {
    shopifyFulfillmentService?: UpdateShopifyFulfillmentServiceInput;
};
/**
 * The inputs for executing update on shopifyFulfillmentService.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateShopifyFulfillmentServiceVariables = UpdateShopifyFulfillmentServiceInput;
/**
 * The return value from executing update on shopifyFulfillmentService.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyFulfillmentServiceResult<Options extends UpdateShopifyFulfillmentServiceOptions> = SelectedShopifyFulfillmentServiceOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyFulfillmentServiceOrDefault<Options>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateShopifyFulfillmentService<Options extends UpdateShopifyFulfillmentServiceOptions>(id: string, variables: UpdateShopifyFulfillmentServiceVariables, options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentServiceOptions>): Promise<UpdateShopifyFulfillmentServiceResult<Options>>;
declare function updateShopifyFulfillmentService<Options extends UpdateShopifyFulfillmentServiceOptions>(id: string, variables: FullyQualifiedUpdateShopifyFulfillmentServiceVariables, options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentServiceOptions>): Promise<UpdateShopifyFulfillmentServiceResult<Options>>;
/**
 * The return value from executing delete on shopifyFulfillmentService.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyFulfillmentServiceResult<Options extends DeleteShopifyFulfillmentServiceOptions> = void extends void ? void : GadgetRecord<SelectedShopifyFulfillmentServiceOrDefault<Options>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteShopifyFulfillmentService<Options extends DeleteShopifyFulfillmentServiceOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentServiceOptions>): Promise<DeleteShopifyFulfillmentServiceResult<Options>>;
/** All the actions available at the collection level and record level for "shopifyFulfillmentService" */
export declare class ShopifyFulfillmentServiceManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyFulfillmentService by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyFulfillmentServiceOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentServiceOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentServiceOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyFulfillmentService";
        modelApiIdentifier: "shopifyFulfillmentService";
        defaultSelection: typeof DefaultShopifyFulfillmentServiceSelection;
        selectionType: AvailableShopifyFulfillmentServiceSelection;
        optionsType: FindOneShopifyFulfillmentServiceOptions;
        schemaType: Query["shopifyFulfillmentService"];
    };
    /**
 * Finds one shopifyFulfillmentService by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyFulfillmentServiceOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentServiceOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentServiceOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyFulfillmentService";
        modelApiIdentifier: "shopifyFulfillmentService";
        defaultSelection: typeof DefaultShopifyFulfillmentServiceSelection;
        selectionType: AvailableShopifyFulfillmentServiceSelection;
        optionsType: MaybeFindOneShopifyFulfillmentServiceOptions;
        schemaType: Query["shopifyFulfillmentService"];
    };
    /**
 * Finds many shopifyFulfillmentService. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyFulfillmentServicesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentServicesOptions>): Promise<GadgetRecordList<SelectedShopifyFulfillmentServiceOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyFulfillmentServices";
        modelApiIdentifier: "shopifyFulfillmentService";
        defaultSelection: typeof DefaultShopifyFulfillmentServiceSelection;
        selectionType: AvailableShopifyFulfillmentServiceSelection;
        optionsType: FindManyShopifyFulfillmentServicesOptions;
        schemaType: Query["shopifyFulfillmentService"];
    };
    /**
 * Finds the first matching shopifyFulfillmentService. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyFulfillmentServiceOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentServiceOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentServiceOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyFulfillmentServices";
        modelApiIdentifier: "shopifyFulfillmentService";
        defaultSelection: typeof DefaultShopifyFulfillmentServiceSelection;
        selectionType: AvailableShopifyFulfillmentServiceSelection;
        optionsType: FindFirstShopifyFulfillmentServiceOptions;
        schemaType: Query["shopifyFulfillmentService"];
    };
    /**
 * Finds the first matching shopifyFulfillmentService. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyFulfillmentServiceOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentServiceOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentServiceOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyFulfillmentServices";
        modelApiIdentifier: "shopifyFulfillmentService";
        defaultSelection: typeof DefaultShopifyFulfillmentServiceSelection;
        selectionType: AvailableShopifyFulfillmentServiceSelection;
        optionsType: MaybeFindFirstShopifyFulfillmentServiceOptions;
        schemaType: Query["shopifyFulfillmentService"];
    };
    create: typeof createShopifyFulfillmentService & {
        type: "action";
        operationName: "createShopifyFulfillmentService";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentService";
        modelSelectionField: "shopifyFulfillmentService";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyFulfillmentServiceSelection;
        selectionType: AvailableShopifyFulfillmentServiceSelection;
        optionsType: CreateShopifyFulfillmentServiceOptions;
        schemaType: Query["shopifyFulfillmentService"];
        variablesType: ((FullyQualifiedCreateShopifyFulfillmentServiceVariables | CreateShopifyFulfillmentServiceVariables)) | undefined;
        variables: {
            "shopifyFulfillmentService": {
                required: false;
                type: "CreateShopifyFulfillmentServiceInput";
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
        <Options extends CreateShopifyFulfillmentServiceOptions>(inputs: (FullyQualifiedCreateShopifyFulfillmentServiceVariables | CreateShopifyFulfillmentServiceVariables)[], options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentServiceOptions>): Promise<CreateShopifyFulfillmentServiceResult<Options>[]>;
        type: "action";
        operationName: "bulkCreateShopifyFulfillmentServices";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentService";
        modelSelectionField: "shopifyFulfillmentServices";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyFulfillmentServiceSelection;
        selectionType: AvailableShopifyFulfillmentServiceSelection;
        optionsType: CreateShopifyFulfillmentServiceOptions;
        schemaType: Query["shopifyFulfillmentService"];
        variablesType: (FullyQualifiedCreateShopifyFulfillmentServiceVariables | CreateShopifyFulfillmentServiceVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCreateShopifyFulfillmentServicesInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    update: typeof updateShopifyFulfillmentService & {
        type: "action";
        operationName: "updateShopifyFulfillmentService";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentService";
        modelSelectionField: "shopifyFulfillmentService";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyFulfillmentServiceSelection;
        selectionType: AvailableShopifyFulfillmentServiceSelection;
        optionsType: UpdateShopifyFulfillmentServiceOptions;
        schemaType: Query["shopifyFulfillmentService"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedUpdateShopifyFulfillmentServiceVariables | UpdateShopifyFulfillmentServiceVariables));
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifyFulfillmentService": {
                required: false;
                type: "UpdateShopifyFulfillmentServiceInput";
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
        <Options extends UpdateShopifyFulfillmentServiceOptions>(inputs: (FullyQualifiedUpdateShopifyFulfillmentServiceVariables | UpdateShopifyFulfillmentServiceVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentServiceOptions>): Promise<UpdateShopifyFulfillmentServiceResult<Options>[]>;
        type: "action";
        operationName: "bulkUpdateShopifyFulfillmentServices";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentService";
        modelSelectionField: "shopifyFulfillmentServices";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyFulfillmentServiceSelection;
        selectionType: AvailableShopifyFulfillmentServiceSelection;
        optionsType: UpdateShopifyFulfillmentServiceOptions;
        schemaType: Query["shopifyFulfillmentService"];
        variablesType: (FullyQualifiedUpdateShopifyFulfillmentServiceVariables | UpdateShopifyFulfillmentServiceVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkUpdateShopifyFulfillmentServicesInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    delete: typeof deleteShopifyFulfillmentService & {
        type: "action";
        operationName: "deleteShopifyFulfillmentService";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentService";
        modelSelectionField: "shopifyFulfillmentService";
        isBulk: false;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteShopifyFulfillmentServiceOptions;
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
        <Options extends DeleteShopifyFulfillmentServiceOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentServiceOptions>): Promise<DeleteShopifyFulfillmentServiceResult<Options>[]>;
        type: "action";
        operationName: "bulkDeleteShopifyFulfillmentServices";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentService";
        modelSelectionField: "shopifyFulfillmentServices";
        isBulk: true;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteShopifyFulfillmentServiceOptions;
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
