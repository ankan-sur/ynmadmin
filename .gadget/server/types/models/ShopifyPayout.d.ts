import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyPayout } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyPayoutServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly balanceTransactions: false;
    readonly amount: true;
    readonly currency: true;
    readonly date: true;
    readonly status: true;
    readonly summary: true;
    readonly shopId: true;
    readonly shop: false;
};
/** Context of the `create` action on the `shopifyPayout` model. */
export interface CreateShopifyPayoutActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyPayout` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyPayout, DefaultShopifyPayoutServerSelection>>;
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
    context: CreateShopifyPayoutActionContext;
}
/** Context of the `update` action on the `shopifyPayout` model. */
export interface UpdateShopifyPayoutActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyPayout` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyPayout, DefaultShopifyPayoutServerSelection>>;
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
    context: UpdateShopifyPayoutActionContext;
}
/** Context of the `delete` action on the `shopifyPayout` model. */
export interface DeleteShopifyPayoutActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyPayout` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyPayout, DefaultShopifyPayoutServerSelection>>;
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
    context: DeleteShopifyPayoutActionContext;
}
