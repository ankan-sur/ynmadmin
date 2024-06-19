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
var ShopifyRefundDuty_exports = {};
__export(ShopifyRefundDuty_exports, {
  DefaultShopifyRefundDutySelection: () => DefaultShopifyRefundDutySelection,
  ShopifyRefundDutyManager: () => ShopifyRefundDutyManager
});
module.exports = __toCommonJS(ShopifyRefundDuty_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultShopifyRefundDutySelection = {
  "__typename": true,
  "amountSet": true,
  "createdAt": true,
  "id": true,
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
const apiIdentifier = "shopifyRefundDuty";
const pluralApiIdentifier = "shopifyRefundDuties";
async function createShopifyRefundDuty(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createShopifyRefundDuty",
    DefaultShopifyRefundDutySelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyRefundDuty": {
        value: newVariables.shopifyRefundDuty,
        required: false,
        type: "CreateShopifyRefundDutyInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyRefundDuty(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "updateShopifyRefundDuty",
    DefaultShopifyRefundDutySelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyRefundDuty": {
        value: newVariables.shopifyRefundDuty,
        required: false,
        type: "UpdateShopifyRefundDutyInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteShopifyRefundDuty(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "deleteShopifyRefundDuty",
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
class ShopifyRefundDutyManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyRefundDuty by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyRefundDuty",
          id,
          DefaultShopifyRefundDutySelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyRefundDuty",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundDutySelection
      }
    );
    /**
    * Finds one shopifyRefundDuty by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyRefundDuty",
          id,
          DefaultShopifyRefundDutySelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyRefundDuty",
        modelApiIdentifier: "shopifyRefundDuty",
        defaultSelection: DefaultShopifyRefundDutySelection
      }
    );
    /**
    * Finds many shopifyRefundDuty. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyRefundDuties",
          DefaultShopifyRefundDutySelection,
          "shopifyRefundDuty",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyRefundDuties",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundDutySelection
      }
    );
    /**
    * Finds the first matching shopifyRefundDuty. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyRefundDuties",
          DefaultShopifyRefundDutySelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyRefundDuties",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundDutySelection
      }
    );
    /**
    * Finds the first matching shopifyRefundDuty. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyRefundDuties",
          DefaultShopifyRefundDutySelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyRefundDuties",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundDutySelection
      }
    );
    /**
    * Finds one shopifyRefundDuty by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await (0, import_api_client_core.findOneByFieldRunner)(
          this,
          "shopifyRefundDuties",
          "id",
          value,
          DefaultShopifyRefundDutySelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyRefundDuties",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundDutySelection
      }
    );
    this.create = Object.assign(
      createShopifyRefundDuty,
      {
        type: "action",
        operationName: "createShopifyRefundDuty",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyRefundDutySelection,
        variables: {
          "shopifyRefundDuty": {
            required: false,
            type: "CreateShopifyRefundDutyInput"
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
          "bulkCreateShopifyRefundDuties",
          DefaultShopifyRefundDutySelection,
          "shopifyRefundDuty",
          "shopifyRefundDuties",
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
        operationName: "bulkCreateShopifyRefundDuties",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyRefundDuties",
        isBulk: true,
        defaultSelection: DefaultShopifyRefundDutySelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyRefundDutiesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyRefundDuty,
      {
        type: "action",
        operationName: "updateShopifyRefundDuty",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyRefundDutySelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyRefundDuty": {
            required: false,
            type: "UpdateShopifyRefundDutyInput"
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
          "bulkUpdateShopifyRefundDuties",
          DefaultShopifyRefundDutySelection,
          "shopifyRefundDuty",
          "shopifyRefundDuties",
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
        operationName: "bulkUpdateShopifyRefundDuties",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyRefundDuties",
        isBulk: true,
        defaultSelection: DefaultShopifyRefundDutySelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyRefundDutiesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteShopifyRefundDuty,
      {
        type: "action",
        operationName: "deleteShopifyRefundDuty",
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
          "bulkDeleteShopifyRefundDuties",
          null,
          "shopifyRefundDuty",
          "shopifyRefundDuties",
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
        operationName: "bulkDeleteShopifyRefundDuties",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyRefundDuties",
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
  DefaultShopifyRefundDutySelection,
  ShopifyRefundDutyManager
});
//# sourceMappingURL=ShopifyRefundDuty.js.map
