import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyFulfillmentOrderLineItem } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyFulfillmentOrderLineItemServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly remainingQuantity: true;
    readonly quantity: true;
    readonly fulfillmentOrderId: true;
    readonly fulfillmentOrder: false;
    readonly orderLineItemId: true;
    readonly orderLineItem: false;
    readonly shopId: true;
    readonly shop: false;
};
/** Context of the `create` action on the `shopifyFulfillmentOrderLineItem` model. */
export interface CreateShopifyFulfillmentOrderLineItemActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyFulfillmentOrderLineItem` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFulfillmentOrderLineItem, DefaultShopifyFulfillmentOrderLineItemServerSelection>>;
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
    context: CreateShopifyFulfillmentOrderLineItemActionContext;
}
/** Context of the `update` action on the `shopifyFulfillmentOrderLineItem` model. */
export interface UpdateShopifyFulfillmentOrderLineItemActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyFulfillmentOrderLineItem` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFulfillmentOrderLineItem, DefaultShopifyFulfillmentOrderLineItemServerSelection>>;
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
    context: UpdateShopifyFulfillmentOrderLineItemActionContext;
}
/** Context of the `delete` action on the `shopifyFulfillmentOrderLineItem` model. */
export interface DeleteShopifyFulfillmentOrderLineItemActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyFulfillmentOrderLineItem` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFulfillmentOrderLineItem, DefaultShopifyFulfillmentOrderLineItemServerSelection>>;
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
    context: DeleteShopifyFulfillmentOrderLineItemActionContext;
}
