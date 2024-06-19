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
var ShopifyPayout_exports = {};
__export(ShopifyPayout_exports, {
  DefaultShopifyPayoutSelection: () => DefaultShopifyPayoutSelection,
  ShopifyPayoutManager: () => ShopifyPayoutManager
});
module.exports = __toCommonJS(ShopifyPayout_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
const DefaultShopifyPayoutSelection = {
  "__typename": true,
  "amount": true,
  "createdAt": true,
  "currency": true,
  "date": true,
  "id": true,
  "status": true,
  "summary": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyPayout";
const pluralApiIdentifier = "shopifyPayouts";
class ShopifyPayoutManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyPayout by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyPayout",
          id,
          DefaultShopifyPayoutSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyPayout",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyPayoutSelection
      }
    );
    /**
    * Finds one shopifyPayout by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyPayout",
          id,
          DefaultShopifyPayoutSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyPayout",
        modelApiIdentifier: "shopifyPayout",
        defaultSelection: DefaultShopifyPayoutSelection
      }
    );
    /**
    * Finds many shopifyPayout. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyPayouts",
          DefaultShopifyPayoutSelection,
          "shopifyPayout",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyPayouts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyPayoutSelection
      }
    );
    /**
    * Finds the first matching shopifyPayout. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyPayouts",
          DefaultShopifyPayoutSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyPayouts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyPayoutSelection
      }
    );
    /**
    * Finds the first matching shopifyPayout. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyPayouts",
          DefaultShopifyPayoutSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyPayouts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyPayoutSelection
      }
    );
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopifyPayoutSelection,
  ShopifyPayoutManager
});
//# sourceMappingURL=ShopifyPayout.js.map
