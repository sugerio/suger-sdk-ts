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

import { AwsMarketplaceCppoOpportunityNegativeTargeting } from '../models/AwsMarketplaceCppoOpportunityNegativeTargeting';
import { AwsMarketplaceCppoOpportunityPositiveTargeting } from '../models/AwsMarketplaceCppoOpportunityPositiveTargeting';
import { AwsMarketplaceCppoOpportunityRuleType } from '../models/AwsMarketplaceCppoOpportunityRuleType';
import { HttpFile } from '../http/http';

export class AwsMarketplaceCppoOpportunityRule {
    'availabilityEndDate'?: string;
    /**
    * Output only.
    */
    'id'?: string;
    /**
    * Negative targeting defines the criteria which any customer\'s profile should fulfill to be restricted to access the offer.
    */
    'negativeTargeting'?: AwsMarketplaceCppoOpportunityNegativeTargeting;
    'offersMaxQuantity'?: number;
    /**
    * Positive targeting defines the criteria which any buyer\'s profile should fulfill in order to be allowed to access the offer.
    */
    'positiveTargeting'?: AwsMarketplaceCppoOpportunityPositiveTargeting;
    'resellerAccountId'?: string;
    'resellerLegalName'?: string;
    'type'?: AwsMarketplaceCppoOpportunityRuleType;
    'usage'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "availabilityEndDate",
            "baseName": "AvailabilityEndDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "Id",
            "type": "string",
            "format": ""
        },
        {
            "name": "negativeTargeting",
            "baseName": "NegativeTargeting",
            "type": "AwsMarketplaceCppoOpportunityNegativeTargeting",
            "format": ""
        },
        {
            "name": "offersMaxQuantity",
            "baseName": "OffersMaxQuantity",
            "type": "number",
            "format": ""
        },
        {
            "name": "positiveTargeting",
            "baseName": "PositiveTargeting",
            "type": "AwsMarketplaceCppoOpportunityPositiveTargeting",
            "format": ""
        },
        {
            "name": "resellerAccountId",
            "baseName": "ResellerAccountId",
            "type": "string",
            "format": ""
        },
        {
            "name": "resellerLegalName",
            "baseName": "ResellerLegalName",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "AwsMarketplaceCppoOpportunityRuleType",
            "format": ""
        },
        {
            "name": "usage",
            "baseName": "Usage",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AwsMarketplaceCppoOpportunityRule.attributeTypeMap;
    }

    public constructor() {
    }
}


