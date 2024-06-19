import {
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultShopifyOrderLineItemSelection = {
  "__typename": true,
  "attributedStaffs": true,
  "createdAt": true,
  "currentQuantity": true,
  "discountAllocations": true,
  "fulfillableQuantity": true,
  "fulfillmentService": true,
  "fulfillmentStatus": true,
  "giftCard": true,
  "grams": true,
  "id": true,
  "name": true,
  "price": true,
  "priceSet": true,
  "productExists": true,
  "properties": true,
  "quantity": true,
  "requiresShipping": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "sku": true,
  "taxLines": true,
  "taxable": true,
  "title": true,
  "totalDiscount": true,
  "totalDiscountSet": true,
  "updatedAt": true,
  "variantInventoryManagement": true,
  "variantTitle": true,
  "vendor": true
};
;
;
;
;
;
const apiIdentifier = "shopifyOrderLineItem";
const pluralApiIdentifier = "shopifyOrderLineItems";
class ShopifyOrderLineItemManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyOrderLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyOrderLineItem",
          id,
          DefaultShopifyOrderLineItemSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyOrderLineItem",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderLineItemSelection
      }
    );
    /**
    * Finds one shopifyOrderLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyOrderLineItem",
          id,
          DefaultShopifyOrderLineItemSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyOrderLineItem",
        modelApiIdentifier: "shopifyOrderLineItem",
        defaultSelection: DefaultShopifyOrderLineItemSelection
      }
    );
    /**
    * Finds many shopifyOrderLineItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyOrderLineItems",
          DefaultShopifyOrderLineItemSelection,
          "shopifyOrderLineItem",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyOrderLineItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderLineItemSelection
      }
    );
    /**
    * Finds the first matching shopifyOrderLineItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyOrderLineItems",
          DefaultShopifyOrderLineItemSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyOrderLineItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderLineItemSelection
      }
    );
    /**
    * Finds the first matching shopifyOrderLineItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyOrderLineItems",
          DefaultShopifyOrderLineItemSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyOrderLineItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyOrderLineItemSelection
      }
    );
  }
}
export {
  DefaultShopifyOrderLineItemSelection,
  ShopifyOrderLineItemManager
};
//# sourceMappingURL=ShopifyOrderLineItem.js.map
