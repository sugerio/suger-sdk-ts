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

import { AzureMarketplaceCustomAmendment } from '../models/AzureMarketplaceCustomAmendment';
import { AzureMarketplaceResourceLifecycleState } from '../models/AzureMarketplaceResourceLifecycleState';
import { AzureMarketplaceValidation } from '../models/AzureMarketplaceValidation';
import { HttpFile } from '../http/http';

export class AzureMarketplaceProperty {
    'schema'?: string;
    'appVersion'?: string;
    'categories'?: { [key: string]: Array<string>; };
    'cloudIndustries'?: { [key: string]: Array<string>; };
    'customAmendments'?: Array<AzureMarketplaceCustomAmendment>;
    'id'?: string;
    'industries'?: { [key: string]: Array<string>; };
    'kind'?: AzureMarketplacePropertyKindEnum;
    'lifecycleState'?: AzureMarketplaceResourceLifecycleState;
    'product'?: string;
    'resourceName'?: string;
    'standardContractAmendment'?: string;
    'termsConditions'?: AzureMarketplacePropertyTermsConditionsEnum;
    'termsOfUse'?: string;
    'termsOfUseUrl'?: string;
    'validations'?: Array<AzureMarketplaceValidation>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "schema",
            "baseName": "$schema",
            "type": "string",
            "format": ""
        },
        {
            "name": "appVersion",
            "baseName": "appVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "{ [key: string]: Array<string>; }",
            "format": ""
        },
        {
            "name": "cloudIndustries",
            "baseName": "cloudIndustries",
            "type": "{ [key: string]: Array<string>; }",
            "format": ""
        },
        {
            "name": "customAmendments",
            "baseName": "customAmendments",
            "type": "Array<AzureMarketplaceCustomAmendment>",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "industries",
            "baseName": "industries",
            "type": "{ [key: string]: Array<string>; }",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "AzureMarketplacePropertyKindEnum",
            "format": ""
        },
        {
            "name": "lifecycleState",
            "baseName": "lifecycleState",
            "type": "AzureMarketplaceResourceLifecycleState",
            "format": ""
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourceName",
            "baseName": "resourceName",
            "type": "string",
            "format": ""
        },
        {
            "name": "standardContractAmendment",
            "baseName": "standardContractAmendment",
            "type": "string",
            "format": ""
        },
        {
            "name": "termsConditions",
            "baseName": "termsConditions",
            "type": "AzureMarketplacePropertyTermsConditionsEnum",
            "format": ""
        },
        {
            "name": "termsOfUse",
            "baseName": "termsOfUse",
            "type": "string",
            "format": ""
        },
        {
            "name": "termsOfUseUrl",
            "baseName": "termsOfUseUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "validations",
            "baseName": "validations",
            "type": "Array<AzureMarketplaceValidation>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AzureMarketplaceProperty.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum AzureMarketplacePropertyKindEnum {
    AzureSaaS = 'azureSaaS',
    AzureVm = 'azureVM'
}
export enum AzureMarketplacePropertyTermsConditionsEnum {
    Custom = 'custom',
    StandardMicrosoft = 'standardMicrosoft'
}

