// All the generated types for the "Shopify Discount" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyDiscount } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyDiscountServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly appDiscountType: true;
      readonly appliesOnOneTimePurchase: true;
      readonly appliesOnSubscription: true;
      readonly appliesOncePerCustomer: true;
      readonly asyncUsageCount: true;
      readonly codeCount: true;
      readonly combinesWith: true;
      readonly shopifyCreatedAt: true;
      readonly destinationSelection: true;
      readonly discountClass: true;
      readonly discountId: true;
      readonly endsAt: true;
      readonly errorHistory: true;
      readonly hasTimelineComment: true;
      readonly maximumShippingPrice: true;
      readonly minimumRequirement: true;
      readonly recurringCycleLimit: true;
      readonly shareableUrls: true;
      readonly shortSummary: true;
      readonly startsAt: true;
      readonly status: true;
      readonly summary: true;
      readonly title: true;
      readonly totalSales: true;
      readonly usageLimit: true;
      readonly usesPerOrderLimit: true;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** Context of the `create` action on the `shopifyDiscount` model. */
export interface CreateShopifyDiscountActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyDiscount` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyDiscount, DefaultShopifyDiscountServerSelection>>;
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
  context: CreateShopifyDiscountActionContext;
};


    
/** Context of the `update` action on the `shopifyDiscount` model. */
export interface UpdateShopifyDiscountActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyDiscount` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyDiscount, DefaultShopifyDiscountServerSelection>>;
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
  context: UpdateShopifyDiscountActionContext;
};


    
/** Context of the `delete` action on the `shopifyDiscount` model. */
export interface DeleteShopifyDiscountActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyDiscount` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyDiscount, DefaultShopifyDiscountServerSelection>>;
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
  context: DeleteShopifyDiscountActionContext;
};


  