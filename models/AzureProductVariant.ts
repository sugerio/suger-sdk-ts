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

import { AzureGovernmentCertification } from '../models/AzureGovernmentCertification';
import { AzureProductFeatureAvailability } from '../models/AzureProductFeatureAvailability';
import { AzureTypeValue } from '../models/AzureTypeValue';
import { HttpFile } from '../http/http';

export class AzureProductVariant {
    'azureGovernmentCertifications'?: Array<AzureGovernmentCertification>;
    'cloudAvailabilities'?: Array<string>;
    'conversionPaths'?: string;
    'extendedProperties'?: Array<AzureTypeValue>;
    'externalID'?: string;
    /**
    * Not original fields. They are populated by other API calls
    */
    'featureAvailabilities'?: Array<AzureProductFeatureAvailability>;
    'friendlyName'?: string;
    'id'?: string;
    'leadGenID'?: string;
    'referenceVariantID'?: string;
    'resourceType'?: AzureProductVariantResourceTypeEnum;
    'state'?: AzureProductVariantStateEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "azureGovernmentCertifications",
            "baseName": "azureGovernmentCertifications",
            "type": "Array<AzureGovernmentCertification>",
            "format": ""
        },
        {
            "name": "cloudAvailabilities",
            "baseName": "cloudAvailabilities",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "conversionPaths",
            "baseName": "conversionPaths",
            "type": "string",
            "format": ""
        },
        {
            "name": "extendedProperties",
            "baseName": "extendedProperties",
            "type": "Array<AzureTypeValue>",
            "format": ""
        },
        {
            "name": "externalID",
            "baseName": "externalID",
            "type": "string",
            "format": ""
        },
        {
            "name": "featureAvailabilities",
            "baseName": "featureAvailabilities",
            "type": "Array<AzureProductFeatureAvailability>",
            "format": ""
        },
        {
            "name": "friendlyName",
            "baseName": "friendlyName",
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
            "name": "leadGenID",
            "baseName": "leadGenID",
            "type": "string",
            "format": ""
        },
        {
            "name": "referenceVariantID",
            "baseName": "referenceVariantID",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourceType",
            "baseName": "resourceType",
            "type": "AzureProductVariantResourceTypeEnum",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "AzureProductVariantStateEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AzureProductVariant.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum AzureProductVariantResourceTypeEnum {
    AzureSkuVariant = 'AzureSkuVariant',
    AzureTestDriveVariant = 'AzureTestDriveVariant'
}
export enum AzureProductVariantStateEnum {
    InActive = 'InActive',
    Active = 'Active'
}

