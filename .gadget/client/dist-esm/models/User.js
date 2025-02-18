import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultUserSelection = {
  "__typename": true,
  "account": true,
  "createdAt": true,
  "email": true,
  "emailVerificationToken": true,
  "emailVerificationTokenExpiration": true,
  "emailVerified": true,
  "firstName": true,
  "googleImageUrl": true,
  "googleProfileId": true,
  "id": true,
  "keys": true,
  "lastName": true,
  "lastSignedIn": true,
  "resetPasswordToken": true,
  "resetPasswordTokenExpiration": true,
  "roles": {
    "key": true,
    "name": true
  },
  "team": true,
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
;
;
;
;
;
;
;
const apiIdentifier = "user";
const pluralApiIdentifier = "users";
async function signUpUser(variables, options) {
  const newVariables = disambiguateActionParams(
    this["signUp"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "signUpUser",
    DefaultUserSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "email": {
        value: newVariables.email,
        required: true,
        type: "String"
      },
      "password": {
        value: newVariables.password,
        required: true,
        type: "String"
      }
    },
    options,
    null,
    true
  );
}
async function signInUser(variables, options) {
  const newVariables = disambiguateActionParams(
    this["signIn"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "signInUser",
    DefaultUserSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "email": {
        value: newVariables.email,
        required: true,
        type: "String"
      },
      "password": {
        value: newVariables.password,
        required: true,
        type: "String"
      }
    },
    options,
    null,
    false
  );
}
async function signOutUser(id, options) {
  return await actionRunner(
    this,
    "signOutUser",
    DefaultUserSelection,
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
async function updateUser(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "updateUser",
    DefaultUserSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "user": {
        value: newVariables.user,
        required: false,
        type: "UpdateUserInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteUser(id, options) {
  return await actionRunner(
    this,
    "deleteUser",
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
async function sendVerifyEmailUser(variables, options) {
  const newVariables = disambiguateActionParams(
    this["sendVerifyEmail"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "sendVerifyEmailUser",
    DefaultUserSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "email": {
        value: newVariables.email,
        required: true,
        type: "String"
      }
    },
    options,
    null,
    true
  );
}
async function verifyEmailUser(variables, options) {
  const newVariables = disambiguateActionParams(
    this["verifyEmail"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "verifyEmailUser",
    DefaultUserSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "code": {
        value: newVariables.code,
        required: true,
        type: "String"
      }
    },
    options,
    null,
    true
  );
}
async function sendResetPasswordUser(variables, options) {
  const newVariables = disambiguateActionParams(
    this["sendResetPassword"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "sendResetPasswordUser",
    DefaultUserSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "email": {
        value: newVariables.email,
        required: true,
        type: "String"
      }
    },
    options,
    null,
    true
  );
}
async function resetPasswordUser(variables, options) {
  const newVariables = disambiguateActionParams(
    this["resetPassword"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "resetPasswordUser",
    DefaultUserSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "password": {
        value: newVariables.password,
        required: true,
        type: "String"
      },
      "code": {
        value: newVariables.code,
        required: true,
        type: "String"
      }
    },
    options,
    null,
    true
  );
}
async function changePasswordUser(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["changePassword"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "changePasswordUser",
    DefaultUserSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "currentPassword": {
        value: newVariables.currentPassword,
        required: true,
        type: "String"
      },
      "newPassword": {
        value: newVariables.newPassword,
        required: true,
        type: "String"
      }
    },
    options,
    null,
    false
  );
}
class UserManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one user by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "user",
          id,
          DefaultUserSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultUserSelection
      }
    );
    /**
    * Finds one user by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "user",
          id,
          DefaultUserSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: DefaultUserSelection
      }
    );
    /**
    * Finds many user. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "users",
          DefaultUserSelection,
          "user",
          options
        );
      },
      {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultUserSelection
      }
    );
    /**
    * Finds the first matching user. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "users",
          DefaultUserSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultUserSelection
      }
    );
    /**
    * Finds the first matching user. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "users",
          DefaultUserSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "users",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultUserSelection
      }
    );
    /**
    * Finds one user by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
          this,
          "users",
          "id",
          value,
          DefaultUserSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "users",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultUserSelection
      }
    );
    /**
    * Finds one user by its email. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findByEmail = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
          this,
          "users",
          "email",
          value,
          DefaultUserSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "email",
        operationName: "users",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultUserSelection
      }
    );
    this.signUp = Object.assign(
      signUpUser,
      {
        type: "action",
        operationName: "signUpUser",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultUserSelection,
        variables: {
          "email": {
            required: true,
            type: "String"
          },
          "password": {
            required: true,
            type: "String"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: true,
        acceptsModelInput: false
      }
    );
    /**
    * Executes the bulkSignUp action with the given inputs.
    */
    this.bulkSignUp = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => disambiguateActionParams(
            this["signUp"],
            void 0,
            input
          )
        );
        return await actionRunner(
          this,
          "bulkSignUpUsers",
          DefaultUserSelection,
          "user",
          "users",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkSignUp"].variables["inputs"]
            }
          },
          options,
          null,
          true
        );
      },
      {
        type: "action",
        operationName: "bulkSignUpUsers",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "users",
        isBulk: true,
        defaultSelection: DefaultUserSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkSignUpUsersInput!]"
          }
        },
        hasReturnType: true,
        acceptsModelInput: false
      }
    );
    this.signIn = Object.assign(
      signInUser,
      {
        type: "action",
        operationName: "signInUser",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultUserSelection,
        variables: {
          "email": {
            required: true,
            type: "String"
          },
          "password": {
            required: true,
            type: "String"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
    /**
    * Executes the bulkSignIn action with the given inputs.
    */
    this.bulkSignIn = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => disambiguateActionParams(
            this["signIn"],
            void 0,
            input
          )
        );
        return await actionRunner(
          this,
          "bulkSignInUsers",
          DefaultUserSelection,
          "user",
          "users",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkSignIn"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkSignInUsers",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "users",
        isBulk: true,
        defaultSelection: DefaultUserSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkSignInUsersInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
    this.signOut = Object.assign(
      signOutUser,
      {
        type: "action",
        operationName: "signOutUser",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultUserSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
    /**
    * Executes the bulkSignOut action with the given inputs.
    */
    this.bulkSignOut = Object.assign(
      async (ids, options) => {
        return await actionRunner(
          this,
          "bulkSignOutUsers",
          DefaultUserSelection,
          "user",
          "users",
          true,
          {
            ids: {
              value: ids,
              ...this["bulkSignOut"].variables["ids"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkSignOutUsers",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "users",
        isBulk: true,
        defaultSelection: DefaultUserSelection,
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
    this.update = Object.assign(
      updateUser,
      {
        type: "action",
        operationName: "updateUser",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultUserSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "user": {
            required: false,
            type: "UpdateUserInput"
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
          "bulkUpdateUsers",
          DefaultUserSelection,
          "user",
          "users",
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
        operationName: "bulkUpdateUsers",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "users",
        isBulk: true,
        defaultSelection: DefaultUserSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateUsersInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteUser,
      {
        type: "action",
        operationName: "deleteUser",
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
          "bulkDeleteUsers",
          null,
          "user",
          "users",
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
        operationName: "bulkDeleteUsers",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "users",
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
    this.sendVerifyEmail = Object.assign(
      sendVerifyEmailUser,
      {
        type: "action",
        operationName: "sendVerifyEmailUser",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultUserSelection,
        variables: {
          "email": {
            required: true,
            type: "String"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false,
        paramOnlyVariables: [],
        hasReturnType: true,
        acceptsModelInput: false
      }
    );
    /**
    * Executes the bulkSendVerifyEmail action with the given inputs.
    */
    this.bulkSendVerifyEmail = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => disambiguateActionParams(
            this["sendVerifyEmail"],
            void 0,
            input
          )
        );
        return await actionRunner(
          this,
          "bulkSendVerifyEmailUsers",
          DefaultUserSelection,
          "user",
          "users",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkSendVerifyEmail"].variables["inputs"]
            }
          },
          options,
          null,
          true
        );
      },
      {
        type: "action",
        operationName: "bulkSendVerifyEmailUsers",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "users",
        isBulk: true,
        defaultSelection: DefaultUserSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkSendVerifyEmailUsersInput!]"
          }
        },
        hasReturnType: true,
        acceptsModelInput: false
      }
    );
    this.verifyEmail = Object.assign(
      verifyEmailUser,
      {
        type: "action",
        operationName: "verifyEmailUser",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultUserSelection,
        variables: {
          "code": {
            required: true,
            type: "String"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false,
        paramOnlyVariables: [],
        hasReturnType: true,
        acceptsModelInput: false
      }
    );
    /**
    * Executes the bulkVerifyEmail action with the given inputs.
    */
    this.bulkVerifyEmail = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => disambiguateActionParams(
            this["verifyEmail"],
            void 0,
            input
          )
        );
        return await actionRunner(
          this,
          "bulkVerifyEmailUsers",
          DefaultUserSelection,
          "user",
          "users",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkVerifyEmail"].variables["inputs"]
            }
          },
          options,
          null,
          true
        );
      },
      {
        type: "action",
        operationName: "bulkVerifyEmailUsers",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "users",
        isBulk: true,
        defaultSelection: DefaultUserSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkVerifyEmailUsersInput!]"
          }
        },
        hasReturnType: true,
        acceptsModelInput: false
      }
    );
    this.sendResetPassword = Object.assign(
      sendResetPasswordUser,
      {
        type: "action",
        operationName: "sendResetPasswordUser",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultUserSelection,
        variables: {
          "email": {
            required: true,
            type: "String"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false,
        paramOnlyVariables: [],
        hasReturnType: true,
        acceptsModelInput: false
      }
    );
    /**
    * Executes the bulkSendResetPassword action with the given inputs.
    */
    this.bulkSendResetPassword = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => disambiguateActionParams(
            this["sendResetPassword"],
            void 0,
            input
          )
        );
        return await actionRunner(
          this,
          "bulkSendResetPasswordUsers",
          DefaultUserSelection,
          "user",
          "users",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkSendResetPassword"].variables["inputs"]
            }
          },
          options,
          null,
          true
        );
      },
      {
        type: "action",
        operationName: "bulkSendResetPasswordUsers",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "users",
        isBulk: true,
        defaultSelection: DefaultUserSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkSendResetPasswordUsersInput!]"
          }
        },
        hasReturnType: true,
        acceptsModelInput: false
      }
    );
    this.resetPassword = Object.assign(
      resetPasswordUser,
      {
        type: "action",
        operationName: "resetPasswordUser",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultUserSelection,
        variables: {
          "password": {
            required: true,
            type: "String"
          },
          "code": {
            required: true,
            type: "String"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false,
        paramOnlyVariables: [],
        hasReturnType: true,
        acceptsModelInput: false
      }
    );
    /**
    * Executes the bulkResetPassword action with the given inputs.
    */
    this.bulkResetPassword = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => disambiguateActionParams(
            this["resetPassword"],
            void 0,
            input
          )
        );
        return await actionRunner(
          this,
          "bulkResetPasswordUsers",
          DefaultUserSelection,
          "user",
          "users",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkResetPassword"].variables["inputs"]
            }
          },
          options,
          null,
          true
        );
      },
      {
        type: "action",
        operationName: "bulkResetPasswordUsers",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "users",
        isBulk: true,
        defaultSelection: DefaultUserSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkResetPasswordUsersInput!]"
          }
        },
        hasReturnType: true,
        acceptsModelInput: false
      }
    );
    this.changePassword = Object.assign(
      changePasswordUser,
      {
        type: "action",
        operationName: "changePasswordUser",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultUserSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "currentPassword": {
            required: true,
            type: "String"
          },
          "newPassword": {
            required: true,
            type: "String"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
    /**
    * Executes the bulkChangePassword action with the given inputs.
    */
    this.bulkChangePassword = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => disambiguateActionParams(
            this["changePassword"],
            void 0,
            input
          )
        );
        return await actionRunner(
          this,
          "bulkChangePasswordUsers",
          DefaultUserSelection,
          "user",
          "users",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkChangePassword"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkChangePasswordUsers",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "users",
        isBulk: true,
        defaultSelection: DefaultUserSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkChangePasswordUsersInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
  }
}
export {
  DefaultUserSelection,
  UserManager
};
//# sourceMappingURL=User.js.map
