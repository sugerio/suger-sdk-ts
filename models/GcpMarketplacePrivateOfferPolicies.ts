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

import { GcpMarketplaceOfferDealType } from '../models/GcpMarketplaceOfferDealType';
import { HttpFile } from '../http/http';

export class GcpMarketplacePrivateOfferPolicies {
    /**
    * The cancellation policy of the offer.
    */
    'cancellationPolicy'?: string;
    /**
    * The default renewal policy of the offer.
    */
    'defaultRenewalPolicy'?: string;
    /**
    * The downgrade policy of the offer.
    */
    'downgradePolicy'?: string;
    /**
    * The max renewal times of the offer.
    */
    'maxRenewalTimes'?: string;
    /**
    * The offer deal type of the offer.
    */
    'offerDealType'?: GcpMarketplaceOfferDealType;
    /**
    * The purchase approval of the offer.
    */
    'purchaseApproval'?: string;
    /**
    * The purchase approval override of the offer.
    */
    'purchaseApprovalOverride'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cancellationPolicy",
            "baseName": "cancellationPolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultRenewalPolicy",
            "baseName": "defaultRenewalPolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "downgradePolicy",
            "baseName": "downgradePolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "maxRenewalTimes",
            "baseName": "maxRenewalTimes",
            "type": "string",
            "format": ""
        },
        {
            "name": "offerDealType",
            "baseName": "offerDealType",
            "type": "GcpMarketplaceOfferDealType",
            "format": ""
        },
        {
            "name": "purchaseApproval",
            "baseName": "purchaseApproval",
            "type": "string",
            "format": ""
        },
        {
            "name": "purchaseApprovalOverride",
            "baseName": "purchaseApprovalOverride",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GcpMarketplacePrivateOfferPolicies.attributeTypeMap;
    }

    public constructor() {
    }
}


