// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient } from '../models/GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient';

/**
 * no description
 */
export class APIApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get the API client by ID.
     * get api client
     * @param orgId Organization ID
     * @param apiClientId API client ID
     */
    public async getApiClient(orgId: string, apiClientId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("APIApi", "getApiClient", "orgId");
        }


        // verify required parameter 'apiClientId' is not null or undefined
        if (apiClientId === null || apiClientId === undefined) {
            throw new RequiredError("APIApi", "getApiClient", "apiClientId");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/apiClient/{apiClientId}'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'apiClientId' + '}', encodeURIComponent(String(apiClientId)));

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
     * List all API clients in the given organization.
     * list api clients
     * @param orgId Organization ID
     */
    public async listApiClients(orgId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("APIApi", "listApiClients", "orgId");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/apiClient'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)));

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

}

export class APIApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiClient
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiClientWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient", ""
            ) as GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient;
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
            const body: GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient", ""
            ) as GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApiClients
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listApiClientsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient>", ""
            ) as Array<GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient>;
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
            const body: Array<GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient>", ""
            ) as Array<GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
