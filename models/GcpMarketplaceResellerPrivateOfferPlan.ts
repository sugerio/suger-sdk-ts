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

import { GcpMarketplaceIsvInfo } from '../models/GcpMarketplaceIsvInfo';
import { GcpMarketplaceOfferTemplatePolicies } from '../models/GcpMarketplaceOfferTemplatePolicies';
import { GcpMarketplacePrivateOfferTermTemplate } from '../models/GcpMarketplacePrivateOfferTermTemplate';
import { GcpMarketplaceProductFeatureValue } from '../models/GcpMarketplaceProductFeatureValue';
import { GcpMarketplaceProductInfo } from '../models/GcpMarketplaceProductInfo';
import { GcpMarketplaceResellerInfo } from '../models/GcpMarketplaceResellerInfo';
import { GcpMarketplaceResellerPrivateOfferPlanAgreementDocuments } from '../models/GcpMarketplaceResellerPrivateOfferPlanAgreementDocuments';
import { GcpMarketplaceResellerPrivateOfferPlanDurationConfig } from '../models/GcpMarketplaceResellerPrivateOfferPlanDurationConfig';
import { GcpMarketplaceResellerPrivateOfferPlanInstallmentTimelineTemplate } from '../models/GcpMarketplaceResellerPrivateOfferPlanInstallmentTimelineTemplate';
import { GcpMarketplaceResellerPrivateOfferPlanMargin } from '../models/GcpMarketplaceResellerPrivateOfferPlanMargin';
import { GcpMarketplaceResellerPrivateOfferPlanMetainfo } from '../models/GcpMarketplaceResellerPrivateOfferPlanMetainfo';
import { GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplate } from '../models/GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplate';
import { GcpMarketplaceResellerPrivateOfferPlanReusePolicy } from '../models/GcpMarketplaceResellerPrivateOfferPlanReusePolicy';
import { GcpMarketplaceResellerPrivateOfferPlanState } from '../models/GcpMarketplaceResellerPrivateOfferPlanState';
import { GcpMarketplaceResellerPrivateOfferPlanStateTransition } from '../models/GcpMarketplaceResellerPrivateOfferPlanStateTransition';
import { GcpMarketplaceStartPolicy } from '../models/GcpMarketplaceStartPolicy';
import { PaymentScheduleType } from '../models/PaymentScheduleType';
import { HttpFile } from '../http/http';

export class GcpMarketplaceResellerPrivateOfferPlan {
    'acceptanceDeadlineTime'?: Date;
    /**
    * The resource name of agreement(entitlement) In format of \"projects/{projectNumber}/agreements/{agreementId}\"
    */
    'agreement'?: string;
    'agreementDocuments'?: GcpMarketplaceResellerPrivateOfferPlanAgreementDocuments;
    'amendmentContext'?: any;
    'displayName'?: string;
    'durationConfig'?: GcpMarketplaceResellerPrivateOfferPlanDurationConfig;
    'features'?: Array<GcpMarketplaceProductFeatureValue>;
    'installmentTimelineTemplate'?: GcpMarketplaceResellerPrivateOfferPlanInstallmentTimelineTemplate;
    'isvInfo'?: GcpMarketplaceIsvInfo;
    'margin'?: GcpMarketplaceResellerPrivateOfferPlanMargin;
    'metaInfo'?: GcpMarketplaceResellerPrivateOfferPlanMetainfo;
    /**
    * In format of \"projects/{projectNumber}/partnerAccounts/{partnerAccountId}/resellerPrivateOfferPlans/{resellerPrivateOfferPlanId}\"
    */
    'name'?: string;
    'offerTemplatePolicies'?: GcpMarketplaceOfferTemplatePolicies;
    'offerTermTemplate'?: GcpMarketplacePrivateOfferTermTemplate;
    'paymentSchedule'?: PaymentScheduleType;
    /**
    * Nill if this reseller private offer plan has installmentTimelineTemplate (payment installments).
    */
    'priceModelTemplate'?: GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplate;
    'productInfo'?: GcpMarketplaceProductInfo;
    'replacementMetadata'?: any;
    /**
    * in format of \"resellOfferTemplates/{resellOfferTemplateId}\"
    */
    'resellOfferTemplate'?: string;
    'resellerInfo'?: GcpMarketplaceResellerInfo;
    'reusePolicy'?: GcpMarketplaceResellerPrivateOfferPlanReusePolicy;
    'startPolicy'?: GcpMarketplaceStartPolicy;
    'state'?: GcpMarketplaceResellerPrivateOfferPlanState;
    'stateTransitions'?: Array<GcpMarketplaceResellerPrivateOfferPlanStateTransition>;
    'updateTime'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "acceptanceDeadlineTime",
            "baseName": "acceptanceDeadlineTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "agreement",
            "baseName": "agreement",
            "type": "string",
            "format": ""
        },
        {
            "name": "agreementDocuments",
            "baseName": "agreementDocuments",
            "type": "GcpMarketplaceResellerPrivateOfferPlanAgreementDocuments",
            "format": ""
        },
        {
            "name": "amendmentContext",
            "baseName": "amendmentContext",
            "type": "any",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string",
            "format": ""
        },
        {
            "name": "durationConfig",
            "baseName": "durationConfig",
            "type": "GcpMarketplaceResellerPrivateOfferPlanDurationConfig",
            "format": ""
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "Array<GcpMarketplaceProductFeatureValue>",
            "format": ""
        },
        {
            "name": "installmentTimelineTemplate",
            "baseName": "installmentTimelineTemplate",
            "type": "GcpMarketplaceResellerPrivateOfferPlanInstallmentTimelineTemplate",
            "format": ""
        },
        {
            "name": "isvInfo",
            "baseName": "isvInfo",
            "type": "GcpMarketplaceIsvInfo",
            "format": ""
        },
        {
            "name": "margin",
            "baseName": "margin",
            "type": "GcpMarketplaceResellerPrivateOfferPlanMargin",
            "format": ""
        },
        {
            "name": "metaInfo",
            "baseName": "metaInfo",
            "type": "GcpMarketplaceResellerPrivateOfferPlanMetainfo",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "offerTemplatePolicies",
            "baseName": "offerTemplatePolicies",
            "type": "GcpMarketplaceOfferTemplatePolicies",
            "format": ""
        },
        {
            "name": "offerTermTemplate",
            "baseName": "offerTermTemplate",
            "type": "GcpMarketplacePrivateOfferTermTemplate",
            "format": ""
        },
        {
            "name": "paymentSchedule",
            "baseName": "paymentSchedule",
            "type": "PaymentScheduleType",
            "format": ""
        },
        {
            "name": "priceModelTemplate",
            "baseName": "priceModelTemplate",
            "type": "GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplate",
            "format": ""
        },
        {
            "name": "productInfo",
            "baseName": "productInfo",
            "type": "GcpMarketplaceProductInfo",
            "format": ""
        },
        {
            "name": "replacementMetadata",
            "baseName": "replacementMetadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "resellOfferTemplate",
            "baseName": "resellOfferTemplate",
            "type": "string",
            "format": ""
        },
        {
            "name": "resellerInfo",
            "baseName": "resellerInfo",
            "type": "GcpMarketplaceResellerInfo",
            "format": ""
        },
        {
            "name": "reusePolicy",
            "baseName": "reusePolicy",
            "type": "GcpMarketplaceResellerPrivateOfferPlanReusePolicy",
            "format": ""
        },
        {
            "name": "startPolicy",
            "baseName": "startPolicy",
            "type": "GcpMarketplaceStartPolicy",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "GcpMarketplaceResellerPrivateOfferPlanState",
            "format": ""
        },
        {
            "name": "stateTransitions",
            "baseName": "stateTransitions",
            "type": "Array<GcpMarketplaceResellerPrivateOfferPlanStateTransition>",
            "format": ""
        },
        {
            "name": "updateTime",
            "baseName": "updateTime",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return GcpMarketplaceResellerPrivateOfferPlan.attributeTypeMap;
    }

    public constructor() {
    }
}


