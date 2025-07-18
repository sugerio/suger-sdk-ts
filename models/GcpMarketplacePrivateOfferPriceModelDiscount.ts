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

import { GcpAmountUnit } from '../models/GcpAmountUnit';
import { GcpPriceValue } from '../models/GcpPriceValue';
import { HttpFile } from '../http/http';

export class GcpMarketplacePrivateOfferPriceModelDiscount {
    /**
    * such as {\"units\": \"0\", \"nanos\": 0} as no discount, or {\"units\": \"10\", \"nanos\": 0} as 10% off discount
    */
    'discountPercentage'?: GcpAmountUnit;
    /**
    * The discounted price of the private offer. If the discount is 10% off, and the original price is $100, then the discounted price is $90.
    */
    'discountedPrice'?: GcpPriceValue;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "discountPercentage",
            "baseName": "discountPercentage",
            "type": "GcpAmountUnit",
            "format": ""
        },
        {
            "name": "discountedPrice",
            "baseName": "discountedPrice",
            "type": "GcpPriceValue",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GcpMarketplacePrivateOfferPriceModelDiscount.attributeTypeMap;
    }

    public constructor() {
    }
}
