import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyShop } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyShopServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly state: true;
    readonly collections: false;
    readonly marketRegions: false;
    readonly orderAdjustments: false;
    readonly balanceTransactions: false;
    readonly checkoutLineItems: false;
    readonly markets: false;
    readonly gdprRequests: false;
    readonly orderLineItems: false;
    readonly orders: false;
    readonly disputes: false;
    readonly refunds: false;
    readonly refundLineItems: false;
    readonly company: false;
    readonly collects: false;
    readonly syncs: false;
    readonly priceRules: false;
    readonly checkouts: false;
    readonly fulfillments: false;
    readonly marketWebPresences: false;
    readonly fulfillmentLineItems: false;
    readonly fulfillmentOrderLineItems: false;
    readonly discountCodes: false;
    readonly appInstallations: false;
    readonly refundDuties: false;
    readonly customerAccountsV2: true;
    readonly accessToken: true;
    readonly address1: true;
    readonly address2: true;
    readonly checkoutApiSupported: true;
    readonly city: true;
    readonly cookieConsentLevel: true;
    readonly country: true;
    readonly countryCode: true;
    readonly countryName: true;
    readonly countyTaxes: true;
    readonly shopifyCreatedAt: true;
    readonly currency: true;
    readonly customerEmail: true;
    readonly disabledWebhooks: true;
    readonly domain: true;
    readonly eligibleForCardReaderGiveaway: true;
    readonly eligibleForPayments: true;
    readonly email: true;
    readonly enabledPresentmentCurrencies: true;
    readonly finances: true;
    readonly forceSsl: true;
    readonly fulfillmentOrders: false;
    readonly googleAppsDomain: true;
    readonly googleAppsLoginEnabled: true;
    readonly grantedScopes: true;
    readonly hasDiscounts: true;
    readonly hasGiftCards: true;
    readonly hasStorefront: true;
    readonly discounts: false;
    readonly ianaTimezone: true;
    readonly installedViaApiKey: true;
    readonly fulfillmentServices: false;
    readonly latitude: true;
    readonly longitude: true;
    readonly marketingSmsContentEnabledAtCheckout: true;
    readonly scriptTags: false;
    readonly moneyFormat: true;
    readonly moneyInEmailsFormat: true;
    readonly moneyWithCurrencyFormat: true;
    readonly moneyWithCurrencyInEmailsFormat: true;
    readonly multiLocationEnabled: true;
    readonly myshopifyDomain: true;
    readonly name: true;
    readonly payouts: false;
    readonly passwordEnabled: true;
    readonly phone: true;
    readonly planDisplayName: true;
    readonly planName: true;
    readonly preLaunchEnabled: true;
    readonly primaryLocale: true;
    readonly province: true;
    readonly provinceCode: true;
    readonly bulkOperations: false;
    readonly registeredWebhooks: true;
    readonly requiresExtraPaymentsAgreement: true;
    readonly domains: false;
    readonly disputeEvidences: false;
    readonly setupRequired: true;
    readonly shopOwner: true;
    readonly source: true;
    readonly taxShipping: true;
    readonly taxesIncluded: true;
    readonly timezone: true;
    readonly transactionalSmsDisabled: true;
    readonly shopifyUpdatedAt: true;
    readonly weightUnit: true;
    readonly products: false;
    readonly zipCode: true;
    readonly tenderTransactions: false;
    readonly shippingLines: false;
    readonly shopifySmartCollects: false;
    readonly handle: true;
};
/** Context of the `update` action on the `shopifyShop` model. */
export interface UpdateShopifyShopActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyShop` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
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
    context: UpdateShopifyShopActionContext;
}
/** Context of the `install` action on the `shopifyShop` model. */
export interface InstallShopifyShopActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyShop` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
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
    context: InstallShopifyShopActionContext;
}
/** Context of the `uninstall` action on the `shopifyShop` model. */
export interface UninstallShopifyShopActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyShop` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
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
    context: UninstallShopifyShopActionContext;
}
/** Context of the `reinstall` action on the `shopifyShop` model. */
export interface ReinstallShopifyShopActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyShop` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
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
    context: ReinstallShopifyShopActionContext;
}
