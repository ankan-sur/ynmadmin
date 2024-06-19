import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyShippingLineSelection = {
  "__typename": true,
  "carrierIdentifier": true,
  "code": true,
  "createdAt": true,
  "discountAllocations": true,
  "discountedPrice": true,
  "discountedPriceSet": true,
  "id": true,
  "phone": true,
  "price": true,
  "priceSet": true,
  "source": true,
  "taxLines": true,
  "title": true,
  "updatedAt": true
};
;
;
;
;
;
const apiIdentifier = "shopifyShippingLine";
const pluralApiIdentifier = "shopifyShippingLines";
class ShopifyShippingLineManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyShippingLine by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyShippingLine",
          id,
          DefaultShopifyShippingLineSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyShippingLine",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyShippingLineSelection
      }
    );
    /**
    * Finds one shopifyShippingLine by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyShippingLine",
          id,
          DefaultShopifyShippingLineSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyShippingLine",
        modelApiIdentifier: "shopifyShippingLine",
        defaultSelection: DefaultShopifyShippingLineSelection
      }
    );
    /**
    * Finds many shopifyShippingLine. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyShippingLines",
          DefaultShopifyShippingLineSelection,
          "shopifyShippingLine",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyShippingLines",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyShippingLineSelection
      }
    );
    /**
    * Finds the first matching shopifyShippingLine. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyShippingLines",
          DefaultShopifyShippingLineSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyShippingLines",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyShippingLineSelection
      }
    );
    /**
    * Finds the first matching shopifyShippingLine. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyShippingLines",
          DefaultShopifyShippingLineSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyShippingLines",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyShippingLineSelection
      }
    );
  }
}
export {
  DefaultShopifyShippingLineSelection,
  ShopifyShippingLineManager
};
//# sourceMappingURL=ShopifyShippingLine.js.map
