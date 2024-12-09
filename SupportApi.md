# .SupportApi

All URIs are relative to *http://https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**closeSupportTicket**](SupportApi.md#closeSupportTicket) | **PATCH** /org/{orgId}/support/ticket/{ticketId}/close | close support ticket
[**createSupportTicket**](SupportApi.md#createSupportTicket) | **POST** /org/{orgId}/support/ticket | create support ticket
[**createSupportTicketAttachment**](SupportApi.md#createSupportTicketAttachment) | **POST** /org/{orgId}/support/ticket/{ticketId}/attachment | create support ticket attachment
[**createSupportTicketComment**](SupportApi.md#createSupportTicketComment) | **POST** /org/{orgId}/support/ticket/{ticketId}/comment | create support ticket comment
[**getSupportTicket**](SupportApi.md#getSupportTicket) | **GET** /org/{orgId}/support/ticket/{ticketId} | get support ticket
[**listSupportTickets**](SupportApi.md#listSupportTickets) | **GET** /org/{orgId}/support/ticket | list support tickets
[**reopenSupportTicket**](SupportApi.md#reopenSupportTicket) | **PATCH** /org/{orgId}/support/ticket/{ticketId}/reopen | reopen support ticket
[**updateSupportTicket**](SupportApi.md#updateSupportTicket) | **PATCH** /org/{orgId}/support/ticket/{ticketId} | update support ticket


# **closeSupportTicket**
> SupportTicket closeSupportTicket()

close suuport ticket

### Example


```typescript
import { createConfiguration, SupportApi } from '';
import type { SupportApiCloseSupportTicketRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SupportApi(configuration);

const request: SupportApiCloseSupportTicketRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Ticket ID
  ticketId: "ticketId_example",
};

const data = await apiInstance.closeSupportTicket(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **ticketId** | [**string**] | Ticket ID | defaults to undefined


### Return type

**SupportTicket**

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

# **createSupportTicket**
> SupportTicket createSupportTicket(body)

create support ticket

### Example


```typescript
import { createConfiguration, SupportApi } from '';
import type { SupportApiCreateSupportTicketRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SupportApi(configuration);

const request: SupportApiCreateSupportTicketRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Ticket create request
  body: {
    attachments: [
      {
        date: "date_example",
        id: "id_example",
        mimetype: "mimetype_example",
        size: 1,
        thumbnailLarge: "thumbnailLarge_example",
        thumbnailMedium: "thumbnailMedium_example",
        thumbnailSmall: "thumbnailSmall_example",
        title: "title_example",
        url: "url_example",
      },
    ],
    closeTime: "closeTime_example",
    comments: [
      {
        comment: [
          {
            attachment: {
              date: "date_example",
              id: "id_example",
              mimetype: "mimetype_example",
              size: 1,
              thumbnailLarge: "thumbnailLarge_example",
              thumbnailMedium: "thumbnailMedium_example",
              thumbnailSmall: "thumbnailSmall_example",
              title: "title_example",
              url: "url_example",
            },
            frame: {
              id: "id_example",
              url: "url_example",
            },
            image: {
              extension: "extension_example",
              id: "id_example",
              name: "name_example",
              thumbnailLarge: "thumbnailLarge_example",
              thumbnailMedium: "thumbnailMedium_example",
              thumbnailSmall: "thumbnailSmall_example",
              title: "title_example",
              type: "type_example",
              url: "url_example",
            },
            text: "text_example",
            type: "type_example",
          },
        ],
        commentText: "commentText_example",
        creator: ,
        date: "date_example",
        id: "id_example",
      },
    ],
    creationTime: "creationTime_example",
    creator: "creator_example",
    description: "description_example",
    dueTime: "dueTime_example",
    id: "id_example",
    name: "name_example",
    organizationId: "organizationId_example",
    priority: "LOW",
    status: "OPEN",
    watchers: [
      "watchers_example",
    ],
  },
};

const data = await apiInstance.createSupportTicket(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SupportTicket**| Ticket create request |
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**SupportTicket**

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

# **createSupportTicketAttachment**
> Array<SupportTicketAttachment> createSupportTicketAttachment()

create support ticket attachment

### Example


```typescript
import { createConfiguration, SupportApi } from '';
import type { SupportApiCreateSupportTicketAttachmentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SupportApi(configuration);

const request: SupportApiCreateSupportTicketAttachmentRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Ticket ID
  ticketId: "ticketId_example",
    // File to upload
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.createSupportTicketAttachment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **ticketId** | [**string**] | Ticket ID | defaults to undefined
 **file** | [**HttpFile**] | File to upload | defaults to undefined


### Return type

**Array<SupportTicketAttachment>**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createSupportTicketComment**
> SupportTicketComment createSupportTicketComment(body)

create support ticket comment

### Example


```typescript
import { createConfiguration, SupportApi } from '';
import type { SupportApiCreateSupportTicketCommentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SupportApi(configuration);

const request: SupportApiCreateSupportTicketCommentRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Ticket ID
  ticketId: "ticketId_example",
    // Ticket create request
  body: {
    comment: [
      {
        attachment: {
          date: "date_example",
          id: "id_example",
          mimetype: "mimetype_example",
          size: 1,
          thumbnailLarge: "thumbnailLarge_example",
          thumbnailMedium: "thumbnailMedium_example",
          thumbnailSmall: "thumbnailSmall_example",
          title: "title_example",
          url: "url_example",
        },
        frame: {
          id: "id_example",
          url: "url_example",
        },
        image: {
          extension: "extension_example",
          id: "id_example",
          name: "name_example",
          thumbnailLarge: "thumbnailLarge_example",
          thumbnailMedium: "thumbnailMedium_example",
          thumbnailSmall: "thumbnailSmall_example",
          title: "title_example",
          type: "type_example",
          url: "url_example",
        },
        text: "text_example",
        type: "type_example",
      },
    ],
    commentText: "commentText_example",
    creator: ,
    date: "date_example",
    id: "id_example",
  },
};

const data = await apiInstance.createSupportTicketComment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SupportTicketComment**| Ticket create request |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **ticketId** | [**string**] | Ticket ID | defaults to undefined


### Return type

**SupportTicketComment**

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

# **getSupportTicket**
> SupportTicket getSupportTicket()

get support ticket

### Example


```typescript
import { createConfiguration, SupportApi } from '';
import type { SupportApiGetSupportTicketRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SupportApi(configuration);

const request: SupportApiGetSupportTicketRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Ticket ID
  ticketId: "ticketId_example",
};

const data = await apiInstance.getSupportTicket(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **ticketId** | [**string**] | Ticket ID | defaults to undefined


### Return type

**SupportTicket**

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

# **listSupportTickets**
> ListSupportTicketsResponse listSupportTickets()

list support tickets

### Example


```typescript
import { createConfiguration, SupportApi } from '';
import type { SupportApiListSupportTicketsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SupportApi(configuration);

const request: SupportApiListSupportTicketsRequest = {
    // Organization ID
  orgId: "orgId_example",
    // List pagination size, default 1000, max value is 1000 (optional)
  limit: 1,
    // List pagination offset, default 0 (optional)
  offset: 1,
};

const data = await apiInstance.listSupportTickets(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | List pagination size, default 1000, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**ListSupportTicketsResponse**

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

# **reopenSupportTicket**
> SupportTicket reopenSupportTicket()

reopen support ticket

### Example


```typescript
import { createConfiguration, SupportApi } from '';
import type { SupportApiReopenSupportTicketRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SupportApi(configuration);

const request: SupportApiReopenSupportTicketRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Ticket ID
  ticketId: "ticketId_example",
};

const data = await apiInstance.reopenSupportTicket(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **ticketId** | [**string**] | Ticket ID | defaults to undefined


### Return type

**SupportTicket**

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

# **updateSupportTicket**
> SupportTicket updateSupportTicket(body)

update support ticket

### Example


```typescript
import { createConfiguration, SupportApi } from '';
import type { SupportApiUpdateSupportTicketRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SupportApi(configuration);

const request: SupportApiUpdateSupportTicketRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Ticket ID
  ticketId: "ticketId_example",
    // Ticket create request
  body: {
    priority: "LOW",
    watchers: [
      "watchers_example",
    ],
  },
};

const data = await apiInstance.updateSupportTicket(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UpdateSupportTicketRequest**| Ticket create request |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **ticketId** | [**string**] | Ticket ID | defaults to undefined


### Return type

**SupportTicket**

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


