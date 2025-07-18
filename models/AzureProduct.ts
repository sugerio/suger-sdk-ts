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

import { AzureMarketplacePriceAndAvailabilityPrivateOfferPlan } from '../models/AzureMarketplacePriceAndAvailabilityPrivateOfferPlan';
import { AzureProductAvailability } from '../models/AzureProductAvailability';
import { AzureProductBranch } from '../models/AzureProductBranch';
import { AzureProductListing } from '../models/AzureProductListing';
import { AzureProductPackageConfiguration } from '../models/AzureProductPackageConfiguration';
import { AzureProductProperty } from '../models/AzureProductProperty';
import { AzureProductSetup } from '../models/AzureProductSetup';
import { AzureProductSubmission } from '../models/AzureProductSubmission';
import { AzureProductVariant } from '../models/AzureProductVariant';
import { AzureTypeValue } from '../models/AzureTypeValue';
import { HttpFile } from '../http/http';

export class AzureProduct {
    'availabilities'?: Array<AzureProductAvailability>;
    'branches'?: Array<AzureProductBranch>;
    'externalIDs'?: Array<AzureTypeValue>;
    'id'?: string;
    'isModularPublishing'?: boolean;
    'listings'?: Array<AzureProductListing>;
    'name'?: string;
    'packageConfigurations'?: Array<AzureProductPackageConfiguration>;
    /**
    * All plans under this product
    */
    'plans'?: Array<AzureMarketplacePriceAndAvailabilityPrivateOfferPlan>;
    'properties'?: Array<AzureProductProperty>;
    'resourceType'?: string;
    /**
    * Not original fields. They are populated by other API calls
    */
    'setup'?: AzureProductSetup;
    'submissions'?: Array<AzureProductSubmission>;
    'variants'?: Array<AzureProductVariant>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "availabilities",
            "baseName": "availabilities",
            "type": "Array<AzureProductAvailability>",
            "format": ""
        },
        {
            "name": "branches",
            "baseName": "branches",
            "type": "Array<AzureProductBranch>",
            "format": ""
        },
        {
            "name": "externalIDs",
            "baseName": "externalIDs",
            "type": "Array<AzureTypeValue>",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "isModularPublishing",
            "baseName": "isModularPublishing",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "listings",
            "baseName": "listings",
            "type": "Array<AzureProductListing>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "packageConfigurations",
            "baseName": "packageConfigurations",
            "type": "Array<AzureProductPackageConfiguration>",
            "format": ""
        },
        {
            "name": "plans",
            "baseName": "plans",
            "type": "Array<AzureMarketplacePriceAndAvailabilityPrivateOfferPlan>",
            "format": ""
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Array<AzureProductProperty>",
            "format": ""
        },
        {
            "name": "resourceType",
            "baseName": "resourceType",
            "type": "string",
            "format": ""
        },
        {
            "name": "setup",
            "baseName": "setup",
            "type": "AzureProductSetup",
            "format": ""
        },
        {
            "name": "submissions",
            "baseName": "submissions",
            "type": "Array<AzureProductSubmission>",
            "format": ""
        },
        {
            "name": "variants",
            "baseName": "variants",
            "type": "Array<AzureProductVariant>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AzureProduct.attributeTypeMap;
    }

    public constructor() {
    }
}
