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
      ShopifyFulfillment,
      ShopifyFulfillmentSort,
      ShopifyFulfillmentFilter,
      AvailableShopifyFulfillmentSelection,
      CreateShopifyFulfillmentInput,
      UpdateShopifyFulfillmentInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyFulfillmentSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "name": true,
  "notifyCustomer": true,
  "originAddress": true,
  "receipt": true,
  "service": true,
  "shipmentStatus": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "status": true,
  "trackingCompany": true,
  "trackingNumbers": true,
  "trackingUrls": true,
  "updatedAt": true,
  "variantInventoryManagement": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyFulfillment". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyFulfillmentOrDefault<Options extends Selectable<AvailableShopifyFulfillmentSelection>> = DeepFilterNever<
  Select<
    ShopifyFulfillment,
    DefaultSelection<
      AvailableShopifyFulfillmentSelection,
      Options,
      typeof DefaultShopifyFulfillmentSelection
    >
  >>;

/** Options that can be passed to the `ShopifyFulfillmentManager#findOne` method */
export interface FindOneShopifyFulfillmentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentSelection;
};

/** Options that can be passed to the `ShopifyFulfillmentManager#maybeFindOne` method */
export interface MaybeFindOneShopifyFulfillmentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentSelection;
};

/** Options that can be passed to the `ShopifyFulfillmentManager#findMany` method */
export interface FindManyShopifyFulfillmentsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentSort | ShopifyFulfillmentSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentFilter | ShopifyFulfillmentFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyFulfillmentManager#findFirst` method */
export interface FindFirstShopifyFulfillmentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentSort | ShopifyFulfillmentSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentFilter | ShopifyFulfillmentFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyFulfillmentManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyFulfillmentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentSort | ShopifyFulfillmentSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentFilter | ShopifyFulfillmentFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateShopifyFulfillmentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentSelection;
};


export interface UpdateShopifyFulfillmentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentSelection;
};


export interface DeleteShopifyFulfillmentOptions {
};


const apiIdentifier = "shopifyFulfillment";
const pluralApiIdentifier = "shopifyFulfillments";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateShopifyFulfillmentVariables = {
          shopifyFulfillment?: CreateShopifyFulfillmentInput,
      }

  /**
   * The inputs for executing create on shopifyFulfillment.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateShopifyFulfillmentVariables = CreateShopifyFulfillmentInput;



/**
 * The return value from executing create on shopifyFulfillment.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyFulfillmentResult<Options extends CreateShopifyFulfillmentOptions> =
  SelectedShopifyFulfillmentOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyFulfillmentOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createShopifyFulfillment<Options extends CreateShopifyFulfillmentOptions>(
  
    variables: CreateShopifyFulfillmentVariables,

  options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOptions>
): Promise<CreateShopifyFulfillmentResult<Options>>;

// Fully qualified, nested api identifier overload
async function createShopifyFulfillment<Options extends CreateShopifyFulfillmentOptions>(
  
      variables: FullyQualifiedCreateShopifyFulfillmentVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOptions>
): Promise<CreateShopifyFulfillmentResult<Options>>;

// Function implementation
async function createShopifyFulfillment<Options extends CreateShopifyFulfillmentOptions>(
  this: ShopifyFulfillmentManager,
  
      variables: CreateShopifyFulfillmentVariables | FullyQualifiedCreateShopifyFulfillmentVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOptions>
): Promise<CreateShopifyFulfillmentResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedShopifyFulfillmentOrDefault<Options>>(
    this,
    "createShopifyFulfillment",
    DefaultShopifyFulfillmentSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                    "shopifyFulfillment": {
          value: newVariables.shopifyFulfillment,
          required: false,
          type: "CreateShopifyFulfillmentInput",
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
  export type FullyQualifiedUpdateShopifyFulfillmentVariables = {
          shopifyFulfillment?: UpdateShopifyFulfillmentInput,
      }

  /**
   * The inputs for executing update on shopifyFulfillment.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateShopifyFulfillmentVariables = UpdateShopifyFulfillmentInput;



/**
 * The return value from executing update on shopifyFulfillment.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyFulfillmentResult<Options extends UpdateShopifyFulfillmentOptions> =
  SelectedShopifyFulfillmentOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyFulfillmentOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateShopifyFulfillment<Options extends UpdateShopifyFulfillmentOptions>(
  id: string,
    variables: UpdateShopifyFulfillmentVariables,

  options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOptions>
): Promise<UpdateShopifyFulfillmentResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateShopifyFulfillment<Options extends UpdateShopifyFulfillmentOptions>(
  id: string,
      variables: FullyQualifiedUpdateShopifyFulfillmentVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOptions>
): Promise<UpdateShopifyFulfillmentResult<Options>>;

// Function implementation
async function updateShopifyFulfillment<Options extends UpdateShopifyFulfillmentOptions>(
  this: ShopifyFulfillmentManager,
  id: string,
      variables: UpdateShopifyFulfillmentVariables | FullyQualifiedUpdateShopifyFulfillmentVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOptions>
): Promise<UpdateShopifyFulfillmentResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedShopifyFulfillmentOrDefault<Options>>(
    this,
    "updateShopifyFulfillment",
    DefaultShopifyFulfillmentSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "shopifyFulfillment": {
          value: newVariables.shopifyFulfillment,
          required: false,
          type: "UpdateShopifyFulfillmentInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on shopifyFulfillment.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyFulfillmentResult<Options extends DeleteShopifyFulfillmentOptions> =
  void extends void ? void : GadgetRecord<SelectedShopifyFulfillmentOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteShopifyFulfillment<Options extends DeleteShopifyFulfillmentOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentOptions>
): Promise<DeleteShopifyFulfillmentResult<Options>>;

// Function implementation
async function deleteShopifyFulfillment<Options extends DeleteShopifyFulfillmentOptions>(
  this: ShopifyFulfillmentManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentOptions>
): Promise<DeleteShopifyFulfillmentResult<Options>> {

  return (await actionRunner<void>(
    this,
    "deleteShopifyFulfillment",
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

  



/** All the actions available at the collection level and record level for "shopifyFulfillment" */
export class ShopifyFulfillmentManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyFulfillment by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyFulfillmentOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyFulfillment";
  modelApiIdentifier: "shopifyFulfillment";
  defaultSelection: typeof DefaultShopifyFulfillmentSelection;
  selectionType: AvailableShopifyFulfillmentSelection;
  optionsType: FindOneShopifyFulfillmentOptions;
  schemaType: Query["shopifyFulfillment"];
} = Object.assign(
  async <Options extends FindOneShopifyFulfillmentOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentOptions>) => {
    return await findOneRunner<SelectedShopifyFulfillmentOrDefault<Options>>(
      this,
      "shopifyFulfillment",
      id,
      DefaultShopifyFulfillmentSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyFulfillment",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentSelection,
  } as any
)

  
    /**
 * Finds one shopifyFulfillment by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyFulfillmentOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyFulfillment";
  modelApiIdentifier: "shopifyFulfillment";
  defaultSelection: typeof DefaultShopifyFulfillmentSelection;
  selectionType: AvailableShopifyFulfillmentSelection;
  optionsType: MaybeFindOneShopifyFulfillmentOptions;
  schemaType: Query["shopifyFulfillment"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyFulfillmentOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentOptions>) => {
    const record = await findOneRunner<SelectedShopifyFulfillmentOrDefault<Options>>(
      this,
      "shopifyFulfillment",
      id,
      DefaultShopifyFulfillmentSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyFulfillment",
    modelApiIdentifier: "shopifyFulfillment",
    defaultSelection: DefaultShopifyFulfillmentSelection,
  } as any
)

  
    /**
 * Finds many shopifyFulfillment. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyFulfillmentsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFulfillmentOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyFulfillments";
  modelApiIdentifier: "shopifyFulfillment";
  defaultSelection: typeof DefaultShopifyFulfillmentSelection;
  selectionType: AvailableShopifyFulfillmentSelection;
  optionsType: FindManyShopifyFulfillmentsOptions;
  schemaType: Query["shopifyFulfillment"];
} = Object.assign(
  async <Options extends FindManyShopifyFulfillmentsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFulfillmentOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyFulfillmentOrDefault<Options>>(
      this,
      "shopifyFulfillments",
      DefaultShopifyFulfillmentSelection,
      "shopifyFulfillment",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyFulfillments",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFulfillment. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyFulfillmentOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyFulfillments";
  modelApiIdentifier: "shopifyFulfillment";
  defaultSelection: typeof DefaultShopifyFulfillmentSelection;
  selectionType: AvailableShopifyFulfillmentSelection;
  optionsType: FindFirstShopifyFulfillmentOptions;
  schemaType: Query["shopifyFulfillment"];
} = Object.assign(
  async <Options extends FindFirstShopifyFulfillmentOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFulfillmentOrDefault<Options>>(
      this,
      "shopifyFulfillments",
      DefaultShopifyFulfillmentSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyFulfillments",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFulfillment. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyFulfillmentOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyFulfillments";
  modelApiIdentifier: "shopifyFulfillment";
  defaultSelection: typeof DefaultShopifyFulfillmentSelection;
  selectionType: AvailableShopifyFulfillmentSelection;
  optionsType: MaybeFindFirstShopifyFulfillmentOptions;
  schemaType: Query["shopifyFulfillment"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyFulfillmentOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFulfillmentOrDefault<Options>>(
      this,
      "shopifyFulfillments",
      DefaultShopifyFulfillmentSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyFulfillments",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentSelection,
  } as any
);

  
    create = Object.assign(createShopifyFulfillment,
  {
    type: "action",
    operationName: "createShopifyFulfillment",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyFulfillmentSelection,
    variables: {
      "shopifyFulfillment": {
        required: false,
        type: "CreateShopifyFulfillmentInput",
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
    operationName: "createShopifyFulfillment";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillment";
    modelSelectionField: "shopifyFulfillment";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyFulfillmentSelection;
    selectionType: AvailableShopifyFulfillmentSelection;
    optionsType: CreateShopifyFulfillmentOptions;
    schemaType:  Query["shopifyFulfillment"];

    variablesType: (

      (
        FullyQualifiedCreateShopifyFulfillmentVariables          | CreateShopifyFulfillmentVariables      )
    )
    // all variables are optional, so no variables can be passed at all
    | undefined
    ;
    variables: {
                    "shopifyFulfillment": {
          required: false;
          type: "CreateShopifyFulfillmentInput";
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
    <Options extends CreateShopifyFulfillmentOptions>(
        inputs: (FullyQualifiedCreateShopifyFulfillmentVariables | CreateShopifyFulfillmentVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOptions>
    ): Promise<CreateShopifyFulfillmentResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateShopifyFulfillments";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillment";
    modelSelectionField: "shopifyFulfillments";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyFulfillmentSelection;
    selectionType: AvailableShopifyFulfillmentSelection;
    optionsType: CreateShopifyFulfillmentOptions;
    schemaType: Query["shopifyFulfillment"];
    variablesType: (FullyQualifiedCreateShopifyFulfillmentVariables | CreateShopifyFulfillmentVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateShopifyFulfillmentsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateShopifyFulfillmentOptions>(
        inputs: (FullyQualifiedCreateShopifyFulfillmentVariables | CreateShopifyFulfillmentVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOptions>
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
        "bulkCreateShopifyFulfillments",
        DefaultShopifyFulfillmentSelection,
        "shopifyFulfillment",
        "shopifyFulfillments",
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
      operationName: "bulkCreateShopifyFulfillments",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyFulfillments",
      isBulk: true,
      defaultSelection: DefaultShopifyFulfillmentSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateShopifyFulfillmentsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateShopifyFulfillment,
  {
    type: "action",
    operationName: "updateShopifyFulfillment",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyFulfillmentSelection,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopifyFulfillment": {
        required: false,
        type: "UpdateShopifyFulfillmentInput",
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
    operationName: "updateShopifyFulfillment";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillment";
    modelSelectionField: "shopifyFulfillment";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyFulfillmentSelection;
    selectionType: AvailableShopifyFulfillmentSelection;
    optionsType: UpdateShopifyFulfillmentOptions;
    schemaType:  Query["shopifyFulfillment"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateShopifyFulfillmentVariables          | UpdateShopifyFulfillmentVariables      )
    )
    ;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "shopifyFulfillment": {
          required: false;
          type: "UpdateShopifyFulfillmentInput";
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
    <Options extends UpdateShopifyFulfillmentOptions>(
        inputs: (FullyQualifiedUpdateShopifyFulfillmentVariables | UpdateShopifyFulfillmentVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOptions>
    ): Promise<UpdateShopifyFulfillmentResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateShopifyFulfillments";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillment";
    modelSelectionField: "shopifyFulfillments";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyFulfillmentSelection;
    selectionType: AvailableShopifyFulfillmentSelection;
    optionsType: UpdateShopifyFulfillmentOptions;
    schemaType: Query["shopifyFulfillment"];
    variablesType: (FullyQualifiedUpdateShopifyFulfillmentVariables | UpdateShopifyFulfillmentVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateShopifyFulfillmentsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateShopifyFulfillmentOptions>(
        inputs: (FullyQualifiedUpdateShopifyFulfillmentVariables | UpdateShopifyFulfillmentVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOptions>
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
        "bulkUpdateShopifyFulfillments",
        DefaultShopifyFulfillmentSelection,
        "shopifyFulfillment",
        "shopifyFulfillments",
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
      operationName: "bulkUpdateShopifyFulfillments",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyFulfillments",
      isBulk: true,
      defaultSelection: DefaultShopifyFulfillmentSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateShopifyFulfillmentsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteShopifyFulfillment,
  {
    type: "action",
    operationName: "deleteShopifyFulfillment",
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
    operationName: "deleteShopifyFulfillment";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillment";
    modelSelectionField: "shopifyFulfillment";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyFulfillmentOptions;
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
    <Options extends DeleteShopifyFulfillmentOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentOptions>
    ): Promise<DeleteShopifyFulfillmentResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteShopifyFulfillments";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillment";
    modelSelectionField: "shopifyFulfillments";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyFulfillmentOptions;
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
    async <Options extends DeleteShopifyFulfillmentOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkDeleteShopifyFulfillments",
        null,
        "shopifyFulfillment",
        "shopifyFulfillments",
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
      operationName: "bulkDeleteShopifyFulfillments",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyFulfillments",
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
