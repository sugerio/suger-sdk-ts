// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AddEntitlementCreditParams } from '../models/AddEntitlementCreditParams';
import { AddEntitlementCreditResponse } from '../models/AddEntitlementCreditResponse';
import { BillingAddonRecord } from '../models/BillingAddonRecord';
import { CancellationSchedule } from '../models/CancellationSchedule';
import { CreateEntitlementParams } from '../models/CreateEntitlementParams';
import { DivideEntitlementCommitParams } from '../models/DivideEntitlementCommitParams';
import { GithubComSugerioMarketplaceServiceRdsDbLibUpdateEntitlementNameParams } from '../models/GithubComSugerioMarketplaceServiceRdsDbLibUpdateEntitlementNameParams';
import { WorkloadEntitlement } from '../models/WorkloadEntitlement';
import { WorkloadEntitlementTerm } from '../models/WorkloadEntitlementTerm';
import { WorkloadMetaInfo } from '../models/WorkloadMetaInfo';

/**
 * no description
 */
export class EntitlementApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Add the credit amount to the given Entitlement. The credit amount is accumulated & saved in the current Entitlement Term of the gvien Entitlement.
     * add entitlement credit
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public async addEntitlementCredit(orgId: string, entitlementId: string, data: AddEntitlementCreditParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("EntitlementApi", "addEntitlementCredit", "orgId");
        }


        // verify required parameter 'entitlementId' is not null or undefined
        if (entitlementId === null || entitlementId === undefined) {
            throw new RequiredError("EntitlementApi", "addEntitlementCredit", "entitlementId");
        }


        // verify required parameter 'data' is not null or undefined
        if (data === null || data === undefined) {
            throw new RequiredError("EntitlementApi", "addEntitlementCredit", "data");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/entitlement/{entitlementId}/addCredit'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'entitlementId' + '}', encodeURIComponent(String(entitlementId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(data, "AddEntitlementCreditParams", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Apply one billing addon to the given Entitlement. The entitlement status must be ACTIVE.
     * apply addon to entitlement
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public async applyAddonToEntitlement(orgId: string, entitlementId: string, data: BillingAddonRecord, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("EntitlementApi", "applyAddonToEntitlement", "orgId");
        }


        // verify required parameter 'entitlementId' is not null or undefined
        if (entitlementId === null || entitlementId === undefined) {
            throw new RequiredError("EntitlementApi", "applyAddonToEntitlement", "entitlementId");
        }


        // verify required parameter 'data' is not null or undefined
        if (data === null || data === undefined) {
            throw new RequiredError("EntitlementApi", "applyAddonToEntitlement", "data");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/entitlement/{entitlementId}/addon'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'entitlementId' + '}', encodeURIComponent(String(entitlementId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(data, "BillingAddonRecord", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Approve the given Entitlement. Only applicable to the Azure or GCP Entitlements with the status of \"PENDING_START\". Return 200 if the entitlement is already active.
     * approve entitlement
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public async approveEntitlement(orgId: string, entitlementId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("EntitlementApi", "approveEntitlement", "orgId");
        }


        // verify required parameter 'entitlementId' is not null or undefined
        if (entitlementId === null || entitlementId === undefined) {
            throw new RequiredError("EntitlementApi", "approveEntitlement", "entitlementId");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/entitlement/{entitlementId}/approve'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'entitlementId' + '}', encodeURIComponent(String(entitlementId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Cancel the active subscription in Azure Marketplace.
     * cancel entitlement
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public async cancelEntitlement(orgId: string, entitlementId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("EntitlementApi", "cancelEntitlement", "orgId");
        }


        // verify required parameter 'entitlementId' is not null or undefined
        if (entitlementId === null || entitlementId === undefined) {
            throw new RequiredError("EntitlementApi", "cancelEntitlement", "entitlementId");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/entitlement/{entitlementId}/cancel'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'entitlementId' + '}', encodeURIComponent(String(entitlementId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create an new entitlement for the given buyer & offer. Only applicable to non cloud billing partners.
     * create entitlement
     * @param orgId Organization ID
     * @param data RequestBody
     */
    public async createEntitlement(orgId: string, data: CreateEntitlementParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("EntitlementApi", "createEntitlement", "orgId");
        }


        // verify required parameter 'data' is not null or undefined
        if (data === null || data === undefined) {
            throw new RequiredError("EntitlementApi", "createEntitlement", "data");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/entitlement'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(data, "CreateEntitlementParams", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete the entitlement term by the given entitlement ID and entitlement term ID. Only allow to delete the divided entitlement term.
     * delete entitlement term
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param entitlementTermId Entitlement Term ID
     */
    public async deleteEntitlementTerm(orgId: string, entitlementId: string, entitlementTermId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("EntitlementApi", "deleteEntitlementTerm", "orgId");
        }


        // verify required parameter 'entitlementId' is not null or undefined
        if (entitlementId === null || entitlementId === undefined) {
            throw new RequiredError("EntitlementApi", "deleteEntitlementTerm", "entitlementId");
        }


        // verify required parameter 'entitlementTermId' is not null or undefined
        if (entitlementTermId === null || entitlementTermId === undefined) {
            throw new RequiredError("EntitlementApi", "deleteEntitlementTerm", "entitlementTermId");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/entitlement/{entitlementId}/entitlementTerm/{entitlementTermId}'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'entitlementId' + '}', encodeURIComponent(String(entitlementId)))
            .replace('{' + 'entitlementTermId' + '}', encodeURIComponent(String(entitlementTermId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Divide the commit equally from the given entitlement into sub entitlement terms based on the given time periods.
     * divide entitlement commit
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public async divideEntitlementCommit(orgId: string, entitlementId: string, data: DivideEntitlementCommitParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("EntitlementApi", "divideEntitlementCommit", "orgId");
        }


        // verify required parameter 'entitlementId' is not null or undefined
        if (entitlementId === null || entitlementId === undefined) {
            throw new RequiredError("EntitlementApi", "divideEntitlementCommit", "entitlementId");
        }


        // verify required parameter 'data' is not null or undefined
        if (data === null || data === undefined) {
            throw new RequiredError("EntitlementApi", "divideEntitlementCommit", "data");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/entitlement/{entitlementId}/divideCommit'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'entitlementId' + '}', encodeURIComponent(String(entitlementId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(data, "DivideEntitlementCommitParams", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the entitlement by ID.
     * get entitlement
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public async getEntitlement(orgId: string, entitlementId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("EntitlementApi", "getEntitlement", "orgId");
        }


        // verify required parameter 'entitlementId' is not null or undefined
        if (entitlementId === null || entitlementId === undefined) {
            throw new RequiredError("EntitlementApi", "getEntitlement", "entitlementId");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/entitlement/{entitlementId}'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'entitlementId' + '}', encodeURIComponent(String(entitlementId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the entitlement term by ID.
     * get entitlement term
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param entitlementTermId Entitlement Term ID
     */
    public async getEntitlementTerm(orgId: string, entitlementId: string, entitlementTermId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("EntitlementApi", "getEntitlementTerm", "orgId");
        }


        // verify required parameter 'entitlementId' is not null or undefined
        if (entitlementId === null || entitlementId === undefined) {
            throw new RequiredError("EntitlementApi", "getEntitlementTerm", "entitlementId");
        }


        // verify required parameter 'entitlementTermId' is not null or undefined
        if (entitlementTermId === null || entitlementTermId === undefined) {
            throw new RequiredError("EntitlementApi", "getEntitlementTerm", "entitlementTermId");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/entitlement/{entitlementId}/entitlementTerm/{entitlementTermId}'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'entitlementId' + '}', encodeURIComponent(String(entitlementId)))
            .replace('{' + 'entitlementTermId' + '}', encodeURIComponent(String(entitlementTermId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List all Entitlement Terms of the given Entitlement.
     * list entitlement terms
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public async listEntitlementTerms(orgId: string, entitlementId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("EntitlementApi", "listEntitlementTerms", "orgId");
        }


        // verify required parameter 'entitlementId' is not null or undefined
        if (entitlementId === null || entitlementId === undefined) {
            throw new RequiredError("EntitlementApi", "listEntitlementTerms", "entitlementId");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/entitlement/{entitlementId}/entitlementTerm'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'entitlementId' + '}', encodeURIComponent(String(entitlementId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List entitlements under the given organization with pagination and optional filters.
     * list entitlements
     * @param orgId Organization ID
     * @param partner filter by partner
     * @param productId filter by productId
     * @param offerId filter by offerId
     * @param buyerId filter by buyerId
     * @param limit List pagination size, default 1000, max value is 1000
     * @param offset List pagination offset, default 0
     */
    public async listEntitlements(orgId: string, partner?: string, productId?: string, offerId?: string, buyerId?: string, limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("EntitlementApi", "listEntitlements", "orgId");
        }








        // Path Params
        const localVarPath = '/org/{orgId}/entitlement'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (partner !== undefined) {
            requestContext.setQueryParam("partner", ObjectSerializer.serialize(partner, "string", ""));
        }

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("productId", ObjectSerializer.serialize(productId, "string", ""));
        }

        // Query Params
        if (offerId !== undefined) {
            requestContext.setQueryParam("offerId", ObjectSerializer.serialize(offerId, "string", ""));
        }

        // Query Params
        if (buyerId !== undefined) {
            requestContext.setQueryParam("buyerId", ObjectSerializer.serialize(buyerId, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Schedule the cancellation of the given Entitlement.
     * schedule entitlement cancellation
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public async scheduleEntitlementCancellation(orgId: string, entitlementId: string, data: CancellationSchedule, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("EntitlementApi", "scheduleEntitlementCancellation", "orgId");
        }


        // verify required parameter 'entitlementId' is not null or undefined
        if (entitlementId === null || entitlementId === undefined) {
            throw new RequiredError("EntitlementApi", "scheduleEntitlementCancellation", "entitlementId");
        }


        // verify required parameter 'data' is not null or undefined
        if (data === null || data === undefined) {
            throw new RequiredError("EntitlementApi", "scheduleEntitlementCancellation", "data");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/entitlement/{entitlementId}/scheduleCancellation'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'entitlementId' + '}', encodeURIComponent(String(entitlementId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(data, "CancellationSchedule", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Unschedule the cancellation of the given Entitlement.
     * unschedule entitlement cancellation
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public async unscheduleEntitlementCancellation(orgId: string, entitlementId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("EntitlementApi", "unscheduleEntitlementCancellation", "orgId");
        }


        // verify required parameter 'entitlementId' is not null or undefined
        if (entitlementId === null || entitlementId === undefined) {
            throw new RequiredError("EntitlementApi", "unscheduleEntitlementCancellation", "entitlementId");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/entitlement/{entitlementId}/unscheduleCancellation'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'entitlementId' + '}', encodeURIComponent(String(entitlementId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update the meta info of the given entitlement.
     * update entitlement meta info
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data Entitlement meta info to update
     */
    public async updateEntitlementMetaInfo(orgId: string, entitlementId: string, data: WorkloadMetaInfo, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("EntitlementApi", "updateEntitlementMetaInfo", "orgId");
        }


        // verify required parameter 'entitlementId' is not null or undefined
        if (entitlementId === null || entitlementId === undefined) {
            throw new RequiredError("EntitlementApi", "updateEntitlementMetaInfo", "entitlementId");
        }


        // verify required parameter 'data' is not null or undefined
        if (data === null || data === undefined) {
            throw new RequiredError("EntitlementApi", "updateEntitlementMetaInfo", "data");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/entitlement/{entitlementId}/metaInfo'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'entitlementId' + '}', encodeURIComponent(String(entitlementId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(data, "WorkloadMetaInfo", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update the name of the given Entitlement.
     * update entitlement name
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data UpdateEntitlementNameParams
     */
    public async updateEntitlementName(orgId: string, entitlementId: string, data: GithubComSugerioMarketplaceServiceRdsDbLibUpdateEntitlementNameParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("EntitlementApi", "updateEntitlementName", "orgId");
        }


        // verify required parameter 'entitlementId' is not null or undefined
        if (entitlementId === null || entitlementId === undefined) {
            throw new RequiredError("EntitlementApi", "updateEntitlementName", "entitlementId");
        }


        // verify required parameter 'data' is not null or undefined
        if (data === null || data === undefined) {
            throw new RequiredError("EntitlementApi", "updateEntitlementName", "data");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/entitlement/{entitlementId}/entitlementName'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'entitlementId' + '}', encodeURIComponent(String(entitlementId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(data, "GithubComSugerioMarketplaceServiceRdsDbLibUpdateEntitlementNameParams", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update the seat number for the active AZURE subscription.
     * update seat for the active AZURE subscription
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param newSeat New seat number
     */
    public async updateEntitlementSeat(orgId: string, entitlementId: string, newSeat: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("EntitlementApi", "updateEntitlementSeat", "orgId");
        }


        // verify required parameter 'entitlementId' is not null or undefined
        if (entitlementId === null || entitlementId === undefined) {
            throw new RequiredError("EntitlementApi", "updateEntitlementSeat", "entitlementId");
        }


        // verify required parameter 'newSeat' is not null or undefined
        if (newSeat === null || newSeat === undefined) {
            throw new RequiredError("EntitlementApi", "updateEntitlementSeat", "newSeat");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/entitlement/{entitlementId}/seat'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'entitlementId' + '}', encodeURIComponent(String(entitlementId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (newSeat !== undefined) {
            requestContext.setQueryParam("newSeat", ObjectSerializer.serialize(newSeat, "number", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class EntitlementApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addEntitlementCredit
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addEntitlementCreditWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AddEntitlementCreditResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddEntitlementCreditResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddEntitlementCreditResponse", ""
            ) as AddEntitlementCreditResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Bad Request Error", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AddEntitlementCreditResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddEntitlementCreditResponse", ""
            ) as AddEntitlementCreditResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to applyAddonToEntitlement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async applyAddonToEntitlementWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WorkloadEntitlement >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WorkloadEntitlement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadEntitlement", ""
            ) as WorkloadEntitlement;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Bad request error", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WorkloadEntitlement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadEntitlement", ""
            ) as WorkloadEntitlement;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to approveEntitlement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async approveEntitlementWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WorkloadEntitlement >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WorkloadEntitlement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadEntitlement", ""
            ) as WorkloadEntitlement;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Bad request error", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WorkloadEntitlement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadEntitlement", ""
            ) as WorkloadEntitlement;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelEntitlement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelEntitlementWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WorkloadEntitlement >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WorkloadEntitlement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadEntitlement", ""
            ) as WorkloadEntitlement;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Bad request error", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WorkloadEntitlement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadEntitlement", ""
            ) as WorkloadEntitlement;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createEntitlement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createEntitlementWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WorkloadEntitlement >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WorkloadEntitlement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadEntitlement", ""
            ) as WorkloadEntitlement;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Bad request error", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WorkloadEntitlement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadEntitlement", ""
            ) as WorkloadEntitlement;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteEntitlementTerm
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteEntitlementTermWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Bad request error", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to divideEntitlementCommit
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async divideEntitlementCommitWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Bad request error", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEntitlement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEntitlementWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WorkloadEntitlement >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WorkloadEntitlement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadEntitlement", ""
            ) as WorkloadEntitlement;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Bad request error", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WorkloadEntitlement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadEntitlement", ""
            ) as WorkloadEntitlement;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEntitlementTerm
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEntitlementTermWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WorkloadEntitlementTerm >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WorkloadEntitlementTerm = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadEntitlementTerm", ""
            ) as WorkloadEntitlementTerm;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Bad request error", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WorkloadEntitlementTerm = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadEntitlementTerm", ""
            ) as WorkloadEntitlementTerm;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listEntitlementTerms
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listEntitlementTermsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<WorkloadEntitlementTerm> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<WorkloadEntitlementTerm> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<WorkloadEntitlementTerm>", ""
            ) as Array<WorkloadEntitlementTerm>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Bad request error", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<WorkloadEntitlementTerm> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<WorkloadEntitlementTerm>", ""
            ) as Array<WorkloadEntitlementTerm>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listEntitlements
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listEntitlementsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<WorkloadEntitlement> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<WorkloadEntitlement> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<WorkloadEntitlement>", ""
            ) as Array<WorkloadEntitlement>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Bad request error", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<WorkloadEntitlement> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<WorkloadEntitlement>", ""
            ) as Array<WorkloadEntitlement>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to scheduleEntitlementCancellation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async scheduleEntitlementCancellationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WorkloadEntitlement >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WorkloadEntitlement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadEntitlement", ""
            ) as WorkloadEntitlement;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Bad request error", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WorkloadEntitlement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadEntitlement", ""
            ) as WorkloadEntitlement;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unscheduleEntitlementCancellation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async unscheduleEntitlementCancellationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WorkloadEntitlement >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WorkloadEntitlement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadEntitlement", ""
            ) as WorkloadEntitlement;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Bad request error", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WorkloadEntitlement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadEntitlement", ""
            ) as WorkloadEntitlement;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateEntitlementMetaInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateEntitlementMetaInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WorkloadMetaInfo >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WorkloadMetaInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadMetaInfo", ""
            ) as WorkloadMetaInfo;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Bad request error", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WorkloadMetaInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadMetaInfo", ""
            ) as WorkloadMetaInfo;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateEntitlementName
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateEntitlementNameWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WorkloadEntitlement >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WorkloadEntitlement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadEntitlement", ""
            ) as WorkloadEntitlement;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Bad request error", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WorkloadEntitlement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadEntitlement", ""
            ) as WorkloadEntitlement;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateEntitlementSeat
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateEntitlementSeatWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WorkloadEntitlement >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WorkloadEntitlement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadEntitlement", ""
            ) as WorkloadEntitlement;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Bad request error", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Internal server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WorkloadEntitlement = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkloadEntitlement", ""
            ) as WorkloadEntitlement;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
