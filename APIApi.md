# .APIApi

All URIs are relative to *https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiClient**](APIApi.md#getApiClient) | **GET** /org/{orgId}/apiClient/{apiClientId} | get api client
[**listApiClients**](APIApi.md#listApiClients) | **GET** /org/{orgId}/apiClient | list api clients


# **getApiClient**
> GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient getApiClient()

Get the API client by ID.

### Example


```typescript
import { createConfiguration, APIApi } from '';
import type { APIApiGetApiClientRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIApi(configuration);

const request: APIApiGetApiClientRequest = {
    // Organization ID
  orgId: "orgId_example",
    // API client ID
  apiClientId: "apiClientId_example",
};

const data = await apiInstance.getApiClient(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **apiClientId** | [**string**] | API client ID | defaults to undefined


### Return type

**GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listApiClients**
> Array<GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient> listApiClients()

List all API clients in the given organization.

### Example


```typescript
import { createConfiguration, APIApi } from '';
import type { APIApiListApiClientsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIApi(configuration);

const request: APIApiListApiClientsRequest = {
    // Organization ID
  orgId: "orgId_example",
};

const data = await apiInstance.listApiClients(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**Array<GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient>**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


