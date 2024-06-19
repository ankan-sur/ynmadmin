// All the generated types for the "Shopify Script Tag" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyScriptTag } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyScriptTagServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly cache: true;
      readonly shopifyCreatedAt: true;
      readonly displayScope: true;
      readonly event: true;
      readonly source: true;
      readonly shopifyUpdatedAt: true;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** Context of the `create` action on the `shopifyScriptTag` model. */
export interface CreateShopifyScriptTagActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyScriptTag` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyScriptTag, DefaultShopifyScriptTagServerSelection>>;
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
  context: CreateShopifyScriptTagActionContext;
};


    
/** Context of the `update` action on the `shopifyScriptTag` model. */
export interface UpdateShopifyScriptTagActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyScriptTag` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyScriptTag, DefaultShopifyScriptTagServerSelection>>;
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
  context: UpdateShopifyScriptTagActionContext;
};


    
/** Context of the `delete` action on the `shopifyScriptTag` model. */
export interface DeleteShopifyScriptTagActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyScriptTag` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyScriptTag, DefaultShopifyScriptTagServerSelection>>;
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
  context: DeleteShopifyScriptTagActionContext;
};


  