# .ReportApi

All URIs are relative to *https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRevenueReport**](ReportApi.md#getRevenueReport) | **POST** /org/{orgId}/revenueReport | get revenue report
[**listDailyRevenueRecords**](ReportApi.md#listDailyRevenueRecords) | **GET** /org/{orgId}/dailyRevenueRecord | list daily revenue records
[**listRevenueRecordDetails**](ReportApi.md#listRevenueRecordDetails) | **GET** /org/{orgId}/partner/{partner}/revenueRecordDetail | list revenue record details
[**listRevenueRecords**](ReportApi.md#listRevenueRecords) | **GET** /org/{orgId}/partner/{partner}/revenueRecord | list revenue records
[**listUsageMeteringDailyRecords**](ReportApi.md#listUsageMeteringDailyRecords) | **GET** /org/{orgId}/partner/{partner}/usageMeteringDailyRecord | list usage metering daily records


# **getRevenueReport**
> RevenueReport getRevenueReport(data)

Get the revenue report of the given organization, product, entitlement, or buyer.

### Example


```typescript
import { createConfiguration, ReportApi } from '';
import type { ReportApiGetRevenueReportRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReportApi(configuration);

const request: ReportApiGetRevenueReportRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Get Revenue Report Params
  data: {
    buyerID: "buyerID_example",
    entitlementID: "entitlementID_example",
    groupBy: ,
    organizationID: "organizationID_example",
    partner: "AWS",
    productID: "productID_example",
    reportType: "GrossAmount",
    service: "MARKETPLACE",
  },
};

const data = await apiInstance.getRevenueReport(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **GetRevenueReportParams**| Get Revenue Report Params |
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**RevenueReport**

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

# **listDailyRevenueRecords**
> Array<RevenueRecord> listDailyRevenueRecords()

list daily revenue records for the given organization, partner, entitlement, or buyer, within the given date range.

### Example


```typescript
import { createConfiguration, ReportApi } from '';
import type { ReportApiListDailyRevenueRecordsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReportApi(configuration);

const request: ReportApiListDailyRevenueRecordsRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Cloud Partner (optional)
  partner: "AWS",
    // Filter daily revenue records by the given product ID (optional)
  productId: "productId_example",
    // Filter daily revenue records by the given buyer ID (optional)
  buyerId: "buyerId_example",
    // Filter daily revenue records by the given entitlement ID (optional)
  entitlementId: "entitlementId_example",
    // start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate (optional)
  startDate: "startDate_example",
    // end date (UTC) in YYYY-MM-DD format, default is today (optional)
  endDate: "endDate_example",
};

const data = await apiInstance.listDailyRevenueRecords(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | [**&#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;**]**Array<&#39;AWS&#39; &#124; &#39;AZURE&#39; &#124; &#39;GCP&#39;>** | Cloud Partner | (optional) defaults to undefined
 **productId** | [**string**] | Filter daily revenue records by the given product ID | (optional) defaults to undefined
 **buyerId** | [**string**] | Filter daily revenue records by the given buyer ID | (optional) defaults to undefined
 **entitlementId** | [**string**] | Filter daily revenue records by the given entitlement ID | (optional) defaults to undefined
 **startDate** | [**string**] | start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate | (optional) defaults to undefined
 **endDate** | [**string**] | end date (UTC) in YYYY-MM-DD format, default is today | (optional) defaults to undefined


### Return type

**Array<RevenueRecord>**

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

# **listRevenueRecordDetails**
> ListRevenueRecordDetailsResponse listRevenueRecordDetails()

list the raw revenue record details for the given organization, partner, product, entitlement, or buyer.

### Example


```typescript
import { createConfiguration, ReportApi } from '';
import type { ReportApiListRevenueRecordDetailsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReportApi(configuration);

const request: ReportApiListRevenueRecordDetailsRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Cloud Partner
  partner: "AWS",
    // Filter revenue record details by the given product ID (optional)
  productId: "productId_example",
    // Filter revenue record details by the given buyer ID (optional)
  buyerId: "buyerId_example",
    // Filter revenue record details by the given entitlement ID (optional)
  entitlementId: "entitlementId_example",
    // start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate (optional)
  startDate: "startDate_example",
    // end date (UTC) in YYYY-MM-DD format, default is today (optional)
  endDate: "endDate_example",
    // List pagination size, default 1000, max value is 1000 (optional)
  limit: 1,
    // List pagination offset, default 0 (optional)
  offset: 1,
};

const data = await apiInstance.listRevenueRecordDetails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | [**&#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;**]**Array<&#39;AWS&#39; &#124; &#39;AZURE&#39; &#124; &#39;GCP&#39;>** | Cloud Partner | defaults to undefined
 **productId** | [**string**] | Filter revenue record details by the given product ID | (optional) defaults to undefined
 **buyerId** | [**string**] | Filter revenue record details by the given buyer ID | (optional) defaults to undefined
 **entitlementId** | [**string**] | Filter revenue record details by the given entitlement ID | (optional) defaults to undefined
 **startDate** | [**string**] | start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate | (optional) defaults to undefined
 **endDate** | [**string**] | end date (UTC) in YYYY-MM-DD format, default is today | (optional) defaults to undefined
 **limit** | [**number**] | List pagination size, default 1000, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**ListRevenueRecordDetailsResponse**

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

# **listRevenueRecords**
> ListRevenueRecordsResponse listRevenueRecords()

list the revenue records for the given organization, product, entitlement, or buyer.

### Example


```typescript
import { createConfiguration, ReportApi } from '';
import type { ReportApiListRevenueRecordsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReportApi(configuration);

const request: ReportApiListRevenueRecordsRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Cloud Partner
  partner: "AWS",
    // Filter revenue records by the given product ID (optional)
  productId: "productId_example",
    // Filter revenue records by the given entitlement ID (optional)
  entitlementId: "entitlementId_example",
    // Filter revenue records by the given buyer ID (optional)
  buyerId: "buyerId_example",
    // start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate (optional)
  startDate: "startDate_example",
    // end date (UTC) in YYYY-MM-DD format, default is today (optional)
  endDate: "endDate_example",
    // List pagination size, default 1000, max value is 1000 (optional)
  limit: 1,
    // List pagination offset, default 0 (optional)
  offset: 1,
};

const data = await apiInstance.listRevenueRecords(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | [**&#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;**]**Array<&#39;AWS&#39; &#124; &#39;AZURE&#39; &#124; &#39;GCP&#39;>** | Cloud Partner | defaults to undefined
 **productId** | [**string**] | Filter revenue records by the given product ID | (optional) defaults to undefined
 **entitlementId** | [**string**] | Filter revenue records by the given entitlement ID | (optional) defaults to undefined
 **buyerId** | [**string**] | Filter revenue records by the given buyer ID | (optional) defaults to undefined
 **startDate** | [**string**] | start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate | (optional) defaults to undefined
 **endDate** | [**string**] | end date (UTC) in YYYY-MM-DD format, default is today | (optional) defaults to undefined
 **limit** | [**number**] | List pagination size, default 1000, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**ListRevenueRecordsResponse**

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

# **listUsageMeteringDailyRecords**
> ListUsageMeteringDailyRecordsResponse listUsageMeteringDailyRecords()

list the daily records of the usage metering from the cloud marketplace for the given organization, entitlement, or buyer.

### Example


```typescript
import { createConfiguration, ReportApi } from '';
import type { ReportApiListUsageMeteringDailyRecordsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReportApi(configuration);

const request: ReportApiListUsageMeteringDailyRecordsRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Filter by the Cloud Partner
  partner: "AWS",
    // Filter usage metering daily records by the given buyer ID (optional)
  buyerId: "buyerId_example",
    // Filter usage metering daily records by the given entitlement ID (optional)
  entitlementId: "entitlementId_example",
    // start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate (optional)
  startDate: "startDate_example",
    // end date (UTC) in YYYY-MM-DD format, default is today (optional)
  endDate: "endDate_example",
    // List pagination size, default 1000, max value is 1000 (optional)
  limit: 1,
    // List pagination offset, default 0 (optional)
  offset: 1,
};

const data = await apiInstance.listUsageMeteringDailyRecords(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | [**&#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;**]**Array<&#39;AWS&#39; &#124; &#39;AZURE&#39; &#124; &#39;GCP&#39;>** | Filter by the Cloud Partner | defaults to undefined
 **buyerId** | [**string**] | Filter usage metering daily records by the given buyer ID | (optional) defaults to undefined
 **entitlementId** | [**string**] | Filter usage metering daily records by the given entitlement ID | (optional) defaults to undefined
 **startDate** | [**string**] | start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate | (optional) defaults to undefined
 **endDate** | [**string**] | end date (UTC) in YYYY-MM-DD format, default is today | (optional) defaults to undefined
 **limit** | [**number**] | List pagination size, default 1000, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**ListUsageMeteringDailyRecordsResponse**

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


