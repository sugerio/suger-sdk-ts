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

import { HttpFile } from '../http/http';

export class AzureProductProperty {
    'additionalCategories'?: Array<string>;
    'appVersion'?: string;
    'applicableProducts'?: Array<string>;
    'categories'?: Array<string>;
    'customAmendments'?: Array<string>;
    'extendedProperties'?: Array<string>;
    'globalAmendmentTerms'?: string;
    'hideKeys'?: Array<string>;
    'id'?: string;
    'industries'?: Array<string>;
    'leveledCategories'?: { [key: string]: any; };
    'leveledIndustries'?: { [key: string]: any; };
    'marketingOnlyChange'?: boolean;
    'productTags'?: Array<string>;
    'resourceType'?: string;
    'submissionVersion'?: string;
    'termsOfUse'?: string;
    'useEnterpriseContract'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "additionalCategories",
            "baseName": "additionalCategories",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "appVersion",
            "baseName": "appVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "applicableProducts",
            "baseName": "applicableProducts",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "customAmendments",
            "baseName": "customAmendments",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "extendedProperties",
            "baseName": "extendedProperties",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "globalAmendmentTerms",
            "baseName": "globalAmendmentTerms",
            "type": "string",
            "format": ""
        },
        {
            "name": "hideKeys",
            "baseName": "hideKeys",
            "type": "Array<string>",
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
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "leveledCategories",
            "baseName": "leveledCategories",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "leveledIndustries",
            "baseName": "leveledIndustries",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "marketingOnlyChange",
            "baseName": "marketingOnlyChange",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "productTags",
            "baseName": "productTags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "resourceType",
            "baseName": "resourceType",
            "type": "string",
            "format": ""
        },
        {
            "name": "submissionVersion",
            "baseName": "submissionVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "termsOfUse",
            "baseName": "termsOfUse",
            "type": "string",
            "format": ""
        },
        {
            "name": "useEnterpriseContract",
            "baseName": "useEnterpriseContract",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AzureProductProperty.attributeTypeMap;
    }

    public constructor() {
    }
}
