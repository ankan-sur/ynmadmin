import {
  actionRunner,
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultShopifyDiscountCodeSelection = {
  "__typename": true,
  "code": true,
  "createdAt": true,
  "id": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "updatedAt": true,
  "usageCount": true
};
;
;
;
;
;
;
;
;
const apiIdentifier = "shopifyDiscountCode";
const pluralApiIdentifier = "shopifyDiscountCodes";
async function createShopifyDiscountCode(variables, options) {
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "createShopifyDiscountCode",
    DefaultShopifyDiscountCodeSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyDiscountCode": {
        value: newVariables.shopifyDiscountCode,
        required: false,
        type: "CreateShopifyDiscountCodeInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyDiscountCode(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "updateShopifyDiscountCode",
    DefaultShopifyDiscountCodeSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyDiscountCode": {
        value: newVariables.shopifyDiscountCode,
        required: false,
        type: "UpdateShopifyDiscountCodeInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteShopifyDiscountCode(id, options) {
  return await actionRunner(
    this,
    "deleteShopifyDiscountCode",
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
class ShopifyDiscountCodeManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyDiscountCode by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyDiscountCode",
          id,
          DefaultShopifyDiscountCodeSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyDiscountCode",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDiscountCodeSelection
      }
    );
    /**
    * Finds one shopifyDiscountCode by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyDiscountCode",
          id,
          DefaultShopifyDiscountCodeSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyDiscountCode",
        modelApiIdentifier: "shopifyDiscountCode",
        defaultSelection: DefaultShopifyDiscountCodeSelection
      }
    );
    /**
    * Finds many shopifyDiscountCode. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyDiscountCodes",
          DefaultShopifyDiscountCodeSelection,
          "shopifyDiscountCode",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyDiscountCodes",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDiscountCodeSelection
      }
    );
    /**
    * Finds the first matching shopifyDiscountCode. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyDiscountCodes",
          DefaultShopifyDiscountCodeSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyDiscountCodes",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDiscountCodeSelection
      }
    );
    /**
    * Finds the first matching shopifyDiscountCode. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyDiscountCodes",
          DefaultShopifyDiscountCodeSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyDiscountCodes",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyDiscountCodeSelection
      }
    );
    this.create = Object.assign(
      createShopifyDiscountCode,
      {
        type: "action",
        operationName: "createShopifyDiscountCode",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyDiscountCodeSelection,
        variables: {
          "shopifyDiscountCode": {
            required: false,
            type: "CreateShopifyDiscountCodeInput"
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
          "bulkCreateShopifyDiscountCodes",
          DefaultShopifyDiscountCodeSelection,
          "shopifyDiscountCode",
          "shopifyDiscountCodes",
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
        operationName: "bulkCreateShopifyDiscountCodes",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyDiscountCodes",
        isBulk: true,
        defaultSelection: DefaultShopifyDiscountCodeSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyDiscountCodesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyDiscountCode,
      {
        type: "action",
        operationName: "updateShopifyDiscountCode",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyDiscountCodeSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyDiscountCode": {
            required: false,
            type: "UpdateShopifyDiscountCodeInput"
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
          "bulkUpdateShopifyDiscountCodes",
          DefaultShopifyDiscountCodeSelection,
          "shopifyDiscountCode",
          "shopifyDiscountCodes",
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
        operationName: "bulkUpdateShopifyDiscountCodes",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyDiscountCodes",
        isBulk: true,
        defaultSelection: DefaultShopifyDiscountCodeSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyDiscountCodesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteShopifyDiscountCode,
      {
        type: "action",
        operationName: "deleteShopifyDiscountCode",
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
          "bulkDeleteShopifyDiscountCodes",
          null,
          "shopifyDiscountCode",
          "shopifyDiscountCodes",
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
        operationName: "bulkDeleteShopifyDiscountCodes",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyDiscountCodes",
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
  DefaultShopifyDiscountCodeSelection,
  ShopifyDiscountCodeManager
};
//# sourceMappingURL=ShopifyDiscountCode.js.map
