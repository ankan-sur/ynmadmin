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
var ShopifyDiscount_exports = {};
__export(ShopifyDiscount_exports, {
  DefaultShopifyDiscountSelection: () => DefaultShopifyDiscountSelection,
  ShopifyDiscountManager: () => ShopifyDiscountManager
});
module.exports = __toCommonJS(ShopifyDiscount_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultShopifyDiscountSelection = {
  "__typename": true,
  "appDiscountType": true,
  "appliesOnOneTimePurchase": true,
  "appliesOnSubscription": true,
  "appliesOncePerCustomer": true,
  "asyncUsageCount": true,
  "codeCount": true,
  "combinesWith": true,
  "createdAt": true,
  "destinationSelection": true,
  "discountClass": true,
  "discountId": true,
  "endsAt": true,
  "errorHistory": true,
  "hasTimelineComment": true,
  "id": true,
  "maximumShippingPrice": true,
  "minimumRequirement": true,
  "recurringCycleLimit": true,
  "shareableUrls": true,
  "shopifyCreatedAt": true,
  "shortSummary": true,
  "startsAt": true,
  "status": true,
  "summary": true,
  "title": true,
  "totalSales": true,
  "updatedAt": true,
  "usageLimit": true,
  "usesPerOrderLimit": true
};
;
;
;
;
;
;
;
;
const apiIdentifier = "shopifyDiscount";
const pluralApiIdentifier = "shopifyDiscounts";
async function createShopifyDiscount(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createShopifyDiscount",
    DefaultShopifyDiscountSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyDiscount": {
        value: newVariables.shopifyDiscount,
        required: false,
        type: "CreateShopifyDiscountInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyDiscount(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "updateShopifyDiscount",
    DefaultShopifyDiscountSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyDiscount": {
        value: newVariables.shopifyDiscount,
        required: false,
        type: "UpdateShopifyDiscountInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteShopifyDiscount(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "deleteShopifyDiscount",
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
class ShopifyDiscountManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyDiscount by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyDiscount",
          id,
          DefaultShopifyDiscountSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyDiscount",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDiscountSelection
      }
    );
    /**
    * Finds one shopifyDiscount by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyDiscount",
          id,
          DefaultShopifyDiscountSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyDiscount",
        modelApiIdentifier: "shopifyDiscount",
        defaultSelection: DefaultShopifyDiscountSelection
      }
    );
    /**
    * Finds many shopifyDiscount. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyDiscounts",
          DefaultShopifyDiscountSelection,
          "shopifyDiscount",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyDiscounts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDiscountSelection
      }
    );
    /**
    * Finds the first matching shopifyDiscount. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyDiscounts",
          DefaultShopifyDiscountSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyDiscounts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDiscountSelection
      }
    );
    /**
    * Finds the first matching shopifyDiscount. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyDiscounts",
          DefaultShopifyDiscountSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyDiscounts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDiscountSelection
      }
    );
    this.create = Object.assign(
      createShopifyDiscount,
      {
        type: "action",
        operationName: "createShopifyDiscount",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyDiscountSelection,
        variables: {
          "shopifyDiscount": {
            required: false,
            type: "CreateShopifyDiscountInput"
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
          "bulkCreateShopifyDiscounts",
          DefaultShopifyDiscountSelection,
          "shopifyDiscount",
          "shopifyDiscounts",
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
        operationName: "bulkCreateShopifyDiscounts",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyDiscounts",
        isBulk: true,
        defaultSelection: DefaultShopifyDiscountSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyDiscountsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyDiscount,
      {
        type: "action",
        operationName: "updateShopifyDiscount",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyDiscountSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyDiscount": {
            required: false,
            type: "UpdateShopifyDiscountInput"
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
          "bulkUpdateShopifyDiscounts",
          DefaultShopifyDiscountSelection,
          "shopifyDiscount",
          "shopifyDiscounts",
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
        operationName: "bulkUpdateShopifyDiscounts",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyDiscounts",
        isBulk: true,
        defaultSelection: DefaultShopifyDiscountSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyDiscountsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteShopifyDiscount,
      {
        type: "action",
        operationName: "deleteShopifyDiscount",
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
          "bulkDeleteShopifyDiscounts",
          null,
          "shopifyDiscount",
          "shopifyDiscounts",
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
        operationName: "bulkDeleteShopifyDiscounts",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyDiscounts",
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
  DefaultShopifyDiscountSelection,
  ShopifyDiscountManager
});
//# sourceMappingURL=ShopifyDiscount.js.map
