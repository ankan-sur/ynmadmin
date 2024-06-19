import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyMarket } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyMarketServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly currencySettings: true;
    readonly enabled: true;
    readonly name: true;
    readonly primary: true;
    readonly regions: false;
    readonly marketWebPresenceId: true;
    readonly marketWebPresence: false;
    readonly marketWebPresences: false;
    readonly shopId: true;
    readonly shop: false;
};
/** Context of the `create` action on the `shopifyMarket` model. */
export interface CreateShopifyMarketActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyMarket` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyMarket, DefaultShopifyMarketServerSelection>>;
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
    context: CreateShopifyMarketActionContext;
}
/** Context of the `update` action on the `shopifyMarket` model. */
export interface UpdateShopifyMarketActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyMarket` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyMarket, DefaultShopifyMarketServerSelection>>;
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
    context: UpdateShopifyMarketActionContext;
}
/** Context of the `delete` action on the `shopifyMarket` model. */
export interface DeleteShopifyMarketActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyMarket` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyMarket, DefaultShopifyMarketServerSelection>>;
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
    context: DeleteShopifyMarketActionContext;
}
