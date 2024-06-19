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
var ShopifyFulfillment_exports = {};
__export(ShopifyFulfillment_exports, {
  DefaultShopifyFulfillmentSelection: () => DefaultShopifyFulfillmentSelection,
  ShopifyFulfillmentManager: () => ShopifyFulfillmentManager
});
module.exports = __toCommonJS(ShopifyFulfillment_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultShopifyFulfillmentSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "name": true,
  "notifyCustomer": true,
  "originAddress": true,
  "receipt": true,
  "service": true,
  "shipmentStatus": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "status": true,
  "trackingCompany": true,
  "trackingNumbers": true,
  "trackingUrls": true,
  "updatedAt": true,
  "variantInventoryManagement": true
};
;
;
;
;
;
;
;
;
const apiIdentifier = "shopifyFulfillment";
const pluralApiIdentifier = "shopifyFulfillments";
async function createShopifyFulfillment(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createShopifyFulfillment",
    DefaultShopifyFulfillmentSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyFulfillment": {
        value: newVariables.shopifyFulfillment,
        required: false,
        type: "CreateShopifyFulfillmentInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyFulfillment(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "updateShopifyFulfillment",
    DefaultShopifyFulfillmentSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyFulfillment": {
        value: newVariables.shopifyFulfillment,
        required: false,
        type: "UpdateShopifyFulfillmentInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteShopifyFulfillment(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "deleteShopifyFulfillment",
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
class ShopifyFulfillmentManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyFulfillment by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyFulfillment",
          id,
          DefaultShopifyFulfillmentSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillment",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentSelection
      }
    );
    /**
    * Finds one shopifyFulfillment by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyFulfillment",
          id,
          DefaultShopifyFulfillmentSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillment",
        modelApiIdentifier: "shopifyFulfillment",
        defaultSelection: DefaultShopifyFulfillmentSelection
      }
    );
    /**
    * Finds many shopifyFulfillment. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyFulfillments",
          DefaultShopifyFulfillmentSelection,
          "shopifyFulfillment",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyFulfillments",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentSelection
      }
    );
    /**
    * Finds the first matching shopifyFulfillment. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyFulfillments",
          DefaultShopifyFulfillmentSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyFulfillments",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentSelection
      }
    );
    /**
    * Finds the first matching shopifyFulfillment. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyFulfillments",
          DefaultShopifyFulfillmentSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyFulfillments",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentSelection
      }
    );
    this.create = Object.assign(
      createShopifyFulfillment,
      {
        type: "action",
        operationName: "createShopifyFulfillment",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyFulfillmentSelection,
        variables: {
          "shopifyFulfillment": {
            required: false,
            type: "CreateShopifyFulfillmentInput"
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
          "bulkCreateShopifyFulfillments",
          DefaultShopifyFulfillmentSelection,
          "shopifyFulfillment",
          "shopifyFulfillments",
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
        operationName: "bulkCreateShopifyFulfillments",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyFulfillments",
        isBulk: true,
        defaultSelection: DefaultShopifyFulfillmentSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyFulfillmentsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyFulfillment,
      {
        type: "action",
        operationName: "updateShopifyFulfillment",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyFulfillmentSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyFulfillment": {
            required: false,
            type: "UpdateShopifyFulfillmentInput"
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
          "bulkUpdateShopifyFulfillments",
          DefaultShopifyFulfillmentSelection,
          "shopifyFulfillment",
          "shopifyFulfillments",
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
        operationName: "bulkUpdateShopifyFulfillments",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyFulfillments",
        isBulk: true,
        defaultSelection: DefaultShopifyFulfillmentSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyFulfillmentsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteShopifyFulfillment,
      {
        type: "action",
        operationName: "deleteShopifyFulfillment",
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
          "bulkDeleteShopifyFulfillments",
          null,
          "shopifyFulfillment",
          "shopifyFulfillments",
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
        operationName: "bulkDeleteShopifyFulfillments",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyFulfillments",
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
  DefaultShopifyFulfillmentSelection,
  ShopifyFulfillmentManager
});
//# sourceMappingURL=ShopifyFulfillment.js.map
