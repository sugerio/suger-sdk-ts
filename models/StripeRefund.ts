/**
 * Suger API
 * CRUD operations on a set of resources, including organizations, products, offers, entitlements, usage record groups for meterting, etc.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@suger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { StripeRefundDestinationDetails } from '../models/StripeRefundDestinationDetails';
import { StripeRefundStatus } from '../models/StripeRefundStatus';
import { HttpFile } from '../http/http';

export class StripeRefund {
    /**
    * ID of the charge that\'s refunded.
    */
    'chargeId'?: string;
    /**
    * Transaction-specific details for the refund.
    */
    'estinationDetails'?: StripeRefundDestinationDetails;
    /**
    * After the refund fails, this balance transaction describes the adjustment made on your account balance that reverses the initial balance transaction.
    */
    'failureBalanceTransactionId'?: string;
    /**
    * Provides the reason for the refund failure. Possible values are: `lost_or_stolen_card`, `expired_or_canceled_card`, `charge_for_pending_refund_disputed`, `insufficient_funds`, `declined`, `merchant_request`, or `unknown`.
    */
    'failureReason'?: string;
    'id'?: string;
    /**
    * ID of the PaymentIntent that\'s refunded.
    */
    'paymentIntentId'?: string;
    /**
    * Status of the refund. This can be `pending`, `requires_action`, `succeeded`, `failed`, or `canceled`. Learn more about [failed refunds](https://stripe.com/docs/refunds#failed-refunds).
    */
    'status'?: StripeRefundStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chargeId",
            "baseName": "chargeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "estinationDetails",
            "baseName": "estinationDetails",
            "type": "StripeRefundDestinationDetails",
            "format": ""
        },
        {
            "name": "failureBalanceTransactionId",
            "baseName": "failureBalanceTransactionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "failureReason",
            "baseName": "failureReason",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentIntentId",
            "baseName": "paymentIntentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "StripeRefundStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StripeRefund.attributeTypeMap;
    }

    public constructor() {
    }
}


