import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyPayoutSelection = {
  "__typename": true,
  "amount": true,
  "createdAt": true,
  "currency": true,
  "date": true,
  "id": true,
  "status": true,
  "summary": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyPayout";
const pluralApiIdentifier = "shopifyPayouts";
class ShopifyPayoutManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyPayout by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyPayout",
          id,
          DefaultShopifyPayoutSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyPayout",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyPayoutSelection
      }
    );
    /**
    * Finds one shopifyPayout by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyPayout",
          id,
          DefaultShopifyPayoutSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyPayout",
        modelApiIdentifier: "shopifyPayout",
        defaultSelection: DefaultShopifyPayoutSelection
      }
    );
    /**
    * Finds many shopifyPayout. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyPayouts",
          DefaultShopifyPayoutSelection,
          "shopifyPayout",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyPayouts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyPayoutSelection
      }
    );
    /**
    * Finds the first matching shopifyPayout. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyPayouts",
          DefaultShopifyPayoutSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyPayouts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyPayoutSelection
      }
    );
    /**
    * Finds the first matching shopifyPayout. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyPayouts",
          DefaultShopifyPayoutSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyPayouts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyPayoutSelection
      }
    );
  }
}
export {
  DefaultShopifyPayoutSelection,
  ShopifyPayoutManager
};
//# sourceMappingURL=ShopifyPayout.js.map
