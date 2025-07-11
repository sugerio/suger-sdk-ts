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

import { BillingDiscount } from '../models/BillingDiscount';
import { HttpFile } from '../http/http';

export class InvoiceAdjustDiscountByDimension {
    'dimensionKey'?: string;
    'discount'?: BillingDiscount;
    'reason'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dimensionKey",
            "baseName": "dimensionKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "discount",
            "baseName": "discount",
            "type": "BillingDiscount",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InvoiceAdjustDiscountByDimension.attributeTypeMap;
    }

    public constructor() {
    }
}
