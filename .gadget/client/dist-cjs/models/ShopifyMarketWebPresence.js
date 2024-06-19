"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ShopifyMarketWebPresence_exports = {};
__export(ShopifyMarketWebPresence_exports, {
  DefaultShopifyMarketWebPresenceSelection: () => DefaultShopifyMarketWebPresenceSelection,
  ShopifyMarketWebPresenceManager: () => ShopifyMarketWebPresenceManager
});
module.exports = __toCommonJS(ShopifyMarketWebPresence_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
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
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
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
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
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
  return await (0, import_api_client_core.actionRunner)(
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
        return await (0, import_api_client_core.findOneRunner)(
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
        const record = await (0, import_api_client_core.findOneRunner)(
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
        return await (0, import_api_client_core.findManyRunner)(
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
        const list = await (0, import_api_client_core.findManyRunner)(
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
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyMarketWebPresences",
          DefaultShopifyMarketWebPresenceSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
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
          (input) => (0, import_support.disambiguateActionParams)(
            this["create"],
            void 0,
            input
          )
        );
        return await (0, import_api_client_core.actionRunner)(
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
          (input) => (0, import_support.disambiguateActionParams)(
            this["update"],
            void 0,
            input
          )
        );
        return await (0, import_api_client_core.actionRunner)(
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
        return await (0, import_api_client_core.actionRunner)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopifyMarketWebPresenceSelection,
  ShopifyMarketWebPresenceManager
});
//# sourceMappingURL=ShopifyMarketWebPresence.js.map
