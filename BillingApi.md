# .BillingApi

All URIs are relative to *http://https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAddon**](BillingApi.md#createAddon) | **POST** /org/{orgId}/addon | create addon
[**createRefund**](BillingApi.md#createRefund) | **POST** /org/{orgId}/buyer/{buyerId}/paymentTransaction/{paymentTransactionId}/refund | create refund.
[**deleteAddon**](BillingApi.md#deleteAddon) | **DELETE** /org/{orgId}/addon/{addonId} | delete addon
[**getAddon**](BillingApi.md#getAddon) | **GET** /org/{orgId}/addon/{addonId} | get addon
[**getInvoiceV2**](BillingApi.md#getInvoiceV2) | **GET** /org/{orgId}/invoice/{invoiceId} | get invoice
[**issueInvoiceV2**](BillingApi.md#issueInvoiceV2) | **PATCH** /org/{orgId}/invoice/{invoiceId}/issue | issue invoice
[**listAddons**](BillingApi.md#listAddons) | **GET** /org/{orgId}/addon | list addons
[**listInvoices**](BillingApi.md#listInvoices) | **GET** /org/{orgId}/invoice | list invoices
[**listPaymentTransactions**](BillingApi.md#listPaymentTransactions) | **GET** /org/{orgId}/paymentTransaction | list payment transactions
[**listRefundOfPaymentTransaction**](BillingApi.md#listRefundOfPaymentTransaction) | **GET** /org/{orgId}/buyer/{buyerId}/paymentTransaction/{paymentTransactionId}/refund | list refunds.
[**payInvoiceV2**](BillingApi.md#payInvoiceV2) | **PATCH** /org/{orgId}/invoice/{invoiceId}/pay | pay invoice
[**previewInvoiceEmail**](BillingApi.md#previewInvoiceEmail) | **GET** /org/{orgId}/invoice/{invoiceId}/preview | preview invoice email
[**updateAddon**](BillingApi.md#updateAddon) | **PATCH** /org/{orgId}/addon/{addonId} | update addon
[**updateInvoiceInfoV2**](BillingApi.md#updateInvoiceInfoV2) | **PATCH** /org/{orgId}/invoice/{invoiceId}/info | update invoice info
[**voidInvoiceV2**](BillingApi.md#voidInvoiceV2) | **PATCH** /org/{orgId}/invoice/{invoiceId}/void | void invoice


# **createAddon**
> BillingAddon createAddon(data)

Create an addon template

### Example


```typescript
import { createConfiguration, BillingApi } from '';
import type { BillingApiCreateAddonRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingApi(configuration);

const request: BillingApiCreateAddonRequest = {
    // Organization ID
  orgId: "orgId_example",
    // CreateAndUpdateAddonParams
  data: {
    amount: 3.14,
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.createAddon(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **CreateAndUpdateAddonParams**| CreateAndUpdateAddonParams |
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**BillingAddon**

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

# **createRefund**
> BillingPaymentTransaction createRefund()

create refund on the payment transaction, support partial refunds multiple times.

### Example


```typescript
import { createConfiguration, BillingApi } from '';
import type { BillingApiCreateRefundRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingApi(configuration);

const request: BillingApiCreateRefundRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Buyer ID
  buyerId: "buyerId_example",
    // Payment transaction ID
  paymentTransactionId: "paymentTransactionId_example",
    // Refund amount
  amount: 3.14,
};

const data = await apiInstance.createRefund(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **buyerId** | [**string**] | Buyer ID | defaults to undefined
 **paymentTransactionId** | [**string**] | Payment transaction ID | defaults to undefined
 **amount** | [**number**] | Refund amount | defaults to undefined


### Return type

**BillingPaymentTransaction**

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

# **deleteAddon**
> string deleteAddon()

Soft delete an addon template

### Example


```typescript
import { createConfiguration, BillingApi } from '';
import type { BillingApiDeleteAddonRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingApi(configuration);

const request: BillingApiDeleteAddonRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Addon ID
  addonId: "addonId_example",
};

const data = await apiInstance.deleteAddon(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **addonId** | [**string**] | Addon ID | defaults to undefined


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
**200** | Empty string if deletion is successful |  -  |
**400** | Bad request error |  -  |
**500** | internal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAddon**
> BillingAddon getAddon()

Get an addon template

### Example


```typescript
import { createConfiguration, BillingApi } from '';
import type { BillingApiGetAddonRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingApi(configuration);

const request: BillingApiGetAddonRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Addon ID
  addonId: "addonId_example",
};

const data = await apiInstance.getAddon(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **addonId** | [**string**] | Addon ID | defaults to undefined


### Return type

**BillingAddon**

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
**500** | internal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getInvoiceV2**
> BillingInvoice getInvoiceV2()

Get the invoice by ID

### Example


```typescript
import { createConfiguration, BillingApi } from '';
import type { BillingApiGetInvoiceV2Request } from '';

const configuration = createConfiguration();
const apiInstance = new BillingApi(configuration);

const request: BillingApiGetInvoiceV2Request = {
    // Organization ID
  orgId: "orgId_example",
    // Invoice ID
  invoiceId: "invoiceId_example",
};

const data = await apiInstance.getInvoiceV2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **invoiceId** | [**string**] | Invoice ID | defaults to undefined


### Return type

**BillingInvoice**

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

# **issueInvoiceV2**
> BillingInvoice issueInvoiceV2()

Issue the invoice immediately. It can be used for manual issue or reissue invoice.

### Example


```typescript
import { createConfiguration, BillingApi } from '';
import type { BillingApiIssueInvoiceV2Request } from '';

const configuration = createConfiguration();
const apiInstance = new BillingApi(configuration);

const request: BillingApiIssueInvoiceV2Request = {
    // Organization ID
  orgId: "orgId_example",
    // Invoice ID
  invoiceId: "invoiceId_example",
    // List of Contact IDs (optional)
  contactIds: [
    "contactIds_example",
  ],
};

const data = await apiInstance.issueInvoiceV2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactIds** | **Array<string>**| List of Contact IDs |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **invoiceId** | [**string**] | Invoice ID | defaults to undefined


### Return type

**BillingInvoice**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the issued Invoice |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAddons**
> Array<BillingAddon> listAddons()

List all addon templates

### Example


```typescript
import { createConfiguration, BillingApi } from '';
import type { BillingApiListAddonsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingApi(configuration);

const request: BillingApiListAddonsRequest = {
    // Organization ID
  orgId: "orgId_example",
    // List pagination size, default 1000, max value is 1000 (optional)
  limit: 1,
    // List pagination offset, default 0 (optional)
  offset: 1,
};

const data = await apiInstance.listAddons(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | List pagination size, default 1000, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**Array<BillingAddon>**

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
**500** | internal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listInvoices**
> Array<BillingInvoice> listInvoices()

List invoices with pagination and filter by status (optional)

### Example


```typescript
import { createConfiguration, BillingApi } from '';
import type { BillingApiListInvoicesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingApi(configuration);

const request: BillingApiListInvoicesRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Optional, filter by the entitlement ID (optional)
  entitlementId: "entitlementId_example",
    // Optional, filter by the given buyer ID (optional)
  buyerId: "buyerId_example",
    // Optional, filter by invoice status as filter, if not provided, all status invoices are returned (optional)
  status: "DRAFT",
    // List pagination size, default 1000, max value is 1000 (optional)
  limit: 1,
    // List pagination offset, default 0 (optional)
  offset: 1,
};

const data = await apiInstance.listInvoices(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Optional, filter by the entitlement ID | (optional) defaults to undefined
 **buyerId** | [**string**] | Optional, filter by the given buyer ID | (optional) defaults to undefined
 **status** | [**&#39;DRAFT&#39; | &#39;FINALIZED&#39; | &#39;CANCELED&#39; | &#39;DELETED&#39; | &#39;&#39;**]**Array<&#39;DRAFT&#39; &#124; &#39;FINALIZED&#39; &#124; &#39;CANCELED&#39; &#124; &#39;DELETED&#39; &#124; &#39;&#39;>** | Optional, filter by invoice status as filter, if not provided, all status invoices are returned | (optional) defaults to undefined
 **limit** | [**number**] | List pagination size, default 1000, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**Array<BillingInvoice>**

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
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPaymentTransactions**
> Array<BillingPaymentTransaction> listPaymentTransactions()

List payment transactions with pagination and filters

### Example


```typescript
import { createConfiguration, BillingApi } from '';
import type { BillingApiListPaymentTransactionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingApi(configuration);

const request: BillingApiListPaymentTransactionsRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Optional, filter by the given buyer ID (optional)
  buyerId: "buyerId_example",
    // Optional, filter by the given entitlement ID (optional)
  entitlementId: "entitlementId_example",
    // Optional, filter by the given invoice ID (optional)
  invoiceId: "invoiceId_example",
    // Optional, filter by status (optional)
  status: "PENDING",
    // Optional, filter by transaction type (optional)
  type: "CHARGE",
    // List pagination size, default 1000, max value is 1000 (optional)
  limit: 1,
    // List pagination offset, default 0 (optional)
  offset: 1,
};

const data = await apiInstance.listPaymentTransactions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **buyerId** | [**string**] | Optional, filter by the given buyer ID | (optional) defaults to undefined
 **entitlementId** | [**string**] | Optional, filter by the given entitlement ID | (optional) defaults to undefined
 **invoiceId** | [**string**] | Optional, filter by the given invoice ID | (optional) defaults to undefined
 **status** | [**&#39;PENDING&#39; | &#39;PROCESSING&#39; | &#39;SUCCESS&#39; | &#39;FAILED&#39;**]**Array<&#39;PENDING&#39; &#124; &#39;PROCESSING&#39; &#124; &#39;SUCCESS&#39; &#124; &#39;FAILED&#39;>** | Optional, filter by status | (optional) defaults to undefined
 **type** | [**&#39;CHARGE&#39; | &#39;REFUND&#39;**]**Array<&#39;CHARGE&#39; &#124; &#39;REFUND&#39;>** | Optional, filter by transaction type | (optional) defaults to undefined
 **limit** | [**number**] | List pagination size, default 1000, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**Array<BillingPaymentTransaction>**

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

# **listRefundOfPaymentTransaction**
> Array<BillingPaymentTransaction> listRefundOfPaymentTransaction()

list refunds of the payment transactions.

### Example


```typescript
import { createConfiguration, BillingApi } from '';
import type { BillingApiListRefundOfPaymentTransactionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingApi(configuration);

const request: BillingApiListRefundOfPaymentTransactionRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Buyer ID
  buyerId: "buyerId_example",
    // Payment transaction ID
  paymentTransactionId: "paymentTransactionId_example",
};

const data = await apiInstance.listRefundOfPaymentTransaction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **buyerId** | [**string**] | Buyer ID | defaults to undefined
 **paymentTransactionId** | [**string**] | Payment transaction ID | defaults to undefined


### Return type

**Array<BillingPaymentTransaction>**

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

# **payInvoiceV2**
> BillingInvoice payInvoiceV2()

Initiate the payment for the invoice immediately. It can be used for manual payment or retry payment.

### Example


```typescript
import { createConfiguration, BillingApi } from '';
import type { BillingApiPayInvoiceV2Request } from '';

const configuration = createConfiguration();
const apiInstance = new BillingApi(configuration);

const request: BillingApiPayInvoiceV2Request = {
    // Organization ID
  orgId: "orgId_example",
    // Invoice ID
  invoiceId: "invoiceId_example",
};

const data = await apiInstance.payInvoiceV2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **invoiceId** | [**string**] | Invoice ID | defaults to undefined


### Return type

**BillingInvoice**

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

# **previewInvoiceEmail**
> string previewInvoiceEmail()

Returns the preview HTML content of the invoice issued email.

### Example


```typescript
import { createConfiguration, BillingApi } from '';
import type { BillingApiPreviewInvoiceEmailRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingApi(configuration);

const request: BillingApiPreviewInvoiceEmailRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Invoice ID
  invoiceId: "invoiceId_example",
};

const data = await apiInstance.previewInvoiceEmail(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **invoiceId** | [**string**] | Invoice ID | defaults to undefined


### Return type

**string**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | HTML content of the invoice issued email |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAddon**
> BillingAddon updateAddon(data)

Update an addon template

### Example


```typescript
import { createConfiguration, BillingApi } from '';
import type { BillingApiUpdateAddonRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingApi(configuration);

const request: BillingApiUpdateAddonRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Addon ID
  addonId: "addonId_example",
    // CreateAndUpdateAddonParams
  data: {
    amount: 3.14,
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.updateAddon(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **CreateAndUpdateAddonParams**| CreateAndUpdateAddonParams |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **addonId** | [**string**] | Addon ID | defaults to undefined


### Return type

**BillingAddon**

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

# **updateInvoiceInfoV2**
> BillingInvoiceInfo updateInvoiceInfoV2(data)

Update a draft invoice. Only DueDate, OverallDiscount, and Memo can be updated.

### Example


```typescript
import { createConfiguration, BillingApi } from '';
import type { BillingApiUpdateInvoiceInfoV2Request } from '';

const configuration = createConfiguration();
const apiInstance = new BillingApi(configuration);

const request: BillingApiUpdateInvoiceInfoV2Request = {
    // Organization ID
  orgId: "orgId_example",
    // Invoice ID
  invoiceId: "invoiceId_example",
    // Update Invoice Info Request Params
  data: {
    discountAmount: 3.14,
    discountType: ,
    dueDate: "dueDate_example",
    memo: "memo_example",
  },
};

const data = await apiInstance.updateInvoiceInfoV2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **UpdateInvoiceInfoRequest**| Update Invoice Info Request Params |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **invoiceId** | [**string**] | Invoice ID | defaults to undefined


### Return type

**BillingInvoiceInfo**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated Invoice info |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **voidInvoiceV2**
> BillingInvoice voidInvoiceV2()

Void the invoice. It can be used for manual void or cancel the invoice.

### Example


```typescript
import { createConfiguration, BillingApi } from '';
import type { BillingApiVoidInvoiceV2Request } from '';

const configuration = createConfiguration();
const apiInstance = new BillingApi(configuration);

const request: BillingApiVoidInvoiceV2Request = {
    // Organization ID
  orgId: "orgId_example",
    // Invoice ID
  invoiceId: "invoiceId_example",
};

const data = await apiInstance.voidInvoiceV2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **invoiceId** | [**string**] | Invoice ID | defaults to undefined


### Return type

**BillingInvoice**

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


