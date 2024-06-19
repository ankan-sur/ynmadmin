// All the generated types for the "Shopify App Installation" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyAppInstallation } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyAppInstallationServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly accessScopes: true;
      readonly launchUrl: true;
      readonly uninstallUrl: true;
      readonly appId: true;
    readonly app: false;
      readonly shopId: true;
    readonly shop: false;
  };

  
/** Context of the `create` action on the `shopifyAppInstallation` model. */
export interface CreateShopifyAppInstallationActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyAppInstallation` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyAppInstallation, DefaultShopifyAppInstallationServerSelection>>;
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
  context: CreateShopifyAppInstallationActionContext;
};


    
/** Context of the `update` action on the `shopifyAppInstallation` model. */
export interface UpdateShopifyAppInstallationActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyAppInstallation` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyAppInstallation, DefaultShopifyAppInstallationServerSelection>>;
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
  context: UpdateShopifyAppInstallationActionContext;
};


    
/** Context of the `delete` action on the `shopifyAppInstallation` model. */
export interface DeleteShopifyAppInstallationActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyAppInstallation` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyAppInstallation, DefaultShopifyAppInstallationServerSelection>>;
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
  context: DeleteShopifyAppInstallationActionContext;
};


  