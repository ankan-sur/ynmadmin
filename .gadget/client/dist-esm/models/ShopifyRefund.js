import {
  actionRunner,
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultShopifyRefundSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "note": true,
  "processedAt": true,
  "restock": true,
  "shopifyCreatedAt": true,
  "updatedAt": true
};
;
;
;
;
;
;
const apiIdentifier = "shopifyRefund";
const pluralApiIdentifier = "shopifyRefunds";
async function createShopifyRefund(variables, options) {
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "createShopifyRefund",
    DefaultShopifyRefundSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyRefund": {
        value: newVariables.shopifyRefund,
        required: false,
        type: "CreateShopifyRefundInput"
      }
    },
    options,
    null,
    false
  );
}
class ShopifyRefundManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyRefund by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyRefund",
          id,
          DefaultShopifyRefundSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyRefund",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundSelection
      }
    );
    /**
    * Finds one shopifyRefund by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyRefund",
          id,
          DefaultShopifyRefundSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyRefund",
        modelApiIdentifier: "shopifyRefund",
        defaultSelection: DefaultShopifyRefundSelection
      }
    );
    /**
    * Finds many shopifyRefund. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyRefunds",
          DefaultShopifyRefundSelection,
          "shopifyRefund",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyRefunds",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundSelection
      }
    );
    /**
    * Finds the first matching shopifyRefund. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyRefunds",
          DefaultShopifyRefundSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyRefunds",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundSelection
      }
    );
    /**
    * Finds the first matching shopifyRefund. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyRefunds",
          DefaultShopifyRefundSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyRefunds",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyRefundSelection
      }
    );
    this.create = Object.assign(
      createShopifyRefund,
      {
        type: "action",
        operationName: "createShopifyRefund",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyRefundSelection,
        variables: {
          "shopifyRefund": {
            required: false,
            type: "CreateShopifyRefundInput"
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
          "bulkCreateShopifyRefunds",
          DefaultShopifyRefundSelection,
          "shopifyRefund",
          "shopifyRefunds",
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
        operationName: "bulkCreateShopifyRefunds",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyRefunds",
        isBulk: true,
        defaultSelection: DefaultShopifyRefundSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyRefundsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
  }
}
export {
  DefaultShopifyRefundSelection,
  ShopifyRefundManager
};
//# sourceMappingURL=ShopifyRefund.js.map
