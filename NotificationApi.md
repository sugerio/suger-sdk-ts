# .NotificationApi

All URIs are relative to *https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNotificationMessage**](NotificationApi.md#getNotificationMessage) | **GET** /org/{orgId}/notificationMessage/{notificationMessageId} | get notification message
[**listNotificationEvents**](NotificationApi.md#listNotificationEvents) | **GET** /org/{orgId}/notificationEvent | list notification events
[**listNotificationEventsByEntity**](NotificationApi.md#listNotificationEventsByEntity) | **GET** /org/{orgId}/notificationEvent/{entityType}/{entityId} | list notification events by entity
[**listNotificationMessages**](NotificationApi.md#listNotificationMessages) | **GET** /org/{orgId}/notificationMessage | list notification messages


# **getNotificationMessage**
> NotificationMessage getNotificationMessage()

Get the notification message of the organization & notification message ID.

### Example


```typescript
import { createConfiguration, NotificationApi } from '';
import type { NotificationApiGetNotificationMessageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NotificationApi(configuration);

const request: NotificationApiGetNotificationMessageRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Notification Message ID
  notificationMessageId: "notificationMessageId_example",
};

const data = await apiInstance.getNotificationMessage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **notificationMessageId** | [**string**] | Notification Message ID | defaults to undefined


### Return type

**NotificationMessage**

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

# **listNotificationEvents**
> ListNotificationEventsResponse listNotificationEvents()

List the notification events of the given organization with pagination and optional filters.

### Example


```typescript
import { createConfiguration, NotificationApi } from '';
import type { NotificationApiListNotificationEventsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NotificationApi(configuration);

const request: NotificationApiListNotificationEventsRequest = {
    // Organization ID
  orgId: "orgId_example",
    // start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate (optional)
  startDate: "startDate_example",
    // end date (UTC) in YYYY-MM-DD format, default is today (optional)
  endDate: "endDate_example",
    // List pagination size, default 1000, max value is 1000 (optional)
  limit: 1,
    // List pagination offset, default 0 (optional)
  offset: 1,
    // Filter by priorities, empty means HIGH and CRITICAL only. Valid values are: LOW, MEDIUM, HIGH, CRITICAL. Multiple values are supported, separated by comma. (optional)
  priorities: "priorities_example",
    // Filter by event message containing the specified string, case-insensitive. (optional)
  message: "message_example",
};

const data = await apiInstance.listNotificationEvents(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **startDate** | [**string**] | start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate | (optional) defaults to undefined
 **endDate** | [**string**] | end date (UTC) in YYYY-MM-DD format, default is today | (optional) defaults to undefined
 **limit** | [**number**] | List pagination size, default 1000, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined
 **priorities** | [**string**] | Filter by priorities, empty means HIGH and CRITICAL only. Valid values are: LOW, MEDIUM, HIGH, CRITICAL. Multiple values are supported, separated by comma. | (optional) defaults to undefined
 **message** | [**string**] | Filter by event message containing the specified string, case-insensitive. | (optional) defaults to undefined


### Return type

**ListNotificationEventsResponse**

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

# **listNotificationEventsByEntity**
> ListNotificationEventsResponse listNotificationEventsByEntity()

List the notification events of the given organization and entity with pagination.

### Example


```typescript
import { createConfiguration, NotificationApi } from '';
import type { NotificationApiListNotificationEventsByEntityRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NotificationApi(configuration);

const request: NotificationApiListNotificationEventsByEntityRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Entity type, valid values are: PRODUCT, OFFER, ENTITLEMENT, INTEGRATION etc.
  entityType: "entityType_example",
    // Entity ID
  entityId: "entityId_example",
    // List pagination size, default 1000, max value is 1000 (optional)
  limit: 1,
    // List pagination offset, default 0 (optional)
  offset: 1,
};

const data = await apiInstance.listNotificationEventsByEntity(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **entityType** | [**string**] | Entity type, valid values are: PRODUCT, OFFER, ENTITLEMENT, INTEGRATION etc. | defaults to undefined
 **entityId** | [**string**] | Entity ID | defaults to undefined
 **limit** | [**number**] | List pagination size, default 1000, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**ListNotificationEventsResponse**

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

# **listNotificationMessages**
> ListNotificationMessagesResponse listNotificationMessages()

List the notification messages of the given organization with pagination.

### Example


```typescript
import { createConfiguration, NotificationApi } from '';
import type { NotificationApiListNotificationMessagesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NotificationApi(configuration);

const request: NotificationApiListNotificationMessagesRequest = {
    // Organization ID
  orgId: "orgId_example",
    // List pagination size, default 1000, max value is 1000 (optional)
  limit: 1,
    // List pagination offset, default 0 (optional)
  offset: 1,
};

const data = await apiInstance.listNotificationMessages(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | List pagination size, default 1000, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**ListNotificationMessagesResponse**

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


