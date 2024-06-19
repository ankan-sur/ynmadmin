import {
  actionRunner,
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
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
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
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
        return await findOneRunner(
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
        const record = await findOneRunner(
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
        return await findManyRunner(
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
        const list = await findManyRunner(
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
        const list = await findManyRunner(
          this,
          "shopifyDomains",
          DefaultShopifyDomainSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
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
          (input) => disambiguateActionParams(
            this["create"],
            void 0,
            input
          )
        );
        return await actionRunner(
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
export {
  DefaultShopifyDomainSelection,
  ShopifyDomainManager
};
//# sourceMappingURL=ShopifyDomain.js.map
