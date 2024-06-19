import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyMarketWebPresence } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyMarketWebPresenceServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly primaryWebPresenceForMarket: false;
    readonly alternateLocales: true;
    readonly rootUrls: true;
    readonly subfolderSuffix: true;
    readonly domainId: true;
    readonly domain: false;
    readonly marketId: true;
    readonly market: false;
    readonly shopId: true;
    readonly shop: false;
};
/** Context of the `create` action on the `shopifyMarketWebPresence` model. */
export interface CreateShopifyMarketWebPresenceActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyMarketWebPresence` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyMarketWebPresence, DefaultShopifyMarketWebPresenceServerSelection>>;
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
    context: CreateShopifyMarketWebPresenceActionContext;
}
/** Context of the `update` action on the `shopifyMarketWebPresence` model. */
export interface UpdateShopifyMarketWebPresenceActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyMarketWebPresence` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyMarketWebPresence, DefaultShopifyMarketWebPresenceServerSelection>>;
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
    context: UpdateShopifyMarketWebPresenceActionContext;
}
/** Context of the `delete` action on the `shopifyMarketWebPresence` model. */
export interface DeleteShopifyMarketWebPresenceActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyMarketWebPresence` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyMarketWebPresence, DefaultShopifyMarketWebPresenceServerSelection>>;
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
    context: DeleteShopifyMarketWebPresenceActionContext;
}
