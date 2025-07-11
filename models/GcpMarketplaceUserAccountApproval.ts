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

import { GcpMarketplaceUserAccountApprovalState } from '../models/GcpMarketplaceUserAccountApprovalState';
import { HttpFile } from '../http/http';

export class GcpMarketplaceUserAccountApproval {
    'name'?: string;
    /**
    * An explanation for the state of the approval.
    */
    'reason'?: string;
    'state'?: GcpMarketplaceUserAccountApprovalState;
    /**
    * RFC3339 UTC timestamp
    */
    'updateTime'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "GcpMarketplaceUserAccountApprovalState",
            "format": ""
        },
        {
            "name": "updateTime",
            "baseName": "updateTime",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GcpMarketplaceUserAccountApproval.attributeTypeMap;
    }

    public constructor() {
    }
}


