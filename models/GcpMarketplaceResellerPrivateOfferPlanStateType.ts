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

export enum GcpMarketplaceResellerPrivateOfferPlanStateType {
    GcpMarketplaceResellerPrivateOfferPlanStateType_UNKNOWN = '',
    GcpMarketplaceResellerPrivateOfferPlanStateType_DRAFT = 'STATE_TYPE_DRAFT',
    GcpMarketplaceResellerPrivateOfferPlanStateType_READY_TO_ACCEPT = 'STATE_TYPE_READY_TO_ACCEPT',
    GcpMarketplaceResellerPrivateOfferPlanStateType_READY_TO_USE = 'STATE_TYPE_READY_TO_USE',
    GcpMarketplaceResellerPrivateOfferPlanStateType_REJECTED = 'STATE_TYPE_REJECTED',
    GcpMarketplaceResellerPrivateOfferPlanStateType_USED = 'STATE_TYPE_USED',
    GcpMarketplaceResellerPrivateOfferPlanStateType_CANCELED = 'STATE_TYPE_CANCELED',
    GcpMarketplaceResellerPrivateOfferPlanStateType_EXPIRED_NEVER_ACCEPTED = 'STATE_TYPE_EXPIRED_NEVER_ACCEPTED',
    GcpMarketplaceResellerPrivateOfferPlanStateType_EXPIRED_ACCEPTED = 'STATE_TYPE_EXPIRED_ACCEPTED',
    GcpMarketplaceResellerPrivateOfferPlanStateType_COMPLETED = 'STATE_TYPE_COMPLETED',
    GcpMarketplaceResellerPrivateOfferPlanStateType_READY_TO_USE_IN_FUTURE = 'STATE_TYPE_READY_TO_USE_IN_FUTURE'
}
