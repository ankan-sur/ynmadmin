import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultShopifyCheckoutLineItemSelection = {
  "__typename": true,
  "appliedDiscounts": true,
  "compareAtPrice": true,
  "createdAt": true,
  "discountAllocations": true,
  "fulfillmentService": true,
  "grams": true,
  "id": true,
  "key": true,
  "linePrice": true,
  "price": true,
  "quantity": true,
  "requiresShipping": true,
  "sku": true,
  "taxable": true,
  "title": true,
  "updatedAt": true,
  "variantTitle": true,
  "vendor": true
};
;
;
;
;
;
;
;
;
const apiIdentifier = "shopifyCheckoutLineItem";
const pluralApiIdentifier = "shopifyCheckoutLineItems";
async function createShopifyCheckoutLineItem(variables, options) {
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "createShopifyCheckoutLineItem",
    DefaultShopifyCheckoutLineItemSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyCheckoutLineItem": {
        value: newVariables.shopifyCheckoutLineItem,
        required: false,
        type: "CreateShopifyCheckoutLineItemInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyCheckoutLineItem(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "updateShopifyCheckoutLineItem",
    DefaultShopifyCheckoutLineItemSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyCheckoutLineItem": {
        value: newVariables.shopifyCheckoutLineItem,
        required: false,
        type: "UpdateShopifyCheckoutLineItemInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteShopifyCheckoutLineItem(id, options) {
  return await actionRunner(
    this,
    "deleteShopifyCheckoutLineItem",
    null,
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
class ShopifyCheckoutLineItemManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyCheckoutLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyCheckoutLineItem",
          id,
          DefaultShopifyCheckoutLineItemSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyCheckoutLineItem",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCheckoutLineItemSelection
      }
    );
    /**
    * Finds one shopifyCheckoutLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyCheckoutLineItem",
          id,
          DefaultShopifyCheckoutLineItemSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyCheckoutLineItem",
        modelApiIdentifier: "shopifyCheckoutLineItem",
        defaultSelection: DefaultShopifyCheckoutLineItemSelection
      }
    );
    /**
    * Finds many shopifyCheckoutLineItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyCheckoutLineItems",
          DefaultShopifyCheckoutLineItemSelection,
          "shopifyCheckoutLineItem",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyCheckoutLineItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCheckoutLineItemSelection
      }
    );
    /**
    * Finds the first matching shopifyCheckoutLineItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCheckoutLineItems",
          DefaultShopifyCheckoutLineItemSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyCheckoutLineItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCheckoutLineItemSelection
      }
    );
    /**
    * Finds the first matching shopifyCheckoutLineItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCheckoutLineItems",
          DefaultShopifyCheckoutLineItemSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyCheckoutLineItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCheckoutLineItemSelection
      }
    );
    /**
    * Finds one shopifyCheckoutLineItem by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
          this,
          "shopifyCheckoutLineItems",
          "id",
          value,
          DefaultShopifyCheckoutLineItemSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyCheckoutLineItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCheckoutLineItemSelection
      }
    );
    this.create = Object.assign(
      createShopifyCheckoutLineItem,
      {
        type: "action",
        operationName: "createShopifyCheckoutLineItem",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyCheckoutLineItemSelection,
        variables: {
          "shopifyCheckoutLineItem": {
            required: false,
            type: "CreateShopifyCheckoutLineItemInput"
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
    * Executes the bulkCreate action with the given inputs.
    */
    this.bulkCreate = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => disambiguateActionParams(
            this["create"],
            void 0,
            input
          )
        );
        return await actionRunner(
          this,
          "bulkCreateShopifyCheckoutLineItems",
          DefaultShopifyCheckoutLineItemSelection,
          "shopifyCheckoutLineItem",
          "shopifyCheckoutLineItems",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkCreate"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkCreateShopifyCheckoutLineItems",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyCheckoutLineItems",
        isBulk: true,
        defaultSelection: DefaultShopifyCheckoutLineItemSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyCheckoutLineItemsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyCheckoutLineItem,
      {
        type: "action",
        operationName: "updateShopifyCheckoutLineItem",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyCheckoutLineItemSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyCheckoutLineItem": {
            required: false,
            type: "UpdateShopifyCheckoutLineItemInput"
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
          "bulkUpdateShopifyCheckoutLineItems",
          DefaultShopifyCheckoutLineItemSelection,
          "shopifyCheckoutLineItem",
          "shopifyCheckoutLineItems",
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
        operationName: "bulkUpdateShopifyCheckoutLineItems",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyCheckoutLineItems",
        isBulk: true,
        defaultSelection: DefaultShopifyCheckoutLineItemSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyCheckoutLineItemsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteShopifyCheckoutLineItem,
      {
        type: "action",
        operationName: "deleteShopifyCheckoutLineItem",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: null,
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
    * Executes the bulkDelete action with the given inputs. Deletes the records on the server.
    */
    this.bulkDelete = Object.assign(
      async (ids, options) => {
        return await actionRunner(
          this,
          "bulkDeleteShopifyCheckoutLineItems",
          null,
          "shopifyCheckoutLineItem",
          "shopifyCheckoutLineItems",
          true,
          {
            ids: {
              value: ids,
              ...this["bulkDelete"].variables["ids"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkDeleteShopifyCheckoutLineItems",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyCheckoutLineItems",
        isBulk: true,
        defaultSelection: null,
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
  DefaultShopifyCheckoutLineItemSelection,
  ShopifyCheckoutLineItemManager
};
//# sourceMappingURL=ShopifyCheckoutLineItem.js.map
