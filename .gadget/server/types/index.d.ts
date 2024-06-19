/**
* This is the Gadget server side types library for:
*
*                                   _           _
*   _   _ _ __  _ __ ___   __ _  __| |_ __ ___ (_)_ __
*  | | | | '_ \| '_ ` _ \ / _` |/ _` | '_ ` _ \| | '_ \
*  | |_| | | | | | | | | | (_| | (_| | | | | | | | | | |
*   \__, |_| |_|_| |_| |_|\__,_|\__,_|_| |_| |_|_|_| |_|
*   |___/
*
* Built for environment `Development` at version 14512
* Framework version: ^0.3.1
* Edit this app here: https://ynmadmin.gadget.dev/edit
*/
import type { Client } from "@gadget-client/ynmadmin";
import { Logger } from "./AmbientContext";
export * from "./metadataFileTypes";
export * from "./AmbientContext";
export * from "./AppConfigs";
export * from "./AppConfiguration";
export * from "./AppConnections";
export * from "./auth";
export * from "./effects";
export * as DefaultEmailTemplates from "./email-templates";
export * from "./emails";
export { InvalidStateTransitionError } from "./errors";
export * from "./global-actions";
export * from "./routes";
export * from "./state-chart";
export * from "./types";
export * from "./ActionOptions";
export * from "./models/User";
export * from "./models/ShopifyApp";
export * from "./models/ShopifyAppInstallation";
export * from "./models/ShopifyBalanceTransaction";
export * from "./models/ShopifyBulkOperation";
export * from "./models/ShopifyCheckout";
export * from "./models/ShopifyCheckoutLineItem";
export * from "./models/ShopifyCollect";
export * from "./models/ShopifyCollection";
export * from "./models/ShopifyCompany";
export * from "./models/ShopifyDiscount";
export * from "./models/ShopifyDiscountCode";
export * from "./models/ShopifyDispute";
export * from "./models/ShopifyDisputeEvidence";
export * from "./models/ShopifyDomain";
export * from "./models/ShopifyFulfillment";
export * from "./models/ShopifyFulfillmentLineItem";
export * from "./models/ShopifyFulfillmentOrder";
export * from "./models/ShopifyFulfillmentOrderLineItem";
export * from "./models/ShopifyFulfillmentService";
export * from "./models/ShopifyGdprRequest";
export * from "./models/ShopifyMarket";
export * from "./models/ShopifyMarketRegion";
export * from "./models/ShopifyMarketWebPresence";
export * from "./models/ShopifyOrder";
export * from "./models/ShopifyOrderAdjustment";
export * from "./models/ShopifyOrderLineItem";
export * from "./models/ShopifyPayout";
export * from "./models/ShopifyPriceRule";
export * from "./models/ShopifyProduct";
export * from "./models/ShopifyRefund";
export * from "./models/ShopifyRefundDuty";
export * from "./models/ShopifyRefundLineItem";
export * from "./models/ShopifyScriptTag";
export * from "./models/ShopifyShop";
export * from "./models/ShopifySync";
export * from "./models/Session";
export * from "./models/ShopifyShippingLine";
export * from "./models/ShopifyTenderTransaction";
export * from "./models/ShopifySmartCollect";
/**
 * An instance of the Gadget logger
 */
declare let logger: Logger;
/**
 * An instance of the Gadget API client that has admin permissions
 */
declare let api: Client;
export { api, logger };
