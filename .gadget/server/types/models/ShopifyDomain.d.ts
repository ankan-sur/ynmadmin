import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyDomain } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyDomainServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly marketWebPresences: false;
    readonly host: true;
    readonly localization: true;
    readonly sslEnabled: true;
    readonly url: true;
    readonly shopId: true;
    readonly shop: false;
};
/** Context of the `create` action on the `shopifyDomain` model. */
export interface CreateShopifyDomainActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyDomain` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyDomain, DefaultShopifyDomainServerSelection>>;
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
    context: CreateShopifyDomainActionContext;
}
/** Context of the `update` action on the `shopifyDomain` model. */
export interface UpdateShopifyDomainActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyDomain` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyDomain, DefaultShopifyDomainServerSelection>>;
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
    context: UpdateShopifyDomainActionContext;
}
/** Context of the `delete` action on the `shopifyDomain` model. */
export interface DeleteShopifyDomainActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyDomain` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyDomain, DefaultShopifyDomainServerSelection>>;
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
    context: DeleteShopifyDomainActionContext;
}
