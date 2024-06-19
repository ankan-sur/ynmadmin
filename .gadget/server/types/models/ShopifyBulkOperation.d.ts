import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyBulkOperation } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyBulkOperationServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly state: true;
    readonly completedAt: true;
    readonly errorCode: true;
    readonly fileSize: true;
    readonly objectCount: true;
    readonly partialDataUrl: true;
    readonly query: true;
    readonly rootObjectCount: true;
    readonly status: true;
    readonly type: true;
    readonly url: true;
    readonly shopId: true;
    readonly shop: false;
};
/** Context of the `create` action on the `shopifyBulkOperation` model. */
export interface CreateShopifyBulkOperationActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyBulkOperation` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyBulkOperation, DefaultShopifyBulkOperationServerSelection>>;
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
    context: CreateShopifyBulkOperationActionContext;
}
/** Context of the `update` action on the `shopifyBulkOperation` model. */
export interface UpdateShopifyBulkOperationActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyBulkOperation` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyBulkOperation, DefaultShopifyBulkOperationServerSelection>>;
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
    context: UpdateShopifyBulkOperationActionContext;
}
/** Context of the `complete` action on the `shopifyBulkOperation` model. */
export interface CompleteShopifyBulkOperationActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyBulkOperation` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyBulkOperation, DefaultShopifyBulkOperationServerSelection>>;
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
    context: CompleteShopifyBulkOperationActionContext;
}
/** Context of the `cancel` action on the `shopifyBulkOperation` model. */
export interface CancelShopifyBulkOperationActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyBulkOperation` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyBulkOperation, DefaultShopifyBulkOperationServerSelection>>;
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
    context: CancelShopifyBulkOperationActionContext;
}
/** Context of the `fail` action on the `shopifyBulkOperation` model. */
export interface FailShopifyBulkOperationActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyBulkOperation` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyBulkOperation, DefaultShopifyBulkOperationServerSelection>>;
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
    context: FailShopifyBulkOperationActionContext;
}
/** Context of the `expire` action on the `shopifyBulkOperation` model. */
export interface ExpireShopifyBulkOperationActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyBulkOperation` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyBulkOperation, DefaultShopifyBulkOperationServerSelection>>;
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
    context: ExpireShopifyBulkOperationActionContext;
}
