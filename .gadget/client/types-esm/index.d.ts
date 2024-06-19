/**
* This is the Gadget API client library for:
*
*                                   _           _
*   _   _ _ __  _ __ ___   __ _  __| |_ __ ___ (_)_ __
*  | | | | '_ \| '_ ` _ \ / _` |/ _` | '_ ` _ \| | '_ \
*  | |_| | | | | | | | | | (_| | (_| | | | | | | | | | |
*   \__, |_| |_|_| |_| |_|\__,_|\__,_|_| |_| |_|_|_| |_|
*   |___/
*
* Built for environment "Development" at version 14512
* API docs: https://docs.gadget.dev/api/ynmadmin
* Edit this app here: https://ynmadmin.gadget.app/edit
*/
export { BrowserSessionStorageType, GadgetClientError, GadgetConnection, GadgetInternalError, GadgetOperationError, GadgetRecord, GadgetRecordList, GadgetValidationError, InvalidRecordError } from "@gadgetinc/api-client-core";
export type { AuthenticationModeOptions, BrowserSessionAuthenticationModeOptions, ClientOptions, InvalidFieldError, Select } from "@gadgetinc/api-client-core";
export * from "./Client.js";
export * from "./types.js";
declare global {
    interface Window {
        gadgetConfig: {
            apiKeys: {
                shopify: string;
            };
            environment: string;
            env: Record<string, any>;
            authentication?: {
                signInPath: string;
                redirectOnSuccessfulSignInPath: string;
            };
        };
    }
}
