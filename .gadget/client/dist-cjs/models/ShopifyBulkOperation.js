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
var ShopifyBulkOperation_exports = {};
__export(ShopifyBulkOperation_exports, {
  DefaultShopifyBulkOperationSelection: () => DefaultShopifyBulkOperationSelection,
  ShopifyBulkOperationManager: () => ShopifyBulkOperationManager
});
module.exports = __toCommonJS(ShopifyBulkOperation_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultShopifyBulkOperationSelection = {
  "__typename": true,
  "completedAt": true,
  "createdAt": true,
  "errorCode": true,
  "fileSize": true,
  "id": true,
  "objectCount": true,
  "partialDataUrl": true,
  "query": true,
  "rootObjectCount": true,
  "state": true,
  "status": true,
  "type": true,
  "updatedAt": true,
  "url": true
};
;
;
;
;
;
;
;
;
;
;
;
const apiIdentifier = "shopifyBulkOperation";
const pluralApiIdentifier = "shopifyBulkOperations";
async function createShopifyBulkOperation(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createShopifyBulkOperation",
    DefaultShopifyBulkOperationSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyBulkOperation": {
        value: newVariables.shopifyBulkOperation,
        required: false,
        type: "CreateShopifyBulkOperationInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyBulkOperation(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "updateShopifyBulkOperation",
    DefaultShopifyBulkOperationSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyBulkOperation": {
        value: newVariables.shopifyBulkOperation,
        required: false,
        type: "UpdateShopifyBulkOperationInput"
      }
    },
    options,
    null,
    false
  );
}
async function completeShopifyBulkOperation(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["complete"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "completeShopifyBulkOperation",
    DefaultShopifyBulkOperationSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyBulkOperation": {
        value: newVariables.shopifyBulkOperation,
        required: false,
        type: "CompleteShopifyBulkOperationInput"
      }
    },
    options,
    null,
    false
  );
}
async function cancelShopifyBulkOperation(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["cancel"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "cancelShopifyBulkOperation",
    DefaultShopifyBulkOperationSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyBulkOperation": {
        value: newVariables.shopifyBulkOperation,
        required: false,
        type: "CancelShopifyBulkOperationInput"
      }
    },
    options,
    null,
    false
  );
}
async function failShopifyBulkOperation(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["fail"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "failShopifyBulkOperation",
    DefaultShopifyBulkOperationSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyBulkOperation": {
        value: newVariables.shopifyBulkOperation,
        required: false,
        type: "FailShopifyBulkOperationInput"
      }
    },
    options,
    null,
    false
  );
}
async function expireShopifyBulkOperation(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["expire"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "expireShopifyBulkOperation",
    DefaultShopifyBulkOperationSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyBulkOperation": {
        value: newVariables.shopifyBulkOperation,
        required: false,
        type: "ExpireShopifyBulkOperationInput"
      }
    },
    options,
    null,
    false
  );
}
class ShopifyBulkOperationManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyBulkOperation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyBulkOperation",
          id,
          DefaultShopifyBulkOperationSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyBulkOperation",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyBulkOperationSelection
      }
    );
    /**
    * Finds one shopifyBulkOperation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyBulkOperation",
          id,
          DefaultShopifyBulkOperationSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyBulkOperation",
        modelApiIdentifier: "shopifyBulkOperation",
        defaultSelection: DefaultShopifyBulkOperationSelection
      }
    );
    /**
    * Finds many shopifyBulkOperation. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyBulkOperations",
          DefaultShopifyBulkOperationSelection,
          "shopifyBulkOperation",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyBulkOperations",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyBulkOperationSelection
      }
    );
    /**
    * Finds the first matching shopifyBulkOperation. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyBulkOperations",
          DefaultShopifyBulkOperationSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyBulkOperations",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyBulkOperationSelection
      }
    );
    /**
    * Finds the first matching shopifyBulkOperation. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyBulkOperations",
          DefaultShopifyBulkOperationSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyBulkOperations",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyBulkOperationSelection
      }
    );
    this.create = Object.assign(
      createShopifyBulkOperation,
      {
        type: "action",
        operationName: "createShopifyBulkOperation",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyBulkOperationSelection,
        variables: {
          "shopifyBulkOperation": {
            required: false,
            type: "CreateShopifyBulkOperationInput"
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
          "bulkCreateShopifyBulkOperations",
          DefaultShopifyBulkOperationSelection,
          "shopifyBulkOperation",
          "shopifyBulkOperations",
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
        operationName: "bulkCreateShopifyBulkOperations",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyBulkOperations",
        isBulk: true,
        defaultSelection: DefaultShopifyBulkOperationSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyBulkOperationsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyBulkOperation,
      {
        type: "action",
        operationName: "updateShopifyBulkOperation",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyBulkOperationSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyBulkOperation": {
            required: false,
            type: "UpdateShopifyBulkOperationInput"
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
          "bulkUpdateShopifyBulkOperations",
          DefaultShopifyBulkOperationSelection,
          "shopifyBulkOperation",
          "shopifyBulkOperations",
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
        operationName: "bulkUpdateShopifyBulkOperations",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyBulkOperations",
        isBulk: true,
        defaultSelection: DefaultShopifyBulkOperationSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyBulkOperationsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.complete = Object.assign(
      completeShopifyBulkOperation,
      {
        type: "action",
        operationName: "completeShopifyBulkOperation",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyBulkOperationSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyBulkOperation": {
            required: false,
            type: "CompleteShopifyBulkOperationInput"
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
    * Executes the bulkComplete action with the given inputs.
    */
    this.bulkComplete = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => (0, import_support.disambiguateActionParams)(
            this["complete"],
            void 0,
            input
          )
        );
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkCompleteShopifyBulkOperations",
          DefaultShopifyBulkOperationSelection,
          "shopifyBulkOperation",
          "shopifyBulkOperations",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkComplete"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkCompleteShopifyBulkOperations",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyBulkOperations",
        isBulk: true,
        defaultSelection: DefaultShopifyBulkOperationSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCompleteShopifyBulkOperationsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.cancel = Object.assign(
      cancelShopifyBulkOperation,
      {
        type: "action",
        operationName: "cancelShopifyBulkOperation",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyBulkOperationSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyBulkOperation": {
            required: false,
            type: "CancelShopifyBulkOperationInput"
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
    * Executes the bulkCancel action with the given inputs.
    */
    this.bulkCancel = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => (0, import_support.disambiguateActionParams)(
            this["cancel"],
            void 0,
            input
          )
        );
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkCancelShopifyBulkOperations",
          DefaultShopifyBulkOperationSelection,
          "shopifyBulkOperation",
          "shopifyBulkOperations",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkCancel"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkCancelShopifyBulkOperations",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyBulkOperations",
        isBulk: true,
        defaultSelection: DefaultShopifyBulkOperationSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCancelShopifyBulkOperationsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.fail = Object.assign(
      failShopifyBulkOperation,
      {
        type: "action",
        operationName: "failShopifyBulkOperation",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyBulkOperationSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyBulkOperation": {
            required: false,
            type: "FailShopifyBulkOperationInput"
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
    * Executes the bulkFail action with the given inputs.
    */
    this.bulkFail = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => (0, import_support.disambiguateActionParams)(
            this["fail"],
            void 0,
            input
          )
        );
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkFailShopifyBulkOperations",
          DefaultShopifyBulkOperationSelection,
          "shopifyBulkOperation",
          "shopifyBulkOperations",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkFail"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkFailShopifyBulkOperations",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyBulkOperations",
        isBulk: true,
        defaultSelection: DefaultShopifyBulkOperationSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkFailShopifyBulkOperationsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.expire = Object.assign(
      expireShopifyBulkOperation,
      {
        type: "action",
        operationName: "expireShopifyBulkOperation",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyBulkOperationSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyBulkOperation": {
            required: false,
            type: "ExpireShopifyBulkOperationInput"
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
    * Executes the bulkExpire action with the given inputs.
    */
    this.bulkExpire = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => (0, import_support.disambiguateActionParams)(
            this["expire"],
            void 0,
            input
          )
        );
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkExpireShopifyBulkOperations",
          DefaultShopifyBulkOperationSelection,
          "shopifyBulkOperation",
          "shopifyBulkOperations",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkExpire"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkExpireShopifyBulkOperations",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyBulkOperations",
        isBulk: true,
        defaultSelection: DefaultShopifyBulkOperationSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkExpireShopifyBulkOperationsInput!]"
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
  DefaultShopifyBulkOperationSelection,
  ShopifyBulkOperationManager
});
//# sourceMappingURL=ShopifyBulkOperation.js.map
