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

import { BillableDimensionFeeDetail } from '../models/BillableDimensionFeeDetail';
import { BillingDiscount } from '../models/BillingDiscount';
import { BillingMinimumCommitScope } from '../models/BillingMinimumCommitScope';
import { MeteringUsageRecordGroupByKey } from '../models/MeteringUsageRecordGroupByKey';
import { PriceModelCategory } from '../models/PriceModelCategory';
import { HttpFile } from '../http/http';

export class BillableDimensionPriceModelDetail {
    /**
    * Amount is the amount that is calculated based on the FeeExpression
    */
    'amount'?: number;
    /**
    * BillableMetricKey is the key of the billable metric
    */
    'billableMetricKey'?: MeteringUsageRecordGroupByKey;
    /**
    * Category of this billable dimension.
    */
    'category'?: PriceModelCategory;
    /**
    * Details is the details of the pricing model that is used to show what the amount is for.
    */
    'details'?: Array<BillableDimensionFeeDetail>;
    /**
    * The discount of this billable dimension if applicable.
    */
    'discount'?: BillingDiscount;
    /**
    * DiscountExpression is the expression used to calculate the discount that is used to show how the discount is calculated.
    */
    'discountExpression'?: string;
    /**
    * Flag to indicate if this period is a trial period.
    */
    'isTrial'?: boolean;
    /**
    * MinimumCommit is the minimum commit amount that is used to show the minimum commit amount. Will be ignored if the value is 0 or less.
    */
    'minimumCommit'?: number;
    /**
    * The minimum commit scope. The default value is \"DIMENSION\" if not set.
    */
    'minimumCommitScope'?: BillingMinimumCommitScope;
    /**
    * Name of this billable dimension.
    */
    'name'?: string;
    /**
    * Final quantity of the billable dimension in the invoice period, which calculates the fee in price model. It may be the sum value of count/sum/unique_count or latest/max value according to different aggregation type.
    */
    'quantity'?: number;

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
            "name": "billableMetricKey",
            "baseName": "billableMetricKey",
            "type": "MeteringUsageRecordGroupByKey",
            "format": ""
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "PriceModelCategory",
            "format": ""
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "Array<BillableDimensionFeeDetail>",
            "format": ""
        },
        {
            "name": "discount",
            "baseName": "discount",
            "type": "BillingDiscount",
            "format": ""
        },
        {
            "name": "discountExpression",
            "baseName": "discountExpression",
            "type": "string",
            "format": ""
        },
        {
            "name": "isTrial",
            "baseName": "isTrial",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "minimumCommit",
            "baseName": "minimumCommit",
            "type": "number",
            "format": ""
        },
        {
            "name": "minimumCommitScope",
            "baseName": "minimumCommitScope",
            "type": "BillingMinimumCommitScope",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BillableDimensionPriceModelDetail.attributeTypeMap;
    }

    public constructor() {
    }
}


