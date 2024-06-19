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
      ShopifyCompany,
      ShopifyCompanySort,
      ShopifyCompanyFilter,
      AvailableShopifyCompanySelection,
      CreateShopifyCompanyInput,
      UpdateShopifyCompanyInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyCompanySelection = {
  "__typename": true,
  "contactCount": true,
  "createdAt": true,
  "customerSince": true,
  "externalId": true,
  "id": true,
  "lifetimeDuration": true,
  "locationCount": true,
  "name": true,
  "note": true,
  "orderCount": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "totalSpent": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyCompany". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyCompanyOrDefault<Options extends Selectable<AvailableShopifyCompanySelection>> = DeepFilterNever<
  Select<
    ShopifyCompany,
    DefaultSelection<
      AvailableShopifyCompanySelection,
      Options,
      typeof DefaultShopifyCompanySelection
    >
  >>;

/** Options that can be passed to the `ShopifyCompanyManager#findOne` method */
export interface FindOneShopifyCompanyOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCompanySelection;
};

/** Options that can be passed to the `ShopifyCompanyManager#maybeFindOne` method */
export interface MaybeFindOneShopifyCompanyOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCompanySelection;
};

/** Options that can be passed to the `ShopifyCompanyManager#findMany` method */
export interface FindManyShopifyCompaniesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCompanySelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCompanySort | ShopifyCompanySort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCompanyFilter | ShopifyCompanyFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyCompanyManager#findFirst` method */
export interface FindFirstShopifyCompanyOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCompanySelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCompanySort | ShopifyCompanySort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCompanyFilter | ShopifyCompanyFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyCompanyManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyCompanyOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCompanySelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyCompanySort | ShopifyCompanySort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyCompanyFilter | ShopifyCompanyFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateShopifyCompanyOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCompanySelection;
};


export interface UpdateShopifyCompanyOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyCompanySelection;
};


export interface DeleteShopifyCompanyOptions {
};


const apiIdentifier = "shopifyCompany";
const pluralApiIdentifier = "shopifyCompanies";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateShopifyCompanyVariables = {
          shopifyCompany?: CreateShopifyCompanyInput,
      }

  /**
   * The inputs for executing create on shopifyCompany.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateShopifyCompanyVariables = CreateShopifyCompanyInput;



/**
 * The return value from executing create on shopifyCompany.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyCompanyResult<Options extends CreateShopifyCompanyOptions> =
  SelectedShopifyCompanyOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyCompanyOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createShopifyCompany<Options extends CreateShopifyCompanyOptions>(
  
    variables: CreateShopifyCompanyVariables,

  options?: LimitToKnownKeys<Options, CreateShopifyCompanyOptions>
): Promise<CreateShopifyCompanyResult<Options>>;

// Fully qualified, nested api identifier overload
async function createShopifyCompany<Options extends CreateShopifyCompanyOptions>(
  
      variables: FullyQualifiedCreateShopifyCompanyVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyCompanyOptions>
): Promise<CreateShopifyCompanyResult<Options>>;

// Function implementation
async function createShopifyCompany<Options extends CreateShopifyCompanyOptions>(
  this: ShopifyCompanyManager,
  
      variables: CreateShopifyCompanyVariables | FullyQualifiedCreateShopifyCompanyVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyCompanyOptions>
): Promise<CreateShopifyCompanyResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedShopifyCompanyOrDefault<Options>>(
    this,
    "createShopifyCompany",
    DefaultShopifyCompanySelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                    "shopifyCompany": {
          value: newVariables.shopifyCompany,
          required: false,
          type: "CreateShopifyCompanyInput",
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
  export type FullyQualifiedUpdateShopifyCompanyVariables = {
          shopifyCompany?: UpdateShopifyCompanyInput,
      }

  /**
   * The inputs for executing update on shopifyCompany.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateShopifyCompanyVariables = UpdateShopifyCompanyInput;



/**
 * The return value from executing update on shopifyCompany.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyCompanyResult<Options extends UpdateShopifyCompanyOptions> =
  SelectedShopifyCompanyOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyCompanyOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateShopifyCompany<Options extends UpdateShopifyCompanyOptions>(
  id: string,
    variables: UpdateShopifyCompanyVariables,

  options?: LimitToKnownKeys<Options, UpdateShopifyCompanyOptions>
): Promise<UpdateShopifyCompanyResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateShopifyCompany<Options extends UpdateShopifyCompanyOptions>(
  id: string,
      variables: FullyQualifiedUpdateShopifyCompanyVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyCompanyOptions>
): Promise<UpdateShopifyCompanyResult<Options>>;

// Function implementation
async function updateShopifyCompany<Options extends UpdateShopifyCompanyOptions>(
  this: ShopifyCompanyManager,
  id: string,
      variables: UpdateShopifyCompanyVariables | FullyQualifiedUpdateShopifyCompanyVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyCompanyOptions>
): Promise<UpdateShopifyCompanyResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedShopifyCompanyOrDefault<Options>>(
    this,
    "updateShopifyCompany",
    DefaultShopifyCompanySelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "shopifyCompany": {
          value: newVariables.shopifyCompany,
          required: false,
          type: "UpdateShopifyCompanyInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on shopifyCompany.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyCompanyResult<Options extends DeleteShopifyCompanyOptions> =
  void extends void ? void : GadgetRecord<SelectedShopifyCompanyOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteShopifyCompany<Options extends DeleteShopifyCompanyOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyCompanyOptions>
): Promise<DeleteShopifyCompanyResult<Options>>;

// Function implementation
async function deleteShopifyCompany<Options extends DeleteShopifyCompanyOptions>(
  this: ShopifyCompanyManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyCompanyOptions>
): Promise<DeleteShopifyCompanyResult<Options>> {

  return (await actionRunner<void>(
    this,
    "deleteShopifyCompany",
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

  



/** All the actions available at the collection level and record level for "shopifyCompany" */
export class ShopifyCompanyManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyCompany by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyCompanyOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCompanyOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCompanyOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyCompany";
  modelApiIdentifier: "shopifyCompany";
  defaultSelection: typeof DefaultShopifyCompanySelection;
  selectionType: AvailableShopifyCompanySelection;
  optionsType: FindOneShopifyCompanyOptions;
  schemaType: Query["shopifyCompany"];
} = Object.assign(
  async <Options extends FindOneShopifyCompanyOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyCompanyOptions>) => {
    return await findOneRunner<SelectedShopifyCompanyOrDefault<Options>>(
      this,
      "shopifyCompany",
      id,
      DefaultShopifyCompanySelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyCompany",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCompanySelection,
  } as any
)

  
    /**
 * Finds one shopifyCompany by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyCompanyOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCompanyOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCompanyOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyCompany";
  modelApiIdentifier: "shopifyCompany";
  defaultSelection: typeof DefaultShopifyCompanySelection;
  selectionType: AvailableShopifyCompanySelection;
  optionsType: MaybeFindOneShopifyCompanyOptions;
  schemaType: Query["shopifyCompany"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyCompanyOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyCompanyOptions>) => {
    const record = await findOneRunner<SelectedShopifyCompanyOrDefault<Options>>(
      this,
      "shopifyCompany",
      id,
      DefaultShopifyCompanySelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyCompany",
    modelApiIdentifier: "shopifyCompany",
    defaultSelection: DefaultShopifyCompanySelection,
  } as any
)

  
    /**
 * Finds many shopifyCompany. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyCompaniesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCompaniesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyCompanyOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyCompanies";
  modelApiIdentifier: "shopifyCompany";
  defaultSelection: typeof DefaultShopifyCompanySelection;
  selectionType: AvailableShopifyCompanySelection;
  optionsType: FindManyShopifyCompaniesOptions;
  schemaType: Query["shopifyCompany"];
} = Object.assign(
  async <Options extends FindManyShopifyCompaniesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyCompaniesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyCompanyOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyCompanyOrDefault<Options>>(
      this,
      "shopifyCompanies",
      DefaultShopifyCompanySelection,
      "shopifyCompany",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyCompanies",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCompanySelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyCompany. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyCompanyOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCompanyOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCompanyOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyCompanies";
  modelApiIdentifier: "shopifyCompany";
  defaultSelection: typeof DefaultShopifyCompanySelection;
  selectionType: AvailableShopifyCompanySelection;
  optionsType: FindFirstShopifyCompanyOptions;
  schemaType: Query["shopifyCompany"];
} = Object.assign(
  async <Options extends FindFirstShopifyCompanyOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyCompanyOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCompanyOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyCompanyOrDefault<Options>>(
      this,
      "shopifyCompanies",
      DefaultShopifyCompanySelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyCompanies",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCompanySelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyCompany. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyCompanyOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCompanyOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCompanyOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyCompanies";
  modelApiIdentifier: "shopifyCompany";
  defaultSelection: typeof DefaultShopifyCompanySelection;
  selectionType: AvailableShopifyCompanySelection;
  optionsType: MaybeFindFirstShopifyCompanyOptions;
  schemaType: Query["shopifyCompany"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyCompanyOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyCompanyOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyCompanyOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyCompanyOrDefault<Options>>(
      this,
      "shopifyCompanies",
      DefaultShopifyCompanySelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyCompanies",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyCompanySelection,
  } as any
);

  
    create = Object.assign(createShopifyCompany,
  {
    type: "action",
    operationName: "createShopifyCompany",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyCompanySelection,
    variables: {
      "shopifyCompany": {
        required: false,
        type: "CreateShopifyCompanyInput",
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
    operationName: "createShopifyCompany";
    namespace: null;
    modelApiIdentifier: "shopifyCompany";
    modelSelectionField: "shopifyCompany";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyCompanySelection;
    selectionType: AvailableShopifyCompanySelection;
    optionsType: CreateShopifyCompanyOptions;
    schemaType:  Query["shopifyCompany"];

    variablesType: (

      (
        FullyQualifiedCreateShopifyCompanyVariables          | CreateShopifyCompanyVariables      )
    )
    // all variables are optional, so no variables can be passed at all
    | undefined
    ;
    variables: {
                    "shopifyCompany": {
          required: false;
          type: "CreateShopifyCompanyInput";
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
    <Options extends CreateShopifyCompanyOptions>(
        inputs: (FullyQualifiedCreateShopifyCompanyVariables | CreateShopifyCompanyVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyCompanyOptions>
    ): Promise<CreateShopifyCompanyResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateShopifyCompanies";
    namespace: null;
    modelApiIdentifier: "shopifyCompany";
    modelSelectionField: "shopifyCompanies";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyCompanySelection;
    selectionType: AvailableShopifyCompanySelection;
    optionsType: CreateShopifyCompanyOptions;
    schemaType: Query["shopifyCompany"];
    variablesType: (FullyQualifiedCreateShopifyCompanyVariables | CreateShopifyCompanyVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateShopifyCompaniesInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateShopifyCompanyOptions>(
        inputs: (FullyQualifiedCreateShopifyCompanyVariables | CreateShopifyCompanyVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyCompanyOptions>
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
        "bulkCreateShopifyCompanies",
        DefaultShopifyCompanySelection,
        "shopifyCompany",
        "shopifyCompanies",
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
      operationName: "bulkCreateShopifyCompanies",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyCompanies",
      isBulk: true,
      defaultSelection: DefaultShopifyCompanySelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateShopifyCompaniesInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateShopifyCompany,
  {
    type: "action",
    operationName: "updateShopifyCompany",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyCompanySelection,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopifyCompany": {
        required: false,
        type: "UpdateShopifyCompanyInput",
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
    operationName: "updateShopifyCompany";
    namespace: null;
    modelApiIdentifier: "shopifyCompany";
    modelSelectionField: "shopifyCompany";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyCompanySelection;
    selectionType: AvailableShopifyCompanySelection;
    optionsType: UpdateShopifyCompanyOptions;
    schemaType:  Query["shopifyCompany"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateShopifyCompanyVariables          | UpdateShopifyCompanyVariables      )
    )
    ;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "shopifyCompany": {
          required: false;
          type: "UpdateShopifyCompanyInput";
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
    <Options extends UpdateShopifyCompanyOptions>(
        inputs: (FullyQualifiedUpdateShopifyCompanyVariables | UpdateShopifyCompanyVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyCompanyOptions>
    ): Promise<UpdateShopifyCompanyResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateShopifyCompanies";
    namespace: null;
    modelApiIdentifier: "shopifyCompany";
    modelSelectionField: "shopifyCompanies";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyCompanySelection;
    selectionType: AvailableShopifyCompanySelection;
    optionsType: UpdateShopifyCompanyOptions;
    schemaType: Query["shopifyCompany"];
    variablesType: (FullyQualifiedUpdateShopifyCompanyVariables | UpdateShopifyCompanyVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateShopifyCompaniesInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateShopifyCompanyOptions>(
        inputs: (FullyQualifiedUpdateShopifyCompanyVariables | UpdateShopifyCompanyVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyCompanyOptions>
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
        "bulkUpdateShopifyCompanies",
        DefaultShopifyCompanySelection,
        "shopifyCompany",
        "shopifyCompanies",
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
      operationName: "bulkUpdateShopifyCompanies",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyCompanies",
      isBulk: true,
      defaultSelection: DefaultShopifyCompanySelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateShopifyCompaniesInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteShopifyCompany,
  {
    type: "action",
    operationName: "deleteShopifyCompany",
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
    operationName: "deleteShopifyCompany";
    namespace: null;
    modelApiIdentifier: "shopifyCompany";
    modelSelectionField: "shopifyCompany";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyCompanyOptions;
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
    <Options extends DeleteShopifyCompanyOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyCompanyOptions>
    ): Promise<DeleteShopifyCompanyResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteShopifyCompanies";
    namespace: null;
    modelApiIdentifier: "shopifyCompany";
    modelSelectionField: "shopifyCompanies";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyCompanyOptions;
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
    async <Options extends DeleteShopifyCompanyOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyCompanyOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkDeleteShopifyCompanies",
        null,
        "shopifyCompany",
        "shopifyCompanies",
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
      operationName: "bulkDeleteShopifyCompanies",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyCompanies",
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
