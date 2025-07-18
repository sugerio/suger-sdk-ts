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

import { GithubComAwsAwsSdkGoV2ServiceMarketplacemeteringTypesTag } from '../models/GithubComAwsAwsSdkGoV2ServiceMarketplacemeteringTypesTag';
import { HttpFile } from '../http/http';

export class TypesUsageAllocation {
    /**
    * The total quantity allocated to this bucket of usage.  This member is required.
    */
    'allocatedUsageQuantity'?: number;
    /**
    * The set of tags that define the bucket of usage. For the bucket of items with no tags, this parameter can be left out.
    */
    'tags'?: Array<GithubComAwsAwsSdkGoV2ServiceMarketplacemeteringTypesTag>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "allocatedUsageQuantity",
            "baseName": "allocatedUsageQuantity",
            "type": "number",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<GithubComAwsAwsSdkGoV2ServiceMarketplacemeteringTypesTag>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TypesUsageAllocation.attributeTypeMap;
    }

    public constructor() {
    }
}
