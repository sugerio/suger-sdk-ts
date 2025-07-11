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

import { GcpMarketplacePrivateOfferPriceModelDiscount } from '../models/GcpMarketplacePrivateOfferPriceModelDiscount';
import { GcpPeriodDuration } from '../models/GcpPeriodDuration';
import { HttpFile } from '../http/http';

export class GcpMarketplacePrivateOfferPriceModelFixed {
    'discount'?: GcpMarketplacePrivateOfferPriceModelDiscount;
    'period'?: GcpPeriodDuration;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "discount",
            "baseName": "discount",
            "type": "GcpMarketplacePrivateOfferPriceModelDiscount",
            "format": ""
        },
        {
            "name": "period",
            "baseName": "period",
            "type": "GcpPeriodDuration",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GcpMarketplacePrivateOfferPriceModelFixed.attributeTypeMap;
    }

    public constructor() {
    }
}
