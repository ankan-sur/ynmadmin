import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyAppSelection = {
  "__typename": true,
  "apiKey": true,
  "appStoreAppUrl": true,
  "appStoreDeveloperUrl": true,
  "availableAccessScopes": true,
  "createdAt": true,
  "description": true,
  "developerName": true,
  "developerType": true,
  "embedded": true,
  "failedRequirements": true,
  "features": true,
  "feedback": true,
  "handle": true,
  "id": true,
  "previouslyInstalled": true,
  "pricingDetails": true,
  "pricingDetailsSummary": true,
  "privacyPolicyUrl": true,
  "publicCategory": true,
  "published": true,
  "requestedAccessScopes": true,
  "shopifyDeveloped": true,
  "title": true,
  "uninstallMessage": true,
  "updatedAt": true,
  "webhookApiVersion": true
};
;
;
;
;
;
const apiIdentifier = "shopifyApp";
const pluralApiIdentifier = "shopifyApps";
class ShopifyAppManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyApp by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyApp",
          id,
          DefaultShopifyAppSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyApp",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyAppSelection
      }
    );
    /**
    * Finds one shopifyApp by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyApp",
          id,
          DefaultShopifyAppSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyApp",
        modelApiIdentifier: "shopifyApp",
        defaultSelection: DefaultShopifyAppSelection
      }
    );
    /**
    * Finds many shopifyApp. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyApps",
          DefaultShopifyAppSelection,
          "shopifyApp",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyApps",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyAppSelection
      }
    );
    /**
    * Finds the first matching shopifyApp. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyApps",
          DefaultShopifyAppSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyApps",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyAppSelection
      }
    );
    /**
    * Finds the first matching shopifyApp. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyApps",
          DefaultShopifyAppSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyApps",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyAppSelection
      }
    );
  }
}
export {
  DefaultShopifyAppSelection,
  ShopifyAppManager
};
//# sourceMappingURL=ShopifyApp.js.map
