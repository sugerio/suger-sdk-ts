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

import { CompanyInfo } from '../models/CompanyInfo';
import { Partner } from '../models/Partner';
import { PaymentConfig } from '../models/PaymentConfig';
import { HttpFile } from '../http/http';

export class CreateBuyerParams {
    /**
    * Adyen customerId of this buyer. If not provided but Partner is ADYEN, will create a new customer on Adyen.
    */
    'adyenCustomerId'?: string;
    /**
    * The Chargebee Customer ID of the buyer. If not provided, the Chargebee Customer ID will not be updated.
    */
    'chargebeeCustomerID'?: string;
    /**
    * Optional. CompanyInfo of the buyer.
    */
    'companyInfo'?: CompanyInfo;
    /**
    * The customer ID to recognize the cloud marketplace buyer in your internal system.
    */
    'customerId'?: string;
    /**
    * The description of the buyer.
    */
    'description'?: string;
    /**
    * Optional. The Lago Customer ID of the buyer.
    */
    'lagoCustomerId'?: string;
    /**
    * Optional. The Metronome Customer ID of the buyer.
    */
    'metronomeCustomerId'?: string;
    /**
    * The name of the buyer.
    */
    'name'?: string;
    /**
    * Optional. The Orb Customer ID of the buyer.
    */
    'orbCustomerId'?: string;
    /**
    * The channel partner where this buyer is billed. Only STRIPE & ADYEN are supported at the moment.
    */
    'partner'?: Partner;
    /**
    * Payment config for billing.
    */
    'paymentConfig'?: PaymentConfig;
    /**
    * The Quickbooks Customer ID of the buyer. If not provided, the Quickbooks Customer ID will not be updated.
    */
    'quickbooksCustomerId'?: string;
    /**
    * Stripe customerId of this buyer. If not provided but Partner is STRIPE, will create a new customer on stripe.
    */
    'stripeCustomerId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "adyenCustomerId",
            "baseName": "adyenCustomerId",
            "type": "string",
            "format": ""
        },
        {
            "name": "chargebeeCustomerID",
            "baseName": "chargebeeCustomerID",
            "type": "string",
            "format": ""
        },
        {
            "name": "companyInfo",
            "baseName": "companyInfo",
            "type": "CompanyInfo",
            "format": ""
        },
        {
            "name": "customerId",
            "baseName": "customerId",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "lagoCustomerId",
            "baseName": "lagoCustomerId",
            "type": "string",
            "format": ""
        },
        {
            "name": "metronomeCustomerId",
            "baseName": "metronomeCustomerId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "orbCustomerId",
            "baseName": "orbCustomerId",
            "type": "string",
            "format": ""
        },
        {
            "name": "partner",
            "baseName": "partner",
            "type": "Partner",
            "format": ""
        },
        {
            "name": "paymentConfig",
            "baseName": "paymentConfig",
            "type": "PaymentConfig",
            "format": ""
        },
        {
            "name": "quickbooksCustomerId",
            "baseName": "quickbooksCustomerId",
            "type": "string",
            "format": ""
        },
        {
            "name": "stripeCustomerId",
            "baseName": "stripeCustomerId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateBuyerParams.attributeTypeMap;
    }

    public constructor() {
    }
}


