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
      ShopifyDiscount,
      ShopifyDiscountSort,
      ShopifyDiscountFilter,
      AvailableShopifyDiscountSelection,
      CreateShopifyDiscountInput,
      UpdateShopifyDiscountInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyDiscountSelection = {
  "__typename": true,
  "appDiscountType": true,
  "appliesOnOneTimePurchase": true,
  "appliesOnSubscription": true,
  "appliesOncePerCustomer": true,
  "asyncUsageCount": true,
  "codeCount": true,
  "combinesWith": true,
  "createdAt": true,
  "destinationSelection": true,
  "discountClass": true,
  "discountId": true,
  "endsAt": true,
  "errorHistory": true,
  "hasTimelineComment": true,
  "id": true,
  "maximumShippingPrice": true,
  "minimumRequirement": true,
  "recurringCycleLimit": true,
  "shareableUrls": true,
  "shopifyCreatedAt": true,
  "shortSummary": true,
  "startsAt": true,
  "status": true,
  "summary": true,
  "title": true,
  "totalSales": true,
  "updatedAt": true,
  "usageLimit": true,
  "usesPerOrderLimit": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyDiscount". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyDiscountOrDefault<Options extends Selectable<AvailableShopifyDiscountSelection>> = DeepFilterNever<
  Select<
    ShopifyDiscount,
    DefaultSelection<
      AvailableShopifyDiscountSelection,
      Options,
      typeof DefaultShopifyDiscountSelection
    >
  >>;

/** Options that can be passed to the `ShopifyDiscountManager#findOne` method */
export interface FindOneShopifyDiscountOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDiscountSelection;
};

/** Options that can be passed to the `ShopifyDiscountManager#maybeFindOne` method */
export interface MaybeFindOneShopifyDiscountOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDiscountSelection;
};

/** Options that can be passed to the `ShopifyDiscountManager#findMany` method */
export interface FindManyShopifyDiscountsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDiscountSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDiscountSort | ShopifyDiscountSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDiscountFilter | ShopifyDiscountFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyDiscountManager#findFirst` method */
export interface FindFirstShopifyDiscountOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDiscountSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDiscountSort | ShopifyDiscountSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDiscountFilter | ShopifyDiscountFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyDiscountManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyDiscountOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDiscountSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDiscountSort | ShopifyDiscountSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDiscountFilter | ShopifyDiscountFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateShopifyDiscountOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDiscountSelection;
};


export interface UpdateShopifyDiscountOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDiscountSelection;
};


export interface DeleteShopifyDiscountOptions {
};


const apiIdentifier = "shopifyDiscount";
const pluralApiIdentifier = "shopifyDiscounts";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateShopifyDiscountVariables = {
          shopifyDiscount?: CreateShopifyDiscountInput,
      }

  /**
   * The inputs for executing create on shopifyDiscount.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateShopifyDiscountVariables = CreateShopifyDiscountInput;



/**
 * The return value from executing create on shopifyDiscount.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyDiscountResult<Options extends CreateShopifyDiscountOptions> =
  SelectedShopifyDiscountOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyDiscountOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createShopifyDiscount<Options extends CreateShopifyDiscountOptions>(
  
    variables: CreateShopifyDiscountVariables,

  options?: LimitToKnownKeys<Options, CreateShopifyDiscountOptions>
): Promise<CreateShopifyDiscountResult<Options>>;

// Fully qualified, nested api identifier overload
async function createShopifyDiscount<Options extends CreateShopifyDiscountOptions>(
  
      variables: FullyQualifiedCreateShopifyDiscountVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyDiscountOptions>
): Promise<CreateShopifyDiscountResult<Options>>;

// Function implementation
async function createShopifyDiscount<Options extends CreateShopifyDiscountOptions>(
  this: ShopifyDiscountManager,
  
      variables: CreateShopifyDiscountVariables | FullyQualifiedCreateShopifyDiscountVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyDiscountOptions>
): Promise<CreateShopifyDiscountResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedShopifyDiscountOrDefault<Options>>(
    this,
    "createShopifyDiscount",
    DefaultShopifyDiscountSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                    "shopifyDiscount": {
          value: newVariables.shopifyDiscount,
          required: false,
          type: "CreateShopifyDiscountInput",
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
  export type FullyQualifiedUpdateShopifyDiscountVariables = {
          shopifyDiscount?: UpdateShopifyDiscountInput,
      }

  /**
   * The inputs for executing update on shopifyDiscount.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateShopifyDiscountVariables = UpdateShopifyDiscountInput;



/**
 * The return value from executing update on shopifyDiscount.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyDiscountResult<Options extends UpdateShopifyDiscountOptions> =
  SelectedShopifyDiscountOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyDiscountOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateShopifyDiscount<Options extends UpdateShopifyDiscountOptions>(
  id: string,
    variables: UpdateShopifyDiscountVariables,

  options?: LimitToKnownKeys<Options, UpdateShopifyDiscountOptions>
): Promise<UpdateShopifyDiscountResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateShopifyDiscount<Options extends UpdateShopifyDiscountOptions>(
  id: string,
      variables: FullyQualifiedUpdateShopifyDiscountVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyDiscountOptions>
): Promise<UpdateShopifyDiscountResult<Options>>;

// Function implementation
async function updateShopifyDiscount<Options extends UpdateShopifyDiscountOptions>(
  this: ShopifyDiscountManager,
  id: string,
      variables: UpdateShopifyDiscountVariables | FullyQualifiedUpdateShopifyDiscountVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyDiscountOptions>
): Promise<UpdateShopifyDiscountResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedShopifyDiscountOrDefault<Options>>(
    this,
    "updateShopifyDiscount",
    DefaultShopifyDiscountSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "shopifyDiscount": {
          value: newVariables.shopifyDiscount,
          required: false,
          type: "UpdateShopifyDiscountInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on shopifyDiscount.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyDiscountResult<Options extends DeleteShopifyDiscountOptions> =
  void extends void ? void : GadgetRecord<SelectedShopifyDiscountOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteShopifyDiscount<Options extends DeleteShopifyDiscountOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyDiscountOptions>
): Promise<DeleteShopifyDiscountResult<Options>>;

// Function implementation
async function deleteShopifyDiscount<Options extends DeleteShopifyDiscountOptions>(
  this: ShopifyDiscountManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyDiscountOptions>
): Promise<DeleteShopifyDiscountResult<Options>> {

  return (await actionRunner<void>(
    this,
    "deleteShopifyDiscount",
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

  



/** All the actions available at the collection level and record level for "shopifyDiscount" */
export class ShopifyDiscountManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyDiscount by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyDiscountOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyDiscountOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDiscountOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyDiscount";
  modelApiIdentifier: "shopifyDiscount";
  defaultSelection: typeof DefaultShopifyDiscountSelection;
  selectionType: AvailableShopifyDiscountSelection;
  optionsType: FindOneShopifyDiscountOptions;
  schemaType: Query["shopifyDiscount"];
} = Object.assign(
  async <Options extends FindOneShopifyDiscountOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyDiscountOptions>) => {
    return await findOneRunner<SelectedShopifyDiscountOrDefault<Options>>(
      this,
      "shopifyDiscount",
      id,
      DefaultShopifyDiscountSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyDiscount",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDiscountSelection,
  } as any
)

  
    /**
 * Finds one shopifyDiscount by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyDiscountOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyDiscountOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDiscountOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyDiscount";
  modelApiIdentifier: "shopifyDiscount";
  defaultSelection: typeof DefaultShopifyDiscountSelection;
  selectionType: AvailableShopifyDiscountSelection;
  optionsType: MaybeFindOneShopifyDiscountOptions;
  schemaType: Query["shopifyDiscount"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyDiscountOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyDiscountOptions>) => {
    const record = await findOneRunner<SelectedShopifyDiscountOrDefault<Options>>(
      this,
      "shopifyDiscount",
      id,
      DefaultShopifyDiscountSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyDiscount",
    modelApiIdentifier: "shopifyDiscount",
    defaultSelection: DefaultShopifyDiscountSelection,
  } as any
)

  
    /**
 * Finds many shopifyDiscount. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyDiscountsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyDiscountsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyDiscountOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyDiscounts";
  modelApiIdentifier: "shopifyDiscount";
  defaultSelection: typeof DefaultShopifyDiscountSelection;
  selectionType: AvailableShopifyDiscountSelection;
  optionsType: FindManyShopifyDiscountsOptions;
  schemaType: Query["shopifyDiscount"];
} = Object.assign(
  async <Options extends FindManyShopifyDiscountsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyDiscountsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyDiscountOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyDiscountOrDefault<Options>>(
      this,
      "shopifyDiscounts",
      DefaultShopifyDiscountSelection,
      "shopifyDiscount",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyDiscounts",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDiscountSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyDiscount. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyDiscountOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyDiscountOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDiscountOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyDiscounts";
  modelApiIdentifier: "shopifyDiscount";
  defaultSelection: typeof DefaultShopifyDiscountSelection;
  selectionType: AvailableShopifyDiscountSelection;
  optionsType: FindFirstShopifyDiscountOptions;
  schemaType: Query["shopifyDiscount"];
} = Object.assign(
  async <Options extends FindFirstShopifyDiscountOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyDiscountOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDiscountOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyDiscountOrDefault<Options>>(
      this,
      "shopifyDiscounts",
      DefaultShopifyDiscountSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyDiscounts",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDiscountSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyDiscount. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyDiscountOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyDiscountOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDiscountOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyDiscounts";
  modelApiIdentifier: "shopifyDiscount";
  defaultSelection: typeof DefaultShopifyDiscountSelection;
  selectionType: AvailableShopifyDiscountSelection;
  optionsType: MaybeFindFirstShopifyDiscountOptions;
  schemaType: Query["shopifyDiscount"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyDiscountOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyDiscountOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDiscountOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyDiscountOrDefault<Options>>(
      this,
      "shopifyDiscounts",
      DefaultShopifyDiscountSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyDiscounts",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDiscountSelection,
  } as any
);

  
    create = Object.assign(createShopifyDiscount,
  {
    type: "action",
    operationName: "createShopifyDiscount",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyDiscountSelection,
    variables: {
      "shopifyDiscount": {
        required: false,
        type: "CreateShopifyDiscountInput",
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
    operationName: "createShopifyDiscount";
    namespace: null;
    modelApiIdentifier: "shopifyDiscount";
    modelSelectionField: "shopifyDiscount";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyDiscountSelection;
    selectionType: AvailableShopifyDiscountSelection;
    optionsType: CreateShopifyDiscountOptions;
    schemaType:  Query["shopifyDiscount"];

    variablesType: (

      (
        FullyQualifiedCreateShopifyDiscountVariables          | CreateShopifyDiscountVariables      )
    )
    // all variables are optional, so no variables can be passed at all
    | undefined
    ;
    variables: {
                    "shopifyDiscount": {
          required: false;
          type: "CreateShopifyDiscountInput";
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
    <Options extends CreateShopifyDiscountOptions>(
        inputs: (FullyQualifiedCreateShopifyDiscountVariables | CreateShopifyDiscountVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyDiscountOptions>
    ): Promise<CreateShopifyDiscountResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateShopifyDiscounts";
    namespace: null;
    modelApiIdentifier: "shopifyDiscount";
    modelSelectionField: "shopifyDiscounts";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyDiscountSelection;
    selectionType: AvailableShopifyDiscountSelection;
    optionsType: CreateShopifyDiscountOptions;
    schemaType: Query["shopifyDiscount"];
    variablesType: (FullyQualifiedCreateShopifyDiscountVariables | CreateShopifyDiscountVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateShopifyDiscountsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateShopifyDiscountOptions>(
        inputs: (FullyQualifiedCreateShopifyDiscountVariables | CreateShopifyDiscountVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyDiscountOptions>
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
        "bulkCreateShopifyDiscounts",
        DefaultShopifyDiscountSelection,
        "shopifyDiscount",
        "shopifyDiscounts",
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
      operationName: "bulkCreateShopifyDiscounts",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyDiscounts",
      isBulk: true,
      defaultSelection: DefaultShopifyDiscountSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateShopifyDiscountsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateShopifyDiscount,
  {
    type: "action",
    operationName: "updateShopifyDiscount",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyDiscountSelection,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopifyDiscount": {
        required: false,
        type: "UpdateShopifyDiscountInput",
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
    operationName: "updateShopifyDiscount";
    namespace: null;
    modelApiIdentifier: "shopifyDiscount";
    modelSelectionField: "shopifyDiscount";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyDiscountSelection;
    selectionType: AvailableShopifyDiscountSelection;
    optionsType: UpdateShopifyDiscountOptions;
    schemaType:  Query["shopifyDiscount"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateShopifyDiscountVariables          | UpdateShopifyDiscountVariables      )
    )
    ;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "shopifyDiscount": {
          required: false;
          type: "UpdateShopifyDiscountInput";
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
    <Options extends UpdateShopifyDiscountOptions>(
        inputs: (FullyQualifiedUpdateShopifyDiscountVariables | UpdateShopifyDiscountVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyDiscountOptions>
    ): Promise<UpdateShopifyDiscountResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateShopifyDiscounts";
    namespace: null;
    modelApiIdentifier: "shopifyDiscount";
    modelSelectionField: "shopifyDiscounts";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyDiscountSelection;
    selectionType: AvailableShopifyDiscountSelection;
    optionsType: UpdateShopifyDiscountOptions;
    schemaType: Query["shopifyDiscount"];
    variablesType: (FullyQualifiedUpdateShopifyDiscountVariables | UpdateShopifyDiscountVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateShopifyDiscountsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateShopifyDiscountOptions>(
        inputs: (FullyQualifiedUpdateShopifyDiscountVariables | UpdateShopifyDiscountVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyDiscountOptions>
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
        "bulkUpdateShopifyDiscounts",
        DefaultShopifyDiscountSelection,
        "shopifyDiscount",
        "shopifyDiscounts",
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
      operationName: "bulkUpdateShopifyDiscounts",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyDiscounts",
      isBulk: true,
      defaultSelection: DefaultShopifyDiscountSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateShopifyDiscountsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteShopifyDiscount,
  {
    type: "action",
    operationName: "deleteShopifyDiscount",
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
    operationName: "deleteShopifyDiscount";
    namespace: null;
    modelApiIdentifier: "shopifyDiscount";
    modelSelectionField: "shopifyDiscount";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyDiscountOptions;
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
    <Options extends DeleteShopifyDiscountOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyDiscountOptions>
    ): Promise<DeleteShopifyDiscountResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteShopifyDiscounts";
    namespace: null;
    modelApiIdentifier: "shopifyDiscount";
    modelSelectionField: "shopifyDiscounts";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyDiscountOptions;
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
    async <Options extends DeleteShopifyDiscountOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyDiscountOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkDeleteShopifyDiscounts",
        null,
        "shopifyDiscount",
        "shopifyDiscounts",
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
      operationName: "bulkDeleteShopifyDiscounts",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyDiscounts",
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
