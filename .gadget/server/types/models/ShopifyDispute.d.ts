import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyDispute } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyDisputeServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly amount: true;
    readonly currency: true;
    readonly evidenceDueBy: true;
    readonly evidenceSentOn: true;
    readonly finalizedOn: true;
    readonly networkReasonCode: true;
    readonly reason: true;
    readonly status: true;
    readonly type: true;
    readonly disputeEvidence: false;
    readonly orderId: true;
    readonly order: false;
    readonly shopId: true;
    readonly shop: false;
};
/** Context of the `create` action on the `shopifyDispute` model. */
export interface CreateShopifyDisputeActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyDispute` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyDispute, DefaultShopifyDisputeServerSelection>>;
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
    context: CreateShopifyDisputeActionContext;
}
/** Context of the `update` action on the `shopifyDispute` model. */
export interface UpdateShopifyDisputeActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyDispute` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyDispute, DefaultShopifyDisputeServerSelection>>;
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
    context: UpdateShopifyDisputeActionContext;
}
/** Context of the `delete` action on the `shopifyDispute` model. */
export interface DeleteShopifyDisputeActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyDispute` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyDispute, DefaultShopifyDisputeServerSelection>>;
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
    context: DeleteShopifyDisputeActionContext;
}
