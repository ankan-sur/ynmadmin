import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, IDsList, ShopifyFulfillmentOrder, ShopifyFulfillmentOrderSort, ShopifyFulfillmentOrderFilter, AvailableShopifyFulfillmentOrderSelection, CreateShopifyFulfillmentOrderInput, UpdateShopifyFulfillmentOrderInput } from "../types.js";
export declare const DefaultShopifyFulfillmentOrderSelection: {
    readonly __typename: true;
    readonly assignedLocation: true;
    readonly createdAt: true;
    readonly deliveryMethod: true;
    readonly destination: true;
    readonly fulfillAt: true;
    readonly fulfillBy: true;
    readonly fulfillmentHolds: true;
    readonly id: true;
    readonly internationalDuties: true;
    readonly merchantRequests: true;
    readonly requestStatus: true;
    readonly status: true;
    readonly supportedActions: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyFulfillmentOrder". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyFulfillmentOrderOrDefault<Options extends Selectable<AvailableShopifyFulfillmentOrderSelection>> = DeepFilterNever<Select<ShopifyFulfillmentOrder, DefaultSelection<AvailableShopifyFulfillmentOrderSelection, Options, typeof DefaultShopifyFulfillmentOrderSelection>>>;
/** Options that can be passed to the `ShopifyFulfillmentOrderManager#findOne` method */
export interface FindOneShopifyFulfillmentOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderSelection;
}
/** Options that can be passed to the `ShopifyFulfillmentOrderManager#maybeFindOne` method */
export interface MaybeFindOneShopifyFulfillmentOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderSelection;
}
/** Options that can be passed to the `ShopifyFulfillmentOrderManager#findMany` method */
export interface FindManyShopifyFulfillmentOrdersOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentOrderSort | ShopifyFulfillmentOrderSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentOrderFilter | ShopifyFulfillmentOrderFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyFulfillmentOrderManager#findFirst` method */
export interface FindFirstShopifyFulfillmentOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentOrderSort | ShopifyFulfillmentOrderSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentOrderFilter | ShopifyFulfillmentOrderFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyFulfillmentOrderManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyFulfillmentOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentOrderSort | ShopifyFulfillmentOrderSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentOrderFilter | ShopifyFulfillmentOrderFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateShopifyFulfillmentOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderSelection;
}
export interface UpdateShopifyFulfillmentOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderSelection;
}
export interface DeleteShopifyFulfillmentOrderOptions {
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateShopifyFulfillmentOrderVariables = {
    shopifyFulfillmentOrder?: CreateShopifyFulfillmentOrderInput;
};
/**
 * The inputs for executing create on shopifyFulfillmentOrder.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateShopifyFulfillmentOrderVariables = CreateShopifyFulfillmentOrderInput;
/**
 * The return value from executing create on shopifyFulfillmentOrder.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyFulfillmentOrderResult<Options extends CreateShopifyFulfillmentOrderOptions> = SelectedShopifyFulfillmentOrderOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyFulfillmentOrderOrDefault<Options>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createShopifyFulfillmentOrder<Options extends CreateShopifyFulfillmentOrderOptions>(variables: CreateShopifyFulfillmentOrderVariables, options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOrderOptions>): Promise<CreateShopifyFulfillmentOrderResult<Options>>;
declare function createShopifyFulfillmentOrder<Options extends CreateShopifyFulfillmentOrderOptions>(variables: FullyQualifiedCreateShopifyFulfillmentOrderVariables, options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOrderOptions>): Promise<CreateShopifyFulfillmentOrderResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateShopifyFulfillmentOrderVariables = {
    shopifyFulfillmentOrder?: UpdateShopifyFulfillmentOrderInput;
};
/**
 * The inputs for executing update on shopifyFulfillmentOrder.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateShopifyFulfillmentOrderVariables = UpdateShopifyFulfillmentOrderInput;
/**
 * The return value from executing update on shopifyFulfillmentOrder.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyFulfillmentOrderResult<Options extends UpdateShopifyFulfillmentOrderOptions> = SelectedShopifyFulfillmentOrderOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyFulfillmentOrderOrDefault<Options>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateShopifyFulfillmentOrder<Options extends UpdateShopifyFulfillmentOrderOptions>(id: string, variables: UpdateShopifyFulfillmentOrderVariables, options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOrderOptions>): Promise<UpdateShopifyFulfillmentOrderResult<Options>>;
declare function updateShopifyFulfillmentOrder<Options extends UpdateShopifyFulfillmentOrderOptions>(id: string, variables: FullyQualifiedUpdateShopifyFulfillmentOrderVariables, options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOrderOptions>): Promise<UpdateShopifyFulfillmentOrderResult<Options>>;
/**
 * The return value from executing delete on shopifyFulfillmentOrder.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyFulfillmentOrderResult<Options extends DeleteShopifyFulfillmentOrderOptions> = void extends void ? void : GadgetRecord<SelectedShopifyFulfillmentOrderOrDefault<Options>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteShopifyFulfillmentOrder<Options extends DeleteShopifyFulfillmentOrderOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentOrderOptions>): Promise<DeleteShopifyFulfillmentOrderResult<Options>>;
/** All the actions available at the collection level and record level for "shopifyFulfillmentOrder" */
export declare class ShopifyFulfillmentOrderManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyFulfillmentOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyFulfillmentOrderOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentOrderOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentOrderOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyFulfillmentOrder";
        modelApiIdentifier: "shopifyFulfillmentOrder";
        defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
        selectionType: AvailableShopifyFulfillmentOrderSelection;
        optionsType: FindOneShopifyFulfillmentOrderOptions;
        schemaType: Query["shopifyFulfillmentOrder"];
    };
    /**
 * Finds one shopifyFulfillmentOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyFulfillmentOrderOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentOrderOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentOrderOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyFulfillmentOrder";
        modelApiIdentifier: "shopifyFulfillmentOrder";
        defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
        selectionType: AvailableShopifyFulfillmentOrderSelection;
        optionsType: MaybeFindOneShopifyFulfillmentOrderOptions;
        schemaType: Query["shopifyFulfillmentOrder"];
    };
    /**
 * Finds many shopifyFulfillmentOrder. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyFulfillmentOrdersOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentOrdersOptions>): Promise<GadgetRecordList<SelectedShopifyFulfillmentOrderOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyFulfillmentOrders";
        modelApiIdentifier: "shopifyFulfillmentOrder";
        defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
        selectionType: AvailableShopifyFulfillmentOrderSelection;
        optionsType: FindManyShopifyFulfillmentOrdersOptions;
        schemaType: Query["shopifyFulfillmentOrder"];
    };
    /**
 * Finds the first matching shopifyFulfillmentOrder. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyFulfillmentOrderOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentOrderOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentOrderOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyFulfillmentOrders";
        modelApiIdentifier: "shopifyFulfillmentOrder";
        defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
        selectionType: AvailableShopifyFulfillmentOrderSelection;
        optionsType: FindFirstShopifyFulfillmentOrderOptions;
        schemaType: Query["shopifyFulfillmentOrder"];
    };
    /**
 * Finds the first matching shopifyFulfillmentOrder. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyFulfillmentOrderOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentOrderOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentOrderOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyFulfillmentOrders";
        modelApiIdentifier: "shopifyFulfillmentOrder";
        defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
        selectionType: AvailableShopifyFulfillmentOrderSelection;
        optionsType: MaybeFindFirstShopifyFulfillmentOrderOptions;
        schemaType: Query["shopifyFulfillmentOrder"];
    };
    create: typeof createShopifyFulfillmentOrder & {
        type: "action";
        operationName: "createShopifyFulfillmentOrder";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentOrder";
        modelSelectionField: "shopifyFulfillmentOrder";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
        selectionType: AvailableShopifyFulfillmentOrderSelection;
        optionsType: CreateShopifyFulfillmentOrderOptions;
        schemaType: Query["shopifyFulfillmentOrder"];
        variablesType: ((FullyQualifiedCreateShopifyFulfillmentOrderVariables | CreateShopifyFulfillmentOrderVariables)) | undefined;
        variables: {
            "shopifyFulfillmentOrder": {
                required: false;
                type: "CreateShopifyFulfillmentOrderInput";
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
        <Options extends CreateShopifyFulfillmentOrderOptions>(inputs: (FullyQualifiedCreateShopifyFulfillmentOrderVariables | CreateShopifyFulfillmentOrderVariables)[], options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOrderOptions>): Promise<CreateShopifyFulfillmentOrderResult<Options>[]>;
        type: "action";
        operationName: "bulkCreateShopifyFulfillmentOrders";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentOrder";
        modelSelectionField: "shopifyFulfillmentOrders";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
        selectionType: AvailableShopifyFulfillmentOrderSelection;
        optionsType: CreateShopifyFulfillmentOrderOptions;
        schemaType: Query["shopifyFulfillmentOrder"];
        variablesType: (FullyQualifiedCreateShopifyFulfillmentOrderVariables | CreateShopifyFulfillmentOrderVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCreateShopifyFulfillmentOrdersInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    update: typeof updateShopifyFulfillmentOrder & {
        type: "action";
        operationName: "updateShopifyFulfillmentOrder";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentOrder";
        modelSelectionField: "shopifyFulfillmentOrder";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
        selectionType: AvailableShopifyFulfillmentOrderSelection;
        optionsType: UpdateShopifyFulfillmentOrderOptions;
        schemaType: Query["shopifyFulfillmentOrder"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedUpdateShopifyFulfillmentOrderVariables | UpdateShopifyFulfillmentOrderVariables));
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifyFulfillmentOrder": {
                required: false;
                type: "UpdateShopifyFulfillmentOrderInput";
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
        <Options extends UpdateShopifyFulfillmentOrderOptions>(inputs: (FullyQualifiedUpdateShopifyFulfillmentOrderVariables | UpdateShopifyFulfillmentOrderVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOrderOptions>): Promise<UpdateShopifyFulfillmentOrderResult<Options>[]>;
        type: "action";
        operationName: "bulkUpdateShopifyFulfillmentOrders";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentOrder";
        modelSelectionField: "shopifyFulfillmentOrders";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
        selectionType: AvailableShopifyFulfillmentOrderSelection;
        optionsType: UpdateShopifyFulfillmentOrderOptions;
        schemaType: Query["shopifyFulfillmentOrder"];
        variablesType: (FullyQualifiedUpdateShopifyFulfillmentOrderVariables | UpdateShopifyFulfillmentOrderVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkUpdateShopifyFulfillmentOrdersInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    delete: typeof deleteShopifyFulfillmentOrder & {
        type: "action";
        operationName: "deleteShopifyFulfillmentOrder";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentOrder";
        modelSelectionField: "shopifyFulfillmentOrder";
        isBulk: false;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteShopifyFulfillmentOrderOptions;
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
        <Options extends DeleteShopifyFulfillmentOrderOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentOrderOptions>): Promise<DeleteShopifyFulfillmentOrderResult<Options>[]>;
        type: "action";
        operationName: "bulkDeleteShopifyFulfillmentOrders";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentOrder";
        modelSelectionField: "shopifyFulfillmentOrders";
        isBulk: true;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteShopifyFulfillmentOrderOptions;
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
