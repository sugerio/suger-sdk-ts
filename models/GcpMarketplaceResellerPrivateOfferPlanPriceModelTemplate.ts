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

import { GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateCommitment } from '../models/GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateCommitment';
import { GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateFixedPrice } from '../models/GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateFixedPrice';
import { GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateOverage } from '../models/GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateOverage';
import { GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplatePayg } from '../models/GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplatePayg';
import { HttpFile } from '../http/http';

export class GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplate {
    /**
    * in format of \"projects/{projectNumber}/services/service-name.endpoints.gcp-project-id.cloud.goog/standardOffers/base-offer-id\"
    */
    'baseOffer'?: string;
    'commitment'?: GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateCommitment;
    'consumption'?: GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateConsumptionEnum;
    'fixedPrice'?: GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateFixedPrice;
    'overage'?: GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateOverage;
    'payg'?: GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplatePayg;
    'subscription'?: GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateSubscriptionEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "baseOffer",
            "baseName": "baseOffer",
            "type": "string",
            "format": ""
        },
        {
            "name": "commitment",
            "baseName": "commitment",
            "type": "GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateCommitment",
            "format": ""
        },
        {
            "name": "consumption",
            "baseName": "consumption",
            "type": "GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateConsumptionEnum",
            "format": ""
        },
        {
            "name": "fixedPrice",
            "baseName": "fixedPrice",
            "type": "GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateFixedPrice",
            "format": ""
        },
        {
            "name": "overage",
            "baseName": "overage",
            "type": "GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateOverage",
            "format": ""
        },
        {
            "name": "payg",
            "baseName": "payg",
            "type": "GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplatePayg",
            "format": ""
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateSubscriptionEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplate.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateConsumptionEnum {
    Overage = 'overage',
    Payg = 'payg'
}
export enum GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateSubscriptionEnum {
    FixedPrice = 'fixedPrice',
    Commitment = 'commitment'
}

