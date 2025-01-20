// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BillingWallet } from '../models/BillingWallet';
import { CreateBuyerParams } from '../models/CreateBuyerParams';
import { IdentityBuyer } from '../models/IdentityBuyer';
import { UpdateBuyerParams } from '../models/UpdateBuyerParams';

/**
 * no description
 */
export class BuyerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Close the given credit wallet, if it\'s a payment method, sync to payment provider too. Once closed, it can\'t be used for payment.
     * close credit wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param walletId Wallet ID
     */
    public async closeCreditWallet(orgId: string, buyerId: string, walletId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("BuyerApi", "closeCreditWallet", "orgId");
        }


        // verify required parameter 'buyerId' is not null or undefined
        if (buyerId === null || buyerId === undefined) {
            throw new RequiredError("BuyerApi", "closeCreditWallet", "buyerId");
        }


        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("BuyerApi", "closeCreditWallet", "walletId");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/buyer/{buyerId}/wallet/{walletId}/close'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'buyerId' + '}', encodeURIComponent(String(buyerId)))
            .replace('{' + 'walletId' + '}', encodeURIComponent(String(walletId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
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
     * create a new buyer for Stripe or Adyen under the given organization.
     * create buyer
     * @param orgId Organization ID
     * @param data CreateBuyerParams
     */
    public async createBuyer(orgId: string, data: CreateBuyerParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("BuyerApi", "createBuyer", "orgId");
        }


        // verify required parameter 'data' is not null or undefined
        if (data === null || data === undefined) {
            throw new RequiredError("BuyerApi", "createBuyer", "data");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/buyer'
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
            ObjectSerializer.serialize(data, "CreateBuyerParams", ""),
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
     * create a new credit wallet for the buyer.
     * create credit wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     */
    public async createCreditWallet(orgId: string, buyerId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("BuyerApi", "createCreditWallet", "orgId");
        }


        // verify required parameter 'buyerId' is not null or undefined
        if (buyerId === null || buyerId === undefined) {
            throw new RequiredError("BuyerApi", "createCreditWallet", "buyerId");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/buyer/{buyerId}/wallet'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'buyerId' + '}', encodeURIComponent(String(buyerId)));

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
     * delete a wallet of the buyer, if it\'s a payment method, sync to payment provider too.
     * delete buyer wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param walletId Wallet ID
     */
    public async deleteBuyerWallet(orgId: string, buyerId: string, walletId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("BuyerApi", "deleteBuyerWallet", "orgId");
        }


        // verify required parameter 'buyerId' is not null or undefined
        if (buyerId === null || buyerId === undefined) {
            throw new RequiredError("BuyerApi", "deleteBuyerWallet", "buyerId");
        }


        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("BuyerApi", "deleteBuyerWallet", "walletId");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/buyer/{buyerId}/wallet/{walletId}'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'buyerId' + '}', encodeURIComponent(String(buyerId)))
            .replace('{' + 'walletId' + '}', encodeURIComponent(String(walletId)));

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
     * get buyer by the given organization and buyer id.
     * get buyer
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     */
    public async getBuyer(orgId: string, buyerId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("BuyerApi", "getBuyer", "orgId");
        }


        // verify required parameter 'buyerId' is not null or undefined
        if (buyerId === null || buyerId === undefined) {
            throw new RequiredError("BuyerApi", "getBuyer", "buyerId");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/buyer/{buyerId}'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'buyerId' + '}', encodeURIComponent(String(buyerId)));

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
     * list all wallets of a buyer.
     * list buyer\'s wallets
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     */
    public async listBuyerWallets(orgId: string, buyerId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("BuyerApi", "listBuyerWallets", "orgId");
        }


        // verify required parameter 'buyerId' is not null or undefined
        if (buyerId === null || buyerId === undefined) {
            throw new RequiredError("BuyerApi", "listBuyerWallets", "buyerId");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/buyer/{buyerId}/wallet'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'buyerId' + '}', encodeURIComponent(String(buyerId)));

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
     * list buyers by the given organization with pagination and optional filters.
     * list buyers
     * @param orgId Organization ID
     * @param partner filter by partner
     * @param contactId filter by contactId
     * @param awsAccountId filter by awsAccountId
     * @param limit List pagination size, default 1000, max value is 1000
     * @param offset List pagination offset, default 0
     */
    public async listBuyers(orgId: string, partner?: string, contactId?: string, awsAccountId?: string, limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("BuyerApi", "listBuyers", "orgId");
        }







        // Path Params
        const localVarPath = '/org/{orgId}/buyer'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (partner !== undefined) {
            requestContext.setQueryParam("partner", ObjectSerializer.serialize(partner, "string", ""));
        }

        // Query Params
        if (contactId !== undefined) {
            requestContext.setQueryParam("contactId", ObjectSerializer.serialize(contactId, "string", ""));
        }

        // Query Params
        if (awsAccountId !== undefined) {
            requestContext.setQueryParam("awsAccountId", ObjectSerializer.serialize(awsAccountId, "string", ""));
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
     * set a payment method wallet as buyer\'s default wallet.
     * set buyer default wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param walletId Wallet ID
     */
    public async setBuyerDefaultWallet(orgId: string, buyerId: string, walletId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("BuyerApi", "setBuyerDefaultWallet", "orgId");
        }


        // verify required parameter 'buyerId' is not null or undefined
        if (buyerId === null || buyerId === undefined) {
            throw new RequiredError("BuyerApi", "setBuyerDefaultWallet", "buyerId");
        }


        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("BuyerApi", "setBuyerDefaultWallet", "walletId");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/buyer/{buyerId}/wallet/{walletId}/default'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'buyerId' + '}', encodeURIComponent(String(buyerId)))
            .replace('{' + 'walletId' + '}', encodeURIComponent(String(walletId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
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
     * update buyer by the given organization and buyer id.
     * update buyer
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param data UpdateBuyerParams
     */
    public async updateBuyer(orgId: string, buyerId: string, data: UpdateBuyerParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("BuyerApi", "updateBuyer", "orgId");
        }


        // verify required parameter 'buyerId' is not null or undefined
        if (buyerId === null || buyerId === undefined) {
            throw new RequiredError("BuyerApi", "updateBuyer", "buyerId");
        }


        // verify required parameter 'data' is not null or undefined
        if (data === null || data === undefined) {
            throw new RequiredError("BuyerApi", "updateBuyer", "data");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/buyer/{buyerId}'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'buyerId' + '}', encodeURIComponent(String(buyerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(data, "UpdateBuyerParams", ""),
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
     * update startTime or expireTime of the wallet.
     * update credit wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param walletId Wallet ID
     */
    public async updateCreditWallet(orgId: string, buyerId: string, walletId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("BuyerApi", "updateCreditWallet", "orgId");
        }


        // verify required parameter 'buyerId' is not null or undefined
        if (buyerId === null || buyerId === undefined) {
            throw new RequiredError("BuyerApi", "updateCreditWallet", "buyerId");
        }


        // verify required parameter 'walletId' is not null or undefined
        if (walletId === null || walletId === undefined) {
            throw new RequiredError("BuyerApi", "updateCreditWallet", "walletId");
        }


        // Path Params
        const localVarPath = '/org/{orgId}/buyer/{buyerId}/wallet/{walletId}'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'buyerId' + '}', encodeURIComponent(String(buyerId)))
            .replace('{' + 'walletId' + '}', encodeURIComponent(String(walletId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
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

export class BuyerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to closeCreditWallet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async closeCreditWalletWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BillingWallet >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BillingWallet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingWallet", ""
            ) as BillingWallet;
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
            const body: BillingWallet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingWallet", ""
            ) as BillingWallet;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBuyer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBuyerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<IdentityBuyer >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IdentityBuyer = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IdentityBuyer", ""
            ) as IdentityBuyer;
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
            throw new ApiException<string>(response.httpStatusCode, "internal error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: IdentityBuyer = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IdentityBuyer", ""
            ) as IdentityBuyer;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCreditWallet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createCreditWalletWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BillingWallet >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BillingWallet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingWallet", ""
            ) as BillingWallet;
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
            const body: BillingWallet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingWallet", ""
            ) as BillingWallet;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteBuyerWallet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteBuyerWalletWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
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
     * @params response Response returned by the server for a request to getBuyer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBuyerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<IdentityBuyer >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IdentityBuyer = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IdentityBuyer", ""
            ) as IdentityBuyer;
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
            throw new ApiException<string>(response.httpStatusCode, "not found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "internal error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: IdentityBuyer = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IdentityBuyer", ""
            ) as IdentityBuyer;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listBuyerWallets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listBuyerWalletsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<BillingWallet> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<BillingWallet> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BillingWallet>", ""
            ) as Array<BillingWallet>;
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
            const body: Array<BillingWallet> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BillingWallet>", ""
            ) as Array<BillingWallet>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listBuyers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listBuyersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<IdentityBuyer> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<IdentityBuyer> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<IdentityBuyer>", ""
            ) as Array<IdentityBuyer>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<IdentityBuyer> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<IdentityBuyer>", ""
            ) as Array<IdentityBuyer>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setBuyerDefaultWallet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setBuyerDefaultWalletWithHttpInfo(response: ResponseContext): Promise<HttpInfo<IdentityBuyer >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IdentityBuyer = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IdentityBuyer", ""
            ) as IdentityBuyer;
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
            const body: IdentityBuyer = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IdentityBuyer", ""
            ) as IdentityBuyer;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateBuyer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateBuyerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<IdentityBuyer >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IdentityBuyer = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IdentityBuyer", ""
            ) as IdentityBuyer;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "internal error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: IdentityBuyer = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IdentityBuyer", ""
            ) as IdentityBuyer;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCreditWallet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateCreditWalletWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BillingWallet >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BillingWallet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingWallet", ""
            ) as BillingWallet;
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
            const body: BillingWallet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BillingWallet", ""
            ) as BillingWallet;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
