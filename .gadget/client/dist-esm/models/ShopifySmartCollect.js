import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultShopifySmartCollectSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "updatedAt": true
};
;
;
;
;
;
;
;
;
const apiIdentifier = "shopifySmartCollect";
const pluralApiIdentifier = "shopifySmartCollects";
async function createShopifySmartCollect(variables, options) {
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "createShopifySmartCollect",
    DefaultShopifySmartCollectSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifySmartCollect": {
        value: newVariables.shopifySmartCollect,
        required: false,
        type: "CreateShopifySmartCollectInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifySmartCollect(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "updateShopifySmartCollect",
    DefaultShopifySmartCollectSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifySmartCollect": {
        value: newVariables.shopifySmartCollect,
        required: false,
        type: "UpdateShopifySmartCollectInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteShopifySmartCollect(id, options) {
  return await actionRunner(
    this,
    "deleteShopifySmartCollect",
    null,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      }
    },
    options,
    null,
    false
  );
}
class ShopifySmartCollectManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifySmartCollect by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifySmartCollect",
          id,
          DefaultShopifySmartCollectSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySmartCollect",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySmartCollectSelection
      }
    );
    /**
    * Finds one shopifySmartCollect by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifySmartCollect",
          id,
          DefaultShopifySmartCollectSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifySmartCollect",
        modelApiIdentifier: "shopifySmartCollect",
        defaultSelection: DefaultShopifySmartCollectSelection
      }
    );
    /**
    * Finds many shopifySmartCollect. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifySmartCollects",
          DefaultShopifySmartCollectSelection,
          "shopifySmartCollect",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifySmartCollects",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySmartCollectSelection
      }
    );
    /**
    * Finds the first matching shopifySmartCollect. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifySmartCollects",
          DefaultShopifySmartCollectSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifySmartCollects",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySmartCollectSelection
      }
    );
    /**
    * Finds the first matching shopifySmartCollect. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifySmartCollects",
          DefaultShopifySmartCollectSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifySmartCollects",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySmartCollectSelection
      }
    );
    /**
    * Finds one shopifySmartCollect by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
          this,
          "shopifySmartCollects",
          "id",
          value,
          DefaultShopifySmartCollectSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifySmartCollects",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifySmartCollectSelection
      }
    );
    this.create = Object.assign(
      createShopifySmartCollect,
      {
        type: "action",
        operationName: "createShopifySmartCollect",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifySmartCollectSelection,
        variables: {
          "shopifySmartCollect": {
            required: false,
            type: "CreateShopifySmartCollectInput"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    /**
    * Executes the bulkCreate action with the given inputs.
    */
    this.bulkCreate = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => disambiguateActionParams(
            this["create"],
            void 0,
            input
          )
        );
        return await actionRunner(
          this,
          "bulkCreateShopifySmartCollects",
          DefaultShopifySmartCollectSelection,
          "shopifySmartCollect",
          "shopifySmartCollects",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkCreate"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkCreateShopifySmartCollects",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifySmartCollects",
        isBulk: true,
        defaultSelection: DefaultShopifySmartCollectSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifySmartCollectsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifySmartCollect,
      {
        type: "action",
        operationName: "updateShopifySmartCollect",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifySmartCollectSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifySmartCollect": {
            required: false,
            type: "UpdateShopifySmartCollectInput"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    /**
    * Executes the bulkUpdate action with the given inputs.
    */
    this.bulkUpdate = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => disambiguateActionParams(
            this["update"],
            void 0,
            input
          )
        );
        return await actionRunner(
          this,
          "bulkUpdateShopifySmartCollects",
          DefaultShopifySmartCollectSelection,
          "shopifySmartCollect",
          "shopifySmartCollects",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkUpdate"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateShopifySmartCollects",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifySmartCollects",
        isBulk: true,
        defaultSelection: DefaultShopifySmartCollectSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifySmartCollectsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteShopifySmartCollect,
      {
        type: "action",
        operationName: "deleteShopifySmartCollect",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: null,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
    /**
    * Executes the bulkDelete action with the given inputs. Deletes the records on the server.
    */
    this.bulkDelete = Object.assign(
      async (ids, options) => {
        return await actionRunner(
          this,
          "bulkDeleteShopifySmartCollects",
          null,
          "shopifySmartCollect",
          "shopifySmartCollects",
          true,
          {
            ids: {
              value: ids,
              ...this["bulkDelete"].variables["ids"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkDeleteShopifySmartCollects",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifySmartCollects",
        isBulk: true,
        defaultSelection: null,
        variables: {
          ids: {
            required: true,
            type: "[GadgetID!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
  }
}
export {
  DefaultShopifySmartCollectSelection,
  ShopifySmartCollectManager
};
//# sourceMappingURL=ShopifySmartCollect.js.map
