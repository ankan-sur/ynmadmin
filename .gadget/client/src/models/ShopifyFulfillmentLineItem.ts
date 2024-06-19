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
      ShopifyFulfillmentLineItem,
      ShopifyFulfillmentLineItemSort,
      ShopifyFulfillmentLineItemFilter,
      AvailableShopifyFulfillmentLineItemSelection,
      CreateShopifyFulfillmentLineItemInput,
      UpdateShopifyFulfillmentLineItemInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyFulfillmentLineItemSelection = {
  "__typename": true,
  "createdAt": true,
  "discountedTotalSet": true,
  "id": true,
  "originalTotalSet": true,
  "quantity": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyFulfillmentLineItem". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyFulfillmentLineItemOrDefault<Options extends Selectable<AvailableShopifyFulfillmentLineItemSelection>> = DeepFilterNever<
  Select<
    ShopifyFulfillmentLineItem,
    DefaultSelection<
      AvailableShopifyFulfillmentLineItemSelection,
      Options,
      typeof DefaultShopifyFulfillmentLineItemSelection
    >
  >>;

/** Options that can be passed to the `ShopifyFulfillmentLineItemManager#findOne` method */
export interface FindOneShopifyFulfillmentLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentLineItemSelection;
};

/** Options that can be passed to the `ShopifyFulfillmentLineItemManager#maybeFindOne` method */
export interface MaybeFindOneShopifyFulfillmentLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentLineItemSelection;
};

/** Options that can be passed to the `ShopifyFulfillmentLineItemManager#findMany` method */
export interface FindManyShopifyFulfillmentLineItemsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentLineItemSort | ShopifyFulfillmentLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentLineItemFilter | ShopifyFulfillmentLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyFulfillmentLineItemManager#findFirst` method */
export interface FindFirstShopifyFulfillmentLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentLineItemSort | ShopifyFulfillmentLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentLineItemFilter | ShopifyFulfillmentLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyFulfillmentLineItemManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyFulfillmentLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyFulfillmentLineItemSort | ShopifyFulfillmentLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyFulfillmentLineItemFilter | ShopifyFulfillmentLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateShopifyFulfillmentLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentLineItemSelection;
};


export interface UpdateShopifyFulfillmentLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyFulfillmentLineItemSelection;
};


export interface DeleteShopifyFulfillmentLineItemOptions {
};


const apiIdentifier = "shopifyFulfillmentLineItem";
const pluralApiIdentifier = "shopifyFulfillmentLineItems";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateShopifyFulfillmentLineItemVariables = {
          shopifyFulfillmentLineItem?: CreateShopifyFulfillmentLineItemInput,
      }

  /**
   * The inputs for executing create on shopifyFulfillmentLineItem.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateShopifyFulfillmentLineItemVariables = CreateShopifyFulfillmentLineItemInput;



/**
 * The return value from executing create on shopifyFulfillmentLineItem.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyFulfillmentLineItemResult<Options extends CreateShopifyFulfillmentLineItemOptions> =
  SelectedShopifyFulfillmentLineItemOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyFulfillmentLineItemOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createShopifyFulfillmentLineItem<Options extends CreateShopifyFulfillmentLineItemOptions>(
  
    variables: CreateShopifyFulfillmentLineItemVariables,

  options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentLineItemOptions>
): Promise<CreateShopifyFulfillmentLineItemResult<Options>>;

// Fully qualified, nested api identifier overload
async function createShopifyFulfillmentLineItem<Options extends CreateShopifyFulfillmentLineItemOptions>(
  
      variables: FullyQualifiedCreateShopifyFulfillmentLineItemVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentLineItemOptions>
): Promise<CreateShopifyFulfillmentLineItemResult<Options>>;

// Function implementation
async function createShopifyFulfillmentLineItem<Options extends CreateShopifyFulfillmentLineItemOptions>(
  this: ShopifyFulfillmentLineItemManager,
  
      variables: CreateShopifyFulfillmentLineItemVariables | FullyQualifiedCreateShopifyFulfillmentLineItemVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentLineItemOptions>
): Promise<CreateShopifyFulfillmentLineItemResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedShopifyFulfillmentLineItemOrDefault<Options>>(
    this,
    "createShopifyFulfillmentLineItem",
    DefaultShopifyFulfillmentLineItemSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                    "shopifyFulfillmentLineItem": {
          value: newVariables.shopifyFulfillmentLineItem,
          required: false,
          type: "CreateShopifyFulfillmentLineItemInput",
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
  export type FullyQualifiedUpdateShopifyFulfillmentLineItemVariables = {
          shopifyFulfillmentLineItem?: UpdateShopifyFulfillmentLineItemInput,
      }

  /**
   * The inputs for executing update on shopifyFulfillmentLineItem.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateShopifyFulfillmentLineItemVariables = UpdateShopifyFulfillmentLineItemInput;



/**
 * The return value from executing update on shopifyFulfillmentLineItem.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyFulfillmentLineItemResult<Options extends UpdateShopifyFulfillmentLineItemOptions> =
  SelectedShopifyFulfillmentLineItemOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyFulfillmentLineItemOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateShopifyFulfillmentLineItem<Options extends UpdateShopifyFulfillmentLineItemOptions>(
  id: string,
    variables: UpdateShopifyFulfillmentLineItemVariables,

  options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentLineItemOptions>
): Promise<UpdateShopifyFulfillmentLineItemResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateShopifyFulfillmentLineItem<Options extends UpdateShopifyFulfillmentLineItemOptions>(
  id: string,
      variables: FullyQualifiedUpdateShopifyFulfillmentLineItemVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentLineItemOptions>
): Promise<UpdateShopifyFulfillmentLineItemResult<Options>>;

// Function implementation
async function updateShopifyFulfillmentLineItem<Options extends UpdateShopifyFulfillmentLineItemOptions>(
  this: ShopifyFulfillmentLineItemManager,
  id: string,
      variables: UpdateShopifyFulfillmentLineItemVariables | FullyQualifiedUpdateShopifyFulfillmentLineItemVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentLineItemOptions>
): Promise<UpdateShopifyFulfillmentLineItemResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedShopifyFulfillmentLineItemOrDefault<Options>>(
    this,
    "updateShopifyFulfillmentLineItem",
    DefaultShopifyFulfillmentLineItemSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "shopifyFulfillmentLineItem": {
          value: newVariables.shopifyFulfillmentLineItem,
          required: false,
          type: "UpdateShopifyFulfillmentLineItemInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on shopifyFulfillmentLineItem.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyFulfillmentLineItemResult<Options extends DeleteShopifyFulfillmentLineItemOptions> =
  void extends void ? void : GadgetRecord<SelectedShopifyFulfillmentLineItemOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteShopifyFulfillmentLineItem<Options extends DeleteShopifyFulfillmentLineItemOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentLineItemOptions>
): Promise<DeleteShopifyFulfillmentLineItemResult<Options>>;

// Function implementation
async function deleteShopifyFulfillmentLineItem<Options extends DeleteShopifyFulfillmentLineItemOptions>(
  this: ShopifyFulfillmentLineItemManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentLineItemOptions>
): Promise<DeleteShopifyFulfillmentLineItemResult<Options>> {

  return (await actionRunner<void>(
    this,
    "deleteShopifyFulfillmentLineItem",
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

  



/** All the actions available at the collection level and record level for "shopifyFulfillmentLineItem" */
export class ShopifyFulfillmentLineItemManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyFulfillmentLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyFulfillmentLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentLineItemOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyFulfillmentLineItem";
  modelApiIdentifier: "shopifyFulfillmentLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
  selectionType: AvailableShopifyFulfillmentLineItemSelection;
  optionsType: FindOneShopifyFulfillmentLineItemOptions;
  schemaType: Query["shopifyFulfillmentLineItem"];
} = Object.assign(
  async <Options extends FindOneShopifyFulfillmentLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentLineItemOptions>) => {
    return await findOneRunner<SelectedShopifyFulfillmentLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentLineItem",
      id,
      DefaultShopifyFulfillmentLineItemSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyFulfillmentLineItem",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentLineItemSelection,
  } as any
)

  
    /**
 * Finds one shopifyFulfillmentLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyFulfillmentLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentLineItemOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyFulfillmentLineItem";
  modelApiIdentifier: "shopifyFulfillmentLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
  selectionType: AvailableShopifyFulfillmentLineItemSelection;
  optionsType: MaybeFindOneShopifyFulfillmentLineItemOptions;
  schemaType: Query["shopifyFulfillmentLineItem"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyFulfillmentLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyFulfillmentLineItemOptions>) => {
    const record = await findOneRunner<SelectedShopifyFulfillmentLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentLineItem",
      id,
      DefaultShopifyFulfillmentLineItemSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyFulfillmentLineItem",
    modelApiIdentifier: "shopifyFulfillmentLineItem",
    defaultSelection: DefaultShopifyFulfillmentLineItemSelection,
  } as any
)

  
    /**
 * Finds many shopifyFulfillmentLineItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyFulfillmentLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentLineItemsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFulfillmentLineItemOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyFulfillmentLineItems";
  modelApiIdentifier: "shopifyFulfillmentLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
  selectionType: AvailableShopifyFulfillmentLineItemSelection;
  optionsType: FindManyShopifyFulfillmentLineItemsOptions;
  schemaType: Query["shopifyFulfillmentLineItem"];
} = Object.assign(
  async <Options extends FindManyShopifyFulfillmentLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyFulfillmentLineItemsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyFulfillmentLineItemOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyFulfillmentLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentLineItems",
      DefaultShopifyFulfillmentLineItemSelection,
      "shopifyFulfillmentLineItem",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyFulfillmentLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentLineItemSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFulfillmentLineItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyFulfillmentLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentLineItemOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyFulfillmentLineItems";
  modelApiIdentifier: "shopifyFulfillmentLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
  selectionType: AvailableShopifyFulfillmentLineItemSelection;
  optionsType: FindFirstShopifyFulfillmentLineItemOptions;
  schemaType: Query["shopifyFulfillmentLineItem"];
} = Object.assign(
  async <Options extends FindFirstShopifyFulfillmentLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyFulfillmentLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentLineItemOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFulfillmentLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentLineItems",
      DefaultShopifyFulfillmentLineItemSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyFulfillmentLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentLineItemSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyFulfillmentLineItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyFulfillmentLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentLineItemOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyFulfillmentLineItems";
  modelApiIdentifier: "shopifyFulfillmentLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
  selectionType: AvailableShopifyFulfillmentLineItemSelection;
  optionsType: MaybeFindFirstShopifyFulfillmentLineItemOptions;
  schemaType: Query["shopifyFulfillmentLineItem"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyFulfillmentLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyFulfillmentLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentLineItemOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyFulfillmentLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentLineItems",
      DefaultShopifyFulfillmentLineItemSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyFulfillmentLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentLineItemSelection,
  } as any
);

  
    /**
  * Finds one shopifyFulfillmentLineItem by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneShopifyFulfillmentLineItemOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyFulfillmentLineItemOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "shopifyFulfillmentLineItems";
  modelApiIdentifier: "shopifyFulfillmentLineItem";
  defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
  selectionType: AvailableShopifyFulfillmentLineItemSelection;
  optionsType: FindOneShopifyFulfillmentLineItemOptions;
  schemaType: Query["shopifyFulfillmentLineItem"];
} = Object.assign(
  async <Options extends FindOneShopifyFulfillmentLineItemOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyFulfillmentLineItemOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedShopifyFulfillmentLineItemOrDefault<Options>
      > & SelectedShopifyFulfillmentLineItemOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedShopifyFulfillmentLineItemOrDefault<Options>>(
      this,
      "shopifyFulfillmentLineItems",
      "id",
      value,
      DefaultShopifyFulfillmentLineItemSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyFulfillmentLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyFulfillmentLineItemSelection,
  } as any
)

  
    create = Object.assign(createShopifyFulfillmentLineItem,
  {
    type: "action",
    operationName: "createShopifyFulfillmentLineItem",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyFulfillmentLineItemSelection,
    variables: {
      "shopifyFulfillmentLineItem": {
        required: false,
        type: "CreateShopifyFulfillmentLineItemInput",
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
    operationName: "createShopifyFulfillmentLineItem";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillmentLineItem";
    modelSelectionField: "shopifyFulfillmentLineItem";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
    selectionType: AvailableShopifyFulfillmentLineItemSelection;
    optionsType: CreateShopifyFulfillmentLineItemOptions;
    schemaType:  Query["shopifyFulfillmentLineItem"];

    variablesType: (

      (
        FullyQualifiedCreateShopifyFulfillmentLineItemVariables          | CreateShopifyFulfillmentLineItemVariables      )
    )
    // all variables are optional, so no variables can be passed at all
    | undefined
    ;
    variables: {
                    "shopifyFulfillmentLineItem": {
          required: false;
          type: "CreateShopifyFulfillmentLineItemInput";
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
    <Options extends CreateShopifyFulfillmentLineItemOptions>(
        inputs: (FullyQualifiedCreateShopifyFulfillmentLineItemVariables | CreateShopifyFulfillmentLineItemVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentLineItemOptions>
    ): Promise<CreateShopifyFulfillmentLineItemResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateShopifyFulfillmentLineItems";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillmentLineItem";
    modelSelectionField: "shopifyFulfillmentLineItems";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
    selectionType: AvailableShopifyFulfillmentLineItemSelection;
    optionsType: CreateShopifyFulfillmentLineItemOptions;
    schemaType: Query["shopifyFulfillmentLineItem"];
    variablesType: (FullyQualifiedCreateShopifyFulfillmentLineItemVariables | CreateShopifyFulfillmentLineItemVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateShopifyFulfillmentLineItemsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateShopifyFulfillmentLineItemOptions>(
        inputs: (FullyQualifiedCreateShopifyFulfillmentLineItemVariables | CreateShopifyFulfillmentLineItemVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyFulfillmentLineItemOptions>
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
        "bulkCreateShopifyFulfillmentLineItems",
        DefaultShopifyFulfillmentLineItemSelection,
        "shopifyFulfillmentLineItem",
        "shopifyFulfillmentLineItems",
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
      operationName: "bulkCreateShopifyFulfillmentLineItems",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyFulfillmentLineItems",
      isBulk: true,
      defaultSelection: DefaultShopifyFulfillmentLineItemSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateShopifyFulfillmentLineItemsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateShopifyFulfillmentLineItem,
  {
    type: "action",
    operationName: "updateShopifyFulfillmentLineItem",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyFulfillmentLineItemSelection,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopifyFulfillmentLineItem": {
        required: false,
        type: "UpdateShopifyFulfillmentLineItemInput",
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
    operationName: "updateShopifyFulfillmentLineItem";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillmentLineItem";
    modelSelectionField: "shopifyFulfillmentLineItem";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
    selectionType: AvailableShopifyFulfillmentLineItemSelection;
    optionsType: UpdateShopifyFulfillmentLineItemOptions;
    schemaType:  Query["shopifyFulfillmentLineItem"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateShopifyFulfillmentLineItemVariables          | UpdateShopifyFulfillmentLineItemVariables      )
    )
    ;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "shopifyFulfillmentLineItem": {
          required: false;
          type: "UpdateShopifyFulfillmentLineItemInput";
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
    <Options extends UpdateShopifyFulfillmentLineItemOptions>(
        inputs: (FullyQualifiedUpdateShopifyFulfillmentLineItemVariables | UpdateShopifyFulfillmentLineItemVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentLineItemOptions>
    ): Promise<UpdateShopifyFulfillmentLineItemResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateShopifyFulfillmentLineItems";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillmentLineItem";
    modelSelectionField: "shopifyFulfillmentLineItems";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyFulfillmentLineItemSelection;
    selectionType: AvailableShopifyFulfillmentLineItemSelection;
    optionsType: UpdateShopifyFulfillmentLineItemOptions;
    schemaType: Query["shopifyFulfillmentLineItem"];
    variablesType: (FullyQualifiedUpdateShopifyFulfillmentLineItemVariables | UpdateShopifyFulfillmentLineItemVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateShopifyFulfillmentLineItemsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateShopifyFulfillmentLineItemOptions>(
        inputs: (FullyQualifiedUpdateShopifyFulfillmentLineItemVariables | UpdateShopifyFulfillmentLineItemVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyFulfillmentLineItemOptions>
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
        "bulkUpdateShopifyFulfillmentLineItems",
        DefaultShopifyFulfillmentLineItemSelection,
        "shopifyFulfillmentLineItem",
        "shopifyFulfillmentLineItems",
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
      operationName: "bulkUpdateShopifyFulfillmentLineItems",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyFulfillmentLineItems",
      isBulk: true,
      defaultSelection: DefaultShopifyFulfillmentLineItemSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateShopifyFulfillmentLineItemsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteShopifyFulfillmentLineItem,
  {
    type: "action",
    operationName: "deleteShopifyFulfillmentLineItem",
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
    operationName: "deleteShopifyFulfillmentLineItem";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillmentLineItem";
    modelSelectionField: "shopifyFulfillmentLineItem";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyFulfillmentLineItemOptions;
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
    <Options extends DeleteShopifyFulfillmentLineItemOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentLineItemOptions>
    ): Promise<DeleteShopifyFulfillmentLineItemResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteShopifyFulfillmentLineItems";
    namespace: null;
    modelApiIdentifier: "shopifyFulfillmentLineItem";
    modelSelectionField: "shopifyFulfillmentLineItems";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyFulfillmentLineItemOptions;
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
    async <Options extends DeleteShopifyFulfillmentLineItemOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyFulfillmentLineItemOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkDeleteShopifyFulfillmentLineItems",
        null,
        "shopifyFulfillmentLineItem",
        "shopifyFulfillmentLineItems",
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
      operationName: "bulkDeleteShopifyFulfillmentLineItems",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyFulfillmentLineItems",
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
