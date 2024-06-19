import {
  actionRunner,
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultShopifyFulfillmentOrderSelection = {
  "__typename": true,
  "assignedLocation": true,
  "createdAt": true,
  "deliveryMethod": true,
  "destination": true,
  "fulfillAt": true,
  "fulfillBy": true,
  "fulfillmentHolds": true,
  "id": true,
  "internationalDuties": true,
  "merchantRequests": true,
  "requestStatus": true,
  "status": true,
  "supportedActions": true,
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
const apiIdentifier = "shopifyFulfillmentOrder";
const pluralApiIdentifier = "shopifyFulfillmentOrders";
async function createShopifyFulfillmentOrder(variables, options) {
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "createShopifyFulfillmentOrder",
    DefaultShopifyFulfillmentOrderSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyFulfillmentOrder": {
        value: newVariables.shopifyFulfillmentOrder,
        required: false,
        type: "CreateShopifyFulfillmentOrderInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyFulfillmentOrder(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "updateShopifyFulfillmentOrder",
    DefaultShopifyFulfillmentOrderSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyFulfillmentOrder": {
        value: newVariables.shopifyFulfillmentOrder,
        required: false,
        type: "UpdateShopifyFulfillmentOrderInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteShopifyFulfillmentOrder(id, options) {
  return await actionRunner(
    this,
    "deleteShopifyFulfillmentOrder",
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
class ShopifyFulfillmentOrderManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyFulfillmentOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyFulfillmentOrder",
          id,
          DefaultShopifyFulfillmentOrderSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillmentOrder",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentOrderSelection
      }
    );
    /**
    * Finds one shopifyFulfillmentOrder by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyFulfillmentOrder",
          id,
          DefaultShopifyFulfillmentOrderSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillmentOrder",
        modelApiIdentifier: "shopifyFulfillmentOrder",
        defaultSelection: DefaultShopifyFulfillmentOrderSelection
      }
    );
    /**
    * Finds many shopifyFulfillmentOrder. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyFulfillmentOrders",
          DefaultShopifyFulfillmentOrderSelection,
          "shopifyFulfillmentOrder",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyFulfillmentOrders",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentOrderSelection
      }
    );
    /**
    * Finds the first matching shopifyFulfillmentOrder. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyFulfillmentOrders",
          DefaultShopifyFulfillmentOrderSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyFulfillmentOrders",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentOrderSelection
      }
    );
    /**
    * Finds the first matching shopifyFulfillmentOrder. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyFulfillmentOrders",
          DefaultShopifyFulfillmentOrderSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyFulfillmentOrders",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentOrderSelection
      }
    );
    this.create = Object.assign(
      createShopifyFulfillmentOrder,
      {
        type: "action",
        operationName: "createShopifyFulfillmentOrder",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyFulfillmentOrderSelection,
        variables: {
          "shopifyFulfillmentOrder": {
            required: false,
            type: "CreateShopifyFulfillmentOrderInput"
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
          "bulkCreateShopifyFulfillmentOrders",
          DefaultShopifyFulfillmentOrderSelection,
          "shopifyFulfillmentOrder",
          "shopifyFulfillmentOrders",
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
        operationName: "bulkCreateShopifyFulfillmentOrders",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyFulfillmentOrders",
        isBulk: true,
        defaultSelection: DefaultShopifyFulfillmentOrderSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyFulfillmentOrdersInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyFulfillmentOrder,
      {
        type: "action",
        operationName: "updateShopifyFulfillmentOrder",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyFulfillmentOrderSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyFulfillmentOrder": {
            required: false,
            type: "UpdateShopifyFulfillmentOrderInput"
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
          "bulkUpdateShopifyFulfillmentOrders",
          DefaultShopifyFulfillmentOrderSelection,
          "shopifyFulfillmentOrder",
          "shopifyFulfillmentOrders",
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
        operationName: "bulkUpdateShopifyFulfillmentOrders",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyFulfillmentOrders",
        isBulk: true,
        defaultSelection: DefaultShopifyFulfillmentOrderSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyFulfillmentOrdersInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteShopifyFulfillmentOrder,
      {
        type: "action",
        operationName: "deleteShopifyFulfillmentOrder",
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
          "bulkDeleteShopifyFulfillmentOrders",
          null,
          "shopifyFulfillmentOrder",
          "shopifyFulfillmentOrders",
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
        operationName: "bulkDeleteShopifyFulfillmentOrders",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyFulfillmentOrders",
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
  DefaultShopifyFulfillmentOrderSelection,
  ShopifyFulfillmentOrderManager
};
//# sourceMappingURL=ShopifyFulfillmentOrder.js.map
