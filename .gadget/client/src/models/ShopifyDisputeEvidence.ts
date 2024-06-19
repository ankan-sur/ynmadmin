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
      ShopifyDisputeEvidence,
      ShopifyDisputeEvidenceSort,
      ShopifyDisputeEvidenceFilter,
      AvailableShopifyDisputeEvidenceSelection,
      CreateShopifyDisputeEvidenceInput,
      UpdateShopifyDisputeEvidenceInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyDisputeEvidenceSelection = {
  "__typename": true,
  "createdAt": true,
  "customerEmailAddress": true,
  "customerFirstName": true,
  "customerLastName": true,
  "id": true,
  "productDescription": true,
  "submittedByMerchantOn": true,
  "uncategorizedText": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyDisputeEvidence". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyDisputeEvidenceOrDefault<Options extends Selectable<AvailableShopifyDisputeEvidenceSelection>> = DeepFilterNever<
  Select<
    ShopifyDisputeEvidence,
    DefaultSelection<
      AvailableShopifyDisputeEvidenceSelection,
      Options,
      typeof DefaultShopifyDisputeEvidenceSelection
    >
  >>;

/** Options that can be passed to the `ShopifyDisputeEvidenceManager#findOne` method */
export interface FindOneShopifyDisputeEvidenceOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDisputeEvidenceSelection;
};

/** Options that can be passed to the `ShopifyDisputeEvidenceManager#maybeFindOne` method */
export interface MaybeFindOneShopifyDisputeEvidenceOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDisputeEvidenceSelection;
};

/** Options that can be passed to the `ShopifyDisputeEvidenceManager#findMany` method */
export interface FindManyShopifyDisputeEvidencesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDisputeEvidenceSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDisputeEvidenceSort | ShopifyDisputeEvidenceSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDisputeEvidenceFilter | ShopifyDisputeEvidenceFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyDisputeEvidenceManager#findFirst` method */
export interface FindFirstShopifyDisputeEvidenceOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDisputeEvidenceSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDisputeEvidenceSort | ShopifyDisputeEvidenceSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDisputeEvidenceFilter | ShopifyDisputeEvidenceFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyDisputeEvidenceManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyDisputeEvidenceOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDisputeEvidenceSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDisputeEvidenceSort | ShopifyDisputeEvidenceSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDisputeEvidenceFilter | ShopifyDisputeEvidenceFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateShopifyDisputeEvidenceOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDisputeEvidenceSelection;
};


export interface UpdateShopifyDisputeEvidenceOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDisputeEvidenceSelection;
};


export interface DeleteShopifyDisputeEvidenceOptions {
};


const apiIdentifier = "shopifyDisputeEvidence";
const pluralApiIdentifier = "shopifyDisputeEvidences";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateShopifyDisputeEvidenceVariables = {
          shopifyDisputeEvidence?: CreateShopifyDisputeEvidenceInput,
      }

  /**
   * The inputs for executing create on shopifyDisputeEvidence.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateShopifyDisputeEvidenceVariables = CreateShopifyDisputeEvidenceInput;



/**
 * The return value from executing create on shopifyDisputeEvidence.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyDisputeEvidenceResult<Options extends CreateShopifyDisputeEvidenceOptions> =
  SelectedShopifyDisputeEvidenceOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyDisputeEvidenceOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createShopifyDisputeEvidence<Options extends CreateShopifyDisputeEvidenceOptions>(
  
    variables: CreateShopifyDisputeEvidenceVariables,

  options?: LimitToKnownKeys<Options, CreateShopifyDisputeEvidenceOptions>
): Promise<CreateShopifyDisputeEvidenceResult<Options>>;

// Fully qualified, nested api identifier overload
async function createShopifyDisputeEvidence<Options extends CreateShopifyDisputeEvidenceOptions>(
  
      variables: FullyQualifiedCreateShopifyDisputeEvidenceVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyDisputeEvidenceOptions>
): Promise<CreateShopifyDisputeEvidenceResult<Options>>;

// Function implementation
async function createShopifyDisputeEvidence<Options extends CreateShopifyDisputeEvidenceOptions>(
  this: ShopifyDisputeEvidenceManager,
  
      variables: CreateShopifyDisputeEvidenceVariables | FullyQualifiedCreateShopifyDisputeEvidenceVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyDisputeEvidenceOptions>
): Promise<CreateShopifyDisputeEvidenceResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedShopifyDisputeEvidenceOrDefault<Options>>(
    this,
    "createShopifyDisputeEvidence",
    DefaultShopifyDisputeEvidenceSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                    "shopifyDisputeEvidence": {
          value: newVariables.shopifyDisputeEvidence,
          required: false,
          type: "CreateShopifyDisputeEvidenceInput",
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
  export type FullyQualifiedUpdateShopifyDisputeEvidenceVariables = {
          shopifyDisputeEvidence?: UpdateShopifyDisputeEvidenceInput,
      }

  /**
   * The inputs for executing update on shopifyDisputeEvidence.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateShopifyDisputeEvidenceVariables = UpdateShopifyDisputeEvidenceInput;



/**
 * The return value from executing update on shopifyDisputeEvidence.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyDisputeEvidenceResult<Options extends UpdateShopifyDisputeEvidenceOptions> =
  SelectedShopifyDisputeEvidenceOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyDisputeEvidenceOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateShopifyDisputeEvidence<Options extends UpdateShopifyDisputeEvidenceOptions>(
  id: string,
    variables: UpdateShopifyDisputeEvidenceVariables,

  options?: LimitToKnownKeys<Options, UpdateShopifyDisputeEvidenceOptions>
): Promise<UpdateShopifyDisputeEvidenceResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateShopifyDisputeEvidence<Options extends UpdateShopifyDisputeEvidenceOptions>(
  id: string,
      variables: FullyQualifiedUpdateShopifyDisputeEvidenceVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyDisputeEvidenceOptions>
): Promise<UpdateShopifyDisputeEvidenceResult<Options>>;

// Function implementation
async function updateShopifyDisputeEvidence<Options extends UpdateShopifyDisputeEvidenceOptions>(
  this: ShopifyDisputeEvidenceManager,
  id: string,
      variables: UpdateShopifyDisputeEvidenceVariables | FullyQualifiedUpdateShopifyDisputeEvidenceVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyDisputeEvidenceOptions>
): Promise<UpdateShopifyDisputeEvidenceResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedShopifyDisputeEvidenceOrDefault<Options>>(
    this,
    "updateShopifyDisputeEvidence",
    DefaultShopifyDisputeEvidenceSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "shopifyDisputeEvidence": {
          value: newVariables.shopifyDisputeEvidence,
          required: false,
          type: "UpdateShopifyDisputeEvidenceInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on shopifyDisputeEvidence.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyDisputeEvidenceResult<Options extends DeleteShopifyDisputeEvidenceOptions> =
  void extends void ? void : GadgetRecord<SelectedShopifyDisputeEvidenceOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteShopifyDisputeEvidence<Options extends DeleteShopifyDisputeEvidenceOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyDisputeEvidenceOptions>
): Promise<DeleteShopifyDisputeEvidenceResult<Options>>;

// Function implementation
async function deleteShopifyDisputeEvidence<Options extends DeleteShopifyDisputeEvidenceOptions>(
  this: ShopifyDisputeEvidenceManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyDisputeEvidenceOptions>
): Promise<DeleteShopifyDisputeEvidenceResult<Options>> {

  return (await actionRunner<void>(
    this,
    "deleteShopifyDisputeEvidence",
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

  



/** All the actions available at the collection level and record level for "shopifyDisputeEvidence" */
export class ShopifyDisputeEvidenceManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyDisputeEvidence by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyDisputeEvidenceOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyDisputeEvidenceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDisputeEvidenceOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyDisputeEvidence";
  modelApiIdentifier: "shopifyDisputeEvidence";
  defaultSelection: typeof DefaultShopifyDisputeEvidenceSelection;
  selectionType: AvailableShopifyDisputeEvidenceSelection;
  optionsType: FindOneShopifyDisputeEvidenceOptions;
  schemaType: Query["shopifyDisputeEvidence"];
} = Object.assign(
  async <Options extends FindOneShopifyDisputeEvidenceOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyDisputeEvidenceOptions>) => {
    return await findOneRunner<SelectedShopifyDisputeEvidenceOrDefault<Options>>(
      this,
      "shopifyDisputeEvidence",
      id,
      DefaultShopifyDisputeEvidenceSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyDisputeEvidence",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDisputeEvidenceSelection,
  } as any
)

  
    /**
 * Finds one shopifyDisputeEvidence by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyDisputeEvidenceOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyDisputeEvidenceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDisputeEvidenceOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyDisputeEvidence";
  modelApiIdentifier: "shopifyDisputeEvidence";
  defaultSelection: typeof DefaultShopifyDisputeEvidenceSelection;
  selectionType: AvailableShopifyDisputeEvidenceSelection;
  optionsType: MaybeFindOneShopifyDisputeEvidenceOptions;
  schemaType: Query["shopifyDisputeEvidence"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyDisputeEvidenceOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyDisputeEvidenceOptions>) => {
    const record = await findOneRunner<SelectedShopifyDisputeEvidenceOrDefault<Options>>(
      this,
      "shopifyDisputeEvidence",
      id,
      DefaultShopifyDisputeEvidenceSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyDisputeEvidence",
    modelApiIdentifier: "shopifyDisputeEvidence",
    defaultSelection: DefaultShopifyDisputeEvidenceSelection,
  } as any
)

  
    /**
 * Finds many shopifyDisputeEvidence. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyDisputeEvidencesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyDisputeEvidencesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyDisputeEvidenceOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyDisputeEvidences";
  modelApiIdentifier: "shopifyDisputeEvidence";
  defaultSelection: typeof DefaultShopifyDisputeEvidenceSelection;
  selectionType: AvailableShopifyDisputeEvidenceSelection;
  optionsType: FindManyShopifyDisputeEvidencesOptions;
  schemaType: Query["shopifyDisputeEvidence"];
} = Object.assign(
  async <Options extends FindManyShopifyDisputeEvidencesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyDisputeEvidencesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyDisputeEvidenceOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyDisputeEvidenceOrDefault<Options>>(
      this,
      "shopifyDisputeEvidences",
      DefaultShopifyDisputeEvidenceSelection,
      "shopifyDisputeEvidence",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyDisputeEvidences",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDisputeEvidenceSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyDisputeEvidence. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyDisputeEvidenceOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyDisputeEvidenceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDisputeEvidenceOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyDisputeEvidences";
  modelApiIdentifier: "shopifyDisputeEvidence";
  defaultSelection: typeof DefaultShopifyDisputeEvidenceSelection;
  selectionType: AvailableShopifyDisputeEvidenceSelection;
  optionsType: FindFirstShopifyDisputeEvidenceOptions;
  schemaType: Query["shopifyDisputeEvidence"];
} = Object.assign(
  async <Options extends FindFirstShopifyDisputeEvidenceOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyDisputeEvidenceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDisputeEvidenceOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyDisputeEvidenceOrDefault<Options>>(
      this,
      "shopifyDisputeEvidences",
      DefaultShopifyDisputeEvidenceSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyDisputeEvidences",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDisputeEvidenceSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyDisputeEvidence. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyDisputeEvidenceOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyDisputeEvidenceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDisputeEvidenceOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyDisputeEvidences";
  modelApiIdentifier: "shopifyDisputeEvidence";
  defaultSelection: typeof DefaultShopifyDisputeEvidenceSelection;
  selectionType: AvailableShopifyDisputeEvidenceSelection;
  optionsType: MaybeFindFirstShopifyDisputeEvidenceOptions;
  schemaType: Query["shopifyDisputeEvidence"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyDisputeEvidenceOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyDisputeEvidenceOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDisputeEvidenceOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyDisputeEvidenceOrDefault<Options>>(
      this,
      "shopifyDisputeEvidences",
      DefaultShopifyDisputeEvidenceSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyDisputeEvidences",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDisputeEvidenceSelection,
  } as any
);

  
    create = Object.assign(createShopifyDisputeEvidence,
  {
    type: "action",
    operationName: "createShopifyDisputeEvidence",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyDisputeEvidenceSelection,
    variables: {
      "shopifyDisputeEvidence": {
        required: false,
        type: "CreateShopifyDisputeEvidenceInput",
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
    operationName: "createShopifyDisputeEvidence";
    namespace: null;
    modelApiIdentifier: "shopifyDisputeEvidence";
    modelSelectionField: "shopifyDisputeEvidence";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyDisputeEvidenceSelection;
    selectionType: AvailableShopifyDisputeEvidenceSelection;
    optionsType: CreateShopifyDisputeEvidenceOptions;
    schemaType:  Query["shopifyDisputeEvidence"];

    variablesType: (

      (
        FullyQualifiedCreateShopifyDisputeEvidenceVariables          | CreateShopifyDisputeEvidenceVariables      )
    )
    // all variables are optional, so no variables can be passed at all
    | undefined
    ;
    variables: {
                    "shopifyDisputeEvidence": {
          required: false;
          type: "CreateShopifyDisputeEvidenceInput";
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
    <Options extends CreateShopifyDisputeEvidenceOptions>(
        inputs: (FullyQualifiedCreateShopifyDisputeEvidenceVariables | CreateShopifyDisputeEvidenceVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyDisputeEvidenceOptions>
    ): Promise<CreateShopifyDisputeEvidenceResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateShopifyDisputeEvidences";
    namespace: null;
    modelApiIdentifier: "shopifyDisputeEvidence";
    modelSelectionField: "shopifyDisputeEvidences";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyDisputeEvidenceSelection;
    selectionType: AvailableShopifyDisputeEvidenceSelection;
    optionsType: CreateShopifyDisputeEvidenceOptions;
    schemaType: Query["shopifyDisputeEvidence"];
    variablesType: (FullyQualifiedCreateShopifyDisputeEvidenceVariables | CreateShopifyDisputeEvidenceVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateShopifyDisputeEvidencesInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateShopifyDisputeEvidenceOptions>(
        inputs: (FullyQualifiedCreateShopifyDisputeEvidenceVariables | CreateShopifyDisputeEvidenceVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyDisputeEvidenceOptions>
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
        "bulkCreateShopifyDisputeEvidences",
        DefaultShopifyDisputeEvidenceSelection,
        "shopifyDisputeEvidence",
        "shopifyDisputeEvidences",
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
      operationName: "bulkCreateShopifyDisputeEvidences",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyDisputeEvidences",
      isBulk: true,
      defaultSelection: DefaultShopifyDisputeEvidenceSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateShopifyDisputeEvidencesInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateShopifyDisputeEvidence,
  {
    type: "action",
    operationName: "updateShopifyDisputeEvidence",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyDisputeEvidenceSelection,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopifyDisputeEvidence": {
        required: false,
        type: "UpdateShopifyDisputeEvidenceInput",
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
    operationName: "updateShopifyDisputeEvidence";
    namespace: null;
    modelApiIdentifier: "shopifyDisputeEvidence";
    modelSelectionField: "shopifyDisputeEvidence";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyDisputeEvidenceSelection;
    selectionType: AvailableShopifyDisputeEvidenceSelection;
    optionsType: UpdateShopifyDisputeEvidenceOptions;
    schemaType:  Query["shopifyDisputeEvidence"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateShopifyDisputeEvidenceVariables          | UpdateShopifyDisputeEvidenceVariables      )
    )
    ;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "shopifyDisputeEvidence": {
          required: false;
          type: "UpdateShopifyDisputeEvidenceInput";
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
    <Options extends UpdateShopifyDisputeEvidenceOptions>(
        inputs: (FullyQualifiedUpdateShopifyDisputeEvidenceVariables | UpdateShopifyDisputeEvidenceVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyDisputeEvidenceOptions>
    ): Promise<UpdateShopifyDisputeEvidenceResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateShopifyDisputeEvidences";
    namespace: null;
    modelApiIdentifier: "shopifyDisputeEvidence";
    modelSelectionField: "shopifyDisputeEvidences";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyDisputeEvidenceSelection;
    selectionType: AvailableShopifyDisputeEvidenceSelection;
    optionsType: UpdateShopifyDisputeEvidenceOptions;
    schemaType: Query["shopifyDisputeEvidence"];
    variablesType: (FullyQualifiedUpdateShopifyDisputeEvidenceVariables | UpdateShopifyDisputeEvidenceVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateShopifyDisputeEvidencesInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateShopifyDisputeEvidenceOptions>(
        inputs: (FullyQualifiedUpdateShopifyDisputeEvidenceVariables | UpdateShopifyDisputeEvidenceVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyDisputeEvidenceOptions>
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
        "bulkUpdateShopifyDisputeEvidences",
        DefaultShopifyDisputeEvidenceSelection,
        "shopifyDisputeEvidence",
        "shopifyDisputeEvidences",
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
      operationName: "bulkUpdateShopifyDisputeEvidences",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyDisputeEvidences",
      isBulk: true,
      defaultSelection: DefaultShopifyDisputeEvidenceSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateShopifyDisputeEvidencesInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteShopifyDisputeEvidence,
  {
    type: "action",
    operationName: "deleteShopifyDisputeEvidence",
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
    operationName: "deleteShopifyDisputeEvidence";
    namespace: null;
    modelApiIdentifier: "shopifyDisputeEvidence";
    modelSelectionField: "shopifyDisputeEvidence";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyDisputeEvidenceOptions;
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
    <Options extends DeleteShopifyDisputeEvidenceOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyDisputeEvidenceOptions>
    ): Promise<DeleteShopifyDisputeEvidenceResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteShopifyDisputeEvidences";
    namespace: null;
    modelApiIdentifier: "shopifyDisputeEvidence";
    modelSelectionField: "shopifyDisputeEvidences";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyDisputeEvidenceOptions;
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
    async <Options extends DeleteShopifyDisputeEvidenceOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyDisputeEvidenceOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkDeleteShopifyDisputeEvidences",
        null,
        "shopifyDisputeEvidence",
        "shopifyDisputeEvidences",
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
      operationName: "bulkDeleteShopifyDisputeEvidences",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyDisputeEvidences",
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
