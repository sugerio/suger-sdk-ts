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

import { AzureMarketplacePriceAndAvailabilityCorePrice } from '../models/AzureMarketplacePriceAndAvailabilityCorePrice';
import { AzureMarketplacePriceAndAvailabilityCustomMeterPrice } from '../models/AzureMarketplacePriceAndAvailabilityCustomMeterPrice';
import { AzureMarketplacePriceAndAvailabilityRecurrentPrice } from '../models/AzureMarketplacePriceAndAvailabilityRecurrentPrice';
import { AzureMarketplacePriceAndAvailabilitySystemMeterPrice } from '../models/AzureMarketplacePriceAndAvailabilitySystemMeterPrice';
import { HttpFile } from '../http/http';

export class AzureMarketplacePriceAndAvailabilityPrice {
    'corePricing'?: AzureMarketplacePriceAndAvailabilityCorePrice;
    'customMeters'?: AzureMarketplacePriceAndAvailabilityCustomMeterPrice;
    'licenseModel'?: AzureMarketplacePriceAndAvailabilityPriceLicenseModelEnum;
    'recurrentPrice'?: AzureMarketplacePriceAndAvailabilityRecurrentPrice;
    'systemMeterPricing'?: AzureMarketplacePriceAndAvailabilitySystemMeterPrice;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "corePricing",
            "baseName": "corePricing",
            "type": "AzureMarketplacePriceAndAvailabilityCorePrice",
            "format": ""
        },
        {
            "name": "customMeters",
            "baseName": "customMeters",
            "type": "AzureMarketplacePriceAndAvailabilityCustomMeterPrice",
            "format": ""
        },
        {
            "name": "licenseModel",
            "baseName": "licenseModel",
            "type": "AzureMarketplacePriceAndAvailabilityPriceLicenseModelEnum",
            "format": ""
        },
        {
            "name": "recurrentPrice",
            "baseName": "recurrentPrice",
            "type": "AzureMarketplacePriceAndAvailabilityRecurrentPrice",
            "format": ""
        },
        {
            "name": "systemMeterPricing",
            "baseName": "systemMeterPricing",
            "type": "AzureMarketplacePriceAndAvailabilitySystemMeterPrice",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AzureMarketplacePriceAndAvailabilityPrice.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum AzureMarketplacePriceAndAvailabilityPriceLicenseModelEnum {
    Byol = 'byol',
    PayAsYouGo = 'payAsYouGo'
}

