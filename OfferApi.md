# .OfferApi

All URIs are relative to *http://https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelOffer**](OfferApi.md#cancelOffer) | **POST** /org/{orgId}/offer/{offerId}/cancel | cancel offer
[**createOffer**](OfferApi.md#createOffer) | **POST** /org/{orgId}/offer | create offer
[**createOrUpdateDraftOffer**](OfferApi.md#createOrUpdateDraftOffer) | **POST** /org/{orgId}/draftOffer | create or update draft offer
[**deleteOffer**](OfferApi.md#deleteOffer) | **DELETE** /org/{orgId}/offer/{offerId} | delete offer
[**extendPrivateOfferExpiryDate**](OfferApi.md#extendPrivateOfferExpiryDate) | **POST** /org/{orgId}/offer/{offerId}/extendExpiryDate | extend offer expiry date
[**getOffer**](OfferApi.md#getOffer) | **GET** /org/{orgId}/offer/{offerId} | get offer
[**getOfferByExternalId**](OfferApi.md#getOfferByExternalId) | **GET** /org/{orgId}/offerExternalId/{offerExternalId} | get offer by external ID
[**getOfferEula**](OfferApi.md#getOfferEula) | **GET** /org/{orgId}/offer/{offerId}/eula | get offer EULA
[**getOfferResellerEula**](OfferApi.md#getOfferResellerEula) | **GET** /org/{orgId}/offer/{offerId}/resellerEula | get offer reseller EULA
[**listOffers**](OfferApi.md#listOffers) | **GET** /org/{orgId}/offer | list offers
[**sendOfferNotifications**](OfferApi.md#sendOfferNotifications) | **POST** /org/{orgId}/offer/{offerId}/notifyContacts | notify offer contacts
[**updateOfferMetaInfo**](OfferApi.md#updateOfferMetaInfo) | **PATCH** /org/{orgId}/offer/{offerId}/metaInfo | update offer meta info


# **cancelOffer**
> WorkloadOffer cancelOffer()

Only the offer with status = \"PENDING_ACCEPTANCE\", \"PENDING_CANCEL\", \"ACTIVE\" or \"USED\" is allowed to cancel.

### Example


```typescript
import { createConfiguration, OfferApi } from '';
import type { OfferApiCancelOfferRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OfferApi(configuration);

const request: OfferApiCancelOfferRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Offer ID
  offerId: "offerId_example",
};

const data = await apiInstance.cancelOffer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **offerId** | [**string**] | Offer ID | defaults to undefined


### Return type

**WorkloadOffer**

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
**405** | Method not allowed |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createOffer**
> WorkloadOffer createOffer(data)

Create a private offer under the given organization.

### Example


```typescript
import { createConfiguration, OfferApi } from '';
import type { OfferApiCreateOfferRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OfferApi(configuration);

const request: OfferApiCreateOfferRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Offer to create
  data: {
    buyerID: "buyerID_example",
    contactIds: [
      "contactIds_example",
    ],
    createdBy: "createdBy_example",
    creationTime: new Date('1970-01-01T00:00:00.00Z'),
    endTime: new Date('1970-01-01T00:00:00.00Z'),
    expireTime: new Date('1970-01-01T00:00:00.00Z'),
    externalID: "externalID_example",
    id: "id_example",
    info: {
      additionalEulaUrls: [
        "additionalEulaUrls_example",
      ],
      additionalResellerEulaUrls: [
        "additionalResellerEulaUrls_example",
      ],
      attachEulaType: ,
      autoRenew: true,
      awsAgreementDuration: "awsAgreementDuration_example",
      awsChannelPartner: ,
      awsCppoEventDetail: ,
      awsCppoOpportunity: ,
      awsMachineLearningContractDuration: 1,
      awsMarkupPercentage: 3.14,
      awsResaleAuthorizationId: "awsResaleAuthorizationId_example",
      azureOriginalPlan: ,
      azurePrivateOffer: ,
      azureProductVariant: ,
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
      billingCycle: ,
      billingIntervalInMonths: 1,
      buyerAwsAccountIds: [
        "buyerAwsAccountIds_example",
      ],
      buyerAzureTenants: [
        {
          description: "description_example",
          id: "id_example",
        },
      ],
      commitAmount: 3.14,
      commitBillingIntervalInMonths: 1,
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
      currency: "currency_example",
      dimensions: [
        {
          category: "category_example",
          description: "description_example",
          includedBaseQuantities: [
            {
              isInfinite: true,
              quantity: 3.14,
              recurringUnit: "Monthly",
            },
          ],
          key: "key_example",
          name: "name_example",
          planId: "planId_example",
          planName: "planName_example",
          priceTiers: [
            {
              fromAmount: 3.14,
              price: {
                currencyCode: "currencyCode_example",
                nanos: 1,
                units: "units_example",
              },
              startingUsageAmount: "startingUsageAmount_example",
            },
          ],
          rate: 3.14,
          skuId: "skuId_example",
          types: [
            "types_example",
          ],
          usageCount: ,
          valueType: ,
        },
      ],
      discountPercentage: 3.14,
      docusignEnvelopeIds: {
        "key": "key_example",
      },
      eulaMergeOrder: [
        1,
      ],
      eulaType: "",
      eulaUrl: "eulaUrl_example",
      gcpCustomerInfo: ,
      gcpDuration: 1,
      gcpMetrics: [
        {
          description: "description_example",
          displayName: "displayName_example",
          displayUnit: "displayUnit_example",
          displayUnitDescription: "displayUnitDescription_example",
          id: "id_example",
          metricKind: "metricKind_example",
          name: "name_example",
          priceTiers: [
            {
              fromAmount: 3.14,
              price: {
                currencyCode: "currencyCode_example",
                nanos: 1,
                units: "units_example",
              },
              startingUsageAmount: "startingUsageAmount_example",
            },
          ],
          reportingUnit: "reportingUnit_example",
          skuId: "skuId_example",
          unit: "unit_example",
          valueType: ,
        },
      ],
      gcpOfferDealType: ,
      gcpPaymentSchedule: ,
      gcpPlans: [
        {
          featureValues: [
            {
              featureDescription: "featureDescription_example",
              featureName: "featureName_example",
              featureTitle: "featureTitle_example",
              featureValue: "featureValue_example",
            },
          ],
          name: "name_example",
          priceInfo: {
            description: "description_example",
            priceModel: "FREE",
            subscriptionPlans: [
              {
                period: "period_example",
                price: {
                  currencyCode: "currencyCode_example",
                  nanos: 1,
                  units: "units_example",
                },
              },
            ],
            usageFees: [
              {
                displayQuantity: 1,
                metricId: "metricId_example",
                priceTiers: [
                  {
                    fromAmount: 3.14,
                    price: {
                      currencyCode: "currencyCode_example",
                      nanos: 1,
                      units: "units_example",
                    },
                    startingUsageAmount: "startingUsageAmount_example",
                  },
                ],
              },
            ],
          },
          purchaseMode: "PURCHASE_MODE_PRIVATE",
          title: "title_example",
        },
      ],
      gcpPrivateOffer: ,
      gcpProviderInfo: ,
      gcpProviderInternalNote: "gcpProviderInternalNote_example",
      gcpProviderPublicNote: "gcpProviderPublicNote_example",
      gcpResellerPrivateOfferPlan: {
        acceptanceDeadlineTime: new Date('1970-01-01T00:00:00.00Z'),
        agreement: "agreement_example",
        agreementDocuments: {
          isvToCustomerAgreementDocument: {
            description: "description_example",
            documentBody: "documentBody_example",
            documentType: "documentType_example",
            externalGoogleLink: ,
            name: "name_example",
            unstructuredDocument: {
              content: "content_example",
            },
            updateTime: new Date('1970-01-01T00:00:00.00Z'),
          },
          isvToResellerAgreementDocument: {
            description: "description_example",
            documentBody: "documentBody_example",
            documentType: "documentType_example",
            externalGoogleLink: ,
            name: "name_example",
            unstructuredDocument: {
              content: "content_example",
            },
            updateTime: new Date('1970-01-01T00:00:00.00Z'),
          },
        },
        amendmentContext: {},
        displayName: "displayName_example",
        durationConfig: {
          endTime: new Date('1970-01-01T00:00:00.00Z'),
          startTime: new Date('1970-01-01T00:00:00.00Z'),
        },
        features: [
          {
            featureDescription: "featureDescription_example",
            featureName: "featureName_example",
            featureTitle: "featureTitle_example",
            featureValue: "featureValue_example",
          },
        ],
        installmentTimelineTemplate: {
          installmentTemplates: [
            {
              priceModelTemplate: {
                baseOffer: "baseOffer_example",
                commitment: {
                  commitmentAmountPerPeriodTemplate: {
                    currencyCode: "currencyCode_example",
                    decimalAmountConstraint: {
                      defaultAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                      maxAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                      minAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                    },
                  },
                  discountTemplate: {
                    discountEconomics: "discountEconomics_example",
                    discountPercentage: {
                      defaultAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                      maxAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                      minAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                    },
                    discountedPrice: {
                      currencyCode: "currencyCode_example",
                      nanos: 1,
                      units: "units_example",
                    },
                    hideDiscountPercentage: true,
                  },
                  period: {
                    count: 1,
                    unit: "MONTHLY_PERIOD",
                  },
                },
                consumption: "overage",
                fixedPrice: {
                  discountTemplate: {
                    discountEconomics: "discountEconomics_example",
                    discountPercentage: {
                      defaultAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                      maxAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                      minAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                    },
                    discountedPrice: {
                      currencyCode: "currencyCode_example",
                      nanos: 1,
                      units: "units_example",
                    },
                    hideDiscountPercentage: true,
                  },
                  period: {
                    count: 1,
                    unit: "MONTHLY_PERIOD",
                  },
                },
                overage: {
                  discountTemplate: {
                    discountEconomics: "discountEconomics_example",
                    discountPercentage: {
                      defaultAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                      maxAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                      minAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                    },
                    discountedPrice: {
                      currencyCode: "currencyCode_example",
                      nanos: 1,
                      units: "units_example",
                    },
                    hideDiscountPercentage: true,
                  },
                  skuDiscountTemplates: [
                    {},
                  ],
                  skuRepresentation: {
                    skuGroupList: {},
                    skuList: {
                      skus: [
                        "skus_example",
                      ],
                    },
                    skus: "skus_example",
                  },
                },
                payg: {
                  discountTemplate: {
                    discountEconomics: "discountEconomics_example",
                    discountPercentage: {
                      defaultAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                      maxAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                      minAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                    },
                    discountedPrice: {
                      currencyCode: "currencyCode_example",
                      nanos: 1,
                      units: "units_example",
                    },
                    hideDiscountPercentage: true,
                  },
                  period: {
                    count: 1,
                    unit: "MONTHLY_PERIOD",
                  },
                  skuDiscountTemplates: [
                    {},
                  ],
                  skuRepresentation: {
                    skuGroupList: {},
                    skuList: {
                      skus: [
                        "skus_example",
                      ],
                    },
                    skus: "skus_example",
                  },
                },
                subscription: "fixedPrice",
              },
              startTime: new Date('1970-01-01T00:00:00.00Z'),
            },
          ],
        },
        isvInfo: {
          contactEmail: "contactEmail_example",
          contactName: "contactName_example",
          partnerAdvantageAccountLegalName: "partnerAdvantageAccountLegalName_example",
          partnerAdvantageId: "partnerAdvantageId_example",
        },
        margin: {
          marginPercentage: {
            value: "value_example",
          },
        },
        metaInfo: {
          gcpOrganizationId: "gcpOrganizationId_example",
          gcpProjectNumber: "gcpProjectNumber_example",
        },
        name: "name_example",
        offerTemplatePolicies: {
          allowAutoRenewal: true,
          allowScheduledStartDate: true,
          maxRenewalTimes: "maxRenewalTimes_example",
          offerDealType: "OFFER_DEAL_TYPE_UNSPECIFIED",
          proration: "PRORATION_UNSPECIFIED",
        },
        offerTermTemplate: {
          enableScheduledStartTimes: true,
          endTime: new Date('1970-01-01T00:00:00.00Z'),
          paymentRecurrence: "paymentRecurrence_example",
          startPolicy: "",
          startTime: new Date('1970-01-01T00:00:00.00Z'),
          termDuration: {
            count: 1,
            unit: "MONTHLY_PERIOD",
          },
          termDurationConstraint: {
            defaultDuration: {
              count: 1,
              unit: "MONTHLY_PERIOD",
            },
          },
        },
        paymentSchedule: "",
        priceModelTemplate: ,
        productInfo: {
          flavorExternalName: "flavorExternalName_example",
          productExternalName: "productExternalName_example",
          providerId: "providerId_example",
          serviceLevel: "serviceLevel_example",
          serviceName: "serviceName_example",
        },
        replacementMetadata: {},
        resellOfferTemplate: "resellOfferTemplate_example",
        resellerInfo: {
          billingAccountId: "billingAccountId_example",
          billingAccountNickname: "billingAccountNickname_example",
          billingAccountOrgDisplayName: "billingAccountOrgDisplayName_example",
          billingAccountType: "billingAccountType_example",
          notesToReseller: "notesToReseller_example",
          partnerAccountName: "partnerAccountName_example",
          resellOfferTemplateId: "resellOfferTemplateId_example",
          resellerContactEmail: "resellerContactEmail_example",
          resellerContactName: "resellerContactName_example",
          resellerPrivateOfferPlanId: "resellerPrivateOfferPlanId_example",
          resellerPrivateOfferPlanScope: "resellerPrivateOfferPlanScope_example",
          subBillingAccount: "subBillingAccount_example",
        },
        reusePolicy: "",
        startPolicy: "",
        state: {
          cancellationReason: {},
          comment: "comment_example",
          rejectionReason: {},
          stateType: "",
        },
        stateTransitions: [
          {
            newState: {
              stateType: "",
            },
            transitionTime: new Date('1970-01-01T00:00:00.00Z'),
          },
        ],
        updateTime: new Date('1970-01-01T00:00:00.00Z'),
      },
      gcpSowAgreementDocument: ,
      gcpUsagePlanPriceModel: ,
      gracePeriodInDays: 1,
      isMeteringOverageCommit: true,
      netTermsInDays: 1,
      paymentInstallments: [
        {
          amount: 3.14,
          chargeOn: new Date('1970-01-01T00:00:00.00Z'),
          chargeOnStr: "chargeOnStr_example",
          credit: 3.14,
          discountPercentage: 3.14,
          originalAmount: 3.14,
        },
      ],
      paymentSchedule: ,
      pdfURL: "pdfURL_example",
      privateOfferUrl: "privateOfferUrl_example",
      proratedBilling: true,
      refundCancellationPolicy: "refundCancellationPolicy_example",
      resellerAttachEulaType: ,
      resellerEulaType: ,
      resellerEulaUrl: "resellerEulaUrl_example",
      sellerNotes: "sellerNotes_example",
      snowflakeOffer: ,
      startTime: new Date('1970-01-01T00:00:00.00Z'),
      taxIds: [
        "taxIds_example",
      ],
      trialConfig: ,
      usageBillingIntervalInMonths: 1,
      visibility: "PRIVATE",
    },
    lastUpdateTime: new Date('1970-01-01T00:00:00.00Z'),
    lastUpdatedBy: "lastUpdatedBy_example",
    metaInfo: {
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
    name: "name_example",
    offerType: "UNKNOWN",
    organizationID: "organizationID_example",
    partner: "",
    partnerID: "partnerID_example",
    productID: "productID_example",
    service: "DEFAULT",
    status: "",
  },
};

const data = await apiInstance.createOffer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **WorkloadOffer**| Offer to create |
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**WorkloadOffer**

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
**405** | Method not allowed |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createOrUpdateDraftOffer**
> WorkloadOffer createOrUpdateDraftOffer(data)

Create a new draft offer or update the existing draft offer. When updating draft offer, the offer.ID is required.

### Example


```typescript
import { createConfiguration, OfferApi } from '';
import type { OfferApiCreateOrUpdateDraftOfferRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OfferApi(configuration);

const request: OfferApiCreateOrUpdateDraftOfferRequest = {
    // Organization ID
  orgId: "orgId_example",
    // the draft offer to create
  data: {
    buyerID: "buyerID_example",
    contactIds: [
      "contactIds_example",
    ],
    createdBy: "createdBy_example",
    creationTime: new Date('1970-01-01T00:00:00.00Z'),
    endTime: new Date('1970-01-01T00:00:00.00Z'),
    expireTime: new Date('1970-01-01T00:00:00.00Z'),
    externalID: "externalID_example",
    id: "id_example",
    info: {
      additionalEulaUrls: [
        "additionalEulaUrls_example",
      ],
      additionalResellerEulaUrls: [
        "additionalResellerEulaUrls_example",
      ],
      attachEulaType: ,
      autoRenew: true,
      awsAgreementDuration: "awsAgreementDuration_example",
      awsChannelPartner: ,
      awsCppoEventDetail: ,
      awsCppoOpportunity: ,
      awsMachineLearningContractDuration: 1,
      awsMarkupPercentage: 3.14,
      awsResaleAuthorizationId: "awsResaleAuthorizationId_example",
      azureOriginalPlan: ,
      azurePrivateOffer: ,
      azureProductVariant: ,
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
      billingCycle: ,
      billingIntervalInMonths: 1,
      buyerAwsAccountIds: [
        "buyerAwsAccountIds_example",
      ],
      buyerAzureTenants: [
        {
          description: "description_example",
          id: "id_example",
        },
      ],
      commitAmount: 3.14,
      commitBillingIntervalInMonths: 1,
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
      currency: "currency_example",
      dimensions: [
        {
          category: "category_example",
          description: "description_example",
          includedBaseQuantities: [
            {
              isInfinite: true,
              quantity: 3.14,
              recurringUnit: "Monthly",
            },
          ],
          key: "key_example",
          name: "name_example",
          planId: "planId_example",
          planName: "planName_example",
          priceTiers: [
            {
              fromAmount: 3.14,
              price: {
                currencyCode: "currencyCode_example",
                nanos: 1,
                units: "units_example",
              },
              startingUsageAmount: "startingUsageAmount_example",
            },
          ],
          rate: 3.14,
          skuId: "skuId_example",
          types: [
            "types_example",
          ],
          usageCount: ,
          valueType: ,
        },
      ],
      discountPercentage: 3.14,
      docusignEnvelopeIds: {
        "key": "key_example",
      },
      eulaMergeOrder: [
        1,
      ],
      eulaType: "",
      eulaUrl: "eulaUrl_example",
      gcpCustomerInfo: ,
      gcpDuration: 1,
      gcpMetrics: [
        {
          description: "description_example",
          displayName: "displayName_example",
          displayUnit: "displayUnit_example",
          displayUnitDescription: "displayUnitDescription_example",
          id: "id_example",
          metricKind: "metricKind_example",
          name: "name_example",
          priceTiers: [
            {
              fromAmount: 3.14,
              price: {
                currencyCode: "currencyCode_example",
                nanos: 1,
                units: "units_example",
              },
              startingUsageAmount: "startingUsageAmount_example",
            },
          ],
          reportingUnit: "reportingUnit_example",
          skuId: "skuId_example",
          unit: "unit_example",
          valueType: ,
        },
      ],
      gcpOfferDealType: ,
      gcpPaymentSchedule: ,
      gcpPlans: [
        {
          featureValues: [
            {
              featureDescription: "featureDescription_example",
              featureName: "featureName_example",
              featureTitle: "featureTitle_example",
              featureValue: "featureValue_example",
            },
          ],
          name: "name_example",
          priceInfo: {
            description: "description_example",
            priceModel: "FREE",
            subscriptionPlans: [
              {
                period: "period_example",
                price: {
                  currencyCode: "currencyCode_example",
                  nanos: 1,
                  units: "units_example",
                },
              },
            ],
            usageFees: [
              {
                displayQuantity: 1,
                metricId: "metricId_example",
                priceTiers: [
                  {
                    fromAmount: 3.14,
                    price: {
                      currencyCode: "currencyCode_example",
                      nanos: 1,
                      units: "units_example",
                    },
                    startingUsageAmount: "startingUsageAmount_example",
                  },
                ],
              },
            ],
          },
          purchaseMode: "PURCHASE_MODE_PRIVATE",
          title: "title_example",
        },
      ],
      gcpPrivateOffer: ,
      gcpProviderInfo: ,
      gcpProviderInternalNote: "gcpProviderInternalNote_example",
      gcpProviderPublicNote: "gcpProviderPublicNote_example",
      gcpResellerPrivateOfferPlan: {
        acceptanceDeadlineTime: new Date('1970-01-01T00:00:00.00Z'),
        agreement: "agreement_example",
        agreementDocuments: {
          isvToCustomerAgreementDocument: {
            description: "description_example",
            documentBody: "documentBody_example",
            documentType: "documentType_example",
            externalGoogleLink: ,
            name: "name_example",
            unstructuredDocument: {
              content: "content_example",
            },
            updateTime: new Date('1970-01-01T00:00:00.00Z'),
          },
          isvToResellerAgreementDocument: {
            description: "description_example",
            documentBody: "documentBody_example",
            documentType: "documentType_example",
            externalGoogleLink: ,
            name: "name_example",
            unstructuredDocument: {
              content: "content_example",
            },
            updateTime: new Date('1970-01-01T00:00:00.00Z'),
          },
        },
        amendmentContext: {},
        displayName: "displayName_example",
        durationConfig: {
          endTime: new Date('1970-01-01T00:00:00.00Z'),
          startTime: new Date('1970-01-01T00:00:00.00Z'),
        },
        features: [
          {
            featureDescription: "featureDescription_example",
            featureName: "featureName_example",
            featureTitle: "featureTitle_example",
            featureValue: "featureValue_example",
          },
        ],
        installmentTimelineTemplate: {
          installmentTemplates: [
            {
              priceModelTemplate: {
                baseOffer: "baseOffer_example",
                commitment: {
                  commitmentAmountPerPeriodTemplate: {
                    currencyCode: "currencyCode_example",
                    decimalAmountConstraint: {
                      defaultAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                      maxAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                      minAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                    },
                  },
                  discountTemplate: {
                    discountEconomics: "discountEconomics_example",
                    discountPercentage: {
                      defaultAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                      maxAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                      minAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                    },
                    discountedPrice: {
                      currencyCode: "currencyCode_example",
                      nanos: 1,
                      units: "units_example",
                    },
                    hideDiscountPercentage: true,
                  },
                  period: {
                    count: 1,
                    unit: "MONTHLY_PERIOD",
                  },
                },
                consumption: "overage",
                fixedPrice: {
                  discountTemplate: {
                    discountEconomics: "discountEconomics_example",
                    discountPercentage: {
                      defaultAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                      maxAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                      minAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                    },
                    discountedPrice: {
                      currencyCode: "currencyCode_example",
                      nanos: 1,
                      units: "units_example",
                    },
                    hideDiscountPercentage: true,
                  },
                  period: {
                    count: 1,
                    unit: "MONTHLY_PERIOD",
                  },
                },
                overage: {
                  discountTemplate: {
                    discountEconomics: "discountEconomics_example",
                    discountPercentage: {
                      defaultAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                      maxAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                      minAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                    },
                    discountedPrice: {
                      currencyCode: "currencyCode_example",
                      nanos: 1,
                      units: "units_example",
                    },
                    hideDiscountPercentage: true,
                  },
                  skuDiscountTemplates: [
                    {},
                  ],
                  skuRepresentation: {
                    skuGroupList: {},
                    skuList: {
                      skus: [
                        "skus_example",
                      ],
                    },
                    skus: "skus_example",
                  },
                },
                payg: {
                  discountTemplate: {
                    discountEconomics: "discountEconomics_example",
                    discountPercentage: {
                      defaultAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                      maxAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                      minAmount: {
                        nanos: 1,
                        units: "units_example",
                      },
                    },
                    discountedPrice: {
                      currencyCode: "currencyCode_example",
                      nanos: 1,
                      units: "units_example",
                    },
                    hideDiscountPercentage: true,
                  },
                  period: {
                    count: 1,
                    unit: "MONTHLY_PERIOD",
                  },
                  skuDiscountTemplates: [
                    {},
                  ],
                  skuRepresentation: {
                    skuGroupList: {},
                    skuList: {
                      skus: [
                        "skus_example",
                      ],
                    },
                    skus: "skus_example",
                  },
                },
                subscription: "fixedPrice",
              },
              startTime: new Date('1970-01-01T00:00:00.00Z'),
            },
          ],
        },
        isvInfo: {
          contactEmail: "contactEmail_example",
          contactName: "contactName_example",
          partnerAdvantageAccountLegalName: "partnerAdvantageAccountLegalName_example",
          partnerAdvantageId: "partnerAdvantageId_example",
        },
        margin: {
          marginPercentage: {
            value: "value_example",
          },
        },
        metaInfo: {
          gcpOrganizationId: "gcpOrganizationId_example",
          gcpProjectNumber: "gcpProjectNumber_example",
        },
        name: "name_example",
        offerTemplatePolicies: {
          allowAutoRenewal: true,
          allowScheduledStartDate: true,
          maxRenewalTimes: "maxRenewalTimes_example",
          offerDealType: "OFFER_DEAL_TYPE_UNSPECIFIED",
          proration: "PRORATION_UNSPECIFIED",
        },
        offerTermTemplate: {
          enableScheduledStartTimes: true,
          endTime: new Date('1970-01-01T00:00:00.00Z'),
          paymentRecurrence: "paymentRecurrence_example",
          startPolicy: "",
          startTime: new Date('1970-01-01T00:00:00.00Z'),
          termDuration: {
            count: 1,
            unit: "MONTHLY_PERIOD",
          },
          termDurationConstraint: {
            defaultDuration: {
              count: 1,
              unit: "MONTHLY_PERIOD",
            },
          },
        },
        paymentSchedule: "",
        priceModelTemplate: ,
        productInfo: {
          flavorExternalName: "flavorExternalName_example",
          productExternalName: "productExternalName_example",
          providerId: "providerId_example",
          serviceLevel: "serviceLevel_example",
          serviceName: "serviceName_example",
        },
        replacementMetadata: {},
        resellOfferTemplate: "resellOfferTemplate_example",
        resellerInfo: {
          billingAccountId: "billingAccountId_example",
          billingAccountNickname: "billingAccountNickname_example",
          billingAccountOrgDisplayName: "billingAccountOrgDisplayName_example",
          billingAccountType: "billingAccountType_example",
          notesToReseller: "notesToReseller_example",
          partnerAccountName: "partnerAccountName_example",
          resellOfferTemplateId: "resellOfferTemplateId_example",
          resellerContactEmail: "resellerContactEmail_example",
          resellerContactName: "resellerContactName_example",
          resellerPrivateOfferPlanId: "resellerPrivateOfferPlanId_example",
          resellerPrivateOfferPlanScope: "resellerPrivateOfferPlanScope_example",
          subBillingAccount: "subBillingAccount_example",
        },
        reusePolicy: "",
        startPolicy: "",
        state: {
          cancellationReason: {},
          comment: "comment_example",
          rejectionReason: {},
          stateType: "",
        },
        stateTransitions: [
          {
            newState: {
              stateType: "",
            },
            transitionTime: new Date('1970-01-01T00:00:00.00Z'),
          },
        ],
        updateTime: new Date('1970-01-01T00:00:00.00Z'),
      },
      gcpSowAgreementDocument: ,
      gcpUsagePlanPriceModel: ,
      gracePeriodInDays: 1,
      isMeteringOverageCommit: true,
      netTermsInDays: 1,
      paymentInstallments: [
        {
          amount: 3.14,
          chargeOn: new Date('1970-01-01T00:00:00.00Z'),
          chargeOnStr: "chargeOnStr_example",
          credit: 3.14,
          discountPercentage: 3.14,
          originalAmount: 3.14,
        },
      ],
      paymentSchedule: ,
      pdfURL: "pdfURL_example",
      privateOfferUrl: "privateOfferUrl_example",
      proratedBilling: true,
      refundCancellationPolicy: "refundCancellationPolicy_example",
      resellerAttachEulaType: ,
      resellerEulaType: ,
      resellerEulaUrl: "resellerEulaUrl_example",
      sellerNotes: "sellerNotes_example",
      snowflakeOffer: ,
      startTime: new Date('1970-01-01T00:00:00.00Z'),
      taxIds: [
        "taxIds_example",
      ],
      trialConfig: ,
      usageBillingIntervalInMonths: 1,
      visibility: "PRIVATE",
    },
    lastUpdateTime: new Date('1970-01-01T00:00:00.00Z'),
    lastUpdatedBy: "lastUpdatedBy_example",
    metaInfo: {
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
    name: "name_example",
    offerType: "UNKNOWN",
    organizationID: "organizationID_example",
    partner: "",
    partnerID: "partnerID_example",
    productID: "productID_example",
    service: "DEFAULT",
    status: "",
  },
};

const data = await apiInstance.createOrUpdateDraftOffer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **WorkloadOffer**| the draft offer to create |
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**WorkloadOffer**

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
**405** | Method not allowed |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOffer**
> string deleteOffer()

The offer is soft deleted (marked as DELETED status) in Suger service. Only the offer with status = \"DRAFT\", \"CREATE_FAILED\", \"EXPIRED\" or \"CANCELLED\" is allowed to be deleted.

### Example


```typescript
import { createConfiguration, OfferApi } from '';
import type { OfferApiDeleteOfferRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OfferApi(configuration);

const request: OfferApiDeleteOfferRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Offer ID
  offerId: "offerId_example",
};

const data = await apiInstance.deleteOffer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
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
**200** | Empty string if deletion is successful |  -  |
**400** | Bad request error |  -  |
**404** | Not found error |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **extendPrivateOfferExpiryDate**
> WorkloadOffer extendPrivateOfferExpiryDate()

Only the offer with status = \"PENDING_ACCEPTANCE\", \"EXPIRED\" or \"ACCEPTED\" is allowed to extend expiry date.

### Example


```typescript
import { createConfiguration, OfferApi } from '';
import type { OfferApiExtendPrivateOfferExpiryDateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OfferApi(configuration);

const request: OfferApiExtendPrivateOfferExpiryDateRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Offer ID
  offerId: "offerId_example",
    // new expiry date in YYYY-MM-DD format
  newExpiryDate: "newExpiryDate_example",
};

const data = await apiInstance.extendPrivateOfferExpiryDate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **offerId** | [**string**] | Offer ID | defaults to undefined
 **newExpiryDate** | [**string**] | new expiry date in YYYY-MM-DD format | defaults to undefined


### Return type

**WorkloadOffer**

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
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOffer**
> WorkloadOffer getOffer()

Get the offer by the given offer ID.

### Example


```typescript
import { createConfiguration, OfferApi } from '';
import type { OfferApiGetOfferRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OfferApi(configuration);

const request: OfferApiGetOfferRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Offer ID
  offerId: "offerId_example",
};

const data = await apiInstance.getOffer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **offerId** | [**string**] | Offer ID | defaults to undefined


### Return type

**WorkloadOffer**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the Offer Object |  -  |
**400** | Bad request error |  -  |
**404** | Not found |  -  |
**405** | Method not allowed |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOfferByExternalId**
> WorkloadOffer getOfferByExternalId()

Get the offer by the given offer external ID.

### Example


```typescript
import { createConfiguration, OfferApi } from '';
import type { OfferApiGetOfferByExternalIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OfferApi(configuration);

const request: OfferApiGetOfferByExternalIdRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Offer External ID
  offerExternalId: "offerExternalId_example",
};

const data = await apiInstance.getOfferByExternalId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **offerExternalId** | [**string**] | Offer External ID | defaults to undefined


### Return type

**WorkloadOffer**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the Offer Object |  -  |
**400** | Bad request error |  -  |
**404** | Not found |  -  |
**405** | Method not allowed |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOfferEula**
> string getOfferEula()

Get the EULA file of the given offer ID.

### Example


```typescript
import { createConfiguration, OfferApi } from '';
import type { OfferApiGetOfferEulaRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OfferApi(configuration);

const request: OfferApiGetOfferEulaRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Offer ID
  offerId: "offerId_example",
    // response format in JSON or string (optional)
  format: "format_example",
};

const data = await apiInstance.getOfferEula(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **offerId** | [**string**] | Offer ID | defaults to undefined
 **format** | [**string**] | response format in JSON or string | (optional) defaults to undefined


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
**200** | AWS S3 signed URL with 30 minutes expiry time |  -  |
**400** | Bad request error |  -  |
**405** | Method not allowed |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOfferResellerEula**
> string getOfferResellerEula()

Get the Reseller EULA file of the given offer ID.

### Example


```typescript
import { createConfiguration, OfferApi } from '';
import type { OfferApiGetOfferResellerEulaRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OfferApi(configuration);

const request: OfferApiGetOfferResellerEulaRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Offer ID
  offerId: "offerId_example",
};

const data = await apiInstance.getOfferResellerEula(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
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
**200** | AWS S3 signed URL with 30 minutes expiry time |  -  |
**400** | Bad request error |  -  |
**405** | Method not allowed |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOffers**
> Array<WorkloadOffer> listOffers()

List offers under the given organization with pagination and optional filter.

### Example


```typescript
import { createConfiguration, OfferApi } from '';
import type { OfferApiListOffersRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OfferApi(configuration);

const request: OfferApiListOffersRequest = {
    // Organization ID
  orgId: "orgId_example",
    // filter by offer status (optional)
  status: "status_example",
    // filter by partner (optional)
  partner: "partner_example",
    // filter by offerType (optional)
  offerType: "offerType_example",
    // filter by productId (optional)
  productId: "productId_example",
    // filter by buyerId (optional)
  buyerId: "buyerId_example",
    // filter by hubspotDealId (optional)
  hubspotDealId: "hubspotDealId_example",
    // filter by contactId (optional)
  contactId: "contactId_example",
    // List pagination size, default 1000, max value is 1000 (optional)
  limit: 1,
    // List pagination offset, default 0 (optional)
  offset: 1,
};

const data = await apiInstance.listOffers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **status** | [**string**] | filter by offer status | (optional) defaults to undefined
 **partner** | [**string**] | filter by partner | (optional) defaults to undefined
 **offerType** | [**string**] | filter by offerType | (optional) defaults to undefined
 **productId** | [**string**] | filter by productId | (optional) defaults to undefined
 **buyerId** | [**string**] | filter by buyerId | (optional) defaults to undefined
 **hubspotDealId** | [**string**] | filter by hubspotDealId | (optional) defaults to undefined
 **contactId** | [**string**] | filter by contactId | (optional) defaults to undefined
 **limit** | [**number**] | List pagination size, default 1000, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**Array<WorkloadOffer>**

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
**405** | Method not allowed |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendOfferNotifications**
> string sendOfferNotifications()

Send offer notifications to the given contact ids. If contactIDs is empty, send notifications to all contacts of the offer.

### Example


```typescript
import { createConfiguration, OfferApi } from '';
import type { OfferApiSendOfferNotificationsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OfferApi(configuration);

const request: OfferApiSendOfferNotificationsRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Offer ID
  offerId: "offerId_example",
    // List of Contact IDs, if emoty or nil, send notifications to all contacts of the offer (optional)
  contactIDs: [
    "contactIDs_example",
  ],
};

const data = await apiInstance.sendOfferNotifications(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactIDs** | **Array<string>**| List of Contact IDs, if emoty or nil, send notifications to all contacts of the offer |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **offerId** | [**string**] | Offer ID | defaults to undefined


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
**200** | empty string if success |  -  |
**400** | Bad request error |  -  |
**405** | Method not allowed |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateOfferMetaInfo**
> WorkloadMetaInfo updateOfferMetaInfo(data)

Update the meta info of the given offer.

### Example


```typescript
import { createConfiguration, OfferApi } from '';
import type { OfferApiUpdateOfferMetaInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OfferApi(configuration);

const request: OfferApiUpdateOfferMetaInfoRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Offer ID
  offerId: "offerId_example",
    // Offer meta info to update
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

const data = await apiInstance.updateOfferMetaInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **WorkloadMetaInfo**| Offer meta info to update |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **offerId** | [**string**] | Offer ID | defaults to undefined


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
**405** | Method not allowed |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


