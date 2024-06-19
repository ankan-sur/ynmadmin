// All the generated types for the "shopifySmartCollect" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifySmartCollect } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifySmartCollectServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly shopId: true;
    readonly shop: false;
      readonly productId: true;
    readonly product: false;
      readonly collectionId: true;
    readonly collection: false;
  };

  
/** Context of the `create` action on the `shopifySmartCollect` model. */
export interface CreateShopifySmartCollectActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifySmartCollect` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifySmartCollect, DefaultShopifySmartCollectServerSelection>>;
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
  context: CreateShopifySmartCollectActionContext;
};


    
/** Context of the `update` action on the `shopifySmartCollect` model. */
export interface UpdateShopifySmartCollectActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifySmartCollect` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifySmartCollect, DefaultShopifySmartCollectServerSelection>>;
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
  context: UpdateShopifySmartCollectActionContext;
};


    
/** Context of the `delete` action on the `shopifySmartCollect` model. */
export interface DeleteShopifySmartCollectActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifySmartCollect` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifySmartCollect, DefaultShopifySmartCollectServerSelection>>;
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
  context: DeleteShopifySmartCollectActionContext;
};


  