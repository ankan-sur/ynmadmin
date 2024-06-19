// All the generated types for the "Shopify Refund Line Item" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyRefundLineItem } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyRefundLineItemServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly quantity: true;
      readonly restockType: true;
      readonly subtotal: true;
      readonly subtotalSet: true;
      readonly totalTax: true;
      readonly totalTaxSet: true;
      readonly orderLineItemId: true;
    readonly orderLineItem: false;
      readonly refundId: true;
    readonly refund: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** Context of the `create` action on the `shopifyRefundLineItem` model. */
export interface CreateShopifyRefundLineItemActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyRefundLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyRefundLineItem, DefaultShopifyRefundLineItemServerSelection>>;
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
  context: CreateShopifyRefundLineItemActionContext;
};


    
/** Context of the `update` action on the `shopifyRefundLineItem` model. */
export interface UpdateShopifyRefundLineItemActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyRefundLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyRefundLineItem, DefaultShopifyRefundLineItemServerSelection>>;
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
  context: UpdateShopifyRefundLineItemActionContext;
};


    
/** Context of the `delete` action on the `shopifyRefundLineItem` model. */
export interface DeleteShopifyRefundLineItemActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyRefundLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyRefundLineItem, DefaultShopifyRefundLineItemServerSelection>>;
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
  context: DeleteShopifyRefundLineItemActionContext;
};


  