# .MeteringApi

All URIs are relative to *https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchReportUsageRecordGroups**](MeteringApi.md#batchReportUsageRecordGroups) | **POST** /org/{orgId}/batchCreateUsageRecordGroups | batch report usageRecordGroups
[**batchValidateUsageRecordGroups**](MeteringApi.md#batchValidateUsageRecordGroups) | **POST** /org/{orgId}/batchValidateUsageRecordGroups | batch validate usageRecordGroups
[**createBillableMetric**](MeteringApi.md#createBillableMetric) | **POST** /org/{orgId}/billableMetric | create billable metric
[**deleteUsageRecordGroup**](MeteringApi.md#deleteUsageRecordGroup) | **DELETE** /org/{orgId}/usageRecordGroup/{usageRecordGroupId} | delete usageRecordGroup
[**getBillableMetric**](MeteringApi.md#getBillableMetric) | **GET** /org/{orgId}/billableMetric/{billableMetricId} | get billable metric
[**getUsageMeteringConfigInfo**](MeteringApi.md#getUsageMeteringConfigInfo) | **GET** /org/{orgId}/usageMeteringConfigInfo | get usage metering config info
[**listBillableMetrics**](MeteringApi.md#listBillableMetrics) | **GET** /org/{orgId}/billableMetric | list billable metrics
[**listUsageRecordGroups**](MeteringApi.md#listUsageRecordGroups) | **GET** /org/{orgId}/usageRecordGroup | list usageRecordGroups
[**listUsageRecordReports**](MeteringApi.md#listUsageRecordReports) | **GET** /org/{orgId}/usageRecordReport | list usageRecordReports
[**reportUsageRecordGroup**](MeteringApi.md#reportUsageRecordGroup) | **POST** /org/{orgId}/entitlement/{entitlementId}/usageRecordGroup | report usageRecordGroup
[**retryUsageRecordGroup**](MeteringApi.md#retryUsageRecordGroup) | **POST** /org/{orgId}/usageRecordGroup/{usageRecordGroupId}/retry | retry usageRecordGroup
[**updateBillableMetric**](MeteringApi.md#updateBillableMetric) | **PATCH** /org/{orgId}/billableMetric/{billableMetricId} | update billable metric
[**updateUsageMeteringConfigInfo**](MeteringApi.md#updateUsageMeteringConfigInfo) | **PATCH** /org/{orgId}/usageMeteringConfigInfo | update usage metering config info


# **batchReportUsageRecordGroups**
> Array<MeteringUsageRecordGroup> batchReportUsageRecordGroups(usageRecordGroups)

Batch report new usage record groups.

### Example


```typescript
import { createConfiguration, MeteringApi } from '';
import type { MeteringApiBatchReportUsageRecordGroupsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeteringApi(configuration);

const request: MeteringApiBatchReportUsageRecordGroupsRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Array of new usage record groups to report
  usageRecordGroups: [
    {
      billableRecords: [
        {
          key: "key_example",
          properties: {},
          quantity: 3.14,
        },
      ],
      entitlementID: "entitlementID_example",
      metaInfo: ,
      records: {
        "key": 3.14,
      },
      timestamp: new Date('1970-01-01T00:00:00.00Z'),
    },
  ],
};

const data = await apiInstance.batchReportUsageRecordGroups(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usageRecordGroups** | **Array<NewUsageRecordGroup>**| Array of new usage record groups to report |
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**Array<MeteringUsageRecordGroup>**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | all the quantity of usage records are zero |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **batchValidateUsageRecordGroups**
> string batchValidateUsageRecordGroups(data)

Provide a batch of usage record groups and validate each individual usage record group one by one.

### Example


```typescript
import { createConfiguration, MeteringApi } from '';
import type { MeteringApiBatchValidateUsageRecordGroupsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeteringApi(configuration);

const request: MeteringApiBatchValidateUsageRecordGroupsRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Array of usage record groups to be validated
  data: [
    {
      billableRecords: [
        {
          key: "key_example",
          properties: {},
          quantity: 3.14,
        },
      ],
      entitlementID: "entitlementID_example",
      metaInfo: ,
      records: {
        "key": 3.14,
      },
      timestamp: new Date('1970-01-01T00:00:00.00Z'),
    },
  ],
};

const data = await apiInstance.batchValidateUsageRecordGroups(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Array<NewUsageRecordGroup>**| Array of usage record groups to be validated |
 **orgId** | [**string**] | Organization ID | defaults to undefined


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
**200** | Empty string if validation is successful |  -  |
**400** | Bad request error description |  -  |
**500** | validation failed for usage record group |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createBillableMetric**
> BillableMetric createBillableMetric(data)

Create a new billable metric for the given organization.

### Example


```typescript
import { createConfiguration, MeteringApi } from '';
import type { MeteringApiCreateBillableMetricRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeteringApi(configuration);

const request: MeteringApiCreateBillableMetricRequest = {
    // Organization ID
  orgId: "orgId_example",
    // RequestBody
  data: {
    aggregationType: "COUNT",
    creationTime: new Date('1970-01-01T00:00:00.00Z'),
    description: "description_example",
    id: "id_example",
    info: {
      filterGroups: [
        {
          filters: [
            {
              name: "name_example",
              operation: "IS",
              value: {},
              valueType: "STRING",
            },
          ],
        },
      ],
      groupBys: [
        "groupBys_example",
      ],
      propertyUniqueOn: "propertyUniqueOn_example",
    },
    lastUpdateTime: new Date('1970-01-01T00:00:00.00Z'),
    name: "name_example",
    organizationId: "organizationId_example",
    status: "ACTIVE",
  },
};

const data = await apiInstance.createBillableMetric(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **BillableMetric**| RequestBody |
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**BillableMetric**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request params |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteUsageRecordGroup**
> MeteringUsageRecordGroup deleteUsageRecordGroup()

delete the UsageRecordGroup for the given organization and usageRecordGroup ID. Only usageRecordGroup with status \"CREATED\" or \"INVALID\" can be deleted.

### Example


```typescript
import { createConfiguration, MeteringApi } from '';
import type { MeteringApiDeleteUsageRecordGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeteringApi(configuration);

const request: MeteringApiDeleteUsageRecordGroupRequest = {
    // Organization ID
  orgId: "orgId_example",
    // UsageRecordGroup ID
  usageRecordGroupId: "usageRecordGroupId_example",
    // UsageRecordGroup\'s creation date (UTC) in YYYY-MM-DD format (optional)
  creationDate: "creationDate_example",
};

const data = await apiInstance.deleteUsageRecordGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **usageRecordGroupId** | [**string**] | UsageRecordGroup ID | defaults to undefined
 **creationDate** | [**string**] | UsageRecordGroup\&#39;s creation date (UTC) in YYYY-MM-DD format | (optional) defaults to undefined


### Return type

**MeteringUsageRecordGroup**

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
**404** | usageRecordGroup not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBillableMetric**
> BillableMetric getBillableMetric()

Get the billable metric for the given organization and billable metric ID.

### Example


```typescript
import { createConfiguration, MeteringApi } from '';
import type { MeteringApiGetBillableMetricRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeteringApi(configuration);

const request: MeteringApiGetBillableMetricRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Billable Metric ID
  billableMetricId: "billableMetricId_example",
};

const data = await apiInstance.getBillableMetric(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **billableMetricId** | [**string**] | Billable Metric ID | defaults to undefined


### Return type

**BillableMetric**

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
**404** | billable metric not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUsageMeteringConfigInfo**
> UsageMeteringConfigInfo getUsageMeteringConfigInfo()

Get the usage metering config info of the given organization.

### Example


```typescript
import { createConfiguration, MeteringApi } from '';
import type { MeteringApiGetUsageMeteringConfigInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeteringApi(configuration);

const request: MeteringApiGetUsageMeteringConfigInfoRequest = {
    // Organization ID
  orgId: "orgId_example",
};

const data = await apiInstance.getUsageMeteringConfigInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**UsageMeteringConfigInfo**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Usage metering config info |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listBillableMetrics**
> Array<BillableMetric> listBillableMetrics()

list billable metrics for the given organization.

### Example


```typescript
import { createConfiguration, MeteringApi } from '';
import type { MeteringApiListBillableMetricsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeteringApi(configuration);

const request: MeteringApiListBillableMetricsRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Status of the billable metric (optional)
  status: "status_example",
};

const data = await apiInstance.listBillableMetrics(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **status** | [**string**] | Status of the billable metric | (optional) defaults to undefined


### Return type

**Array<BillableMetric>**

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

# **listUsageRecordGroups**
> ListUsageRecordGroupsResponse listUsageRecordGroups()

List UsageRecordGroups by the given organization, partner, product, entitlement or buyer. Only provide one or none of the optional query parameters: partner, productId, entitlementId & buyerId .

### Example


```typescript
import { createConfiguration, MeteringApi } from '';
import type { MeteringApiListUsageRecordGroupsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeteringApi(configuration);

const request: MeteringApiListUsageRecordGroupsRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Cloud Partner (optional)
  partner: "AWS",
    // filter by buyer ID, default no filter by buyerId if not provided (optional)
  buyerId: "buyerId_example",
    // filter by entitlement ID, default no filter by entitlementId if not provided (optional)
  entitlementId: "entitlementId_example",
    // The status of the usage record group, default no filter by status if not provided (optional)
  status: "CREATED",
    // The source of the usage record group, default no filter by source if not provided (optional)
  source: "",
    // metaInfo filter (optional)
  metaInfo: "metaInfo_example",
    // start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate (optional)
  startDate: "startDate_example",
    // end date (UTC) in YYYY-MM-DD format, default is today (optional)
  endDate: "endDate_example",
    // List pagination size, default 1000, max value is 1000 (optional)
  limit: 1,
    // List pagination offset, default 0 (optional)
  offset: 1,
};

const data = await apiInstance.listUsageRecordGroups(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | [**&#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;**]**Array<&#39;AWS&#39; &#124; &#39;AZURE&#39; &#124; &#39;GCP&#39;>** | Cloud Partner | (optional) defaults to undefined
 **buyerId** | [**string**] | filter by buyer ID, default no filter by buyerId if not provided | (optional) defaults to undefined
 **entitlementId** | [**string**] | filter by entitlement ID, default no filter by entitlementId if not provided | (optional) defaults to undefined
 **status** | [**&#39;CREATED&#39; | &#39;DELETED&#39; | &#39;INVALID&#39; | &#39;REPORTED&#39; | &#39;REPORT_PENDING&#39; | &#39;REPORT_FAILED&#39;**]**Array<&#39;CREATED&#39; &#124; &#39;DELETED&#39; &#124; &#39;INVALID&#39; &#124; &#39;REPORTED&#39; &#124; &#39;REPORT_PENDING&#39; &#124; &#39;REPORT_FAILED&#39;>** | The status of the usage record group, default no filter by status if not provided | (optional) defaults to undefined
 **source** | [**&#39;&#39; | &#39;API&#39; | &#39;INTERNAL&#39; | &#39;LAGO&#39; | &#39;METRONOME&#39; | &#39;ORB&#39; | &#39;STRIPE&#39;**]**Array<&#39;&#39; &#124; &#39;API&#39; &#124; &#39;INTERNAL&#39; &#124; &#39;LAGO&#39; &#124; &#39;METRONOME&#39; &#124; &#39;ORB&#39; &#124; &#39;STRIPE&#39;>** | The source of the usage record group, default no filter by source if not provided | (optional) defaults to undefined
 **metaInfo** | [**string**] | metaInfo filter | (optional) defaults to undefined
 **startDate** | [**string**] | start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate | (optional) defaults to undefined
 **endDate** | [**string**] | end date (UTC) in YYYY-MM-DD format, default is today | (optional) defaults to undefined
 **limit** | [**number**] | List pagination size, default 1000, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**ListUsageRecordGroupsResponse**

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

# **listUsageRecordReports**
> ListUsageRecordReportsResponse listUsageRecordReports()

List usageRecordReports under the given organization, partner, entitlement or buyer, within the given time range and pagination.

### Example


```typescript
import { createConfiguration, MeteringApi } from '';
import type { MeteringApiListUsageRecordReportsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeteringApi(configuration);

const request: MeteringApiListUsageRecordReportsRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Cloud Partner (optional)
  partner: "AWS",
    // buyer ID (optional)
  buyerId: "buyerId_example",
    // entitlement ID (optional)
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

const data = await apiInstance.listUsageRecordReports(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | [**&#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;**]**Array<&#39;AWS&#39; &#124; &#39;AZURE&#39; &#124; &#39;GCP&#39;>** | Cloud Partner | (optional) defaults to undefined
 **buyerId** | [**string**] | buyer ID | (optional) defaults to undefined
 **entitlementId** | [**string**] | entitlement ID | (optional) defaults to undefined
 **startDate** | [**string**] | start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate | (optional) defaults to undefined
 **endDate** | [**string**] | end date (UTC) in YYYY-MM-DD format, default is today | (optional) defaults to undefined
 **limit** | [**number**] | List pagination size, default 1000, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**ListUsageRecordReportsResponse**

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

# **reportUsageRecordGroup**
> MeteringUsageRecordGroup reportUsageRecordGroup(data)

It is recommended to provide the ID in the request body CreateUsageRecordGroupParams, so the report can be deduplicated. All duplicate report will return error code 409.

### Example


```typescript
import { createConfiguration, MeteringApi } from '';
import type { MeteringApiReportUsageRecordGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeteringApi(configuration);

const request: MeteringApiReportUsageRecordGroupRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Entitlement ID
  entitlementId: "entitlementId_example",
    // RequestBody
  data: {
    billableRecords: [
      {
        key: "key_example",
        properties: {},
        quantity: 3.14,
      },
    ],
    entitlementID: "entitlementID_example",
    id: "id_example",
    metaInfo: ,
    organizationID: "organizationID_example",
    records: {
      "key": 3.14,
    },
    timestamp: new Date('1970-01-01T00:00:00.00Z'),
  },
};

const data = await apiInstance.reportUsageRecordGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **CreateUsageRecordGroupParams**| RequestBody |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entitlementId** | [**string**] | Entitlement ID | defaults to undefined


### Return type

**MeteringUsageRecordGroup**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | all the quantity of usage records are zero |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retryUsageRecordGroup**
> MeteringUsageRecordGroup retryUsageRecordGroup()

Retry the given UsageRecordGroup by setting from status \"REPORT_FAILED\" to \"CREATED\", and it will be ready for the next hourly report. Only usageRecordGroup with status \"REPORT_FAILED\" can be retried.

### Example


```typescript
import { createConfiguration, MeteringApi } from '';
import type { MeteringApiRetryUsageRecordGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeteringApi(configuration);

const request: MeteringApiRetryUsageRecordGroupRequest = {
    // Organization ID
  orgId: "orgId_example",
    // UsageRecordGroup ID
  usageRecordGroupId: "usageRecordGroupId_example",
    // UsageRecordGroup\'s creation date (UTC) in YYYY-MM-DD format (optional)
  creationDate: "creationDate_example",
};

const data = await apiInstance.retryUsageRecordGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **usageRecordGroupId** | [**string**] | UsageRecordGroup ID | defaults to undefined
 **creationDate** | [**string**] | UsageRecordGroup\&#39;s creation date (UTC) in YYYY-MM-DD format | (optional) defaults to undefined


### Return type

**MeteringUsageRecordGroup**

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
**404** | usageRecordGroup not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateBillableMetric**
> BillableMetric updateBillableMetric(data)

Update the name, description and status of the billable metric for the given organization.

### Example


```typescript
import { createConfiguration, MeteringApi } from '';
import type { MeteringApiUpdateBillableMetricRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeteringApi(configuration);

const request: MeteringApiUpdateBillableMetricRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Billable Metric ID
  billableMetricId: "billableMetricId_example",
    // RequestBody
  data: {
    description: "description_example",
    name: "name_example",
    status: "ACTIVE",
  },
};

const data = await apiInstance.updateBillableMetric(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **UpdateBillableMetricParams**| RequestBody |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **billableMetricId** | [**string**] | Billable Metric ID | defaults to undefined


### Return type

**BillableMetric**

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
**404** | billable metric not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateUsageMeteringConfigInfo**
> UsageMeteringConfigInfo updateUsageMeteringConfigInfo(data)

Update the usage metering config info of the given organization.

### Example


```typescript
import { createConfiguration, MeteringApi } from '';
import type { MeteringApiUpdateUsageMeteringConfigInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeteringApi(configuration);

const request: MeteringApiUpdateUsageMeteringConfigInfoRequest = {
    // Organization ID
  orgId: "orgId_example",
    // The usage metering config info to be updated
  data: {
    partnerUsageMeteringConfigs: [
      {
        dimensionMapping: {
          "key": {
            convertionMultiplier: 3.14,
            dimensionKey: "dimensionKey_example",
            mappingMode: ,
          },
        },
        dimensionMappingV2: {
          "key": [
            {
              convertionMultiplier: 3.14,
              dimensionKey: "dimensionKey_example",
              mappingMode: ,
            },
          ],
        },
        enableBillableDimension: true,
        enableCommitWithAdditionalUsageAtListPrice: true,
        enableCommitWithAdditionalUsageMetering: true,
        enableDimensionMapping: true,
        partner: ,
      },
    ],
  },
};

const data = await apiInstance.updateUsageMeteringConfigInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **UsageMeteringConfigInfo**| The usage metering config info to be updated |
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**UsageMeteringConfigInfo**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Usage metering config info |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


