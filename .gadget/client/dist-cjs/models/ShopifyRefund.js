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
var ShopifyRefund_exports = {};
__export(ShopifyRefund_exports, {
  DefaultShopifyRefundSelection: () => DefaultShopifyRefundSelection,
  ShopifyRefundManager: () => ShopifyRefundManager
});
module.exports = __toCommonJS(ShopifyRefund_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultShopifyRefundSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "note": true,
  "processedAt": true,
  "restock": true,
  "shopifyCreatedAt": true,
  "updatedAt": true
};
;
;
;
;
;
;
const apiIdentifier = "shopifyRefund";
const pluralApiIdentifier = "shopifyRefunds";
async function createShopifyRefund(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createShopifyRefund",
    DefaultShopifyRefundSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyRefund": {
        value: newVariables.shopifyRefund,
        required: false,
        type: "CreateShopifyRefundInput"
      }
    },
    options,
    null,
    false
  );
}
class ShopifyRefundManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyRefund by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyRefund",
          id,
          DefaultShopifyRefundSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyRefund",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundSelection
      }
    );
    /**
    * Finds one shopifyRefund by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyRefund",
          id,
          DefaultShopifyRefundSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyRefund",
        modelApiIdentifier: "shopifyRefund",
        defaultSelection: DefaultShopifyRefundSelection
      }
    );
    /**
    * Finds many shopifyRefund. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyRefunds",
          DefaultShopifyRefundSelection,
          "shopifyRefund",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyRefunds",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundSelection
      }
    );
    /**
    * Finds the first matching shopifyRefund. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyRefunds",
          DefaultShopifyRefundSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyRefunds",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundSelection
      }
    );
    /**
    * Finds the first matching shopifyRefund. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyRefunds",
          DefaultShopifyRefundSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyRefunds",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundSelection
      }
    );
    this.create = Object.assign(
      createShopifyRefund,
      {
        type: "action",
        operationName: "createShopifyRefund",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyRefundSelection,
        variables: {
          "shopifyRefund": {
            required: false,
            type: "CreateShopifyRefundInput"
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
          "bulkCreateShopifyRefunds",
          DefaultShopifyRefundSelection,
          "shopifyRefund",
          "shopifyRefunds",
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
        operationName: "bulkCreateShopifyRefunds",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyRefunds",
        isBulk: true,
        defaultSelection: DefaultShopifyRefundSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyRefundsInput!]"
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
  DefaultShopifyRefundSelection,
  ShopifyRefundManager
});
//# sourceMappingURL=ShopifyRefund.js.map
