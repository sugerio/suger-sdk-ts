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

export class AzureMarketplacePriceAndAvailabilityCustomMeterItem {
    'displayName'?: string;
    /**
    * Suger\'s custom field, for Suger internal use only. Not from Microsoft official schema.
    */
    'price'?: number;
    'unitOfMeasure'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": ""
        },
        {
            "name": "unitOfMeasure",
            "baseName": "unitOfMeasure",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AzureMarketplacePriceAndAvailabilityCustomMeterItem.attributeTypeMap;
    }

    public constructor() {
    }
}
