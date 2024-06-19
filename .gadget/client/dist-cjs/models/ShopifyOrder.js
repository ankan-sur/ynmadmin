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
var ShopifyOrder_exports = {};
__export(ShopifyOrder_exports, {
  DefaultShopifyOrderSelection: () => DefaultShopifyOrderSelection,
  ShopifyOrderManager: () => ShopifyOrderManager
});
module.exports = __toCommonJS(ShopifyOrder_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
const DefaultShopifyOrderSelection = {
  "__typename": true,
  "additionalFees": true,
  "billingAddress": true,
  "browserIp": true,
  "buyerAcceptsMarketing": true,
  "cancelReason": true,
  "cancellation": true,
  "cancelledAt": true,
  "cartToken": true,
  "checkoutToken": true,
  "clientDetails": true,
  "closedAt": true,
  "createdAt": true,
  "currency": true,
  "currentSubtotalPrice": true,
  "currentSubtotalPriceSet": true,
  "currentTotalAdditionalFeesSet": true,
  "currentTotalDiscounts": true,
  "currentTotalDiscountsSet": true,
  "currentTotalDutiesSet": true,
  "currentTotalPrice": true,
  "currentTotalPriceSet": true,
  "currentTotalTax": true,
  "currentTotalTaxSet": true,
  "customerLocale": true,
  "discountApplications": true,
  "discountCodes": true,
  "email": true,
  "estimatedTaxes": true,
  "financialStatus": true,
  "fulfillmentStatus": true,
  "id": true,
  "landingSite": true,
  "name": true,
  "note": true,
  "noteAttributes": true,
  "number": true,
  "orderNumber": true,
  "orderStatusUrl": true,
  "originalTotalAdditionalFeesSet": true,
  "originalTotalDutiesSet": true,
  "paymentGatewayNames": true,
  "phone": true,
  "poNumber": true,
  "presentmentCurrency": true,
  "processedAt": true,
  "purchasingEntity": true,
  "referringSite": true,
  "shippingAddress": true,
  "shopifyCreatedAt": true,
  "shopifyProtect": true,
  "shopifyUpdatedAt": true,
  "sourceIdentifier": true,
  "sourceName": true,
  "sourceUrl": true,
  "subtotalPrice": true,
  "subtotalPriceSet": true,
  "tags": true,
  "taxExempt": true,
  "taxLines": true,
  "taxesIncluded": true,
  "test": true,
  "token": true,
  "totalDiscounts": true,
  "totalDiscountsSet": true,
  "totalLineItemsPrice": true,
  "totalLineItemsPriceSet": true,
  "totalOutstanding": true,
  "totalPrice": true,
  "totalPriceSet": true,
  "totalShippingPriceSet": true,
  "totalTax": true,
  "totalTaxSet": true,
  "totalTipReceived": true,
  "totalWeight": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyOrder";
const pluralApiIdentifier = "shopifyOrders";
class ShopifyOrderManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyOrder",
          id,
          DefaultShopifyOrderSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyOrder",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderSelection
      }
    );
    /**
    * Finds one shopifyOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyOrder",
          id,
          DefaultShopifyOrderSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyOrder",
        modelApiIdentifier: "shopifyOrder",
        defaultSelection: DefaultShopifyOrderSelection
      }
    );
    /**
    * Finds many shopifyOrder. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyOrders",
          DefaultShopifyOrderSelection,
          "shopifyOrder",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyOrders",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderSelection
      }
    );
    /**
    * Finds the first matching shopifyOrder. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyOrders",
          DefaultShopifyOrderSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyOrders",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderSelection
      }
    );
    /**
    * Finds the first matching shopifyOrder. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyOrders",
          DefaultShopifyOrderSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyOrders",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderSelection
      }
    );
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultShopifyOrderSelection,
  ShopifyOrderManager
});
//# sourceMappingURL=ShopifyOrder.js.map
