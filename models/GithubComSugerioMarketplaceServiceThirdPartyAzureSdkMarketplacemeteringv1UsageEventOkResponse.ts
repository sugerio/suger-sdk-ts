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

import { GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1UsageEventStatusEnum } from '../models/GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1UsageEventStatusEnum';
import { HttpFile } from '../http/http';

export class GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1UsageEventOkResponse {
    /**
    * Dimension identifier
    */
    'dimension'?: string;
    /**
    * Time in UTC when the usage event occurred
    */
    'effectiveStartTime'?: string;
    /**
    * Time this message was created in UTC
    */
    'messageTime'?: string;
    /**
    * Plan associated with the purchased offer
    */
    'planId'?: string;
    /**
    * Number of units consumed
    */
    'quantity'?: number;
    /**
    * Identifier of the resource against which usage is emitted
    */
    'resourceId'?: string;
    /**
    * Identifier of the managed app resource against which usage is emitted
    */
    'resourceUri'?: string;
    /**
    * Status of the operation.
    */
    'status'?: GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1UsageEventStatusEnum;
    /**
    * Unique identifier associated with the usage event
    */
    'usageEventId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dimension",
            "baseName": "dimension",
            "type": "string",
            "format": ""
        },
        {
            "name": "effectiveStartTime",
            "baseName": "effectiveStartTime",
            "type": "string",
            "format": ""
        },
        {
            "name": "messageTime",
            "baseName": "messageTime",
            "type": "string",
            "format": ""
        },
        {
            "name": "planId",
            "baseName": "planId",
            "type": "string",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": ""
        },
        {
            "name": "resourceId",
            "baseName": "resourceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourceUri",
            "baseName": "resourceUri",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1UsageEventStatusEnum",
            "format": ""
        },
        {
            "name": "usageEventId",
            "baseName": "usageEventId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1UsageEventOkResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


