import {
  actionRunner,
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultShopifyMarketSelection = {
  "__typename": true,
  "createdAt": true,
  "currencySettings": true,
  "enabled": true,
  "id": true,
  "name": true,
  "primary": true,
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
const apiIdentifier = "shopifyMarket";
const pluralApiIdentifier = "shopifyMarkets";
async function createShopifyMarket(variables, options) {
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "createShopifyMarket",
    DefaultShopifyMarketSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyMarket": {
        value: newVariables.shopifyMarket,
        required: false,
        type: "CreateShopifyMarketInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyMarket(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "updateShopifyMarket",
    DefaultShopifyMarketSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyMarket": {
        value: newVariables.shopifyMarket,
        required: false,
        type: "UpdateShopifyMarketInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteShopifyMarket(id, options) {
  return await actionRunner(
    this,
    "deleteShopifyMarket",
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
class ShopifyMarketManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyMarket by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyMarket",
          id,
          DefaultShopifyMarketSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyMarket",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyMarketSelection
      }
    );
    /**
    * Finds one shopifyMarket by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyMarket",
          id,
          DefaultShopifyMarketSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyMarket",
        modelApiIdentifier: "shopifyMarket",
        defaultSelection: DefaultShopifyMarketSelection
      }
    );
    /**
    * Finds many shopifyMarket. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyMarkets",
          DefaultShopifyMarketSelection,
          "shopifyMarket",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyMarkets",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyMarketSelection
      }
    );
    /**
    * Finds the first matching shopifyMarket. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyMarkets",
          DefaultShopifyMarketSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyMarkets",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyMarketSelection
      }
    );
    /**
    * Finds the first matching shopifyMarket. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyMarkets",
          DefaultShopifyMarketSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyMarkets",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyMarketSelection
      }
    );
    this.create = Object.assign(
      createShopifyMarket,
      {
        type: "action",
        operationName: "createShopifyMarket",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyMarketSelection,
        variables: {
          "shopifyMarket": {
            required: false,
            type: "CreateShopifyMarketInput"
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
          "bulkCreateShopifyMarkets",
          DefaultShopifyMarketSelection,
          "shopifyMarket",
          "shopifyMarkets",
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
        operationName: "bulkCreateShopifyMarkets",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyMarkets",
        isBulk: true,
        defaultSelection: DefaultShopifyMarketSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyMarketsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyMarket,
      {
        type: "action",
        operationName: "updateShopifyMarket",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyMarketSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyMarket": {
            required: false,
            type: "UpdateShopifyMarketInput"
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
          (input) => disambiguateActionParams(
            this["update"],
            void 0,
            input
          )
        );
        return await actionRunner(
          this,
          "bulkUpdateShopifyMarkets",
          DefaultShopifyMarketSelection,
          "shopifyMarket",
          "shopifyMarkets",
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
        operationName: "bulkUpdateShopifyMarkets",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyMarkets",
        isBulk: true,
        defaultSelection: DefaultShopifyMarketSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyMarketsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteShopifyMarket,
      {
        type: "action",
        operationName: "deleteShopifyMarket",
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
        return await actionRunner(
          this,
          "bulkDeleteShopifyMarkets",
          null,
          "shopifyMarket",
          "shopifyMarkets",
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
        operationName: "bulkDeleteShopifyMarkets",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyMarkets",
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
export {
  DefaultShopifyMarketSelection,
  ShopifyMarketManager
};
//# sourceMappingURL=ShopifyMarket.js.map
