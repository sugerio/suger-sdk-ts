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

export class GcpMarketplaceProductExternalAccountSpec {
    'loginUri'?: string;
    'signupUri'?: string;
    'singleSignOnUri'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "loginUri",
            "baseName": "loginUri",
            "type": "string",
            "format": ""
        },
        {
            "name": "signupUri",
            "baseName": "signupUri",
            "type": "string",
            "format": ""
        },
        {
            "name": "singleSignOnUri",
            "baseName": "singleSignOnUri",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GcpMarketplaceProductExternalAccountSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
