// All the generated types for the "Shopify Checkout Line Item" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyCheckoutLineItem } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyCheckoutLineItemServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly appliedDiscounts: true;
      readonly compareAtPrice: true;
      readonly discountAllocations: true;
      readonly fulfillmentService: true;
      readonly grams: true;
      readonly key: true;
      readonly linePrice: true;
      readonly price: true;
      readonly quantity: true;
      readonly requiresShipping: true;
      readonly sku: true;
      readonly taxable: true;
      readonly title: true;
      readonly variantTitle: true;
      readonly vendor: true;
      readonly checkoutId: true;
    readonly checkout: false;
      readonly productId: true;
    readonly product: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** Context of the `create` action on the `shopifyCheckoutLineItem` model. */
export interface CreateShopifyCheckoutLineItemActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyCheckoutLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCheckoutLineItem, DefaultShopifyCheckoutLineItemServerSelection>>;
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
  context: CreateShopifyCheckoutLineItemActionContext;
};


    
/** Context of the `update` action on the `shopifyCheckoutLineItem` model. */
export interface UpdateShopifyCheckoutLineItemActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyCheckoutLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCheckoutLineItem, DefaultShopifyCheckoutLineItemServerSelection>>;
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
  context: UpdateShopifyCheckoutLineItemActionContext;
};


    
/** Context of the `delete` action on the `shopifyCheckoutLineItem` model. */
export interface DeleteShopifyCheckoutLineItemActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyCheckoutLineItem` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCheckoutLineItem, DefaultShopifyCheckoutLineItemServerSelection>>;
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
  context: DeleteShopifyCheckoutLineItemActionContext;
};


  