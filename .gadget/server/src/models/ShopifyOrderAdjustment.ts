// All the generated types for the "Shopify Order Adjustment" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyOrderAdjustment } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyOrderAdjustmentServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly amount: true;
      readonly amountSet: true;
      readonly kind: true;
      readonly reason: true;
      readonly taxAmount: true;
      readonly taxAmountSet: true;
      readonly orderId: true;
    readonly order: false;
      readonly refundId: true;
    readonly refund: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** Context of the `create` action on the `shopifyOrderAdjustment` model. */
export interface CreateShopifyOrderAdjustmentActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyOrderAdjustment` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrderAdjustment, DefaultShopifyOrderAdjustmentServerSelection>>;
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
  context: CreateShopifyOrderAdjustmentActionContext;
};


    
/** Context of the `update` action on the `shopifyOrderAdjustment` model. */
export interface UpdateShopifyOrderAdjustmentActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyOrderAdjustment` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrderAdjustment, DefaultShopifyOrderAdjustmentServerSelection>>;
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
  context: UpdateShopifyOrderAdjustmentActionContext;
};


    
/** Context of the `delete` action on the `shopifyOrderAdjustment` model. */
export interface DeleteShopifyOrderAdjustmentActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyOrderAdjustment` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrderAdjustment, DefaultShopifyOrderAdjustmentServerSelection>>;
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
  context: DeleteShopifyOrderAdjustmentActionContext;
};


  