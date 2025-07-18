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

import { TypesEntitlementValue } from '../models/TypesEntitlementValue';
import { HttpFile } from '../http/http';

export class TypesEntitlement {
    /**
    * The customer identifier is a handle to each unique customer in an application. Customer identifiers are obtained through the ResolveCustomer operation in AWS Marketplace Metering Service.
    */
    'customerIdentifier'?: string;
    /**
    * The dimension for which the given entitlement applies. Dimensions represent categories of capacity in a product and are specified when the product is listed in AWS Marketplace.
    */
    'dimension'?: string;
    /**
    * The expiration date represents the minimum date through which this entitlement is expected to remain valid. For contractual products listed on AWS Marketplace, the expiration date is the date at which the customer will renew or cancel their contract. Customers who are opting to renew their contract will still have entitlements with an expiration date.
    */
    'expirationDate'?: string;
    /**
    * The product code for which the given entitlement applies. Product codes are provided by AWS Marketplace when the product listing is created.
    */
    'productCode'?: string;
    /**
    * The EntitlementValue represents the amount of capacity that the customer is entitled to for the product.
    */
    'value'?: TypesEntitlementValue;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "customerIdentifier",
            "baseName": "customerIdentifier",
            "type": "string",
            "format": ""
        },
        {
            "name": "dimension",
            "baseName": "dimension",
            "type": "string",
            "format": ""
        },
        {
            "name": "expirationDate",
            "baseName": "expirationDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "productCode",
            "baseName": "productCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "TypesEntitlementValue",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TypesEntitlement.attributeTypeMap;
    }

    public constructor() {
    }
}
