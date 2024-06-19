import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyFulfillment } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyFulfillmentServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly shopifyCreatedAt: true;
    readonly name: true;
    readonly notifyCustomer: true;
    readonly originAddress: true;
    readonly receipt: true;
    readonly service: true;
    readonly shipmentStatus: true;
    readonly status: true;
    readonly trackingCompany: true;
    readonly trackingNumbers: true;
    readonly trackingUrls: true;
    readonly shopifyUpdatedAt: true;
    readonly variantInventoryManagement: true;
    readonly fulfillmentLineItems: false;
    readonly orderId: true;
    readonly order: false;
    readonly shopId: true;
    readonly shop: false;
};
/** Context of the `create` action on the `shopifyFulfillment` model. */
export interface CreateShopifyFulfillmentActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyFulfillment` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFulfillment, DefaultShopifyFulfillmentServerSelection>>;
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
    context: CreateShopifyFulfillmentActionContext;
}
/** Context of the `update` action on the `shopifyFulfillment` model. */
export interface UpdateShopifyFulfillmentActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyFulfillment` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFulfillment, DefaultShopifyFulfillmentServerSelection>>;
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
    context: UpdateShopifyFulfillmentActionContext;
}
/** Context of the `delete` action on the `shopifyFulfillment` model. */
export interface DeleteShopifyFulfillmentActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyFulfillment` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyFulfillment, DefaultShopifyFulfillmentServerSelection>>;
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
    context: DeleteShopifyFulfillmentActionContext;
}
