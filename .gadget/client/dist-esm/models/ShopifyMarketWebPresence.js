import {
  actionRunner,
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultShopifyMarketWebPresenceSelection = {
  "__typename": true,
  "alternateLocales": true,
  "createdAt": true,
  "id": true,
  "rootUrls": true,
  "subfolderSuffix": true,
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
const apiIdentifier = "shopifyMarketWebPresence";
const pluralApiIdentifier = "shopifyMarketWebPresences";
async function createShopifyMarketWebPresence(variables, options) {
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
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
        type: "CreateShopifyMarketWebPresenceInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyMarketWebPresence(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
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
        type: "GadgetID"
      },
      "shopifyMarketWebPresence": {
        value: newVariables.shopifyMarketWebPresence,
        required: false,
        type: "UpdateShopifyMarketWebPresenceInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteShopifyMarketWebPresence(id, options) {
  return await actionRunner(
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
        type: "GadgetID"
      }
    },
    options,
    null,
    false
  );
}
class ShopifyMarketWebPresenceManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyMarketWebPresence by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
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
        defaultSelection: DefaultShopifyMarketWebPresenceSelection
      }
    );
    /**
    * Finds one shopifyMarketWebPresence by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
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
        defaultSelection: DefaultShopifyMarketWebPresenceSelection
      }
    );
    /**
    * Finds many shopifyMarketWebPresence. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
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
        defaultSelection: DefaultShopifyMarketWebPresenceSelection
      }
    );
    /**
    * Finds the first matching shopifyMarketWebPresence. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyMarketWebPresences",
          DefaultShopifyMarketWebPresenceSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyMarketWebPresences",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyMarketWebPresenceSelection
      }
    );
    /**
    * Finds the first matching shopifyMarketWebPresence. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyMarketWebPresences",
          DefaultShopifyMarketWebPresenceSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyMarketWebPresences",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyMarketWebPresenceSelection
      }
    );
    this.create = Object.assign(
      createShopifyMarketWebPresence,
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
            type: "CreateShopifyMarketWebPresenceInput"
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
          },
          options,
          null,
          false
        );
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
            type: "[BulkCreateShopifyMarketWebPresencesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyMarketWebPresence,
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
            type: "GadgetID"
          },
          "shopifyMarketWebPresence": {
            required: false,
            type: "UpdateShopifyMarketWebPresenceInput"
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
          },
          options,
          null,
          false
        );
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
            type: "[BulkUpdateShopifyMarketWebPresencesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteShopifyMarketWebPresence,
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
          },
          options,
          null,
          false
        );
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
  DefaultShopifyMarketWebPresenceSelection,
  ShopifyMarketWebPresenceManager
};
//# sourceMappingURL=ShopifyMarketWebPresence.js.map
