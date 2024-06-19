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
      ShopifyDiscountCode,
      ShopifyDiscountCodeSort,
      ShopifyDiscountCodeFilter,
      AvailableShopifyDiscountCodeSelection,
      CreateShopifyDiscountCodeInput,
      UpdateShopifyDiscountCodeInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyDiscountCodeSelection = {
  "__typename": true,
  "code": true,
  "createdAt": true,
  "id": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "updatedAt": true,
  "usageCount": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyDiscountCode". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyDiscountCodeOrDefault<Options extends Selectable<AvailableShopifyDiscountCodeSelection>> = DeepFilterNever<
  Select<
    ShopifyDiscountCode,
    DefaultSelection<
      AvailableShopifyDiscountCodeSelection,
      Options,
      typeof DefaultShopifyDiscountCodeSelection
    >
  >>;

/** Options that can be passed to the `ShopifyDiscountCodeManager#findOne` method */
export interface FindOneShopifyDiscountCodeOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDiscountCodeSelection;
};

/** Options that can be passed to the `ShopifyDiscountCodeManager#maybeFindOne` method */
export interface MaybeFindOneShopifyDiscountCodeOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDiscountCodeSelection;
};

/** Options that can be passed to the `ShopifyDiscountCodeManager#findMany` method */
export interface FindManyShopifyDiscountCodesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDiscountCodeSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDiscountCodeSort | ShopifyDiscountCodeSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDiscountCodeFilter | ShopifyDiscountCodeFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyDiscountCodeManager#findFirst` method */
export interface FindFirstShopifyDiscountCodeOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDiscountCodeSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDiscountCodeSort | ShopifyDiscountCodeSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDiscountCodeFilter | ShopifyDiscountCodeFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyDiscountCodeManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyDiscountCodeOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDiscountCodeSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyDiscountCodeSort | ShopifyDiscountCodeSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyDiscountCodeFilter | ShopifyDiscountCodeFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateShopifyDiscountCodeOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDiscountCodeSelection;
};


export interface UpdateShopifyDiscountCodeOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyDiscountCodeSelection;
};


export interface DeleteShopifyDiscountCodeOptions {
};


const apiIdentifier = "shopifyDiscountCode";
const pluralApiIdentifier = "shopifyDiscountCodes";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateShopifyDiscountCodeVariables = {
          shopifyDiscountCode?: CreateShopifyDiscountCodeInput,
      }

  /**
   * The inputs for executing create on shopifyDiscountCode.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateShopifyDiscountCodeVariables = CreateShopifyDiscountCodeInput;



/**
 * The return value from executing create on shopifyDiscountCode.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyDiscountCodeResult<Options extends CreateShopifyDiscountCodeOptions> =
  SelectedShopifyDiscountCodeOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyDiscountCodeOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createShopifyDiscountCode<Options extends CreateShopifyDiscountCodeOptions>(
  
    variables: CreateShopifyDiscountCodeVariables,

  options?: LimitToKnownKeys<Options, CreateShopifyDiscountCodeOptions>
): Promise<CreateShopifyDiscountCodeResult<Options>>;

// Fully qualified, nested api identifier overload
async function createShopifyDiscountCode<Options extends CreateShopifyDiscountCodeOptions>(
  
      variables: FullyQualifiedCreateShopifyDiscountCodeVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyDiscountCodeOptions>
): Promise<CreateShopifyDiscountCodeResult<Options>>;

// Function implementation
async function createShopifyDiscountCode<Options extends CreateShopifyDiscountCodeOptions>(
  this: ShopifyDiscountCodeManager,
  
      variables: CreateShopifyDiscountCodeVariables | FullyQualifiedCreateShopifyDiscountCodeVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyDiscountCodeOptions>
): Promise<CreateShopifyDiscountCodeResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedShopifyDiscountCodeOrDefault<Options>>(
    this,
    "createShopifyDiscountCode",
    DefaultShopifyDiscountCodeSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                    "shopifyDiscountCode": {
          value: newVariables.shopifyDiscountCode,
          required: false,
          type: "CreateShopifyDiscountCodeInput",
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
  export type FullyQualifiedUpdateShopifyDiscountCodeVariables = {
          shopifyDiscountCode?: UpdateShopifyDiscountCodeInput,
      }

  /**
   * The inputs for executing update on shopifyDiscountCode.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateShopifyDiscountCodeVariables = UpdateShopifyDiscountCodeInput;



/**
 * The return value from executing update on shopifyDiscountCode.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateShopifyDiscountCodeResult<Options extends UpdateShopifyDiscountCodeOptions> =
  SelectedShopifyDiscountCodeOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyDiscountCodeOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateShopifyDiscountCode<Options extends UpdateShopifyDiscountCodeOptions>(
  id: string,
    variables: UpdateShopifyDiscountCodeVariables,

  options?: LimitToKnownKeys<Options, UpdateShopifyDiscountCodeOptions>
): Promise<UpdateShopifyDiscountCodeResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateShopifyDiscountCode<Options extends UpdateShopifyDiscountCodeOptions>(
  id: string,
      variables: FullyQualifiedUpdateShopifyDiscountCodeVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyDiscountCodeOptions>
): Promise<UpdateShopifyDiscountCodeResult<Options>>;

// Function implementation
async function updateShopifyDiscountCode<Options extends UpdateShopifyDiscountCodeOptions>(
  this: ShopifyDiscountCodeManager,
  id: string,
      variables: UpdateShopifyDiscountCodeVariables | FullyQualifiedUpdateShopifyDiscountCodeVariables,
  
  options?: LimitToKnownKeys<Options, UpdateShopifyDiscountCodeOptions>
): Promise<UpdateShopifyDiscountCodeResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedShopifyDiscountCodeOrDefault<Options>>(
    this,
    "updateShopifyDiscountCode",
    DefaultShopifyDiscountCodeSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "shopifyDiscountCode": {
          value: newVariables.shopifyDiscountCode,
          required: false,
          type: "UpdateShopifyDiscountCodeInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on shopifyDiscountCode.
 * "Is void because this action deletes the record"
 **/
export type DeleteShopifyDiscountCodeResult<Options extends DeleteShopifyDiscountCodeOptions> =
  void extends void ? void : GadgetRecord<SelectedShopifyDiscountCodeOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteShopifyDiscountCode<Options extends DeleteShopifyDiscountCodeOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyDiscountCodeOptions>
): Promise<DeleteShopifyDiscountCodeResult<Options>>;

// Function implementation
async function deleteShopifyDiscountCode<Options extends DeleteShopifyDiscountCodeOptions>(
  this: ShopifyDiscountCodeManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteShopifyDiscountCodeOptions>
): Promise<DeleteShopifyDiscountCodeResult<Options>> {

  return (await actionRunner<void>(
    this,
    "deleteShopifyDiscountCode",
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

  



/** All the actions available at the collection level and record level for "shopifyDiscountCode" */
export class ShopifyDiscountCodeManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyDiscountCode by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyDiscountCodeOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyDiscountCodeOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDiscountCodeOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyDiscountCode";
  modelApiIdentifier: "shopifyDiscountCode";
  defaultSelection: typeof DefaultShopifyDiscountCodeSelection;
  selectionType: AvailableShopifyDiscountCodeSelection;
  optionsType: FindOneShopifyDiscountCodeOptions;
  schemaType: Query["shopifyDiscountCode"];
} = Object.assign(
  async <Options extends FindOneShopifyDiscountCodeOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyDiscountCodeOptions>) => {
    return await findOneRunner<SelectedShopifyDiscountCodeOrDefault<Options>>(
      this,
      "shopifyDiscountCode",
      id,
      DefaultShopifyDiscountCodeSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyDiscountCode",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDiscountCodeSelection,
  } as any
)

  
    /**
 * Finds one shopifyDiscountCode by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyDiscountCodeOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyDiscountCodeOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDiscountCodeOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyDiscountCode";
  modelApiIdentifier: "shopifyDiscountCode";
  defaultSelection: typeof DefaultShopifyDiscountCodeSelection;
  selectionType: AvailableShopifyDiscountCodeSelection;
  optionsType: MaybeFindOneShopifyDiscountCodeOptions;
  schemaType: Query["shopifyDiscountCode"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyDiscountCodeOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyDiscountCodeOptions>) => {
    const record = await findOneRunner<SelectedShopifyDiscountCodeOrDefault<Options>>(
      this,
      "shopifyDiscountCode",
      id,
      DefaultShopifyDiscountCodeSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyDiscountCode",
    modelApiIdentifier: "shopifyDiscountCode",
    defaultSelection: DefaultShopifyDiscountCodeSelection,
  } as any
)

  
    /**
 * Finds many shopifyDiscountCode. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyDiscountCodesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyDiscountCodesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyDiscountCodeOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyDiscountCodes";
  modelApiIdentifier: "shopifyDiscountCode";
  defaultSelection: typeof DefaultShopifyDiscountCodeSelection;
  selectionType: AvailableShopifyDiscountCodeSelection;
  optionsType: FindManyShopifyDiscountCodesOptions;
  schemaType: Query["shopifyDiscountCode"];
} = Object.assign(
  async <Options extends FindManyShopifyDiscountCodesOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyDiscountCodesOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyDiscountCodeOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyDiscountCodeOrDefault<Options>>(
      this,
      "shopifyDiscountCodes",
      DefaultShopifyDiscountCodeSelection,
      "shopifyDiscountCode",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyDiscountCodes",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDiscountCodeSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyDiscountCode. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyDiscountCodeOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyDiscountCodeOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDiscountCodeOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyDiscountCodes";
  modelApiIdentifier: "shopifyDiscountCode";
  defaultSelection: typeof DefaultShopifyDiscountCodeSelection;
  selectionType: AvailableShopifyDiscountCodeSelection;
  optionsType: FindFirstShopifyDiscountCodeOptions;
  schemaType: Query["shopifyDiscountCode"];
} = Object.assign(
  async <Options extends FindFirstShopifyDiscountCodeOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyDiscountCodeOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDiscountCodeOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyDiscountCodeOrDefault<Options>>(
      this,
      "shopifyDiscountCodes",
      DefaultShopifyDiscountCodeSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyDiscountCodes",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDiscountCodeSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyDiscountCode. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyDiscountCodeOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyDiscountCodeOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDiscountCodeOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyDiscountCodes";
  modelApiIdentifier: "shopifyDiscountCode";
  defaultSelection: typeof DefaultShopifyDiscountCodeSelection;
  selectionType: AvailableShopifyDiscountCodeSelection;
  optionsType: MaybeFindFirstShopifyDiscountCodeOptions;
  schemaType: Query["shopifyDiscountCode"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyDiscountCodeOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyDiscountCodeOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyDiscountCodeOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyDiscountCodeOrDefault<Options>>(
      this,
      "shopifyDiscountCodes",
      DefaultShopifyDiscountCodeSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyDiscountCodes",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyDiscountCodeSelection,
  } as any
);

  
    create = Object.assign(createShopifyDiscountCode,
  {
    type: "action",
    operationName: "createShopifyDiscountCode",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyDiscountCodeSelection,
    variables: {
      "shopifyDiscountCode": {
        required: false,
        type: "CreateShopifyDiscountCodeInput",
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
    operationName: "createShopifyDiscountCode";
    namespace: null;
    modelApiIdentifier: "shopifyDiscountCode";
    modelSelectionField: "shopifyDiscountCode";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyDiscountCodeSelection;
    selectionType: AvailableShopifyDiscountCodeSelection;
    optionsType: CreateShopifyDiscountCodeOptions;
    schemaType:  Query["shopifyDiscountCode"];

    variablesType: (

      (
        FullyQualifiedCreateShopifyDiscountCodeVariables          | CreateShopifyDiscountCodeVariables      )
    )
    // all variables are optional, so no variables can be passed at all
    | undefined
    ;
    variables: {
                    "shopifyDiscountCode": {
          required: false;
          type: "CreateShopifyDiscountCodeInput";
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
    <Options extends CreateShopifyDiscountCodeOptions>(
        inputs: (FullyQualifiedCreateShopifyDiscountCodeVariables | CreateShopifyDiscountCodeVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyDiscountCodeOptions>
    ): Promise<CreateShopifyDiscountCodeResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateShopifyDiscountCodes";
    namespace: null;
    modelApiIdentifier: "shopifyDiscountCode";
    modelSelectionField: "shopifyDiscountCodes";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyDiscountCodeSelection;
    selectionType: AvailableShopifyDiscountCodeSelection;
    optionsType: CreateShopifyDiscountCodeOptions;
    schemaType: Query["shopifyDiscountCode"];
    variablesType: (FullyQualifiedCreateShopifyDiscountCodeVariables | CreateShopifyDiscountCodeVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateShopifyDiscountCodesInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateShopifyDiscountCodeOptions>(
        inputs: (FullyQualifiedCreateShopifyDiscountCodeVariables | CreateShopifyDiscountCodeVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyDiscountCodeOptions>
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
        "bulkCreateShopifyDiscountCodes",
        DefaultShopifyDiscountCodeSelection,
        "shopifyDiscountCode",
        "shopifyDiscountCodes",
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
      operationName: "bulkCreateShopifyDiscountCodes",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyDiscountCodes",
      isBulk: true,
      defaultSelection: DefaultShopifyDiscountCodeSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateShopifyDiscountCodesInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateShopifyDiscountCode,
  {
    type: "action",
    operationName: "updateShopifyDiscountCode",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyDiscountCodeSelection,
    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "shopifyDiscountCode": {
        required: false,
        type: "UpdateShopifyDiscountCodeInput",
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
    operationName: "updateShopifyDiscountCode";
    namespace: null;
    modelApiIdentifier: "shopifyDiscountCode";
    modelSelectionField: "shopifyDiscountCode";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyDiscountCodeSelection;
    selectionType: AvailableShopifyDiscountCodeSelection;
    optionsType: UpdateShopifyDiscountCodeOptions;
    schemaType:  Query["shopifyDiscountCode"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateShopifyDiscountCodeVariables          | UpdateShopifyDiscountCodeVariables      )
    )
    ;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "shopifyDiscountCode": {
          required: false;
          type: "UpdateShopifyDiscountCodeInput";
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
    <Options extends UpdateShopifyDiscountCodeOptions>(
        inputs: (FullyQualifiedUpdateShopifyDiscountCodeVariables | UpdateShopifyDiscountCodeVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyDiscountCodeOptions>
    ): Promise<UpdateShopifyDiscountCodeResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateShopifyDiscountCodes";
    namespace: null;
    modelApiIdentifier: "shopifyDiscountCode";
    modelSelectionField: "shopifyDiscountCodes";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyDiscountCodeSelection;
    selectionType: AvailableShopifyDiscountCodeSelection;
    optionsType: UpdateShopifyDiscountCodeOptions;
    schemaType: Query["shopifyDiscountCode"];
    variablesType: (FullyQualifiedUpdateShopifyDiscountCodeVariables | UpdateShopifyDiscountCodeVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateShopifyDiscountCodesInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateShopifyDiscountCodeOptions>(
        inputs: (FullyQualifiedUpdateShopifyDiscountCodeVariables | UpdateShopifyDiscountCodeVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateShopifyDiscountCodeOptions>
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
        "bulkUpdateShopifyDiscountCodes",
        DefaultShopifyDiscountCodeSelection,
        "shopifyDiscountCode",
        "shopifyDiscountCodes",
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
      operationName: "bulkUpdateShopifyDiscountCodes",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyDiscountCodes",
      isBulk: true,
      defaultSelection: DefaultShopifyDiscountCodeSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateShopifyDiscountCodesInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteShopifyDiscountCode,
  {
    type: "action",
    operationName: "deleteShopifyDiscountCode",
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
    operationName: "deleteShopifyDiscountCode";
    namespace: null;
    modelApiIdentifier: "shopifyDiscountCode";
    modelSelectionField: "shopifyDiscountCode";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyDiscountCodeOptions;
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
    <Options extends DeleteShopifyDiscountCodeOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyDiscountCodeOptions>
    ): Promise<DeleteShopifyDiscountCodeResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteShopifyDiscountCodes";
    namespace: null;
    modelApiIdentifier: "shopifyDiscountCode";
    modelSelectionField: "shopifyDiscountCodes";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteShopifyDiscountCodeOptions;
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
    async <Options extends DeleteShopifyDiscountCodeOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteShopifyDiscountCodeOptions>
    ) => {

      return (await actionRunner<any>(
        this,
        "bulkDeleteShopifyDiscountCodes",
        null,
        "shopifyDiscountCode",
        "shopifyDiscountCodes",
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
      operationName: "bulkDeleteShopifyDiscountCodes",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyDiscountCodes",
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
