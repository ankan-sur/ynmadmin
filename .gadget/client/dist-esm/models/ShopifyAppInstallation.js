import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyAppInstallationSelection = {
  "__typename": true,
  "accessScopes": true,
  "createdAt": true,
  "id": true,
  "launchUrl": true,
  "uninstallUrl": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyAppInstallation";
const pluralApiIdentifier = "shopifyAppInstallations";
class ShopifyAppInstallationManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyAppInstallation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyAppInstallation",
          id,
          DefaultShopifyAppInstallationSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyAppInstallation",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyAppInstallationSelection
      }
    );
    /**
    * Finds one shopifyAppInstallation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyAppInstallation",
          id,
          DefaultShopifyAppInstallationSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyAppInstallation",
        modelApiIdentifier: "shopifyAppInstallation",
        defaultSelection: DefaultShopifyAppInstallationSelection
      }
    );
    /**
    * Finds many shopifyAppInstallation. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyAppInstallations",
          DefaultShopifyAppInstallationSelection,
          "shopifyAppInstallation",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyAppInstallations",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyAppInstallationSelection
      }
    );
    /**
    * Finds the first matching shopifyAppInstallation. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyAppInstallations",
          DefaultShopifyAppInstallationSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyAppInstallations",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyAppInstallationSelection
      }
    );
    /**
    * Finds the first matching shopifyAppInstallation. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyAppInstallations",
          DefaultShopifyAppInstallationSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyAppInstallations",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyAppInstallationSelection
      }
    );
  }
}
export {
  DefaultShopifyAppInstallationSelection,
  ShopifyAppInstallationManager
};
//# sourceMappingURL=ShopifyAppInstallation.js.map
