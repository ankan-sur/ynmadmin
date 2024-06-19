import {
  actionRunner,
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultShopifyCollectionSelection = {
  "__typename": true,
  "body": true,
  "collected": true,
  "collectionType": true,
  "createdAt": true,
  "customSales": true,
  "disjunctive": true,
  "handle": true,
  "id": true,
  "image": true,
  "publishedAt": true,
  "publishedScope": true,
  "rules": true,
  "shopifyUpdatedAt": true,
  "shopname": true,
  "smartSales": true,
  "sortOrder": true,
  "templateSuffix": true,
  "title": true,
  "updatedAt": true
};
;
;
;
;
;
;
;
const apiIdentifier = "shopifyCollection";
const pluralApiIdentifier = "shopifyCollections";
async function updateShopifyCollection(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "updateShopifyCollection",
    DefaultShopifyCollectionSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyCollection": {
        value: newVariables.shopifyCollection,
        required: false,
        type: "UpdateShopifyCollectionInput"
      }
    },
    options,
    null,
    false
  );
}
async function smartCollectorShopifyCollection(id, options) {
  return await actionRunner(
    this,
    "smartCollectorShopifyCollection",
    DefaultShopifyCollectionSelection,
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
class ShopifyCollectionManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyCollection by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyCollection",
          id,
          DefaultShopifyCollectionSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyCollection",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCollectionSelection
      }
    );
    /**
    * Finds one shopifyCollection by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyCollection",
          id,
          DefaultShopifyCollectionSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyCollection",
        modelApiIdentifier: "shopifyCollection",
        defaultSelection: DefaultShopifyCollectionSelection
      }
    );
    /**
    * Finds many shopifyCollection. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyCollections",
          DefaultShopifyCollectionSelection,
          "shopifyCollection",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyCollections",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCollectionSelection
      }
    );
    /**
    * Finds the first matching shopifyCollection. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCollections",
          DefaultShopifyCollectionSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyCollections",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCollectionSelection
      }
    );
    /**
    * Finds the first matching shopifyCollection. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCollections",
          DefaultShopifyCollectionSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyCollections",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCollectionSelection
      }
    );
    this.update = Object.assign(
      updateShopifyCollection,
      {
        type: "action",
        operationName: "updateShopifyCollection",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyCollectionSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyCollection": {
            required: false,
            type: "UpdateShopifyCollectionInput"
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
          "bulkUpdateShopifyCollections",
          DefaultShopifyCollectionSelection,
          "shopifyCollection",
          "shopifyCollections",
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
        operationName: "bulkUpdateShopifyCollections",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyCollections",
        isBulk: true,
        defaultSelection: DefaultShopifyCollectionSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyCollectionsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.smartCollector = Object.assign(
      smartCollectorShopifyCollection,
      {
        type: "action",
        operationName: "smartCollectorShopifyCollection",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyCollectionSelection,
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
    * Executes the bulkSmartCollector action with the given inputs.
    */
    this.bulkSmartCollector = Object.assign(
      async (ids, options) => {
        return await actionRunner(
          this,
          "bulkSmartCollectorShopifyCollections",
          DefaultShopifyCollectionSelection,
          "shopifyCollection",
          "shopifyCollections",
          true,
          {
            ids: {
              value: ids,
              ...this["bulkSmartCollector"].variables["ids"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkSmartCollectorShopifyCollections",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyCollections",
        isBulk: true,
        defaultSelection: DefaultShopifyCollectionSelection,
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
  DefaultShopifyCollectionSelection,
  ShopifyCollectionManager
};
//# sourceMappingURL=ShopifyCollection.js.map
