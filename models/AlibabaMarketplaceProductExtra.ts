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

import { HttpFile } from '../http/http';

export class AlibabaMarketplaceProductExtra {
    'key'?: string;
    'label'?: string;
    'order'?: number;
    'type'?: string;
    'values'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "key",
            "baseName": "Key",
            "type": "string",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "Label",
            "type": "string",
            "format": ""
        },
        {
            "name": "order",
            "baseName": "Order",
            "type": "number",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "string",
            "format": ""
        },
        {
            "name": "values",
            "baseName": "Values",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AlibabaMarketplaceProductExtra.attributeTypeMap;
    }

    public constructor() {
    }
}
