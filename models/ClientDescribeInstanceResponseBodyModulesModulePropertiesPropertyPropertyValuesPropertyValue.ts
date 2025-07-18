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

export class ClientDescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValuesPropertyValue {
    'displayName'?: string;
    'max'?: string;
    'min'?: string;
    'remark'?: string;
    'step'?: string;
    'type'?: string;
    'value'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "displayName",
            "baseName": "DisplayName",
            "type": "string",
            "format": ""
        },
        {
            "name": "max",
            "baseName": "Max",
            "type": "string",
            "format": ""
        },
        {
            "name": "min",
            "baseName": "Min",
            "type": "string",
            "format": ""
        },
        {
            "name": "remark",
            "baseName": "Remark",
            "type": "string",
            "format": ""
        },
        {
            "name": "step",
            "baseName": "Step",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClientDescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValuesPropertyValue.attributeTypeMap;
    }

    public constructor() {
    }
}
