// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { GetRevenueReportParams } from '../models/GetRevenueReportParams';
import { ListRevenueRecordDetailsResponse } from '../models/ListRevenueRecordDetailsResponse';
import { ListRevenueRecordsResponse } from '../models/ListRevenueRecordsResponse';
import { ListUsageMeteringDailyRecordsResponse } from '../models/ListUsageMeteringDailyRecordsResponse';
import { RevenueRecord } from '../models/RevenueRecord';
import { RevenueReport } from '../models/RevenueReport';

/**
 * no description
 */
export class ReportApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get the revenue report of the given organization, product, entitlement, or buyer.
     * get revenue report
     * @param orgId Organization ID
     * @param data Get Revenue Report Params
     */
    public async getRevenueReport(orgId: string, data: GetRevenueReportParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("ReportApi", "getRevenueReport", "orgId");
        }


        // verify required parameter 'data' is not null or undefined
        if (data === null || data === undefined) {
            throw new RequiredError("ReportApi", "getRevenueReport", "data");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/revenueReport'
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
            ObjectSerializer.serialize(data, "GetRevenueReportParams", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * list daily revenue records for the given organization, partner, entitlement, or buyer, within the given date range.
     * list daily revenue records
     * @param orgId Organization ID
     * @param partner Cloud Partner
     * @param productId Filter daily revenue records by the given product ID
     * @param buyerId Filter daily revenue records by the given buyer ID
     * @param entitlementId Filter daily revenue records by the given entitlement ID
     * @param startDate start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * @param endDate end date (UTC) in YYYY-MM-DD format, default is today
     */
    public async listDailyRevenueRecords(orgId: string, partner?: 'AWS' | 'AZURE' | 'GCP', productId?: string, buyerId?: string, entitlementId?: string, startDate?: string, endDate?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("ReportApi", "listDailyRevenueRecords", "orgId");
        }








        // Path Params
        const localVarPath = '/org/{orgId}/dailyRevenueRecord'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (partner !== undefined) {
            requestContext.setQueryParam("partner", ObjectSerializer.serialize(partner, "'AWS' | 'AZURE' | 'GCP'", ""));
        }

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("productId", ObjectSerializer.serialize(productId, "string", ""));
        }

        // Query Params
        if (buyerId !== undefined) {
            requestContext.setQueryParam("buyerId", ObjectSerializer.serialize(buyerId, "string", ""));
        }

        // Query Params
        if (entitlementId !== undefined) {
            requestContext.setQueryParam("entitlementId", ObjectSerializer.serialize(entitlementId, "string", ""));
        }

        // Query Params
        if (startDate !== undefined) {
            requestContext.setQueryParam("startDate", ObjectSerializer.serialize(startDate, "string", ""));
        }

        // Query Params
        if (endDate !== undefined) {
            requestContext.setQueryParam("endDate", ObjectSerializer.serialize(endDate, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * list the raw revenue record details for the given organization, partner, product, entitlement, or buyer.
     * list revenue record details
     * @param orgId Organization ID
     * @param partner Cloud Partner
     * @param productId Filter revenue record details by the given product ID
     * @param buyerId Filter revenue record details by the given buyer ID
     * @param entitlementId Filter revenue record details by the given entitlement ID
     * @param startDate start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * @param endDate end date (UTC) in YYYY-MM-DD format, default is today
     * @param limit List pagination size, default 1000, max value is 1000
     * @param offset List pagination offset, default 0
     */
    public async listRevenueRecordDetails(orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', productId?: string, buyerId?: string, entitlementId?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("ReportApi", "listRevenueRecordDetails", "orgId");
        }


        // verify required parameter 'partner' is not null or undefined
        if (partner === null || partner === undefined) {
            throw new RequiredError("ReportApi", "listRevenueRecordDetails", "partner");
        }









        // Path Params
        const localVarPath = '/org/{orgId}/partner/{partner}/revenueRecordDetail'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'partner' + '}', encodeURIComponent(String(partner)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("productId", ObjectSerializer.serialize(productId, "string", ""));
        }

        // Query Params
        if (buyerId !== undefined) {
            requestContext.setQueryParam("buyerId", ObjectSerializer.serialize(buyerId, "string", ""));
        }

        // Query Params
        if (entitlementId !== undefined) {
            requestContext.setQueryParam("entitlementId", ObjectSerializer.serialize(entitlementId, "string", ""));
        }

        // Query Params
        if (startDate !== undefined) {
            requestContext.setQueryParam("startDate", ObjectSerializer.serialize(startDate, "string", ""));
        }

        // Query Params
        if (endDate !== undefined) {
            requestContext.setQueryParam("endDate", ObjectSerializer.serialize(endDate, "string", ""));
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
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * list the revenue records for the given organization, product, entitlement, or buyer.
     * list revenue records
     * @param orgId Organization ID
     * @param partner Cloud Partner
     * @param productId Filter revenue records by the given product ID
     * @param entitlementId Filter revenue records by the given entitlement ID
     * @param buyerId Filter revenue records by the given buyer ID
     * @param startDate start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * @param endDate end date (UTC) in YYYY-MM-DD format, default is today
     * @param limit List pagination size, default 1000, max value is 1000
     * @param offset List pagination offset, default 0
     */
    public async listRevenueRecords(orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', productId?: string, entitlementId?: string, buyerId?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("ReportApi", "listRevenueRecords", "orgId");
        }


        // verify required parameter 'partner' is not null or undefined
        if (partner === null || partner === undefined) {
            throw new RequiredError("ReportApi", "listRevenueRecords", "partner");
        }









        // Path Params
        const localVarPath = '/org/{orgId}/partner/{partner}/revenueRecord'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'partner' + '}', encodeURIComponent(String(partner)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("productId", ObjectSerializer.serialize(productId, "string", ""));
        }

        // Query Params
        if (entitlementId !== undefined) {
            requestContext.setQueryParam("entitlementId", ObjectSerializer.serialize(entitlementId, "string", ""));
        }

        // Query Params
        if (buyerId !== undefined) {
            requestContext.setQueryParam("buyerId", ObjectSerializer.serialize(buyerId, "string", ""));
        }

        // Query Params
        if (startDate !== undefined) {
            requestContext.setQueryParam("startDate", ObjectSerializer.serialize(startDate, "string", ""));
        }

        // Query Params
        if (endDate !== undefined) {
            requestContext.setQueryParam("endDate", ObjectSerializer.serialize(endDate, "string", ""));
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
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * list the daily records of the usage metering from the cloud marketplace for the given organization, entitlement, or buyer.
     * list usage metering daily records
     * @param orgId Organization ID
     * @param partner Filter by the Cloud Partner
     * @param buyerId Filter usage metering daily records by the given buyer ID
     * @param entitlementId Filter usage metering daily records by the given entitlement ID
     * @param startDate start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * @param endDate end date (UTC) in YYYY-MM-DD format, default is today
     * @param limit List pagination size, default 1000, max value is 1000
     * @param offset List pagination offset, default 0
     */
    public async listUsageMeteringDailyRecords(orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', buyerId?: string, entitlementId?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("ReportApi", "listUsageMeteringDailyRecords", "orgId");
        }


        // verify required parameter 'partner' is not null or undefined
        if (partner === null || partner === undefined) {
            throw new RequiredError("ReportApi", "listUsageMeteringDailyRecords", "partner");
        }








        // Path Params
        const localVarPath = '/org/{orgId}/partner/{partner}/usageMeteringDailyRecord'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'partner' + '}', encodeURIComponent(String(partner)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (buyerId !== undefined) {
            requestContext.setQueryParam("buyerId", ObjectSerializer.serialize(buyerId, "string", ""));
        }

        // Query Params
        if (entitlementId !== undefined) {
            requestContext.setQueryParam("entitlementId", ObjectSerializer.serialize(entitlementId, "string", ""));
        }

        // Query Params
        if (startDate !== undefined) {
            requestContext.setQueryParam("startDate", ObjectSerializer.serialize(startDate, "string", ""));
        }

        // Query Params
        if (endDate !== undefined) {
            requestContext.setQueryParam("endDate", ObjectSerializer.serialize(endDate, "string", ""));
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
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ReportApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRevenueReport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRevenueReportWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RevenueReport >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RevenueReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RevenueReport", ""
            ) as RevenueReport;
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
            const body: RevenueReport = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RevenueReport", ""
            ) as RevenueReport;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDailyRevenueRecords
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listDailyRevenueRecordsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<RevenueRecord> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<RevenueRecord> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RevenueRecord>", ""
            ) as Array<RevenueRecord>;
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
            const body: Array<RevenueRecord> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RevenueRecord>", ""
            ) as Array<RevenueRecord>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRevenueRecordDetails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listRevenueRecordDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListRevenueRecordDetailsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListRevenueRecordDetailsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListRevenueRecordDetailsResponse", ""
            ) as ListRevenueRecordDetailsResponse;
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
            const body: ListRevenueRecordDetailsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListRevenueRecordDetailsResponse", ""
            ) as ListRevenueRecordDetailsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRevenueRecords
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listRevenueRecordsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListRevenueRecordsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListRevenueRecordsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListRevenueRecordsResponse", ""
            ) as ListRevenueRecordsResponse;
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
            const body: ListRevenueRecordsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListRevenueRecordsResponse", ""
            ) as ListRevenueRecordsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUsageMeteringDailyRecords
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listUsageMeteringDailyRecordsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListUsageMeteringDailyRecordsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListUsageMeteringDailyRecordsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListUsageMeteringDailyRecordsResponse", ""
            ) as ListUsageMeteringDailyRecordsResponse;
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
            const body: ListUsageMeteringDailyRecordsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListUsageMeteringDailyRecordsResponse", ""
            ) as ListUsageMeteringDailyRecordsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
