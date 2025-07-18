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

import { RevenueRecordInfo } from '../models/RevenueRecordInfo';
import { HttpFile } from '../http/http';

export class RevenueRecord {
    /**
    * The revenue amount for the revenue report
    */
    'amount'?: number;
    'buyerID'?: string;
    /**
    * The revenue amount that the seller/ISV can collect.
    */
    'collectableAmount'?: number;
    /**
    * The currency of the revenue in ISO 4217 format, such as \"USD\".
    */
    'currency'?: string;
    /**
    * The date for the revenue report
    */
    'date'?: Date;
    'disburseAmount'?: number;
    'disburseDate'?: Date;
    'entitlementID'?: string;
    'id'?: string;
    'info'?: RevenueRecordInfo;
    'invoiceAmount'?: number;
    'invoiceDate'?: Date;
    'organizationID'?: string;
    /**
    * The value is from type Partner string
    */
    'partner'?: string;
    'paymentDueDate'?: Date;
    'productID'?: string;
    'refundDisburseAmount'?: number;
    'refundDisburseDate'?: Date;
    'refundInvoiceAmount'?: number;
    'refundInvoiceDate'?: Date;
    'taxAmount'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "buyerID",
            "baseName": "buyerID",
            "type": "string",
            "format": ""
        },
        {
            "name": "collectableAmount",
            "baseName": "collectableAmount",
            "type": "number",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "disburseAmount",
            "baseName": "disburseAmount",
            "type": "number",
            "format": ""
        },
        {
            "name": "disburseDate",
            "baseName": "disburseDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "entitlementID",
            "baseName": "entitlementID",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "info",
            "baseName": "info",
            "type": "RevenueRecordInfo",
            "format": ""
        },
        {
            "name": "invoiceAmount",
            "baseName": "invoiceAmount",
            "type": "number",
            "format": ""
        },
        {
            "name": "invoiceDate",
            "baseName": "invoiceDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "organizationID",
            "baseName": "organizationID",
            "type": "string",
            "format": ""
        },
        {
            "name": "partner",
            "baseName": "partner",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentDueDate",
            "baseName": "paymentDueDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "productID",
            "baseName": "productID",
            "type": "string",
            "format": ""
        },
        {
            "name": "refundDisburseAmount",
            "baseName": "refundDisburseAmount",
            "type": "number",
            "format": ""
        },
        {
            "name": "refundDisburseDate",
            "baseName": "refundDisburseDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "refundInvoiceAmount",
            "baseName": "refundInvoiceAmount",
            "type": "number",
            "format": ""
        },
        {
            "name": "refundInvoiceDate",
            "baseName": "refundInvoiceDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "taxAmount",
            "baseName": "taxAmount",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RevenueRecord.attributeTypeMap;
    }

    public constructor() {
    }
}
