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

import { AlibabaMarketplaceProductSkuModulePropertyValues } from '../models/AlibabaMarketplaceProductSkuModulePropertyValues';
import { HttpFile } from '../http/http';

export class AlibabaMarketplaceProductSkuModuleProperty {
    'displayUnit'?: string;
    'key'?: string;
    'name'?: string;
    'propertyValues'?: AlibabaMarketplaceProductSkuModulePropertyValues;
    'showType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "displayUnit",
            "baseName": "DisplayUnit",
            "type": "string",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "Key",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string",
            "format": ""
        },
        {
            "name": "propertyValues",
            "baseName": "PropertyValues",
            "type": "AlibabaMarketplaceProductSkuModulePropertyValues",
            "format": ""
        },
        {
            "name": "showType",
            "baseName": "showType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AlibabaMarketplaceProductSkuModuleProperty.attributeTypeMap;
    }

    public constructor() {
    }
}
