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

export class GcpMarketplacePurchaseChannel {
    'marketplace'?: boolean;
    'reseller'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "marketplace",
            "baseName": "marketplace",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "reseller",
            "baseName": "reseller",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GcpMarketplacePurchaseChannel.attributeTypeMap;
    }

    public constructor() {
    }
}
