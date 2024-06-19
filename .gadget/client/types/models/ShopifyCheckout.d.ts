import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, IDsList, ShopifyCheckout, ShopifyCheckoutSort, ShopifyCheckoutFilter, AvailableShopifyCheckoutSelection, CreateShopifyCheckoutInput, UpdateShopifyCheckoutInput } from "../types.js";
export declare const DefaultShopifyCheckoutSelection: {
    readonly __typename: true;
    readonly abandonedCheckoutUrl: true;
    readonly appliedDiscount: true;
    readonly buyerAcceptsMarketing: true;
    readonly completedAt: true;
    readonly createdAt: true;
    readonly creditCard: true;
    readonly currency: true;
    readonly customerLocale: true;
    readonly device: true;
    readonly discountCode: true;
    readonly email: true;
    readonly id: true;
    readonly legalNoticeUrl: true;
    readonly name: true;
    readonly note: true;
    readonly noteAttributes: true;
    readonly orderStatusUrl: true;
    readonly paymentDue: true;
    readonly paymentUrl: true;
    readonly payments: true;
    readonly phone: true;
    readonly presentmentCurrency: true;
    readonly privacyPolicyUrl: true;
    readonly refundPolicyUrl: true;
    readonly requiresShipping: true;
    readonly reservationTime: true;
    readonly reservationTimeLeft: true;
    readonly shippingLine: true;
    readonly shippingPolicyUrl: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyPaymentsAccountId: true;
    readonly shopifyUpdatedAt: true;
    readonly sourceIdentifier: true;
    readonly sourceName: true;
    readonly sourceUrl: true;
    readonly subscriptionPolicyUrl: true;
    readonly subtotalPrice: true;
    readonly taxExempt: true;
    readonly taxLines: true;
    readonly taxManipulations: true;
    readonly taxesIncluded: true;
    readonly termsOfSaleUrl: true;
    readonly termsOfServiceUrl: true;
    readonly token: true;
    readonly totalLineItemsPrice: true;
    readonly totalPrice: true;
    readonly totalTax: true;
    readonly totalTipReceived: true;
    readonly updatedAt: true;
    readonly userId: true;
    readonly webUrl: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyCheckout". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyCheckoutOrDefault<Options extends Selectable<AvailableShopifyCheckoutSelection>> = DeepFilterNever<Select<ShopifyCheckout, DefaultSelection<AvailableShopifyCheckoutSelection, Options, typeof DefaultShopifyCheckoutSelection>>>;
/** Options that can be passed to the `ShopifyCheckoutManager#findOne` method */
export interface FindOneShopifyCheckoutOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCheckoutSelection;
}
/** Options that can be passed to the `ShopifyCheckoutManager#maybeFindOne` method */
export interface MaybeFindOneShopifyCheckoutOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCheckoutSelection;
}
/** Options that can be passed to the `ShopifyCheckoutManager#findMany` method */
export interface FindManyShopifyCheckoutsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCheckoutSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCheckoutSort | ShopifyCheckoutSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCheckoutFilter | ShopifyCheckoutFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyCheckoutManager#findFirst` method */
export interface FindFirstShopifyCheckoutOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCheckoutSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCheckoutSort | ShopifyCheckoutSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCheckoutFilter | ShopifyCheckoutFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyCheckoutManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyCheckoutOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCheckoutSelection;
    /** Return records sorted by these sorts */
    sort?: ShopifyCheckoutSort | ShopifyCheckoutSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyCheckoutFilter | ShopifyCheckoutFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateShopifyCheckoutOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCheckoutSelection;
}
export interface UpdateShopifyCheckoutOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyCheckoutSelection;
}
export interface DeleteShopifyCheckoutOptions {
}
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateShopifyCheckoutVariables = {
    shopifyCheckout?: CreateShopifyCheckoutInput;
};
/**
 * The inputs for executing create on shopifyCheckout.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateShopifyCheckoutVariables = CreateShopifyCheckoutInput;
/**
 * The return value from executing create on shopifyCheckout.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyCheckoutResult<Options extends CreateShopifyCheckoutOptions> = SelectedShopifyCheckoutOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyCheckoutOrDefault<Options>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createShopifyCheckout<Options extends CreateShopifyCheckoutOptions>(variables: CreateShopifyCheckoutVariables, options?: LimitToKnownKeys<Options, CreateShopifyCheckoutOptions>): Promise<CreateShopifyCheckoutResult<Options>>;
declare function createShopifyCheckout<Options extends CreateShopifyCheckoutOptions>(variables: FullyQualifiedCreateShopifyCheckoutVariables, options?: LimitToKnownKeys<Options, CreateShopifyCheckoutOptions>): Promise<CreateShopifyCheckoutResult<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing this action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateShopifyCheckoutVariables = {
    shopifyCheckout?: UpdateShopifyCheckoutInput;
};
/**
 * The inputs for executing update on shopifyCheckout.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateShopifyCheckoutVariables = UpdateShopifyCheckoutInput;
/**
 * The return value from executing update on shopifyCheckout.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyCheckoutResult<Options extends UpdateShopifyCheckoutOptions> = SelectedShopifyCheckoutOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyCheckoutOrDefault<Options>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateShopifyCheckout<Options extends UpdateShopifyCheckoutOptions>(id: string, variables: UpdateShopifyCheckoutVariables, options?: LimitToKnownKeys<Options, UpdateShopifyCheckoutOptions>): Promise<UpdateShopifyCheckoutResult<Options>>;
declare function updateShopifyCheckout<Options extends UpdateShopifyCheckoutOptions>(id: string, variables: FullyQualifiedUpdateShopifyCheckoutVariables, options?: LimitToKnownKeys<Options, UpdateShopifyCheckoutOptions>): Promise<UpdateShopifyCheckoutResult<Options>>;
/**
 * The return value from executing delete on shopifyCheckout.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyCheckoutResult<Options extends DeleteShopifyCheckoutOptions> = void extends void ? void : GadgetRecord<SelectedShopifyCheckoutOrDefault<Options>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteShopifyCheckout<Options extends DeleteShopifyCheckoutOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteShopifyCheckoutOptions>): Promise<DeleteShopifyCheckoutResult<Options>>;
/** All the actions available at the collection level and record level for "shopifyCheckout" */
export declare class ShopifyCheckoutManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one shopifyCheckout by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneShopifyCheckoutOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCheckoutOptions>): Promise<GadgetRecord<SelectedShopifyCheckoutOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "shopifyCheckout";
        modelApiIdentifier: "shopifyCheckout";
        defaultSelection: typeof DefaultShopifyCheckoutSelection;
        selectionType: AvailableShopifyCheckoutSelection;
        optionsType: FindOneShopifyCheckoutOptions;
        schemaType: Query["shopifyCheckout"];
    };
    /**
 * Finds one shopifyCheckout by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneShopifyCheckoutOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCheckoutOptions>): Promise<GadgetRecord<SelectedShopifyCheckoutOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "shopifyCheckout";
        modelApiIdentifier: "shopifyCheckout";
        defaultSelection: typeof DefaultShopifyCheckoutSelection;
        selectionType: AvailableShopifyCheckoutSelection;
        optionsType: MaybeFindOneShopifyCheckoutOptions;
        schemaType: Query["shopifyCheckout"];
    };
    /**
 * Finds many shopifyCheckout. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyShopifyCheckoutsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCheckoutsOptions>): Promise<GadgetRecordList<SelectedShopifyCheckoutOrDefault<Options>>>;
        type: "findMany";
        operationName: "shopifyCheckouts";
        modelApiIdentifier: "shopifyCheckout";
        defaultSelection: typeof DefaultShopifyCheckoutSelection;
        selectionType: AvailableShopifyCheckoutSelection;
        optionsType: FindManyShopifyCheckoutsOptions;
        schemaType: Query["shopifyCheckout"];
    };
    /**
 * Finds the first matching shopifyCheckout. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstShopifyCheckoutOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCheckoutOptions>): Promise<GadgetRecord<SelectedShopifyCheckoutOrDefault<Options>>>;
        type: "findFirst";
        operationName: "shopifyCheckouts";
        modelApiIdentifier: "shopifyCheckout";
        defaultSelection: typeof DefaultShopifyCheckoutSelection;
        selectionType: AvailableShopifyCheckoutSelection;
        optionsType: FindFirstShopifyCheckoutOptions;
        schemaType: Query["shopifyCheckout"];
    };
    /**
 * Finds the first matching shopifyCheckout. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstShopifyCheckoutOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCheckoutOptions>): Promise<GadgetRecord<SelectedShopifyCheckoutOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "shopifyCheckouts";
        modelApiIdentifier: "shopifyCheckout";
        defaultSelection: typeof DefaultShopifyCheckoutSelection;
        selectionType: AvailableShopifyCheckoutSelection;
        optionsType: MaybeFindFirstShopifyCheckoutOptions;
        schemaType: Query["shopifyCheckout"];
    };
    create: typeof createShopifyCheckout & {
        type: "action";
        operationName: "createShopifyCheckout";
        namespace: null;
        modelApiIdentifier: "shopifyCheckout";
        modelSelectionField: "shopifyCheckout";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyCheckoutSelection;
        selectionType: AvailableShopifyCheckoutSelection;
        optionsType: CreateShopifyCheckoutOptions;
        schemaType: Query["shopifyCheckout"];
        variablesType: ((FullyQualifiedCreateShopifyCheckoutVariables | CreateShopifyCheckoutVariables)) | undefined;
        variables: {
            "shopifyCheckout": {
                required: false;
                type: "CreateShopifyCheckoutInput";
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
        <Options extends CreateShopifyCheckoutOptions>(inputs: (FullyQualifiedCreateShopifyCheckoutVariables | CreateShopifyCheckoutVariables)[], options?: LimitToKnownKeys<Options, CreateShopifyCheckoutOptions>): Promise<CreateShopifyCheckoutResult<Options>[]>;
        type: "action";
        operationName: "bulkCreateShopifyCheckouts";
        namespace: null;
        modelApiIdentifier: "shopifyCheckout";
        modelSelectionField: "shopifyCheckouts";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyCheckoutSelection;
        selectionType: AvailableShopifyCheckoutSelection;
        optionsType: CreateShopifyCheckoutOptions;
        schemaType: Query["shopifyCheckout"];
        variablesType: (FullyQualifiedCreateShopifyCheckoutVariables | CreateShopifyCheckoutVariables)[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkCreateShopifyCheckoutsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    update: typeof updateShopifyCheckout & {
        type: "action";
        operationName: "updateShopifyCheckout";
        namespace: null;
        modelApiIdentifier: "shopifyCheckout";
        modelSelectionField: "shopifyCheckout";
        isBulk: false;
        defaultSelection: typeof DefaultShopifyCheckoutSelection;
        selectionType: AvailableShopifyCheckoutSelection;
        optionsType: UpdateShopifyCheckoutOptions;
        schemaType: Query["shopifyCheckout"];
        variablesType: ({
            id: string;
        } & (FullyQualifiedUpdateShopifyCheckoutVariables | UpdateShopifyCheckoutVariables));
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
            "shopifyCheckout": {
                required: false;
                type: "UpdateShopifyCheckoutInput";
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
        <Options extends UpdateShopifyCheckoutOptions>(inputs: (FullyQualifiedUpdateShopifyCheckoutVariables | UpdateShopifyCheckoutVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, UpdateShopifyCheckoutOptions>): Promise<UpdateShopifyCheckoutResult<Options>[]>;
        type: "action";
        operationName: "bulkUpdateShopifyCheckouts";
        namespace: null;
        modelApiIdentifier: "shopifyCheckout";
        modelSelectionField: "shopifyCheckouts";
        isBulk: true;
        defaultSelection: typeof DefaultShopifyCheckoutSelection;
        selectionType: AvailableShopifyCheckoutSelection;
        optionsType: UpdateShopifyCheckoutOptions;
        schemaType: Query["shopifyCheckout"];
        variablesType: (FullyQualifiedUpdateShopifyCheckoutVariables | UpdateShopifyCheckoutVariables & {
            id: string;
        })[];
        variables: {
            inputs: {
                required: true;
                type: "[BulkUpdateShopifyCheckoutsInput!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    delete: typeof deleteShopifyCheckout & {
        type: "action";
        operationName: "deleteShopifyCheckout";
        namespace: null;
        modelApiIdentifier: "shopifyCheckout";
        modelSelectionField: "shopifyCheckout";
        isBulk: false;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteShopifyCheckoutOptions;
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
        <Options extends DeleteShopifyCheckoutOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteShopifyCheckoutOptions>): Promise<DeleteShopifyCheckoutResult<Options>[]>;
        type: "action";
        operationName: "bulkDeleteShopifyCheckouts";
        namespace: null;
        modelApiIdentifier: "shopifyCheckout";
        modelSelectionField: "shopifyCheckouts";
        isBulk: true;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteShopifyCheckoutOptions;
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
