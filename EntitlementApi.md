# .EntitlementApi

All URIs are relative to *http://https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addEntitlementCredit**](EntitlementApi.md#addEntitlementCredit) | **POST** /org/{orgId}/entitlement/{entitlementId}/addCredit | add entitlement credit
[**applyAddonToEntitlement**](EntitlementApi.md#applyAddonToEntitlement) | **POST** /org/{orgId}/entitlement/{entitlementId}/addon | apply addon to entitlement
[**approveEntitlement**](EntitlementApi.md#approveEntitlement) | **POST** /org/{orgId}/entitlement/{entitlementId}/approve | approve entitlement
[**cancelEntitlement**](EntitlementApi.md#cancelEntitlement) | **POST** /org/{orgId}/entitlement/{entitlementId}/cancel | cancel entitlement
[**createEntitlement**](EntitlementApi.md#createEntitlement) | **POST** /org/{orgId}/entitlement | create entitlement
[**deleteEntitlementTerm**](EntitlementApi.md#deleteEntitlementTerm) | **DELETE** /org/{orgId}/entitlement/{entitlementId}/entitlementTerm/{entitlementTermId} | delete entitlement term
[**divideEntitlementCommit**](EntitlementApi.md#divideEntitlementCommit) | **POST** /org/{orgId}/entitlement/{entitlementId}/divideCommit | divide entitlement commit
[**getEntitlement**](EntitlementApi.md#getEntitlement) | **GET** /org/{orgId}/entitlement/{entitlementId} | get entitlement
[**getEntitlementTerm**](EntitlementApi.md#getEntitlementTerm) | **GET** /org/{orgId}/entitlement/{entitlementId}/entitlementTerm/{entitlementTermId} | get entitlement term
[**listEntitlementTerms**](EntitlementApi.md#listEntitlementTerms) | **GET** /org/{orgId}/entitlement/{entitlementId}/entitlementTerm | list entitlement terms
[**listEntitlements**](EntitlementApi.md#listEntitlements) | **GET** /org/{orgId}/entitlement | list entitlements
[**scheduleEntitlementCancellation**](EntitlementApi.md#scheduleEntitlementCancellation) | **POST** /org/{orgId}/entitlement/{entitlementId}/scheduleCancellation | schedule entitlement cancellation
[**unscheduleEntitlementCancellation**](EntitlementApi.md#unscheduleEntitlementCancellation) | **POST** /org/{orgId}/entitlement/{entitlementId}/unscheduleCancellation | unschedule entitlement cancellation
[**updateEntitlementMetaInfo**](EntitlementApi.md#updateEntitlementMetaInfo) | **PATCH** /org/{orgId}/entitlement/{entitlementId}/metaInfo | update entitlement meta info
[**updateEntitlementName**](EntitlementApi.md#updateEntitlementName) | **PATCH** /org/{orgId}/entitlement/{entitlementId}/entitlementName | update entitlement name
[**updateEntitlementPriceModel**](EntitlementApi.md#updateEntitlementPriceModel) | **PATCH** /org/{orgId}/entitlement/{entitlementId}/priceModel | update entitlement price model
[**updateEntitlementSeat**](EntitlementApi.md#updateEntitlementSeat) | **PATCH** /org/{orgId}/entitlement/{entitlementId}/seat | update seat for the active AZURE subscription


# **addEntitlementCredit**
> AddEntitlementCreditResponse addEntitlementCredit(data)

Add the credit amount to the given Entitlement. The credit amount is accumulated & saved in the current Entitlement Term of the gvien Entitlement.

### Example


```typescript
import { createConfiguration, EntitlementApi } from '';
import type { EntitlementApiAddEntitlementCreditRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EntitlementApi(configuration);

const request: EntitlementApiAddEntitlementCreditRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Entitlement ID
  entitlementId: "entitlementId_example",
    // RequestBody
  data: {
    creditAmountIncrement: 3.14,
    entitlementID: "entitlementID_example",
    entitlementTermID: "entitlementTermID_example",
    organizationID: "organizationID_example",
  },
};

const data = await apiInstance.addEntitlementCredit(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **AddEntitlementCreditParams**| RequestBody |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined


### Return type

**AddEntitlementCreditResponse**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request Error |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **applyAddonToEntitlement**
> WorkloadEntitlement applyAddonToEntitlement(data)

Apply one billing addon to the given Entitlement. The entitlement status must be ACTIVE.

### Example


```typescript
import { createConfiguration, EntitlementApi } from '';
import type { EntitlementApiApplyAddonToEntitlementRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EntitlementApi(configuration);

const request: EntitlementApiApplyAddonToEntitlementRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Entitlement ID
  entitlementId: "entitlementId_example",
    // RequestBody
  data: {
    amount: 3.14,
    chargeOn: new Date('1970-01-01T00:00:00.00Z'),
    description: "description_example",
    id: "id_example",
    name: "name_example",
  },
};

const data = await apiInstance.applyAddonToEntitlement(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **BillingAddonRecord**| RequestBody |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined


### Return type

**WorkloadEntitlement**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Entitlement |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **approveEntitlement**
> WorkloadEntitlement approveEntitlement()

Approve the given Entitlement. Only applicable to the Azure or GCP Entitlements with the status of \"PENDING_START\". Return 200 if the entitlement is already active.

### Example


```typescript
import { createConfiguration, EntitlementApi } from '';
import type { EntitlementApiApproveEntitlementRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EntitlementApi(configuration);

const request: EntitlementApiApproveEntitlementRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Entitlement ID
  entitlementId: "entitlementId_example",
};

const data = await apiInstance.approveEntitlement(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined


### Return type

**WorkloadEntitlement**

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
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cancelEntitlement**
> WorkloadEntitlement cancelEntitlement()

Cancel the active subscription in Azure Marketplace.

### Example


```typescript
import { createConfiguration, EntitlementApi } from '';
import type { EntitlementApiCancelEntitlementRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EntitlementApi(configuration);

const request: EntitlementApiCancelEntitlementRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Entitlement ID
  entitlementId: "entitlementId_example",
};

const data = await apiInstance.cancelEntitlement(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined


### Return type

**WorkloadEntitlement**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the canceled Entitlement |  -  |
**400** | Bad request error |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createEntitlement**
> WorkloadEntitlement createEntitlement(data)

Create an new entitlement for the given buyer & offer. Only applicable to non cloud billing partners.

### Example


```typescript
import { createConfiguration, EntitlementApi } from '';
import type { EntitlementApiCreateEntitlementRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EntitlementApi(configuration);

const request: EntitlementApiCreateEntitlementRequest = {
    // Organization ID
  orgId: "orgId_example",
    // RequestBody
  data: {
    buyerId: "buyerId_example",
    endDate: "endDate_example",
    offerId: "offerId_example",
    organizationId: "organizationId_example",
    startDate: "startDate_example",
  },
};

const data = await apiInstance.createEntitlement(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **CreateEntitlementParams**| RequestBody |
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**WorkloadEntitlement**

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
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteEntitlementTerm**
> string deleteEntitlementTerm()

Delete the entitlement term by the given entitlement ID and entitlement term ID. Only allow to delete the divided entitlement term.

### Example


```typescript
import { createConfiguration, EntitlementApi } from '';
import type { EntitlementApiDeleteEntitlementTermRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EntitlementApi(configuration);

const request: EntitlementApiDeleteEntitlementTermRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Entitlement ID
  entitlementId: "entitlementId_example",
    // Entitlement Term ID
  entitlementTermId: "entitlementTermId_example",
};

const data = await apiInstance.deleteEntitlementTerm(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined
 **entitlementTermId** | [**string**] | Entitlement Term ID | defaults to undefined


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

# **divideEntitlementCommit**
> string divideEntitlementCommit(data)

Divide the commit equally from the given entitlement into sub entitlement terms based on the given time periods.

### Example


```typescript
import { createConfiguration, EntitlementApi } from '';
import type { EntitlementApiDivideEntitlementCommitRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EntitlementApi(configuration);

const request: EntitlementApiDivideEntitlementCommitRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Entitlement ID
  entitlementId: "entitlementId_example",
    // RequestBody
  data: {
    commitAmount: 3.14,
    startDates: [
      new Date('1970-01-01T00:00:00.00Z'),
    ],
  },
};

const data = await apiInstance.divideEntitlementCommit(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **DivideEntitlementCommitParams**| RequestBody |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined


### Return type

**string**

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
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEntitlement**
> WorkloadEntitlement getEntitlement()

Get the entitlement by ID.

### Example


```typescript
import { createConfiguration, EntitlementApi } from '';
import type { EntitlementApiGetEntitlementRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EntitlementApi(configuration);

const request: EntitlementApiGetEntitlementRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Entitlement ID
  entitlementId: "entitlementId_example",
};

const data = await apiInstance.getEntitlement(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined


### Return type

**WorkloadEntitlement**

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
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEntitlementTerm**
> WorkloadEntitlementTerm getEntitlementTerm()

Get the entitlement term by ID.

### Example


```typescript
import { createConfiguration, EntitlementApi } from '';
import type { EntitlementApiGetEntitlementTermRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EntitlementApi(configuration);

const request: EntitlementApiGetEntitlementTermRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Entitlement ID
  entitlementId: "entitlementId_example",
    // Entitlement Term ID
  entitlementTermId: "entitlementTermId_example",
};

const data = await apiInstance.getEntitlementTerm(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined
 **entitlementTermId** | [**string**] | Entitlement Term ID | defaults to undefined


### Return type

**WorkloadEntitlementTerm**

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

# **listEntitlementTerms**
> Array<WorkloadEntitlementTerm> listEntitlementTerms()

List all Entitlement Terms of the given Entitlement.

### Example


```typescript
import { createConfiguration, EntitlementApi } from '';
import type { EntitlementApiListEntitlementTermsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EntitlementApi(configuration);

const request: EntitlementApiListEntitlementTermsRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Entitlement ID
  entitlementId: "entitlementId_example",
};

const data = await apiInstance.listEntitlementTerms(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined


### Return type

**Array<WorkloadEntitlementTerm>**

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

# **listEntitlements**
> Array<WorkloadEntitlement> listEntitlements()

List entitlements under the given organization with pagination and optional filters.

### Example


```typescript
import { createConfiguration, EntitlementApi } from '';
import type { EntitlementApiListEntitlementsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EntitlementApi(configuration);

const request: EntitlementApiListEntitlementsRequest = {
    // Organization ID
  orgId: "orgId_example",
    // filter by partner (optional)
  partner: "partner_example",
    // filter by productId (optional)
  productId: "productId_example",
    // filter by offerId (optional)
  offerId: "offerId_example",
    // filter by buyerId (optional)
  buyerId: "buyerId_example",
    // filter by externalId (optional)
  externalId: "externalId_example",
    // filter by buyerAccountId is currently supported only for AWS (optional)
  buyerAccountId: "buyerAccountId_example",
    // List pagination size, default 1000, max value is 1000 (optional)
  limit: 1,
    // List pagination offset, default 0 (optional)
  offset: 1,
};

const data = await apiInstance.listEntitlements(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | [**string**] | filter by partner | (optional) defaults to undefined
 **productId** | [**string**] | filter by productId | (optional) defaults to undefined
 **offerId** | [**string**] | filter by offerId | (optional) defaults to undefined
 **buyerId** | [**string**] | filter by buyerId | (optional) defaults to undefined
 **externalId** | [**string**] | filter by externalId | (optional) defaults to undefined
 **buyerAccountId** | [**string**] | filter by buyerAccountId is currently supported only for AWS | (optional) defaults to undefined
 **limit** | [**number**] | List pagination size, default 1000, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**Array<WorkloadEntitlement>**

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

# **scheduleEntitlementCancellation**
> WorkloadEntitlement scheduleEntitlementCancellation(data)

Schedule the cancellation of the given Entitlement.

### Example


```typescript
import { createConfiguration, EntitlementApi } from '';
import type { EntitlementApiScheduleEntitlementCancellationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EntitlementApi(configuration);

const request: EntitlementApiScheduleEntitlementCancellationRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Entitlement ID
  entitlementId: "entitlementId_example",
    // RequestBody
  data: {
    cancelDate: "cancelDate_example",
    creationDate: "creationDate_example",
    note: "note_example",
    type: ,
  },
};

const data = await apiInstance.scheduleEntitlementCancellation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **CancellationSchedule**| RequestBody |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined


### Return type

**WorkloadEntitlement**

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
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **unscheduleEntitlementCancellation**
> WorkloadEntitlement unscheduleEntitlementCancellation()

Unschedule the cancellation of the given Entitlement.

### Example


```typescript
import { createConfiguration, EntitlementApi } from '';
import type { EntitlementApiUnscheduleEntitlementCancellationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EntitlementApi(configuration);

const request: EntitlementApiUnscheduleEntitlementCancellationRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Entitlement ID
  entitlementId: "entitlementId_example",
};

const data = await apiInstance.unscheduleEntitlementCancellation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined


### Return type

**WorkloadEntitlement**

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

# **updateEntitlementMetaInfo**
> WorkloadMetaInfo updateEntitlementMetaInfo(data)

Update the meta info of the given entitlement.

### Example


```typescript
import { createConfiguration, EntitlementApi } from '';
import type { EntitlementApiUpdateEntitlementMetaInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EntitlementApi(configuration);

const request: EntitlementApiUpdateEntitlementMetaInfoRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Entitlement ID
  entitlementId: "entitlementId_example",
    // Entitlement meta info to update
  data: {
    aceApnCrmUniqueIdentifier: "aceApnCrmUniqueIdentifier_example",
    awsSaasProductDimensions: [
      {
        description: "description_example",
        key: "key_example",
        length: 1,
        name: "name_example",
        rate: 3.14,
        timeUnit: "DAY",
        types: [
          "types_example",
        ],
        unit: "unit_example",
      },
    ],
    baseAgreementId: "baseAgreementId_example",
    buyerIds: [
      "buyerIds_example",
    ],
    contacts: [
      {
        company: "company_example",
        email: "email_example",
        name: "name_example",
      },
    ],
    cppoInOfferId: "cppoInOfferId_example",
    cppoOfferId: "cppoOfferId_example",
    cppoOutOfferId: "cppoOutOfferId_example",
    customMetaInfo: {
      "key": "key_example",
    },
    enableTestUsageMetering: true,
    entitlementCancellationSchedule: ,
    errorMessages: [
      "errorMessages_example",
    ],
    hubspotDealId: "hubspotDealId_example",
    internalNote: "internalNote_example",
    isAgreementBasedOffer: true,
    isGrossRevenueFullSync: true,
    isRenewalOffer: true,
    isReplacementOffer: true,
    lastModifiedBy: ,
    notifications: [
      {
        action: "",
        ccContactIds: [
          "ccContactIds_example",
        ],
        channels: [
          "EMAIL",
        ],
        contactEmails: [
          "contactEmails_example",
        ],
        contactIds: [
          "contactIds_example",
        ],
        createdBy: ,
        customFields: {},
        entityID: "entityID_example",
        entityName: "entityName_example",
        entityStatus: "entityStatus_example",
        entityType: "",
        eventID: "eventID_example",
        eventStatus: ,
        info: {},
        isActionItem: true,
        lastUpdateTime: new Date('1970-01-01T00:00:00.00Z'),
        message: "message_example",
        organizationID: "organizationID_example",
        partner: ,
        priority: ,
        requireAudit: true,
        timestamp: new Date('1970-01-01T00:00:00.00Z'),
        title: "title_example",
        trackEvents: [
          {
            action: "OPEN_EMAIL",
            contactId: "contactId_example",
            timestamp: new Date('1970-01-01T00:00:00.00Z'),
          },
        ],
      },
    ],
    offerAcceptDate: new Date('1970-01-01T00:00:00.00Z'),
    prettifiedErrorMessages: [
      "prettifiedErrorMessages_example",
    ],
    renewalOfferType: ,
    replacedOfferEndTime: new Date('1970-01-01T00:00:00.00Z'),
    replacedOfferResourceName: "replacedOfferResourceName_example",
    salesforceEntitlementURL: "salesforceEntitlementURL_example",
    salesforceOpportunityId: "salesforceOpportunityId_example",
    testUsageMeteringEndTime: new Date('1970-01-01T00:00:00.00Z'),
    updateMessage: "updateMessage_example",
  },
};

const data = await apiInstance.updateEntitlementMetaInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **WorkloadMetaInfo**| Entitlement meta info to update |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined


### Return type

**WorkloadMetaInfo**

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
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateEntitlementName**
> WorkloadEntitlement updateEntitlementName(data)

Update the name of the given Entitlement.

### Example


```typescript
import { createConfiguration, EntitlementApi } from '';
import type { EntitlementApiUpdateEntitlementNameRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EntitlementApi(configuration);

const request: EntitlementApiUpdateEntitlementNameRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Entitlement ID
  entitlementId: "entitlementId_example",
    // UpdateEntitlementNameParams
  data: {
    id: "id_example",
    name: "name_example",
    organizationID: "organizationID_example",
  },
};

const data = await apiInstance.updateEntitlementName(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibUpdateEntitlementNameParams**| UpdateEntitlementNameParams |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined


### Return type

**WorkloadEntitlement**

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
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateEntitlementPriceModel**
> WorkloadEntitlement updateEntitlementPriceModel(data)

Update the price model of the given entitlement, such as recurring commits, billable dimensions. Only applicable to non cloud billing partners.

### Example


```typescript
import { createConfiguration, EntitlementApi } from '';
import type { EntitlementApiUpdateEntitlementPriceModelRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EntitlementApi(configuration);

const request: EntitlementApiUpdateEntitlementPriceModelRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Entitlement ID
  entitlementId: "entitlementId_example",
    // Entitlement price model update params
  data: {
    applyTime: "applyTime_example",
    billableDimensions: [
      {
        billableMetricId: "billableMetricId_example",
        category: ,
        description: "description_example",
        discount: ,
        length: 1,
        minimumCommit: 3.14,
        minimumCommitProrata: true,
        minimumCommitScope: ,
        name: "name_example",
        priceModelBasic: ,
        priceModelBulk: ,
        priceModelMatrix: ,
        priceModelPercentage: ,
        priceModelTiered: ,
        priceModelTieredPercentage: ,
        priceModelVolume: ,
        timeUnit: ,
      },
    ],
    commits: [
      {
        category: "category_example",
        description: "description_example",
        isUserCreated: true,
        key: "key_example",
        length: 1,
        maximumUsers: 1,
        minimumUsers: 1,
        name: "name_example",
        quantity: 1,
        rate: 3.14,
        term: "term_example",
        termEndTime: "termEndTime_example",
        timeUnit: ,
        type: ,
        types: [
          "types_example",
        ],
      },
    ],
  },
};

const data = await apiInstance.updateEntitlementPriceModel(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **UpdateEntitlementPriceModelParams**| Entitlement price model update params |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined


### Return type

**WorkloadEntitlement**

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
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateEntitlementSeat**
> WorkloadEntitlement updateEntitlementSeat()

Update the seat number for the active AZURE subscription.

### Example


```typescript
import { createConfiguration, EntitlementApi } from '';
import type { EntitlementApiUpdateEntitlementSeatRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EntitlementApi(configuration);

const request: EntitlementApiUpdateEntitlementSeatRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Entitlement ID
  entitlementId: "entitlementId_example",
    // New seat number
  newSeat: 1,
};

const data = await apiInstance.updateEntitlementSeat(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined
 **newSeat** | [**number**] | New seat number | defaults to undefined


### Return type

**WorkloadEntitlement**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the original entitlement before the seat update |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


