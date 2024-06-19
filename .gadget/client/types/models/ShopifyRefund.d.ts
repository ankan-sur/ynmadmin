import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyRefund, ShopifyRefundSort, ShopifyRefundFilter, AvailableShopifyRefundSelection, CreateShopifyRefundInput } from "../types.js";
export declare const DefaultShopifyRefundSelection: {
    readonly __typename: true;
    readonly createdAt: true;
    readonly id: true;
    readonly note: true;
    readonly processedAt: true;
    readonly restock: true;
    readonly shopifyCreatedAt: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyRefund". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyRefundOrDefault<Options extends Selectable<AvailableShopifyRefundSelection>> = DeepFilterNever<Select<ShopifyRefund, DefaultSelection<AvailableShopifyRefundSelection, Options, typeof DefaultShopifyRefundSelection>>>;
/** Options that can be passed to the `ShopifyRefundManager#findOne` method */
export interface FindOneShopifyRefundOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRefundSelection;
}
/** Options that can be passed to the `ShopifyRefundManager#maybeFindOne` method */
export interface MaybeFindOneShopifyRefundOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRefundSelection;
}
/** Options that can be passed to the `ShopifyRefundManager#findMany` method */
export interface FindManyShopifyRefundsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRefundSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyRefundSort | ShopifyRefundSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyRefundFilter | ShopifyRefundFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyRefundManager#findFirst` method */
export interface FindFirstShopifyRefundOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRefundSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyRefundSort | ShopifyRefundSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyRefundFilter | ShopifyRefundFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyRefundManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyRefundOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRefundSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyRefundSort | ShopifyRefundSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyRefundFilter | ShopifyRefundFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateShopifyRefundOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRefundSelection;
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateShopifyRefundVariables = {
    shopifyRefund?: CreateShopifyRefundInput;
};
/**
 * The inputs for executing create on shopifyRefund.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateShopifyRefundVariables = CreateShopifyRefundInput;
/**
 * The return value from executing create on shopifyRefund.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyRefundResult<Options extends CreateShopifyRefundOptions> = SelectedShopifyRefundOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyRefundOrDefault<Options>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createShopifyRefund<Options extends CreateShopifyRefundOptions>(variables: CreateShopifyRefundVariables, options?: LimitToKnownKeys<Options, CreateShopifyRefundOptions>): Promise<CreateShopifyRefundResult<Options>>;
declare function createShopifyRefund<Options extends CreateShopifyRefundOptions>(variables: FullyQualifiedCreateShopifyRefundVariables, options?: LimitToKnownKeys<Options, CreateShopifyRefundOptions>): Promise<CreateShopifyRefundResult<Options>>;
/** All the actions available at the collection level and record level for "shopifyRefund" */
export declare class ShopifyRefundManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyRefund by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyRefundOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyRefundOptions>): Promise<GadgetRecord<SelectedShopifyRefundOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyRefund";
        modelApiIdentifier: "shopifyRefund";
        defaultSelection: typeof DefaultShopifyRefundSelection;
        selectionType: AvailableShopifyRefundSelection;
        optionsType: FindOneShopifyRefundOptions;
        schemaType: Query["shopifyRefund"];
    };
    /**
 * Finds one shopifyRefund by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyRefundOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyRefundOptions>): Promise<GadgetRecord<SelectedShopifyRefundOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyRefund";
        modelApiIdentifier: "shopifyRefund";
        defaultSelection: typeof DefaultShopifyRefundSelection;
        selectionType: AvailableShopifyRefundSelection;
        optionsType: MaybeFindOneShopifyRefundOptions;
        schemaType: Query["shopifyRefund"];
    };
    /**
 * Finds many shopifyRefund. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyRefundsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyRefundsOptions>): Promise<GadgetRecordList<SelectedShopifyRefundOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyRefunds";
        modelApiIdentifier: "shopifyRefund";
        defaultSelection: typeof DefaultShopifyRefundSelection;
        selectionType: AvailableShopifyRefundSelection;
        optionsType: FindManyShopifyRefundsOptions;
        schemaType: Query["shopifyRefund"];
    };
    /**
 * Finds the first matching shopifyRefund. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyRefundOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyRefundOptions>): Promise<GadgetRecord<SelectedShopifyRefundOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyRefunds";
        modelApiIdentifier: "shopifyRefund";
        defaultSelection: typeof DefaultShopifyRefundSelection;
        selectionType: AvailableShopifyRefundSelection;
        optionsType: FindFirstShopifyRefundOptions;
        schemaType: Query["shopifyRefund"];
    };
    /**
 * Finds the first matching shopifyRefund. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyRefundOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyRefundOptions>): Promise<GadgetRecord<SelectedShopifyRefundOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyRefunds";
        modelApiIdentifier: "shopifyRefund";
        defaultSelection: typeof DefaultShopifyRefundSelection;
        selectionType: AvailableShopifyRefundSelection;
        optionsType: MaybeFindFirstShopifyRefundOptions;
        schemaType: Query["shopifyRefund"];
    };
    create: typeof createShopifyRefund & {
        type: "action";
        operationName: "createShopifyRefund";
        namespace: null;
        modelApiIdentifier: "shopifyRefund";
        modelSelectionField: "shopifyRefund";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyRefundSelection;
        selectionType: AvailableShopifyRefundSelection;
        optionsType: CreateShopifyRefundOptions;
        schemaType: Query["shopifyRefund"];
        variablesType: ((FullyQualifiedCreateShopifyRefundVariables | CreateShopifyRefundVariables)) | undefined;
        variables: {
            "shopifyRefund": {
                required: false;
                type: "CreateShopifyRefundInput";
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
        <Options extends CreateShopifyRefundOptions>(inputs: (FullyQualifiedCreateShopifyRefundVariables | CreateShopifyRefundVariables)[], options?: LimitToKnownKeys<Options, CreateShopifyRefundOptions>): Promise<CreateShopifyRefundResult<Options>[]>;
        type: "action";
        operationName: "bulkCreateShopifyRefunds";
        namespace: null;
        modelApiIdentifier: "shopifyRefund";
        modelSelectionField: "shopifyRefunds";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyRefundSelection;
        selectionType: AvailableShopifyRefundSelection;
        optionsType: CreateShopifyRefundOptions;
        schemaType: Query["shopifyRefund"];
        variablesType: (FullyQualifiedCreateShopifyRefundVariables | CreateShopifyRefundVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCreateShopifyRefundsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
}
export {};
