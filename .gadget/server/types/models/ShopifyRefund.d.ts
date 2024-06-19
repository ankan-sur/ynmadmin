import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyRefund } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyRefundServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly shopifyCreatedAt: true;
    readonly duties: false;
    readonly note: true;
    readonly orderAdjustments: false;
    readonly processedAt: true;
    readonly refundLineItems: false;
    readonly restock: true;
    readonly orderId: true;
    readonly order: false;
    readonly shopId: true;
    readonly shop: false;
};
/** Context of the `create` action on the `shopifyRefund` model. */
export interface CreateShopifyRefundActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyRefund` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyRefund, DefaultShopifyRefundServerSelection>>;
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
    context: CreateShopifyRefundActionContext;
}
/** Context of the `update` action on the `shopifyRefund` model. */
export interface UpdateShopifyRefundActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyRefund` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyRefund, DefaultShopifyRefundServerSelection>>;
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
    context: UpdateShopifyRefundActionContext;
}
/** Context of the `delete` action on the `shopifyRefund` model. */
export interface DeleteShopifyRefundActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyRefund` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyRefund, DefaultShopifyRefundServerSelection>>;
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
    context: DeleteShopifyRefundActionContext;
}
