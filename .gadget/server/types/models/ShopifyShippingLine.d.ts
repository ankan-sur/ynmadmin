import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyShippingLine } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyShippingLineServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly carrierIdentifier: true;
    readonly code: true;
    readonly discountAllocations: true;
    readonly discountedPrice: true;
    readonly discountedPriceSet: true;
    readonly phone: true;
    readonly price: true;
    readonly priceSet: true;
    readonly source: true;
    readonly taxLines: true;
    readonly title: true;
    readonly requestedFulfillmentServiceId: true;
    readonly requestedFulfillmentService: false;
    readonly orderId: true;
    readonly order: false;
    readonly shopId: true;
    readonly shop: false;
};
/** Context of the `create` action on the `shopifyShippingLine` model. */
export interface CreateShopifyShippingLineActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyShippingLine` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyShippingLine, DefaultShopifyShippingLineServerSelection>>;
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
    context: CreateShopifyShippingLineActionContext;
}
/** Context of the `update` action on the `shopifyShippingLine` model. */
export interface UpdateShopifyShippingLineActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyShippingLine` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyShippingLine, DefaultShopifyShippingLineServerSelection>>;
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
    context: UpdateShopifyShippingLineActionContext;
}
/** Context of the `delete` action on the `shopifyShippingLine` model. */
export interface DeleteShopifyShippingLineActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyShippingLine` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyShippingLine, DefaultShopifyShippingLineServerSelection>>;
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
    context: DeleteShopifyShippingLineActionContext;
}
