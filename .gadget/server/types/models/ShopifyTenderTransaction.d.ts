import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyTenderTransaction } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyTenderTransactionServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly amount: true;
    readonly currency: true;
    readonly paymentDetails: true;
    readonly paymentMethod: true;
    readonly processedAt: true;
    readonly remoteReference: true;
    readonly test: true;
    readonly orderId: true;
    readonly order: false;
    readonly shopId: true;
    readonly shop: false;
};
/** Context of the `create` action on the `shopifyTenderTransaction` model. */
export interface CreateShopifyTenderTransactionActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyTenderTransaction` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyTenderTransaction, DefaultShopifyTenderTransactionServerSelection>>;
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
    context: CreateShopifyTenderTransactionActionContext;
}
/** Context of the `update` action on the `shopifyTenderTransaction` model. */
export interface UpdateShopifyTenderTransactionActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyTenderTransaction` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyTenderTransaction, DefaultShopifyTenderTransactionServerSelection>>;
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
    context: UpdateShopifyTenderTransactionActionContext;
}
/** Context of the `delete` action on the `shopifyTenderTransaction` model. */
export interface DeleteShopifyTenderTransactionActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyTenderTransaction` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyTenderTransaction, DefaultShopifyTenderTransactionServerSelection>>;
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
    context: DeleteShopifyTenderTransactionActionContext;
}
