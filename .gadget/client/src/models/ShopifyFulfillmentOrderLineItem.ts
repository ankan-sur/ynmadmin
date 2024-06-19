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
      ShopifyFulfillmentOrderLineItem,
      ShopifyFulfillmentOrderLineItemSort,
      ShopifyFulfillmentOrderLineItemFilter,
      AvailableShopifyFulfillmentOrderLineItemSelection,
      CreateShopifyFulfillmentOrderLineItemInput,
      UpdateShopifyFulfillmentOrderLineItemInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyFulfillmentOrderLineItemSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "quantity": true,
  "remainingQuantity": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyFulfillmentOrderLineItem". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyFulfillmentOrderLineItemOrDefault<Options extends Selectable<AvailableShopifyFulfillmentOrderLineItemSelection>> = DeepFilterNever<
  Select<
    ShopifyFulfillmentOrderLineItem,
    DefaultSelection<
      AvailableShopifyFulfillmentOrderLineItemSelection,
      Options,
      typeof DefaultShopifyFulfillmentOrderLineItemSelection
    >
  >>;

/** Options that can be passed to the `ShopifyFulfillmentOrderLineItemManager#findOne` method */
export interface FindOneShopifyFulfillmentOrderLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentOrderLineItemSelection;
};

/** Options that can be passed to the `ShopifyFulfillmentOrderLineItemManager#maybeFindOne` method */
export interface MaybeFindOneShopifyFulfillmentOrderLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentOrderLineItemSelection;
};

/** Options that can be passed to the `ShopifyFulfillmentOrderLineItemManager#findMany` method */
export interface FindManyShopifyFulfillmentOrderLineItemsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentOrderLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentOrderLineItemSort | ShopifyFulfillmentOrderLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentOrderLineItemFilter | ShopifyFulfillmentOrderLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyFulfillmentOrderLineItemManager#findFirst` method */
export interface FindFirstShopifyFulfillmentOrderLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentOrderLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentOrderLineItemSort | ShopifyFulfillmentOrderLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentOrderLineItemFilter | ShopifyFulfillmentOrderLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyFulfillmentOrderLineItemManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyFulfillmentOrderLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentOrderLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentOrderLineItemSort | ShopifyFulfillmentOrderLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentOrderLineItemFilter | ShopifyFulfillmentOrderLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateShopifyFulfillmentOrderLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentOrderLineItemSelection;
};


export interface UpdateShopifyFulfillmentOrderLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentOrderLineItemSelection;
};


export interface DeleteShopifyFulfillmentOrderLineItemOptions {
};


const apiIdentifier = "shopifyFulfillmentOrderLineItem";
const pluralApiIdentifier = "shopifyFulfillmentOrderLineItems";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateShopifyFulfillmentOrderLineItemVariables = {
          shopifyFulfillmentOrderLineItem?: CreateShopifyFulfillmentOrderLineItemInput,
      }

  /**
   * The inputs for executing create on shopifyFulfillmentOrderLineItem.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateShopifyFulfillmentOrderLineItemVariables = CreateShopifyFulfillmentOrderLineItemInput;



/**
 * The return value from executing create on shopifyFulfillmentOrderLineItem.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyFulfillmentOrderLineItemResult<Options extends CreateShopifyFulfillmentOrderLineItemOptions> =
  SelectedShopifyFulfillmentOrderLineItemOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createShopifyFulfillmentOrderLineItem<Options extends CreateShopifyFulfillmentOrderLineItemOptions>(
  
    variables: CreateShopifyFulfillmentOrderLineItemVariables,

  options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOrderLineItemOptions>
): Promise<CreateShopifyFulfillmentOrderLineItemResult<Options>>;

// Fully qualified, nested api identifier overload
async function createShopifyFulfillmentOrderLineItem<Options extends CreateShopifyFulfillmentOrderLineItemOptions>(
  
      variables: FullyQualifiedCreateShopifyFulfillmentOrderLineItemVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOrderLineItemOptions>
): Promise<CreateShopifyFulfillmentOrderLineItemResult<Options>>;

// Function implementation
async function createShopifyFulfillmentOrderLineItem<Options extends CreateShopifyFulfillmentOrderLineItemOptions>(
  this: ShopifyFulfillmentOrderLineItemManager,
  
      variables: CreateShopifyFulfillmentOrderLineItemVariables | FullyQualifiedCreateShopifyFulfillmentOrderLineItemVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOrderLineItemOptions>
): Promise<CreateShopifyFulfillmentOrderLineItemResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>(
    this,
    "createShopifyFulfillmentOrderLineItem",
    DefaultShopifyFulfillmentOrderLineItemSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                    "shopifyFulfillmentOrderLineItem": {
          value: newVariables.shopifyFulfillmentOrderLineItem,
          required: false,
          type: "CreateShopifyFulfillmentOrderLineItemInput",
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
  export type FullyQualifiedUpdateShopifyFulfillmentOrderLineItemVariables = {
          shopifyFulfillmentOrderLineItem?: UpdateShopifyFulfillmentOrderLineItemInput,
      }

  /**
   * The inputs for executing update on shopifyFulfillmentOrderLineItem.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateShopifyFulfillmentOrderLineItemVariables = UpdateShopifyFulfillmentOrderLineItemInput;



/**
 * The return value from executing update on shopifyFulfillmentOrderLineItem.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyFulfillmentOrderLineItemResult<Options extends UpdateShopifyFulfillmentOrderLineItemOptions> =
  SelectedShopifyFulfillmentOrderLineItemOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateShopifyFulfillmentOrderLineItem<Options extends UpdateShopifyFulfillmentOrderLineItemOptions>(
  id: string,
    variables: UpdateShopifyFulfillmentOrderLineItemVariables,

  options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOrderLineItemOptions>
): Promise<UpdateShopifyFulfillmentOrderLineItemResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateShopifyFulfillmentOrderLineItem<Options extends UpdateShopifyFulfillmentOrderLineItemOptions>(
  id: string,
      variables: FullyQualifiedUpdateShopifyFulfillmentOrderLineItemVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOrderLineItemOptions>
): Promise<UpdateShopifyFulfillmentOrderLineItemResult<Options>>;

// Function implementation
async function updateShopifyFulfillmentOrderLineItem<Options extends UpdateShopifyFulfillmentOrderLineItemOptions>(
  this: ShopifyFulfillmentOrderLineItemManager,
  id: string,
      variables: UpdateShopifyFulfillmentOrderLineItemVariables | FullyQualifiedUpdateShopifyFulfillmentOrderLineItemVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOrderLineItemOptions>
): Promise<UpdateShopifyFulfillmentOrderLineItemResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>(
    this,
    "updateShopifyFulfillmentOrderLineItem",
    DefaultShopifyFulfillmentOrderLineItemSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "shopifyFulfillmentOrderLineItem": {
          value: newVariables.shopifyFulfillmentOrderLineItem,
          required: false,
          type: "UpdateShopifyFulfillmentOrderLineItemInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on shopifyFulfillmentOrderLineItem.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyFulfillmentOrderLineItemResult<Options extends DeleteShopifyFulfillmentOrderLineItemOptions> =
  void extends void ? void : GadgetRecord<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteShopifyFulfillmentOrderLineItem<Options extends DeleteShopifyFulfillmentOrderLineItemOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentOrderLineItemOptions>
): Promise<DeleteShopifyFulfillmentOrderLineItemResult<Options>>;

// Function implementation
async function deleteShopifyFulfillmentOrderLineItem<Options extends DeleteShopifyFulfillmentOrderLineItemOptions>(
  this: ShopifyFulfillmentOrderLineItemManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentOrderLineItemOptions>
): Promise<DeleteShopifyFulfillmentOrderLineItemResult<Options>> {

  return (await actionRunner<void>(
    this,
    "deleteShopifyFulfillmentOrderLineItem",
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

  



/** All the actions available at the collection level and record level for "shopifyFulfillmentOrderLineItem" */
export class ShopifyFulfillmentOrderLineItemManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyFulfillmentOrderLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyFulfillmentOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentOrderLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyFulfillmentOrderLineItem";
  modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
  selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
  optionsType: FindOneShopifyFulfillmentOrderLineItemOptions;
  schemaType: Query["shopifyFulfillmentOrderLineItem"];
} = Object.assign(
  async <Options extends FindOneShopifyFulfillmentOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentOrderLineItemOptions>) => {
    return await findOneRunner<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentOrderLineItem",
      id,
      DefaultShopifyFulfillmentOrderLineItemSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyFulfillmentOrderLineItem",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection,
  } as any
)

  
    /**
 * Finds one shopifyFulfillmentOrderLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyFulfillmentOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentOrderLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyFulfillmentOrderLineItem";
  modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
  selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
  optionsType: MaybeFindOneShopifyFulfillmentOrderLineItemOptions;
  schemaType: Query["shopifyFulfillmentOrderLineItem"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyFulfillmentOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentOrderLineItemOptions>) => {
    const record = await findOneRunner<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentOrderLineItem",
      id,
      DefaultShopifyFulfillmentOrderLineItemSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyFulfillmentOrderLineItem",
    modelApiIdentifier: "shopifyFulfillmentOrderLineItem",
    defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection,
  } as any
)

  
    /**
 * Finds many shopifyFulfillmentOrderLineItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyFulfillmentOrderLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentOrderLineItemsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyFulfillmentOrderLineItems";
  modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
  selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
  optionsType: FindManyShopifyFulfillmentOrderLineItemsOptions;
  schemaType: Query["shopifyFulfillmentOrderLineItem"];
} = Object.assign(
  async <Options extends FindManyShopifyFulfillmentOrderLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentOrderLineItemsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentOrderLineItems",
      DefaultShopifyFulfillmentOrderLineItemSelection,
      "shopifyFulfillmentOrderLineItem",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyFulfillmentOrderLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFulfillmentOrderLineItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyFulfillmentOrderLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentOrderLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyFulfillmentOrderLineItems";
  modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
  selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
  optionsType: FindFirstShopifyFulfillmentOrderLineItemOptions;
  schemaType: Query["shopifyFulfillmentOrderLineItem"];
} = Object.assign(
  async <Options extends FindFirstShopifyFulfillmentOrderLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentOrderLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentOrderLineItems",
      DefaultShopifyFulfillmentOrderLineItemSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyFulfillmentOrderLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFulfillmentOrderLineItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyFulfillmentOrderLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentOrderLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyFulfillmentOrderLineItems";
  modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
  selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
  optionsType: MaybeFindFirstShopifyFulfillmentOrderLineItemOptions;
  schemaType: Query["shopifyFulfillmentOrderLineItem"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyFulfillmentOrderLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentOrderLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFulfillmentOrderLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentOrderLineItems",
      DefaultShopifyFulfillmentOrderLineItemSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyFulfillmentOrderLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection,
  } as any
);

  
    create = Object.assign(createShopifyFulfillmentOrderLineItem,
  {
    type: "action",
    operationName: "createShopifyFulfillmentOrderLineItem",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection,
    variables: {
      "shopifyFulfillmentOrderLineItem": {
        required: false,
        type: "CreateShopifyFulfillmentOrderLineItemInput",
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
    operationName: "createShopifyFulfillmentOrderLineItem";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
    modelSelectionField: "shopifyFulfillmentOrderLineItem";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
    selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
    optionsType: CreateShopifyFulfillmentOrderLineItemOptions;
    schemaType:  Query["shopifyFulfillmentOrderLineItem"];

    variablesType: (

      (
        FullyQualifiedCreateShopifyFulfillmentOrderLineItemVariables          | CreateShopifyFulfillmentOrderLineItemVariables      )
    )
    // all variables are optional, so no variables can be passed at all
    | undefined
    ;
    variables: {
                    "shopifyFulfillmentOrderLineItem": {
          required: false;
          type: "CreateShopifyFulfillmentOrderLineItemInput";
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
    <Options extends CreateShopifyFulfillmentOrderLineItemOptions>(
        inputs: (FullyQualifiedCreateShopifyFulfillmentOrderLineItemVariables | CreateShopifyFulfillmentOrderLineItemVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOrderLineItemOptions>
    ): Promise<CreateShopifyFulfillmentOrderLineItemResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateShopifyFulfillmentOrderLineItems";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
    modelSelectionField: "shopifyFulfillmentOrderLineItems";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
    selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
    optionsType: CreateShopifyFulfillmentOrderLineItemOptions;
    schemaType: Query["shopifyFulfillmentOrderLineItem"];
    variablesType: (FullyQualifiedCreateShopifyFulfillmentOrderLineItemVariables | CreateShopifyFulfillmentOrderLineItemVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateShopifyFulfillmentOrderLineItemsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateShopifyFulfillmentOrderLineItemOptions>(
        inputs: (FullyQualifiedCreateShopifyFulfillmentOrderLineItemVariables | CreateShopifyFulfillmentOrderLineItemVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentOrderLineItemOptions>
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
        "bulkCreateShopifyFulfillmentOrderLineItems",
        DefaultShopifyFulfillmentOrderLineItemSelection,
        "shopifyFulfillmentOrderLineItem",
        "shopifyFulfillmentOrderLineItems",
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
      operationName: "bulkCreateShopifyFulfillmentOrderLineItems",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyFulfillmentOrderLineItems",
      isBulk: true,
      defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateShopifyFulfillmentOrderLineItemsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateShopifyFulfillmentOrderLineItem,
  {
    type: "action",
    operationName: "updateShopifyFulfillmentOrderLineItem",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopifyFulfillmentOrderLineItem": {
        required: false,
        type: "UpdateShopifyFulfillmentOrderLineItemInput",
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
    operationName: "updateShopifyFulfillmentOrderLineItem";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
    modelSelectionField: "shopifyFulfillmentOrderLineItem";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
    selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
    optionsType: UpdateShopifyFulfillmentOrderLineItemOptions;
    schemaType:  Query["shopifyFulfillmentOrderLineItem"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateShopifyFulfillmentOrderLineItemVariables          | UpdateShopifyFulfillmentOrderLineItemVariables      )
    )
    ;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "shopifyFulfillmentOrderLineItem": {
          required: false;
          type: "UpdateShopifyFulfillmentOrderLineItemInput";
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
    <Options extends UpdateShopifyFulfillmentOrderLineItemOptions>(
        inputs: (FullyQualifiedUpdateShopifyFulfillmentOrderLineItemVariables | UpdateShopifyFulfillmentOrderLineItemVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOrderLineItemOptions>
    ): Promise<UpdateShopifyFulfillmentOrderLineItemResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateShopifyFulfillmentOrderLineItems";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
    modelSelectionField: "shopifyFulfillmentOrderLineItems";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyFulfillmentOrderLineItemSelection;
    selectionType: AvailableShopifyFulfillmentOrderLineItemSelection;
    optionsType: UpdateShopifyFulfillmentOrderLineItemOptions;
    schemaType: Query["shopifyFulfillmentOrderLineItem"];
    variablesType: (FullyQualifiedUpdateShopifyFulfillmentOrderLineItemVariables | UpdateShopifyFulfillmentOrderLineItemVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateShopifyFulfillmentOrderLineItemsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateShopifyFulfillmentOrderLineItemOptions>(
        inputs: (FullyQualifiedUpdateShopifyFulfillmentOrderLineItemVariables | UpdateShopifyFulfillmentOrderLineItemVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentOrderLineItemOptions>
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
        "bulkUpdateShopifyFulfillmentOrderLineItems",
        DefaultShopifyFulfillmentOrderLineItemSelection,
        "shopifyFulfillmentOrderLineItem",
        "shopifyFulfillmentOrderLineItems",
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
      operationName: "bulkUpdateShopifyFulfillmentOrderLineItems",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyFulfillmentOrderLineItems",
      isBulk: true,
      defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateShopifyFulfillmentOrderLineItemsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteShopifyFulfillmentOrderLineItem,
  {
    type: "action",
    operationName: "deleteShopifyFulfillmentOrderLineItem",
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
    operationName: "deleteShopifyFulfillmentOrderLineItem";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
    modelSelectionField: "shopifyFulfillmentOrderLineItem";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyFulfillmentOrderLineItemOptions;
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
    <Options extends DeleteShopifyFulfillmentOrderLineItemOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentOrderLineItemOptions>
    ): Promise<DeleteShopifyFulfillmentOrderLineItemResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteShopifyFulfillmentOrderLineItems";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillmentOrderLineItem";
    modelSelectionField: "shopifyFulfillmentOrderLineItems";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyFulfillmentOrderLineItemOptions;
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
    async <Options extends DeleteShopifyFulfillmentOrderLineItemOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentOrderLineItemOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkDeleteShopifyFulfillmentOrderLineItems",
        null,
        "shopifyFulfillmentOrderLineItem",
        "shopifyFulfillmentOrderLineItems",
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
      operationName: "bulkDeleteShopifyFulfillmentOrderLineItems",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyFulfillmentOrderLineItems",
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
