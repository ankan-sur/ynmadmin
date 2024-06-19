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
var ShopifyDomain_exports = {};
__export(ShopifyDomain_exports, {
  DefaultShopifyDomainSelection: () => DefaultShopifyDomainSelection,
  ShopifyDomainManager: () => ShopifyDomainManager
});
module.exports = __toCommonJS(ShopifyDomain_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultShopifyDomainSelection = {
  "__typename": true,
  "createdAt": true,
  "host": true,
  "id": true,
  "localization": true,
  "sslEnabled": true,
  "updatedAt": true,
  "url": true
};
;
;
;
;
;
;
const apiIdentifier = "shopifyDomain";
const pluralApiIdentifier = "shopifyDomains";
async function createShopifyDomain(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createShopifyDomain",
    DefaultShopifyDomainSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyDomain": {
        value: newVariables.shopifyDomain,
        required: false,
        type: "CreateShopifyDomainInput"
      }
    },
    options,
    null,
    false
  );
}
class ShopifyDomainManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyDomain by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyDomain",
          id,
          DefaultShopifyDomainSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyDomain",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDomainSelection
      }
    );
    /**
    * Finds one shopifyDomain by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "shopifyDomain",
          id,
          DefaultShopifyDomainSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyDomain",
        modelApiIdentifier: "shopifyDomain",
        defaultSelection: DefaultShopifyDomainSelection
      }
    );
    /**
    * Finds many shopifyDomain. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyDomains",
          DefaultShopifyDomainSelection,
          "shopifyDomain",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyDomains",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDomainSelection
      }
    );
    /**
    * Finds the first matching shopifyDomain. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyDomains",
          DefaultShopifyDomainSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyDomains",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDomainSelection
      }
    );
    /**
    * Finds the first matching shopifyDomain. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "shopifyDomains",
          DefaultShopifyDomainSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyDomains",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDomainSelection
      }
    );
    this.create = Object.assign(
      createShopifyDomain,
      {
        type: "action",
        operationName: "createShopifyDomain",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyDomainSelection,
        variables: {
          "shopifyDomain": {
            required: false,
            type: "CreateShopifyDomainInput"
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
          "bulkCreateShopifyDomains",
          DefaultShopifyDomainSelection,
          "shopifyDomain",
          "shopifyDomains",
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
        operationName: "bulkCreateShopifyDomains",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyDomains",
        isBulk: true,
        defaultSelection: DefaultShopifyDomainSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyDomainsInput!]"
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
  DefaultShopifyDomainSelection,
  ShopifyDomainManager
});
//# sourceMappingURL=ShopifyDomain.js.map
