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
      ShopifyRefundDuty,
      ShopifyRefundDutySort,
      ShopifyRefundDutyFilter,
      AvailableShopifyRefundDutySelection,
      CreateShopifyRefundDutyInput,
      UpdateShopifyRefundDutyInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyRefundDutySelection = {
  "__typename": true,
  "amountSet": true,
  "createdAt": true,
  "id": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyRefundDuty". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyRefundDutyOrDefault<Options extends Selectable<AvailableShopifyRefundDutySelection>> = DeepFilterNever<
  Select<
    ShopifyRefundDuty,
    DefaultSelection<
      AvailableShopifyRefundDutySelection,
      Options,
      typeof DefaultShopifyRefundDutySelection
    >
  >>;

/** Options that can be passed to the `ShopifyRefundDutyManager#findOne` method */
export interface FindOneShopifyRefundDutyOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyRefundDutySelection;
};

/** Options that can be passed to the `ShopifyRefundDutyManager#maybeFindOne` method */
export interface MaybeFindOneShopifyRefundDutyOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyRefundDutySelection;
};

/** Options that can be passed to the `ShopifyRefundDutyManager#findMany` method */
export interface FindManyShopifyRefundDutiesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyRefundDutySelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyRefundDutySort | ShopifyRefundDutySort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyRefundDutyFilter | ShopifyRefundDutyFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyRefundDutyManager#findFirst` method */
export interface FindFirstShopifyRefundDutyOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyRefundDutySelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyRefundDutySort | ShopifyRefundDutySort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyRefundDutyFilter | ShopifyRefundDutyFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyRefundDutyManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyRefundDutyOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyRefundDutySelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyRefundDutySort | ShopifyRefundDutySort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyRefundDutyFilter | ShopifyRefundDutyFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateShopifyRefundDutyOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyRefundDutySelection;
};


export interface UpdateShopifyRefundDutyOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyRefundDutySelection;
};


export interface DeleteShopifyRefundDutyOptions {
};


const apiIdentifier = "shopifyRefundDuty";
const pluralApiIdentifier = "shopifyRefundDuties";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateShopifyRefundDutyVariables = {
          shopifyRefundDuty?: CreateShopifyRefundDutyInput,
      }

  /**
   * The inputs for executing create on shopifyRefundDuty.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateShopifyRefundDutyVariables = CreateShopifyRefundDutyInput;



/**
 * The return value from executing create on shopifyRefundDuty.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyRefundDutyResult<Options extends CreateShopifyRefundDutyOptions> =
  SelectedShopifyRefundDutyOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyRefundDutyOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createShopifyRefundDuty<Options extends CreateShopifyRefundDutyOptions>(
  
    variables: CreateShopifyRefundDutyVariables,

  options?: LimitToKnownKeys<Options, CreateShopifyRefundDutyOptions>
): Promise<CreateShopifyRefundDutyResult<Options>>;

// Fully qualified, nested api identifier overload
async function createShopifyRefundDuty<Options extends CreateShopifyRefundDutyOptions>(
  
      variables: FullyQualifiedCreateShopifyRefundDutyVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyRefundDutyOptions>
): Promise<CreateShopifyRefundDutyResult<Options>>;

// Function implementation
async function createShopifyRefundDuty<Options extends CreateShopifyRefundDutyOptions>(
  this: ShopifyRefundDutyManager,
  
      variables: CreateShopifyRefundDutyVariables | FullyQualifiedCreateShopifyRefundDutyVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyRefundDutyOptions>
): Promise<CreateShopifyRefundDutyResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedShopifyRefundDutyOrDefault<Options>>(
    this,
    "createShopifyRefundDuty",
    DefaultShopifyRefundDutySelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                    "shopifyRefundDuty": {
          value: newVariables.shopifyRefundDuty,
          required: false,
          type: "CreateShopifyRefundDutyInput",
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
  export type FullyQualifiedUpdateShopifyRefundDutyVariables = {
          shopifyRefundDuty?: UpdateShopifyRefundDutyInput,
      }

  /**
   * The inputs for executing update on shopifyRefundDuty.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateShopifyRefundDutyVariables = UpdateShopifyRefundDutyInput;



/**
 * The return value from executing update on shopifyRefundDuty.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyRefundDutyResult<Options extends UpdateShopifyRefundDutyOptions> =
  SelectedShopifyRefundDutyOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyRefundDutyOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateShopifyRefundDuty<Options extends UpdateShopifyRefundDutyOptions>(
  id: string,
    variables: UpdateShopifyRefundDutyVariables,

  options?: LimitToKnownKeys<Options, UpdateShopifyRefundDutyOptions>
): Promise<UpdateShopifyRefundDutyResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateShopifyRefundDuty<Options extends UpdateShopifyRefundDutyOptions>(
  id: string,
      variables: FullyQualifiedUpdateShopifyRefundDutyVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyRefundDutyOptions>
): Promise<UpdateShopifyRefundDutyResult<Options>>;

// Function implementation
async function updateShopifyRefundDuty<Options extends UpdateShopifyRefundDutyOptions>(
  this: ShopifyRefundDutyManager,
  id: string,
      variables: UpdateShopifyRefundDutyVariables | FullyQualifiedUpdateShopifyRefundDutyVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyRefundDutyOptions>
): Promise<UpdateShopifyRefundDutyResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedShopifyRefundDutyOrDefault<Options>>(
    this,
    "updateShopifyRefundDuty",
    DefaultShopifyRefundDutySelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "shopifyRefundDuty": {
          value: newVariables.shopifyRefundDuty,
          required: false,
          type: "UpdateShopifyRefundDutyInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on shopifyRefundDuty.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyRefundDutyResult<Options extends DeleteShopifyRefundDutyOptions> =
  void extends void ? void : GadgetRecord<SelectedShopifyRefundDutyOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteShopifyRefundDuty<Options extends DeleteShopifyRefundDutyOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyRefundDutyOptions>
): Promise<DeleteShopifyRefundDutyResult<Options>>;

// Function implementation
async function deleteShopifyRefundDuty<Options extends DeleteShopifyRefundDutyOptions>(
  this: ShopifyRefundDutyManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyRefundDutyOptions>
): Promise<DeleteShopifyRefundDutyResult<Options>> {

  return (await actionRunner<void>(
    this,
    "deleteShopifyRefundDuty",
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

  



/** All the actions available at the collection level and record level for "shopifyRefundDuty" */
export class ShopifyRefundDutyManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyRefundDuty by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyRefundDutyOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyRefundDutyOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyRefundDutyOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyRefundDuty";
  modelApiIdentifier: "shopifyRefundDuty";
  defaultSelection: typeof DefaultShopifyRefundDutySelection;
  selectionType: AvailableShopifyRefundDutySelection;
  optionsType: FindOneShopifyRefundDutyOptions;
  schemaType: Query["shopifyRefundDuty"];
} = Object.assign(
  async <Options extends FindOneShopifyRefundDutyOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyRefundDutyOptions>) => {
    return await findOneRunner<SelectedShopifyRefundDutyOrDefault<Options>>(
      this,
      "shopifyRefundDuty",
      id,
      DefaultShopifyRefundDutySelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyRefundDuty",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyRefundDutySelection,
  } as any
)

  
    /**
 * Finds one shopifyRefundDuty by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyRefundDutyOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyRefundDutyOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyRefundDutyOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyRefundDuty";
  modelApiIdentifier: "shopifyRefundDuty";
  defaultSelection: typeof DefaultShopifyRefundDutySelection;
  selectionType: AvailableShopifyRefundDutySelection;
  optionsType: MaybeFindOneShopifyRefundDutyOptions;
  schemaType: Query["shopifyRefundDuty"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyRefundDutyOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyRefundDutyOptions>) => {
    const record = await findOneRunner<SelectedShopifyRefundDutyOrDefault<Options>>(
      this,
      "shopifyRefundDuty",
      id,
      DefaultShopifyRefundDutySelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyRefundDuty",
    modelApiIdentifier: "shopifyRefundDuty",
    defaultSelection: DefaultShopifyRefundDutySelection,
  } as any
)

  
    /**
 * Finds many shopifyRefundDuty. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyRefundDutiesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyRefundDutiesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyRefundDutyOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyRefundDuties";
  modelApiIdentifier: "shopifyRefundDuty";
  defaultSelection: typeof DefaultShopifyRefundDutySelection;
  selectionType: AvailableShopifyRefundDutySelection;
  optionsType: FindManyShopifyRefundDutiesOptions;
  schemaType: Query["shopifyRefundDuty"];
} = Object.assign(
  async <Options extends FindManyShopifyRefundDutiesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyRefundDutiesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyRefundDutyOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyRefundDutyOrDefault<Options>>(
      this,
      "shopifyRefundDuties",
      DefaultShopifyRefundDutySelection,
      "shopifyRefundDuty",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyRefundDuties",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyRefundDutySelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyRefundDuty. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyRefundDutyOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyRefundDutyOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyRefundDutyOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyRefundDuties";
  modelApiIdentifier: "shopifyRefundDuty";
  defaultSelection: typeof DefaultShopifyRefundDutySelection;
  selectionType: AvailableShopifyRefundDutySelection;
  optionsType: FindFirstShopifyRefundDutyOptions;
  schemaType: Query["shopifyRefundDuty"];
} = Object.assign(
  async <Options extends FindFirstShopifyRefundDutyOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyRefundDutyOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyRefundDutyOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyRefundDutyOrDefault<Options>>(
      this,
      "shopifyRefundDuties",
      DefaultShopifyRefundDutySelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyRefundDuties",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyRefundDutySelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyRefundDuty. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyRefundDutyOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyRefundDutyOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyRefundDutyOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyRefundDuties";
  modelApiIdentifier: "shopifyRefundDuty";
  defaultSelection: typeof DefaultShopifyRefundDutySelection;
  selectionType: AvailableShopifyRefundDutySelection;
  optionsType: MaybeFindFirstShopifyRefundDutyOptions;
  schemaType: Query["shopifyRefundDuty"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyRefundDutyOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyRefundDutyOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyRefundDutyOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyRefundDutyOrDefault<Options>>(
      this,
      "shopifyRefundDuties",
      DefaultShopifyRefundDutySelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyRefundDuties",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyRefundDutySelection,
  } as any
);

  
    /**
  * Finds one shopifyRefundDuty by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneShopifyRefundDutyOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyRefundDutyOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyRefundDutyOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "shopifyRefundDuties";
  modelApiIdentifier: "shopifyRefundDuty";
  defaultSelection: typeof DefaultShopifyRefundDutySelection;
  selectionType: AvailableShopifyRefundDutySelection;
  optionsType: FindOneShopifyRefundDutyOptions;
  schemaType: Query["shopifyRefundDuty"];
} = Object.assign(
  async <Options extends FindOneShopifyRefundDutyOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyRefundDutyOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedShopifyRefundDutyOrDefault<Options>
      > & SelectedShopifyRefundDutyOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedShopifyRefundDutyOrDefault<Options>>(
      this,
      "shopifyRefundDuties",
      "id",
      value,
      DefaultShopifyRefundDutySelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyRefundDuties",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyRefundDutySelection,
  } as any
)

  
    create = Object.assign(createShopifyRefundDuty,
  {
    type: "action",
    operationName: "createShopifyRefundDuty",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyRefundDutySelection,
    variables: {
      "shopifyRefundDuty": {
        required: false,
        type: "CreateShopifyRefundDutyInput",
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
    operationName: "createShopifyRefundDuty";
    namespace: null;
    modelApiIdentifier: "shopifyRefundDuty";
    modelSelectionField: "shopifyRefundDuty";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyRefundDutySelection;
    selectionType: AvailableShopifyRefundDutySelection;
    optionsType: CreateShopifyRefundDutyOptions;
    schemaType:  Query["shopifyRefundDuty"];

    variablesType: (

      (
        FullyQualifiedCreateShopifyRefundDutyVariables          | CreateShopifyRefundDutyVariables      )
    )
    // all variables are optional, so no variables can be passed at all
    | undefined
    ;
    variables: {
                    "shopifyRefundDuty": {
          required: false;
          type: "CreateShopifyRefundDutyInput";
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
    <Options extends CreateShopifyRefundDutyOptions>(
        inputs: (FullyQualifiedCreateShopifyRefundDutyVariables | CreateShopifyRefundDutyVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyRefundDutyOptions>
    ): Promise<CreateShopifyRefundDutyResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateShopifyRefundDuties";
    namespace: null;
    modelApiIdentifier: "shopifyRefundDuty";
    modelSelectionField: "shopifyRefundDuties";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyRefundDutySelection;
    selectionType: AvailableShopifyRefundDutySelection;
    optionsType: CreateShopifyRefundDutyOptions;
    schemaType: Query["shopifyRefundDuty"];
    variablesType: (FullyQualifiedCreateShopifyRefundDutyVariables | CreateShopifyRefundDutyVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateShopifyRefundDutiesInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateShopifyRefundDutyOptions>(
        inputs: (FullyQualifiedCreateShopifyRefundDutyVariables | CreateShopifyRefundDutyVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyRefundDutyOptions>
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
        "bulkCreateShopifyRefundDuties",
        DefaultShopifyRefundDutySelection,
        "shopifyRefundDuty",
        "shopifyRefundDuties",
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
      operationName: "bulkCreateShopifyRefundDuties",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyRefundDuties",
      isBulk: true,
      defaultSelection: DefaultShopifyRefundDutySelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateShopifyRefundDutiesInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateShopifyRefundDuty,
  {
    type: "action",
    operationName: "updateShopifyRefundDuty",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyRefundDutySelection,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopifyRefundDuty": {
        required: false,
        type: "UpdateShopifyRefundDutyInput",
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
    operationName: "updateShopifyRefundDuty";
    namespace: null;
    modelApiIdentifier: "shopifyRefundDuty";
    modelSelectionField: "shopifyRefundDuty";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyRefundDutySelection;
    selectionType: AvailableShopifyRefundDutySelection;
    optionsType: UpdateShopifyRefundDutyOptions;
    schemaType:  Query["shopifyRefundDuty"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateShopifyRefundDutyVariables          | UpdateShopifyRefundDutyVariables      )
    )
    ;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "shopifyRefundDuty": {
          required: false;
          type: "UpdateShopifyRefundDutyInput";
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
    <Options extends UpdateShopifyRefundDutyOptions>(
        inputs: (FullyQualifiedUpdateShopifyRefundDutyVariables | UpdateShopifyRefundDutyVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyRefundDutyOptions>
    ): Promise<UpdateShopifyRefundDutyResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateShopifyRefundDuties";
    namespace: null;
    modelApiIdentifier: "shopifyRefundDuty";
    modelSelectionField: "shopifyRefundDuties";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyRefundDutySelection;
    selectionType: AvailableShopifyRefundDutySelection;
    optionsType: UpdateShopifyRefundDutyOptions;
    schemaType: Query["shopifyRefundDuty"];
    variablesType: (FullyQualifiedUpdateShopifyRefundDutyVariables | UpdateShopifyRefundDutyVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateShopifyRefundDutiesInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateShopifyRefundDutyOptions>(
        inputs: (FullyQualifiedUpdateShopifyRefundDutyVariables | UpdateShopifyRefundDutyVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyRefundDutyOptions>
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
        "bulkUpdateShopifyRefundDuties",
        DefaultShopifyRefundDutySelection,
        "shopifyRefundDuty",
        "shopifyRefundDuties",
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
      operationName: "bulkUpdateShopifyRefundDuties",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyRefundDuties",
      isBulk: true,
      defaultSelection: DefaultShopifyRefundDutySelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateShopifyRefundDutiesInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteShopifyRefundDuty,
  {
    type: "action",
    operationName: "deleteShopifyRefundDuty",
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
    operationName: "deleteShopifyRefundDuty";
    namespace: null;
    modelApiIdentifier: "shopifyRefundDuty";
    modelSelectionField: "shopifyRefundDuty";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyRefundDutyOptions;
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
    <Options extends DeleteShopifyRefundDutyOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyRefundDutyOptions>
    ): Promise<DeleteShopifyRefundDutyResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteShopifyRefundDuties";
    namespace: null;
    modelApiIdentifier: "shopifyRefundDuty";
    modelSelectionField: "shopifyRefundDuties";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyRefundDutyOptions;
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
    async <Options extends DeleteShopifyRefundDutyOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyRefundDutyOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkDeleteShopifyRefundDuties",
        null,
        "shopifyRefundDuty",
        "shopifyRefundDuties",
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
      operationName: "bulkDeleteShopifyRefundDuties",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyRefundDuties",
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
