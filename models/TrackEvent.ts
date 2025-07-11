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

import { TrackEventActionType } from '../models/TrackEventActionType';
import { HttpFile } from '../http/http';

export class TrackEvent {
    'action'?: TrackEventActionType;
    /**
    * The ID of the contact who triggered the track event if applicable.
    */
    'contactId'?: string;
    /**
    * timestamp of the track event happened.
    */
    'timestamp'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "TrackEventActionType",
            "format": ""
        },
        {
            "name": "contactId",
            "baseName": "contactId",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return TrackEvent.attributeTypeMap;
    }

    public constructor() {
    }
}


