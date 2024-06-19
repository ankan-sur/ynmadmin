import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, IDsList, ShopifyFulfillmentOrderLineItem, ShopifyFulfillmentOrderLineItemSort, ShopifyFulfillmentOrderLineItemFilter, AvailableShopifyFulfillmentOrderLineItemSelection, CreateShopifyFulfillmentOrderLineItemInput, UpdateShopifyFulfillmentOrderLineItemInput } from "../types.js";
export declare const DefaultShopifyFulfillmentOrderLineItemSelection: {
    readonly __typename: true;
    readonly createdAt: true;
    readonly id: true;
    readonly quantity: true;
    readonly remainingQuantity: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyFulfillmentOrderLineItem". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyFulfillmentOrderLineItemOrDefault<Options extends Selectable<AvailableShopifyFulfillmentOrderLineItemSelection>> = DeepFilterNever<Select<ShopifyFulfillmentOrderLineItem, DefaultSelection<AvailableShopifyFulfillmentOrderLineItemSelection, Options, typeof DefaultShopifyFulfillmentOrderLineItemSelection>>>;
/** Options that can be passed to the `ShopifyFulfillmentOrderLineItemManager#findOne` method */
export interface FindOneShopifyFulfillmentOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderLineItemSelection;
}
/** Options that can be passed to the `ShopifyFulfillmentOrderLineItemManager#maybeFindOne` method */
export interface MaybeFindOneShopifyFulfillmentOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderLineItemSelection;
}
/** Options that can be passed to the `ShopifyFulfillmentOrderLineItemManager#findMany` method */
export interface FindManyShopifyFulfillmentOrderLineItemsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderLineItemSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentOrderLineItemSort | ShopifyFulfillmentOrderLineItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentOrderLineItemFilter | ShopifyFulfillmentOrderLineItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyFulfillmentOrderLineItemManager#findFirst` method */
export interface FindFirstShopifyFulfillmentOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderLineItemSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentOrderLineItemSort | ShopifyFulfillmentOrderLineItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentOrderLineItemFilter | ShopifyFulfillmentOrderLineItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyFulfillmentOrderLineItemManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyFulfillmentOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderLineItemSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentOrderLineItemSort | ShopifyFulfillmentOrderLineItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentOrderLineItemFilter | ShopifyFulfillmentOrderLineItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateShopifyFulfillmentOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderLineItemSelection;
}
export interface UpdateShopifyFulfillmentOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentOrderLineItemSelection;
}
export interface DeleteShopifyFulfillmentOrderLineItemOptions {
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateShopifyFulfillmentOrderLineItemVariables = {
    shopifyFulfillmentOrderLineItem?: CreateShopifyFulfillmentOrderLineItemInput;
};
/**
 * The inputs for executing create on shopifyFulfillmentOrderLineItem.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateShopifyFulfillmentOrderLineItemVariables = CreateShopifyFulfillmentOrderLineItemInput;
/**
 * The return value from executing create on shopifyFulfillmentOrderLineItem.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyFulfillmentOrderLineItemResult<Options extends CreateShopifyFulfillmentOrderLineItemOptions> = SelectedShopifyFulfillmentOrderLineItemOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createShopifyFulfillmentOrderLineItem<Options extends CreateShopifyFulfillmentOrderLineItemOptions>(variables: CreateShopifyFulfillmentOrderLineItemVariables, options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOrderLineItemOptions>): Promise<CreateShopifyFulfillmentOrderLineItemResult<Options>>;
declare function createShopifyFulfillmentOrderLineItem<Options extends CreateShopifyFulfillmentOrderLineItemOptions>(variables: FullyQualifiedCreateShopifyFulfillmentOrderLineItemVariables, options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOrderLineItemOptions>): Promise<CreateShopifyFulfillmentOrderLineItemResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateShopifyFulfillmentOrderLineItemVariables = {
    shopifyFulfillmentOrderLineItem?: UpdateShopifyFulfillmentOrderLineItemInput;
};
/**
 * The inputs for executing update on shopifyFulfillmentOrderLineItem.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateShopifyFulfillmentOrderLineItemVariables = UpdateShopifyFulfillmentOrderLineItemInput;
/**
 * The return value from executing update on shopifyFulfillmentOrderLineItem.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyFulfillmentOrderLineItemResult<Options extends UpdateShopifyFulfillmentOrderLineItemOptions> = SelectedShopifyFulfillmentOrderLineItemOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateShopifyFulfillmentOrderLineItem<Options extends UpdateShopifyFulfillmentOrderLineItemOptions>(id: string, variables: UpdateShopifyFulfillmentOrderLineItemVariables, options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOrderLineItemOptions>): Promise<UpdateShopifyFulfillmentOrderLineItemResult<Options>>;
declare function updateShopifyFulfillmentOrderLineItem<Options extends UpdateShopifyFulfillmentOrderLineItemOptions>(id: string, variables: FullyQualifiedUpdateShopifyFulfillmentOrderLineItemVariables, options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOrderLineItemOptions>): Promise<UpdateShopifyFulfillmentOrderLineItemResult<Options>>;
/**
 * The return value from executing delete on shopifyFulfillmentOrderLineItem.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyFulfillmentOrderLineItemResult<Options extends DeleteShopifyFulfillmentOrderLineItemOptions> = void extends void ? void : GadgetRecord<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteShopifyFulfillmentOrderLineItem<Options extends DeleteShopifyFulfillmentOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentOrderLineItemOptions>): Promise<DeleteShopifyFulfillmentOrderLineItemResult<Options>>;
/** All the actions available at the collection level and record level for "shopifyFulfillmentOrderLineItem" */
export declare class ShopifyFulfillmentOrderLineItemManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyFulfillmentOrderLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyFulfillmentOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentOrderLineItemOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyFulfillmentOrderLineItem";
        modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
        defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
        selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
        optionsType: FindOneShopifyFulfillmentOrderLineItemOptions;
        schemaType: Query["shopifyFulfillmentOrderLineItem"];
    };
    /**
 * Finds one shopifyFulfillmentOrderLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyFulfillmentOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentOrderLineItemOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyFulfillmentOrderLineItem";
        modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
        defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
        selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
        optionsType: MaybeFindOneShopifyFulfillmentOrderLineItemOptions;
        schemaType: Query["shopifyFulfillmentOrderLineItem"];
    };
    /**
 * Finds many shopifyFulfillmentOrderLineItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyFulfillmentOrderLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentOrderLineItemsOptions>): Promise<GadgetRecordList<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyFulfillmentOrderLineItems";
        modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
        defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
        selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
        optionsType: FindManyShopifyFulfillmentOrderLineItemsOptions;
        schemaType: Query["shopifyFulfillmentOrderLineItem"];
    };
    /**
 * Finds the first matching shopifyFulfillmentOrderLineItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyFulfillmentOrderLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentOrderLineItemOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyFulfillmentOrderLineItems";
        modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
        defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
        selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
        optionsType: FindFirstShopifyFulfillmentOrderLineItemOptions;
        schemaType: Query["shopifyFulfillmentOrderLineItem"];
    };
    /**
 * Finds the first matching shopifyFulfillmentOrderLineItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyFulfillmentOrderLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentOrderLineItemOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyFulfillmentOrderLineItems";
        modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
        defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
        selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
        optionsType: MaybeFindFirstShopifyFulfillmentOrderLineItemOptions;
        schemaType: Query["shopifyFulfillmentOrderLineItem"];
    };
    create: typeof createShopifyFulfillmentOrderLineItem & {
        type: "action";
        operationName: "createShopifyFulfillmentOrderLineItem";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
        modelSelectionField: "shopifyFulfillmentOrderLineItem";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
        selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
        optionsType: CreateShopifyFulfillmentOrderLineItemOptions;
        schemaType: Query["shopifyFulfillmentOrderLineItem"];
        variablesType: ((FullyQualifiedCreateShopifyFulfillmentOrderLineItemVariables | CreateShopifyFulfillmentOrderLineItemVariables)) | undefined;
        variables: {
            "shopifyFulfillmentOrderLineItem": {
                required: false;
                type: "CreateShopifyFulfillmentOrderLineItemInput";
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
        <Options extends CreateShopifyFulfillmentOrderLineItemOptions>(inputs: (FullyQualifiedCreateShopifyFulfillmentOrderLineItemVariables | CreateShopifyFulfillmentOrderLineItemVariables)[], options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOrderLineItemOptions>): Promise<CreateShopifyFulfillmentOrderLineItemResult<Options>[]>;
        type: "action";
        operationName: "bulkCreateShopifyFulfillmentOrderLineItems";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
        modelSelectionField: "shopifyFulfillmentOrderLineItems";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
        selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
        optionsType: CreateShopifyFulfillmentOrderLineItemOptions;
        schemaType: Query["shopifyFulfillmentOrderLineItem"];
        variablesType: (FullyQualifiedCreateShopifyFulfillmentOrderLineItemVariables | CreateShopifyFulfillmentOrderLineItemVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCreateShopifyFulfillmentOrderLineItemsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    update: typeof updateShopifyFulfillmentOrderLineItem & {
        type: "action";
        operationName: "updateShopifyFulfillmentOrderLineItem";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
        modelSelectionField: "shopifyFulfillmentOrderLineItem";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
        selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
        optionsType: UpdateShopifyFulfillmentOrderLineItemOptions;
        schemaType: Query["shopifyFulfillmentOrderLineItem"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedUpdateShopifyFulfillmentOrderLineItemVariables | UpdateShopifyFulfillmentOrderLineItemVariables));
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifyFulfillmentOrderLineItem": {
                required: false;
                type: "UpdateShopifyFulfillmentOrderLineItemInput";
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
        <Options extends UpdateShopifyFulfillmentOrderLineItemOptions>(inputs: (FullyQualifiedUpdateShopifyFulfillmentOrderLineItemVariables | UpdateShopifyFulfillmentOrderLineItemVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOrderLineItemOptions>): Promise<UpdateShopifyFulfillmentOrderLineItemResult<Options>[]>;
        type: "action";
        operationName: "bulkUpdateShopifyFulfillmentOrderLineItems";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
        modelSelectionField: "shopifyFulfillmentOrderLineItems";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
        selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
        optionsType: UpdateShopifyFulfillmentOrderLineItemOptions;
        schemaType: Query["shopifyFulfillmentOrderLineItem"];
        variablesType: (FullyQualifiedUpdateShopifyFulfillmentOrderLineItemVariables | UpdateShopifyFulfillmentOrderLineItemVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkUpdateShopifyFulfillmentOrderLineItemsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    delete: typeof deleteShopifyFulfillmentOrderLineItem & {
        type: "action";
        operationName: "deleteShopifyFulfillmentOrderLineItem";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
        modelSelectionField: "shopifyFulfillmentOrderLineItem";
        isBulk: false;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteShopifyFulfillmentOrderLineItemOptions;
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
        <Options extends DeleteShopifyFulfillmentOrderLineItemOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentOrderLineItemOptions>): Promise<DeleteShopifyFulfillmentOrderLineItemResult<Options>[]>;
        type: "action";
        operationName: "bulkDeleteShopifyFulfillmentOrderLineItems";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
        modelSelectionField: "shopifyFulfillmentOrderLineItems";
        isBulk: true;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteShopifyFulfillmentOrderLineItemOptions;
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
