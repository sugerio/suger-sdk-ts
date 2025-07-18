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

export class UsageCount {
    /**
    * The count of this dimension usage records that are handled as credit.
    */
    'creditCount'?: number;
    /**
    * The count of this dimension usage records that are handled as included in IncludedBaseQuantity
    */
    'includedCount'?: number;
    /**
    * The count of this dimension usage records that are reported to cloud vendors.
    */
    'reportedCount'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "creditCount",
            "baseName": "creditCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "includedCount",
            "baseName": "includedCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "reportedCount",
            "baseName": "reportedCount",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UsageCount.attributeTypeMap;
    }

    public constructor() {
    }
}
