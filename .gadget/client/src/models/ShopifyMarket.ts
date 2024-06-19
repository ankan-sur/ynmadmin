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
      ShopifyMarket,
      ShopifyMarketSort,
      ShopifyMarketFilter,
      AvailableShopifyMarketSelection,
      CreateShopifyMarketInput,
      UpdateShopifyMarketInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyMarketSelection = {
  "__typename": true,
  "createdAt": true,
  "currencySettings": true,
  "enabled": true,
  "id": true,
  "name": true,
  "primary": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyMarket". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyMarketOrDefault<Options extends Selectable<AvailableShopifyMarketSelection>> = DeepFilterNever<
  Select<
    ShopifyMarket,
    DefaultSelection<
      AvailableShopifyMarketSelection,
      Options,
      typeof DefaultShopifyMarketSelection
    >
  >>;

/** Options that can be passed to the `ShopifyMarketManager#findOne` method */
export interface FindOneShopifyMarketOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyMarketSelection;
};

/** Options that can be passed to the `ShopifyMarketManager#maybeFindOne` method */
export interface MaybeFindOneShopifyMarketOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyMarketSelection;
};

/** Options that can be passed to the `ShopifyMarketManager#findMany` method */
export interface FindManyShopifyMarketsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyMarketSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyMarketSort | ShopifyMarketSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyMarketFilter | ShopifyMarketFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyMarketManager#findFirst` method */
export interface FindFirstShopifyMarketOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyMarketSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyMarketSort | ShopifyMarketSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyMarketFilter | ShopifyMarketFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyMarketManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyMarketOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyMarketSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyMarketSort | ShopifyMarketSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyMarketFilter | ShopifyMarketFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateShopifyMarketOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyMarketSelection;
};


export interface UpdateShopifyMarketOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyMarketSelection;
};


export interface DeleteShopifyMarketOptions {
};


const apiIdentifier = "shopifyMarket";
const pluralApiIdentifier = "shopifyMarkets";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateShopifyMarketVariables = {
          shopifyMarket?: CreateShopifyMarketInput,
      }

  /**
   * The inputs for executing create on shopifyMarket.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateShopifyMarketVariables = CreateShopifyMarketInput;



/**
 * The return value from executing create on shopifyMarket.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyMarketResult<Options extends CreateShopifyMarketOptions> =
  SelectedShopifyMarketOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyMarketOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createShopifyMarket<Options extends CreateShopifyMarketOptions>(
  
    variables: CreateShopifyMarketVariables,

  options?: LimitToKnownKeys<Options, CreateShopifyMarketOptions>
): Promise<CreateShopifyMarketResult<Options>>;

// Fully qualified, nested api identifier overload
async function createShopifyMarket<Options extends CreateShopifyMarketOptions>(
  
      variables: FullyQualifiedCreateShopifyMarketVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyMarketOptions>
): Promise<CreateShopifyMarketResult<Options>>;

// Function implementation
async function createShopifyMarket<Options extends CreateShopifyMarketOptions>(
  this: ShopifyMarketManager,
  
      variables: CreateShopifyMarketVariables | FullyQualifiedCreateShopifyMarketVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyMarketOptions>
): Promise<CreateShopifyMarketResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedShopifyMarketOrDefault<Options>>(
    this,
    "createShopifyMarket",
    DefaultShopifyMarketSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                    "shopifyMarket": {
          value: newVariables.shopifyMarket,
          required: false,
          type: "CreateShopifyMarketInput",
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
  export type FullyQualifiedUpdateShopifyMarketVariables = {
          shopifyMarket?: UpdateShopifyMarketInput,
      }

  /**
   * The inputs for executing update on shopifyMarket.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateShopifyMarketVariables = UpdateShopifyMarketInput;



/**
 * The return value from executing update on shopifyMarket.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyMarketResult<Options extends UpdateShopifyMarketOptions> =
  SelectedShopifyMarketOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyMarketOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateShopifyMarket<Options extends UpdateShopifyMarketOptions>(
  id: string,
    variables: UpdateShopifyMarketVariables,

  options?: LimitToKnownKeys<Options, UpdateShopifyMarketOptions>
): Promise<UpdateShopifyMarketResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateShopifyMarket<Options extends UpdateShopifyMarketOptions>(
  id: string,
      variables: FullyQualifiedUpdateShopifyMarketVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyMarketOptions>
): Promise<UpdateShopifyMarketResult<Options>>;

// Function implementation
async function updateShopifyMarket<Options extends UpdateShopifyMarketOptions>(
  this: ShopifyMarketManager,
  id: string,
      variables: UpdateShopifyMarketVariables | FullyQualifiedUpdateShopifyMarketVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyMarketOptions>
): Promise<UpdateShopifyMarketResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedShopifyMarketOrDefault<Options>>(
    this,
    "updateShopifyMarket",
    DefaultShopifyMarketSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "shopifyMarket": {
          value: newVariables.shopifyMarket,
          required: false,
          type: "UpdateShopifyMarketInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on shopifyMarket.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyMarketResult<Options extends DeleteShopifyMarketOptions> =
  void extends void ? void : GadgetRecord<SelectedShopifyMarketOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteShopifyMarket<Options extends DeleteShopifyMarketOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyMarketOptions>
): Promise<DeleteShopifyMarketResult<Options>>;

// Function implementation
async function deleteShopifyMarket<Options extends DeleteShopifyMarketOptions>(
  this: ShopifyMarketManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyMarketOptions>
): Promise<DeleteShopifyMarketResult<Options>> {

  return (await actionRunner<void>(
    this,
    "deleteShopifyMarket",
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

  



/** All the actions available at the collection level and record level for "shopifyMarket" */
export class ShopifyMarketManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyMarket by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyMarketOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyMarketOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyMarketOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyMarket";
  modelApiIdentifier: "shopifyMarket";
  defaultSelection: typeof DefaultShopifyMarketSelection;
  selectionType: AvailableShopifyMarketSelection;
  optionsType: FindOneShopifyMarketOptions;
  schemaType: Query["shopifyMarket"];
} = Object.assign(
  async <Options extends FindOneShopifyMarketOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyMarketOptions>) => {
    return await findOneRunner<SelectedShopifyMarketOrDefault<Options>>(
      this,
      "shopifyMarket",
      id,
      DefaultShopifyMarketSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyMarket",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyMarketSelection,
  } as any
)

  
    /**
 * Finds one shopifyMarket by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyMarketOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyMarketOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyMarketOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyMarket";
  modelApiIdentifier: "shopifyMarket";
  defaultSelection: typeof DefaultShopifyMarketSelection;
  selectionType: AvailableShopifyMarketSelection;
  optionsType: MaybeFindOneShopifyMarketOptions;
  schemaType: Query["shopifyMarket"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyMarketOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyMarketOptions>) => {
    const record = await findOneRunner<SelectedShopifyMarketOrDefault<Options>>(
      this,
      "shopifyMarket",
      id,
      DefaultShopifyMarketSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyMarket",
    modelApiIdentifier: "shopifyMarket",
    defaultSelection: DefaultShopifyMarketSelection,
  } as any
)

  
    /**
 * Finds many shopifyMarket. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyMarketsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyMarketsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyMarketOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyMarkets";
  modelApiIdentifier: "shopifyMarket";
  defaultSelection: typeof DefaultShopifyMarketSelection;
  selectionType: AvailableShopifyMarketSelection;
  optionsType: FindManyShopifyMarketsOptions;
  schemaType: Query["shopifyMarket"];
} = Object.assign(
  async <Options extends FindManyShopifyMarketsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyMarketsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyMarketOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyMarketOrDefault<Options>>(
      this,
      "shopifyMarkets",
      DefaultShopifyMarketSelection,
      "shopifyMarket",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyMarkets",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyMarketSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyMarket. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyMarketOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyMarketOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyMarketOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyMarkets";
  modelApiIdentifier: "shopifyMarket";
  defaultSelection: typeof DefaultShopifyMarketSelection;
  selectionType: AvailableShopifyMarketSelection;
  optionsType: FindFirstShopifyMarketOptions;
  schemaType: Query["shopifyMarket"];
} = Object.assign(
  async <Options extends FindFirstShopifyMarketOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyMarketOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyMarketOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyMarketOrDefault<Options>>(
      this,
      "shopifyMarkets",
      DefaultShopifyMarketSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyMarkets",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyMarketSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyMarket. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyMarketOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyMarketOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyMarketOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyMarkets";
  modelApiIdentifier: "shopifyMarket";
  defaultSelection: typeof DefaultShopifyMarketSelection;
  selectionType: AvailableShopifyMarketSelection;
  optionsType: MaybeFindFirstShopifyMarketOptions;
  schemaType: Query["shopifyMarket"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyMarketOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyMarketOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyMarketOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyMarketOrDefault<Options>>(
      this,
      "shopifyMarkets",
      DefaultShopifyMarketSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyMarkets",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyMarketSelection,
  } as any
);

  
    create = Object.assign(createShopifyMarket,
  {
    type: "action",
    operationName: "createShopifyMarket",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyMarketSelection,
    variables: {
      "shopifyMarket": {
        required: false,
        type: "CreateShopifyMarketInput",
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
    operationName: "createShopifyMarket";
    namespace: null;
    modelApiIdentifier: "shopifyMarket";
    modelSelectionField: "shopifyMarket";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyMarketSelection;
    selectionType: AvailableShopifyMarketSelection;
    optionsType: CreateShopifyMarketOptions;
    schemaType:  Query["shopifyMarket"];

    variablesType: (

      (
        FullyQualifiedCreateShopifyMarketVariables          | CreateShopifyMarketVariables      )
    )
    // all variables are optional, so no variables can be passed at all
    | undefined
    ;
    variables: {
                    "shopifyMarket": {
          required: false;
          type: "CreateShopifyMarketInput";
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
    <Options extends CreateShopifyMarketOptions>(
        inputs: (FullyQualifiedCreateShopifyMarketVariables | CreateShopifyMarketVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyMarketOptions>
    ): Promise<CreateShopifyMarketResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateShopifyMarkets";
    namespace: null;
    modelApiIdentifier: "shopifyMarket";
    modelSelectionField: "shopifyMarkets";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyMarketSelection;
    selectionType: AvailableShopifyMarketSelection;
    optionsType: CreateShopifyMarketOptions;
    schemaType: Query["shopifyMarket"];
    variablesType: (FullyQualifiedCreateShopifyMarketVariables | CreateShopifyMarketVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateShopifyMarketsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateShopifyMarketOptions>(
        inputs: (FullyQualifiedCreateShopifyMarketVariables | CreateShopifyMarketVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyMarketOptions>
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
        "bulkCreateShopifyMarkets",
        DefaultShopifyMarketSelection,
        "shopifyMarket",
        "shopifyMarkets",
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
      operationName: "bulkCreateShopifyMarkets",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyMarkets",
      isBulk: true,
      defaultSelection: DefaultShopifyMarketSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateShopifyMarketsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateShopifyMarket,
  {
    type: "action",
    operationName: "updateShopifyMarket",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyMarketSelection,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopifyMarket": {
        required: false,
        type: "UpdateShopifyMarketInput",
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
    operationName: "updateShopifyMarket";
    namespace: null;
    modelApiIdentifier: "shopifyMarket";
    modelSelectionField: "shopifyMarket";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyMarketSelection;
    selectionType: AvailableShopifyMarketSelection;
    optionsType: UpdateShopifyMarketOptions;
    schemaType:  Query["shopifyMarket"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateShopifyMarketVariables          | UpdateShopifyMarketVariables      )
    )
    ;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "shopifyMarket": {
          required: false;
          type: "UpdateShopifyMarketInput";
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
    <Options extends UpdateShopifyMarketOptions>(
        inputs: (FullyQualifiedUpdateShopifyMarketVariables | UpdateShopifyMarketVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyMarketOptions>
    ): Promise<UpdateShopifyMarketResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateShopifyMarkets";
    namespace: null;
    modelApiIdentifier: "shopifyMarket";
    modelSelectionField: "shopifyMarkets";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyMarketSelection;
    selectionType: AvailableShopifyMarketSelection;
    optionsType: UpdateShopifyMarketOptions;
    schemaType: Query["shopifyMarket"];
    variablesType: (FullyQualifiedUpdateShopifyMarketVariables | UpdateShopifyMarketVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateShopifyMarketsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateShopifyMarketOptions>(
        inputs: (FullyQualifiedUpdateShopifyMarketVariables | UpdateShopifyMarketVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyMarketOptions>
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
        "bulkUpdateShopifyMarkets",
        DefaultShopifyMarketSelection,
        "shopifyMarket",
        "shopifyMarkets",
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
      operationName: "bulkUpdateShopifyMarkets",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyMarkets",
      isBulk: true,
      defaultSelection: DefaultShopifyMarketSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateShopifyMarketsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteShopifyMarket,
  {
    type: "action",
    operationName: "deleteShopifyMarket",
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
    operationName: "deleteShopifyMarket";
    namespace: null;
    modelApiIdentifier: "shopifyMarket";
    modelSelectionField: "shopifyMarket";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyMarketOptions;
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
    <Options extends DeleteShopifyMarketOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyMarketOptions>
    ): Promise<DeleteShopifyMarketResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteShopifyMarkets";
    namespace: null;
    modelApiIdentifier: "shopifyMarket";
    modelSelectionField: "shopifyMarkets";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyMarketOptions;
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
    async <Options extends DeleteShopifyMarketOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyMarketOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkDeleteShopifyMarkets",
        null,
        "shopifyMarket",
        "shopifyMarkets",
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
      operationName: "bulkDeleteShopifyMarkets",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyMarkets",
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
