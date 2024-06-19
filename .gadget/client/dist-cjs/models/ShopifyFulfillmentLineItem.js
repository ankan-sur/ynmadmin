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
var ShopifyFulfillmentLineItem_exports = {};
__export(ShopifyFulfillmentLineItem_exports, {
  DefaultShopifyFulfillmentLineItemSelection: () => DefaultShopifyFulfillmentLineItemSelection,
  ShopifyFulfillmentLineItemManager: () => ShopifyFulfillmentLineItemManager
});
module.exports = __toCommonJS(ShopifyFulfillmentLineItem_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultShopifyFulfillmentLineItemSelection = {
  "__typename": true,
  "createdAt": true,
  "discountedTotalSet": true,
  "id": true,
  "originalTotalSet": true,
  "quantity": true,
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
const apiIdentifier = "shopifyFulfillmentLineItem";
const pluralApiIdentifier = "shopifyFulfillmentLineItems";
async function createShopifyFulfillmentLineItem(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createShopifyFulfillmentLineItem",
    DefaultShopifyFulfillmentLineItemSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyFulfillmentLineItem": {
        value: newVariables.shopifyFulfillmentLineItem,
        required: false,
        type: "CreateShopifyFulfillmentLineItemInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyFulfillmentLineItem(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "updateShopifyFulfillmentLineItem",
    DefaultShopifyFulfillmentLineItemSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyFulfillmentLineItem": {
        value: newVariables.shopifyFulfillmentLineItem,
        required: false,
        type: "UpdateShopifyFulfillmentLineItemInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteShopifyFulfillmentLineItem(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "deleteShopifyFulfillmentLineItem",
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
class ShopifyFulfillmentLineItemManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyFulfillmentLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyFulfillmentLineItem",
          id,
          DefaultShopifyFulfillmentLineItemSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillmentLineItem",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentLineItemSelection
      }
    );
    /**
    * Finds one shopifyFulfillmentLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyFulfillmentLineItem",
          id,
          DefaultShopifyFulfillmentLineItemSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillmentLineItem",
        modelApiIdentifier: "shopifyFulfillmentLineItem",
        defaultSelection: DefaultShopifyFulfillmentLineItemSelection
      }
    );
    /**
    * Finds many shopifyFulfillmentLineItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyFulfillmentLineItems",
          DefaultShopifyFulfillmentLineItemSelection,
          "shopifyFulfillmentLineItem",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyFulfillmentLineItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentLineItemSelection
      }
    );
    /**
    * Finds the first matching shopifyFulfillmentLineItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyFulfillmentLineItems",
          DefaultShopifyFulfillmentLineItemSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyFulfillmentLineItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentLineItemSelection
      }
    );
    /**
    * Finds the first matching shopifyFulfillmentLineItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyFulfillmentLineItems",
          DefaultShopifyFulfillmentLineItemSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyFulfillmentLineItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentLineItemSelection
      }
    );
    /**
    * Finds one shopifyFulfillmentLineItem by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await (0, import_api_client_core.findOneByFieldRunner)(
          this,
          "shopifyFulfillmentLineItems",
          "id",
          value,
          DefaultShopifyFulfillmentLineItemSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillmentLineItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentLineItemSelection
      }
    );
    this.create = Object.assign(
      createShopifyFulfillmentLineItem,
      {
        type: "action",
        operationName: "createShopifyFulfillmentLineItem",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyFulfillmentLineItemSelection,
        variables: {
          "shopifyFulfillmentLineItem": {
            required: false,
            type: "CreateShopifyFulfillmentLineItemInput"
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
          "bulkCreateShopifyFulfillmentLineItems",
          DefaultShopifyFulfillmentLineItemSelection,
          "shopifyFulfillmentLineItem",
          "shopifyFulfillmentLineItems",
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
        operationName: "bulkCreateShopifyFulfillmentLineItems",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyFulfillmentLineItems",
        isBulk: true,
        defaultSelection: DefaultShopifyFulfillmentLineItemSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyFulfillmentLineItemsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyFulfillmentLineItem,
      {
        type: "action",
        operationName: "updateShopifyFulfillmentLineItem",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyFulfillmentLineItemSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyFulfillmentLineItem": {
            required: false,
            type: "UpdateShopifyFulfillmentLineItemInput"
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
          "bulkUpdateShopifyFulfillmentLineItems",
          DefaultShopifyFulfillmentLineItemSelection,
          "shopifyFulfillmentLineItem",
          "shopifyFulfillmentLineItems",
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
        operationName: "bulkUpdateShopifyFulfillmentLineItems",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyFulfillmentLineItems",
        isBulk: true,
        defaultSelection: DefaultShopifyFulfillmentLineItemSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyFulfillmentLineItemsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteShopifyFulfillmentLineItem,
      {
        type: "action",
        operationName: "deleteShopifyFulfillmentLineItem",
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
          "bulkDeleteShopifyFulfillmentLineItems",
          null,
          "shopifyFulfillmentLineItem",
          "shopifyFulfillmentLineItems",
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
        operationName: "bulkDeleteShopifyFulfillmentLineItems",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyFulfillmentLineItems",
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
  DefaultShopifyFulfillmentLineItemSelection,
  ShopifyFulfillmentLineItemManager
});
//# sourceMappingURL=ShopifyFulfillmentLineItem.js.map
