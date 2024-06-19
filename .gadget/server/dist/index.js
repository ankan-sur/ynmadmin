"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionContextLocalStorage = exports.Globals = exports.logger = exports.api = exports.setApiClient = exports.setLogger = exports.InvalidStateTransitionError = exports.DefaultEmailTemplates = void 0;
__exportStar(require("./metadataFileTypes"), exports);
__exportStar(require("./AmbientContext"), exports);
__exportStar(require("./AppConfigs"), exports);
__exportStar(require("./AppConfiguration"), exports);
__exportStar(require("./AppConnections"), exports);
__exportStar(require("./auth"), exports);
__exportStar(require("./effects"), exports);
exports.DefaultEmailTemplates = __importStar(require("./email-templates"));
__exportStar(require("./emails"), exports);
var errors_1 = require("./errors");
Object.defineProperty(exports, "InvalidStateTransitionError", { enumerable: true, get: function () { return errors_1.InvalidStateTransitionError; } });
__exportStar(require("./global-actions"), exports);
__exportStar(require("./routes"), exports);
__exportStar(require("./state-chart"), exports);
__exportStar(require("./types"), exports);
__exportStar(require("./ActionOptions"), exports);
/**
 * @internal
 */
const globals_1 = require("./globals");
Object.defineProperty(exports, "Globals", { enumerable: true, get: function () { return globals_1.Globals; } });
Object.defineProperty(exports, "actionContextLocalStorage", { enumerable: true, get: function () { return globals_1.actionContextLocalStorage; } });
__exportStar(require("./models/User"), exports);
__exportStar(require("./models/ShopifyApp"), exports);
__exportStar(require("./models/ShopifyAppInstallation"), exports);
__exportStar(require("./models/ShopifyBalanceTransaction"), exports);
__exportStar(require("./models/ShopifyBulkOperation"), exports);
__exportStar(require("./models/ShopifyCheckout"), exports);
__exportStar(require("./models/ShopifyCheckoutLineItem"), exports);
__exportStar(require("./models/ShopifyCollect"), exports);
__exportStar(require("./models/ShopifyCollection"), exports);
__exportStar(require("./models/ShopifyCompany"), exports);
__exportStar(require("./models/ShopifyDiscount"), exports);
__exportStar(require("./models/ShopifyDiscountCode"), exports);
__exportStar(require("./models/ShopifyDispute"), exports);
__exportStar(require("./models/ShopifyDisputeEvidence"), exports);
__exportStar(require("./models/ShopifyDomain"), exports);
__exportStar(require("./models/ShopifyFulfillment"), exports);
__exportStar(require("./models/ShopifyFulfillmentLineItem"), exports);
__exportStar(require("./models/ShopifyFulfillmentOrder"), exports);
__exportStar(require("./models/ShopifyFulfillmentOrderLineItem"), exports);
__exportStar(require("./models/ShopifyFulfillmentService"), exports);
__exportStar(require("./models/ShopifyGdprRequest"), exports);
__exportStar(require("./models/ShopifyMarket"), exports);
__exportStar(require("./models/ShopifyMarketRegion"), exports);
__exportStar(require("./models/ShopifyMarketWebPresence"), exports);
__exportStar(require("./models/ShopifyOrder"), exports);
__exportStar(require("./models/ShopifyOrderAdjustment"), exports);
__exportStar(require("./models/ShopifyOrderLineItem"), exports);
__exportStar(require("./models/ShopifyPayout"), exports);
__exportStar(require("./models/ShopifyPriceRule"), exports);
__exportStar(require("./models/ShopifyProduct"), exports);
__exportStar(require("./models/ShopifyRefund"), exports);
__exportStar(require("./models/ShopifyRefundDuty"), exports);
__exportStar(require("./models/ShopifyRefundLineItem"), exports);
__exportStar(require("./models/ShopifyScriptTag"), exports);
__exportStar(require("./models/ShopifyShop"), exports);
__exportStar(require("./models/ShopifySync"), exports);
__exportStar(require("./models/Session"), exports);
__exportStar(require("./models/ShopifyShippingLine"), exports);
__exportStar(require("./models/ShopifyTenderTransaction"), exports);
__exportStar(require("./models/ShopifySmartCollect"), exports);
/**
 * An instance of the Gadget logger
 */
let logger;
/**
 * An instance of the Gadget API client that has admin permissions
 */
let api;
/**
 * This is used internally to set the rootLogger.
 * @internal
 */
const setLogger = (rootLogger) => {
    globals_1.Globals.logger = rootLogger;
    exports.logger = logger = rootLogger;
};
exports.setLogger = setLogger;
/**
 * This is used internally to set the client Instance
 * @internal
 */
const setApiClient = (client) => {
    exports.api = api = client;
};
exports.setApiClient = setApiClient;
//# sourceMappingURL=index.js.map