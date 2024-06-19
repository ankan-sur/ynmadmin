import {
  actionRunner,
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultShopifyFulfillmentSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "name": true,
  "notifyCustomer": true,
  "originAddress": true,
  "receipt": true,
  "service": true,
  "shipmentStatus": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "status": true,
  "trackingCompany": true,
  "trackingNumbers": true,
  "trackingUrls": true,
  "updatedAt": true,
  "variantInventoryManagement": true
};
;
;
;
;
;
;
;
;
const apiIdentifier = "shopifyFulfillment";
const pluralApiIdentifier = "shopifyFulfillments";
async function createShopifyFulfillment(variables, options) {
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "createShopifyFulfillment",
    DefaultShopifyFulfillmentSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyFulfillment": {
        value: newVariables.shopifyFulfillment,
        required: false,
        type: "CreateShopifyFulfillmentInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyFulfillment(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "updateShopifyFulfillment",
    DefaultShopifyFulfillmentSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyFulfillment": {
        value: newVariables.shopifyFulfillment,
        required: false,
        type: "UpdateShopifyFulfillmentInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteShopifyFulfillment(id, options) {
  return await actionRunner(
    this,
    "deleteShopifyFulfillment",
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
class ShopifyFulfillmentManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyFulfillment by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyFulfillment",
          id,
          DefaultShopifyFulfillmentSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillment",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentSelection
      }
    );
    /**
    * Finds one shopifyFulfillment by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyFulfillment",
          id,
          DefaultShopifyFulfillmentSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyFulfillment",
        modelApiIdentifier: "shopifyFulfillment",
        defaultSelection: DefaultShopifyFulfillmentSelection
      }
    );
    /**
    * Finds many shopifyFulfillment. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyFulfillments",
          DefaultShopifyFulfillmentSelection,
          "shopifyFulfillment",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyFulfillments",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentSelection
      }
    );
    /**
    * Finds the first matching shopifyFulfillment. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyFulfillments",
          DefaultShopifyFulfillmentSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyFulfillments",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentSelection
      }
    );
    /**
    * Finds the first matching shopifyFulfillment. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyFulfillments",
          DefaultShopifyFulfillmentSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyFulfillments",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyFulfillmentSelection
      }
    );
    this.create = Object.assign(
      createShopifyFulfillment,
      {
        type: "action",
        operationName: "createShopifyFulfillment",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyFulfillmentSelection,
        variables: {
          "shopifyFulfillment": {
            required: false,
            type: "CreateShopifyFulfillmentInput"
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
          "bulkCreateShopifyFulfillments",
          DefaultShopifyFulfillmentSelection,
          "shopifyFulfillment",
          "shopifyFulfillments",
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
        operationName: "bulkCreateShopifyFulfillments",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyFulfillments",
        isBulk: true,
        defaultSelection: DefaultShopifyFulfillmentSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyFulfillmentsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyFulfillment,
      {
        type: "action",
        operationName: "updateShopifyFulfillment",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyFulfillmentSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyFulfillment": {
            required: false,
            type: "UpdateShopifyFulfillmentInput"
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
          "bulkUpdateShopifyFulfillments",
          DefaultShopifyFulfillmentSelection,
          "shopifyFulfillment",
          "shopifyFulfillments",
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
        operationName: "bulkUpdateShopifyFulfillments",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyFulfillments",
        isBulk: true,
        defaultSelection: DefaultShopifyFulfillmentSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyFulfillmentsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteShopifyFulfillment,
      {
        type: "action",
        operationName: "deleteShopifyFulfillment",
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
          "bulkDeleteShopifyFulfillments",
          null,
          "shopifyFulfillment",
          "shopifyFulfillments",
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
        operationName: "bulkDeleteShopifyFulfillments",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyFulfillments",
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
  DefaultShopifyFulfillmentSelection,
  ShopifyFulfillmentManager
};
//# sourceMappingURL=ShopifyFulfillment.js.map
