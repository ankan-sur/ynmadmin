import {
  actionRunner,
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultShopifyMarketRegionSelection = {
  "__typename": true,
  "code": true,
  "createdAt": true,
  "id": true,
  "name": true,
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
const apiIdentifier = "shopifyMarketRegion";
const pluralApiIdentifier = "shopifyMarketRegions";
async function createShopifyMarketRegion(variables, options) {
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "createShopifyMarketRegion",
    DefaultShopifyMarketRegionSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyMarketRegion": {
        value: newVariables.shopifyMarketRegion,
        required: false,
        type: "CreateShopifyMarketRegionInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyMarketRegion(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "updateShopifyMarketRegion",
    DefaultShopifyMarketRegionSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyMarketRegion": {
        value: newVariables.shopifyMarketRegion,
        required: false,
        type: "UpdateShopifyMarketRegionInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteShopifyMarketRegion(id, options) {
  return await actionRunner(
    this,
    "deleteShopifyMarketRegion",
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
class ShopifyMarketRegionManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyMarketRegion by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyMarketRegion",
          id,
          DefaultShopifyMarketRegionSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyMarketRegion",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyMarketRegionSelection
      }
    );
    /**
    * Finds one shopifyMarketRegion by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyMarketRegion",
          id,
          DefaultShopifyMarketRegionSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyMarketRegion",
        modelApiIdentifier: "shopifyMarketRegion",
        defaultSelection: DefaultShopifyMarketRegionSelection
      }
    );
    /**
    * Finds many shopifyMarketRegion. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyMarketRegions",
          DefaultShopifyMarketRegionSelection,
          "shopifyMarketRegion",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyMarketRegions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyMarketRegionSelection
      }
    );
    /**
    * Finds the first matching shopifyMarketRegion. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyMarketRegions",
          DefaultShopifyMarketRegionSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyMarketRegions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyMarketRegionSelection
      }
    );
    /**
    * Finds the first matching shopifyMarketRegion. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyMarketRegions",
          DefaultShopifyMarketRegionSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyMarketRegions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyMarketRegionSelection
      }
    );
    this.create = Object.assign(
      createShopifyMarketRegion,
      {
        type: "action",
        operationName: "createShopifyMarketRegion",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyMarketRegionSelection,
        variables: {
          "shopifyMarketRegion": {
            required: false,
            type: "CreateShopifyMarketRegionInput"
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
          "bulkCreateShopifyMarketRegions",
          DefaultShopifyMarketRegionSelection,
          "shopifyMarketRegion",
          "shopifyMarketRegions",
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
        operationName: "bulkCreateShopifyMarketRegions",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyMarketRegions",
        isBulk: true,
        defaultSelection: DefaultShopifyMarketRegionSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyMarketRegionsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyMarketRegion,
      {
        type: "action",
        operationName: "updateShopifyMarketRegion",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyMarketRegionSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyMarketRegion": {
            required: false,
            type: "UpdateShopifyMarketRegionInput"
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
          "bulkUpdateShopifyMarketRegions",
          DefaultShopifyMarketRegionSelection,
          "shopifyMarketRegion",
          "shopifyMarketRegions",
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
        operationName: "bulkUpdateShopifyMarketRegions",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyMarketRegions",
        isBulk: true,
        defaultSelection: DefaultShopifyMarketRegionSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyMarketRegionsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteShopifyMarketRegion,
      {
        type: "action",
        operationName: "deleteShopifyMarketRegion",
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
          "bulkDeleteShopifyMarketRegions",
          null,
          "shopifyMarketRegion",
          "shopifyMarketRegions",
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
        operationName: "bulkDeleteShopifyMarketRegions",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyMarketRegions",
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
  DefaultShopifyMarketRegionSelection,
  ShopifyMarketRegionManager
};
//# sourceMappingURL=ShopifyMarketRegion.js.map
