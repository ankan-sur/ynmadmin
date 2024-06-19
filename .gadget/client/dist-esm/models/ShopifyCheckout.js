import {
  actionRunner,
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultShopifyCheckoutSelection = {
  "__typename": true,
  "abandonedCheckoutUrl": true,
  "appliedDiscount": true,
  "buyerAcceptsMarketing": true,
  "completedAt": true,
  "createdAt": true,
  "creditCard": true,
  "currency": true,
  "customerLocale": true,
  "device": true,
  "discountCode": true,
  "email": true,
  "id": true,
  "legalNoticeUrl": true,
  "name": true,
  "note": true,
  "noteAttributes": true,
  "orderStatusUrl": true,
  "paymentDue": true,
  "paymentUrl": true,
  "payments": true,
  "phone": true,
  "presentmentCurrency": true,
  "privacyPolicyUrl": true,
  "refundPolicyUrl": true,
  "requiresShipping": true,
  "reservationTime": true,
  "reservationTimeLeft": true,
  "shippingLine": true,
  "shippingPolicyUrl": true,
  "shopifyCreatedAt": true,
  "shopifyPaymentsAccountId": true,
  "shopifyUpdatedAt": true,
  "sourceIdentifier": true,
  "sourceName": true,
  "sourceUrl": true,
  "subscriptionPolicyUrl": true,
  "subtotalPrice": true,
  "taxExempt": true,
  "taxLines": true,
  "taxManipulations": true,
  "taxesIncluded": true,
  "termsOfSaleUrl": true,
  "termsOfServiceUrl": true,
  "token": true,
  "totalLineItemsPrice": true,
  "totalPrice": true,
  "totalTax": true,
  "totalTipReceived": true,
  "updatedAt": true,
  "userId": true,
  "webUrl": true
};
;
;
;
;
;
;
;
;
const apiIdentifier = "shopifyCheckout";
const pluralApiIdentifier = "shopifyCheckouts";
async function createShopifyCheckout(variables, options) {
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "createShopifyCheckout",
    DefaultShopifyCheckoutSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyCheckout": {
        value: newVariables.shopifyCheckout,
        required: false,
        type: "CreateShopifyCheckoutInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyCheckout(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "updateShopifyCheckout",
    DefaultShopifyCheckoutSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyCheckout": {
        value: newVariables.shopifyCheckout,
        required: false,
        type: "UpdateShopifyCheckoutInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteShopifyCheckout(id, options) {
  return await actionRunner(
    this,
    "deleteShopifyCheckout",
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
class ShopifyCheckoutManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyCheckout by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyCheckout",
          id,
          DefaultShopifyCheckoutSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyCheckout",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCheckoutSelection
      }
    );
    /**
    * Finds one shopifyCheckout by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyCheckout",
          id,
          DefaultShopifyCheckoutSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyCheckout",
        modelApiIdentifier: "shopifyCheckout",
        defaultSelection: DefaultShopifyCheckoutSelection
      }
    );
    /**
    * Finds many shopifyCheckout. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyCheckouts",
          DefaultShopifyCheckoutSelection,
          "shopifyCheckout",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyCheckouts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCheckoutSelection
      }
    );
    /**
    * Finds the first matching shopifyCheckout. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCheckouts",
          DefaultShopifyCheckoutSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyCheckouts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCheckoutSelection
      }
    );
    /**
    * Finds the first matching shopifyCheckout. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCheckouts",
          DefaultShopifyCheckoutSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyCheckouts",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCheckoutSelection
      }
    );
    this.create = Object.assign(
      createShopifyCheckout,
      {
        type: "action",
        operationName: "createShopifyCheckout",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyCheckoutSelection,
        variables: {
          "shopifyCheckout": {
            required: false,
            type: "CreateShopifyCheckoutInput"
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
          "bulkCreateShopifyCheckouts",
          DefaultShopifyCheckoutSelection,
          "shopifyCheckout",
          "shopifyCheckouts",
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
        operationName: "bulkCreateShopifyCheckouts",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyCheckouts",
        isBulk: true,
        defaultSelection: DefaultShopifyCheckoutSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyCheckoutsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyCheckout,
      {
        type: "action",
        operationName: "updateShopifyCheckout",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyCheckoutSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyCheckout": {
            required: false,
            type: "UpdateShopifyCheckoutInput"
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
          "bulkUpdateShopifyCheckouts",
          DefaultShopifyCheckoutSelection,
          "shopifyCheckout",
          "shopifyCheckouts",
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
        operationName: "bulkUpdateShopifyCheckouts",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyCheckouts",
        isBulk: true,
        defaultSelection: DefaultShopifyCheckoutSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyCheckoutsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteShopifyCheckout,
      {
        type: "action",
        operationName: "deleteShopifyCheckout",
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
          "bulkDeleteShopifyCheckouts",
          null,
          "shopifyCheckout",
          "shopifyCheckouts",
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
        operationName: "bulkDeleteShopifyCheckouts",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyCheckouts",
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
  DefaultShopifyCheckoutSelection,
  ShopifyCheckoutManager
};
//# sourceMappingURL=ShopifyCheckout.js.map
