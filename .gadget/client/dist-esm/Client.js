var _a;
import { pipe, map } from "wonka";
import { GadgetConnection, AuthenticationMode, InternalModelManager } from "@gadgetinc/api-client-core";
import { UserManager } from "./models/User.js";
import { ShopifyAppManager } from "./models/ShopifyApp.js";
import { ShopifyAppInstallationManager } from "./models/ShopifyAppInstallation.js";
import { ShopifyBalanceTransactionManager } from "./models/ShopifyBalanceTransaction.js";
import { ShopifyBulkOperationManager } from "./models/ShopifyBulkOperation.js";
import { ShopifyCheckoutManager } from "./models/ShopifyCheckout.js";
import { ShopifyCheckoutLineItemManager } from "./models/ShopifyCheckoutLineItem.js";
import { ShopifyCollectManager } from "./models/ShopifyCollect.js";
import { ShopifyCollectionManager } from "./models/ShopifyCollection.js";
import { ShopifyCompanyManager } from "./models/ShopifyCompany.js";
import { ShopifyDiscountManager } from "./models/ShopifyDiscount.js";
import { ShopifyDiscountCodeManager } from "./models/ShopifyDiscountCode.js";
import { ShopifyDisputeManager } from "./models/ShopifyDispute.js";
import { ShopifyDisputeEvidenceManager } from "./models/ShopifyDisputeEvidence.js";
import { ShopifyDomainManager } from "./models/ShopifyDomain.js";
import { ShopifyFulfillmentManager } from "./models/ShopifyFulfillment.js";
import { ShopifyFulfillmentLineItemManager } from "./models/ShopifyFulfillmentLineItem.js";
import { ShopifyFulfillmentOrderManager } from "./models/ShopifyFulfillmentOrder.js";
import { ShopifyFulfillmentOrderLineItemManager } from "./models/ShopifyFulfillmentOrderLineItem.js";
import { ShopifyFulfillmentServiceManager } from "./models/ShopifyFulfillmentService.js";
import { ShopifyGdprRequestManager } from "./models/ShopifyGdprRequest.js";
import { ShopifyMarketManager } from "./models/ShopifyMarket.js";
import { ShopifyMarketRegionManager } from "./models/ShopifyMarketRegion.js";
import { ShopifyMarketWebPresenceManager } from "./models/ShopifyMarketWebPresence.js";
import { ShopifyOrderManager } from "./models/ShopifyOrder.js";
import { ShopifyOrderAdjustmentManager } from "./models/ShopifyOrderAdjustment.js";
import { ShopifyOrderLineItemManager } from "./models/ShopifyOrderLineItem.js";
import { ShopifyPayoutManager } from "./models/ShopifyPayout.js";
import { ShopifyPriceRuleManager } from "./models/ShopifyPriceRule.js";
import { ShopifyProductManager } from "./models/ShopifyProduct.js";
import { ShopifyRefundManager } from "./models/ShopifyRefund.js";
import { ShopifyRefundDutyManager } from "./models/ShopifyRefundDuty.js";
import { ShopifyRefundLineItemManager } from "./models/ShopifyRefundLineItem.js";
import { ShopifyScriptTagManager } from "./models/ShopifyScriptTag.js";
import { ShopifyShopManager } from "./models/ShopifyShop.js";
import { ShopifySyncManager } from "./models/ShopifySync.js";
import { SessionManager } from "./models/Session.js";
import { ShopifyShippingLineManager } from "./models/ShopifyShippingLine.js";
import { ShopifyTenderTransactionManager } from "./models/ShopifyTenderTransaction.js";
import { ShopifySmartCollectManager } from "./models/ShopifySmartCollect.js";
import { CurrentSessionManager } from "./models/CurrentSession.js";
import { globalActionRunner } from "@gadgetinc/api-client-core";
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
        return await globalActionRunner(
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
        return await globalActionRunner(
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
        return await globalActionRunner(
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
        return await globalActionRunner(
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
        return await globalActionRunner(
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
        return await globalActionRunner(
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
        return await globalActionRunner(
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
        return await globalActionRunner(
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
        return await globalActionRunner(
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
    this.environment = (options?.environment ?? getImplicitEnv() ?? fallbackEnv).toLocaleLowerCase();
    if (this.environment != fallbackEnv && this.environment != productionEnv) {
      console.warn("Invalid environment", this.environment, `defaulting to ${fallbackEnv}`);
      this.environment = fallbackEnv;
    }
    const apiRoot = this.environment == productionEnv ? this.productionApiRoot : this.developmentApiRoot;
    const exchanges = { ...options?.exchanges };
    if (this.environment !== productionEnv) {
      const devHarnessExchange = ({ forward }) => {
        return (operations$) => {
          const operationResult$ = forward(operations$);
          return pipe(
            operationResult$,
            map((result) => {
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
    this.connection = new GadgetConnection({
      endpoint: new URL("api/graphql", apiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: options?.authenticationMode ?? (typeof window == "undefined" ? { anonymous: true } : { browserSession: true }),
      ...options,
      exchanges,
      environment: this.environment
    });
    if (typeof window != "undefined" && this.connection.authenticationMode == AuthenticationMode.APIKey && !options?.authenticationMode?.dangerouslyAllowBrowserApiKey) {
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    }
    this.user = new UserManager(this.connection);
    this.shopifyApp = new ShopifyAppManager(this.connection);
    this.shopifyAppInstallation = new ShopifyAppInstallationManager(this.connection);
    this.shopifyBalanceTransaction = new ShopifyBalanceTransactionManager(this.connection);
    this.shopifyBulkOperation = new ShopifyBulkOperationManager(this.connection);
    this.shopifyCheckout = new ShopifyCheckoutManager(this.connection);
    this.shopifyCheckoutLineItem = new ShopifyCheckoutLineItemManager(this.connection);
    this.shopifyCollect = new ShopifyCollectManager(this.connection);
    this.shopifyCollection = new ShopifyCollectionManager(this.connection);
    this.shopifyCompany = new ShopifyCompanyManager(this.connection);
    this.shopifyDiscount = new ShopifyDiscountManager(this.connection);
    this.shopifyDiscountCode = new ShopifyDiscountCodeManager(this.connection);
    this.shopifyDispute = new ShopifyDisputeManager(this.connection);
    this.shopifyDisputeEvidence = new ShopifyDisputeEvidenceManager(this.connection);
    this.shopifyDomain = new ShopifyDomainManager(this.connection);
    this.shopifyFulfillment = new ShopifyFulfillmentManager(this.connection);
    this.shopifyFulfillmentLineItem = new ShopifyFulfillmentLineItemManager(this.connection);
    this.shopifyFulfillmentOrder = new ShopifyFulfillmentOrderManager(this.connection);
    this.shopifyFulfillmentOrderLineItem = new ShopifyFulfillmentOrderLineItemManager(this.connection);
    this.shopifyFulfillmentService = new ShopifyFulfillmentServiceManager(this.connection);
    this.shopifyGdprRequest = new ShopifyGdprRequestManager(this.connection);
    this.shopifyMarket = new ShopifyMarketManager(this.connection);
    this.shopifyMarketRegion = new ShopifyMarketRegionManager(this.connection);
    this.shopifyMarketWebPresence = new ShopifyMarketWebPresenceManager(this.connection);
    this.shopifyOrder = new ShopifyOrderManager(this.connection);
    this.shopifyOrderAdjustment = new ShopifyOrderAdjustmentManager(this.connection);
    this.shopifyOrderLineItem = new ShopifyOrderLineItemManager(this.connection);
    this.shopifyPayout = new ShopifyPayoutManager(this.connection);
    this.shopifyPriceRule = new ShopifyPriceRuleManager(this.connection);
    this.shopifyProduct = new ShopifyProductManager(this.connection);
    this.shopifyRefund = new ShopifyRefundManager(this.connection);
    this.shopifyRefundDuty = new ShopifyRefundDutyManager(this.connection);
    this.shopifyRefundLineItem = new ShopifyRefundLineItemManager(this.connection);
    this.shopifyScriptTag = new ShopifyScriptTagManager(this.connection);
    this.shopifyShop = new ShopifyShopManager(this.connection);
    this.shopifySync = new ShopifySyncManager(this.connection);
    this.session = new SessionManager(this.connection);
    this.shopifyShippingLine = new ShopifyShippingLineManager(this.connection);
    this.shopifyTenderTransaction = new ShopifyTenderTransactionManager(this.connection);
    this.shopifySmartCollect = new ShopifySmartCollectManager(this.connection);
    this.currentSession = new CurrentSessionManager(this.connection);
    this.internal = {
      user: new InternalModelManager("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyApp: new InternalModelManager("shopifyApp", this.connection, {
        pluralApiIdentifier: "shopifyApps",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyAppInstallation: new InternalModelManager("shopifyAppInstallation", this.connection, {
        pluralApiIdentifier: "shopifyAppInstallations",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyBalanceTransaction: new InternalModelManager("shopifyBalanceTransaction", this.connection, {
        pluralApiIdentifier: "shopifyBalanceTransactions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyBulkOperation: new InternalModelManager("shopifyBulkOperation", this.connection, {
        pluralApiIdentifier: "shopifyBulkOperations",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCheckout: new InternalModelManager("shopifyCheckout", this.connection, {
        pluralApiIdentifier: "shopifyCheckouts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCheckoutLineItem: new InternalModelManager("shopifyCheckoutLineItem", this.connection, {
        pluralApiIdentifier: "shopifyCheckoutLineItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCollect: new InternalModelManager("shopifyCollect", this.connection, {
        pluralApiIdentifier: "shopifyCollects",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCollection: new InternalModelManager("shopifyCollection", this.connection, {
        pluralApiIdentifier: "shopifyCollections",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyCompany: new InternalModelManager("shopifyCompany", this.connection, {
        pluralApiIdentifier: "shopifyCompanies",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDiscount: new InternalModelManager("shopifyDiscount", this.connection, {
        pluralApiIdentifier: "shopifyDiscounts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDiscountCode: new InternalModelManager("shopifyDiscountCode", this.connection, {
        pluralApiIdentifier: "shopifyDiscountCodes",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDispute: new InternalModelManager("shopifyDispute", this.connection, {
        pluralApiIdentifier: "shopifyDisputes",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDisputeEvidence: new InternalModelManager("shopifyDisputeEvidence", this.connection, {
        pluralApiIdentifier: "shopifyDisputeEvidences",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyDomain: new InternalModelManager("shopifyDomain", this.connection, {
        pluralApiIdentifier: "shopifyDomains",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillment: new InternalModelManager("shopifyFulfillment", this.connection, {
        pluralApiIdentifier: "shopifyFulfillments",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillmentLineItem: new InternalModelManager("shopifyFulfillmentLineItem", this.connection, {
        pluralApiIdentifier: "shopifyFulfillmentLineItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillmentOrder: new InternalModelManager("shopifyFulfillmentOrder", this.connection, {
        pluralApiIdentifier: "shopifyFulfillmentOrders",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillmentOrderLineItem: new InternalModelManager("shopifyFulfillmentOrderLineItem", this.connection, {
        pluralApiIdentifier: "shopifyFulfillmentOrderLineItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyFulfillmentService: new InternalModelManager("shopifyFulfillmentService", this.connection, {
        pluralApiIdentifier: "shopifyFulfillmentServices",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyGdprRequest: new InternalModelManager("shopifyGdprRequest", this.connection, {
        pluralApiIdentifier: "shopifyGdprRequests",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyMarket: new InternalModelManager("shopifyMarket", this.connection, {
        pluralApiIdentifier: "shopifyMarkets",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyMarketRegion: new InternalModelManager("shopifyMarketRegion", this.connection, {
        pluralApiIdentifier: "shopifyMarketRegions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyMarketWebPresence: new InternalModelManager("shopifyMarketWebPresence", this.connection, {
        pluralApiIdentifier: "shopifyMarketWebPresences",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyOrder: new InternalModelManager("shopifyOrder", this.connection, {
        pluralApiIdentifier: "shopifyOrders",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyOrderAdjustment: new InternalModelManager("shopifyOrderAdjustment", this.connection, {
        pluralApiIdentifier: "shopifyOrderAdjustments",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyOrderLineItem: new InternalModelManager("shopifyOrderLineItem", this.connection, {
        pluralApiIdentifier: "shopifyOrderLineItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyPayout: new InternalModelManager("shopifyPayout", this.connection, {
        pluralApiIdentifier: "shopifyPayouts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyPriceRule: new InternalModelManager("shopifyPriceRule", this.connection, {
        pluralApiIdentifier: "shopifyPriceRules",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyProduct: new InternalModelManager("shopifyProduct", this.connection, {
        pluralApiIdentifier: "shopifyProducts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyRefund: new InternalModelManager("shopifyRefund", this.connection, {
        pluralApiIdentifier: "shopifyRefunds",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyRefundDuty: new InternalModelManager("shopifyRefundDuty", this.connection, {
        pluralApiIdentifier: "shopifyRefundDuties",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyRefundLineItem: new InternalModelManager("shopifyRefundLineItem", this.connection, {
        pluralApiIdentifier: "shopifyRefundLineItems",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyScriptTag: new InternalModelManager("shopifyScriptTag", this.connection, {
        pluralApiIdentifier: "shopifyScriptTags",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyShop: new InternalModelManager("shopifyShop", this.connection, {
        pluralApiIdentifier: "shopifyShops",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifySync: new InternalModelManager("shopifySync", this.connection, {
        pluralApiIdentifier: "shopifySyncs",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      session: new InternalModelManager("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyShippingLine: new InternalModelManager("shopifyShippingLine", this.connection, {
        pluralApiIdentifier: "shopifyShippingLines",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifyTenderTransaction: new InternalModelManager("shopifyTenderTransaction", this.connection, {
        pluralApiIdentifier: "shopifyTenderTransactions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      shopifySmartCollect: new InternalModelManager("shopifySmartCollect", this.connection, {
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
export {
  Client
};
//# sourceMappingURL=Client.js.map
