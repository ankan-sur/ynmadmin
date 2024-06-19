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
var ShopifyMarketRegion_exports = {};
__export(ShopifyMarketRegion_exports, {
  DefaultShopifyMarketRegionSelection: () => DefaultShopifyMarketRegionSelection,
  ShopifyMarketRegionManager: () => ShopifyMarketRegionManager
});
module.exports = __toCommonJS(ShopifyMarketRegion_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultShopifyMarketRegionSelection = {
  "__typename": true,
  "code": true,
  "createdAt": true,
  "id": true,
  "name": true,
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
const apiIdentifier = "shopifyMarketRegion";
const pluralApiIdentifier = "shopifyMarketRegions";
async function createShopifyMarketRegion(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createShopifyMarketRegion",
    DefaultShopifyMarketRegionSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyMarketRegion": {
        value: newVariables.shopifyMarketRegion,
        required: false,
        type: "CreateShopifyMarketRegionInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyMarketRegion(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "updateShopifyMarketRegion",
    DefaultShopifyMarketRegionSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyMarketRegion": {
        value: newVariables.shopifyMarketRegion,
        required: false,
        type: "UpdateShopifyMarketRegionInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteShopifyMarketRegion(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "deleteShopifyMarketRegion",
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
class ShopifyMarketRegionManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyMarketRegion by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyMarketRegion",
          id,
          DefaultShopifyMarketRegionSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyMarketRegion",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyMarketRegionSelection
      }
    );
    /**
    * Finds one shopifyMarketRegion by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyMarketRegion",
          id,
          DefaultShopifyMarketRegionSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyMarketRegion",
        modelApiIdentifier: "shopifyMarketRegion",
        defaultSelection: DefaultShopifyMarketRegionSelection
      }
    );
    /**
    * Finds many shopifyMarketRegion. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyMarketRegions",
          DefaultShopifyMarketRegionSelection,
          "shopifyMarketRegion",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyMarketRegions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyMarketRegionSelection
      }
    );
    /**
    * Finds the first matching shopifyMarketRegion. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyMarketRegions",
          DefaultShopifyMarketRegionSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyMarketRegions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyMarketRegionSelection
      }
    );
    /**
    * Finds the first matching shopifyMarketRegion. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyMarketRegions",
          DefaultShopifyMarketRegionSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyMarketRegions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyMarketRegionSelection
      }
    );
    this.create = Object.assign(
      createShopifyMarketRegion,
      {
        type: "action",
        operationName: "createShopifyMarketRegion",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyMarketRegionSelection,
        variables: {
          "shopifyMarketRegion": {
            required: false,
            type: "CreateShopifyMarketRegionInput"
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
          "bulkCreateShopifyMarketRegions",
          DefaultShopifyMarketRegionSelection,
          "shopifyMarketRegion",
          "shopifyMarketRegions",
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
        operationName: "bulkCreateShopifyMarketRegions",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyMarketRegions",
        isBulk: true,
        defaultSelection: DefaultShopifyMarketRegionSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyMarketRegionsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyMarketRegion,
      {
        type: "action",
        operationName: "updateShopifyMarketRegion",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyMarketRegionSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyMarketRegion": {
            required: false,
            type: "UpdateShopifyMarketRegionInput"
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
          "bulkUpdateShopifyMarketRegions",
          DefaultShopifyMarketRegionSelection,
          "shopifyMarketRegion",
          "shopifyMarketRegions",
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
        operationName: "bulkUpdateShopifyMarketRegions",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyMarketRegions",
        isBulk: true,
        defaultSelection: DefaultShopifyMarketRegionSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyMarketRegionsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteShopifyMarketRegion,
      {
        type: "action",
        operationName: "deleteShopifyMarketRegion",
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
          "bulkDeleteShopifyMarketRegions",
          null,
          "shopifyMarketRegion",
          "shopifyMarketRegions",
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
        operationName: "bulkDeleteShopifyMarketRegions",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyMarketRegions",
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
  DefaultShopifyMarketRegionSelection,
  ShopifyMarketRegionManager
});
//# sourceMappingURL=ShopifyMarketRegion.js.map
