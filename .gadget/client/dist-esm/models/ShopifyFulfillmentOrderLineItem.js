import {
  actionRunner,
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultShopifyFulfillmentOrderLineItemSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "quantity": true,
  "remainingQuantity": true,
  "updatedAt": true
};
;
;
;
;
;
;
;
;
const apiIdentifier = "shopifyFulfillmentOrderLineItem";
const pluralApiIdentifier = "shopifyFulfillmentOrderLineItems";
async function createShopifyFulfillmentOrderLineItem(variables, options) {
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "createShopifyFulfillmentOrderLineItem",
    DefaultShopifyFulfillmentOrderLineItemSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyFulfillmentOrderLineItem": {
        value: newVariables.shopifyFulfillmentOrderLineItem,
        required: false,
        type: "CreateShopifyFulfillmentOrderLineItemInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyFulfillmentOrderLineItem(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "updateShopifyFulfillmentOrderLineItem",
    DefaultShopifyFulfillmentOrderLineItemSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyFulfillmentOrderLineItem": {
        value: newVariables.shopifyFulfillmentOrderLineItem,
        required: false,
        type: "UpdateShopifyFulfillmentOrderLineItemInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteShopifyFulfillmentOrderLineItem(id, options) {
  return await actionRunner(
    this,
    "deleteShopifyFulfillmentOrderLineItem",
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
class ShopifyFulfillmentOrderLineItemManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyFulfillmentOrderLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyFulfillmentOrderLineItem",
          id,
          DefaultShopifyFulfillmentOrderLineItemSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillmentOrderLineItem",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection
      }
    );
    /**
    * Finds one shopifyFulfillmentOrderLineItem by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyFulfillmentOrderLineItem",
          id,
          DefaultShopifyFulfillmentOrderLineItemSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillmentOrderLineItem",
        modelApiIdentifier: "shopifyFulfillmentOrderLineItem",
        defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection
      }
    );
    /**
    * Finds many shopifyFulfillmentOrderLineItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyFulfillmentOrderLineItems",
          DefaultShopifyFulfillmentOrderLineItemSelection,
          "shopifyFulfillmentOrderLineItem",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyFulfillmentOrderLineItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection
      }
    );
    /**
    * Finds the first matching shopifyFulfillmentOrderLineItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyFulfillmentOrderLineItems",
          DefaultShopifyFulfillmentOrderLineItemSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyFulfillmentOrderLineItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection
      }
    );
    /**
    * Finds the first matching shopifyFulfillmentOrderLineItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyFulfillmentOrderLineItems",
          DefaultShopifyFulfillmentOrderLineItemSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyFulfillmentOrderLineItems",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection
      }
    );
    this.create = Object.assign(
      createShopifyFulfillmentOrderLineItem,
      {
        type: "action",
        operationName: "createShopifyFulfillmentOrderLineItem",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection,
        variables: {
          "shopifyFulfillmentOrderLineItem": {
            required: false,
            type: "CreateShopifyFulfillmentOrderLineItemInput"
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
          "bulkCreateShopifyFulfillmentOrderLineItems",
          DefaultShopifyFulfillmentOrderLineItemSelection,
          "shopifyFulfillmentOrderLineItem",
          "shopifyFulfillmentOrderLineItems",
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
        operationName: "bulkCreateShopifyFulfillmentOrderLineItems",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyFulfillmentOrderLineItems",
        isBulk: true,
        defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyFulfillmentOrderLineItemsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyFulfillmentOrderLineItem,
      {
        type: "action",
        operationName: "updateShopifyFulfillmentOrderLineItem",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyFulfillmentOrderLineItem": {
            required: false,
            type: "UpdateShopifyFulfillmentOrderLineItemInput"
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
          "bulkUpdateShopifyFulfillmentOrderLineItems",
          DefaultShopifyFulfillmentOrderLineItemSelection,
          "shopifyFulfillmentOrderLineItem",
          "shopifyFulfillmentOrderLineItems",
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
        operationName: "bulkUpdateShopifyFulfillmentOrderLineItems",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyFulfillmentOrderLineItems",
        isBulk: true,
        defaultSelection: DefaultShopifyFulfillmentOrderLineItemSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyFulfillmentOrderLineItemsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteShopifyFulfillmentOrderLineItem,
      {
        type: "action",
        operationName: "deleteShopifyFulfillmentOrderLineItem",
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
          "bulkDeleteShopifyFulfillmentOrderLineItems",
          null,
          "shopifyFulfillmentOrderLineItem",
          "shopifyFulfillmentOrderLineItems",
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
        operationName: "bulkDeleteShopifyFulfillmentOrderLineItems",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyFulfillmentOrderLineItems",
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
  DefaultShopifyFulfillmentOrderLineItemSelection,
  ShopifyFulfillmentOrderLineItemManager
};
//# sourceMappingURL=ShopifyFulfillmentOrderLineItem.js.map
