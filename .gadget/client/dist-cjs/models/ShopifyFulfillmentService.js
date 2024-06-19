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
var ShopifyFulfillmentService_exports = {};
__export(ShopifyFulfillmentService_exports, {
  DefaultShopifyFulfillmentServiceSelection: () => DefaultShopifyFulfillmentServiceSelection,
  ShopifyFulfillmentServiceManager: () => ShopifyFulfillmentServiceManager
});
module.exports = __toCommonJS(ShopifyFulfillmentService_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultShopifyFulfillmentServiceSelection = {
  "__typename": true,
  "callbackUrl": true,
  "createdAt": true,
  "format": true,
  "fulfillmentOrdersOptIn": true,
  "handle": true,
  "id": true,
  "inventoryManagement": true,
  "name": true,
  "permitsSkuSharing": true,
  "requiresShippingMethod": true,
  "trackingSupport": true,
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
const apiIdentifier = "shopifyFulfillmentService";
const pluralApiIdentifier = "shopifyFulfillmentServices";
async function createShopifyFulfillmentService(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createShopifyFulfillmentService",
    DefaultShopifyFulfillmentServiceSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyFulfillmentService": {
        value: newVariables.shopifyFulfillmentService,
        required: false,
        type: "CreateShopifyFulfillmentServiceInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyFulfillmentService(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "updateShopifyFulfillmentService",
    DefaultShopifyFulfillmentServiceSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyFulfillmentService": {
        value: newVariables.shopifyFulfillmentService,
        required: false,
        type: "UpdateShopifyFulfillmentServiceInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteShopifyFulfillmentService(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "deleteShopifyFulfillmentService",
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
class ShopifyFulfillmentServiceManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyFulfillmentService by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyFulfillmentService",
          id,
          DefaultShopifyFulfillmentServiceSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillmentService",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentServiceSelection
      }
    );
    /**
    * Finds one shopifyFulfillmentService by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyFulfillmentService",
          id,
          DefaultShopifyFulfillmentServiceSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillmentService",
        modelApiIdentifier: "shopifyFulfillmentService",
        defaultSelection: DefaultShopifyFulfillmentServiceSelection
      }
    );
    /**
    * Finds many shopifyFulfillmentService. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyFulfillmentServices",
          DefaultShopifyFulfillmentServiceSelection,
          "shopifyFulfillmentService",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyFulfillmentServices",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentServiceSelection
      }
    );
    /**
    * Finds the first matching shopifyFulfillmentService. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyFulfillmentServices",
          DefaultShopifyFulfillmentServiceSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyFulfillmentServices",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentServiceSelection
      }
    );
    /**
    * Finds the first matching shopifyFulfillmentService. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyFulfillmentServices",
          DefaultShopifyFulfillmentServiceSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyFulfillmentServices",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentServiceSelection
      }
    );
    this.create = Object.assign(
      createShopifyFulfillmentService,
      {
        type: "action",
        operationName: "createShopifyFulfillmentService",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyFulfillmentServiceSelection,
        variables: {
          "shopifyFulfillmentService": {
            required: false,
            type: "CreateShopifyFulfillmentServiceInput"
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
          "bulkCreateShopifyFulfillmentServices",
          DefaultShopifyFulfillmentServiceSelection,
          "shopifyFulfillmentService",
          "shopifyFulfillmentServices",
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
        operationName: "bulkCreateShopifyFulfillmentServices",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyFulfillmentServices",
        isBulk: true,
        defaultSelection: DefaultShopifyFulfillmentServiceSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyFulfillmentServicesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyFulfillmentService,
      {
        type: "action",
        operationName: "updateShopifyFulfillmentService",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyFulfillmentServiceSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyFulfillmentService": {
            required: false,
            type: "UpdateShopifyFulfillmentServiceInput"
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
          "bulkUpdateShopifyFulfillmentServices",
          DefaultShopifyFulfillmentServiceSelection,
          "shopifyFulfillmentService",
          "shopifyFulfillmentServices",
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
        operationName: "bulkUpdateShopifyFulfillmentServices",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyFulfillmentServices",
        isBulk: true,
        defaultSelection: DefaultShopifyFulfillmentServiceSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyFulfillmentServicesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteShopifyFulfillmentService,
      {
        type: "action",
        operationName: "deleteShopifyFulfillmentService",
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
          "bulkDeleteShopifyFulfillmentServices",
          null,
          "shopifyFulfillmentService",
          "shopifyFulfillmentServices",
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
        operationName: "bulkDeleteShopifyFulfillmentServices",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyFulfillmentServices",
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
  DefaultShopifyFulfillmentServiceSelection,
  ShopifyFulfillmentServiceManager
});
//# sourceMappingURL=ShopifyFulfillmentService.js.map
