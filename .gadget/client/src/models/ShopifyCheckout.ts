import {
  GadgetConnection,
  GadgetRecord,
  GadgetRecordImplementation,
  GadgetRecordList,
  GadgetNonUniqueDataError,
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner,
  DefaultSelection,
  LimitToKnownKeys,
  Selectable
} from "@gadgetinc/api-client-core";

import {
  Query,
  ExplicitNestingRequired,
  Select,
  DeepFilterNever,
  IDsList,
      ShopifyCheckout,
      ShopifyCheckoutSort,
      ShopifyCheckoutFilter,
      AvailableShopifyCheckoutSelection,
      CreateShopifyCheckoutInput,
      UpdateShopifyCheckoutInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyCheckoutSelection = {
  "__typename": true,
  "abandonedCheckoutUrl": true,
  "appliedDiscount": true,
  "buyerAcceptsMarketing": true,
  "completedAt": true,
  "createdAt": true,
  "creditCard": true,
  "currency": true,
  "customerLocale": true,
  "device": true,
  "discountCode": true,
  "email": true,
  "id": true,
  "legalNoticeUrl": true,
  "name": true,
  "note": true,
  "noteAttributes": true,
  "orderStatusUrl": true,
  "paymentDue": true,
  "paymentUrl": true,
  "payments": true,
  "phone": true,
  "presentmentCurrency": true,
  "privacyPolicyUrl": true,
  "refundPolicyUrl": true,
  "requiresShipping": true,
  "reservationTime": true,
  "reservationTimeLeft": true,
  "shippingLine": true,
  "shippingPolicyUrl": true,
  "shopifyCreatedAt": true,
  "shopifyPaymentsAccountId": true,
  "shopifyUpdatedAt": true,
  "sourceIdentifier": true,
  "sourceName": true,
  "sourceUrl": true,
  "subscriptionPolicyUrl": true,
  "subtotalPrice": true,
  "taxExempt": true,
  "taxLines": true,
  "taxManipulations": true,
  "taxesIncluded": true,
  "termsOfSaleUrl": true,
  "termsOfServiceUrl": true,
  "token": true,
  "totalLineItemsPrice": true,
  "totalPrice": true,
  "totalTax": true,
  "totalTipReceived": true,
  "updatedAt": true,
  "userId": true,
  "webUrl": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyCheckout". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyCheckoutOrDefault<Options extends Selectable<AvailableShopifyCheckoutSelection>> = DeepFilterNever<
  Select<
    ShopifyCheckout,
    DefaultSelection<
      AvailableShopifyCheckoutSelection,
      Options,
      typeof DefaultShopifyCheckoutSelection
    >
  >>;

/** Options that can be passed to the `ShopifyCheckoutManager#findOne` method */
export interface FindOneShopifyCheckoutOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCheckoutSelection;
};

/** Options that can be passed to the `ShopifyCheckoutManager#maybeFindOne` method */
export interface MaybeFindOneShopifyCheckoutOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCheckoutSelection;
};

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
};

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
};

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
};


export interface CreateShopifyCheckoutOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCheckoutSelection;
};


export interface UpdateShopifyCheckoutOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCheckoutSelection;
};


export interface DeleteShopifyCheckoutOptions {
};


const apiIdentifier = "shopifyCheckout";
const pluralApiIdentifier = "shopifyCheckouts";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateShopifyCheckoutVariables = {
          shopifyCheckout?: CreateShopifyCheckoutInput,
      }

  /**
   * The inputs for executing create on shopifyCheckout.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateShopifyCheckoutVariables = CreateShopifyCheckoutInput;



/**
 * The return value from executing create on shopifyCheckout.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyCheckoutResult<Options extends CreateShopifyCheckoutOptions> =
  SelectedShopifyCheckoutOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyCheckoutOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createShopifyCheckout<Options extends CreateShopifyCheckoutOptions>(
  
    variables: CreateShopifyCheckoutVariables,

  options?: LimitToKnownKeys<Options, CreateShopifyCheckoutOptions>
): Promise<CreateShopifyCheckoutResult<Options>>;

// Fully qualified, nested api identifier overload
async function createShopifyCheckout<Options extends CreateShopifyCheckoutOptions>(
  
      variables: FullyQualifiedCreateShopifyCheckoutVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyCheckoutOptions>
): Promise<CreateShopifyCheckoutResult<Options>>;

// Function implementation
async function createShopifyCheckout<Options extends CreateShopifyCheckoutOptions>(
  this: ShopifyCheckoutManager,
  
      variables: CreateShopifyCheckoutVariables | FullyQualifiedCreateShopifyCheckoutVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyCheckoutOptions>
): Promise<CreateShopifyCheckoutResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedShopifyCheckoutOrDefault<Options>>(
    this,
    "createShopifyCheckout",
    DefaultShopifyCheckoutSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                    "shopifyCheckout": {
          value: newVariables.shopifyCheckout,
          required: false,
          type: "CreateShopifyCheckoutInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedUpdateShopifyCheckoutVariables = {
          shopifyCheckout?: UpdateShopifyCheckoutInput,
      }

  /**
   * The inputs for executing update on shopifyCheckout.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateShopifyCheckoutVariables = UpdateShopifyCheckoutInput;



/**
 * The return value from executing update on shopifyCheckout.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyCheckoutResult<Options extends UpdateShopifyCheckoutOptions> =
  SelectedShopifyCheckoutOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyCheckoutOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateShopifyCheckout<Options extends UpdateShopifyCheckoutOptions>(
  id: string,
    variables: UpdateShopifyCheckoutVariables,

  options?: LimitToKnownKeys<Options, UpdateShopifyCheckoutOptions>
): Promise<UpdateShopifyCheckoutResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateShopifyCheckout<Options extends UpdateShopifyCheckoutOptions>(
  id: string,
      variables: FullyQualifiedUpdateShopifyCheckoutVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyCheckoutOptions>
): Promise<UpdateShopifyCheckoutResult<Options>>;

// Function implementation
async function updateShopifyCheckout<Options extends UpdateShopifyCheckoutOptions>(
  this: ShopifyCheckoutManager,
  id: string,
      variables: UpdateShopifyCheckoutVariables | FullyQualifiedUpdateShopifyCheckoutVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyCheckoutOptions>
): Promise<UpdateShopifyCheckoutResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedShopifyCheckoutOrDefault<Options>>(
    this,
    "updateShopifyCheckout",
    DefaultShopifyCheckoutSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "shopifyCheckout": {
          value: newVariables.shopifyCheckout,
          required: false,
          type: "UpdateShopifyCheckoutInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on shopifyCheckout.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyCheckoutResult<Options extends DeleteShopifyCheckoutOptions> =
  void extends void ? void : GadgetRecord<SelectedShopifyCheckoutOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteShopifyCheckout<Options extends DeleteShopifyCheckoutOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyCheckoutOptions>
): Promise<DeleteShopifyCheckoutResult<Options>>;

// Function implementation
async function deleteShopifyCheckout<Options extends DeleteShopifyCheckoutOptions>(
  this: ShopifyCheckoutManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyCheckoutOptions>
): Promise<DeleteShopifyCheckoutResult<Options>> {

  return (await actionRunner<void>(
    this,
    "deleteShopifyCheckout",
    null,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                },
    options,
    null,
    false
  ));
}

  



/** All the actions available at the collection level and record level for "shopifyCheckout" */
export class ShopifyCheckoutManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyCheckout by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyCheckoutOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCheckoutOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCheckoutOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyCheckout";
  modelApiIdentifier: "shopifyCheckout";
  defaultSelection: typeof DefaultShopifyCheckoutSelection;
  selectionType: AvailableShopifyCheckoutSelection;
  optionsType: FindOneShopifyCheckoutOptions;
  schemaType: Query["shopifyCheckout"];
} = Object.assign(
  async <Options extends FindOneShopifyCheckoutOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCheckoutOptions>) => {
    return await findOneRunner<SelectedShopifyCheckoutOrDefault<Options>>(
      this,
      "shopifyCheckout",
      id,
      DefaultShopifyCheckoutSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyCheckout",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCheckoutSelection,
  } as any
)

  
    /**
 * Finds one shopifyCheckout by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyCheckoutOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCheckoutOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCheckoutOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyCheckout";
  modelApiIdentifier: "shopifyCheckout";
  defaultSelection: typeof DefaultShopifyCheckoutSelection;
  selectionType: AvailableShopifyCheckoutSelection;
  optionsType: MaybeFindOneShopifyCheckoutOptions;
  schemaType: Query["shopifyCheckout"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyCheckoutOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCheckoutOptions>) => {
    const record = await findOneRunner<SelectedShopifyCheckoutOrDefault<Options>>(
      this,
      "shopifyCheckout",
      id,
      DefaultShopifyCheckoutSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyCheckout",
    modelApiIdentifier: "shopifyCheckout",
    defaultSelection: DefaultShopifyCheckoutSelection,
  } as any
)

  
    /**
 * Finds many shopifyCheckout. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyCheckoutsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCheckoutsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyCheckoutOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyCheckouts";
  modelApiIdentifier: "shopifyCheckout";
  defaultSelection: typeof DefaultShopifyCheckoutSelection;
  selectionType: AvailableShopifyCheckoutSelection;
  optionsType: FindManyShopifyCheckoutsOptions;
  schemaType: Query["shopifyCheckout"];
} = Object.assign(
  async <Options extends FindManyShopifyCheckoutsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCheckoutsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyCheckoutOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyCheckoutOrDefault<Options>>(
      this,
      "shopifyCheckouts",
      DefaultShopifyCheckoutSelection,
      "shopifyCheckout",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyCheckouts",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCheckoutSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyCheckout. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyCheckoutOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCheckoutOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCheckoutOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyCheckouts";
  modelApiIdentifier: "shopifyCheckout";
  defaultSelection: typeof DefaultShopifyCheckoutSelection;
  selectionType: AvailableShopifyCheckoutSelection;
  optionsType: FindFirstShopifyCheckoutOptions;
  schemaType: Query["shopifyCheckout"];
} = Object.assign(
  async <Options extends FindFirstShopifyCheckoutOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCheckoutOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCheckoutOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyCheckoutOrDefault<Options>>(
      this,
      "shopifyCheckouts",
      DefaultShopifyCheckoutSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyCheckouts",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCheckoutSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyCheckout. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyCheckoutOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCheckoutOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCheckoutOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyCheckouts";
  modelApiIdentifier: "shopifyCheckout";
  defaultSelection: typeof DefaultShopifyCheckoutSelection;
  selectionType: AvailableShopifyCheckoutSelection;
  optionsType: MaybeFindFirstShopifyCheckoutOptions;
  schemaType: Query["shopifyCheckout"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyCheckoutOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCheckoutOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCheckoutOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyCheckoutOrDefault<Options>>(
      this,
      "shopifyCheckouts",
      DefaultShopifyCheckoutSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyCheckouts",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCheckoutSelection,
  } as any
);

  
    create = Object.assign(createShopifyCheckout,
  {
    type: "action",
    operationName: "createShopifyCheckout",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyCheckoutSelection,
    variables: {
      "shopifyCheckout": {
        required: false,
        type: "CreateShopifyCheckoutInput",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: true,
  } as unknown as {
    type: "action";
    operationName: "createShopifyCheckout";
    namespace: null;
    modelApiIdentifier: "shopifyCheckout";
    modelSelectionField: "shopifyCheckout";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyCheckoutSelection;
    selectionType: AvailableShopifyCheckoutSelection;
    optionsType: CreateShopifyCheckoutOptions;
    schemaType:  Query["shopifyCheckout"];

    variablesType: (

      (
        FullyQualifiedCreateShopifyCheckoutVariables          | CreateShopifyCheckoutVariables      )
    )
    // all variables are optional, so no variables can be passed at all
    | undefined
    ;
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
  }
)

  
      /**
  * Executes the bulkCreate action with the given inputs.
  */
  bulkCreate: {
    <Options extends CreateShopifyCheckoutOptions>(
        inputs: (FullyQualifiedCreateShopifyCheckoutVariables | CreateShopifyCheckoutVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyCheckoutOptions>
    ): Promise<CreateShopifyCheckoutResult<Options>[]>;
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
  } = Object.assign(
    async <Options extends CreateShopifyCheckoutOptions>(
        inputs: (FullyQualifiedCreateShopifyCheckoutVariables | CreateShopifyCheckoutVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyCheckoutOptions>
    ) => {
        const fullyQualifiedInputs = inputs.map(input =>
          disambiguateActionParams(
            this["create"],
            undefined,
            input
          )
        );
      
      return (await actionRunner<any>(
        this,
        "bulkCreateShopifyCheckouts",
        DefaultShopifyCheckoutSelection,
        "shopifyCheckout",
        "shopifyCheckouts",
        true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkCreate"].variables["inputs"]
            }
          }
,
        options,
        null,
        false
      )) as any[];
    },
    {
      type: "action",
      operationName: "bulkCreateShopifyCheckouts",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyCheckouts",
      isBulk: true,
      defaultSelection: DefaultShopifyCheckoutSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateShopifyCheckoutsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateShopifyCheckout,
  {
    type: "action",
    operationName: "updateShopifyCheckout",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyCheckoutSelection,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopifyCheckout": {
        required: false,
        type: "UpdateShopifyCheckoutInput",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: true,
  } as unknown as {
    type: "action";
    operationName: "updateShopifyCheckout";
    namespace: null;
    modelApiIdentifier: "shopifyCheckout";
    modelSelectionField: "shopifyCheckout";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyCheckoutSelection;
    selectionType: AvailableShopifyCheckoutSelection;
    optionsType: UpdateShopifyCheckoutOptions;
    schemaType:  Query["shopifyCheckout"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateShopifyCheckoutVariables          | UpdateShopifyCheckoutVariables      )
    )
    ;
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
  }
)

  
      /**
  * Executes the bulkUpdate action with the given inputs.
  */
  bulkUpdate: {
    <Options extends UpdateShopifyCheckoutOptions>(
        inputs: (FullyQualifiedUpdateShopifyCheckoutVariables | UpdateShopifyCheckoutVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyCheckoutOptions>
    ): Promise<UpdateShopifyCheckoutResult<Options>[]>;
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
    variablesType: (FullyQualifiedUpdateShopifyCheckoutVariables | UpdateShopifyCheckoutVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateShopifyCheckoutsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateShopifyCheckoutOptions>(
        inputs: (FullyQualifiedUpdateShopifyCheckoutVariables | UpdateShopifyCheckoutVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyCheckoutOptions>
    ) => {
        const fullyQualifiedInputs = inputs.map(input =>
          disambiguateActionParams(
            this["update"],
            undefined,
            input
          )
        );
      
      return (await actionRunner<any>(
        this,
        "bulkUpdateShopifyCheckouts",
        DefaultShopifyCheckoutSelection,
        "shopifyCheckout",
        "shopifyCheckouts",
        true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkUpdate"].variables["inputs"]
            }
          }
,
        options,
        null,
        false
      )) as any[];
    },
    {
      type: "action",
      operationName: "bulkUpdateShopifyCheckouts",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyCheckouts",
      isBulk: true,
      defaultSelection: DefaultShopifyCheckoutSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateShopifyCheckoutsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteShopifyCheckout,
  {
    type: "action",
    operationName: "deleteShopifyCheckout",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: null,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: false,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: false,
  } as unknown as {
    type: "action";
    operationName: "deleteShopifyCheckout";
    namespace: null;
    modelApiIdentifier: "shopifyCheckout";
    modelSelectionField: "shopifyCheckout";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyCheckoutOptions;
    schemaType:  null ;

    variablesType: (
        { id: string } &

        {}
    )
    ;
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
  }
)

  
      /**
  * Executes the bulkDelete action with the given inputs. Deletes the records on the server.
  */
  bulkDelete: {
    <Options extends DeleteShopifyCheckoutOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyCheckoutOptions>
    ): Promise<DeleteShopifyCheckoutResult<Options>[]>;
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
  } = Object.assign(
    async <Options extends DeleteShopifyCheckoutOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyCheckoutOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkDeleteShopifyCheckouts",
        null,
        "shopifyCheckout",
        "shopifyCheckouts",
        true,
          {
            ids: {
              value: ids,
              ...this["bulkDelete"].variables["ids"]
            }
          }
,
        options,
        null,
        false
      )) as any[];
    },
    {
      type: "action",
      operationName: "bulkDeleteShopifyCheckouts",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyCheckouts",
      isBulk: true,
      defaultSelection: null,
      variables: {
        ids: {
          required: true,
          type: "[GadgetID!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: false,
    } as any
  );

  
}
