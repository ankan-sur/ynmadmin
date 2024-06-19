// All the generated types for the "User" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, User } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultUserServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly emailVerified: true;
      readonly roles: true;
      readonly resetPasswordToken: true;
      readonly resetPasswordTokenExpiration: true;
      readonly lastName: true;
      readonly lastSignedIn: true;
      readonly firstName: true;
      readonly googleProfileId: true;
      readonly email: true;
      readonly googleImageUrl: true;
      readonly account: true;
      readonly emailVerificationToken: true;
      readonly emailVerificationTokenExpiration: true;
      readonly password: true;
      readonly keys: true;
      readonly team: true;
  };

  
/** Context of the `signUp` action on the `user` model. */
export interface SignUpUserActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `user` record this action is operating on.
  */
  record: GadgetRecord<Select<User, DefaultUserServerSelection>>;
  /**
  * @deprecated Use 'return' instead.
  */
  scope: ActionExecutionScope;
  /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */
  trigger: ActionTrigger;
  /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */
  params: {

};
  /**
  * @private The context of this action.
  */
  context: SignUpUserActionContext;
};


    
/** Context of the `signIn` action on the `user` model. */
export interface SignInUserActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `user` record this action is operating on.
  */
  record: GadgetRecord<Select<User, DefaultUserServerSelection>>;
  /**
  * @deprecated Use 'return' instead.
  */
  scope: ActionExecutionScope;
  /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */
  trigger: ActionTrigger;
  /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */
  params: {

};
  /**
  * @private The context of this action.
  */
  context: SignInUserActionContext;
};


    
/** Context of the `signOut` action on the `user` model. */
export interface SignOutUserActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `user` record this action is operating on.
  */
  record: GadgetRecord<Select<User, DefaultUserServerSelection>>;
  /**
  * @deprecated Use 'return' instead.
  */
  scope: ActionExecutionScope;
  /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */
  trigger: ActionTrigger;
  /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */
  params: {

};
  /**
  * @private The context of this action.
  */
  context: SignOutUserActionContext;
};


    
/** Context of the `update` action on the `user` model. */
export interface UpdateUserActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `user` record this action is operating on.
  */
  record: GadgetRecord<Select<User, DefaultUserServerSelection>>;
  /**
  * @deprecated Use 'return' instead.
  */
  scope: ActionExecutionScope;
  /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */
  trigger: ActionTrigger;
  /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */
  params: {

};
  /**
  * @private The context of this action.
  */
  context: UpdateUserActionContext;
};


    
/** Context of the `delete` action on the `user` model. */
export interface DeleteUserActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `user` record this action is operating on.
  */
  record: GadgetRecord<Select<User, DefaultUserServerSelection>>;
  /**
  * @deprecated Use 'return' instead.
  */
  scope: ActionExecutionScope;
  /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */
  trigger: ActionTrigger;
  /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */
  params: {

};
  /**
  * @private The context of this action.
  */
  context: DeleteUserActionContext;
};


    
/** Context of the `sendVerifyEmail` action on the `user` model. */
export interface SendVerifyEmailUserActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `user` record this action is operating on.
  */
  record: GadgetRecord<Select<User, DefaultUserServerSelection>>;
  /**
  * @deprecated Use 'return' instead.
  */
  scope: ActionExecutionScope;
  /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */
  trigger: ActionTrigger;
  /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */
  params: {

};
  /**
  * @private The context of this action.
  */
  context: SendVerifyEmailUserActionContext;
};


    
/** Context of the `verifyEmail` action on the `user` model. */
export interface VerifyEmailUserActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `user` record this action is operating on.
  */
  record: GadgetRecord<Select<User, DefaultUserServerSelection>>;
  /**
  * @deprecated Use 'return' instead.
  */
  scope: ActionExecutionScope;
  /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */
  trigger: ActionTrigger;
  /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */
  params: {

};
  /**
  * @private The context of this action.
  */
  context: VerifyEmailUserActionContext;
};


    
/** Context of the `sendResetPassword` action on the `user` model. */
export interface SendResetPasswordUserActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `user` record this action is operating on.
  */
  record: GadgetRecord<Select<User, DefaultUserServerSelection>>;
  /**
  * @deprecated Use 'return' instead.
  */
  scope: ActionExecutionScope;
  /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */
  trigger: ActionTrigger;
  /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */
  params: {

};
  /**
  * @private The context of this action.
  */
  context: SendResetPasswordUserActionContext;
};


    
/** Context of the `resetPassword` action on the `user` model. */
export interface ResetPasswordUserActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `user` record this action is operating on.
  */
  record: GadgetRecord<Select<User, DefaultUserServerSelection>>;
  /**
  * @deprecated Use 'return' instead.
  */
  scope: ActionExecutionScope;
  /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */
  trigger: ActionTrigger;
  /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */
  params: {

};
  /**
  * @private The context of this action.
  */
  context: ResetPasswordUserActionContext;
};


    
/** Context of the `changePassword` action on the `user` model. */
export interface ChangePasswordUserActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `user` record this action is operating on.
  */
  record: GadgetRecord<Select<User, DefaultUserServerSelection>>;
  /**
  * @deprecated Use 'return' instead.
  */
  scope: ActionExecutionScope;
  /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */
  trigger: ActionTrigger;
  /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */
  params: {

};
  /**
  * @private The context of this action.
  */
  context: ChangePasswordUserActionContext;
};


  