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

import { HttpFile } from '../http/http';

export class AzureMarketplacePriceAndAvailabilityPrivateOfferCustomMeters {
    /**
    * One of PriceAndAvailabilityCustomMeter_USD or PriceAndAvailabilityCustomMeter_PerMarket
    */
    'meters'?: any;
    /**
    * default \"usd\"
    */
    'priceInputOption'?: AzureMarketplacePriceAndAvailabilityPrivateOfferCustomMetersPriceInputOptionEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "meters",
            "baseName": "meters",
            "type": "any",
            "format": ""
        },
        {
            "name": "priceInputOption",
            "baseName": "priceInputOption",
            "type": "AzureMarketplacePriceAndAvailabilityPrivateOfferCustomMetersPriceInputOptionEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AzureMarketplacePriceAndAvailabilityPrivateOfferCustomMeters.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum AzureMarketplacePriceAndAvailabilityPrivateOfferCustomMetersPriceInputOptionEnum {
    PerMarket = 'perMarket',
    Usd = 'usd'
}

