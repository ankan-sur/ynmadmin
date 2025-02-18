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
var ShopifyCollection_exports = {};
__export(ShopifyCollection_exports, {
  DefaultShopifyCollectionSelection: () => DefaultShopifyCollectionSelection,
  ShopifyCollectionManager: () => ShopifyCollectionManager
});
module.exports = __toCommonJS(ShopifyCollection_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultShopifyCollectionSelection = {
  "__typename": true,
  "body": true,
  "collected": true,
  "collectionType": true,
  "createdAt": true,
  "customSales": true,
  "disjunctive": true,
  "handle": true,
  "id": true,
  "image": true,
  "publishedAt": true,
  "publishedScope": true,
  "rules": true,
  "shopifyUpdatedAt": true,
  "shopname": true,
  "smartSales": true,
  "sortOrder": true,
  "templateSuffix": true,
  "title": true,
  "updatedAt": true
};
;
;
;
;
;
;
;
const apiIdentifier = "shopifyCollection";
const pluralApiIdentifier = "shopifyCollections";
async function updateShopifyCollection(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "updateShopifyCollection",
    DefaultShopifyCollectionSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyCollection": {
        value: newVariables.shopifyCollection,
        required: false,
        type: "UpdateShopifyCollectionInput"
      }
    },
    options,
    null,
    false
  );
}
async function smartCollectorShopifyCollection(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "smartCollectorShopifyCollection",
    DefaultShopifyCollectionSelection,
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
class ShopifyCollectionManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyCollection by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyCollection",
          id,
          DefaultShopifyCollectionSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyCollection",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCollectionSelection
      }
    );
    /**
    * Finds one shopifyCollection by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyCollection",
          id,
          DefaultShopifyCollectionSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyCollection",
        modelApiIdentifier: "shopifyCollection",
        defaultSelection: DefaultShopifyCollectionSelection
      }
    );
    /**
    * Finds many shopifyCollection. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyCollections",
          DefaultShopifyCollectionSelection,
          "shopifyCollection",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyCollections",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCollectionSelection
      }
    );
    /**
    * Finds the first matching shopifyCollection. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyCollections",
          DefaultShopifyCollectionSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyCollections",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCollectionSelection
      }
    );
    /**
    * Finds the first matching shopifyCollection. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyCollections",
          DefaultShopifyCollectionSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyCollections",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCollectionSelection
      }
    );
    this.update = Object.assign(
      updateShopifyCollection,
      {
        type: "action",
        operationName: "updateShopifyCollection",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyCollectionSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyCollection": {
            required: false,
            type: "UpdateShopifyCollectionInput"
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
          "bulkUpdateShopifyCollections",
          DefaultShopifyCollectionSelection,
          "shopifyCollection",
          "shopifyCollections",
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
        operationName: "bulkUpdateShopifyCollections",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyCollections",
        isBulk: true,
        defaultSelection: DefaultShopifyCollectionSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyCollectionsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.smartCollector = Object.assign(
      smartCollectorShopifyCollection,
      {
        type: "action",
        operationName: "smartCollectorShopifyCollection",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyCollectionSelection,
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
    * Executes the bulkSmartCollector action with the given inputs.
    */
    this.bulkSmartCollector = Object.assign(
      async (ids, options) => {
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkSmartCollectorShopifyCollections",
          DefaultShopifyCollectionSelection,
          "shopifyCollection",
          "shopifyCollections",
          true,
          {
            ids: {
              value: ids,
              ...this["bulkSmartCollector"].variables["ids"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkSmartCollectorShopifyCollections",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyCollections",
        isBulk: true,
        defaultSelection: DefaultShopifyCollectionSelection,
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
  DefaultShopifyCollectionSelection,
  ShopifyCollectionManager
});
//# sourceMappingURL=ShopifyCollection.js.map
