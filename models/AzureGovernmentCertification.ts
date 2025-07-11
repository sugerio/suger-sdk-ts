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

import { AzureValidationResult } from '../models/AzureValidationResult';
import { HttpFile } from '../http/http';

export class AzureGovernmentCertification {
    'title'?: string;
    'uri'?: string;
    'validationResults'?: Array<AzureValidationResult>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string",
            "format": ""
        },
        {
            "name": "validationResults",
            "baseName": "validationResults",
            "type": "Array<AzureValidationResult>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AzureGovernmentCertification.attributeTypeMap;
    }

    public constructor() {
    }
}
