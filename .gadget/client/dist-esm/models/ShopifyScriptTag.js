import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyScriptTagSelection = {
  "__typename": true,
  "cache": true,
  "createdAt": true,
  "displayScope": true,
  "event": true,
  "id": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "source": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyScriptTag";
const pluralApiIdentifier = "shopifyScriptTags";
class ShopifyScriptTagManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyScriptTag by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyScriptTag",
          id,
          DefaultShopifyScriptTagSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyScriptTag",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyScriptTagSelection
      }
    );
    /**
    * Finds one shopifyScriptTag by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyScriptTag",
          id,
          DefaultShopifyScriptTagSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyScriptTag",
        modelApiIdentifier: "shopifyScriptTag",
        defaultSelection: DefaultShopifyScriptTagSelection
      }
    );
    /**
    * Finds many shopifyScriptTag. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyScriptTags",
          DefaultShopifyScriptTagSelection,
          "shopifyScriptTag",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyScriptTags",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyScriptTagSelection
      }
    );
    /**
    * Finds the first matching shopifyScriptTag. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyScriptTags",
          DefaultShopifyScriptTagSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyScriptTags",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyScriptTagSelection
      }
    );
    /**
    * Finds the first matching shopifyScriptTag. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyScriptTags",
          DefaultShopifyScriptTagSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyScriptTags",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyScriptTagSelection
      }
    );
  }
}
export {
  DefaultShopifyScriptTagSelection,
  ShopifyScriptTagManager
};
//# sourceMappingURL=ShopifyScriptTag.js.map
