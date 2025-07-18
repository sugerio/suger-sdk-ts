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

import { OfferInfo } from '../models/OfferInfo';
import { OfferStatus } from '../models/OfferStatus';
import { OfferType } from '../models/OfferType';
import { Partner } from '../models/Partner';
import { PartnerService } from '../models/PartnerService';
import { WorkloadMetaInfo } from '../models/WorkloadMetaInfo';
import { HttpFile } from '../http/http';

export class WorkloadOffer {
    'buyerID'?: string;
    'contactIds'?: Array<string>;
    'createdBy'?: string;
    'creationTime'?: Date;
    /**
    * nullable
    */
    'endTime'?: Date;
    /**
    * nullable
    */
    'expireTime'?: Date;
    'externalID'?: string;
    'id'?: string;
    'info'?: OfferInfo;
    'lastUpdateTime'?: Date;
    'lastUpdatedBy'?: string;
    'metaInfo'?: WorkloadMetaInfo;
    'name'?: string;
    'offerType'?: OfferType;
    'organizationID'?: string;
    'partner'?: Partner;
    'partnerID'?: string;
    'productID'?: string;
    'service'?: PartnerService;
    'status'?: OfferStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "buyerID",
            "baseName": "buyerID",
            "type": "string",
            "format": ""
        },
        {
            "name": "contactIds",
            "baseName": "contactIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "string",
            "format": ""
        },
        {
            "name": "creationTime",
            "baseName": "creationTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "endTime",
            "baseName": "endTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "expireTime",
            "baseName": "expireTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "externalID",
            "baseName": "externalID",
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
            "name": "info",
            "baseName": "info",
            "type": "OfferInfo",
            "format": ""
        },
        {
            "name": "lastUpdateTime",
            "baseName": "lastUpdateTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastUpdatedBy",
            "baseName": "lastUpdatedBy",
            "type": "string",
            "format": ""
        },
        {
            "name": "metaInfo",
            "baseName": "metaInfo",
            "type": "WorkloadMetaInfo",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "offerType",
            "baseName": "offerType",
            "type": "OfferType",
            "format": ""
        },
        {
            "name": "organizationID",
            "baseName": "organizationID",
            "type": "string",
            "format": ""
        },
        {
            "name": "partner",
            "baseName": "partner",
            "type": "Partner",
            "format": ""
        },
        {
            "name": "partnerID",
            "baseName": "partnerID",
            "type": "string",
            "format": ""
        },
        {
            "name": "productID",
            "baseName": "productID",
            "type": "string",
            "format": ""
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "PartnerService",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OfferStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WorkloadOffer.attributeTypeMap;
    }

    public constructor() {
    }
}


