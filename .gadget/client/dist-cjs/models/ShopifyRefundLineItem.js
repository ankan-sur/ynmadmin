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
var ShopifyRefundLineItem_exports = {};
__export(ShopifyRefundLineItem_exports, {
  DefaultShopifyRefundLineItemSelection: () => DefaultShopifyRefundLineItemSelection,
  ShopifyRefundLineItemManager: () => ShopifyRefundLineItemManager
});
module.exports = __toCommonJS(ShopifyRefundLineItem_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultShopifyRefundLineItemSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "quantity": true,
  "restockType": true,
  "subtotal": true,
  "subtotalSet": true,
  "totalTax": true,
  "totalTaxSet": true,
  "updatedAt": true
};
;
;
;
;
;
;
const apiIdentifier = "shopifyRefundLineItem";
const pluralApiIdentifier = "shopifyRefundLineItems";
async function createShopifyRefundLineItem(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createShopifyRefundLineItem",
    DefaultShopifyRefundLineItemSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyRefundLineItem": {
        value: newVariables.shopifyRefundLineItem,
        required: false,
        type: "CreateShopifyRefundLineItemInput"
      }
    },
    options,
    null,
    false
  );
}
class ShopifyRefundLineItemManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyRefundLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyRefundLineItem",
          id,
          DefaultShopifyRefundLineItemSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyRefundLineItem",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundLineItemSelection
      }
    );
    /**
    * Finds one shopifyRefundLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyRefundLineItem",
          id,
          DefaultShopifyRefundLineItemSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyRefundLineItem",
        modelApiIdentifier: "shopifyRefundLineItem",
        defaultSelection: DefaultShopifyRefundLineItemSelection
      }
    );
    /**
    * Finds many shopifyRefundLineItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyRefundLineItems",
          DefaultShopifyRefundLineItemSelection,
          "shopifyRefundLineItem",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyRefundLineItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundLineItemSelection
      }
    );
    /**
    * Finds the first matching shopifyRefundLineItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyRefundLineItems",
          DefaultShopifyRefundLineItemSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyRefundLineItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundLineItemSelection
      }
    );
    /**
    * Finds the first matching shopifyRefundLineItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyRefundLineItems",
          DefaultShopifyRefundLineItemSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyRefundLineItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundLineItemSelection
      }
    );
    this.create = Object.assign(
      createShopifyRefundLineItem,
      {
        type: "action",
        operationName: "createShopifyRefundLineItem",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyRefundLineItemSelection,
        variables: {
          "shopifyRefundLineItem": {
            required: false,
            type: "CreateShopifyRefundLineItemInput"
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
          "bulkCreateShopifyRefundLineItems",
          DefaultShopifyRefundLineItemSelection,
          "shopifyRefundLineItem",
          "shopifyRefundLineItems",
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
        operationName: "bulkCreateShopifyRefundLineItems",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyRefundLineItems",
        isBulk: true,
        defaultSelection: DefaultShopifyRefundLineItemSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyRefundLineItemsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopifyRefundLineItemSelection,
  ShopifyRefundLineItemManager
});
//# sourceMappingURL=ShopifyRefundLineItem.js.map
