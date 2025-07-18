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

export class SupportTicketImage {
    'extension'?: string;
    'id'?: string;
    'name'?: string;
    'thumbnailLarge'?: string;
    'thumbnailMedium'?: string;
    'thumbnailSmall'?: string;
    'title'?: string;
    'type'?: string;
    'url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "extension",
            "baseName": "extension",
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
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "thumbnailLarge",
            "baseName": "thumbnail_large",
            "type": "string",
            "format": ""
        },
        {
            "name": "thumbnailMedium",
            "baseName": "thumbnail_medium",
            "type": "string",
            "format": ""
        },
        {
            "name": "thumbnailSmall",
            "baseName": "thumbnail_small",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupportTicketImage.attributeTypeMap;
    }

    public constructor() {
    }
}
