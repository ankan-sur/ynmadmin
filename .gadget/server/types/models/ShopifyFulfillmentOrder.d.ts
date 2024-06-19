import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyFulfillmentOrder } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyFulfillmentOrderServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly assignedLocation: true;
    readonly deliveryMethod: true;
    readonly destination: true;
    readonly fulfillAt: true;
    readonly fulfillBy: true;
    readonly fulfillmentHolds: true;
    readonly internationalDuties: true;
    readonly merchantRequests: true;
    readonly requestStatus: true;
    readonly status: true;
    readonly supportedActions: true;
    readonly fulfillmentOrderLineItems: false;
    readonly orderId: true;
    readonly order: false;
    readonly shopId: true;
    readonly shop: false;
};
/** Context of the `create` action on the `shopifyFulfillmentOrder` model. */
export interface CreateShopifyFulfillmentOrderActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyFulfillmentOrder` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFulfillmentOrder, DefaultShopifyFulfillmentOrderServerSelection>>;
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
    context: CreateShopifyFulfillmentOrderActionContext;
}
/** Context of the `update` action on the `shopifyFulfillmentOrder` model. */
export interface UpdateShopifyFulfillmentOrderActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyFulfillmentOrder` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFulfillmentOrder, DefaultShopifyFulfillmentOrderServerSelection>>;
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
    context: UpdateShopifyFulfillmentOrderActionContext;
}
/** Context of the `delete` action on the `shopifyFulfillmentOrder` model. */
export interface DeleteShopifyFulfillmentOrderActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyFulfillmentOrder` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFulfillmentOrder, DefaultShopifyFulfillmentOrderServerSelection>>;
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
    context: DeleteShopifyFulfillmentOrderActionContext;
}
