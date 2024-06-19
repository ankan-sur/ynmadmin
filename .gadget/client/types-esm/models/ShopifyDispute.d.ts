import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, IDsList, ShopifyDispute, ShopifyDisputeSort, ShopifyDisputeFilter, AvailableShopifyDisputeSelection, CreateShopifyDisputeInput, UpdateShopifyDisputeInput } from "../types.js";
export declare const DefaultShopifyDisputeSelection: {
    readonly __typename: true;
    readonly amount: true;
    readonly createdAt: true;
    readonly currency: true;
    readonly evidenceDueBy: true;
    readonly evidenceSentOn: true;
    readonly finalizedOn: true;
    readonly id: true;
    readonly networkReasonCode: true;
    readonly reason: true;
    readonly status: true;
    readonly type: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyDispute". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyDisputeOrDefault<Options extends Selectable<AvailableShopifyDisputeSelection>> = DeepFilterNever<Select<ShopifyDispute, DefaultSelection<AvailableShopifyDisputeSelection, Options, typeof DefaultShopifyDisputeSelection>>>;
/** Options that can be passed to the `ShopifyDisputeManager#findOne` method */
export interface FindOneShopifyDisputeOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDisputeSelection;
}
/** Options that can be passed to the `ShopifyDisputeManager#maybeFindOne` method */
export interface MaybeFindOneShopifyDisputeOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDisputeSelection;
}
/** Options that can be passed to the `ShopifyDisputeManager#findMany` method */
export interface FindManyShopifyDisputesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDisputeSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyDisputeSort | ShopifyDisputeSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyDisputeFilter | ShopifyDisputeFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyDisputeManager#findFirst` method */
export interface FindFirstShopifyDisputeOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDisputeSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyDisputeSort | ShopifyDisputeSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyDisputeFilter | ShopifyDisputeFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyDisputeManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyDisputeOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDisputeSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyDisputeSort | ShopifyDisputeSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyDisputeFilter | ShopifyDisputeFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateShopifyDisputeOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDisputeSelection;
}
export interface UpdateShopifyDisputeOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDisputeSelection;
}
export interface DeleteShopifyDisputeOptions {
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateShopifyDisputeVariables = {
    shopifyDispute?: CreateShopifyDisputeInput;
};
/**
 * The inputs for executing create on shopifyDispute.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateShopifyDisputeVariables = CreateShopifyDisputeInput;
/**
 * The return value from executing create on shopifyDispute.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyDisputeResult<Options extends CreateShopifyDisputeOptions> = SelectedShopifyDisputeOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyDisputeOrDefault<Options>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createShopifyDispute<Options extends CreateShopifyDisputeOptions>(variables: CreateShopifyDisputeVariables, options?: LimitToKnownKeys<Options, CreateShopifyDisputeOptions>): Promise<CreateShopifyDisputeResult<Options>>;
declare function createShopifyDispute<Options extends CreateShopifyDisputeOptions>(variables: FullyQualifiedCreateShopifyDisputeVariables, options?: LimitToKnownKeys<Options, CreateShopifyDisputeOptions>): Promise<CreateShopifyDisputeResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateShopifyDisputeVariables = {
    shopifyDispute?: UpdateShopifyDisputeInput;
};
/**
 * The inputs for executing update on shopifyDispute.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateShopifyDisputeVariables = UpdateShopifyDisputeInput;
/**
 * The return value from executing update on shopifyDispute.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyDisputeResult<Options extends UpdateShopifyDisputeOptions> = SelectedShopifyDisputeOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyDisputeOrDefault<Options>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateShopifyDispute<Options extends UpdateShopifyDisputeOptions>(id: string, variables: UpdateShopifyDisputeVariables, options?: LimitToKnownKeys<Options, UpdateShopifyDisputeOptions>): Promise<UpdateShopifyDisputeResult<Options>>;
declare function updateShopifyDispute<Options extends UpdateShopifyDisputeOptions>(id: string, variables: FullyQualifiedUpdateShopifyDisputeVariables, options?: LimitToKnownKeys<Options, UpdateShopifyDisputeOptions>): Promise<UpdateShopifyDisputeResult<Options>>;
/**
 * The return value from executing delete on shopifyDispute.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyDisputeResult<Options extends DeleteShopifyDisputeOptions> = void extends void ? void : GadgetRecord<SelectedShopifyDisputeOrDefault<Options>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteShopifyDispute<Options extends DeleteShopifyDisputeOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteShopifyDisputeOptions>): Promise<DeleteShopifyDisputeResult<Options>>;
/** All the actions available at the collection level and record level for "shopifyDispute" */
export declare class ShopifyDisputeManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyDispute by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyDisputeOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyDisputeOptions>): Promise<GadgetRecord<SelectedShopifyDisputeOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyDispute";
        modelApiIdentifier: "shopifyDispute";
        defaultSelection: typeof DefaultShopifyDisputeSelection;
        selectionType: AvailableShopifyDisputeSelection;
        optionsType: FindOneShopifyDisputeOptions;
        schemaType: Query["shopifyDispute"];
    };
    /**
 * Finds one shopifyDispute by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyDisputeOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyDisputeOptions>): Promise<GadgetRecord<SelectedShopifyDisputeOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyDispute";
        modelApiIdentifier: "shopifyDispute";
        defaultSelection: typeof DefaultShopifyDisputeSelection;
        selectionType: AvailableShopifyDisputeSelection;
        optionsType: MaybeFindOneShopifyDisputeOptions;
        schemaType: Query["shopifyDispute"];
    };
    /**
 * Finds many shopifyDispute. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyDisputesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyDisputesOptions>): Promise<GadgetRecordList<SelectedShopifyDisputeOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyDisputes";
        modelApiIdentifier: "shopifyDispute";
        defaultSelection: typeof DefaultShopifyDisputeSelection;
        selectionType: AvailableShopifyDisputeSelection;
        optionsType: FindManyShopifyDisputesOptions;
        schemaType: Query["shopifyDispute"];
    };
    /**
 * Finds the first matching shopifyDispute. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyDisputeOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyDisputeOptions>): Promise<GadgetRecord<SelectedShopifyDisputeOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyDisputes";
        modelApiIdentifier: "shopifyDispute";
        defaultSelection: typeof DefaultShopifyDisputeSelection;
        selectionType: AvailableShopifyDisputeSelection;
        optionsType: FindFirstShopifyDisputeOptions;
        schemaType: Query["shopifyDispute"];
    };
    /**
 * Finds the first matching shopifyDispute. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyDisputeOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyDisputeOptions>): Promise<GadgetRecord<SelectedShopifyDisputeOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyDisputes";
        modelApiIdentifier: "shopifyDispute";
        defaultSelection: typeof DefaultShopifyDisputeSelection;
        selectionType: AvailableShopifyDisputeSelection;
        optionsType: MaybeFindFirstShopifyDisputeOptions;
        schemaType: Query["shopifyDispute"];
    };
    create: typeof createShopifyDispute & {
        type: "action";
        operationName: "createShopifyDispute";
        namespace: null;
        modelApiIdentifier: "shopifyDispute";
        modelSelectionField: "shopifyDispute";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyDisputeSelection;
        selectionType: AvailableShopifyDisputeSelection;
        optionsType: CreateShopifyDisputeOptions;
        schemaType: Query["shopifyDispute"];
        variablesType: ((FullyQualifiedCreateShopifyDisputeVariables | CreateShopifyDisputeVariables)) | undefined;
        variables: {
            "shopifyDispute": {
                required: false;
                type: "CreateShopifyDisputeInput";
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
        <Options extends CreateShopifyDisputeOptions>(inputs: (FullyQualifiedCreateShopifyDisputeVariables | CreateShopifyDisputeVariables)[], options?: LimitToKnownKeys<Options, CreateShopifyDisputeOptions>): Promise<CreateShopifyDisputeResult<Options>[]>;
        type: "action";
        operationName: "bulkCreateShopifyDisputes";
        namespace: null;
        modelApiIdentifier: "shopifyDispute";
        modelSelectionField: "shopifyDisputes";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyDisputeSelection;
        selectionType: AvailableShopifyDisputeSelection;
        optionsType: CreateShopifyDisputeOptions;
        schemaType: Query["shopifyDispute"];
        variablesType: (FullyQualifiedCreateShopifyDisputeVariables | CreateShopifyDisputeVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCreateShopifyDisputesInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    update: typeof updateShopifyDispute & {
        type: "action";
        operationName: "updateShopifyDispute";
        namespace: null;
        modelApiIdentifier: "shopifyDispute";
        modelSelectionField: "shopifyDispute";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyDisputeSelection;
        selectionType: AvailableShopifyDisputeSelection;
        optionsType: UpdateShopifyDisputeOptions;
        schemaType: Query["shopifyDispute"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedUpdateShopifyDisputeVariables | UpdateShopifyDisputeVariables));
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifyDispute": {
                required: false;
                type: "UpdateShopifyDisputeInput";
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
        <Options extends UpdateShopifyDisputeOptions>(inputs: (FullyQualifiedUpdateShopifyDisputeVariables | UpdateShopifyDisputeVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, UpdateShopifyDisputeOptions>): Promise<UpdateShopifyDisputeResult<Options>[]>;
        type: "action";
        operationName: "bulkUpdateShopifyDisputes";
        namespace: null;
        modelApiIdentifier: "shopifyDispute";
        modelSelectionField: "shopifyDisputes";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyDisputeSelection;
        selectionType: AvailableShopifyDisputeSelection;
        optionsType: UpdateShopifyDisputeOptions;
        schemaType: Query["shopifyDispute"];
        variablesType: (FullyQualifiedUpdateShopifyDisputeVariables | UpdateShopifyDisputeVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkUpdateShopifyDisputesInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    delete: typeof deleteShopifyDispute & {
        type: "action";
        operationName: "deleteShopifyDispute";
        namespace: null;
        modelApiIdentifier: "shopifyDispute";
        modelSelectionField: "shopifyDispute";
        isBulk: false;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteShopifyDisputeOptions;
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
        <Options extends DeleteShopifyDisputeOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteShopifyDisputeOptions>): Promise<DeleteShopifyDisputeResult<Options>[]>;
        type: "action";
        operationName: "bulkDeleteShopifyDisputes";
        namespace: null;
        modelApiIdentifier: "shopifyDispute";
        modelSelectionField: "shopifyDisputes";
        isBulk: true;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteShopifyDisputeOptions;
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
