import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyOrder } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyOrderServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly refunds: false;
    readonly checkouts: false;
    readonly fulfillmentOrders: false;
    readonly adjustments: false;
    readonly additionalFees: true;
    readonly cancellation: true;
    readonly shopifyProtect: true;
    readonly purchasingEntity: true;
    readonly balanceTransactions: false;
    readonly billingAddress: true;
    readonly browserIp: true;
    readonly buyerAcceptsMarketing: true;
    readonly cancelReason: true;
    readonly cancelledAt: true;
    readonly cartToken: true;
    readonly checkoutToken: true;
    readonly clientDetails: true;
    readonly closedAt: true;
    readonly shopifyCreatedAt: true;
    readonly currency: true;
    readonly currentSubtotalPrice: true;
    readonly currentSubtotalPriceSet: true;
    readonly currentTotalAdditionalFeesSet: true;
    readonly currentTotalDiscounts: true;
    readonly currentTotalDiscountsSet: true;
    readonly currentTotalDutiesSet: true;
    readonly currentTotalPrice: true;
    readonly currentTotalPriceSet: true;
    readonly currentTotalTax: true;
    readonly currentTotalTaxSet: true;
    readonly customerLocale: true;
    readonly discountApplications: true;
    readonly discountCodes: true;
    readonly email: true;
    readonly estimatedTaxes: true;
    readonly financialStatus: true;
    readonly fulfillmentStatus: true;
    readonly fulfillments: false;
    readonly landingSite: true;
    readonly lineItems: false;
    readonly name: true;
    readonly note: true;
    readonly noteAttributes: true;
    readonly number: true;
    readonly orderNumber: true;
    readonly orderStatusUrl: true;
    readonly originalTotalAdditionalFeesSet: true;
    readonly originalTotalDutiesSet: true;
    readonly paymentGatewayNames: true;
    readonly phone: true;
    readonly poNumber: true;
    readonly presentmentCurrency: true;
    readonly processedAt: true;
    readonly disputes: false;
    readonly referringSite: true;
    readonly shippingAddress: true;
    readonly sourceIdentifier: true;
    readonly sourceName: true;
    readonly sourceUrl: true;
    readonly subtotalPrice: true;
    readonly subtotalPriceSet: true;
    readonly tags: true;
    readonly taxExempt: true;
    readonly taxLines: true;
    readonly taxesIncluded: true;
    readonly test: true;
    readonly token: true;
    readonly totalDiscounts: true;
    readonly totalDiscountsSet: true;
    readonly totalLineItemsPrice: true;
    readonly totalLineItemsPriceSet: true;
    readonly totalOutstanding: true;
    readonly totalPrice: true;
    readonly totalPriceSet: true;
    readonly totalShippingPriceSet: true;
    readonly totalTax: true;
    readonly totalTaxSet: true;
    readonly totalTipReceived: true;
    readonly totalWeight: true;
    readonly shopifyUpdatedAt: true;
    readonly purchasingCompanyId: true;
    readonly purchasingCompany: false;
    readonly shopId: true;
    readonly shop: false;
    readonly tenderTransactions: false;
    readonly shippingLines: false;
};
/** Context of the `create` action on the `shopifyOrder` model. */
export interface CreateShopifyOrderActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyOrder` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyOrder, DefaultShopifyOrderServerSelection>>;
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
    context: CreateShopifyOrderActionContext;
}
/** Context of the `update` action on the `shopifyOrder` model. */
export interface UpdateShopifyOrderActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyOrder` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyOrder, DefaultShopifyOrderServerSelection>>;
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
    context: UpdateShopifyOrderActionContext;
}
/** Context of the `delete` action on the `shopifyOrder` model. */
export interface DeleteShopifyOrderActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyOrder` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyOrder, DefaultShopifyOrderServerSelection>>;
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
    context: DeleteShopifyOrderActionContext;
}
