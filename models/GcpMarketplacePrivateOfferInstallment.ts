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

import { GcpMarketplacePrivateOfferPriceModel } from '../models/GcpMarketplacePrivateOfferPriceModel';
import { HttpFile } from '../http/http';

export class GcpMarketplacePrivateOfferInstallment {
    'priceModel'?: GcpMarketplacePrivateOfferPriceModel;
    'startTime'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "priceModel",
            "baseName": "priceModel",
            "type": "GcpMarketplacePrivateOfferPriceModel",
            "format": ""
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return GcpMarketplacePrivateOfferInstallment.attributeTypeMap;
    }

    public constructor() {
    }
}
