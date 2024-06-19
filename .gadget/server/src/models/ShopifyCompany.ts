// All the generated types for the "Shopify Company" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyCompany } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyCompanyServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly contactCount: true;
      readonly shopifyCreatedAt: true;
      readonly customerSince: true;
      readonly externalId: true;
      readonly orders: false;
      readonly lifetimeDuration: true;
      readonly locationCount: true;
      readonly name: true;
      readonly note: true;
      readonly orderCount: true;
      readonly totalSpent: true;
      readonly shopifyUpdatedAt: true;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** Context of the `create` action on the `shopifyCompany` model. */
export interface CreateShopifyCompanyActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyCompany` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCompany, DefaultShopifyCompanyServerSelection>>;
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
  context: CreateShopifyCompanyActionContext;
};


    
/** Context of the `update` action on the `shopifyCompany` model. */
export interface UpdateShopifyCompanyActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyCompany` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCompany, DefaultShopifyCompanyServerSelection>>;
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
  context: UpdateShopifyCompanyActionContext;
};


    
/** Context of the `delete` action on the `shopifyCompany` model. */
export interface DeleteShopifyCompanyActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyCompany` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCompany, DefaultShopifyCompanyServerSelection>>;
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
  context: DeleteShopifyCompanyActionContext;
};


  