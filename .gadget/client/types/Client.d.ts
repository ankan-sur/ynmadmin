import type { OperationContext } from "@urql/core";
import { GadgetConnection, GadgetTransaction, InternalModelManager } from "@gadgetinc/api-client-core";
import type { ClientOptions as ApiClientOptions, AnyClient } from '@gadgetinc/api-client-core';
import type { DocumentNode } from 'graphql';
import type { Scalars } from "./types";
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
type InternalModelManagers = {
    user: InternalModelManager;
    shopifyApp: InternalModelManager;
    shopifyAppInstallation: InternalModelManager;
    shopifyBalanceTransaction: InternalModelManager;
    shopifyBulkOperation: InternalModelManager;
    shopifyCheckout: InternalModelManager;
    shopifyCheckoutLineItem: InternalModelManager;
    shopifyCollect: InternalModelManager;
    shopifyCollection: InternalModelManager;
    shopifyCompany: InternalModelManager;
    shopifyDiscount: InternalModelManager;
    shopifyDiscountCode: InternalModelManager;
    shopifyDispute: InternalModelManager;
    shopifyDisputeEvidence: InternalModelManager;
    shopifyDomain: InternalModelManager;
    shopifyFulfillment: InternalModelManager;
    shopifyFulfillmentLineItem: InternalModelManager;
    shopifyFulfillmentOrder: InternalModelManager;
    shopifyFulfillmentOrderLineItem: InternalModelManager;
    shopifyFulfillmentService: InternalModelManager;
    shopifyGdprRequest: InternalModelManager;
    shopifyMarket: InternalModelManager;
    shopifyMarketRegion: InternalModelManager;
    shopifyMarketWebPresence: InternalModelManager;
    shopifyOrder: InternalModelManager;
    shopifyOrderAdjustment: InternalModelManager;
    shopifyOrderLineItem: InternalModelManager;
    shopifyPayout: InternalModelManager;
    shopifyPriceRule: InternalModelManager;
    shopifyProduct: InternalModelManager;
    shopifyRefund: InternalModelManager;
    shopifyRefundDuty: InternalModelManager;
    shopifyRefundLineItem: InternalModelManager;
    shopifyScriptTag: InternalModelManager;
    shopifyShop: InternalModelManager;
    shopifySync: InternalModelManager;
    session: InternalModelManager;
    shopifyShippingLine: InternalModelManager;
    shopifyTenderTransaction: InternalModelManager;
    shopifySmartCollect: InternalModelManager;
};
type ClientOptions = Omit<ApiClientOptions, "environment"> & {
    environment?: string;
};
declare const $modelRelationships: unique symbol;
/**
 * Root object used for interacting with the "ynmadmin" API. `Client` has `query` and `mutation` functions for executing raw GraphQL queries and mutations, as well as `ModelManager` objects for manipulating models with a JavaScript API. Client also wraps a `connection`, which implements the transport layer if you need access to that.
 * */
export declare class Client implements AnyClient {
    connection: GadgetConnection;
    user: UserManager;
    shopifyApp: ShopifyAppManager;
    shopifyAppInstallation: ShopifyAppInstallationManager;
    shopifyBalanceTransaction: ShopifyBalanceTransactionManager;
    shopifyBulkOperation: ShopifyBulkOperationManager;
    shopifyCheckout: ShopifyCheckoutManager;
    shopifyCheckoutLineItem: ShopifyCheckoutLineItemManager;
    shopifyCollect: ShopifyCollectManager;
    shopifyCollection: ShopifyCollectionManager;
    shopifyCompany: ShopifyCompanyManager;
    shopifyDiscount: ShopifyDiscountManager;
    shopifyDiscountCode: ShopifyDiscountCodeManager;
    shopifyDispute: ShopifyDisputeManager;
    shopifyDisputeEvidence: ShopifyDisputeEvidenceManager;
    shopifyDomain: ShopifyDomainManager;
    shopifyFulfillment: ShopifyFulfillmentManager;
    shopifyFulfillmentLineItem: ShopifyFulfillmentLineItemManager;
    shopifyFulfillmentOrder: ShopifyFulfillmentOrderManager;
    shopifyFulfillmentOrderLineItem: ShopifyFulfillmentOrderLineItemManager;
    shopifyFulfillmentService: ShopifyFulfillmentServiceManager;
    shopifyGdprRequest: ShopifyGdprRequestManager;
    shopifyMarket: ShopifyMarketManager;
    shopifyMarketRegion: ShopifyMarketRegionManager;
    shopifyMarketWebPresence: ShopifyMarketWebPresenceManager;
    shopifyOrder: ShopifyOrderManager;
    shopifyOrderAdjustment: ShopifyOrderAdjustmentManager;
    shopifyOrderLineItem: ShopifyOrderLineItemManager;
    shopifyPayout: ShopifyPayoutManager;
    shopifyPriceRule: ShopifyPriceRuleManager;
    shopifyProduct: ShopifyProductManager;
    shopifyRefund: ShopifyRefundManager;
    shopifyRefundDuty: ShopifyRefundDutyManager;
    shopifyRefundLineItem: ShopifyRefundLineItemManager;
    shopifyScriptTag: ShopifyScriptTagManager;
    shopifyShop: ShopifyShopManager;
    shopifySync: ShopifySyncManager;
    session: SessionManager;
    shopifyShippingLine: ShopifyShippingLineManager;
    shopifyTenderTransaction: ShopifyTenderTransactionManager;
    shopifySmartCollect: ShopifySmartCollectManager;
    currentSession: CurrentSessionManager;
    /**
    * Namespaced object for accessing models via the Gadget internal APIs, which provide lower level and higher privileged operations directly against the database. Useful for maintenance operations like migrations or correcting broken data, and for implementing the high level actions.
    *
    * Returns an object of model API identifiers to `InternalModelManager` objects.
    *
    * Example:
    * `api.internal.user.findOne(...)`
    */
    internal: InternalModelManagers;
    /**
     * The list of environments with a customized API root endpoint
     */
    apiRoots: Record<string, string>;
    /** @deprecated */
    developmentApiRoot: string;
    /** @deprecated */
    productionApiRoot: string;
    applicationId: string;
    [$modelRelationships]: {
        user: {};
        shopifyApp: {
            installations: {
                type: string;
                model: string;
            };
        };
        shopifyAppInstallation: {
            app: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyBalanceTransaction: {
            sourceOrder: {
                type: string;
                model: string;
            };
            payout: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyBulkOperation: {
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyCheckout: {
            lineItems: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
            order: {
                type: string;
                model: string;
            };
        };
        shopifyCheckoutLineItem: {
            checkout: {
                type: string;
                model: string;
            };
            product: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyCollect: {
            customCollection: {
                type: string;
                model: string;
            };
            product: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyCollection: {
            products: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
            smartProducts: {
                type: string;
                model: string;
            };
            shopifySmartCollects: {
                type: string;
                model: string;
            };
        };
        shopifyCompany: {
            orders: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyDiscount: {
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyDiscountCode: {
            priceRule: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyDispute: {
            disputeEvidence: {
                type: string;
                model: string;
            };
            order: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyDisputeEvidence: {
            dispute: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyDomain: {
            marketWebPresences: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyFulfillment: {
            fulfillmentLineItems: {
                type: string;
                model: string;
            };
            order: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyFulfillmentLineItem: {
            fulfillment: {
                type: string;
                model: string;
            };
            orderLineItem: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyFulfillmentOrder: {
            fulfillmentOrderLineItems: {
                type: string;
                model: string;
            };
            order: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyFulfillmentOrderLineItem: {
            fulfillmentOrder: {
                type: string;
                model: string;
            };
            orderLineItem: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyFulfillmentService: {
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyGdprRequest: {
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyMarket: {
            regions: {
                type: string;
                model: string;
            };
            marketWebPresence: {
                type: string;
                model: string;
            };
            marketWebPresences: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyMarketRegion: {
            market: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyMarketWebPresence: {
            primaryWebPresenceForMarket: {
                type: string;
                model: string;
            };
            domain: {
                type: string;
                model: string;
            };
            market: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyOrder: {
            refunds: {
                type: string;
                model: string;
            };
            tenderTransactions: {
                type: string;
                model: string;
            };
            checkouts: {
                type: string;
                model: string;
            };
            fulfillmentOrders: {
                type: string;
                model: string;
            };
            adjustments: {
                type: string;
                model: string;
            };
            balanceTransactions: {
                type: string;
                model: string;
            };
            fulfillments: {
                type: string;
                model: string;
            };
            lineItems: {
                type: string;
                model: string;
            };
            disputes: {
                type: string;
                model: string;
            };
            shippingLines: {
                type: string;
                model: string;
            };
            purchasingCompany: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyOrderAdjustment: {
            order: {
                type: string;
                model: string;
            };
            refund: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyOrderLineItem: {
            fulfillmentOrderLineItems: {
                type: string;
                model: string;
            };
            refunds: {
                type: string;
                model: string;
            };
            fulfillmentLineItems: {
                type: string;
                model: string;
            };
            order: {
                type: string;
                model: string;
            };
            product: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyPayout: {
            balanceTransactions: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyPriceRule: {
            discountCodes: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyProduct: {
            orderLineItems: {
                type: string;
                model: string;
            };
            checkoutLineItems: {
                type: string;
                model: string;
            };
            smartCollections: {
                type: string;
                model: string;
            };
            customCollections: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
            shopifySmartCollects: {
                type: string;
                model: string;
            };
        };
        shopifyRefund: {
            duties: {
                type: string;
                model: string;
            };
            orderAdjustments: {
                type: string;
                model: string;
            };
            refundLineItems: {
                type: string;
                model: string;
            };
            order: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyRefundDuty: {
            refund: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyRefundLineItem: {
            orderLineItem: {
                type: string;
                model: string;
            };
            refund: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyScriptTag: {
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyShop: {
            collections: {
                type: string;
                model: string;
            };
            marketRegions: {
                type: string;
                model: string;
            };
            orderAdjustments: {
                type: string;
                model: string;
            };
            balanceTransactions: {
                type: string;
                model: string;
            };
            checkoutLineItems: {
                type: string;
                model: string;
            };
            markets: {
                type: string;
                model: string;
            };
            gdprRequests: {
                type: string;
                model: string;
            };
            orderLineItems: {
                type: string;
                model: string;
            };
            orders: {
                type: string;
                model: string;
            };
            disputes: {
                type: string;
                model: string;
            };
            refunds: {
                type: string;
                model: string;
            };
            refundLineItems: {
                type: string;
                model: string;
            };
            company: {
                type: string;
                model: string;
            };
            collects: {
                type: string;
                model: string;
            };
            tenderTransactions: {
                type: string;
                model: string;
            };
            syncs: {
                type: string;
                model: string;
            };
            priceRules: {
                type: string;
                model: string;
            };
            checkouts: {
                type: string;
                model: string;
            };
            fulfillments: {
                type: string;
                model: string;
            };
            marketWebPresences: {
                type: string;
                model: string;
            };
            fulfillmentLineItems: {
                type: string;
                model: string;
            };
            fulfillmentOrderLineItems: {
                type: string;
                model: string;
            };
            discountCodes: {
                type: string;
                model: string;
            };
            appInstallations: {
                type: string;
                model: string;
            };
            shippingLines: {
                type: string;
                model: string;
            };
            refundDuties: {
                type: string;
                model: string;
            };
            fulfillmentOrders: {
                type: string;
                model: string;
            };
            discounts: {
                type: string;
                model: string;
            };
            fulfillmentServices: {
                type: string;
                model: string;
            };
            scriptTags: {
                type: string;
                model: string;
            };
            payouts: {
                type: string;
                model: string;
            };
            bulkOperations: {
                type: string;
                model: string;
            };
            domains: {
                type: string;
                model: string;
            };
            disputeEvidences: {
                type: string;
                model: string;
            };
            products: {
                type: string;
                model: string;
            };
            shopifySmartCollects: {
                type: string;
                model: string;
            };
        };
        shopifySync: {
            shop: {
                type: string;
                model: string;
            };
        };
        session: {
            shop: {
                type: string;
                model: string;
            };
            user: {
                type: string;
                model: string;
            };
        };
        shopifyShippingLine: {
            requestedFulfillmentService: {
                type: string;
                model: string;
            };
            order: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifyTenderTransaction: {
            order: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
        };
        shopifySmartCollect: {
            collection: {
                type: string;
                model: string;
            };
            shop: {
                type: string;
                model: string;
            };
            product: {
                type: string;
                model: string;
            };
        };
    };
    environment: string;
    constructor(options?: ClientOptions);
    /** Executes the scheduledShopifySync global action. */
    scheduledShopifySync: {
        (variables: {
            apiKeys?: ((Scalars['String'] | null))[];
            syncSince?: Date | Scalars['ISO8601DateString'] | null;
            models?: ((Scalars['String'] | null))[];
            force?: (Scalars['Boolean'] | null) | null;
            startReason?: (Scalars['String'] | null) | null;
        }): Promise<any>;
        type: "globalAction";
        operationName: "scheduledShopifySync";
        namespace: null;
        variablesType: {
            apiKeys?: ((Scalars['String'] | null))[];
            syncSince?: Date | Scalars['ISO8601DateString'] | null;
            models?: ((Scalars['String'] | null))[];
            force?: (Scalars['Boolean'] | null) | null;
            startReason?: (Scalars['String'] | null) | null;
        } | undefined;
        variables: {
            "apiKeys": {
                required: false;
                type: "[String!]";
            };
            "syncSince": {
                required: false;
                type: "DateTime";
            };
            "models": {
                required: false;
                type: "[String!]";
            };
            "force": {
                required: false;
                type: "Boolean";
            };
            "startReason": {
                required: false;
                type: "String";
            };
        };
    };
    /** Executes the smartCollect global action. */
    smartCollect: {
        (): Promise<any>;
        type: "globalAction";
        operationName: "smartCollect";
        namespace: null;
        variablesType: Record<string, never>;
        variables: {};
    };
    /** Executes the setTotalZero global action. */
    setTotalZero: {
        (): Promise<any>;
        type: "globalAction";
        operationName: "setTotalZero";
        namespace: null;
        variablesType: Record<string, never>;
        variables: {};
    };
    /** Executes the test2 global action. */
    test2: {
        (variables: {
            tag?: (Scalars['String'] | null) | null;
        }): Promise<any>;
        type: "globalAction";
        operationName: "test2";
        namespace: null;
        variablesType: {
            tag?: (Scalars['String'] | null) | null;
        } | undefined;
        variables: {
            "tag": {
                required: false;
                type: "String";
            };
        };
    };
    /** Executes the test3 global action. */
    test3: {
        (): Promise<any>;
        type: "globalAction";
        operationName: "test3";
        namespace: null;
        variablesType: Record<string, never>;
        variables: {};
    };
    /** Executes the fetchEmails global action. */
    fetchEmails: {
        (): Promise<any>;
        type: "globalAction";
        operationName: "fetchEmails";
        namespace: null;
        variablesType: Record<string, never>;
        variables: {};
    };
    /** Executes the smartCollecter global action. */
    smartCollecter: {
        (): Promise<any>;
        type: "globalAction";
        operationName: "smartCollecter";
        namespace: null;
        variablesType: Record<string, never>;
        variables: {};
    };
    /** Executes the fetchUsers global action. */
    fetchUsers: {
        (): Promise<any>;
        type: "globalAction";
        operationName: "fetchUsers";
        namespace: null;
        variablesType: Record<string, never>;
        variables: {};
    };
    /** Executes the test global action. */
    test: {
        (variables: {
            key?: (Scalars['String'] | null) | null;
        }): Promise<any>;
        type: "globalAction";
        operationName: "test";
        namespace: null;
        variablesType: {
            key?: (Scalars['String'] | null) | null;
        } | undefined;
        variables: {
            "key": {
                required: false;
                type: "String";
            };
        };
    };
    /** Run an arbitrary GraphQL query. */
    query(graphQL: string | DocumentNode, variables?: Record<string, any>, options?: Partial<OperationContext>): Promise<any>;
    /** Run an arbitrary GraphQL mutation. */
    mutate(graphQL: string | DocumentNode, variables?: Record<string, any>, options?: Partial<OperationContext>): Promise<any>;
    /** Start a transaction against the Gadget backend which will atomically commit (or rollback). */
    transaction: <T>(callback: (transaction: GadgetTransaction) => Promise<T>) => Promise<T>;
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
    fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
    /**
    * Get a new direct upload token for file uploads to directly to cloud storage.
    * See https://docs.gadget.dev/guides/storing-files#direct-uploads-using-tokens for more information
    * @return { url: string, token: string } A `url` to upload one file to, and a token for that file to pass back to Gadget as an action input.
    */
    getDirectUploadToken: () => Promise<{
        url: string;
        token: string;
    }>;
    toString(): string;
    toJSON(): string;
}
export {};
