import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyBulkOperation, ShopifyBulkOperationSort, ShopifyBulkOperationFilter, AvailableShopifyBulkOperationSelection, CreateShopifyBulkOperationInput, UpdateShopifyBulkOperationInput, CompleteShopifyBulkOperationInput, CancelShopifyBulkOperationInput, FailShopifyBulkOperationInput, ExpireShopifyBulkOperationInput } from "../types.js";
export declare const DefaultShopifyBulkOperationSelection: {
    readonly __typename: true;
    readonly completedAt: true;
    readonly createdAt: true;
    readonly errorCode: true;
    readonly fileSize: true;
    readonly id: true;
    readonly objectCount: true;
    readonly partialDataUrl: true;
    readonly query: true;
    readonly rootObjectCount: true;
    readonly state: true;
    readonly status: true;
    readonly type: true;
    readonly updatedAt: true;
    readonly url: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyBulkOperation". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyBulkOperationOrDefault<Options extends Selectable<AvailableShopifyBulkOperationSelection>> = DeepFilterNever<Select<ShopifyBulkOperation, DefaultSelection<AvailableShopifyBulkOperationSelection, Options, typeof DefaultShopifyBulkOperationSelection>>>;
/** Options that can be passed to the `ShopifyBulkOperationManager#findOne` method */
export interface FindOneShopifyBulkOperationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBulkOperationSelection;
}
/** Options that can be passed to the `ShopifyBulkOperationManager#maybeFindOne` method */
export interface MaybeFindOneShopifyBulkOperationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBulkOperationSelection;
}
/** Options that can be passed to the `ShopifyBulkOperationManager#findMany` method */
export interface FindManyShopifyBulkOperationsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBulkOperationSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyBulkOperationSort | ShopifyBulkOperationSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyBulkOperationFilter | ShopifyBulkOperationFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyBulkOperationManager#findFirst` method */
export interface FindFirstShopifyBulkOperationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBulkOperationSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyBulkOperationSort | ShopifyBulkOperationSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyBulkOperationFilter | ShopifyBulkOperationFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyBulkOperationManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyBulkOperationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBulkOperationSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyBulkOperationSort | ShopifyBulkOperationSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyBulkOperationFilter | ShopifyBulkOperationFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateShopifyBulkOperationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBulkOperationSelection;
}
export interface UpdateShopifyBulkOperationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBulkOperationSelection;
}
export interface CompleteShopifyBulkOperationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBulkOperationSelection;
}
export interface CancelShopifyBulkOperationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBulkOperationSelection;
}
export interface FailShopifyBulkOperationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBulkOperationSelection;
}
export interface ExpireShopifyBulkOperationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyBulkOperationSelection;
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateShopifyBulkOperationVariables = {
    shopifyBulkOperation?: CreateShopifyBulkOperationInput;
};
/**
 * The inputs for executing create on shopifyBulkOperation.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateShopifyBulkOperationVariables = CreateShopifyBulkOperationInput;
/**
 * The return value from executing create on shopifyBulkOperation.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyBulkOperationResult<Options extends CreateShopifyBulkOperationOptions> = SelectedShopifyBulkOperationOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyBulkOperationOrDefault<Options>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createShopifyBulkOperation<Options extends CreateShopifyBulkOperationOptions>(variables: CreateShopifyBulkOperationVariables, options?: LimitToKnownKeys<Options, CreateShopifyBulkOperationOptions>): Promise<CreateShopifyBulkOperationResult<Options>>;
declare function createShopifyBulkOperation<Options extends CreateShopifyBulkOperationOptions>(variables: FullyQualifiedCreateShopifyBulkOperationVariables, options?: LimitToKnownKeys<Options, CreateShopifyBulkOperationOptions>): Promise<CreateShopifyBulkOperationResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateShopifyBulkOperationVariables = {
    shopifyBulkOperation?: UpdateShopifyBulkOperationInput;
};
/**
 * The inputs for executing update on shopifyBulkOperation.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateShopifyBulkOperationVariables = UpdateShopifyBulkOperationInput;
/**
 * The return value from executing update on shopifyBulkOperation.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyBulkOperationResult<Options extends UpdateShopifyBulkOperationOptions> = SelectedShopifyBulkOperationOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyBulkOperationOrDefault<Options>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateShopifyBulkOperation<Options extends UpdateShopifyBulkOperationOptions>(id: string, variables: UpdateShopifyBulkOperationVariables, options?: LimitToKnownKeys<Options, UpdateShopifyBulkOperationOptions>): Promise<UpdateShopifyBulkOperationResult<Options>>;
declare function updateShopifyBulkOperation<Options extends UpdateShopifyBulkOperationOptions>(id: string, variables: FullyQualifiedUpdateShopifyBulkOperationVariables, options?: LimitToKnownKeys<Options, UpdateShopifyBulkOperationOptions>): Promise<UpdateShopifyBulkOperationResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCompleteShopifyBulkOperationVariables = {
    shopifyBulkOperation?: CompleteShopifyBulkOperationInput;
};
/**
 * The inputs for executing complete on shopifyBulkOperation.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CompleteShopifyBulkOperationVariables = CompleteShopifyBulkOperationInput;
/**
 * The return value from executing complete on shopifyBulkOperation.
 * "Is a GadgetRecord of the model's type."
 **/
export type CompleteShopifyBulkOperationResult<Options extends CompleteShopifyBulkOperationOptions> = SelectedShopifyBulkOperationOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyBulkOperationOrDefault<Options>>;
/**
  * Executes the complete action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function completeShopifyBulkOperation<Options extends CompleteShopifyBulkOperationOptions>(id: string, variables: CompleteShopifyBulkOperationVariables, options?: LimitToKnownKeys<Options, CompleteShopifyBulkOperationOptions>): Promise<CompleteShopifyBulkOperationResult<Options>>;
declare function completeShopifyBulkOperation<Options extends CompleteShopifyBulkOperationOptions>(id: string, variables: FullyQualifiedCompleteShopifyBulkOperationVariables, options?: LimitToKnownKeys<Options, CompleteShopifyBulkOperationOptions>): Promise<CompleteShopifyBulkOperationResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCancelShopifyBulkOperationVariables = {
    shopifyBulkOperation?: CancelShopifyBulkOperationInput;
};
/**
 * The inputs for executing cancel on shopifyBulkOperation.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CancelShopifyBulkOperationVariables = CancelShopifyBulkOperationInput;
/**
 * The return value from executing cancel on shopifyBulkOperation.
 * "Is a GadgetRecord of the model's type."
 **/
export type CancelShopifyBulkOperationResult<Options extends CancelShopifyBulkOperationOptions> = SelectedShopifyBulkOperationOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyBulkOperationOrDefault<Options>>;
/**
  * Executes the cancel action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function cancelShopifyBulkOperation<Options extends CancelShopifyBulkOperationOptions>(id: string, variables: CancelShopifyBulkOperationVariables, options?: LimitToKnownKeys<Options, CancelShopifyBulkOperationOptions>): Promise<CancelShopifyBulkOperationResult<Options>>;
declare function cancelShopifyBulkOperation<Options extends CancelShopifyBulkOperationOptions>(id: string, variables: FullyQualifiedCancelShopifyBulkOperationVariables, options?: LimitToKnownKeys<Options, CancelShopifyBulkOperationOptions>): Promise<CancelShopifyBulkOperationResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedFailShopifyBulkOperationVariables = {
    shopifyBulkOperation?: FailShopifyBulkOperationInput;
};
/**
 * The inputs for executing fail on shopifyBulkOperation.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type FailShopifyBulkOperationVariables = FailShopifyBulkOperationInput;
/**
 * The return value from executing fail on shopifyBulkOperation.
 * "Is a GadgetRecord of the model's type."
 **/
export type FailShopifyBulkOperationResult<Options extends FailShopifyBulkOperationOptions> = SelectedShopifyBulkOperationOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyBulkOperationOrDefault<Options>>;
/**
  * Executes the fail action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function failShopifyBulkOperation<Options extends FailShopifyBulkOperationOptions>(id: string, variables: FailShopifyBulkOperationVariables, options?: LimitToKnownKeys<Options, FailShopifyBulkOperationOptions>): Promise<FailShopifyBulkOperationResult<Options>>;
declare function failShopifyBulkOperation<Options extends FailShopifyBulkOperationOptions>(id: string, variables: FullyQualifiedFailShopifyBulkOperationVariables, options?: LimitToKnownKeys<Options, FailShopifyBulkOperationOptions>): Promise<FailShopifyBulkOperationResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedExpireShopifyBulkOperationVariables = {
    shopifyBulkOperation?: ExpireShopifyBulkOperationInput;
};
/**
 * The inputs for executing expire on shopifyBulkOperation.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type ExpireShopifyBulkOperationVariables = ExpireShopifyBulkOperationInput;
/**
 * The return value from executing expire on shopifyBulkOperation.
 * "Is a GadgetRecord of the model's type."
 **/
export type ExpireShopifyBulkOperationResult<Options extends ExpireShopifyBulkOperationOptions> = SelectedShopifyBulkOperationOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyBulkOperationOrDefault<Options>>;
/**
  * Executes the expire action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function expireShopifyBulkOperation<Options extends ExpireShopifyBulkOperationOptions>(id: string, variables: ExpireShopifyBulkOperationVariables, options?: LimitToKnownKeys<Options, ExpireShopifyBulkOperationOptions>): Promise<ExpireShopifyBulkOperationResult<Options>>;
declare function expireShopifyBulkOperation<Options extends ExpireShopifyBulkOperationOptions>(id: string, variables: FullyQualifiedExpireShopifyBulkOperationVariables, options?: LimitToKnownKeys<Options, ExpireShopifyBulkOperationOptions>): Promise<ExpireShopifyBulkOperationResult<Options>>;
/** All the actions available at the collection level and record level for "shopifyBulkOperation" */
export declare class ShopifyBulkOperationManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyBulkOperation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyBulkOperationOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyBulkOperationOptions>): Promise<GadgetRecord<SelectedShopifyBulkOperationOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyBulkOperation";
        modelApiIdentifier: "shopifyBulkOperation";
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: FindOneShopifyBulkOperationOptions;
        schemaType: Query["shopifyBulkOperation"];
    };
    /**
 * Finds one shopifyBulkOperation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyBulkOperationOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyBulkOperationOptions>): Promise<GadgetRecord<SelectedShopifyBulkOperationOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyBulkOperation";
        modelApiIdentifier: "shopifyBulkOperation";
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: MaybeFindOneShopifyBulkOperationOptions;
        schemaType: Query["shopifyBulkOperation"];
    };
    /**
 * Finds many shopifyBulkOperation. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyBulkOperationsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyBulkOperationsOptions>): Promise<GadgetRecordList<SelectedShopifyBulkOperationOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyBulkOperations";
        modelApiIdentifier: "shopifyBulkOperation";
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: FindManyShopifyBulkOperationsOptions;
        schemaType: Query["shopifyBulkOperation"];
    };
    /**
 * Finds the first matching shopifyBulkOperation. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyBulkOperationOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyBulkOperationOptions>): Promise<GadgetRecord<SelectedShopifyBulkOperationOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyBulkOperations";
        modelApiIdentifier: "shopifyBulkOperation";
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: FindFirstShopifyBulkOperationOptions;
        schemaType: Query["shopifyBulkOperation"];
    };
    /**
 * Finds the first matching shopifyBulkOperation. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyBulkOperationOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyBulkOperationOptions>): Promise<GadgetRecord<SelectedShopifyBulkOperationOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyBulkOperations";
        modelApiIdentifier: "shopifyBulkOperation";
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: MaybeFindFirstShopifyBulkOperationOptions;
        schemaType: Query["shopifyBulkOperation"];
    };
    create: typeof createShopifyBulkOperation & {
        type: "action";
        operationName: "createShopifyBulkOperation";
        namespace: null;
        modelApiIdentifier: "shopifyBulkOperation";
        modelSelectionField: "shopifyBulkOperation";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: CreateShopifyBulkOperationOptions;
        schemaType: Query["shopifyBulkOperation"];
        variablesType: ((FullyQualifiedCreateShopifyBulkOperationVariables | CreateShopifyBulkOperationVariables)) | undefined;
        variables: {
            "shopifyBulkOperation": {
                required: false;
                type: "CreateShopifyBulkOperationInput";
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
        <Options extends CreateShopifyBulkOperationOptions>(inputs: (FullyQualifiedCreateShopifyBulkOperationVariables | CreateShopifyBulkOperationVariables)[], options?: LimitToKnownKeys<Options, CreateShopifyBulkOperationOptions>): Promise<CreateShopifyBulkOperationResult<Options>[]>;
        type: "action";
        operationName: "bulkCreateShopifyBulkOperations";
        namespace: null;
        modelApiIdentifier: "shopifyBulkOperation";
        modelSelectionField: "shopifyBulkOperations";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: CreateShopifyBulkOperationOptions;
        schemaType: Query["shopifyBulkOperation"];
        variablesType: (FullyQualifiedCreateShopifyBulkOperationVariables | CreateShopifyBulkOperationVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCreateShopifyBulkOperationsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    update: typeof updateShopifyBulkOperation & {
        type: "action";
        operationName: "updateShopifyBulkOperation";
        namespace: null;
        modelApiIdentifier: "shopifyBulkOperation";
        modelSelectionField: "shopifyBulkOperation";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: UpdateShopifyBulkOperationOptions;
        schemaType: Query["shopifyBulkOperation"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedUpdateShopifyBulkOperationVariables | UpdateShopifyBulkOperationVariables));
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifyBulkOperation": {
                required: false;
                type: "UpdateShopifyBulkOperationInput";
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
        <Options extends UpdateShopifyBulkOperationOptions>(inputs: (FullyQualifiedUpdateShopifyBulkOperationVariables | UpdateShopifyBulkOperationVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, UpdateShopifyBulkOperationOptions>): Promise<UpdateShopifyBulkOperationResult<Options>[]>;
        type: "action";
        operationName: "bulkUpdateShopifyBulkOperations";
        namespace: null;
        modelApiIdentifier: "shopifyBulkOperation";
        modelSelectionField: "shopifyBulkOperations";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: UpdateShopifyBulkOperationOptions;
        schemaType: Query["shopifyBulkOperation"];
        variablesType: (FullyQualifiedUpdateShopifyBulkOperationVariables | UpdateShopifyBulkOperationVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkUpdateShopifyBulkOperationsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    complete: typeof completeShopifyBulkOperation & {
        type: "action";
        operationName: "completeShopifyBulkOperation";
        namespace: null;
        modelApiIdentifier: "shopifyBulkOperation";
        modelSelectionField: "shopifyBulkOperation";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: CompleteShopifyBulkOperationOptions;
        schemaType: Query["shopifyBulkOperation"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedCompleteShopifyBulkOperationVariables | CompleteShopifyBulkOperationVariables));
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifyBulkOperation": {
                required: false;
                type: "CompleteShopifyBulkOperationInput";
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
* Executes the bulkComplete action with the given inputs.
*/
    bulkComplete: {
        <Options extends CompleteShopifyBulkOperationOptions>(inputs: (FullyQualifiedCompleteShopifyBulkOperationVariables | CompleteShopifyBulkOperationVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, CompleteShopifyBulkOperationOptions>): Promise<CompleteShopifyBulkOperationResult<Options>[]>;
        type: "action";
        operationName: "bulkCompleteShopifyBulkOperations";
        namespace: null;
        modelApiIdentifier: "shopifyBulkOperation";
        modelSelectionField: "shopifyBulkOperations";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: CompleteShopifyBulkOperationOptions;
        schemaType: Query["shopifyBulkOperation"];
        variablesType: (FullyQualifiedCompleteShopifyBulkOperationVariables | CompleteShopifyBulkOperationVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCompleteShopifyBulkOperationsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    cancel: typeof cancelShopifyBulkOperation & {
        type: "action";
        operationName: "cancelShopifyBulkOperation";
        namespace: null;
        modelApiIdentifier: "shopifyBulkOperation";
        modelSelectionField: "shopifyBulkOperation";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: CancelShopifyBulkOperationOptions;
        schemaType: Query["shopifyBulkOperation"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedCancelShopifyBulkOperationVariables | CancelShopifyBulkOperationVariables));
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifyBulkOperation": {
                required: false;
                type: "CancelShopifyBulkOperationInput";
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
* Executes the bulkCancel action with the given inputs.
*/
    bulkCancel: {
        <Options extends CancelShopifyBulkOperationOptions>(inputs: (FullyQualifiedCancelShopifyBulkOperationVariables | CancelShopifyBulkOperationVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, CancelShopifyBulkOperationOptions>): Promise<CancelShopifyBulkOperationResult<Options>[]>;
        type: "action";
        operationName: "bulkCancelShopifyBulkOperations";
        namespace: null;
        modelApiIdentifier: "shopifyBulkOperation";
        modelSelectionField: "shopifyBulkOperations";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: CancelShopifyBulkOperationOptions;
        schemaType: Query["shopifyBulkOperation"];
        variablesType: (FullyQualifiedCancelShopifyBulkOperationVariables | CancelShopifyBulkOperationVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCancelShopifyBulkOperationsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    fail: typeof failShopifyBulkOperation & {
        type: "action";
        operationName: "failShopifyBulkOperation";
        namespace: null;
        modelApiIdentifier: "shopifyBulkOperation";
        modelSelectionField: "shopifyBulkOperation";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: FailShopifyBulkOperationOptions;
        schemaType: Query["shopifyBulkOperation"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedFailShopifyBulkOperationVariables | FailShopifyBulkOperationVariables));
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifyBulkOperation": {
                required: false;
                type: "FailShopifyBulkOperationInput";
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
* Executes the bulkFail action with the given inputs.
*/
    bulkFail: {
        <Options extends FailShopifyBulkOperationOptions>(inputs: (FullyQualifiedFailShopifyBulkOperationVariables | FailShopifyBulkOperationVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, FailShopifyBulkOperationOptions>): Promise<FailShopifyBulkOperationResult<Options>[]>;
        type: "action";
        operationName: "bulkFailShopifyBulkOperations";
        namespace: null;
        modelApiIdentifier: "shopifyBulkOperation";
        modelSelectionField: "shopifyBulkOperations";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: FailShopifyBulkOperationOptions;
        schemaType: Query["shopifyBulkOperation"];
        variablesType: (FullyQualifiedFailShopifyBulkOperationVariables | FailShopifyBulkOperationVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkFailShopifyBulkOperationsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    expire: typeof expireShopifyBulkOperation & {
        type: "action";
        operationName: "expireShopifyBulkOperation";
        namespace: null;
        modelApiIdentifier: "shopifyBulkOperation";
        modelSelectionField: "shopifyBulkOperation";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: ExpireShopifyBulkOperationOptions;
        schemaType: Query["shopifyBulkOperation"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedExpireShopifyBulkOperationVariables | ExpireShopifyBulkOperationVariables));
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifyBulkOperation": {
                required: false;
                type: "ExpireShopifyBulkOperationInput";
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
* Executes the bulkExpire action with the given inputs.
*/
    bulkExpire: {
        <Options extends ExpireShopifyBulkOperationOptions>(inputs: (FullyQualifiedExpireShopifyBulkOperationVariables | ExpireShopifyBulkOperationVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, ExpireShopifyBulkOperationOptions>): Promise<ExpireShopifyBulkOperationResult<Options>[]>;
        type: "action";
        operationName: "bulkExpireShopifyBulkOperations";
        namespace: null;
        modelApiIdentifier: "shopifyBulkOperation";
        modelSelectionField: "shopifyBulkOperations";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyBulkOperationSelection;
        selectionType: AvailableShopifyBulkOperationSelection;
        optionsType: ExpireShopifyBulkOperationOptions;
        schemaType: Query["shopifyBulkOperation"];
        variablesType: (FullyQualifiedExpireShopifyBulkOperationVariables | ExpireShopifyBulkOperationVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkExpireShopifyBulkOperationsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
}
export {};
