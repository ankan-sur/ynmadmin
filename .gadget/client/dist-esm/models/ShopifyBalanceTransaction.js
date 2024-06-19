import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyBalanceTransactionSelection = {
  "__typename": true,
  "adjustmentOrderTransactions": true,
  "amount": true,
  "createdAt": true,
  "currency": true,
  "fee": true,
  "id": true,
  "net": true,
  "payoutStatus": true,
  "processedAt": true,
  "sourceId": true,
  "sourceType": true,
  "test": true,
  "type": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyBalanceTransaction";
const pluralApiIdentifier = "shopifyBalanceTransactions";
class ShopifyBalanceTransactionManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyBalanceTransaction by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyBalanceTransaction",
          id,
          DefaultShopifyBalanceTransactionSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyBalanceTransaction",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyBalanceTransactionSelection
      }
    );
    /**
    * Finds one shopifyBalanceTransaction by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyBalanceTransaction",
          id,
          DefaultShopifyBalanceTransactionSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyBalanceTransaction",
        modelApiIdentifier: "shopifyBalanceTransaction",
        defaultSelection: DefaultShopifyBalanceTransactionSelection
      }
    );
    /**
    * Finds many shopifyBalanceTransaction. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyBalanceTransactions",
          DefaultShopifyBalanceTransactionSelection,
          "shopifyBalanceTransaction",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyBalanceTransactions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyBalanceTransactionSelection
      }
    );
    /**
    * Finds the first matching shopifyBalanceTransaction. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyBalanceTransactions",
          DefaultShopifyBalanceTransactionSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyBalanceTransactions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyBalanceTransactionSelection
      }
    );
    /**
    * Finds the first matching shopifyBalanceTransaction. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyBalanceTransactions",
          DefaultShopifyBalanceTransactionSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyBalanceTransactions",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyBalanceTransactionSelection
      }
    );
  }
}
export {
  DefaultShopifyBalanceTransactionSelection,
  ShopifyBalanceTransactionManager
};
//# sourceMappingURL=ShopifyBalanceTransaction.js.map
