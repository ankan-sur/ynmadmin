import {
  actionRunner,
  findManyRunner,
  findOneRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultShopifyCompanySelection = {
  "__typename": true,
  "contactCount": true,
  "createdAt": true,
  "customerSince": true,
  "externalId": true,
  "id": true,
  "lifetimeDuration": true,
  "locationCount": true,
  "name": true,
  "note": true,
  "orderCount": true,
  "shopifyCreatedAt": true,
  "shopifyUpdatedAt": true,
  "totalSpent": true,
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
const apiIdentifier = "shopifyCompany";
const pluralApiIdentifier = "shopifyCompanies";
async function createShopifyCompany(variables, options) {
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "createShopifyCompany",
    DefaultShopifyCompanySelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "shopifyCompany": {
        value: newVariables.shopifyCompany,
        required: false,
        type: "CreateShopifyCompanyInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateShopifyCompany(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "updateShopifyCompany",
    DefaultShopifyCompanySelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "shopifyCompany": {
        value: newVariables.shopifyCompany,
        required: false,
        type: "UpdateShopifyCompanyInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteShopifyCompany(id, options) {
  return await actionRunner(
    this,
    "deleteShopifyCompany",
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
class ShopifyCompanyManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one shopifyCompany by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "shopifyCompany",
          id,
          DefaultShopifyCompanySelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "shopifyCompany",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCompanySelection
      }
    );
    /**
    * Finds one shopifyCompany by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "shopifyCompany",
          id,
          DefaultShopifyCompanySelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "shopifyCompany",
        modelApiIdentifier: "shopifyCompany",
        defaultSelection: DefaultShopifyCompanySelection
      }
    );
    /**
    * Finds many shopifyCompany. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "shopifyCompanies",
          DefaultShopifyCompanySelection,
          "shopifyCompany",
          options
        );
      },
      {
        type: "findMany",
        operationName: "shopifyCompanies",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCompanySelection
      }
    );
    /**
    * Finds the first matching shopifyCompany. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCompanies",
          DefaultShopifyCompanySelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "shopifyCompanies",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCompanySelection
      }
    );
    /**
    * Finds the first matching shopifyCompany. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "shopifyCompanies",
          DefaultShopifyCompanySelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "shopifyCompanies",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultShopifyCompanySelection
      }
    );
    this.create = Object.assign(
      createShopifyCompany,
      {
        type: "action",
        operationName: "createShopifyCompany",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyCompanySelection,
        variables: {
          "shopifyCompany": {
            required: false,
            type: "CreateShopifyCompanyInput"
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
          "bulkCreateShopifyCompanies",
          DefaultShopifyCompanySelection,
          "shopifyCompany",
          "shopifyCompanies",
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
        operationName: "bulkCreateShopifyCompanies",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyCompanies",
        isBulk: true,
        defaultSelection: DefaultShopifyCompanySelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateShopifyCompaniesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateShopifyCompany,
      {
        type: "action",
        operationName: "updateShopifyCompany",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultShopifyCompanySelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "shopifyCompany": {
            required: false,
            type: "UpdateShopifyCompanyInput"
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
          "bulkUpdateShopifyCompanies",
          DefaultShopifyCompanySelection,
          "shopifyCompany",
          "shopifyCompanies",
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
        operationName: "bulkUpdateShopifyCompanies",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyCompanies",
        isBulk: true,
        defaultSelection: DefaultShopifyCompanySelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateShopifyCompaniesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteShopifyCompany,
      {
        type: "action",
        operationName: "deleteShopifyCompany",
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
          "bulkDeleteShopifyCompanies",
          null,
          "shopifyCompany",
          "shopifyCompanies",
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
        operationName: "bulkDeleteShopifyCompanies",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "shopifyCompanies",
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
  DefaultShopifyCompanySelection,
  ShopifyCompanyManager
};
//# sourceMappingURL=ShopifyCompany.js.map
