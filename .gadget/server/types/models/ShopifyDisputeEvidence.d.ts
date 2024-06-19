import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyDisputeEvidence } from "@gadget-client/ynmadmin";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifyDisputeEvidenceServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly customerEmailAddress: true;
    readonly customerFirstName: true;
    readonly customerLastName: true;
    readonly productDescription: true;
    readonly submittedByMerchantOn: true;
    readonly uncategorizedText: true;
    readonly disputeId: true;
    readonly dispute: false;
    readonly shopId: true;
    readonly shop: false;
};
/** Context of the `create` action on the `shopifyDisputeEvidence` model. */
export interface CreateShopifyDisputeEvidenceActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyDisputeEvidence` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyDisputeEvidence, DefaultShopifyDisputeEvidenceServerSelection>>;
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
    context: CreateShopifyDisputeEvidenceActionContext;
}
/** Context of the `update` action on the `shopifyDisputeEvidence` model. */
export interface UpdateShopifyDisputeEvidenceActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyDisputeEvidence` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyDisputeEvidence, DefaultShopifyDisputeEvidenceServerSelection>>;
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
    context: UpdateShopifyDisputeEvidenceActionContext;
}
/** Context of the `delete` action on the `shopifyDisputeEvidence` model. */
export interface DeleteShopifyDisputeEvidenceActionContext extends AmbientContext {
    /**
    * The model this action is operating on
    */
    model: NotYetTyped;
    /**
    * An object specifying the `shopifyDisputeEvidence` record this action is operating on.
    */
    record: GadgetRecord<Select<ShopifyDisputeEvidence, DefaultShopifyDisputeEvidenceServerSelection>>;
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
    context: DeleteShopifyDisputeEvidenceActionContext;
}
