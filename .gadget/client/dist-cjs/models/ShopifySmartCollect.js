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
var ShopifySmartCollect_exports = {};
__export(ShopifySmartCollect_exports, {
  DefaultShopifySmartCollectSelection: () => DefaultShopifySmartCollectSelection,
  ShopifySmartCollectManager: () => ShopifySmartCollectManager
});
module.exports = __toCommonJS(ShopifySmartCollect_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
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
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
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
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
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
  return await (0, import_api_client_core.actionRunner)(
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
        return await (0, import_api_client_core.findOneRunner)(
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
        const record = await (0, import_api_client_core.findOneRunner)(
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
        return await (0, import_api_client_core.findManyRunner)(
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
        const list = await (0, import_api_client_core.findManyRunner)(
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
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifySmartCollects",
          DefaultShopifySmartCollectSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
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
        return await (0, import_api_client_core.findOneByFieldRunner)(
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
          (input) => (0, import_support.disambiguateActionParams)(
            this["create"],
            void 0,
            input
          )
        );
        return await (0, import_api_client_core.actionRunner)(
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
          (input) => (0, import_support.disambiguateActionParams)(
            this["update"],
            void 0,
            input
          )
        );
        return await (0, import_api_client_core.actionRunner)(
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
        return await (0, import_api_client_core.actionRunner)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopifySmartCollectSelection,
  ShopifySmartCollectManager
});
//# sourceMappingURL=ShopifySmartCollect.js.map
