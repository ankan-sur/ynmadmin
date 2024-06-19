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
      ShopifyRefund,
      ShopifyRefundSort,
      ShopifyRefundFilter,
      AvailableShopifyRefundSelection,
      CreateShopifyRefundInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultShopifyRefundSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "note": true,
  "processedAt": true,
  "restock": true,
  "shopifyCreatedAt": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "shopifyRefund". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyRefundOrDefault<Options extends Selectable<AvailableShopifyRefundSelection>> = DeepFilterNever<
  Select<
    ShopifyRefund,
    DefaultSelection<
      AvailableShopifyRefundSelection,
      Options,
      typeof DefaultShopifyRefundSelection
    >
  >>;

/** Options that can be passed to the `ShopifyRefundManager#findOne` method */
export interface FindOneShopifyRefundOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyRefundSelection;
};

/** Options that can be passed to the `ShopifyRefundManager#maybeFindOne` method */
export interface MaybeFindOneShopifyRefundOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyRefundSelection;
};

/** Options that can be passed to the `ShopifyRefundManager#findMany` method */
export interface FindManyShopifyRefundsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyRefundSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyRefundSort | ShopifyRefundSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyRefundFilter | ShopifyRefundFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ShopifyRefundManager#findFirst` method */
export interface FindFirstShopifyRefundOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyRefundSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyRefundSort | ShopifyRefundSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyRefundFilter | ShopifyRefundFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ShopifyRefundManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyRefundOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyRefundSelection;
  /** Return records sorted by these sorts */
  sort?: ShopifyRefundSort | ShopifyRefundSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyRefundFilter | ShopifyRefundFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateShopifyRefundOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyRefundSelection;
};


const apiIdentifier = "shopifyRefund";
const pluralApiIdentifier = "shopifyRefunds";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateShopifyRefundVariables = {
          shopifyRefund?: CreateShopifyRefundInput,
      }

  /**
   * The inputs for executing create on shopifyRefund.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateShopifyRefundVariables = CreateShopifyRefundInput;



/**
 * The return value from executing create on shopifyRefund.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateShopifyRefundResult<Options extends CreateShopifyRefundOptions> =
  SelectedShopifyRefundOrDefault<Options> extends void ? void : GadgetRecord<SelectedShopifyRefundOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createShopifyRefund<Options extends CreateShopifyRefundOptions>(
  
    variables: CreateShopifyRefundVariables,

  options?: LimitToKnownKeys<Options, CreateShopifyRefundOptions>
): Promise<CreateShopifyRefundResult<Options>>;

// Fully qualified, nested api identifier overload
async function createShopifyRefund<Options extends CreateShopifyRefundOptions>(
  
      variables: FullyQualifiedCreateShopifyRefundVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyRefundOptions>
): Promise<CreateShopifyRefundResult<Options>>;

// Function implementation
async function createShopifyRefund<Options extends CreateShopifyRefundOptions>(
  this: ShopifyRefundManager,
  
      variables: CreateShopifyRefundVariables | FullyQualifiedCreateShopifyRefundVariables,
  
  options?: LimitToKnownKeys<Options, CreateShopifyRefundOptions>
): Promise<CreateShopifyRefundResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedShopifyRefundOrDefault<Options>>(
    this,
    "createShopifyRefund",
    DefaultShopifyRefundSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
                    "shopifyRefund": {
          value: newVariables.shopifyRefund,
          required: false,
          type: "CreateShopifyRefundInput",
        },
          },
    options,
    null,
    false
  ));
}

  



/** All the actions available at the collection level and record level for "shopifyRefund" */
export class ShopifyRefundManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one shopifyRefund by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneShopifyRefundOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyRefundOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyRefundOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "shopifyRefund";
  modelApiIdentifier: "shopifyRefund";
  defaultSelection: typeof DefaultShopifyRefundSelection;
  selectionType: AvailableShopifyRefundSelection;
  optionsType: FindOneShopifyRefundOptions;
  schemaType: Query["shopifyRefund"];
} = Object.assign(
  async <Options extends FindOneShopifyRefundOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyRefundOptions>) => {
    return await findOneRunner<SelectedShopifyRefundOrDefault<Options>>(
      this,
      "shopifyRefund",
      id,
      DefaultShopifyRefundSelection,
      apiIdentifier,
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "shopifyRefund",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyRefundSelection,
  } as any
)

  
    /**
 * Finds one shopifyRefund by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneShopifyRefundOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyRefundOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyRefundOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "shopifyRefund";
  modelApiIdentifier: "shopifyRefund";
  defaultSelection: typeof DefaultShopifyRefundSelection;
  selectionType: AvailableShopifyRefundSelection;
  optionsType: MaybeFindOneShopifyRefundOptions;
  schemaType: Query["shopifyRefund"];
} = Object.assign(
  async <Options extends MaybeFindOneShopifyRefundOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyRefundOptions>) => {
    const record = await findOneRunner<SelectedShopifyRefundOrDefault<Options>>(
      this,
      "shopifyRefund",
      id,
      DefaultShopifyRefundSelection,
      apiIdentifier,
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "shopifyRefund",
    modelApiIdentifier: "shopifyRefund",
    defaultSelection: DefaultShopifyRefundSelection,
  } as any
)

  
    /**
 * Finds many shopifyRefund. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyShopifyRefundsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyRefundsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyRefundOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "shopifyRefunds";
  modelApiIdentifier: "shopifyRefund";
  defaultSelection: typeof DefaultShopifyRefundSelection;
  selectionType: AvailableShopifyRefundSelection;
  optionsType: FindManyShopifyRefundsOptions;
  schemaType: Query["shopifyRefund"];
} = Object.assign(
  async <Options extends FindManyShopifyRefundsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyRefundsOptions>):
    Promise<
      GadgetRecordList<
        SelectedShopifyRefundOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedShopifyRefundOrDefault<Options>>(
      this,
      "shopifyRefunds",
      DefaultShopifyRefundSelection,
      "shopifyRefund",
      options
    );
  },
  {
    type: "findMany",
    operationName: "shopifyRefunds",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyRefundSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyRefund. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstShopifyRefundOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyRefundOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyRefundOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "shopifyRefunds";
  modelApiIdentifier: "shopifyRefund";
  defaultSelection: typeof DefaultShopifyRefundSelection;
  selectionType: AvailableShopifyRefundSelection;
  optionsType: FindFirstShopifyRefundOptions;
  schemaType: Query["shopifyRefund"];
} = Object.assign(
  async <Options extends FindFirstShopifyRefundOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyRefundOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyRefundOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedShopifyRefundOrDefault<Options>>(
      this,
      "shopifyRefunds",
      DefaultShopifyRefundSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "shopifyRefunds",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyRefundSelection,
  } as any
);

  
    /**
 * Finds the first matching shopifyRefund. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstShopifyRefundOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyRefundOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyRefundOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "shopifyRefunds";
  modelApiIdentifier: "shopifyRefund";
  defaultSelection: typeof DefaultShopifyRefundSelection;
  selectionType: AvailableShopifyRefundSelection;
  optionsType: MaybeFindFirstShopifyRefundOptions;
  schemaType: Query["shopifyRefund"];
} = Object.assign(
  async <Options extends MaybeFindFirstShopifyRefundOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyRefundOptions>):
    Promise<
      GadgetRecord<
        SelectedShopifyRefundOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedShopifyRefundOrDefault<Options>>(
      this,
      "shopifyRefunds",
      DefaultShopifyRefundSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "shopifyRefunds",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultShopifyRefundSelection,
  } as any
);

  
    create = Object.assign(createShopifyRefund,
  {
    type: "action",
    operationName: "createShopifyRefund",
    namespace: null,
    modelApiIdentifier: apiIdentifier,
    modelSelectionField: apiIdentifier,
    isBulk: false,
    defaultSelection: DefaultShopifyRefundSelection,
    variables: {
      "shopifyRefund": {
        required: false,
        type: "CreateShopifyRefundInput",
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
    operationName: "createShopifyRefund";
    namespace: null;
    modelApiIdentifier: "shopifyRefund";
    modelSelectionField: "shopifyRefund";
    isBulk: false;
    defaultSelection: typeof DefaultShopifyRefundSelection;
    selectionType: AvailableShopifyRefundSelection;
    optionsType: CreateShopifyRefundOptions;
    schemaType:  Query["shopifyRefund"];

    variablesType: (

      (
        FullyQualifiedCreateShopifyRefundVariables          | CreateShopifyRefundVariables      )
    )
    // all variables are optional, so no variables can be passed at all
    | undefined
    ;
    variables: {
                    "shopifyRefund": {
          required: false;
          type: "CreateShopifyRefundInput";
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
    <Options extends CreateShopifyRefundOptions>(
        inputs: (FullyQualifiedCreateShopifyRefundVariables | CreateShopifyRefundVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyRefundOptions>
    ): Promise<CreateShopifyRefundResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateShopifyRefunds";
    namespace: null;
    modelApiIdentifier: "shopifyRefund";
    modelSelectionField: "shopifyRefunds";
    isBulk: true;
    defaultSelection: typeof DefaultShopifyRefundSelection;
    selectionType: AvailableShopifyRefundSelection;
    optionsType: CreateShopifyRefundOptions;
    schemaType: Query["shopifyRefund"];
    variablesType: (FullyQualifiedCreateShopifyRefundVariables | CreateShopifyRefundVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateShopifyRefundsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateShopifyRefundOptions>(
        inputs: (FullyQualifiedCreateShopifyRefundVariables | CreateShopifyRefundVariables)[],
      options?: LimitToKnownKeys<Options, CreateShopifyRefundOptions>
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
        "bulkCreateShopifyRefunds",
        DefaultShopifyRefundSelection,
        "shopifyRefund",
        "shopifyRefunds",
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
      operationName: "bulkCreateShopifyRefunds",
      namespace: null,
      modelApiIdentifier: apiIdentifier,
      modelSelectionField: "shopifyRefunds",
      isBulk: true,
      defaultSelection: DefaultShopifyRefundSelection,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateShopifyRefundsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
}
