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

import { AwsSnsSubscriptionStatus } from '../models/AwsSnsSubscriptionStatus';
import { HttpFile } from '../http/http';

export class AwsSnsSubscription {
    'endpoint'?: string;
    'protocol'?: string;
    'status'?: AwsSnsSubscriptionStatus;
    'subscriptionArn'?: string;
    'topicArn'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "endpoint",
            "baseName": "Endpoint",
            "type": "string",
            "format": ""
        },
        {
            "name": "protocol",
            "baseName": "Protocol",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "AwsSnsSubscriptionStatus",
            "format": ""
        },
        {
            "name": "subscriptionArn",
            "baseName": "SubscriptionArn",
            "type": "string",
            "format": ""
        },
        {
            "name": "topicArn",
            "baseName": "TopicArn",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AwsSnsSubscription.attributeTypeMap;
    }

    public constructor() {
    }
}


