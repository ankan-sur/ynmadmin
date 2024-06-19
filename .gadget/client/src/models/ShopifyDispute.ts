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
      ShopifyDispute,
      ShopifyDisputeSort,
      ShopifyDisputeFilter,
      AvailableShopifyDisputeSelection,
      CreateShopifyDisputeInput,
      UpdateShopifyDisputeInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyDisputeSelection = {
  "__typename": true,
  "amount": true,
  "createdAt": true,
  "currency": true,
  "evidenceDueBy": true,
  "evidenceSentOn": true,
  "finalizedOn": true,
  "id": true,
  "networkReasonCode": true,
  "reason": true,
  "status": true,
  "type": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyDispute". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyDisputeOrDefault<Options extends Selectable<AvailableShopifyDisputeSelection>> = DeepFilterNever<
  Select<
    ShopifyDispute,
    DefaultSelection<
      AvailableShopifyDisputeSelection,
      Options,
      typeof DefaultShopifyDisputeSelection
    >
  >>;

/** Options that can be passed to the `ShopifyDisputeManager#findOne` method */
export interface FindOneShopifyDisputeOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDisputeSelection;
};

/** Options that can be passed to the `ShopifyDisputeManager#maybeFindOne` method */
export interface MaybeFindOneShopifyDisputeOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDisputeSelection;
};

/** Options that can be passed to the `ShopifyDisputeManager#findMany` method */
export interface FindManyShopifyDisputesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDisputeSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDisputeSort | ShopifyDisputeSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDisputeFilter | ShopifyDisputeFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyDisputeManager#findFirst` method */
export interface FindFirstShopifyDisputeOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDisputeSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDisputeSort | ShopifyDisputeSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDisputeFilter | ShopifyDisputeFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyDisputeManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyDisputeOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDisputeSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDisputeSort | ShopifyDisputeSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDisputeFilter | ShopifyDisputeFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateShopifyDisputeOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDisputeSelection;
};


export interface UpdateShopifyDisputeOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDisputeSelection;
};


export interface DeleteShopifyDisputeOptions {
};


const apiIdentifier = "shopifyDispute";
const pluralApiIdentifier = "shopifyDisputes";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateShopifyDisputeVariables = {
          shopifyDispute?: CreateShopifyDisputeInput,
      }

  /**
   * The inputs for executing create on shopifyDispute.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateShopifyDisputeVariables = CreateShopifyDisputeInput;



/**
 * The return value from executing create on shopifyDispute.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyDisputeResult<Options extends CreateShopifyDisputeOptions> =
  SelectedShopifyDisputeOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyDisputeOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createShopifyDispute<Options extends CreateShopifyDisputeOptions>(
  
    variables: CreateShopifyDisputeVariables,

  options?: LimitToKnownKeys<Options, CreateShopifyDisputeOptions>
): Promise<CreateShopifyDisputeResult<Options>>;

// Fully qualified, nested api identifier overload
async function createShopifyDispute<Options extends CreateShopifyDisputeOptions>(
  
      variables: FullyQualifiedCreateShopifyDisputeVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyDisputeOptions>
): Promise<CreateShopifyDisputeResult<Options>>;

// Function implementation
async function createShopifyDispute<Options extends CreateShopifyDisputeOptions>(
  this: ShopifyDisputeManager,
  
      variables: CreateShopifyDisputeVariables | FullyQualifiedCreateShopifyDisputeVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyDisputeOptions>
): Promise<CreateShopifyDisputeResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedShopifyDisputeOrDefault<Options>>(
    this,
    "createShopifyDispute",
    DefaultShopifyDisputeSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                    "shopifyDispute": {
          value: newVariables.shopifyDispute,
          required: false,
          type: "CreateShopifyDisputeInput",
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
  export type FullyQualifiedUpdateShopifyDisputeVariables = {
          shopifyDispute?: UpdateShopifyDisputeInput,
      }

  /**
   * The inputs for executing update on shopifyDispute.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateShopifyDisputeVariables = UpdateShopifyDisputeInput;



/**
 * The return value from executing update on shopifyDispute.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyDisputeResult<Options extends UpdateShopifyDisputeOptions> =
  SelectedShopifyDisputeOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyDisputeOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateShopifyDispute<Options extends UpdateShopifyDisputeOptions>(
  id: string,
    variables: UpdateShopifyDisputeVariables,

  options?: LimitToKnownKeys<Options, UpdateShopifyDisputeOptions>
): Promise<UpdateShopifyDisputeResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateShopifyDispute<Options extends UpdateShopifyDisputeOptions>(
  id: string,
      variables: FullyQualifiedUpdateShopifyDisputeVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyDisputeOptions>
): Promise<UpdateShopifyDisputeResult<Options>>;

// Function implementation
async function updateShopifyDispute<Options extends UpdateShopifyDisputeOptions>(
  this: ShopifyDisputeManager,
  id: string,
      variables: UpdateShopifyDisputeVariables | FullyQualifiedUpdateShopifyDisputeVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyDisputeOptions>
): Promise<UpdateShopifyDisputeResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedShopifyDisputeOrDefault<Options>>(
    this,
    "updateShopifyDispute",
    DefaultShopifyDisputeSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "shopifyDispute": {
          value: newVariables.shopifyDispute,
          required: false,
          type: "UpdateShopifyDisputeInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on shopifyDispute.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyDisputeResult<Options extends DeleteShopifyDisputeOptions> =
  void extends void ? void : GadgetRecord<SelectedShopifyDisputeOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteShopifyDispute<Options extends DeleteShopifyDisputeOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyDisputeOptions>
): Promise<DeleteShopifyDisputeResult<Options>>;

// Function implementation
async function deleteShopifyDispute<Options extends DeleteShopifyDisputeOptions>(
  this: ShopifyDisputeManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyDisputeOptions>
): Promise<DeleteShopifyDisputeResult<Options>> {

  return (await actionRunner<void>(
    this,
    "deleteShopifyDispute",
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

  



/** All the actions available at the collection level and record level for "shopifyDispute" */
export class ShopifyDisputeManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyDispute by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyDisputeOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyDisputeOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDisputeOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyDispute";
  modelApiIdentifier: "shopifyDispute";
  defaultSelection: typeof DefaultShopifyDisputeSelection;
  selectionType: AvailableShopifyDisputeSelection;
  optionsType: FindOneShopifyDisputeOptions;
  schemaType: Query["shopifyDispute"];
} = Object.assign(
  async <Options extends FindOneShopifyDisputeOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyDisputeOptions>) => {
    return await findOneRunner<SelectedShopifyDisputeOrDefault<Options>>(
      this,
      "shopifyDispute",
      id,
      DefaultShopifyDisputeSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyDispute",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDisputeSelection,
  } as any
)

  
    /**
 * Finds one shopifyDispute by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyDisputeOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyDisputeOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDisputeOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyDispute";
  modelApiIdentifier: "shopifyDispute";
  defaultSelection: typeof DefaultShopifyDisputeSelection;
  selectionType: AvailableShopifyDisputeSelection;
  optionsType: MaybeFindOneShopifyDisputeOptions;
  schemaType: Query["shopifyDispute"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyDisputeOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyDisputeOptions>) => {
    const record = await findOneRunner<SelectedShopifyDisputeOrDefault<Options>>(
      this,
      "shopifyDispute",
      id,
      DefaultShopifyDisputeSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyDispute",
    modelApiIdentifier: "shopifyDispute",
    defaultSelection: DefaultShopifyDisputeSelection,
  } as any
)

  
    /**
 * Finds many shopifyDispute. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyDisputesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyDisputesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyDisputeOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyDisputes";
  modelApiIdentifier: "shopifyDispute";
  defaultSelection: typeof DefaultShopifyDisputeSelection;
  selectionType: AvailableShopifyDisputeSelection;
  optionsType: FindManyShopifyDisputesOptions;
  schemaType: Query["shopifyDispute"];
} = Object.assign(
  async <Options extends FindManyShopifyDisputesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyDisputesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyDisputeOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyDisputeOrDefault<Options>>(
      this,
      "shopifyDisputes",
      DefaultShopifyDisputeSelection,
      "shopifyDispute",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyDisputes",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDisputeSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyDispute. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyDisputeOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyDisputeOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDisputeOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyDisputes";
  modelApiIdentifier: "shopifyDispute";
  defaultSelection: typeof DefaultShopifyDisputeSelection;
  selectionType: AvailableShopifyDisputeSelection;
  optionsType: FindFirstShopifyDisputeOptions;
  schemaType: Query["shopifyDispute"];
} = Object.assign(
  async <Options extends FindFirstShopifyDisputeOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyDisputeOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDisputeOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyDisputeOrDefault<Options>>(
      this,
      "shopifyDisputes",
      DefaultShopifyDisputeSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyDisputes",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDisputeSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyDispute. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyDisputeOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyDisputeOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDisputeOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyDisputes";
  modelApiIdentifier: "shopifyDispute";
  defaultSelection: typeof DefaultShopifyDisputeSelection;
  selectionType: AvailableShopifyDisputeSelection;
  optionsType: MaybeFindFirstShopifyDisputeOptions;
  schemaType: Query["shopifyDispute"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyDisputeOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyDisputeOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDisputeOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyDisputeOrDefault<Options>>(
      this,
      "shopifyDisputes",
      DefaultShopifyDisputeSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyDisputes",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDisputeSelection,
  } as any
);

  
    create = Object.assign(createShopifyDispute,
  {
    type: "action",
    operationName: "createShopifyDispute",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyDisputeSelection,
    variables: {
      "shopifyDispute": {
        required: false,
        type: "CreateShopifyDisputeInput",
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
    operationName: "createShopifyDispute";
    namespace: null;
    modelApiIdentifier: "shopifyDispute";
    modelSelectionField: "shopifyDispute";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyDisputeSelection;
    selectionType: AvailableShopifyDisputeSelection;
    optionsType: CreateShopifyDisputeOptions;
    schemaType:  Query["shopifyDispute"];

    variablesType: (

      (
        FullyQualifiedCreateShopifyDisputeVariables          | CreateShopifyDisputeVariables      )
    )
    // all variables are optional, so no variables can be passed at all
    | undefined
    ;
    variables: {
                    "shopifyDispute": {
          required: false;
          type: "CreateShopifyDisputeInput";
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
    <Options extends CreateShopifyDisputeOptions>(
        inputs: (FullyQualifiedCreateShopifyDisputeVariables | CreateShopifyDisputeVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyDisputeOptions>
    ): Promise<CreateShopifyDisputeResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateShopifyDisputes";
    namespace: null;
    modelApiIdentifier: "shopifyDispute";
    modelSelectionField: "shopifyDisputes";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyDisputeSelection;
    selectionType: AvailableShopifyDisputeSelection;
    optionsType: CreateShopifyDisputeOptions;
    schemaType: Query["shopifyDispute"];
    variablesType: (FullyQualifiedCreateShopifyDisputeVariables | CreateShopifyDisputeVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateShopifyDisputesInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateShopifyDisputeOptions>(
        inputs: (FullyQualifiedCreateShopifyDisputeVariables | CreateShopifyDisputeVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyDisputeOptions>
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
        "bulkCreateShopifyDisputes",
        DefaultShopifyDisputeSelection,
        "shopifyDispute",
        "shopifyDisputes",
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
      operationName: "bulkCreateShopifyDisputes",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyDisputes",
      isBulk: true,
      defaultSelection: DefaultShopifyDisputeSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateShopifyDisputesInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateShopifyDispute,
  {
    type: "action",
    operationName: "updateShopifyDispute",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyDisputeSelection,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopifyDispute": {
        required: false,
        type: "UpdateShopifyDisputeInput",
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
    operationName: "updateShopifyDispute";
    namespace: null;
    modelApiIdentifier: "shopifyDispute";
    modelSelectionField: "shopifyDispute";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyDisputeSelection;
    selectionType: AvailableShopifyDisputeSelection;
    optionsType: UpdateShopifyDisputeOptions;
    schemaType:  Query["shopifyDispute"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateShopifyDisputeVariables          | UpdateShopifyDisputeVariables      )
    )
    ;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "shopifyDispute": {
          required: false;
          type: "UpdateShopifyDisputeInput";
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
    <Options extends UpdateShopifyDisputeOptions>(
        inputs: (FullyQualifiedUpdateShopifyDisputeVariables | UpdateShopifyDisputeVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyDisputeOptions>
    ): Promise<UpdateShopifyDisputeResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateShopifyDisputes";
    namespace: null;
    modelApiIdentifier: "shopifyDispute";
    modelSelectionField: "shopifyDisputes";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyDisputeSelection;
    selectionType: AvailableShopifyDisputeSelection;
    optionsType: UpdateShopifyDisputeOptions;
    schemaType: Query["shopifyDispute"];
    variablesType: (FullyQualifiedUpdateShopifyDisputeVariables | UpdateShopifyDisputeVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateShopifyDisputesInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateShopifyDisputeOptions>(
        inputs: (FullyQualifiedUpdateShopifyDisputeVariables | UpdateShopifyDisputeVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyDisputeOptions>
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
        "bulkUpdateShopifyDisputes",
        DefaultShopifyDisputeSelection,
        "shopifyDispute",
        "shopifyDisputes",
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
      operationName: "bulkUpdateShopifyDisputes",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyDisputes",
      isBulk: true,
      defaultSelection: DefaultShopifyDisputeSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateShopifyDisputesInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteShopifyDispute,
  {
    type: "action",
    operationName: "deleteShopifyDispute",
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
    operationName: "deleteShopifyDispute";
    namespace: null;
    modelApiIdentifier: "shopifyDispute";
    modelSelectionField: "shopifyDispute";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyDisputeOptions;
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
    <Options extends DeleteShopifyDisputeOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyDisputeOptions>
    ): Promise<DeleteShopifyDisputeResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteShopifyDisputes";
    namespace: null;
    modelApiIdentifier: "shopifyDispute";
    modelSelectionField: "shopifyDisputes";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyDisputeOptions;
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
    async <Options extends DeleteShopifyDisputeOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyDisputeOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkDeleteShopifyDisputes",
        null,
        "shopifyDispute",
        "shopifyDisputes",
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
      operationName: "bulkDeleteShopifyDisputes",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyDisputes",
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
