import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyMarketRegion } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyMarketRegionServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly code: true;
    readonly name: true;
    readonly marketId: true;
    readonly market: false;
    readonly shopId: true;
    readonly shop: false;
};
/** Context of the `create` action on the `shopifyMarketRegion` model. */
export interface CreateShopifyMarketRegionActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyMarketRegion` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyMarketRegion, DefaultShopifyMarketRegionServerSelection>>;
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
    context: CreateShopifyMarketRegionActionContext;
}
/** Context of the `update` action on the `shopifyMarketRegion` model. */
export interface UpdateShopifyMarketRegionActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyMarketRegion` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyMarketRegion, DefaultShopifyMarketRegionServerSelection>>;
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
    context: UpdateShopifyMarketRegionActionContext;
}
/** Context of the `delete` action on the `shopifyMarketRegion` model. */
export interface DeleteShopifyMarketRegionActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyMarketRegion` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyMarketRegion, DefaultShopifyMarketRegionServerSelection>>;
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
    context: DeleteShopifyMarketRegionActionContext;
}
