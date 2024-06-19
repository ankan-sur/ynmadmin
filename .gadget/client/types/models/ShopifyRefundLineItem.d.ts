import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyRefundLineItem, ShopifyRefundLineItemSort, ShopifyRefundLineItemFilter, AvailableShopifyRefundLineItemSelection, CreateShopifyRefundLineItemInput } from "../types.js";
export declare const DefaultShopifyRefundLineItemSelection: {
    readonly __typename: true;
    readonly createdAt: true;
    readonly id: true;
    readonly quantity: true;
    readonly restockType: true;
    readonly subtotal: true;
    readonly subtotalSet: true;
    readonly totalTax: true;
    readonly totalTaxSet: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyRefundLineItem". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyRefundLineItemOrDefault<Options extends Selectable<AvailableShopifyRefundLineItemSelection>> = DeepFilterNever<Select<ShopifyRefundLineItem, DefaultSelection<AvailableShopifyRefundLineItemSelection, Options, typeof DefaultShopifyRefundLineItemSelection>>>;
/** Options that can be passed to the `ShopifyRefundLineItemManager#findOne` method */
export interface FindOneShopifyRefundLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRefundLineItemSelection;
}
/** Options that can be passed to the `ShopifyRefundLineItemManager#maybeFindOne` method */
export interface MaybeFindOneShopifyRefundLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRefundLineItemSelection;
}
/** Options that can be passed to the `ShopifyRefundLineItemManager#findMany` method */
export interface FindManyShopifyRefundLineItemsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRefundLineItemSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyRefundLineItemSort | ShopifyRefundLineItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyRefundLineItemFilter | ShopifyRefundLineItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyRefundLineItemManager#findFirst` method */
export interface FindFirstShopifyRefundLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRefundLineItemSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyRefundLineItemSort | ShopifyRefundLineItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyRefundLineItemFilter | ShopifyRefundLineItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyRefundLineItemManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyRefundLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRefundLineItemSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyRefundLineItemSort | ShopifyRefundLineItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyRefundLineItemFilter | ShopifyRefundLineItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateShopifyRefundLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyRefundLineItemSelection;
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateShopifyRefundLineItemVariables = {
    shopifyRefundLineItem?: CreateShopifyRefundLineItemInput;
};
/**
 * The inputs for executing create on shopifyRefundLineItem.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateShopifyRefundLineItemVariables = CreateShopifyRefundLineItemInput;
/**
 * The return value from executing create on shopifyRefundLineItem.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyRefundLineItemResult<Options extends CreateShopifyRefundLineItemOptions> = SelectedShopifyRefundLineItemOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyRefundLineItemOrDefault<Options>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createShopifyRefundLineItem<Options extends CreateShopifyRefundLineItemOptions>(variables: CreateShopifyRefundLineItemVariables, options?: LimitToKnownKeys<Options, CreateShopifyRefundLineItemOptions>): Promise<CreateShopifyRefundLineItemResult<Options>>;
declare function createShopifyRefundLineItem<Options extends CreateShopifyRefundLineItemOptions>(variables: FullyQualifiedCreateShopifyRefundLineItemVariables, options?: LimitToKnownKeys<Options, CreateShopifyRefundLineItemOptions>): Promise<CreateShopifyRefundLineItemResult<Options>>;
/** All the actions available at the collection level and record level for "shopifyRefundLineItem" */
export declare class ShopifyRefundLineItemManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyRefundLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyRefundLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyRefundLineItemOptions>): Promise<GadgetRecord<SelectedShopifyRefundLineItemOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyRefundLineItem";
        modelApiIdentifier: "shopifyRefundLineItem";
        defaultSelection: typeof DefaultShopifyRefundLineItemSelection;
        selectionType: AvailableShopifyRefundLineItemSelection;
        optionsType: FindOneShopifyRefundLineItemOptions;
        schemaType: Query["shopifyRefundLineItem"];
    };
    /**
 * Finds one shopifyRefundLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyRefundLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyRefundLineItemOptions>): Promise<GadgetRecord<SelectedShopifyRefundLineItemOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyRefundLineItem";
        modelApiIdentifier: "shopifyRefundLineItem";
        defaultSelection: typeof DefaultShopifyRefundLineItemSelection;
        selectionType: AvailableShopifyRefundLineItemSelection;
        optionsType: MaybeFindOneShopifyRefundLineItemOptions;
        schemaType: Query["shopifyRefundLineItem"];
    };
    /**
 * Finds many shopifyRefundLineItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyRefundLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyRefundLineItemsOptions>): Promise<GadgetRecordList<SelectedShopifyRefundLineItemOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyRefundLineItems";
        modelApiIdentifier: "shopifyRefundLineItem";
        defaultSelection: typeof DefaultShopifyRefundLineItemSelection;
        selectionType: AvailableShopifyRefundLineItemSelection;
        optionsType: FindManyShopifyRefundLineItemsOptions;
        schemaType: Query["shopifyRefundLineItem"];
    };
    /**
 * Finds the first matching shopifyRefundLineItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyRefundLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyRefundLineItemOptions>): Promise<GadgetRecord<SelectedShopifyRefundLineItemOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyRefundLineItems";
        modelApiIdentifier: "shopifyRefundLineItem";
        defaultSelection: typeof DefaultShopifyRefundLineItemSelection;
        selectionType: AvailableShopifyRefundLineItemSelection;
        optionsType: FindFirstShopifyRefundLineItemOptions;
        schemaType: Query["shopifyRefundLineItem"];
    };
    /**
 * Finds the first matching shopifyRefundLineItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyRefundLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyRefundLineItemOptions>): Promise<GadgetRecord<SelectedShopifyRefundLineItemOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyRefundLineItems";
        modelApiIdentifier: "shopifyRefundLineItem";
        defaultSelection: typeof DefaultShopifyRefundLineItemSelection;
        selectionType: AvailableShopifyRefundLineItemSelection;
        optionsType: MaybeFindFirstShopifyRefundLineItemOptions;
        schemaType: Query["shopifyRefundLineItem"];
    };
    create: typeof createShopifyRefundLineItem & {
        type: "action";
        operationName: "createShopifyRefundLineItem";
        namespace: null;
        modelApiIdentifier: "shopifyRefundLineItem";
        modelSelectionField: "shopifyRefundLineItem";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyRefundLineItemSelection;
        selectionType: AvailableShopifyRefundLineItemSelection;
        optionsType: CreateShopifyRefundLineItemOptions;
        schemaType: Query["shopifyRefundLineItem"];
        variablesType: ((FullyQualifiedCreateShopifyRefundLineItemVariables | CreateShopifyRefundLineItemVariables)) | undefined;
        variables: {
            "shopifyRefundLineItem": {
                required: false;
                type: "CreateShopifyRefundLineItemInput";
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
        <Options extends CreateShopifyRefundLineItemOptions>(inputs: (FullyQualifiedCreateShopifyRefundLineItemVariables | CreateShopifyRefundLineItemVariables)[], options?: LimitToKnownKeys<Options, CreateShopifyRefundLineItemOptions>): Promise<CreateShopifyRefundLineItemResult<Options>[]>;
        type: "action";
        operationName: "bulkCreateShopifyRefundLineItems";
        namespace: null;
        modelApiIdentifier: "shopifyRefundLineItem";
        modelSelectionField: "shopifyRefundLineItems";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyRefundLineItemSelection;
        selectionType: AvailableShopifyRefundLineItemSelection;
        optionsType: CreateShopifyRefundLineItemOptions;
        schemaType: Query["shopifyRefundLineItem"];
        variablesType: (FullyQualifiedCreateShopifyRefundLineItemVariables | CreateShopifyRefundLineItemVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCreateShopifyRefundLineItemsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
}
export {};
