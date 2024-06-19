"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Client_exports = {};
__export(Client_exports, {
  Client: () => Client
});
module.exports = __toCommonJS(Client_exports);
var import_wonka = require("wonka");
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_User = require("./models/User.js");
var import_ShopifyApp = require("./models/ShopifyApp.js");
var import_ShopifyAppInstallation = require("./models/ShopifyAppInstallation.js");
var import_ShopifyBalanceTransaction = require("./models/ShopifyBalanceTransaction.js");
var import_ShopifyBulkOperation = require("./models/ShopifyBulkOperation.js");
var import_ShopifyCheckout = require("./models/ShopifyCheckout.js");
var import_ShopifyCheckoutLineItem = require("./models/ShopifyCheckoutLineItem.js");
var import_ShopifyCollect = require("./models/ShopifyCollect.js");
var import_ShopifyCollection = require("./models/ShopifyCollection.js");
var import_ShopifyCompany = require("./models/ShopifyCompany.js");
var import_ShopifyDiscount = require("./models/ShopifyDiscount.js");
var import_ShopifyDiscountCode = require("./models/ShopifyDiscountCode.js");
var import_ShopifyDispute = require("./models/ShopifyDispute.js");
var import_ShopifyDisputeEvidence = require("./models/ShopifyDisputeEvidence.js");
var import_ShopifyDomain = require("./models/ShopifyDomain.js");
var import_ShopifyFulfillment = require("./models/ShopifyFulfillment.js");
var import_ShopifyFulfillmentLineItem = require("./models/ShopifyFulfillmentLineItem.js");
var import_ShopifyFulfillmentOrder = require("./models/ShopifyFulfillmentOrder.js");
var import_ShopifyFulfillmentOrderLineItem = require("./models/ShopifyFulfillmentOrderLineItem.js");
var import_ShopifyFulfillmentService = require("./models/ShopifyFulfillmentService.js");
var import_ShopifyGdprRequest = require("./models/ShopifyGdprRequest.js");
var import_ShopifyMarket = require("./models/ShopifyMarket.js");
var import_ShopifyMarketRegion = require("./models/ShopifyMarketRegion.js");
var import_ShopifyMarketWebPresence = require("./models/ShopifyMarketWebPresence.js");
var import_ShopifyOrder = require("./models/ShopifyOrder.js");
var import_ShopifyOrderAdjustment = require("./models/ShopifyOrderAdjustment.js");
var import_ShopifyOrderLineItem = require("./models/ShopifyOrderLineItem.js");
var import_ShopifyPayout = require("./models/ShopifyPayout.js");
var import_ShopifyPriceRule = require("./models/ShopifyPriceRule.js");
var import_ShopifyProduct = require("./models/ShopifyProduct.js");
var import_ShopifyRefund = require("./models/ShopifyRefund.js");
var import_ShopifyRefundDuty = require("./models/ShopifyRefundDuty.js");
var import_ShopifyRefundLineItem = require("./models/ShopifyRefundLineItem.js");
var import_ShopifyScriptTag = require("./models/ShopifyScriptTag.js");
var import_ShopifyShop = require("./models/ShopifyShop.js");
var import_ShopifySync = require("./models/ShopifySync.js");
var import_Session = require("./models/Session.js");
var import_ShopifyShippingLine = require("./models/ShopifyShippingLine.js");
var import_ShopifyTenderTransaction = require("./models/ShopifyTenderTransaction.js");
var import_ShopifySmartCollect = require("./models/ShopifySmartCollect.js");
var import_CurrentSession = require("./models/CurrentSession.js");
var import_api_client_core2 = require("@gadgetinc/api-client-core");
var _a;
const productionEnv = "production";
const fallbackEnv = "development";
const $modelRelationships = Symbol.for("gadget/modelRelationships");
const getImplicitEnv = () => {
  try {
    return process.env.NODE_ENV;
  } catch (error) {
    return void 0;
  }
};
class Client {
  constructor(options) {
    /**
     * The list of environments with a customized API root endpoint
     */
    this.apiRoots = { "development": "https://ynmadmin--development.gadget.app/", "production": "https://ynmadmin.gadget.app/" };
    /** @deprecated */
    this.developmentApiRoot = this.apiRoots[fallbackEnv];
    /** @deprecated */
    this.productionApiRoot = this.apiRoots[productionEnv];
    this.applicationId = "91517";
    this[_a] = { "user": {}, "shopifyApp": { "installations": { "type": "HasMany", "model": "shopifyAppInstallation" } }, "shopifyAppInstallation": { "app": { "type": "BelongsTo", "model": "shopifyApp" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyBalanceTransaction": { "sourceOrder": { "type": "BelongsTo", "model": "shopifyOrder" }, "payout": { "type": "BelongsTo", "model": "shopifyPayout" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyBulkOperation": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCheckout": { "lineItems": { "type": "HasMany", "model": "shopifyCheckoutLineItem" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" } }, "shopifyCheckoutLineItem": { "checkout": { "type": "BelongsTo", "model": "shopifyCheckout" }, "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCollect": { "customCollection": { "type": "BelongsTo", "model": "shopifyCollection" }, "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyCollection": { "products": { "type": "HasManyThrough", "model": "shopifyProduct" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" }, "smartProducts": { "type": "HasManyThrough", "model": "shopifyProduct" }, "shopifySmartCollects": { "type": "HasMany", "model": "shopifySmartCollect" } }, "shopifyCompany": { "orders": { "type": "HasMany", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyDiscount": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyDiscountCode": { "priceRule": { "type": "BelongsTo", "model": "shopifyPriceRule" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyDispute": { "disputeEvidence": { "type": "HasOne", "model": "shopifyDisputeEvidence" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyDisputeEvidence": { "dispute": { "type": "BelongsTo", "model": "shopifyDispute" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyDomain": { "marketWebPresences": { "type": "HasMany", "model": "shopifyMarketWebPresence" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyFulfillment": { "fulfillmentLineItems": { "type": "HasMany", "model": "shopifyFulfillmentLineItem" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyFulfillmentLineItem": { "fulfillment": { "type": "BelongsTo", "model": "shopifyFulfillment" }, "orderLineItem": { "type": "BelongsTo", "model": "shopifyOrderLineItem" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyFulfillmentOrder": { "fulfillmentOrderLineItems": { "type": "HasMany", "model": "shopifyFulfillmentOrderLineItem" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyFulfillmentOrderLineItem": { "fulfillmentOrder": { "type": "BelongsTo", "model": "shopifyFulfillmentOrder" }, "orderLineItem": { "type": "BelongsTo", "model": "shopifyOrderLineItem" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyFulfillmentService": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyGdprRequest": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyMarket": { "regions": { "type": "HasMany", "model": "shopifyMarketRegion" }, "marketWebPresence": { "type": "BelongsTo", "model": "shopifyMarketWebPresence" }, "marketWebPresences": { "type": "HasMany", "model": "shopifyMarketWebPresence" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyMarketRegion": { "market": { "type": "BelongsTo", "model": "shopifyMarket" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyMarketWebPresence": { "primaryWebPresenceForMarket": { "type": "HasOne", "model": "shopifyMarket" }, "domain": { "type": "BelongsTo", "model": "shopifyDomain" }, "market": { "type": "BelongsTo", "model": "shopifyMarket" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyOrder": { "refunds": { "type": "HasMany", "model": "shopifyRefund" }, "tenderTransactions": { "type": "HasMany", "model": "shopifyTenderTransaction" }, "checkouts": { "type": "HasMany", "model": "shopifyCheckout" }, "fulfillmentOrders": { "type": "HasMany", "model": "shopifyFulfillmentOrder" }, "adjustments": { "type": "HasMany", "model": "shopifyOrderAdjustment" }, "balanceTransactions": { "type": "HasMany", "model": "shopifyBalanceTransaction" }, "fulfillments": { "type": "HasMany", "model": "shopifyFulfillment" }, "lineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "disputes": { "type": "HasMany", "model": "shopifyDispute" }, "shippingLines": { "type": "HasMany", "model": "shopifyShippingLine" }, "purchasingCompany": { "type": "BelongsTo", "model": "shopifyCompany" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyOrderAdjustment": { "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "refund": { "type": "BelongsTo", "model": "shopifyRefund" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyOrderLineItem": { "fulfillmentOrderLineItems": { "type": "HasMany", "model": "shopifyFulfillmentOrderLineItem" }, "refunds": { "type": "HasMany", "model": "shopifyRefundLineItem" }, "fulfillmentLineItems": { "type": "HasMany", "model": "shopifyFulfillmentLineItem" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyPayout": { "balanceTransactions": { "type": "HasMany", "model": "shopifyBalanceTransaction" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyPriceRule": { "discountCodes": { "type": "HasMany", "model": "shopifyDiscountCode" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyProduct": { "orderLineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "checkoutLineItems": { "type": "HasMany", "model": "shopifyCheckoutLineItem" }, "smartCollections": { "type": "HasManyThrough", "model": "shopifyCollection" }, "customCollections": { "type": "HasManyThrough", "model": "shopifyCollection" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" }, "shopifySmartCollects": { "type": "HasMany", "model": "shopifySmartCollect" } }, "shopifyRefund": { "duties": { "type": "HasMany", "model": "shopifyRefundDuty" }, "orderAdjustments": { "type": "HasMany", "model": "shopifyOrderAdjustment" }, "refundLineItems": { "type": "HasMany", "model": "shopifyRefundLineItem" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyRefundDuty": { "refund": { "type": "BelongsTo", "model": "shopifyRefund" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyRefundLineItem": { "orderLineItem": { "type": "BelongsTo", "model": "shopifyOrderLineItem" }, "refund": { "type": "BelongsTo", "model": "shopifyRefund" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyScriptTag": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyShop": { "collections": { "type": "HasMany", "model": "shopifyCollection" }, "marketRegions": { "type": "HasMany", "model": "shopifyMarketRegion" }, "orderAdjustments": { "type": "HasMany", "model": "shopifyOrderAdjustment" }, "balanceTransactions": { "type": "HasMany", "model": "shopifyBalanceTransaction" }, "checkoutLineItems": { "type": "HasMany", "model": "shopifyCheckoutLineItem" }, "markets": { "type": "HasMany", "model": "shopifyMarket" }, "gdprRequests": { "type": "HasMany", "model": "shopifyGdprRequest" }, "orderLineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "orders": { "type": "HasMany", "model": "shopifyOrder" }, "disputes": { "type": "HasMany", "model": "shopifyDispute" }, "refunds": { "type": "HasMany", "model": "shopifyRefund" }, "refundLineItems": { "type": "HasMany", "model": "shopifyRefundLineItem" }, "company": { "type": "HasMany", "model": "shopifyCompany" }, "collects": { "type": "HasMany", "model": "shopifyCollect" }, "tenderTransactions": { "type": "HasMany", "model": "shopifyTenderTransaction" }, "syncs": { "type": "HasMany", "model": "shopifySync" }, "priceRules": { "type": "HasMany", "model": "shopifyPriceRule" }, "checkouts": { "type": "HasMany", "model": "shopifyCheckout" }, "fulfillments": { "type": "HasMany", "model": "shopifyFulfillment" }, "marketWebPresences": { "type": "HasMany", "model": "shopifyMarketWebPresence" }, "fulfillmentLineItems": { "type": "HasMany", "model": "shopifyFulfillmentLineItem" }, "fulfillmentOrderLineItems": { "type": "HasMany", "model": "shopifyFulfillmentOrderLineItem" }, "discountCodes": { "type": "HasMany", "model": "shopifyDiscountCode" }, "appInstallations": { "type": "HasMany", "model": "shopifyAppInstallation" }, "shippingLines": { "type": "HasMany", "model": "shopifyShippingLine" }, "refundDuties": { "type": "HasMany", "model": "shopifyRefundDuty" }, "fulfillmentOrders": { "type": "HasMany", "model": "shopifyFulfillmentOrder" }, "discounts": { "type": "HasMany", "model": "shopifyDiscount" }, "fulfillmentServices": { "type": "HasMany", "model": "shopifyFulfillmentService" }, "scriptTags": { "type": "HasMany", "model": "shopifyScriptTag" }, "payouts": { "type": "HasMany", "model": "shopifyPayout" }, "bulkOperations": { "type": "HasMany", "model": "shopifyBulkOperation" }, "domains": { "type": "HasMany", "model": "shopifyDomain" }, "disputeEvidences": { "type": "HasMany", "model": "shopifyDisputeEvidence" }, "products": { "type": "HasMany", "model": "shopifyProduct" }, "shopifySmartCollects": { "type": "HasMany", "model": "shopifySmartCollect" } }, "shopifySync": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "session": { "shop": { "type": "BelongsTo", "model": "shopifyShop" }, "user": { "type": "BelongsTo", "model": "user" } }, "shopifyShippingLine": { "requestedFulfillmentService": { "type": "BelongsTo", "model": "shopifyFulfillmentService" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyTenderTransaction": { "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifySmartCollect": { "collection": { "type": "BelongsTo", "model": "shopifyCollection" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" }, "product": { "type": "BelongsTo", "model": "shopifyProduct" } } };
    /** Executes the scheduledShopifySync global action. */
    this.scheduledShopifySync = Object.assign(
      async (variables) => {
        return await (0, import_api_client_core2.globalActionRunner)(
          this.connection,
          "scheduledShopifySync",
          {
            "apiKeys": {
              value: variables.apiKeys,
              required: false,
              type: "[String!]"
            },
            "syncSince": {
              value: variables.syncSince,
              required: false,
              type: "DateTime"
            },
            "models": {
              value: variables.models,
              required: false,
              type: "[String!]"
            },
            "force": {
              value: variables.force,
              required: false,
              type: "Boolean"
            },
            "startReason": {
              value: variables.startReason,
              required: false,
              type: "String"
            }
          },
          null
        );
      },
      {
        type: "globalAction",
        operationName: "scheduledShopifySync",
        namespace: null,
        variables: {
          "apiKeys": {
            required: false,
            type: "[String!]"
          },
          "syncSince": {
            required: false,
            type: "DateTime"
          },
          "models": {
            required: false,
            type: "[String!]"
          },
          "force": {
            required: false,
            type: "Boolean"
          },
          "startReason": {
            required: false,
            type: "String"
          }
        }
      }
    );
    /** Executes the smartCollect global action. */
    this.smartCollect = Object.assign(
      async () => {
        return await (0, import_api_client_core2.globalActionRunner)(
          this.connection,
          "smartCollect",
          {},
          null
        );
      },
      {
        type: "globalAction",
        operationName: "smartCollect",
        namespace: null,
        variables: {}
      }
    );
    /** Executes the setTotalZero global action. */
    this.setTotalZero = Object.assign(
      async () => {
        return await (0, import_api_client_core2.globalActionRunner)(
          this.connection,
          "setTotalZero",
          {},
          null
        );
      },
      {
        type: "globalAction",
        operationName: "setTotalZero",
        namespace: null,
        variables: {}
      }
    );
    /** Executes the test2 global action. */
    this.test2 = Object.assign(
      async (variables) => {
        return await (0, import_api_client_core2.globalActionRunner)(
          this.connection,
          "test2",
          {
            "tag": {
              value: variables.tag,
              required: false,
              type: "String"
            }
          },
          null
        );
      },
      {
        type: "globalAction",
        operationName: "test2",
        namespace: null,
        variables: {
          "tag": {
            required: false,
            type: "String"
          }
        }
      }
    );
    /** Executes the test3 global action. */
    this.test3 = Object.assign(
      async () => {
        return await (0, import_api_client_core2.globalActionRunner)(
          this.connection,
          "test3",
          {},
          null
        );
      },
      {
        type: "globalAction",
        operationName: "test3",
        namespace: null,
        variables: {}
      }
    );
    /** Executes the fetchEmails global action. */
    this.fetchEmails = Object.assign(
      async () => {
        return await (0, import_api_client_core2.globalActionRunner)(
          this.connection,
          "fetchEmails",
          {},
          null
        );
      },
      {
        type: "globalAction",
        operationName: "fetchEmails",
        namespace: null,
        variables: {}
      }
    );
    /** Executes the smartCollecter global action. */
    this.smartCollecter = Object.assign(
      async () => {
        return await (0, import_api_client_core2.globalActionRunner)(
          this.connection,
          "smartCollecter",
          {},
          null
        );
      },
      {
        type: "globalAction",
        operationName: "smartCollecter",
        namespace: null,
        variables: {}
      }
    );
    /** Executes the fetchUsers global action. */
    this.fetchUsers = Object.assign(
      async () => {
        return await (0, import_api_client_core2.globalActionRunner)(
          this.connection,
          "fetchUsers",
          {},
          null
        );
      },
      {
        type: "globalAction",
        operationName: "fetchUsers",
        namespace: null,
        variables: {}
      }
    );
    /** Executes the test global action. */
    this.test = Object.assign(
      async (variables) => {
        return await (0, import_api_client_core2.globalActionRunner)(
          this.connection,
          "test",
          {
            "key": {
              value: variables.key,
              required: false,
              type: "String"
            }
          },
          null
        );
      },
      {
        type: "globalAction",
        operationName: "test",
        namespace: null,
        variables: {
          "key": {
            required: false,
            type: "String"
          }
        }
      }
    );
    /** Start a transaction against the Gadget backend which will atomically commit (or rollback). */
    this.transaction = async (callback) => {
      return await this.connection.transaction(callback);
    };
    /**
    * Get a new direct upload token for file uploads to directly to cloud storage.
    * See https://docs.gadget.dev/guides/storing-files#direct-uploads-using-tokens for more information
    * @return { url: string, token: string } A `url` to upload one file to, and a token for that file to pass back to Gadget as an action input.
    */
    this.getDirectUploadToken = async () => {
      const result = await this.query(`query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }`, { nonce: Math.random().toString(36).slice(2, 7) }, {
        requestPolicy: "network-only"
      });
      return result.gadgetMeta.directUploadToken;
    };
    var _a2;
    this.environment = ((options == null ? void 0 : options.environment) ?? getImplicitEnv() ?? fallbackEnv).toLocaleLowerCase();
    if (this.environment != fallbackEnv && this.environment != productionEnv) {
      console.warn("Invalid environment", this.environment, `defaulting to ${fallbackEnv}`);
      this.environment = fallbackEnv;
    }
    const apiRoot = this.environment == productionEnv ? this.productionApiRoot : this.developmentApiRoot;
    const exchanges = { ...options == null ? void 0 : options.exchanges };
    if (this.environment !== productionEnv) {
      const devHarnessExchange = ({ forward }) => {
        return (operations$) => {
          const operationResult$ = forward(operations$);
          return (0, import_wonka.pipe)(
            operationResult$,
            (0, import_wonka.map)((result) => {
              try {
                if (typeof window !== "undefined" && typeof CustomEvent === "function") {
                  const event = new CustomEvent("gadget:devharness:graphqlresult", { detail: result });
                  window.dispatchEvent(event);
                }
              } catch (error) {
                console.warn("[gadget] error dispatching gadget dev harness event", error);
              }
              return result;
            })
          );
        };
      };
      exchanges.beforeAll = [
        devHarnessExchange,
        ...exchanges.beforeAll ?? []
      ];
    }
    this.connection = new import_api_client_core.GadgetConnection({
      endpoint: new URL("api/graphql", apiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (options == null ? void 0 : options.authenticationMode) ?? (typeof window == "undefined" ? { anonymous: true } : { browserSession: true }),
      ...options,
      exchanges,
      environment: this.environment
    });
    if (typeof window != "undefined" && this.connection.authenticationMode == import_api_client_core.AuthenticationMode.APIKey && !((_a2 = options == null ? void 0 : options.authenticationMode) == null ? void 0 : _a2.dangerouslyAllowBrowserApiKey)) {
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    }
    this.user = new import_User.UserManager(this.connection);
    this.shopifyApp = new import_ShopifyApp.ShopifyAppManager(this.connection);
    this.shopifyAppInstallation = new import_ShopifyAppInstallation.ShopifyAppInstallationManager(this.connection);
    this.shopifyBalanceTransaction = new import_ShopifyBalanceTransaction.ShopifyBalanceTransactionManager(this.connection);
    this.shopifyBulkOperation = new import_ShopifyBulkOperation.ShopifyBulkOperationManager(this.connection);
    this.shopifyCheckout = new import_ShopifyCheckout.ShopifyCheckoutManager(this.connection);
    this.shopifyCheckoutLineItem = new import_ShopifyCheckoutLineItem.ShopifyCheckoutLineItemManager(this.connection);
    this.shopifyCollect = new import_ShopifyCollect.ShopifyCollectManager(this.connection);
    this.shopifyCollection = new import_ShopifyCollection.ShopifyCollectionManager(this.connection);
    this.shopifyCompany = new import_ShopifyCompany.ShopifyCompanyManager(this.connection);
    this.shopifyDiscount = new import_ShopifyDiscount.ShopifyDiscountManager(this.connection);
    this.shopifyDiscountCode = new import_ShopifyDiscountCode.ShopifyDiscountCodeManager(this.connection);
    this.shopifyDispute = new import_ShopifyDispute.ShopifyDisputeManager(this.connection);
    this.shopifyDisputeEvidence = new import_ShopifyDisputeEvidence.ShopifyDisputeEvidenceManager(this.connection);
    this.shopifyDomain = new import_ShopifyDomain.ShopifyDomainManager(this.connection);
    this.shopifyFulfillment = new import_ShopifyFulfillment.ShopifyFulfillmentManager(this.connection);
    this.shopifyFulfillmentLineItem = new import_ShopifyFulfillmentLineItem.ShopifyFulfillmentLineItemManager(this.connection);
    this.shopifyFulfillmentOrder = new import_ShopifyFulfillmentOrder.ShopifyFulfillmentOrderManager(this.connection);
    this.shopifyFulfillmentOrderLineItem = new import_ShopifyFulfillmentOrderLineItem.ShopifyFulfillmentOrderLineItemManager(this.connection);
    this.shopifyFulfillmentService = new import_ShopifyFulfillmentService.ShopifyFulfillmentServiceManager(this.connection);
    this.shopifyGdprRequest = new import_ShopifyGdprRequest.ShopifyGdprRequestManager(this.connection);
    this.shopifyMarket = new import_ShopifyMarket.ShopifyMarketManager(this.connection);
    this.shopifyMarketRegion = new import_ShopifyMarketRegion.ShopifyMarketRegionManager(this.connection);
    this.shopifyMarketWebPresence = new import_ShopifyMarketWebPresence.ShopifyMarketWebPresenceManager(this.connection);
    this.shopifyOrder = new import_ShopifyOrder.ShopifyOrderManager(this.connection);
    this.shopifyOrderAdjustment = new import_ShopifyOrderAdjustment.ShopifyOrderAdjustmentManager(this.connection);
    this.shopifyOrderLineItem = new import_ShopifyOrderLineItem.ShopifyOrderLineItemManager(this.connection);
    this.shopifyPayout = new import_ShopifyPayout.ShopifyPayoutManager(this.connection);
    this.shopifyPriceRule = new import_ShopifyPriceRule.ShopifyPriceRuleManager(this.connection);
    this.shopifyProduct = new import_ShopifyProduct.ShopifyProductManager(this.connection);
    this.shopifyRefund = new import_ShopifyRefund.ShopifyRefundManager(this.connection);
    this.shopifyRefundDuty = new import_ShopifyRefundDuty.ShopifyRefundDutyManager(this.connection);
    this.shopifyRefundLineItem = new import_ShopifyRefundLineItem.ShopifyRefundLineItemManager(this.connection);
    this.shopifyScriptTag = new import_ShopifyScriptTag.ShopifyScriptTagManager(this.connection);
    this.shopifyShop = new import_ShopifyShop.ShopifyShopManager(this.connection);
    this.shopifySync = new import_ShopifySync.ShopifySyncManager(this.connection);
    this.session = new import_Session.SessionManager(this.connection);
    this.shopifyShippingLine = new import_ShopifyShippingLine.ShopifyShippingLineManager(this.connection);
    this.shopifyTenderTransaction = new import_ShopifyTenderTransaction.ShopifyTenderTransactionManager(this.connection);
    this.shopifySmartCollect = new import_ShopifySmartCollect.ShopifySmartCollectManager(this.connection);
    this.currentSession = new import_CurrentSession.CurrentSessionManager(this.connection);
    this.internal = {
      user: new import_api_client_core.InternalModelManager("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyApp: new import_api_client_core.InternalModelManager("shopifyApp", this.connection, {
        pluralApiIdentifier: "shopifyApps",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyAppInstallation: new import_api_client_core.InternalModelManager("shopifyAppInstallation", this.connection, {
        pluralApiIdentifier: "shopifyAppInstallations",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyBalanceTransaction: new import_api_client_core.InternalModelManager("shopifyBalanceTransaction", this.connection, {
        pluralApiIdentifier: "shopifyBalanceTransactions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyBulkOperation: new import_api_client_core.InternalModelManager("shopifyBulkOperation", this.connection, {
        pluralApiIdentifier: "shopifyBulkOperations",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCheckout: new import_api_client_core.InternalModelManager("shopifyCheckout", this.connection, {
        pluralApiIdentifier: "shopifyCheckouts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCheckoutLineItem: new import_api_client_core.InternalModelManager("shopifyCheckoutLineItem", this.connection, {
        pluralApiIdentifier: "shopifyCheckoutLineItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCollect: new import_api_client_core.InternalModelManager("shopifyCollect", this.connection, {
        pluralApiIdentifier: "shopifyCollects",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCollection: new import_api_client_core.InternalModelManager("shopifyCollection", this.connection, {
        pluralApiIdentifier: "shopifyCollections",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCompany: new import_api_client_core.InternalModelManager("shopifyCompany", this.connection, {
        pluralApiIdentifier: "shopifyCompanies",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDiscount: new import_api_client_core.InternalModelManager("shopifyDiscount", this.connection, {
        pluralApiIdentifier: "shopifyDiscounts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDiscountCode: new import_api_client_core.InternalModelManager("shopifyDiscountCode", this.connection, {
        pluralApiIdentifier: "shopifyDiscountCodes",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDispute: new import_api_client_core.InternalModelManager("shopifyDispute", this.connection, {
        pluralApiIdentifier: "shopifyDisputes",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDisputeEvidence: new import_api_client_core.InternalModelManager("shopifyDisputeEvidence", this.connection, {
        pluralApiIdentifier: "shopifyDisputeEvidences",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDomain: new import_api_client_core.InternalModelManager("shopifyDomain", this.connection, {
        pluralApiIdentifier: "shopifyDomains",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillment: new import_api_client_core.InternalModelManager("shopifyFulfillment", this.connection, {
        pluralApiIdentifier: "shopifyFulfillments",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillmentLineItem: new import_api_client_core.InternalModelManager("shopifyFulfillmentLineItem", this.connection, {
        pluralApiIdentifier: "shopifyFulfillmentLineItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillmentOrder: new import_api_client_core.InternalModelManager("shopifyFulfillmentOrder", this.connection, {
        pluralApiIdentifier: "shopifyFulfillmentOrders",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillmentOrderLineItem: new import_api_client_core.InternalModelManager("shopifyFulfillmentOrderLineItem", this.connection, {
        pluralApiIdentifier: "shopifyFulfillmentOrderLineItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillmentService: new import_api_client_core.InternalModelManager("shopifyFulfillmentService", this.connection, {
        pluralApiIdentifier: "shopifyFulfillmentServices",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyGdprRequest: new import_api_client_core.InternalModelManager("shopifyGdprRequest", this.connection, {
        pluralApiIdentifier: "shopifyGdprRequests",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyMarket: new import_api_client_core.InternalModelManager("shopifyMarket", this.connection, {
        pluralApiIdentifier: "shopifyMarkets",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyMarketRegion: new import_api_client_core.InternalModelManager("shopifyMarketRegion", this.connection, {
        pluralApiIdentifier: "shopifyMarketRegions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyMarketWebPresence: new import_api_client_core.InternalModelManager("shopifyMarketWebPresence", this.connection, {
        pluralApiIdentifier: "shopifyMarketWebPresences",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyOrder: new import_api_client_core.InternalModelManager("shopifyOrder", this.connection, {
        pluralApiIdentifier: "shopifyOrders",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyOrderAdjustment: new import_api_client_core.InternalModelManager("shopifyOrderAdjustment", this.connection, {
        pluralApiIdentifier: "shopifyOrderAdjustments",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyOrderLineItem: new import_api_client_core.InternalModelManager("shopifyOrderLineItem", this.connection, {
        pluralApiIdentifier: "shopifyOrderLineItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyPayout: new import_api_client_core.InternalModelManager("shopifyPayout", this.connection, {
        pluralApiIdentifier: "shopifyPayouts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyPriceRule: new import_api_client_core.InternalModelManager("shopifyPriceRule", this.connection, {
        pluralApiIdentifier: "shopifyPriceRules",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyProduct: new import_api_client_core.InternalModelManager("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyRefund: new import_api_client_core.InternalModelManager("shopifyRefund", this.connection, {
        pluralApiIdentifier: "shopifyRefunds",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyRefundDuty: new import_api_client_core.InternalModelManager("shopifyRefundDuty", this.connection, {
        pluralApiIdentifier: "shopifyRefundDuties",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyRefundLineItem: new import_api_client_core.InternalModelManager("shopifyRefundLineItem", this.connection, {
        pluralApiIdentifier: "shopifyRefundLineItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyScriptTag: new import_api_client_core.InternalModelManager("shopifyScriptTag", this.connection, {
        pluralApiIdentifier: "shopifyScriptTags",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyShop: new import_api_client_core.InternalModelManager("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifySync: new import_api_client_core.InternalModelManager("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      session: new import_api_client_core.InternalModelManager("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyShippingLine: new import_api_client_core.InternalModelManager("shopifyShippingLine", this.connection, {
        pluralApiIdentifier: "shopifyShippingLines",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyTenderTransaction: new import_api_client_core.InternalModelManager("shopifyTenderTransaction", this.connection, {
        pluralApiIdentifier: "shopifyTenderTransactions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifySmartCollect: new import_api_client_core.InternalModelManager("shopifySmartCollect", this.connection, {
        pluralApiIdentifier: "shopifySmartCollects",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      })
    };
  }
  /** Run an arbitrary GraphQL query. */
  async query(graphQL, variables, options) {
    const { data, error } = await this.connection.currentClient.query(graphQL, variables, options).toPromise();
    if (error)
      throw error;
    return data;
  }
  /** Run an arbitrary GraphQL mutation. */
  async mutate(graphQL, variables, options) {
    const { data, error } = await this.connection.currentClient.mutation(graphQL, variables, options).toPromise();
    if (error)
      throw error;
    return data;
  }
  /**
   * `fetch` function that works the same as the built-in `fetch` function, but automatically passes authentication information for this API client.
   *
   * @example
   * await api.fetch("https://myapp--development.gadget.app/foo/bar");
   *
   * @example
   * // fetch a relative URL from the endpoint this API client is configured to fetch from
   * await api.fetch("/foo/bar");
   **/
  async fetch(input, init = {}) {
    return await this.connection.fetch(input, init);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
}
_a = $modelRelationships;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Client
});
//# sourceMappingURL=Client.js.map
