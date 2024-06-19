// All the generated types for the "Shopify Order Line Item" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyOrderLineItem } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyOrderLineItemServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly fulfillmentOrderLineItems: false;
      readonly refunds: false;
      readonly fulfillmentLineItems: false;
      readonly attributedStaffs: true;
      readonly shopifyCreatedAt: true;
      readonly currentQuantity: true;
      readonly discountAllocations: true;
      readonly fulfillableQuantity: true;
      readonly fulfillmentService: true;
      readonly fulfillmentStatus: true;
      readonly giftCard: true;
      readonly grams: true;
      readonly name: true;
      readonly price: true;
      readonly priceSet: true;
      readonly productExists: true;
      readonly properties: true;
      readonly quantity: true;
      readonly requiresShipping: true;
      readonly sku: true;
      readonly taxLines: true;
      readonly taxable: true;
      readonly title: true;
      readonly totalDiscount: true;
      readonly totalDiscountSet: true;
      readonly shopifyUpdatedAt: true;
      readonly variantInventoryManagement: true;
      readonly variantTitle: true;
      readonly vendor: true;
      readonly orderId: true;
    readonly order: false;
      readonly productId: true;
    readonly product: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** Context of the `create` action on the `shopifyOrderLineItem` model. */
export interface CreateShopifyOrderLineItemActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyOrderLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrderLineItem, DefaultShopifyOrderLineItemServerSelection>>;
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
  context: CreateShopifyOrderLineItemActionContext;
};


    
/** Context of the `update` action on the `shopifyOrderLineItem` model. */
export interface UpdateShopifyOrderLineItemActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyOrderLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrderLineItem, DefaultShopifyOrderLineItemServerSelection>>;
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
  context: UpdateShopifyOrderLineItemActionContext;
};


    
/** Context of the `delete` action on the `shopifyOrderLineItem` model. */
export interface DeleteShopifyOrderLineItemActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyOrderLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrderLineItem, DefaultShopifyOrderLineItemServerSelection>>;
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
  context: DeleteShopifyOrderLineItemActionContext;
};


  