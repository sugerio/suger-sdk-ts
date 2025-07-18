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

import { BillableMetricAggregationType } from '../models/BillableMetricAggregationType';
import { BillableMetricInfo } from '../models/BillableMetricInfo';
import { BillableMetricStatus } from '../models/BillableMetricStatus';
import { HttpFile } from '../http/http';

export class BillableMetric {
    'aggregationType'?: BillableMetricAggregationType;
    'creationTime'?: Date;
    'description'?: string;
    'id'?: string;
    'info'?: BillableMetricInfo;
    'lastUpdateTime'?: Date;
    'name'?: string;
    'organizationId'?: string;
    'status'?: BillableMetricStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "aggregationType",
            "baseName": "aggregationType",
            "type": "BillableMetricAggregationType",
            "format": ""
        },
        {
            "name": "creationTime",
            "baseName": "creationTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "description",
            "baseName": "description",
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
            "name": "info",
            "baseName": "info",
            "type": "BillableMetricInfo",
            "format": ""
        },
        {
            "name": "lastUpdateTime",
            "baseName": "lastUpdateTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "organizationId",
            "baseName": "organizationId",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "BillableMetricStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BillableMetric.attributeTypeMap;
    }

    public constructor() {
    }
}


