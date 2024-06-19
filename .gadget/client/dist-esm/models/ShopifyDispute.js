import {
  actionRunner,
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultShopifyDisputeSelection = {
  "__typename": true,
  "amount": true,
  "createdAt": true,
  "currency": true,
  "evidenceDueBy": true,
  "evidenceSentOn": true,
  "finalizedOn": true,
  "id": true,
  "networkReasonCode": true,
  "reason": true,
  "status": true,
  "type": true,
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
const apiIdentifier = "shopifyDispute";
const pluralApiIdentifier = "shopifyDisputes";
async function createShopifyDispute(variables, options) {
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "createShopifyDispute",
    DefaultShopifyDisputeSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyDispute": {
        value: newVariables.shopifyDispute,
        required: false,
        type: "CreateShopifyDisputeInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyDispute(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "updateShopifyDispute",
    DefaultShopifyDisputeSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyDispute": {
        value: newVariables.shopifyDispute,
        required: false,
        type: "UpdateShopifyDisputeInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteShopifyDispute(id, options) {
  return await actionRunner(
    this,
    "deleteShopifyDispute",
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
class ShopifyDisputeManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyDispute by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyDispute",
          id,
          DefaultShopifyDisputeSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyDispute",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDisputeSelection
      }
    );
    /**
    * Finds one shopifyDispute by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyDispute",
          id,
          DefaultShopifyDisputeSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyDispute",
        modelApiIdentifier: "shopifyDispute",
        defaultSelection: DefaultShopifyDisputeSelection
      }
    );
    /**
    * Finds many shopifyDispute. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyDisputes",
          DefaultShopifyDisputeSelection,
          "shopifyDispute",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyDisputes",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDisputeSelection
      }
    );
    /**
    * Finds the first matching shopifyDispute. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyDisputes",
          DefaultShopifyDisputeSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyDisputes",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDisputeSelection
      }
    );
    /**
    * Finds the first matching shopifyDispute. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyDisputes",
          DefaultShopifyDisputeSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyDisputes",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDisputeSelection
      }
    );
    this.create = Object.assign(
      createShopifyDispute,
      {
        type: "action",
        operationName: "createShopifyDispute",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyDisputeSelection,
        variables: {
          "shopifyDispute": {
            required: false,
            type: "CreateShopifyDisputeInput"
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
          "bulkCreateShopifyDisputes",
          DefaultShopifyDisputeSelection,
          "shopifyDispute",
          "shopifyDisputes",
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
        operationName: "bulkCreateShopifyDisputes",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyDisputes",
        isBulk: true,
        defaultSelection: DefaultShopifyDisputeSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyDisputesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyDispute,
      {
        type: "action",
        operationName: "updateShopifyDispute",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyDisputeSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyDispute": {
            required: false,
            type: "UpdateShopifyDisputeInput"
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
          "bulkUpdateShopifyDisputes",
          DefaultShopifyDisputeSelection,
          "shopifyDispute",
          "shopifyDisputes",
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
        operationName: "bulkUpdateShopifyDisputes",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyDisputes",
        isBulk: true,
        defaultSelection: DefaultShopifyDisputeSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyDisputesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteShopifyDispute,
      {
        type: "action",
        operationName: "deleteShopifyDispute",
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
          "bulkDeleteShopifyDisputes",
          null,
          "shopifyDispute",
          "shopifyDisputes",
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
        operationName: "bulkDeleteShopifyDisputes",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyDisputes",
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
  DefaultShopifyDisputeSelection,
  ShopifyDisputeManager
};
//# sourceMappingURL=ShopifyDispute.js.map
