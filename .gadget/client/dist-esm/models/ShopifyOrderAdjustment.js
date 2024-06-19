import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyOrderAdjustmentSelection = {
  "__typename": true,
  "amount": true,
  "amountSet": true,
  "createdAt": true,
  "id": true,
  "kind": true,
  "reason": true,
  "taxAmount": true,
  "taxAmountSet": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyOrderAdjustment";
const pluralApiIdentifier = "shopifyOrderAdjustments";
class ShopifyOrderAdjustmentManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyOrderAdjustment by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyOrderAdjustment",
          id,
          DefaultShopifyOrderAdjustmentSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyOrderAdjustment",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderAdjustmentSelection
      }
    );
    /**
    * Finds one shopifyOrderAdjustment by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyOrderAdjustment",
          id,
          DefaultShopifyOrderAdjustmentSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyOrderAdjustment",
        modelApiIdentifier: "shopifyOrderAdjustment",
        defaultSelection: DefaultShopifyOrderAdjustmentSelection
      }
    );
    /**
    * Finds many shopifyOrderAdjustment. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyOrderAdjustments",
          DefaultShopifyOrderAdjustmentSelection,
          "shopifyOrderAdjustment",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyOrderAdjustments",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderAdjustmentSelection
      }
    );
    /**
    * Finds the first matching shopifyOrderAdjustment. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyOrderAdjustments",
          DefaultShopifyOrderAdjustmentSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyOrderAdjustments",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderAdjustmentSelection
      }
    );
    /**
    * Finds the first matching shopifyOrderAdjustment. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyOrderAdjustments",
          DefaultShopifyOrderAdjustmentSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyOrderAdjustments",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderAdjustmentSelection
      }
    );
  }
}
export {
  DefaultShopifyOrderAdjustmentSelection,
  ShopifyOrderAdjustmentManager
};
//# sourceMappingURL=ShopifyOrderAdjustment.js.map
