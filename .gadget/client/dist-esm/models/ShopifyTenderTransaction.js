import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyTenderTransactionSelection = {
  "__typename": true,
  "amount": true,
  "createdAt": true,
  "currency": true,
  "id": true,
  "paymentDetails": true,
  "paymentMethod": true,
  "processedAt": true,
  "remoteReference": true,
  "test": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyTenderTransaction";
const pluralApiIdentifier = "shopifyTenderTransactions";
class ShopifyTenderTransactionManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyTenderTransaction by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyTenderTransaction",
          id,
          DefaultShopifyTenderTransactionSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyTenderTransaction",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyTenderTransactionSelection
      }
    );
    /**
    * Finds one shopifyTenderTransaction by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyTenderTransaction",
          id,
          DefaultShopifyTenderTransactionSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyTenderTransaction",
        modelApiIdentifier: "shopifyTenderTransaction",
        defaultSelection: DefaultShopifyTenderTransactionSelection
      }
    );
    /**
    * Finds many shopifyTenderTransaction. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyTenderTransactions",
          DefaultShopifyTenderTransactionSelection,
          "shopifyTenderTransaction",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyTenderTransactions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyTenderTransactionSelection
      }
    );
    /**
    * Finds the first matching shopifyTenderTransaction. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyTenderTransactions",
          DefaultShopifyTenderTransactionSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyTenderTransactions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyTenderTransactionSelection
      }
    );
    /**
    * Finds the first matching shopifyTenderTransaction. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyTenderTransactions",
          DefaultShopifyTenderTransactionSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyTenderTransactions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyTenderTransactionSelection
      }
    );
  }
}
export {
  DefaultShopifyTenderTransactionSelection,
  ShopifyTenderTransactionManager
};
//# sourceMappingURL=ShopifyTenderTransaction.js.map
