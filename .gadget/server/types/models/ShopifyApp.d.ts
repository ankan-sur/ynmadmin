import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyApp } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyAppServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly apiKey: true;
    readonly appStoreAppUrl: true;
    readonly appStoreDeveloperUrl: true;
    readonly availableAccessScopes: true;
    readonly description: true;
    readonly developerName: true;
    readonly developerType: true;
    readonly embedded: true;
    readonly failedRequirements: true;
    readonly features: true;
    readonly feedback: true;
    readonly installations: false;
    readonly handle: true;
    readonly previouslyInstalled: true;
    readonly pricingDetails: true;
    readonly pricingDetailsSummary: true;
    readonly privacyPolicyUrl: true;
    readonly publicCategory: true;
    readonly published: true;
    readonly requestedAccessScopes: true;
    readonly shopifyDeveloped: true;
    readonly title: true;
    readonly uninstallMessage: true;
    readonly webhookApiVersion: true;
};
/** Context of the `create` action on the `shopifyApp` model. */
export interface CreateShopifyAppActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyApp` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyApp, DefaultShopifyAppServerSelection>>;
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
    context: CreateShopifyAppActionContext;
}
/** Context of the `update` action on the `shopifyApp` model. */
export interface UpdateShopifyAppActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyApp` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyApp, DefaultShopifyAppServerSelection>>;
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
    context: UpdateShopifyAppActionContext;
}
/** Context of the `delete` action on the `shopifyApp` model. */
export interface DeleteShopifyAppActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyApp` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyApp, DefaultShopifyAppServerSelection>>;
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
    context: DeleteShopifyAppActionContext;
}
