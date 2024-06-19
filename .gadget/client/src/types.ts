import { FieldSelection, FilterNever } from "@gadgetinc/api-client-core";

type JSONValue =
    | string
    | number
    | boolean
    | JSONObject
    | JSONArray;

interface JSONObject {
    [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> { }


export enum GadgetFieldType {
  Any,
  Array,
  BelongsTo,
  Boolean,
  Code,
  Color,
  Computed,
  DateTime,
  Email,
  EncryptedString,
  Enum,
  File,
  HasMany,
  HasManyThrough,
  HasOne,
  ID,
  JSON,
  Money,
  Null,
  Number,
  Object,
  Password,
  RecordState,
  RichText,
  RoleAssignments,
  String,
  URL,
  Vector,
}


/** Represents the possible values of the account enum. */
export type UserAccountEnum = "client" | "staff" | "artist";

/** Represents the possible values of the store enum. */
export type UserTeamEnum = "YNM" | "YNE";

/** A sort order for a field. Can be Ascending or Descending. */
export type SortOrder = "Ascending"|"Descending";

/** Represents the possible values of the Developer Type enum. */
export type ShopifyAppDeveloperTypeEnum = "MERCHANT" | "PARTNER" | "SHOPIFY" | "UNKNOWN";

/** Represents the possible values of the Status enum. */
export type ShopifyProductStatusEnum = "active" | "archived" | "draft";

/** Represents the possible values of the Collection Type enum. */
export type ShopifyCollectionCollectionTypeEnum = "custom" | "smart";

/** Represents the possible values of the Topic enum. */
export type ShopifyGdprRequestTopicEnum = "customers/data_request" | "customers/redact" | "shop/redact";

/** Represents the possible values of the Discount Class enum. */
export type ShopifyDiscountDiscountClassEnum = "ORDER" | "PRODUCT" | "SHIPPING" | string;

/** Represents the possible values of the Status enum. */
export type ShopifyDiscountStatusEnum = "ACTIVE" | "EXPIRED" | "SCHEDULED" | string;

/** Represents the possible values of the Error Code enum. */
export type ShopifyBulkOperationErrorCodeEnum = "access_denied" | "internal_server_error" | "timeout";

/** Represents the possible values of the Status enum. */
export type ShopifyBulkOperationStatusEnum = "canceled" | "canceling" | "completed" | "created" | "expired" | "failed" | "running";

/** Represents the possible values of the Type enum. */
export type ShopifyBulkOperationTypeEnum = "query" | "mutation";

/** Represents the possible values of the Public Category enum. */
export type ShopifyAppPublicCategoryEnum = "CUSTOM" | "OTHER" | "PRIVATE" | "PUBLIC";

/** Represents one user result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalUserRecord = Scalars["JSONObject"];

/** Represents one shopifyApp result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyAppRecord = Scalars["JSONObject"];

/** Represents one shopifyAppInstallation result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyAppInstallationRecord = Scalars["JSONObject"];

/** Represents one shopifyBalanceTransaction result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyBalanceTransactionRecord = Scalars["JSONObject"];

/** Represents one shopifyBulkOperation result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyBulkOperationRecord = Scalars["JSONObject"];

/** Represents one shopifyCheckout result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyCheckoutRecord = Scalars["JSONObject"];

/** Represents one shopifyCheckoutLineItem result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyCheckoutLineItemRecord = Scalars["JSONObject"];

/** Represents one shopifyCollect result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyCollectRecord = Scalars["JSONObject"];

/** Represents one shopifyCollection result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyCollectionRecord = Scalars["JSONObject"];

/** Represents one shopifyCompany result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyCompanyRecord = Scalars["JSONObject"];

/** Represents one shopifyDiscount result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyDiscountRecord = Scalars["JSONObject"];

/** Represents one shopifyDiscountCode result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyDiscountCodeRecord = Scalars["JSONObject"];

/** Represents one shopifyDispute result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyDisputeRecord = Scalars["JSONObject"];

/** Represents one shopifyDisputeEvidence result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyDisputeEvidenceRecord = Scalars["JSONObject"];

/** Represents one shopifyDomain result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyDomainRecord = Scalars["JSONObject"];

/** Represents one shopifyFulfillment result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyFulfillmentRecord = Scalars["JSONObject"];

/** Represents one shopifyFulfillmentLineItem result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyFulfillmentLineItemRecord = Scalars["JSONObject"];

/** Represents one shopifyFulfillmentOrder result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyFulfillmentOrderRecord = Scalars["JSONObject"];

/** Represents one shopifyFulfillmentOrderLineItem result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyFulfillmentOrderLineItemRecord = Scalars["JSONObject"];

/** Represents one shopifyFulfillmentService result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyFulfillmentServiceRecord = Scalars["JSONObject"];

/** Represents one shopifyGdprRequest result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyGdprRequestRecord = Scalars["JSONObject"];

/** Represents one shopifyMarket result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyMarketRecord = Scalars["JSONObject"];

/** Represents one shopifyMarketRegion result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyMarketRegionRecord = Scalars["JSONObject"];

/** Represents one shopifyMarketWebPresence result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyMarketWebPresenceRecord = Scalars["JSONObject"];

/** Represents one shopifyOrder result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyOrderRecord = Scalars["JSONObject"];

/** Represents one shopifyOrderAdjustment result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyOrderAdjustmentRecord = Scalars["JSONObject"];

/** Represents one shopifyOrderLineItem result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyOrderLineItemRecord = Scalars["JSONObject"];

/** Represents one shopifyPayout result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyPayoutRecord = Scalars["JSONObject"];

/** Represents one shopifyPriceRule result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyPriceRuleRecord = Scalars["JSONObject"];

/** Represents one shopifyProduct result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyProductRecord = Scalars["JSONObject"];

/** Represents one shopifyRefund result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyRefundRecord = Scalars["JSONObject"];

/** Represents one shopifyRefundDuty result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyRefundDutyRecord = Scalars["JSONObject"];

/** Represents one shopifyRefundLineItem result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyRefundLineItemRecord = Scalars["JSONObject"];

/** Represents one shopifyScriptTag result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyScriptTagRecord = Scalars["JSONObject"];

/** Represents one shopifyShop result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyShopRecord = Scalars["JSONObject"];

/** Represents one shopifySync result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifySyncRecord = Scalars["JSONObject"];

/** Represents one session result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalSessionRecord = Scalars["JSONObject"];

/** Represents one shopifyShippingLine result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyShippingLineRecord = Scalars["JSONObject"];

/** Represents one shopifyTenderTransaction result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyTenderTransactionRecord = Scalars["JSONObject"];

/** Represents one shopifySmartCollect result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifySmartCollectRecord = Scalars["JSONObject"];



export type UserSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the emailVerified field. Defaults to ascending (smallest value first). */
  emailVerified?: SortOrder | null;

  /** Sort the results by the resetPasswordToken field. Defaults to ascending (smallest value first). */
  resetPasswordToken?: SortOrder | null;

  /** Sort the results by the resetPasswordTokenExpiration field. Defaults to ascending (smallest value first). */
  resetPasswordTokenExpiration?: SortOrder | null;

  /** Sort the results by the lastName field. Defaults to ascending (smallest value first). */
  lastName?: SortOrder | null;

  /** Sort the results by the lastSignedIn field. Defaults to ascending (smallest value first). */
  lastSignedIn?: SortOrder | null;

  /** Sort the results by the firstName field. Defaults to ascending (smallest value first). */
  firstName?: SortOrder | null;

  /** Sort the results by the googleProfileId field. Defaults to ascending (smallest value first). */
  googleProfileId?: SortOrder | null;

  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: SortOrder | null;

  /** Sort the results by the googleImageUrl field. Defaults to ascending (smallest value first). */
  googleImageUrl?: SortOrder | null;

  /** Sort the results by the account field. Defaults to ascending (smallest value first). */
  account?: SortOrder | null;

  /** Sort the results by the emailVerificationToken field. Defaults to ascending (smallest value first). */
  emailVerificationToken?: SortOrder | null;

  /** Sort the results by the emailVerificationTokenExpiration field. Defaults to ascending (smallest value first). */
  emailVerificationTokenExpiration?: SortOrder | null;

  /** Sort the results by the keys field. Defaults to ascending (smallest value first). */
  keys?: SortOrder | null;

  /** Sort the results by the team field. Defaults to ascending (smallest value first). */
  team?: SortOrder | null;
};



export type UserFilter = {

  AND?: (UserFilter | null)[];

  OR?: (UserFilter | null)[];

  NOT?: (UserFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  emailVerified?: BooleanFilter | null;

  resetPasswordToken?: StringFilter | null;

  resetPasswordTokenExpiration?: DateTimeFilter | null;

  lastName?: StringFilter | null;

  lastSignedIn?: DateTimeFilter | null;

  firstName?: StringFilter | null;

  googleProfileId?: StringFilter | null;

  email?: StringFilter | null;

  googleImageUrl?: StringFilter | null;

  account?: SingleEnumFilter | null;

  emailVerificationToken?: StringFilter | null;

  emailVerificationTokenExpiration?: DateTimeFilter | null;

  keys?: JSONFilter | null;

  team?: MultiEnumFilter | null;
};



export type IDFilter = {

  equals?: (Scalars['GadgetID'] | null) | null;

  notEquals?: (Scalars['GadgetID'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['GadgetID'] | null) | null)[];

  notIn?: ((Scalars['GadgetID'] | null) | null)[];

  lessThan?: (Scalars['GadgetID'] | null) | null;

  lessThanOrEqual?: (Scalars['GadgetID'] | null) | null;

  greaterThan?: (Scalars['GadgetID'] | null) | null;

  greaterThanOrEqual?: (Scalars['GadgetID'] | null) | null;
};



export type DateTimeFilter = {

  equals?: Date | Scalars['ISO8601DateString'] | null;

  notEquals?: Date | Scalars['ISO8601DateString'] | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: (Date | Scalars['ISO8601DateString'] | null)[];

  notIn?: (Date | Scalars['ISO8601DateString'] | null)[];

  lessThan?: Date | Scalars['ISO8601DateString'] | null;

  lessThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;

  greaterThan?: Date | Scalars['ISO8601DateString'] | null;

  greaterThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;

  before?: Date | Scalars['ISO8601DateString'] | null;

  after?: Date | Scalars['ISO8601DateString'] | null;
};



export type BooleanFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  equals?: (Scalars['Boolean'] | null) | null;

  notEquals?: (Scalars['Boolean'] | null) | null;
};



export type StringFilter = {

  equals?: (Scalars['String'] | null) | null;

  notEquals?: (Scalars['String'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['String'] | null) | null)[];

  notIn?: ((Scalars['String'] | null) | null)[];

  lessThan?: (Scalars['String'] | null) | null;

  lessThanOrEqual?: (Scalars['String'] | null) | null;

  greaterThan?: (Scalars['String'] | null) | null;

  greaterThanOrEqual?: (Scalars['String'] | null) | null;

  startsWith?: (Scalars['String'] | null) | null;
};



export type SingleEnumFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  equals?: (Scalars['String'] | null) | null;

  notEquals?: (Scalars['String'] | null) | null;

  in?: ((Scalars['String'] | null) | null)[];
};



export type JSONFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  equals?: (Scalars['JSON'] | null) | null;

  in?: ((Scalars['JSON'] | null) | null)[];

  notIn?: ((Scalars['JSON'] | null) | null)[];

  notEquals?: (Scalars['JSON'] | null) | null;

  matches?: (Scalars['JSON'] | null) | null;
};



export type MultiEnumFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  equals?: ((Scalars['String'] | null) | null)[];

  notEquals?: ((Scalars['String'] | null) | null)[];

  contains?: ((Scalars['String'] | null) | null)[];
};



export type ShopifyFulfillmentOrderLineItemSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the remainingQuantity field. Defaults to ascending (smallest value first). */
  remainingQuantity?: SortOrder | null;

  /** Sort the results by the quantity field. Defaults to ascending (smallest value first). */
  quantity?: SortOrder | null;
};



export type ShopifyFulfillmentOrderLineItemFilter = {

  AND?: (ShopifyFulfillmentOrderLineItemFilter | null)[];

  OR?: (ShopifyFulfillmentOrderLineItemFilter | null)[];

  NOT?: (ShopifyFulfillmentOrderLineItemFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  remainingQuantity?: FloatFilter | null;

  quantity?: FloatFilter | null;

  fulfillmentOrder?: IDFilter | null;

  fulfillmentOrderId?: IDFilter | null;

  orderLineItem?: IDFilter | null;

  orderLineItemId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type FloatFilter = {

  equals?: (Scalars['Float'] | null) | null;

  notEquals?: (Scalars['Float'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['Float'] | null) | null)[];

  notIn?: ((Scalars['Float'] | null) | null)[];

  lessThan?: (Scalars['Float'] | null) | null;

  lessThanOrEqual?: (Scalars['Float'] | null) | null;

  greaterThan?: (Scalars['Float'] | null) | null;

  greaterThanOrEqual?: (Scalars['Float'] | null) | null;
};



export type ShopifyRefundDutySort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the amountSet field. Defaults to ascending (smallest value first). */
  amountSet?: SortOrder | null;
};



export type ShopifyRefundDutyFilter = {

  AND?: (ShopifyRefundDutyFilter | null)[];

  OR?: (ShopifyRefundDutyFilter | null)[];

  NOT?: (ShopifyRefundDutyFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  amountSet?: JSONFilter | null;

  refund?: IDFilter | null;

  refundId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyOrderAdjustmentSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the amount field. Defaults to ascending (smallest value first). */
  amount?: SortOrder | null;

  /** Sort the results by the amountSet field. Defaults to ascending (smallest value first). */
  amountSet?: SortOrder | null;

  /** Sort the results by the kind field. Defaults to ascending (smallest value first). */
  kind?: SortOrder | null;

  /** Sort the results by the reason field. Defaults to ascending (smallest value first). */
  reason?: SortOrder | null;

  /** Sort the results by the taxAmount field. Defaults to ascending (smallest value first). */
  taxAmount?: SortOrder | null;

  /** Sort the results by the taxAmountSet field. Defaults to ascending (smallest value first). */
  taxAmountSet?: SortOrder | null;
};



export type ShopifyOrderAdjustmentFilter = {

  AND?: (ShopifyOrderAdjustmentFilter | null)[];

  OR?: (ShopifyOrderAdjustmentFilter | null)[];

  NOT?: (ShopifyOrderAdjustmentFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  amount?: StringFilter | null;

  amountSet?: JSONFilter | null;

  kind?: StringFilter | null;

  reason?: StringFilter | null;

  taxAmount?: StringFilter | null;

  taxAmountSet?: JSONFilter | null;

  order?: IDFilter | null;

  orderId?: IDFilter | null;

  refund?: IDFilter | null;

  refundId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyRefundLineItemSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the quantity field. Defaults to ascending (smallest value first). */
  quantity?: SortOrder | null;

  /** Sort the results by the restockType field. Defaults to ascending (smallest value first). */
  restockType?: SortOrder | null;

  /** Sort the results by the subtotal field. Defaults to ascending (smallest value first). */
  subtotal?: SortOrder | null;

  /** Sort the results by the subtotalSet field. Defaults to ascending (smallest value first). */
  subtotalSet?: SortOrder | null;

  /** Sort the results by the totalTax field. Defaults to ascending (smallest value first). */
  totalTax?: SortOrder | null;

  /** Sort the results by the totalTaxSet field. Defaults to ascending (smallest value first). */
  totalTaxSet?: SortOrder | null;
};



export type ShopifyRefundLineItemFilter = {

  AND?: (ShopifyRefundLineItemFilter | null)[];

  OR?: (ShopifyRefundLineItemFilter | null)[];

  NOT?: (ShopifyRefundLineItemFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  quantity?: FloatFilter | null;

  restockType?: StringFilter | null;

  subtotal?: FloatFilter | null;

  subtotalSet?: JSONFilter | null;

  totalTax?: FloatFilter | null;

  totalTaxSet?: JSONFilter | null;

  orderLineItem?: IDFilter | null;

  orderLineItemId?: IDFilter | null;

  refund?: IDFilter | null;

  refundId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyRefundSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the note field. Defaults to ascending (smallest value first). */
  note?: SortOrder | null;

  /** Sort the results by the processedAt field. Defaults to ascending (smallest value first). */
  processedAt?: SortOrder | null;

  /** Sort the results by the restock field. Defaults to ascending (smallest value first). */
  restock?: SortOrder | null;
};



export type ShopifyRefundFilter = {

  AND?: (ShopifyRefundFilter | null)[];

  OR?: (ShopifyRefundFilter | null)[];

  NOT?: (ShopifyRefundFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  note?: StringFilter | null;

  processedAt?: DateTimeFilter | null;

  restock?: BooleanFilter | null;

  order?: IDFilter | null;

  orderId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyCheckoutLineItemSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the appliedDiscounts field. Defaults to ascending (smallest value first). */
  appliedDiscounts?: SortOrder | null;

  /** Sort the results by the compareAtPrice field. Defaults to ascending (smallest value first). */
  compareAtPrice?: SortOrder | null;

  /** Sort the results by the discountAllocations field. Defaults to ascending (smallest value first). */
  discountAllocations?: SortOrder | null;

  /** Sort the results by the fulfillmentService field. Defaults to ascending (smallest value first). */
  fulfillmentService?: SortOrder | null;

  /** Sort the results by the grams field. Defaults to ascending (smallest value first). */
  grams?: SortOrder | null;

  /** Sort the results by the key field. Defaults to ascending (smallest value first). */
  key?: SortOrder | null;

  /** Sort the results by the linePrice field. Defaults to ascending (smallest value first). */
  linePrice?: SortOrder | null;

  /** Sort the results by the price field. Defaults to ascending (smallest value first). */
  price?: SortOrder | null;

  /** Sort the results by the quantity field. Defaults to ascending (smallest value first). */
  quantity?: SortOrder | null;

  /** Sort the results by the requiresShipping field. Defaults to ascending (smallest value first). */
  requiresShipping?: SortOrder | null;

  /** Sort the results by the sku field. Defaults to ascending (smallest value first). */
  sku?: SortOrder | null;

  /** Sort the results by the taxable field. Defaults to ascending (smallest value first). */
  taxable?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the variantTitle field. Defaults to ascending (smallest value first). */
  variantTitle?: SortOrder | null;

  /** Sort the results by the vendor field. Defaults to ascending (smallest value first). */
  vendor?: SortOrder | null;
};



export type ShopifyCheckoutLineItemFilter = {

  AND?: (ShopifyCheckoutLineItemFilter | null)[];

  OR?: (ShopifyCheckoutLineItemFilter | null)[];

  NOT?: (ShopifyCheckoutLineItemFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  appliedDiscounts?: JSONFilter | null;

  compareAtPrice?: StringFilter | null;

  discountAllocations?: JSONFilter | null;

  fulfillmentService?: StringFilter | null;

  grams?: FloatFilter | null;

  key?: StringFilter | null;

  linePrice?: StringFilter | null;

  price?: StringFilter | null;

  quantity?: FloatFilter | null;

  requiresShipping?: BooleanFilter | null;

  sku?: StringFilter | null;

  taxable?: BooleanFilter | null;

  title?: StringFilter | null;

  variantTitle?: StringFilter | null;

  vendor?: StringFilter | null;

  checkout?: IDFilter | null;

  checkoutId?: IDFilter | null;

  product?: IDFilter | null;

  productId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyCheckoutSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the abandonedCheckoutUrl field. Defaults to ascending (smallest value first). */
  abandonedCheckoutUrl?: SortOrder | null;

  /** Sort the results by the appliedDiscount field. Defaults to ascending (smallest value first). */
  appliedDiscount?: SortOrder | null;

  /** Sort the results by the buyerAcceptsMarketing field. Defaults to ascending (smallest value first). */
  buyerAcceptsMarketing?: SortOrder | null;

  /** Sort the results by the completedAt field. Defaults to ascending (smallest value first). */
  completedAt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the creditCard field. Defaults to ascending (smallest value first). */
  creditCard?: SortOrder | null;

  /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
  currency?: SortOrder | null;

  /** Sort the results by the customerLocale field. Defaults to ascending (smallest value first). */
  customerLocale?: SortOrder | null;

  /** Sort the results by the device field. Defaults to ascending (smallest value first). */
  device?: SortOrder | null;

  /** Sort the results by the discountCode field. Defaults to ascending (smallest value first). */
  discountCode?: SortOrder | null;

  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: SortOrder | null;

  /** Sort the results by the legalNoticeUrl field. Defaults to ascending (smallest value first). */
  legalNoticeUrl?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the note field. Defaults to ascending (smallest value first). */
  note?: SortOrder | null;

  /** Sort the results by the noteAttributes field. Defaults to ascending (smallest value first). */
  noteAttributes?: SortOrder | null;

  /** Sort the results by the orderStatusUrl field. Defaults to ascending (smallest value first). */
  orderStatusUrl?: SortOrder | null;

  /** Sort the results by the paymentDue field. Defaults to ascending (smallest value first). */
  paymentDue?: SortOrder | null;

  /** Sort the results by the paymentUrl field. Defaults to ascending (smallest value first). */
  paymentUrl?: SortOrder | null;

  /** Sort the results by the payments field. Defaults to ascending (smallest value first). */
  payments?: SortOrder | null;

  /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
  phone?: SortOrder | null;

  /** Sort the results by the presentmentCurrency field. Defaults to ascending (smallest value first). */
  presentmentCurrency?: SortOrder | null;

  /** Sort the results by the privacyPolicyUrl field. Defaults to ascending (smallest value first). */
  privacyPolicyUrl?: SortOrder | null;

  /** Sort the results by the refundPolicyUrl field. Defaults to ascending (smallest value first). */
  refundPolicyUrl?: SortOrder | null;

  /** Sort the results by the requiresShipping field. Defaults to ascending (smallest value first). */
  requiresShipping?: SortOrder | null;

  /** Sort the results by the reservationTime field. Defaults to ascending (smallest value first). */
  reservationTime?: SortOrder | null;

  /** Sort the results by the reservationTimeLeft field. Defaults to ascending (smallest value first). */
  reservationTimeLeft?: SortOrder | null;

  /** Sort the results by the shippingLine field. Defaults to ascending (smallest value first). */
  shippingLine?: SortOrder | null;

  /** Sort the results by the shippingPolicyUrl field. Defaults to ascending (smallest value first). */
  shippingPolicyUrl?: SortOrder | null;

  /** Sort the results by the shopifyPaymentsAccountId field. Defaults to ascending (smallest value first). */
  shopifyPaymentsAccountId?: SortOrder | null;

  /** Sort the results by the sourceIdentifier field. Defaults to ascending (smallest value first). */
  sourceIdentifier?: SortOrder | null;

  /** Sort the results by the sourceName field. Defaults to ascending (smallest value first). */
  sourceName?: SortOrder | null;

  /** Sort the results by the sourceUrl field. Defaults to ascending (smallest value first). */
  sourceUrl?: SortOrder | null;

  /** Sort the results by the subscriptionPolicyUrl field. Defaults to ascending (smallest value first). */
  subscriptionPolicyUrl?: SortOrder | null;

  /** Sort the results by the subtotalPrice field. Defaults to ascending (smallest value first). */
  subtotalPrice?: SortOrder | null;

  /** Sort the results by the taxExempt field. Defaults to ascending (smallest value first). */
  taxExempt?: SortOrder | null;

  /** Sort the results by the taxLines field. Defaults to ascending (smallest value first). */
  taxLines?: SortOrder | null;

  /** Sort the results by the taxManipulations field. Defaults to ascending (smallest value first). */
  taxManipulations?: SortOrder | null;

  /** Sort the results by the taxesIncluded field. Defaults to ascending (smallest value first). */
  taxesIncluded?: SortOrder | null;

  /** Sort the results by the termsOfSaleUrl field. Defaults to ascending (smallest value first). */
  termsOfSaleUrl?: SortOrder | null;

  /** Sort the results by the termsOfServiceUrl field. Defaults to ascending (smallest value first). */
  termsOfServiceUrl?: SortOrder | null;

  /** Sort the results by the token field. Defaults to ascending (smallest value first). */
  token?: SortOrder | null;

  /** Sort the results by the totalLineItemsPrice field. Defaults to ascending (smallest value first). */
  totalLineItemsPrice?: SortOrder | null;

  /** Sort the results by the totalPrice field. Defaults to ascending (smallest value first). */
  totalPrice?: SortOrder | null;

  /** Sort the results by the totalTax field. Defaults to ascending (smallest value first). */
  totalTax?: SortOrder | null;

  /** Sort the results by the totalTipReceived field. Defaults to ascending (smallest value first). */
  totalTipReceived?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the userId field. Defaults to ascending (smallest value first). */
  userId?: SortOrder | null;

  /** Sort the results by the webUrl field. Defaults to ascending (smallest value first). */
  webUrl?: SortOrder | null;
};



export type ShopifyCheckoutFilter = {

  AND?: (ShopifyCheckoutFilter | null)[];

  OR?: (ShopifyCheckoutFilter | null)[];

  NOT?: (ShopifyCheckoutFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  abandonedCheckoutUrl?: StringFilter | null;

  appliedDiscount?: JSONFilter | null;

  buyerAcceptsMarketing?: BooleanFilter | null;

  completedAt?: DateTimeFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  creditCard?: StringFilter | null;

  currency?: StringFilter | null;

  customerLocale?: StringFilter | null;

  device?: FloatFilter | null;

  discountCode?: StringFilter | null;

  email?: StringFilter | null;

  legalNoticeUrl?: StringFilter | null;

  name?: StringFilter | null;

  note?: StringFilter | null;

  noteAttributes?: JSONFilter | null;

  orderStatusUrl?: StringFilter | null;

  paymentDue?: StringFilter | null;

  paymentUrl?: StringFilter | null;

  payments?: JSONFilter | null;

  phone?: StringFilter | null;

  presentmentCurrency?: StringFilter | null;

  privacyPolicyUrl?: StringFilter | null;

  refundPolicyUrl?: StringFilter | null;

  requiresShipping?: BooleanFilter | null;

  reservationTime?: FloatFilter | null;

  reservationTimeLeft?: FloatFilter | null;

  shippingLine?: JSONFilter | null;

  shippingPolicyUrl?: StringFilter | null;

  shopifyPaymentsAccountId?: StringFilter | null;

  sourceIdentifier?: StringFilter | null;

  sourceName?: StringFilter | null;

  sourceUrl?: StringFilter | null;

  subscriptionPolicyUrl?: StringFilter | null;

  subtotalPrice?: StringFilter | null;

  taxExempt?: BooleanFilter | null;

  taxLines?: JSONFilter | null;

  taxManipulations?: JSONFilter | null;

  taxesIncluded?: BooleanFilter | null;

  termsOfSaleUrl?: StringFilter | null;

  termsOfServiceUrl?: StringFilter | null;

  token?: StringFilter | null;

  totalLineItemsPrice?: StringFilter | null;

  totalPrice?: StringFilter | null;

  totalTax?: StringFilter | null;

  totalTipReceived?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  userId?: StringFilter | null;

  webUrl?: StringFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;

  order?: IDFilter | null;

  orderId?: IDFilter | null;
};



export type ShopifyFulfillmentOrderSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the assignedLocation field. Defaults to ascending (smallest value first). */
  assignedLocation?: SortOrder | null;

  /** Sort the results by the deliveryMethod field. Defaults to ascending (smallest value first). */
  deliveryMethod?: SortOrder | null;

  /** Sort the results by the destination field. Defaults to ascending (smallest value first). */
  destination?: SortOrder | null;

  /** Sort the results by the fulfillAt field. Defaults to ascending (smallest value first). */
  fulfillAt?: SortOrder | null;

  /** Sort the results by the fulfillBy field. Defaults to ascending (smallest value first). */
  fulfillBy?: SortOrder | null;

  /** Sort the results by the fulfillmentHolds field. Defaults to ascending (smallest value first). */
  fulfillmentHolds?: SortOrder | null;

  /** Sort the results by the internationalDuties field. Defaults to ascending (smallest value first). */
  internationalDuties?: SortOrder | null;

  /** Sort the results by the merchantRequests field. Defaults to ascending (smallest value first). */
  merchantRequests?: SortOrder | null;

  /** Sort the results by the requestStatus field. Defaults to ascending (smallest value first). */
  requestStatus?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the supportedActions field. Defaults to ascending (smallest value first). */
  supportedActions?: SortOrder | null;
};



export type ShopifyFulfillmentOrderFilter = {

  AND?: (ShopifyFulfillmentOrderFilter | null)[];

  OR?: (ShopifyFulfillmentOrderFilter | null)[];

  NOT?: (ShopifyFulfillmentOrderFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  assignedLocation?: JSONFilter | null;

  deliveryMethod?: JSONFilter | null;

  destination?: JSONFilter | null;

  fulfillAt?: DateTimeFilter | null;

  fulfillBy?: DateTimeFilter | null;

  fulfillmentHolds?: JSONFilter | null;

  internationalDuties?: JSONFilter | null;

  merchantRequests?: JSONFilter | null;

  requestStatus?: StringFilter | null;

  status?: StringFilter | null;

  supportedActions?: JSONFilter | null;

  order?: IDFilter | null;

  orderId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyBalanceTransactionSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the adjustmentOrderTransactions field. Defaults to ascending (smallest value first). */
  adjustmentOrderTransactions?: SortOrder | null;

  /** Sort the results by the amount field. Defaults to ascending (smallest value first). */
  amount?: SortOrder | null;

  /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
  currency?: SortOrder | null;

  /** Sort the results by the fee field. Defaults to ascending (smallest value first). */
  fee?: SortOrder | null;

  /** Sort the results by the net field. Defaults to ascending (smallest value first). */
  net?: SortOrder | null;

  /** Sort the results by the payoutStatus field. Defaults to ascending (smallest value first). */
  payoutStatus?: SortOrder | null;

  /** Sort the results by the processedAt field. Defaults to ascending (smallest value first). */
  processedAt?: SortOrder | null;

  /** Sort the results by the sourceId field. Defaults to ascending (smallest value first). */
  sourceId?: SortOrder | null;

  /** Sort the results by the sourceType field. Defaults to ascending (smallest value first). */
  sourceType?: SortOrder | null;

  /** Sort the results by the test field. Defaults to ascending (smallest value first). */
  test?: SortOrder | null;

  /** Sort the results by the type field. Defaults to ascending (smallest value first). */
  type?: SortOrder | null;
};



export type ShopifyBalanceTransactionFilter = {

  AND?: (ShopifyBalanceTransactionFilter | null)[];

  OR?: (ShopifyBalanceTransactionFilter | null)[];

  NOT?: (ShopifyBalanceTransactionFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  adjustmentOrderTransactions?: JSONFilter | null;

  amount?: StringFilter | null;

  currency?: StringFilter | null;

  fee?: StringFilter | null;

  net?: StringFilter | null;

  payoutStatus?: StringFilter | null;

  processedAt?: DateTimeFilter | null;

  sourceId?: FloatFilter | null;

  sourceType?: StringFilter | null;

  test?: BooleanFilter | null;

  type?: StringFilter | null;

  sourceOrder?: IDFilter | null;

  sourceOrderId?: IDFilter | null;

  payout?: IDFilter | null;

  payoutId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyFulfillmentLineItemSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the originalTotalSet field. Defaults to ascending (smallest value first). */
  originalTotalSet?: SortOrder | null;

  /** Sort the results by the quantity field. Defaults to ascending (smallest value first). */
  quantity?: SortOrder | null;

  /** Sort the results by the discountedTotalSet field. Defaults to ascending (smallest value first). */
  discountedTotalSet?: SortOrder | null;
};



export type ShopifyFulfillmentLineItemFilter = {

  AND?: (ShopifyFulfillmentLineItemFilter | null)[];

  OR?: (ShopifyFulfillmentLineItemFilter | null)[];

  NOT?: (ShopifyFulfillmentLineItemFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  originalTotalSet?: JSONFilter | null;

  quantity?: FloatFilter | null;

  discountedTotalSet?: JSONFilter | null;

  fulfillment?: IDFilter | null;

  fulfillmentId?: IDFilter | null;

  orderLineItem?: IDFilter | null;

  orderLineItemId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyFulfillmentSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the notifyCustomer field. Defaults to ascending (smallest value first). */
  notifyCustomer?: SortOrder | null;

  /** Sort the results by the originAddress field. Defaults to ascending (smallest value first). */
  originAddress?: SortOrder | null;

  /** Sort the results by the receipt field. Defaults to ascending (smallest value first). */
  receipt?: SortOrder | null;

  /** Sort the results by the service field. Defaults to ascending (smallest value first). */
  service?: SortOrder | null;

  /** Sort the results by the shipmentStatus field. Defaults to ascending (smallest value first). */
  shipmentStatus?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the trackingCompany field. Defaults to ascending (smallest value first). */
  trackingCompany?: SortOrder | null;

  /** Sort the results by the trackingNumbers field. Defaults to ascending (smallest value first). */
  trackingNumbers?: SortOrder | null;

  /** Sort the results by the trackingUrls field. Defaults to ascending (smallest value first). */
  trackingUrls?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the variantInventoryManagement field. Defaults to ascending (smallest value first). */
  variantInventoryManagement?: SortOrder | null;
};



export type ShopifyFulfillmentFilter = {

  AND?: (ShopifyFulfillmentFilter | null)[];

  OR?: (ShopifyFulfillmentFilter | null)[];

  NOT?: (ShopifyFulfillmentFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  name?: StringFilter | null;

  notifyCustomer?: BooleanFilter | null;

  originAddress?: JSONFilter | null;

  receipt?: JSONFilter | null;

  service?: StringFilter | null;

  shipmentStatus?: StringFilter | null;

  status?: StringFilter | null;

  trackingCompany?: StringFilter | null;

  trackingNumbers?: JSONFilter | null;

  trackingUrls?: JSONFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  variantInventoryManagement?: StringFilter | null;

  order?: IDFilter | null;

  orderId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyOrderLineItemSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the attributedStaffs field. Defaults to ascending (smallest value first). */
  attributedStaffs?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the currentQuantity field. Defaults to ascending (smallest value first). */
  currentQuantity?: SortOrder | null;

  /** Sort the results by the discountAllocations field. Defaults to ascending (smallest value first). */
  discountAllocations?: SortOrder | null;

  /** Sort the results by the fulfillableQuantity field. Defaults to ascending (smallest value first). */
  fulfillableQuantity?: SortOrder | null;

  /** Sort the results by the fulfillmentService field. Defaults to ascending (smallest value first). */
  fulfillmentService?: SortOrder | null;

  /** Sort the results by the fulfillmentStatus field. Defaults to ascending (smallest value first). */
  fulfillmentStatus?: SortOrder | null;

  /** Sort the results by the giftCard field. Defaults to ascending (smallest value first). */
  giftCard?: SortOrder | null;

  /** Sort the results by the grams field. Defaults to ascending (smallest value first). */
  grams?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the price field. Defaults to ascending (smallest value first). */
  price?: SortOrder | null;

  /** Sort the results by the priceSet field. Defaults to ascending (smallest value first). */
  priceSet?: SortOrder | null;

  /** Sort the results by the productExists field. Defaults to ascending (smallest value first). */
  productExists?: SortOrder | null;

  /** Sort the results by the properties field. Defaults to ascending (smallest value first). */
  properties?: SortOrder | null;

  /** Sort the results by the quantity field. Defaults to ascending (smallest value first). */
  quantity?: SortOrder | null;

  /** Sort the results by the requiresShipping field. Defaults to ascending (smallest value first). */
  requiresShipping?: SortOrder | null;

  /** Sort the results by the sku field. Defaults to ascending (smallest value first). */
  sku?: SortOrder | null;

  /** Sort the results by the taxLines field. Defaults to ascending (smallest value first). */
  taxLines?: SortOrder | null;

  /** Sort the results by the taxable field. Defaults to ascending (smallest value first). */
  taxable?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the totalDiscount field. Defaults to ascending (smallest value first). */
  totalDiscount?: SortOrder | null;

  /** Sort the results by the totalDiscountSet field. Defaults to ascending (smallest value first). */
  totalDiscountSet?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the variantInventoryManagement field. Defaults to ascending (smallest value first). */
  variantInventoryManagement?: SortOrder | null;

  /** Sort the results by the variantTitle field. Defaults to ascending (smallest value first). */
  variantTitle?: SortOrder | null;

  /** Sort the results by the vendor field. Defaults to ascending (smallest value first). */
  vendor?: SortOrder | null;
};



export type ShopifyOrderLineItemFilter = {

  AND?: (ShopifyOrderLineItemFilter | null)[];

  OR?: (ShopifyOrderLineItemFilter | null)[];

  NOT?: (ShopifyOrderLineItemFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  attributedStaffs?: JSONFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  currentQuantity?: FloatFilter | null;

  discountAllocations?: JSONFilter | null;

  fulfillableQuantity?: FloatFilter | null;

  fulfillmentService?: StringFilter | null;

  fulfillmentStatus?: StringFilter | null;

  giftCard?: BooleanFilter | null;

  grams?: FloatFilter | null;

  name?: StringFilter | null;

  price?: StringFilter | null;

  priceSet?: JSONFilter | null;

  productExists?: BooleanFilter | null;

  properties?: JSONFilter | null;

  quantity?: FloatFilter | null;

  requiresShipping?: BooleanFilter | null;

  sku?: StringFilter | null;

  taxLines?: JSONFilter | null;

  taxable?: BooleanFilter | null;

  title?: StringFilter | null;

  totalDiscount?: StringFilter | null;

  totalDiscountSet?: JSONFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  variantInventoryManagement?: StringFilter | null;

  variantTitle?: StringFilter | null;

  vendor?: StringFilter | null;

  order?: IDFilter | null;

  orderId?: IDFilter | null;

  product?: IDFilter | null;

  productId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyDisputeSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the amount field. Defaults to ascending (smallest value first). */
  amount?: SortOrder | null;

  /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
  currency?: SortOrder | null;

  /** Sort the results by the evidenceDueBy field. Defaults to ascending (smallest value first). */
  evidenceDueBy?: SortOrder | null;

  /** Sort the results by the evidenceSentOn field. Defaults to ascending (smallest value first). */
  evidenceSentOn?: SortOrder | null;

  /** Sort the results by the finalizedOn field. Defaults to ascending (smallest value first). */
  finalizedOn?: SortOrder | null;

  /** Sort the results by the networkReasonCode field. Defaults to ascending (smallest value first). */
  networkReasonCode?: SortOrder | null;

  /** Sort the results by the reason field. Defaults to ascending (smallest value first). */
  reason?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the type field. Defaults to ascending (smallest value first). */
  type?: SortOrder | null;
};



export type ShopifyDisputeFilter = {

  AND?: (ShopifyDisputeFilter | null)[];

  OR?: (ShopifyDisputeFilter | null)[];

  NOT?: (ShopifyDisputeFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  amount?: StringFilter | null;

  currency?: StringFilter | null;

  evidenceDueBy?: DateTimeFilter | null;

  evidenceSentOn?: DateTimeFilter | null;

  finalizedOn?: DateTimeFilter | null;

  networkReasonCode?: StringFilter | null;

  reason?: StringFilter | null;

  status?: StringFilter | null;

  type?: StringFilter | null;

  order?: IDFilter | null;

  orderId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyOrderSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the additionalFees field. Defaults to ascending (smallest value first). */
  additionalFees?: SortOrder | null;

  /** Sort the results by the cancellation field. Defaults to ascending (smallest value first). */
  cancellation?: SortOrder | null;

  /** Sort the results by the shopifyProtect field. Defaults to ascending (smallest value first). */
  shopifyProtect?: SortOrder | null;

  /** Sort the results by the purchasingEntity field. Defaults to ascending (smallest value first). */
  purchasingEntity?: SortOrder | null;

  /** Sort the results by the billingAddress field. Defaults to ascending (smallest value first). */
  billingAddress?: SortOrder | null;

  /** Sort the results by the browserIp field. Defaults to ascending (smallest value first). */
  browserIp?: SortOrder | null;

  /** Sort the results by the buyerAcceptsMarketing field. Defaults to ascending (smallest value first). */
  buyerAcceptsMarketing?: SortOrder | null;

  /** Sort the results by the cancelReason field. Defaults to ascending (smallest value first). */
  cancelReason?: SortOrder | null;

  /** Sort the results by the cancelledAt field. Defaults to ascending (smallest value first). */
  cancelledAt?: SortOrder | null;

  /** Sort the results by the cartToken field. Defaults to ascending (smallest value first). */
  cartToken?: SortOrder | null;

  /** Sort the results by the checkoutToken field. Defaults to ascending (smallest value first). */
  checkoutToken?: SortOrder | null;

  /** Sort the results by the clientDetails field. Defaults to ascending (smallest value first). */
  clientDetails?: SortOrder | null;

  /** Sort the results by the closedAt field. Defaults to ascending (smallest value first). */
  closedAt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
  currency?: SortOrder | null;

  /** Sort the results by the currentSubtotalPrice field. Defaults to ascending (smallest value first). */
  currentSubtotalPrice?: SortOrder | null;

  /** Sort the results by the currentSubtotalPriceSet field. Defaults to ascending (smallest value first). */
  currentSubtotalPriceSet?: SortOrder | null;

  /** Sort the results by the currentTotalAdditionalFeesSet field. Defaults to ascending (smallest value first). */
  currentTotalAdditionalFeesSet?: SortOrder | null;

  /** Sort the results by the currentTotalDiscounts field. Defaults to ascending (smallest value first). */
  currentTotalDiscounts?: SortOrder | null;

  /** Sort the results by the currentTotalDiscountsSet field. Defaults to ascending (smallest value first). */
  currentTotalDiscountsSet?: SortOrder | null;

  /** Sort the results by the currentTotalDutiesSet field. Defaults to ascending (smallest value first). */
  currentTotalDutiesSet?: SortOrder | null;

  /** Sort the results by the currentTotalPrice field. Defaults to ascending (smallest value first). */
  currentTotalPrice?: SortOrder | null;

  /** Sort the results by the currentTotalPriceSet field. Defaults to ascending (smallest value first). */
  currentTotalPriceSet?: SortOrder | null;

  /** Sort the results by the currentTotalTax field. Defaults to ascending (smallest value first). */
  currentTotalTax?: SortOrder | null;

  /** Sort the results by the currentTotalTaxSet field. Defaults to ascending (smallest value first). */
  currentTotalTaxSet?: SortOrder | null;

  /** Sort the results by the customerLocale field. Defaults to ascending (smallest value first). */
  customerLocale?: SortOrder | null;

  /** Sort the results by the discountApplications field. Defaults to ascending (smallest value first). */
  discountApplications?: SortOrder | null;

  /** Sort the results by the discountCodes field. Defaults to ascending (smallest value first). */
  discountCodes?: SortOrder | null;

  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: SortOrder | null;

  /** Sort the results by the estimatedTaxes field. Defaults to ascending (smallest value first). */
  estimatedTaxes?: SortOrder | null;

  /** Sort the results by the financialStatus field. Defaults to ascending (smallest value first). */
  financialStatus?: SortOrder | null;

  /** Sort the results by the fulfillmentStatus field. Defaults to ascending (smallest value first). */
  fulfillmentStatus?: SortOrder | null;

  /** Sort the results by the landingSite field. Defaults to ascending (smallest value first). */
  landingSite?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the note field. Defaults to ascending (smallest value first). */
  note?: SortOrder | null;

  /** Sort the results by the noteAttributes field. Defaults to ascending (smallest value first). */
  noteAttributes?: SortOrder | null;

  /** Sort the results by the number field. Defaults to ascending (smallest value first). */
  number?: SortOrder | null;

  /** Sort the results by the orderNumber field. Defaults to ascending (smallest value first). */
  orderNumber?: SortOrder | null;

  /** Sort the results by the orderStatusUrl field. Defaults to ascending (smallest value first). */
  orderStatusUrl?: SortOrder | null;

  /** Sort the results by the originalTotalAdditionalFeesSet field. Defaults to ascending (smallest value first). */
  originalTotalAdditionalFeesSet?: SortOrder | null;

  /** Sort the results by the originalTotalDutiesSet field. Defaults to ascending (smallest value first). */
  originalTotalDutiesSet?: SortOrder | null;

  /** Sort the results by the paymentGatewayNames field. Defaults to ascending (smallest value first). */
  paymentGatewayNames?: SortOrder | null;

  /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
  phone?: SortOrder | null;

  /** Sort the results by the poNumber field. Defaults to ascending (smallest value first). */
  poNumber?: SortOrder | null;

  /** Sort the results by the presentmentCurrency field. Defaults to ascending (smallest value first). */
  presentmentCurrency?: SortOrder | null;

  /** Sort the results by the processedAt field. Defaults to ascending (smallest value first). */
  processedAt?: SortOrder | null;

  /** Sort the results by the referringSite field. Defaults to ascending (smallest value first). */
  referringSite?: SortOrder | null;

  /** Sort the results by the shippingAddress field. Defaults to ascending (smallest value first). */
  shippingAddress?: SortOrder | null;

  /** Sort the results by the sourceIdentifier field. Defaults to ascending (smallest value first). */
  sourceIdentifier?: SortOrder | null;

  /** Sort the results by the sourceName field. Defaults to ascending (smallest value first). */
  sourceName?: SortOrder | null;

  /** Sort the results by the sourceUrl field. Defaults to ascending (smallest value first). */
  sourceUrl?: SortOrder | null;

  /** Sort the results by the subtotalPrice field. Defaults to ascending (smallest value first). */
  subtotalPrice?: SortOrder | null;

  /** Sort the results by the subtotalPriceSet field. Defaults to ascending (smallest value first). */
  subtotalPriceSet?: SortOrder | null;

  /** Sort the results by the tags field. Defaults to ascending (smallest value first). */
  tags?: SortOrder | null;

  /** Sort the results by the taxExempt field. Defaults to ascending (smallest value first). */
  taxExempt?: SortOrder | null;

  /** Sort the results by the taxLines field. Defaults to ascending (smallest value first). */
  taxLines?: SortOrder | null;

  /** Sort the results by the taxesIncluded field. Defaults to ascending (smallest value first). */
  taxesIncluded?: SortOrder | null;

  /** Sort the results by the test field. Defaults to ascending (smallest value first). */
  test?: SortOrder | null;

  /** Sort the results by the token field. Defaults to ascending (smallest value first). */
  token?: SortOrder | null;

  /** Sort the results by the totalDiscounts field. Defaults to ascending (smallest value first). */
  totalDiscounts?: SortOrder | null;

  /** Sort the results by the totalDiscountsSet field. Defaults to ascending (smallest value first). */
  totalDiscountsSet?: SortOrder | null;

  /** Sort the results by the totalLineItemsPrice field. Defaults to ascending (smallest value first). */
  totalLineItemsPrice?: SortOrder | null;

  /** Sort the results by the totalLineItemsPriceSet field. Defaults to ascending (smallest value first). */
  totalLineItemsPriceSet?: SortOrder | null;

  /** Sort the results by the totalOutstanding field. Defaults to ascending (smallest value first). */
  totalOutstanding?: SortOrder | null;

  /** Sort the results by the totalPrice field. Defaults to ascending (smallest value first). */
  totalPrice?: SortOrder | null;

  /** Sort the results by the totalPriceSet field. Defaults to ascending (smallest value first). */
  totalPriceSet?: SortOrder | null;

  /** Sort the results by the totalShippingPriceSet field. Defaults to ascending (smallest value first). */
  totalShippingPriceSet?: SortOrder | null;

  /** Sort the results by the totalTax field. Defaults to ascending (smallest value first). */
  totalTax?: SortOrder | null;

  /** Sort the results by the totalTaxSet field. Defaults to ascending (smallest value first). */
  totalTaxSet?: SortOrder | null;

  /** Sort the results by the totalTipReceived field. Defaults to ascending (smallest value first). */
  totalTipReceived?: SortOrder | null;

  /** Sort the results by the totalWeight field. Defaults to ascending (smallest value first). */
  totalWeight?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;
};



export type ShopifyOrderFilter = {

  AND?: (ShopifyOrderFilter | null)[];

  OR?: (ShopifyOrderFilter | null)[];

  NOT?: (ShopifyOrderFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  additionalFees?: JSONFilter | null;

  cancellation?: JSONFilter | null;

  shopifyProtect?: JSONFilter | null;

  purchasingEntity?: JSONFilter | null;

  billingAddress?: JSONFilter | null;

  browserIp?: StringFilter | null;

  buyerAcceptsMarketing?: BooleanFilter | null;

  cancelReason?: StringFilter | null;

  cancelledAt?: DateTimeFilter | null;

  cartToken?: StringFilter | null;

  checkoutToken?: StringFilter | null;

  clientDetails?: JSONFilter | null;

  closedAt?: DateTimeFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  currency?: StringFilter | null;

  currentSubtotalPrice?: StringFilter | null;

  currentSubtotalPriceSet?: JSONFilter | null;

  currentTotalAdditionalFeesSet?: JSONFilter | null;

  currentTotalDiscounts?: StringFilter | null;

  currentTotalDiscountsSet?: JSONFilter | null;

  currentTotalDutiesSet?: JSONFilter | null;

  currentTotalPrice?: StringFilter | null;

  currentTotalPriceSet?: JSONFilter | null;

  currentTotalTax?: StringFilter | null;

  currentTotalTaxSet?: JSONFilter | null;

  customerLocale?: StringFilter | null;

  discountApplications?: JSONFilter | null;

  discountCodes?: JSONFilter | null;

  email?: StringFilter | null;

  estimatedTaxes?: BooleanFilter | null;

  financialStatus?: StringFilter | null;

  fulfillmentStatus?: StringFilter | null;

  landingSite?: StringFilter | null;

  name?: StringFilter | null;

  note?: StringFilter | null;

  noteAttributes?: JSONFilter | null;

  number?: FloatFilter | null;

  orderNumber?: FloatFilter | null;

  orderStatusUrl?: StringFilter | null;

  originalTotalAdditionalFeesSet?: JSONFilter | null;

  originalTotalDutiesSet?: JSONFilter | null;

  paymentGatewayNames?: JSONFilter | null;

  phone?: StringFilter | null;

  poNumber?: StringFilter | null;

  presentmentCurrency?: StringFilter | null;

  processedAt?: DateTimeFilter | null;

  referringSite?: StringFilter | null;

  shippingAddress?: JSONFilter | null;

  sourceIdentifier?: StringFilter | null;

  sourceName?: StringFilter | null;

  sourceUrl?: StringFilter | null;

  subtotalPrice?: StringFilter | null;

  subtotalPriceSet?: JSONFilter | null;

  tags?: JSONFilter | null;

  taxExempt?: BooleanFilter | null;

  taxLines?: JSONFilter | null;

  taxesIncluded?: BooleanFilter | null;

  test?: BooleanFilter | null;

  token?: StringFilter | null;

  totalDiscounts?: StringFilter | null;

  totalDiscountsSet?: JSONFilter | null;

  totalLineItemsPrice?: StringFilter | null;

  totalLineItemsPriceSet?: JSONFilter | null;

  totalOutstanding?: StringFilter | null;

  totalPrice?: StringFilter | null;

  totalPriceSet?: JSONFilter | null;

  totalShippingPriceSet?: JSONFilter | null;

  totalTax?: StringFilter | null;

  totalTaxSet?: JSONFilter | null;

  totalTipReceived?: StringFilter | null;

  totalWeight?: FloatFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  purchasingCompany?: IDFilter | null;

  purchasingCompanyId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyTenderTransactionSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the amount field. Defaults to ascending (smallest value first). */
  amount?: SortOrder | null;

  /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
  currency?: SortOrder | null;

  /** Sort the results by the paymentDetails field. Defaults to ascending (smallest value first). */
  paymentDetails?: SortOrder | null;

  /** Sort the results by the paymentMethod field. Defaults to ascending (smallest value first). */
  paymentMethod?: SortOrder | null;

  /** Sort the results by the processedAt field. Defaults to ascending (smallest value first). */
  processedAt?: SortOrder | null;

  /** Sort the results by the remoteReference field. Defaults to ascending (smallest value first). */
  remoteReference?: SortOrder | null;

  /** Sort the results by the test field. Defaults to ascending (smallest value first). */
  test?: SortOrder | null;
};



export type ShopifyTenderTransactionFilter = {

  AND?: (ShopifyTenderTransactionFilter | null)[];

  OR?: (ShopifyTenderTransactionFilter | null)[];

  NOT?: (ShopifyTenderTransactionFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  amount?: StringFilter | null;

  currency?: StringFilter | null;

  paymentDetails?: JSONFilter | null;

  paymentMethod?: StringFilter | null;

  processedAt?: DateTimeFilter | null;

  remoteReference?: StringFilter | null;

  test?: BooleanFilter | null;

  order?: IDFilter | null;

  orderId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyShippingLineSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the carrierIdentifier field. Defaults to ascending (smallest value first). */
  carrierIdentifier?: SortOrder | null;

  /** Sort the results by the code field. Defaults to ascending (smallest value first). */
  code?: SortOrder | null;

  /** Sort the results by the discountAllocations field. Defaults to ascending (smallest value first). */
  discountAllocations?: SortOrder | null;

  /** Sort the results by the discountedPrice field. Defaults to ascending (smallest value first). */
  discountedPrice?: SortOrder | null;

  /** Sort the results by the discountedPriceSet field. Defaults to ascending (smallest value first). */
  discountedPriceSet?: SortOrder | null;

  /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
  phone?: SortOrder | null;

  /** Sort the results by the price field. Defaults to ascending (smallest value first). */
  price?: SortOrder | null;

  /** Sort the results by the priceSet field. Defaults to ascending (smallest value first). */
  priceSet?: SortOrder | null;

  /** Sort the results by the source field. Defaults to ascending (smallest value first). */
  source?: SortOrder | null;

  /** Sort the results by the taxLines field. Defaults to ascending (smallest value first). */
  taxLines?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;
};



export type ShopifyShippingLineFilter = {

  AND?: (ShopifyShippingLineFilter | null)[];

  OR?: (ShopifyShippingLineFilter | null)[];

  NOT?: (ShopifyShippingLineFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  carrierIdentifier?: StringFilter | null;

  code?: StringFilter | null;

  discountAllocations?: JSONFilter | null;

  discountedPrice?: StringFilter | null;

  discountedPriceSet?: JSONFilter | null;

  phone?: StringFilter | null;

  price?: StringFilter | null;

  priceSet?: JSONFilter | null;

  source?: StringFilter | null;

  taxLines?: JSONFilter | null;

  title?: StringFilter | null;

  requestedFulfillmentService?: IDFilter | null;

  requestedFulfillmentServiceId?: IDFilter | null;

  order?: IDFilter | null;

  orderId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyCollectionSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the body field. Defaults to ascending (smallest value first). */
  body?: SortOrder | null;

  /** Sort the results by the disjunctive field. Defaults to ascending (smallest value first). */
  disjunctive?: SortOrder | null;

  /** Sort the results by the handle field. Defaults to ascending (smallest value first). */
  handle?: SortOrder | null;

  /** Sort the results by the image field. Defaults to ascending (smallest value first). */
  image?: SortOrder | null;

  /** Sort the results by the publishedAt field. Defaults to ascending (smallest value first). */
  publishedAt?: SortOrder | null;

  /** Sort the results by the publishedScope field. Defaults to ascending (smallest value first). */
  publishedScope?: SortOrder | null;

  /** Sort the results by the rules field. Defaults to ascending (smallest value first). */
  rules?: SortOrder | null;

  /** Sort the results by the sortOrder field. Defaults to ascending (smallest value first). */
  sortOrder?: SortOrder | null;

  /** Sort the results by the templateSuffix field. Defaults to ascending (smallest value first). */
  templateSuffix?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the collectionType field. Defaults to ascending (smallest value first). */
  collectionType?: SortOrder | null;

  /** Sort the results by the collected field. Defaults to ascending (smallest value first). */
  collected?: SortOrder | null;
};



export type ShopifyCollectionFilter = {

  AND?: (ShopifyCollectionFilter | null)[];

  OR?: (ShopifyCollectionFilter | null)[];

  NOT?: (ShopifyCollectionFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  body?: StringFilter | null;

  disjunctive?: BooleanFilter | null;

  handle?: StringFilter | null;

  image?: JSONFilter | null;

  publishedAt?: DateTimeFilter | null;

  publishedScope?: StringFilter | null;

  rules?: JSONFilter | null;

  sortOrder?: StringFilter | null;

  templateSuffix?: StringFilter | null;

  title?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;

  collectionType?: SingleEnumFilter | null;

  collected?: DateTimeFilter | null;
};



export type ShopifyMarketRegionSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the code field. Defaults to ascending (smallest value first). */
  code?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;
};



export type ShopifyMarketRegionFilter = {

  AND?: (ShopifyMarketRegionFilter | null)[];

  OR?: (ShopifyMarketRegionFilter | null)[];

  NOT?: (ShopifyMarketRegionFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  code?: StringFilter | null;

  name?: StringFilter | null;

  market?: IDFilter | null;

  marketId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyMarketWebPresenceSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the alternateLocales field. Defaults to ascending (smallest value first). */
  alternateLocales?: SortOrder | null;

  /** Sort the results by the rootUrls field. Defaults to ascending (smallest value first). */
  rootUrls?: SortOrder | null;

  /** Sort the results by the subfolderSuffix field. Defaults to ascending (smallest value first). */
  subfolderSuffix?: SortOrder | null;
};



export type ShopifyMarketWebPresenceFilter = {

  AND?: (ShopifyMarketWebPresenceFilter | null)[];

  OR?: (ShopifyMarketWebPresenceFilter | null)[];

  NOT?: (ShopifyMarketWebPresenceFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  alternateLocales?: JSONFilter | null;

  rootUrls?: JSONFilter | null;

  subfolderSuffix?: StringFilter | null;

  domain?: IDFilter | null;

  domainId?: IDFilter | null;

  market?: IDFilter | null;

  marketId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyMarketSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the currencySettings field. Defaults to ascending (smallest value first). */
  currencySettings?: SortOrder | null;

  /** Sort the results by the enabled field. Defaults to ascending (smallest value first). */
  enabled?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the primary field. Defaults to ascending (smallest value first). */
  primary?: SortOrder | null;
};



export type ShopifyMarketFilter = {

  AND?: (ShopifyMarketFilter | null)[];

  OR?: (ShopifyMarketFilter | null)[];

  NOT?: (ShopifyMarketFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  currencySettings?: JSONFilter | null;

  enabled?: BooleanFilter | null;

  name?: StringFilter | null;

  primary?: BooleanFilter | null;

  marketWebPresence?: IDFilter | null;

  marketWebPresenceId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyGdprRequestSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the payload field. Defaults to ascending (smallest value first). */
  payload?: SortOrder | null;

  /** Sort the results by the topic field. Defaults to ascending (smallest value first). */
  topic?: SortOrder | null;
};



export type ShopifyGdprRequestFilter = {

  AND?: (ShopifyGdprRequestFilter | null)[];

  OR?: (ShopifyGdprRequestFilter | null)[];

  NOT?: (ShopifyGdprRequestFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  payload?: JSONFilter | null;

  topic?: SingleEnumFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyCompanySort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the contactCount field. Defaults to ascending (smallest value first). */
  contactCount?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the customerSince field. Defaults to ascending (smallest value first). */
  customerSince?: SortOrder | null;

  /** Sort the results by the externalId field. Defaults to ascending (smallest value first). */
  externalId?: SortOrder | null;

  /** Sort the results by the lifetimeDuration field. Defaults to ascending (smallest value first). */
  lifetimeDuration?: SortOrder | null;

  /** Sort the results by the locationCount field. Defaults to ascending (smallest value first). */
  locationCount?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the note field. Defaults to ascending (smallest value first). */
  note?: SortOrder | null;

  /** Sort the results by the orderCount field. Defaults to ascending (smallest value first). */
  orderCount?: SortOrder | null;

  /** Sort the results by the totalSpent field. Defaults to ascending (smallest value first). */
  totalSpent?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;
};



export type ShopifyCompanyFilter = {

  AND?: (ShopifyCompanyFilter | null)[];

  OR?: (ShopifyCompanyFilter | null)[];

  NOT?: (ShopifyCompanyFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  contactCount?: IntFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  customerSince?: DateTimeFilter | null;

  externalId?: StringFilter | null;

  lifetimeDuration?: StringFilter | null;

  locationCount?: FloatFilter | null;

  name?: StringFilter | null;

  note?: StringFilter | null;

  orderCount?: IntFilter | null;

  totalSpent?: JSONFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type IntFilter = {

  equals?: (Scalars['Int'] | null) | null;

  notEquals?: (Scalars['Int'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['Int'] | null) | null)[];

  notIn?: ((Scalars['Int'] | null) | null)[];

  lessThan?: (Scalars['Int'] | null) | null;

  lessThanOrEqual?: (Scalars['Int'] | null) | null;

  greaterThan?: (Scalars['Int'] | null) | null;

  greaterThanOrEqual?: (Scalars['Int'] | null) | null;
};



export type ShopifyCollectSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the position field. Defaults to ascending (smallest value first). */
  position?: SortOrder | null;

  /** Sort the results by the sortValue field. Defaults to ascending (smallest value first). */
  sortValue?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;
};



export type ShopifyCollectFilter = {

  AND?: (ShopifyCollectFilter | null)[];

  OR?: (ShopifyCollectFilter | null)[];

  NOT?: (ShopifyCollectFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  position?: FloatFilter | null;

  sortValue?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  customCollection?: IDFilter | null;

  customCollectionId?: IDFilter | null;

  product?: IDFilter | null;

  productId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifySyncSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: SortOrder | null;

  /** Sort the results by the domain field. Defaults to ascending (smallest value first). */
  domain?: SortOrder | null;

  /** Sort the results by the errorDetails field. Defaults to ascending (smallest value first). */
  errorDetails?: SortOrder | null;

  /** Sort the results by the errorMessage field. Defaults to ascending (smallest value first). */
  errorMessage?: SortOrder | null;

  /** Sort the results by the syncSince field. Defaults to ascending (smallest value first). */
  syncSince?: SortOrder | null;

  /** Sort the results by the force field. Defaults to ascending (smallest value first). */
  force?: SortOrder | null;

  /** Sort the results by the models field. Defaults to ascending (smallest value first). */
  models?: SortOrder | null;
};



export type ShopifySyncFilter = {

  AND?: (ShopifySyncFilter | null)[];

  OR?: (ShopifySyncFilter | null)[];

  NOT?: (ShopifySyncFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  state?: StateFilter | null;

  domain?: StringFilter | null;

  errorDetails?: StringFilter | null;

  errorMessage?: StringFilter | null;

  syncSince?: DateTimeFilter | null;

  force?: BooleanFilter | null;

  models?: JSONFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type StateFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  inState?: (Scalars['String'] | null) | null;
};



export type ShopifyDiscountCodeSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the code field. Defaults to ascending (smallest value first). */
  code?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the usageCount field. Defaults to ascending (smallest value first). */
  usageCount?: SortOrder | null;
};



export type ShopifyDiscountCodeFilter = {

  AND?: (ShopifyDiscountCodeFilter | null)[];

  OR?: (ShopifyDiscountCodeFilter | null)[];

  NOT?: (ShopifyDiscountCodeFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  code?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  usageCount?: FloatFilter | null;

  priceRule?: IDFilter | null;

  priceRuleId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyPriceRuleSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the allocationLimit field. Defaults to ascending (smallest value first). */
  allocationLimit?: SortOrder | null;

  /** Sort the results by the allocationMethod field. Defaults to ascending (smallest value first). */
  allocationMethod?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the customerSegmentPrerequisiteIds field. Defaults to ascending (smallest value first). */
  customerSegmentPrerequisiteIds?: SortOrder | null;

  /** Sort the results by the customerSelection field. Defaults to ascending (smallest value first). */
  customerSelection?: SortOrder | null;

  /** Sort the results by the endsAt field. Defaults to ascending (smallest value first). */
  endsAt?: SortOrder | null;

  /** Sort the results by the entitledCollectionIds field. Defaults to ascending (smallest value first). */
  entitledCollectionIds?: SortOrder | null;

  /** Sort the results by the entitledCountryIds field. Defaults to ascending (smallest value first). */
  entitledCountryIds?: SortOrder | null;

  /** Sort the results by the entitledProductIds field. Defaults to ascending (smallest value first). */
  entitledProductIds?: SortOrder | null;

  /** Sort the results by the entitledVariantIds field. Defaults to ascending (smallest value first). */
  entitledVariantIds?: SortOrder | null;

  /** Sort the results by the oncePerCustomer field. Defaults to ascending (smallest value first). */
  oncePerCustomer?: SortOrder | null;

  /** Sort the results by the prerequisiteCollectionIds field. Defaults to ascending (smallest value first). */
  prerequisiteCollectionIds?: SortOrder | null;

  /** Sort the results by the prerequisiteCustomerIds field. Defaults to ascending (smallest value first). */
  prerequisiteCustomerIds?: SortOrder | null;

  /** Sort the results by the prerequisiteProductIds field. Defaults to ascending (smallest value first). */
  prerequisiteProductIds?: SortOrder | null;

  /** Sort the results by the prerequisiteQuantityRange field. Defaults to ascending (smallest value first). */
  prerequisiteQuantityRange?: SortOrder | null;

  /** Sort the results by the prerequisiteShippingPriceRange field. Defaults to ascending (smallest value first). */
  prerequisiteShippingPriceRange?: SortOrder | null;

  /** Sort the results by the prerequisiteSubtotalRange field. Defaults to ascending (smallest value first). */
  prerequisiteSubtotalRange?: SortOrder | null;

  /** Sort the results by the prerequisiteToEntitlementPurchase field. Defaults to ascending (smallest value first). */
  prerequisiteToEntitlementPurchase?: SortOrder | null;

  /** Sort the results by the prerequisiteToEntitlementQuantityRatio field. Defaults to ascending (smallest value first). */
  prerequisiteToEntitlementQuantityRatio?: SortOrder | null;

  /** Sort the results by the prerequisiteVariants field. Defaults to ascending (smallest value first). */
  prerequisiteVariants?: SortOrder | null;

  /** Sort the results by the startsAt field. Defaults to ascending (smallest value first). */
  startsAt?: SortOrder | null;

  /** Sort the results by the targetSelection field. Defaults to ascending (smallest value first). */
  targetSelection?: SortOrder | null;

  /** Sort the results by the targetType field. Defaults to ascending (smallest value first). */
  targetType?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the usageLimit field. Defaults to ascending (smallest value first). */
  usageLimit?: SortOrder | null;

  /** Sort the results by the value field. Defaults to ascending (smallest value first). */
  value?: SortOrder | null;

  /** Sort the results by the valueType field. Defaults to ascending (smallest value first). */
  valueType?: SortOrder | null;
};



export type ShopifyPriceRuleFilter = {

  AND?: (ShopifyPriceRuleFilter | null)[];

  OR?: (ShopifyPriceRuleFilter | null)[];

  NOT?: (ShopifyPriceRuleFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  allocationLimit?: FloatFilter | null;

  allocationMethod?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  customerSegmentPrerequisiteIds?: JSONFilter | null;

  customerSelection?: StringFilter | null;

  endsAt?: DateTimeFilter | null;

  entitledCollectionIds?: JSONFilter | null;

  entitledCountryIds?: JSONFilter | null;

  entitledProductIds?: JSONFilter | null;

  entitledVariantIds?: JSONFilter | null;

  oncePerCustomer?: BooleanFilter | null;

  prerequisiteCollectionIds?: JSONFilter | null;

  prerequisiteCustomerIds?: JSONFilter | null;

  prerequisiteProductIds?: JSONFilter | null;

  prerequisiteQuantityRange?: JSONFilter | null;

  prerequisiteShippingPriceRange?: JSONFilter | null;

  prerequisiteSubtotalRange?: JSONFilter | null;

  prerequisiteToEntitlementPurchase?: JSONFilter | null;

  prerequisiteToEntitlementQuantityRatio?: JSONFilter | null;

  prerequisiteVariants?: JSONFilter | null;

  startsAt?: DateTimeFilter | null;

  targetSelection?: StringFilter | null;

  targetType?: StringFilter | null;

  title?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  usageLimit?: FloatFilter | null;

  value?: FloatFilter | null;

  valueType?: StringFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyAppInstallationSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the accessScopes field. Defaults to ascending (smallest value first). */
  accessScopes?: SortOrder | null;

  /** Sort the results by the launchUrl field. Defaults to ascending (smallest value first). */
  launchUrl?: SortOrder | null;

  /** Sort the results by the uninstallUrl field. Defaults to ascending (smallest value first). */
  uninstallUrl?: SortOrder | null;
};



export type ShopifyAppInstallationFilter = {

  AND?: (ShopifyAppInstallationFilter | null)[];

  OR?: (ShopifyAppInstallationFilter | null)[];

  NOT?: (ShopifyAppInstallationFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  accessScopes?: JSONFilter | null;

  launchUrl?: StringFilter | null;

  uninstallUrl?: StringFilter | null;

  app?: IDFilter | null;

  appId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyDiscountSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the appDiscountType field. Defaults to ascending (smallest value first). */
  appDiscountType?: SortOrder | null;

  /** Sort the results by the appliesOnOneTimePurchase field. Defaults to ascending (smallest value first). */
  appliesOnOneTimePurchase?: SortOrder | null;

  /** Sort the results by the appliesOnSubscription field. Defaults to ascending (smallest value first). */
  appliesOnSubscription?: SortOrder | null;

  /** Sort the results by the appliesOncePerCustomer field. Defaults to ascending (smallest value first). */
  appliesOncePerCustomer?: SortOrder | null;

  /** Sort the results by the asyncUsageCount field. Defaults to ascending (smallest value first). */
  asyncUsageCount?: SortOrder | null;

  /** Sort the results by the codeCount field. Defaults to ascending (smallest value first). */
  codeCount?: SortOrder | null;

  /** Sort the results by the combinesWith field. Defaults to ascending (smallest value first). */
  combinesWith?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the destinationSelection field. Defaults to ascending (smallest value first). */
  destinationSelection?: SortOrder | null;

  /** Sort the results by the discountClass field. Defaults to ascending (smallest value first). */
  discountClass?: SortOrder | null;

  /** Sort the results by the discountId field. Defaults to ascending (smallest value first). */
  discountId?: SortOrder | null;

  /** Sort the results by the endsAt field. Defaults to ascending (smallest value first). */
  endsAt?: SortOrder | null;

  /** Sort the results by the errorHistory field. Defaults to ascending (smallest value first). */
  errorHistory?: SortOrder | null;

  /** Sort the results by the hasTimelineComment field. Defaults to ascending (smallest value first). */
  hasTimelineComment?: SortOrder | null;

  /** Sort the results by the maximumShippingPrice field. Defaults to ascending (smallest value first). */
  maximumShippingPrice?: SortOrder | null;

  /** Sort the results by the minimumRequirement field. Defaults to ascending (smallest value first). */
  minimumRequirement?: SortOrder | null;

  /** Sort the results by the recurringCycleLimit field. Defaults to ascending (smallest value first). */
  recurringCycleLimit?: SortOrder | null;

  /** Sort the results by the shareableUrls field. Defaults to ascending (smallest value first). */
  shareableUrls?: SortOrder | null;

  /** Sort the results by the shortSummary field. Defaults to ascending (smallest value first). */
  shortSummary?: SortOrder | null;

  /** Sort the results by the startsAt field. Defaults to ascending (smallest value first). */
  startsAt?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the summary field. Defaults to ascending (smallest value first). */
  summary?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the totalSales field. Defaults to ascending (smallest value first). */
  totalSales?: SortOrder | null;

  /** Sort the results by the usageLimit field. Defaults to ascending (smallest value first). */
  usageLimit?: SortOrder | null;

  /** Sort the results by the usesPerOrderLimit field. Defaults to ascending (smallest value first). */
  usesPerOrderLimit?: SortOrder | null;
};



export type ShopifyDiscountFilter = {

  AND?: (ShopifyDiscountFilter | null)[];

  OR?: (ShopifyDiscountFilter | null)[];

  NOT?: (ShopifyDiscountFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  appDiscountType?: JSONFilter | null;

  appliesOnOneTimePurchase?: BooleanFilter | null;

  appliesOnSubscription?: BooleanFilter | null;

  appliesOncePerCustomer?: BooleanFilter | null;

  asyncUsageCount?: FloatFilter | null;

  codeCount?: IntFilter | null;

  combinesWith?: JSONFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  destinationSelection?: JSONFilter | null;

  discountClass?: SingleEnumFilter | null;

  discountId?: StringFilter | null;

  endsAt?: DateTimeFilter | null;

  errorHistory?: JSONFilter | null;

  hasTimelineComment?: BooleanFilter | null;

  maximumShippingPrice?: JSONFilter | null;

  minimumRequirement?: JSONFilter | null;

  recurringCycleLimit?: IntFilter | null;

  shareableUrls?: JSONFilter | null;

  shortSummary?: StringFilter | null;

  startsAt?: DateTimeFilter | null;

  status?: SingleEnumFilter | null;

  summary?: StringFilter | null;

  title?: StringFilter | null;

  totalSales?: JSONFilter | null;

  usageLimit?: IntFilter | null;

  usesPerOrderLimit?: IntFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyFulfillmentServiceSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the callbackUrl field. Defaults to ascending (smallest value first). */
  callbackUrl?: SortOrder | null;

  /** Sort the results by the format field. Defaults to ascending (smallest value first). */
  format?: SortOrder | null;

  /** Sort the results by the fulfillmentOrdersOptIn field. Defaults to ascending (smallest value first). */
  fulfillmentOrdersOptIn?: SortOrder | null;

  /** Sort the results by the handle field. Defaults to ascending (smallest value first). */
  handle?: SortOrder | null;

  /** Sort the results by the inventoryManagement field. Defaults to ascending (smallest value first). */
  inventoryManagement?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the permitsSkuSharing field. Defaults to ascending (smallest value first). */
  permitsSkuSharing?: SortOrder | null;

  /** Sort the results by the requiresShippingMethod field. Defaults to ascending (smallest value first). */
  requiresShippingMethod?: SortOrder | null;

  /** Sort the results by the trackingSupport field. Defaults to ascending (smallest value first). */
  trackingSupport?: SortOrder | null;
};



export type ShopifyFulfillmentServiceFilter = {

  AND?: (ShopifyFulfillmentServiceFilter | null)[];

  OR?: (ShopifyFulfillmentServiceFilter | null)[];

  NOT?: (ShopifyFulfillmentServiceFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  callbackUrl?: StringFilter | null;

  format?: StringFilter | null;

  fulfillmentOrdersOptIn?: BooleanFilter | null;

  handle?: StringFilter | null;

  inventoryManagement?: BooleanFilter | null;

  name?: StringFilter | null;

  permitsSkuSharing?: BooleanFilter | null;

  requiresShippingMethod?: BooleanFilter | null;

  trackingSupport?: BooleanFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyScriptTagSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the cache field. Defaults to ascending (smallest value first). */
  cache?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the displayScope field. Defaults to ascending (smallest value first). */
  displayScope?: SortOrder | null;

  /** Sort the results by the event field. Defaults to ascending (smallest value first). */
  event?: SortOrder | null;

  /** Sort the results by the source field. Defaults to ascending (smallest value first). */
  source?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;
};



export type ShopifyScriptTagFilter = {

  AND?: (ShopifyScriptTagFilter | null)[];

  OR?: (ShopifyScriptTagFilter | null)[];

  NOT?: (ShopifyScriptTagFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  cache?: BooleanFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  displayScope?: StringFilter | null;

  event?: StringFilter | null;

  source?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyPayoutSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the amount field. Defaults to ascending (smallest value first). */
  amount?: SortOrder | null;

  /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
  currency?: SortOrder | null;

  /** Sort the results by the date field. Defaults to ascending (smallest value first). */
  date?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the summary field. Defaults to ascending (smallest value first). */
  summary?: SortOrder | null;
};



export type ShopifyPayoutFilter = {

  AND?: (ShopifyPayoutFilter | null)[];

  OR?: (ShopifyPayoutFilter | null)[];

  NOT?: (ShopifyPayoutFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  amount?: StringFilter | null;

  currency?: StringFilter | null;

  date?: DateFilter | null;

  status?: StringFilter | null;

  summary?: JSONFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type DateFilter = {

  equals?: Date | Scalars['ISO8601DateString'] | null;

  notEquals?: Date | Scalars['ISO8601DateString'] | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: (Date | Scalars['ISO8601DateString'] | null)[];

  notIn?: (Date | Scalars['ISO8601DateString'] | null)[];

  lessThan?: Date | Scalars['ISO8601DateString'] | null;

  lessThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;

  greaterThan?: Date | Scalars['ISO8601DateString'] | null;

  greaterThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;

  before?: Date | Scalars['ISO8601DateString'] | null;

  beforeOrOn?: Date | Scalars['ISO8601DateString'] | null;

  after?: Date | Scalars['ISO8601DateString'] | null;

  afterOrOn?: Date | Scalars['ISO8601DateString'] | null;
};



export type ShopifyBulkOperationSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: SortOrder | null;

  /** Sort the results by the completedAt field. Defaults to ascending (smallest value first). */
  completedAt?: SortOrder | null;

  /** Sort the results by the errorCode field. Defaults to ascending (smallest value first). */
  errorCode?: SortOrder | null;

  /** Sort the results by the fileSize field. Defaults to ascending (smallest value first). */
  fileSize?: SortOrder | null;

  /** Sort the results by the objectCount field. Defaults to ascending (smallest value first). */
  objectCount?: SortOrder | null;

  /** Sort the results by the partialDataUrl field. Defaults to ascending (smallest value first). */
  partialDataUrl?: SortOrder | null;

  /** Sort the results by the query field. Defaults to ascending (smallest value first). */
  query?: SortOrder | null;

  /** Sort the results by the rootObjectCount field. Defaults to ascending (smallest value first). */
  rootObjectCount?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the type field. Defaults to ascending (smallest value first). */
  type?: SortOrder | null;

  /** Sort the results by the url field. Defaults to ascending (smallest value first). */
  url?: SortOrder | null;
};



export type ShopifyBulkOperationFilter = {

  AND?: (ShopifyBulkOperationFilter | null)[];

  OR?: (ShopifyBulkOperationFilter | null)[];

  NOT?: (ShopifyBulkOperationFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  state?: StateFilter | null;

  completedAt?: DateTimeFilter | null;

  errorCode?: SingleEnumFilter | null;

  fileSize?: StringFilter | null;

  objectCount?: StringFilter | null;

  partialDataUrl?: StringFilter | null;

  query?: StringFilter | null;

  rootObjectCount?: StringFilter | null;

  status?: SingleEnumFilter | null;

  type?: SingleEnumFilter | null;

  url?: StringFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyDomainSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the host field. Defaults to ascending (smallest value first). */
  host?: SortOrder | null;

  /** Sort the results by the localization field. Defaults to ascending (smallest value first). */
  localization?: SortOrder | null;

  /** Sort the results by the sslEnabled field. Defaults to ascending (smallest value first). */
  sslEnabled?: SortOrder | null;

  /** Sort the results by the url field. Defaults to ascending (smallest value first). */
  url?: SortOrder | null;
};



export type ShopifyDomainFilter = {

  AND?: (ShopifyDomainFilter | null)[];

  OR?: (ShopifyDomainFilter | null)[];

  NOT?: (ShopifyDomainFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  host?: StringFilter | null;

  localization?: JSONFilter | null;

  sslEnabled?: BooleanFilter | null;

  url?: StringFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyDisputeEvidenceSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the customerEmailAddress field. Defaults to ascending (smallest value first). */
  customerEmailAddress?: SortOrder | null;

  /** Sort the results by the customerFirstName field. Defaults to ascending (smallest value first). */
  customerFirstName?: SortOrder | null;

  /** Sort the results by the customerLastName field. Defaults to ascending (smallest value first). */
  customerLastName?: SortOrder | null;

  /** Sort the results by the productDescription field. Defaults to ascending (smallest value first). */
  productDescription?: SortOrder | null;

  /** Sort the results by the submittedByMerchantOn field. Defaults to ascending (smallest value first). */
  submittedByMerchantOn?: SortOrder | null;

  /** Sort the results by the uncategorizedText field. Defaults to ascending (smallest value first). */
  uncategorizedText?: SortOrder | null;
};



export type ShopifyDisputeEvidenceFilter = {

  AND?: (ShopifyDisputeEvidenceFilter | null)[];

  OR?: (ShopifyDisputeEvidenceFilter | null)[];

  NOT?: (ShopifyDisputeEvidenceFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  customerEmailAddress?: StringFilter | null;

  customerFirstName?: StringFilter | null;

  customerLastName?: StringFilter | null;

  productDescription?: StringFilter | null;

  submittedByMerchantOn?: DateTimeFilter | null;

  uncategorizedText?: StringFilter | null;

  dispute?: IDFilter | null;

  disputeId?: IDFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifyProductSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the compareAtPriceRange field. Defaults to ascending (smallest value first). */
  compareAtPriceRange?: SortOrder | null;

  /** Sort the results by the productCategory field. Defaults to ascending (smallest value first). */
  productCategory?: SortOrder | null;

  /** Sort the results by the body field. Defaults to ascending (smallest value first). */
  body?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the handle field. Defaults to ascending (smallest value first). */
  handle?: SortOrder | null;

  /** Sort the results by the productType field. Defaults to ascending (smallest value first). */
  productType?: SortOrder | null;

  /** Sort the results by the publishedAt field. Defaults to ascending (smallest value first). */
  publishedAt?: SortOrder | null;

  /** Sort the results by the publishedScope field. Defaults to ascending (smallest value first). */
  publishedScope?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the tags field. Defaults to ascending (smallest value first). */
  tags?: SortOrder | null;

  /** Sort the results by the templateSuffix field. Defaults to ascending (smallest value first). */
  templateSuffix?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the vendor field. Defaults to ascending (smallest value first). */
  vendor?: SortOrder | null;
};



export type ShopifyProductFilter = {

  AND?: (ShopifyProductFilter | null)[];

  OR?: (ShopifyProductFilter | null)[];

  NOT?: (ShopifyProductFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  compareAtPriceRange?: JSONFilter | null;

  productCategory?: JSONFilter | null;

  body?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  handle?: StringFilter | null;

  productType?: StringFilter | null;

  publishedAt?: DateTimeFilter | null;

  publishedScope?: StringFilter | null;

  status?: SingleEnumFilter | null;

  tags?: JSONFilter | null;

  templateSuffix?: StringFilter | null;

  title?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  vendor?: StringFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;
};



export type ShopifySmartCollectSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;
};



export type ShopifySmartCollectFilter = {

  AND?: (ShopifySmartCollectFilter | null)[];

  OR?: (ShopifySmartCollectFilter | null)[];

  NOT?: (ShopifySmartCollectFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  shop?: IDFilter | null;

  shopId?: IDFilter | null;

  product?: IDFilter | null;

  productId?: IDFilter | null;

  collection?: IDFilter | null;

  collectionId?: IDFilter | null;
};



export type ShopifyAppSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the apiKey field. Defaults to ascending (smallest value first). */
  apiKey?: SortOrder | null;

  /** Sort the results by the appStoreAppUrl field. Defaults to ascending (smallest value first). */
  appStoreAppUrl?: SortOrder | null;

  /** Sort the results by the appStoreDeveloperUrl field. Defaults to ascending (smallest value first). */
  appStoreDeveloperUrl?: SortOrder | null;

  /** Sort the results by the availableAccessScopes field. Defaults to ascending (smallest value first). */
  availableAccessScopes?: SortOrder | null;

  /** Sort the results by the description field. Defaults to ascending (smallest value first). */
  description?: SortOrder | null;

  /** Sort the results by the developerName field. Defaults to ascending (smallest value first). */
  developerName?: SortOrder | null;

  /** Sort the results by the developerType field. Defaults to ascending (smallest value first). */
  developerType?: SortOrder | null;

  /** Sort the results by the embedded field. Defaults to ascending (smallest value first). */
  embedded?: SortOrder | null;

  /** Sort the results by the failedRequirements field. Defaults to ascending (smallest value first). */
  failedRequirements?: SortOrder | null;

  /** Sort the results by the features field. Defaults to ascending (smallest value first). */
  features?: SortOrder | null;

  /** Sort the results by the feedback field. Defaults to ascending (smallest value first). */
  feedback?: SortOrder | null;

  /** Sort the results by the handle field. Defaults to ascending (smallest value first). */
  handle?: SortOrder | null;

  /** Sort the results by the previouslyInstalled field. Defaults to ascending (smallest value first). */
  previouslyInstalled?: SortOrder | null;

  /** Sort the results by the pricingDetails field. Defaults to ascending (smallest value first). */
  pricingDetails?: SortOrder | null;

  /** Sort the results by the pricingDetailsSummary field. Defaults to ascending (smallest value first). */
  pricingDetailsSummary?: SortOrder | null;

  /** Sort the results by the privacyPolicyUrl field. Defaults to ascending (smallest value first). */
  privacyPolicyUrl?: SortOrder | null;

  /** Sort the results by the publicCategory field. Defaults to ascending (smallest value first). */
  publicCategory?: SortOrder | null;

  /** Sort the results by the published field. Defaults to ascending (smallest value first). */
  published?: SortOrder | null;

  /** Sort the results by the requestedAccessScopes field. Defaults to ascending (smallest value first). */
  requestedAccessScopes?: SortOrder | null;

  /** Sort the results by the shopifyDeveloped field. Defaults to ascending (smallest value first). */
  shopifyDeveloped?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the uninstallMessage field. Defaults to ascending (smallest value first). */
  uninstallMessage?: SortOrder | null;

  /** Sort the results by the webhookApiVersion field. Defaults to ascending (smallest value first). */
  webhookApiVersion?: SortOrder | null;
};



export type ShopifyAppFilter = {

  AND?: (ShopifyAppFilter | null)[];

  OR?: (ShopifyAppFilter | null)[];

  NOT?: (ShopifyAppFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  apiKey?: StringFilter | null;

  appStoreAppUrl?: StringFilter | null;

  appStoreDeveloperUrl?: StringFilter | null;

  availableAccessScopes?: JSONFilter | null;

  description?: StringFilter | null;

  developerName?: StringFilter | null;

  developerType?: SingleEnumFilter | null;

  embedded?: BooleanFilter | null;

  failedRequirements?: JSONFilter | null;

  features?: JSONFilter | null;

  feedback?: JSONFilter | null;

  handle?: StringFilter | null;

  previouslyInstalled?: BooleanFilter | null;

  pricingDetails?: StringFilter | null;

  pricingDetailsSummary?: StringFilter | null;

  privacyPolicyUrl?: StringFilter | null;

  publicCategory?: SingleEnumFilter | null;

  published?: BooleanFilter | null;

  requestedAccessScopes?: JSONFilter | null;

  shopifyDeveloped?: BooleanFilter | null;

  title?: StringFilter | null;

  uninstallMessage?: StringFilter | null;

  webhookApiVersion?: StringFilter | null;
};



export type ShopifyShopSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: SortOrder | null;

  /** Sort the results by the customerAccountsV2 field. Defaults to ascending (smallest value first). */
  customerAccountsV2?: SortOrder | null;

  /** Sort the results by the address1 field. Defaults to ascending (smallest value first). */
  address1?: SortOrder | null;

  /** Sort the results by the address2 field. Defaults to ascending (smallest value first). */
  address2?: SortOrder | null;

  /** Sort the results by the checkoutApiSupported field. Defaults to ascending (smallest value first). */
  checkoutApiSupported?: SortOrder | null;

  /** Sort the results by the city field. Defaults to ascending (smallest value first). */
  city?: SortOrder | null;

  /** Sort the results by the cookieConsentLevel field. Defaults to ascending (smallest value first). */
  cookieConsentLevel?: SortOrder | null;

  /** Sort the results by the country field. Defaults to ascending (smallest value first). */
  country?: SortOrder | null;

  /** Sort the results by the countryCode field. Defaults to ascending (smallest value first). */
  countryCode?: SortOrder | null;

  /** Sort the results by the countryName field. Defaults to ascending (smallest value first). */
  countryName?: SortOrder | null;

  /** Sort the results by the countyTaxes field. Defaults to ascending (smallest value first). */
  countyTaxes?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
  currency?: SortOrder | null;

  /** Sort the results by the customerEmail field. Defaults to ascending (smallest value first). */
  customerEmail?: SortOrder | null;

  /** Sort the results by the disabledWebhooks field. Defaults to ascending (smallest value first). */
  disabledWebhooks?: SortOrder | null;

  /** Sort the results by the domain field. Defaults to ascending (smallest value first). */
  domain?: SortOrder | null;

  /** Sort the results by the eligibleForCardReaderGiveaway field. Defaults to ascending (smallest value first). */
  eligibleForCardReaderGiveaway?: SortOrder | null;

  /** Sort the results by the eligibleForPayments field. Defaults to ascending (smallest value first). */
  eligibleForPayments?: SortOrder | null;

  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: SortOrder | null;

  /** Sort the results by the enabledPresentmentCurrencies field. Defaults to ascending (smallest value first). */
  enabledPresentmentCurrencies?: SortOrder | null;

  /** Sort the results by the finances field. Defaults to ascending (smallest value first). */
  finances?: SortOrder | null;

  /** Sort the results by the forceSsl field. Defaults to ascending (smallest value first). */
  forceSsl?: SortOrder | null;

  /** Sort the results by the googleAppsDomain field. Defaults to ascending (smallest value first). */
  googleAppsDomain?: SortOrder | null;

  /** Sort the results by the googleAppsLoginEnabled field. Defaults to ascending (smallest value first). */
  googleAppsLoginEnabled?: SortOrder | null;

  /** Sort the results by the grantedScopes field. Defaults to ascending (smallest value first). */
  grantedScopes?: SortOrder | null;

  /** Sort the results by the hasDiscounts field. Defaults to ascending (smallest value first). */
  hasDiscounts?: SortOrder | null;

  /** Sort the results by the hasGiftCards field. Defaults to ascending (smallest value first). */
  hasGiftCards?: SortOrder | null;

  /** Sort the results by the hasStorefront field. Defaults to ascending (smallest value first). */
  hasStorefront?: SortOrder | null;

  /** Sort the results by the ianaTimezone field. Defaults to ascending (smallest value first). */
  ianaTimezone?: SortOrder | null;

  /** Sort the results by the installedViaApiKey field. Defaults to ascending (smallest value first). */
  installedViaApiKey?: SortOrder | null;

  /** Sort the results by the latitude field. Defaults to ascending (smallest value first). */
  latitude?: SortOrder | null;

  /** Sort the results by the longitude field. Defaults to ascending (smallest value first). */
  longitude?: SortOrder | null;

  /** Sort the results by the marketingSmsContentEnabledAtCheckout field. Defaults to ascending (smallest value first). */
  marketingSmsContentEnabledAtCheckout?: SortOrder | null;

  /** Sort the results by the moneyFormat field. Defaults to ascending (smallest value first). */
  moneyFormat?: SortOrder | null;

  /** Sort the results by the moneyInEmailsFormat field. Defaults to ascending (smallest value first). */
  moneyInEmailsFormat?: SortOrder | null;

  /** Sort the results by the moneyWithCurrencyFormat field. Defaults to ascending (smallest value first). */
  moneyWithCurrencyFormat?: SortOrder | null;

  /** Sort the results by the moneyWithCurrencyInEmailsFormat field. Defaults to ascending (smallest value first). */
  moneyWithCurrencyInEmailsFormat?: SortOrder | null;

  /** Sort the results by the multiLocationEnabled field. Defaults to ascending (smallest value first). */
  multiLocationEnabled?: SortOrder | null;

  /** Sort the results by the myshopifyDomain field. Defaults to ascending (smallest value first). */
  myshopifyDomain?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the passwordEnabled field. Defaults to ascending (smallest value first). */
  passwordEnabled?: SortOrder | null;

  /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
  phone?: SortOrder | null;

  /** Sort the results by the planDisplayName field. Defaults to ascending (smallest value first). */
  planDisplayName?: SortOrder | null;

  /** Sort the results by the planName field. Defaults to ascending (smallest value first). */
  planName?: SortOrder | null;

  /** Sort the results by the preLaunchEnabled field. Defaults to ascending (smallest value first). */
  preLaunchEnabled?: SortOrder | null;

  /** Sort the results by the primaryLocale field. Defaults to ascending (smallest value first). */
  primaryLocale?: SortOrder | null;

  /** Sort the results by the province field. Defaults to ascending (smallest value first). */
  province?: SortOrder | null;

  /** Sort the results by the provinceCode field. Defaults to ascending (smallest value first). */
  provinceCode?: SortOrder | null;

  /** Sort the results by the registeredWebhooks field. Defaults to ascending (smallest value first). */
  registeredWebhooks?: SortOrder | null;

  /** Sort the results by the requiresExtraPaymentsAgreement field. Defaults to ascending (smallest value first). */
  requiresExtraPaymentsAgreement?: SortOrder | null;

  /** Sort the results by the setupRequired field. Defaults to ascending (smallest value first). */
  setupRequired?: SortOrder | null;

  /** Sort the results by the shopOwner field. Defaults to ascending (smallest value first). */
  shopOwner?: SortOrder | null;

  /** Sort the results by the source field. Defaults to ascending (smallest value first). */
  source?: SortOrder | null;

  /** Sort the results by the taxShipping field. Defaults to ascending (smallest value first). */
  taxShipping?: SortOrder | null;

  /** Sort the results by the taxesIncluded field. Defaults to ascending (smallest value first). */
  taxesIncluded?: SortOrder | null;

  /** Sort the results by the timezone field. Defaults to ascending (smallest value first). */
  timezone?: SortOrder | null;

  /** Sort the results by the transactionalSmsDisabled field. Defaults to ascending (smallest value first). */
  transactionalSmsDisabled?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the weightUnit field. Defaults to ascending (smallest value first). */
  weightUnit?: SortOrder | null;

  /** Sort the results by the zipCode field. Defaults to ascending (smallest value first). */
  zipCode?: SortOrder | null;

  /** Sort the results by the handle field. Defaults to ascending (smallest value first). */
  handle?: SortOrder | null;
};



export type ShopifyShopFilter = {

  AND?: (ShopifyShopFilter | null)[];

  OR?: (ShopifyShopFilter | null)[];

  NOT?: (ShopifyShopFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  state?: StateFilter | null;

  customerAccountsV2?: JSONFilter | null;

  address1?: StringFilter | null;

  address2?: StringFilter | null;

  checkoutApiSupported?: BooleanFilter | null;

  city?: StringFilter | null;

  cookieConsentLevel?: StringFilter | null;

  country?: StringFilter | null;

  countryCode?: StringFilter | null;

  countryName?: StringFilter | null;

  countyTaxes?: JSONFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  currency?: StringFilter | null;

  customerEmail?: StringFilter | null;

  disabledWebhooks?: JSONFilter | null;

  domain?: StringFilter | null;

  eligibleForCardReaderGiveaway?: BooleanFilter | null;

  eligibleForPayments?: BooleanFilter | null;

  email?: StringFilter | null;

  enabledPresentmentCurrencies?: JSONFilter | null;

  finances?: BooleanFilter | null;

  forceSsl?: BooleanFilter | null;

  googleAppsDomain?: StringFilter | null;

  googleAppsLoginEnabled?: BooleanFilter | null;

  grantedScopes?: JSONFilter | null;

  hasDiscounts?: BooleanFilter | null;

  hasGiftCards?: BooleanFilter | null;

  hasStorefront?: BooleanFilter | null;

  ianaTimezone?: StringFilter | null;

  installedViaApiKey?: StringFilter | null;

  latitude?: FloatFilter | null;

  longitude?: FloatFilter | null;

  marketingSmsContentEnabledAtCheckout?: BooleanFilter | null;

  moneyFormat?: StringFilter | null;

  moneyInEmailsFormat?: StringFilter | null;

  moneyWithCurrencyFormat?: StringFilter | null;

  moneyWithCurrencyInEmailsFormat?: StringFilter | null;

  multiLocationEnabled?: BooleanFilter | null;

  myshopifyDomain?: StringFilter | null;

  name?: StringFilter | null;

  passwordEnabled?: BooleanFilter | null;

  phone?: StringFilter | null;

  planDisplayName?: StringFilter | null;

  planName?: StringFilter | null;

  preLaunchEnabled?: BooleanFilter | null;

  primaryLocale?: StringFilter | null;

  province?: StringFilter | null;

  provinceCode?: StringFilter | null;

  registeredWebhooks?: JSONFilter | null;

  requiresExtraPaymentsAgreement?: BooleanFilter | null;

  setupRequired?: BooleanFilter | null;

  shopOwner?: StringFilter | null;

  source?: StringFilter | null;

  taxShipping?: BooleanFilter | null;

  taxesIncluded?: BooleanFilter | null;

  timezone?: StringFilter | null;

  transactionalSmsDisabled?: BooleanFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  weightUnit?: StringFilter | null;

  zipCode?: StringFilter | null;

  handle?: StringFilter | null;
};



export type BulkSignUpUsersInput = {

  email?: (Scalars['String'] | null) | null;

  password?: (Scalars['String'] | null) | null;
};



export type BulkSignInUsersInput = {

  email?: (Scalars['String'] | null) | null;

  password?: (Scalars['String'] | null) | null;
};



export type UpdateUserInput = {

  emailVerified?: (Scalars['Boolean'] | null) | null;

  resetPasswordToken?: (Scalars['String'] | null) | null;

  resetPasswordTokenExpiration?: Date | Scalars['ISO8601DateString'] | null;

  lastName?: (Scalars['String'] | null) | null;

  lastSignedIn?: Date | Scalars['ISO8601DateString'] | null;

  firstName?: (Scalars['String'] | null) | null;

  googleProfileId?: (Scalars['String'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  googleImageUrl?: (Scalars['String'] | null) | null;

  account?: UserAccountEnum | null;

  emailVerificationToken?: (Scalars['String'] | null) | null;

  emailVerificationTokenExpiration?: Date | Scalars['ISO8601DateString'] | null;

  password?: (Scalars['String'] | null) | null;

  keys?: (Scalars['JSON'] | null) | null;

  team?: (UserTeamEnum)[];
};



export type BulkUpdateUsersInput = {

  user?: UpdateUserInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type BulkSendVerifyEmailUsersInput = {

  email?: (Scalars['String'] | null) | null;
};



export type BulkVerifyEmailUsersInput = {

  code?: (Scalars['String'] | null) | null;
};



export type BulkSendResetPasswordUsersInput = {

  email?: (Scalars['String'] | null) | null;
};



export type BulkResetPasswordUsersInput = {

  password?: (Scalars['String'] | null) | null;

  code?: (Scalars['String'] | null) | null;
};



export type BulkChangePasswordUsersInput = {

  id: (Scalars['GadgetID'] | null);

  currentPassword?: (Scalars['String'] | null) | null;

  newPassword?: (Scalars['String'] | null) | null;
};



export type CreateShopifyBulkOperationInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  errorCode?: ShopifyBulkOperationErrorCodeEnum | null;

  fileSize?: (Scalars['String'] | null) | null;

  objectCount?: (Scalars['String'] | null) | null;

  partialDataUrl?: (Scalars['String'] | null) | null;

  query?: (Scalars['String'] | null) | null;

  rootObjectCount?: (Scalars['String'] | null) | null;

  status?: ShopifyBulkOperationStatusEnum | null;

  type?: ShopifyBulkOperationTypeEnum | null;

  url?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyShopBelongsToInput = {

  update?: NestedShopifyShopUpdateInput | null;

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type NestedShopifyShopUpdateInput = {

  id: (Scalars['GadgetID'] | null);

  collections?: (ShopifyCollectionHasManyInput | null)[];

  marketRegions?: (ShopifyMarketRegionHasManyInput | null)[];

  checkoutLineItems?: (ShopifyCheckoutLineItemHasManyInput | null)[];

  markets?: (ShopifyMarketHasManyInput | null)[];

  disputes?: (ShopifyDisputeHasManyInput | null)[];

  refunds?: (ShopifyRefundHasManyInput | null)[];

  refundLineItems?: (ShopifyRefundLineItemHasManyInput | null)[];

  company?: (ShopifyCompanyHasManyInput | null)[];

  syncs?: (ShopifySyncHasManyInput | null)[];

  checkouts?: (ShopifyCheckoutHasManyInput | null)[];

  fulfillments?: (ShopifyFulfillmentHasManyInput | null)[];

  marketWebPresences?: (ShopifyMarketWebPresenceHasManyInput | null)[];

  fulfillmentLineItems?: (ShopifyFulfillmentLineItemHasManyInput | null)[];

  fulfillmentOrderLineItems?: (ShopifyFulfillmentOrderLineItemHasManyInput | null)[];

  discountCodes?: (ShopifyDiscountCodeHasManyInput | null)[];

  refundDuties?: (ShopifyRefundDutyHasManyInput | null)[];

  customerAccountsV2?: (Scalars['JSON'] | null) | null;

  address1?: (Scalars['String'] | null) | null;

  address2?: (Scalars['String'] | null) | null;

  checkoutApiSupported?: (Scalars['Boolean'] | null) | null;

  city?: (Scalars['String'] | null) | null;

  cookieConsentLevel?: (Scalars['String'] | null) | null;

  country?: (Scalars['String'] | null) | null;

  countryCode?: (Scalars['String'] | null) | null;

  countryName?: (Scalars['String'] | null) | null;

  countyTaxes?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  currency?: (Scalars['String'] | null) | null;

  customerEmail?: (Scalars['String'] | null) | null;

  domain?: (Scalars['String'] | null) | null;

  eligibleForCardReaderGiveaway?: (Scalars['Boolean'] | null) | null;

  eligibleForPayments?: (Scalars['Boolean'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  enabledPresentmentCurrencies?: (Scalars['JSON'] | null) | null;

  finances?: (Scalars['Boolean'] | null) | null;

  forceSsl?: (Scalars['Boolean'] | null) | null;

  fulfillmentOrders?: (ShopifyFulfillmentOrderHasManyInput | null)[];

  googleAppsDomain?: (Scalars['String'] | null) | null;

  googleAppsLoginEnabled?: (Scalars['Boolean'] | null) | null;

  hasDiscounts?: (Scalars['Boolean'] | null) | null;

  hasGiftCards?: (Scalars['Boolean'] | null) | null;

  hasStorefront?: (Scalars['Boolean'] | null) | null;

  discounts?: (ShopifyDiscountHasManyInput | null)[];

  ianaTimezone?: (Scalars['String'] | null) | null;

  fulfillmentServices?: (ShopifyFulfillmentServiceHasManyInput | null)[];

  latitude?: (Scalars['Float'] | null) | null;

  longitude?: (Scalars['Float'] | null) | null;

  marketingSmsContentEnabledAtCheckout?: (Scalars['Boolean'] | null) | null;

  moneyFormat?: (Scalars['String'] | null) | null;

  moneyInEmailsFormat?: (Scalars['String'] | null) | null;

  moneyWithCurrencyFormat?: (Scalars['String'] | null) | null;

  moneyWithCurrencyInEmailsFormat?: (Scalars['String'] | null) | null;

  multiLocationEnabled?: (Scalars['Boolean'] | null) | null;

  myshopifyDomain?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  passwordEnabled?: (Scalars['Boolean'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  planDisplayName?: (Scalars['String'] | null) | null;

  planName?: (Scalars['String'] | null) | null;

  preLaunchEnabled?: (Scalars['Boolean'] | null) | null;

  primaryLocale?: (Scalars['String'] | null) | null;

  province?: (Scalars['String'] | null) | null;

  provinceCode?: (Scalars['String'] | null) | null;

  bulkOperations?: (ShopifyBulkOperationHasManyInput | null)[];

  requiresExtraPaymentsAgreement?: (Scalars['Boolean'] | null) | null;

  domains?: (ShopifyDomainHasManyInput | null)[];

  disputeEvidences?: (ShopifyDisputeEvidenceHasManyInput | null)[];

  setupRequired?: (Scalars['Boolean'] | null) | null;

  shopOwner?: (Scalars['String'] | null) | null;

  source?: (Scalars['String'] | null) | null;

  taxShipping?: (Scalars['Boolean'] | null) | null;

  taxesIncluded?: (Scalars['Boolean'] | null) | null;

  timezone?: (Scalars['String'] | null) | null;

  transactionalSmsDisabled?: (Scalars['Boolean'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  weightUnit?: (Scalars['String'] | null) | null;

  products?: (ShopifyProductHasManyInput | null)[];

  zipCode?: (Scalars['String'] | null) | null;

  shopifySmartCollects?: (ShopifySmartCollectHasManyInput | null)[];

  handle?: (Scalars['String'] | null) | null;
};



export type ShopifyCollectionHasManyInput = {

  update?: NestedShopifyCollectionUpdateInput | null;

  smartCollector?: NestedShopifyCollectionSmartCollectorInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyCollectionInput | null;
};



export type NestedShopifyCollectionUpdateInput = {

  id: (Scalars['GadgetID'] | null);

  body?: (Scalars['String'] | null) | null;

  disjunctive?: (Scalars['Boolean'] | null) | null;

  handle?: (Scalars['String'] | null) | null;

  image?: (Scalars['JSON'] | null) | null;

  publishedAt?: Date | Scalars['ISO8601DateString'] | null;

  publishedScope?: (Scalars['String'] | null) | null;

  rules?: (Scalars['JSON'] | null) | null;

  sortOrder?: (Scalars['String'] | null) | null;

  templateSuffix?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  products?: (ShopifyProductHasManyThroughInput | null)[];

  shop?: ShopifyShopBelongsToInput | null;

  collectionType?: ShopifyCollectionCollectionTypeEnum | null;

  shopifySmartCollects?: (ShopifySmartCollectHasManyInput | null)[];

  smartProducts?: (ShopifyProductHasManyThroughInput | null)[];

  shopifySmartCollect?: (ShopifySmartCollectHasManyInput | null)[];

  collected?: Date | Scalars['ISO8601DateString'] | null;
};



export type ShopifyProductHasManyThroughInput = {

  update?: NestedShopifyProductUpdateInput | null;
};



export type NestedShopifyProductUpdateInput = {

  id: (Scalars['GadgetID'] | null);

  compareAtPriceRange?: (Scalars['JSON'] | null) | null;

  productCategory?: (Scalars['JSON'] | null) | null;

  body?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  handle?: (Scalars['String'] | null) | null;

  checkoutLineItems?: (ShopifyCheckoutLineItemHasManyInput | null)[];

  productType?: (Scalars['String'] | null) | null;

  publishedAt?: Date | Scalars['ISO8601DateString'] | null;

  publishedScope?: (Scalars['String'] | null) | null;

  status?: ShopifyProductStatusEnum | null;

  tags?: (Scalars['JSON'] | null) | null;

  templateSuffix?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  vendor?: (Scalars['String'] | null) | null;

  customCollections?: (ShopifyCollectionHasManyThroughInput | null)[];

  shop?: ShopifyShopBelongsToInput | null;

  shopifySmartCollects?: (ShopifySmartCollectHasManyInput | null)[];

  smartCollections?: (ShopifyCollectionHasManyThroughInput | null)[];

  shopifySmartCollect?: (ShopifySmartCollectHasManyInput | null)[];
};



export type ShopifyCheckoutLineItemHasManyInput = {

  create?: NestedShopifyCheckoutLineItemCreateInput | null;

  update?: NestedShopifyCheckoutLineItemUpdateInput | null;

  delete?: NestedShopifyCheckoutLineItemDeleteInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyCheckoutLineItemInput | null;
};



export type NestedShopifyCheckoutLineItemCreateInput = {

  appliedDiscounts?: (Scalars['JSON'] | null) | null;

  compareAtPrice?: (Scalars['String'] | null) | null;

  discountAllocations?: (Scalars['JSON'] | null) | null;

  fulfillmentService?: (Scalars['String'] | null) | null;

  grams?: (Scalars['Float'] | null) | null;

  key?: (Scalars['String'] | null) | null;

  linePrice?: (Scalars['String'] | null) | null;

  price?: (Scalars['String'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  sku?: (Scalars['String'] | null) | null;

  taxable?: (Scalars['Boolean'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  variantTitle?: (Scalars['String'] | null) | null;

  vendor?: (Scalars['String'] | null) | null;

  checkout?: ShopifyCheckoutBelongsToInput | null;

  product?: ShopifyProductBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyCheckoutBelongsToInput = {

  create?: NestedShopifyCheckoutCreateInput | null;

  update?: NestedShopifyCheckoutUpdateInput | null;

  delete?: NestedShopifyCheckoutDeleteInput | null;

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type NestedShopifyCheckoutCreateInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  abandonedCheckoutUrl?: (Scalars['String'] | null) | null;

  appliedDiscount?: (Scalars['JSON'] | null) | null;

  buyerAcceptsMarketing?: (Scalars['Boolean'] | null) | null;

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  creditCard?: (Scalars['String'] | null) | null;

  currency?: (Scalars['String'] | null) | null;

  customerLocale?: (Scalars['String'] | null) | null;

  device?: (Scalars['Float'] | null) | null;

  discountCode?: (Scalars['String'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  legalNoticeUrl?: (Scalars['String'] | null) | null;

  lineItems?: (ShopifyCheckoutLineItemHasManyInput | null)[];

  name?: (Scalars['String'] | null) | null;

  note?: (Scalars['String'] | null) | null;

  noteAttributes?: (Scalars['JSON'] | null) | null;

  orderStatusUrl?: (Scalars['String'] | null) | null;

  paymentDue?: (Scalars['String'] | null) | null;

  paymentUrl?: (Scalars['String'] | null) | null;

  payments?: (Scalars['JSON'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  presentmentCurrency?: (Scalars['String'] | null) | null;

  privacyPolicyUrl?: (Scalars['String'] | null) | null;

  refundPolicyUrl?: (Scalars['String'] | null) | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  reservationTime?: (Scalars['Float'] | null) | null;

  reservationTimeLeft?: (Scalars['Float'] | null) | null;

  shippingLine?: (Scalars['JSON'] | null) | null;

  shippingPolicyUrl?: (Scalars['String'] | null) | null;

  shopifyPaymentsAccountId?: (Scalars['String'] | null) | null;

  sourceIdentifier?: (Scalars['String'] | null) | null;

  sourceName?: (Scalars['String'] | null) | null;

  sourceUrl?: (Scalars['String'] | null) | null;

  subscriptionPolicyUrl?: (Scalars['String'] | null) | null;

  subtotalPrice?: (Scalars['String'] | null) | null;

  taxExempt?: (Scalars['Boolean'] | null) | null;

  taxLines?: (Scalars['JSON'] | null) | null;

  taxManipulations?: (Scalars['JSON'] | null) | null;

  taxesIncluded?: (Scalars['Boolean'] | null) | null;

  termsOfSaleUrl?: (Scalars['String'] | null) | null;

  termsOfServiceUrl?: (Scalars['String'] | null) | null;

  token?: (Scalars['String'] | null) | null;

  totalLineItemsPrice?: (Scalars['String'] | null) | null;

  totalPrice?: (Scalars['String'] | null) | null;

  totalTax?: (Scalars['String'] | null) | null;

  totalTipReceived?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  userId?: (Scalars['String'] | null) | null;

  webUrl?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  order?: ShopifyOrderBelongsToInput | null;
};



export type ShopifyOrderBelongsToInput = {

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type NestedShopifyCheckoutUpdateInput = {

  id: (Scalars['GadgetID'] | null);

  abandonedCheckoutUrl?: (Scalars['String'] | null) | null;

  appliedDiscount?: (Scalars['JSON'] | null) | null;

  buyerAcceptsMarketing?: (Scalars['Boolean'] | null) | null;

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  creditCard?: (Scalars['String'] | null) | null;

  currency?: (Scalars['String'] | null) | null;

  customerLocale?: (Scalars['String'] | null) | null;

  device?: (Scalars['Float'] | null) | null;

  discountCode?: (Scalars['String'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  legalNoticeUrl?: (Scalars['String'] | null) | null;

  lineItems?: (ShopifyCheckoutLineItemHasManyInput | null)[];

  name?: (Scalars['String'] | null) | null;

  note?: (Scalars['String'] | null) | null;

  noteAttributes?: (Scalars['JSON'] | null) | null;

  orderStatusUrl?: (Scalars['String'] | null) | null;

  paymentDue?: (Scalars['String'] | null) | null;

  paymentUrl?: (Scalars['String'] | null) | null;

  payments?: (Scalars['JSON'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  presentmentCurrency?: (Scalars['String'] | null) | null;

  privacyPolicyUrl?: (Scalars['String'] | null) | null;

  refundPolicyUrl?: (Scalars['String'] | null) | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  reservationTime?: (Scalars['Float'] | null) | null;

  reservationTimeLeft?: (Scalars['Float'] | null) | null;

  shippingLine?: (Scalars['JSON'] | null) | null;

  shippingPolicyUrl?: (Scalars['String'] | null) | null;

  shopifyPaymentsAccountId?: (Scalars['String'] | null) | null;

  sourceIdentifier?: (Scalars['String'] | null) | null;

  sourceName?: (Scalars['String'] | null) | null;

  sourceUrl?: (Scalars['String'] | null) | null;

  subscriptionPolicyUrl?: (Scalars['String'] | null) | null;

  subtotalPrice?: (Scalars['String'] | null) | null;

  taxExempt?: (Scalars['Boolean'] | null) | null;

  taxLines?: (Scalars['JSON'] | null) | null;

  taxManipulations?: (Scalars['JSON'] | null) | null;

  taxesIncluded?: (Scalars['Boolean'] | null) | null;

  termsOfSaleUrl?: (Scalars['String'] | null) | null;

  termsOfServiceUrl?: (Scalars['String'] | null) | null;

  token?: (Scalars['String'] | null) | null;

  totalLineItemsPrice?: (Scalars['String'] | null) | null;

  totalPrice?: (Scalars['String'] | null) | null;

  totalTax?: (Scalars['String'] | null) | null;

  totalTipReceived?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  userId?: (Scalars['String'] | null) | null;

  webUrl?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  order?: ShopifyOrderBelongsToInput | null;
};



export type NestedShopifyCheckoutDeleteInput = {

  id: (Scalars['GadgetID'] | null);
};



export type ShopifyProductBelongsToInput = {

  update?: NestedShopifyProductUpdateInput | null;

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type NestedShopifyCheckoutLineItemUpdateInput = {

  appliedDiscounts?: (Scalars['JSON'] | null) | null;

  compareAtPrice?: (Scalars['String'] | null) | null;

  discountAllocations?: (Scalars['JSON'] | null) | null;

  fulfillmentService?: (Scalars['String'] | null) | null;

  grams?: (Scalars['Float'] | null) | null;

  key?: (Scalars['String'] | null) | null;

  linePrice?: (Scalars['String'] | null) | null;

  price?: (Scalars['String'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  sku?: (Scalars['String'] | null) | null;

  taxable?: (Scalars['Boolean'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  variantTitle?: (Scalars['String'] | null) | null;

  vendor?: (Scalars['String'] | null) | null;

  checkout?: ShopifyCheckoutBelongsToInput | null;

  product?: ShopifyProductBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type NestedShopifyCheckoutLineItemDeleteInput = {

  id: (Scalars['GadgetID'] | null);
};



export type ConvergeShopifyCheckoutLineItemInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyCheckoutLineItemValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyCheckoutLineItemValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  appliedDiscounts?: (Scalars['JSON'] | null) | null;

  compareAtPrice?: (Scalars['String'] | null) | null;

  discountAllocations?: (Scalars['JSON'] | null) | null;

  fulfillmentService?: (Scalars['String'] | null) | null;

  grams?: (Scalars['Float'] | null) | null;

  key?: (Scalars['String'] | null) | null;

  linePrice?: (Scalars['String'] | null) | null;

  price?: (Scalars['String'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  sku?: (Scalars['String'] | null) | null;

  taxable?: (Scalars['Boolean'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  variantTitle?: (Scalars['String'] | null) | null;

  vendor?: (Scalars['String'] | null) | null;

  checkout?: ShopifyCheckoutBelongsToInput | null;

  product?: ShopifyProductBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ConvergeActionMap = {

  /** One of the model action's API identifiers. Specifies which action to use to create new records that are in the set of specified records but not yet in the database. Defaults to the action named `create` if it exists. */
  create?: (Scalars['String'] | null) | null;

  /** One of the model action's API identifiers. Specifies which action to use to update new records that are in the set of specified records and already in the database, but maybe have different field values. Defaults to the action named `update` if it exists. */
  update?: (Scalars['String'] | null) | null;

  /** One of the model action's API identifiers. Specifies which action to use to delete records that are not in the set of specified records but exist in the database. Defaults to the action named `delete` if it exists. */
  delete?: (Scalars['String'] | null) | null;
};



export type ShopifyCollectionHasManyThroughInput = {

  update?: NestedShopifyCollectionUpdateInput | null;

  smartCollector?: NestedShopifyCollectionSmartCollectorInput | null;
};



export type NestedShopifyCollectionSmartCollectorInput = {

  id: (Scalars['GadgetID'] | null);
};



export type ShopifySmartCollectHasManyInput = {

  create?: NestedShopifySmartCollectCreateInput | null;

  update?: NestedShopifySmartCollectUpdateInput | null;

  delete?: NestedShopifySmartCollectDeleteInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifySmartCollectInput | null;
};



export type NestedShopifySmartCollectCreateInput = {

  shop?: ShopifyShopBelongsToInput | null;

  product?: ShopifyProductBelongsToInput | null;

  collection?: ShopifyCollectionBelongsToInput | null;
};



export type ShopifyCollectionBelongsToInput = {

  update?: NestedShopifyCollectionUpdateInput | null;

  smartCollector?: NestedShopifyCollectionSmartCollectorInput | null;

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type NestedShopifySmartCollectUpdateInput = {

  shop?: ShopifyShopBelongsToInput | null;

  product?: ShopifyProductBelongsToInput | null;

  collection?: ShopifyCollectionBelongsToInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type NestedShopifySmartCollectDeleteInput = {

  id: (Scalars['GadgetID'] | null);
};



export type ConvergeShopifySmartCollectInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifySmartCollectValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifySmartCollectValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  product?: ShopifyProductBelongsToInput | null;

  collection?: ShopifyCollectionBelongsToInput | null;
};



export type ConvergeShopifyCollectionInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyCollectionValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyCollectionValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  body?: (Scalars['String'] | null) | null;

  disjunctive?: (Scalars['Boolean'] | null) | null;

  handle?: (Scalars['String'] | null) | null;

  image?: (Scalars['JSON'] | null) | null;

  publishedAt?: Date | Scalars['ISO8601DateString'] | null;

  publishedScope?: (Scalars['String'] | null) | null;

  rules?: (Scalars['JSON'] | null) | null;

  sortOrder?: (Scalars['String'] | null) | null;

  templateSuffix?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  products?: (ShopifyProductHasManyThroughInput | null)[];

  shop?: ShopifyShopBelongsToInput | null;

  collectionType?: ShopifyCollectionCollectionTypeEnum | null;

  shopifySmartCollects?: (ShopifySmartCollectHasManyInput | null)[];

  smartProducts?: (ShopifyProductHasManyThroughInput | null)[];

  shopifySmartCollect?: (ShopifySmartCollectHasManyInput | null)[];

  collected?: Date | Scalars['ISO8601DateString'] | null;
};



export type ShopifyMarketRegionHasManyInput = {

  create?: NestedShopifyMarketRegionCreateInput | null;

  update?: NestedShopifyMarketRegionUpdateInput | null;

  delete?: NestedShopifyMarketRegionDeleteInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyMarketRegionInput | null;
};



export type NestedShopifyMarketRegionCreateInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  code?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  market?: ShopifyMarketBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyMarketBelongsToInput = {

  create?: NestedShopifyMarketCreateInput | null;

  update?: NestedShopifyMarketUpdateInput | null;

  delete?: NestedShopifyMarketDeleteInput | null;

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type NestedShopifyMarketCreateInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  currencySettings?: (Scalars['JSON'] | null) | null;

  enabled?: (Scalars['Boolean'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  primary?: (Scalars['Boolean'] | null) | null;

  regions?: (ShopifyMarketRegionHasManyInput | null)[];

  marketWebPresence?: ShopifyMarketWebPresenceBelongsToInput | null;

  marketWebPresences?: (ShopifyMarketWebPresenceHasManyInput | null)[];

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyMarketWebPresenceBelongsToInput = {

  create?: NestedShopifyMarketWebPresenceCreateInput | null;

  update?: NestedShopifyMarketWebPresenceUpdateInput | null;

  delete?: NestedShopifyMarketWebPresenceDeleteInput | null;

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type NestedShopifyMarketWebPresenceCreateInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  primaryWebPresenceForMarket?: ShopifyMarketHasOneInput | null;

  alternateLocales?: (Scalars['JSON'] | null) | null;

  rootUrls?: (Scalars['JSON'] | null) | null;

  subfolderSuffix?: (Scalars['String'] | null) | null;

  domain?: ShopifyDomainBelongsToInput | null;

  market?: ShopifyMarketBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyMarketHasOneInput = {

  create?: NestedShopifyMarketCreateInput | null;

  update?: NestedShopifyMarketUpdateInput | null;

  delete?: NestedShopifyMarketDeleteInput | null;
};



export type NestedShopifyMarketUpdateInput = {

  id: (Scalars['GadgetID'] | null);

  currencySettings?: (Scalars['JSON'] | null) | null;

  enabled?: (Scalars['Boolean'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  primary?: (Scalars['Boolean'] | null) | null;

  regions?: (ShopifyMarketRegionHasManyInput | null)[];

  marketWebPresence?: ShopifyMarketWebPresenceBelongsToInput | null;

  marketWebPresences?: (ShopifyMarketWebPresenceHasManyInput | null)[];

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyMarketWebPresenceHasManyInput = {

  create?: NestedShopifyMarketWebPresenceCreateInput | null;

  update?: NestedShopifyMarketWebPresenceUpdateInput | null;

  delete?: NestedShopifyMarketWebPresenceDeleteInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyMarketWebPresenceInput | null;
};



export type NestedShopifyMarketWebPresenceUpdateInput = {

  id: (Scalars['GadgetID'] | null);

  primaryWebPresenceForMarket?: ShopifyMarketHasOneInput | null;

  alternateLocales?: (Scalars['JSON'] | null) | null;

  rootUrls?: (Scalars['JSON'] | null) | null;

  subfolderSuffix?: (Scalars['String'] | null) | null;

  domain?: ShopifyDomainBelongsToInput | null;

  market?: ShopifyMarketBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyDomainBelongsToInput = {

  create?: NestedShopifyDomainCreateInput | null;

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type NestedShopifyDomainCreateInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  marketWebPresences?: (ShopifyMarketWebPresenceHasManyInput | null)[];

  host?: (Scalars['String'] | null) | null;

  localization?: (Scalars['JSON'] | null) | null;

  sslEnabled?: (Scalars['Boolean'] | null) | null;

  url?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyMarketWebPresenceDeleteInput = {

  id: (Scalars['GadgetID'] | null);
};



export type ConvergeShopifyMarketWebPresenceInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyMarketWebPresenceValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyMarketWebPresenceValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  primaryWebPresenceForMarket?: ShopifyMarketHasOneInput | null;

  alternateLocales?: (Scalars['JSON'] | null) | null;

  rootUrls?: (Scalars['JSON'] | null) | null;

  subfolderSuffix?: (Scalars['String'] | null) | null;

  domain?: ShopifyDomainBelongsToInput | null;

  market?: ShopifyMarketBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyMarketDeleteInput = {

  id: (Scalars['GadgetID'] | null);
};



export type NestedShopifyMarketRegionUpdateInput = {

  id: (Scalars['GadgetID'] | null);

  code?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  market?: ShopifyMarketBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyMarketRegionDeleteInput = {

  id: (Scalars['GadgetID'] | null);
};



export type ConvergeShopifyMarketRegionInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyMarketRegionValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyMarketRegionValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  code?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  market?: ShopifyMarketBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyMarketHasManyInput = {

  create?: NestedShopifyMarketCreateInput | null;

  update?: NestedShopifyMarketUpdateInput | null;

  delete?: NestedShopifyMarketDeleteInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyMarketInput | null;
};



export type ConvergeShopifyMarketInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyMarketValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyMarketValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  currencySettings?: (Scalars['JSON'] | null) | null;

  enabled?: (Scalars['Boolean'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  primary?: (Scalars['Boolean'] | null) | null;

  regions?: (ShopifyMarketRegionHasManyInput | null)[];

  marketWebPresence?: ShopifyMarketWebPresenceBelongsToInput | null;

  marketWebPresences?: (ShopifyMarketWebPresenceHasManyInput | null)[];

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyDisputeHasManyInput = {

  create?: NestedShopifyDisputeCreateInput | null;

  update?: NestedShopifyDisputeUpdateInput | null;

  delete?: NestedShopifyDisputeDeleteInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyDisputeInput | null;
};



export type NestedShopifyDisputeCreateInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  amount?: (Scalars['String'] | null) | null;

  currency?: (Scalars['String'] | null) | null;

  evidenceDueBy?: Date | Scalars['ISO8601DateString'] | null;

  evidenceSentOn?: Date | Scalars['ISO8601DateString'] | null;

  finalizedOn?: Date | Scalars['ISO8601DateString'] | null;

  networkReasonCode?: (Scalars['String'] | null) | null;

  reason?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  type?: (Scalars['String'] | null) | null;

  disputeEvidence?: ShopifyDisputeEvidenceHasOneInput | null;

  order?: ShopifyOrderBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyDisputeEvidenceHasOneInput = {

  create?: NestedShopifyDisputeEvidenceCreateInput | null;

  update?: NestedShopifyDisputeEvidenceUpdateInput | null;

  delete?: NestedShopifyDisputeEvidenceDeleteInput | null;
};



export type NestedShopifyDisputeEvidenceCreateInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  customerEmailAddress?: (Scalars['String'] | null) | null;

  customerFirstName?: (Scalars['String'] | null) | null;

  customerLastName?: (Scalars['String'] | null) | null;

  productDescription?: (Scalars['String'] | null) | null;

  submittedByMerchantOn?: Date | Scalars['ISO8601DateString'] | null;

  uncategorizedText?: (Scalars['String'] | null) | null;

  dispute?: ShopifyDisputeBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyDisputeBelongsToInput = {

  create?: NestedShopifyDisputeCreateInput | null;

  update?: NestedShopifyDisputeUpdateInput | null;

  delete?: NestedShopifyDisputeDeleteInput | null;

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type NestedShopifyDisputeUpdateInput = {

  id: (Scalars['GadgetID'] | null);

  amount?: (Scalars['String'] | null) | null;

  currency?: (Scalars['String'] | null) | null;

  evidenceDueBy?: Date | Scalars['ISO8601DateString'] | null;

  evidenceSentOn?: Date | Scalars['ISO8601DateString'] | null;

  finalizedOn?: Date | Scalars['ISO8601DateString'] | null;

  networkReasonCode?: (Scalars['String'] | null) | null;

  reason?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  type?: (Scalars['String'] | null) | null;

  disputeEvidence?: ShopifyDisputeEvidenceHasOneInput | null;

  order?: ShopifyOrderBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyDisputeDeleteInput = {

  id: (Scalars['GadgetID'] | null);
};



export type NestedShopifyDisputeEvidenceUpdateInput = {

  id: (Scalars['GadgetID'] | null);

  customerEmailAddress?: (Scalars['String'] | null) | null;

  customerFirstName?: (Scalars['String'] | null) | null;

  customerLastName?: (Scalars['String'] | null) | null;

  productDescription?: (Scalars['String'] | null) | null;

  submittedByMerchantOn?: Date | Scalars['ISO8601DateString'] | null;

  uncategorizedText?: (Scalars['String'] | null) | null;

  dispute?: ShopifyDisputeBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyDisputeEvidenceDeleteInput = {

  id: (Scalars['GadgetID'] | null);
};



export type ConvergeShopifyDisputeInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyDisputeValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyDisputeValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  amount?: (Scalars['String'] | null) | null;

  currency?: (Scalars['String'] | null) | null;

  evidenceDueBy?: Date | Scalars['ISO8601DateString'] | null;

  evidenceSentOn?: Date | Scalars['ISO8601DateString'] | null;

  finalizedOn?: Date | Scalars['ISO8601DateString'] | null;

  networkReasonCode?: (Scalars['String'] | null) | null;

  reason?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  type?: (Scalars['String'] | null) | null;

  disputeEvidence?: ShopifyDisputeEvidenceHasOneInput | null;

  order?: ShopifyOrderBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyRefundHasManyInput = {

  create?: NestedShopifyRefundCreateInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyRefundInput | null;
};



export type NestedShopifyRefundCreateInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  duties?: (ShopifyRefundDutyHasManyInput | null)[];

  note?: (Scalars['String'] | null) | null;

  processedAt?: Date | Scalars['ISO8601DateString'] | null;

  refundLineItems?: (ShopifyRefundLineItemHasManyInput | null)[];

  restock?: (Scalars['Boolean'] | null) | null;

  order?: ShopifyOrderBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyRefundDutyHasManyInput = {

  create?: NestedShopifyRefundDutyCreateInput | null;

  update?: NestedShopifyRefundDutyUpdateInput | null;

  delete?: NestedShopifyRefundDutyDeleteInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyRefundDutyInput | null;
};



export type NestedShopifyRefundDutyCreateInput = {

  amountSet?: (Scalars['JSON'] | null) | null;

  refund?: ShopifyRefundBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyRefundBelongsToInput = {

  create?: NestedShopifyRefundCreateInput | null;

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type NestedShopifyRefundDutyUpdateInput = {

  amountSet?: (Scalars['JSON'] | null) | null;

  refund?: ShopifyRefundBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type NestedShopifyRefundDutyDeleteInput = {

  id: (Scalars['GadgetID'] | null);
};



export type ConvergeShopifyRefundDutyInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyRefundDutyValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyRefundDutyValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  amountSet?: (Scalars['JSON'] | null) | null;

  refund?: ShopifyRefundBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyRefundLineItemHasManyInput = {

  create?: NestedShopifyRefundLineItemCreateInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyRefundLineItemInput | null;
};



export type NestedShopifyRefundLineItemCreateInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  restockType?: (Scalars['String'] | null) | null;

  subtotal?: (Scalars['Float'] | null) | null;

  subtotalSet?: (Scalars['JSON'] | null) | null;

  totalTax?: (Scalars['Float'] | null) | null;

  totalTaxSet?: (Scalars['JSON'] | null) | null;

  orderLineItem?: ShopifyOrderLineItemBelongsToInput | null;

  refund?: ShopifyRefundBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyOrderLineItemBelongsToInput = {

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type ConvergeShopifyRefundLineItemInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyRefundLineItemValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyRefundLineItemValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  restockType?: (Scalars['String'] | null) | null;

  subtotal?: (Scalars['Float'] | null) | null;

  subtotalSet?: (Scalars['JSON'] | null) | null;

  totalTax?: (Scalars['Float'] | null) | null;

  totalTaxSet?: (Scalars['JSON'] | null) | null;

  orderLineItem?: ShopifyOrderLineItemBelongsToInput | null;

  refund?: ShopifyRefundBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ConvergeShopifyRefundInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyRefundValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyRefundValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  duties?: (ShopifyRefundDutyHasManyInput | null)[];

  note?: (Scalars['String'] | null) | null;

  processedAt?: Date | Scalars['ISO8601DateString'] | null;

  refundLineItems?: (ShopifyRefundLineItemHasManyInput | null)[];

  restock?: (Scalars['Boolean'] | null) | null;

  order?: ShopifyOrderBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyCompanyHasManyInput = {

  create?: NestedShopifyCompanyCreateInput | null;

  update?: NestedShopifyCompanyUpdateInput | null;

  delete?: NestedShopifyCompanyDeleteInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyCompanyInput | null;
};



export type NestedShopifyCompanyCreateInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  contactCount?: (Scalars['Int'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  customerSince?: Date | Scalars['ISO8601DateString'] | null;

  externalId?: (Scalars['String'] | null) | null;

  lifetimeDuration?: (Scalars['String'] | null) | null;

  locationCount?: (Scalars['Float'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  note?: (Scalars['String'] | null) | null;

  orderCount?: (Scalars['Int'] | null) | null;

  totalSpent?: (Scalars['JSON'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyCompanyUpdateInput = {

  id: (Scalars['GadgetID'] | null);

  contactCount?: (Scalars['Int'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  customerSince?: Date | Scalars['ISO8601DateString'] | null;

  externalId?: (Scalars['String'] | null) | null;

  lifetimeDuration?: (Scalars['String'] | null) | null;

  locationCount?: (Scalars['Float'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  note?: (Scalars['String'] | null) | null;

  orderCount?: (Scalars['Int'] | null) | null;

  totalSpent?: (Scalars['JSON'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyCompanyDeleteInput = {

  id: (Scalars['GadgetID'] | null);
};



export type ConvergeShopifyCompanyInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyCompanyValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyCompanyValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  contactCount?: (Scalars['Int'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  customerSince?: Date | Scalars['ISO8601DateString'] | null;

  externalId?: (Scalars['String'] | null) | null;

  lifetimeDuration?: (Scalars['String'] | null) | null;

  locationCount?: (Scalars['Float'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  note?: (Scalars['String'] | null) | null;

  orderCount?: (Scalars['Int'] | null) | null;

  totalSpent?: (Scalars['JSON'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifySyncHasManyInput = {

  run?: NestedShopifySyncRunInput | null;

  complete?: NestedShopifySyncCompleteInput | null;

  error?: NestedShopifySyncErrorInput | null;

  abort?: NestedShopifySyncAbortInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifySyncInput | null;
};



export type NestedShopifySyncRunInput = {

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  startReason?: (Scalars['String'] | null) | null;
};



export type NestedShopifySyncCompleteInput = {

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type NestedShopifySyncErrorInput = {

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type NestedShopifySyncAbortInput = {

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type ConvergeShopifySyncInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifySyncValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifySyncValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyCheckoutHasManyInput = {

  create?: NestedShopifyCheckoutCreateInput | null;

  update?: NestedShopifyCheckoutUpdateInput | null;

  delete?: NestedShopifyCheckoutDeleteInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyCheckoutInput | null;
};



export type ConvergeShopifyCheckoutInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyCheckoutValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyCheckoutValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  abandonedCheckoutUrl?: (Scalars['String'] | null) | null;

  appliedDiscount?: (Scalars['JSON'] | null) | null;

  buyerAcceptsMarketing?: (Scalars['Boolean'] | null) | null;

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  creditCard?: (Scalars['String'] | null) | null;

  currency?: (Scalars['String'] | null) | null;

  customerLocale?: (Scalars['String'] | null) | null;

  device?: (Scalars['Float'] | null) | null;

  discountCode?: (Scalars['String'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  legalNoticeUrl?: (Scalars['String'] | null) | null;

  lineItems?: (ShopifyCheckoutLineItemHasManyInput | null)[];

  name?: (Scalars['String'] | null) | null;

  note?: (Scalars['String'] | null) | null;

  noteAttributes?: (Scalars['JSON'] | null) | null;

  orderStatusUrl?: (Scalars['String'] | null) | null;

  paymentDue?: (Scalars['String'] | null) | null;

  paymentUrl?: (Scalars['String'] | null) | null;

  payments?: (Scalars['JSON'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  presentmentCurrency?: (Scalars['String'] | null) | null;

  privacyPolicyUrl?: (Scalars['String'] | null) | null;

  refundPolicyUrl?: (Scalars['String'] | null) | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  reservationTime?: (Scalars['Float'] | null) | null;

  reservationTimeLeft?: (Scalars['Float'] | null) | null;

  shippingLine?: (Scalars['JSON'] | null) | null;

  shippingPolicyUrl?: (Scalars['String'] | null) | null;

  shopifyPaymentsAccountId?: (Scalars['String'] | null) | null;

  sourceIdentifier?: (Scalars['String'] | null) | null;

  sourceName?: (Scalars['String'] | null) | null;

  sourceUrl?: (Scalars['String'] | null) | null;

  subscriptionPolicyUrl?: (Scalars['String'] | null) | null;

  subtotalPrice?: (Scalars['String'] | null) | null;

  taxExempt?: (Scalars['Boolean'] | null) | null;

  taxLines?: (Scalars['JSON'] | null) | null;

  taxManipulations?: (Scalars['JSON'] | null) | null;

  taxesIncluded?: (Scalars['Boolean'] | null) | null;

  termsOfSaleUrl?: (Scalars['String'] | null) | null;

  termsOfServiceUrl?: (Scalars['String'] | null) | null;

  token?: (Scalars['String'] | null) | null;

  totalLineItemsPrice?: (Scalars['String'] | null) | null;

  totalPrice?: (Scalars['String'] | null) | null;

  totalTax?: (Scalars['String'] | null) | null;

  totalTipReceived?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  userId?: (Scalars['String'] | null) | null;

  webUrl?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  order?: ShopifyOrderBelongsToInput | null;
};



export type ShopifyFulfillmentHasManyInput = {

  create?: NestedShopifyFulfillmentCreateInput | null;

  update?: NestedShopifyFulfillmentUpdateInput | null;

  delete?: NestedShopifyFulfillmentDeleteInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyFulfillmentInput | null;
};



export type NestedShopifyFulfillmentCreateInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  name?: (Scalars['String'] | null) | null;

  notifyCustomer?: (Scalars['Boolean'] | null) | null;

  originAddress?: (Scalars['JSON'] | null) | null;

  receipt?: (Scalars['JSON'] | null) | null;

  service?: (Scalars['String'] | null) | null;

  shipmentStatus?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  trackingCompany?: (Scalars['String'] | null) | null;

  trackingNumbers?: (Scalars['JSON'] | null) | null;

  trackingUrls?: (Scalars['JSON'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  variantInventoryManagement?: (Scalars['String'] | null) | null;

  fulfillmentLineItems?: (ShopifyFulfillmentLineItemHasManyInput | null)[];

  order?: ShopifyOrderBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyFulfillmentLineItemHasManyInput = {

  create?: NestedShopifyFulfillmentLineItemCreateInput | null;

  update?: NestedShopifyFulfillmentLineItemUpdateInput | null;

  delete?: NestedShopifyFulfillmentLineItemDeleteInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyFulfillmentLineItemInput | null;
};



export type NestedShopifyFulfillmentLineItemCreateInput = {

  originalTotalSet?: (Scalars['JSON'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  discountedTotalSet?: (Scalars['JSON'] | null) | null;

  fulfillment?: ShopifyFulfillmentBelongsToInput | null;

  orderLineItem?: ShopifyOrderLineItemBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyFulfillmentBelongsToInput = {

  create?: NestedShopifyFulfillmentCreateInput | null;

  update?: NestedShopifyFulfillmentUpdateInput | null;

  delete?: NestedShopifyFulfillmentDeleteInput | null;

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type NestedShopifyFulfillmentUpdateInput = {

  id: (Scalars['GadgetID'] | null);

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  name?: (Scalars['String'] | null) | null;

  notifyCustomer?: (Scalars['Boolean'] | null) | null;

  originAddress?: (Scalars['JSON'] | null) | null;

  receipt?: (Scalars['JSON'] | null) | null;

  service?: (Scalars['String'] | null) | null;

  shipmentStatus?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  trackingCompany?: (Scalars['String'] | null) | null;

  trackingNumbers?: (Scalars['JSON'] | null) | null;

  trackingUrls?: (Scalars['JSON'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  variantInventoryManagement?: (Scalars['String'] | null) | null;

  fulfillmentLineItems?: (ShopifyFulfillmentLineItemHasManyInput | null)[];

  order?: ShopifyOrderBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyFulfillmentDeleteInput = {

  id: (Scalars['GadgetID'] | null);
};



export type NestedShopifyFulfillmentLineItemUpdateInput = {

  originalTotalSet?: (Scalars['JSON'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  discountedTotalSet?: (Scalars['JSON'] | null) | null;

  fulfillment?: ShopifyFulfillmentBelongsToInput | null;

  orderLineItem?: ShopifyOrderLineItemBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type NestedShopifyFulfillmentLineItemDeleteInput = {

  id: (Scalars['GadgetID'] | null);
};



export type ConvergeShopifyFulfillmentLineItemInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyFulfillmentLineItemValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyFulfillmentLineItemValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  originalTotalSet?: (Scalars['JSON'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  discountedTotalSet?: (Scalars['JSON'] | null) | null;

  fulfillment?: ShopifyFulfillmentBelongsToInput | null;

  orderLineItem?: ShopifyOrderLineItemBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ConvergeShopifyFulfillmentInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyFulfillmentValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyFulfillmentValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  name?: (Scalars['String'] | null) | null;

  notifyCustomer?: (Scalars['Boolean'] | null) | null;

  originAddress?: (Scalars['JSON'] | null) | null;

  receipt?: (Scalars['JSON'] | null) | null;

  service?: (Scalars['String'] | null) | null;

  shipmentStatus?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  trackingCompany?: (Scalars['String'] | null) | null;

  trackingNumbers?: (Scalars['JSON'] | null) | null;

  trackingUrls?: (Scalars['JSON'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  variantInventoryManagement?: (Scalars['String'] | null) | null;

  fulfillmentLineItems?: (ShopifyFulfillmentLineItemHasManyInput | null)[];

  order?: ShopifyOrderBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyFulfillmentOrderLineItemHasManyInput = {

  create?: NestedShopifyFulfillmentOrderLineItemCreateInput | null;

  update?: NestedShopifyFulfillmentOrderLineItemUpdateInput | null;

  delete?: NestedShopifyFulfillmentOrderLineItemDeleteInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyFulfillmentOrderLineItemInput | null;
};



export type NestedShopifyFulfillmentOrderLineItemCreateInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  remainingQuantity?: (Scalars['Float'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  fulfillmentOrder?: ShopifyFulfillmentOrderBelongsToInput | null;

  orderLineItem?: ShopifyOrderLineItemBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyFulfillmentOrderBelongsToInput = {

  create?: NestedShopifyFulfillmentOrderCreateInput | null;

  update?: NestedShopifyFulfillmentOrderUpdateInput | null;

  delete?: NestedShopifyFulfillmentOrderDeleteInput | null;

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type NestedShopifyFulfillmentOrderCreateInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  assignedLocation?: (Scalars['JSON'] | null) | null;

  deliveryMethod?: (Scalars['JSON'] | null) | null;

  destination?: (Scalars['JSON'] | null) | null;

  fulfillAt?: Date | Scalars['ISO8601DateString'] | null;

  fulfillBy?: Date | Scalars['ISO8601DateString'] | null;

  fulfillmentHolds?: (Scalars['JSON'] | null) | null;

  internationalDuties?: (Scalars['JSON'] | null) | null;

  merchantRequests?: (Scalars['JSON'] | null) | null;

  requestStatus?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  supportedActions?: (Scalars['JSON'] | null) | null;

  fulfillmentOrderLineItems?: (ShopifyFulfillmentOrderLineItemHasManyInput | null)[];

  order?: ShopifyOrderBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyFulfillmentOrderUpdateInput = {

  id: (Scalars['GadgetID'] | null);

  assignedLocation?: (Scalars['JSON'] | null) | null;

  deliveryMethod?: (Scalars['JSON'] | null) | null;

  destination?: (Scalars['JSON'] | null) | null;

  fulfillAt?: Date | Scalars['ISO8601DateString'] | null;

  fulfillBy?: Date | Scalars['ISO8601DateString'] | null;

  fulfillmentHolds?: (Scalars['JSON'] | null) | null;

  internationalDuties?: (Scalars['JSON'] | null) | null;

  merchantRequests?: (Scalars['JSON'] | null) | null;

  requestStatus?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  supportedActions?: (Scalars['JSON'] | null) | null;

  fulfillmentOrderLineItems?: (ShopifyFulfillmentOrderLineItemHasManyInput | null)[];

  order?: ShopifyOrderBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyFulfillmentOrderDeleteInput = {

  id: (Scalars['GadgetID'] | null);
};



export type NestedShopifyFulfillmentOrderLineItemUpdateInput = {

  id: (Scalars['GadgetID'] | null);

  remainingQuantity?: (Scalars['Float'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  fulfillmentOrder?: ShopifyFulfillmentOrderBelongsToInput | null;

  orderLineItem?: ShopifyOrderLineItemBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyFulfillmentOrderLineItemDeleteInput = {

  id: (Scalars['GadgetID'] | null);
};



export type ConvergeShopifyFulfillmentOrderLineItemInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyFulfillmentOrderLineItemValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyFulfillmentOrderLineItemValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  remainingQuantity?: (Scalars['Float'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  fulfillmentOrder?: ShopifyFulfillmentOrderBelongsToInput | null;

  orderLineItem?: ShopifyOrderLineItemBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyDiscountCodeHasManyInput = {

  create?: NestedShopifyDiscountCodeCreateInput | null;

  update?: NestedShopifyDiscountCodeUpdateInput | null;

  delete?: NestedShopifyDiscountCodeDeleteInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyDiscountCodeInput | null;
};



export type NestedShopifyDiscountCodeCreateInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  code?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  usageCount?: (Scalars['Float'] | null) | null;

  priceRule?: ShopifyPriceRuleBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyPriceRuleBelongsToInput = {

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type NestedShopifyDiscountCodeUpdateInput = {

  id: (Scalars['GadgetID'] | null);

  code?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  usageCount?: (Scalars['Float'] | null) | null;

  priceRule?: ShopifyPriceRuleBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyDiscountCodeDeleteInput = {

  id: (Scalars['GadgetID'] | null);
};



export type ConvergeShopifyDiscountCodeInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyDiscountCodeValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyDiscountCodeValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  code?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  usageCount?: (Scalars['Float'] | null) | null;

  priceRule?: ShopifyPriceRuleBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyFulfillmentOrderHasManyInput = {

  create?: NestedShopifyFulfillmentOrderCreateInput | null;

  update?: NestedShopifyFulfillmentOrderUpdateInput | null;

  delete?: NestedShopifyFulfillmentOrderDeleteInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyFulfillmentOrderInput | null;
};



export type ConvergeShopifyFulfillmentOrderInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyFulfillmentOrderValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyFulfillmentOrderValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  assignedLocation?: (Scalars['JSON'] | null) | null;

  deliveryMethod?: (Scalars['JSON'] | null) | null;

  destination?: (Scalars['JSON'] | null) | null;

  fulfillAt?: Date | Scalars['ISO8601DateString'] | null;

  fulfillBy?: Date | Scalars['ISO8601DateString'] | null;

  fulfillmentHolds?: (Scalars['JSON'] | null) | null;

  internationalDuties?: (Scalars['JSON'] | null) | null;

  merchantRequests?: (Scalars['JSON'] | null) | null;

  requestStatus?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  supportedActions?: (Scalars['JSON'] | null) | null;

  fulfillmentOrderLineItems?: (ShopifyFulfillmentOrderLineItemHasManyInput | null)[];

  order?: ShopifyOrderBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyDiscountHasManyInput = {

  create?: NestedShopifyDiscountCreateInput | null;

  update?: NestedShopifyDiscountUpdateInput | null;

  delete?: NestedShopifyDiscountDeleteInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyDiscountInput | null;
};



export type NestedShopifyDiscountCreateInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  appDiscountType?: (Scalars['JSON'] | null) | null;

  appliesOnOneTimePurchase?: (Scalars['Boolean'] | null) | null;

  appliesOnSubscription?: (Scalars['Boolean'] | null) | null;

  appliesOncePerCustomer?: (Scalars['Boolean'] | null) | null;

  asyncUsageCount?: (Scalars['Float'] | null) | null;

  codeCount?: (Scalars['Int'] | null) | null;

  combinesWith?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  destinationSelection?: (Scalars['JSON'] | null) | null;

  discountClass?: ShopifyDiscountDiscountClassEnum | null;

  discountId?: (Scalars['String'] | null) | null;

  endsAt?: Date | Scalars['ISO8601DateString'] | null;

  errorHistory?: (Scalars['JSON'] | null) | null;

  hasTimelineComment?: (Scalars['Boolean'] | null) | null;

  maximumShippingPrice?: (Scalars['JSON'] | null) | null;

  minimumRequirement?: (Scalars['JSON'] | null) | null;

  recurringCycleLimit?: (Scalars['Int'] | null) | null;

  shareableUrls?: (Scalars['JSON'] | null) | null;

  shortSummary?: (Scalars['String'] | null) | null;

  startsAt?: Date | Scalars['ISO8601DateString'] | null;

  status?: ShopifyDiscountStatusEnum | null;

  summary?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  totalSales?: (Scalars['JSON'] | null) | null;

  usageLimit?: (Scalars['Int'] | null) | null;

  usesPerOrderLimit?: (Scalars['Int'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyDiscountUpdateInput = {

  id: (Scalars['GadgetID'] | null);

  appDiscountType?: (Scalars['JSON'] | null) | null;

  appliesOnOneTimePurchase?: (Scalars['Boolean'] | null) | null;

  appliesOnSubscription?: (Scalars['Boolean'] | null) | null;

  appliesOncePerCustomer?: (Scalars['Boolean'] | null) | null;

  asyncUsageCount?: (Scalars['Float'] | null) | null;

  codeCount?: (Scalars['Int'] | null) | null;

  combinesWith?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  destinationSelection?: (Scalars['JSON'] | null) | null;

  discountClass?: ShopifyDiscountDiscountClassEnum | null;

  discountId?: (Scalars['String'] | null) | null;

  endsAt?: Date | Scalars['ISO8601DateString'] | null;

  errorHistory?: (Scalars['JSON'] | null) | null;

  hasTimelineComment?: (Scalars['Boolean'] | null) | null;

  maximumShippingPrice?: (Scalars['JSON'] | null) | null;

  minimumRequirement?: (Scalars['JSON'] | null) | null;

  recurringCycleLimit?: (Scalars['Int'] | null) | null;

  shareableUrls?: (Scalars['JSON'] | null) | null;

  shortSummary?: (Scalars['String'] | null) | null;

  startsAt?: Date | Scalars['ISO8601DateString'] | null;

  status?: ShopifyDiscountStatusEnum | null;

  summary?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  totalSales?: (Scalars['JSON'] | null) | null;

  usageLimit?: (Scalars['Int'] | null) | null;

  usesPerOrderLimit?: (Scalars['Int'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyDiscountDeleteInput = {

  id: (Scalars['GadgetID'] | null);
};



export type ConvergeShopifyDiscountInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyDiscountValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyDiscountValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  appDiscountType?: (Scalars['JSON'] | null) | null;

  appliesOnOneTimePurchase?: (Scalars['Boolean'] | null) | null;

  appliesOnSubscription?: (Scalars['Boolean'] | null) | null;

  appliesOncePerCustomer?: (Scalars['Boolean'] | null) | null;

  asyncUsageCount?: (Scalars['Float'] | null) | null;

  codeCount?: (Scalars['Int'] | null) | null;

  combinesWith?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  destinationSelection?: (Scalars['JSON'] | null) | null;

  discountClass?: ShopifyDiscountDiscountClassEnum | null;

  discountId?: (Scalars['String'] | null) | null;

  endsAt?: Date | Scalars['ISO8601DateString'] | null;

  errorHistory?: (Scalars['JSON'] | null) | null;

  hasTimelineComment?: (Scalars['Boolean'] | null) | null;

  maximumShippingPrice?: (Scalars['JSON'] | null) | null;

  minimumRequirement?: (Scalars['JSON'] | null) | null;

  recurringCycleLimit?: (Scalars['Int'] | null) | null;

  shareableUrls?: (Scalars['JSON'] | null) | null;

  shortSummary?: (Scalars['String'] | null) | null;

  startsAt?: Date | Scalars['ISO8601DateString'] | null;

  status?: ShopifyDiscountStatusEnum | null;

  summary?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  totalSales?: (Scalars['JSON'] | null) | null;

  usageLimit?: (Scalars['Int'] | null) | null;

  usesPerOrderLimit?: (Scalars['Int'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyFulfillmentServiceHasManyInput = {

  create?: NestedShopifyFulfillmentServiceCreateInput | null;

  update?: NestedShopifyFulfillmentServiceUpdateInput | null;

  delete?: NestedShopifyFulfillmentServiceDeleteInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyFulfillmentServiceInput | null;
};



export type NestedShopifyFulfillmentServiceCreateInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  callbackUrl?: (Scalars['String'] | null) | null;

  format?: (Scalars['String'] | null) | null;

  fulfillmentOrdersOptIn?: (Scalars['Boolean'] | null) | null;

  handle?: (Scalars['String'] | null) | null;

  inventoryManagement?: (Scalars['Boolean'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  permitsSkuSharing?: (Scalars['Boolean'] | null) | null;

  requiresShippingMethod?: (Scalars['Boolean'] | null) | null;

  trackingSupport?: (Scalars['Boolean'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyFulfillmentServiceUpdateInput = {

  id: (Scalars['GadgetID'] | null);

  callbackUrl?: (Scalars['String'] | null) | null;

  format?: (Scalars['String'] | null) | null;

  fulfillmentOrdersOptIn?: (Scalars['Boolean'] | null) | null;

  handle?: (Scalars['String'] | null) | null;

  inventoryManagement?: (Scalars['Boolean'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  permitsSkuSharing?: (Scalars['Boolean'] | null) | null;

  requiresShippingMethod?: (Scalars['Boolean'] | null) | null;

  trackingSupport?: (Scalars['Boolean'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyFulfillmentServiceDeleteInput = {

  id: (Scalars['GadgetID'] | null);
};



export type ConvergeShopifyFulfillmentServiceInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyFulfillmentServiceValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyFulfillmentServiceValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  callbackUrl?: (Scalars['String'] | null) | null;

  format?: (Scalars['String'] | null) | null;

  fulfillmentOrdersOptIn?: (Scalars['Boolean'] | null) | null;

  handle?: (Scalars['String'] | null) | null;

  inventoryManagement?: (Scalars['Boolean'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  permitsSkuSharing?: (Scalars['Boolean'] | null) | null;

  requiresShippingMethod?: (Scalars['Boolean'] | null) | null;

  trackingSupport?: (Scalars['Boolean'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyBulkOperationHasManyInput = {

  create?: NestedShopifyBulkOperationCreateInput | null;

  update?: NestedShopifyBulkOperationUpdateInput | null;

  complete?: NestedShopifyBulkOperationCompleteInput | null;

  cancel?: NestedShopifyBulkOperationCancelInput | null;

  fail?: NestedShopifyBulkOperationFailInput | null;

  expire?: NestedShopifyBulkOperationExpireInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyBulkOperationInput | null;
};



export type NestedShopifyBulkOperationCreateInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  errorCode?: ShopifyBulkOperationErrorCodeEnum | null;

  fileSize?: (Scalars['String'] | null) | null;

  objectCount?: (Scalars['String'] | null) | null;

  partialDataUrl?: (Scalars['String'] | null) | null;

  query?: (Scalars['String'] | null) | null;

  rootObjectCount?: (Scalars['String'] | null) | null;

  status?: ShopifyBulkOperationStatusEnum | null;

  type?: ShopifyBulkOperationTypeEnum | null;

  url?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyBulkOperationUpdateInput = {

  id: (Scalars['GadgetID'] | null);

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  errorCode?: ShopifyBulkOperationErrorCodeEnum | null;

  fileSize?: (Scalars['String'] | null) | null;

  objectCount?: (Scalars['String'] | null) | null;

  partialDataUrl?: (Scalars['String'] | null) | null;

  query?: (Scalars['String'] | null) | null;

  rootObjectCount?: (Scalars['String'] | null) | null;

  status?: ShopifyBulkOperationStatusEnum | null;

  type?: ShopifyBulkOperationTypeEnum | null;

  url?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyBulkOperationCompleteInput = {

  id: (Scalars['GadgetID'] | null);

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  errorCode?: ShopifyBulkOperationErrorCodeEnum | null;

  fileSize?: (Scalars['String'] | null) | null;

  objectCount?: (Scalars['String'] | null) | null;

  partialDataUrl?: (Scalars['String'] | null) | null;

  query?: (Scalars['String'] | null) | null;

  rootObjectCount?: (Scalars['String'] | null) | null;

  status?: ShopifyBulkOperationStatusEnum | null;

  type?: ShopifyBulkOperationTypeEnum | null;

  url?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyBulkOperationCancelInput = {

  id: (Scalars['GadgetID'] | null);

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  errorCode?: ShopifyBulkOperationErrorCodeEnum | null;

  fileSize?: (Scalars['String'] | null) | null;

  objectCount?: (Scalars['String'] | null) | null;

  partialDataUrl?: (Scalars['String'] | null) | null;

  query?: (Scalars['String'] | null) | null;

  rootObjectCount?: (Scalars['String'] | null) | null;

  status?: ShopifyBulkOperationStatusEnum | null;

  type?: ShopifyBulkOperationTypeEnum | null;

  url?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyBulkOperationFailInput = {

  id: (Scalars['GadgetID'] | null);

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  errorCode?: ShopifyBulkOperationErrorCodeEnum | null;

  fileSize?: (Scalars['String'] | null) | null;

  objectCount?: (Scalars['String'] | null) | null;

  partialDataUrl?: (Scalars['String'] | null) | null;

  query?: (Scalars['String'] | null) | null;

  rootObjectCount?: (Scalars['String'] | null) | null;

  status?: ShopifyBulkOperationStatusEnum | null;

  type?: ShopifyBulkOperationTypeEnum | null;

  url?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type NestedShopifyBulkOperationExpireInput = {

  id: (Scalars['GadgetID'] | null);

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  errorCode?: ShopifyBulkOperationErrorCodeEnum | null;

  fileSize?: (Scalars['String'] | null) | null;

  objectCount?: (Scalars['String'] | null) | null;

  partialDataUrl?: (Scalars['String'] | null) | null;

  query?: (Scalars['String'] | null) | null;

  rootObjectCount?: (Scalars['String'] | null) | null;

  status?: ShopifyBulkOperationStatusEnum | null;

  type?: ShopifyBulkOperationTypeEnum | null;

  url?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ConvergeShopifyBulkOperationInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyBulkOperationValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyBulkOperationValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  errorCode?: ShopifyBulkOperationErrorCodeEnum | null;

  fileSize?: (Scalars['String'] | null) | null;

  objectCount?: (Scalars['String'] | null) | null;

  partialDataUrl?: (Scalars['String'] | null) | null;

  query?: (Scalars['String'] | null) | null;

  rootObjectCount?: (Scalars['String'] | null) | null;

  status?: ShopifyBulkOperationStatusEnum | null;

  type?: ShopifyBulkOperationTypeEnum | null;

  url?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyDomainHasManyInput = {

  create?: NestedShopifyDomainCreateInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyDomainInput | null;
};



export type ConvergeShopifyDomainInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyDomainValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyDomainValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  marketWebPresences?: (ShopifyMarketWebPresenceHasManyInput | null)[];

  host?: (Scalars['String'] | null) | null;

  localization?: (Scalars['JSON'] | null) | null;

  sslEnabled?: (Scalars['Boolean'] | null) | null;

  url?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyDisputeEvidenceHasManyInput = {

  create?: NestedShopifyDisputeEvidenceCreateInput | null;

  update?: NestedShopifyDisputeEvidenceUpdateInput | null;

  delete?: NestedShopifyDisputeEvidenceDeleteInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyDisputeEvidenceInput | null;
};



export type ConvergeShopifyDisputeEvidenceInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyDisputeEvidenceValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyDisputeEvidenceValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  customerEmailAddress?: (Scalars['String'] | null) | null;

  customerFirstName?: (Scalars['String'] | null) | null;

  customerLastName?: (Scalars['String'] | null) | null;

  productDescription?: (Scalars['String'] | null) | null;

  submittedByMerchantOn?: Date | Scalars['ISO8601DateString'] | null;

  uncategorizedText?: (Scalars['String'] | null) | null;

  dispute?: ShopifyDisputeBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type ShopifyProductHasManyInput = {

  update?: NestedShopifyProductUpdateInput | null;

  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergeShopifyProductInput | null;
};



export type ConvergeShopifyProductInput = {

  /** The new list of records to converge to */
  values: (ConvergeShopifyProductValues | null)[];

  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export type ConvergeShopifyProductValues = {

  id?: (Scalars['GadgetID'] | null) | null;

  compareAtPriceRange?: (Scalars['JSON'] | null) | null;

  productCategory?: (Scalars['JSON'] | null) | null;

  body?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  handle?: (Scalars['String'] | null) | null;

  checkoutLineItems?: (ShopifyCheckoutLineItemHasManyInput | null)[];

  productType?: (Scalars['String'] | null) | null;

  publishedAt?: Date | Scalars['ISO8601DateString'] | null;

  publishedScope?: (Scalars['String'] | null) | null;

  status?: ShopifyProductStatusEnum | null;

  tags?: (Scalars['JSON'] | null) | null;

  templateSuffix?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  vendor?: (Scalars['String'] | null) | null;

  customCollections?: (ShopifyCollectionHasManyThroughInput | null)[];

  shop?: ShopifyShopBelongsToInput | null;

  shopifySmartCollects?: (ShopifySmartCollectHasManyInput | null)[];

  smartCollections?: (ShopifyCollectionHasManyThroughInput | null)[];

  shopifySmartCollect?: (ShopifySmartCollectHasManyInput | null)[];
};



export type BulkCreateShopifyBulkOperationsInput = {

  shopifyBulkOperation?: CreateShopifyBulkOperationInput | null;
};



export type UpdateShopifyBulkOperationInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  errorCode?: ShopifyBulkOperationErrorCodeEnum | null;

  fileSize?: (Scalars['String'] | null) | null;

  objectCount?: (Scalars['String'] | null) | null;

  partialDataUrl?: (Scalars['String'] | null) | null;

  query?: (Scalars['String'] | null) | null;

  rootObjectCount?: (Scalars['String'] | null) | null;

  status?: ShopifyBulkOperationStatusEnum | null;

  type?: ShopifyBulkOperationTypeEnum | null;

  url?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkUpdateShopifyBulkOperationsInput = {

  shopifyBulkOperation?: UpdateShopifyBulkOperationInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CompleteShopifyBulkOperationInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  errorCode?: ShopifyBulkOperationErrorCodeEnum | null;

  fileSize?: (Scalars['String'] | null) | null;

  objectCount?: (Scalars['String'] | null) | null;

  partialDataUrl?: (Scalars['String'] | null) | null;

  query?: (Scalars['String'] | null) | null;

  rootObjectCount?: (Scalars['String'] | null) | null;

  status?: ShopifyBulkOperationStatusEnum | null;

  type?: ShopifyBulkOperationTypeEnum | null;

  url?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCompleteShopifyBulkOperationsInput = {

  shopifyBulkOperation?: CompleteShopifyBulkOperationInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CancelShopifyBulkOperationInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  errorCode?: ShopifyBulkOperationErrorCodeEnum | null;

  fileSize?: (Scalars['String'] | null) | null;

  objectCount?: (Scalars['String'] | null) | null;

  partialDataUrl?: (Scalars['String'] | null) | null;

  query?: (Scalars['String'] | null) | null;

  rootObjectCount?: (Scalars['String'] | null) | null;

  status?: ShopifyBulkOperationStatusEnum | null;

  type?: ShopifyBulkOperationTypeEnum | null;

  url?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCancelShopifyBulkOperationsInput = {

  shopifyBulkOperation?: CancelShopifyBulkOperationInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type FailShopifyBulkOperationInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  errorCode?: ShopifyBulkOperationErrorCodeEnum | null;

  fileSize?: (Scalars['String'] | null) | null;

  objectCount?: (Scalars['String'] | null) | null;

  partialDataUrl?: (Scalars['String'] | null) | null;

  query?: (Scalars['String'] | null) | null;

  rootObjectCount?: (Scalars['String'] | null) | null;

  status?: ShopifyBulkOperationStatusEnum | null;

  type?: ShopifyBulkOperationTypeEnum | null;

  url?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkFailShopifyBulkOperationsInput = {

  shopifyBulkOperation?: FailShopifyBulkOperationInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type ExpireShopifyBulkOperationInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  errorCode?: ShopifyBulkOperationErrorCodeEnum | null;

  fileSize?: (Scalars['String'] | null) | null;

  objectCount?: (Scalars['String'] | null) | null;

  partialDataUrl?: (Scalars['String'] | null) | null;

  query?: (Scalars['String'] | null) | null;

  rootObjectCount?: (Scalars['String'] | null) | null;

  status?: ShopifyBulkOperationStatusEnum | null;

  type?: ShopifyBulkOperationTypeEnum | null;

  url?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkExpireShopifyBulkOperationsInput = {

  shopifyBulkOperation?: ExpireShopifyBulkOperationInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CreateShopifyCheckoutInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  abandonedCheckoutUrl?: (Scalars['String'] | null) | null;

  appliedDiscount?: (Scalars['JSON'] | null) | null;

  buyerAcceptsMarketing?: (Scalars['Boolean'] | null) | null;

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  creditCard?: (Scalars['String'] | null) | null;

  currency?: (Scalars['String'] | null) | null;

  customerLocale?: (Scalars['String'] | null) | null;

  device?: (Scalars['Float'] | null) | null;

  discountCode?: (Scalars['String'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  legalNoticeUrl?: (Scalars['String'] | null) | null;

  lineItems?: (ShopifyCheckoutLineItemHasManyInput | null)[];

  name?: (Scalars['String'] | null) | null;

  note?: (Scalars['String'] | null) | null;

  noteAttributes?: (Scalars['JSON'] | null) | null;

  orderStatusUrl?: (Scalars['String'] | null) | null;

  paymentDue?: (Scalars['String'] | null) | null;

  paymentUrl?: (Scalars['String'] | null) | null;

  payments?: (Scalars['JSON'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  presentmentCurrency?: (Scalars['String'] | null) | null;

  privacyPolicyUrl?: (Scalars['String'] | null) | null;

  refundPolicyUrl?: (Scalars['String'] | null) | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  reservationTime?: (Scalars['Float'] | null) | null;

  reservationTimeLeft?: (Scalars['Float'] | null) | null;

  shippingLine?: (Scalars['JSON'] | null) | null;

  shippingPolicyUrl?: (Scalars['String'] | null) | null;

  shopifyPaymentsAccountId?: (Scalars['String'] | null) | null;

  sourceIdentifier?: (Scalars['String'] | null) | null;

  sourceName?: (Scalars['String'] | null) | null;

  sourceUrl?: (Scalars['String'] | null) | null;

  subscriptionPolicyUrl?: (Scalars['String'] | null) | null;

  subtotalPrice?: (Scalars['String'] | null) | null;

  taxExempt?: (Scalars['Boolean'] | null) | null;

  taxLines?: (Scalars['JSON'] | null) | null;

  taxManipulations?: (Scalars['JSON'] | null) | null;

  taxesIncluded?: (Scalars['Boolean'] | null) | null;

  termsOfSaleUrl?: (Scalars['String'] | null) | null;

  termsOfServiceUrl?: (Scalars['String'] | null) | null;

  token?: (Scalars['String'] | null) | null;

  totalLineItemsPrice?: (Scalars['String'] | null) | null;

  totalPrice?: (Scalars['String'] | null) | null;

  totalTax?: (Scalars['String'] | null) | null;

  totalTipReceived?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  userId?: (Scalars['String'] | null) | null;

  webUrl?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  order?: ShopifyOrderBelongsToInput | null;
};



export type BulkCreateShopifyCheckoutsInput = {

  shopifyCheckout?: CreateShopifyCheckoutInput | null;
};



export type UpdateShopifyCheckoutInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  abandonedCheckoutUrl?: (Scalars['String'] | null) | null;

  appliedDiscount?: (Scalars['JSON'] | null) | null;

  buyerAcceptsMarketing?: (Scalars['Boolean'] | null) | null;

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  creditCard?: (Scalars['String'] | null) | null;

  currency?: (Scalars['String'] | null) | null;

  customerLocale?: (Scalars['String'] | null) | null;

  device?: (Scalars['Float'] | null) | null;

  discountCode?: (Scalars['String'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  legalNoticeUrl?: (Scalars['String'] | null) | null;

  lineItems?: (ShopifyCheckoutLineItemHasManyInput | null)[];

  name?: (Scalars['String'] | null) | null;

  note?: (Scalars['String'] | null) | null;

  noteAttributes?: (Scalars['JSON'] | null) | null;

  orderStatusUrl?: (Scalars['String'] | null) | null;

  paymentDue?: (Scalars['String'] | null) | null;

  paymentUrl?: (Scalars['String'] | null) | null;

  payments?: (Scalars['JSON'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  presentmentCurrency?: (Scalars['String'] | null) | null;

  privacyPolicyUrl?: (Scalars['String'] | null) | null;

  refundPolicyUrl?: (Scalars['String'] | null) | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  reservationTime?: (Scalars['Float'] | null) | null;

  reservationTimeLeft?: (Scalars['Float'] | null) | null;

  shippingLine?: (Scalars['JSON'] | null) | null;

  shippingPolicyUrl?: (Scalars['String'] | null) | null;

  shopifyPaymentsAccountId?: (Scalars['String'] | null) | null;

  sourceIdentifier?: (Scalars['String'] | null) | null;

  sourceName?: (Scalars['String'] | null) | null;

  sourceUrl?: (Scalars['String'] | null) | null;

  subscriptionPolicyUrl?: (Scalars['String'] | null) | null;

  subtotalPrice?: (Scalars['String'] | null) | null;

  taxExempt?: (Scalars['Boolean'] | null) | null;

  taxLines?: (Scalars['JSON'] | null) | null;

  taxManipulations?: (Scalars['JSON'] | null) | null;

  taxesIncluded?: (Scalars['Boolean'] | null) | null;

  termsOfSaleUrl?: (Scalars['String'] | null) | null;

  termsOfServiceUrl?: (Scalars['String'] | null) | null;

  token?: (Scalars['String'] | null) | null;

  totalLineItemsPrice?: (Scalars['String'] | null) | null;

  totalPrice?: (Scalars['String'] | null) | null;

  totalTax?: (Scalars['String'] | null) | null;

  totalTipReceived?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  userId?: (Scalars['String'] | null) | null;

  webUrl?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  order?: ShopifyOrderBelongsToInput | null;
};



export type BulkUpdateShopifyCheckoutsInput = {

  shopifyCheckout?: UpdateShopifyCheckoutInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CreateShopifyCheckoutLineItemInput = {

  appliedDiscounts?: (Scalars['JSON'] | null) | null;

  compareAtPrice?: (Scalars['String'] | null) | null;

  discountAllocations?: (Scalars['JSON'] | null) | null;

  fulfillmentService?: (Scalars['String'] | null) | null;

  grams?: (Scalars['Float'] | null) | null;

  key?: (Scalars['String'] | null) | null;

  linePrice?: (Scalars['String'] | null) | null;

  price?: (Scalars['String'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  sku?: (Scalars['String'] | null) | null;

  taxable?: (Scalars['Boolean'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  variantTitle?: (Scalars['String'] | null) | null;

  vendor?: (Scalars['String'] | null) | null;

  checkout?: ShopifyCheckoutBelongsToInput | null;

  product?: ShopifyProductBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCreateShopifyCheckoutLineItemsInput = {

  shopifyCheckoutLineItem?: CreateShopifyCheckoutLineItemInput | null;
};



export type UpdateShopifyCheckoutLineItemInput = {

  appliedDiscounts?: (Scalars['JSON'] | null) | null;

  compareAtPrice?: (Scalars['String'] | null) | null;

  discountAllocations?: (Scalars['JSON'] | null) | null;

  fulfillmentService?: (Scalars['String'] | null) | null;

  grams?: (Scalars['Float'] | null) | null;

  key?: (Scalars['String'] | null) | null;

  linePrice?: (Scalars['String'] | null) | null;

  price?: (Scalars['String'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  sku?: (Scalars['String'] | null) | null;

  taxable?: (Scalars['Boolean'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  variantTitle?: (Scalars['String'] | null) | null;

  vendor?: (Scalars['String'] | null) | null;

  checkout?: ShopifyCheckoutBelongsToInput | null;

  product?: ShopifyProductBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkUpdateShopifyCheckoutLineItemsInput = {

  shopifyCheckoutLineItem?: UpdateShopifyCheckoutLineItemInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type UpdateShopifyCollectionInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  body?: (Scalars['String'] | null) | null;

  disjunctive?: (Scalars['Boolean'] | null) | null;

  handle?: (Scalars['String'] | null) | null;

  image?: (Scalars['JSON'] | null) | null;

  publishedAt?: Date | Scalars['ISO8601DateString'] | null;

  publishedScope?: (Scalars['String'] | null) | null;

  rules?: (Scalars['JSON'] | null) | null;

  sortOrder?: (Scalars['String'] | null) | null;

  templateSuffix?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  products?: (ShopifyProductHasManyThroughInput | null)[];

  shop?: ShopifyShopBelongsToInput | null;

  collectionType?: ShopifyCollectionCollectionTypeEnum | null;

  shopifySmartCollects?: (ShopifySmartCollectHasManyInput | null)[];

  smartProducts?: (ShopifyProductHasManyThroughInput | null)[];

  shopifySmartCollect?: (ShopifySmartCollectHasManyInput | null)[];

  collected?: Date | Scalars['ISO8601DateString'] | null;
};



export type BulkUpdateShopifyCollectionsInput = {

  shopifyCollection?: UpdateShopifyCollectionInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CreateShopifyCompanyInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  contactCount?: (Scalars['Int'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  customerSince?: Date | Scalars['ISO8601DateString'] | null;

  externalId?: (Scalars['String'] | null) | null;

  lifetimeDuration?: (Scalars['String'] | null) | null;

  locationCount?: (Scalars['Float'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  note?: (Scalars['String'] | null) | null;

  orderCount?: (Scalars['Int'] | null) | null;

  totalSpent?: (Scalars['JSON'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCreateShopifyCompaniesInput = {

  shopifyCompany?: CreateShopifyCompanyInput | null;
};



export type UpdateShopifyCompanyInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  contactCount?: (Scalars['Int'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  customerSince?: Date | Scalars['ISO8601DateString'] | null;

  externalId?: (Scalars['String'] | null) | null;

  lifetimeDuration?: (Scalars['String'] | null) | null;

  locationCount?: (Scalars['Float'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  note?: (Scalars['String'] | null) | null;

  orderCount?: (Scalars['Int'] | null) | null;

  totalSpent?: (Scalars['JSON'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkUpdateShopifyCompaniesInput = {

  shopifyCompany?: UpdateShopifyCompanyInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CreateShopifyDiscountInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  appDiscountType?: (Scalars['JSON'] | null) | null;

  appliesOnOneTimePurchase?: (Scalars['Boolean'] | null) | null;

  appliesOnSubscription?: (Scalars['Boolean'] | null) | null;

  appliesOncePerCustomer?: (Scalars['Boolean'] | null) | null;

  asyncUsageCount?: (Scalars['Float'] | null) | null;

  codeCount?: (Scalars['Int'] | null) | null;

  combinesWith?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  destinationSelection?: (Scalars['JSON'] | null) | null;

  discountClass?: ShopifyDiscountDiscountClassEnum | null;

  discountId?: (Scalars['String'] | null) | null;

  endsAt?: Date | Scalars['ISO8601DateString'] | null;

  errorHistory?: (Scalars['JSON'] | null) | null;

  hasTimelineComment?: (Scalars['Boolean'] | null) | null;

  maximumShippingPrice?: (Scalars['JSON'] | null) | null;

  minimumRequirement?: (Scalars['JSON'] | null) | null;

  recurringCycleLimit?: (Scalars['Int'] | null) | null;

  shareableUrls?: (Scalars['JSON'] | null) | null;

  shortSummary?: (Scalars['String'] | null) | null;

  startsAt?: Date | Scalars['ISO8601DateString'] | null;

  status?: ShopifyDiscountStatusEnum | null;

  summary?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  totalSales?: (Scalars['JSON'] | null) | null;

  usageLimit?: (Scalars['Int'] | null) | null;

  usesPerOrderLimit?: (Scalars['Int'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCreateShopifyDiscountsInput = {

  shopifyDiscount?: CreateShopifyDiscountInput | null;
};



export type UpdateShopifyDiscountInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  appDiscountType?: (Scalars['JSON'] | null) | null;

  appliesOnOneTimePurchase?: (Scalars['Boolean'] | null) | null;

  appliesOnSubscription?: (Scalars['Boolean'] | null) | null;

  appliesOncePerCustomer?: (Scalars['Boolean'] | null) | null;

  asyncUsageCount?: (Scalars['Float'] | null) | null;

  codeCount?: (Scalars['Int'] | null) | null;

  combinesWith?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  destinationSelection?: (Scalars['JSON'] | null) | null;

  discountClass?: ShopifyDiscountDiscountClassEnum | null;

  discountId?: (Scalars['String'] | null) | null;

  endsAt?: Date | Scalars['ISO8601DateString'] | null;

  errorHistory?: (Scalars['JSON'] | null) | null;

  hasTimelineComment?: (Scalars['Boolean'] | null) | null;

  maximumShippingPrice?: (Scalars['JSON'] | null) | null;

  minimumRequirement?: (Scalars['JSON'] | null) | null;

  recurringCycleLimit?: (Scalars['Int'] | null) | null;

  shareableUrls?: (Scalars['JSON'] | null) | null;

  shortSummary?: (Scalars['String'] | null) | null;

  startsAt?: Date | Scalars['ISO8601DateString'] | null;

  status?: ShopifyDiscountStatusEnum | null;

  summary?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  totalSales?: (Scalars['JSON'] | null) | null;

  usageLimit?: (Scalars['Int'] | null) | null;

  usesPerOrderLimit?: (Scalars['Int'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkUpdateShopifyDiscountsInput = {

  shopifyDiscount?: UpdateShopifyDiscountInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CreateShopifyDiscountCodeInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  code?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  usageCount?: (Scalars['Float'] | null) | null;

  priceRule?: ShopifyPriceRuleBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCreateShopifyDiscountCodesInput = {

  shopifyDiscountCode?: CreateShopifyDiscountCodeInput | null;
};



export type UpdateShopifyDiscountCodeInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  code?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  usageCount?: (Scalars['Float'] | null) | null;

  priceRule?: ShopifyPriceRuleBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkUpdateShopifyDiscountCodesInput = {

  shopifyDiscountCode?: UpdateShopifyDiscountCodeInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CreateShopifyDisputeInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  amount?: (Scalars['String'] | null) | null;

  currency?: (Scalars['String'] | null) | null;

  evidenceDueBy?: Date | Scalars['ISO8601DateString'] | null;

  evidenceSentOn?: Date | Scalars['ISO8601DateString'] | null;

  finalizedOn?: Date | Scalars['ISO8601DateString'] | null;

  networkReasonCode?: (Scalars['String'] | null) | null;

  reason?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  type?: (Scalars['String'] | null) | null;

  disputeEvidence?: ShopifyDisputeEvidenceHasOneInput | null;

  order?: ShopifyOrderBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCreateShopifyDisputesInput = {

  shopifyDispute?: CreateShopifyDisputeInput | null;
};



export type UpdateShopifyDisputeInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  amount?: (Scalars['String'] | null) | null;

  currency?: (Scalars['String'] | null) | null;

  evidenceDueBy?: Date | Scalars['ISO8601DateString'] | null;

  evidenceSentOn?: Date | Scalars['ISO8601DateString'] | null;

  finalizedOn?: Date | Scalars['ISO8601DateString'] | null;

  networkReasonCode?: (Scalars['String'] | null) | null;

  reason?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  type?: (Scalars['String'] | null) | null;

  disputeEvidence?: ShopifyDisputeEvidenceHasOneInput | null;

  order?: ShopifyOrderBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkUpdateShopifyDisputesInput = {

  shopifyDispute?: UpdateShopifyDisputeInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CreateShopifyDisputeEvidenceInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  customerEmailAddress?: (Scalars['String'] | null) | null;

  customerFirstName?: (Scalars['String'] | null) | null;

  customerLastName?: (Scalars['String'] | null) | null;

  productDescription?: (Scalars['String'] | null) | null;

  submittedByMerchantOn?: Date | Scalars['ISO8601DateString'] | null;

  uncategorizedText?: (Scalars['String'] | null) | null;

  dispute?: ShopifyDisputeBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCreateShopifyDisputeEvidencesInput = {

  shopifyDisputeEvidence?: CreateShopifyDisputeEvidenceInput | null;
};



export type UpdateShopifyDisputeEvidenceInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  customerEmailAddress?: (Scalars['String'] | null) | null;

  customerFirstName?: (Scalars['String'] | null) | null;

  customerLastName?: (Scalars['String'] | null) | null;

  productDescription?: (Scalars['String'] | null) | null;

  submittedByMerchantOn?: Date | Scalars['ISO8601DateString'] | null;

  uncategorizedText?: (Scalars['String'] | null) | null;

  dispute?: ShopifyDisputeBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkUpdateShopifyDisputeEvidencesInput = {

  shopifyDisputeEvidence?: UpdateShopifyDisputeEvidenceInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CreateShopifyDomainInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  marketWebPresences?: (ShopifyMarketWebPresenceHasManyInput | null)[];

  host?: (Scalars['String'] | null) | null;

  localization?: (Scalars['JSON'] | null) | null;

  sslEnabled?: (Scalars['Boolean'] | null) | null;

  url?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCreateShopifyDomainsInput = {

  shopifyDomain?: CreateShopifyDomainInput | null;
};



export type CreateShopifyFulfillmentInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  name?: (Scalars['String'] | null) | null;

  notifyCustomer?: (Scalars['Boolean'] | null) | null;

  originAddress?: (Scalars['JSON'] | null) | null;

  receipt?: (Scalars['JSON'] | null) | null;

  service?: (Scalars['String'] | null) | null;

  shipmentStatus?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  trackingCompany?: (Scalars['String'] | null) | null;

  trackingNumbers?: (Scalars['JSON'] | null) | null;

  trackingUrls?: (Scalars['JSON'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  variantInventoryManagement?: (Scalars['String'] | null) | null;

  fulfillmentLineItems?: (ShopifyFulfillmentLineItemHasManyInput | null)[];

  order?: ShopifyOrderBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCreateShopifyFulfillmentsInput = {

  shopifyFulfillment?: CreateShopifyFulfillmentInput | null;
};



export type UpdateShopifyFulfillmentInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  name?: (Scalars['String'] | null) | null;

  notifyCustomer?: (Scalars['Boolean'] | null) | null;

  originAddress?: (Scalars['JSON'] | null) | null;

  receipt?: (Scalars['JSON'] | null) | null;

  service?: (Scalars['String'] | null) | null;

  shipmentStatus?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  trackingCompany?: (Scalars['String'] | null) | null;

  trackingNumbers?: (Scalars['JSON'] | null) | null;

  trackingUrls?: (Scalars['JSON'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  variantInventoryManagement?: (Scalars['String'] | null) | null;

  fulfillmentLineItems?: (ShopifyFulfillmentLineItemHasManyInput | null)[];

  order?: ShopifyOrderBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkUpdateShopifyFulfillmentsInput = {

  shopifyFulfillment?: UpdateShopifyFulfillmentInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CreateShopifyFulfillmentLineItemInput = {

  originalTotalSet?: (Scalars['JSON'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  discountedTotalSet?: (Scalars['JSON'] | null) | null;

  fulfillment?: ShopifyFulfillmentBelongsToInput | null;

  orderLineItem?: ShopifyOrderLineItemBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCreateShopifyFulfillmentLineItemsInput = {

  shopifyFulfillmentLineItem?: CreateShopifyFulfillmentLineItemInput | null;
};



export type UpdateShopifyFulfillmentLineItemInput = {

  originalTotalSet?: (Scalars['JSON'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  discountedTotalSet?: (Scalars['JSON'] | null) | null;

  fulfillment?: ShopifyFulfillmentBelongsToInput | null;

  orderLineItem?: ShopifyOrderLineItemBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkUpdateShopifyFulfillmentLineItemsInput = {

  shopifyFulfillmentLineItem?: UpdateShopifyFulfillmentLineItemInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CreateShopifyFulfillmentOrderInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  assignedLocation?: (Scalars['JSON'] | null) | null;

  deliveryMethod?: (Scalars['JSON'] | null) | null;

  destination?: (Scalars['JSON'] | null) | null;

  fulfillAt?: Date | Scalars['ISO8601DateString'] | null;

  fulfillBy?: Date | Scalars['ISO8601DateString'] | null;

  fulfillmentHolds?: (Scalars['JSON'] | null) | null;

  internationalDuties?: (Scalars['JSON'] | null) | null;

  merchantRequests?: (Scalars['JSON'] | null) | null;

  requestStatus?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  supportedActions?: (Scalars['JSON'] | null) | null;

  fulfillmentOrderLineItems?: (ShopifyFulfillmentOrderLineItemHasManyInput | null)[];

  order?: ShopifyOrderBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCreateShopifyFulfillmentOrdersInput = {

  shopifyFulfillmentOrder?: CreateShopifyFulfillmentOrderInput | null;
};



export type UpdateShopifyFulfillmentOrderInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  assignedLocation?: (Scalars['JSON'] | null) | null;

  deliveryMethod?: (Scalars['JSON'] | null) | null;

  destination?: (Scalars['JSON'] | null) | null;

  fulfillAt?: Date | Scalars['ISO8601DateString'] | null;

  fulfillBy?: Date | Scalars['ISO8601DateString'] | null;

  fulfillmentHolds?: (Scalars['JSON'] | null) | null;

  internationalDuties?: (Scalars['JSON'] | null) | null;

  merchantRequests?: (Scalars['JSON'] | null) | null;

  requestStatus?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  supportedActions?: (Scalars['JSON'] | null) | null;

  fulfillmentOrderLineItems?: (ShopifyFulfillmentOrderLineItemHasManyInput | null)[];

  order?: ShopifyOrderBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkUpdateShopifyFulfillmentOrdersInput = {

  shopifyFulfillmentOrder?: UpdateShopifyFulfillmentOrderInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CreateShopifyFulfillmentOrderLineItemInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  remainingQuantity?: (Scalars['Float'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  fulfillmentOrder?: ShopifyFulfillmentOrderBelongsToInput | null;

  orderLineItem?: ShopifyOrderLineItemBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCreateShopifyFulfillmentOrderLineItemsInput = {

  shopifyFulfillmentOrderLineItem?: CreateShopifyFulfillmentOrderLineItemInput | null;
};



export type UpdateShopifyFulfillmentOrderLineItemInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  remainingQuantity?: (Scalars['Float'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  fulfillmentOrder?: ShopifyFulfillmentOrderBelongsToInput | null;

  orderLineItem?: ShopifyOrderLineItemBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkUpdateShopifyFulfillmentOrderLineItemsInput = {

  shopifyFulfillmentOrderLineItem?: UpdateShopifyFulfillmentOrderLineItemInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CreateShopifyFulfillmentServiceInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  callbackUrl?: (Scalars['String'] | null) | null;

  format?: (Scalars['String'] | null) | null;

  fulfillmentOrdersOptIn?: (Scalars['Boolean'] | null) | null;

  handle?: (Scalars['String'] | null) | null;

  inventoryManagement?: (Scalars['Boolean'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  permitsSkuSharing?: (Scalars['Boolean'] | null) | null;

  requiresShippingMethod?: (Scalars['Boolean'] | null) | null;

  trackingSupport?: (Scalars['Boolean'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCreateShopifyFulfillmentServicesInput = {

  shopifyFulfillmentService?: CreateShopifyFulfillmentServiceInput | null;
};



export type UpdateShopifyFulfillmentServiceInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  callbackUrl?: (Scalars['String'] | null) | null;

  format?: (Scalars['String'] | null) | null;

  fulfillmentOrdersOptIn?: (Scalars['Boolean'] | null) | null;

  handle?: (Scalars['String'] | null) | null;

  inventoryManagement?: (Scalars['Boolean'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  permitsSkuSharing?: (Scalars['Boolean'] | null) | null;

  requiresShippingMethod?: (Scalars['Boolean'] | null) | null;

  trackingSupport?: (Scalars['Boolean'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkUpdateShopifyFulfillmentServicesInput = {

  shopifyFulfillmentService?: UpdateShopifyFulfillmentServiceInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CreateShopifyMarketInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  currencySettings?: (Scalars['JSON'] | null) | null;

  enabled?: (Scalars['Boolean'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  primary?: (Scalars['Boolean'] | null) | null;

  regions?: (ShopifyMarketRegionHasManyInput | null)[];

  marketWebPresence?: ShopifyMarketWebPresenceBelongsToInput | null;

  marketWebPresences?: (ShopifyMarketWebPresenceHasManyInput | null)[];

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCreateShopifyMarketsInput = {

  shopifyMarket?: CreateShopifyMarketInput | null;
};



export type UpdateShopifyMarketInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  currencySettings?: (Scalars['JSON'] | null) | null;

  enabled?: (Scalars['Boolean'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  primary?: (Scalars['Boolean'] | null) | null;

  regions?: (ShopifyMarketRegionHasManyInput | null)[];

  marketWebPresence?: ShopifyMarketWebPresenceBelongsToInput | null;

  marketWebPresences?: (ShopifyMarketWebPresenceHasManyInput | null)[];

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkUpdateShopifyMarketsInput = {

  shopifyMarket?: UpdateShopifyMarketInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CreateShopifyMarketRegionInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  code?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  market?: ShopifyMarketBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCreateShopifyMarketRegionsInput = {

  shopifyMarketRegion?: CreateShopifyMarketRegionInput | null;
};



export type UpdateShopifyMarketRegionInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  code?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  market?: ShopifyMarketBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkUpdateShopifyMarketRegionsInput = {

  shopifyMarketRegion?: UpdateShopifyMarketRegionInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CreateShopifyMarketWebPresenceInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  primaryWebPresenceForMarket?: ShopifyMarketHasOneInput | null;

  alternateLocales?: (Scalars['JSON'] | null) | null;

  rootUrls?: (Scalars['JSON'] | null) | null;

  subfolderSuffix?: (Scalars['String'] | null) | null;

  domain?: ShopifyDomainBelongsToInput | null;

  market?: ShopifyMarketBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCreateShopifyMarketWebPresencesInput = {

  shopifyMarketWebPresence?: CreateShopifyMarketWebPresenceInput | null;
};



export type UpdateShopifyMarketWebPresenceInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  primaryWebPresenceForMarket?: ShopifyMarketHasOneInput | null;

  alternateLocales?: (Scalars['JSON'] | null) | null;

  rootUrls?: (Scalars['JSON'] | null) | null;

  subfolderSuffix?: (Scalars['String'] | null) | null;

  domain?: ShopifyDomainBelongsToInput | null;

  market?: ShopifyMarketBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkUpdateShopifyMarketWebPresencesInput = {

  shopifyMarketWebPresence?: UpdateShopifyMarketWebPresenceInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type UpdateShopifyProductInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  compareAtPriceRange?: (Scalars['JSON'] | null) | null;

  productCategory?: (Scalars['JSON'] | null) | null;

  body?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  handle?: (Scalars['String'] | null) | null;

  checkoutLineItems?: (ShopifyCheckoutLineItemHasManyInput | null)[];

  productType?: (Scalars['String'] | null) | null;

  publishedAt?: Date | Scalars['ISO8601DateString'] | null;

  publishedScope?: (Scalars['String'] | null) | null;

  status?: ShopifyProductStatusEnum | null;

  tags?: (Scalars['JSON'] | null) | null;

  templateSuffix?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  vendor?: (Scalars['String'] | null) | null;

  customCollections?: (ShopifyCollectionHasManyThroughInput | null)[];

  shop?: ShopifyShopBelongsToInput | null;

  shopifySmartCollects?: (ShopifySmartCollectHasManyInput | null)[];

  smartCollections?: (ShopifyCollectionHasManyThroughInput | null)[];

  shopifySmartCollect?: (ShopifySmartCollectHasManyInput | null)[];
};



export type BulkUpdateShopifyProductsInput = {

  shopifyProduct?: UpdateShopifyProductInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CreateShopifyRefundInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  duties?: (ShopifyRefundDutyHasManyInput | null)[];

  note?: (Scalars['String'] | null) | null;

  processedAt?: Date | Scalars['ISO8601DateString'] | null;

  refundLineItems?: (ShopifyRefundLineItemHasManyInput | null)[];

  restock?: (Scalars['Boolean'] | null) | null;

  order?: ShopifyOrderBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCreateShopifyRefundsInput = {

  shopifyRefund?: CreateShopifyRefundInput | null;
};



export type CreateShopifyRefundDutyInput = {

  amountSet?: (Scalars['JSON'] | null) | null;

  refund?: ShopifyRefundBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCreateShopifyRefundDutiesInput = {

  shopifyRefundDuty?: CreateShopifyRefundDutyInput | null;
};



export type UpdateShopifyRefundDutyInput = {

  amountSet?: (Scalars['JSON'] | null) | null;

  refund?: ShopifyRefundBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkUpdateShopifyRefundDutiesInput = {

  shopifyRefundDuty?: UpdateShopifyRefundDutyInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CreateShopifyRefundLineItemInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  restockType?: (Scalars['String'] | null) | null;

  subtotal?: (Scalars['Float'] | null) | null;

  subtotalSet?: (Scalars['JSON'] | null) | null;

  totalTax?: (Scalars['Float'] | null) | null;

  totalTaxSet?: (Scalars['JSON'] | null) | null;

  orderLineItem?: ShopifyOrderLineItemBelongsToInput | null;

  refund?: ShopifyRefundBelongsToInput | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCreateShopifyRefundLineItemsInput = {

  shopifyRefundLineItem?: CreateShopifyRefundLineItemInput | null;
};



export type UpdateShopifyShopInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  collections?: (ShopifyCollectionHasManyInput | null)[];

  marketRegions?: (ShopifyMarketRegionHasManyInput | null)[];

  checkoutLineItems?: (ShopifyCheckoutLineItemHasManyInput | null)[];

  markets?: (ShopifyMarketHasManyInput | null)[];

  disputes?: (ShopifyDisputeHasManyInput | null)[];

  refunds?: (ShopifyRefundHasManyInput | null)[];

  refundLineItems?: (ShopifyRefundLineItemHasManyInput | null)[];

  company?: (ShopifyCompanyHasManyInput | null)[];

  syncs?: (ShopifySyncHasManyInput | null)[];

  checkouts?: (ShopifyCheckoutHasManyInput | null)[];

  fulfillments?: (ShopifyFulfillmentHasManyInput | null)[];

  marketWebPresences?: (ShopifyMarketWebPresenceHasManyInput | null)[];

  fulfillmentLineItems?: (ShopifyFulfillmentLineItemHasManyInput | null)[];

  fulfillmentOrderLineItems?: (ShopifyFulfillmentOrderLineItemHasManyInput | null)[];

  discountCodes?: (ShopifyDiscountCodeHasManyInput | null)[];

  refundDuties?: (ShopifyRefundDutyHasManyInput | null)[];

  customerAccountsV2?: (Scalars['JSON'] | null) | null;

  address1?: (Scalars['String'] | null) | null;

  address2?: (Scalars['String'] | null) | null;

  checkoutApiSupported?: (Scalars['Boolean'] | null) | null;

  city?: (Scalars['String'] | null) | null;

  cookieConsentLevel?: (Scalars['String'] | null) | null;

  country?: (Scalars['String'] | null) | null;

  countryCode?: (Scalars['String'] | null) | null;

  countryName?: (Scalars['String'] | null) | null;

  countyTaxes?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  currency?: (Scalars['String'] | null) | null;

  customerEmail?: (Scalars['String'] | null) | null;

  domain?: (Scalars['String'] | null) | null;

  eligibleForCardReaderGiveaway?: (Scalars['Boolean'] | null) | null;

  eligibleForPayments?: (Scalars['Boolean'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  enabledPresentmentCurrencies?: (Scalars['JSON'] | null) | null;

  finances?: (Scalars['Boolean'] | null) | null;

  forceSsl?: (Scalars['Boolean'] | null) | null;

  fulfillmentOrders?: (ShopifyFulfillmentOrderHasManyInput | null)[];

  googleAppsDomain?: (Scalars['String'] | null) | null;

  googleAppsLoginEnabled?: (Scalars['Boolean'] | null) | null;

  hasDiscounts?: (Scalars['Boolean'] | null) | null;

  hasGiftCards?: (Scalars['Boolean'] | null) | null;

  hasStorefront?: (Scalars['Boolean'] | null) | null;

  discounts?: (ShopifyDiscountHasManyInput | null)[];

  ianaTimezone?: (Scalars['String'] | null) | null;

  fulfillmentServices?: (ShopifyFulfillmentServiceHasManyInput | null)[];

  latitude?: (Scalars['Float'] | null) | null;

  longitude?: (Scalars['Float'] | null) | null;

  marketingSmsContentEnabledAtCheckout?: (Scalars['Boolean'] | null) | null;

  moneyFormat?: (Scalars['String'] | null) | null;

  moneyInEmailsFormat?: (Scalars['String'] | null) | null;

  moneyWithCurrencyFormat?: (Scalars['String'] | null) | null;

  moneyWithCurrencyInEmailsFormat?: (Scalars['String'] | null) | null;

  multiLocationEnabled?: (Scalars['Boolean'] | null) | null;

  myshopifyDomain?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  passwordEnabled?: (Scalars['Boolean'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  planDisplayName?: (Scalars['String'] | null) | null;

  planName?: (Scalars['String'] | null) | null;

  preLaunchEnabled?: (Scalars['Boolean'] | null) | null;

  primaryLocale?: (Scalars['String'] | null) | null;

  province?: (Scalars['String'] | null) | null;

  provinceCode?: (Scalars['String'] | null) | null;

  bulkOperations?: (ShopifyBulkOperationHasManyInput | null)[];

  requiresExtraPaymentsAgreement?: (Scalars['Boolean'] | null) | null;

  domains?: (ShopifyDomainHasManyInput | null)[];

  disputeEvidences?: (ShopifyDisputeEvidenceHasManyInput | null)[];

  setupRequired?: (Scalars['Boolean'] | null) | null;

  shopOwner?: (Scalars['String'] | null) | null;

  source?: (Scalars['String'] | null) | null;

  taxShipping?: (Scalars['Boolean'] | null) | null;

  taxesIncluded?: (Scalars['Boolean'] | null) | null;

  timezone?: (Scalars['String'] | null) | null;

  transactionalSmsDisabled?: (Scalars['Boolean'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  weightUnit?: (Scalars['String'] | null) | null;

  products?: (ShopifyProductHasManyInput | null)[];

  zipCode?: (Scalars['String'] | null) | null;

  shopifySmartCollects?: (ShopifySmartCollectHasManyInput | null)[];

  handle?: (Scalars['String'] | null) | null;
};



export type BulkUpdateShopifyShopsInput = {

  shopifyShop?: UpdateShopifyShopInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type RunShopifySyncInput = {

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkRunShopifySyncsInput = {

  shopifySync?: RunShopifySyncInput | null;

  startReason?: (Scalars['String'] | null) | null;
};



export type CompleteShopifySyncInput = {

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkCompleteShopifySyncsInput = {

  shopifySync?: CompleteShopifySyncInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type ErrorShopifySyncInput = {

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkErrorShopifySyncsInput = {

  shopifySync?: ErrorShopifySyncInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type AbortShopifySyncInput = {

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;
};



export type BulkAbortShopifySyncsInput = {

  shopifySync?: AbortShopifySyncInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CreateShopifySmartCollectInput = {

  shop?: ShopifyShopBelongsToInput | null;

  product?: ShopifyProductBelongsToInput | null;

  collection?: ShopifyCollectionBelongsToInput | null;
};



export type BulkCreateShopifySmartCollectsInput = {

  shopifySmartCollect?: CreateShopifySmartCollectInput | null;
};



export type UpdateShopifySmartCollectInput = {

  shop?: ShopifyShopBelongsToInput | null;

  product?: ShopifyProductBelongsToInput | null;

  collection?: ShopifyCollectionBelongsToInput | null;
};



export type BulkUpdateShopifySmartCollectsInput = {

  shopifySmartCollect?: UpdateShopifySmartCollectInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type InternalUserInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  emailVerified?: (Scalars['Boolean'] | null) | null;

  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: ((Scalars['String'] | null))[];

  resetPasswordToken?: (Scalars['String'] | null) | null;

  resetPasswordTokenExpiration?: Date | Scalars['ISO8601DateString'] | null;

  lastName?: (Scalars['String'] | null) | null;

  lastSignedIn?: Date | Scalars['ISO8601DateString'] | null;

  firstName?: (Scalars['String'] | null) | null;

  googleProfileId?: (Scalars['String'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  googleImageUrl?: (Scalars['String'] | null) | null;

  account?: UserAccountEnum | null;

  emailVerificationToken?: (Scalars['String'] | null) | null;

  emailVerificationTokenExpiration?: Date | Scalars['ISO8601DateString'] | null;

  password?: (Scalars['String'] | null) | null;

  keys?: (Scalars['JSON'] | null) | null;

  team?: (UserTeamEnum)[];
};



export type AppGraphQLTriggerMutationContext = {

  /** The ID of the session that triggered this mutation. Will be the session that's loaded in the mutation context. */
  sessionID?: (Scalars['GadgetID'] | null) | null;
};



export type InternalShopifyAppInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  apiKey?: (Scalars['String'] | null) | null;

  appStoreAppUrl?: (Scalars['String'] | null) | null;

  appStoreDeveloperUrl?: (Scalars['String'] | null) | null;

  availableAccessScopes?: (Scalars['JSON'] | null) | null;

  description?: (Scalars['String'] | null) | null;

  developerName?: (Scalars['String'] | null) | null;

  developerType?: ShopifyAppDeveloperTypeEnum | null;

  embedded?: (Scalars['Boolean'] | null) | null;

  failedRequirements?: (Scalars['JSON'] | null) | null;

  features?: (Scalars['JSON'] | null) | null;

  feedback?: (Scalars['JSON'] | null) | null;

  handle?: (Scalars['String'] | null) | null;

  previouslyInstalled?: (Scalars['Boolean'] | null) | null;

  pricingDetails?: (Scalars['String'] | null) | null;

  pricingDetailsSummary?: (Scalars['String'] | null) | null;

  privacyPolicyUrl?: (Scalars['String'] | null) | null;

  publicCategory?: ShopifyAppPublicCategoryEnum | null;

  published?: (Scalars['Boolean'] | null) | null;

  requestedAccessScopes?: (Scalars['JSON'] | null) | null;

  shopifyDeveloped?: (Scalars['Boolean'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  uninstallMessage?: (Scalars['String'] | null) | null;

  webhookApiVersion?: (Scalars['String'] | null) | null;
};



export type InternalShopifyAppInstallationInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  accessScopes?: (Scalars['JSON'] | null) | null;

  launchUrl?: (Scalars['String'] | null) | null;

  uninstallUrl?: (Scalars['String'] | null) | null;

  app?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalBelongsToInput = {

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type InternalShopifyBalanceTransactionInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  adjustmentOrderTransactions?: (Scalars['JSON'] | null) | null;

  amount?: (Scalars['String'] | null) | null;

  currency?: (Scalars['String'] | null) | null;

  fee?: (Scalars['String'] | null) | null;

  net?: (Scalars['String'] | null) | null;

  payoutStatus?: (Scalars['String'] | null) | null;

  processedAt?: Date | Scalars['ISO8601DateString'] | null;

  sourceId?: (Scalars['Float'] | null) | null;

  sourceType?: (Scalars['String'] | null) | null;

  test?: (Scalars['Boolean'] | null) | null;

  type?: (Scalars['String'] | null) | null;

  sourceOrder?: InternalBelongsToInput | null;

  payout?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyBalanceTransactionAtomicsInput | null;
};



export type InternalShopifyBalanceTransactionAtomicsInput = {

  /** Numeric atomic commands for operating on sourceId. */
  sourceId?: (NumericAtomicFieldUpdateInput)[];
};



export type NumericAtomicFieldUpdateInput = {

  /** A number to atomically increment the field value by. Can only be used on numeric fields. */
  increment?: (Scalars['Float'] | null) | null;

  /** A number to atomically decrement the field value by. Can only be used on numeric fields. */
  decrement?: (Scalars['Float'] | null) | null;
};



export type InternalShopifyBulkOperationInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  errorCode?: ShopifyBulkOperationErrorCodeEnum | null;

  fileSize?: (Scalars['String'] | null) | null;

  objectCount?: (Scalars['String'] | null) | null;

  partialDataUrl?: (Scalars['String'] | null) | null;

  query?: (Scalars['String'] | null) | null;

  rootObjectCount?: (Scalars['String'] | null) | null;

  status?: ShopifyBulkOperationStatusEnum | null;

  type?: ShopifyBulkOperationTypeEnum | null;

  url?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyCheckoutInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  abandonedCheckoutUrl?: (Scalars['String'] | null) | null;

  appliedDiscount?: (Scalars['JSON'] | null) | null;

  buyerAcceptsMarketing?: (Scalars['Boolean'] | null) | null;

  completedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  creditCard?: (Scalars['String'] | null) | null;

  currency?: (Scalars['String'] | null) | null;

  customerLocale?: (Scalars['String'] | null) | null;

  device?: (Scalars['Float'] | null) | null;

  discountCode?: (Scalars['String'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  legalNoticeUrl?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  note?: (Scalars['String'] | null) | null;

  noteAttributes?: (Scalars['JSON'] | null) | null;

  orderStatusUrl?: (Scalars['String'] | null) | null;

  paymentDue?: (Scalars['String'] | null) | null;

  paymentUrl?: (Scalars['String'] | null) | null;

  payments?: (Scalars['JSON'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  presentmentCurrency?: (Scalars['String'] | null) | null;

  privacyPolicyUrl?: (Scalars['String'] | null) | null;

  refundPolicyUrl?: (Scalars['String'] | null) | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  reservationTime?: (Scalars['Float'] | null) | null;

  reservationTimeLeft?: (Scalars['Float'] | null) | null;

  shippingLine?: (Scalars['JSON'] | null) | null;

  shippingPolicyUrl?: (Scalars['String'] | null) | null;

  shopifyPaymentsAccountId?: (Scalars['String'] | null) | null;

  sourceIdentifier?: (Scalars['String'] | null) | null;

  sourceName?: (Scalars['String'] | null) | null;

  sourceUrl?: (Scalars['String'] | null) | null;

  subscriptionPolicyUrl?: (Scalars['String'] | null) | null;

  subtotalPrice?: (Scalars['String'] | null) | null;

  taxExempt?: (Scalars['Boolean'] | null) | null;

  taxLines?: (Scalars['JSON'] | null) | null;

  taxManipulations?: (Scalars['JSON'] | null) | null;

  taxesIncluded?: (Scalars['Boolean'] | null) | null;

  termsOfSaleUrl?: (Scalars['String'] | null) | null;

  termsOfServiceUrl?: (Scalars['String'] | null) | null;

  token?: (Scalars['String'] | null) | null;

  totalLineItemsPrice?: (Scalars['String'] | null) | null;

  totalPrice?: (Scalars['String'] | null) | null;

  totalTax?: (Scalars['String'] | null) | null;

  totalTipReceived?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  userId?: (Scalars['String'] | null) | null;

  webUrl?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;

  order?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyCheckoutAtomicsInput | null;
};



export type InternalShopifyCheckoutAtomicsInput = {

  /** Numeric atomic commands for operating on device. */
  device?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on reservationTime. */
  reservationTime?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on reservationTimeLeft. */
  reservationTimeLeft?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyCheckoutLineItemInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  appliedDiscounts?: (Scalars['JSON'] | null) | null;

  compareAtPrice?: (Scalars['String'] | null) | null;

  discountAllocations?: (Scalars['JSON'] | null) | null;

  fulfillmentService?: (Scalars['String'] | null) | null;

  grams?: (Scalars['Float'] | null) | null;

  key?: (Scalars['String'] | null) | null;

  linePrice?: (Scalars['String'] | null) | null;

  price?: (Scalars['String'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  sku?: (Scalars['String'] | null) | null;

  taxable?: (Scalars['Boolean'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  variantTitle?: (Scalars['String'] | null) | null;

  vendor?: (Scalars['String'] | null) | null;

  checkout?: InternalBelongsToInput | null;

  product?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyCheckoutLineItemAtomicsInput | null;
};



export type InternalShopifyCheckoutLineItemAtomicsInput = {

  /** Numeric atomic commands for operating on grams. */
  grams?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on quantity. */
  quantity?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyCollectInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  position?: (Scalars['Float'] | null) | null;

  sortValue?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  customCollection?: InternalBelongsToInput | null;

  product?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyCollectAtomicsInput | null;
};



export type InternalShopifyCollectAtomicsInput = {

  /** Numeric atomic commands for operating on position. */
  position?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyCollectionInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  body?: (Scalars['String'] | null) | null;

  disjunctive?: (Scalars['Boolean'] | null) | null;

  handle?: (Scalars['String'] | null) | null;

  image?: (Scalars['JSON'] | null) | null;

  publishedAt?: Date | Scalars['ISO8601DateString'] | null;

  publishedScope?: (Scalars['String'] | null) | null;

  rules?: (Scalars['JSON'] | null) | null;

  sortOrder?: (Scalars['String'] | null) | null;

  templateSuffix?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: InternalBelongsToInput | null;

  collectionType?: ShopifyCollectionCollectionTypeEnum | null;

  collected?: Date | Scalars['ISO8601DateString'] | null;
};



export type InternalShopifyCompanyInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  contactCount?: (Scalars['Int'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  customerSince?: Date | Scalars['ISO8601DateString'] | null;

  externalId?: (Scalars['String'] | null) | null;

  lifetimeDuration?: (Scalars['String'] | null) | null;

  locationCount?: (Scalars['Float'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  note?: (Scalars['String'] | null) | null;

  orderCount?: (Scalars['Int'] | null) | null;

  totalSpent?: (Scalars['JSON'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyCompanyAtomicsInput | null;
};



export type InternalShopifyCompanyAtomicsInput = {

  /** Numeric atomic commands for operating on contactCount. */
  contactCount?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on locationCount. */
  locationCount?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on orderCount. */
  orderCount?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyDiscountInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  appDiscountType?: (Scalars['JSON'] | null) | null;

  appliesOnOneTimePurchase?: (Scalars['Boolean'] | null) | null;

  appliesOnSubscription?: (Scalars['Boolean'] | null) | null;

  appliesOncePerCustomer?: (Scalars['Boolean'] | null) | null;

  asyncUsageCount?: (Scalars['Float'] | null) | null;

  codeCount?: (Scalars['Int'] | null) | null;

  combinesWith?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  destinationSelection?: (Scalars['JSON'] | null) | null;

  discountClass?: ShopifyDiscountDiscountClassEnum | null;

  discountId?: (Scalars['String'] | null) | null;

  endsAt?: Date | Scalars['ISO8601DateString'] | null;

  errorHistory?: (Scalars['JSON'] | null) | null;

  hasTimelineComment?: (Scalars['Boolean'] | null) | null;

  maximumShippingPrice?: (Scalars['JSON'] | null) | null;

  minimumRequirement?: (Scalars['JSON'] | null) | null;

  recurringCycleLimit?: (Scalars['Int'] | null) | null;

  shareableUrls?: (Scalars['JSON'] | null) | null;

  shortSummary?: (Scalars['String'] | null) | null;

  startsAt?: Date | Scalars['ISO8601DateString'] | null;

  status?: ShopifyDiscountStatusEnum | null;

  summary?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  totalSales?: (Scalars['JSON'] | null) | null;

  usageLimit?: (Scalars['Int'] | null) | null;

  usesPerOrderLimit?: (Scalars['Int'] | null) | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyDiscountAtomicsInput | null;
};



export type InternalShopifyDiscountAtomicsInput = {

  /** Numeric atomic commands for operating on asyncUsageCount. */
  asyncUsageCount?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on codeCount. */
  codeCount?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on recurringCycleLimit. */
  recurringCycleLimit?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on usageLimit. */
  usageLimit?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on usesPerOrderLimit. */
  usesPerOrderLimit?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyDiscountCodeInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  code?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  usageCount?: (Scalars['Float'] | null) | null;

  priceRule?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyDiscountCodeAtomicsInput | null;
};



export type InternalShopifyDiscountCodeAtomicsInput = {

  /** Numeric atomic commands for operating on usageCount. */
  usageCount?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyDisputeInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  amount?: (Scalars['String'] | null) | null;

  currency?: (Scalars['String'] | null) | null;

  evidenceDueBy?: Date | Scalars['ISO8601DateString'] | null;

  evidenceSentOn?: Date | Scalars['ISO8601DateString'] | null;

  finalizedOn?: Date | Scalars['ISO8601DateString'] | null;

  networkReasonCode?: (Scalars['String'] | null) | null;

  reason?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  type?: (Scalars['String'] | null) | null;

  order?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyDisputeEvidenceInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  customerEmailAddress?: (Scalars['String'] | null) | null;

  customerFirstName?: (Scalars['String'] | null) | null;

  customerLastName?: (Scalars['String'] | null) | null;

  productDescription?: (Scalars['String'] | null) | null;

  submittedByMerchantOn?: Date | Scalars['ISO8601DateString'] | null;

  uncategorizedText?: (Scalars['String'] | null) | null;

  dispute?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyDomainInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  host?: (Scalars['String'] | null) | null;

  localization?: (Scalars['JSON'] | null) | null;

  sslEnabled?: (Scalars['Boolean'] | null) | null;

  url?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyFulfillmentInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  name?: (Scalars['String'] | null) | null;

  notifyCustomer?: (Scalars['Boolean'] | null) | null;

  originAddress?: (Scalars['JSON'] | null) | null;

  receipt?: (Scalars['JSON'] | null) | null;

  service?: (Scalars['String'] | null) | null;

  shipmentStatus?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  trackingCompany?: (Scalars['String'] | null) | null;

  trackingNumbers?: (Scalars['JSON'] | null) | null;

  trackingUrls?: (Scalars['JSON'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  variantInventoryManagement?: (Scalars['String'] | null) | null;

  order?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyFulfillmentLineItemInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  originalTotalSet?: (Scalars['JSON'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  discountedTotalSet?: (Scalars['JSON'] | null) | null;

  fulfillment?: InternalBelongsToInput | null;

  orderLineItem?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyFulfillmentLineItemAtomicsInput | null;
};



export type InternalShopifyFulfillmentLineItemAtomicsInput = {

  /** Numeric atomic commands for operating on quantity. */
  quantity?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyFulfillmentOrderInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  assignedLocation?: (Scalars['JSON'] | null) | null;

  deliveryMethod?: (Scalars['JSON'] | null) | null;

  destination?: (Scalars['JSON'] | null) | null;

  fulfillAt?: Date | Scalars['ISO8601DateString'] | null;

  fulfillBy?: Date | Scalars['ISO8601DateString'] | null;

  fulfillmentHolds?: (Scalars['JSON'] | null) | null;

  internationalDuties?: (Scalars['JSON'] | null) | null;

  merchantRequests?: (Scalars['JSON'] | null) | null;

  requestStatus?: (Scalars['String'] | null) | null;

  status?: (Scalars['String'] | null) | null;

  supportedActions?: (Scalars['JSON'] | null) | null;

  order?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyFulfillmentOrderLineItemInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  remainingQuantity?: (Scalars['Float'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  fulfillmentOrder?: InternalBelongsToInput | null;

  orderLineItem?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyFulfillmentOrderLineItemAtomicsInput | null;
};



export type InternalShopifyFulfillmentOrderLineItemAtomicsInput = {

  /** Numeric atomic commands for operating on remainingQuantity. */
  remainingQuantity?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on quantity. */
  quantity?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyFulfillmentServiceInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  callbackUrl?: (Scalars['String'] | null) | null;

  format?: (Scalars['String'] | null) | null;

  fulfillmentOrdersOptIn?: (Scalars['Boolean'] | null) | null;

  handle?: (Scalars['String'] | null) | null;

  inventoryManagement?: (Scalars['Boolean'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  permitsSkuSharing?: (Scalars['Boolean'] | null) | null;

  requiresShippingMethod?: (Scalars['Boolean'] | null) | null;

  trackingSupport?: (Scalars['Boolean'] | null) | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyGdprRequestInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  payload?: (Scalars['JSON'] | null) | null;

  topic?: ShopifyGdprRequestTopicEnum | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyMarketInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  currencySettings?: (Scalars['JSON'] | null) | null;

  enabled?: (Scalars['Boolean'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  primary?: (Scalars['Boolean'] | null) | null;

  marketWebPresence?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyMarketRegionInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  code?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  market?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyMarketWebPresenceInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  alternateLocales?: (Scalars['JSON'] | null) | null;

  rootUrls?: (Scalars['JSON'] | null) | null;

  subfolderSuffix?: (Scalars['String'] | null) | null;

  domain?: InternalBelongsToInput | null;

  market?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyOrderInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  additionalFees?: (Scalars['JSON'] | null) | null;

  cancellation?: (Scalars['JSON'] | null) | null;

  shopifyProtect?: (Scalars['JSON'] | null) | null;

  purchasingEntity?: (Scalars['JSON'] | null) | null;

  billingAddress?: (Scalars['JSON'] | null) | null;

  browserIp?: (Scalars['String'] | null) | null;

  buyerAcceptsMarketing?: (Scalars['Boolean'] | null) | null;

  cancelReason?: (Scalars['String'] | null) | null;

  cancelledAt?: Date | Scalars['ISO8601DateString'] | null;

  cartToken?: (Scalars['String'] | null) | null;

  checkoutToken?: (Scalars['String'] | null) | null;

  clientDetails?: (Scalars['JSON'] | null) | null;

  closedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  currency?: (Scalars['String'] | null) | null;

  currentSubtotalPrice?: (Scalars['String'] | null) | null;

  currentSubtotalPriceSet?: (Scalars['JSON'] | null) | null;

  currentTotalAdditionalFeesSet?: (Scalars['JSON'] | null) | null;

  currentTotalDiscounts?: (Scalars['String'] | null) | null;

  currentTotalDiscountsSet?: (Scalars['JSON'] | null) | null;

  currentTotalDutiesSet?: (Scalars['JSON'] | null) | null;

  currentTotalPrice?: (Scalars['String'] | null) | null;

  currentTotalPriceSet?: (Scalars['JSON'] | null) | null;

  currentTotalTax?: (Scalars['String'] | null) | null;

  currentTotalTaxSet?: (Scalars['JSON'] | null) | null;

  customerLocale?: (Scalars['String'] | null) | null;

  discountApplications?: (Scalars['JSON'] | null) | null;

  discountCodes?: (Scalars['JSON'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  estimatedTaxes?: (Scalars['Boolean'] | null) | null;

  financialStatus?: (Scalars['String'] | null) | null;

  fulfillmentStatus?: (Scalars['String'] | null) | null;

  landingSite?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  note?: (Scalars['String'] | null) | null;

  noteAttributes?: (Scalars['JSON'] | null) | null;

  number?: (Scalars['Float'] | null) | null;

  orderNumber?: (Scalars['Float'] | null) | null;

  orderStatusUrl?: (Scalars['String'] | null) | null;

  originalTotalAdditionalFeesSet?: (Scalars['JSON'] | null) | null;

  originalTotalDutiesSet?: (Scalars['JSON'] | null) | null;

  paymentGatewayNames?: (Scalars['JSON'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  poNumber?: (Scalars['String'] | null) | null;

  presentmentCurrency?: (Scalars['String'] | null) | null;

  processedAt?: Date | Scalars['ISO8601DateString'] | null;

  referringSite?: (Scalars['String'] | null) | null;

  shippingAddress?: (Scalars['JSON'] | null) | null;

  sourceIdentifier?: (Scalars['String'] | null) | null;

  sourceName?: (Scalars['String'] | null) | null;

  sourceUrl?: (Scalars['String'] | null) | null;

  subtotalPrice?: (Scalars['String'] | null) | null;

  subtotalPriceSet?: (Scalars['JSON'] | null) | null;

  tags?: (Scalars['JSON'] | null) | null;

  taxExempt?: (Scalars['Boolean'] | null) | null;

  taxLines?: (Scalars['JSON'] | null) | null;

  taxesIncluded?: (Scalars['Boolean'] | null) | null;

  test?: (Scalars['Boolean'] | null) | null;

  token?: (Scalars['String'] | null) | null;

  totalDiscounts?: (Scalars['String'] | null) | null;

  totalDiscountsSet?: (Scalars['JSON'] | null) | null;

  totalLineItemsPrice?: (Scalars['String'] | null) | null;

  totalLineItemsPriceSet?: (Scalars['JSON'] | null) | null;

  totalOutstanding?: (Scalars['String'] | null) | null;

  totalPrice?: (Scalars['String'] | null) | null;

  totalPriceSet?: (Scalars['JSON'] | null) | null;

  totalShippingPriceSet?: (Scalars['JSON'] | null) | null;

  totalTax?: (Scalars['String'] | null) | null;

  totalTaxSet?: (Scalars['JSON'] | null) | null;

  totalTipReceived?: (Scalars['String'] | null) | null;

  totalWeight?: (Scalars['Float'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  purchasingCompany?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyOrderAtomicsInput | null;
};



export type InternalShopifyOrderAtomicsInput = {

  /** Numeric atomic commands for operating on number. */
  number?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on orderNumber. */
  orderNumber?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on totalWeight. */
  totalWeight?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyOrderAdjustmentInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  amount?: (Scalars['String'] | null) | null;

  amountSet?: (Scalars['JSON'] | null) | null;

  kind?: (Scalars['String'] | null) | null;

  reason?: (Scalars['String'] | null) | null;

  taxAmount?: (Scalars['String'] | null) | null;

  taxAmountSet?: (Scalars['JSON'] | null) | null;

  order?: InternalBelongsToInput | null;

  refund?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyOrderLineItemInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  attributedStaffs?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  currentQuantity?: (Scalars['Float'] | null) | null;

  discountAllocations?: (Scalars['JSON'] | null) | null;

  fulfillableQuantity?: (Scalars['Float'] | null) | null;

  fulfillmentService?: (Scalars['String'] | null) | null;

  fulfillmentStatus?: (Scalars['String'] | null) | null;

  giftCard?: (Scalars['Boolean'] | null) | null;

  grams?: (Scalars['Float'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  price?: (Scalars['String'] | null) | null;

  priceSet?: (Scalars['JSON'] | null) | null;

  productExists?: (Scalars['Boolean'] | null) | null;

  properties?: (Scalars['JSON'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  sku?: (Scalars['String'] | null) | null;

  taxLines?: (Scalars['JSON'] | null) | null;

  taxable?: (Scalars['Boolean'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  totalDiscount?: (Scalars['String'] | null) | null;

  totalDiscountSet?: (Scalars['JSON'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  variantInventoryManagement?: (Scalars['String'] | null) | null;

  variantTitle?: (Scalars['String'] | null) | null;

  vendor?: (Scalars['String'] | null) | null;

  order?: InternalBelongsToInput | null;

  product?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyOrderLineItemAtomicsInput | null;
};



export type InternalShopifyOrderLineItemAtomicsInput = {

  /** Numeric atomic commands for operating on currentQuantity. */
  currentQuantity?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on fulfillableQuantity. */
  fulfillableQuantity?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on grams. */
  grams?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on quantity. */
  quantity?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyPayoutInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  amount?: (Scalars['String'] | null) | null;

  currency?: (Scalars['String'] | null) | null;

  date?: Date | Scalars['ISO8601DateString'] | null;

  status?: (Scalars['String'] | null) | null;

  summary?: (Scalars['JSON'] | null) | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyPriceRuleInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  allocationLimit?: (Scalars['Float'] | null) | null;

  allocationMethod?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  customerSegmentPrerequisiteIds?: (Scalars['JSON'] | null) | null;

  customerSelection?: (Scalars['String'] | null) | null;

  endsAt?: Date | Scalars['ISO8601DateString'] | null;

  entitledCollectionIds?: (Scalars['JSON'] | null) | null;

  entitledCountryIds?: (Scalars['JSON'] | null) | null;

  entitledProductIds?: (Scalars['JSON'] | null) | null;

  entitledVariantIds?: (Scalars['JSON'] | null) | null;

  oncePerCustomer?: (Scalars['Boolean'] | null) | null;

  prerequisiteCollectionIds?: (Scalars['JSON'] | null) | null;

  prerequisiteCustomerIds?: (Scalars['JSON'] | null) | null;

  prerequisiteProductIds?: (Scalars['JSON'] | null) | null;

  prerequisiteQuantityRange?: (Scalars['JSON'] | null) | null;

  prerequisiteShippingPriceRange?: (Scalars['JSON'] | null) | null;

  prerequisiteSubtotalRange?: (Scalars['JSON'] | null) | null;

  prerequisiteToEntitlementPurchase?: (Scalars['JSON'] | null) | null;

  prerequisiteToEntitlementQuantityRatio?: (Scalars['JSON'] | null) | null;

  prerequisiteVariants?: (Scalars['JSON'] | null) | null;

  startsAt?: Date | Scalars['ISO8601DateString'] | null;

  targetSelection?: (Scalars['String'] | null) | null;

  targetType?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  usageLimit?: (Scalars['Float'] | null) | null;

  value?: (Scalars['Float'] | null) | null;

  valueType?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyPriceRuleAtomicsInput | null;
};



export type InternalShopifyPriceRuleAtomicsInput = {

  /** Numeric atomic commands for operating on allocationLimit. */
  allocationLimit?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on usageLimit. */
  usageLimit?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on value. */
  value?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyProductInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  compareAtPriceRange?: (Scalars['JSON'] | null) | null;

  productCategory?: (Scalars['JSON'] | null) | null;

  body?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  handle?: (Scalars['String'] | null) | null;

  productType?: (Scalars['String'] | null) | null;

  publishedAt?: Date | Scalars['ISO8601DateString'] | null;

  publishedScope?: (Scalars['String'] | null) | null;

  status?: ShopifyProductStatusEnum | null;

  tags?: (Scalars['JSON'] | null) | null;

  templateSuffix?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  vendor?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyRefundInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  note?: (Scalars['String'] | null) | null;

  processedAt?: Date | Scalars['ISO8601DateString'] | null;

  restock?: (Scalars['Boolean'] | null) | null;

  order?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyRefundDutyInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  amountSet?: (Scalars['JSON'] | null) | null;

  refund?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyRefundLineItemInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  quantity?: (Scalars['Float'] | null) | null;

  restockType?: (Scalars['String'] | null) | null;

  subtotal?: (Scalars['Float'] | null) | null;

  subtotalSet?: (Scalars['JSON'] | null) | null;

  totalTax?: (Scalars['Float'] | null) | null;

  totalTaxSet?: (Scalars['JSON'] | null) | null;

  orderLineItem?: InternalBelongsToInput | null;

  refund?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyRefundLineItemAtomicsInput | null;
};



export type InternalShopifyRefundLineItemAtomicsInput = {

  /** Numeric atomic commands for operating on quantity. */
  quantity?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on subtotal. */
  subtotal?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on totalTax. */
  totalTax?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyScriptTagInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  cache?: (Scalars['Boolean'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  displayScope?: (Scalars['String'] | null) | null;

  event?: (Scalars['String'] | null) | null;

  source?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyShopInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  customerAccountsV2?: (Scalars['JSON'] | null) | null;

  accessToken?: (Scalars['String'] | null) | null;

  address1?: (Scalars['String'] | null) | null;

  address2?: (Scalars['String'] | null) | null;

  checkoutApiSupported?: (Scalars['Boolean'] | null) | null;

  city?: (Scalars['String'] | null) | null;

  cookieConsentLevel?: (Scalars['String'] | null) | null;

  country?: (Scalars['String'] | null) | null;

  countryCode?: (Scalars['String'] | null) | null;

  countryName?: (Scalars['String'] | null) | null;

  countyTaxes?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  currency?: (Scalars['String'] | null) | null;

  customerEmail?: (Scalars['String'] | null) | null;

  disabledWebhooks?: (Scalars['JSON'] | null) | null;

  domain?: (Scalars['String'] | null) | null;

  eligibleForCardReaderGiveaway?: (Scalars['Boolean'] | null) | null;

  eligibleForPayments?: (Scalars['Boolean'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  enabledPresentmentCurrencies?: (Scalars['JSON'] | null) | null;

  finances?: (Scalars['Boolean'] | null) | null;

  forceSsl?: (Scalars['Boolean'] | null) | null;

  googleAppsDomain?: (Scalars['String'] | null) | null;

  googleAppsLoginEnabled?: (Scalars['Boolean'] | null) | null;

  grantedScopes?: (Scalars['JSON'] | null) | null;

  hasDiscounts?: (Scalars['Boolean'] | null) | null;

  hasGiftCards?: (Scalars['Boolean'] | null) | null;

  hasStorefront?: (Scalars['Boolean'] | null) | null;

  ianaTimezone?: (Scalars['String'] | null) | null;

  installedViaApiKey?: (Scalars['String'] | null) | null;

  latitude?: (Scalars['Float'] | null) | null;

  longitude?: (Scalars['Float'] | null) | null;

  marketingSmsContentEnabledAtCheckout?: (Scalars['Boolean'] | null) | null;

  moneyFormat?: (Scalars['String'] | null) | null;

  moneyInEmailsFormat?: (Scalars['String'] | null) | null;

  moneyWithCurrencyFormat?: (Scalars['String'] | null) | null;

  moneyWithCurrencyInEmailsFormat?: (Scalars['String'] | null) | null;

  multiLocationEnabled?: (Scalars['Boolean'] | null) | null;

  myshopifyDomain?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  passwordEnabled?: (Scalars['Boolean'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  planDisplayName?: (Scalars['String'] | null) | null;

  planName?: (Scalars['String'] | null) | null;

  preLaunchEnabled?: (Scalars['Boolean'] | null) | null;

  primaryLocale?: (Scalars['String'] | null) | null;

  province?: (Scalars['String'] | null) | null;

  provinceCode?: (Scalars['String'] | null) | null;

  registeredWebhooks?: (Scalars['JSON'] | null) | null;

  requiresExtraPaymentsAgreement?: (Scalars['Boolean'] | null) | null;

  setupRequired?: (Scalars['Boolean'] | null) | null;

  shopOwner?: (Scalars['String'] | null) | null;

  source?: (Scalars['String'] | null) | null;

  taxShipping?: (Scalars['Boolean'] | null) | null;

  taxesIncluded?: (Scalars['Boolean'] | null) | null;

  timezone?: (Scalars['String'] | null) | null;

  transactionalSmsDisabled?: (Scalars['Boolean'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  weightUnit?: (Scalars['String'] | null) | null;

  zipCode?: (Scalars['String'] | null) | null;

  handle?: (Scalars['String'] | null) | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyShopAtomicsInput | null;
};



export type InternalShopifyShopAtomicsInput = {

  /** Numeric atomic commands for operating on latitude. */
  latitude?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on longitude. */
  longitude?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifySyncInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalSessionInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: InternalBelongsToInput | null;

  shopifySID?: (Scalars['String'] | null) | null;

  user?: InternalBelongsToInput | null;

  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: ((Scalars['String'] | null))[];
};



export type InternalShopifyShippingLineInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  carrierIdentifier?: (Scalars['String'] | null) | null;

  code?: (Scalars['String'] | null) | null;

  discountAllocations?: (Scalars['JSON'] | null) | null;

  discountedPrice?: (Scalars['String'] | null) | null;

  discountedPriceSet?: (Scalars['JSON'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  price?: (Scalars['String'] | null) | null;

  priceSet?: (Scalars['JSON'] | null) | null;

  source?: (Scalars['String'] | null) | null;

  taxLines?: (Scalars['JSON'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  requestedFulfillmentService?: InternalBelongsToInput | null;

  order?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyTenderTransactionInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  amount?: (Scalars['String'] | null) | null;

  currency?: (Scalars['String'] | null) | null;

  paymentDetails?: (Scalars['JSON'] | null) | null;

  paymentMethod?: (Scalars['String'] | null) | null;

  processedAt?: Date | Scalars['ISO8601DateString'] | null;

  remoteReference?: (Scalars['String'] | null) | null;

  test?: (Scalars['Boolean'] | null) | null;

  order?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifySmartCollectInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: InternalBelongsToInput | null;

  product?: InternalBelongsToInput | null;

  collection?: InternalBelongsToInput | null;
};


/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  /** Represents an amount of some currency. Specified as a string so user's aren't tempted to do math on the value. */
  CurrencyAmount: string;
  /** Represents a UTC date formatted an ISO-8601 formatted 'full-date' string. */
  ISO8601DateString: string;
  /** A file object produced by a browser for uploading to cloud storage */
  Upload: File;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: JSONObject;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: JSONValue;
  /** The ID of a record in Gadget */
  GadgetID: string;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: string;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: string;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** Represents the state of one record in a Gadget database. Represented as either a string or set of strings nested in objects. */
  RecordState: (string | { [key: string]: Scalars['RecordState'] });
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: Date;
  /** A date-time or full-date string at UTC, such as 2007-12-03 or 2007-12-03T10:15:30Z, compliant with the `full-date` or `date-time` formats outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. If a full date-time is passed, timezone will be ignored and it will be truncated to just the date part. */
  DateOrDateTime: Date;
  /** Instructions for a client to turn raw transport types (like strings) into useful client side types (like Dates). Unstable and not intended for developer use. */
  HydrationPlan: unknown;
};


/** This Error object is returned for errors which don't have other specific handling. It has a message which is safe to display to users, but is often technical in nature. It also has a `code` field which is documented in the Gadget API Error Codes docs. */
export interface SimpleError extends ExecutionError {
  __typename: 'SimpleError';
  /** The human facing error message for this error. */
  message: Scalars['String'];
  /** The Gadget platform error code for this error. */
  code: Scalars['String'];
  /** The stack for any exception that caused the error */
  stack: (Scalars['String'] | null);
};



export type AvailableSimpleErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this error. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error */
  stack?: boolean | null | undefined;
};



export type ExecutionError = {

  __typename: 'SimpleError'|'InvalidRecordError';

  /** The human facing error message for this error. */
  message: Scalars['String'];

  /** The Gadget platform error code for this error. */
  code: Scalars['String'];

  /** The stack for any exception that caused the error. Only available for super users. */
  stack: (Scalars['String'] | null);
};



export type AvailableExecutionErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this error. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error. Only available for super users. */
  stack?: boolean | null | undefined;
};


/** This object is returned as an error when a record doesn't pass the defined validations on the model. The validation messages for each of the invalid fields are available via the other fields on this error type. */
export interface InvalidRecordError extends ExecutionError {
  __typename: 'InvalidRecordError';
  /** The human facing error message for this error. */
  message: Scalars['String'];
  /** The Gadget platform error code for this InvalidRecordError. */
  code: Scalars['String'];
  /** The stack for any exception that caused the error */
  stack: (Scalars['String'] | null);
  /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
  validationErrorsByField: (Scalars['JSONObject'] | null);
  /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
  validationErrors: InvalidFieldError[];
  /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
  record: (Scalars['JSONObject'] | null);
  /** The model of the record which failed validation */
  model: (GadgetModel | null);
};



export type AvailableInvalidRecordErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this InvalidRecordError. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error */
  stack?: boolean | null | undefined;

  /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
  validationErrorsByField?: boolean | null | undefined;

  /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
  validationErrors?: AvailableInvalidFieldErrorSelection;

  /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
  record?: boolean | null | undefined;

  /** The model of the record which failed validation */
  model?: AvailableGadgetModelSelection;
};


/** This Error object represents one individual failed validation for a record field. It has a message which is appropriate for display to a user, and lists the apiIdentifier of the field in question. The `apiIdentifier` for the field is not guaranteed to exist on the model. */
export type InvalidFieldError = {

  __typename: 'InvalidFieldError';

  /** The human facing error message for this error. */
  message: Scalars['String'];

  /** The apiIdentifier of the field this error occurred on. */
  apiIdentifier: Scalars['String'];
};



export type AvailableInvalidFieldErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The apiIdentifier of the field this error occurred on. */
  apiIdentifier?: boolean | null | undefined;
};



export type GadgetModel = {

  __typename: 'GadgetModel';

  key: Scalars['String'];

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  filterable: Scalars['Boolean'];

  sortable: Scalars['Boolean'];

  searchable: Scalars['Boolean'];

  fields: GadgetModelField[];

  actions: GadgetAction[];

  action: (GadgetAction | null);

  pluralName: Scalars['String'];

  pluralApiIdentifier: Scalars['String'];

  currentSingletonApiIdentifier: (Scalars['String'] | null);

  initialCreatedState: (Scalars['String'] | null);
};



export type AvailableGadgetModelSelection = {

  __typename?: boolean | null | undefined;

  key?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  filterable?: boolean | null | undefined;

  sortable?: boolean | null | undefined;

  searchable?: boolean | null | undefined;

  fields?: AvailableGadgetModelFieldSelection;

  actions?: AvailableGadgetActionSelection;

  action?: AvailableGadgetActionSelection;

  pluralName?: boolean | null | undefined;

  pluralApiIdentifier?: boolean | null | undefined;

  currentSingletonApiIdentifier?: boolean | null | undefined;

  initialCreatedState?: boolean | null | undefined;
};


/** One field of a Gadget model */
export interface GadgetModelField extends GadgetField {
  __typename: 'GadgetModelField';
  name: Scalars['String'];
  apiIdentifier: Scalars['String'];
  fieldType: GadgetFieldType;
  hasDefault: Scalars['Boolean'];
  required: Scalars['Boolean'];
  requiredArgumentForInput: Scalars['Boolean'];
  configuration: GadgetFieldConfigInterface;
  isUniqueField: Scalars['Boolean'];
  sortable: Scalars['Boolean'];
  filterable: Scalars['Boolean'];
  examples: GadgetModelFieldExamples;
};



export type AvailableGadgetModelFieldSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  hasDefault?: boolean | null | undefined;

  required?: boolean | null | undefined;

  requiredArgumentForInput?: boolean | null | undefined;

  configuration?: AvailableGadgetFieldConfigInterfaceSelection;

  isUniqueField?: boolean | null | undefined;

  sortable?: boolean | null | undefined;

  filterable?: boolean | null | undefined;

  examples?: AvailableGadgetModelFieldExamplesSelection;
};



export type GadgetField = {

  __typename: 'GadgetModelField'|'GadgetObjectField';

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  fieldType: GadgetFieldType;

  hasDefault: Scalars['Boolean'];

  required: Scalars['Boolean'];

  requiredArgumentForInput: Scalars['Boolean'];

  configuration: GadgetFieldConfigInterface;
};



export type AvailableGadgetFieldSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  hasDefault?: boolean | null | undefined;

  required?: boolean | null | undefined;

  requiredArgumentForInput?: boolean | null | undefined;

  configuration?: AvailableGadgetFieldConfigInterfaceSelection;
};


/** The common bits that all field configuration types share */
export type GadgetFieldConfigInterface = {

  __typename: 'GadgetGenericFieldConfig'|'GadgetObjectFieldConfig'|'GadgetBelongsToConfig'|'GadgetHasManyConfig'|'GadgetEnumConfig'|'GadgetDateTimeConfig';

  fieldType: GadgetFieldType;
};



export type AvailableGadgetFieldConfigInterfaceSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;
};



export type GadgetModelFieldExamples = {

  __typename: 'GadgetModelFieldExamples';

  linkExistingChild: (GadgetFieldUsageExample | null);

  linkNewChild: (GadgetFieldUsageExample | null);

  linkToExistingParent: (GadgetFieldUsageExample | null);

  createNestedInParent: (GadgetFieldUsageExample | null);
};



export type AvailableGadgetModelFieldExamplesSelection = {

  __typename?: boolean | null | undefined;

  linkExistingChild?: AvailableGadgetFieldUsageExampleSelection;

  linkNewChild?: AvailableGadgetFieldUsageExampleSelection;

  linkToExistingParent?: AvailableGadgetFieldUsageExampleSelection;

  createNestedInParent?: AvailableGadgetFieldUsageExampleSelection;
};



export type GadgetFieldUsageExample = {

  __typename: 'GadgetFieldUsageExample';

  exampleGraphQLMutation: Scalars['String'];

  exampleGraphQLVariables: Scalars['JSON'];

  exampleImperativeInvocation: Scalars['String'];

  exampleReactHook: Scalars['String'];
};



export type AvailableGadgetFieldUsageExampleSelection = {

  __typename?: boolean | null | undefined;

  exampleGraphQLMutation?: boolean | null | undefined;

  exampleGraphQLVariables?: boolean | null | undefined;

  exampleImperativeInvocation?: boolean | null | undefined;

  exampleReactHook?: boolean | null | undefined;
};



export type GadgetAction = {

  __typename: 'GadgetAction';

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  requiresInput: Scalars['Boolean'];

  acceptsInput: Scalars['Boolean'];

  /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
  hasDeleteRecordEffect: Scalars['Boolean'];

  /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
  hasCreateOrUpdateEffect: Scalars['Boolean'];

  isDeleteAction: Scalars['Boolean'];

  isCreateOrUpdateAction: Scalars['Boolean'];

  operatesWithRecordIdentity: Scalars['Boolean'];

  /** @deprecated This field will be removed. */
  possibleTransitions: Scalars['JSONObject'];

  availableInBulk: Scalars['Boolean'];

  bulkApiIdentifier: (Scalars['String'] | null);

  hasAmbiguousIdentifier: Scalars['Boolean'];

  inputFields: GadgetObjectField[];

  bulkInvokedByIDOnly: Scalars['Boolean'];

  triggers: GadgetTrigger[];

  examples: (GadgetActionGraphQLType | null);
};



export type AvailableGadgetActionSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  requiresInput?: boolean | null | undefined;

  acceptsInput?: boolean | null | undefined;

  /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
  hasDeleteRecordEffect?: boolean | null | undefined;

  /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
  hasCreateOrUpdateEffect?: boolean | null | undefined;

  isDeleteAction?: boolean | null | undefined;

  isCreateOrUpdateAction?: boolean | null | undefined;

  operatesWithRecordIdentity?: boolean | null | undefined;

  /** @deprecated This field will be removed. */
  possibleTransitions?: boolean | null | undefined;

  availableInBulk?: boolean | null | undefined;

  bulkApiIdentifier?: boolean | null | undefined;

  hasAmbiguousIdentifier?: boolean | null | undefined;

  inputFields?: AvailableGadgetObjectFieldSelection;

  bulkInvokedByIDOnly?: boolean | null | undefined;

  triggers?: AvailableGadgetTriggerSelection;

  examples?: AvailableGadgetActionGraphQLTypeSelection;
};


/** One field of an action input or other transitory object in Gadget */
export interface GadgetObjectField extends GadgetField {
  __typename: 'GadgetObjectField';
  name: Scalars['String'];
  apiIdentifier: Scalars['String'];
  fieldType: GadgetFieldType;
  hasDefault: Scalars['Boolean'];
  required: Scalars['Boolean'];
  requiredArgumentForInput: Scalars['Boolean'];
  configuration: GadgetFieldConfigInterface;
};



export type AvailableGadgetObjectFieldSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  hasDefault?: boolean | null | undefined;

  required?: boolean | null | undefined;

  requiredArgumentForInput?: boolean | null | undefined;

  configuration?: AvailableGadgetFieldConfigInterfaceSelection;
};



export type GadgetTrigger = {

  __typename: 'GadgetTrigger';

  specID: Scalars['String'];
};



export type AvailableGadgetTriggerSelection = {

  __typename?: boolean | null | undefined;

  specID?: boolean | null | undefined;
};



export type GadgetActionGraphQLType = {

  __typename: 'GadgetActionGraphQLType';

  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation: Scalars['String'];

  exampleGraphQLMutation: Scalars['String'];

  inputGraphQLTypeSDL: (Scalars['String'] | null);

  outputGraphQLTypeSDL: Scalars['String'];

  inputTypeScriptInterface: (Scalars['String'] | null);

  outputTypeScriptInterface: Scalars['String'];

  exampleGraphQLVariables: Scalars['JSON'];

  exampleJSInputs: Scalars['JSON'];

  exampleImperativeInvocation: Scalars['String'];

  exampleReactHook: Scalars['String'];

  /** @deprecated moved to exampleBulkGraphQLMutation */
  exampleBulkMutation: (Scalars['String'] | null);

  exampleBulkGraphQLMutation: (Scalars['String'] | null);

  exampleBulkGraphQLVariables: (Scalars['JSON'] | null);

  exampleBulkImperativeInvocation: (Scalars['String'] | null);

  exampleBulkReactHook: (Scalars['String'] | null);

  bulkOutputGraphQLTypeSDL: (Scalars['String'] | null);
};



export type AvailableGadgetActionGraphQLTypeSelection = {

  __typename?: boolean | null | undefined;

  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation?: boolean | null | undefined;

  exampleGraphQLMutation?: boolean | null | undefined;

  inputGraphQLTypeSDL?: boolean | null | undefined;

  outputGraphQLTypeSDL?: boolean | null | undefined;

  inputTypeScriptInterface?: boolean | null | undefined;

  outputTypeScriptInterface?: boolean | null | undefined;

  exampleGraphQLVariables?: boolean | null | undefined;

  exampleJSInputs?: boolean | null | undefined;

  exampleImperativeInvocation?: boolean | null | undefined;

  exampleReactHook?: boolean | null | undefined;

  /** @deprecated moved to exampleBulkGraphQLMutation */
  exampleBulkMutation?: boolean | null | undefined;

  exampleBulkGraphQLMutation?: boolean | null | undefined;

  exampleBulkGraphQLVariables?: boolean | null | undefined;

  exampleBulkImperativeInvocation?: boolean | null | undefined;

  exampleBulkReactHook?: boolean | null | undefined;

  bulkOutputGraphQLTypeSDL?: boolean | null | undefined;
};



export interface GadgetGenericFieldConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetGenericFieldConfig';
  fieldType: GadgetFieldType;
};



export type AvailableGadgetGenericFieldConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;
};



export interface GadgetObjectFieldConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetObjectFieldConfig';
  fieldType: GadgetFieldType;
  name: (Scalars['String'] | null);
  fields: GadgetModelField[];
};



export type AvailableGadgetObjectFieldConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  name?: boolean | null | undefined;

  fields?: AvailableGadgetModelFieldSelection;
};



export interface GadgetBelongsToConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetBelongsToConfig';
  fieldType: GadgetFieldType;
  relatedModelKey: (Scalars['String'] | null);
  relatedModel: (GadgetModel | null);
  isConfigured: Scalars['Boolean'];
  isInverseConfigured: Scalars['Boolean'];
};



export type AvailableGadgetBelongsToConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  relatedModelKey?: boolean | null | undefined;

  relatedModel?: AvailableGadgetModelSelection;

  isConfigured?: boolean | null | undefined;

  isInverseConfigured?: boolean | null | undefined;
};



export interface GadgetHasManyConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetHasManyConfig';
  fieldType: GadgetFieldType;
  relatedModelKey: (Scalars['String'] | null);
  relatedModel: (GadgetModel | null);
  isConfigured: Scalars['Boolean'];
  isInverseConfigured: Scalars['Boolean'];
};



export type AvailableGadgetHasManyConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  relatedModelKey?: boolean | null | undefined;

  relatedModel?: AvailableGadgetModelSelection;

  isConfigured?: boolean | null | undefined;

  isInverseConfigured?: boolean | null | undefined;
};



export interface GadgetEnumConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetEnumConfig';
  fieldType: GadgetFieldType;
  allowMultiple: Scalars['Boolean'];
  allowOther: Scalars['Boolean'];
  options: GadgetEnumOption[];
};



export type AvailableGadgetEnumConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  allowMultiple?: boolean | null | undefined;

  allowOther?: boolean | null | undefined;

  options?: AvailableGadgetEnumOptionSelection;
};



export type GadgetEnumOption = {

  __typename: 'GadgetEnumOption';

  name: Scalars['String'];

  color: Scalars['String'];
};



export type AvailableGadgetEnumOptionSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  color?: boolean | null | undefined;
};



export interface GadgetDateTimeConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetDateTimeConfig';
  fieldType: GadgetFieldType;
  includeTime: Scalars['Boolean'];
};



export type AvailableGadgetDateTimeConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  includeTime?: boolean | null | undefined;
};



export type Query = {

  __typename: 'Query';

  user: (User | null);

  users: UserConnection;

  shopifyApp: (ShopifyApp | null);

  shopifyApps: ShopifyAppConnection;

  shopifyAppInstallation: (ShopifyAppInstallation | null);

  shopifyAppInstallations: ShopifyAppInstallationConnection;

  shopifyBalanceTransaction: (ShopifyBalanceTransaction | null);

  shopifyBalanceTransactions: ShopifyBalanceTransactionConnection;

  shopifyBulkOperation: (ShopifyBulkOperation | null);

  shopifyBulkOperations: ShopifyBulkOperationConnection;

  shopifyCheckout: (ShopifyCheckout | null);

  shopifyCheckouts: ShopifyCheckoutConnection;

  shopifyCheckoutLineItem: (ShopifyCheckoutLineItem | null);

  shopifyCheckoutLineItems: ShopifyCheckoutLineItemConnection;

  shopifyCollect: (ShopifyCollect | null);

  shopifyCollects: ShopifyCollectConnection;

  shopifyCollection: (ShopifyCollection | null);

  shopifyCollections: ShopifyCollectionConnection;

  shopifyCompany: (ShopifyCompany | null);

  shopifyCompanies: ShopifyCompanyConnection;

  shopifyDiscount: (ShopifyDiscount | null);

  shopifyDiscounts: ShopifyDiscountConnection;

  shopifyDiscountCode: (ShopifyDiscountCode | null);

  shopifyDiscountCodes: ShopifyDiscountCodeConnection;

  shopifyDispute: (ShopifyDispute | null);

  shopifyDisputes: ShopifyDisputeConnection;

  shopifyDisputeEvidence: (ShopifyDisputeEvidence | null);

  shopifyDisputeEvidences: ShopifyDisputeEvidenceConnection;

  shopifyDomain: (ShopifyDomain | null);

  shopifyDomains: ShopifyDomainConnection;

  shopifyFulfillment: (ShopifyFulfillment | null);

  shopifyFulfillments: ShopifyFulfillmentConnection;

  shopifyFulfillmentLineItem: (ShopifyFulfillmentLineItem | null);

  shopifyFulfillmentLineItems: ShopifyFulfillmentLineItemConnection;

  shopifyFulfillmentOrder: (ShopifyFulfillmentOrder | null);

  shopifyFulfillmentOrders: ShopifyFulfillmentOrderConnection;

  shopifyFulfillmentOrderLineItem: (ShopifyFulfillmentOrderLineItem | null);

  shopifyFulfillmentOrderLineItems: ShopifyFulfillmentOrderLineItemConnection;

  shopifyFulfillmentService: (ShopifyFulfillmentService | null);

  shopifyFulfillmentServices: ShopifyFulfillmentServiceConnection;

  shopifyGdprRequest: (ShopifyGdprRequest | null);

  shopifyGdprRequests: ShopifyGdprRequestConnection;

  shopifyMarket: (ShopifyMarket | null);

  shopifyMarkets: ShopifyMarketConnection;

  shopifyMarketRegion: (ShopifyMarketRegion | null);

  shopifyMarketRegions: ShopifyMarketRegionConnection;

  shopifyMarketWebPresence: (ShopifyMarketWebPresence | null);

  shopifyMarketWebPresences: ShopifyMarketWebPresenceConnection;

  shopifyOrder: (ShopifyOrder | null);

  shopifyOrders: ShopifyOrderConnection;

  shopifyOrderAdjustment: (ShopifyOrderAdjustment | null);

  shopifyOrderAdjustments: ShopifyOrderAdjustmentConnection;

  shopifyOrderLineItem: (ShopifyOrderLineItem | null);

  shopifyOrderLineItems: ShopifyOrderLineItemConnection;

  shopifyPayout: (ShopifyPayout | null);

  shopifyPayouts: ShopifyPayoutConnection;

  shopifyPriceRule: (ShopifyPriceRule | null);

  shopifyPriceRules: ShopifyPriceRuleConnection;

  shopifyProduct: (ShopifyProduct | null);

  shopifyProducts: ShopifyProductConnection;

  shopifyRefund: (ShopifyRefund | null);

  shopifyRefunds: ShopifyRefundConnection;

  shopifyRefundDuty: (ShopifyRefundDuty | null);

  shopifyRefundDuties: ShopifyRefundDutyConnection;

  shopifyRefundLineItem: (ShopifyRefundLineItem | null);

  shopifyRefundLineItems: ShopifyRefundLineItemConnection;

  shopifyScriptTag: (ShopifyScriptTag | null);

  shopifyScriptTags: ShopifyScriptTagConnection;

  shopifyShop: (ShopifyShop | null);

  shopifyShops: ShopifyShopConnection;

  shopifySync: (ShopifySync | null);

  shopifySyncs: ShopifySyncConnection;

  session: (Session | null);

  sessions: SessionConnection;

  shopifyShippingLine: (ShopifyShippingLine | null);

  shopifyShippingLines: ShopifyShippingLineConnection;

  shopifyTenderTransaction: (ShopifyTenderTransaction | null);

  shopifyTenderTransactions: ShopifyTenderTransactionConnection;

  shopifySmartCollect: (ShopifySmartCollect | null);

  shopifySmartCollects: ShopifySmartCollectConnection;

  internal: (InternalQueries | null);

  currentSession: (Session | null);

  shopifyConnection: Shopify;
};



export type AvailableQuerySelection = {

  __typename?: boolean | null | undefined;

  user?: AvailableUserSelection;

  users?: AvailableUserConnectionSelection;

  shopifyApp?: AvailableShopifyAppSelection;

  shopifyApps?: AvailableShopifyAppConnectionSelection;

  shopifyAppInstallation?: AvailableShopifyAppInstallationSelection;

  shopifyAppInstallations?: AvailableShopifyAppInstallationConnectionSelection;

  shopifyBalanceTransaction?: AvailableShopifyBalanceTransactionSelection;

  shopifyBalanceTransactions?: AvailableShopifyBalanceTransactionConnectionSelection;

  shopifyBulkOperation?: AvailableShopifyBulkOperationSelection;

  shopifyBulkOperations?: AvailableShopifyBulkOperationConnectionSelection;

  shopifyCheckout?: AvailableShopifyCheckoutSelection;

  shopifyCheckouts?: AvailableShopifyCheckoutConnectionSelection;

  shopifyCheckoutLineItem?: AvailableShopifyCheckoutLineItemSelection;

  shopifyCheckoutLineItems?: AvailableShopifyCheckoutLineItemConnectionSelection;

  shopifyCollect?: AvailableShopifyCollectSelection;

  shopifyCollects?: AvailableShopifyCollectConnectionSelection;

  shopifyCollection?: AvailableShopifyCollectionSelection;

  shopifyCollections?: AvailableShopifyCollectionConnectionSelection;

  shopifyCompany?: AvailableShopifyCompanySelection;

  shopifyCompanies?: AvailableShopifyCompanyConnectionSelection;

  shopifyDiscount?: AvailableShopifyDiscountSelection;

  shopifyDiscounts?: AvailableShopifyDiscountConnectionSelection;

  shopifyDiscountCode?: AvailableShopifyDiscountCodeSelection;

  shopifyDiscountCodes?: AvailableShopifyDiscountCodeConnectionSelection;

  shopifyDispute?: AvailableShopifyDisputeSelection;

  shopifyDisputes?: AvailableShopifyDisputeConnectionSelection;

  shopifyDisputeEvidence?: AvailableShopifyDisputeEvidenceSelection;

  shopifyDisputeEvidences?: AvailableShopifyDisputeEvidenceConnectionSelection;

  shopifyDomain?: AvailableShopifyDomainSelection;

  shopifyDomains?: AvailableShopifyDomainConnectionSelection;

  shopifyFulfillment?: AvailableShopifyFulfillmentSelection;

  shopifyFulfillments?: AvailableShopifyFulfillmentConnectionSelection;

  shopifyFulfillmentLineItem?: AvailableShopifyFulfillmentLineItemSelection;

  shopifyFulfillmentLineItems?: AvailableShopifyFulfillmentLineItemConnectionSelection;

  shopifyFulfillmentOrder?: AvailableShopifyFulfillmentOrderSelection;

  shopifyFulfillmentOrders?: AvailableShopifyFulfillmentOrderConnectionSelection;

  shopifyFulfillmentOrderLineItem?: AvailableShopifyFulfillmentOrderLineItemSelection;

  shopifyFulfillmentOrderLineItems?: AvailableShopifyFulfillmentOrderLineItemConnectionSelection;

  shopifyFulfillmentService?: AvailableShopifyFulfillmentServiceSelection;

  shopifyFulfillmentServices?: AvailableShopifyFulfillmentServiceConnectionSelection;

  shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;

  shopifyGdprRequests?: AvailableShopifyGdprRequestConnectionSelection;

  shopifyMarket?: AvailableShopifyMarketSelection;

  shopifyMarkets?: AvailableShopifyMarketConnectionSelection;

  shopifyMarketRegion?: AvailableShopifyMarketRegionSelection;

  shopifyMarketRegions?: AvailableShopifyMarketRegionConnectionSelection;

  shopifyMarketWebPresence?: AvailableShopifyMarketWebPresenceSelection;

  shopifyMarketWebPresences?: AvailableShopifyMarketWebPresenceConnectionSelection;

  shopifyOrder?: AvailableShopifyOrderSelection;

  shopifyOrders?: AvailableShopifyOrderConnectionSelection;

  shopifyOrderAdjustment?: AvailableShopifyOrderAdjustmentSelection;

  shopifyOrderAdjustments?: AvailableShopifyOrderAdjustmentConnectionSelection;

  shopifyOrderLineItem?: AvailableShopifyOrderLineItemSelection;

  shopifyOrderLineItems?: AvailableShopifyOrderLineItemConnectionSelection;

  shopifyPayout?: AvailableShopifyPayoutSelection;

  shopifyPayouts?: AvailableShopifyPayoutConnectionSelection;

  shopifyPriceRule?: AvailableShopifyPriceRuleSelection;

  shopifyPriceRules?: AvailableShopifyPriceRuleConnectionSelection;

  shopifyProduct?: AvailableShopifyProductSelection;

  shopifyProducts?: AvailableShopifyProductConnectionSelection;

  shopifyRefund?: AvailableShopifyRefundSelection;

  shopifyRefunds?: AvailableShopifyRefundConnectionSelection;

  shopifyRefundDuty?: AvailableShopifyRefundDutySelection;

  shopifyRefundDuties?: AvailableShopifyRefundDutyConnectionSelection;

  shopifyRefundLineItem?: AvailableShopifyRefundLineItemSelection;

  shopifyRefundLineItems?: AvailableShopifyRefundLineItemConnectionSelection;

  shopifyScriptTag?: AvailableShopifyScriptTagSelection;

  shopifyScriptTags?: AvailableShopifyScriptTagConnectionSelection;

  shopifyShop?: AvailableShopifyShopSelection;

  shopifyShops?: AvailableShopifyShopConnectionSelection;

  shopifySync?: AvailableShopifySyncSelection;

  shopifySyncs?: AvailableShopifySyncConnectionSelection;

  session?: AvailableSessionSelection;

  sessions?: AvailableSessionConnectionSelection;

  shopifyShippingLine?: AvailableShopifyShippingLineSelection;

  shopifyShippingLines?: AvailableShopifyShippingLineConnectionSelection;

  shopifyTenderTransaction?: AvailableShopifyTenderTransactionSelection;

  shopifyTenderTransactions?: AvailableShopifyTenderTransactionConnectionSelection;

  shopifySmartCollect?: AvailableShopifySmartCollectSelection;

  shopifySmartCollects?: AvailableShopifySmartCollectConnectionSelection;

  internal?: AvailableInternalQueriesSelection;

  currentSession?: AvailableSessionSelection;

  shopifyConnection?: AvailableShopifySelection;
};



export type User = {

  __typename: 'User';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  emailVerified: (Scalars['Boolean'] | null);

  roles: Role[];

  resetPasswordToken: (Scalars['String'] | null);

  resetPasswordTokenExpiration: (Scalars['DateTime'] | null);

  lastName: (Scalars['String'] | null);

  lastSignedIn: (Scalars['DateTime'] | null);

  firstName: (Scalars['String'] | null);

  googleProfileId: (Scalars['String'] | null);

  email: Scalars['EmailAddress'];

  googleImageUrl: (Scalars['URL'] | null);

  account: UserAccountEnum;

  emailVerificationToken: (Scalars['String'] | null);

  emailVerificationTokenExpiration: (Scalars['DateTime'] | null);

  keys: (Scalars['JSON'] | null);

  team: UserTeamEnum[];

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableUserSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  emailVerified?: boolean | null | undefined;

  roles?: AvailableRoleSelection;

  resetPasswordToken?: boolean | null | undefined;

  resetPasswordTokenExpiration?: boolean | null | undefined;

  lastName?: boolean | null | undefined;

  lastSignedIn?: boolean | null | undefined;

  firstName?: boolean | null | undefined;

  googleProfileId?: boolean | null | undefined;

  email?: boolean | null | undefined;

  googleImageUrl?: boolean | null | undefined;

  account?: boolean | null | undefined;

  emailVerificationToken?: boolean | null | undefined;

  emailVerificationTokenExpiration?: boolean | null | undefined;

  keys?: boolean | null | undefined;

  team?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A named group of permissions granted to a particular actor in the system. Managed in the Gadget editor. */
export type Role = {

  __typename: 'Role';

  /** The stable identifier for this role. Null if the role has since been deleted. */
  key: Scalars['String'];

  /** The human readable name for this role. Can be changed. */
  name: Scalars['String'];
};



export type AvailableRoleSelection = {

  __typename?: boolean | null | undefined;

  /** The stable identifier for this role. Null if the role has since been deleted. */
  key?: boolean | null | undefined;

  /** The human readable name for this role. Can be changed. */
  name?: boolean | null | undefined;
};


/** A connection to a list of User items. */
export type UserConnection = {

  __typename: 'UserConnection';

  /** A list of edges. */
  edges: UserEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableUserConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableUserEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a User connection. */
export type UserEdge = {

  __typename: 'UserEdge';

  /** The item at the end of the edge */
  node: User;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableUserEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableUserSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** Information about pagination in a connection. */
export type PageInfo = {

  __typename: 'PageInfo';

  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];

  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];

  /** When paginating backwards, the cursor to continue. */
  startCursor: (Scalars['String'] | null);

  /** When paginating forwards, the cursor to continue. */
  endCursor: (Scalars['String'] | null);
};



export type AvailablePageInfoSelection = {

  __typename?: boolean | null | undefined;

  /** When paginating forwards, are there more items? */
  hasNextPage?: boolean | null | undefined;

  /** When paginating backwards, are there more items? */
  hasPreviousPage?: boolean | null | undefined;

  /** When paginating backwards, the cursor to continue. */
  startCursor?: boolean | null | undefined;

  /** When paginating forwards, the cursor to continue. */
  endCursor?: boolean | null | undefined;
};



export type ShopifyApp = {

  __typename: 'ShopifyApp';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  apiKey: (Scalars['String'] | null);

  appStoreAppUrl: (Scalars['String'] | null);

  appStoreDeveloperUrl: (Scalars['String'] | null);

  availableAccessScopes: (Scalars['JSON'] | null);

  description: (Scalars['String'] | null);

  developerName: (Scalars['String'] | null);

  developerType: ShopifyAppDeveloperTypeEnum;

  embedded: (Scalars['Boolean'] | null);

  failedRequirements: (Scalars['JSON'] | null);

  features: (Scalars['JSON'] | null);

  feedback: (Scalars['JSON'] | null);

  installations: ShopifyAppInstallationConnection;

  handle: (Scalars['String'] | null);

  previouslyInstalled: (Scalars['Boolean'] | null);

  pricingDetails: (Scalars['String'] | null);

  pricingDetailsSummary: (Scalars['String'] | null);

  privacyPolicyUrl: (Scalars['String'] | null);

  publicCategory: ShopifyAppPublicCategoryEnum;

  published: (Scalars['Boolean'] | null);

  requestedAccessScopes: (Scalars['JSON'] | null);

  shopifyDeveloped: (Scalars['Boolean'] | null);

  title: (Scalars['String'] | null);

  uninstallMessage: (Scalars['String'] | null);

  webhookApiVersion: (Scalars['String'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyAppSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  apiKey?: boolean | null | undefined;

  appStoreAppUrl?: boolean | null | undefined;

  appStoreDeveloperUrl?: boolean | null | undefined;

  availableAccessScopes?: boolean | null | undefined;

  description?: boolean | null | undefined;

  developerName?: boolean | null | undefined;

  developerType?: boolean | null | undefined;

  embedded?: boolean | null | undefined;

  failedRequirements?: boolean | null | undefined;

  features?: boolean | null | undefined;

  feedback?: boolean | null | undefined;

  installations?: AvailableShopifyAppInstallationConnectionSelection;

  handle?: boolean | null | undefined;

  previouslyInstalled?: boolean | null | undefined;

  pricingDetails?: boolean | null | undefined;

  pricingDetailsSummary?: boolean | null | undefined;

  privacyPolicyUrl?: boolean | null | undefined;

  publicCategory?: boolean | null | undefined;

  published?: boolean | null | undefined;

  requestedAccessScopes?: boolean | null | undefined;

  shopifyDeveloped?: boolean | null | undefined;

  title?: boolean | null | undefined;

  uninstallMessage?: boolean | null | undefined;

  webhookApiVersion?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyAppInstallation items. */
export type ShopifyAppInstallationConnection = {

  __typename: 'ShopifyAppInstallationConnection';

  /** A list of edges. */
  edges: ShopifyAppInstallationEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyAppInstallationConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyAppInstallationEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyAppInstallation connection. */
export type ShopifyAppInstallationEdge = {

  __typename: 'ShopifyAppInstallationEdge';

  /** The item at the end of the edge */
  node: ShopifyAppInstallation;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyAppInstallationEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyAppInstallationSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyAppInstallation = {

  __typename: 'ShopifyAppInstallation';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  accessScopes: (Scalars['JSON'] | null);

  launchUrl: (Scalars['String'] | null);

  uninstallUrl: (Scalars['String'] | null);

  app: (ShopifyApp | null);

  appId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyAppInstallationSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  accessScopes?: boolean | null | undefined;

  launchUrl?: boolean | null | undefined;

  uninstallUrl?: boolean | null | undefined;

  app?: AvailableShopifyAppSelection;

  appId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyShop = {

  __typename: 'ShopifyShop';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars['RecordState'];

  collections: ShopifyCollectionConnection;

  marketRegions: ShopifyMarketRegionConnection;

  orderAdjustments: ShopifyOrderAdjustmentConnection;

  balanceTransactions: ShopifyBalanceTransactionConnection;

  checkoutLineItems: ShopifyCheckoutLineItemConnection;

  markets: ShopifyMarketConnection;

  gdprRequests: ShopifyGdprRequestConnection;

  orderLineItems: ShopifyOrderLineItemConnection;

  orders: ShopifyOrderConnection;

  disputes: ShopifyDisputeConnection;

  refunds: ShopifyRefundConnection;

  refundLineItems: ShopifyRefundLineItemConnection;

  company: ShopifyCompanyConnection;

  collects: ShopifyCollectConnection;

  syncs: ShopifySyncConnection;

  priceRules: ShopifyPriceRuleConnection;

  checkouts: ShopifyCheckoutConnection;

  fulfillments: ShopifyFulfillmentConnection;

  marketWebPresences: ShopifyMarketWebPresenceConnection;

  fulfillmentLineItems: ShopifyFulfillmentLineItemConnection;

  fulfillmentOrderLineItems: ShopifyFulfillmentOrderLineItemConnection;

  discountCodes: ShopifyDiscountCodeConnection;

  appInstallations: ShopifyAppInstallationConnection;

  refundDuties: ShopifyRefundDutyConnection;

  customerAccountsV2: (Scalars['JSON'] | null);

  /** @deprecated This field is no longer supported in the Public API. Please remove it from your queries, and use the Internal API for access. */
  accessToken: (Scalars['String'] | null);

  address1: (Scalars['String'] | null);

  address2: (Scalars['String'] | null);

  checkoutApiSupported: (Scalars['Boolean'] | null);

  city: (Scalars['String'] | null);

  cookieConsentLevel: (Scalars['String'] | null);

  country: (Scalars['String'] | null);

  countryCode: (Scalars['String'] | null);

  countryName: (Scalars['String'] | null);

  countyTaxes: (Scalars['JSON'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  currency: (Scalars['String'] | null);

  customerEmail: (Scalars['String'] | null);

  disabledWebhooks: (Scalars['JSON'] | null);

  domain: (Scalars['String'] | null);

  eligibleForCardReaderGiveaway: (Scalars['Boolean'] | null);

  eligibleForPayments: (Scalars['Boolean'] | null);

  email: (Scalars['String'] | null);

  enabledPresentmentCurrencies: (Scalars['JSON'] | null);

  finances: (Scalars['Boolean'] | null);

  forceSsl: (Scalars['Boolean'] | null);

  fulfillmentOrders: ShopifyFulfillmentOrderConnection;

  googleAppsDomain: (Scalars['String'] | null);

  googleAppsLoginEnabled: (Scalars['Boolean'] | null);

  grantedScopes: (Scalars['JSON'] | null);

  hasDiscounts: (Scalars['Boolean'] | null);

  hasGiftCards: (Scalars['Boolean'] | null);

  hasStorefront: (Scalars['Boolean'] | null);

  discounts: ShopifyDiscountConnection;

  ianaTimezone: (Scalars['String'] | null);

  installedViaApiKey: (Scalars['String'] | null);

  fulfillmentServices: ShopifyFulfillmentServiceConnection;

  latitude: (Scalars['Float'] | null);

  longitude: (Scalars['Float'] | null);

  marketingSmsContentEnabledAtCheckout: (Scalars['Boolean'] | null);

  scriptTags: ShopifyScriptTagConnection;

  moneyFormat: (Scalars['String'] | null);

  moneyInEmailsFormat: (Scalars['String'] | null);

  moneyWithCurrencyFormat: (Scalars['String'] | null);

  moneyWithCurrencyInEmailsFormat: (Scalars['String'] | null);

  multiLocationEnabled: (Scalars['Boolean'] | null);

  myshopifyDomain: (Scalars['String'] | null);

  name: (Scalars['String'] | null);

  payouts: ShopifyPayoutConnection;

  passwordEnabled: (Scalars['Boolean'] | null);

  phone: (Scalars['String'] | null);

  planDisplayName: (Scalars['String'] | null);

  planName: (Scalars['String'] | null);

  preLaunchEnabled: (Scalars['Boolean'] | null);

  primaryLocale: (Scalars['String'] | null);

  province: (Scalars['String'] | null);

  provinceCode: (Scalars['String'] | null);

  bulkOperations: ShopifyBulkOperationConnection;

  registeredWebhooks: (Scalars['JSON'] | null);

  requiresExtraPaymentsAgreement: (Scalars['Boolean'] | null);

  domains: ShopifyDomainConnection;

  disputeEvidences: ShopifyDisputeEvidenceConnection;

  setupRequired: (Scalars['Boolean'] | null);

  shopOwner: (Scalars['String'] | null);

  source: (Scalars['String'] | null);

  taxShipping: (Scalars['Boolean'] | null);

  taxesIncluded: (Scalars['Boolean'] | null);

  timezone: (Scalars['String'] | null);

  transactionalSmsDisabled: (Scalars['Boolean'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  weightUnit: (Scalars['String'] | null);

  products: ShopifyProductConnection;

  zipCode: (Scalars['String'] | null);

  tenderTransactions: ShopifyTenderTransactionConnection;

  shippingLines: ShopifyShippingLineConnection;

  shopifySmartCollects: ShopifySmartCollectConnection;

  handle: (Scalars['String'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyShopSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state?: boolean | null | undefined;

  collections?: AvailableShopifyCollectionConnectionSelection;

  marketRegions?: AvailableShopifyMarketRegionConnectionSelection;

  orderAdjustments?: AvailableShopifyOrderAdjustmentConnectionSelection;

  balanceTransactions?: AvailableShopifyBalanceTransactionConnectionSelection;

  checkoutLineItems?: AvailableShopifyCheckoutLineItemConnectionSelection;

  markets?: AvailableShopifyMarketConnectionSelection;

  gdprRequests?: AvailableShopifyGdprRequestConnectionSelection;

  orderLineItems?: AvailableShopifyOrderLineItemConnectionSelection;

  orders?: AvailableShopifyOrderConnectionSelection;

  disputes?: AvailableShopifyDisputeConnectionSelection;

  refunds?: AvailableShopifyRefundConnectionSelection;

  refundLineItems?: AvailableShopifyRefundLineItemConnectionSelection;

  company?: AvailableShopifyCompanyConnectionSelection;

  collects?: AvailableShopifyCollectConnectionSelection;

  syncs?: AvailableShopifySyncConnectionSelection;

  priceRules?: AvailableShopifyPriceRuleConnectionSelection;

  checkouts?: AvailableShopifyCheckoutConnectionSelection;

  fulfillments?: AvailableShopifyFulfillmentConnectionSelection;

  marketWebPresences?: AvailableShopifyMarketWebPresenceConnectionSelection;

  fulfillmentLineItems?: AvailableShopifyFulfillmentLineItemConnectionSelection;

  fulfillmentOrderLineItems?: AvailableShopifyFulfillmentOrderLineItemConnectionSelection;

  discountCodes?: AvailableShopifyDiscountCodeConnectionSelection;

  appInstallations?: AvailableShopifyAppInstallationConnectionSelection;

  refundDuties?: AvailableShopifyRefundDutyConnectionSelection;

  customerAccountsV2?: boolean | null | undefined;

  /** @deprecated This field is no longer supported in the Public API. Please remove it from your queries, and use the Internal API for access. */
  accessToken?: boolean | null | undefined;

  address1?: boolean | null | undefined;

  address2?: boolean | null | undefined;

  checkoutApiSupported?: boolean | null | undefined;

  city?: boolean | null | undefined;

  cookieConsentLevel?: boolean | null | undefined;

  country?: boolean | null | undefined;

  countryCode?: boolean | null | undefined;

  countryName?: boolean | null | undefined;

  countyTaxes?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  currency?: boolean | null | undefined;

  customerEmail?: boolean | null | undefined;

  disabledWebhooks?: boolean | null | undefined;

  domain?: boolean | null | undefined;

  eligibleForCardReaderGiveaway?: boolean | null | undefined;

  eligibleForPayments?: boolean | null | undefined;

  email?: boolean | null | undefined;

  enabledPresentmentCurrencies?: boolean | null | undefined;

  finances?: boolean | null | undefined;

  forceSsl?: boolean | null | undefined;

  fulfillmentOrders?: AvailableShopifyFulfillmentOrderConnectionSelection;

  googleAppsDomain?: boolean | null | undefined;

  googleAppsLoginEnabled?: boolean | null | undefined;

  grantedScopes?: boolean | null | undefined;

  hasDiscounts?: boolean | null | undefined;

  hasGiftCards?: boolean | null | undefined;

  hasStorefront?: boolean | null | undefined;

  discounts?: AvailableShopifyDiscountConnectionSelection;

  ianaTimezone?: boolean | null | undefined;

  installedViaApiKey?: boolean | null | undefined;

  fulfillmentServices?: AvailableShopifyFulfillmentServiceConnectionSelection;

  latitude?: boolean | null | undefined;

  longitude?: boolean | null | undefined;

  marketingSmsContentEnabledAtCheckout?: boolean | null | undefined;

  scriptTags?: AvailableShopifyScriptTagConnectionSelection;

  moneyFormat?: boolean | null | undefined;

  moneyInEmailsFormat?: boolean | null | undefined;

  moneyWithCurrencyFormat?: boolean | null | undefined;

  moneyWithCurrencyInEmailsFormat?: boolean | null | undefined;

  multiLocationEnabled?: boolean | null | undefined;

  myshopifyDomain?: boolean | null | undefined;

  name?: boolean | null | undefined;

  payouts?: AvailableShopifyPayoutConnectionSelection;

  passwordEnabled?: boolean | null | undefined;

  phone?: boolean | null | undefined;

  planDisplayName?: boolean | null | undefined;

  planName?: boolean | null | undefined;

  preLaunchEnabled?: boolean | null | undefined;

  primaryLocale?: boolean | null | undefined;

  province?: boolean | null | undefined;

  provinceCode?: boolean | null | undefined;

  bulkOperations?: AvailableShopifyBulkOperationConnectionSelection;

  registeredWebhooks?: boolean | null | undefined;

  requiresExtraPaymentsAgreement?: boolean | null | undefined;

  domains?: AvailableShopifyDomainConnectionSelection;

  disputeEvidences?: AvailableShopifyDisputeEvidenceConnectionSelection;

  setupRequired?: boolean | null | undefined;

  shopOwner?: boolean | null | undefined;

  source?: boolean | null | undefined;

  taxShipping?: boolean | null | undefined;

  taxesIncluded?: boolean | null | undefined;

  timezone?: boolean | null | undefined;

  transactionalSmsDisabled?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  weightUnit?: boolean | null | undefined;

  products?: AvailableShopifyProductConnectionSelection;

  zipCode?: boolean | null | undefined;

  tenderTransactions?: AvailableShopifyTenderTransactionConnectionSelection;

  shippingLines?: AvailableShopifyShippingLineConnectionSelection;

  shopifySmartCollects?: AvailableShopifySmartCollectConnectionSelection;

  handle?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyCollection items. */
export type ShopifyCollectionConnection = {

  __typename: 'ShopifyCollectionConnection';

  /** A list of edges. */
  edges: ShopifyCollectionEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyCollectionConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyCollectionEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyCollection connection. */
export type ShopifyCollectionEdge = {

  __typename: 'ShopifyCollectionEdge';

  /** The item at the end of the edge */
  node: ShopifyCollection;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyCollectionEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyCollectionSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyCollection = {

  __typename: 'ShopifyCollection';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  body: (Scalars['String'] | null);

  disjunctive: (Scalars['Boolean'] | null);

  handle: (Scalars['String'] | null);

  image: (Scalars['JSON'] | null);

  publishedAt: (Scalars['DateTime'] | null);

  publishedScope: (Scalars['String'] | null);

  rules: (Scalars['JSON'] | null);

  sortOrder: (Scalars['String'] | null);

  templateSuffix: (Scalars['String'] | null);

  title: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  products: ShopifyProductConnection;

  shopifyCollects: ShopifyCollectConnection;

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  smartSales: (Scalars['JSON'] | null);

  collectionType: ShopifyCollectionCollectionTypeEnum;

  shopifySmartCollects: ShopifySmartCollectConnection;

  smartProducts: ShopifyProductConnection;

  collected: (Scalars['DateTime'] | null);

  shopname: (Scalars['JSON'] | null);

  customSales: (Scalars['JSON'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyCollectionSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  body?: boolean | null | undefined;

  disjunctive?: boolean | null | undefined;

  handle?: boolean | null | undefined;

  image?: boolean | null | undefined;

  publishedAt?: boolean | null | undefined;

  publishedScope?: boolean | null | undefined;

  rules?: boolean | null | undefined;

  sortOrder?: boolean | null | undefined;

  templateSuffix?: boolean | null | undefined;

  title?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  products?: AvailableShopifyProductConnectionSelection;

  shopifyCollects?: AvailableShopifyCollectConnectionSelection;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  smartSales?: boolean | null | undefined;

  collectionType?: boolean | null | undefined;

  shopifySmartCollects?: AvailableShopifySmartCollectConnectionSelection;

  smartProducts?: AvailableShopifyProductConnectionSelection;

  collected?: boolean | null | undefined;

  shopname?: boolean | null | undefined;

  customSales?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyProduct items. */
export type ShopifyProductConnection = {

  __typename: 'ShopifyProductConnection';

  /** A list of edges. */
  edges: ShopifyProductEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyProductConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyProductEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyProduct connection. */
export type ShopifyProductEdge = {

  __typename: 'ShopifyProductEdge';

  /** The item at the end of the edge */
  node: ShopifyProduct;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyProductEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyProductSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyProduct = {

  __typename: 'ShopifyProduct';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  orderLineItems: ShopifyOrderLineItemConnection;

  compareAtPriceRange: (Scalars['JSON'] | null);

  productCategory: (Scalars['JSON'] | null);

  body: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  handle: (Scalars['String'] | null);

  checkoutLineItems: ShopifyCheckoutLineItemConnection;

  productType: (Scalars['String'] | null);

  publishedAt: (Scalars['DateTime'] | null);

  publishedScope: (Scalars['String'] | null);

  status: ShopifyProductStatusEnum;

  tags: (Scalars['JSON'] | null);

  templateSuffix: (Scalars['String'] | null);

  title: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  vendor: (Scalars['String'] | null);

  customCollections: ShopifyCollectionConnection;

  shopifyCollects: ShopifyCollectConnection;

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  sales: (Scalars['JSON'] | null);

  shopifySmartCollects: ShopifySmartCollectConnection;

  smartCollections: ShopifyCollectionConnection;

  sold: (Scalars['JSON'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyProductSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  orderLineItems?: AvailableShopifyOrderLineItemConnectionSelection;

  compareAtPriceRange?: boolean | null | undefined;

  productCategory?: boolean | null | undefined;

  body?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  handle?: boolean | null | undefined;

  checkoutLineItems?: AvailableShopifyCheckoutLineItemConnectionSelection;

  productType?: boolean | null | undefined;

  publishedAt?: boolean | null | undefined;

  publishedScope?: boolean | null | undefined;

  status?: boolean | null | undefined;

  tags?: boolean | null | undefined;

  templateSuffix?: boolean | null | undefined;

  title?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  vendor?: boolean | null | undefined;

  customCollections?: AvailableShopifyCollectionConnectionSelection;

  shopifyCollects?: AvailableShopifyCollectConnectionSelection;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  sales?: boolean | null | undefined;

  shopifySmartCollects?: AvailableShopifySmartCollectConnectionSelection;

  smartCollections?: AvailableShopifyCollectionConnectionSelection;

  sold?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyOrderLineItem items. */
export type ShopifyOrderLineItemConnection = {

  __typename: 'ShopifyOrderLineItemConnection';

  /** A list of edges. */
  edges: ShopifyOrderLineItemEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyOrderLineItemConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyOrderLineItemEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyOrderLineItem connection. */
export type ShopifyOrderLineItemEdge = {

  __typename: 'ShopifyOrderLineItemEdge';

  /** The item at the end of the edge */
  node: ShopifyOrderLineItem;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyOrderLineItemEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyOrderLineItemSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyOrderLineItem = {

  __typename: 'ShopifyOrderLineItem';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  fulfillmentOrderLineItems: ShopifyFulfillmentOrderLineItemConnection;

  refunds: ShopifyRefundLineItemConnection;

  fulfillmentLineItems: ShopifyFulfillmentLineItemConnection;

  attributedStaffs: (Scalars['JSON'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  currentQuantity: (Scalars['Float'] | null);

  discountAllocations: (Scalars['JSON'] | null);

  fulfillableQuantity: (Scalars['Float'] | null);

  fulfillmentService: (Scalars['String'] | null);

  fulfillmentStatus: (Scalars['String'] | null);

  giftCard: (Scalars['Boolean'] | null);

  grams: (Scalars['Float'] | null);

  name: (Scalars['String'] | null);

  price: (Scalars['String'] | null);

  priceSet: (Scalars['JSON'] | null);

  productExists: (Scalars['Boolean'] | null);

  properties: (Scalars['JSON'] | null);

  quantity: (Scalars['Float'] | null);

  requiresShipping: (Scalars['Boolean'] | null);

  sku: (Scalars['String'] | null);

  taxLines: (Scalars['JSON'] | null);

  taxable: (Scalars['Boolean'] | null);

  title: (Scalars['String'] | null);

  totalDiscount: (Scalars['String'] | null);

  totalDiscountSet: (Scalars['JSON'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  variantInventoryManagement: (Scalars['String'] | null);

  variantTitle: (Scalars['String'] | null);

  vendor: (Scalars['String'] | null);

  order: (ShopifyOrder | null);

  orderId: (Scalars['GadgetID'] | null);

  product: (ShopifyProduct | null);

  productId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyOrderLineItemSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  fulfillmentOrderLineItems?: AvailableShopifyFulfillmentOrderLineItemConnectionSelection;

  refunds?: AvailableShopifyRefundLineItemConnectionSelection;

  fulfillmentLineItems?: AvailableShopifyFulfillmentLineItemConnectionSelection;

  attributedStaffs?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  currentQuantity?: boolean | null | undefined;

  discountAllocations?: boolean | null | undefined;

  fulfillableQuantity?: boolean | null | undefined;

  fulfillmentService?: boolean | null | undefined;

  fulfillmentStatus?: boolean | null | undefined;

  giftCard?: boolean | null | undefined;

  grams?: boolean | null | undefined;

  name?: boolean | null | undefined;

  price?: boolean | null | undefined;

  priceSet?: boolean | null | undefined;

  productExists?: boolean | null | undefined;

  properties?: boolean | null | undefined;

  quantity?: boolean | null | undefined;

  requiresShipping?: boolean | null | undefined;

  sku?: boolean | null | undefined;

  taxLines?: boolean | null | undefined;

  taxable?: boolean | null | undefined;

  title?: boolean | null | undefined;

  totalDiscount?: boolean | null | undefined;

  totalDiscountSet?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  variantInventoryManagement?: boolean | null | undefined;

  variantTitle?: boolean | null | undefined;

  vendor?: boolean | null | undefined;

  order?: AvailableShopifyOrderSelection;

  orderId?: boolean | null | undefined;

  product?: AvailableShopifyProductSelection;

  productId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyFulfillmentOrderLineItem items. */
export type ShopifyFulfillmentOrderLineItemConnection = {

  __typename: 'ShopifyFulfillmentOrderLineItemConnection';

  /** A list of edges. */
  edges: ShopifyFulfillmentOrderLineItemEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyFulfillmentOrderLineItemConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyFulfillmentOrderLineItemEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyFulfillmentOrderLineItem connection. */
export type ShopifyFulfillmentOrderLineItemEdge = {

  __typename: 'ShopifyFulfillmentOrderLineItemEdge';

  /** The item at the end of the edge */
  node: ShopifyFulfillmentOrderLineItem;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyFulfillmentOrderLineItemEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyFulfillmentOrderLineItemSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyFulfillmentOrderLineItem = {

  __typename: 'ShopifyFulfillmentOrderLineItem';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  remainingQuantity: (Scalars['Float'] | null);

  quantity: (Scalars['Float'] | null);

  fulfillmentOrder: (ShopifyFulfillmentOrder | null);

  fulfillmentOrderId: (Scalars['GadgetID'] | null);

  orderLineItem: (ShopifyOrderLineItem | null);

  orderLineItemId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyFulfillmentOrderLineItemSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  remainingQuantity?: boolean | null | undefined;

  quantity?: boolean | null | undefined;

  fulfillmentOrder?: AvailableShopifyFulfillmentOrderSelection;

  fulfillmentOrderId?: boolean | null | undefined;

  orderLineItem?: AvailableShopifyOrderLineItemSelection;

  orderLineItemId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyFulfillmentOrder = {

  __typename: 'ShopifyFulfillmentOrder';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  assignedLocation: (Scalars['JSON'] | null);

  deliveryMethod: (Scalars['JSON'] | null);

  destination: (Scalars['JSON'] | null);

  fulfillAt: (Scalars['DateTime'] | null);

  fulfillBy: (Scalars['DateTime'] | null);

  fulfillmentHolds: (Scalars['JSON'] | null);

  internationalDuties: (Scalars['JSON'] | null);

  merchantRequests: (Scalars['JSON'] | null);

  requestStatus: (Scalars['String'] | null);

  status: (Scalars['String'] | null);

  supportedActions: (Scalars['JSON'] | null);

  fulfillmentOrderLineItems: ShopifyFulfillmentOrderLineItemConnection;

  order: (ShopifyOrder | null);

  orderId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyFulfillmentOrderSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  assignedLocation?: boolean | null | undefined;

  deliveryMethod?: boolean | null | undefined;

  destination?: boolean | null | undefined;

  fulfillAt?: boolean | null | undefined;

  fulfillBy?: boolean | null | undefined;

  fulfillmentHolds?: boolean | null | undefined;

  internationalDuties?: boolean | null | undefined;

  merchantRequests?: boolean | null | undefined;

  requestStatus?: boolean | null | undefined;

  status?: boolean | null | undefined;

  supportedActions?: boolean | null | undefined;

  fulfillmentOrderLineItems?: AvailableShopifyFulfillmentOrderLineItemConnectionSelection;

  order?: AvailableShopifyOrderSelection;

  orderId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyOrder = {

  __typename: 'ShopifyOrder';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  refunds: ShopifyRefundConnection;

  checkouts: ShopifyCheckoutConnection;

  fulfillmentOrders: ShopifyFulfillmentOrderConnection;

  adjustments: ShopifyOrderAdjustmentConnection;

  additionalFees: (Scalars['JSON'] | null);

  cancellation: (Scalars['JSON'] | null);

  shopifyProtect: (Scalars['JSON'] | null);

  purchasingEntity: (Scalars['JSON'] | null);

  balanceTransactions: ShopifyBalanceTransactionConnection;

  billingAddress: (Scalars['JSON'] | null);

  browserIp: (Scalars['String'] | null);

  buyerAcceptsMarketing: (Scalars['Boolean'] | null);

  cancelReason: (Scalars['String'] | null);

  cancelledAt: (Scalars['DateTime'] | null);

  cartToken: (Scalars['String'] | null);

  checkoutToken: (Scalars['String'] | null);

  clientDetails: (Scalars['JSON'] | null);

  closedAt: (Scalars['DateTime'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  currency: (Scalars['String'] | null);

  currentSubtotalPrice: (Scalars['String'] | null);

  currentSubtotalPriceSet: (Scalars['JSON'] | null);

  currentTotalAdditionalFeesSet: (Scalars['JSON'] | null);

  currentTotalDiscounts: (Scalars['String'] | null);

  currentTotalDiscountsSet: (Scalars['JSON'] | null);

  currentTotalDutiesSet: (Scalars['JSON'] | null);

  currentTotalPrice: (Scalars['String'] | null);

  currentTotalPriceSet: (Scalars['JSON'] | null);

  currentTotalTax: (Scalars['String'] | null);

  currentTotalTaxSet: (Scalars['JSON'] | null);

  customerLocale: (Scalars['String'] | null);

  discountApplications: (Scalars['JSON'] | null);

  discountCodes: (Scalars['JSON'] | null);

  email: (Scalars['String'] | null);

  estimatedTaxes: (Scalars['Boolean'] | null);

  financialStatus: (Scalars['String'] | null);

  fulfillmentStatus: (Scalars['String'] | null);

  fulfillments: ShopifyFulfillmentConnection;

  landingSite: (Scalars['String'] | null);

  lineItems: ShopifyOrderLineItemConnection;

  name: (Scalars['String'] | null);

  note: (Scalars['String'] | null);

  noteAttributes: (Scalars['JSON'] | null);

  number: (Scalars['Float'] | null);

  orderNumber: (Scalars['Float'] | null);

  orderStatusUrl: (Scalars['String'] | null);

  originalTotalAdditionalFeesSet: (Scalars['JSON'] | null);

  originalTotalDutiesSet: (Scalars['JSON'] | null);

  paymentGatewayNames: (Scalars['JSON'] | null);

  phone: (Scalars['String'] | null);

  poNumber: (Scalars['String'] | null);

  presentmentCurrency: (Scalars['String'] | null);

  processedAt: (Scalars['DateTime'] | null);

  disputes: ShopifyDisputeConnection;

  referringSite: (Scalars['String'] | null);

  shippingAddress: (Scalars['JSON'] | null);

  sourceIdentifier: (Scalars['String'] | null);

  sourceName: (Scalars['String'] | null);

  sourceUrl: (Scalars['String'] | null);

  subtotalPrice: (Scalars['String'] | null);

  subtotalPriceSet: (Scalars['JSON'] | null);

  tags: (Scalars['JSON'] | null);

  taxExempt: (Scalars['Boolean'] | null);

  taxLines: (Scalars['JSON'] | null);

  taxesIncluded: (Scalars['Boolean'] | null);

  test: (Scalars['Boolean'] | null);

  token: (Scalars['String'] | null);

  totalDiscounts: (Scalars['String'] | null);

  totalDiscountsSet: (Scalars['JSON'] | null);

  totalLineItemsPrice: (Scalars['String'] | null);

  totalLineItemsPriceSet: (Scalars['JSON'] | null);

  totalOutstanding: (Scalars['String'] | null);

  totalPrice: (Scalars['String'] | null);

  totalPriceSet: (Scalars['JSON'] | null);

  totalShippingPriceSet: (Scalars['JSON'] | null);

  totalTax: (Scalars['String'] | null);

  totalTaxSet: (Scalars['JSON'] | null);

  totalTipReceived: (Scalars['String'] | null);

  totalWeight: (Scalars['Float'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  purchasingCompany: (ShopifyCompany | null);

  purchasingCompanyId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  tenderTransactions: ShopifyTenderTransactionConnection;

  shippingLines: ShopifyShippingLineConnection;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyOrderSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  refunds?: AvailableShopifyRefundConnectionSelection;

  checkouts?: AvailableShopifyCheckoutConnectionSelection;

  fulfillmentOrders?: AvailableShopifyFulfillmentOrderConnectionSelection;

  adjustments?: AvailableShopifyOrderAdjustmentConnectionSelection;

  additionalFees?: boolean | null | undefined;

  cancellation?: boolean | null | undefined;

  shopifyProtect?: boolean | null | undefined;

  purchasingEntity?: boolean | null | undefined;

  balanceTransactions?: AvailableShopifyBalanceTransactionConnectionSelection;

  billingAddress?: boolean | null | undefined;

  browserIp?: boolean | null | undefined;

  buyerAcceptsMarketing?: boolean | null | undefined;

  cancelReason?: boolean | null | undefined;

  cancelledAt?: boolean | null | undefined;

  cartToken?: boolean | null | undefined;

  checkoutToken?: boolean | null | undefined;

  clientDetails?: boolean | null | undefined;

  closedAt?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  currency?: boolean | null | undefined;

  currentSubtotalPrice?: boolean | null | undefined;

  currentSubtotalPriceSet?: boolean | null | undefined;

  currentTotalAdditionalFeesSet?: boolean | null | undefined;

  currentTotalDiscounts?: boolean | null | undefined;

  currentTotalDiscountsSet?: boolean | null | undefined;

  currentTotalDutiesSet?: boolean | null | undefined;

  currentTotalPrice?: boolean | null | undefined;

  currentTotalPriceSet?: boolean | null | undefined;

  currentTotalTax?: boolean | null | undefined;

  currentTotalTaxSet?: boolean | null | undefined;

  customerLocale?: boolean | null | undefined;

  discountApplications?: boolean | null | undefined;

  discountCodes?: boolean | null | undefined;

  email?: boolean | null | undefined;

  estimatedTaxes?: boolean | null | undefined;

  financialStatus?: boolean | null | undefined;

  fulfillmentStatus?: boolean | null | undefined;

  fulfillments?: AvailableShopifyFulfillmentConnectionSelection;

  landingSite?: boolean | null | undefined;

  lineItems?: AvailableShopifyOrderLineItemConnectionSelection;

  name?: boolean | null | undefined;

  note?: boolean | null | undefined;

  noteAttributes?: boolean | null | undefined;

  number?: boolean | null | undefined;

  orderNumber?: boolean | null | undefined;

  orderStatusUrl?: boolean | null | undefined;

  originalTotalAdditionalFeesSet?: boolean | null | undefined;

  originalTotalDutiesSet?: boolean | null | undefined;

  paymentGatewayNames?: boolean | null | undefined;

  phone?: boolean | null | undefined;

  poNumber?: boolean | null | undefined;

  presentmentCurrency?: boolean | null | undefined;

  processedAt?: boolean | null | undefined;

  disputes?: AvailableShopifyDisputeConnectionSelection;

  referringSite?: boolean | null | undefined;

  shippingAddress?: boolean | null | undefined;

  sourceIdentifier?: boolean | null | undefined;

  sourceName?: boolean | null | undefined;

  sourceUrl?: boolean | null | undefined;

  subtotalPrice?: boolean | null | undefined;

  subtotalPriceSet?: boolean | null | undefined;

  tags?: boolean | null | undefined;

  taxExempt?: boolean | null | undefined;

  taxLines?: boolean | null | undefined;

  taxesIncluded?: boolean | null | undefined;

  test?: boolean | null | undefined;

  token?: boolean | null | undefined;

  totalDiscounts?: boolean | null | undefined;

  totalDiscountsSet?: boolean | null | undefined;

  totalLineItemsPrice?: boolean | null | undefined;

  totalLineItemsPriceSet?: boolean | null | undefined;

  totalOutstanding?: boolean | null | undefined;

  totalPrice?: boolean | null | undefined;

  totalPriceSet?: boolean | null | undefined;

  totalShippingPriceSet?: boolean | null | undefined;

  totalTax?: boolean | null | undefined;

  totalTaxSet?: boolean | null | undefined;

  totalTipReceived?: boolean | null | undefined;

  totalWeight?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  purchasingCompany?: AvailableShopifyCompanySelection;

  purchasingCompanyId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  tenderTransactions?: AvailableShopifyTenderTransactionConnectionSelection;

  shippingLines?: AvailableShopifyShippingLineConnectionSelection;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyRefund items. */
export type ShopifyRefundConnection = {

  __typename: 'ShopifyRefundConnection';

  /** A list of edges. */
  edges: ShopifyRefundEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyRefundConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyRefundEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyRefund connection. */
export type ShopifyRefundEdge = {

  __typename: 'ShopifyRefundEdge';

  /** The item at the end of the edge */
  node: ShopifyRefund;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyRefundEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyRefundSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyRefund = {

  __typename: 'ShopifyRefund';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  duties: ShopifyRefundDutyConnection;

  note: (Scalars['String'] | null);

  orderAdjustments: ShopifyOrderAdjustmentConnection;

  processedAt: (Scalars['DateTime'] | null);

  refundLineItems: ShopifyRefundLineItemConnection;

  restock: (Scalars['Boolean'] | null);

  order: (ShopifyOrder | null);

  orderId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyRefundSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  duties?: AvailableShopifyRefundDutyConnectionSelection;

  note?: boolean | null | undefined;

  orderAdjustments?: AvailableShopifyOrderAdjustmentConnectionSelection;

  processedAt?: boolean | null | undefined;

  refundLineItems?: AvailableShopifyRefundLineItemConnectionSelection;

  restock?: boolean | null | undefined;

  order?: AvailableShopifyOrderSelection;

  orderId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyRefundDuty items. */
export type ShopifyRefundDutyConnection = {

  __typename: 'ShopifyRefundDutyConnection';

  /** A list of edges. */
  edges: ShopifyRefundDutyEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyRefundDutyConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyRefundDutyEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyRefundDuty connection. */
export type ShopifyRefundDutyEdge = {

  __typename: 'ShopifyRefundDutyEdge';

  /** The item at the end of the edge */
  node: ShopifyRefundDuty;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyRefundDutyEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyRefundDutySelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyRefundDuty = {

  __typename: 'ShopifyRefundDuty';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  amountSet: (Scalars['JSON'] | null);

  refund: (ShopifyRefund | null);

  refundId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyRefundDutySelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  amountSet?: boolean | null | undefined;

  refund?: AvailableShopifyRefundSelection;

  refundId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyOrderAdjustment items. */
export type ShopifyOrderAdjustmentConnection = {

  __typename: 'ShopifyOrderAdjustmentConnection';

  /** A list of edges. */
  edges: ShopifyOrderAdjustmentEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyOrderAdjustmentConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyOrderAdjustmentEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyOrderAdjustment connection. */
export type ShopifyOrderAdjustmentEdge = {

  __typename: 'ShopifyOrderAdjustmentEdge';

  /** The item at the end of the edge */
  node: ShopifyOrderAdjustment;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyOrderAdjustmentEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyOrderAdjustmentSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyOrderAdjustment = {

  __typename: 'ShopifyOrderAdjustment';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  amount: (Scalars['String'] | null);

  amountSet: (Scalars['JSON'] | null);

  kind: (Scalars['String'] | null);

  reason: (Scalars['String'] | null);

  taxAmount: (Scalars['String'] | null);

  taxAmountSet: (Scalars['JSON'] | null);

  order: (ShopifyOrder | null);

  orderId: (Scalars['GadgetID'] | null);

  refund: (ShopifyRefund | null);

  refundId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyOrderAdjustmentSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  amount?: boolean | null | undefined;

  amountSet?: boolean | null | undefined;

  kind?: boolean | null | undefined;

  reason?: boolean | null | undefined;

  taxAmount?: boolean | null | undefined;

  taxAmountSet?: boolean | null | undefined;

  order?: AvailableShopifyOrderSelection;

  orderId?: boolean | null | undefined;

  refund?: AvailableShopifyRefundSelection;

  refundId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyRefundLineItem items. */
export type ShopifyRefundLineItemConnection = {

  __typename: 'ShopifyRefundLineItemConnection';

  /** A list of edges. */
  edges: ShopifyRefundLineItemEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyRefundLineItemConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyRefundLineItemEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyRefundLineItem connection. */
export type ShopifyRefundLineItemEdge = {

  __typename: 'ShopifyRefundLineItemEdge';

  /** The item at the end of the edge */
  node: ShopifyRefundLineItem;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyRefundLineItemEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyRefundLineItemSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyRefundLineItem = {

  __typename: 'ShopifyRefundLineItem';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  quantity: (Scalars['Float'] | null);

  restockType: (Scalars['String'] | null);

  subtotal: (Scalars['Float'] | null);

  subtotalSet: (Scalars['JSON'] | null);

  totalTax: (Scalars['Float'] | null);

  totalTaxSet: (Scalars['JSON'] | null);

  orderLineItem: (ShopifyOrderLineItem | null);

  orderLineItemId: (Scalars['GadgetID'] | null);

  refund: (ShopifyRefund | null);

  refundId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyRefundLineItemSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  quantity?: boolean | null | undefined;

  restockType?: boolean | null | undefined;

  subtotal?: boolean | null | undefined;

  subtotalSet?: boolean | null | undefined;

  totalTax?: boolean | null | undefined;

  totalTaxSet?: boolean | null | undefined;

  orderLineItem?: AvailableShopifyOrderLineItemSelection;

  orderLineItemId?: boolean | null | undefined;

  refund?: AvailableShopifyRefundSelection;

  refundId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyCheckout items. */
export type ShopifyCheckoutConnection = {

  __typename: 'ShopifyCheckoutConnection';

  /** A list of edges. */
  edges: ShopifyCheckoutEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyCheckoutConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyCheckoutEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyCheckout connection. */
export type ShopifyCheckoutEdge = {

  __typename: 'ShopifyCheckoutEdge';

  /** The item at the end of the edge */
  node: ShopifyCheckout;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyCheckoutEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyCheckoutSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyCheckout = {

  __typename: 'ShopifyCheckout';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  abandonedCheckoutUrl: (Scalars['String'] | null);

  appliedDiscount: (Scalars['JSON'] | null);

  buyerAcceptsMarketing: (Scalars['Boolean'] | null);

  completedAt: (Scalars['DateTime'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  creditCard: (Scalars['String'] | null);

  currency: (Scalars['String'] | null);

  customerLocale: (Scalars['String'] | null);

  device: (Scalars['Float'] | null);

  discountCode: (Scalars['String'] | null);

  email: (Scalars['String'] | null);

  legalNoticeUrl: (Scalars['String'] | null);

  lineItems: ShopifyCheckoutLineItemConnection;

  name: (Scalars['String'] | null);

  note: (Scalars['String'] | null);

  noteAttributes: (Scalars['JSON'] | null);

  orderStatusUrl: (Scalars['String'] | null);

  paymentDue: (Scalars['String'] | null);

  paymentUrl: (Scalars['String'] | null);

  payments: (Scalars['JSON'] | null);

  phone: (Scalars['String'] | null);

  presentmentCurrency: (Scalars['String'] | null);

  privacyPolicyUrl: (Scalars['String'] | null);

  refundPolicyUrl: (Scalars['String'] | null);

  requiresShipping: (Scalars['Boolean'] | null);

  reservationTime: (Scalars['Float'] | null);

  reservationTimeLeft: (Scalars['Float'] | null);

  shippingLine: (Scalars['JSON'] | null);

  shippingPolicyUrl: (Scalars['String'] | null);

  shopifyPaymentsAccountId: (Scalars['String'] | null);

  sourceIdentifier: (Scalars['String'] | null);

  sourceName: (Scalars['String'] | null);

  sourceUrl: (Scalars['String'] | null);

  subscriptionPolicyUrl: (Scalars['String'] | null);

  subtotalPrice: (Scalars['String'] | null);

  taxExempt: (Scalars['Boolean'] | null);

  taxLines: (Scalars['JSON'] | null);

  taxManipulations: (Scalars['JSON'] | null);

  taxesIncluded: (Scalars['Boolean'] | null);

  termsOfSaleUrl: (Scalars['String'] | null);

  termsOfServiceUrl: (Scalars['String'] | null);

  token: (Scalars['String'] | null);

  totalLineItemsPrice: (Scalars['String'] | null);

  totalPrice: (Scalars['String'] | null);

  totalTax: (Scalars['String'] | null);

  totalTipReceived: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  userId: (Scalars['String'] | null);

  webUrl: (Scalars['String'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  order: (ShopifyOrder | null);

  orderId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyCheckoutSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  abandonedCheckoutUrl?: boolean | null | undefined;

  appliedDiscount?: boolean | null | undefined;

  buyerAcceptsMarketing?: boolean | null | undefined;

  completedAt?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  creditCard?: boolean | null | undefined;

  currency?: boolean | null | undefined;

  customerLocale?: boolean | null | undefined;

  device?: boolean | null | undefined;

  discountCode?: boolean | null | undefined;

  email?: boolean | null | undefined;

  legalNoticeUrl?: boolean | null | undefined;

  lineItems?: AvailableShopifyCheckoutLineItemConnectionSelection;

  name?: boolean | null | undefined;

  note?: boolean | null | undefined;

  noteAttributes?: boolean | null | undefined;

  orderStatusUrl?: boolean | null | undefined;

  paymentDue?: boolean | null | undefined;

  paymentUrl?: boolean | null | undefined;

  payments?: boolean | null | undefined;

  phone?: boolean | null | undefined;

  presentmentCurrency?: boolean | null | undefined;

  privacyPolicyUrl?: boolean | null | undefined;

  refundPolicyUrl?: boolean | null | undefined;

  requiresShipping?: boolean | null | undefined;

  reservationTime?: boolean | null | undefined;

  reservationTimeLeft?: boolean | null | undefined;

  shippingLine?: boolean | null | undefined;

  shippingPolicyUrl?: boolean | null | undefined;

  shopifyPaymentsAccountId?: boolean | null | undefined;

  sourceIdentifier?: boolean | null | undefined;

  sourceName?: boolean | null | undefined;

  sourceUrl?: boolean | null | undefined;

  subscriptionPolicyUrl?: boolean | null | undefined;

  subtotalPrice?: boolean | null | undefined;

  taxExempt?: boolean | null | undefined;

  taxLines?: boolean | null | undefined;

  taxManipulations?: boolean | null | undefined;

  taxesIncluded?: boolean | null | undefined;

  termsOfSaleUrl?: boolean | null | undefined;

  termsOfServiceUrl?: boolean | null | undefined;

  token?: boolean | null | undefined;

  totalLineItemsPrice?: boolean | null | undefined;

  totalPrice?: boolean | null | undefined;

  totalTax?: boolean | null | undefined;

  totalTipReceived?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  userId?: boolean | null | undefined;

  webUrl?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  order?: AvailableShopifyOrderSelection;

  orderId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyCheckoutLineItem items. */
export type ShopifyCheckoutLineItemConnection = {

  __typename: 'ShopifyCheckoutLineItemConnection';

  /** A list of edges. */
  edges: ShopifyCheckoutLineItemEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyCheckoutLineItemConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyCheckoutLineItemEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyCheckoutLineItem connection. */
export type ShopifyCheckoutLineItemEdge = {

  __typename: 'ShopifyCheckoutLineItemEdge';

  /** The item at the end of the edge */
  node: ShopifyCheckoutLineItem;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyCheckoutLineItemEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyCheckoutLineItemSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyCheckoutLineItem = {

  __typename: 'ShopifyCheckoutLineItem';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  appliedDiscounts: (Scalars['JSON'] | null);

  compareAtPrice: (Scalars['String'] | null);

  discountAllocations: (Scalars['JSON'] | null);

  fulfillmentService: (Scalars['String'] | null);

  grams: (Scalars['Float'] | null);

  key: (Scalars['String'] | null);

  linePrice: (Scalars['String'] | null);

  price: (Scalars['String'] | null);

  quantity: (Scalars['Float'] | null);

  requiresShipping: (Scalars['Boolean'] | null);

  sku: (Scalars['String'] | null);

  taxable: (Scalars['Boolean'] | null);

  title: (Scalars['String'] | null);

  variantTitle: (Scalars['String'] | null);

  vendor: (Scalars['String'] | null);

  checkout: (ShopifyCheckout | null);

  checkoutId: (Scalars['GadgetID'] | null);

  product: (ShopifyProduct | null);

  productId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyCheckoutLineItemSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  appliedDiscounts?: boolean | null | undefined;

  compareAtPrice?: boolean | null | undefined;

  discountAllocations?: boolean | null | undefined;

  fulfillmentService?: boolean | null | undefined;

  grams?: boolean | null | undefined;

  key?: boolean | null | undefined;

  linePrice?: boolean | null | undefined;

  price?: boolean | null | undefined;

  quantity?: boolean | null | undefined;

  requiresShipping?: boolean | null | undefined;

  sku?: boolean | null | undefined;

  taxable?: boolean | null | undefined;

  title?: boolean | null | undefined;

  variantTitle?: boolean | null | undefined;

  vendor?: boolean | null | undefined;

  checkout?: AvailableShopifyCheckoutSelection;

  checkoutId?: boolean | null | undefined;

  product?: AvailableShopifyProductSelection;

  productId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyFulfillmentOrder items. */
export type ShopifyFulfillmentOrderConnection = {

  __typename: 'ShopifyFulfillmentOrderConnection';

  /** A list of edges. */
  edges: ShopifyFulfillmentOrderEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyFulfillmentOrderConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyFulfillmentOrderEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyFulfillmentOrder connection. */
export type ShopifyFulfillmentOrderEdge = {

  __typename: 'ShopifyFulfillmentOrderEdge';

  /** The item at the end of the edge */
  node: ShopifyFulfillmentOrder;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyFulfillmentOrderEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyFulfillmentOrderSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyBalanceTransaction items. */
export type ShopifyBalanceTransactionConnection = {

  __typename: 'ShopifyBalanceTransactionConnection';

  /** A list of edges. */
  edges: ShopifyBalanceTransactionEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyBalanceTransactionConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyBalanceTransactionEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyBalanceTransaction connection. */
export type ShopifyBalanceTransactionEdge = {

  __typename: 'ShopifyBalanceTransactionEdge';

  /** The item at the end of the edge */
  node: ShopifyBalanceTransaction;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyBalanceTransactionEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyBalanceTransactionSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyBalanceTransaction = {

  __typename: 'ShopifyBalanceTransaction';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  adjustmentOrderTransactions: (Scalars['JSON'] | null);

  amount: (Scalars['String'] | null);

  currency: (Scalars['String'] | null);

  fee: (Scalars['String'] | null);

  net: (Scalars['String'] | null);

  payoutStatus: (Scalars['String'] | null);

  processedAt: (Scalars['DateTime'] | null);

  sourceId: (Scalars['Float'] | null);

  sourceType: (Scalars['String'] | null);

  test: (Scalars['Boolean'] | null);

  type: (Scalars['String'] | null);

  sourceOrder: (ShopifyOrder | null);

  sourceOrderId: (Scalars['GadgetID'] | null);

  payout: (ShopifyPayout | null);

  payoutId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyBalanceTransactionSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  adjustmentOrderTransactions?: boolean | null | undefined;

  amount?: boolean | null | undefined;

  currency?: boolean | null | undefined;

  fee?: boolean | null | undefined;

  net?: boolean | null | undefined;

  payoutStatus?: boolean | null | undefined;

  processedAt?: boolean | null | undefined;

  sourceId?: boolean | null | undefined;

  sourceType?: boolean | null | undefined;

  test?: boolean | null | undefined;

  type?: boolean | null | undefined;

  sourceOrder?: AvailableShopifyOrderSelection;

  sourceOrderId?: boolean | null | undefined;

  payout?: AvailableShopifyPayoutSelection;

  payoutId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyPayout = {

  __typename: 'ShopifyPayout';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  balanceTransactions: ShopifyBalanceTransactionConnection;

  amount: (Scalars['String'] | null);

  currency: (Scalars['String'] | null);

  date: (Scalars['Date'] | null);

  status: (Scalars['String'] | null);

  summary: (Scalars['JSON'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyPayoutSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  balanceTransactions?: AvailableShopifyBalanceTransactionConnectionSelection;

  amount?: boolean | null | undefined;

  currency?: boolean | null | undefined;

  date?: boolean | null | undefined;

  status?: boolean | null | undefined;

  summary?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyFulfillment items. */
export type ShopifyFulfillmentConnection = {

  __typename: 'ShopifyFulfillmentConnection';

  /** A list of edges. */
  edges: ShopifyFulfillmentEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyFulfillmentConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyFulfillmentEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyFulfillment connection. */
export type ShopifyFulfillmentEdge = {

  __typename: 'ShopifyFulfillmentEdge';

  /** The item at the end of the edge */
  node: ShopifyFulfillment;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyFulfillmentEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyFulfillmentSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyFulfillment = {

  __typename: 'ShopifyFulfillment';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  name: (Scalars['String'] | null);

  notifyCustomer: (Scalars['Boolean'] | null);

  originAddress: (Scalars['JSON'] | null);

  receipt: (Scalars['JSON'] | null);

  service: (Scalars['String'] | null);

  shipmentStatus: (Scalars['String'] | null);

  status: (Scalars['String'] | null);

  trackingCompany: (Scalars['String'] | null);

  trackingNumbers: (Scalars['JSON'] | null);

  trackingUrls: (Scalars['JSON'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  variantInventoryManagement: (Scalars['String'] | null);

  fulfillmentLineItems: ShopifyFulfillmentLineItemConnection;

  order: (ShopifyOrder | null);

  orderId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyFulfillmentSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  name?: boolean | null | undefined;

  notifyCustomer?: boolean | null | undefined;

  originAddress?: boolean | null | undefined;

  receipt?: boolean | null | undefined;

  service?: boolean | null | undefined;

  shipmentStatus?: boolean | null | undefined;

  status?: boolean | null | undefined;

  trackingCompany?: boolean | null | undefined;

  trackingNumbers?: boolean | null | undefined;

  trackingUrls?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  variantInventoryManagement?: boolean | null | undefined;

  fulfillmentLineItems?: AvailableShopifyFulfillmentLineItemConnectionSelection;

  order?: AvailableShopifyOrderSelection;

  orderId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyFulfillmentLineItem items. */
export type ShopifyFulfillmentLineItemConnection = {

  __typename: 'ShopifyFulfillmentLineItemConnection';

  /** A list of edges. */
  edges: ShopifyFulfillmentLineItemEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyFulfillmentLineItemConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyFulfillmentLineItemEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyFulfillmentLineItem connection. */
export type ShopifyFulfillmentLineItemEdge = {

  __typename: 'ShopifyFulfillmentLineItemEdge';

  /** The item at the end of the edge */
  node: ShopifyFulfillmentLineItem;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyFulfillmentLineItemEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyFulfillmentLineItemSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyFulfillmentLineItem = {

  __typename: 'ShopifyFulfillmentLineItem';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  originalTotalSet: (Scalars['JSON'] | null);

  quantity: (Scalars['Float'] | null);

  discountedTotalSet: (Scalars['JSON'] | null);

  fulfillment: (ShopifyFulfillment | null);

  fulfillmentId: (Scalars['GadgetID'] | null);

  orderLineItem: (ShopifyOrderLineItem | null);

  orderLineItemId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyFulfillmentLineItemSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  originalTotalSet?: boolean | null | undefined;

  quantity?: boolean | null | undefined;

  discountedTotalSet?: boolean | null | undefined;

  fulfillment?: AvailableShopifyFulfillmentSelection;

  fulfillmentId?: boolean | null | undefined;

  orderLineItem?: AvailableShopifyOrderLineItemSelection;

  orderLineItemId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyDispute items. */
export type ShopifyDisputeConnection = {

  __typename: 'ShopifyDisputeConnection';

  /** A list of edges. */
  edges: ShopifyDisputeEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyDisputeConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyDisputeEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyDispute connection. */
export type ShopifyDisputeEdge = {

  __typename: 'ShopifyDisputeEdge';

  /** The item at the end of the edge */
  node: ShopifyDispute;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyDisputeEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyDisputeSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyDispute = {

  __typename: 'ShopifyDispute';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  amount: (Scalars['String'] | null);

  currency: (Scalars['String'] | null);

  evidenceDueBy: (Scalars['DateTime'] | null);

  evidenceSentOn: (Scalars['DateTime'] | null);

  finalizedOn: (Scalars['DateTime'] | null);

  networkReasonCode: (Scalars['String'] | null);

  reason: (Scalars['String'] | null);

  status: (Scalars['String'] | null);

  type: (Scalars['String'] | null);

  disputeEvidence: (ShopifyDisputeEvidence | null);

  order: (ShopifyOrder | null);

  orderId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyDisputeSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  amount?: boolean | null | undefined;

  currency?: boolean | null | undefined;

  evidenceDueBy?: boolean | null | undefined;

  evidenceSentOn?: boolean | null | undefined;

  finalizedOn?: boolean | null | undefined;

  networkReasonCode?: boolean | null | undefined;

  reason?: boolean | null | undefined;

  status?: boolean | null | undefined;

  type?: boolean | null | undefined;

  disputeEvidence?: AvailableShopifyDisputeEvidenceSelection;

  order?: AvailableShopifyOrderSelection;

  orderId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyDisputeEvidence = {

  __typename: 'ShopifyDisputeEvidence';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  customerEmailAddress: (Scalars['String'] | null);

  customerFirstName: (Scalars['String'] | null);

  customerLastName: (Scalars['String'] | null);

  productDescription: (Scalars['String'] | null);

  submittedByMerchantOn: (Scalars['DateTime'] | null);

  uncategorizedText: (Scalars['String'] | null);

  dispute: (ShopifyDispute | null);

  disputeId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyDisputeEvidenceSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  customerEmailAddress?: boolean | null | undefined;

  customerFirstName?: boolean | null | undefined;

  customerLastName?: boolean | null | undefined;

  productDescription?: boolean | null | undefined;

  submittedByMerchantOn?: boolean | null | undefined;

  uncategorizedText?: boolean | null | undefined;

  dispute?: AvailableShopifyDisputeSelection;

  disputeId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyCompany = {

  __typename: 'ShopifyCompany';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  contactCount: (Scalars['Int'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  customerSince: (Scalars['DateTime'] | null);

  externalId: (Scalars['String'] | null);

  orders: ShopifyOrderConnection;

  lifetimeDuration: (Scalars['String'] | null);

  locationCount: (Scalars['Float'] | null);

  name: (Scalars['String'] | null);

  note: (Scalars['String'] | null);

  orderCount: (Scalars['Int'] | null);

  totalSpent: (Scalars['JSON'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyCompanySelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  contactCount?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  customerSince?: boolean | null | undefined;

  externalId?: boolean | null | undefined;

  orders?: AvailableShopifyOrderConnectionSelection;

  lifetimeDuration?: boolean | null | undefined;

  locationCount?: boolean | null | undefined;

  name?: boolean | null | undefined;

  note?: boolean | null | undefined;

  orderCount?: boolean | null | undefined;

  totalSpent?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyOrder items. */
export type ShopifyOrderConnection = {

  __typename: 'ShopifyOrderConnection';

  /** A list of edges. */
  edges: ShopifyOrderEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyOrderConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyOrderEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyOrder connection. */
export type ShopifyOrderEdge = {

  __typename: 'ShopifyOrderEdge';

  /** The item at the end of the edge */
  node: ShopifyOrder;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyOrderEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyOrderSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyTenderTransaction items. */
export type ShopifyTenderTransactionConnection = {

  __typename: 'ShopifyTenderTransactionConnection';

  /** A list of edges. */
  edges: ShopifyTenderTransactionEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyTenderTransactionConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyTenderTransactionEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyTenderTransaction connection. */
export type ShopifyTenderTransactionEdge = {

  __typename: 'ShopifyTenderTransactionEdge';

  /** The item at the end of the edge */
  node: ShopifyTenderTransaction;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyTenderTransactionEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyTenderTransactionSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyTenderTransaction = {

  __typename: 'ShopifyTenderTransaction';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  amount: (Scalars['String'] | null);

  currency: (Scalars['String'] | null);

  paymentDetails: (Scalars['JSON'] | null);

  paymentMethod: (Scalars['String'] | null);

  processedAt: (Scalars['DateTime'] | null);

  remoteReference: (Scalars['String'] | null);

  test: (Scalars['Boolean'] | null);

  order: (ShopifyOrder | null);

  orderId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyTenderTransactionSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  amount?: boolean | null | undefined;

  currency?: boolean | null | undefined;

  paymentDetails?: boolean | null | undefined;

  paymentMethod?: boolean | null | undefined;

  processedAt?: boolean | null | undefined;

  remoteReference?: boolean | null | undefined;

  test?: boolean | null | undefined;

  order?: AvailableShopifyOrderSelection;

  orderId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyShippingLine items. */
export type ShopifyShippingLineConnection = {

  __typename: 'ShopifyShippingLineConnection';

  /** A list of edges. */
  edges: ShopifyShippingLineEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyShippingLineConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyShippingLineEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyShippingLine connection. */
export type ShopifyShippingLineEdge = {

  __typename: 'ShopifyShippingLineEdge';

  /** The item at the end of the edge */
  node: ShopifyShippingLine;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyShippingLineEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyShippingLineSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyShippingLine = {

  __typename: 'ShopifyShippingLine';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  carrierIdentifier: (Scalars['String'] | null);

  code: (Scalars['String'] | null);

  discountAllocations: (Scalars['JSON'] | null);

  discountedPrice: (Scalars['String'] | null);

  discountedPriceSet: (Scalars['JSON'] | null);

  phone: (Scalars['String'] | null);

  price: (Scalars['String'] | null);

  priceSet: (Scalars['JSON'] | null);

  source: (Scalars['String'] | null);

  taxLines: (Scalars['JSON'] | null);

  title: (Scalars['String'] | null);

  requestedFulfillmentService: (ShopifyFulfillmentService | null);

  requestedFulfillmentServiceId: (Scalars['GadgetID'] | null);

  order: (ShopifyOrder | null);

  orderId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyShippingLineSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  carrierIdentifier?: boolean | null | undefined;

  code?: boolean | null | undefined;

  discountAllocations?: boolean | null | undefined;

  discountedPrice?: boolean | null | undefined;

  discountedPriceSet?: boolean | null | undefined;

  phone?: boolean | null | undefined;

  price?: boolean | null | undefined;

  priceSet?: boolean | null | undefined;

  source?: boolean | null | undefined;

  taxLines?: boolean | null | undefined;

  title?: boolean | null | undefined;

  requestedFulfillmentService?: AvailableShopifyFulfillmentServiceSelection;

  requestedFulfillmentServiceId?: boolean | null | undefined;

  order?: AvailableShopifyOrderSelection;

  orderId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyFulfillmentService = {

  __typename: 'ShopifyFulfillmentService';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  callbackUrl: (Scalars['String'] | null);

  format: (Scalars['String'] | null);

  fulfillmentOrdersOptIn: (Scalars['Boolean'] | null);

  handle: (Scalars['String'] | null);

  inventoryManagement: (Scalars['Boolean'] | null);

  name: (Scalars['String'] | null);

  permitsSkuSharing: (Scalars['Boolean'] | null);

  requiresShippingMethod: (Scalars['Boolean'] | null);

  trackingSupport: (Scalars['Boolean'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyFulfillmentServiceSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  callbackUrl?: boolean | null | undefined;

  format?: boolean | null | undefined;

  fulfillmentOrdersOptIn?: boolean | null | undefined;

  handle?: boolean | null | undefined;

  inventoryManagement?: boolean | null | undefined;

  name?: boolean | null | undefined;

  permitsSkuSharing?: boolean | null | undefined;

  requiresShippingMethod?: boolean | null | undefined;

  trackingSupport?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyCollect items. */
export type ShopifyCollectConnection = {

  __typename: 'ShopifyCollectConnection';

  /** A list of edges. */
  edges: ShopifyCollectEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyCollectConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyCollectEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyCollect connection. */
export type ShopifyCollectEdge = {

  __typename: 'ShopifyCollectEdge';

  /** The item at the end of the edge */
  node: ShopifyCollect;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyCollectEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyCollectSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyCollect = {

  __typename: 'ShopifyCollect';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  position: (Scalars['Float'] | null);

  sortValue: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  customCollection: (ShopifyCollection | null);

  customCollectionId: (Scalars['GadgetID'] | null);

  product: (ShopifyProduct | null);

  productId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyCollectSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  position?: boolean | null | undefined;

  sortValue?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  customCollection?: AvailableShopifyCollectionSelection;

  customCollectionId?: boolean | null | undefined;

  product?: AvailableShopifyProductSelection;

  productId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifySmartCollect items. */
export type ShopifySmartCollectConnection = {

  __typename: 'ShopifySmartCollectConnection';

  /** A list of edges. */
  edges: ShopifySmartCollectEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifySmartCollectConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifySmartCollectEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifySmartCollect connection. */
export type ShopifySmartCollectEdge = {

  __typename: 'ShopifySmartCollectEdge';

  /** The item at the end of the edge */
  node: ShopifySmartCollect;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifySmartCollectEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifySmartCollectSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifySmartCollect = {

  __typename: 'ShopifySmartCollect';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  product: (ShopifyProduct | null);

  productId: (Scalars['GadgetID'] | null);

  collection: (ShopifyCollection | null);

  collectionId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifySmartCollectSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  product?: AvailableShopifyProductSelection;

  productId?: boolean | null | undefined;

  collection?: AvailableShopifyCollectionSelection;

  collectionId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyMarketRegion items. */
export type ShopifyMarketRegionConnection = {

  __typename: 'ShopifyMarketRegionConnection';

  /** A list of edges. */
  edges: ShopifyMarketRegionEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyMarketRegionConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyMarketRegionEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyMarketRegion connection. */
export type ShopifyMarketRegionEdge = {

  __typename: 'ShopifyMarketRegionEdge';

  /** The item at the end of the edge */
  node: ShopifyMarketRegion;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyMarketRegionEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyMarketRegionSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyMarketRegion = {

  __typename: 'ShopifyMarketRegion';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  code: (Scalars['String'] | null);

  name: (Scalars['String'] | null);

  market: (ShopifyMarket | null);

  marketId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyMarketRegionSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  code?: boolean | null | undefined;

  name?: boolean | null | undefined;

  market?: AvailableShopifyMarketSelection;

  marketId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyMarket = {

  __typename: 'ShopifyMarket';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  currencySettings: (Scalars['JSON'] | null);

  enabled: (Scalars['Boolean'] | null);

  name: (Scalars['String'] | null);

  primary: (Scalars['Boolean'] | null);

  regions: ShopifyMarketRegionConnection;

  marketWebPresence: (ShopifyMarketWebPresence | null);

  marketWebPresenceId: (Scalars['GadgetID'] | null);

  marketWebPresences: ShopifyMarketWebPresenceConnection;

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyMarketSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  currencySettings?: boolean | null | undefined;

  enabled?: boolean | null | undefined;

  name?: boolean | null | undefined;

  primary?: boolean | null | undefined;

  regions?: AvailableShopifyMarketRegionConnectionSelection;

  marketWebPresence?: AvailableShopifyMarketWebPresenceSelection;

  marketWebPresenceId?: boolean | null | undefined;

  marketWebPresences?: AvailableShopifyMarketWebPresenceConnectionSelection;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyMarketWebPresence = {

  __typename: 'ShopifyMarketWebPresence';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  primaryWebPresenceForMarket: (ShopifyMarket | null);

  alternateLocales: (Scalars['JSON'] | null);

  rootUrls: (Scalars['JSON'] | null);

  subfolderSuffix: (Scalars['String'] | null);

  domain: (ShopifyDomain | null);

  domainId: (Scalars['GadgetID'] | null);

  market: (ShopifyMarket | null);

  marketId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyMarketWebPresenceSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  primaryWebPresenceForMarket?: AvailableShopifyMarketSelection;

  alternateLocales?: boolean | null | undefined;

  rootUrls?: boolean | null | undefined;

  subfolderSuffix?: boolean | null | undefined;

  domain?: AvailableShopifyDomainSelection;

  domainId?: boolean | null | undefined;

  market?: AvailableShopifyMarketSelection;

  marketId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyDomain = {

  __typename: 'ShopifyDomain';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  marketWebPresences: ShopifyMarketWebPresenceConnection;

  host: (Scalars['String'] | null);

  localization: (Scalars['JSON'] | null);

  sslEnabled: (Scalars['Boolean'] | null);

  url: (Scalars['String'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyDomainSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  marketWebPresences?: AvailableShopifyMarketWebPresenceConnectionSelection;

  host?: boolean | null | undefined;

  localization?: boolean | null | undefined;

  sslEnabled?: boolean | null | undefined;

  url?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyMarketWebPresence items. */
export type ShopifyMarketWebPresenceConnection = {

  __typename: 'ShopifyMarketWebPresenceConnection';

  /** A list of edges. */
  edges: ShopifyMarketWebPresenceEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyMarketWebPresenceConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyMarketWebPresenceEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyMarketWebPresence connection. */
export type ShopifyMarketWebPresenceEdge = {

  __typename: 'ShopifyMarketWebPresenceEdge';

  /** The item at the end of the edge */
  node: ShopifyMarketWebPresence;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyMarketWebPresenceEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyMarketWebPresenceSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyMarket items. */
export type ShopifyMarketConnection = {

  __typename: 'ShopifyMarketConnection';

  /** A list of edges. */
  edges: ShopifyMarketEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyMarketConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyMarketEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyMarket connection. */
export type ShopifyMarketEdge = {

  __typename: 'ShopifyMarketEdge';

  /** The item at the end of the edge */
  node: ShopifyMarket;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyMarketEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyMarketSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyGdprRequest items. */
export type ShopifyGdprRequestConnection = {

  __typename: 'ShopifyGdprRequestConnection';

  /** A list of edges. */
  edges: ShopifyGdprRequestEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyGdprRequestConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyGdprRequestEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyGdprRequest connection. */
export type ShopifyGdprRequestEdge = {

  __typename: 'ShopifyGdprRequestEdge';

  /** The item at the end of the edge */
  node: ShopifyGdprRequest;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyGdprRequestEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyGdprRequestSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyGdprRequest = {

  __typename: 'ShopifyGdprRequest';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  payload: (Scalars['JSON'] | null);

  topic: ShopifyGdprRequestTopicEnum;

  shop: ShopifyShop;

  shopId: Scalars['GadgetID'];

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyGdprRequestSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  payload?: boolean | null | undefined;

  topic?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyCompany items. */
export type ShopifyCompanyConnection = {

  __typename: 'ShopifyCompanyConnection';

  /** A list of edges. */
  edges: ShopifyCompanyEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyCompanyConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyCompanyEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyCompany connection. */
export type ShopifyCompanyEdge = {

  __typename: 'ShopifyCompanyEdge';

  /** The item at the end of the edge */
  node: ShopifyCompany;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyCompanyEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyCompanySelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifySync items. */
export type ShopifySyncConnection = {

  __typename: 'ShopifySyncConnection';

  /** A list of edges. */
  edges: ShopifySyncEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifySyncConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifySyncEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifySync connection. */
export type ShopifySyncEdge = {

  __typename: 'ShopifySyncEdge';

  /** The item at the end of the edge */
  node: ShopifySync;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifySyncEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifySyncSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifySync = {

  __typename: 'ShopifySync';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars['RecordState'];

  domain: Scalars['String'];

  errorDetails: (Scalars['String'] | null);

  errorMessage: (Scalars['String'] | null);

  /** DateTime that this sync was run from */
  syncSince: (Scalars['DateTime'] | null);

  force: (Scalars['Boolean'] | null);

  models: (Scalars['JSON'] | null);

  shop: ShopifyShop;

  shopId: Scalars['GadgetID'];

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifySyncSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state?: boolean | null | undefined;

  domain?: boolean | null | undefined;

  errorDetails?: boolean | null | undefined;

  errorMessage?: boolean | null | undefined;

  /** DateTime that this sync was run from */
  syncSince?: boolean | null | undefined;

  force?: boolean | null | undefined;

  models?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyPriceRule items. */
export type ShopifyPriceRuleConnection = {

  __typename: 'ShopifyPriceRuleConnection';

  /** A list of edges. */
  edges: ShopifyPriceRuleEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyPriceRuleConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyPriceRuleEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyPriceRule connection. */
export type ShopifyPriceRuleEdge = {

  __typename: 'ShopifyPriceRuleEdge';

  /** The item at the end of the edge */
  node: ShopifyPriceRule;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyPriceRuleEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyPriceRuleSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyPriceRule = {

  __typename: 'ShopifyPriceRule';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  allocationLimit: (Scalars['Float'] | null);

  allocationMethod: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  customerSegmentPrerequisiteIds: (Scalars['JSON'] | null);

  customerSelection: (Scalars['String'] | null);

  endsAt: (Scalars['DateTime'] | null);

  entitledCollectionIds: (Scalars['JSON'] | null);

  entitledCountryIds: (Scalars['JSON'] | null);

  entitledProductIds: (Scalars['JSON'] | null);

  entitledVariantIds: (Scalars['JSON'] | null);

  oncePerCustomer: (Scalars['Boolean'] | null);

  prerequisiteCollectionIds: (Scalars['JSON'] | null);

  prerequisiteCustomerIds: (Scalars['JSON'] | null);

  prerequisiteProductIds: (Scalars['JSON'] | null);

  prerequisiteQuantityRange: (Scalars['JSON'] | null);

  prerequisiteShippingPriceRange: (Scalars['JSON'] | null);

  prerequisiteSubtotalRange: (Scalars['JSON'] | null);

  prerequisiteToEntitlementPurchase: (Scalars['JSON'] | null);

  prerequisiteToEntitlementQuantityRatio: (Scalars['JSON'] | null);

  prerequisiteVariants: (Scalars['JSON'] | null);

  startsAt: (Scalars['DateTime'] | null);

  targetSelection: (Scalars['String'] | null);

  targetType: (Scalars['String'] | null);

  title: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  usageLimit: (Scalars['Float'] | null);

  value: (Scalars['Float'] | null);

  valueType: (Scalars['String'] | null);

  discountCodes: ShopifyDiscountCodeConnection;

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyPriceRuleSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  allocationLimit?: boolean | null | undefined;

  allocationMethod?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  customerSegmentPrerequisiteIds?: boolean | null | undefined;

  customerSelection?: boolean | null | undefined;

  endsAt?: boolean | null | undefined;

  entitledCollectionIds?: boolean | null | undefined;

  entitledCountryIds?: boolean | null | undefined;

  entitledProductIds?: boolean | null | undefined;

  entitledVariantIds?: boolean | null | undefined;

  oncePerCustomer?: boolean | null | undefined;

  prerequisiteCollectionIds?: boolean | null | undefined;

  prerequisiteCustomerIds?: boolean | null | undefined;

  prerequisiteProductIds?: boolean | null | undefined;

  prerequisiteQuantityRange?: boolean | null | undefined;

  prerequisiteShippingPriceRange?: boolean | null | undefined;

  prerequisiteSubtotalRange?: boolean | null | undefined;

  prerequisiteToEntitlementPurchase?: boolean | null | undefined;

  prerequisiteToEntitlementQuantityRatio?: boolean | null | undefined;

  prerequisiteVariants?: boolean | null | undefined;

  startsAt?: boolean | null | undefined;

  targetSelection?: boolean | null | undefined;

  targetType?: boolean | null | undefined;

  title?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  usageLimit?: boolean | null | undefined;

  value?: boolean | null | undefined;

  valueType?: boolean | null | undefined;

  discountCodes?: AvailableShopifyDiscountCodeConnectionSelection;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyDiscountCode items. */
export type ShopifyDiscountCodeConnection = {

  __typename: 'ShopifyDiscountCodeConnection';

  /** A list of edges. */
  edges: ShopifyDiscountCodeEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyDiscountCodeConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyDiscountCodeEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyDiscountCode connection. */
export type ShopifyDiscountCodeEdge = {

  __typename: 'ShopifyDiscountCodeEdge';

  /** The item at the end of the edge */
  node: ShopifyDiscountCode;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyDiscountCodeEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyDiscountCodeSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyDiscountCode = {

  __typename: 'ShopifyDiscountCode';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  code: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  usageCount: (Scalars['Float'] | null);

  priceRule: (ShopifyPriceRule | null);

  priceRuleId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyDiscountCodeSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  code?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  usageCount?: boolean | null | undefined;

  priceRule?: AvailableShopifyPriceRuleSelection;

  priceRuleId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyDiscount items. */
export type ShopifyDiscountConnection = {

  __typename: 'ShopifyDiscountConnection';

  /** A list of edges. */
  edges: ShopifyDiscountEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyDiscountConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyDiscountEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyDiscount connection. */
export type ShopifyDiscountEdge = {

  __typename: 'ShopifyDiscountEdge';

  /** The item at the end of the edge */
  node: ShopifyDiscount;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyDiscountEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyDiscountSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyDiscount = {

  __typename: 'ShopifyDiscount';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  appDiscountType: (Scalars['JSON'] | null);

  appliesOnOneTimePurchase: (Scalars['Boolean'] | null);

  appliesOnSubscription: (Scalars['Boolean'] | null);

  appliesOncePerCustomer: (Scalars['Boolean'] | null);

  asyncUsageCount: (Scalars['Float'] | null);

  codeCount: (Scalars['Int'] | null);

  combinesWith: (Scalars['JSON'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  destinationSelection: (Scalars['JSON'] | null);

  discountClass: ShopifyDiscountDiscountClassEnum;

  discountId: (Scalars['String'] | null);

  endsAt: (Scalars['DateTime'] | null);

  errorHistory: (Scalars['JSON'] | null);

  hasTimelineComment: (Scalars['Boolean'] | null);

  maximumShippingPrice: (Scalars['JSON'] | null);

  minimumRequirement: (Scalars['JSON'] | null);

  recurringCycleLimit: (Scalars['Int'] | null);

  shareableUrls: (Scalars['JSON'] | null);

  shortSummary: (Scalars['String'] | null);

  startsAt: (Scalars['DateTime'] | null);

  status: ShopifyDiscountStatusEnum;

  summary: (Scalars['String'] | null);

  title: (Scalars['String'] | null);

  totalSales: (Scalars['JSON'] | null);

  usageLimit: (Scalars['Int'] | null);

  usesPerOrderLimit: (Scalars['Int'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyDiscountSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  appDiscountType?: boolean | null | undefined;

  appliesOnOneTimePurchase?: boolean | null | undefined;

  appliesOnSubscription?: boolean | null | undefined;

  appliesOncePerCustomer?: boolean | null | undefined;

  asyncUsageCount?: boolean | null | undefined;

  codeCount?: boolean | null | undefined;

  combinesWith?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  destinationSelection?: boolean | null | undefined;

  discountClass?: boolean | null | undefined;

  discountId?: boolean | null | undefined;

  endsAt?: boolean | null | undefined;

  errorHistory?: boolean | null | undefined;

  hasTimelineComment?: boolean | null | undefined;

  maximumShippingPrice?: boolean | null | undefined;

  minimumRequirement?: boolean | null | undefined;

  recurringCycleLimit?: boolean | null | undefined;

  shareableUrls?: boolean | null | undefined;

  shortSummary?: boolean | null | undefined;

  startsAt?: boolean | null | undefined;

  status?: boolean | null | undefined;

  summary?: boolean | null | undefined;

  title?: boolean | null | undefined;

  totalSales?: boolean | null | undefined;

  usageLimit?: boolean | null | undefined;

  usesPerOrderLimit?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyFulfillmentService items. */
export type ShopifyFulfillmentServiceConnection = {

  __typename: 'ShopifyFulfillmentServiceConnection';

  /** A list of edges. */
  edges: ShopifyFulfillmentServiceEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyFulfillmentServiceConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyFulfillmentServiceEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyFulfillmentService connection. */
export type ShopifyFulfillmentServiceEdge = {

  __typename: 'ShopifyFulfillmentServiceEdge';

  /** The item at the end of the edge */
  node: ShopifyFulfillmentService;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyFulfillmentServiceEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyFulfillmentServiceSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyScriptTag items. */
export type ShopifyScriptTagConnection = {

  __typename: 'ShopifyScriptTagConnection';

  /** A list of edges. */
  edges: ShopifyScriptTagEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyScriptTagConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyScriptTagEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyScriptTag connection. */
export type ShopifyScriptTagEdge = {

  __typename: 'ShopifyScriptTagEdge';

  /** The item at the end of the edge */
  node: ShopifyScriptTag;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyScriptTagEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyScriptTagSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyScriptTag = {

  __typename: 'ShopifyScriptTag';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  cache: (Scalars['Boolean'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  displayScope: (Scalars['String'] | null);

  event: (Scalars['String'] | null);

  source: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyScriptTagSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  cache?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  displayScope?: boolean | null | undefined;

  event?: boolean | null | undefined;

  source?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyPayout items. */
export type ShopifyPayoutConnection = {

  __typename: 'ShopifyPayoutConnection';

  /** A list of edges. */
  edges: ShopifyPayoutEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyPayoutConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyPayoutEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyPayout connection. */
export type ShopifyPayoutEdge = {

  __typename: 'ShopifyPayoutEdge';

  /** The item at the end of the edge */
  node: ShopifyPayout;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyPayoutEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyPayoutSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyBulkOperation items. */
export type ShopifyBulkOperationConnection = {

  __typename: 'ShopifyBulkOperationConnection';

  /** A list of edges. */
  edges: ShopifyBulkOperationEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyBulkOperationConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyBulkOperationEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyBulkOperation connection. */
export type ShopifyBulkOperationEdge = {

  __typename: 'ShopifyBulkOperationEdge';

  /** The item at the end of the edge */
  node: ShopifyBulkOperation;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyBulkOperationEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyBulkOperationSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyBulkOperation = {

  __typename: 'ShopifyBulkOperation';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars['RecordState'];

  completedAt: (Scalars['DateTime'] | null);

  errorCode: ShopifyBulkOperationErrorCodeEnum;

  fileSize: (Scalars['String'] | null);

  objectCount: (Scalars['String'] | null);

  partialDataUrl: (Scalars['String'] | null);

  query: (Scalars['String'] | null);

  rootObjectCount: (Scalars['String'] | null);

  status: ShopifyBulkOperationStatusEnum;

  type: ShopifyBulkOperationTypeEnum;

  url: (Scalars['String'] | null);

  shop: ShopifyShop;

  shopId: Scalars['GadgetID'];

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyBulkOperationSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state?: boolean | null | undefined;

  completedAt?: boolean | null | undefined;

  errorCode?: boolean | null | undefined;

  fileSize?: boolean | null | undefined;

  objectCount?: boolean | null | undefined;

  partialDataUrl?: boolean | null | undefined;

  query?: boolean | null | undefined;

  rootObjectCount?: boolean | null | undefined;

  status?: boolean | null | undefined;

  type?: boolean | null | undefined;

  url?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyDomain items. */
export type ShopifyDomainConnection = {

  __typename: 'ShopifyDomainConnection';

  /** A list of edges. */
  edges: ShopifyDomainEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyDomainConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyDomainEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyDomain connection. */
export type ShopifyDomainEdge = {

  __typename: 'ShopifyDomainEdge';

  /** The item at the end of the edge */
  node: ShopifyDomain;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyDomainEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyDomainSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyDisputeEvidence items. */
export type ShopifyDisputeEvidenceConnection = {

  __typename: 'ShopifyDisputeEvidenceConnection';

  /** A list of edges. */
  edges: ShopifyDisputeEvidenceEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyDisputeEvidenceConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyDisputeEvidenceEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyDisputeEvidence connection. */
export type ShopifyDisputeEvidenceEdge = {

  __typename: 'ShopifyDisputeEvidenceEdge';

  /** The item at the end of the edge */
  node: ShopifyDisputeEvidence;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyDisputeEvidenceEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyDisputeEvidenceSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyApp items. */
export type ShopifyAppConnection = {

  __typename: 'ShopifyAppConnection';

  /** A list of edges. */
  edges: ShopifyAppEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyAppConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyAppEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyApp connection. */
export type ShopifyAppEdge = {

  __typename: 'ShopifyAppEdge';

  /** The item at the end of the edge */
  node: ShopifyApp;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyAppEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyAppSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyShop items. */
export type ShopifyShopConnection = {

  __typename: 'ShopifyShopConnection';

  /** A list of edges. */
  edges: ShopifyShopEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyShopConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyShopEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyShop connection. */
export type ShopifyShopEdge = {

  __typename: 'ShopifyShopEdge';

  /** The item at the end of the edge */
  node: ShopifyShop;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyShopEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyShopSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type Session = {

  __typename: 'Session';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: (Scalars['GadgetID'] | null);

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  shopifySID: (Scalars['String'] | null);

  user: (User | null);

  userId: (Scalars['GadgetID'] | null);

  roles: Role[];

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableSessionSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  shopifySID?: boolean | null | undefined;

  user?: AvailableUserSelection;

  userId?: boolean | null | undefined;

  roles?: AvailableRoleSelection;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of Session items. */
export type SessionConnection = {

  __typename: 'SessionConnection';

  /** A list of edges. */
  edges: SessionEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableSessionConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableSessionEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a Session connection. */
export type SessionEdge = {

  __typename: 'SessionEdge';

  /** The item at the end of the edge */
  node: Session;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableSessionEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableSessionSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type InternalQueries = {

  __typename: 'InternalQueries';

  user: (InternalUserRecord | null);

  listUser: InternalUserRecordConnection;

  shopifyApp: (InternalShopifyAppRecord | null);

  listShopifyApp: InternalShopifyAppRecordConnection;

  shopifyAppInstallation: (InternalShopifyAppInstallationRecord | null);

  listShopifyAppInstallation: InternalShopifyAppInstallationRecordConnection;

  shopifyBalanceTransaction: (InternalShopifyBalanceTransactionRecord | null);

  listShopifyBalanceTransaction: InternalShopifyBalanceTransactionRecordConnection;

  shopifyBulkOperation: (InternalShopifyBulkOperationRecord | null);

  listShopifyBulkOperation: InternalShopifyBulkOperationRecordConnection;

  shopifyCheckout: (InternalShopifyCheckoutRecord | null);

  listShopifyCheckout: InternalShopifyCheckoutRecordConnection;

  shopifyCheckoutLineItem: (InternalShopifyCheckoutLineItemRecord | null);

  listShopifyCheckoutLineItem: InternalShopifyCheckoutLineItemRecordConnection;

  shopifyCollect: (InternalShopifyCollectRecord | null);

  listShopifyCollect: InternalShopifyCollectRecordConnection;

  shopifyCollection: (InternalShopifyCollectionRecord | null);

  listShopifyCollection: InternalShopifyCollectionRecordConnection;

  shopifyCompany: (InternalShopifyCompanyRecord | null);

  listShopifyCompany: InternalShopifyCompanyRecordConnection;

  shopifyDiscount: (InternalShopifyDiscountRecord | null);

  listShopifyDiscount: InternalShopifyDiscountRecordConnection;

  shopifyDiscountCode: (InternalShopifyDiscountCodeRecord | null);

  listShopifyDiscountCode: InternalShopifyDiscountCodeRecordConnection;

  shopifyDispute: (InternalShopifyDisputeRecord | null);

  listShopifyDispute: InternalShopifyDisputeRecordConnection;

  shopifyDisputeEvidence: (InternalShopifyDisputeEvidenceRecord | null);

  listShopifyDisputeEvidence: InternalShopifyDisputeEvidenceRecordConnection;

  shopifyDomain: (InternalShopifyDomainRecord | null);

  listShopifyDomain: InternalShopifyDomainRecordConnection;

  shopifyFulfillment: (InternalShopifyFulfillmentRecord | null);

  listShopifyFulfillment: InternalShopifyFulfillmentRecordConnection;

  shopifyFulfillmentLineItem: (InternalShopifyFulfillmentLineItemRecord | null);

  listShopifyFulfillmentLineItem: InternalShopifyFulfillmentLineItemRecordConnection;

  shopifyFulfillmentOrder: (InternalShopifyFulfillmentOrderRecord | null);

  listShopifyFulfillmentOrder: InternalShopifyFulfillmentOrderRecordConnection;

  shopifyFulfillmentOrderLineItem: (InternalShopifyFulfillmentOrderLineItemRecord | null);

  listShopifyFulfillmentOrderLineItem: InternalShopifyFulfillmentOrderLineItemRecordConnection;

  shopifyFulfillmentService: (InternalShopifyFulfillmentServiceRecord | null);

  listShopifyFulfillmentService: InternalShopifyFulfillmentServiceRecordConnection;

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);

  listShopifyGdprRequest: InternalShopifyGdprRequestRecordConnection;

  shopifyMarket: (InternalShopifyMarketRecord | null);

  listShopifyMarket: InternalShopifyMarketRecordConnection;

  shopifyMarketRegion: (InternalShopifyMarketRegionRecord | null);

  listShopifyMarketRegion: InternalShopifyMarketRegionRecordConnection;

  shopifyMarketWebPresence: (InternalShopifyMarketWebPresenceRecord | null);

  listShopifyMarketWebPresence: InternalShopifyMarketWebPresenceRecordConnection;

  shopifyOrder: (InternalShopifyOrderRecord | null);

  listShopifyOrder: InternalShopifyOrderRecordConnection;

  shopifyOrderAdjustment: (InternalShopifyOrderAdjustmentRecord | null);

  listShopifyOrderAdjustment: InternalShopifyOrderAdjustmentRecordConnection;

  shopifyOrderLineItem: (InternalShopifyOrderLineItemRecord | null);

  listShopifyOrderLineItem: InternalShopifyOrderLineItemRecordConnection;

  shopifyPayout: (InternalShopifyPayoutRecord | null);

  listShopifyPayout: InternalShopifyPayoutRecordConnection;

  shopifyPriceRule: (InternalShopifyPriceRuleRecord | null);

  listShopifyPriceRule: InternalShopifyPriceRuleRecordConnection;

  shopifyProduct: (InternalShopifyProductRecord | null);

  listShopifyProduct: InternalShopifyProductRecordConnection;

  shopifyRefund: (InternalShopifyRefundRecord | null);

  listShopifyRefund: InternalShopifyRefundRecordConnection;

  shopifyRefundDuty: (InternalShopifyRefundDutyRecord | null);

  listShopifyRefundDuty: InternalShopifyRefundDutyRecordConnection;

  shopifyRefundLineItem: (InternalShopifyRefundLineItemRecord | null);

  listShopifyRefundLineItem: InternalShopifyRefundLineItemRecordConnection;

  shopifyScriptTag: (InternalShopifyScriptTagRecord | null);

  listShopifyScriptTag: InternalShopifyScriptTagRecordConnection;

  shopifyShop: (InternalShopifyShopRecord | null);

  listShopifyShop: InternalShopifyShopRecordConnection;

  shopifySync: (InternalShopifySyncRecord | null);

  listShopifySync: InternalShopifySyncRecordConnection;

  session: (InternalSessionRecord | null);

  listSession: InternalSessionRecordConnection;

  shopifyShippingLine: (InternalShopifyShippingLineRecord | null);

  listShopifyShippingLine: InternalShopifyShippingLineRecordConnection;

  shopifyTenderTransaction: (InternalShopifyTenderTransactionRecord | null);

  listShopifyTenderTransaction: InternalShopifyTenderTransactionRecordConnection;

  shopifySmartCollect: (InternalShopifySmartCollectRecord | null);

  listShopifySmartCollect: InternalShopifySmartCollectRecordConnection;

  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails: (Scalars['JSONObject'] | null);
};



export type AvailableInternalQueriesSelection = {

  __typename?: boolean | null | undefined;

  user?: boolean | null | undefined;

  listUser?: AvailableInternalUserRecordConnectionSelection;

  shopifyApp?: boolean | null | undefined;

  listShopifyApp?: AvailableInternalShopifyAppRecordConnectionSelection;

  shopifyAppInstallation?: boolean | null | undefined;

  listShopifyAppInstallation?: AvailableInternalShopifyAppInstallationRecordConnectionSelection;

  shopifyBalanceTransaction?: boolean | null | undefined;

  listShopifyBalanceTransaction?: AvailableInternalShopifyBalanceTransactionRecordConnectionSelection;

  shopifyBulkOperation?: boolean | null | undefined;

  listShopifyBulkOperation?: AvailableInternalShopifyBulkOperationRecordConnectionSelection;

  shopifyCheckout?: boolean | null | undefined;

  listShopifyCheckout?: AvailableInternalShopifyCheckoutRecordConnectionSelection;

  shopifyCheckoutLineItem?: boolean | null | undefined;

  listShopifyCheckoutLineItem?: AvailableInternalShopifyCheckoutLineItemRecordConnectionSelection;

  shopifyCollect?: boolean | null | undefined;

  listShopifyCollect?: AvailableInternalShopifyCollectRecordConnectionSelection;

  shopifyCollection?: boolean | null | undefined;

  listShopifyCollection?: AvailableInternalShopifyCollectionRecordConnectionSelection;

  shopifyCompany?: boolean | null | undefined;

  listShopifyCompany?: AvailableInternalShopifyCompanyRecordConnectionSelection;

  shopifyDiscount?: boolean | null | undefined;

  listShopifyDiscount?: AvailableInternalShopifyDiscountRecordConnectionSelection;

  shopifyDiscountCode?: boolean | null | undefined;

  listShopifyDiscountCode?: AvailableInternalShopifyDiscountCodeRecordConnectionSelection;

  shopifyDispute?: boolean | null | undefined;

  listShopifyDispute?: AvailableInternalShopifyDisputeRecordConnectionSelection;

  shopifyDisputeEvidence?: boolean | null | undefined;

  listShopifyDisputeEvidence?: AvailableInternalShopifyDisputeEvidenceRecordConnectionSelection;

  shopifyDomain?: boolean | null | undefined;

  listShopifyDomain?: AvailableInternalShopifyDomainRecordConnectionSelection;

  shopifyFulfillment?: boolean | null | undefined;

  listShopifyFulfillment?: AvailableInternalShopifyFulfillmentRecordConnectionSelection;

  shopifyFulfillmentLineItem?: boolean | null | undefined;

  listShopifyFulfillmentLineItem?: AvailableInternalShopifyFulfillmentLineItemRecordConnectionSelection;

  shopifyFulfillmentOrder?: boolean | null | undefined;

  listShopifyFulfillmentOrder?: AvailableInternalShopifyFulfillmentOrderRecordConnectionSelection;

  shopifyFulfillmentOrderLineItem?: boolean | null | undefined;

  listShopifyFulfillmentOrderLineItem?: AvailableInternalShopifyFulfillmentOrderLineItemRecordConnectionSelection;

  shopifyFulfillmentService?: boolean | null | undefined;

  listShopifyFulfillmentService?: AvailableInternalShopifyFulfillmentServiceRecordConnectionSelection;

  shopifyGdprRequest?: boolean | null | undefined;

  listShopifyGdprRequest?: AvailableInternalShopifyGdprRequestRecordConnectionSelection;

  shopifyMarket?: boolean | null | undefined;

  listShopifyMarket?: AvailableInternalShopifyMarketRecordConnectionSelection;

  shopifyMarketRegion?: boolean | null | undefined;

  listShopifyMarketRegion?: AvailableInternalShopifyMarketRegionRecordConnectionSelection;

  shopifyMarketWebPresence?: boolean | null | undefined;

  listShopifyMarketWebPresence?: AvailableInternalShopifyMarketWebPresenceRecordConnectionSelection;

  shopifyOrder?: boolean | null | undefined;

  listShopifyOrder?: AvailableInternalShopifyOrderRecordConnectionSelection;

  shopifyOrderAdjustment?: boolean | null | undefined;

  listShopifyOrderAdjustment?: AvailableInternalShopifyOrderAdjustmentRecordConnectionSelection;

  shopifyOrderLineItem?: boolean | null | undefined;

  listShopifyOrderLineItem?: AvailableInternalShopifyOrderLineItemRecordConnectionSelection;

  shopifyPayout?: boolean | null | undefined;

  listShopifyPayout?: AvailableInternalShopifyPayoutRecordConnectionSelection;

  shopifyPriceRule?: boolean | null | undefined;

  listShopifyPriceRule?: AvailableInternalShopifyPriceRuleRecordConnectionSelection;

  shopifyProduct?: boolean | null | undefined;

  listShopifyProduct?: AvailableInternalShopifyProductRecordConnectionSelection;

  shopifyRefund?: boolean | null | undefined;

  listShopifyRefund?: AvailableInternalShopifyRefundRecordConnectionSelection;

  shopifyRefundDuty?: boolean | null | undefined;

  listShopifyRefundDuty?: AvailableInternalShopifyRefundDutyRecordConnectionSelection;

  shopifyRefundLineItem?: boolean | null | undefined;

  listShopifyRefundLineItem?: AvailableInternalShopifyRefundLineItemRecordConnectionSelection;

  shopifyScriptTag?: boolean | null | undefined;

  listShopifyScriptTag?: AvailableInternalShopifyScriptTagRecordConnectionSelection;

  shopifyShop?: boolean | null | undefined;

  listShopifyShop?: AvailableInternalShopifyShopRecordConnectionSelection;

  shopifySync?: boolean | null | undefined;

  listShopifySync?: AvailableInternalShopifySyncRecordConnectionSelection;

  session?: boolean | null | undefined;

  listSession?: AvailableInternalSessionRecordConnectionSelection;

  shopifyShippingLine?: boolean | null | undefined;

  listShopifyShippingLine?: AvailableInternalShopifyShippingLineRecordConnectionSelection;

  shopifyTenderTransaction?: boolean | null | undefined;

  listShopifyTenderTransaction?: AvailableInternalShopifyTenderTransactionRecordConnectionSelection;

  shopifySmartCollect?: boolean | null | undefined;

  listShopifySmartCollect?: AvailableInternalShopifySmartCollectRecordConnectionSelection;

  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails?: boolean | null | undefined;
};


/** A connection to a list of InternalUserRecord items. */
export type InternalUserRecordConnection = {

  __typename: 'InternalUserRecordConnection';

  /** A list of edges. */
  edges: InternalUserRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalUserRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalUserRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalUserRecord connection. */
export type InternalUserRecordEdge = {

  __typename: 'InternalUserRecordEdge';

  /** The item at the end of the edge */
  node: InternalUserRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalUserRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyAppRecord items. */
export type InternalShopifyAppRecordConnection = {

  __typename: 'InternalShopifyAppRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyAppRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyAppRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyAppRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyAppRecord connection. */
export type InternalShopifyAppRecordEdge = {

  __typename: 'InternalShopifyAppRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyAppRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyAppRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyAppInstallationRecord items. */
export type InternalShopifyAppInstallationRecordConnection = {

  __typename: 'InternalShopifyAppInstallationRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyAppInstallationRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyAppInstallationRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyAppInstallationRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyAppInstallationRecord connection. */
export type InternalShopifyAppInstallationRecordEdge = {

  __typename: 'InternalShopifyAppInstallationRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyAppInstallationRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyAppInstallationRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyBalanceTransactionRecord items. */
export type InternalShopifyBalanceTransactionRecordConnection = {

  __typename: 'InternalShopifyBalanceTransactionRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyBalanceTransactionRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyBalanceTransactionRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyBalanceTransactionRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyBalanceTransactionRecord connection. */
export type InternalShopifyBalanceTransactionRecordEdge = {

  __typename: 'InternalShopifyBalanceTransactionRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyBalanceTransactionRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyBalanceTransactionRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyBulkOperationRecord items. */
export type InternalShopifyBulkOperationRecordConnection = {

  __typename: 'InternalShopifyBulkOperationRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyBulkOperationRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyBulkOperationRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyBulkOperationRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyBulkOperationRecord connection. */
export type InternalShopifyBulkOperationRecordEdge = {

  __typename: 'InternalShopifyBulkOperationRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyBulkOperationRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyBulkOperationRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyCheckoutRecord items. */
export type InternalShopifyCheckoutRecordConnection = {

  __typename: 'InternalShopifyCheckoutRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyCheckoutRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyCheckoutRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyCheckoutRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyCheckoutRecord connection. */
export type InternalShopifyCheckoutRecordEdge = {

  __typename: 'InternalShopifyCheckoutRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyCheckoutRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyCheckoutRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyCheckoutLineItemRecord items. */
export type InternalShopifyCheckoutLineItemRecordConnection = {

  __typename: 'InternalShopifyCheckoutLineItemRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyCheckoutLineItemRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyCheckoutLineItemRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyCheckoutLineItemRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyCheckoutLineItemRecord connection. */
export type InternalShopifyCheckoutLineItemRecordEdge = {

  __typename: 'InternalShopifyCheckoutLineItemRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyCheckoutLineItemRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyCheckoutLineItemRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyCollectRecord items. */
export type InternalShopifyCollectRecordConnection = {

  __typename: 'InternalShopifyCollectRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyCollectRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyCollectRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyCollectRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyCollectRecord connection. */
export type InternalShopifyCollectRecordEdge = {

  __typename: 'InternalShopifyCollectRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyCollectRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyCollectRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyCollectionRecord items. */
export type InternalShopifyCollectionRecordConnection = {

  __typename: 'InternalShopifyCollectionRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyCollectionRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyCollectionRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyCollectionRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyCollectionRecord connection. */
export type InternalShopifyCollectionRecordEdge = {

  __typename: 'InternalShopifyCollectionRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyCollectionRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyCollectionRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyCompanyRecord items. */
export type InternalShopifyCompanyRecordConnection = {

  __typename: 'InternalShopifyCompanyRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyCompanyRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyCompanyRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyCompanyRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyCompanyRecord connection. */
export type InternalShopifyCompanyRecordEdge = {

  __typename: 'InternalShopifyCompanyRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyCompanyRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyCompanyRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyDiscountRecord items. */
export type InternalShopifyDiscountRecordConnection = {

  __typename: 'InternalShopifyDiscountRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyDiscountRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyDiscountRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyDiscountRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyDiscountRecord connection. */
export type InternalShopifyDiscountRecordEdge = {

  __typename: 'InternalShopifyDiscountRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyDiscountRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyDiscountRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyDiscountCodeRecord items. */
export type InternalShopifyDiscountCodeRecordConnection = {

  __typename: 'InternalShopifyDiscountCodeRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyDiscountCodeRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyDiscountCodeRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyDiscountCodeRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyDiscountCodeRecord connection. */
export type InternalShopifyDiscountCodeRecordEdge = {

  __typename: 'InternalShopifyDiscountCodeRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyDiscountCodeRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyDiscountCodeRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyDisputeRecord items. */
export type InternalShopifyDisputeRecordConnection = {

  __typename: 'InternalShopifyDisputeRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyDisputeRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyDisputeRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyDisputeRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyDisputeRecord connection. */
export type InternalShopifyDisputeRecordEdge = {

  __typename: 'InternalShopifyDisputeRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyDisputeRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyDisputeRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyDisputeEvidenceRecord items. */
export type InternalShopifyDisputeEvidenceRecordConnection = {

  __typename: 'InternalShopifyDisputeEvidenceRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyDisputeEvidenceRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyDisputeEvidenceRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyDisputeEvidenceRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyDisputeEvidenceRecord connection. */
export type InternalShopifyDisputeEvidenceRecordEdge = {

  __typename: 'InternalShopifyDisputeEvidenceRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyDisputeEvidenceRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyDisputeEvidenceRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyDomainRecord items. */
export type InternalShopifyDomainRecordConnection = {

  __typename: 'InternalShopifyDomainRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyDomainRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyDomainRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyDomainRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyDomainRecord connection. */
export type InternalShopifyDomainRecordEdge = {

  __typename: 'InternalShopifyDomainRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyDomainRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyDomainRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyFulfillmentRecord items. */
export type InternalShopifyFulfillmentRecordConnection = {

  __typename: 'InternalShopifyFulfillmentRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyFulfillmentRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyFulfillmentRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyFulfillmentRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyFulfillmentRecord connection. */
export type InternalShopifyFulfillmentRecordEdge = {

  __typename: 'InternalShopifyFulfillmentRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyFulfillmentRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyFulfillmentRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyFulfillmentLineItemRecord items. */
export type InternalShopifyFulfillmentLineItemRecordConnection = {

  __typename: 'InternalShopifyFulfillmentLineItemRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyFulfillmentLineItemRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyFulfillmentLineItemRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyFulfillmentLineItemRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyFulfillmentLineItemRecord connection. */
export type InternalShopifyFulfillmentLineItemRecordEdge = {

  __typename: 'InternalShopifyFulfillmentLineItemRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyFulfillmentLineItemRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyFulfillmentLineItemRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyFulfillmentOrderRecord items. */
export type InternalShopifyFulfillmentOrderRecordConnection = {

  __typename: 'InternalShopifyFulfillmentOrderRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyFulfillmentOrderRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyFulfillmentOrderRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyFulfillmentOrderRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyFulfillmentOrderRecord connection. */
export type InternalShopifyFulfillmentOrderRecordEdge = {

  __typename: 'InternalShopifyFulfillmentOrderRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyFulfillmentOrderRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyFulfillmentOrderRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyFulfillmentOrderLineItemRecord items. */
export type InternalShopifyFulfillmentOrderLineItemRecordConnection = {

  __typename: 'InternalShopifyFulfillmentOrderLineItemRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyFulfillmentOrderLineItemRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyFulfillmentOrderLineItemRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyFulfillmentOrderLineItemRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyFulfillmentOrderLineItemRecord connection. */
export type InternalShopifyFulfillmentOrderLineItemRecordEdge = {

  __typename: 'InternalShopifyFulfillmentOrderLineItemRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyFulfillmentOrderLineItemRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyFulfillmentOrderLineItemRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyFulfillmentServiceRecord items. */
export type InternalShopifyFulfillmentServiceRecordConnection = {

  __typename: 'InternalShopifyFulfillmentServiceRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyFulfillmentServiceRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyFulfillmentServiceRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyFulfillmentServiceRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyFulfillmentServiceRecord connection. */
export type InternalShopifyFulfillmentServiceRecordEdge = {

  __typename: 'InternalShopifyFulfillmentServiceRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyFulfillmentServiceRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyFulfillmentServiceRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyGdprRequestRecord items. */
export type InternalShopifyGdprRequestRecordConnection = {

  __typename: 'InternalShopifyGdprRequestRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyGdprRequestRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyGdprRequestRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyGdprRequestRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyGdprRequestRecord connection. */
export type InternalShopifyGdprRequestRecordEdge = {

  __typename: 'InternalShopifyGdprRequestRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyGdprRequestRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyGdprRequestRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyMarketRecord items. */
export type InternalShopifyMarketRecordConnection = {

  __typename: 'InternalShopifyMarketRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyMarketRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyMarketRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyMarketRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyMarketRecord connection. */
export type InternalShopifyMarketRecordEdge = {

  __typename: 'InternalShopifyMarketRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyMarketRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyMarketRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyMarketRegionRecord items. */
export type InternalShopifyMarketRegionRecordConnection = {

  __typename: 'InternalShopifyMarketRegionRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyMarketRegionRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyMarketRegionRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyMarketRegionRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyMarketRegionRecord connection. */
export type InternalShopifyMarketRegionRecordEdge = {

  __typename: 'InternalShopifyMarketRegionRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyMarketRegionRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyMarketRegionRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyMarketWebPresenceRecord items. */
export type InternalShopifyMarketWebPresenceRecordConnection = {

  __typename: 'InternalShopifyMarketWebPresenceRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyMarketWebPresenceRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyMarketWebPresenceRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyMarketWebPresenceRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyMarketWebPresenceRecord connection. */
export type InternalShopifyMarketWebPresenceRecordEdge = {

  __typename: 'InternalShopifyMarketWebPresenceRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyMarketWebPresenceRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyMarketWebPresenceRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyOrderRecord items. */
export type InternalShopifyOrderRecordConnection = {

  __typename: 'InternalShopifyOrderRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyOrderRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyOrderRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyOrderRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyOrderRecord connection. */
export type InternalShopifyOrderRecordEdge = {

  __typename: 'InternalShopifyOrderRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyOrderRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyOrderRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyOrderAdjustmentRecord items. */
export type InternalShopifyOrderAdjustmentRecordConnection = {

  __typename: 'InternalShopifyOrderAdjustmentRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyOrderAdjustmentRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyOrderAdjustmentRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyOrderAdjustmentRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyOrderAdjustmentRecord connection. */
export type InternalShopifyOrderAdjustmentRecordEdge = {

  __typename: 'InternalShopifyOrderAdjustmentRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyOrderAdjustmentRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyOrderAdjustmentRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyOrderLineItemRecord items. */
export type InternalShopifyOrderLineItemRecordConnection = {

  __typename: 'InternalShopifyOrderLineItemRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyOrderLineItemRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyOrderLineItemRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyOrderLineItemRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyOrderLineItemRecord connection. */
export type InternalShopifyOrderLineItemRecordEdge = {

  __typename: 'InternalShopifyOrderLineItemRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyOrderLineItemRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyOrderLineItemRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyPayoutRecord items. */
export type InternalShopifyPayoutRecordConnection = {

  __typename: 'InternalShopifyPayoutRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyPayoutRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyPayoutRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyPayoutRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyPayoutRecord connection. */
export type InternalShopifyPayoutRecordEdge = {

  __typename: 'InternalShopifyPayoutRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyPayoutRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyPayoutRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyPriceRuleRecord items. */
export type InternalShopifyPriceRuleRecordConnection = {

  __typename: 'InternalShopifyPriceRuleRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyPriceRuleRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyPriceRuleRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyPriceRuleRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyPriceRuleRecord connection. */
export type InternalShopifyPriceRuleRecordEdge = {

  __typename: 'InternalShopifyPriceRuleRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyPriceRuleRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyPriceRuleRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyProductRecord items. */
export type InternalShopifyProductRecordConnection = {

  __typename: 'InternalShopifyProductRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyProductRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyProductRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyProductRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyProductRecord connection. */
export type InternalShopifyProductRecordEdge = {

  __typename: 'InternalShopifyProductRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyProductRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyProductRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyRefundRecord items. */
export type InternalShopifyRefundRecordConnection = {

  __typename: 'InternalShopifyRefundRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyRefundRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyRefundRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyRefundRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyRefundRecord connection. */
export type InternalShopifyRefundRecordEdge = {

  __typename: 'InternalShopifyRefundRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyRefundRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyRefundRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyRefundDutyRecord items. */
export type InternalShopifyRefundDutyRecordConnection = {

  __typename: 'InternalShopifyRefundDutyRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyRefundDutyRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyRefundDutyRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyRefundDutyRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyRefundDutyRecord connection. */
export type InternalShopifyRefundDutyRecordEdge = {

  __typename: 'InternalShopifyRefundDutyRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyRefundDutyRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyRefundDutyRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyRefundLineItemRecord items. */
export type InternalShopifyRefundLineItemRecordConnection = {

  __typename: 'InternalShopifyRefundLineItemRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyRefundLineItemRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyRefundLineItemRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyRefundLineItemRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyRefundLineItemRecord connection. */
export type InternalShopifyRefundLineItemRecordEdge = {

  __typename: 'InternalShopifyRefundLineItemRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyRefundLineItemRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyRefundLineItemRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyScriptTagRecord items. */
export type InternalShopifyScriptTagRecordConnection = {

  __typename: 'InternalShopifyScriptTagRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyScriptTagRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyScriptTagRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyScriptTagRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyScriptTagRecord connection. */
export type InternalShopifyScriptTagRecordEdge = {

  __typename: 'InternalShopifyScriptTagRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyScriptTagRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyScriptTagRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyShopRecord items. */
export type InternalShopifyShopRecordConnection = {

  __typename: 'InternalShopifyShopRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyShopRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyShopRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyShopRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyShopRecord connection. */
export type InternalShopifyShopRecordEdge = {

  __typename: 'InternalShopifyShopRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyShopRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyShopRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifySyncRecord items. */
export type InternalShopifySyncRecordConnection = {

  __typename: 'InternalShopifySyncRecordConnection';

  /** A list of edges. */
  edges: InternalShopifySyncRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifySyncRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifySyncRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifySyncRecord connection. */
export type InternalShopifySyncRecordEdge = {

  __typename: 'InternalShopifySyncRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifySyncRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifySyncRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalSessionRecord items. */
export type InternalSessionRecordConnection = {

  __typename: 'InternalSessionRecordConnection';

  /** A list of edges. */
  edges: InternalSessionRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalSessionRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalSessionRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalSessionRecord connection. */
export type InternalSessionRecordEdge = {

  __typename: 'InternalSessionRecordEdge';

  /** The item at the end of the edge */
  node: InternalSessionRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalSessionRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyShippingLineRecord items. */
export type InternalShopifyShippingLineRecordConnection = {

  __typename: 'InternalShopifyShippingLineRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyShippingLineRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyShippingLineRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyShippingLineRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyShippingLineRecord connection. */
export type InternalShopifyShippingLineRecordEdge = {

  __typename: 'InternalShopifyShippingLineRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyShippingLineRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyShippingLineRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyTenderTransactionRecord items. */
export type InternalShopifyTenderTransactionRecordConnection = {

  __typename: 'InternalShopifyTenderTransactionRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyTenderTransactionRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyTenderTransactionRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyTenderTransactionRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyTenderTransactionRecord connection. */
export type InternalShopifyTenderTransactionRecordEdge = {

  __typename: 'InternalShopifyTenderTransactionRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyTenderTransactionRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyTenderTransactionRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifySmartCollectRecord items. */
export type InternalShopifySmartCollectRecordConnection = {

  __typename: 'InternalShopifySmartCollectRecordConnection';

  /** A list of edges. */
  edges: InternalShopifySmartCollectRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifySmartCollectRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifySmartCollectRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifySmartCollectRecord connection. */
export type InternalShopifySmartCollectRecordEdge = {

  __typename: 'InternalShopifySmartCollectRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifySmartCollectRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifySmartCollectRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** Represents one of the roles an identity in the system can be entitled to */
export type GadgetRole = {

  __typename: 'GadgetRole';

  key: Scalars['String'];

  name: Scalars['String'];

  selectable: Scalars['Boolean'];

  order: Scalars['Int'];
};



export type AvailableGadgetRoleSelection = {

  __typename?: boolean | null | undefined;

  key?: boolean | null | undefined;

  name?: boolean | null | undefined;

  selectable?: boolean | null | undefined;

  order?: boolean | null | undefined;
};



export type GadgetGlobalAction = {

  __typename: 'GadgetGlobalAction';

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  requiresInput: Scalars['Boolean'];

  acceptsInput: Scalars['Boolean'];

  triggers: GadgetTrigger[];

  examples: (GadgetGlobalActionGraphQLType | null);
};



export type AvailableGadgetGlobalActionSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  requiresInput?: boolean | null | undefined;

  acceptsInput?: boolean | null | undefined;

  triggers?: AvailableGadgetTriggerSelection;

  examples?: AvailableGadgetGlobalActionGraphQLTypeSelection;
};



export type GadgetGlobalActionGraphQLType = {

  __typename: 'GadgetGlobalActionGraphQLType';

  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation: Scalars['String'];

  exampleGraphQLMutation: Scalars['String'];

  inputGraphQLTypeSDL: (Scalars['String'] | null);

  outputGraphQLTypeSDL: Scalars['String'];

  inputTypeScriptInterface: (Scalars['String'] | null);

  outputTypeScriptInterface: Scalars['String'];

  exampleGraphQLVariables: Scalars['JSON'];

  exampleJSInputs: Scalars['JSON'];

  exampleImperativeInvocation: Scalars['String'];

  exampleReactHook: Scalars['String'];
};



export type AvailableGadgetGlobalActionGraphQLTypeSelection = {

  __typename?: boolean | null | undefined;

  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation?: boolean | null | undefined;

  exampleGraphQLMutation?: boolean | null | undefined;

  inputGraphQLTypeSDL?: boolean | null | undefined;

  outputGraphQLTypeSDL?: boolean | null | undefined;

  inputTypeScriptInterface?: boolean | null | undefined;

  outputTypeScriptInterface?: boolean | null | undefined;

  exampleGraphQLVariables?: boolean | null | undefined;

  exampleJSInputs?: boolean | null | undefined;

  exampleImperativeInvocation?: boolean | null | undefined;

  exampleReactHook?: boolean | null | undefined;
};


/** One upload target to use for the Direct Upload style of sending files to Gadget */
export type DirectUploadToken = {

  __typename: 'DirectUploadToken';

  /** The URL to upload a file to. */
  url: Scalars['String'];

  /** The token to pass to an action to reference the uploaded file. */
  token: Scalars['String'];
};



export type AvailableDirectUploadTokenSelection = {

  __typename?: boolean | null | undefined;

  /** The URL to upload a file to. */
  url?: boolean | null | undefined;

  /** The token to pass to an action to reference the uploaded file. */
  token?: boolean | null | undefined;
};


/** Information about the Shopify Connection */
export type Shopify = {

  __typename: 'Shopify';

  /** Whether the current session's shop requires a re-authentication with Shopify to acquire updated scopes */
  requiresReauthentication: (Scalars['Boolean'] | null);

  /** A list missing scopes compared to the Connection based on the current session's shop */
  missingScopes: Scalars['String'][];
};



export type AvailableShopifySelection = {

  __typename?: boolean | null | undefined;

  /** Whether the current session's shop requires a re-authentication with Shopify to acquire updated scopes */
  requiresReauthentication?: boolean | null | undefined;

  /** A list missing scopes compared to the Connection based on the current session's shop */
  missingScopes?: boolean | null | undefined;
};



export type Mutation = {

  __typename: 'Mutation';

  signUpUser: (SignUpUserResult | null);

  bulkSignUpUsers: (BulkSignUpUsersResult | null);

  signInUser: (SignInUserResult | null);

  bulkSignInUsers: (BulkSignInUsersResult | null);

  signOutUser: (SignOutUserResult | null);

  bulkSignOutUsers: (BulkSignOutUsersResult | null);

  updateUser: (UpdateUserResult | null);

  bulkUpdateUsers: (BulkUpdateUsersResult | null);

  deleteUser: (DeleteUserResult | null);

  bulkDeleteUsers: (BulkDeleteUsersResult | null);

  sendVerifyEmailUser: (SendVerifyEmailUserResult | null);

  bulkSendVerifyEmailUsers: (BulkSendVerifyEmailUsersResult | null);

  verifyEmailUser: (VerifyEmailUserResult | null);

  bulkVerifyEmailUsers: (BulkVerifyEmailUsersResult | null);

  sendResetPasswordUser: (SendResetPasswordUserResult | null);

  bulkSendResetPasswordUsers: (BulkSendResetPasswordUsersResult | null);

  resetPasswordUser: (ResetPasswordUserResult | null);

  bulkResetPasswordUsers: (BulkResetPasswordUsersResult | null);

  changePasswordUser: (ChangePasswordUserResult | null);

  bulkChangePasswordUsers: (BulkChangePasswordUsersResult | null);

  createShopifyBulkOperation: (CreateShopifyBulkOperationResult | null);

  bulkCreateShopifyBulkOperations: (BulkCreateShopifyBulkOperationsResult | null);

  updateShopifyBulkOperation: (UpdateShopifyBulkOperationResult | null);

  bulkUpdateShopifyBulkOperations: (BulkUpdateShopifyBulkOperationsResult | null);

  completeShopifyBulkOperation: (CompleteShopifyBulkOperationResult | null);

  bulkCompleteShopifyBulkOperations: (BulkCompleteShopifyBulkOperationsResult | null);

  cancelShopifyBulkOperation: (CancelShopifyBulkOperationResult | null);

  bulkCancelShopifyBulkOperations: (BulkCancelShopifyBulkOperationsResult | null);

  failShopifyBulkOperation: (FailShopifyBulkOperationResult | null);

  bulkFailShopifyBulkOperations: (BulkFailShopifyBulkOperationsResult | null);

  expireShopifyBulkOperation: (ExpireShopifyBulkOperationResult | null);

  bulkExpireShopifyBulkOperations: (BulkExpireShopifyBulkOperationsResult | null);

  createShopifyCheckout: (CreateShopifyCheckoutResult | null);

  bulkCreateShopifyCheckouts: (BulkCreateShopifyCheckoutsResult | null);

  updateShopifyCheckout: (UpdateShopifyCheckoutResult | null);

  bulkUpdateShopifyCheckouts: (BulkUpdateShopifyCheckoutsResult | null);

  deleteShopifyCheckout: (DeleteShopifyCheckoutResult | null);

  bulkDeleteShopifyCheckouts: (BulkDeleteShopifyCheckoutsResult | null);

  createShopifyCheckoutLineItem: (CreateShopifyCheckoutLineItemResult | null);

  bulkCreateShopifyCheckoutLineItems: (BulkCreateShopifyCheckoutLineItemsResult | null);

  updateShopifyCheckoutLineItem: (UpdateShopifyCheckoutLineItemResult | null);

  bulkUpdateShopifyCheckoutLineItems: (BulkUpdateShopifyCheckoutLineItemsResult | null);

  deleteShopifyCheckoutLineItem: (DeleteShopifyCheckoutLineItemResult | null);

  bulkDeleteShopifyCheckoutLineItems: (BulkDeleteShopifyCheckoutLineItemsResult | null);

  updateShopifyCollection: (UpdateShopifyCollectionResult | null);

  bulkUpdateShopifyCollections: (BulkUpdateShopifyCollectionsResult | null);

  smartCollectorShopifyCollection: (SmartCollectorShopifyCollectionResult | null);

  bulkSmartCollectorShopifyCollections: (BulkSmartCollectorShopifyCollectionsResult | null);

  createShopifyCompany: (CreateShopifyCompanyResult | null);

  bulkCreateShopifyCompanies: (BulkCreateShopifyCompaniesResult | null);

  updateShopifyCompany: (UpdateShopifyCompanyResult | null);

  bulkUpdateShopifyCompanies: (BulkUpdateShopifyCompaniesResult | null);

  deleteShopifyCompany: (DeleteShopifyCompanyResult | null);

  bulkDeleteShopifyCompanies: (BulkDeleteShopifyCompaniesResult | null);

  createShopifyDiscount: (CreateShopifyDiscountResult | null);

  bulkCreateShopifyDiscounts: (BulkCreateShopifyDiscountsResult | null);

  updateShopifyDiscount: (UpdateShopifyDiscountResult | null);

  bulkUpdateShopifyDiscounts: (BulkUpdateShopifyDiscountsResult | null);

  deleteShopifyDiscount: (DeleteShopifyDiscountResult | null);

  bulkDeleteShopifyDiscounts: (BulkDeleteShopifyDiscountsResult | null);

  createShopifyDiscountCode: (CreateShopifyDiscountCodeResult | null);

  bulkCreateShopifyDiscountCodes: (BulkCreateShopifyDiscountCodesResult | null);

  updateShopifyDiscountCode: (UpdateShopifyDiscountCodeResult | null);

  bulkUpdateShopifyDiscountCodes: (BulkUpdateShopifyDiscountCodesResult | null);

  deleteShopifyDiscountCode: (DeleteShopifyDiscountCodeResult | null);

  bulkDeleteShopifyDiscountCodes: (BulkDeleteShopifyDiscountCodesResult | null);

  createShopifyDispute: (CreateShopifyDisputeResult | null);

  bulkCreateShopifyDisputes: (BulkCreateShopifyDisputesResult | null);

  updateShopifyDispute: (UpdateShopifyDisputeResult | null);

  bulkUpdateShopifyDisputes: (BulkUpdateShopifyDisputesResult | null);

  deleteShopifyDispute: (DeleteShopifyDisputeResult | null);

  bulkDeleteShopifyDisputes: (BulkDeleteShopifyDisputesResult | null);

  createShopifyDisputeEvidence: (CreateShopifyDisputeEvidenceResult | null);

  bulkCreateShopifyDisputeEvidences: (BulkCreateShopifyDisputeEvidencesResult | null);

  updateShopifyDisputeEvidence: (UpdateShopifyDisputeEvidenceResult | null);

  bulkUpdateShopifyDisputeEvidences: (BulkUpdateShopifyDisputeEvidencesResult | null);

  deleteShopifyDisputeEvidence: (DeleteShopifyDisputeEvidenceResult | null);

  bulkDeleteShopifyDisputeEvidences: (BulkDeleteShopifyDisputeEvidencesResult | null);

  createShopifyDomain: (CreateShopifyDomainResult | null);

  bulkCreateShopifyDomains: (BulkCreateShopifyDomainsResult | null);

  createShopifyFulfillment: (CreateShopifyFulfillmentResult | null);

  bulkCreateShopifyFulfillments: (BulkCreateShopifyFulfillmentsResult | null);

  updateShopifyFulfillment: (UpdateShopifyFulfillmentResult | null);

  bulkUpdateShopifyFulfillments: (BulkUpdateShopifyFulfillmentsResult | null);

  deleteShopifyFulfillment: (DeleteShopifyFulfillmentResult | null);

  bulkDeleteShopifyFulfillments: (BulkDeleteShopifyFulfillmentsResult | null);

  createShopifyFulfillmentLineItem: (CreateShopifyFulfillmentLineItemResult | null);

  bulkCreateShopifyFulfillmentLineItems: (BulkCreateShopifyFulfillmentLineItemsResult | null);

  updateShopifyFulfillmentLineItem: (UpdateShopifyFulfillmentLineItemResult | null);

  bulkUpdateShopifyFulfillmentLineItems: (BulkUpdateShopifyFulfillmentLineItemsResult | null);

  deleteShopifyFulfillmentLineItem: (DeleteShopifyFulfillmentLineItemResult | null);

  bulkDeleteShopifyFulfillmentLineItems: (BulkDeleteShopifyFulfillmentLineItemsResult | null);

  createShopifyFulfillmentOrder: (CreateShopifyFulfillmentOrderResult | null);

  bulkCreateShopifyFulfillmentOrders: (BulkCreateShopifyFulfillmentOrdersResult | null);

  updateShopifyFulfillmentOrder: (UpdateShopifyFulfillmentOrderResult | null);

  bulkUpdateShopifyFulfillmentOrders: (BulkUpdateShopifyFulfillmentOrdersResult | null);

  deleteShopifyFulfillmentOrder: (DeleteShopifyFulfillmentOrderResult | null);

  bulkDeleteShopifyFulfillmentOrders: (BulkDeleteShopifyFulfillmentOrdersResult | null);

  createShopifyFulfillmentOrderLineItem: (CreateShopifyFulfillmentOrderLineItemResult | null);

  bulkCreateShopifyFulfillmentOrderLineItems: (BulkCreateShopifyFulfillmentOrderLineItemsResult | null);

  updateShopifyFulfillmentOrderLineItem: (UpdateShopifyFulfillmentOrderLineItemResult | null);

  bulkUpdateShopifyFulfillmentOrderLineItems: (BulkUpdateShopifyFulfillmentOrderLineItemsResult | null);

  deleteShopifyFulfillmentOrderLineItem: (DeleteShopifyFulfillmentOrderLineItemResult | null);

  bulkDeleteShopifyFulfillmentOrderLineItems: (BulkDeleteShopifyFulfillmentOrderLineItemsResult | null);

  createShopifyFulfillmentService: (CreateShopifyFulfillmentServiceResult | null);

  bulkCreateShopifyFulfillmentServices: (BulkCreateShopifyFulfillmentServicesResult | null);

  updateShopifyFulfillmentService: (UpdateShopifyFulfillmentServiceResult | null);

  bulkUpdateShopifyFulfillmentServices: (BulkUpdateShopifyFulfillmentServicesResult | null);

  deleteShopifyFulfillmentService: (DeleteShopifyFulfillmentServiceResult | null);

  bulkDeleteShopifyFulfillmentServices: (BulkDeleteShopifyFulfillmentServicesResult | null);

  createShopifyMarket: (CreateShopifyMarketResult | null);

  bulkCreateShopifyMarkets: (BulkCreateShopifyMarketsResult | null);

  updateShopifyMarket: (UpdateShopifyMarketResult | null);

  bulkUpdateShopifyMarkets: (BulkUpdateShopifyMarketsResult | null);

  deleteShopifyMarket: (DeleteShopifyMarketResult | null);

  bulkDeleteShopifyMarkets: (BulkDeleteShopifyMarketsResult | null);

  createShopifyMarketRegion: (CreateShopifyMarketRegionResult | null);

  bulkCreateShopifyMarketRegions: (BulkCreateShopifyMarketRegionsResult | null);

  updateShopifyMarketRegion: (UpdateShopifyMarketRegionResult | null);

  bulkUpdateShopifyMarketRegions: (BulkUpdateShopifyMarketRegionsResult | null);

  deleteShopifyMarketRegion: (DeleteShopifyMarketRegionResult | null);

  bulkDeleteShopifyMarketRegions: (BulkDeleteShopifyMarketRegionsResult | null);

  createShopifyMarketWebPresence: (CreateShopifyMarketWebPresenceResult | null);

  bulkCreateShopifyMarketWebPresences: (BulkCreateShopifyMarketWebPresencesResult | null);

  updateShopifyMarketWebPresence: (UpdateShopifyMarketWebPresenceResult | null);

  bulkUpdateShopifyMarketWebPresences: (BulkUpdateShopifyMarketWebPresencesResult | null);

  deleteShopifyMarketWebPresence: (DeleteShopifyMarketWebPresenceResult | null);

  bulkDeleteShopifyMarketWebPresences: (BulkDeleteShopifyMarketWebPresencesResult | null);

  updateShopifyProduct: (UpdateShopifyProductResult | null);

  bulkUpdateShopifyProducts: (BulkUpdateShopifyProductsResult | null);

  createShopifyRefund: (CreateShopifyRefundResult | null);

  bulkCreateShopifyRefunds: (BulkCreateShopifyRefundsResult | null);

  createShopifyRefundDuty: (CreateShopifyRefundDutyResult | null);

  bulkCreateShopifyRefundDuties: (BulkCreateShopifyRefundDutiesResult | null);

  updateShopifyRefundDuty: (UpdateShopifyRefundDutyResult | null);

  bulkUpdateShopifyRefundDuties: (BulkUpdateShopifyRefundDutiesResult | null);

  deleteShopifyRefundDuty: (DeleteShopifyRefundDutyResult | null);

  bulkDeleteShopifyRefundDuties: (BulkDeleteShopifyRefundDutiesResult | null);

  createShopifyRefundLineItem: (CreateShopifyRefundLineItemResult | null);

  bulkCreateShopifyRefundLineItems: (BulkCreateShopifyRefundLineItemsResult | null);

  updateShopifyShop: (UpdateShopifyShopResult | null);

  bulkUpdateShopifyShops: (BulkUpdateShopifyShopsResult | null);

  runShopifySync: (RunShopifySyncResult | null);

  bulkRunShopifySyncs: (BulkRunShopifySyncsResult | null);

  completeShopifySync: (CompleteShopifySyncResult | null);

  bulkCompleteShopifySyncs: (BulkCompleteShopifySyncsResult | null);

  errorShopifySync: (ErrorShopifySyncResult | null);

  bulkErrorShopifySyncs: (BulkErrorShopifySyncsResult | null);

  abortShopifySync: (AbortShopifySyncResult | null);

  bulkAbortShopifySyncs: (BulkAbortShopifySyncsResult | null);

  createShopifySmartCollect: (CreateShopifySmartCollectResult | null);

  bulkCreateShopifySmartCollects: (BulkCreateShopifySmartCollectsResult | null);

  updateShopifySmartCollect: (UpdateShopifySmartCollectResult | null);

  bulkUpdateShopifySmartCollects: (BulkUpdateShopifySmartCollectsResult | null);

  deleteShopifySmartCollect: (DeleteShopifySmartCollectResult | null);

  bulkDeleteShopifySmartCollects: (BulkDeleteShopifySmartCollectsResult | null);

  scheduledShopifySync: (ScheduledShopifySyncResult | null);

  smartCollect: (SmartCollectResult | null);

  setTotalZero: (SetTotalZeroResult | null);

  test2: (Test2Result | null);

  test3: (Test3Result | null);

  fetchEmails: (FetchEmailsResult | null);

  smartCollecter: (SmartCollecterResult | null);

  fetchUsers: (FetchUsersResult | null);

  test: (TestResult | null);

  internal: (InternalMutations | null);
};



export type AvailableMutationSelection = {

  __typename?: boolean | null | undefined;

  signUpUser?: AvailableSignUpUserResultSelection;

  bulkSignUpUsers?: AvailableBulkSignUpUsersResultSelection;

  signInUser?: AvailableSignInUserResultSelection;

  bulkSignInUsers?: AvailableBulkSignInUsersResultSelection;

  signOutUser?: AvailableSignOutUserResultSelection;

  bulkSignOutUsers?: AvailableBulkSignOutUsersResultSelection;

  updateUser?: AvailableUpdateUserResultSelection;

  bulkUpdateUsers?: AvailableBulkUpdateUsersResultSelection;

  deleteUser?: AvailableDeleteUserResultSelection;

  bulkDeleteUsers?: AvailableBulkDeleteUsersResultSelection;

  sendVerifyEmailUser?: AvailableSendVerifyEmailUserResultSelection;

  bulkSendVerifyEmailUsers?: AvailableBulkSendVerifyEmailUsersResultSelection;

  verifyEmailUser?: AvailableVerifyEmailUserResultSelection;

  bulkVerifyEmailUsers?: AvailableBulkVerifyEmailUsersResultSelection;

  sendResetPasswordUser?: AvailableSendResetPasswordUserResultSelection;

  bulkSendResetPasswordUsers?: AvailableBulkSendResetPasswordUsersResultSelection;

  resetPasswordUser?: AvailableResetPasswordUserResultSelection;

  bulkResetPasswordUsers?: AvailableBulkResetPasswordUsersResultSelection;

  changePasswordUser?: AvailableChangePasswordUserResultSelection;

  bulkChangePasswordUsers?: AvailableBulkChangePasswordUsersResultSelection;

  createShopifyBulkOperation?: AvailableCreateShopifyBulkOperationResultSelection;

  bulkCreateShopifyBulkOperations?: AvailableBulkCreateShopifyBulkOperationsResultSelection;

  updateShopifyBulkOperation?: AvailableUpdateShopifyBulkOperationResultSelection;

  bulkUpdateShopifyBulkOperations?: AvailableBulkUpdateShopifyBulkOperationsResultSelection;

  completeShopifyBulkOperation?: AvailableCompleteShopifyBulkOperationResultSelection;

  bulkCompleteShopifyBulkOperations?: AvailableBulkCompleteShopifyBulkOperationsResultSelection;

  cancelShopifyBulkOperation?: AvailableCancelShopifyBulkOperationResultSelection;

  bulkCancelShopifyBulkOperations?: AvailableBulkCancelShopifyBulkOperationsResultSelection;

  failShopifyBulkOperation?: AvailableFailShopifyBulkOperationResultSelection;

  bulkFailShopifyBulkOperations?: AvailableBulkFailShopifyBulkOperationsResultSelection;

  expireShopifyBulkOperation?: AvailableExpireShopifyBulkOperationResultSelection;

  bulkExpireShopifyBulkOperations?: AvailableBulkExpireShopifyBulkOperationsResultSelection;

  createShopifyCheckout?: AvailableCreateShopifyCheckoutResultSelection;

  bulkCreateShopifyCheckouts?: AvailableBulkCreateShopifyCheckoutsResultSelection;

  updateShopifyCheckout?: AvailableUpdateShopifyCheckoutResultSelection;

  bulkUpdateShopifyCheckouts?: AvailableBulkUpdateShopifyCheckoutsResultSelection;

  deleteShopifyCheckout?: AvailableDeleteShopifyCheckoutResultSelection;

  bulkDeleteShopifyCheckouts?: AvailableBulkDeleteShopifyCheckoutsResultSelection;

  createShopifyCheckoutLineItem?: AvailableCreateShopifyCheckoutLineItemResultSelection;

  bulkCreateShopifyCheckoutLineItems?: AvailableBulkCreateShopifyCheckoutLineItemsResultSelection;

  updateShopifyCheckoutLineItem?: AvailableUpdateShopifyCheckoutLineItemResultSelection;

  bulkUpdateShopifyCheckoutLineItems?: AvailableBulkUpdateShopifyCheckoutLineItemsResultSelection;

  deleteShopifyCheckoutLineItem?: AvailableDeleteShopifyCheckoutLineItemResultSelection;

  bulkDeleteShopifyCheckoutLineItems?: AvailableBulkDeleteShopifyCheckoutLineItemsResultSelection;

  updateShopifyCollection?: AvailableUpdateShopifyCollectionResultSelection;

  bulkUpdateShopifyCollections?: AvailableBulkUpdateShopifyCollectionsResultSelection;

  smartCollectorShopifyCollection?: AvailableSmartCollectorShopifyCollectionResultSelection;

  bulkSmartCollectorShopifyCollections?: AvailableBulkSmartCollectorShopifyCollectionsResultSelection;

  createShopifyCompany?: AvailableCreateShopifyCompanyResultSelection;

  bulkCreateShopifyCompanies?: AvailableBulkCreateShopifyCompaniesResultSelection;

  updateShopifyCompany?: AvailableUpdateShopifyCompanyResultSelection;

  bulkUpdateShopifyCompanies?: AvailableBulkUpdateShopifyCompaniesResultSelection;

  deleteShopifyCompany?: AvailableDeleteShopifyCompanyResultSelection;

  bulkDeleteShopifyCompanies?: AvailableBulkDeleteShopifyCompaniesResultSelection;

  createShopifyDiscount?: AvailableCreateShopifyDiscountResultSelection;

  bulkCreateShopifyDiscounts?: AvailableBulkCreateShopifyDiscountsResultSelection;

  updateShopifyDiscount?: AvailableUpdateShopifyDiscountResultSelection;

  bulkUpdateShopifyDiscounts?: AvailableBulkUpdateShopifyDiscountsResultSelection;

  deleteShopifyDiscount?: AvailableDeleteShopifyDiscountResultSelection;

  bulkDeleteShopifyDiscounts?: AvailableBulkDeleteShopifyDiscountsResultSelection;

  createShopifyDiscountCode?: AvailableCreateShopifyDiscountCodeResultSelection;

  bulkCreateShopifyDiscountCodes?: AvailableBulkCreateShopifyDiscountCodesResultSelection;

  updateShopifyDiscountCode?: AvailableUpdateShopifyDiscountCodeResultSelection;

  bulkUpdateShopifyDiscountCodes?: AvailableBulkUpdateShopifyDiscountCodesResultSelection;

  deleteShopifyDiscountCode?: AvailableDeleteShopifyDiscountCodeResultSelection;

  bulkDeleteShopifyDiscountCodes?: AvailableBulkDeleteShopifyDiscountCodesResultSelection;

  createShopifyDispute?: AvailableCreateShopifyDisputeResultSelection;

  bulkCreateShopifyDisputes?: AvailableBulkCreateShopifyDisputesResultSelection;

  updateShopifyDispute?: AvailableUpdateShopifyDisputeResultSelection;

  bulkUpdateShopifyDisputes?: AvailableBulkUpdateShopifyDisputesResultSelection;

  deleteShopifyDispute?: AvailableDeleteShopifyDisputeResultSelection;

  bulkDeleteShopifyDisputes?: AvailableBulkDeleteShopifyDisputesResultSelection;

  createShopifyDisputeEvidence?: AvailableCreateShopifyDisputeEvidenceResultSelection;

  bulkCreateShopifyDisputeEvidences?: AvailableBulkCreateShopifyDisputeEvidencesResultSelection;

  updateShopifyDisputeEvidence?: AvailableUpdateShopifyDisputeEvidenceResultSelection;

  bulkUpdateShopifyDisputeEvidences?: AvailableBulkUpdateShopifyDisputeEvidencesResultSelection;

  deleteShopifyDisputeEvidence?: AvailableDeleteShopifyDisputeEvidenceResultSelection;

  bulkDeleteShopifyDisputeEvidences?: AvailableBulkDeleteShopifyDisputeEvidencesResultSelection;

  createShopifyDomain?: AvailableCreateShopifyDomainResultSelection;

  bulkCreateShopifyDomains?: AvailableBulkCreateShopifyDomainsResultSelection;

  createShopifyFulfillment?: AvailableCreateShopifyFulfillmentResultSelection;

  bulkCreateShopifyFulfillments?: AvailableBulkCreateShopifyFulfillmentsResultSelection;

  updateShopifyFulfillment?: AvailableUpdateShopifyFulfillmentResultSelection;

  bulkUpdateShopifyFulfillments?: AvailableBulkUpdateShopifyFulfillmentsResultSelection;

  deleteShopifyFulfillment?: AvailableDeleteShopifyFulfillmentResultSelection;

  bulkDeleteShopifyFulfillments?: AvailableBulkDeleteShopifyFulfillmentsResultSelection;

  createShopifyFulfillmentLineItem?: AvailableCreateShopifyFulfillmentLineItemResultSelection;

  bulkCreateShopifyFulfillmentLineItems?: AvailableBulkCreateShopifyFulfillmentLineItemsResultSelection;

  updateShopifyFulfillmentLineItem?: AvailableUpdateShopifyFulfillmentLineItemResultSelection;

  bulkUpdateShopifyFulfillmentLineItems?: AvailableBulkUpdateShopifyFulfillmentLineItemsResultSelection;

  deleteShopifyFulfillmentLineItem?: AvailableDeleteShopifyFulfillmentLineItemResultSelection;

  bulkDeleteShopifyFulfillmentLineItems?: AvailableBulkDeleteShopifyFulfillmentLineItemsResultSelection;

  createShopifyFulfillmentOrder?: AvailableCreateShopifyFulfillmentOrderResultSelection;

  bulkCreateShopifyFulfillmentOrders?: AvailableBulkCreateShopifyFulfillmentOrdersResultSelection;

  updateShopifyFulfillmentOrder?: AvailableUpdateShopifyFulfillmentOrderResultSelection;

  bulkUpdateShopifyFulfillmentOrders?: AvailableBulkUpdateShopifyFulfillmentOrdersResultSelection;

  deleteShopifyFulfillmentOrder?: AvailableDeleteShopifyFulfillmentOrderResultSelection;

  bulkDeleteShopifyFulfillmentOrders?: AvailableBulkDeleteShopifyFulfillmentOrdersResultSelection;

  createShopifyFulfillmentOrderLineItem?: AvailableCreateShopifyFulfillmentOrderLineItemResultSelection;

  bulkCreateShopifyFulfillmentOrderLineItems?: AvailableBulkCreateShopifyFulfillmentOrderLineItemsResultSelection;

  updateShopifyFulfillmentOrderLineItem?: AvailableUpdateShopifyFulfillmentOrderLineItemResultSelection;

  bulkUpdateShopifyFulfillmentOrderLineItems?: AvailableBulkUpdateShopifyFulfillmentOrderLineItemsResultSelection;

  deleteShopifyFulfillmentOrderLineItem?: AvailableDeleteShopifyFulfillmentOrderLineItemResultSelection;

  bulkDeleteShopifyFulfillmentOrderLineItems?: AvailableBulkDeleteShopifyFulfillmentOrderLineItemsResultSelection;

  createShopifyFulfillmentService?: AvailableCreateShopifyFulfillmentServiceResultSelection;

  bulkCreateShopifyFulfillmentServices?: AvailableBulkCreateShopifyFulfillmentServicesResultSelection;

  updateShopifyFulfillmentService?: AvailableUpdateShopifyFulfillmentServiceResultSelection;

  bulkUpdateShopifyFulfillmentServices?: AvailableBulkUpdateShopifyFulfillmentServicesResultSelection;

  deleteShopifyFulfillmentService?: AvailableDeleteShopifyFulfillmentServiceResultSelection;

  bulkDeleteShopifyFulfillmentServices?: AvailableBulkDeleteShopifyFulfillmentServicesResultSelection;

  createShopifyMarket?: AvailableCreateShopifyMarketResultSelection;

  bulkCreateShopifyMarkets?: AvailableBulkCreateShopifyMarketsResultSelection;

  updateShopifyMarket?: AvailableUpdateShopifyMarketResultSelection;

  bulkUpdateShopifyMarkets?: AvailableBulkUpdateShopifyMarketsResultSelection;

  deleteShopifyMarket?: AvailableDeleteShopifyMarketResultSelection;

  bulkDeleteShopifyMarkets?: AvailableBulkDeleteShopifyMarketsResultSelection;

  createShopifyMarketRegion?: AvailableCreateShopifyMarketRegionResultSelection;

  bulkCreateShopifyMarketRegions?: AvailableBulkCreateShopifyMarketRegionsResultSelection;

  updateShopifyMarketRegion?: AvailableUpdateShopifyMarketRegionResultSelection;

  bulkUpdateShopifyMarketRegions?: AvailableBulkUpdateShopifyMarketRegionsResultSelection;

  deleteShopifyMarketRegion?: AvailableDeleteShopifyMarketRegionResultSelection;

  bulkDeleteShopifyMarketRegions?: AvailableBulkDeleteShopifyMarketRegionsResultSelection;

  createShopifyMarketWebPresence?: AvailableCreateShopifyMarketWebPresenceResultSelection;

  bulkCreateShopifyMarketWebPresences?: AvailableBulkCreateShopifyMarketWebPresencesResultSelection;

  updateShopifyMarketWebPresence?: AvailableUpdateShopifyMarketWebPresenceResultSelection;

  bulkUpdateShopifyMarketWebPresences?: AvailableBulkUpdateShopifyMarketWebPresencesResultSelection;

  deleteShopifyMarketWebPresence?: AvailableDeleteShopifyMarketWebPresenceResultSelection;

  bulkDeleteShopifyMarketWebPresences?: AvailableBulkDeleteShopifyMarketWebPresencesResultSelection;

  updateShopifyProduct?: AvailableUpdateShopifyProductResultSelection;

  bulkUpdateShopifyProducts?: AvailableBulkUpdateShopifyProductsResultSelection;

  createShopifyRefund?: AvailableCreateShopifyRefundResultSelection;

  bulkCreateShopifyRefunds?: AvailableBulkCreateShopifyRefundsResultSelection;

  createShopifyRefundDuty?: AvailableCreateShopifyRefundDutyResultSelection;

  bulkCreateShopifyRefundDuties?: AvailableBulkCreateShopifyRefundDutiesResultSelection;

  updateShopifyRefundDuty?: AvailableUpdateShopifyRefundDutyResultSelection;

  bulkUpdateShopifyRefundDuties?: AvailableBulkUpdateShopifyRefundDutiesResultSelection;

  deleteShopifyRefundDuty?: AvailableDeleteShopifyRefundDutyResultSelection;

  bulkDeleteShopifyRefundDuties?: AvailableBulkDeleteShopifyRefundDutiesResultSelection;

  createShopifyRefundLineItem?: AvailableCreateShopifyRefundLineItemResultSelection;

  bulkCreateShopifyRefundLineItems?: AvailableBulkCreateShopifyRefundLineItemsResultSelection;

  updateShopifyShop?: AvailableUpdateShopifyShopResultSelection;

  bulkUpdateShopifyShops?: AvailableBulkUpdateShopifyShopsResultSelection;

  runShopifySync?: AvailableRunShopifySyncResultSelection;

  bulkRunShopifySyncs?: AvailableBulkRunShopifySyncsResultSelection;

  completeShopifySync?: AvailableCompleteShopifySyncResultSelection;

  bulkCompleteShopifySyncs?: AvailableBulkCompleteShopifySyncsResultSelection;

  errorShopifySync?: AvailableErrorShopifySyncResultSelection;

  bulkErrorShopifySyncs?: AvailableBulkErrorShopifySyncsResultSelection;

  abortShopifySync?: AvailableAbortShopifySyncResultSelection;

  bulkAbortShopifySyncs?: AvailableBulkAbortShopifySyncsResultSelection;

  createShopifySmartCollect?: AvailableCreateShopifySmartCollectResultSelection;

  bulkCreateShopifySmartCollects?: AvailableBulkCreateShopifySmartCollectsResultSelection;

  updateShopifySmartCollect?: AvailableUpdateShopifySmartCollectResultSelection;

  bulkUpdateShopifySmartCollects?: AvailableBulkUpdateShopifySmartCollectsResultSelection;

  deleteShopifySmartCollect?: AvailableDeleteShopifySmartCollectResultSelection;

  bulkDeleteShopifySmartCollects?: AvailableBulkDeleteShopifySmartCollectsResultSelection;

  scheduledShopifySync?: AvailableScheduledShopifySyncResultSelection;

  smartCollect?: AvailableSmartCollectResultSelection;

  setTotalZero?: AvailableSetTotalZeroResultSelection;

  test2?: AvailableTest2ResultSelection;

  test3?: AvailableTest3ResultSelection;

  fetchEmails?: AvailableFetchEmailsResultSelection;

  smartCollecter?: AvailableSmartCollecterResultSelection;

  fetchUsers?: AvailableFetchUsersResultSelection;

  test?: AvailableTestResultSelection;

  internal?: AvailableInternalMutationsSelection;
};



export type SignUpUserResult = {

  __typename: 'SignUpUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableSignUpUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};


/** The output when running the signUp on the user model in bulk. */
export type BulkSignUpUsersResult = {

  __typename: 'BulkSignUpUsersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results: (Scalars['JSON'] | null)[];
};



export type AvailableBulkSignUpUsersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results?: boolean | null | undefined;
};



export type SignInUserResult = {

  __typename: 'SignInUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  user: (User | null);
};



export type AvailableSignInUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: AvailableUserSelection;
};


/** The output when running the signIn on the user model in bulk. */
export type BulkSignInUsersResult = {

  __typename: 'BulkSignInUsersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users: (User | null)[];
};



export type AvailableBulkSignInUsersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users?: AvailableUserSelection;
};



export type SignOutUserResult = {

  __typename: 'SignOutUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  user: (User | null);
};



export type AvailableSignOutUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: AvailableUserSelection;
};


/** The output when running the signOut on the user model in bulk. */
export type BulkSignOutUsersResult = {

  __typename: 'BulkSignOutUsersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users: (User | null)[];
};



export type AvailableBulkSignOutUsersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users?: AvailableUserSelection;
};



export type UpdateUserResult = {

  __typename: 'UpdateUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  user: (User | null);
};



export type AvailableUpdateUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: AvailableUserSelection;
};


/** The output when running the update on the user model in bulk. */
export type BulkUpdateUsersResult = {

  __typename: 'BulkUpdateUsersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users: (User | null)[];
};



export type AvailableBulkUpdateUsersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users?: AvailableUserSelection;
};



export type DeleteUserResult = {

  __typename: 'DeleteUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the user model in bulk. */
export type BulkDeleteUsersResult = {

  __typename: 'BulkDeleteUsersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteUsersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type SendVerifyEmailUserResult = {

  __typename: 'SendVerifyEmailUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableSendVerifyEmailUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};


/** The output when running the sendVerifyEmail on the user model in bulk. */
export type BulkSendVerifyEmailUsersResult = {

  __typename: 'BulkSendVerifyEmailUsersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results: (Scalars['JSON'] | null)[];
};



export type AvailableBulkSendVerifyEmailUsersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results?: boolean | null | undefined;
};



export type VerifyEmailUserResult = {

  __typename: 'VerifyEmailUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableVerifyEmailUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};


/** The output when running the verifyEmail on the user model in bulk. */
export type BulkVerifyEmailUsersResult = {

  __typename: 'BulkVerifyEmailUsersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results: (Scalars['JSON'] | null)[];
};



export type AvailableBulkVerifyEmailUsersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results?: boolean | null | undefined;
};



export type SendResetPasswordUserResult = {

  __typename: 'SendResetPasswordUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableSendResetPasswordUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};


/** The output when running the sendResetPassword on the user model in bulk. */
export type BulkSendResetPasswordUsersResult = {

  __typename: 'BulkSendResetPasswordUsersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results: (Scalars['JSON'] | null)[];
};



export type AvailableBulkSendResetPasswordUsersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results?: boolean | null | undefined;
};



export type ResetPasswordUserResult = {

  __typename: 'ResetPasswordUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableResetPasswordUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};


/** The output when running the resetPassword on the user model in bulk. */
export type BulkResetPasswordUsersResult = {

  __typename: 'BulkResetPasswordUsersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results: (Scalars['JSON'] | null)[];
};



export type AvailableBulkResetPasswordUsersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
  results?: boolean | null | undefined;
};



export type ChangePasswordUserResult = {

  __typename: 'ChangePasswordUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  user: (User | null);
};



export type AvailableChangePasswordUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: AvailableUserSelection;
};


/** The output when running the changePassword on the user model in bulk. */
export type BulkChangePasswordUsersResult = {

  __typename: 'BulkChangePasswordUsersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users: (User | null)[];
};



export type AvailableBulkChangePasswordUsersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
  users?: AvailableUserSelection;
};



export type CreateShopifyBulkOperationResult = {

  __typename: 'CreateShopifyBulkOperationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBulkOperation: (ShopifyBulkOperation | null);
};



export type AvailableCreateShopifyBulkOperationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBulkOperation?: AvailableShopifyBulkOperationSelection;
};


/** The output when running the create on the shopifyBulkOperation model in bulk. */
export type BulkCreateShopifyBulkOperationsResult = {

  __typename: 'BulkCreateShopifyBulkOperationsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyBulkOperation records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyBulkOperations: (ShopifyBulkOperation | null)[];
};



export type AvailableBulkCreateShopifyBulkOperationsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyBulkOperation records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyBulkOperations?: AvailableShopifyBulkOperationSelection;
};



export type UpdateShopifyBulkOperationResult = {

  __typename: 'UpdateShopifyBulkOperationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBulkOperation: (ShopifyBulkOperation | null);
};



export type AvailableUpdateShopifyBulkOperationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBulkOperation?: AvailableShopifyBulkOperationSelection;
};


/** The output when running the update on the shopifyBulkOperation model in bulk. */
export type BulkUpdateShopifyBulkOperationsResult = {

  __typename: 'BulkUpdateShopifyBulkOperationsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyBulkOperation records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyBulkOperations: (ShopifyBulkOperation | null)[];
};



export type AvailableBulkUpdateShopifyBulkOperationsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyBulkOperation records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyBulkOperations?: AvailableShopifyBulkOperationSelection;
};



export type CompleteShopifyBulkOperationResult = {

  __typename: 'CompleteShopifyBulkOperationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBulkOperation: (ShopifyBulkOperation | null);
};



export type AvailableCompleteShopifyBulkOperationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBulkOperation?: AvailableShopifyBulkOperationSelection;
};


/** The output when running the complete on the shopifyBulkOperation model in bulk. */
export type BulkCompleteShopifyBulkOperationsResult = {

  __typename: 'BulkCompleteShopifyBulkOperationsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyBulkOperation records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyBulkOperations: (ShopifyBulkOperation | null)[];
};



export type AvailableBulkCompleteShopifyBulkOperationsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyBulkOperation records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyBulkOperations?: AvailableShopifyBulkOperationSelection;
};



export type CancelShopifyBulkOperationResult = {

  __typename: 'CancelShopifyBulkOperationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBulkOperation: (ShopifyBulkOperation | null);
};



export type AvailableCancelShopifyBulkOperationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBulkOperation?: AvailableShopifyBulkOperationSelection;
};


/** The output when running the cancel on the shopifyBulkOperation model in bulk. */
export type BulkCancelShopifyBulkOperationsResult = {

  __typename: 'BulkCancelShopifyBulkOperationsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyBulkOperation records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyBulkOperations: (ShopifyBulkOperation | null)[];
};



export type AvailableBulkCancelShopifyBulkOperationsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyBulkOperation records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyBulkOperations?: AvailableShopifyBulkOperationSelection;
};



export type FailShopifyBulkOperationResult = {

  __typename: 'FailShopifyBulkOperationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBulkOperation: (ShopifyBulkOperation | null);
};



export type AvailableFailShopifyBulkOperationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBulkOperation?: AvailableShopifyBulkOperationSelection;
};


/** The output when running the fail on the shopifyBulkOperation model in bulk. */
export type BulkFailShopifyBulkOperationsResult = {

  __typename: 'BulkFailShopifyBulkOperationsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyBulkOperation records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyBulkOperations: (ShopifyBulkOperation | null)[];
};



export type AvailableBulkFailShopifyBulkOperationsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyBulkOperation records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyBulkOperations?: AvailableShopifyBulkOperationSelection;
};



export type ExpireShopifyBulkOperationResult = {

  __typename: 'ExpireShopifyBulkOperationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBulkOperation: (ShopifyBulkOperation | null);
};



export type AvailableExpireShopifyBulkOperationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBulkOperation?: AvailableShopifyBulkOperationSelection;
};


/** The output when running the expire on the shopifyBulkOperation model in bulk. */
export type BulkExpireShopifyBulkOperationsResult = {

  __typename: 'BulkExpireShopifyBulkOperationsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyBulkOperation records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyBulkOperations: (ShopifyBulkOperation | null)[];
};



export type AvailableBulkExpireShopifyBulkOperationsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyBulkOperation records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyBulkOperations?: AvailableShopifyBulkOperationSelection;
};



export type CreateShopifyCheckoutResult = {

  __typename: 'CreateShopifyCheckoutResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCheckout: (ShopifyCheckout | null);
};



export type AvailableCreateShopifyCheckoutResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCheckout?: AvailableShopifyCheckoutSelection;
};


/** The output when running the create on the shopifyCheckout model in bulk. */
export type BulkCreateShopifyCheckoutsResult = {

  __typename: 'BulkCreateShopifyCheckoutsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyCheckout records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyCheckouts: (ShopifyCheckout | null)[];
};



export type AvailableBulkCreateShopifyCheckoutsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyCheckout records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyCheckouts?: AvailableShopifyCheckoutSelection;
};



export type UpdateShopifyCheckoutResult = {

  __typename: 'UpdateShopifyCheckoutResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCheckout: (ShopifyCheckout | null);
};



export type AvailableUpdateShopifyCheckoutResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCheckout?: AvailableShopifyCheckoutSelection;
};


/** The output when running the update on the shopifyCheckout model in bulk. */
export type BulkUpdateShopifyCheckoutsResult = {

  __typename: 'BulkUpdateShopifyCheckoutsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyCheckout records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyCheckouts: (ShopifyCheckout | null)[];
};



export type AvailableBulkUpdateShopifyCheckoutsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyCheckout records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyCheckouts?: AvailableShopifyCheckoutSelection;
};



export type DeleteShopifyCheckoutResult = {

  __typename: 'DeleteShopifyCheckoutResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyCheckoutResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the shopifyCheckout model in bulk. */
export type BulkDeleteShopifyCheckoutsResult = {

  __typename: 'BulkDeleteShopifyCheckoutsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteShopifyCheckoutsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type CreateShopifyCheckoutLineItemResult = {

  __typename: 'CreateShopifyCheckoutLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCheckoutLineItem: (ShopifyCheckoutLineItem | null);
};



export type AvailableCreateShopifyCheckoutLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCheckoutLineItem?: AvailableShopifyCheckoutLineItemSelection;
};


/** The output when running the create on the shopifyCheckoutLineItem model in bulk. */
export type BulkCreateShopifyCheckoutLineItemsResult = {

  __typename: 'BulkCreateShopifyCheckoutLineItemsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyCheckoutLineItem records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyCheckoutLineItems: (ShopifyCheckoutLineItem | null)[];
};



export type AvailableBulkCreateShopifyCheckoutLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyCheckoutLineItem records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyCheckoutLineItems?: AvailableShopifyCheckoutLineItemSelection;
};



export type UpdateShopifyCheckoutLineItemResult = {

  __typename: 'UpdateShopifyCheckoutLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCheckoutLineItem: (ShopifyCheckoutLineItem | null);
};



export type AvailableUpdateShopifyCheckoutLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCheckoutLineItem?: AvailableShopifyCheckoutLineItemSelection;
};


/** The output when running the update on the shopifyCheckoutLineItem model in bulk. */
export type BulkUpdateShopifyCheckoutLineItemsResult = {

  __typename: 'BulkUpdateShopifyCheckoutLineItemsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyCheckoutLineItem records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyCheckoutLineItems: (ShopifyCheckoutLineItem | null)[];
};



export type AvailableBulkUpdateShopifyCheckoutLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyCheckoutLineItem records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyCheckoutLineItems?: AvailableShopifyCheckoutLineItemSelection;
};



export type DeleteShopifyCheckoutLineItemResult = {

  __typename: 'DeleteShopifyCheckoutLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyCheckoutLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the shopifyCheckoutLineItem model in bulk. */
export type BulkDeleteShopifyCheckoutLineItemsResult = {

  __typename: 'BulkDeleteShopifyCheckoutLineItemsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteShopifyCheckoutLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type UpdateShopifyCollectionResult = {

  __typename: 'UpdateShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollection: (ShopifyCollection | null);
};



export type AvailableUpdateShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollection?: AvailableShopifyCollectionSelection;
};


/** The output when running the update on the shopifyCollection model in bulk. */
export type BulkUpdateShopifyCollectionsResult = {

  __typename: 'BulkUpdateShopifyCollectionsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyCollection records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyCollections: (ShopifyCollection | null)[];
};



export type AvailableBulkUpdateShopifyCollectionsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyCollection records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyCollections?: AvailableShopifyCollectionSelection;
};



export type SmartCollectorShopifyCollectionResult = {

  __typename: 'SmartCollectorShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollection: (ShopifyCollection | null);
};



export type AvailableSmartCollectorShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollection?: AvailableShopifyCollectionSelection;
};


/** The output when running the smartCollector on the shopifyCollection model in bulk. */
export type BulkSmartCollectorShopifyCollectionsResult = {

  __typename: 'BulkSmartCollectorShopifyCollectionsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyCollection records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyCollections: (ShopifyCollection | null)[];
};



export type AvailableBulkSmartCollectorShopifyCollectionsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyCollection records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyCollections?: AvailableShopifyCollectionSelection;
};



export type CreateShopifyCompanyResult = {

  __typename: 'CreateShopifyCompanyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCompany: (ShopifyCompany | null);
};



export type AvailableCreateShopifyCompanyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCompany?: AvailableShopifyCompanySelection;
};


/** The output when running the create on the shopifyCompany model in bulk. */
export type BulkCreateShopifyCompaniesResult = {

  __typename: 'BulkCreateShopifyCompaniesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyCompany records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyCompanies: (ShopifyCompany | null)[];
};



export type AvailableBulkCreateShopifyCompaniesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyCompany records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyCompanies?: AvailableShopifyCompanySelection;
};



export type UpdateShopifyCompanyResult = {

  __typename: 'UpdateShopifyCompanyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCompany: (ShopifyCompany | null);
};



export type AvailableUpdateShopifyCompanyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCompany?: AvailableShopifyCompanySelection;
};


/** The output when running the update on the shopifyCompany model in bulk. */
export type BulkUpdateShopifyCompaniesResult = {

  __typename: 'BulkUpdateShopifyCompaniesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyCompany records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyCompanies: (ShopifyCompany | null)[];
};



export type AvailableBulkUpdateShopifyCompaniesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyCompany records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyCompanies?: AvailableShopifyCompanySelection;
};



export type DeleteShopifyCompanyResult = {

  __typename: 'DeleteShopifyCompanyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyCompanyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the shopifyCompany model in bulk. */
export type BulkDeleteShopifyCompaniesResult = {

  __typename: 'BulkDeleteShopifyCompaniesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteShopifyCompaniesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type CreateShopifyDiscountResult = {

  __typename: 'CreateShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscount: (ShopifyDiscount | null);
};



export type AvailableCreateShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscount?: AvailableShopifyDiscountSelection;
};


/** The output when running the create on the shopifyDiscount model in bulk. */
export type BulkCreateShopifyDiscountsResult = {

  __typename: 'BulkCreateShopifyDiscountsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyDiscount records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyDiscounts: (ShopifyDiscount | null)[];
};



export type AvailableBulkCreateShopifyDiscountsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyDiscount records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyDiscounts?: AvailableShopifyDiscountSelection;
};



export type UpdateShopifyDiscountResult = {

  __typename: 'UpdateShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscount: (ShopifyDiscount | null);
};



export type AvailableUpdateShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscount?: AvailableShopifyDiscountSelection;
};


/** The output when running the update on the shopifyDiscount model in bulk. */
export type BulkUpdateShopifyDiscountsResult = {

  __typename: 'BulkUpdateShopifyDiscountsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyDiscount records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyDiscounts: (ShopifyDiscount | null)[];
};



export type AvailableBulkUpdateShopifyDiscountsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyDiscount records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyDiscounts?: AvailableShopifyDiscountSelection;
};



export type DeleteShopifyDiscountResult = {

  __typename: 'DeleteShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the shopifyDiscount model in bulk. */
export type BulkDeleteShopifyDiscountsResult = {

  __typename: 'BulkDeleteShopifyDiscountsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteShopifyDiscountsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type CreateShopifyDiscountCodeResult = {

  __typename: 'CreateShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscountCode: (ShopifyDiscountCode | null);
};



export type AvailableCreateShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscountCode?: AvailableShopifyDiscountCodeSelection;
};


/** The output when running the create on the shopifyDiscountCode model in bulk. */
export type BulkCreateShopifyDiscountCodesResult = {

  __typename: 'BulkCreateShopifyDiscountCodesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyDiscountCode records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyDiscountCodes: (ShopifyDiscountCode | null)[];
};



export type AvailableBulkCreateShopifyDiscountCodesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyDiscountCode records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyDiscountCodes?: AvailableShopifyDiscountCodeSelection;
};



export type UpdateShopifyDiscountCodeResult = {

  __typename: 'UpdateShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscountCode: (ShopifyDiscountCode | null);
};



export type AvailableUpdateShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscountCode?: AvailableShopifyDiscountCodeSelection;
};


/** The output when running the update on the shopifyDiscountCode model in bulk. */
export type BulkUpdateShopifyDiscountCodesResult = {

  __typename: 'BulkUpdateShopifyDiscountCodesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyDiscountCode records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyDiscountCodes: (ShopifyDiscountCode | null)[];
};



export type AvailableBulkUpdateShopifyDiscountCodesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyDiscountCode records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyDiscountCodes?: AvailableShopifyDiscountCodeSelection;
};



export type DeleteShopifyDiscountCodeResult = {

  __typename: 'DeleteShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the shopifyDiscountCode model in bulk. */
export type BulkDeleteShopifyDiscountCodesResult = {

  __typename: 'BulkDeleteShopifyDiscountCodesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteShopifyDiscountCodesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type CreateShopifyDisputeResult = {

  __typename: 'CreateShopifyDisputeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDispute: (ShopifyDispute | null);
};



export type AvailableCreateShopifyDisputeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDispute?: AvailableShopifyDisputeSelection;
};


/** The output when running the create on the shopifyDispute model in bulk. */
export type BulkCreateShopifyDisputesResult = {

  __typename: 'BulkCreateShopifyDisputesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyDispute records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyDisputes: (ShopifyDispute | null)[];
};



export type AvailableBulkCreateShopifyDisputesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyDispute records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyDisputes?: AvailableShopifyDisputeSelection;
};



export type UpdateShopifyDisputeResult = {

  __typename: 'UpdateShopifyDisputeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDispute: (ShopifyDispute | null);
};



export type AvailableUpdateShopifyDisputeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDispute?: AvailableShopifyDisputeSelection;
};


/** The output when running the update on the shopifyDispute model in bulk. */
export type BulkUpdateShopifyDisputesResult = {

  __typename: 'BulkUpdateShopifyDisputesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyDispute records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyDisputes: (ShopifyDispute | null)[];
};



export type AvailableBulkUpdateShopifyDisputesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyDispute records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyDisputes?: AvailableShopifyDisputeSelection;
};



export type DeleteShopifyDisputeResult = {

  __typename: 'DeleteShopifyDisputeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyDisputeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the shopifyDispute model in bulk. */
export type BulkDeleteShopifyDisputesResult = {

  __typename: 'BulkDeleteShopifyDisputesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteShopifyDisputesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type CreateShopifyDisputeEvidenceResult = {

  __typename: 'CreateShopifyDisputeEvidenceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDisputeEvidence: (ShopifyDisputeEvidence | null);
};



export type AvailableCreateShopifyDisputeEvidenceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDisputeEvidence?: AvailableShopifyDisputeEvidenceSelection;
};


/** The output when running the create on the shopifyDisputeEvidence model in bulk. */
export type BulkCreateShopifyDisputeEvidencesResult = {

  __typename: 'BulkCreateShopifyDisputeEvidencesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyDisputeEvidence records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyDisputeEvidences: (ShopifyDisputeEvidence | null)[];
};



export type AvailableBulkCreateShopifyDisputeEvidencesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyDisputeEvidence records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyDisputeEvidences?: AvailableShopifyDisputeEvidenceSelection;
};



export type UpdateShopifyDisputeEvidenceResult = {

  __typename: 'UpdateShopifyDisputeEvidenceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDisputeEvidence: (ShopifyDisputeEvidence | null);
};



export type AvailableUpdateShopifyDisputeEvidenceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDisputeEvidence?: AvailableShopifyDisputeEvidenceSelection;
};


/** The output when running the update on the shopifyDisputeEvidence model in bulk. */
export type BulkUpdateShopifyDisputeEvidencesResult = {

  __typename: 'BulkUpdateShopifyDisputeEvidencesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyDisputeEvidence records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyDisputeEvidences: (ShopifyDisputeEvidence | null)[];
};



export type AvailableBulkUpdateShopifyDisputeEvidencesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyDisputeEvidence records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyDisputeEvidences?: AvailableShopifyDisputeEvidenceSelection;
};



export type DeleteShopifyDisputeEvidenceResult = {

  __typename: 'DeleteShopifyDisputeEvidenceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyDisputeEvidenceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the shopifyDisputeEvidence model in bulk. */
export type BulkDeleteShopifyDisputeEvidencesResult = {

  __typename: 'BulkDeleteShopifyDisputeEvidencesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteShopifyDisputeEvidencesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type CreateShopifyDomainResult = {

  __typename: 'CreateShopifyDomainResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDomain: (ShopifyDomain | null);
};



export type AvailableCreateShopifyDomainResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDomain?: AvailableShopifyDomainSelection;
};


/** The output when running the create on the shopifyDomain model in bulk. */
export type BulkCreateShopifyDomainsResult = {

  __typename: 'BulkCreateShopifyDomainsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyDomain records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyDomains: (ShopifyDomain | null)[];
};



export type AvailableBulkCreateShopifyDomainsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyDomain records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyDomains?: AvailableShopifyDomainSelection;
};



export type CreateShopifyFulfillmentResult = {

  __typename: 'CreateShopifyFulfillmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillment: (ShopifyFulfillment | null);
};



export type AvailableCreateShopifyFulfillmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillment?: AvailableShopifyFulfillmentSelection;
};


/** The output when running the create on the shopifyFulfillment model in bulk. */
export type BulkCreateShopifyFulfillmentsResult = {

  __typename: 'BulkCreateShopifyFulfillmentsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyFulfillment records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyFulfillments: (ShopifyFulfillment | null)[];
};



export type AvailableBulkCreateShopifyFulfillmentsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyFulfillment records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyFulfillments?: AvailableShopifyFulfillmentSelection;
};



export type UpdateShopifyFulfillmentResult = {

  __typename: 'UpdateShopifyFulfillmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillment: (ShopifyFulfillment | null);
};



export type AvailableUpdateShopifyFulfillmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillment?: AvailableShopifyFulfillmentSelection;
};


/** The output when running the update on the shopifyFulfillment model in bulk. */
export type BulkUpdateShopifyFulfillmentsResult = {

  __typename: 'BulkUpdateShopifyFulfillmentsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyFulfillment records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyFulfillments: (ShopifyFulfillment | null)[];
};



export type AvailableBulkUpdateShopifyFulfillmentsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyFulfillment records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyFulfillments?: AvailableShopifyFulfillmentSelection;
};



export type DeleteShopifyFulfillmentResult = {

  __typename: 'DeleteShopifyFulfillmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyFulfillmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the shopifyFulfillment model in bulk. */
export type BulkDeleteShopifyFulfillmentsResult = {

  __typename: 'BulkDeleteShopifyFulfillmentsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteShopifyFulfillmentsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type CreateShopifyFulfillmentLineItemResult = {

  __typename: 'CreateShopifyFulfillmentLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentLineItem: (ShopifyFulfillmentLineItem | null);
};



export type AvailableCreateShopifyFulfillmentLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentLineItem?: AvailableShopifyFulfillmentLineItemSelection;
};


/** The output when running the create on the shopifyFulfillmentLineItem model in bulk. */
export type BulkCreateShopifyFulfillmentLineItemsResult = {

  __typename: 'BulkCreateShopifyFulfillmentLineItemsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyFulfillmentLineItem records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyFulfillmentLineItems: (ShopifyFulfillmentLineItem | null)[];
};



export type AvailableBulkCreateShopifyFulfillmentLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyFulfillmentLineItem records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyFulfillmentLineItems?: AvailableShopifyFulfillmentLineItemSelection;
};



export type UpdateShopifyFulfillmentLineItemResult = {

  __typename: 'UpdateShopifyFulfillmentLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentLineItem: (ShopifyFulfillmentLineItem | null);
};



export type AvailableUpdateShopifyFulfillmentLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentLineItem?: AvailableShopifyFulfillmentLineItemSelection;
};


/** The output when running the update on the shopifyFulfillmentLineItem model in bulk. */
export type BulkUpdateShopifyFulfillmentLineItemsResult = {

  __typename: 'BulkUpdateShopifyFulfillmentLineItemsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyFulfillmentLineItem records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyFulfillmentLineItems: (ShopifyFulfillmentLineItem | null)[];
};



export type AvailableBulkUpdateShopifyFulfillmentLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyFulfillmentLineItem records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyFulfillmentLineItems?: AvailableShopifyFulfillmentLineItemSelection;
};



export type DeleteShopifyFulfillmentLineItemResult = {

  __typename: 'DeleteShopifyFulfillmentLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyFulfillmentLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the shopifyFulfillmentLineItem model in bulk. */
export type BulkDeleteShopifyFulfillmentLineItemsResult = {

  __typename: 'BulkDeleteShopifyFulfillmentLineItemsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteShopifyFulfillmentLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type CreateShopifyFulfillmentOrderResult = {

  __typename: 'CreateShopifyFulfillmentOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrder: (ShopifyFulfillmentOrder | null);
};



export type AvailableCreateShopifyFulfillmentOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrder?: AvailableShopifyFulfillmentOrderSelection;
};


/** The output when running the create on the shopifyFulfillmentOrder model in bulk. */
export type BulkCreateShopifyFulfillmentOrdersResult = {

  __typename: 'BulkCreateShopifyFulfillmentOrdersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyFulfillmentOrder records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyFulfillmentOrders: (ShopifyFulfillmentOrder | null)[];
};



export type AvailableBulkCreateShopifyFulfillmentOrdersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyFulfillmentOrder records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyFulfillmentOrders?: AvailableShopifyFulfillmentOrderSelection;
};



export type UpdateShopifyFulfillmentOrderResult = {

  __typename: 'UpdateShopifyFulfillmentOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrder: (ShopifyFulfillmentOrder | null);
};



export type AvailableUpdateShopifyFulfillmentOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrder?: AvailableShopifyFulfillmentOrderSelection;
};


/** The output when running the update on the shopifyFulfillmentOrder model in bulk. */
export type BulkUpdateShopifyFulfillmentOrdersResult = {

  __typename: 'BulkUpdateShopifyFulfillmentOrdersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyFulfillmentOrder records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyFulfillmentOrders: (ShopifyFulfillmentOrder | null)[];
};



export type AvailableBulkUpdateShopifyFulfillmentOrdersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyFulfillmentOrder records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyFulfillmentOrders?: AvailableShopifyFulfillmentOrderSelection;
};



export type DeleteShopifyFulfillmentOrderResult = {

  __typename: 'DeleteShopifyFulfillmentOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyFulfillmentOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the shopifyFulfillmentOrder model in bulk. */
export type BulkDeleteShopifyFulfillmentOrdersResult = {

  __typename: 'BulkDeleteShopifyFulfillmentOrdersResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteShopifyFulfillmentOrdersResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type CreateShopifyFulfillmentOrderLineItemResult = {

  __typename: 'CreateShopifyFulfillmentOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrderLineItem: (ShopifyFulfillmentOrderLineItem | null);
};



export type AvailableCreateShopifyFulfillmentOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrderLineItem?: AvailableShopifyFulfillmentOrderLineItemSelection;
};


/** The output when running the create on the shopifyFulfillmentOrderLineItem model in bulk. */
export type BulkCreateShopifyFulfillmentOrderLineItemsResult = {

  __typename: 'BulkCreateShopifyFulfillmentOrderLineItemsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyFulfillmentOrderLineItem records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyFulfillmentOrderLineItems: (ShopifyFulfillmentOrderLineItem | null)[];
};



export type AvailableBulkCreateShopifyFulfillmentOrderLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyFulfillmentOrderLineItem records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyFulfillmentOrderLineItems?: AvailableShopifyFulfillmentOrderLineItemSelection;
};



export type UpdateShopifyFulfillmentOrderLineItemResult = {

  __typename: 'UpdateShopifyFulfillmentOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrderLineItem: (ShopifyFulfillmentOrderLineItem | null);
};



export type AvailableUpdateShopifyFulfillmentOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrderLineItem?: AvailableShopifyFulfillmentOrderLineItemSelection;
};


/** The output when running the update on the shopifyFulfillmentOrderLineItem model in bulk. */
export type BulkUpdateShopifyFulfillmentOrderLineItemsResult = {

  __typename: 'BulkUpdateShopifyFulfillmentOrderLineItemsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyFulfillmentOrderLineItem records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyFulfillmentOrderLineItems: (ShopifyFulfillmentOrderLineItem | null)[];
};



export type AvailableBulkUpdateShopifyFulfillmentOrderLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyFulfillmentOrderLineItem records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyFulfillmentOrderLineItems?: AvailableShopifyFulfillmentOrderLineItemSelection;
};



export type DeleteShopifyFulfillmentOrderLineItemResult = {

  __typename: 'DeleteShopifyFulfillmentOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyFulfillmentOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the shopifyFulfillmentOrderLineItem model in bulk. */
export type BulkDeleteShopifyFulfillmentOrderLineItemsResult = {

  __typename: 'BulkDeleteShopifyFulfillmentOrderLineItemsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteShopifyFulfillmentOrderLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type CreateShopifyFulfillmentServiceResult = {

  __typename: 'CreateShopifyFulfillmentServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentService: (ShopifyFulfillmentService | null);
};



export type AvailableCreateShopifyFulfillmentServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentService?: AvailableShopifyFulfillmentServiceSelection;
};


/** The output when running the create on the shopifyFulfillmentService model in bulk. */
export type BulkCreateShopifyFulfillmentServicesResult = {

  __typename: 'BulkCreateShopifyFulfillmentServicesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyFulfillmentService records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyFulfillmentServices: (ShopifyFulfillmentService | null)[];
};



export type AvailableBulkCreateShopifyFulfillmentServicesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyFulfillmentService records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyFulfillmentServices?: AvailableShopifyFulfillmentServiceSelection;
};



export type UpdateShopifyFulfillmentServiceResult = {

  __typename: 'UpdateShopifyFulfillmentServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentService: (ShopifyFulfillmentService | null);
};



export type AvailableUpdateShopifyFulfillmentServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentService?: AvailableShopifyFulfillmentServiceSelection;
};


/** The output when running the update on the shopifyFulfillmentService model in bulk. */
export type BulkUpdateShopifyFulfillmentServicesResult = {

  __typename: 'BulkUpdateShopifyFulfillmentServicesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyFulfillmentService records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyFulfillmentServices: (ShopifyFulfillmentService | null)[];
};



export type AvailableBulkUpdateShopifyFulfillmentServicesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyFulfillmentService records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyFulfillmentServices?: AvailableShopifyFulfillmentServiceSelection;
};



export type DeleteShopifyFulfillmentServiceResult = {

  __typename: 'DeleteShopifyFulfillmentServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyFulfillmentServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the shopifyFulfillmentService model in bulk. */
export type BulkDeleteShopifyFulfillmentServicesResult = {

  __typename: 'BulkDeleteShopifyFulfillmentServicesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteShopifyFulfillmentServicesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type CreateShopifyMarketResult = {

  __typename: 'CreateShopifyMarketResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyMarket: (ShopifyMarket | null);
};



export type AvailableCreateShopifyMarketResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyMarket?: AvailableShopifyMarketSelection;
};


/** The output when running the create on the shopifyMarket model in bulk. */
export type BulkCreateShopifyMarketsResult = {

  __typename: 'BulkCreateShopifyMarketsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyMarket records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyMarkets: (ShopifyMarket | null)[];
};



export type AvailableBulkCreateShopifyMarketsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyMarket records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyMarkets?: AvailableShopifyMarketSelection;
};



export type UpdateShopifyMarketResult = {

  __typename: 'UpdateShopifyMarketResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyMarket: (ShopifyMarket | null);
};



export type AvailableUpdateShopifyMarketResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyMarket?: AvailableShopifyMarketSelection;
};


/** The output when running the update on the shopifyMarket model in bulk. */
export type BulkUpdateShopifyMarketsResult = {

  __typename: 'BulkUpdateShopifyMarketsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyMarket records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyMarkets: (ShopifyMarket | null)[];
};



export type AvailableBulkUpdateShopifyMarketsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyMarket records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyMarkets?: AvailableShopifyMarketSelection;
};



export type DeleteShopifyMarketResult = {

  __typename: 'DeleteShopifyMarketResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyMarketResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the shopifyMarket model in bulk. */
export type BulkDeleteShopifyMarketsResult = {

  __typename: 'BulkDeleteShopifyMarketsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteShopifyMarketsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type CreateShopifyMarketRegionResult = {

  __typename: 'CreateShopifyMarketRegionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyMarketRegion: (ShopifyMarketRegion | null);
};



export type AvailableCreateShopifyMarketRegionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyMarketRegion?: AvailableShopifyMarketRegionSelection;
};


/** The output when running the create on the shopifyMarketRegion model in bulk. */
export type BulkCreateShopifyMarketRegionsResult = {

  __typename: 'BulkCreateShopifyMarketRegionsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyMarketRegion records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyMarketRegions: (ShopifyMarketRegion | null)[];
};



export type AvailableBulkCreateShopifyMarketRegionsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyMarketRegion records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyMarketRegions?: AvailableShopifyMarketRegionSelection;
};



export type UpdateShopifyMarketRegionResult = {

  __typename: 'UpdateShopifyMarketRegionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyMarketRegion: (ShopifyMarketRegion | null);
};



export type AvailableUpdateShopifyMarketRegionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyMarketRegion?: AvailableShopifyMarketRegionSelection;
};


/** The output when running the update on the shopifyMarketRegion model in bulk. */
export type BulkUpdateShopifyMarketRegionsResult = {

  __typename: 'BulkUpdateShopifyMarketRegionsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyMarketRegion records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyMarketRegions: (ShopifyMarketRegion | null)[];
};



export type AvailableBulkUpdateShopifyMarketRegionsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyMarketRegion records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyMarketRegions?: AvailableShopifyMarketRegionSelection;
};



export type DeleteShopifyMarketRegionResult = {

  __typename: 'DeleteShopifyMarketRegionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyMarketRegionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the shopifyMarketRegion model in bulk. */
export type BulkDeleteShopifyMarketRegionsResult = {

  __typename: 'BulkDeleteShopifyMarketRegionsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteShopifyMarketRegionsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type CreateShopifyMarketWebPresenceResult = {

  __typename: 'CreateShopifyMarketWebPresenceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyMarketWebPresence: (ShopifyMarketWebPresence | null);
};



export type AvailableCreateShopifyMarketWebPresenceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyMarketWebPresence?: AvailableShopifyMarketWebPresenceSelection;
};


/** The output when running the create on the shopifyMarketWebPresence model in bulk. */
export type BulkCreateShopifyMarketWebPresencesResult = {

  __typename: 'BulkCreateShopifyMarketWebPresencesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyMarketWebPresence records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyMarketWebPresences: (ShopifyMarketWebPresence | null)[];
};



export type AvailableBulkCreateShopifyMarketWebPresencesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyMarketWebPresence records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyMarketWebPresences?: AvailableShopifyMarketWebPresenceSelection;
};



export type UpdateShopifyMarketWebPresenceResult = {

  __typename: 'UpdateShopifyMarketWebPresenceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyMarketWebPresence: (ShopifyMarketWebPresence | null);
};



export type AvailableUpdateShopifyMarketWebPresenceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyMarketWebPresence?: AvailableShopifyMarketWebPresenceSelection;
};


/** The output when running the update on the shopifyMarketWebPresence model in bulk. */
export type BulkUpdateShopifyMarketWebPresencesResult = {

  __typename: 'BulkUpdateShopifyMarketWebPresencesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyMarketWebPresence records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyMarketWebPresences: (ShopifyMarketWebPresence | null)[];
};



export type AvailableBulkUpdateShopifyMarketWebPresencesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyMarketWebPresence records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyMarketWebPresences?: AvailableShopifyMarketWebPresenceSelection;
};



export type DeleteShopifyMarketWebPresenceResult = {

  __typename: 'DeleteShopifyMarketWebPresenceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyMarketWebPresenceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the shopifyMarketWebPresence model in bulk. */
export type BulkDeleteShopifyMarketWebPresencesResult = {

  __typename: 'BulkDeleteShopifyMarketWebPresencesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteShopifyMarketWebPresencesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type UpdateShopifyProductResult = {

  __typename: 'UpdateShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (ShopifyProduct | null);
};



export type AvailableUpdateShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: AvailableShopifyProductSelection;
};


/** The output when running the update on the shopifyProduct model in bulk. */
export type BulkUpdateShopifyProductsResult = {

  __typename: 'BulkUpdateShopifyProductsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyProduct records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyProducts: (ShopifyProduct | null)[];
};



export type AvailableBulkUpdateShopifyProductsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyProduct records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyProducts?: AvailableShopifyProductSelection;
};



export type CreateShopifyRefundResult = {

  __typename: 'CreateShopifyRefundResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefund: (ShopifyRefund | null);
};



export type AvailableCreateShopifyRefundResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefund?: AvailableShopifyRefundSelection;
};


/** The output when running the create on the shopifyRefund model in bulk. */
export type BulkCreateShopifyRefundsResult = {

  __typename: 'BulkCreateShopifyRefundsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyRefund records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyRefunds: (ShopifyRefund | null)[];
};



export type AvailableBulkCreateShopifyRefundsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyRefund records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyRefunds?: AvailableShopifyRefundSelection;
};



export type CreateShopifyRefundDutyResult = {

  __typename: 'CreateShopifyRefundDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundDuty: (ShopifyRefundDuty | null);
};



export type AvailableCreateShopifyRefundDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundDuty?: AvailableShopifyRefundDutySelection;
};


/** The output when running the create on the shopifyRefundDuty model in bulk. */
export type BulkCreateShopifyRefundDutiesResult = {

  __typename: 'BulkCreateShopifyRefundDutiesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyRefundDuty records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyRefundDuties: (ShopifyRefundDuty | null)[];
};



export type AvailableBulkCreateShopifyRefundDutiesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyRefundDuty records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyRefundDuties?: AvailableShopifyRefundDutySelection;
};



export type UpdateShopifyRefundDutyResult = {

  __typename: 'UpdateShopifyRefundDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundDuty: (ShopifyRefundDuty | null);
};



export type AvailableUpdateShopifyRefundDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundDuty?: AvailableShopifyRefundDutySelection;
};


/** The output when running the update on the shopifyRefundDuty model in bulk. */
export type BulkUpdateShopifyRefundDutiesResult = {

  __typename: 'BulkUpdateShopifyRefundDutiesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyRefundDuty records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyRefundDuties: (ShopifyRefundDuty | null)[];
};



export type AvailableBulkUpdateShopifyRefundDutiesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyRefundDuty records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyRefundDuties?: AvailableShopifyRefundDutySelection;
};



export type DeleteShopifyRefundDutyResult = {

  __typename: 'DeleteShopifyRefundDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyRefundDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the shopifyRefundDuty model in bulk. */
export type BulkDeleteShopifyRefundDutiesResult = {

  __typename: 'BulkDeleteShopifyRefundDutiesResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteShopifyRefundDutiesResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type CreateShopifyRefundLineItemResult = {

  __typename: 'CreateShopifyRefundLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundLineItem: (ShopifyRefundLineItem | null);
};



export type AvailableCreateShopifyRefundLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundLineItem?: AvailableShopifyRefundLineItemSelection;
};


/** The output when running the create on the shopifyRefundLineItem model in bulk. */
export type BulkCreateShopifyRefundLineItemsResult = {

  __typename: 'BulkCreateShopifyRefundLineItemsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyRefundLineItem records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyRefundLineItems: (ShopifyRefundLineItem | null)[];
};



export type AvailableBulkCreateShopifyRefundLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyRefundLineItem records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyRefundLineItems?: AvailableShopifyRefundLineItemSelection;
};



export type UpdateShopifyShopResult = {

  __typename: 'UpdateShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (ShopifyShop | null);
};



export type AvailableUpdateShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: AvailableShopifyShopSelection;
};


/** The output when running the update on the shopifyShop model in bulk. */
export type BulkUpdateShopifyShopsResult = {

  __typename: 'BulkUpdateShopifyShopsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifyShop records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyShops: (ShopifyShop | null)[];
};



export type AvailableBulkUpdateShopifyShopsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifyShop records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifyShops?: AvailableShopifyShopSelection;
};



export type RunShopifySyncResult = {

  __typename: 'RunShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (ShopifySync | null);
};



export type AvailableRunShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: AvailableShopifySyncSelection;
};


/** The output when running the run on the shopifySync model in bulk. */
export type BulkRunShopifySyncsResult = {

  __typename: 'BulkRunShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkRunShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: AvailableShopifySyncSelection;
};



export type CompleteShopifySyncResult = {

  __typename: 'CompleteShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (ShopifySync | null);
};



export type AvailableCompleteShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: AvailableShopifySyncSelection;
};


/** The output when running the complete on the shopifySync model in bulk. */
export type BulkCompleteShopifySyncsResult = {

  __typename: 'BulkCompleteShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkCompleteShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: AvailableShopifySyncSelection;
};



export type ErrorShopifySyncResult = {

  __typename: 'ErrorShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (ShopifySync | null);
};



export type AvailableErrorShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: AvailableShopifySyncSelection;
};


/** The output when running the error on the shopifySync model in bulk. */
export type BulkErrorShopifySyncsResult = {

  __typename: 'BulkErrorShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkErrorShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: AvailableShopifySyncSelection;
};



export type AbortShopifySyncResult = {

  __typename: 'AbortShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (ShopifySync | null);
};



export type AvailableAbortShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: AvailableShopifySyncSelection;
};


/** The output when running the abort on the shopifySync model in bulk. */
export type BulkAbortShopifySyncsResult = {

  __typename: 'BulkAbortShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkAbortShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: AvailableShopifySyncSelection;
};



export type CreateShopifySmartCollectResult = {

  __typename: 'CreateShopifySmartCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySmartCollect: (ShopifySmartCollect | null);
};



export type AvailableCreateShopifySmartCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySmartCollect?: AvailableShopifySmartCollectSelection;
};


/** The output when running the create on the shopifySmartCollect model in bulk. */
export type BulkCreateShopifySmartCollectsResult = {

  __typename: 'BulkCreateShopifySmartCollectsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySmartCollect records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySmartCollects: (ShopifySmartCollect | null)[];
};



export type AvailableBulkCreateShopifySmartCollectsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySmartCollect records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySmartCollects?: AvailableShopifySmartCollectSelection;
};



export type UpdateShopifySmartCollectResult = {

  __typename: 'UpdateShopifySmartCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySmartCollect: (ShopifySmartCollect | null);
};



export type AvailableUpdateShopifySmartCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySmartCollect?: AvailableShopifySmartCollectSelection;
};


/** The output when running the update on the shopifySmartCollect model in bulk. */
export type BulkUpdateShopifySmartCollectsResult = {

  __typename: 'BulkUpdateShopifySmartCollectsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySmartCollect records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySmartCollects: (ShopifySmartCollect | null)[];
};



export type AvailableBulkUpdateShopifySmartCollectsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySmartCollect records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySmartCollects?: AvailableShopifySmartCollectSelection;
};



export type DeleteShopifySmartCollectResult = {

  __typename: 'DeleteShopifySmartCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifySmartCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};


/** The output when running the delete on the shopifySmartCollect model in bulk. */
export type BulkDeleteShopifySmartCollectsResult = {

  __typename: 'BulkDeleteShopifySmartCollectsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteShopifySmartCollectsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};



export type ScheduledShopifySyncResult = {

  __typename: 'ScheduledShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableScheduledShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};



export type SmartCollectResult = {

  __typename: 'SmartCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableSmartCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};



export type SetTotalZeroResult = {

  __typename: 'SetTotalZeroResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableSetTotalZeroResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};



export type Test2Result = {

  __typename: 'Test2Result';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableTest2ResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};



export type Test3Result = {

  __typename: 'Test3Result';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableTest3ResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};



export type FetchEmailsResult = {

  __typename: 'FetchEmailsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableFetchEmailsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};



export type SmartCollecterResult = {

  __typename: 'SmartCollecterResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableSmartCollecterResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};



export type FetchUsersResult = {

  __typename: 'FetchUsersResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableFetchUsersResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};



export type TestResult = {

  __typename: 'TestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableTestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};



export type InternalMutations = {

  __typename: 'InternalMutations';

  startTransaction: Scalars['String'];

  commitTransaction: Scalars['String'];

  rollbackTransaction: Scalars['String'];

  /** Acquire a backend lock, returning only once the lock has been acquired */
  acquireLock: LockOperationResult;

  createUser: (InternalCreateUserResult | null);

  updateUser: (InternalUpdateUserResult | null);

  deleteUser: (InternalDeleteUserResult | null);

  deleteManyUser: (InternalDeleteManyUserResult | null);

  bulkCreateUsers: (InternalBulkCreateUsersResult | null);

  triggerSignUpUser: (SignUpUserResult | null);

  triggerSignInUser: (SignInUserResult | null);

  triggerSignOutUser: (SignOutUserResult | null);

  triggerUpdateUser: (UpdateUserResult | null);

  triggerDeleteUser: (DeleteUserResult | null);

  triggerSendVerifyEmailUser: (SendVerifyEmailUserResult | null);

  triggerVerifyEmailUser: (VerifyEmailUserResult | null);

  triggerSendResetPasswordUser: (SendResetPasswordUserResult | null);

  triggerResetPasswordUser: (ResetPasswordUserResult | null);

  triggerChangePasswordUser: (ChangePasswordUserResult | null);

  createShopifyApp: (InternalCreateShopifyAppResult | null);

  updateShopifyApp: (InternalUpdateShopifyAppResult | null);

  deleteShopifyApp: (InternalDeleteShopifyAppResult | null);

  deleteManyShopifyApp: (InternalDeleteManyShopifyAppResult | null);

  bulkCreateShopifyApps: (InternalBulkCreateShopifyAppsResult | null);

  triggerCreateShopifyApp: (CreateShopifyAppResult | null);

  triggerUpdateShopifyApp: (UpdateShopifyAppResult | null);

  triggerDeleteShopifyApp: (DeleteShopifyAppResult | null);

  createShopifyAppInstallation: (InternalCreateShopifyAppInstallationResult | null);

  updateShopifyAppInstallation: (InternalUpdateShopifyAppInstallationResult | null);

  deleteShopifyAppInstallation: (InternalDeleteShopifyAppInstallationResult | null);

  deleteManyShopifyAppInstallation: (InternalDeleteManyShopifyAppInstallationResult | null);

  bulkCreateShopifyAppInstallations: (InternalBulkCreateShopifyAppInstallationsResult | null);

  triggerCreateShopifyAppInstallation: (CreateShopifyAppInstallationResult | null);

  triggerUpdateShopifyAppInstallation: (UpdateShopifyAppInstallationResult | null);

  triggerDeleteShopifyAppInstallation: (DeleteShopifyAppInstallationResult | null);

  createShopifyBalanceTransaction: (InternalCreateShopifyBalanceTransactionResult | null);

  updateShopifyBalanceTransaction: (InternalUpdateShopifyBalanceTransactionResult | null);

  deleteShopifyBalanceTransaction: (InternalDeleteShopifyBalanceTransactionResult | null);

  deleteManyShopifyBalanceTransaction: (InternalDeleteManyShopifyBalanceTransactionResult | null);

  bulkCreateShopifyBalanceTransactions: (InternalBulkCreateShopifyBalanceTransactionsResult | null);

  triggerCreateShopifyBalanceTransaction: (CreateShopifyBalanceTransactionResult | null);

  triggerUpdateShopifyBalanceTransaction: (UpdateShopifyBalanceTransactionResult | null);

  triggerDeleteShopifyBalanceTransaction: (DeleteShopifyBalanceTransactionResult | null);

  createShopifyBulkOperation: (InternalCreateShopifyBulkOperationResult | null);

  updateShopifyBulkOperation: (InternalUpdateShopifyBulkOperationResult | null);

  deleteShopifyBulkOperation: (InternalDeleteShopifyBulkOperationResult | null);

  deleteManyShopifyBulkOperation: (InternalDeleteManyShopifyBulkOperationResult | null);

  bulkCreateShopifyBulkOperations: (InternalBulkCreateShopifyBulkOperationsResult | null);

  triggerCreateShopifyBulkOperation: (CreateShopifyBulkOperationResult | null);

  triggerUpdateShopifyBulkOperation: (UpdateShopifyBulkOperationResult | null);

  triggerCompleteShopifyBulkOperation: (CompleteShopifyBulkOperationResult | null);

  triggerCancelShopifyBulkOperation: (CancelShopifyBulkOperationResult | null);

  triggerFailShopifyBulkOperation: (FailShopifyBulkOperationResult | null);

  triggerExpireShopifyBulkOperation: (ExpireShopifyBulkOperationResult | null);

  createShopifyCheckout: (InternalCreateShopifyCheckoutResult | null);

  updateShopifyCheckout: (InternalUpdateShopifyCheckoutResult | null);

  deleteShopifyCheckout: (InternalDeleteShopifyCheckoutResult | null);

  deleteManyShopifyCheckout: (InternalDeleteManyShopifyCheckoutResult | null);

  bulkCreateShopifyCheckouts: (InternalBulkCreateShopifyCheckoutsResult | null);

  triggerCreateShopifyCheckout: (CreateShopifyCheckoutResult | null);

  triggerUpdateShopifyCheckout: (UpdateShopifyCheckoutResult | null);

  triggerDeleteShopifyCheckout: (DeleteShopifyCheckoutResult | null);

  createShopifyCheckoutLineItem: (InternalCreateShopifyCheckoutLineItemResult | null);

  updateShopifyCheckoutLineItem: (InternalUpdateShopifyCheckoutLineItemResult | null);

  deleteShopifyCheckoutLineItem: (InternalDeleteShopifyCheckoutLineItemResult | null);

  deleteManyShopifyCheckoutLineItem: (InternalDeleteManyShopifyCheckoutLineItemResult | null);

  bulkCreateShopifyCheckoutLineItems: (InternalBulkCreateShopifyCheckoutLineItemsResult | null);

  triggerCreateShopifyCheckoutLineItem: (CreateShopifyCheckoutLineItemResult | null);

  triggerUpdateShopifyCheckoutLineItem: (UpdateShopifyCheckoutLineItemResult | null);

  triggerDeleteShopifyCheckoutLineItem: (DeleteShopifyCheckoutLineItemResult | null);

  createShopifyCollect: (InternalCreateShopifyCollectResult | null);

  updateShopifyCollect: (InternalUpdateShopifyCollectResult | null);

  deleteShopifyCollect: (InternalDeleteShopifyCollectResult | null);

  deleteManyShopifyCollect: (InternalDeleteManyShopifyCollectResult | null);

  bulkCreateShopifyCollects: (InternalBulkCreateShopifyCollectsResult | null);

  triggerCreateShopifyCollect: (CreateShopifyCollectResult | null);

  triggerUpdateShopifyCollect: (UpdateShopifyCollectResult | null);

  triggerDeleteShopifyCollect: (DeleteShopifyCollectResult | null);

  createShopifyCollection: (InternalCreateShopifyCollectionResult | null);

  updateShopifyCollection: (InternalUpdateShopifyCollectionResult | null);

  deleteShopifyCollection: (InternalDeleteShopifyCollectionResult | null);

  deleteManyShopifyCollection: (InternalDeleteManyShopifyCollectionResult | null);

  bulkCreateShopifyCollections: (InternalBulkCreateShopifyCollectionsResult | null);

  triggerCreateShopifyCollection: (CreateShopifyCollectionResult | null);

  triggerUpdateShopifyCollection: (UpdateShopifyCollectionResult | null);

  triggerDeleteShopifyCollection: (DeleteShopifyCollectionResult | null);

  triggerSmartCollectorShopifyCollection: (SmartCollectorShopifyCollectionResult | null);

  createShopifyCompany: (InternalCreateShopifyCompanyResult | null);

  updateShopifyCompany: (InternalUpdateShopifyCompanyResult | null);

  deleteShopifyCompany: (InternalDeleteShopifyCompanyResult | null);

  deleteManyShopifyCompany: (InternalDeleteManyShopifyCompanyResult | null);

  bulkCreateShopifyCompanies: (InternalBulkCreateShopifyCompaniesResult | null);

  triggerCreateShopifyCompany: (CreateShopifyCompanyResult | null);

  triggerUpdateShopifyCompany: (UpdateShopifyCompanyResult | null);

  triggerDeleteShopifyCompany: (DeleteShopifyCompanyResult | null);

  createShopifyDiscount: (InternalCreateShopifyDiscountResult | null);

  updateShopifyDiscount: (InternalUpdateShopifyDiscountResult | null);

  deleteShopifyDiscount: (InternalDeleteShopifyDiscountResult | null);

  deleteManyShopifyDiscount: (InternalDeleteManyShopifyDiscountResult | null);

  bulkCreateShopifyDiscounts: (InternalBulkCreateShopifyDiscountsResult | null);

  triggerCreateShopifyDiscount: (CreateShopifyDiscountResult | null);

  triggerUpdateShopifyDiscount: (UpdateShopifyDiscountResult | null);

  triggerDeleteShopifyDiscount: (DeleteShopifyDiscountResult | null);

  createShopifyDiscountCode: (InternalCreateShopifyDiscountCodeResult | null);

  updateShopifyDiscountCode: (InternalUpdateShopifyDiscountCodeResult | null);

  deleteShopifyDiscountCode: (InternalDeleteShopifyDiscountCodeResult | null);

  deleteManyShopifyDiscountCode: (InternalDeleteManyShopifyDiscountCodeResult | null);

  bulkCreateShopifyDiscountCodes: (InternalBulkCreateShopifyDiscountCodesResult | null);

  triggerCreateShopifyDiscountCode: (CreateShopifyDiscountCodeResult | null);

  triggerUpdateShopifyDiscountCode: (UpdateShopifyDiscountCodeResult | null);

  triggerDeleteShopifyDiscountCode: (DeleteShopifyDiscountCodeResult | null);

  createShopifyDispute: (InternalCreateShopifyDisputeResult | null);

  updateShopifyDispute: (InternalUpdateShopifyDisputeResult | null);

  deleteShopifyDispute: (InternalDeleteShopifyDisputeResult | null);

  deleteManyShopifyDispute: (InternalDeleteManyShopifyDisputeResult | null);

  bulkCreateShopifyDisputes: (InternalBulkCreateShopifyDisputesResult | null);

  triggerCreateShopifyDispute: (CreateShopifyDisputeResult | null);

  triggerUpdateShopifyDispute: (UpdateShopifyDisputeResult | null);

  triggerDeleteShopifyDispute: (DeleteShopifyDisputeResult | null);

  createShopifyDisputeEvidence: (InternalCreateShopifyDisputeEvidenceResult | null);

  updateShopifyDisputeEvidence: (InternalUpdateShopifyDisputeEvidenceResult | null);

  deleteShopifyDisputeEvidence: (InternalDeleteShopifyDisputeEvidenceResult | null);

  deleteManyShopifyDisputeEvidence: (InternalDeleteManyShopifyDisputeEvidenceResult | null);

  bulkCreateShopifyDisputeEvidences: (InternalBulkCreateShopifyDisputeEvidencesResult | null);

  triggerCreateShopifyDisputeEvidence: (CreateShopifyDisputeEvidenceResult | null);

  triggerUpdateShopifyDisputeEvidence: (UpdateShopifyDisputeEvidenceResult | null);

  triggerDeleteShopifyDisputeEvidence: (DeleteShopifyDisputeEvidenceResult | null);

  createShopifyDomain: (InternalCreateShopifyDomainResult | null);

  updateShopifyDomain: (InternalUpdateShopifyDomainResult | null);

  deleteShopifyDomain: (InternalDeleteShopifyDomainResult | null);

  deleteManyShopifyDomain: (InternalDeleteManyShopifyDomainResult | null);

  bulkCreateShopifyDomains: (InternalBulkCreateShopifyDomainsResult | null);

  triggerCreateShopifyDomain: (CreateShopifyDomainResult | null);

  triggerUpdateShopifyDomain: (UpdateShopifyDomainResult | null);

  triggerDeleteShopifyDomain: (DeleteShopifyDomainResult | null);

  createShopifyFulfillment: (InternalCreateShopifyFulfillmentResult | null);

  updateShopifyFulfillment: (InternalUpdateShopifyFulfillmentResult | null);

  deleteShopifyFulfillment: (InternalDeleteShopifyFulfillmentResult | null);

  deleteManyShopifyFulfillment: (InternalDeleteManyShopifyFulfillmentResult | null);

  bulkCreateShopifyFulfillments: (InternalBulkCreateShopifyFulfillmentsResult | null);

  triggerCreateShopifyFulfillment: (CreateShopifyFulfillmentResult | null);

  triggerUpdateShopifyFulfillment: (UpdateShopifyFulfillmentResult | null);

  triggerDeleteShopifyFulfillment: (DeleteShopifyFulfillmentResult | null);

  createShopifyFulfillmentLineItem: (InternalCreateShopifyFulfillmentLineItemResult | null);

  updateShopifyFulfillmentLineItem: (InternalUpdateShopifyFulfillmentLineItemResult | null);

  deleteShopifyFulfillmentLineItem: (InternalDeleteShopifyFulfillmentLineItemResult | null);

  deleteManyShopifyFulfillmentLineItem: (InternalDeleteManyShopifyFulfillmentLineItemResult | null);

  bulkCreateShopifyFulfillmentLineItems: (InternalBulkCreateShopifyFulfillmentLineItemsResult | null);

  triggerCreateShopifyFulfillmentLineItem: (CreateShopifyFulfillmentLineItemResult | null);

  triggerUpdateShopifyFulfillmentLineItem: (UpdateShopifyFulfillmentLineItemResult | null);

  triggerDeleteShopifyFulfillmentLineItem: (DeleteShopifyFulfillmentLineItemResult | null);

  createShopifyFulfillmentOrder: (InternalCreateShopifyFulfillmentOrderResult | null);

  updateShopifyFulfillmentOrder: (InternalUpdateShopifyFulfillmentOrderResult | null);

  deleteShopifyFulfillmentOrder: (InternalDeleteShopifyFulfillmentOrderResult | null);

  deleteManyShopifyFulfillmentOrder: (InternalDeleteManyShopifyFulfillmentOrderResult | null);

  bulkCreateShopifyFulfillmentOrders: (InternalBulkCreateShopifyFulfillmentOrdersResult | null);

  triggerCreateShopifyFulfillmentOrder: (CreateShopifyFulfillmentOrderResult | null);

  triggerUpdateShopifyFulfillmentOrder: (UpdateShopifyFulfillmentOrderResult | null);

  triggerDeleteShopifyFulfillmentOrder: (DeleteShopifyFulfillmentOrderResult | null);

  createShopifyFulfillmentOrderLineItem: (InternalCreateShopifyFulfillmentOrderLineItemResult | null);

  updateShopifyFulfillmentOrderLineItem: (InternalUpdateShopifyFulfillmentOrderLineItemResult | null);

  deleteShopifyFulfillmentOrderLineItem: (InternalDeleteShopifyFulfillmentOrderLineItemResult | null);

  deleteManyShopifyFulfillmentOrderLineItem: (InternalDeleteManyShopifyFulfillmentOrderLineItemResult | null);

  bulkCreateShopifyFulfillmentOrderLineItems: (InternalBulkCreateShopifyFulfillmentOrderLineItemsResult | null);

  triggerCreateShopifyFulfillmentOrderLineItem: (CreateShopifyFulfillmentOrderLineItemResult | null);

  triggerUpdateShopifyFulfillmentOrderLineItem: (UpdateShopifyFulfillmentOrderLineItemResult | null);

  triggerDeleteShopifyFulfillmentOrderLineItem: (DeleteShopifyFulfillmentOrderLineItemResult | null);

  createShopifyFulfillmentService: (InternalCreateShopifyFulfillmentServiceResult | null);

  updateShopifyFulfillmentService: (InternalUpdateShopifyFulfillmentServiceResult | null);

  deleteShopifyFulfillmentService: (InternalDeleteShopifyFulfillmentServiceResult | null);

  deleteManyShopifyFulfillmentService: (InternalDeleteManyShopifyFulfillmentServiceResult | null);

  bulkCreateShopifyFulfillmentServices: (InternalBulkCreateShopifyFulfillmentServicesResult | null);

  triggerCreateShopifyFulfillmentService: (CreateShopifyFulfillmentServiceResult | null);

  triggerUpdateShopifyFulfillmentService: (UpdateShopifyFulfillmentServiceResult | null);

  triggerDeleteShopifyFulfillmentService: (DeleteShopifyFulfillmentServiceResult | null);

  createShopifyGdprRequest: (InternalCreateShopifyGdprRequestResult | null);

  updateShopifyGdprRequest: (InternalUpdateShopifyGdprRequestResult | null);

  deleteShopifyGdprRequest: (InternalDeleteShopifyGdprRequestResult | null);

  deleteManyShopifyGdprRequest: (InternalDeleteManyShopifyGdprRequestResult | null);

  bulkCreateShopifyGdprRequests: (InternalBulkCreateShopifyGdprRequestsResult | null);

  triggerCreateShopifyGdprRequest: (CreateShopifyGdprRequestResult | null);

  triggerUpdateShopifyGdprRequest: (UpdateShopifyGdprRequestResult | null);

  createShopifyMarket: (InternalCreateShopifyMarketResult | null);

  updateShopifyMarket: (InternalUpdateShopifyMarketResult | null);

  deleteShopifyMarket: (InternalDeleteShopifyMarketResult | null);

  deleteManyShopifyMarket: (InternalDeleteManyShopifyMarketResult | null);

  bulkCreateShopifyMarkets: (InternalBulkCreateShopifyMarketsResult | null);

  triggerCreateShopifyMarket: (CreateShopifyMarketResult | null);

  triggerUpdateShopifyMarket: (UpdateShopifyMarketResult | null);

  triggerDeleteShopifyMarket: (DeleteShopifyMarketResult | null);

  createShopifyMarketRegion: (InternalCreateShopifyMarketRegionResult | null);

  updateShopifyMarketRegion: (InternalUpdateShopifyMarketRegionResult | null);

  deleteShopifyMarketRegion: (InternalDeleteShopifyMarketRegionResult | null);

  deleteManyShopifyMarketRegion: (InternalDeleteManyShopifyMarketRegionResult | null);

  bulkCreateShopifyMarketRegions: (InternalBulkCreateShopifyMarketRegionsResult | null);

  triggerCreateShopifyMarketRegion: (CreateShopifyMarketRegionResult | null);

  triggerUpdateShopifyMarketRegion: (UpdateShopifyMarketRegionResult | null);

  triggerDeleteShopifyMarketRegion: (DeleteShopifyMarketRegionResult | null);

  createShopifyMarketWebPresence: (InternalCreateShopifyMarketWebPresenceResult | null);

  updateShopifyMarketWebPresence: (InternalUpdateShopifyMarketWebPresenceResult | null);

  deleteShopifyMarketWebPresence: (InternalDeleteShopifyMarketWebPresenceResult | null);

  deleteManyShopifyMarketWebPresence: (InternalDeleteManyShopifyMarketWebPresenceResult | null);

  bulkCreateShopifyMarketWebPresences: (InternalBulkCreateShopifyMarketWebPresencesResult | null);

  triggerCreateShopifyMarketWebPresence: (CreateShopifyMarketWebPresenceResult | null);

  triggerUpdateShopifyMarketWebPresence: (UpdateShopifyMarketWebPresenceResult | null);

  triggerDeleteShopifyMarketWebPresence: (DeleteShopifyMarketWebPresenceResult | null);

  createShopifyOrder: (InternalCreateShopifyOrderResult | null);

  updateShopifyOrder: (InternalUpdateShopifyOrderResult | null);

  deleteShopifyOrder: (InternalDeleteShopifyOrderResult | null);

  deleteManyShopifyOrder: (InternalDeleteManyShopifyOrderResult | null);

  bulkCreateShopifyOrders: (InternalBulkCreateShopifyOrdersResult | null);

  triggerCreateShopifyOrder: (CreateShopifyOrderResult | null);

  triggerUpdateShopifyOrder: (UpdateShopifyOrderResult | null);

  triggerDeleteShopifyOrder: (DeleteShopifyOrderResult | null);

  createShopifyOrderAdjustment: (InternalCreateShopifyOrderAdjustmentResult | null);

  updateShopifyOrderAdjustment: (InternalUpdateShopifyOrderAdjustmentResult | null);

  deleteShopifyOrderAdjustment: (InternalDeleteShopifyOrderAdjustmentResult | null);

  deleteManyShopifyOrderAdjustment: (InternalDeleteManyShopifyOrderAdjustmentResult | null);

  bulkCreateShopifyOrderAdjustments: (InternalBulkCreateShopifyOrderAdjustmentsResult | null);

  triggerCreateShopifyOrderAdjustment: (CreateShopifyOrderAdjustmentResult | null);

  triggerUpdateShopifyOrderAdjustment: (UpdateShopifyOrderAdjustmentResult | null);

  triggerDeleteShopifyOrderAdjustment: (DeleteShopifyOrderAdjustmentResult | null);

  createShopifyOrderLineItem: (InternalCreateShopifyOrderLineItemResult | null);

  updateShopifyOrderLineItem: (InternalUpdateShopifyOrderLineItemResult | null);

  deleteShopifyOrderLineItem: (InternalDeleteShopifyOrderLineItemResult | null);

  deleteManyShopifyOrderLineItem: (InternalDeleteManyShopifyOrderLineItemResult | null);

  bulkCreateShopifyOrderLineItems: (InternalBulkCreateShopifyOrderLineItemsResult | null);

  triggerCreateShopifyOrderLineItem: (CreateShopifyOrderLineItemResult | null);

  triggerUpdateShopifyOrderLineItem: (UpdateShopifyOrderLineItemResult | null);

  triggerDeleteShopifyOrderLineItem: (DeleteShopifyOrderLineItemResult | null);

  createShopifyPayout: (InternalCreateShopifyPayoutResult | null);

  updateShopifyPayout: (InternalUpdateShopifyPayoutResult | null);

  deleteShopifyPayout: (InternalDeleteShopifyPayoutResult | null);

  deleteManyShopifyPayout: (InternalDeleteManyShopifyPayoutResult | null);

  bulkCreateShopifyPayouts: (InternalBulkCreateShopifyPayoutsResult | null);

  triggerCreateShopifyPayout: (CreateShopifyPayoutResult | null);

  triggerUpdateShopifyPayout: (UpdateShopifyPayoutResult | null);

  triggerDeleteShopifyPayout: (DeleteShopifyPayoutResult | null);

  createShopifyPriceRule: (InternalCreateShopifyPriceRuleResult | null);

  updateShopifyPriceRule: (InternalUpdateShopifyPriceRuleResult | null);

  deleteShopifyPriceRule: (InternalDeleteShopifyPriceRuleResult | null);

  deleteManyShopifyPriceRule: (InternalDeleteManyShopifyPriceRuleResult | null);

  bulkCreateShopifyPriceRules: (InternalBulkCreateShopifyPriceRulesResult | null);

  triggerCreateShopifyPriceRule: (CreateShopifyPriceRuleResult | null);

  triggerUpdateShopifyPriceRule: (UpdateShopifyPriceRuleResult | null);

  triggerDeleteShopifyPriceRule: (DeleteShopifyPriceRuleResult | null);

  createShopifyProduct: (InternalCreateShopifyProductResult | null);

  updateShopifyProduct: (InternalUpdateShopifyProductResult | null);

  deleteShopifyProduct: (InternalDeleteShopifyProductResult | null);

  deleteManyShopifyProduct: (InternalDeleteManyShopifyProductResult | null);

  bulkCreateShopifyProducts: (InternalBulkCreateShopifyProductsResult | null);

  triggerCreateShopifyProduct: (CreateShopifyProductResult | null);

  triggerUpdateShopifyProduct: (UpdateShopifyProductResult | null);

  triggerDeleteShopifyProduct: (DeleteShopifyProductResult | null);

  createShopifyRefund: (InternalCreateShopifyRefundResult | null);

  updateShopifyRefund: (InternalUpdateShopifyRefundResult | null);

  deleteShopifyRefund: (InternalDeleteShopifyRefundResult | null);

  deleteManyShopifyRefund: (InternalDeleteManyShopifyRefundResult | null);

  bulkCreateShopifyRefunds: (InternalBulkCreateShopifyRefundsResult | null);

  triggerCreateShopifyRefund: (CreateShopifyRefundResult | null);

  triggerUpdateShopifyRefund: (UpdateShopifyRefundResult | null);

  triggerDeleteShopifyRefund: (DeleteShopifyRefundResult | null);

  createShopifyRefundDuty: (InternalCreateShopifyRefundDutyResult | null);

  updateShopifyRefundDuty: (InternalUpdateShopifyRefundDutyResult | null);

  deleteShopifyRefundDuty: (InternalDeleteShopifyRefundDutyResult | null);

  deleteManyShopifyRefundDuty: (InternalDeleteManyShopifyRefundDutyResult | null);

  bulkCreateShopifyRefundDuties: (InternalBulkCreateShopifyRefundDutiesResult | null);

  triggerCreateShopifyRefundDuty: (CreateShopifyRefundDutyResult | null);

  triggerUpdateShopifyRefundDuty: (UpdateShopifyRefundDutyResult | null);

  triggerDeleteShopifyRefundDuty: (DeleteShopifyRefundDutyResult | null);

  createShopifyRefundLineItem: (InternalCreateShopifyRefundLineItemResult | null);

  updateShopifyRefundLineItem: (InternalUpdateShopifyRefundLineItemResult | null);

  deleteShopifyRefundLineItem: (InternalDeleteShopifyRefundLineItemResult | null);

  deleteManyShopifyRefundLineItem: (InternalDeleteManyShopifyRefundLineItemResult | null);

  bulkCreateShopifyRefundLineItems: (InternalBulkCreateShopifyRefundLineItemsResult | null);

  triggerCreateShopifyRefundLineItem: (CreateShopifyRefundLineItemResult | null);

  triggerUpdateShopifyRefundLineItem: (UpdateShopifyRefundLineItemResult | null);

  triggerDeleteShopifyRefundLineItem: (DeleteShopifyRefundLineItemResult | null);

  createShopifyScriptTag: (InternalCreateShopifyScriptTagResult | null);

  updateShopifyScriptTag: (InternalUpdateShopifyScriptTagResult | null);

  deleteShopifyScriptTag: (InternalDeleteShopifyScriptTagResult | null);

  deleteManyShopifyScriptTag: (InternalDeleteManyShopifyScriptTagResult | null);

  bulkCreateShopifyScriptTags: (InternalBulkCreateShopifyScriptTagsResult | null);

  triggerCreateShopifyScriptTag: (CreateShopifyScriptTagResult | null);

  triggerUpdateShopifyScriptTag: (UpdateShopifyScriptTagResult | null);

  triggerDeleteShopifyScriptTag: (DeleteShopifyScriptTagResult | null);

  createShopifyShop: (InternalCreateShopifyShopResult | null);

  updateShopifyShop: (InternalUpdateShopifyShopResult | null);

  deleteShopifyShop: (InternalDeleteShopifyShopResult | null);

  deleteManyShopifyShop: (InternalDeleteManyShopifyShopResult | null);

  bulkCreateShopifyShops: (InternalBulkCreateShopifyShopsResult | null);

  triggerUpdateShopifyShop: (UpdateShopifyShopResult | null);

  triggerInstallShopifyShop: (InstallShopifyShopResult | null);

  triggerUninstallShopifyShop: (UninstallShopifyShopResult | null);

  triggerReinstallShopifyShop: (ReinstallShopifyShopResult | null);

  createShopifySync: (InternalCreateShopifySyncResult | null);

  updateShopifySync: (InternalUpdateShopifySyncResult | null);

  deleteShopifySync: (InternalDeleteShopifySyncResult | null);

  deleteManyShopifySync: (InternalDeleteManyShopifySyncResult | null);

  bulkCreateShopifySyncs: (InternalBulkCreateShopifySyncsResult | null);

  triggerRunShopifySync: (RunShopifySyncResult | null);

  triggerCompleteShopifySync: (CompleteShopifySyncResult | null);

  triggerErrorShopifySync: (ErrorShopifySyncResult | null);

  triggerAbortShopifySync: (AbortShopifySyncResult | null);

  createSession: (InternalCreateSessionResult | null);

  updateSession: (InternalUpdateSessionResult | null);

  deleteSession: (InternalDeleteSessionResult | null);

  deleteManySession: (InternalDeleteManySessionResult | null);

  bulkCreateSessions: (InternalBulkCreateSessionsResult | null);

  createShopifyShippingLine: (InternalCreateShopifyShippingLineResult | null);

  updateShopifyShippingLine: (InternalUpdateShopifyShippingLineResult | null);

  deleteShopifyShippingLine: (InternalDeleteShopifyShippingLineResult | null);

  deleteManyShopifyShippingLine: (InternalDeleteManyShopifyShippingLineResult | null);

  bulkCreateShopifyShippingLines: (InternalBulkCreateShopifyShippingLinesResult | null);

  triggerCreateShopifyShippingLine: (CreateShopifyShippingLineResult | null);

  triggerUpdateShopifyShippingLine: (UpdateShopifyShippingLineResult | null);

  triggerDeleteShopifyShippingLine: (DeleteShopifyShippingLineResult | null);

  createShopifyTenderTransaction: (InternalCreateShopifyTenderTransactionResult | null);

  updateShopifyTenderTransaction: (InternalUpdateShopifyTenderTransactionResult | null);

  deleteShopifyTenderTransaction: (InternalDeleteShopifyTenderTransactionResult | null);

  deleteManyShopifyTenderTransaction: (InternalDeleteManyShopifyTenderTransactionResult | null);

  bulkCreateShopifyTenderTransactions: (InternalBulkCreateShopifyTenderTransactionsResult | null);

  triggerCreateShopifyTenderTransaction: (CreateShopifyTenderTransactionResult | null);

  triggerUpdateShopifyTenderTransaction: (UpdateShopifyTenderTransactionResult | null);

  triggerDeleteShopifyTenderTransaction: (DeleteShopifyTenderTransactionResult | null);

  createShopifySmartCollect: (InternalCreateShopifySmartCollectResult | null);

  updateShopifySmartCollect: (InternalUpdateShopifySmartCollectResult | null);

  deleteShopifySmartCollect: (InternalDeleteShopifySmartCollectResult | null);

  deleteManyShopifySmartCollect: (InternalDeleteManyShopifySmartCollectResult | null);

  bulkCreateShopifySmartCollects: (InternalBulkCreateShopifySmartCollectsResult | null);

  triggerCreateShopifySmartCollect: (CreateShopifySmartCollectResult | null);

  triggerUpdateShopifySmartCollect: (UpdateShopifySmartCollectResult | null);

  triggerDeleteShopifySmartCollect: (DeleteShopifySmartCollectResult | null);

  triggerScheduledShopifySync: (ScheduledShopifySyncResult | null);

  triggerSmartCollect: (SmartCollectResult | null);

  triggerSetTotalZero: (SetTotalZeroResult | null);

  triggerTest2: (Test2Result | null);

  triggerTest3: (Test3Result | null);

  triggerFetchEmails: (FetchEmailsResult | null);

  triggerSmartCollecter: (SmartCollecterResult | null);

  triggerFetchUsers: (FetchUsersResult | null);

  triggerTest: (TestResult | null);
};



export type AvailableInternalMutationsSelection = {

  __typename?: boolean | null | undefined;

  startTransaction?: boolean | null | undefined;

  commitTransaction?: boolean | null | undefined;

  rollbackTransaction?: boolean | null | undefined;

  /** Acquire a backend lock, returning only once the lock has been acquired */
  acquireLock?: AvailableLockOperationResultSelection;

  createUser?: AvailableInternalCreateUserResultSelection;

  updateUser?: AvailableInternalUpdateUserResultSelection;

  deleteUser?: AvailableInternalDeleteUserResultSelection;

  deleteManyUser?: AvailableInternalDeleteManyUserResultSelection;

  bulkCreateUsers?: AvailableInternalBulkCreateUsersResultSelection;

  triggerSignUpUser?: AvailableSignUpUserResultSelection;

  triggerSignInUser?: AvailableSignInUserResultSelection;

  triggerSignOutUser?: AvailableSignOutUserResultSelection;

  triggerUpdateUser?: AvailableUpdateUserResultSelection;

  triggerDeleteUser?: AvailableDeleteUserResultSelection;

  triggerSendVerifyEmailUser?: AvailableSendVerifyEmailUserResultSelection;

  triggerVerifyEmailUser?: AvailableVerifyEmailUserResultSelection;

  triggerSendResetPasswordUser?: AvailableSendResetPasswordUserResultSelection;

  triggerResetPasswordUser?: AvailableResetPasswordUserResultSelection;

  triggerChangePasswordUser?: AvailableChangePasswordUserResultSelection;

  createShopifyApp?: AvailableInternalCreateShopifyAppResultSelection;

  updateShopifyApp?: AvailableInternalUpdateShopifyAppResultSelection;

  deleteShopifyApp?: AvailableInternalDeleteShopifyAppResultSelection;

  deleteManyShopifyApp?: AvailableInternalDeleteManyShopifyAppResultSelection;

  bulkCreateShopifyApps?: AvailableInternalBulkCreateShopifyAppsResultSelection;

  triggerCreateShopifyApp?: AvailableCreateShopifyAppResultSelection;

  triggerUpdateShopifyApp?: AvailableUpdateShopifyAppResultSelection;

  triggerDeleteShopifyApp?: AvailableDeleteShopifyAppResultSelection;

  createShopifyAppInstallation?: AvailableInternalCreateShopifyAppInstallationResultSelection;

  updateShopifyAppInstallation?: AvailableInternalUpdateShopifyAppInstallationResultSelection;

  deleteShopifyAppInstallation?: AvailableInternalDeleteShopifyAppInstallationResultSelection;

  deleteManyShopifyAppInstallation?: AvailableInternalDeleteManyShopifyAppInstallationResultSelection;

  bulkCreateShopifyAppInstallations?: AvailableInternalBulkCreateShopifyAppInstallationsResultSelection;

  triggerCreateShopifyAppInstallation?: AvailableCreateShopifyAppInstallationResultSelection;

  triggerUpdateShopifyAppInstallation?: AvailableUpdateShopifyAppInstallationResultSelection;

  triggerDeleteShopifyAppInstallation?: AvailableDeleteShopifyAppInstallationResultSelection;

  createShopifyBalanceTransaction?: AvailableInternalCreateShopifyBalanceTransactionResultSelection;

  updateShopifyBalanceTransaction?: AvailableInternalUpdateShopifyBalanceTransactionResultSelection;

  deleteShopifyBalanceTransaction?: AvailableInternalDeleteShopifyBalanceTransactionResultSelection;

  deleteManyShopifyBalanceTransaction?: AvailableInternalDeleteManyShopifyBalanceTransactionResultSelection;

  bulkCreateShopifyBalanceTransactions?: AvailableInternalBulkCreateShopifyBalanceTransactionsResultSelection;

  triggerCreateShopifyBalanceTransaction?: AvailableCreateShopifyBalanceTransactionResultSelection;

  triggerUpdateShopifyBalanceTransaction?: AvailableUpdateShopifyBalanceTransactionResultSelection;

  triggerDeleteShopifyBalanceTransaction?: AvailableDeleteShopifyBalanceTransactionResultSelection;

  createShopifyBulkOperation?: AvailableInternalCreateShopifyBulkOperationResultSelection;

  updateShopifyBulkOperation?: AvailableInternalUpdateShopifyBulkOperationResultSelection;

  deleteShopifyBulkOperation?: AvailableInternalDeleteShopifyBulkOperationResultSelection;

  deleteManyShopifyBulkOperation?: AvailableInternalDeleteManyShopifyBulkOperationResultSelection;

  bulkCreateShopifyBulkOperations?: AvailableInternalBulkCreateShopifyBulkOperationsResultSelection;

  triggerCreateShopifyBulkOperation?: AvailableCreateShopifyBulkOperationResultSelection;

  triggerUpdateShopifyBulkOperation?: AvailableUpdateShopifyBulkOperationResultSelection;

  triggerCompleteShopifyBulkOperation?: AvailableCompleteShopifyBulkOperationResultSelection;

  triggerCancelShopifyBulkOperation?: AvailableCancelShopifyBulkOperationResultSelection;

  triggerFailShopifyBulkOperation?: AvailableFailShopifyBulkOperationResultSelection;

  triggerExpireShopifyBulkOperation?: AvailableExpireShopifyBulkOperationResultSelection;

  createShopifyCheckout?: AvailableInternalCreateShopifyCheckoutResultSelection;

  updateShopifyCheckout?: AvailableInternalUpdateShopifyCheckoutResultSelection;

  deleteShopifyCheckout?: AvailableInternalDeleteShopifyCheckoutResultSelection;

  deleteManyShopifyCheckout?: AvailableInternalDeleteManyShopifyCheckoutResultSelection;

  bulkCreateShopifyCheckouts?: AvailableInternalBulkCreateShopifyCheckoutsResultSelection;

  triggerCreateShopifyCheckout?: AvailableCreateShopifyCheckoutResultSelection;

  triggerUpdateShopifyCheckout?: AvailableUpdateShopifyCheckoutResultSelection;

  triggerDeleteShopifyCheckout?: AvailableDeleteShopifyCheckoutResultSelection;

  createShopifyCheckoutLineItem?: AvailableInternalCreateShopifyCheckoutLineItemResultSelection;

  updateShopifyCheckoutLineItem?: AvailableInternalUpdateShopifyCheckoutLineItemResultSelection;

  deleteShopifyCheckoutLineItem?: AvailableInternalDeleteShopifyCheckoutLineItemResultSelection;

  deleteManyShopifyCheckoutLineItem?: AvailableInternalDeleteManyShopifyCheckoutLineItemResultSelection;

  bulkCreateShopifyCheckoutLineItems?: AvailableInternalBulkCreateShopifyCheckoutLineItemsResultSelection;

  triggerCreateShopifyCheckoutLineItem?: AvailableCreateShopifyCheckoutLineItemResultSelection;

  triggerUpdateShopifyCheckoutLineItem?: AvailableUpdateShopifyCheckoutLineItemResultSelection;

  triggerDeleteShopifyCheckoutLineItem?: AvailableDeleteShopifyCheckoutLineItemResultSelection;

  createShopifyCollect?: AvailableInternalCreateShopifyCollectResultSelection;

  updateShopifyCollect?: AvailableInternalUpdateShopifyCollectResultSelection;

  deleteShopifyCollect?: AvailableInternalDeleteShopifyCollectResultSelection;

  deleteManyShopifyCollect?: AvailableInternalDeleteManyShopifyCollectResultSelection;

  bulkCreateShopifyCollects?: AvailableInternalBulkCreateShopifyCollectsResultSelection;

  triggerCreateShopifyCollect?: AvailableCreateShopifyCollectResultSelection;

  triggerUpdateShopifyCollect?: AvailableUpdateShopifyCollectResultSelection;

  triggerDeleteShopifyCollect?: AvailableDeleteShopifyCollectResultSelection;

  createShopifyCollection?: AvailableInternalCreateShopifyCollectionResultSelection;

  updateShopifyCollection?: AvailableInternalUpdateShopifyCollectionResultSelection;

  deleteShopifyCollection?: AvailableInternalDeleteShopifyCollectionResultSelection;

  deleteManyShopifyCollection?: AvailableInternalDeleteManyShopifyCollectionResultSelection;

  bulkCreateShopifyCollections?: AvailableInternalBulkCreateShopifyCollectionsResultSelection;

  triggerCreateShopifyCollection?: AvailableCreateShopifyCollectionResultSelection;

  triggerUpdateShopifyCollection?: AvailableUpdateShopifyCollectionResultSelection;

  triggerDeleteShopifyCollection?: AvailableDeleteShopifyCollectionResultSelection;

  triggerSmartCollectorShopifyCollection?: AvailableSmartCollectorShopifyCollectionResultSelection;

  createShopifyCompany?: AvailableInternalCreateShopifyCompanyResultSelection;

  updateShopifyCompany?: AvailableInternalUpdateShopifyCompanyResultSelection;

  deleteShopifyCompany?: AvailableInternalDeleteShopifyCompanyResultSelection;

  deleteManyShopifyCompany?: AvailableInternalDeleteManyShopifyCompanyResultSelection;

  bulkCreateShopifyCompanies?: AvailableInternalBulkCreateShopifyCompaniesResultSelection;

  triggerCreateShopifyCompany?: AvailableCreateShopifyCompanyResultSelection;

  triggerUpdateShopifyCompany?: AvailableUpdateShopifyCompanyResultSelection;

  triggerDeleteShopifyCompany?: AvailableDeleteShopifyCompanyResultSelection;

  createShopifyDiscount?: AvailableInternalCreateShopifyDiscountResultSelection;

  updateShopifyDiscount?: AvailableInternalUpdateShopifyDiscountResultSelection;

  deleteShopifyDiscount?: AvailableInternalDeleteShopifyDiscountResultSelection;

  deleteManyShopifyDiscount?: AvailableInternalDeleteManyShopifyDiscountResultSelection;

  bulkCreateShopifyDiscounts?: AvailableInternalBulkCreateShopifyDiscountsResultSelection;

  triggerCreateShopifyDiscount?: AvailableCreateShopifyDiscountResultSelection;

  triggerUpdateShopifyDiscount?: AvailableUpdateShopifyDiscountResultSelection;

  triggerDeleteShopifyDiscount?: AvailableDeleteShopifyDiscountResultSelection;

  createShopifyDiscountCode?: AvailableInternalCreateShopifyDiscountCodeResultSelection;

  updateShopifyDiscountCode?: AvailableInternalUpdateShopifyDiscountCodeResultSelection;

  deleteShopifyDiscountCode?: AvailableInternalDeleteShopifyDiscountCodeResultSelection;

  deleteManyShopifyDiscountCode?: AvailableInternalDeleteManyShopifyDiscountCodeResultSelection;

  bulkCreateShopifyDiscountCodes?: AvailableInternalBulkCreateShopifyDiscountCodesResultSelection;

  triggerCreateShopifyDiscountCode?: AvailableCreateShopifyDiscountCodeResultSelection;

  triggerUpdateShopifyDiscountCode?: AvailableUpdateShopifyDiscountCodeResultSelection;

  triggerDeleteShopifyDiscountCode?: AvailableDeleteShopifyDiscountCodeResultSelection;

  createShopifyDispute?: AvailableInternalCreateShopifyDisputeResultSelection;

  updateShopifyDispute?: AvailableInternalUpdateShopifyDisputeResultSelection;

  deleteShopifyDispute?: AvailableInternalDeleteShopifyDisputeResultSelection;

  deleteManyShopifyDispute?: AvailableInternalDeleteManyShopifyDisputeResultSelection;

  bulkCreateShopifyDisputes?: AvailableInternalBulkCreateShopifyDisputesResultSelection;

  triggerCreateShopifyDispute?: AvailableCreateShopifyDisputeResultSelection;

  triggerUpdateShopifyDispute?: AvailableUpdateShopifyDisputeResultSelection;

  triggerDeleteShopifyDispute?: AvailableDeleteShopifyDisputeResultSelection;

  createShopifyDisputeEvidence?: AvailableInternalCreateShopifyDisputeEvidenceResultSelection;

  updateShopifyDisputeEvidence?: AvailableInternalUpdateShopifyDisputeEvidenceResultSelection;

  deleteShopifyDisputeEvidence?: AvailableInternalDeleteShopifyDisputeEvidenceResultSelection;

  deleteManyShopifyDisputeEvidence?: AvailableInternalDeleteManyShopifyDisputeEvidenceResultSelection;

  bulkCreateShopifyDisputeEvidences?: AvailableInternalBulkCreateShopifyDisputeEvidencesResultSelection;

  triggerCreateShopifyDisputeEvidence?: AvailableCreateShopifyDisputeEvidenceResultSelection;

  triggerUpdateShopifyDisputeEvidence?: AvailableUpdateShopifyDisputeEvidenceResultSelection;

  triggerDeleteShopifyDisputeEvidence?: AvailableDeleteShopifyDisputeEvidenceResultSelection;

  createShopifyDomain?: AvailableInternalCreateShopifyDomainResultSelection;

  updateShopifyDomain?: AvailableInternalUpdateShopifyDomainResultSelection;

  deleteShopifyDomain?: AvailableInternalDeleteShopifyDomainResultSelection;

  deleteManyShopifyDomain?: AvailableInternalDeleteManyShopifyDomainResultSelection;

  bulkCreateShopifyDomains?: AvailableInternalBulkCreateShopifyDomainsResultSelection;

  triggerCreateShopifyDomain?: AvailableCreateShopifyDomainResultSelection;

  triggerUpdateShopifyDomain?: AvailableUpdateShopifyDomainResultSelection;

  triggerDeleteShopifyDomain?: AvailableDeleteShopifyDomainResultSelection;

  createShopifyFulfillment?: AvailableInternalCreateShopifyFulfillmentResultSelection;

  updateShopifyFulfillment?: AvailableInternalUpdateShopifyFulfillmentResultSelection;

  deleteShopifyFulfillment?: AvailableInternalDeleteShopifyFulfillmentResultSelection;

  deleteManyShopifyFulfillment?: AvailableInternalDeleteManyShopifyFulfillmentResultSelection;

  bulkCreateShopifyFulfillments?: AvailableInternalBulkCreateShopifyFulfillmentsResultSelection;

  triggerCreateShopifyFulfillment?: AvailableCreateShopifyFulfillmentResultSelection;

  triggerUpdateShopifyFulfillment?: AvailableUpdateShopifyFulfillmentResultSelection;

  triggerDeleteShopifyFulfillment?: AvailableDeleteShopifyFulfillmentResultSelection;

  createShopifyFulfillmentLineItem?: AvailableInternalCreateShopifyFulfillmentLineItemResultSelection;

  updateShopifyFulfillmentLineItem?: AvailableInternalUpdateShopifyFulfillmentLineItemResultSelection;

  deleteShopifyFulfillmentLineItem?: AvailableInternalDeleteShopifyFulfillmentLineItemResultSelection;

  deleteManyShopifyFulfillmentLineItem?: AvailableInternalDeleteManyShopifyFulfillmentLineItemResultSelection;

  bulkCreateShopifyFulfillmentLineItems?: AvailableInternalBulkCreateShopifyFulfillmentLineItemsResultSelection;

  triggerCreateShopifyFulfillmentLineItem?: AvailableCreateShopifyFulfillmentLineItemResultSelection;

  triggerUpdateShopifyFulfillmentLineItem?: AvailableUpdateShopifyFulfillmentLineItemResultSelection;

  triggerDeleteShopifyFulfillmentLineItem?: AvailableDeleteShopifyFulfillmentLineItemResultSelection;

  createShopifyFulfillmentOrder?: AvailableInternalCreateShopifyFulfillmentOrderResultSelection;

  updateShopifyFulfillmentOrder?: AvailableInternalUpdateShopifyFulfillmentOrderResultSelection;

  deleteShopifyFulfillmentOrder?: AvailableInternalDeleteShopifyFulfillmentOrderResultSelection;

  deleteManyShopifyFulfillmentOrder?: AvailableInternalDeleteManyShopifyFulfillmentOrderResultSelection;

  bulkCreateShopifyFulfillmentOrders?: AvailableInternalBulkCreateShopifyFulfillmentOrdersResultSelection;

  triggerCreateShopifyFulfillmentOrder?: AvailableCreateShopifyFulfillmentOrderResultSelection;

  triggerUpdateShopifyFulfillmentOrder?: AvailableUpdateShopifyFulfillmentOrderResultSelection;

  triggerDeleteShopifyFulfillmentOrder?: AvailableDeleteShopifyFulfillmentOrderResultSelection;

  createShopifyFulfillmentOrderLineItem?: AvailableInternalCreateShopifyFulfillmentOrderLineItemResultSelection;

  updateShopifyFulfillmentOrderLineItem?: AvailableInternalUpdateShopifyFulfillmentOrderLineItemResultSelection;

  deleteShopifyFulfillmentOrderLineItem?: AvailableInternalDeleteShopifyFulfillmentOrderLineItemResultSelection;

  deleteManyShopifyFulfillmentOrderLineItem?: AvailableInternalDeleteManyShopifyFulfillmentOrderLineItemResultSelection;

  bulkCreateShopifyFulfillmentOrderLineItems?: AvailableInternalBulkCreateShopifyFulfillmentOrderLineItemsResultSelection;

  triggerCreateShopifyFulfillmentOrderLineItem?: AvailableCreateShopifyFulfillmentOrderLineItemResultSelection;

  triggerUpdateShopifyFulfillmentOrderLineItem?: AvailableUpdateShopifyFulfillmentOrderLineItemResultSelection;

  triggerDeleteShopifyFulfillmentOrderLineItem?: AvailableDeleteShopifyFulfillmentOrderLineItemResultSelection;

  createShopifyFulfillmentService?: AvailableInternalCreateShopifyFulfillmentServiceResultSelection;

  updateShopifyFulfillmentService?: AvailableInternalUpdateShopifyFulfillmentServiceResultSelection;

  deleteShopifyFulfillmentService?: AvailableInternalDeleteShopifyFulfillmentServiceResultSelection;

  deleteManyShopifyFulfillmentService?: AvailableInternalDeleteManyShopifyFulfillmentServiceResultSelection;

  bulkCreateShopifyFulfillmentServices?: AvailableInternalBulkCreateShopifyFulfillmentServicesResultSelection;

  triggerCreateShopifyFulfillmentService?: AvailableCreateShopifyFulfillmentServiceResultSelection;

  triggerUpdateShopifyFulfillmentService?: AvailableUpdateShopifyFulfillmentServiceResultSelection;

  triggerDeleteShopifyFulfillmentService?: AvailableDeleteShopifyFulfillmentServiceResultSelection;

  createShopifyGdprRequest?: AvailableInternalCreateShopifyGdprRequestResultSelection;

  updateShopifyGdprRequest?: AvailableInternalUpdateShopifyGdprRequestResultSelection;

  deleteShopifyGdprRequest?: AvailableInternalDeleteShopifyGdprRequestResultSelection;

  deleteManyShopifyGdprRequest?: AvailableInternalDeleteManyShopifyGdprRequestResultSelection;

  bulkCreateShopifyGdprRequests?: AvailableInternalBulkCreateShopifyGdprRequestsResultSelection;

  triggerCreateShopifyGdprRequest?: AvailableCreateShopifyGdprRequestResultSelection;

  triggerUpdateShopifyGdprRequest?: AvailableUpdateShopifyGdprRequestResultSelection;

  createShopifyMarket?: AvailableInternalCreateShopifyMarketResultSelection;

  updateShopifyMarket?: AvailableInternalUpdateShopifyMarketResultSelection;

  deleteShopifyMarket?: AvailableInternalDeleteShopifyMarketResultSelection;

  deleteManyShopifyMarket?: AvailableInternalDeleteManyShopifyMarketResultSelection;

  bulkCreateShopifyMarkets?: AvailableInternalBulkCreateShopifyMarketsResultSelection;

  triggerCreateShopifyMarket?: AvailableCreateShopifyMarketResultSelection;

  triggerUpdateShopifyMarket?: AvailableUpdateShopifyMarketResultSelection;

  triggerDeleteShopifyMarket?: AvailableDeleteShopifyMarketResultSelection;

  createShopifyMarketRegion?: AvailableInternalCreateShopifyMarketRegionResultSelection;

  updateShopifyMarketRegion?: AvailableInternalUpdateShopifyMarketRegionResultSelection;

  deleteShopifyMarketRegion?: AvailableInternalDeleteShopifyMarketRegionResultSelection;

  deleteManyShopifyMarketRegion?: AvailableInternalDeleteManyShopifyMarketRegionResultSelection;

  bulkCreateShopifyMarketRegions?: AvailableInternalBulkCreateShopifyMarketRegionsResultSelection;

  triggerCreateShopifyMarketRegion?: AvailableCreateShopifyMarketRegionResultSelection;

  triggerUpdateShopifyMarketRegion?: AvailableUpdateShopifyMarketRegionResultSelection;

  triggerDeleteShopifyMarketRegion?: AvailableDeleteShopifyMarketRegionResultSelection;

  createShopifyMarketWebPresence?: AvailableInternalCreateShopifyMarketWebPresenceResultSelection;

  updateShopifyMarketWebPresence?: AvailableInternalUpdateShopifyMarketWebPresenceResultSelection;

  deleteShopifyMarketWebPresence?: AvailableInternalDeleteShopifyMarketWebPresenceResultSelection;

  deleteManyShopifyMarketWebPresence?: AvailableInternalDeleteManyShopifyMarketWebPresenceResultSelection;

  bulkCreateShopifyMarketWebPresences?: AvailableInternalBulkCreateShopifyMarketWebPresencesResultSelection;

  triggerCreateShopifyMarketWebPresence?: AvailableCreateShopifyMarketWebPresenceResultSelection;

  triggerUpdateShopifyMarketWebPresence?: AvailableUpdateShopifyMarketWebPresenceResultSelection;

  triggerDeleteShopifyMarketWebPresence?: AvailableDeleteShopifyMarketWebPresenceResultSelection;

  createShopifyOrder?: AvailableInternalCreateShopifyOrderResultSelection;

  updateShopifyOrder?: AvailableInternalUpdateShopifyOrderResultSelection;

  deleteShopifyOrder?: AvailableInternalDeleteShopifyOrderResultSelection;

  deleteManyShopifyOrder?: AvailableInternalDeleteManyShopifyOrderResultSelection;

  bulkCreateShopifyOrders?: AvailableInternalBulkCreateShopifyOrdersResultSelection;

  triggerCreateShopifyOrder?: AvailableCreateShopifyOrderResultSelection;

  triggerUpdateShopifyOrder?: AvailableUpdateShopifyOrderResultSelection;

  triggerDeleteShopifyOrder?: AvailableDeleteShopifyOrderResultSelection;

  createShopifyOrderAdjustment?: AvailableInternalCreateShopifyOrderAdjustmentResultSelection;

  updateShopifyOrderAdjustment?: AvailableInternalUpdateShopifyOrderAdjustmentResultSelection;

  deleteShopifyOrderAdjustment?: AvailableInternalDeleteShopifyOrderAdjustmentResultSelection;

  deleteManyShopifyOrderAdjustment?: AvailableInternalDeleteManyShopifyOrderAdjustmentResultSelection;

  bulkCreateShopifyOrderAdjustments?: AvailableInternalBulkCreateShopifyOrderAdjustmentsResultSelection;

  triggerCreateShopifyOrderAdjustment?: AvailableCreateShopifyOrderAdjustmentResultSelection;

  triggerUpdateShopifyOrderAdjustment?: AvailableUpdateShopifyOrderAdjustmentResultSelection;

  triggerDeleteShopifyOrderAdjustment?: AvailableDeleteShopifyOrderAdjustmentResultSelection;

  createShopifyOrderLineItem?: AvailableInternalCreateShopifyOrderLineItemResultSelection;

  updateShopifyOrderLineItem?: AvailableInternalUpdateShopifyOrderLineItemResultSelection;

  deleteShopifyOrderLineItem?: AvailableInternalDeleteShopifyOrderLineItemResultSelection;

  deleteManyShopifyOrderLineItem?: AvailableInternalDeleteManyShopifyOrderLineItemResultSelection;

  bulkCreateShopifyOrderLineItems?: AvailableInternalBulkCreateShopifyOrderLineItemsResultSelection;

  triggerCreateShopifyOrderLineItem?: AvailableCreateShopifyOrderLineItemResultSelection;

  triggerUpdateShopifyOrderLineItem?: AvailableUpdateShopifyOrderLineItemResultSelection;

  triggerDeleteShopifyOrderLineItem?: AvailableDeleteShopifyOrderLineItemResultSelection;

  createShopifyPayout?: AvailableInternalCreateShopifyPayoutResultSelection;

  updateShopifyPayout?: AvailableInternalUpdateShopifyPayoutResultSelection;

  deleteShopifyPayout?: AvailableInternalDeleteShopifyPayoutResultSelection;

  deleteManyShopifyPayout?: AvailableInternalDeleteManyShopifyPayoutResultSelection;

  bulkCreateShopifyPayouts?: AvailableInternalBulkCreateShopifyPayoutsResultSelection;

  triggerCreateShopifyPayout?: AvailableCreateShopifyPayoutResultSelection;

  triggerUpdateShopifyPayout?: AvailableUpdateShopifyPayoutResultSelection;

  triggerDeleteShopifyPayout?: AvailableDeleteShopifyPayoutResultSelection;

  createShopifyPriceRule?: AvailableInternalCreateShopifyPriceRuleResultSelection;

  updateShopifyPriceRule?: AvailableInternalUpdateShopifyPriceRuleResultSelection;

  deleteShopifyPriceRule?: AvailableInternalDeleteShopifyPriceRuleResultSelection;

  deleteManyShopifyPriceRule?: AvailableInternalDeleteManyShopifyPriceRuleResultSelection;

  bulkCreateShopifyPriceRules?: AvailableInternalBulkCreateShopifyPriceRulesResultSelection;

  triggerCreateShopifyPriceRule?: AvailableCreateShopifyPriceRuleResultSelection;

  triggerUpdateShopifyPriceRule?: AvailableUpdateShopifyPriceRuleResultSelection;

  triggerDeleteShopifyPriceRule?: AvailableDeleteShopifyPriceRuleResultSelection;

  createShopifyProduct?: AvailableInternalCreateShopifyProductResultSelection;

  updateShopifyProduct?: AvailableInternalUpdateShopifyProductResultSelection;

  deleteShopifyProduct?: AvailableInternalDeleteShopifyProductResultSelection;

  deleteManyShopifyProduct?: AvailableInternalDeleteManyShopifyProductResultSelection;

  bulkCreateShopifyProducts?: AvailableInternalBulkCreateShopifyProductsResultSelection;

  triggerCreateShopifyProduct?: AvailableCreateShopifyProductResultSelection;

  triggerUpdateShopifyProduct?: AvailableUpdateShopifyProductResultSelection;

  triggerDeleteShopifyProduct?: AvailableDeleteShopifyProductResultSelection;

  createShopifyRefund?: AvailableInternalCreateShopifyRefundResultSelection;

  updateShopifyRefund?: AvailableInternalUpdateShopifyRefundResultSelection;

  deleteShopifyRefund?: AvailableInternalDeleteShopifyRefundResultSelection;

  deleteManyShopifyRefund?: AvailableInternalDeleteManyShopifyRefundResultSelection;

  bulkCreateShopifyRefunds?: AvailableInternalBulkCreateShopifyRefundsResultSelection;

  triggerCreateShopifyRefund?: AvailableCreateShopifyRefundResultSelection;

  triggerUpdateShopifyRefund?: AvailableUpdateShopifyRefundResultSelection;

  triggerDeleteShopifyRefund?: AvailableDeleteShopifyRefundResultSelection;

  createShopifyRefundDuty?: AvailableInternalCreateShopifyRefundDutyResultSelection;

  updateShopifyRefundDuty?: AvailableInternalUpdateShopifyRefundDutyResultSelection;

  deleteShopifyRefundDuty?: AvailableInternalDeleteShopifyRefundDutyResultSelection;

  deleteManyShopifyRefundDuty?: AvailableInternalDeleteManyShopifyRefundDutyResultSelection;

  bulkCreateShopifyRefundDuties?: AvailableInternalBulkCreateShopifyRefundDutiesResultSelection;

  triggerCreateShopifyRefundDuty?: AvailableCreateShopifyRefundDutyResultSelection;

  triggerUpdateShopifyRefundDuty?: AvailableUpdateShopifyRefundDutyResultSelection;

  triggerDeleteShopifyRefundDuty?: AvailableDeleteShopifyRefundDutyResultSelection;

  createShopifyRefundLineItem?: AvailableInternalCreateShopifyRefundLineItemResultSelection;

  updateShopifyRefundLineItem?: AvailableInternalUpdateShopifyRefundLineItemResultSelection;

  deleteShopifyRefundLineItem?: AvailableInternalDeleteShopifyRefundLineItemResultSelection;

  deleteManyShopifyRefundLineItem?: AvailableInternalDeleteManyShopifyRefundLineItemResultSelection;

  bulkCreateShopifyRefundLineItems?: AvailableInternalBulkCreateShopifyRefundLineItemsResultSelection;

  triggerCreateShopifyRefundLineItem?: AvailableCreateShopifyRefundLineItemResultSelection;

  triggerUpdateShopifyRefundLineItem?: AvailableUpdateShopifyRefundLineItemResultSelection;

  triggerDeleteShopifyRefundLineItem?: AvailableDeleteShopifyRefundLineItemResultSelection;

  createShopifyScriptTag?: AvailableInternalCreateShopifyScriptTagResultSelection;

  updateShopifyScriptTag?: AvailableInternalUpdateShopifyScriptTagResultSelection;

  deleteShopifyScriptTag?: AvailableInternalDeleteShopifyScriptTagResultSelection;

  deleteManyShopifyScriptTag?: AvailableInternalDeleteManyShopifyScriptTagResultSelection;

  bulkCreateShopifyScriptTags?: AvailableInternalBulkCreateShopifyScriptTagsResultSelection;

  triggerCreateShopifyScriptTag?: AvailableCreateShopifyScriptTagResultSelection;

  triggerUpdateShopifyScriptTag?: AvailableUpdateShopifyScriptTagResultSelection;

  triggerDeleteShopifyScriptTag?: AvailableDeleteShopifyScriptTagResultSelection;

  createShopifyShop?: AvailableInternalCreateShopifyShopResultSelection;

  updateShopifyShop?: AvailableInternalUpdateShopifyShopResultSelection;

  deleteShopifyShop?: AvailableInternalDeleteShopifyShopResultSelection;

  deleteManyShopifyShop?: AvailableInternalDeleteManyShopifyShopResultSelection;

  bulkCreateShopifyShops?: AvailableInternalBulkCreateShopifyShopsResultSelection;

  triggerUpdateShopifyShop?: AvailableUpdateShopifyShopResultSelection;

  triggerInstallShopifyShop?: AvailableInstallShopifyShopResultSelection;

  triggerUninstallShopifyShop?: AvailableUninstallShopifyShopResultSelection;

  triggerReinstallShopifyShop?: AvailableReinstallShopifyShopResultSelection;

  createShopifySync?: AvailableInternalCreateShopifySyncResultSelection;

  updateShopifySync?: AvailableInternalUpdateShopifySyncResultSelection;

  deleteShopifySync?: AvailableInternalDeleteShopifySyncResultSelection;

  deleteManyShopifySync?: AvailableInternalDeleteManyShopifySyncResultSelection;

  bulkCreateShopifySyncs?: AvailableInternalBulkCreateShopifySyncsResultSelection;

  triggerRunShopifySync?: AvailableRunShopifySyncResultSelection;

  triggerCompleteShopifySync?: AvailableCompleteShopifySyncResultSelection;

  triggerErrorShopifySync?: AvailableErrorShopifySyncResultSelection;

  triggerAbortShopifySync?: AvailableAbortShopifySyncResultSelection;

  createSession?: AvailableInternalCreateSessionResultSelection;

  updateSession?: AvailableInternalUpdateSessionResultSelection;

  deleteSession?: AvailableInternalDeleteSessionResultSelection;

  deleteManySession?: AvailableInternalDeleteManySessionResultSelection;

  bulkCreateSessions?: AvailableInternalBulkCreateSessionsResultSelection;

  createShopifyShippingLine?: AvailableInternalCreateShopifyShippingLineResultSelection;

  updateShopifyShippingLine?: AvailableInternalUpdateShopifyShippingLineResultSelection;

  deleteShopifyShippingLine?: AvailableInternalDeleteShopifyShippingLineResultSelection;

  deleteManyShopifyShippingLine?: AvailableInternalDeleteManyShopifyShippingLineResultSelection;

  bulkCreateShopifyShippingLines?: AvailableInternalBulkCreateShopifyShippingLinesResultSelection;

  triggerCreateShopifyShippingLine?: AvailableCreateShopifyShippingLineResultSelection;

  triggerUpdateShopifyShippingLine?: AvailableUpdateShopifyShippingLineResultSelection;

  triggerDeleteShopifyShippingLine?: AvailableDeleteShopifyShippingLineResultSelection;

  createShopifyTenderTransaction?: AvailableInternalCreateShopifyTenderTransactionResultSelection;

  updateShopifyTenderTransaction?: AvailableInternalUpdateShopifyTenderTransactionResultSelection;

  deleteShopifyTenderTransaction?: AvailableInternalDeleteShopifyTenderTransactionResultSelection;

  deleteManyShopifyTenderTransaction?: AvailableInternalDeleteManyShopifyTenderTransactionResultSelection;

  bulkCreateShopifyTenderTransactions?: AvailableInternalBulkCreateShopifyTenderTransactionsResultSelection;

  triggerCreateShopifyTenderTransaction?: AvailableCreateShopifyTenderTransactionResultSelection;

  triggerUpdateShopifyTenderTransaction?: AvailableUpdateShopifyTenderTransactionResultSelection;

  triggerDeleteShopifyTenderTransaction?: AvailableDeleteShopifyTenderTransactionResultSelection;

  createShopifySmartCollect?: AvailableInternalCreateShopifySmartCollectResultSelection;

  updateShopifySmartCollect?: AvailableInternalUpdateShopifySmartCollectResultSelection;

  deleteShopifySmartCollect?: AvailableInternalDeleteShopifySmartCollectResultSelection;

  deleteManyShopifySmartCollect?: AvailableInternalDeleteManyShopifySmartCollectResultSelection;

  bulkCreateShopifySmartCollects?: AvailableInternalBulkCreateShopifySmartCollectsResultSelection;

  triggerCreateShopifySmartCollect?: AvailableCreateShopifySmartCollectResultSelection;

  triggerUpdateShopifySmartCollect?: AvailableUpdateShopifySmartCollectResultSelection;

  triggerDeleteShopifySmartCollect?: AvailableDeleteShopifySmartCollectResultSelection;

  triggerScheduledShopifySync?: AvailableScheduledShopifySyncResultSelection;

  triggerSmartCollect?: AvailableSmartCollectResultSelection;

  triggerSetTotalZero?: AvailableSetTotalZeroResultSelection;

  triggerTest2?: AvailableTest2ResultSelection;

  triggerTest3?: AvailableTest3ResultSelection;

  triggerFetchEmails?: AvailableFetchEmailsResultSelection;

  triggerSmartCollecter?: AvailableSmartCollecterResultSelection;

  triggerFetchUsers?: AvailableFetchUsersResultSelection;

  triggerTest?: AvailableTestResultSelection;
};



export type LockOperationResult = {

  __typename: 'LockOperationResult';

  /** Whether the lock operation succeeded */
  success: Scalars['Boolean'];

  /** Any errors encountered during the locking/unlocking operation */
  errors: ExecutionError[];
};



export type AvailableLockOperationResultSelection = {

  __typename?: boolean | null | undefined;

  /** Whether the lock operation succeeded */
  success?: boolean | null | undefined;

  /** Any errors encountered during the locking/unlocking operation */
  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateUserResult = {

  __typename: 'InternalCreateUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  user: (InternalUserRecord | null);
};



export type AvailableInternalCreateUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: boolean | null | undefined;
};



export type InternalUpdateUserResult = {

  __typename: 'InternalUpdateUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  user: (InternalUserRecord | null);
};



export type AvailableInternalUpdateUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: boolean | null | undefined;
};



export type InternalDeleteUserResult = {

  __typename: 'InternalDeleteUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  user: (InternalUserRecord | null);
};



export type AvailableInternalDeleteUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: boolean | null | undefined;
};



export type InternalDeleteManyUserResult = {

  __typename: 'InternalDeleteManyUserResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateUsersResult = {

  __typename: 'InternalBulkCreateUsersResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  users: (InternalUserRecord | null)[];
};



export type AvailableInternalBulkCreateUsersResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  users?: boolean | null | undefined;
};



export type InternalCreateShopifyAppResult = {

  __typename: 'InternalCreateShopifyAppResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyApp: (InternalShopifyAppRecord | null);
};



export type AvailableInternalCreateShopifyAppResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyApp?: boolean | null | undefined;
};



export type InternalUpdateShopifyAppResult = {

  __typename: 'InternalUpdateShopifyAppResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyApp: (InternalShopifyAppRecord | null);
};



export type AvailableInternalUpdateShopifyAppResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyApp?: boolean | null | undefined;
};



export type InternalDeleteShopifyAppResult = {

  __typename: 'InternalDeleteShopifyAppResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyApp: (InternalShopifyAppRecord | null);
};



export type AvailableInternalDeleteShopifyAppResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyApp?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyAppResult = {

  __typename: 'InternalDeleteManyShopifyAppResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyAppResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyAppsResult = {

  __typename: 'InternalBulkCreateShopifyAppsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyApps: (InternalShopifyAppRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyAppsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyApps?: boolean | null | undefined;
};



export type CreateShopifyAppResult = {

  __typename: 'CreateShopifyAppResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyApp: (ShopifyApp | null);
};



export type AvailableCreateShopifyAppResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyApp?: AvailableShopifyAppSelection;
};



export type UpdateShopifyAppResult = {

  __typename: 'UpdateShopifyAppResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyApp: (ShopifyApp | null);
};



export type AvailableUpdateShopifyAppResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyApp?: AvailableShopifyAppSelection;
};



export type DeleteShopifyAppResult = {

  __typename: 'DeleteShopifyAppResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyAppResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyAppInstallationResult = {

  __typename: 'InternalCreateShopifyAppInstallationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyAppInstallation: (InternalShopifyAppInstallationRecord | null);
};



export type AvailableInternalCreateShopifyAppInstallationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyAppInstallation?: boolean | null | undefined;
};



export type InternalUpdateShopifyAppInstallationResult = {

  __typename: 'InternalUpdateShopifyAppInstallationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyAppInstallation: (InternalShopifyAppInstallationRecord | null);
};



export type AvailableInternalUpdateShopifyAppInstallationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyAppInstallation?: boolean | null | undefined;
};



export type InternalDeleteShopifyAppInstallationResult = {

  __typename: 'InternalDeleteShopifyAppInstallationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyAppInstallation: (InternalShopifyAppInstallationRecord | null);
};



export type AvailableInternalDeleteShopifyAppInstallationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyAppInstallation?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyAppInstallationResult = {

  __typename: 'InternalDeleteManyShopifyAppInstallationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyAppInstallationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyAppInstallationsResult = {

  __typename: 'InternalBulkCreateShopifyAppInstallationsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyAppInstallations: (InternalShopifyAppInstallationRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyAppInstallationsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyAppInstallations?: boolean | null | undefined;
};



export type CreateShopifyAppInstallationResult = {

  __typename: 'CreateShopifyAppInstallationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyAppInstallation: (ShopifyAppInstallation | null);
};



export type AvailableCreateShopifyAppInstallationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyAppInstallation?: AvailableShopifyAppInstallationSelection;
};



export type UpdateShopifyAppInstallationResult = {

  __typename: 'UpdateShopifyAppInstallationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyAppInstallation: (ShopifyAppInstallation | null);
};



export type AvailableUpdateShopifyAppInstallationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyAppInstallation?: AvailableShopifyAppInstallationSelection;
};



export type DeleteShopifyAppInstallationResult = {

  __typename: 'DeleteShopifyAppInstallationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyAppInstallationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyBalanceTransactionResult = {

  __typename: 'InternalCreateShopifyBalanceTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBalanceTransaction: (InternalShopifyBalanceTransactionRecord | null);
};



export type AvailableInternalCreateShopifyBalanceTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBalanceTransaction?: boolean | null | undefined;
};



export type InternalUpdateShopifyBalanceTransactionResult = {

  __typename: 'InternalUpdateShopifyBalanceTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBalanceTransaction: (InternalShopifyBalanceTransactionRecord | null);
};



export type AvailableInternalUpdateShopifyBalanceTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBalanceTransaction?: boolean | null | undefined;
};



export type InternalDeleteShopifyBalanceTransactionResult = {

  __typename: 'InternalDeleteShopifyBalanceTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBalanceTransaction: (InternalShopifyBalanceTransactionRecord | null);
};



export type AvailableInternalDeleteShopifyBalanceTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBalanceTransaction?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyBalanceTransactionResult = {

  __typename: 'InternalDeleteManyShopifyBalanceTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyBalanceTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyBalanceTransactionsResult = {

  __typename: 'InternalBulkCreateShopifyBalanceTransactionsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBalanceTransactions: (InternalShopifyBalanceTransactionRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyBalanceTransactionsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBalanceTransactions?: boolean | null | undefined;
};



export type CreateShopifyBalanceTransactionResult = {

  __typename: 'CreateShopifyBalanceTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBalanceTransaction: (ShopifyBalanceTransaction | null);
};



export type AvailableCreateShopifyBalanceTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBalanceTransaction?: AvailableShopifyBalanceTransactionSelection;
};



export type UpdateShopifyBalanceTransactionResult = {

  __typename: 'UpdateShopifyBalanceTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBalanceTransaction: (ShopifyBalanceTransaction | null);
};



export type AvailableUpdateShopifyBalanceTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBalanceTransaction?: AvailableShopifyBalanceTransactionSelection;
};



export type DeleteShopifyBalanceTransactionResult = {

  __typename: 'DeleteShopifyBalanceTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyBalanceTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyBulkOperationResult = {

  __typename: 'InternalCreateShopifyBulkOperationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBulkOperation: (InternalShopifyBulkOperationRecord | null);
};



export type AvailableInternalCreateShopifyBulkOperationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBulkOperation?: boolean | null | undefined;
};



export type InternalUpdateShopifyBulkOperationResult = {

  __typename: 'InternalUpdateShopifyBulkOperationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBulkOperation: (InternalShopifyBulkOperationRecord | null);
};



export type AvailableInternalUpdateShopifyBulkOperationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBulkOperation?: boolean | null | undefined;
};



export type InternalDeleteShopifyBulkOperationResult = {

  __typename: 'InternalDeleteShopifyBulkOperationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBulkOperation: (InternalShopifyBulkOperationRecord | null);
};



export type AvailableInternalDeleteShopifyBulkOperationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBulkOperation?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyBulkOperationResult = {

  __typename: 'InternalDeleteManyShopifyBulkOperationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyBulkOperationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyBulkOperationsResult = {

  __typename: 'InternalBulkCreateShopifyBulkOperationsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyBulkOperations: (InternalShopifyBulkOperationRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyBulkOperationsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyBulkOperations?: boolean | null | undefined;
};



export type InternalCreateShopifyCheckoutResult = {

  __typename: 'InternalCreateShopifyCheckoutResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCheckout: (InternalShopifyCheckoutRecord | null);
};



export type AvailableInternalCreateShopifyCheckoutResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCheckout?: boolean | null | undefined;
};



export type InternalUpdateShopifyCheckoutResult = {

  __typename: 'InternalUpdateShopifyCheckoutResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCheckout: (InternalShopifyCheckoutRecord | null);
};



export type AvailableInternalUpdateShopifyCheckoutResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCheckout?: boolean | null | undefined;
};



export type InternalDeleteShopifyCheckoutResult = {

  __typename: 'InternalDeleteShopifyCheckoutResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCheckout: (InternalShopifyCheckoutRecord | null);
};



export type AvailableInternalDeleteShopifyCheckoutResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCheckout?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyCheckoutResult = {

  __typename: 'InternalDeleteManyShopifyCheckoutResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyCheckoutResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyCheckoutsResult = {

  __typename: 'InternalBulkCreateShopifyCheckoutsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCheckouts: (InternalShopifyCheckoutRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyCheckoutsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCheckouts?: boolean | null | undefined;
};



export type InternalCreateShopifyCheckoutLineItemResult = {

  __typename: 'InternalCreateShopifyCheckoutLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCheckoutLineItem: (InternalShopifyCheckoutLineItemRecord | null);
};



export type AvailableInternalCreateShopifyCheckoutLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCheckoutLineItem?: boolean | null | undefined;
};



export type InternalUpdateShopifyCheckoutLineItemResult = {

  __typename: 'InternalUpdateShopifyCheckoutLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCheckoutLineItem: (InternalShopifyCheckoutLineItemRecord | null);
};



export type AvailableInternalUpdateShopifyCheckoutLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCheckoutLineItem?: boolean | null | undefined;
};



export type InternalDeleteShopifyCheckoutLineItemResult = {

  __typename: 'InternalDeleteShopifyCheckoutLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCheckoutLineItem: (InternalShopifyCheckoutLineItemRecord | null);
};



export type AvailableInternalDeleteShopifyCheckoutLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCheckoutLineItem?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyCheckoutLineItemResult = {

  __typename: 'InternalDeleteManyShopifyCheckoutLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyCheckoutLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyCheckoutLineItemsResult = {

  __typename: 'InternalBulkCreateShopifyCheckoutLineItemsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCheckoutLineItems: (InternalShopifyCheckoutLineItemRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyCheckoutLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCheckoutLineItems?: boolean | null | undefined;
};



export type InternalCreateShopifyCollectResult = {

  __typename: 'InternalCreateShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollect: (InternalShopifyCollectRecord | null);
};



export type AvailableInternalCreateShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollect?: boolean | null | undefined;
};



export type InternalUpdateShopifyCollectResult = {

  __typename: 'InternalUpdateShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollect: (InternalShopifyCollectRecord | null);
};



export type AvailableInternalUpdateShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollect?: boolean | null | undefined;
};



export type InternalDeleteShopifyCollectResult = {

  __typename: 'InternalDeleteShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollect: (InternalShopifyCollectRecord | null);
};



export type AvailableInternalDeleteShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollect?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyCollectResult = {

  __typename: 'InternalDeleteManyShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyCollectsResult = {

  __typename: 'InternalBulkCreateShopifyCollectsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollects: (InternalShopifyCollectRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyCollectsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollects?: boolean | null | undefined;
};



export type CreateShopifyCollectResult = {

  __typename: 'CreateShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollect: (ShopifyCollect | null);
};



export type AvailableCreateShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollect?: AvailableShopifyCollectSelection;
};



export type UpdateShopifyCollectResult = {

  __typename: 'UpdateShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollect: (ShopifyCollect | null);
};



export type AvailableUpdateShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollect?: AvailableShopifyCollectSelection;
};



export type DeleteShopifyCollectResult = {

  __typename: 'DeleteShopifyCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyCollectionResult = {

  __typename: 'InternalCreateShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollection: (InternalShopifyCollectionRecord | null);
};



export type AvailableInternalCreateShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollection?: boolean | null | undefined;
};



export type InternalUpdateShopifyCollectionResult = {

  __typename: 'InternalUpdateShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollection: (InternalShopifyCollectionRecord | null);
};



export type AvailableInternalUpdateShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollection?: boolean | null | undefined;
};



export type InternalDeleteShopifyCollectionResult = {

  __typename: 'InternalDeleteShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollection: (InternalShopifyCollectionRecord | null);
};



export type AvailableInternalDeleteShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollection?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyCollectionResult = {

  __typename: 'InternalDeleteManyShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyCollectionsResult = {

  __typename: 'InternalBulkCreateShopifyCollectionsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollections: (InternalShopifyCollectionRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyCollectionsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollections?: boolean | null | undefined;
};



export type CreateShopifyCollectionResult = {

  __typename: 'CreateShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCollection: (ShopifyCollection | null);
};



export type AvailableCreateShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCollection?: AvailableShopifyCollectionSelection;
};



export type DeleteShopifyCollectionResult = {

  __typename: 'DeleteShopifyCollectionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyCollectionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyCompanyResult = {

  __typename: 'InternalCreateShopifyCompanyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCompany: (InternalShopifyCompanyRecord | null);
};



export type AvailableInternalCreateShopifyCompanyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCompany?: boolean | null | undefined;
};



export type InternalUpdateShopifyCompanyResult = {

  __typename: 'InternalUpdateShopifyCompanyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCompany: (InternalShopifyCompanyRecord | null);
};



export type AvailableInternalUpdateShopifyCompanyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCompany?: boolean | null | undefined;
};



export type InternalDeleteShopifyCompanyResult = {

  __typename: 'InternalDeleteShopifyCompanyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCompany: (InternalShopifyCompanyRecord | null);
};



export type AvailableInternalDeleteShopifyCompanyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCompany?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyCompanyResult = {

  __typename: 'InternalDeleteManyShopifyCompanyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyCompanyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyCompaniesResult = {

  __typename: 'InternalBulkCreateShopifyCompaniesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyCompanies: (InternalShopifyCompanyRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyCompaniesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyCompanies?: boolean | null | undefined;
};



export type InternalCreateShopifyDiscountResult = {

  __typename: 'InternalCreateShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscount: (InternalShopifyDiscountRecord | null);
};



export type AvailableInternalCreateShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscount?: boolean | null | undefined;
};



export type InternalUpdateShopifyDiscountResult = {

  __typename: 'InternalUpdateShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscount: (InternalShopifyDiscountRecord | null);
};



export type AvailableInternalUpdateShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscount?: boolean | null | undefined;
};



export type InternalDeleteShopifyDiscountResult = {

  __typename: 'InternalDeleteShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscount: (InternalShopifyDiscountRecord | null);
};



export type AvailableInternalDeleteShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscount?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyDiscountResult = {

  __typename: 'InternalDeleteManyShopifyDiscountResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyDiscountResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyDiscountsResult = {

  __typename: 'InternalBulkCreateShopifyDiscountsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscounts: (InternalShopifyDiscountRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyDiscountsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscounts?: boolean | null | undefined;
};



export type InternalCreateShopifyDiscountCodeResult = {

  __typename: 'InternalCreateShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscountCode: (InternalShopifyDiscountCodeRecord | null);
};



export type AvailableInternalCreateShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscountCode?: boolean | null | undefined;
};



export type InternalUpdateShopifyDiscountCodeResult = {

  __typename: 'InternalUpdateShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscountCode: (InternalShopifyDiscountCodeRecord | null);
};



export type AvailableInternalUpdateShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscountCode?: boolean | null | undefined;
};



export type InternalDeleteShopifyDiscountCodeResult = {

  __typename: 'InternalDeleteShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscountCode: (InternalShopifyDiscountCodeRecord | null);
};



export type AvailableInternalDeleteShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscountCode?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyDiscountCodeResult = {

  __typename: 'InternalDeleteManyShopifyDiscountCodeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyDiscountCodeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyDiscountCodesResult = {

  __typename: 'InternalBulkCreateShopifyDiscountCodesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDiscountCodes: (InternalShopifyDiscountCodeRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyDiscountCodesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDiscountCodes?: boolean | null | undefined;
};



export type InternalCreateShopifyDisputeResult = {

  __typename: 'InternalCreateShopifyDisputeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDispute: (InternalShopifyDisputeRecord | null);
};



export type AvailableInternalCreateShopifyDisputeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDispute?: boolean | null | undefined;
};



export type InternalUpdateShopifyDisputeResult = {

  __typename: 'InternalUpdateShopifyDisputeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDispute: (InternalShopifyDisputeRecord | null);
};



export type AvailableInternalUpdateShopifyDisputeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDispute?: boolean | null | undefined;
};



export type InternalDeleteShopifyDisputeResult = {

  __typename: 'InternalDeleteShopifyDisputeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDispute: (InternalShopifyDisputeRecord | null);
};



export type AvailableInternalDeleteShopifyDisputeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDispute?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyDisputeResult = {

  __typename: 'InternalDeleteManyShopifyDisputeResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyDisputeResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyDisputesResult = {

  __typename: 'InternalBulkCreateShopifyDisputesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDisputes: (InternalShopifyDisputeRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyDisputesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDisputes?: boolean | null | undefined;
};



export type InternalCreateShopifyDisputeEvidenceResult = {

  __typename: 'InternalCreateShopifyDisputeEvidenceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDisputeEvidence: (InternalShopifyDisputeEvidenceRecord | null);
};



export type AvailableInternalCreateShopifyDisputeEvidenceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDisputeEvidence?: boolean | null | undefined;
};



export type InternalUpdateShopifyDisputeEvidenceResult = {

  __typename: 'InternalUpdateShopifyDisputeEvidenceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDisputeEvidence: (InternalShopifyDisputeEvidenceRecord | null);
};



export type AvailableInternalUpdateShopifyDisputeEvidenceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDisputeEvidence?: boolean | null | undefined;
};



export type InternalDeleteShopifyDisputeEvidenceResult = {

  __typename: 'InternalDeleteShopifyDisputeEvidenceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDisputeEvidence: (InternalShopifyDisputeEvidenceRecord | null);
};



export type AvailableInternalDeleteShopifyDisputeEvidenceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDisputeEvidence?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyDisputeEvidenceResult = {

  __typename: 'InternalDeleteManyShopifyDisputeEvidenceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyDisputeEvidenceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyDisputeEvidencesResult = {

  __typename: 'InternalBulkCreateShopifyDisputeEvidencesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDisputeEvidences: (InternalShopifyDisputeEvidenceRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyDisputeEvidencesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDisputeEvidences?: boolean | null | undefined;
};



export type InternalCreateShopifyDomainResult = {

  __typename: 'InternalCreateShopifyDomainResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDomain: (InternalShopifyDomainRecord | null);
};



export type AvailableInternalCreateShopifyDomainResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDomain?: boolean | null | undefined;
};



export type InternalUpdateShopifyDomainResult = {

  __typename: 'InternalUpdateShopifyDomainResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDomain: (InternalShopifyDomainRecord | null);
};



export type AvailableInternalUpdateShopifyDomainResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDomain?: boolean | null | undefined;
};



export type InternalDeleteShopifyDomainResult = {

  __typename: 'InternalDeleteShopifyDomainResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDomain: (InternalShopifyDomainRecord | null);
};



export type AvailableInternalDeleteShopifyDomainResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDomain?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyDomainResult = {

  __typename: 'InternalDeleteManyShopifyDomainResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyDomainResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyDomainsResult = {

  __typename: 'InternalBulkCreateShopifyDomainsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDomains: (InternalShopifyDomainRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyDomainsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDomains?: boolean | null | undefined;
};



export type UpdateShopifyDomainResult = {

  __typename: 'UpdateShopifyDomainResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyDomain: (ShopifyDomain | null);
};



export type AvailableUpdateShopifyDomainResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyDomain?: AvailableShopifyDomainSelection;
};



export type DeleteShopifyDomainResult = {

  __typename: 'DeleteShopifyDomainResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyDomainResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyFulfillmentResult = {

  __typename: 'InternalCreateShopifyFulfillmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillment: (InternalShopifyFulfillmentRecord | null);
};



export type AvailableInternalCreateShopifyFulfillmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillment?: boolean | null | undefined;
};



export type InternalUpdateShopifyFulfillmentResult = {

  __typename: 'InternalUpdateShopifyFulfillmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillment: (InternalShopifyFulfillmentRecord | null);
};



export type AvailableInternalUpdateShopifyFulfillmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillment?: boolean | null | undefined;
};



export type InternalDeleteShopifyFulfillmentResult = {

  __typename: 'InternalDeleteShopifyFulfillmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillment: (InternalShopifyFulfillmentRecord | null);
};



export type AvailableInternalDeleteShopifyFulfillmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillment?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyFulfillmentResult = {

  __typename: 'InternalDeleteManyShopifyFulfillmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyFulfillmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyFulfillmentsResult = {

  __typename: 'InternalBulkCreateShopifyFulfillmentsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillments: (InternalShopifyFulfillmentRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyFulfillmentsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillments?: boolean | null | undefined;
};



export type InternalCreateShopifyFulfillmentLineItemResult = {

  __typename: 'InternalCreateShopifyFulfillmentLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentLineItem: (InternalShopifyFulfillmentLineItemRecord | null);
};



export type AvailableInternalCreateShopifyFulfillmentLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentLineItem?: boolean | null | undefined;
};



export type InternalUpdateShopifyFulfillmentLineItemResult = {

  __typename: 'InternalUpdateShopifyFulfillmentLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentLineItem: (InternalShopifyFulfillmentLineItemRecord | null);
};



export type AvailableInternalUpdateShopifyFulfillmentLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentLineItem?: boolean | null | undefined;
};



export type InternalDeleteShopifyFulfillmentLineItemResult = {

  __typename: 'InternalDeleteShopifyFulfillmentLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentLineItem: (InternalShopifyFulfillmentLineItemRecord | null);
};



export type AvailableInternalDeleteShopifyFulfillmentLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentLineItem?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyFulfillmentLineItemResult = {

  __typename: 'InternalDeleteManyShopifyFulfillmentLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyFulfillmentLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyFulfillmentLineItemsResult = {

  __typename: 'InternalBulkCreateShopifyFulfillmentLineItemsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentLineItems: (InternalShopifyFulfillmentLineItemRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyFulfillmentLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentLineItems?: boolean | null | undefined;
};



export type InternalCreateShopifyFulfillmentOrderResult = {

  __typename: 'InternalCreateShopifyFulfillmentOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrder: (InternalShopifyFulfillmentOrderRecord | null);
};



export type AvailableInternalCreateShopifyFulfillmentOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrder?: boolean | null | undefined;
};



export type InternalUpdateShopifyFulfillmentOrderResult = {

  __typename: 'InternalUpdateShopifyFulfillmentOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrder: (InternalShopifyFulfillmentOrderRecord | null);
};



export type AvailableInternalUpdateShopifyFulfillmentOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrder?: boolean | null | undefined;
};



export type InternalDeleteShopifyFulfillmentOrderResult = {

  __typename: 'InternalDeleteShopifyFulfillmentOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrder: (InternalShopifyFulfillmentOrderRecord | null);
};



export type AvailableInternalDeleteShopifyFulfillmentOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrder?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyFulfillmentOrderResult = {

  __typename: 'InternalDeleteManyShopifyFulfillmentOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyFulfillmentOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyFulfillmentOrdersResult = {

  __typename: 'InternalBulkCreateShopifyFulfillmentOrdersResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrders: (InternalShopifyFulfillmentOrderRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyFulfillmentOrdersResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrders?: boolean | null | undefined;
};



export type InternalCreateShopifyFulfillmentOrderLineItemResult = {

  __typename: 'InternalCreateShopifyFulfillmentOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrderLineItem: (InternalShopifyFulfillmentOrderLineItemRecord | null);
};



export type AvailableInternalCreateShopifyFulfillmentOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrderLineItem?: boolean | null | undefined;
};



export type InternalUpdateShopifyFulfillmentOrderLineItemResult = {

  __typename: 'InternalUpdateShopifyFulfillmentOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrderLineItem: (InternalShopifyFulfillmentOrderLineItemRecord | null);
};



export type AvailableInternalUpdateShopifyFulfillmentOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrderLineItem?: boolean | null | undefined;
};



export type InternalDeleteShopifyFulfillmentOrderLineItemResult = {

  __typename: 'InternalDeleteShopifyFulfillmentOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrderLineItem: (InternalShopifyFulfillmentOrderLineItemRecord | null);
};



export type AvailableInternalDeleteShopifyFulfillmentOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrderLineItem?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyFulfillmentOrderLineItemResult = {

  __typename: 'InternalDeleteManyShopifyFulfillmentOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyFulfillmentOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyFulfillmentOrderLineItemsResult = {

  __typename: 'InternalBulkCreateShopifyFulfillmentOrderLineItemsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentOrderLineItems: (InternalShopifyFulfillmentOrderLineItemRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyFulfillmentOrderLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentOrderLineItems?: boolean | null | undefined;
};



export type InternalCreateShopifyFulfillmentServiceResult = {

  __typename: 'InternalCreateShopifyFulfillmentServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentService: (InternalShopifyFulfillmentServiceRecord | null);
};



export type AvailableInternalCreateShopifyFulfillmentServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentService?: boolean | null | undefined;
};



export type InternalUpdateShopifyFulfillmentServiceResult = {

  __typename: 'InternalUpdateShopifyFulfillmentServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentService: (InternalShopifyFulfillmentServiceRecord | null);
};



export type AvailableInternalUpdateShopifyFulfillmentServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentService?: boolean | null | undefined;
};



export type InternalDeleteShopifyFulfillmentServiceResult = {

  __typename: 'InternalDeleteShopifyFulfillmentServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentService: (InternalShopifyFulfillmentServiceRecord | null);
};



export type AvailableInternalDeleteShopifyFulfillmentServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentService?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyFulfillmentServiceResult = {

  __typename: 'InternalDeleteManyShopifyFulfillmentServiceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyFulfillmentServiceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyFulfillmentServicesResult = {

  __typename: 'InternalBulkCreateShopifyFulfillmentServicesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyFulfillmentServices: (InternalShopifyFulfillmentServiceRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyFulfillmentServicesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyFulfillmentServices?: boolean | null | undefined;
};



export type InternalCreateShopifyGdprRequestResult = {

  __typename: 'InternalCreateShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};



export type AvailableInternalCreateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: boolean | null | undefined;
};



export type InternalUpdateShopifyGdprRequestResult = {

  __typename: 'InternalUpdateShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};



export type AvailableInternalUpdateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: boolean | null | undefined;
};



export type InternalDeleteShopifyGdprRequestResult = {

  __typename: 'InternalDeleteShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};



export type AvailableInternalDeleteShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyGdprRequestResult = {

  __typename: 'InternalDeleteManyShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyGdprRequestsResult = {

  __typename: 'InternalBulkCreateShopifyGdprRequestsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequests: (InternalShopifyGdprRequestRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyGdprRequestsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequests?: boolean | null | undefined;
};



export type CreateShopifyGdprRequestResult = {

  __typename: 'CreateShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (ShopifyGdprRequest | null);
};



export type AvailableCreateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;
};



export type UpdateShopifyGdprRequestResult = {

  __typename: 'UpdateShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (ShopifyGdprRequest | null);
};



export type AvailableUpdateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;
};



export type InternalCreateShopifyMarketResult = {

  __typename: 'InternalCreateShopifyMarketResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyMarket: (InternalShopifyMarketRecord | null);
};



export type AvailableInternalCreateShopifyMarketResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyMarket?: boolean | null | undefined;
};



export type InternalUpdateShopifyMarketResult = {

  __typename: 'InternalUpdateShopifyMarketResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyMarket: (InternalShopifyMarketRecord | null);
};



export type AvailableInternalUpdateShopifyMarketResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyMarket?: boolean | null | undefined;
};



export type InternalDeleteShopifyMarketResult = {

  __typename: 'InternalDeleteShopifyMarketResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyMarket: (InternalShopifyMarketRecord | null);
};



export type AvailableInternalDeleteShopifyMarketResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyMarket?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyMarketResult = {

  __typename: 'InternalDeleteManyShopifyMarketResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyMarketResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyMarketsResult = {

  __typename: 'InternalBulkCreateShopifyMarketsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyMarkets: (InternalShopifyMarketRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyMarketsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyMarkets?: boolean | null | undefined;
};



export type InternalCreateShopifyMarketRegionResult = {

  __typename: 'InternalCreateShopifyMarketRegionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyMarketRegion: (InternalShopifyMarketRegionRecord | null);
};



export type AvailableInternalCreateShopifyMarketRegionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyMarketRegion?: boolean | null | undefined;
};



export type InternalUpdateShopifyMarketRegionResult = {

  __typename: 'InternalUpdateShopifyMarketRegionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyMarketRegion: (InternalShopifyMarketRegionRecord | null);
};



export type AvailableInternalUpdateShopifyMarketRegionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyMarketRegion?: boolean | null | undefined;
};



export type InternalDeleteShopifyMarketRegionResult = {

  __typename: 'InternalDeleteShopifyMarketRegionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyMarketRegion: (InternalShopifyMarketRegionRecord | null);
};



export type AvailableInternalDeleteShopifyMarketRegionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyMarketRegion?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyMarketRegionResult = {

  __typename: 'InternalDeleteManyShopifyMarketRegionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyMarketRegionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyMarketRegionsResult = {

  __typename: 'InternalBulkCreateShopifyMarketRegionsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyMarketRegions: (InternalShopifyMarketRegionRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyMarketRegionsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyMarketRegions?: boolean | null | undefined;
};



export type InternalCreateShopifyMarketWebPresenceResult = {

  __typename: 'InternalCreateShopifyMarketWebPresenceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyMarketWebPresence: (InternalShopifyMarketWebPresenceRecord | null);
};



export type AvailableInternalCreateShopifyMarketWebPresenceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyMarketWebPresence?: boolean | null | undefined;
};



export type InternalUpdateShopifyMarketWebPresenceResult = {

  __typename: 'InternalUpdateShopifyMarketWebPresenceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyMarketWebPresence: (InternalShopifyMarketWebPresenceRecord | null);
};



export type AvailableInternalUpdateShopifyMarketWebPresenceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyMarketWebPresence?: boolean | null | undefined;
};



export type InternalDeleteShopifyMarketWebPresenceResult = {

  __typename: 'InternalDeleteShopifyMarketWebPresenceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyMarketWebPresence: (InternalShopifyMarketWebPresenceRecord | null);
};



export type AvailableInternalDeleteShopifyMarketWebPresenceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyMarketWebPresence?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyMarketWebPresenceResult = {

  __typename: 'InternalDeleteManyShopifyMarketWebPresenceResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyMarketWebPresenceResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyMarketWebPresencesResult = {

  __typename: 'InternalBulkCreateShopifyMarketWebPresencesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyMarketWebPresences: (InternalShopifyMarketWebPresenceRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyMarketWebPresencesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyMarketWebPresences?: boolean | null | undefined;
};



export type InternalCreateShopifyOrderResult = {

  __typename: 'InternalCreateShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrder: (InternalShopifyOrderRecord | null);
};



export type AvailableInternalCreateShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrder?: boolean | null | undefined;
};



export type InternalUpdateShopifyOrderResult = {

  __typename: 'InternalUpdateShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrder: (InternalShopifyOrderRecord | null);
};



export type AvailableInternalUpdateShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrder?: boolean | null | undefined;
};



export type InternalDeleteShopifyOrderResult = {

  __typename: 'InternalDeleteShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrder: (InternalShopifyOrderRecord | null);
};



export type AvailableInternalDeleteShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrder?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyOrderResult = {

  __typename: 'InternalDeleteManyShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyOrdersResult = {

  __typename: 'InternalBulkCreateShopifyOrdersResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrders: (InternalShopifyOrderRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyOrdersResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrders?: boolean | null | undefined;
};



export type CreateShopifyOrderResult = {

  __typename: 'CreateShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrder: (ShopifyOrder | null);
};



export type AvailableCreateShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrder?: AvailableShopifyOrderSelection;
};



export type UpdateShopifyOrderResult = {

  __typename: 'UpdateShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrder: (ShopifyOrder | null);
};



export type AvailableUpdateShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrder?: AvailableShopifyOrderSelection;
};



export type DeleteShopifyOrderResult = {

  __typename: 'DeleteShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyOrderAdjustmentResult = {

  __typename: 'InternalCreateShopifyOrderAdjustmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderAdjustment: (InternalShopifyOrderAdjustmentRecord | null);
};



export type AvailableInternalCreateShopifyOrderAdjustmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderAdjustment?: boolean | null | undefined;
};



export type InternalUpdateShopifyOrderAdjustmentResult = {

  __typename: 'InternalUpdateShopifyOrderAdjustmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderAdjustment: (InternalShopifyOrderAdjustmentRecord | null);
};



export type AvailableInternalUpdateShopifyOrderAdjustmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderAdjustment?: boolean | null | undefined;
};



export type InternalDeleteShopifyOrderAdjustmentResult = {

  __typename: 'InternalDeleteShopifyOrderAdjustmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderAdjustment: (InternalShopifyOrderAdjustmentRecord | null);
};



export type AvailableInternalDeleteShopifyOrderAdjustmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderAdjustment?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyOrderAdjustmentResult = {

  __typename: 'InternalDeleteManyShopifyOrderAdjustmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyOrderAdjustmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyOrderAdjustmentsResult = {

  __typename: 'InternalBulkCreateShopifyOrderAdjustmentsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderAdjustments: (InternalShopifyOrderAdjustmentRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyOrderAdjustmentsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderAdjustments?: boolean | null | undefined;
};



export type CreateShopifyOrderAdjustmentResult = {

  __typename: 'CreateShopifyOrderAdjustmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderAdjustment: (ShopifyOrderAdjustment | null);
};



export type AvailableCreateShopifyOrderAdjustmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderAdjustment?: AvailableShopifyOrderAdjustmentSelection;
};



export type UpdateShopifyOrderAdjustmentResult = {

  __typename: 'UpdateShopifyOrderAdjustmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderAdjustment: (ShopifyOrderAdjustment | null);
};



export type AvailableUpdateShopifyOrderAdjustmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderAdjustment?: AvailableShopifyOrderAdjustmentSelection;
};



export type DeleteShopifyOrderAdjustmentResult = {

  __typename: 'DeleteShopifyOrderAdjustmentResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyOrderAdjustmentResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyOrderLineItemResult = {

  __typename: 'InternalCreateShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderLineItem: (InternalShopifyOrderLineItemRecord | null);
};



export type AvailableInternalCreateShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderLineItem?: boolean | null | undefined;
};



export type InternalUpdateShopifyOrderLineItemResult = {

  __typename: 'InternalUpdateShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderLineItem: (InternalShopifyOrderLineItemRecord | null);
};



export type AvailableInternalUpdateShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderLineItem?: boolean | null | undefined;
};



export type InternalDeleteShopifyOrderLineItemResult = {

  __typename: 'InternalDeleteShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderLineItem: (InternalShopifyOrderLineItemRecord | null);
};



export type AvailableInternalDeleteShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderLineItem?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyOrderLineItemResult = {

  __typename: 'InternalDeleteManyShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyOrderLineItemsResult = {

  __typename: 'InternalBulkCreateShopifyOrderLineItemsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderLineItems: (InternalShopifyOrderLineItemRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyOrderLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderLineItems?: boolean | null | undefined;
};



export type CreateShopifyOrderLineItemResult = {

  __typename: 'CreateShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderLineItem: (ShopifyOrderLineItem | null);
};



export type AvailableCreateShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderLineItem?: AvailableShopifyOrderLineItemSelection;
};



export type UpdateShopifyOrderLineItemResult = {

  __typename: 'UpdateShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderLineItem: (ShopifyOrderLineItem | null);
};



export type AvailableUpdateShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderLineItem?: AvailableShopifyOrderLineItemSelection;
};



export type DeleteShopifyOrderLineItemResult = {

  __typename: 'DeleteShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyPayoutResult = {

  __typename: 'InternalCreateShopifyPayoutResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPayout: (InternalShopifyPayoutRecord | null);
};



export type AvailableInternalCreateShopifyPayoutResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPayout?: boolean | null | undefined;
};



export type InternalUpdateShopifyPayoutResult = {

  __typename: 'InternalUpdateShopifyPayoutResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPayout: (InternalShopifyPayoutRecord | null);
};



export type AvailableInternalUpdateShopifyPayoutResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPayout?: boolean | null | undefined;
};



export type InternalDeleteShopifyPayoutResult = {

  __typename: 'InternalDeleteShopifyPayoutResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPayout: (InternalShopifyPayoutRecord | null);
};



export type AvailableInternalDeleteShopifyPayoutResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPayout?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyPayoutResult = {

  __typename: 'InternalDeleteManyShopifyPayoutResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyPayoutResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyPayoutsResult = {

  __typename: 'InternalBulkCreateShopifyPayoutsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPayouts: (InternalShopifyPayoutRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyPayoutsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPayouts?: boolean | null | undefined;
};



export type CreateShopifyPayoutResult = {

  __typename: 'CreateShopifyPayoutResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPayout: (ShopifyPayout | null);
};



export type AvailableCreateShopifyPayoutResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPayout?: AvailableShopifyPayoutSelection;
};



export type UpdateShopifyPayoutResult = {

  __typename: 'UpdateShopifyPayoutResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPayout: (ShopifyPayout | null);
};



export type AvailableUpdateShopifyPayoutResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPayout?: AvailableShopifyPayoutSelection;
};



export type DeleteShopifyPayoutResult = {

  __typename: 'DeleteShopifyPayoutResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyPayoutResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyPriceRuleResult = {

  __typename: 'InternalCreateShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPriceRule: (InternalShopifyPriceRuleRecord | null);
};



export type AvailableInternalCreateShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPriceRule?: boolean | null | undefined;
};



export type InternalUpdateShopifyPriceRuleResult = {

  __typename: 'InternalUpdateShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPriceRule: (InternalShopifyPriceRuleRecord | null);
};



export type AvailableInternalUpdateShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPriceRule?: boolean | null | undefined;
};



export type InternalDeleteShopifyPriceRuleResult = {

  __typename: 'InternalDeleteShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPriceRule: (InternalShopifyPriceRuleRecord | null);
};



export type AvailableInternalDeleteShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPriceRule?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyPriceRuleResult = {

  __typename: 'InternalDeleteManyShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyPriceRulesResult = {

  __typename: 'InternalBulkCreateShopifyPriceRulesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPriceRules: (InternalShopifyPriceRuleRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyPriceRulesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPriceRules?: boolean | null | undefined;
};



export type CreateShopifyPriceRuleResult = {

  __typename: 'CreateShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPriceRule: (ShopifyPriceRule | null);
};



export type AvailableCreateShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPriceRule?: AvailableShopifyPriceRuleSelection;
};



export type UpdateShopifyPriceRuleResult = {

  __typename: 'UpdateShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyPriceRule: (ShopifyPriceRule | null);
};



export type AvailableUpdateShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyPriceRule?: AvailableShopifyPriceRuleSelection;
};



export type DeleteShopifyPriceRuleResult = {

  __typename: 'DeleteShopifyPriceRuleResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyPriceRuleResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyProductResult = {

  __typename: 'InternalCreateShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (InternalShopifyProductRecord | null);
};



export type AvailableInternalCreateShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: boolean | null | undefined;
};



export type InternalUpdateShopifyProductResult = {

  __typename: 'InternalUpdateShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (InternalShopifyProductRecord | null);
};



export type AvailableInternalUpdateShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: boolean | null | undefined;
};



export type InternalDeleteShopifyProductResult = {

  __typename: 'InternalDeleteShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (InternalShopifyProductRecord | null);
};



export type AvailableInternalDeleteShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyProductResult = {

  __typename: 'InternalDeleteManyShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyProductsResult = {

  __typename: 'InternalBulkCreateShopifyProductsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProducts: (InternalShopifyProductRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyProductsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProducts?: boolean | null | undefined;
};



export type CreateShopifyProductResult = {

  __typename: 'CreateShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (ShopifyProduct | null);
};



export type AvailableCreateShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: AvailableShopifyProductSelection;
};



export type DeleteShopifyProductResult = {

  __typename: 'DeleteShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyRefundResult = {

  __typename: 'InternalCreateShopifyRefundResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefund: (InternalShopifyRefundRecord | null);
};



export type AvailableInternalCreateShopifyRefundResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefund?: boolean | null | undefined;
};



export type InternalUpdateShopifyRefundResult = {

  __typename: 'InternalUpdateShopifyRefundResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefund: (InternalShopifyRefundRecord | null);
};



export type AvailableInternalUpdateShopifyRefundResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefund?: boolean | null | undefined;
};



export type InternalDeleteShopifyRefundResult = {

  __typename: 'InternalDeleteShopifyRefundResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefund: (InternalShopifyRefundRecord | null);
};



export type AvailableInternalDeleteShopifyRefundResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefund?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyRefundResult = {

  __typename: 'InternalDeleteManyShopifyRefundResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyRefundResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyRefundsResult = {

  __typename: 'InternalBulkCreateShopifyRefundsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefunds: (InternalShopifyRefundRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyRefundsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefunds?: boolean | null | undefined;
};



export type UpdateShopifyRefundResult = {

  __typename: 'UpdateShopifyRefundResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefund: (ShopifyRefund | null);
};



export type AvailableUpdateShopifyRefundResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefund?: AvailableShopifyRefundSelection;
};



export type DeleteShopifyRefundResult = {

  __typename: 'DeleteShopifyRefundResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyRefundResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyRefundDutyResult = {

  __typename: 'InternalCreateShopifyRefundDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundDuty: (InternalShopifyRefundDutyRecord | null);
};



export type AvailableInternalCreateShopifyRefundDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundDuty?: boolean | null | undefined;
};



export type InternalUpdateShopifyRefundDutyResult = {

  __typename: 'InternalUpdateShopifyRefundDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundDuty: (InternalShopifyRefundDutyRecord | null);
};



export type AvailableInternalUpdateShopifyRefundDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundDuty?: boolean | null | undefined;
};



export type InternalDeleteShopifyRefundDutyResult = {

  __typename: 'InternalDeleteShopifyRefundDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundDuty: (InternalShopifyRefundDutyRecord | null);
};



export type AvailableInternalDeleteShopifyRefundDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundDuty?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyRefundDutyResult = {

  __typename: 'InternalDeleteManyShopifyRefundDutyResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyRefundDutyResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyRefundDutiesResult = {

  __typename: 'InternalBulkCreateShopifyRefundDutiesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundDuties: (InternalShopifyRefundDutyRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyRefundDutiesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundDuties?: boolean | null | undefined;
};



export type InternalCreateShopifyRefundLineItemResult = {

  __typename: 'InternalCreateShopifyRefundLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundLineItem: (InternalShopifyRefundLineItemRecord | null);
};



export type AvailableInternalCreateShopifyRefundLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundLineItem?: boolean | null | undefined;
};



export type InternalUpdateShopifyRefundLineItemResult = {

  __typename: 'InternalUpdateShopifyRefundLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundLineItem: (InternalShopifyRefundLineItemRecord | null);
};



export type AvailableInternalUpdateShopifyRefundLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundLineItem?: boolean | null | undefined;
};



export type InternalDeleteShopifyRefundLineItemResult = {

  __typename: 'InternalDeleteShopifyRefundLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundLineItem: (InternalShopifyRefundLineItemRecord | null);
};



export type AvailableInternalDeleteShopifyRefundLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundLineItem?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyRefundLineItemResult = {

  __typename: 'InternalDeleteManyShopifyRefundLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyRefundLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyRefundLineItemsResult = {

  __typename: 'InternalBulkCreateShopifyRefundLineItemsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundLineItems: (InternalShopifyRefundLineItemRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyRefundLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundLineItems?: boolean | null | undefined;
};



export type UpdateShopifyRefundLineItemResult = {

  __typename: 'UpdateShopifyRefundLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyRefundLineItem: (ShopifyRefundLineItem | null);
};



export type AvailableUpdateShopifyRefundLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyRefundLineItem?: AvailableShopifyRefundLineItemSelection;
};



export type DeleteShopifyRefundLineItemResult = {

  __typename: 'DeleteShopifyRefundLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyRefundLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyScriptTagResult = {

  __typename: 'InternalCreateShopifyScriptTagResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyScriptTag: (InternalShopifyScriptTagRecord | null);
};



export type AvailableInternalCreateShopifyScriptTagResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyScriptTag?: boolean | null | undefined;
};



export type InternalUpdateShopifyScriptTagResult = {

  __typename: 'InternalUpdateShopifyScriptTagResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyScriptTag: (InternalShopifyScriptTagRecord | null);
};



export type AvailableInternalUpdateShopifyScriptTagResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyScriptTag?: boolean | null | undefined;
};



export type InternalDeleteShopifyScriptTagResult = {

  __typename: 'InternalDeleteShopifyScriptTagResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyScriptTag: (InternalShopifyScriptTagRecord | null);
};



export type AvailableInternalDeleteShopifyScriptTagResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyScriptTag?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyScriptTagResult = {

  __typename: 'InternalDeleteManyShopifyScriptTagResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyScriptTagResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyScriptTagsResult = {

  __typename: 'InternalBulkCreateShopifyScriptTagsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyScriptTags: (InternalShopifyScriptTagRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyScriptTagsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyScriptTags?: boolean | null | undefined;
};



export type CreateShopifyScriptTagResult = {

  __typename: 'CreateShopifyScriptTagResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyScriptTag: (ShopifyScriptTag | null);
};



export type AvailableCreateShopifyScriptTagResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyScriptTag?: AvailableShopifyScriptTagSelection;
};



export type UpdateShopifyScriptTagResult = {

  __typename: 'UpdateShopifyScriptTagResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyScriptTag: (ShopifyScriptTag | null);
};



export type AvailableUpdateShopifyScriptTagResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyScriptTag?: AvailableShopifyScriptTagSelection;
};



export type DeleteShopifyScriptTagResult = {

  __typename: 'DeleteShopifyScriptTagResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyScriptTagResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyShopResult = {

  __typename: 'InternalCreateShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (InternalShopifyShopRecord | null);
};



export type AvailableInternalCreateShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: boolean | null | undefined;
};



export type InternalUpdateShopifyShopResult = {

  __typename: 'InternalUpdateShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (InternalShopifyShopRecord | null);
};



export type AvailableInternalUpdateShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: boolean | null | undefined;
};



export type InternalDeleteShopifyShopResult = {

  __typename: 'InternalDeleteShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (InternalShopifyShopRecord | null);
};



export type AvailableInternalDeleteShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyShopResult = {

  __typename: 'InternalDeleteManyShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyShopsResult = {

  __typename: 'InternalBulkCreateShopifyShopsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShops: (InternalShopifyShopRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyShopsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShops?: boolean | null | undefined;
};



export type InstallShopifyShopResult = {

  __typename: 'InstallShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (ShopifyShop | null);
};



export type AvailableInstallShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: AvailableShopifyShopSelection;
};



export type UninstallShopifyShopResult = {

  __typename: 'UninstallShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (ShopifyShop | null);
};



export type AvailableUninstallShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: AvailableShopifyShopSelection;
};



export type ReinstallShopifyShopResult = {

  __typename: 'ReinstallShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (ShopifyShop | null);
};



export type AvailableReinstallShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: AvailableShopifyShopSelection;
};



export type InternalCreateShopifySyncResult = {

  __typename: 'InternalCreateShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (InternalShopifySyncRecord | null);
};



export type AvailableInternalCreateShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: boolean | null | undefined;
};



export type InternalUpdateShopifySyncResult = {

  __typename: 'InternalUpdateShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (InternalShopifySyncRecord | null);
};



export type AvailableInternalUpdateShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: boolean | null | undefined;
};



export type InternalDeleteShopifySyncResult = {

  __typename: 'InternalDeleteShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (InternalShopifySyncRecord | null);
};



export type AvailableInternalDeleteShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: boolean | null | undefined;
};



export type InternalDeleteManyShopifySyncResult = {

  __typename: 'InternalDeleteManyShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifySyncsResult = {

  __typename: 'InternalBulkCreateShopifySyncsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySyncs: (InternalShopifySyncRecord | null)[];
};



export type AvailableInternalBulkCreateShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySyncs?: boolean | null | undefined;
};



export type InternalCreateSessionResult = {

  __typename: 'InternalCreateSessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  session: (InternalSessionRecord | null);
};



export type AvailableInternalCreateSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  session?: boolean | null | undefined;
};



export type InternalUpdateSessionResult = {

  __typename: 'InternalUpdateSessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  session: (InternalSessionRecord | null);
};



export type AvailableInternalUpdateSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  session?: boolean | null | undefined;
};



export type InternalDeleteSessionResult = {

  __typename: 'InternalDeleteSessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  session: (InternalSessionRecord | null);
};



export type AvailableInternalDeleteSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  session?: boolean | null | undefined;
};



export type InternalDeleteManySessionResult = {

  __typename: 'InternalDeleteManySessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManySessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateSessionsResult = {

  __typename: 'InternalBulkCreateSessionsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  sessions: (InternalSessionRecord | null)[];
};



export type AvailableInternalBulkCreateSessionsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  sessions?: boolean | null | undefined;
};



export type InternalCreateShopifyShippingLineResult = {

  __typename: 'InternalCreateShopifyShippingLineResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShippingLine: (InternalShopifyShippingLineRecord | null);
};



export type AvailableInternalCreateShopifyShippingLineResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShippingLine?: boolean | null | undefined;
};



export type InternalUpdateShopifyShippingLineResult = {

  __typename: 'InternalUpdateShopifyShippingLineResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShippingLine: (InternalShopifyShippingLineRecord | null);
};



export type AvailableInternalUpdateShopifyShippingLineResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShippingLine?: boolean | null | undefined;
};



export type InternalDeleteShopifyShippingLineResult = {

  __typename: 'InternalDeleteShopifyShippingLineResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShippingLine: (InternalShopifyShippingLineRecord | null);
};



export type AvailableInternalDeleteShopifyShippingLineResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShippingLine?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyShippingLineResult = {

  __typename: 'InternalDeleteManyShopifyShippingLineResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyShippingLineResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyShippingLinesResult = {

  __typename: 'InternalBulkCreateShopifyShippingLinesResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShippingLines: (InternalShopifyShippingLineRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyShippingLinesResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShippingLines?: boolean | null | undefined;
};



export type CreateShopifyShippingLineResult = {

  __typename: 'CreateShopifyShippingLineResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShippingLine: (ShopifyShippingLine | null);
};



export type AvailableCreateShopifyShippingLineResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShippingLine?: AvailableShopifyShippingLineSelection;
};



export type UpdateShopifyShippingLineResult = {

  __typename: 'UpdateShopifyShippingLineResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShippingLine: (ShopifyShippingLine | null);
};



export type AvailableUpdateShopifyShippingLineResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShippingLine?: AvailableShopifyShippingLineSelection;
};



export type DeleteShopifyShippingLineResult = {

  __typename: 'DeleteShopifyShippingLineResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyShippingLineResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifyTenderTransactionResult = {

  __typename: 'InternalCreateShopifyTenderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyTenderTransaction: (InternalShopifyTenderTransactionRecord | null);
};



export type AvailableInternalCreateShopifyTenderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyTenderTransaction?: boolean | null | undefined;
};



export type InternalUpdateShopifyTenderTransactionResult = {

  __typename: 'InternalUpdateShopifyTenderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyTenderTransaction: (InternalShopifyTenderTransactionRecord | null);
};



export type AvailableInternalUpdateShopifyTenderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyTenderTransaction?: boolean | null | undefined;
};



export type InternalDeleteShopifyTenderTransactionResult = {

  __typename: 'InternalDeleteShopifyTenderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyTenderTransaction: (InternalShopifyTenderTransactionRecord | null);
};



export type AvailableInternalDeleteShopifyTenderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyTenderTransaction?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyTenderTransactionResult = {

  __typename: 'InternalDeleteManyShopifyTenderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyTenderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyTenderTransactionsResult = {

  __typename: 'InternalBulkCreateShopifyTenderTransactionsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyTenderTransactions: (InternalShopifyTenderTransactionRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyTenderTransactionsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyTenderTransactions?: boolean | null | undefined;
};



export type CreateShopifyTenderTransactionResult = {

  __typename: 'CreateShopifyTenderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyTenderTransaction: (ShopifyTenderTransaction | null);
};



export type AvailableCreateShopifyTenderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyTenderTransaction?: AvailableShopifyTenderTransactionSelection;
};



export type UpdateShopifyTenderTransactionResult = {

  __typename: 'UpdateShopifyTenderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyTenderTransaction: (ShopifyTenderTransaction | null);
};



export type AvailableUpdateShopifyTenderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyTenderTransaction?: AvailableShopifyTenderTransactionSelection;
};



export type DeleteShopifyTenderTransactionResult = {

  __typename: 'DeleteShopifyTenderTransactionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableDeleteShopifyTenderTransactionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateShopifySmartCollectResult = {

  __typename: 'InternalCreateShopifySmartCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySmartCollect: (InternalShopifySmartCollectRecord | null);
};



export type AvailableInternalCreateShopifySmartCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySmartCollect?: boolean | null | undefined;
};



export type InternalUpdateShopifySmartCollectResult = {

  __typename: 'InternalUpdateShopifySmartCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySmartCollect: (InternalShopifySmartCollectRecord | null);
};



export type AvailableInternalUpdateShopifySmartCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySmartCollect?: boolean | null | undefined;
};



export type InternalDeleteShopifySmartCollectResult = {

  __typename: 'InternalDeleteShopifySmartCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySmartCollect: (InternalShopifySmartCollectRecord | null);
};



export type AvailableInternalDeleteShopifySmartCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySmartCollect?: boolean | null | undefined;
};



export type InternalDeleteManyShopifySmartCollectResult = {

  __typename: 'InternalDeleteManyShopifySmartCollectResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifySmartCollectResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifySmartCollectsResult = {

  __typename: 'InternalBulkCreateShopifySmartCollectsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySmartCollects: (InternalShopifySmartCollectRecord | null)[];
};



export type AvailableInternalBulkCreateShopifySmartCollectsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySmartCollects?: boolean | null | undefined;
};



export type ExplicitNestingRequired = never;

export type DeepFilterNever<T> = T extends Record<string, unknown> ? FilterNever<{
  [Key in keyof T]: T[Key] extends Record<string, unknown> ? DeepFilterNever<T[Key]> : T[Key];
}> : T;

export type Select<Schema, Selection extends FieldSelection | null | undefined> = Selection extends null | undefined
  ? never
  : Schema extends (infer T)[]
  ? Select<T, Selection>[]
  : Schema extends null
  ? Select<Exclude<Schema, null>, Selection> | null
  : {
      [Key in keyof Selection & keyof Schema]: Selection[Key] extends true
        ? Schema[Key]
        : Selection[Key] extends FieldSelection
        ? Select<Schema[Key], Selection[Key]>
        : never;
    };

export type IDsList = {
  ids: string[];
}
