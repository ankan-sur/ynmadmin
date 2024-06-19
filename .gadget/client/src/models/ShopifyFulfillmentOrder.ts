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
      ShopifyFulfillmentOrder,
      ShopifyFulfillmentOrderSort,
      ShopifyFulfillmentOrderFilter,
      AvailableShopifyFulfillmentOrderSelection,
      CreateShopifyFulfillmentOrderInput,
      UpdateShopifyFulfillmentOrderInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyFulfillmentOrderSelection = {
  "__typename": true,
  "assignedLocation": true,
  "createdAt": true,
  "deliveryMethod": true,
  "destination": true,
  "fulfillAt": true,
  "fulfillBy": true,
  "fulfillmentHolds": true,
  "id": true,
  "internationalDuties": true,
  "merchantRequests": true,
  "requestStatus": true,
  "status": true,
  "supportedActions": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyFulfillmentOrder". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyFulfillmentOrderOrDefault<Options extends Selectable<AvailableShopifyFulfillmentOrderSelection>> = DeepFilterNever<
  Select<
    ShopifyFulfillmentOrder,
    DefaultSelection<
      AvailableShopifyFulfillmentOrderSelection,
      Options,
      typeof DefaultShopifyFulfillmentOrderSelection
    >
  >>;

/** Options that can be passed to the `ShopifyFulfillmentOrderManager#findOne` method */
export interface FindOneShopifyFulfillmentOrderOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentOrderSelection;
};

/** Options that can be passed to the `ShopifyFulfillmentOrderManager#maybeFindOne` method */
export interface MaybeFindOneShopifyFulfillmentOrderOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentOrderSelection;
};

/** Options that can be passed to the `ShopifyFulfillmentOrderManager#findMany` method */
export interface FindManyShopifyFulfillmentOrdersOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentOrderSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentOrderSort | ShopifyFulfillmentOrderSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentOrderFilter | ShopifyFulfillmentOrderFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyFulfillmentOrderManager#findFirst` method */
export interface FindFirstShopifyFulfillmentOrderOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentOrderSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentOrderSort | ShopifyFulfillmentOrderSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentOrderFilter | ShopifyFulfillmentOrderFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyFulfillmentOrderManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyFulfillmentOrderOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentOrderSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentOrderSort | ShopifyFulfillmentOrderSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentOrderFilter | ShopifyFulfillmentOrderFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateShopifyFulfillmentOrderOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentOrderSelection;
};


export interface UpdateShopifyFulfillmentOrderOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentOrderSelection;
};


export interface DeleteShopifyFulfillmentOrderOptions {
};


const apiIdentifier = "shopifyFulfillmentOrder";
const pluralApiIdentifier = "shopifyFulfillmentOrders";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateShopifyFulfillmentOrderVariables = {
          shopifyFulfillmentOrder?: CreateShopifyFulfillmentOrderInput,
      }

  /**
   * The inputs for executing create on shopifyFulfillmentOrder.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateShopifyFulfillmentOrderVariables = CreateShopifyFulfillmentOrderInput;



/**
 * The return value from executing create on shopifyFulfillmentOrder.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyFulfillmentOrderResult<Options extends CreateShopifyFulfillmentOrderOptions> =
  SelectedShopifyFulfillmentOrderOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyFulfillmentOrderOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createShopifyFulfillmentOrder<Options extends CreateShopifyFulfillmentOrderOptions>(
  
    variables: CreateShopifyFulfillmentOrderVariables,

  options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOrderOptions>
): Promise<CreateShopifyFulfillmentOrderResult<Options>>;

// Fully qualified, nested api identifier overload
async function createShopifyFulfillmentOrder<Options extends CreateShopifyFulfillmentOrderOptions>(
  
      variables: FullyQualifiedCreateShopifyFulfillmentOrderVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOrderOptions>
): Promise<CreateShopifyFulfillmentOrderResult<Options>>;

// Function implementation
async function createShopifyFulfillmentOrder<Options extends CreateShopifyFulfillmentOrderOptions>(
  this: ShopifyFulfillmentOrderManager,
  
      variables: CreateShopifyFulfillmentOrderVariables | FullyQualifiedCreateShopifyFulfillmentOrderVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOrderOptions>
): Promise<CreateShopifyFulfillmentOrderResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedShopifyFulfillmentOrderOrDefault<Options>>(
    this,
    "createShopifyFulfillmentOrder",
    DefaultShopifyFulfillmentOrderSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                    "shopifyFulfillmentOrder": {
          value: newVariables.shopifyFulfillmentOrder,
          required: false,
          type: "CreateShopifyFulfillmentOrderInput",
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
  export type FullyQualifiedUpdateShopifyFulfillmentOrderVariables = {
          shopifyFulfillmentOrder?: UpdateShopifyFulfillmentOrderInput,
      }

  /**
   * The inputs for executing update on shopifyFulfillmentOrder.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateShopifyFulfillmentOrderVariables = UpdateShopifyFulfillmentOrderInput;



/**
 * The return value from executing update on shopifyFulfillmentOrder.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyFulfillmentOrderResult<Options extends UpdateShopifyFulfillmentOrderOptions> =
  SelectedShopifyFulfillmentOrderOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyFulfillmentOrderOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateShopifyFulfillmentOrder<Options extends UpdateShopifyFulfillmentOrderOptions>(
  id: string,
    variables: UpdateShopifyFulfillmentOrderVariables,

  options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOrderOptions>
): Promise<UpdateShopifyFulfillmentOrderResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateShopifyFulfillmentOrder<Options extends UpdateShopifyFulfillmentOrderOptions>(
  id: string,
      variables: FullyQualifiedUpdateShopifyFulfillmentOrderVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOrderOptions>
): Promise<UpdateShopifyFulfillmentOrderResult<Options>>;

// Function implementation
async function updateShopifyFulfillmentOrder<Options extends UpdateShopifyFulfillmentOrderOptions>(
  this: ShopifyFulfillmentOrderManager,
  id: string,
      variables: UpdateShopifyFulfillmentOrderVariables | FullyQualifiedUpdateShopifyFulfillmentOrderVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOrderOptions>
): Promise<UpdateShopifyFulfillmentOrderResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedShopifyFulfillmentOrderOrDefault<Options>>(
    this,
    "updateShopifyFulfillmentOrder",
    DefaultShopifyFulfillmentOrderSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "shopifyFulfillmentOrder": {
          value: newVariables.shopifyFulfillmentOrder,
          required: false,
          type: "UpdateShopifyFulfillmentOrderInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on shopifyFulfillmentOrder.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyFulfillmentOrderResult<Options extends DeleteShopifyFulfillmentOrderOptions> =
  void extends void ? void : GadgetRecord<SelectedShopifyFulfillmentOrderOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteShopifyFulfillmentOrder<Options extends DeleteShopifyFulfillmentOrderOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentOrderOptions>
): Promise<DeleteShopifyFulfillmentOrderResult<Options>>;

// Function implementation
async function deleteShopifyFulfillmentOrder<Options extends DeleteShopifyFulfillmentOrderOptions>(
  this: ShopifyFulfillmentOrderManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentOrderOptions>
): Promise<DeleteShopifyFulfillmentOrderResult<Options>> {

  return (await actionRunner<void>(
    this,
    "deleteShopifyFulfillmentOrder",
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

  



/** All the actions available at the collection level and record level for "shopifyFulfillmentOrder" */
export class ShopifyFulfillmentOrderManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyFulfillmentOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyFulfillmentOrderOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrderOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyFulfillmentOrder";
  modelApiIdentifier: "shopifyFulfillmentOrder";
  defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
  selectionType: AvailableShopifyFulfillmentOrderSelection;
  optionsType: FindOneShopifyFulfillmentOrderOptions;
  schemaType: Query["shopifyFulfillmentOrder"];
} = Object.assign(
  async <Options extends FindOneShopifyFulfillmentOrderOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentOrderOptions>) => {
    return await findOneRunner<SelectedShopifyFulfillmentOrderOrDefault<Options>>(
      this,
      "shopifyFulfillmentOrder",
      id,
      DefaultShopifyFulfillmentOrderSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyFulfillmentOrder",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentOrderSelection,
  } as any
)

  
    /**
 * Finds one shopifyFulfillmentOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyFulfillmentOrderOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrderOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyFulfillmentOrder";
  modelApiIdentifier: "shopifyFulfillmentOrder";
  defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
  selectionType: AvailableShopifyFulfillmentOrderSelection;
  optionsType: MaybeFindOneShopifyFulfillmentOrderOptions;
  schemaType: Query["shopifyFulfillmentOrder"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyFulfillmentOrderOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentOrderOptions>) => {
    const record = await findOneRunner<SelectedShopifyFulfillmentOrderOrDefault<Options>>(
      this,
      "shopifyFulfillmentOrder",
      id,
      DefaultShopifyFulfillmentOrderSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyFulfillmentOrder",
    modelApiIdentifier: "shopifyFulfillmentOrder",
    defaultSelection: DefaultShopifyFulfillmentOrderSelection,
  } as any
)

  
    /**
 * Finds many shopifyFulfillmentOrder. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyFulfillmentOrdersOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentOrdersOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFulfillmentOrderOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyFulfillmentOrders";
  modelApiIdentifier: "shopifyFulfillmentOrder";
  defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
  selectionType: AvailableShopifyFulfillmentOrderSelection;
  optionsType: FindManyShopifyFulfillmentOrdersOptions;
  schemaType: Query["shopifyFulfillmentOrder"];
} = Object.assign(
  async <Options extends FindManyShopifyFulfillmentOrdersOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentOrdersOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFulfillmentOrderOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyFulfillmentOrderOrDefault<Options>>(
      this,
      "shopifyFulfillmentOrders",
      DefaultShopifyFulfillmentOrderSelection,
      "shopifyFulfillmentOrder",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyFulfillmentOrders",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentOrderSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFulfillmentOrder. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyFulfillmentOrderOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrderOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyFulfillmentOrders";
  modelApiIdentifier: "shopifyFulfillmentOrder";
  defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
  selectionType: AvailableShopifyFulfillmentOrderSelection;
  optionsType: FindFirstShopifyFulfillmentOrderOptions;
  schemaType: Query["shopifyFulfillmentOrder"];
} = Object.assign(
  async <Options extends FindFirstShopifyFulfillmentOrderOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrderOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFulfillmentOrderOrDefault<Options>>(
      this,
      "shopifyFulfillmentOrders",
      DefaultShopifyFulfillmentOrderSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyFulfillmentOrders",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentOrderSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFulfillmentOrder. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyFulfillmentOrderOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrderOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyFulfillmentOrders";
  modelApiIdentifier: "shopifyFulfillmentOrder";
  defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
  selectionType: AvailableShopifyFulfillmentOrderSelection;
  optionsType: MaybeFindFirstShopifyFulfillmentOrderOptions;
  schemaType: Query["shopifyFulfillmentOrder"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyFulfillmentOrderOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentOrderOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrderOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFulfillmentOrderOrDefault<Options>>(
      this,
      "shopifyFulfillmentOrders",
      DefaultShopifyFulfillmentOrderSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyFulfillmentOrders",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentOrderSelection,
  } as any
);

  
    create = Object.assign(createShopifyFulfillmentOrder,
  {
    type: "action",
    operationName: "createShopifyFulfillmentOrder",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyFulfillmentOrderSelection,
    variables: {
      "shopifyFulfillmentOrder": {
        required: false,
        type: "CreateShopifyFulfillmentOrderInput",
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
    operationName: "createShopifyFulfillmentOrder";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillmentOrder";
    modelSelectionField: "shopifyFulfillmentOrder";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
    selectionType: AvailableShopifyFulfillmentOrderSelection;
    optionsType: CreateShopifyFulfillmentOrderOptions;
    schemaType:  Query["shopifyFulfillmentOrder"];

    variablesType: (

      (
        FullyQualifiedCreateShopifyFulfillmentOrderVariables          | CreateShopifyFulfillmentOrderVariables      )
    )
    // all variables are optional, so no variables can be passed at all
    | undefined
    ;
    variables: {
                    "shopifyFulfillmentOrder": {
          required: false;
          type: "CreateShopifyFulfillmentOrderInput";
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
    <Options extends CreateShopifyFulfillmentOrderOptions>(
        inputs: (FullyQualifiedCreateShopifyFulfillmentOrderVariables | CreateShopifyFulfillmentOrderVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOrderOptions>
    ): Promise<CreateShopifyFulfillmentOrderResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateShopifyFulfillmentOrders";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillmentOrder";
    modelSelectionField: "shopifyFulfillmentOrders";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
    selectionType: AvailableShopifyFulfillmentOrderSelection;
    optionsType: CreateShopifyFulfillmentOrderOptions;
    schemaType: Query["shopifyFulfillmentOrder"];
    variablesType: (FullyQualifiedCreateShopifyFulfillmentOrderVariables | CreateShopifyFulfillmentOrderVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateShopifyFulfillmentOrdersInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateShopifyFulfillmentOrderOptions>(
        inputs: (FullyQualifiedCreateShopifyFulfillmentOrderVariables | CreateShopifyFulfillmentOrderVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOrderOptions>
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
        "bulkCreateShopifyFulfillmentOrders",
        DefaultShopifyFulfillmentOrderSelection,
        "shopifyFulfillmentOrder",
        "shopifyFulfillmentOrders",
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
      operationName: "bulkCreateShopifyFulfillmentOrders",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyFulfillmentOrders",
      isBulk: true,
      defaultSelection: DefaultShopifyFulfillmentOrderSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateShopifyFulfillmentOrdersInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateShopifyFulfillmentOrder,
  {
    type: "action",
    operationName: "updateShopifyFulfillmentOrder",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyFulfillmentOrderSelection,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopifyFulfillmentOrder": {
        required: false,
        type: "UpdateShopifyFulfillmentOrderInput",
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
    operationName: "updateShopifyFulfillmentOrder";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillmentOrder";
    modelSelectionField: "shopifyFulfillmentOrder";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
    selectionType: AvailableShopifyFulfillmentOrderSelection;
    optionsType: UpdateShopifyFulfillmentOrderOptions;
    schemaType:  Query["shopifyFulfillmentOrder"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateShopifyFulfillmentOrderVariables          | UpdateShopifyFulfillmentOrderVariables      )
    )
    ;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "shopifyFulfillmentOrder": {
          required: false;
          type: "UpdateShopifyFulfillmentOrderInput";
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
    <Options extends UpdateShopifyFulfillmentOrderOptions>(
        inputs: (FullyQualifiedUpdateShopifyFulfillmentOrderVariables | UpdateShopifyFulfillmentOrderVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOrderOptions>
    ): Promise<UpdateShopifyFulfillmentOrderResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateShopifyFulfillmentOrders";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillmentOrder";
    modelSelectionField: "shopifyFulfillmentOrders";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyFulfillmentOrderSelection;
    selectionType: AvailableShopifyFulfillmentOrderSelection;
    optionsType: UpdateShopifyFulfillmentOrderOptions;
    schemaType: Query["shopifyFulfillmentOrder"];
    variablesType: (FullyQualifiedUpdateShopifyFulfillmentOrderVariables | UpdateShopifyFulfillmentOrderVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateShopifyFulfillmentOrdersInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateShopifyFulfillmentOrderOptions>(
        inputs: (FullyQualifiedUpdateShopifyFulfillmentOrderVariables | UpdateShopifyFulfillmentOrderVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOrderOptions>
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
        "bulkUpdateShopifyFulfillmentOrders",
        DefaultShopifyFulfillmentOrderSelection,
        "shopifyFulfillmentOrder",
        "shopifyFulfillmentOrders",
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
      operationName: "bulkUpdateShopifyFulfillmentOrders",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyFulfillmentOrders",
      isBulk: true,
      defaultSelection: DefaultShopifyFulfillmentOrderSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateShopifyFulfillmentOrdersInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteShopifyFulfillmentOrder,
  {
    type: "action",
    operationName: "deleteShopifyFulfillmentOrder",
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
    operationName: "deleteShopifyFulfillmentOrder";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillmentOrder";
    modelSelectionField: "shopifyFulfillmentOrder";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyFulfillmentOrderOptions;
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
    <Options extends DeleteShopifyFulfillmentOrderOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentOrderOptions>
    ): Promise<DeleteShopifyFulfillmentOrderResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteShopifyFulfillmentOrders";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillmentOrder";
    modelSelectionField: "shopifyFulfillmentOrders";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyFulfillmentOrderOptions;
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
    async <Options extends DeleteShopifyFulfillmentOrderOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentOrderOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkDeleteShopifyFulfillmentOrders",
        null,
        "shopifyFulfillmentOrder",
        "shopifyFulfillmentOrders",
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
      operationName: "bulkDeleteShopifyFulfillmentOrders",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyFulfillmentOrders",
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
