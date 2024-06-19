import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, IDsList, ShopifyFulfillmentLineItem, ShopifyFulfillmentLineItemSort, ShopifyFulfillmentLineItemFilter, AvailableShopifyFulfillmentLineItemSelection, CreateShopifyFulfillmentLineItemInput, UpdateShopifyFulfillmentLineItemInput } from "../types.js";
export declare const DefaultShopifyFulfillmentLineItemSelection: {
    readonly __typename: true;
    readonly createdAt: true;
    readonly discountedTotalSet: true;
    readonly id: true;
    readonly originalTotalSet: true;
    readonly quantity: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyFulfillmentLineItem". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyFulfillmentLineItemOrDefault<Options extends Selectable<AvailableShopifyFulfillmentLineItemSelection>> = DeepFilterNever<Select<ShopifyFulfillmentLineItem, DefaultSelection<AvailableShopifyFulfillmentLineItemSelection, Options, typeof DefaultShopifyFulfillmentLineItemSelection>>>;
/** Options that can be passed to the `ShopifyFulfillmentLineItemManager#findOne` method */
export interface FindOneShopifyFulfillmentLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentLineItemSelection;
}
/** Options that can be passed to the `ShopifyFulfillmentLineItemManager#maybeFindOne` method */
export interface MaybeFindOneShopifyFulfillmentLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentLineItemSelection;
}
/** Options that can be passed to the `ShopifyFulfillmentLineItemManager#findMany` method */
export interface FindManyShopifyFulfillmentLineItemsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentLineItemSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentLineItemSort | ShopifyFulfillmentLineItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentLineItemFilter | ShopifyFulfillmentLineItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyFulfillmentLineItemManager#findFirst` method */
export interface FindFirstShopifyFulfillmentLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentLineItemSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentLineItemSort | ShopifyFulfillmentLineItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentLineItemFilter | ShopifyFulfillmentLineItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyFulfillmentLineItemManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyFulfillmentLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentLineItemSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyFulfillmentLineItemSort | ShopifyFulfillmentLineItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyFulfillmentLineItemFilter | ShopifyFulfillmentLineItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateShopifyFulfillmentLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentLineItemSelection;
}
export interface UpdateShopifyFulfillmentLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyFulfillmentLineItemSelection;
}
export interface DeleteShopifyFulfillmentLineItemOptions {
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateShopifyFulfillmentLineItemVariables = {
    shopifyFulfillmentLineItem?: CreateShopifyFulfillmentLineItemInput;
};
/**
 * The inputs for executing create on shopifyFulfillmentLineItem.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateShopifyFulfillmentLineItemVariables = CreateShopifyFulfillmentLineItemInput;
/**
 * The return value from executing create on shopifyFulfillmentLineItem.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyFulfillmentLineItemResult<Options extends CreateShopifyFulfillmentLineItemOptions> = SelectedShopifyFulfillmentLineItemOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyFulfillmentLineItemOrDefault<Options>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createShopifyFulfillmentLineItem<Options extends CreateShopifyFulfillmentLineItemOptions>(variables: CreateShopifyFulfillmentLineItemVariables, options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentLineItemOptions>): Promise<CreateShopifyFulfillmentLineItemResult<Options>>;
declare function createShopifyFulfillmentLineItem<Options extends CreateShopifyFulfillmentLineItemOptions>(variables: FullyQualifiedCreateShopifyFulfillmentLineItemVariables, options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentLineItemOptions>): Promise<CreateShopifyFulfillmentLineItemResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateShopifyFulfillmentLineItemVariables = {
    shopifyFulfillmentLineItem?: UpdateShopifyFulfillmentLineItemInput;
};
/**
 * The inputs for executing update on shopifyFulfillmentLineItem.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateShopifyFulfillmentLineItemVariables = UpdateShopifyFulfillmentLineItemInput;
/**
 * The return value from executing update on shopifyFulfillmentLineItem.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyFulfillmentLineItemResult<Options extends UpdateShopifyFulfillmentLineItemOptions> = SelectedShopifyFulfillmentLineItemOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyFulfillmentLineItemOrDefault<Options>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateShopifyFulfillmentLineItem<Options extends UpdateShopifyFulfillmentLineItemOptions>(id: string, variables: UpdateShopifyFulfillmentLineItemVariables, options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentLineItemOptions>): Promise<UpdateShopifyFulfillmentLineItemResult<Options>>;
declare function updateShopifyFulfillmentLineItem<Options extends UpdateShopifyFulfillmentLineItemOptions>(id: string, variables: FullyQualifiedUpdateShopifyFulfillmentLineItemVariables, options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentLineItemOptions>): Promise<UpdateShopifyFulfillmentLineItemResult<Options>>;
/**
 * The return value from executing delete on shopifyFulfillmentLineItem.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyFulfillmentLineItemResult<Options extends DeleteShopifyFulfillmentLineItemOptions> = void extends void ? void : GadgetRecord<SelectedShopifyFulfillmentLineItemOrDefault<Options>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteShopifyFulfillmentLineItem<Options extends DeleteShopifyFulfillmentLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentLineItemOptions>): Promise<DeleteShopifyFulfillmentLineItemResult<Options>>;
/** All the actions available at the collection level and record level for "shopifyFulfillmentLineItem" */
export declare class ShopifyFulfillmentLineItemManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyFulfillmentLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyFulfillmentLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentLineItemOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentLineItemOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyFulfillmentLineItem";
        modelApiIdentifier: "shopifyFulfillmentLineItem";
        defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
        selectionType: AvailableShopifyFulfillmentLineItemSelection;
        optionsType: FindOneShopifyFulfillmentLineItemOptions;
        schemaType: Query["shopifyFulfillmentLineItem"];
    };
    /**
 * Finds one shopifyFulfillmentLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyFulfillmentLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentLineItemOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentLineItemOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyFulfillmentLineItem";
        modelApiIdentifier: "shopifyFulfillmentLineItem";
        defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
        selectionType: AvailableShopifyFulfillmentLineItemSelection;
        optionsType: MaybeFindOneShopifyFulfillmentLineItemOptions;
        schemaType: Query["shopifyFulfillmentLineItem"];
    };
    /**
 * Finds many shopifyFulfillmentLineItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyFulfillmentLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentLineItemsOptions>): Promise<GadgetRecordList<SelectedShopifyFulfillmentLineItemOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyFulfillmentLineItems";
        modelApiIdentifier: "shopifyFulfillmentLineItem";
        defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
        selectionType: AvailableShopifyFulfillmentLineItemSelection;
        optionsType: FindManyShopifyFulfillmentLineItemsOptions;
        schemaType: Query["shopifyFulfillmentLineItem"];
    };
    /**
 * Finds the first matching shopifyFulfillmentLineItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyFulfillmentLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentLineItemOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentLineItemOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyFulfillmentLineItems";
        modelApiIdentifier: "shopifyFulfillmentLineItem";
        defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
        selectionType: AvailableShopifyFulfillmentLineItemSelection;
        optionsType: FindFirstShopifyFulfillmentLineItemOptions;
        schemaType: Query["shopifyFulfillmentLineItem"];
    };
    /**
 * Finds the first matching shopifyFulfillmentLineItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyFulfillmentLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentLineItemOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentLineItemOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyFulfillmentLineItems";
        modelApiIdentifier: "shopifyFulfillmentLineItem";
        defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
        selectionType: AvailableShopifyFulfillmentLineItemSelection;
        optionsType: MaybeFindFirstShopifyFulfillmentLineItemOptions;
        schemaType: Query["shopifyFulfillmentLineItem"];
    };
    /**
  * Finds one shopifyFulfillmentLineItem by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneShopifyFulfillmentLineItemOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentLineItemOptions>): Promise<GadgetRecord<SelectedShopifyFulfillmentLineItemOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyFulfillmentLineItems";
        modelApiIdentifier: "shopifyFulfillmentLineItem";
        defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
        selectionType: AvailableShopifyFulfillmentLineItemSelection;
        optionsType: FindOneShopifyFulfillmentLineItemOptions;
        schemaType: Query["shopifyFulfillmentLineItem"];
    };
    create: typeof createShopifyFulfillmentLineItem & {
        type: "action";
        operationName: "createShopifyFulfillmentLineItem";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentLineItem";
        modelSelectionField: "shopifyFulfillmentLineItem";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
        selectionType: AvailableShopifyFulfillmentLineItemSelection;
        optionsType: CreateShopifyFulfillmentLineItemOptions;
        schemaType: Query["shopifyFulfillmentLineItem"];
        variablesType: ((FullyQualifiedCreateShopifyFulfillmentLineItemVariables | CreateShopifyFulfillmentLineItemVariables)) | undefined;
        variables: {
            "shopifyFulfillmentLineItem": {
                required: false;
                type: "CreateShopifyFulfillmentLineItemInput";
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
        <Options extends CreateShopifyFulfillmentLineItemOptions>(inputs: (FullyQualifiedCreateShopifyFulfillmentLineItemVariables | CreateShopifyFulfillmentLineItemVariables)[], options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentLineItemOptions>): Promise<CreateShopifyFulfillmentLineItemResult<Options>[]>;
        type: "action";
        operationName: "bulkCreateShopifyFulfillmentLineItems";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentLineItem";
        modelSelectionField: "shopifyFulfillmentLineItems";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
        selectionType: AvailableShopifyFulfillmentLineItemSelection;
        optionsType: CreateShopifyFulfillmentLineItemOptions;
        schemaType: Query["shopifyFulfillmentLineItem"];
        variablesType: (FullyQualifiedCreateShopifyFulfillmentLineItemVariables | CreateShopifyFulfillmentLineItemVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCreateShopifyFulfillmentLineItemsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    update: typeof updateShopifyFulfillmentLineItem & {
        type: "action";
        operationName: "updateShopifyFulfillmentLineItem";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentLineItem";
        modelSelectionField: "shopifyFulfillmentLineItem";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
        selectionType: AvailableShopifyFulfillmentLineItemSelection;
        optionsType: UpdateShopifyFulfillmentLineItemOptions;
        schemaType: Query["shopifyFulfillmentLineItem"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedUpdateShopifyFulfillmentLineItemVariables | UpdateShopifyFulfillmentLineItemVariables));
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifyFulfillmentLineItem": {
                required: false;
                type: "UpdateShopifyFulfillmentLineItemInput";
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
        <Options extends UpdateShopifyFulfillmentLineItemOptions>(inputs: (FullyQualifiedUpdateShopifyFulfillmentLineItemVariables | UpdateShopifyFulfillmentLineItemVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentLineItemOptions>): Promise<UpdateShopifyFulfillmentLineItemResult<Options>[]>;
        type: "action";
        operationName: "bulkUpdateShopifyFulfillmentLineItems";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentLineItem";
        modelSelectionField: "shopifyFulfillmentLineItems";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
        selectionType: AvailableShopifyFulfillmentLineItemSelection;
        optionsType: UpdateShopifyFulfillmentLineItemOptions;
        schemaType: Query["shopifyFulfillmentLineItem"];
        variablesType: (FullyQualifiedUpdateShopifyFulfillmentLineItemVariables | UpdateShopifyFulfillmentLineItemVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkUpdateShopifyFulfillmentLineItemsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    delete: typeof deleteShopifyFulfillmentLineItem & {
        type: "action";
        operationName: "deleteShopifyFulfillmentLineItem";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentLineItem";
        modelSelectionField: "shopifyFulfillmentLineItem";
        isBulk: false;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteShopifyFulfillmentLineItemOptions;
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
        <Options extends DeleteShopifyFulfillmentLineItemOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentLineItemOptions>): Promise<DeleteShopifyFulfillmentLineItemResult<Options>[]>;
        type: "action";
        operationName: "bulkDeleteShopifyFulfillmentLineItems";
        namespace: null;
        modelApiIdentifier: "shopifyFulfillmentLineItem";
        modelSelectionField: "shopifyFulfillmentLineItems";
        isBulk: true;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteShopifyFulfillmentLineItemOptions;
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
