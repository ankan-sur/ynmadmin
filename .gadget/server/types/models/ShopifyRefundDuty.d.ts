import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyRefundDuty } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyRefundDutyServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly amountSet: true;
    readonly refundId: true;
    readonly refund: false;
    readonly shopId: true;
    readonly shop: false;
};
/** Context of the `create` action on the `shopifyRefundDuty` model. */
export interface CreateShopifyRefundDutyActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyRefundDuty` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyRefundDuty, DefaultShopifyRefundDutyServerSelection>>;
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
    context: CreateShopifyRefundDutyActionContext;
}
/** Context of the `update` action on the `shopifyRefundDuty` model. */
export interface UpdateShopifyRefundDutyActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyRefundDuty` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyRefundDuty, DefaultShopifyRefundDutyServerSelection>>;
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
    context: UpdateShopifyRefundDutyActionContext;
}
/** Context of the `delete` action on the `shopifyRefundDuty` model. */
export interface DeleteShopifyRefundDutyActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyRefundDuty` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyRefundDuty, DefaultShopifyRefundDutyServerSelection>>;
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
    context: DeleteShopifyRefundDutyActionContext;
}
