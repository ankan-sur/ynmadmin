// All the generated types for the "Shopify Balance Transaction" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyBalanceTransaction } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyBalanceTransactionServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly adjustmentOrderTransactions: true;
      readonly amount: true;
      readonly currency: true;
      readonly fee: true;
      readonly net: true;
      readonly payoutStatus: true;
      readonly processedAt: true;
      readonly sourceId: true;
      readonly sourceType: true;
      readonly test: true;
      readonly type: true;
      readonly sourceOrderId: true;
    readonly sourceOrder: false;
      readonly payoutId: true;
    readonly payout: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** Context of the `create` action on the `shopifyBalanceTransaction` model. */
export interface CreateShopifyBalanceTransactionActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyBalanceTransaction` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyBalanceTransaction, DefaultShopifyBalanceTransactionServerSelection>>;
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
  params: {

};
  /**
  * @private The context of this action.
  */
  context: CreateShopifyBalanceTransactionActionContext;
};


    
/** Context of the `update` action on the `shopifyBalanceTransaction` model. */
export interface UpdateShopifyBalanceTransactionActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyBalanceTransaction` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyBalanceTransaction, DefaultShopifyBalanceTransactionServerSelection>>;
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
  params: {

};
  /**
  * @private The context of this action.
  */
  context: UpdateShopifyBalanceTransactionActionContext;
};


    
/** Context of the `delete` action on the `shopifyBalanceTransaction` model. */
export interface DeleteShopifyBalanceTransactionActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyBalanceTransaction` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyBalanceTransaction, DefaultShopifyBalanceTransactionServerSelection>>;
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
  params: {

};
  /**
  * @private The context of this action.
  */
  context: DeleteShopifyBalanceTransactionActionContext;
};


  