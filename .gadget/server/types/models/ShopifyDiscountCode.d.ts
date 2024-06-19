import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyDiscountCode } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyDiscountCodeServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly code: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly usageCount: true;
    readonly priceRuleId: true;
    readonly priceRule: false;
    readonly shopId: true;
    readonly shop: false;
};
/** Context of the `create` action on the `shopifyDiscountCode` model. */
export interface CreateShopifyDiscountCodeActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyDiscountCode` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyDiscountCode, DefaultShopifyDiscountCodeServerSelection>>;
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
    context: CreateShopifyDiscountCodeActionContext;
}
/** Context of the `update` action on the `shopifyDiscountCode` model. */
export interface UpdateShopifyDiscountCodeActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyDiscountCode` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyDiscountCode, DefaultShopifyDiscountCodeServerSelection>>;
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
    context: UpdateShopifyDiscountCodeActionContext;
}
/** Context of the `delete` action on the `shopifyDiscountCode` model. */
export interface DeleteShopifyDiscountCodeActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyDiscountCode` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyDiscountCode, DefaultShopifyDiscountCodeServerSelection>>;
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
    context: DeleteShopifyDiscountCodeActionContext;
}
