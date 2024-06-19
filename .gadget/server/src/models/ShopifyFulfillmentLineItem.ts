// All the generated types for the "Shopify Fulfillment Line Item" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyFulfillmentLineItem } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyFulfillmentLineItemServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly originalTotalSet: true;
      readonly quantity: true;
      readonly discountedTotalSet: true;
      readonly fulfillmentId: true;
    readonly fulfillment: false;
      readonly orderLineItemId: true;
    readonly orderLineItem: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** Context of the `create` action on the `shopifyFulfillmentLineItem` model. */
export interface CreateShopifyFulfillmentLineItemActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyFulfillmentLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyFulfillmentLineItem, DefaultShopifyFulfillmentLineItemServerSelection>>;
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
  context: CreateShopifyFulfillmentLineItemActionContext;
};


    
/** Context of the `update` action on the `shopifyFulfillmentLineItem` model. */
export interface UpdateShopifyFulfillmentLineItemActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyFulfillmentLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyFulfillmentLineItem, DefaultShopifyFulfillmentLineItemServerSelection>>;
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
  context: UpdateShopifyFulfillmentLineItemActionContext;
};


    
/** Context of the `delete` action on the `shopifyFulfillmentLineItem` model. */
export interface DeleteShopifyFulfillmentLineItemActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyFulfillmentLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyFulfillmentLineItem, DefaultShopifyFulfillmentLineItemServerSelection>>;
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
  context: DeleteShopifyFulfillmentLineItemActionContext;
};


  