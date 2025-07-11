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

import { GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1UsageBatchEventOkMessage } from '../models/GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1UsageBatchEventOkMessage';
import { HttpFile } from '../http/http';

export class GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1BatchUsageEventOkResponse {
    'count'?: number;
    'result'?: Array<GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1UsageBatchEventOkMessage>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "result",
            "baseName": "result",
            "type": "Array<GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1UsageBatchEventOkMessage>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1BatchUsageEventOkResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
