import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyPriceRule } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyPriceRuleServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly allocationLimit: true;
    readonly allocationMethod: true;
    readonly shopifyCreatedAt: true;
    readonly customerSegmentPrerequisiteIds: true;
    readonly customerSelection: true;
    readonly endsAt: true;
    readonly entitledCollectionIds: true;
    readonly entitledCountryIds: true;
    readonly entitledProductIds: true;
    readonly entitledVariantIds: true;
    readonly oncePerCustomer: true;
    readonly prerequisiteCollectionIds: true;
    readonly prerequisiteCustomerIds: true;
    readonly prerequisiteProductIds: true;
    readonly prerequisiteQuantityRange: true;
    readonly prerequisiteShippingPriceRange: true;
    readonly prerequisiteSubtotalRange: true;
    readonly prerequisiteToEntitlementPurchase: true;
    readonly prerequisiteToEntitlementQuantityRatio: true;
    readonly prerequisiteVariants: true;
    readonly startsAt: true;
    readonly targetSelection: true;
    readonly targetType: true;
    readonly title: true;
    readonly shopifyUpdatedAt: true;
    readonly usageLimit: true;
    readonly value: true;
    readonly valueType: true;
    readonly discountCodes: false;
    readonly shopId: true;
    readonly shop: false;
};
/** Context of the `create` action on the `shopifyPriceRule` model. */
export interface CreateShopifyPriceRuleActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyPriceRule` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyPriceRule, DefaultShopifyPriceRuleServerSelection>>;
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
    params: {};
    /**
    * @private The context of this action.
    */
    context: CreateShopifyPriceRuleActionContext;
}
/** Context of the `update` action on the `shopifyPriceRule` model. */
export interface UpdateShopifyPriceRuleActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyPriceRule` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyPriceRule, DefaultShopifyPriceRuleServerSelection>>;
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
    params: {};
    /**
    * @private The context of this action.
    */
    context: UpdateShopifyPriceRuleActionContext;
}
/** Context of the `delete` action on the `shopifyPriceRule` model. */
export interface DeleteShopifyPriceRuleActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyPriceRule` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyPriceRule, DefaultShopifyPriceRuleServerSelection>>;
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
    params: {};
    /**
    * @private The context of this action.
    */
    context: DeleteShopifyPriceRuleActionContext;
}
