# .BuyerApi

All URIs are relative to *http://https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**closeCreditWallet**](BuyerApi.md#closeCreditWallet) | **PATCH** /org/{orgId}/buyer/{buyerId}/wallet/{walletId}/close | close credit wallet
[**createBuyer**](BuyerApi.md#createBuyer) | **POST** /org/{orgId}/buyer | create buyer
[**createCreditWallet**](BuyerApi.md#createCreditWallet) | **POST** /org/{orgId}/buyer/{buyerId}/wallet | create credit wallet
[**deleteBuyerWallet**](BuyerApi.md#deleteBuyerWallet) | **DELETE** /org/{orgId}/buyer/{buyerId}/wallet/{walletId} | delete buyer wallet
[**getBuyer**](BuyerApi.md#getBuyer) | **GET** /org/{orgId}/buyer/{buyerId} | get buyer
[**listBuyerWallets**](BuyerApi.md#listBuyerWallets) | **GET** /org/{orgId}/buyer/{buyerId}/wallet | list buyer\&#39;s wallets
[**listBuyers**](BuyerApi.md#listBuyers) | **GET** /org/{orgId}/buyer | list buyers
[**setBuyerDefaultWallet**](BuyerApi.md#setBuyerDefaultWallet) | **PATCH** /org/{orgId}/buyer/{buyerId}/wallet/{walletId}/default | set buyer default wallet
[**updateBuyer**](BuyerApi.md#updateBuyer) | **PATCH** /org/{orgId}/buyer/{buyerId} | update buyer
[**updateCreditWallet**](BuyerApi.md#updateCreditWallet) | **PATCH** /org/{orgId}/buyer/{buyerId}/wallet/{walletId} | update credit wallet


# **closeCreditWallet**
> BillingWallet closeCreditWallet()

Close the given credit wallet, if it\'s a payment method, sync to payment provider too. Once closed, it can\'t be used for payment.

### Example


```typescript
import { createConfiguration, BuyerApi } from '';
import type { BuyerApiCloseCreditWalletRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BuyerApi(configuration);

const request: BuyerApiCloseCreditWalletRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Buyer ID
  buyerId: "buyerId_example",
    // Wallet ID
  walletId: "walletId_example",
};

const data = await apiInstance.closeCreditWallet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **buyerId** | [**string**] | Buyer ID | defaults to undefined
 **walletId** | [**string**] | Wallet ID | defaults to undefined


### Return type

**BillingWallet**

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

# **createBuyer**
> IdentityBuyer createBuyer(data)

create a new buyer for Stripe or Adyen under the given organization.

### Example


```typescript
import { createConfiguration, BuyerApi } from '';
import type { BuyerApiCreateBuyerRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BuyerApi(configuration);

const request: BuyerApiCreateBuyerRequest = {
    // Organization ID
  orgId: "orgId_example",
    // CreateBuyerParams
  data: {
    adyenCustomerId: "adyenCustomerId_example",
    companyInfo: ,
    customerId: "customerId_example",
    description: "description_example",
    lagoCustomerId: "lagoCustomerId_example",
    metronomeCustomerId: "metronomeCustomerId_example",
    name: "name_example",
    orbCustomerId: "orbCustomerId_example",
    partner: ,
    paymentConfig: ,
    stripeCustomerId: "stripeCustomerId_example",
  },
};

const data = await apiInstance.createBuyer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **CreateBuyerParams**| CreateBuyerParams |
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**IdentityBuyer**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request error |  -  |
**500** | internal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCreditWallet**
> BillingWallet createCreditWallet()

create a new credit wallet for the buyer.

### Example


```typescript
import { createConfiguration, BuyerApi } from '';
import type { BuyerApiCreateCreditWalletRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BuyerApi(configuration);

const request: BuyerApiCreateCreditWalletRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Buyer ID
  buyerId: "buyerId_example",
};

const data = await apiInstance.createCreditWallet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **buyerId** | [**string**] | Buyer ID | defaults to undefined


### Return type

**BillingWallet**

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

# **deleteBuyerWallet**
> string deleteBuyerWallet()

delete a wallet of the buyer, if it\'s a payment method, sync to payment provider too.

### Example


```typescript
import { createConfiguration, BuyerApi } from '';
import type { BuyerApiDeleteBuyerWalletRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BuyerApi(configuration);

const request: BuyerApiDeleteBuyerWalletRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Buyer ID
  buyerId: "buyerId_example",
    // Wallet ID
  walletId: "walletId_example",
};

const data = await apiInstance.deleteBuyerWallet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **buyerId** | [**string**] | Buyer ID | defaults to undefined
 **walletId** | [**string**] | Wallet ID | defaults to undefined


### Return type

**string**

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

# **getBuyer**
> IdentityBuyer getBuyer()

get buyer by the given organization and buyer id.

### Example


```typescript
import { createConfiguration, BuyerApi } from '';
import type { BuyerApiGetBuyerRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BuyerApi(configuration);

const request: BuyerApiGetBuyerRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Buyer ID
  buyerId: "buyerId_example",
};

const data = await apiInstance.getBuyer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **buyerId** | [**string**] | Buyer ID | defaults to undefined


### Return type

**IdentityBuyer**

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
**404** | not found |  -  |
**500** | internal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listBuyerWallets**
> Array<BillingWallet> listBuyerWallets()

list all wallets of a buyer.

### Example


```typescript
import { createConfiguration, BuyerApi } from '';
import type { BuyerApiListBuyerWalletsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BuyerApi(configuration);

const request: BuyerApiListBuyerWalletsRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Buyer ID
  buyerId: "buyerId_example",
};

const data = await apiInstance.listBuyerWallets(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **buyerId** | [**string**] | Buyer ID | defaults to undefined


### Return type

**Array<BillingWallet>**

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

# **listBuyers**
> Array<IdentityBuyer> listBuyers()

list buyers by the given organization with pagination and optional filters.

### Example


```typescript
import { createConfiguration, BuyerApi } from '';
import type { BuyerApiListBuyersRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BuyerApi(configuration);

const request: BuyerApiListBuyersRequest = {
    // Organization ID
  orgId: "orgId_example",
    // filter by partner (optional)
  partner: "partner_example",
    // filter by contactId (optional)
  contactId: "contactId_example",
    // List pagination size, default 1000, max value is 1000 (optional)
  limit: 1,
    // List pagination offset, default 0 (optional)
  offset: 1,
};

const data = await apiInstance.listBuyers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | [**string**] | filter by partner | (optional) defaults to undefined
 **contactId** | [**string**] | filter by contactId | (optional) defaults to undefined
 **limit** | [**number**] | List pagination size, default 1000, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**Array<IdentityBuyer>**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setBuyerDefaultWallet**
> IdentityBuyer setBuyerDefaultWallet()

set a payment method wallet as buyer\'s default wallet.

### Example


```typescript
import { createConfiguration, BuyerApi } from '';
import type { BuyerApiSetBuyerDefaultWalletRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BuyerApi(configuration);

const request: BuyerApiSetBuyerDefaultWalletRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Buyer ID
  buyerId: "buyerId_example",
    // Wallet ID
  walletId: "walletId_example",
};

const data = await apiInstance.setBuyerDefaultWallet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **buyerId** | [**string**] | Buyer ID | defaults to undefined
 **walletId** | [**string**] | Wallet ID | defaults to undefined


### Return type

**IdentityBuyer**

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

# **updateBuyer**
> IdentityBuyer updateBuyer(data)

update buyer by the given organization and buyer id.

### Example


```typescript
import { createConfiguration, BuyerApi } from '';
import type { BuyerApiUpdateBuyerRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BuyerApi(configuration);

const request: BuyerApiUpdateBuyerRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Buyer ID
  buyerId: "buyerId_example",
    // UpdateBuyerParams
  data: {
    companyInfo: ,
    customerId: "customerId_example",
    description: "description_example",
    lagoCustomerId: "lagoCustomerId_example",
    metronomeCustomerId: "metronomeCustomerId_example",
    name: "name_example",
    orbCustomerId: "orbCustomerId_example",
    paymentConfig: ,
  },
};

const data = await apiInstance.updateBuyer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **UpdateBuyerParams**| UpdateBuyerParams |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **buyerId** | [**string**] | Buyer ID | defaults to undefined


### Return type

**IdentityBuyer**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | internal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCreditWallet**
> BillingWallet updateCreditWallet()

update startTime or expireTime of the wallet.

### Example


```typescript
import { createConfiguration, BuyerApi } from '';
import type { BuyerApiUpdateCreditWalletRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BuyerApi(configuration);

const request: BuyerApiUpdateCreditWalletRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Buyer ID
  buyerId: "buyerId_example",
    // Wallet ID
  walletId: "walletId_example",
};

const data = await apiInstance.updateCreditWallet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **buyerId** | [**string**] | Buyer ID | defaults to undefined
 **walletId** | [**string**] | Wallet ID | defaults to undefined


### Return type

**BillingWallet**

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


