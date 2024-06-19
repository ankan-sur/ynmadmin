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
      ShopifyMarketWebPresence,
      ShopifyMarketWebPresenceSort,
      ShopifyMarketWebPresenceFilter,
      AvailableShopifyMarketWebPresenceSelection,
      CreateShopifyMarketWebPresenceInput,
      UpdateShopifyMarketWebPresenceInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyMarketWebPresenceSelection = {
  "__typename": true,
  "alternateLocales": true,
  "createdAt": true,
  "id": true,
  "rootUrls": true,
  "subfolderSuffix": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyMarketWebPresence". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyMarketWebPresenceOrDefault<Options extends Selectable<AvailableShopifyMarketWebPresenceSelection>> = DeepFilterNever<
  Select<
    ShopifyMarketWebPresence,
    DefaultSelection<
      AvailableShopifyMarketWebPresenceSelection,
      Options,
      typeof DefaultShopifyMarketWebPresenceSelection
    >
  >>;

/** Options that can be passed to the `ShopifyMarketWebPresenceManager#findOne` method */
export interface FindOneShopifyMarketWebPresenceOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyMarketWebPresenceSelection;
};

/** Options that can be passed to the `ShopifyMarketWebPresenceManager#maybeFindOne` method */
export interface MaybeFindOneShopifyMarketWebPresenceOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyMarketWebPresenceSelection;
};

/** Options that can be passed to the `ShopifyMarketWebPresenceManager#findMany` method */
export interface FindManyShopifyMarketWebPresencesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyMarketWebPresenceSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyMarketWebPresenceSort | ShopifyMarketWebPresenceSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyMarketWebPresenceFilter | ShopifyMarketWebPresenceFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyMarketWebPresenceManager#findFirst` method */
export interface FindFirstShopifyMarketWebPresenceOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyMarketWebPresenceSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyMarketWebPresenceSort | ShopifyMarketWebPresenceSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyMarketWebPresenceFilter | ShopifyMarketWebPresenceFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyMarketWebPresenceManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyMarketWebPresenceOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyMarketWebPresenceSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyMarketWebPresenceSort | ShopifyMarketWebPresenceSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyMarketWebPresenceFilter | ShopifyMarketWebPresenceFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateShopifyMarketWebPresenceOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyMarketWebPresenceSelection;
};


export interface UpdateShopifyMarketWebPresenceOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyMarketWebPresenceSelection;
};


export interface DeleteShopifyMarketWebPresenceOptions {
};


const apiIdentifier = "shopifyMarketWebPresence";
const pluralApiIdentifier = "shopifyMarketWebPresences";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateShopifyMarketWebPresenceVariables = {
          shopifyMarketWebPresence?: CreateShopifyMarketWebPresenceInput,
      }

  /**
   * The inputs for executing create on shopifyMarketWebPresence.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateShopifyMarketWebPresenceVariables = CreateShopifyMarketWebPresenceInput;



/**
 * The return value from executing create on shopifyMarketWebPresence.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyMarketWebPresenceResult<Options extends CreateShopifyMarketWebPresenceOptions> =
  SelectedShopifyMarketWebPresenceOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyMarketWebPresenceOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createShopifyMarketWebPresence<Options extends CreateShopifyMarketWebPresenceOptions>(
  
    variables: CreateShopifyMarketWebPresenceVariables,

  options?: LimitToKnownKeys<Options, CreateShopifyMarketWebPresenceOptions>
): Promise<CreateShopifyMarketWebPresenceResult<Options>>;

// Fully qualified, nested api identifier overload
async function createShopifyMarketWebPresence<Options extends CreateShopifyMarketWebPresenceOptions>(
  
      variables: FullyQualifiedCreateShopifyMarketWebPresenceVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyMarketWebPresenceOptions>
): Promise<CreateShopifyMarketWebPresenceResult<Options>>;

// Function implementation
async function createShopifyMarketWebPresence<Options extends CreateShopifyMarketWebPresenceOptions>(
  this: ShopifyMarketWebPresenceManager,
  
      variables: CreateShopifyMarketWebPresenceVariables | FullyQualifiedCreateShopifyMarketWebPresenceVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyMarketWebPresenceOptions>
): Promise<CreateShopifyMarketWebPresenceResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedShopifyMarketWebPresenceOrDefault<Options>>(
    this,
    "createShopifyMarketWebPresence",
    DefaultShopifyMarketWebPresenceSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                    "shopifyMarketWebPresence": {
          value: newVariables.shopifyMarketWebPresence,
          required: false,
          type: "CreateShopifyMarketWebPresenceInput",
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
  export type FullyQualifiedUpdateShopifyMarketWebPresenceVariables = {
          shopifyMarketWebPresence?: UpdateShopifyMarketWebPresenceInput,
      }

  /**
   * The inputs for executing update on shopifyMarketWebPresence.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateShopifyMarketWebPresenceVariables = UpdateShopifyMarketWebPresenceInput;



/**
 * The return value from executing update on shopifyMarketWebPresence.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyMarketWebPresenceResult<Options extends UpdateShopifyMarketWebPresenceOptions> =
  SelectedShopifyMarketWebPresenceOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyMarketWebPresenceOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateShopifyMarketWebPresence<Options extends UpdateShopifyMarketWebPresenceOptions>(
  id: string,
    variables: UpdateShopifyMarketWebPresenceVariables,

  options?: LimitToKnownKeys<Options, UpdateShopifyMarketWebPresenceOptions>
): Promise<UpdateShopifyMarketWebPresenceResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateShopifyMarketWebPresence<Options extends UpdateShopifyMarketWebPresenceOptions>(
  id: string,
      variables: FullyQualifiedUpdateShopifyMarketWebPresenceVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyMarketWebPresenceOptions>
): Promise<UpdateShopifyMarketWebPresenceResult<Options>>;

// Function implementation
async function updateShopifyMarketWebPresence<Options extends UpdateShopifyMarketWebPresenceOptions>(
  this: ShopifyMarketWebPresenceManager,
  id: string,
      variables: UpdateShopifyMarketWebPresenceVariables | FullyQualifiedUpdateShopifyMarketWebPresenceVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyMarketWebPresenceOptions>
): Promise<UpdateShopifyMarketWebPresenceResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedShopifyMarketWebPresenceOrDefault<Options>>(
    this,
    "updateShopifyMarketWebPresence",
    DefaultShopifyMarketWebPresenceSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "shopifyMarketWebPresence": {
          value: newVariables.shopifyMarketWebPresence,
          required: false,
          type: "UpdateShopifyMarketWebPresenceInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on shopifyMarketWebPresence.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyMarketWebPresenceResult<Options extends DeleteShopifyMarketWebPresenceOptions> =
  void extends void ? void : GadgetRecord<SelectedShopifyMarketWebPresenceOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteShopifyMarketWebPresence<Options extends DeleteShopifyMarketWebPresenceOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyMarketWebPresenceOptions>
): Promise<DeleteShopifyMarketWebPresenceResult<Options>>;

// Function implementation
async function deleteShopifyMarketWebPresence<Options extends DeleteShopifyMarketWebPresenceOptions>(
  this: ShopifyMarketWebPresenceManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyMarketWebPresenceOptions>
): Promise<DeleteShopifyMarketWebPresenceResult<Options>> {

  return (await actionRunner<void>(
    this,
    "deleteShopifyMarketWebPresence",
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

  



/** All the actions available at the collection level and record level for "shopifyMarketWebPresence" */
export class ShopifyMarketWebPresenceManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyMarketWebPresence by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyMarketWebPresenceOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyMarketWebPresenceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyMarketWebPresenceOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyMarketWebPresence";
  modelApiIdentifier: "shopifyMarketWebPresence";
  defaultSelection: typeof DefaultShopifyMarketWebPresenceSelection;
  selectionType: AvailableShopifyMarketWebPresenceSelection;
  optionsType: FindOneShopifyMarketWebPresenceOptions;
  schemaType: Query["shopifyMarketWebPresence"];
} = Object.assign(
  async <Options extends FindOneShopifyMarketWebPresenceOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyMarketWebPresenceOptions>) => {
    return await findOneRunner<SelectedShopifyMarketWebPresenceOrDefault<Options>>(
      this,
      "shopifyMarketWebPresence",
      id,
      DefaultShopifyMarketWebPresenceSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyMarketWebPresence",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyMarketWebPresenceSelection,
  } as any
)

  
    /**
 * Finds one shopifyMarketWebPresence by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyMarketWebPresenceOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyMarketWebPresenceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyMarketWebPresenceOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyMarketWebPresence";
  modelApiIdentifier: "shopifyMarketWebPresence";
  defaultSelection: typeof DefaultShopifyMarketWebPresenceSelection;
  selectionType: AvailableShopifyMarketWebPresenceSelection;
  optionsType: MaybeFindOneShopifyMarketWebPresenceOptions;
  schemaType: Query["shopifyMarketWebPresence"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyMarketWebPresenceOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyMarketWebPresenceOptions>) => {
    const record = await findOneRunner<SelectedShopifyMarketWebPresenceOrDefault<Options>>(
      this,
      "shopifyMarketWebPresence",
      id,
      DefaultShopifyMarketWebPresenceSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyMarketWebPresence",
    modelApiIdentifier: "shopifyMarketWebPresence",
    defaultSelection: DefaultShopifyMarketWebPresenceSelection,
  } as any
)

  
    /**
 * Finds many shopifyMarketWebPresence. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyMarketWebPresencesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyMarketWebPresencesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyMarketWebPresenceOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyMarketWebPresences";
  modelApiIdentifier: "shopifyMarketWebPresence";
  defaultSelection: typeof DefaultShopifyMarketWebPresenceSelection;
  selectionType: AvailableShopifyMarketWebPresenceSelection;
  optionsType: FindManyShopifyMarketWebPresencesOptions;
  schemaType: Query["shopifyMarketWebPresence"];
} = Object.assign(
  async <Options extends FindManyShopifyMarketWebPresencesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyMarketWebPresencesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyMarketWebPresenceOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyMarketWebPresenceOrDefault<Options>>(
      this,
      "shopifyMarketWebPresences",
      DefaultShopifyMarketWebPresenceSelection,
      "shopifyMarketWebPresence",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyMarketWebPresences",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyMarketWebPresenceSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyMarketWebPresence. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyMarketWebPresenceOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyMarketWebPresenceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyMarketWebPresenceOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyMarketWebPresences";
  modelApiIdentifier: "shopifyMarketWebPresence";
  defaultSelection: typeof DefaultShopifyMarketWebPresenceSelection;
  selectionType: AvailableShopifyMarketWebPresenceSelection;
  optionsType: FindFirstShopifyMarketWebPresenceOptions;
  schemaType: Query["shopifyMarketWebPresence"];
} = Object.assign(
  async <Options extends FindFirstShopifyMarketWebPresenceOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyMarketWebPresenceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyMarketWebPresenceOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyMarketWebPresenceOrDefault<Options>>(
      this,
      "shopifyMarketWebPresences",
      DefaultShopifyMarketWebPresenceSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyMarketWebPresences",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyMarketWebPresenceSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyMarketWebPresence. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyMarketWebPresenceOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyMarketWebPresenceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyMarketWebPresenceOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyMarketWebPresences";
  modelApiIdentifier: "shopifyMarketWebPresence";
  defaultSelection: typeof DefaultShopifyMarketWebPresenceSelection;
  selectionType: AvailableShopifyMarketWebPresenceSelection;
  optionsType: MaybeFindFirstShopifyMarketWebPresenceOptions;
  schemaType: Query["shopifyMarketWebPresence"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyMarketWebPresenceOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyMarketWebPresenceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyMarketWebPresenceOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyMarketWebPresenceOrDefault<Options>>(
      this,
      "shopifyMarketWebPresences",
      DefaultShopifyMarketWebPresenceSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyMarketWebPresences",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyMarketWebPresenceSelection,
  } as any
);

  
    create = Object.assign(createShopifyMarketWebPresence,
  {
    type: "action",
    operationName: "createShopifyMarketWebPresence",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyMarketWebPresenceSelection,
    variables: {
      "shopifyMarketWebPresence": {
        required: false,
        type: "CreateShopifyMarketWebPresenceInput",
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
    operationName: "createShopifyMarketWebPresence";
    namespace: null;
    modelApiIdentifier: "shopifyMarketWebPresence";
    modelSelectionField: "shopifyMarketWebPresence";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyMarketWebPresenceSelection;
    selectionType: AvailableShopifyMarketWebPresenceSelection;
    optionsType: CreateShopifyMarketWebPresenceOptions;
    schemaType:  Query["shopifyMarketWebPresence"];

    variablesType: (

      (
        FullyQualifiedCreateShopifyMarketWebPresenceVariables          | CreateShopifyMarketWebPresenceVariables      )
    )
    // all variables are optional, so no variables can be passed at all
    | undefined
    ;
    variables: {
                    "shopifyMarketWebPresence": {
          required: false;
          type: "CreateShopifyMarketWebPresenceInput";
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
    <Options extends CreateShopifyMarketWebPresenceOptions>(
        inputs: (FullyQualifiedCreateShopifyMarketWebPresenceVariables | CreateShopifyMarketWebPresenceVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyMarketWebPresenceOptions>
    ): Promise<CreateShopifyMarketWebPresenceResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateShopifyMarketWebPresences";
    namespace: null;
    modelApiIdentifier: "shopifyMarketWebPresence";
    modelSelectionField: "shopifyMarketWebPresences";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyMarketWebPresenceSelection;
    selectionType: AvailableShopifyMarketWebPresenceSelection;
    optionsType: CreateShopifyMarketWebPresenceOptions;
    schemaType: Query["shopifyMarketWebPresence"];
    variablesType: (FullyQualifiedCreateShopifyMarketWebPresenceVariables | CreateShopifyMarketWebPresenceVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateShopifyMarketWebPresencesInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateShopifyMarketWebPresenceOptions>(
        inputs: (FullyQualifiedCreateShopifyMarketWebPresenceVariables | CreateShopifyMarketWebPresenceVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyMarketWebPresenceOptions>
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
        "bulkCreateShopifyMarketWebPresences",
        DefaultShopifyMarketWebPresenceSelection,
        "shopifyMarketWebPresence",
        "shopifyMarketWebPresences",
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
      operationName: "bulkCreateShopifyMarketWebPresences",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyMarketWebPresences",
      isBulk: true,
      defaultSelection: DefaultShopifyMarketWebPresenceSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateShopifyMarketWebPresencesInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateShopifyMarketWebPresence,
  {
    type: "action",
    operationName: "updateShopifyMarketWebPresence",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyMarketWebPresenceSelection,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopifyMarketWebPresence": {
        required: false,
        type: "UpdateShopifyMarketWebPresenceInput",
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
    operationName: "updateShopifyMarketWebPresence";
    namespace: null;
    modelApiIdentifier: "shopifyMarketWebPresence";
    modelSelectionField: "shopifyMarketWebPresence";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyMarketWebPresenceSelection;
    selectionType: AvailableShopifyMarketWebPresenceSelection;
    optionsType: UpdateShopifyMarketWebPresenceOptions;
    schemaType:  Query["shopifyMarketWebPresence"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateShopifyMarketWebPresenceVariables          | UpdateShopifyMarketWebPresenceVariables      )
    )
    ;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "shopifyMarketWebPresence": {
          required: false;
          type: "UpdateShopifyMarketWebPresenceInput";
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
    <Options extends UpdateShopifyMarketWebPresenceOptions>(
        inputs: (FullyQualifiedUpdateShopifyMarketWebPresenceVariables | UpdateShopifyMarketWebPresenceVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyMarketWebPresenceOptions>
    ): Promise<UpdateShopifyMarketWebPresenceResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateShopifyMarketWebPresences";
    namespace: null;
    modelApiIdentifier: "shopifyMarketWebPresence";
    modelSelectionField: "shopifyMarketWebPresences";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyMarketWebPresenceSelection;
    selectionType: AvailableShopifyMarketWebPresenceSelection;
    optionsType: UpdateShopifyMarketWebPresenceOptions;
    schemaType: Query["shopifyMarketWebPresence"];
    variablesType: (FullyQualifiedUpdateShopifyMarketWebPresenceVariables | UpdateShopifyMarketWebPresenceVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateShopifyMarketWebPresencesInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateShopifyMarketWebPresenceOptions>(
        inputs: (FullyQualifiedUpdateShopifyMarketWebPresenceVariables | UpdateShopifyMarketWebPresenceVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyMarketWebPresenceOptions>
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
        "bulkUpdateShopifyMarketWebPresences",
        DefaultShopifyMarketWebPresenceSelection,
        "shopifyMarketWebPresence",
        "shopifyMarketWebPresences",
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
      operationName: "bulkUpdateShopifyMarketWebPresences",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyMarketWebPresences",
      isBulk: true,
      defaultSelection: DefaultShopifyMarketWebPresenceSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateShopifyMarketWebPresencesInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteShopifyMarketWebPresence,
  {
    type: "action",
    operationName: "deleteShopifyMarketWebPresence",
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
    operationName: "deleteShopifyMarketWebPresence";
    namespace: null;
    modelApiIdentifier: "shopifyMarketWebPresence";
    modelSelectionField: "shopifyMarketWebPresence";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyMarketWebPresenceOptions;
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
    <Options extends DeleteShopifyMarketWebPresenceOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyMarketWebPresenceOptions>
    ): Promise<DeleteShopifyMarketWebPresenceResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteShopifyMarketWebPresences";
    namespace: null;
    modelApiIdentifier: "shopifyMarketWebPresence";
    modelSelectionField: "shopifyMarketWebPresences";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyMarketWebPresenceOptions;
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
    async <Options extends DeleteShopifyMarketWebPresenceOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyMarketWebPresenceOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkDeleteShopifyMarketWebPresences",
        null,
        "shopifyMarketWebPresence",
        "shopifyMarketWebPresences",
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
      operationName: "bulkDeleteShopifyMarketWebPresences",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyMarketWebPresences",
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
