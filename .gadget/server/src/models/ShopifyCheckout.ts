// All the generated types for the "Shopify Checkout" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyCheckout } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyCheckoutServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly abandonedCheckoutUrl: true;
      readonly appliedDiscount: true;
      readonly buyerAcceptsMarketing: true;
      readonly completedAt: true;
      readonly shopifyCreatedAt: true;
      readonly creditCard: true;
      readonly currency: true;
      readonly customerLocale: true;
      readonly device: true;
      readonly discountCode: true;
      readonly email: true;
      readonly legalNoticeUrl: true;
      readonly lineItems: false;
      readonly name: true;
      readonly note: true;
      readonly noteAttributes: true;
      readonly orderStatusUrl: true;
      readonly paymentDue: true;
      readonly paymentUrl: true;
      readonly payments: true;
      readonly phone: true;
      readonly presentmentCurrency: true;
      readonly privacyPolicyUrl: true;
      readonly refundPolicyUrl: true;
      readonly requiresShipping: true;
      readonly reservationTime: true;
      readonly reservationTimeLeft: true;
      readonly shippingLine: true;
      readonly shippingPolicyUrl: true;
      readonly shopifyPaymentsAccountId: true;
      readonly sourceIdentifier: true;
      readonly sourceName: true;
      readonly sourceUrl: true;
      readonly subscriptionPolicyUrl: true;
      readonly subtotalPrice: true;
      readonly taxExempt: true;
      readonly taxLines: true;
      readonly taxManipulations: true;
      readonly taxesIncluded: true;
      readonly termsOfSaleUrl: true;
      readonly termsOfServiceUrl: true;
      readonly token: true;
      readonly totalLineItemsPrice: true;
      readonly totalPrice: true;
      readonly totalTax: true;
      readonly totalTipReceived: true;
      readonly shopifyUpdatedAt: true;
      readonly userId: true;
      readonly webUrl: true;
      readonly shopId: true;
    readonly shop: false;
      readonly orderId: true;
    readonly order: false;
  };

  
/** Context of the `create` action on the `shopifyCheckout` model. */
export interface CreateShopifyCheckoutActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyCheckout` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCheckout, DefaultShopifyCheckoutServerSelection>>;
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
  context: CreateShopifyCheckoutActionContext;
};


    
/** Context of the `update` action on the `shopifyCheckout` model. */
export interface UpdateShopifyCheckoutActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyCheckout` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCheckout, DefaultShopifyCheckoutServerSelection>>;
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
  context: UpdateShopifyCheckoutActionContext;
};


    
/** Context of the `delete` action on the `shopifyCheckout` model. */
export interface DeleteShopifyCheckoutActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyCheckout` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyCheckout, DefaultShopifyCheckoutServerSelection>>;
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
  context: DeleteShopifyCheckoutActionContext;
};


  