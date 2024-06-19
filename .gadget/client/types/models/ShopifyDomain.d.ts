import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, ShopifyDomain, ShopifyDomainSort, ShopifyDomainFilter, AvailableShopifyDomainSelection, CreateShopifyDomainInput } from "../types.js";
export declare const DefaultShopifyDomainSelection: {
    readonly __typename: true;
    readonly createdAt: true;
    readonly host: true;
    readonly id: true;
    readonly localization: true;
    readonly sslEnabled: true;
    readonly updatedAt: true;
    readonly url: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyDomain". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyDomainOrDefault<Options extends Selectable<AvailableShopifyDomainSelection>> = DeepFilterNever<Select<ShopifyDomain, DefaultSelection<AvailableShopifyDomainSelection, Options, typeof DefaultShopifyDomainSelection>>>;
/** Options that can be passed to the `ShopifyDomainManager#findOne` method */
export interface FindOneShopifyDomainOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDomainSelection;
}
/** Options that can be passed to the `ShopifyDomainManager#maybeFindOne` method */
export interface MaybeFindOneShopifyDomainOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDomainSelection;
}
/** Options that can be passed to the `ShopifyDomainManager#findMany` method */
export interface FindManyShopifyDomainsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDomainSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyDomainSort | ShopifyDomainSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyDomainFilter | ShopifyDomainFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyDomainManager#findFirst` method */
export interface FindFirstShopifyDomainOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDomainSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyDomainSort | ShopifyDomainSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyDomainFilter | ShopifyDomainFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyDomainManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyDomainOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDomainSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyDomainSort | ShopifyDomainSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyDomainFilter | ShopifyDomainFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateShopifyDomainOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyDomainSelection;
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateShopifyDomainVariables = {
    shopifyDomain?: CreateShopifyDomainInput;
};
/**
 * The inputs for executing create on shopifyDomain.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateShopifyDomainVariables = CreateShopifyDomainInput;
/**
 * The return value from executing create on shopifyDomain.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyDomainResult<Options extends CreateShopifyDomainOptions> = SelectedShopifyDomainOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyDomainOrDefault<Options>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createShopifyDomain<Options extends CreateShopifyDomainOptions>(variables: CreateShopifyDomainVariables, options?: LimitToKnownKeys<Options, CreateShopifyDomainOptions>): Promise<CreateShopifyDomainResult<Options>>;
declare function createShopifyDomain<Options extends CreateShopifyDomainOptions>(variables: FullyQualifiedCreateShopifyDomainVariables, options?: LimitToKnownKeys<Options, CreateShopifyDomainOptions>): Promise<CreateShopifyDomainResult<Options>>;
/** All the actions available at the collection level and record level for "shopifyDomain" */
export declare class ShopifyDomainManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyDomain by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyDomainOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyDomainOptions>): Promise<GadgetRecord<SelectedShopifyDomainOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyDomain";
        modelApiIdentifier: "shopifyDomain";
        defaultSelection: typeof DefaultShopifyDomainSelection;
        selectionType: AvailableShopifyDomainSelection;
        optionsType: FindOneShopifyDomainOptions;
        schemaType: Query["shopifyDomain"];
    };
    /**
 * Finds one shopifyDomain by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyDomainOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyDomainOptions>): Promise<GadgetRecord<SelectedShopifyDomainOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyDomain";
        modelApiIdentifier: "shopifyDomain";
        defaultSelection: typeof DefaultShopifyDomainSelection;
        selectionType: AvailableShopifyDomainSelection;
        optionsType: MaybeFindOneShopifyDomainOptions;
        schemaType: Query["shopifyDomain"];
    };
    /**
 * Finds many shopifyDomain. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyDomainsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyDomainsOptions>): Promise<GadgetRecordList<SelectedShopifyDomainOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyDomains";
        modelApiIdentifier: "shopifyDomain";
        defaultSelection: typeof DefaultShopifyDomainSelection;
        selectionType: AvailableShopifyDomainSelection;
        optionsType: FindManyShopifyDomainsOptions;
        schemaType: Query["shopifyDomain"];
    };
    /**
 * Finds the first matching shopifyDomain. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyDomainOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyDomainOptions>): Promise<GadgetRecord<SelectedShopifyDomainOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyDomains";
        modelApiIdentifier: "shopifyDomain";
        defaultSelection: typeof DefaultShopifyDomainSelection;
        selectionType: AvailableShopifyDomainSelection;
        optionsType: FindFirstShopifyDomainOptions;
        schemaType: Query["shopifyDomain"];
    };
    /**
 * Finds the first matching shopifyDomain. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyDomainOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyDomainOptions>): Promise<GadgetRecord<SelectedShopifyDomainOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyDomains";
        modelApiIdentifier: "shopifyDomain";
        defaultSelection: typeof DefaultShopifyDomainSelection;
        selectionType: AvailableShopifyDomainSelection;
        optionsType: MaybeFindFirstShopifyDomainOptions;
        schemaType: Query["shopifyDomain"];
    };
    create: typeof createShopifyDomain & {
        type: "action";
        operationName: "createShopifyDomain";
        namespace: null;
        modelApiIdentifier: "shopifyDomain";
        modelSelectionField: "shopifyDomain";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyDomainSelection;
        selectionType: AvailableShopifyDomainSelection;
        optionsType: CreateShopifyDomainOptions;
        schemaType: Query["shopifyDomain"];
        variablesType: ((FullyQualifiedCreateShopifyDomainVariables | CreateShopifyDomainVariables)) | undefined;
        variables: {
            "shopifyDomain": {
                required: false;
                type: "CreateShopifyDomainInput";
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
        <Options extends CreateShopifyDomainOptions>(inputs: (FullyQualifiedCreateShopifyDomainVariables | CreateShopifyDomainVariables)[], options?: LimitToKnownKeys<Options, CreateShopifyDomainOptions>): Promise<CreateShopifyDomainResult<Options>[]>;
        type: "action";
        operationName: "bulkCreateShopifyDomains";
        namespace: null;
        modelApiIdentifier: "shopifyDomain";
        modelSelectionField: "shopifyDomains";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyDomainSelection;
        selectionType: AvailableShopifyDomainSelection;
        optionsType: CreateShopifyDomainOptions;
        schemaType: Query["shopifyDomain"];
        variablesType: (FullyQualifiedCreateShopifyDomainVariables | CreateShopifyDomainVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCreateShopifyDomainsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
}
export {};
