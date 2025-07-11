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

import { BillableMetricFilterOperation } from '../models/BillableMetricFilterOperation';
import { BillableMetricFilterValueType } from '../models/BillableMetricFilterValueType';
import { HttpFile } from '../http/http';

export class BillableMetricFilter {
    'name'?: string;
    'operation'?: BillableMetricFilterOperation;
    /**
    * The value of the filter. The type of the value depends on the valueType.
    */
    'value'?: any;
    'valueType'?: BillableMetricFilterValueType;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "operation",
            "baseName": "operation",
            "type": "BillableMetricFilterOperation",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "any",
            "format": ""
        },
        {
            "name": "valueType",
            "baseName": "valueType",
            "type": "BillableMetricFilterValueType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BillableMetricFilter.attributeTypeMap;
    }

    public constructor() {
    }
}


