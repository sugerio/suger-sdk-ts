# .ContactApi

All URIs are relative to *https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContactToBuyer**](ContactApi.md#addContactToBuyer) | **POST** /org/{orgId}/contact/{contactId}/buyer/{buyerId} | add contact to buyer
[**addContactToOffer**](ContactApi.md#addContactToOffer) | **POST** /org/{orgId}/contact/{contactId}/offer/{offerId} | add contact to offer
[**batchCreateContacts**](ContactApi.md#batchCreateContacts) | **POST** /org/{orgId}/contact/batch | batch create contacts
[**createContact**](ContactApi.md#createContact) | **POST** /org/{orgId}/contact | create contact
[**getContact**](ContactApi.md#getContact) | **GET** /org/{orgId}/contact/{contactId} | get contact
[**listContactsByOrganization**](ContactApi.md#listContactsByOrganization) | **GET** /org/{orgId}/contact | list contacts by organization
[**removeContactFromBuyer**](ContactApi.md#removeContactFromBuyer) | **DELETE** /org/{orgId}/contact/{contactId}/buyer/{buyerId} | remove contact from buyer
[**removeContactFromOffer**](ContactApi.md#removeContactFromOffer) | **DELETE** /org/{orgId}/contact/{contactId}/offer/{offerId} | remove contact from offer
[**updateContact**](ContactApi.md#updateContact) | **PATCH** /org/{orgId}/contact/{contactId} | update contact


# **addContactToBuyer**
> IdentityBuyer addContactToBuyer()

add contact to buyer by the given organization, buyer id and contact id.

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiAddContactToBuyerRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiAddContactToBuyerRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Buyer ID
  buyerId: "buyerId_example",
    // Contact ID
  contactId: "contactId_example",
};

const data = await apiInstance.addContactToBuyer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **buyerId** | [**string**] | Buyer ID | defaults to undefined
 **contactId** | [**string**] | Contact ID | defaults to undefined


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

# **addContactToOffer**
> string addContactToOffer()

add contact to offer by the given organization, offer id and contact id.

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiAddContactToOfferRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiAddContactToOfferRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Contact ID
  contactId: "contactId_example",
    // Offer ID
  offerId: "offerId_example",
};

const data = await apiInstance.addContactToOffer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **contactId** | [**string**] | Contact ID | defaults to undefined
 **offerId** | [**string**] | Offer ID | defaults to undefined


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
**200** | empty string if success |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **batchCreateContacts**
> Array<Array<IdentityContact>> batchCreateContacts(data)

Create multiple contacts under the given organization. If an email address already exists, return the existing contact.

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiBatchCreateContactsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiBatchCreateContactsRequest = {
    // Organization ID
  orgId: "orgId_example",
    // RequestBody
  data: [
    {
      creationTime: "creationTime_example",
      emailAddress: "emailAddress_example",
      id: "id_example",
      info: {
        companyLocation: "companyLocation_example",
        companyName: "companyName_example",
        lastModifiedBy: "lastModifiedBy_example",
        partner: "",
        phoneNumber: "phoneNumber_example",
        role: "role_example",
      },
      lastUpdateTime: "lastUpdateTime_example",
      name: "name_example",
      organizationID: "organizationID_example",
    },
  ],
};

const data = await apiInstance.batchCreateContacts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Array<IdentityContact>**| RequestBody |
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**Array<Array<IdentityContact>>**

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

# **createContact**
> IdentityContact createContact(data)

Create a contact under the given organization. If the email address already exists, return the existing contact.

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiCreateContactRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiCreateContactRequest = {
    // Organization ID
  orgId: "orgId_example",
    // RequestBody
  data: {
    creationTime: "creationTime_example",
    emailAddress: "emailAddress_example",
    id: "id_example",
    info: {
      companyLocation: "companyLocation_example",
      companyName: "companyName_example",
      lastModifiedBy: "lastModifiedBy_example",
      partner: "",
      phoneNumber: "phoneNumber_example",
      role: "role_example",
    },
    lastUpdateTime: "lastUpdateTime_example",
    name: "name_example",
    organizationID: "organizationID_example",
  },
};

const data = await apiInstance.createContact(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **IdentityContact**| RequestBody |
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**IdentityContact**

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

# **getContact**
> IdentityContact getContact()

Get the Contact by the given contact ID.

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiGetContactRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiGetContactRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Contact ID
  contactId: "contactId_example",
};

const data = await apiInstance.getContact(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **contactId** | [**string**] | Contact ID | defaults to undefined


### Return type

**IdentityContact**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the Contact Object |  -  |
**400** | Bad request error description |  -  |
**500** | internal error description |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listContactsByOrganization**
> Array<IdentityContact> listContactsByOrganization()

List all contacts under the given organization.

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiListContactsByOrganizationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiListContactsByOrganizationRequest = {
    // Organization ID
  orgId: "orgId_example",
    // List pagination size, default 1000, max value is 1000 (optional)
  limit: 1,
    // List pagination offset, default 0 (optional)
  offset: 1,
};

const data = await apiInstance.listContactsByOrganization(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | List pagination size, default 1000, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**Array<IdentityContact>**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request error description |  -  |
**500** | internal error description |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeContactFromBuyer**
> string removeContactFromBuyer()

remove contact from buyer by the given organization, buyer id and contact id.

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiRemoveContactFromBuyerRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiRemoveContactFromBuyerRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Buyer ID
  buyerId: "buyerId_example",
    // Contact ID
  contactId: "contactId_example",
};

const data = await apiInstance.removeContactFromBuyer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **buyerId** | [**string**] | Buyer ID | defaults to undefined
 **contactId** | [**string**] | Contact ID | defaults to undefined


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
**200** | empty string if success |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeContactFromOffer**
> string removeContactFromOffer()

remove contact from offer by given organization, offer id and contact id.

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiRemoveContactFromOfferRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiRemoveContactFromOfferRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Contact ID
  contactId: "contactId_example",
    // Offer ID
  offerId: "offerId_example",
};

const data = await apiInstance.removeContactFromOffer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **contactId** | [**string**] | Contact ID | defaults to undefined
 **offerId** | [**string**] | Offer ID | defaults to undefined


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
**200** | empty string if success |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateContact**
> IdentityContact updateContact(data)

Update the contact for the given organization and contact ID. This endpoint supports partial updates. Only the fields provided in the request body will be updated. To clear a field, provide it with an empty value (e.g., \"\" for name, or {} for info).

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiUpdateContactRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiUpdateContactRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Contact ID
  contactId: "contactId_example",
    // Request Body
  data: {
    creationTime: "creationTime_example",
    emailAddress: "emailAddress_example",
    id: "id_example",
    info: {
      companyLocation: "companyLocation_example",
      companyName: "companyName_example",
      lastModifiedBy: "lastModifiedBy_example",
      partner: "",
      phoneNumber: "phoneNumber_example",
      role: "role_example",
    },
    lastUpdateTime: "lastUpdateTime_example",
    name: "name_example",
    organizationID: "organizationID_example",
  },
};

const data = await apiInstance.updateContact(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **IdentityContact**| Request Body |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **contactId** | [**string**] | Contact ID | defaults to undefined


### Return type

**IdentityContact**

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


