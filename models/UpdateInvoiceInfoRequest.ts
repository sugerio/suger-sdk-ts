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

import { BillingDiscountType } from '../models/BillingDiscountType';
import { HttpFile } from '../http/http';

export class UpdateInvoiceInfoRequest {
    'discountAmount'?: number;
    /**
    * The overall discount of the invoice.
    */
    'discountType'?: BillingDiscountType;
    'dueDate'?: string;
    'memo'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "discountAmount",
            "baseName": "discountAmount",
            "type": "number",
            "format": ""
        },
        {
            "name": "discountType",
            "baseName": "discountType",
            "type": "BillingDiscountType",
            "format": ""
        },
        {
            "name": "dueDate",
            "baseName": "dueDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "memo",
            "baseName": "memo",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateInvoiceInfoRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


