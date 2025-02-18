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
var ShopifyDisputeEvidence_exports = {};
__export(ShopifyDisputeEvidence_exports, {
  DefaultShopifyDisputeEvidenceSelection: () => DefaultShopifyDisputeEvidenceSelection,
  ShopifyDisputeEvidenceManager: () => ShopifyDisputeEvidenceManager
});
module.exports = __toCommonJS(ShopifyDisputeEvidence_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultShopifyDisputeEvidenceSelection = {
  "__typename": true,
  "createdAt": true,
  "customerEmailAddress": true,
  "customerFirstName": true,
  "customerLastName": true,
  "id": true,
  "productDescription": true,
  "submittedByMerchantOn": true,
  "uncategorizedText": true,
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
const apiIdentifier = "shopifyDisputeEvidence";
const pluralApiIdentifier = "shopifyDisputeEvidences";
async function createShopifyDisputeEvidence(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createShopifyDisputeEvidence",
    DefaultShopifyDisputeEvidenceSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyDisputeEvidence": {
        value: newVariables.shopifyDisputeEvidence,
        required: false,
        type: "CreateShopifyDisputeEvidenceInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyDisputeEvidence(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "updateShopifyDisputeEvidence",
    DefaultShopifyDisputeEvidenceSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyDisputeEvidence": {
        value: newVariables.shopifyDisputeEvidence,
        required: false,
        type: "UpdateShopifyDisputeEvidenceInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteShopifyDisputeEvidence(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "deleteShopifyDisputeEvidence",
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
class ShopifyDisputeEvidenceManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyDisputeEvidence by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyDisputeEvidence",
          id,
          DefaultShopifyDisputeEvidenceSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyDisputeEvidence",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDisputeEvidenceSelection
      }
    );
    /**
    * Finds one shopifyDisputeEvidence by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyDisputeEvidence",
          id,
          DefaultShopifyDisputeEvidenceSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyDisputeEvidence",
        modelApiIdentifier: "shopifyDisputeEvidence",
        defaultSelection: DefaultShopifyDisputeEvidenceSelection
      }
    );
    /**
    * Finds many shopifyDisputeEvidence. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyDisputeEvidences",
          DefaultShopifyDisputeEvidenceSelection,
          "shopifyDisputeEvidence",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyDisputeEvidences",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDisputeEvidenceSelection
      }
    );
    /**
    * Finds the first matching shopifyDisputeEvidence. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyDisputeEvidences",
          DefaultShopifyDisputeEvidenceSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyDisputeEvidences",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDisputeEvidenceSelection
      }
    );
    /**
    * Finds the first matching shopifyDisputeEvidence. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyDisputeEvidences",
          DefaultShopifyDisputeEvidenceSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyDisputeEvidences",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDisputeEvidenceSelection
      }
    );
    this.create = Object.assign(
      createShopifyDisputeEvidence,
      {
        type: "action",
        operationName: "createShopifyDisputeEvidence",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyDisputeEvidenceSelection,
        variables: {
          "shopifyDisputeEvidence": {
            required: false,
            type: "CreateShopifyDisputeEvidenceInput"
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
          "bulkCreateShopifyDisputeEvidences",
          DefaultShopifyDisputeEvidenceSelection,
          "shopifyDisputeEvidence",
          "shopifyDisputeEvidences",
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
        operationName: "bulkCreateShopifyDisputeEvidences",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyDisputeEvidences",
        isBulk: true,
        defaultSelection: DefaultShopifyDisputeEvidenceSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyDisputeEvidencesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyDisputeEvidence,
      {
        type: "action",
        operationName: "updateShopifyDisputeEvidence",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyDisputeEvidenceSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyDisputeEvidence": {
            required: false,
            type: "UpdateShopifyDisputeEvidenceInput"
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
          "bulkUpdateShopifyDisputeEvidences",
          DefaultShopifyDisputeEvidenceSelection,
          "shopifyDisputeEvidence",
          "shopifyDisputeEvidences",
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
        operationName: "bulkUpdateShopifyDisputeEvidences",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyDisputeEvidences",
        isBulk: true,
        defaultSelection: DefaultShopifyDisputeEvidenceSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyDisputeEvidencesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteShopifyDisputeEvidence,
      {
        type: "action",
        operationName: "deleteShopifyDisputeEvidence",
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
          "bulkDeleteShopifyDisputeEvidences",
          null,
          "shopifyDisputeEvidence",
          "shopifyDisputeEvidences",
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
        operationName: "bulkDeleteShopifyDisputeEvidences",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyDisputeEvidences",
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
  DefaultShopifyDisputeEvidenceSelection,
  ShopifyDisputeEvidenceManager
});
//# sourceMappingURL=ShopifyDisputeEvidence.js.map
