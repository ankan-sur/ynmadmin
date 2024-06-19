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
      ShopifyCheckoutLineItem,
      ShopifyCheckoutLineItemSort,
      ShopifyCheckoutLineItemFilter,
      AvailableShopifyCheckoutLineItemSelection,
      CreateShopifyCheckoutLineItemInput,
      UpdateShopifyCheckoutLineItemInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyCheckoutLineItemSelection = {
  "__typename": true,
  "appliedDiscounts": true,
  "compareAtPrice": true,
  "createdAt": true,
  "discountAllocations": true,
  "fulfillmentService": true,
  "grams": true,
  "id": true,
  "key": true,
  "linePrice": true,
  "price": true,
  "quantity": true,
  "requiresShipping": true,
  "sku": true,
  "taxable": true,
  "title": true,
  "updatedAt": true,
  "variantTitle": true,
  "vendor": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyCheckoutLineItem". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyCheckoutLineItemOrDefault<Options extends Selectable<AvailableShopifyCheckoutLineItemSelection>> = DeepFilterNever<
  Select<
    ShopifyCheckoutLineItem,
    DefaultSelection<
      AvailableShopifyCheckoutLineItemSelection,
      Options,
      typeof DefaultShopifyCheckoutLineItemSelection
    >
  >>;

/** Options that can be passed to the `ShopifyCheckoutLineItemManager#findOne` method */
export interface FindOneShopifyCheckoutLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCheckoutLineItemSelection;
};

/** Options that can be passed to the `ShopifyCheckoutLineItemManager#maybeFindOne` method */
export interface MaybeFindOneShopifyCheckoutLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCheckoutLineItemSelection;
};

/** Options that can be passed to the `ShopifyCheckoutLineItemManager#findMany` method */
export interface FindManyShopifyCheckoutLineItemsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCheckoutLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCheckoutLineItemSort | ShopifyCheckoutLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCheckoutLineItemFilter | ShopifyCheckoutLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyCheckoutLineItemManager#findFirst` method */
export interface FindFirstShopifyCheckoutLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCheckoutLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCheckoutLineItemSort | ShopifyCheckoutLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCheckoutLineItemFilter | ShopifyCheckoutLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyCheckoutLineItemManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyCheckoutLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCheckoutLineItemSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCheckoutLineItemSort | ShopifyCheckoutLineItemSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCheckoutLineItemFilter | ShopifyCheckoutLineItemFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateShopifyCheckoutLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCheckoutLineItemSelection;
};


export interface UpdateShopifyCheckoutLineItemOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCheckoutLineItemSelection;
};


export interface DeleteShopifyCheckoutLineItemOptions {
};


const apiIdentifier = "shopifyCheckoutLineItem";
const pluralApiIdentifier = "shopifyCheckoutLineItems";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateShopifyCheckoutLineItemVariables = {
          shopifyCheckoutLineItem?: CreateShopifyCheckoutLineItemInput,
      }

  /**
   * The inputs for executing create on shopifyCheckoutLineItem.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateShopifyCheckoutLineItemVariables = CreateShopifyCheckoutLineItemInput;



/**
 * The return value from executing create on shopifyCheckoutLineItem.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyCheckoutLineItemResult<Options extends CreateShopifyCheckoutLineItemOptions> =
  SelectedShopifyCheckoutLineItemOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyCheckoutLineItemOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createShopifyCheckoutLineItem<Options extends CreateShopifyCheckoutLineItemOptions>(
  
    variables: CreateShopifyCheckoutLineItemVariables,

  options?: LimitToKnownKeys<Options, CreateShopifyCheckoutLineItemOptions>
): Promise<CreateShopifyCheckoutLineItemResult<Options>>;

// Fully qualified, nested api identifier overload
async function createShopifyCheckoutLineItem<Options extends CreateShopifyCheckoutLineItemOptions>(
  
      variables: FullyQualifiedCreateShopifyCheckoutLineItemVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyCheckoutLineItemOptions>
): Promise<CreateShopifyCheckoutLineItemResult<Options>>;

// Function implementation
async function createShopifyCheckoutLineItem<Options extends CreateShopifyCheckoutLineItemOptions>(
  this: ShopifyCheckoutLineItemManager,
  
      variables: CreateShopifyCheckoutLineItemVariables | FullyQualifiedCreateShopifyCheckoutLineItemVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyCheckoutLineItemOptions>
): Promise<CreateShopifyCheckoutLineItemResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedShopifyCheckoutLineItemOrDefault<Options>>(
    this,
    "createShopifyCheckoutLineItem",
    DefaultShopifyCheckoutLineItemSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                    "shopifyCheckoutLineItem": {
          value: newVariables.shopifyCheckoutLineItem,
          required: false,
          type: "CreateShopifyCheckoutLineItemInput",
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
  export type FullyQualifiedUpdateShopifyCheckoutLineItemVariables = {
          shopifyCheckoutLineItem?: UpdateShopifyCheckoutLineItemInput,
      }

  /**
   * The inputs for executing update on shopifyCheckoutLineItem.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateShopifyCheckoutLineItemVariables = UpdateShopifyCheckoutLineItemInput;



/**
 * The return value from executing update on shopifyCheckoutLineItem.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyCheckoutLineItemResult<Options extends UpdateShopifyCheckoutLineItemOptions> =
  SelectedShopifyCheckoutLineItemOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyCheckoutLineItemOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateShopifyCheckoutLineItem<Options extends UpdateShopifyCheckoutLineItemOptions>(
  id: string,
    variables: UpdateShopifyCheckoutLineItemVariables,

  options?: LimitToKnownKeys<Options, UpdateShopifyCheckoutLineItemOptions>
): Promise<UpdateShopifyCheckoutLineItemResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateShopifyCheckoutLineItem<Options extends UpdateShopifyCheckoutLineItemOptions>(
  id: string,
      variables: FullyQualifiedUpdateShopifyCheckoutLineItemVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyCheckoutLineItemOptions>
): Promise<UpdateShopifyCheckoutLineItemResult<Options>>;

// Function implementation
async function updateShopifyCheckoutLineItem<Options extends UpdateShopifyCheckoutLineItemOptions>(
  this: ShopifyCheckoutLineItemManager,
  id: string,
      variables: UpdateShopifyCheckoutLineItemVariables | FullyQualifiedUpdateShopifyCheckoutLineItemVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyCheckoutLineItemOptions>
): Promise<UpdateShopifyCheckoutLineItemResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedShopifyCheckoutLineItemOrDefault<Options>>(
    this,
    "updateShopifyCheckoutLineItem",
    DefaultShopifyCheckoutLineItemSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "shopifyCheckoutLineItem": {
          value: newVariables.shopifyCheckoutLineItem,
          required: false,
          type: "UpdateShopifyCheckoutLineItemInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on shopifyCheckoutLineItem.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyCheckoutLineItemResult<Options extends DeleteShopifyCheckoutLineItemOptions> =
  void extends void ? void : GadgetRecord<SelectedShopifyCheckoutLineItemOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteShopifyCheckoutLineItem<Options extends DeleteShopifyCheckoutLineItemOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyCheckoutLineItemOptions>
): Promise<DeleteShopifyCheckoutLineItemResult<Options>>;

// Function implementation
async function deleteShopifyCheckoutLineItem<Options extends DeleteShopifyCheckoutLineItemOptions>(
  this: ShopifyCheckoutLineItemManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyCheckoutLineItemOptions>
): Promise<DeleteShopifyCheckoutLineItemResult<Options>> {

  return (await actionRunner<void>(
    this,
    "deleteShopifyCheckoutLineItem",
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

  



/** All the actions available at the collection level and record level for "shopifyCheckoutLineItem" */
export class ShopifyCheckoutLineItemManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyCheckoutLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyCheckoutLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCheckoutLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCheckoutLineItemOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyCheckoutLineItem";
  modelApiIdentifier: "shopifyCheckoutLineItem";
  defaultSelection: typeof DefaultShopifyCheckoutLineItemSelection;
  selectionType: AvailableShopifyCheckoutLineItemSelection;
  optionsType: FindOneShopifyCheckoutLineItemOptions;
  schemaType: Query["shopifyCheckoutLineItem"];
} = Object.assign(
  async <Options extends FindOneShopifyCheckoutLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCheckoutLineItemOptions>) => {
    return await findOneRunner<SelectedShopifyCheckoutLineItemOrDefault<Options>>(
      this,
      "shopifyCheckoutLineItem",
      id,
      DefaultShopifyCheckoutLineItemSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyCheckoutLineItem",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCheckoutLineItemSelection,
  } as any
)

  
    /**
 * Finds one shopifyCheckoutLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyCheckoutLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCheckoutLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCheckoutLineItemOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyCheckoutLineItem";
  modelApiIdentifier: "shopifyCheckoutLineItem";
  defaultSelection: typeof DefaultShopifyCheckoutLineItemSelection;
  selectionType: AvailableShopifyCheckoutLineItemSelection;
  optionsType: MaybeFindOneShopifyCheckoutLineItemOptions;
  schemaType: Query["shopifyCheckoutLineItem"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyCheckoutLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCheckoutLineItemOptions>) => {
    const record = await findOneRunner<SelectedShopifyCheckoutLineItemOrDefault<Options>>(
      this,
      "shopifyCheckoutLineItem",
      id,
      DefaultShopifyCheckoutLineItemSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyCheckoutLineItem",
    modelApiIdentifier: "shopifyCheckoutLineItem",
    defaultSelection: DefaultShopifyCheckoutLineItemSelection,
  } as any
)

  
    /**
 * Finds many shopifyCheckoutLineItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyCheckoutLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCheckoutLineItemsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyCheckoutLineItemOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyCheckoutLineItems";
  modelApiIdentifier: "shopifyCheckoutLineItem";
  defaultSelection: typeof DefaultShopifyCheckoutLineItemSelection;
  selectionType: AvailableShopifyCheckoutLineItemSelection;
  optionsType: FindManyShopifyCheckoutLineItemsOptions;
  schemaType: Query["shopifyCheckoutLineItem"];
} = Object.assign(
  async <Options extends FindManyShopifyCheckoutLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCheckoutLineItemsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyCheckoutLineItemOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyCheckoutLineItemOrDefault<Options>>(
      this,
      "shopifyCheckoutLineItems",
      DefaultShopifyCheckoutLineItemSelection,
      "shopifyCheckoutLineItem",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyCheckoutLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCheckoutLineItemSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyCheckoutLineItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyCheckoutLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCheckoutLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCheckoutLineItemOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyCheckoutLineItems";
  modelApiIdentifier: "shopifyCheckoutLineItem";
  defaultSelection: typeof DefaultShopifyCheckoutLineItemSelection;
  selectionType: AvailableShopifyCheckoutLineItemSelection;
  optionsType: FindFirstShopifyCheckoutLineItemOptions;
  schemaType: Query["shopifyCheckoutLineItem"];
} = Object.assign(
  async <Options extends FindFirstShopifyCheckoutLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCheckoutLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCheckoutLineItemOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyCheckoutLineItemOrDefault<Options>>(
      this,
      "shopifyCheckoutLineItems",
      DefaultShopifyCheckoutLineItemSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyCheckoutLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCheckoutLineItemSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyCheckoutLineItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyCheckoutLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCheckoutLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCheckoutLineItemOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyCheckoutLineItems";
  modelApiIdentifier: "shopifyCheckoutLineItem";
  defaultSelection: typeof DefaultShopifyCheckoutLineItemSelection;
  selectionType: AvailableShopifyCheckoutLineItemSelection;
  optionsType: MaybeFindFirstShopifyCheckoutLineItemOptions;
  schemaType: Query["shopifyCheckoutLineItem"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyCheckoutLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCheckoutLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCheckoutLineItemOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyCheckoutLineItemOrDefault<Options>>(
      this,
      "shopifyCheckoutLineItems",
      DefaultShopifyCheckoutLineItemSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyCheckoutLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCheckoutLineItemSelection,
  } as any
);

  
    /**
  * Finds one shopifyCheckoutLineItem by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneShopifyCheckoutLineItemOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyCheckoutLineItemOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCheckoutLineItemOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "shopifyCheckoutLineItems";
  modelApiIdentifier: "shopifyCheckoutLineItem";
  defaultSelection: typeof DefaultShopifyCheckoutLineItemSelection;
  selectionType: AvailableShopifyCheckoutLineItemSelection;
  optionsType: FindOneShopifyCheckoutLineItemOptions;
  schemaType: Query["shopifyCheckoutLineItem"];
} = Object.assign(
  async <Options extends FindOneShopifyCheckoutLineItemOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyCheckoutLineItemOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedShopifyCheckoutLineItemOrDefault<Options>
      > & SelectedShopifyCheckoutLineItemOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedShopifyCheckoutLineItemOrDefault<Options>>(
      this,
      "shopifyCheckoutLineItems",
      "id",
      value,
      DefaultShopifyCheckoutLineItemSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyCheckoutLineItems",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCheckoutLineItemSelection,
  } as any
)

  
    create = Object.assign(createShopifyCheckoutLineItem,
  {
    type: "action",
    operationName: "createShopifyCheckoutLineItem",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyCheckoutLineItemSelection,
    variables: {
      "shopifyCheckoutLineItem": {
        required: false,
        type: "CreateShopifyCheckoutLineItemInput",
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
    operationName: "createShopifyCheckoutLineItem";
    namespace: null;
    modelApiIdentifier: "shopifyCheckoutLineItem";
    modelSelectionField: "shopifyCheckoutLineItem";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyCheckoutLineItemSelection;
    selectionType: AvailableShopifyCheckoutLineItemSelection;
    optionsType: CreateShopifyCheckoutLineItemOptions;
    schemaType:  Query["shopifyCheckoutLineItem"];

    variablesType: (

      (
        FullyQualifiedCreateShopifyCheckoutLineItemVariables          | CreateShopifyCheckoutLineItemVariables      )
    )
    // all variables are optional, so no variables can be passed at all
    | undefined
    ;
    variables: {
                    "shopifyCheckoutLineItem": {
          required: false;
          type: "CreateShopifyCheckoutLineItemInput";
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
    <Options extends CreateShopifyCheckoutLineItemOptions>(
        inputs: (FullyQualifiedCreateShopifyCheckoutLineItemVariables | CreateShopifyCheckoutLineItemVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyCheckoutLineItemOptions>
    ): Promise<CreateShopifyCheckoutLineItemResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateShopifyCheckoutLineItems";
    namespace: null;
    modelApiIdentifier: "shopifyCheckoutLineItem";
    modelSelectionField: "shopifyCheckoutLineItems";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyCheckoutLineItemSelection;
    selectionType: AvailableShopifyCheckoutLineItemSelection;
    optionsType: CreateShopifyCheckoutLineItemOptions;
    schemaType: Query["shopifyCheckoutLineItem"];
    variablesType: (FullyQualifiedCreateShopifyCheckoutLineItemVariables | CreateShopifyCheckoutLineItemVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateShopifyCheckoutLineItemsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateShopifyCheckoutLineItemOptions>(
        inputs: (FullyQualifiedCreateShopifyCheckoutLineItemVariables | CreateShopifyCheckoutLineItemVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyCheckoutLineItemOptions>
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
        "bulkCreateShopifyCheckoutLineItems",
        DefaultShopifyCheckoutLineItemSelection,
        "shopifyCheckoutLineItem",
        "shopifyCheckoutLineItems",
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
      operationName: "bulkCreateShopifyCheckoutLineItems",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyCheckoutLineItems",
      isBulk: true,
      defaultSelection: DefaultShopifyCheckoutLineItemSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateShopifyCheckoutLineItemsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateShopifyCheckoutLineItem,
  {
    type: "action",
    operationName: "updateShopifyCheckoutLineItem",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyCheckoutLineItemSelection,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopifyCheckoutLineItem": {
        required: false,
        type: "UpdateShopifyCheckoutLineItemInput",
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
    operationName: "updateShopifyCheckoutLineItem";
    namespace: null;
    modelApiIdentifier: "shopifyCheckoutLineItem";
    modelSelectionField: "shopifyCheckoutLineItem";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyCheckoutLineItemSelection;
    selectionType: AvailableShopifyCheckoutLineItemSelection;
    optionsType: UpdateShopifyCheckoutLineItemOptions;
    schemaType:  Query["shopifyCheckoutLineItem"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateShopifyCheckoutLineItemVariables          | UpdateShopifyCheckoutLineItemVariables      )
    )
    ;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "shopifyCheckoutLineItem": {
          required: false;
          type: "UpdateShopifyCheckoutLineItemInput";
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
    <Options extends UpdateShopifyCheckoutLineItemOptions>(
        inputs: (FullyQualifiedUpdateShopifyCheckoutLineItemVariables | UpdateShopifyCheckoutLineItemVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyCheckoutLineItemOptions>
    ): Promise<UpdateShopifyCheckoutLineItemResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateShopifyCheckoutLineItems";
    namespace: null;
    modelApiIdentifier: "shopifyCheckoutLineItem";
    modelSelectionField: "shopifyCheckoutLineItems";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyCheckoutLineItemSelection;
    selectionType: AvailableShopifyCheckoutLineItemSelection;
    optionsType: UpdateShopifyCheckoutLineItemOptions;
    schemaType: Query["shopifyCheckoutLineItem"];
    variablesType: (FullyQualifiedUpdateShopifyCheckoutLineItemVariables | UpdateShopifyCheckoutLineItemVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateShopifyCheckoutLineItemsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateShopifyCheckoutLineItemOptions>(
        inputs: (FullyQualifiedUpdateShopifyCheckoutLineItemVariables | UpdateShopifyCheckoutLineItemVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyCheckoutLineItemOptions>
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
        "bulkUpdateShopifyCheckoutLineItems",
        DefaultShopifyCheckoutLineItemSelection,
        "shopifyCheckoutLineItem",
        "shopifyCheckoutLineItems",
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
      operationName: "bulkUpdateShopifyCheckoutLineItems",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyCheckoutLineItems",
      isBulk: true,
      defaultSelection: DefaultShopifyCheckoutLineItemSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateShopifyCheckoutLineItemsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteShopifyCheckoutLineItem,
  {
    type: "action",
    operationName: "deleteShopifyCheckoutLineItem",
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
    operationName: "deleteShopifyCheckoutLineItem";
    namespace: null;
    modelApiIdentifier: "shopifyCheckoutLineItem";
    modelSelectionField: "shopifyCheckoutLineItem";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyCheckoutLineItemOptions;
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
    <Options extends DeleteShopifyCheckoutLineItemOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyCheckoutLineItemOptions>
    ): Promise<DeleteShopifyCheckoutLineItemResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteShopifyCheckoutLineItems";
    namespace: null;
    modelApiIdentifier: "shopifyCheckoutLineItem";
    modelSelectionField: "shopifyCheckoutLineItems";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyCheckoutLineItemOptions;
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
    async <Options extends DeleteShopifyCheckoutLineItemOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyCheckoutLineItemOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkDeleteShopifyCheckoutLineItems",
        null,
        "shopifyCheckoutLineItem",
        "shopifyCheckoutLineItems",
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
      operationName: "bulkDeleteShopifyCheckoutLineItems",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyCheckoutLineItems",
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
