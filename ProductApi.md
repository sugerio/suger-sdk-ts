# .ProductApi

All URIs are relative to *http://https://api.suger.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrUpdateDraftProduct**](ProductApi.md#createOrUpdateDraftProduct) | **POST** /org/{orgId}/draftProduct | create or update draft product
[**createProduct**](ProductApi.md#createProduct) | **POST** /org/{orgId}/product | create product
[**deleteProduct**](ProductApi.md#deleteProduct) | **DELETE** /org/{orgId}/product/{productId} | delete product
[**getProduct**](ProductApi.md#getProduct) | **GET** /org/{orgId}/product/{productId} | get product
[**listProductMeteringDimensions**](ProductApi.md#listProductMeteringDimensions) | **GET** /org/{orgId}/product/{productId}/dimension | list metering dimensions of product
[**listProducts**](ProductApi.md#listProducts) | **GET** /org/{orgId}/product | list products
[**listProductsByPartner**](ProductApi.md#listProductsByPartner) | **GET** /org/{orgId}/partner/{partner}/product | list products by partner
[**publishProduct**](ProductApi.md#publishProduct) | **PATCH** /org/{orgId}/product/{productId}/publish | publish product
[**updateProduct**](ProductApi.md#updateProduct) | **PATCH** /org/{orgId}/product/{productId} | update product
[**updateProductFulfillmentUrl**](ProductApi.md#updateProductFulfillmentUrl) | **PATCH** /org/{orgId}/product/{productId}/fulfillmentUrl | update product fulfillment url
[**updateProductMetaInfo**](ProductApi.md#updateProductMetaInfo) | **PATCH** /org/{orgId}/product/{productId}/metaInfo | update product meta info


# **createOrUpdateDraftProduct**
> WorkloadProduct createOrUpdateDraftProduct(data)

Create a new draft product or update the existing draft product. When updating draft product, the product.ID is required.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiCreateOrUpdateDraftProductRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiCreateOrUpdateDraftProductRequest = {
    // Organization ID
  orgId: "orgId_example",
    // the draft product to create
  data: {
    createdBy: "createdBy_example",
    creationTime: new Date('1970-01-01T00:00:00.00Z'),
    externalID: "externalID_example",
    fulfillmentUrl: "fulfillmentUrl_example",
    id: "id_example",
    info: {
      alibabaProduct: {
        auditFailMsg: "auditFailMsg_example",
        auditStatus: "auditStatus_example",
        auditTime: 1,
        code: "code_example",
        description: "description_example",
        frontCategoryId: 1,
        gmtCreated: 1,
        gmtModified: 1,
        name: "name_example",
        picUrl: "picUrl_example",
        productExtras: {
          productExtra: [
            {
              key: "key_example",
              label: "label_example",
              order: 1,
              type: "type_example",
              values: {},
            },
          ],
        },
        productSkus: {
          productSku: [
            {
              chargeType: "chargeType_example",
              code: "code_example",
              constraints: "constraints_example",
              hidden: true,
              modules: {
                module: [
                  {
                    code: "code_example",
                    id: "id_example",
                    name: "name_example",
                    properties: {
                      property: [
                        {
                          displayUnit: "displayUnit_example",
                          key: "key_example",
                          name: "name_example",
                          propertyValues: {
                            propertyValue: [
                              {
                                displayName: "displayName_example",
                                max: "max_example",
                                min: "min_example",
                                remark: "remark_example",
                                step: "step_example",
                                type: "type_example",
                                value: "value_example",
                              },
                            ],
                          },
                          showType: "showType_example",
                        },
                      ],
                    },
                  },
                ],
              },
              name: "name_example",
              orderPeriods: {
                orderPeriod: [
                  {
                    name: "name_example",
                    periodType: "periodType_example",
                  },
                ],
              },
            },
          ],
        },
        requestId: "requestId_example",
        score: 3.14,
        shopInfo: {
          emails: "emails_example",
          id: 1,
          name: "name_example",
          telephones: {
            telephone: [
              "telephone_example",
            ],
          },
          wangWangs: {
            wangWang: [
              {
                remark: "remark_example",
                userName: "userName_example",
              },
            ],
          },
        },
        shortDescription: "shortDescription_example",
        status: "status_example",
        supplierPk: 1,
        type: "type_example",
        useCount: 1,
      },
      attributes: {
        "key": "key_example",
      },
      awsAmiProduct: {
        description: {
          associatedProducts: {},
          categories: [
            "categories_example",
          ],
          euW8Submitted: true,
          highlights: [
            "highlights_example",
          ],
          longDescription: "longDescription_example",
          manufacturer: "manufacturer_example",
          productCode: "productCode_example",
          productTitle: "productTitle_example",
          registered: true,
          searchKeywords: [
            "searchKeywords_example",
          ],
          shortDescription: "shortDescription_example",
          sku: "sku_example",
          usW9Submitted: true,
          visibility: "Limited",
        },
        dimensions: [
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
        promotionalResources: {
          additionalResources: [
            {
              text: "text_example",
              type: "type_example",
              url: "url_example",
            },
          ],
          logoUrl: "logoUrl_example",
          videoUrls: [
            "videoUrls_example",
          ],
        },
        repositories: [
          {
            type: "type_example",
            url: "url_example",
          },
        ],
        signatureVerificationKeys: [
          {
            publicKey: "publicKey_example",
            publicKeyVersion: 1,
            status: "status_example",
          },
        ],
        supportInformation: {
          description: "description_example",
        },
        versions: [
          {
            creationDate: new Date('1970-01-01T00:00:00.00Z'),
            deliveryOptions: [
              {
                amiAlias: "amiAlias_example",
                fulfillmentUrl: "fulfillmentUrl_example",
                id: "id_example",
                recommendations: {},
                shortDescription: "shortDescription_example",
                sourceId: "sourceId_example",
                title: "title_example",
                type: "type_example",
                visibility: "visibility_example",
              },
            ],
            id: "id_example",
            releaseNotes: "releaseNotes_example",
            versionTitle: "versionTitle_example",
          },
        ],
        dataFeedProductId: "dataFeedProductId_example",
        productId: "productId_example",
      },
      awsContainerProduct: {
        description: {
          associatedProducts: {},
          categories: [
            "categories_example",
          ],
          euW8Submitted: true,
          highlights: [
            "highlights_example",
          ],
          longDescription: "longDescription_example",
          manufacturer: "manufacturer_example",
          productCode: "productCode_example",
          productTitle: "productTitle_example",
          registered: true,
          searchKeywords: [
            "searchKeywords_example",
          ],
          shortDescription: "shortDescription_example",
          sku: "sku_example",
          usW9Submitted: true,
          visibility: "Limited",
        },
        dimensions: [
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
        promotionalResources: {
          additionalResources: [
            {
              text: "text_example",
              type: "type_example",
              url: "url_example",
            },
          ],
          logoUrl: "logoUrl_example",
          videoUrls: [
            "videoUrls_example",
          ],
        },
        repositories: [
          {
            type: "type_example",
            url: "url_example",
          },
        ],
        signatureVerificationKeys: [
          {
            publicKey: "publicKey_example",
            publicKeyVersion: 1,
            status: "status_example",
          },
        ],
        supportInformation: {
          description: "description_example",
        },
        versions: [
          {
            creationDate: new Date('1970-01-01T00:00:00.00Z'),
            deliveryOptions: [
              {
                amiAlias: "amiAlias_example",
                fulfillmentUrl: "fulfillmentUrl_example",
                id: "id_example",
                recommendations: {},
                shortDescription: "shortDescription_example",
                sourceId: "sourceId_example",
                title: "title_example",
                type: "type_example",
                visibility: "visibility_example",
              },
            ],
            id: "id_example",
            releaseNotes: "releaseNotes_example",
            versionTitle: "versionTitle_example",
          },
        ],
        dataFeedProductId: "dataFeedProductId_example",
        productId: "productId_example",
      },
      awsProfessionalServicesProduct: {
        description: {
          associatedProducts: {},
          categories: [
            "categories_example",
          ],
          euW8Submitted: true,
          highlights: [
            "highlights_example",
          ],
          longDescription: "longDescription_example",
          manufacturer: "manufacturer_example",
          productCode: "productCode_example",
          productTitle: "productTitle_example",
          registered: true,
          searchKeywords: [
            "searchKeywords_example",
          ],
          shortDescription: "shortDescription_example",
          sku: "sku_example",
          usW9Submitted: true,
          visibility: "Limited",
        },
        dimensions: [
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
        promotionalResources: {
          additionalResources: [
            {
              text: "text_example",
              type: "type_example",
              url: "url_example",
            },
          ],
          logoUrl: "logoUrl_example",
          videoUrls: [
            "videoUrls_example",
          ],
        },
        repositories: [
          {
            type: "type_example",
            url: "url_example",
          },
        ],
        signatureVerificationKeys: [
          {
            publicKey: "publicKey_example",
            publicKeyVersion: 1,
            status: "status_example",
          },
        ],
        supportInformation: {
          description: "description_example",
        },
        versions: [
          {
            creationDate: new Date('1970-01-01T00:00:00.00Z'),
            deliveryOptions: [
              {
                amiAlias: "amiAlias_example",
                fulfillmentUrl: "fulfillmentUrl_example",
                id: "id_example",
                recommendations: {},
                shortDescription: "shortDescription_example",
                sourceId: "sourceId_example",
                title: "title_example",
                type: "type_example",
                visibility: "visibility_example",
              },
            ],
            id: "id_example",
            releaseNotes: "releaseNotes_example",
            versionTitle: "versionTitle_example",
          },
        ],
        dataFeedProductId: "dataFeedProductId_example",
        productId: "productId_example",
      },
      awsSaasProduct: {
        description: {
          associatedProducts: {},
          categories: [
            "categories_example",
          ],
          euW8Submitted: true,
          highlights: [
            "highlights_example",
          ],
          longDescription: "longDescription_example",
          manufacturer: "manufacturer_example",
          productCode: "productCode_example",
          productTitle: "productTitle_example",
          registered: true,
          searchKeywords: [
            "searchKeywords_example",
          ],
          shortDescription: "shortDescription_example",
          sku: "sku_example",
          usW9Submitted: true,
          visibility: "Limited",
        },
        dimensions: [
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
        promotionalResources: {
          additionalResources: [
            {
              text: "text_example",
              type: "type_example",
              url: "url_example",
            },
          ],
          logoUrl: "logoUrl_example",
          videoUrls: [
            "videoUrls_example",
          ],
        },
        repositories: [
          {
            type: "type_example",
            url: "url_example",
          },
        ],
        signatureVerificationKeys: [
          {
            publicKey: "publicKey_example",
            publicKeyVersion: 1,
            status: "status_example",
          },
        ],
        supportInformation: {
          description: "description_example",
        },
        versions: [
          {
            creationDate: new Date('1970-01-01T00:00:00.00Z'),
            deliveryOptions: [
              {
                amiAlias: "amiAlias_example",
                fulfillmentUrl: "fulfillmentUrl_example",
                id: "id_example",
                recommendations: {},
                shortDescription: "shortDescription_example",
                sourceId: "sourceId_example",
                title: "title_example",
                type: "type_example",
                visibility: "visibility_example",
              },
            ],
            id: "id_example",
            releaseNotes: "releaseNotes_example",
            versionTitle: "versionTitle_example",
          },
        ],
        dataFeedProductId: "dataFeedProductId_example",
        productId: "productId_example",
      },
      awsSnsSubscriptions: [
        {
          endpoint: "endpoint_example",
          protocol: "protocol_example",
          status: "UNKNOWN",
          subscriptionArn: "subscriptionArn_example",
          topicArn: "topicArn_example",
        },
      ],
      azureProduct: {
        availabilities: [
          {
            emailAudiences: [
              {
                description: "description_example",
                id: "id_example",
              },
            ],
            enterpriseLicensing: "enterpriseLicensing_example",
            id: "id_example",
            resourceType: "resourceType_example",
            subscriptionAudiences: [
              {
                description: "description_example",
                id: "id_example",
              },
            ],
            visibility: "visibility_example",
          },
        ],
        branches: [
          {
            currentDraftInstanceID: "currentDraftInstanceID_example",
            friendlyName: "friendlyName_example",
            id: "id_example",
            module: "module_example",
            resourceType: "resourceType_example",
            type: "type_example",
            variantID: "variantID_example",
          },
        ],
        externalIDs: [
          {
            type: "type_example",
            value: "value_example",
          },
        ],
        id: "id_example",
        isModularPublishing: true,
        listings: [
          {
            accessInformation: "accessInformation_example",
            assets: [
              {
                description: "description_example",
                fileName: "fileName_example",
                fileSasUri: "fileSasUri_example",
                friendlyName: "friendlyName_example",
                id: "id_example",
                order: 1,
                publisherDefinedSasUri: "publisherDefinedSasUri_example",
                resourceType: "ListingAsset",
                state: "PendingUpload",
                type: "type_example",
              },
            ],
            compatibleProducts: [
              "compatibleProducts_example",
            ],
            description: "description_example",
            gettingStartedInstructions: "gettingStartedInstructions_example",
            id: "id_example",
            keywords: [
              "keywords_example",
            ],
            languageCode: "languageCode_example",
            listingContacts: [
              {
                email: "email_example",
                name: "name_example",
                phone: "phone_example",
                type: "CustomerSupport",
                uri: "uri_example",
              },
            ],
            listingUris: [
              {
                displayText: "displayText_example",
                subtype: "subtype_example",
                type: "type_example",
                uri: "uri_example",
              },
            ],
            productDisplayName: "productDisplayName_example",
            publisherName: "publisherName_example",
            resourceType: "AzureListing",
            shortDescription: "shortDescription_example",
            summary: "summary_example",
            title: "title_example",
          },
        ],
        name: "name_example",
        packageConfigurations: [
          {
            azureActiveDirectoryApplicationID: "azureActiveDirectoryApplicationID_example",
            azureActiveDirectoryTenantID: "azureActiveDirectoryTenantID_example",
            connectionWebhook: "connectionWebhook_example",
            id: "id_example",
            landingPageUri: "landingPageUri_example",
            resourceType: "AzureSoftwareAsAServicePackageConfiguration",
          },
        ],
        plans: [
          {
            schema: "schema_example",
            id: "id_example",
            lifecycleState: "notAvailable",
            offerPricingType: ,
            plan: "plan_example",
            planName: "planName_example",
            pricing: {
              customMeters: {
                meters: {},
                priceInputOption: "perMarket",
              },
              recurrentPrice: {
                priceInputOption: "perMarket",
                prices: [
                  {
                    billingTerm: {
                      type: "day",
                      value: 3.14,
                    },
                    paymentOption: {
                      type: "day",
                      value: 3.14,
                    },
                    pricePerPaymentInUsd: 3.14,
                    prices: [
                      {
                        currency: "currency_example",
                        markets: [
                          "markets_example",
                        ],
                        price: 3.14,
                      },
                    ],
                  },
                ],
                recurrentPriceMode: "flatRate",
                userLimits: {
                  max: 3.14,
                  min: 3.14,
                },
              },
            },
            product: "product_example",
            resourceName: "resourceName_example",
            softwareReservation: {
              paymentSchedule: {
                type: "day",
                value: 3.14,
              },
              reservationDuration: {
                type: "day",
                value: 3.14,
              },
              vmPrices: {
                patternProperties: {
                  "key": {
                    quantity: 3.14,
                    unitPricePerPaymentPeriodInUsd: 3.14,
                  },
                },
              },
            },
            validations: [
              {
                schema: "schema_example",
                code: "businessValidationError",
                level: "informational",
                message: "message_example",
                resourceId: "resourceId_example",
              },
            ],
            visibility: "visible",
          },
        ],
        properties: [
          {
            additionalCategories: [
              "additionalCategories_example",
            ],
            appVersion: "appVersion_example",
            applicableProducts: [
              "applicableProducts_example",
            ],
            categories: [
              "categories_example",
            ],
            customAmendments: [
              "customAmendments_example",
            ],
            extendedProperties: [
              "extendedProperties_example",
            ],
            globalAmendmentTerms: "globalAmendmentTerms_example",
            hideKeys: [
              "hideKeys_example",
            ],
            id: "id_example",
            industries: [
              "industries_example",
            ],
            leveledCategories: {},
            leveledIndustries: {},
            marketingOnlyChange: true,
            productTags: [
              "productTags_example",
            ],
            resourceType: "resourceType_example",
            submissionVersion: "submissionVersion_example",
            termsOfUse: "termsOfUse_example",
            useEnterpriseContract: true,
          },
        ],
        resourceType: "resourceType_example",
        setup: ,
        submissions: [
          {
            areResourcesReady: true,
            friendlyName: "friendlyName_example",
            id: "id_example",
            pendingUpdateInfo: {
              status: "status_example",
              updateType: "updateType_example",
            },
            publishedTimeInUtc: new Date('1970-01-01T00:00:00.00Z'),
            releaseNumber: 1,
            resourceType: "Submission",
            resources: [
              {
                type: "type_example",
                value: "value_example",
              },
            ],
            state: "Inprogress",
            subState: "InDraft",
            targets: [
              {
                type: "type_example",
                value: "value_example",
              },
            ],
            variantResources: [
              {
                resources: [
                  {
                    type: "type_example",
                    value: "value_example",
                  },
                ],
                variantID: "variantID_example",
              },
            ],
          },
        ],
        variants: [
          {
            azureGovernmentCertifications: [
              {
                title: "title_example",
                uri: "uri_example",
                validationResults: [
                  {
                    errorMessage: "errorMessage_example",
                    memberNames: [
                      "memberNames_example",
                    ],
                  },
                ],
              },
            ],
            cloudAvailabilities: [
              "cloudAvailabilities_example",
            ],
            conversionPaths: "conversionPaths_example",
            extendedProperties: [
              {
                type: "type_example",
                value: "value_example",
              },
            ],
            externalID: "externalID_example",
            featureAvailabilities: [
              {
                customMeters: [
                  {
                    displayName: "displayName_example",
                    id: "id_example",
                    includedBaseQuantities: [
                      {
                        isInfinite: true,
                        quantity: 3.14,
                        recurringUnit: "Monthly",
                      },
                    ],
                    isEnabled: true,
                    priceInUsd: 3.14,
                    uniqueID: "uniqueID_example",
                    unitOfMeasure: "unitOfMeasure_example",
                  },
                ],
                id: "id_example",
                isHidden: true,
                marketStates: [
                  {
                    marketCode: "marketCode_example",
                    state: "Disabled",
                  },
                ],
                markets: [
                  {
                    friendlyName: "friendlyName_example",
                    marketCode: "marketCode_example",
                  },
                ],
                priceSchedules: [
                  {
                    dateTimeRange: {
                      endAt: {
                        dateTimeInUtc: "dateTimeInUtc_example",
                        localizePerMarket: true,
                      },
                      startAt: {
                        dateTimeInUtc: "dateTimeInUtc_example",
                        localizePerMarket: true,
                      },
                    },
                    friendlyName: "friendlyName_example",
                    isBaseSchedule: true,
                    marketCodes: [
                      "marketCodes_example",
                    ],
                    schedules: [
                      {
                        priceCadence: {
                          type: "Month",
                          value: 1,
                        },
                        pricingModel: "Flat",
                        pricingUnits: [
                          {
                            isUnlimitedUnit: true,
                            lowerUnit: 1,
                            name: "sharedcore",
                            unitType: "unitType_example",
                            upperUnit: 1,
                          },
                        ],
                        retailPrice: {
                          currencyCode: "currencyCode_example",
                          openPrice: 3.14,
                          priceTierID: "priceTierID_example",
                        },
                      },
                    ],
                  },
                ],
                properties: [
                  {
                    type: "type_example",
                    value: "value_example",
                  },
                ],
                resourceType: "resourceType_example",
                subscriptionAudiences: [
                  {
                    description: "description_example",
                    id: "id_example",
                  },
                ],
                tenantAudiences: [
                  {
                    description: "description_example",
                    id: "id_example",
                  },
                ],
                trial: {
                  dateTimeRange: {
                    endAt: {
                      dateTimeInUtc: "dateTimeInUtc_example",
                      localizePerMarket: true,
                    },
                    startAt: {
                      dateTimeInUtc: "dateTimeInUtc_example",
                      localizePerMarket: true,
                    },
                  },
                  duration: 1,
                  durationType: "Minute",
                  type: "NoTrial",
                },
                visibility: "Public",
              },
            ],
            friendlyName: "friendlyName_example",
            id: "id_example",
            leadGenID: "leadGenID_example",
            referenceVariantID: "referenceVariantID_example",
            resourceType: "AzureSkuVariant",
            state: "InActive",
          },
        ],
      },
      azureProductResource: {
        customerLeads: {
          schema: "schema_example",
          blobLeadConfiguration: {},
          dynamicsLeadConfiguration: {},
          emailLeadConfiguration: {},
          httpsEndpointLeadConfiguration: {},
          id: "id_example",
          leadDestination: "none",
          marketoLeadConfiguration: {},
          product: "product_example",
          resourceName: "resourceName_example",
          salesforceLeadConfiguration: {},
          tableLeadConfiguration: {},
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        listing: {
          schema: "schema_example",
          cloudSolutionProviderContact: {
            email: "email_example",
            name: "name_example",
            phone: "phone_example",
            url: "url_example",
          },
          cloudSolutionProviderMarketingMaterials: "cloudSolutionProviderMarketingMaterials_example",
          description: "description_example",
          engineeringContact: {
            email: "email_example",
            name: "name_example",
            phone: "phone_example",
            url: "url_example",
          },
          generalLinks: [
            {
              displayText: "displayText_example",
              link: "link_example",
            },
          ],
          gettingStartedInstructions: "gettingStartedInstructions_example",
          gloabalSupportWebsite: "gloabalSupportWebsite_example",
          governmentSupportWebsite: "governmentSupportWebsite_example",
          id: "id_example",
          kind: "azureSaaS",
          languageId: "languageId_example",
          lifecycleState: ,
          privacyPolicyLink: "privacyPolicyLink_example",
          product: "product_example",
          resourceName: "resourceName_example",
          searchKeywords: [
            "searchKeywords_example",
          ],
          searchResultSummary: "searchResultSummary_example",
          shortDescription: "shortDescription_example",
          supportContact: {
            email: "email_example",
            name: "name_example",
            phone: "phone_example",
            url: "url_example",
          },
          title: "title_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        listingAssets: [
          {
            schema: "schema_example",
            description: "description_example",
            displayOrder: 1,
            fileName: "fileName_example",
            friendlyName: "friendlyName_example",
            id: "id_example",
            kind: "azure",
            languageId: "languageId_example",
            lifecycleState: ,
            listing: "listing_example",
            product: "product_example",
            resourceName: "resourceName_example",
            type: "azureLogoSmall",
            url: "url_example",
            validations: [
              {
                schema: "schema_example",
                code: "businessValidationError",
                level: "informational",
                message: "message_example",
                resourceId: "resourceId_example",
              },
            ],
          },
        ],
        plans: [
          {
            plan: {
              schema: "schema_example",
              alias: "alias_example",
              azureGovernmentCertifications: [
                {
                  link: "link_example",
                  name: "name_example",
                },
              ],
              azureRegions: [
                "azureRegions_example",
              ],
              deprecationSchedule: {
                schema: "schema_example",
                alternative: {
                  plan: {},
                  product: {},
                },
                date: "date_example",
                dateOffset: "dateOffset_example",
                reason: "criticalSecurityIssue",
              },
              displayRank: 1,
              id: "id_example",
              identity: {
                externalId: "externalId_example",
              },
              lifecycleState: "notAvailable",
              product: "product_example",
              resourceName: "resourceName_example",
              subtype: "managedApplication",
              validations: [
                {
                  schema: "schema_example",
                  code: "businessValidationError",
                  level: "informational",
                  message: "message_example",
                  resourceId: "resourceId_example",
                },
              ],
            },
            planListing: {
              schema: "schema_example",
              description: "description_example",
              id: "id_example",
              kind: "azureVM-plan",
              languageId: "languageId_example",
              lifecycleState: "notAvailable",
              name: "name_example",
              plan: "plan_example",
              product: "product_example",
              resourceName: "resourceName_example",
              summary: "summary_example",
              validations: [
                {
                  schema: "schema_example",
                  code: "businessValidationError",
                  level: "informational",
                  message: "message_example",
                  resourceId: "resourceId_example",
                },
              ],
            },
            priceAndAvailabilityPlan: {
              schema: "schema_example",
              audience: "public",
              billingTag: "billingTag_example",
              id: "id_example",
              markets: [
                "markets_example",
              ],
              meterDefine: "meterDefine_example",
              plan: "plan_example",
              pricing: {
                corePricing: {
                  price: 3.14,
                  priceInputOption: "free",
                  pricePerCore: 3.14,
                  pricePerCoreSize: {},
                  prices: [
                    {
                      currency: "currency_example",
                      markets: [
                        "markets_example",
                      ],
                      price: 3.14,
                    },
                  ],
                },
                customMeters: {
                  meters: {
                    "key": {
                      billingTerm: {
                        type: "day",
                        value: 3.14,
                      },
                      includedQuantities: [
                        {
                          billingTerm: {
                            type: "day",
                            value: 3.14,
                          },
                          isInfinite: true,
                          quantity: 3.14,
                        },
                      ],
                      paymentOption: {
                        type: "day",
                        value: 3.14,
                      },
                      pricePerPaymentInUsd: 3.14,
                      prices: [
                        {
                          pricePerPaymentInUsd: 3.14,
                          prices: [
                            {
                              currency: "currency_example",
                              markets: [
                                "markets_example",
                              ],
                              price: 3.14,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  priceInputOption: "perMarket",
                },
                licenseModel: "byol",
                recurrentPrice: {
                  priceInputOption: "perMarket",
                  prices: [
                    {
                      billingTerm: {
                        type: "day",
                        value: 3.14,
                      },
                      paymentOption: {
                        type: "day",
                        value: 3.14,
                      },
                      pricePerPaymentInUsd: 3.14,
                      prices: [
                        {
                          currency: "currency_example",
                          markets: [
                            "markets_example",
                          ],
                          price: 3.14,
                        },
                      ],
                    },
                  ],
                  recurrentPriceMode: "flatRate",
                  userLimits: {
                    max: 3.14,
                    min: 3.14,
                  },
                },
                systemMeterPricing: {
                  price: 3.14,
                  priceInputOption: "perCore",
                  prices: [
                    {
                      currency: "currency_example",
                      markets: [
                        "markets_example",
                      ],
                      price: 3.14,
                    },
                  ],
                },
              },
              privateAudiences: [
                {
                  id: "id_example",
                  label: "label_example",
                  type: "none",
                },
              ],
              product: "product_example",
              resourceName: "resourceName_example",
              softwareReservation: [
                {
                  percentageSave: 3.14,
                  term: 3.14,
                  type: "month",
                },
              ],
              trial: {
                type: "day",
                value: 3.14,
              },
              validations: [
                {
                  schema: "schema_example",
                  code: "businessValidationError",
                  level: "informational",
                  message: "message_example",
                  resourceId: "resourceId_example",
                },
              ],
              visibility: "visible",
            },
          },
        ],
        priceAndAvailabilityCustomMeter: {
          schema: "schema_example",
          customMeters: {
            "key": {
              displayName: "displayName_example",
              price: 3.14,
              unitOfMeasure: "unitOfMeasure_example",
            },
          },
          id: "id_example",
          product: "product_example",
          resourceName: "resourceName_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        priceAndAvailabilityOffer: {
          schema: "schema_example",
          id: "id_example",
          previewAudiences: [
            {
              id: "id_example",
              label: "label_example",
              type: "none",
            },
          ],
          product: "product_example",
          resourceName: "resourceName_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        product: {
          schema: "schema_example",
          alias: "alias_example",
          id: "id_example",
          identity: {
            externalId: "externalId_example",
          },
          lifecycleState: "notAvailable",
          productGroup: "productGroup_example",
          resourceName: "resourceName_example",
          type: "azureApplication",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        property: {
          schema: "schema_example",
          appVersion: "appVersion_example",
          categories: {
            "key": [
              "key_example",
            ],
          },
          cloudIndustries: {
            "key": [
              "key_example",
            ],
          },
          customAmendments: [
            {
              tenants: {
                manualEntries: [
                  {
                    description: "description_example",
                    id: "id_example",
                  },
                ],
              },
              terms: "terms_example",
            },
          ],
          id: "id_example",
          industries: {
            "key": [
              "key_example",
            ],
          },
          kind: "azureSaaS",
          lifecycleState: "notAvailable",
          product: "product_example",
          resourceName: "resourceName_example",
          standardContractAmendment: "standardContractAmendment_example",
          termsConditions: "custom",
          termsOfUse: "termsOfUse_example",
          termsOfUseUrl: "termsOfUseUrl_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        reseller: {
          schema: "schema_example",
          audiences: [
            {
              description: "description_example",
              resourceId: "resourceId_example",
              type: "subscription",
            },
          ],
          id: "id_example",
          product: "product_example",
          resellerChannelState: "resellerChannelState_example",
          resourceName: "resourceName_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        setup: {
          schema: "schema_example",
          accessUrl: "accessUrl_example",
          callToAction: "free",
          id: "id_example",
          product: "product_example",
          requireLicenseForInstall: true,
          resourceName: "resourceName_example",
          sellThroughMicrosoft: true,
          useMicrosoftLicenseManagementService: true,
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        submission: {
          schema: "schema_example",
          created: "created_example",
          deprecationSchedule: {
            schema: "schema_example",
            alternative: {
              plan: {},
              product: {},
            },
            date: "date_example",
            dateOffset: "dateOffset_example",
            reason: "criticalSecurityIssue",
          },
          id: "id_example",
          lifecycleState: "notAvailable",
          product: "product_example",
          resourceName: "resourceName_example",
          result: "succeeded",
          status: "notStarted",
          target: {
            targetId: "targetId_example",
            targetType: "flight",
          },
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        technicalConfiguration: {
          schema: "schema_example",
          azureAdAppId: "azureAdAppId_example",
          azureAdTenantId: "azureAdTenantId_example",
          connectionWebhook: "connectionWebhook_example",
          id: "id_example",
          landingPageUrl: "landingPageUrl_example",
          product: "product_example",
          resourceName: "resourceName_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
      },
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
      eulaType: ,
      eulaUrl: "eulaUrl_example",
      gcpProduct: {
        createTime: new Date('1970-01-01T00:00:00.00Z'),
        derivedDiscoveryState: {
          accessState: "ALLUSERS_ACCESSIBLE",
          searchState: "ADMIN_OVERRIDE_UNSEARCHABLE",
        },
        id: "id_example",
        lastPublishTime: new Date('1970-01-01T00:00:00.00Z'),
        listingSpec: {
          externalAccountSpec: {
            loginUri: "loginUri_example",
            signupUri: "signupUri_example",
            singleSignOnUri: "singleSignOnUri_example",
          },
          listingType: "BillingIntegratedManagedService",
          marketingSpec: {
            description: "description_example",
            displayNames: [
              "displayNames_example",
            ],
            documentationSpecs: [
              {
                description: "description_example",
                title: "title_example",
                uri: "uri_example",
              },
            ],
            eulaUrl: "eulaUrl_example",
            externalLicenseSpecs: [
              {
                description: "description_example",
                uri: "uri_example",
              },
            ],
            externalMarketingUrl: "externalMarketingUrl_example",
            icon: "icon_example",
            searchCategories: [
              "searchCategories_example",
            ],
            searchDescription: "searchDescription_example",
            searchKeywords: [
              "searchKeywords_example",
            ],
            signupUri: "signupUri_example",
            supportSpec: {
              description: "description_example",
              email: "email_example",
              uri: "uri_example",
            },
            tagLine: "tagLine_example",
            title: "title_example",
          },
          purchaseSpec: {
            features: [
              {
                description: "description_example",
                name: "name_example",
                title: "title_example",
              },
            ],
            metrics: [
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
            purchaseOptionSpecs: [
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
          },
          termsSpec: {
            eulaUri: "eulaUri_example",
            inlineEula: {},
            standardEula: {},
          },
        },
        marketplace: "marketplaces/google-cloud",
        name: "name_example",
        revisionCreateTime: new Date('1970-01-01T00:00:00.00Z'),
        revisionId: "revisionId_example",
        service: "service_example",
        serviceConfig: {
          billing: {
            metrics: [
              "metrics_example",
            ],
          },
          metrics: [
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
          name: "name_example",
          producerProjectId: "producerProjectId_example",
          title: "title_example",
        },
        validationSummary: {},
      },
      refundCancellationPolicy: "refundCancellationPolicy_example",
      sellerNotes: "sellerNotes_example",
      snowflakeProduct: {
        comment: {
          string: "string_example",
          valid: true,
        },
        createdOn: {
          time: "time_example",
          valid: true,
        },
        detailedTargetAccounts: {
          string: "string_example",
          valid: true,
        },
        distribution: {
          string: "string_example",
          valid: true,
        },
        globalName: {
          string: "string_example",
          valid: true,
        },
        isApplication: {
          bool: true,
          valid: true,
        },
        isByRequest: {
          bool: true,
          valid: true,
        },
        isLimitedTrial: {
          bool: true,
          valid: true,
        },
        isMonetized: {
          bool: true,
          valid: true,
        },
        isMountlessQueryable: {
          bool: true,
          valid: true,
        },
        isTargeted: {
          bool: true,
          valid: true,
        },
        owner: {
          string: "string_example",
          valid: true,
        },
        ownerRoleType: {
          string: "string_example",
          valid: true,
        },
        profile: {
          string: "string_example",
          valid: true,
        },
        publishedOn: {
          time: "time_example",
          valid: true,
        },
        regions: {
          string: "string_example",
          valid: true,
        },
        rejectedOn: {
          time: "time_example",
          valid: true,
        },
        reviewState: {
          string: "string_example",
          valid: true,
        },
        state: {
          string: "string_example",
          valid: true,
        },
        subtitle: {
          string: "string_example",
          valid: true,
        },
        targetAccounts: {
          string: "string_example",
          valid: true,
        },
        title: {
          string: "string_example",
          valid: true,
        },
        uniformListingLocator: {
          string: "string_example",
          valid: true,
        },
        updatedOn: {
          time: "time_example",
          valid: true,
        },
        name: {
          string: "string_example",
          valid: true,
        },
        organizationProfileName: {
          string: "string_example",
          valid: true,
        },
      },
      stripeProduct: {
        active: true,
        created: 1,
        description: "description_example",
        id: "id_example",
        images: [
          "images_example",
        ],
        livemode: true,
        marketingFeatures: [
          {
            name: "name_example",
          },
        ],
        metadata: {
          "key": "key_example",
        },
        name: "name_example",
        object: "object_example",
        packageDimensions: ,
        shippable: true,
        statementDescriptor: "statementDescriptor_example",
        taxCode: {},
        unitLabel: "unitLabel_example",
        updated: 1,
        url: "url_example",
      },
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
      renewalOfferType: ,
      replacedOfferEndTime: new Date('1970-01-01T00:00:00.00Z'),
      replacedOfferResourceName: "replacedOfferResourceName_example",
      salesforceEntitlementURL: "salesforceEntitlementURL_example",
      salesforceOpportunityId: "salesforceOpportunityId_example",
      testUsageMeteringEndTime: new Date('1970-01-01T00:00:00.00Z'),
      updateMessage: "updateMessage_example",
    },
    name: "name_example",
    organizationID: "organizationID_example",
    partner: "",
    partnerID: "partnerID_example",
    productType: "UNKNOWN",
    service: "DEFAULT",
    status: "status_example",
  },
};

const data = await apiInstance.createOrUpdateDraftProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **WorkloadProduct**| the draft product to create |
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**WorkloadProduct**

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

# **createProduct**
> WorkloadProduct createProduct(data)

create a new product in the marketplace

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiCreateProductRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiCreateProductRequest = {
    // Organization ID
  orgId: "orgId_example",
    // the product to create
  data: {
    createdBy: "createdBy_example",
    creationTime: new Date('1970-01-01T00:00:00.00Z'),
    externalID: "externalID_example",
    fulfillmentUrl: "fulfillmentUrl_example",
    id: "id_example",
    info: {
      alibabaProduct: {
        auditFailMsg: "auditFailMsg_example",
        auditStatus: "auditStatus_example",
        auditTime: 1,
        code: "code_example",
        description: "description_example",
        frontCategoryId: 1,
        gmtCreated: 1,
        gmtModified: 1,
        name: "name_example",
        picUrl: "picUrl_example",
        productExtras: {
          productExtra: [
            {
              key: "key_example",
              label: "label_example",
              order: 1,
              type: "type_example",
              values: {},
            },
          ],
        },
        productSkus: {
          productSku: [
            {
              chargeType: "chargeType_example",
              code: "code_example",
              constraints: "constraints_example",
              hidden: true,
              modules: {
                module: [
                  {
                    code: "code_example",
                    id: "id_example",
                    name: "name_example",
                    properties: {
                      property: [
                        {
                          displayUnit: "displayUnit_example",
                          key: "key_example",
                          name: "name_example",
                          propertyValues: {
                            propertyValue: [
                              {
                                displayName: "displayName_example",
                                max: "max_example",
                                min: "min_example",
                                remark: "remark_example",
                                step: "step_example",
                                type: "type_example",
                                value: "value_example",
                              },
                            ],
                          },
                          showType: "showType_example",
                        },
                      ],
                    },
                  },
                ],
              },
              name: "name_example",
              orderPeriods: {
                orderPeriod: [
                  {
                    name: "name_example",
                    periodType: "periodType_example",
                  },
                ],
              },
            },
          ],
        },
        requestId: "requestId_example",
        score: 3.14,
        shopInfo: {
          emails: "emails_example",
          id: 1,
          name: "name_example",
          telephones: {
            telephone: [
              "telephone_example",
            ],
          },
          wangWangs: {
            wangWang: [
              {
                remark: "remark_example",
                userName: "userName_example",
              },
            ],
          },
        },
        shortDescription: "shortDescription_example",
        status: "status_example",
        supplierPk: 1,
        type: "type_example",
        useCount: 1,
      },
      attributes: {
        "key": "key_example",
      },
      awsAmiProduct: {
        description: {
          associatedProducts: {},
          categories: [
            "categories_example",
          ],
          euW8Submitted: true,
          highlights: [
            "highlights_example",
          ],
          longDescription: "longDescription_example",
          manufacturer: "manufacturer_example",
          productCode: "productCode_example",
          productTitle: "productTitle_example",
          registered: true,
          searchKeywords: [
            "searchKeywords_example",
          ],
          shortDescription: "shortDescription_example",
          sku: "sku_example",
          usW9Submitted: true,
          visibility: "Limited",
        },
        dimensions: [
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
        promotionalResources: {
          additionalResources: [
            {
              text: "text_example",
              type: "type_example",
              url: "url_example",
            },
          ],
          logoUrl: "logoUrl_example",
          videoUrls: [
            "videoUrls_example",
          ],
        },
        repositories: [
          {
            type: "type_example",
            url: "url_example",
          },
        ],
        signatureVerificationKeys: [
          {
            publicKey: "publicKey_example",
            publicKeyVersion: 1,
            status: "status_example",
          },
        ],
        supportInformation: {
          description: "description_example",
        },
        versions: [
          {
            creationDate: new Date('1970-01-01T00:00:00.00Z'),
            deliveryOptions: [
              {
                amiAlias: "amiAlias_example",
                fulfillmentUrl: "fulfillmentUrl_example",
                id: "id_example",
                recommendations: {},
                shortDescription: "shortDescription_example",
                sourceId: "sourceId_example",
                title: "title_example",
                type: "type_example",
                visibility: "visibility_example",
              },
            ],
            id: "id_example",
            releaseNotes: "releaseNotes_example",
            versionTitle: "versionTitle_example",
          },
        ],
        dataFeedProductId: "dataFeedProductId_example",
        productId: "productId_example",
      },
      awsContainerProduct: {
        description: {
          associatedProducts: {},
          categories: [
            "categories_example",
          ],
          euW8Submitted: true,
          highlights: [
            "highlights_example",
          ],
          longDescription: "longDescription_example",
          manufacturer: "manufacturer_example",
          productCode: "productCode_example",
          productTitle: "productTitle_example",
          registered: true,
          searchKeywords: [
            "searchKeywords_example",
          ],
          shortDescription: "shortDescription_example",
          sku: "sku_example",
          usW9Submitted: true,
          visibility: "Limited",
        },
        dimensions: [
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
        promotionalResources: {
          additionalResources: [
            {
              text: "text_example",
              type: "type_example",
              url: "url_example",
            },
          ],
          logoUrl: "logoUrl_example",
          videoUrls: [
            "videoUrls_example",
          ],
        },
        repositories: [
          {
            type: "type_example",
            url: "url_example",
          },
        ],
        signatureVerificationKeys: [
          {
            publicKey: "publicKey_example",
            publicKeyVersion: 1,
            status: "status_example",
          },
        ],
        supportInformation: {
          description: "description_example",
        },
        versions: [
          {
            creationDate: new Date('1970-01-01T00:00:00.00Z'),
            deliveryOptions: [
              {
                amiAlias: "amiAlias_example",
                fulfillmentUrl: "fulfillmentUrl_example",
                id: "id_example",
                recommendations: {},
                shortDescription: "shortDescription_example",
                sourceId: "sourceId_example",
                title: "title_example",
                type: "type_example",
                visibility: "visibility_example",
              },
            ],
            id: "id_example",
            releaseNotes: "releaseNotes_example",
            versionTitle: "versionTitle_example",
          },
        ],
        dataFeedProductId: "dataFeedProductId_example",
        productId: "productId_example",
      },
      awsProfessionalServicesProduct: {
        description: {
          associatedProducts: {},
          categories: [
            "categories_example",
          ],
          euW8Submitted: true,
          highlights: [
            "highlights_example",
          ],
          longDescription: "longDescription_example",
          manufacturer: "manufacturer_example",
          productCode: "productCode_example",
          productTitle: "productTitle_example",
          registered: true,
          searchKeywords: [
            "searchKeywords_example",
          ],
          shortDescription: "shortDescription_example",
          sku: "sku_example",
          usW9Submitted: true,
          visibility: "Limited",
        },
        dimensions: [
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
        promotionalResources: {
          additionalResources: [
            {
              text: "text_example",
              type: "type_example",
              url: "url_example",
            },
          ],
          logoUrl: "logoUrl_example",
          videoUrls: [
            "videoUrls_example",
          ],
        },
        repositories: [
          {
            type: "type_example",
            url: "url_example",
          },
        ],
        signatureVerificationKeys: [
          {
            publicKey: "publicKey_example",
            publicKeyVersion: 1,
            status: "status_example",
          },
        ],
        supportInformation: {
          description: "description_example",
        },
        versions: [
          {
            creationDate: new Date('1970-01-01T00:00:00.00Z'),
            deliveryOptions: [
              {
                amiAlias: "amiAlias_example",
                fulfillmentUrl: "fulfillmentUrl_example",
                id: "id_example",
                recommendations: {},
                shortDescription: "shortDescription_example",
                sourceId: "sourceId_example",
                title: "title_example",
                type: "type_example",
                visibility: "visibility_example",
              },
            ],
            id: "id_example",
            releaseNotes: "releaseNotes_example",
            versionTitle: "versionTitle_example",
          },
        ],
        dataFeedProductId: "dataFeedProductId_example",
        productId: "productId_example",
      },
      awsSaasProduct: {
        description: {
          associatedProducts: {},
          categories: [
            "categories_example",
          ],
          euW8Submitted: true,
          highlights: [
            "highlights_example",
          ],
          longDescription: "longDescription_example",
          manufacturer: "manufacturer_example",
          productCode: "productCode_example",
          productTitle: "productTitle_example",
          registered: true,
          searchKeywords: [
            "searchKeywords_example",
          ],
          shortDescription: "shortDescription_example",
          sku: "sku_example",
          usW9Submitted: true,
          visibility: "Limited",
        },
        dimensions: [
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
        promotionalResources: {
          additionalResources: [
            {
              text: "text_example",
              type: "type_example",
              url: "url_example",
            },
          ],
          logoUrl: "logoUrl_example",
          videoUrls: [
            "videoUrls_example",
          ],
        },
        repositories: [
          {
            type: "type_example",
            url: "url_example",
          },
        ],
        signatureVerificationKeys: [
          {
            publicKey: "publicKey_example",
            publicKeyVersion: 1,
            status: "status_example",
          },
        ],
        supportInformation: {
          description: "description_example",
        },
        versions: [
          {
            creationDate: new Date('1970-01-01T00:00:00.00Z'),
            deliveryOptions: [
              {
                amiAlias: "amiAlias_example",
                fulfillmentUrl: "fulfillmentUrl_example",
                id: "id_example",
                recommendations: {},
                shortDescription: "shortDescription_example",
                sourceId: "sourceId_example",
                title: "title_example",
                type: "type_example",
                visibility: "visibility_example",
              },
            ],
            id: "id_example",
            releaseNotes: "releaseNotes_example",
            versionTitle: "versionTitle_example",
          },
        ],
        dataFeedProductId: "dataFeedProductId_example",
        productId: "productId_example",
      },
      awsSnsSubscriptions: [
        {
          endpoint: "endpoint_example",
          protocol: "protocol_example",
          status: "UNKNOWN",
          subscriptionArn: "subscriptionArn_example",
          topicArn: "topicArn_example",
        },
      ],
      azureProduct: {
        availabilities: [
          {
            emailAudiences: [
              {
                description: "description_example",
                id: "id_example",
              },
            ],
            enterpriseLicensing: "enterpriseLicensing_example",
            id: "id_example",
            resourceType: "resourceType_example",
            subscriptionAudiences: [
              {
                description: "description_example",
                id: "id_example",
              },
            ],
            visibility: "visibility_example",
          },
        ],
        branches: [
          {
            currentDraftInstanceID: "currentDraftInstanceID_example",
            friendlyName: "friendlyName_example",
            id: "id_example",
            module: "module_example",
            resourceType: "resourceType_example",
            type: "type_example",
            variantID: "variantID_example",
          },
        ],
        externalIDs: [
          {
            type: "type_example",
            value: "value_example",
          },
        ],
        id: "id_example",
        isModularPublishing: true,
        listings: [
          {
            accessInformation: "accessInformation_example",
            assets: [
              {
                description: "description_example",
                fileName: "fileName_example",
                fileSasUri: "fileSasUri_example",
                friendlyName: "friendlyName_example",
                id: "id_example",
                order: 1,
                publisherDefinedSasUri: "publisherDefinedSasUri_example",
                resourceType: "ListingAsset",
                state: "PendingUpload",
                type: "type_example",
              },
            ],
            compatibleProducts: [
              "compatibleProducts_example",
            ],
            description: "description_example",
            gettingStartedInstructions: "gettingStartedInstructions_example",
            id: "id_example",
            keywords: [
              "keywords_example",
            ],
            languageCode: "languageCode_example",
            listingContacts: [
              {
                email: "email_example",
                name: "name_example",
                phone: "phone_example",
                type: "CustomerSupport",
                uri: "uri_example",
              },
            ],
            listingUris: [
              {
                displayText: "displayText_example",
                subtype: "subtype_example",
                type: "type_example",
                uri: "uri_example",
              },
            ],
            productDisplayName: "productDisplayName_example",
            publisherName: "publisherName_example",
            resourceType: "AzureListing",
            shortDescription: "shortDescription_example",
            summary: "summary_example",
            title: "title_example",
          },
        ],
        name: "name_example",
        packageConfigurations: [
          {
            azureActiveDirectoryApplicationID: "azureActiveDirectoryApplicationID_example",
            azureActiveDirectoryTenantID: "azureActiveDirectoryTenantID_example",
            connectionWebhook: "connectionWebhook_example",
            id: "id_example",
            landingPageUri: "landingPageUri_example",
            resourceType: "AzureSoftwareAsAServicePackageConfiguration",
          },
        ],
        plans: [
          {
            schema: "schema_example",
            id: "id_example",
            lifecycleState: "notAvailable",
            offerPricingType: ,
            plan: "plan_example",
            planName: "planName_example",
            pricing: {
              customMeters: {
                meters: {},
                priceInputOption: "perMarket",
              },
              recurrentPrice: {
                priceInputOption: "perMarket",
                prices: [
                  {
                    billingTerm: {
                      type: "day",
                      value: 3.14,
                    },
                    paymentOption: {
                      type: "day",
                      value: 3.14,
                    },
                    pricePerPaymentInUsd: 3.14,
                    prices: [
                      {
                        currency: "currency_example",
                        markets: [
                          "markets_example",
                        ],
                        price: 3.14,
                      },
                    ],
                  },
                ],
                recurrentPriceMode: "flatRate",
                userLimits: {
                  max: 3.14,
                  min: 3.14,
                },
              },
            },
            product: "product_example",
            resourceName: "resourceName_example",
            softwareReservation: {
              paymentSchedule: {
                type: "day",
                value: 3.14,
              },
              reservationDuration: {
                type: "day",
                value: 3.14,
              },
              vmPrices: {
                patternProperties: {
                  "key": {
                    quantity: 3.14,
                    unitPricePerPaymentPeriodInUsd: 3.14,
                  },
                },
              },
            },
            validations: [
              {
                schema: "schema_example",
                code: "businessValidationError",
                level: "informational",
                message: "message_example",
                resourceId: "resourceId_example",
              },
            ],
            visibility: "visible",
          },
        ],
        properties: [
          {
            additionalCategories: [
              "additionalCategories_example",
            ],
            appVersion: "appVersion_example",
            applicableProducts: [
              "applicableProducts_example",
            ],
            categories: [
              "categories_example",
            ],
            customAmendments: [
              "customAmendments_example",
            ],
            extendedProperties: [
              "extendedProperties_example",
            ],
            globalAmendmentTerms: "globalAmendmentTerms_example",
            hideKeys: [
              "hideKeys_example",
            ],
            id: "id_example",
            industries: [
              "industries_example",
            ],
            leveledCategories: {},
            leveledIndustries: {},
            marketingOnlyChange: true,
            productTags: [
              "productTags_example",
            ],
            resourceType: "resourceType_example",
            submissionVersion: "submissionVersion_example",
            termsOfUse: "termsOfUse_example",
            useEnterpriseContract: true,
          },
        ],
        resourceType: "resourceType_example",
        setup: ,
        submissions: [
          {
            areResourcesReady: true,
            friendlyName: "friendlyName_example",
            id: "id_example",
            pendingUpdateInfo: {
              status: "status_example",
              updateType: "updateType_example",
            },
            publishedTimeInUtc: new Date('1970-01-01T00:00:00.00Z'),
            releaseNumber: 1,
            resourceType: "Submission",
            resources: [
              {
                type: "type_example",
                value: "value_example",
              },
            ],
            state: "Inprogress",
            subState: "InDraft",
            targets: [
              {
                type: "type_example",
                value: "value_example",
              },
            ],
            variantResources: [
              {
                resources: [
                  {
                    type: "type_example",
                    value: "value_example",
                  },
                ],
                variantID: "variantID_example",
              },
            ],
          },
        ],
        variants: [
          {
            azureGovernmentCertifications: [
              {
                title: "title_example",
                uri: "uri_example",
                validationResults: [
                  {
                    errorMessage: "errorMessage_example",
                    memberNames: [
                      "memberNames_example",
                    ],
                  },
                ],
              },
            ],
            cloudAvailabilities: [
              "cloudAvailabilities_example",
            ],
            conversionPaths: "conversionPaths_example",
            extendedProperties: [
              {
                type: "type_example",
                value: "value_example",
              },
            ],
            externalID: "externalID_example",
            featureAvailabilities: [
              {
                customMeters: [
                  {
                    displayName: "displayName_example",
                    id: "id_example",
                    includedBaseQuantities: [
                      {
                        isInfinite: true,
                        quantity: 3.14,
                        recurringUnit: "Monthly",
                      },
                    ],
                    isEnabled: true,
                    priceInUsd: 3.14,
                    uniqueID: "uniqueID_example",
                    unitOfMeasure: "unitOfMeasure_example",
                  },
                ],
                id: "id_example",
                isHidden: true,
                marketStates: [
                  {
                    marketCode: "marketCode_example",
                    state: "Disabled",
                  },
                ],
                markets: [
                  {
                    friendlyName: "friendlyName_example",
                    marketCode: "marketCode_example",
                  },
                ],
                priceSchedules: [
                  {
                    dateTimeRange: {
                      endAt: {
                        dateTimeInUtc: "dateTimeInUtc_example",
                        localizePerMarket: true,
                      },
                      startAt: {
                        dateTimeInUtc: "dateTimeInUtc_example",
                        localizePerMarket: true,
                      },
                    },
                    friendlyName: "friendlyName_example",
                    isBaseSchedule: true,
                    marketCodes: [
                      "marketCodes_example",
                    ],
                    schedules: [
                      {
                        priceCadence: {
                          type: "Month",
                          value: 1,
                        },
                        pricingModel: "Flat",
                        pricingUnits: [
                          {
                            isUnlimitedUnit: true,
                            lowerUnit: 1,
                            name: "sharedcore",
                            unitType: "unitType_example",
                            upperUnit: 1,
                          },
                        ],
                        retailPrice: {
                          currencyCode: "currencyCode_example",
                          openPrice: 3.14,
                          priceTierID: "priceTierID_example",
                        },
                      },
                    ],
                  },
                ],
                properties: [
                  {
                    type: "type_example",
                    value: "value_example",
                  },
                ],
                resourceType: "resourceType_example",
                subscriptionAudiences: [
                  {
                    description: "description_example",
                    id: "id_example",
                  },
                ],
                tenantAudiences: [
                  {
                    description: "description_example",
                    id: "id_example",
                  },
                ],
                trial: {
                  dateTimeRange: {
                    endAt: {
                      dateTimeInUtc: "dateTimeInUtc_example",
                      localizePerMarket: true,
                    },
                    startAt: {
                      dateTimeInUtc: "dateTimeInUtc_example",
                      localizePerMarket: true,
                    },
                  },
                  duration: 1,
                  durationType: "Minute",
                  type: "NoTrial",
                },
                visibility: "Public",
              },
            ],
            friendlyName: "friendlyName_example",
            id: "id_example",
            leadGenID: "leadGenID_example",
            referenceVariantID: "referenceVariantID_example",
            resourceType: "AzureSkuVariant",
            state: "InActive",
          },
        ],
      },
      azureProductResource: {
        customerLeads: {
          schema: "schema_example",
          blobLeadConfiguration: {},
          dynamicsLeadConfiguration: {},
          emailLeadConfiguration: {},
          httpsEndpointLeadConfiguration: {},
          id: "id_example",
          leadDestination: "none",
          marketoLeadConfiguration: {},
          product: "product_example",
          resourceName: "resourceName_example",
          salesforceLeadConfiguration: {},
          tableLeadConfiguration: {},
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        listing: {
          schema: "schema_example",
          cloudSolutionProviderContact: {
            email: "email_example",
            name: "name_example",
            phone: "phone_example",
            url: "url_example",
          },
          cloudSolutionProviderMarketingMaterials: "cloudSolutionProviderMarketingMaterials_example",
          description: "description_example",
          engineeringContact: {
            email: "email_example",
            name: "name_example",
            phone: "phone_example",
            url: "url_example",
          },
          generalLinks: [
            {
              displayText: "displayText_example",
              link: "link_example",
            },
          ],
          gettingStartedInstructions: "gettingStartedInstructions_example",
          gloabalSupportWebsite: "gloabalSupportWebsite_example",
          governmentSupportWebsite: "governmentSupportWebsite_example",
          id: "id_example",
          kind: "azureSaaS",
          languageId: "languageId_example",
          lifecycleState: ,
          privacyPolicyLink: "privacyPolicyLink_example",
          product: "product_example",
          resourceName: "resourceName_example",
          searchKeywords: [
            "searchKeywords_example",
          ],
          searchResultSummary: "searchResultSummary_example",
          shortDescription: "shortDescription_example",
          supportContact: {
            email: "email_example",
            name: "name_example",
            phone: "phone_example",
            url: "url_example",
          },
          title: "title_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        listingAssets: [
          {
            schema: "schema_example",
            description: "description_example",
            displayOrder: 1,
            fileName: "fileName_example",
            friendlyName: "friendlyName_example",
            id: "id_example",
            kind: "azure",
            languageId: "languageId_example",
            lifecycleState: ,
            listing: "listing_example",
            product: "product_example",
            resourceName: "resourceName_example",
            type: "azureLogoSmall",
            url: "url_example",
            validations: [
              {
                schema: "schema_example",
                code: "businessValidationError",
                level: "informational",
                message: "message_example",
                resourceId: "resourceId_example",
              },
            ],
          },
        ],
        plans: [
          {
            plan: {
              schema: "schema_example",
              alias: "alias_example",
              azureGovernmentCertifications: [
                {
                  link: "link_example",
                  name: "name_example",
                },
              ],
              azureRegions: [
                "azureRegions_example",
              ],
              deprecationSchedule: {
                schema: "schema_example",
                alternative: {
                  plan: {},
                  product: {},
                },
                date: "date_example",
                dateOffset: "dateOffset_example",
                reason: "criticalSecurityIssue",
              },
              displayRank: 1,
              id: "id_example",
              identity: {
                externalId: "externalId_example",
              },
              lifecycleState: "notAvailable",
              product: "product_example",
              resourceName: "resourceName_example",
              subtype: "managedApplication",
              validations: [
                {
                  schema: "schema_example",
                  code: "businessValidationError",
                  level: "informational",
                  message: "message_example",
                  resourceId: "resourceId_example",
                },
              ],
            },
            planListing: {
              schema: "schema_example",
              description: "description_example",
              id: "id_example",
              kind: "azureVM-plan",
              languageId: "languageId_example",
              lifecycleState: "notAvailable",
              name: "name_example",
              plan: "plan_example",
              product: "product_example",
              resourceName: "resourceName_example",
              summary: "summary_example",
              validations: [
                {
                  schema: "schema_example",
                  code: "businessValidationError",
                  level: "informational",
                  message: "message_example",
                  resourceId: "resourceId_example",
                },
              ],
            },
            priceAndAvailabilityPlan: {
              schema: "schema_example",
              audience: "public",
              billingTag: "billingTag_example",
              id: "id_example",
              markets: [
                "markets_example",
              ],
              meterDefine: "meterDefine_example",
              plan: "plan_example",
              pricing: {
                corePricing: {
                  price: 3.14,
                  priceInputOption: "free",
                  pricePerCore: 3.14,
                  pricePerCoreSize: {},
                  prices: [
                    {
                      currency: "currency_example",
                      markets: [
                        "markets_example",
                      ],
                      price: 3.14,
                    },
                  ],
                },
                customMeters: {
                  meters: {
                    "key": {
                      billingTerm: {
                        type: "day",
                        value: 3.14,
                      },
                      includedQuantities: [
                        {
                          billingTerm: {
                            type: "day",
                            value: 3.14,
                          },
                          isInfinite: true,
                          quantity: 3.14,
                        },
                      ],
                      paymentOption: {
                        type: "day",
                        value: 3.14,
                      },
                      pricePerPaymentInUsd: 3.14,
                      prices: [
                        {
                          pricePerPaymentInUsd: 3.14,
                          prices: [
                            {
                              currency: "currency_example",
                              markets: [
                                "markets_example",
                              ],
                              price: 3.14,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  priceInputOption: "perMarket",
                },
                licenseModel: "byol",
                recurrentPrice: {
                  priceInputOption: "perMarket",
                  prices: [
                    {
                      billingTerm: {
                        type: "day",
                        value: 3.14,
                      },
                      paymentOption: {
                        type: "day",
                        value: 3.14,
                      },
                      pricePerPaymentInUsd: 3.14,
                      prices: [
                        {
                          currency: "currency_example",
                          markets: [
                            "markets_example",
                          ],
                          price: 3.14,
                        },
                      ],
                    },
                  ],
                  recurrentPriceMode: "flatRate",
                  userLimits: {
                    max: 3.14,
                    min: 3.14,
                  },
                },
                systemMeterPricing: {
                  price: 3.14,
                  priceInputOption: "perCore",
                  prices: [
                    {
                      currency: "currency_example",
                      markets: [
                        "markets_example",
                      ],
                      price: 3.14,
                    },
                  ],
                },
              },
              privateAudiences: [
                {
                  id: "id_example",
                  label: "label_example",
                  type: "none",
                },
              ],
              product: "product_example",
              resourceName: "resourceName_example",
              softwareReservation: [
                {
                  percentageSave: 3.14,
                  term: 3.14,
                  type: "month",
                },
              ],
              trial: {
                type: "day",
                value: 3.14,
              },
              validations: [
                {
                  schema: "schema_example",
                  code: "businessValidationError",
                  level: "informational",
                  message: "message_example",
                  resourceId: "resourceId_example",
                },
              ],
              visibility: "visible",
            },
          },
        ],
        priceAndAvailabilityCustomMeter: {
          schema: "schema_example",
          customMeters: {
            "key": {
              displayName: "displayName_example",
              price: 3.14,
              unitOfMeasure: "unitOfMeasure_example",
            },
          },
          id: "id_example",
          product: "product_example",
          resourceName: "resourceName_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        priceAndAvailabilityOffer: {
          schema: "schema_example",
          id: "id_example",
          previewAudiences: [
            {
              id: "id_example",
              label: "label_example",
              type: "none",
            },
          ],
          product: "product_example",
          resourceName: "resourceName_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        product: {
          schema: "schema_example",
          alias: "alias_example",
          id: "id_example",
          identity: {
            externalId: "externalId_example",
          },
          lifecycleState: "notAvailable",
          productGroup: "productGroup_example",
          resourceName: "resourceName_example",
          type: "azureApplication",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        property: {
          schema: "schema_example",
          appVersion: "appVersion_example",
          categories: {
            "key": [
              "key_example",
            ],
          },
          cloudIndustries: {
            "key": [
              "key_example",
            ],
          },
          customAmendments: [
            {
              tenants: {
                manualEntries: [
                  {
                    description: "description_example",
                    id: "id_example",
                  },
                ],
              },
              terms: "terms_example",
            },
          ],
          id: "id_example",
          industries: {
            "key": [
              "key_example",
            ],
          },
          kind: "azureSaaS",
          lifecycleState: "notAvailable",
          product: "product_example",
          resourceName: "resourceName_example",
          standardContractAmendment: "standardContractAmendment_example",
          termsConditions: "custom",
          termsOfUse: "termsOfUse_example",
          termsOfUseUrl: "termsOfUseUrl_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        reseller: {
          schema: "schema_example",
          audiences: [
            {
              description: "description_example",
              resourceId: "resourceId_example",
              type: "subscription",
            },
          ],
          id: "id_example",
          product: "product_example",
          resellerChannelState: "resellerChannelState_example",
          resourceName: "resourceName_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        setup: {
          schema: "schema_example",
          accessUrl: "accessUrl_example",
          callToAction: "free",
          id: "id_example",
          product: "product_example",
          requireLicenseForInstall: true,
          resourceName: "resourceName_example",
          sellThroughMicrosoft: true,
          useMicrosoftLicenseManagementService: true,
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        submission: {
          schema: "schema_example",
          created: "created_example",
          deprecationSchedule: {
            schema: "schema_example",
            alternative: {
              plan: {},
              product: {},
            },
            date: "date_example",
            dateOffset: "dateOffset_example",
            reason: "criticalSecurityIssue",
          },
          id: "id_example",
          lifecycleState: "notAvailable",
          product: "product_example",
          resourceName: "resourceName_example",
          result: "succeeded",
          status: "notStarted",
          target: {
            targetId: "targetId_example",
            targetType: "flight",
          },
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        technicalConfiguration: {
          schema: "schema_example",
          azureAdAppId: "azureAdAppId_example",
          azureAdTenantId: "azureAdTenantId_example",
          connectionWebhook: "connectionWebhook_example",
          id: "id_example",
          landingPageUrl: "landingPageUrl_example",
          product: "product_example",
          resourceName: "resourceName_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
      },
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
      eulaType: ,
      eulaUrl: "eulaUrl_example",
      gcpProduct: {
        createTime: new Date('1970-01-01T00:00:00.00Z'),
        derivedDiscoveryState: {
          accessState: "ALLUSERS_ACCESSIBLE",
          searchState: "ADMIN_OVERRIDE_UNSEARCHABLE",
        },
        id: "id_example",
        lastPublishTime: new Date('1970-01-01T00:00:00.00Z'),
        listingSpec: {
          externalAccountSpec: {
            loginUri: "loginUri_example",
            signupUri: "signupUri_example",
            singleSignOnUri: "singleSignOnUri_example",
          },
          listingType: "BillingIntegratedManagedService",
          marketingSpec: {
            description: "description_example",
            displayNames: [
              "displayNames_example",
            ],
            documentationSpecs: [
              {
                description: "description_example",
                title: "title_example",
                uri: "uri_example",
              },
            ],
            eulaUrl: "eulaUrl_example",
            externalLicenseSpecs: [
              {
                description: "description_example",
                uri: "uri_example",
              },
            ],
            externalMarketingUrl: "externalMarketingUrl_example",
            icon: "icon_example",
            searchCategories: [
              "searchCategories_example",
            ],
            searchDescription: "searchDescription_example",
            searchKeywords: [
              "searchKeywords_example",
            ],
            signupUri: "signupUri_example",
            supportSpec: {
              description: "description_example",
              email: "email_example",
              uri: "uri_example",
            },
            tagLine: "tagLine_example",
            title: "title_example",
          },
          purchaseSpec: {
            features: [
              {
                description: "description_example",
                name: "name_example",
                title: "title_example",
              },
            ],
            metrics: [
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
            purchaseOptionSpecs: [
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
          },
          termsSpec: {
            eulaUri: "eulaUri_example",
            inlineEula: {},
            standardEula: {},
          },
        },
        marketplace: "marketplaces/google-cloud",
        name: "name_example",
        revisionCreateTime: new Date('1970-01-01T00:00:00.00Z'),
        revisionId: "revisionId_example",
        service: "service_example",
        serviceConfig: {
          billing: {
            metrics: [
              "metrics_example",
            ],
          },
          metrics: [
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
          name: "name_example",
          producerProjectId: "producerProjectId_example",
          title: "title_example",
        },
        validationSummary: {},
      },
      refundCancellationPolicy: "refundCancellationPolicy_example",
      sellerNotes: "sellerNotes_example",
      snowflakeProduct: {
        comment: {
          string: "string_example",
          valid: true,
        },
        createdOn: {
          time: "time_example",
          valid: true,
        },
        detailedTargetAccounts: {
          string: "string_example",
          valid: true,
        },
        distribution: {
          string: "string_example",
          valid: true,
        },
        globalName: {
          string: "string_example",
          valid: true,
        },
        isApplication: {
          bool: true,
          valid: true,
        },
        isByRequest: {
          bool: true,
          valid: true,
        },
        isLimitedTrial: {
          bool: true,
          valid: true,
        },
        isMonetized: {
          bool: true,
          valid: true,
        },
        isMountlessQueryable: {
          bool: true,
          valid: true,
        },
        isTargeted: {
          bool: true,
          valid: true,
        },
        owner: {
          string: "string_example",
          valid: true,
        },
        ownerRoleType: {
          string: "string_example",
          valid: true,
        },
        profile: {
          string: "string_example",
          valid: true,
        },
        publishedOn: {
          time: "time_example",
          valid: true,
        },
        regions: {
          string: "string_example",
          valid: true,
        },
        rejectedOn: {
          time: "time_example",
          valid: true,
        },
        reviewState: {
          string: "string_example",
          valid: true,
        },
        state: {
          string: "string_example",
          valid: true,
        },
        subtitle: {
          string: "string_example",
          valid: true,
        },
        targetAccounts: {
          string: "string_example",
          valid: true,
        },
        title: {
          string: "string_example",
          valid: true,
        },
        uniformListingLocator: {
          string: "string_example",
          valid: true,
        },
        updatedOn: {
          time: "time_example",
          valid: true,
        },
        name: {
          string: "string_example",
          valid: true,
        },
        organizationProfileName: {
          string: "string_example",
          valid: true,
        },
      },
      stripeProduct: {
        active: true,
        created: 1,
        description: "description_example",
        id: "id_example",
        images: [
          "images_example",
        ],
        livemode: true,
        marketingFeatures: [
          {
            name: "name_example",
          },
        ],
        metadata: {
          "key": "key_example",
        },
        name: "name_example",
        object: "object_example",
        packageDimensions: ,
        shippable: true,
        statementDescriptor: "statementDescriptor_example",
        taxCode: {},
        unitLabel: "unitLabel_example",
        updated: 1,
        url: "url_example",
      },
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
      renewalOfferType: ,
      replacedOfferEndTime: new Date('1970-01-01T00:00:00.00Z'),
      replacedOfferResourceName: "replacedOfferResourceName_example",
      salesforceEntitlementURL: "salesforceEntitlementURL_example",
      salesforceOpportunityId: "salesforceOpportunityId_example",
      testUsageMeteringEndTime: new Date('1970-01-01T00:00:00.00Z'),
      updateMessage: "updateMessage_example",
    },
    name: "name_example",
    organizationID: "organizationID_example",
    partner: "",
    partnerID: "partnerID_example",
    productType: "UNKNOWN",
    service: "DEFAULT",
    status: "status_example",
  },
};

const data = await apiInstance.createProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **WorkloadProduct**| the product to create |
 **orgId** | [**string**] | Organization ID | defaults to undefined


### Return type

**WorkloadProduct**

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

# **deleteProduct**
> string deleteProduct()

The product is soft deleted (marked as DELETED status) in Suger service. only the products with non PUBLIC status are allowed to be deleted.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiDeleteProductRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiDeleteProductRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Product ID
  productId: "productId_example",
};

const data = await apiInstance.deleteProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **productId** | [**string**] | Product ID | defaults to undefined


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
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProduct**
> WorkloadProduct getProduct()

get product by product id

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiGetProductRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiGetProductRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Product ID
  productId: "productId_example",
};

const data = await apiInstance.getProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **productId** | [**string**] | Product ID | defaults to undefined


### Return type

**WorkloadProduct**

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
**404** | Not found error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProductMeteringDimensions**
> Array<MeteringDimension> listProductMeteringDimensions()

list all metering dimensions of the given product

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiListProductMeteringDimensionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiListProductMeteringDimensionsRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Product ID
  productId: "productId_example",
};

const data = await apiInstance.listProductMeteringDimensions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **productId** | [**string**] | Product ID | defaults to undefined


### Return type

**Array<MeteringDimension>**

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
**404** | Not found error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProducts**
> Array<WorkloadProduct> listProducts()

list all products under the given organization

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiListProductsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiListProductsRequest = {
    // Organization ID
  orgId: "orgId_example",
    // filter by partner (optional)
  partner: "AWS",
    // List pagination size, default 100, max value is 1000 (optional)
  limit: 1,
    // List pagination offset, default 0 (optional)
  offset: 1,
};

const data = await apiInstance.listProducts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | [**&#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39; | &#39;STRIPE&#39;**]**Array<&#39;AWS&#39; &#124; &#39;AZURE&#39; &#124; &#39;GCP&#39; &#124; &#39;STRIPE&#39;>** | filter by partner | (optional) defaults to undefined
 **limit** | [**number**] | List pagination size, default 100, max value is 1000 | (optional) defaults to undefined
 **offset** | [**number**] | List pagination offset, default 0 | (optional) defaults to undefined


### Return type

**Array<WorkloadProduct>**

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

# **listProductsByPartner**
> Array<WorkloadProduct> listProductsByPartner()

list all products under the given organization and cloud partner

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiListProductsByPartnerRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiListProductsByPartnerRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Cloud Partner
  partner: "AWS",
};

const data = await apiInstance.listProductsByPartner(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **partner** | [**&#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;**]**Array<&#39;AWS&#39; &#124; &#39;AZURE&#39; &#124; &#39;GCP&#39;>** | Cloud Partner | defaults to undefined


### Return type

**Array<WorkloadProduct>**

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

# **publishProduct**
> WorkloadProduct publishProduct(data)

publish the given product to the public status in the marketplace

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiPublishProductRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiPublishProductRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Product ID
  productId: "productId_example",
    // the product to publish
  data: {
    createdBy: "createdBy_example",
    creationTime: new Date('1970-01-01T00:00:00.00Z'),
    externalID: "externalID_example",
    fulfillmentUrl: "fulfillmentUrl_example",
    id: "id_example",
    info: {
      alibabaProduct: {
        auditFailMsg: "auditFailMsg_example",
        auditStatus: "auditStatus_example",
        auditTime: 1,
        code: "code_example",
        description: "description_example",
        frontCategoryId: 1,
        gmtCreated: 1,
        gmtModified: 1,
        name: "name_example",
        picUrl: "picUrl_example",
        productExtras: {
          productExtra: [
            {
              key: "key_example",
              label: "label_example",
              order: 1,
              type: "type_example",
              values: {},
            },
          ],
        },
        productSkus: {
          productSku: [
            {
              chargeType: "chargeType_example",
              code: "code_example",
              constraints: "constraints_example",
              hidden: true,
              modules: {
                module: [
                  {
                    code: "code_example",
                    id: "id_example",
                    name: "name_example",
                    properties: {
                      property: [
                        {
                          displayUnit: "displayUnit_example",
                          key: "key_example",
                          name: "name_example",
                          propertyValues: {
                            propertyValue: [
                              {
                                displayName: "displayName_example",
                                max: "max_example",
                                min: "min_example",
                                remark: "remark_example",
                                step: "step_example",
                                type: "type_example",
                                value: "value_example",
                              },
                            ],
                          },
                          showType: "showType_example",
                        },
                      ],
                    },
                  },
                ],
              },
              name: "name_example",
              orderPeriods: {
                orderPeriod: [
                  {
                    name: "name_example",
                    periodType: "periodType_example",
                  },
                ],
              },
            },
          ],
        },
        requestId: "requestId_example",
        score: 3.14,
        shopInfo: {
          emails: "emails_example",
          id: 1,
          name: "name_example",
          telephones: {
            telephone: [
              "telephone_example",
            ],
          },
          wangWangs: {
            wangWang: [
              {
                remark: "remark_example",
                userName: "userName_example",
              },
            ],
          },
        },
        shortDescription: "shortDescription_example",
        status: "status_example",
        supplierPk: 1,
        type: "type_example",
        useCount: 1,
      },
      attributes: {
        "key": "key_example",
      },
      awsAmiProduct: {
        description: {
          associatedProducts: {},
          categories: [
            "categories_example",
          ],
          euW8Submitted: true,
          highlights: [
            "highlights_example",
          ],
          longDescription: "longDescription_example",
          manufacturer: "manufacturer_example",
          productCode: "productCode_example",
          productTitle: "productTitle_example",
          registered: true,
          searchKeywords: [
            "searchKeywords_example",
          ],
          shortDescription: "shortDescription_example",
          sku: "sku_example",
          usW9Submitted: true,
          visibility: "Limited",
        },
        dimensions: [
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
        promotionalResources: {
          additionalResources: [
            {
              text: "text_example",
              type: "type_example",
              url: "url_example",
            },
          ],
          logoUrl: "logoUrl_example",
          videoUrls: [
            "videoUrls_example",
          ],
        },
        repositories: [
          {
            type: "type_example",
            url: "url_example",
          },
        ],
        signatureVerificationKeys: [
          {
            publicKey: "publicKey_example",
            publicKeyVersion: 1,
            status: "status_example",
          },
        ],
        supportInformation: {
          description: "description_example",
        },
        versions: [
          {
            creationDate: new Date('1970-01-01T00:00:00.00Z'),
            deliveryOptions: [
              {
                amiAlias: "amiAlias_example",
                fulfillmentUrl: "fulfillmentUrl_example",
                id: "id_example",
                recommendations: {},
                shortDescription: "shortDescription_example",
                sourceId: "sourceId_example",
                title: "title_example",
                type: "type_example",
                visibility: "visibility_example",
              },
            ],
            id: "id_example",
            releaseNotes: "releaseNotes_example",
            versionTitle: "versionTitle_example",
          },
        ],
        dataFeedProductId: "dataFeedProductId_example",
        productId: "productId_example",
      },
      awsContainerProduct: {
        description: {
          associatedProducts: {},
          categories: [
            "categories_example",
          ],
          euW8Submitted: true,
          highlights: [
            "highlights_example",
          ],
          longDescription: "longDescription_example",
          manufacturer: "manufacturer_example",
          productCode: "productCode_example",
          productTitle: "productTitle_example",
          registered: true,
          searchKeywords: [
            "searchKeywords_example",
          ],
          shortDescription: "shortDescription_example",
          sku: "sku_example",
          usW9Submitted: true,
          visibility: "Limited",
        },
        dimensions: [
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
        promotionalResources: {
          additionalResources: [
            {
              text: "text_example",
              type: "type_example",
              url: "url_example",
            },
          ],
          logoUrl: "logoUrl_example",
          videoUrls: [
            "videoUrls_example",
          ],
        },
        repositories: [
          {
            type: "type_example",
            url: "url_example",
          },
        ],
        signatureVerificationKeys: [
          {
            publicKey: "publicKey_example",
            publicKeyVersion: 1,
            status: "status_example",
          },
        ],
        supportInformation: {
          description: "description_example",
        },
        versions: [
          {
            creationDate: new Date('1970-01-01T00:00:00.00Z'),
            deliveryOptions: [
              {
                amiAlias: "amiAlias_example",
                fulfillmentUrl: "fulfillmentUrl_example",
                id: "id_example",
                recommendations: {},
                shortDescription: "shortDescription_example",
                sourceId: "sourceId_example",
                title: "title_example",
                type: "type_example",
                visibility: "visibility_example",
              },
            ],
            id: "id_example",
            releaseNotes: "releaseNotes_example",
            versionTitle: "versionTitle_example",
          },
        ],
        dataFeedProductId: "dataFeedProductId_example",
        productId: "productId_example",
      },
      awsProfessionalServicesProduct: {
        description: {
          associatedProducts: {},
          categories: [
            "categories_example",
          ],
          euW8Submitted: true,
          highlights: [
            "highlights_example",
          ],
          longDescription: "longDescription_example",
          manufacturer: "manufacturer_example",
          productCode: "productCode_example",
          productTitle: "productTitle_example",
          registered: true,
          searchKeywords: [
            "searchKeywords_example",
          ],
          shortDescription: "shortDescription_example",
          sku: "sku_example",
          usW9Submitted: true,
          visibility: "Limited",
        },
        dimensions: [
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
        promotionalResources: {
          additionalResources: [
            {
              text: "text_example",
              type: "type_example",
              url: "url_example",
            },
          ],
          logoUrl: "logoUrl_example",
          videoUrls: [
            "videoUrls_example",
          ],
        },
        repositories: [
          {
            type: "type_example",
            url: "url_example",
          },
        ],
        signatureVerificationKeys: [
          {
            publicKey: "publicKey_example",
            publicKeyVersion: 1,
            status: "status_example",
          },
        ],
        supportInformation: {
          description: "description_example",
        },
        versions: [
          {
            creationDate: new Date('1970-01-01T00:00:00.00Z'),
            deliveryOptions: [
              {
                amiAlias: "amiAlias_example",
                fulfillmentUrl: "fulfillmentUrl_example",
                id: "id_example",
                recommendations: {},
                shortDescription: "shortDescription_example",
                sourceId: "sourceId_example",
                title: "title_example",
                type: "type_example",
                visibility: "visibility_example",
              },
            ],
            id: "id_example",
            releaseNotes: "releaseNotes_example",
            versionTitle: "versionTitle_example",
          },
        ],
        dataFeedProductId: "dataFeedProductId_example",
        productId: "productId_example",
      },
      awsSaasProduct: {
        description: {
          associatedProducts: {},
          categories: [
            "categories_example",
          ],
          euW8Submitted: true,
          highlights: [
            "highlights_example",
          ],
          longDescription: "longDescription_example",
          manufacturer: "manufacturer_example",
          productCode: "productCode_example",
          productTitle: "productTitle_example",
          registered: true,
          searchKeywords: [
            "searchKeywords_example",
          ],
          shortDescription: "shortDescription_example",
          sku: "sku_example",
          usW9Submitted: true,
          visibility: "Limited",
        },
        dimensions: [
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
        promotionalResources: {
          additionalResources: [
            {
              text: "text_example",
              type: "type_example",
              url: "url_example",
            },
          ],
          logoUrl: "logoUrl_example",
          videoUrls: [
            "videoUrls_example",
          ],
        },
        repositories: [
          {
            type: "type_example",
            url: "url_example",
          },
        ],
        signatureVerificationKeys: [
          {
            publicKey: "publicKey_example",
            publicKeyVersion: 1,
            status: "status_example",
          },
        ],
        supportInformation: {
          description: "description_example",
        },
        versions: [
          {
            creationDate: new Date('1970-01-01T00:00:00.00Z'),
            deliveryOptions: [
              {
                amiAlias: "amiAlias_example",
                fulfillmentUrl: "fulfillmentUrl_example",
                id: "id_example",
                recommendations: {},
                shortDescription: "shortDescription_example",
                sourceId: "sourceId_example",
                title: "title_example",
                type: "type_example",
                visibility: "visibility_example",
              },
            ],
            id: "id_example",
            releaseNotes: "releaseNotes_example",
            versionTitle: "versionTitle_example",
          },
        ],
        dataFeedProductId: "dataFeedProductId_example",
        productId: "productId_example",
      },
      awsSnsSubscriptions: [
        {
          endpoint: "endpoint_example",
          protocol: "protocol_example",
          status: "UNKNOWN",
          subscriptionArn: "subscriptionArn_example",
          topicArn: "topicArn_example",
        },
      ],
      azureProduct: {
        availabilities: [
          {
            emailAudiences: [
              {
                description: "description_example",
                id: "id_example",
              },
            ],
            enterpriseLicensing: "enterpriseLicensing_example",
            id: "id_example",
            resourceType: "resourceType_example",
            subscriptionAudiences: [
              {
                description: "description_example",
                id: "id_example",
              },
            ],
            visibility: "visibility_example",
          },
        ],
        branches: [
          {
            currentDraftInstanceID: "currentDraftInstanceID_example",
            friendlyName: "friendlyName_example",
            id: "id_example",
            module: "module_example",
            resourceType: "resourceType_example",
            type: "type_example",
            variantID: "variantID_example",
          },
        ],
        externalIDs: [
          {
            type: "type_example",
            value: "value_example",
          },
        ],
        id: "id_example",
        isModularPublishing: true,
        listings: [
          {
            accessInformation: "accessInformation_example",
            assets: [
              {
                description: "description_example",
                fileName: "fileName_example",
                fileSasUri: "fileSasUri_example",
                friendlyName: "friendlyName_example",
                id: "id_example",
                order: 1,
                publisherDefinedSasUri: "publisherDefinedSasUri_example",
                resourceType: "ListingAsset",
                state: "PendingUpload",
                type: "type_example",
              },
            ],
            compatibleProducts: [
              "compatibleProducts_example",
            ],
            description: "description_example",
            gettingStartedInstructions: "gettingStartedInstructions_example",
            id: "id_example",
            keywords: [
              "keywords_example",
            ],
            languageCode: "languageCode_example",
            listingContacts: [
              {
                email: "email_example",
                name: "name_example",
                phone: "phone_example",
                type: "CustomerSupport",
                uri: "uri_example",
              },
            ],
            listingUris: [
              {
                displayText: "displayText_example",
                subtype: "subtype_example",
                type: "type_example",
                uri: "uri_example",
              },
            ],
            productDisplayName: "productDisplayName_example",
            publisherName: "publisherName_example",
            resourceType: "AzureListing",
            shortDescription: "shortDescription_example",
            summary: "summary_example",
            title: "title_example",
          },
        ],
        name: "name_example",
        packageConfigurations: [
          {
            azureActiveDirectoryApplicationID: "azureActiveDirectoryApplicationID_example",
            azureActiveDirectoryTenantID: "azureActiveDirectoryTenantID_example",
            connectionWebhook: "connectionWebhook_example",
            id: "id_example",
            landingPageUri: "landingPageUri_example",
            resourceType: "AzureSoftwareAsAServicePackageConfiguration",
          },
        ],
        plans: [
          {
            schema: "schema_example",
            id: "id_example",
            lifecycleState: "notAvailable",
            offerPricingType: ,
            plan: "plan_example",
            planName: "planName_example",
            pricing: {
              customMeters: {
                meters: {},
                priceInputOption: "perMarket",
              },
              recurrentPrice: {
                priceInputOption: "perMarket",
                prices: [
                  {
                    billingTerm: {
                      type: "day",
                      value: 3.14,
                    },
                    paymentOption: {
                      type: "day",
                      value: 3.14,
                    },
                    pricePerPaymentInUsd: 3.14,
                    prices: [
                      {
                        currency: "currency_example",
                        markets: [
                          "markets_example",
                        ],
                        price: 3.14,
                      },
                    ],
                  },
                ],
                recurrentPriceMode: "flatRate",
                userLimits: {
                  max: 3.14,
                  min: 3.14,
                },
              },
            },
            product: "product_example",
            resourceName: "resourceName_example",
            softwareReservation: {
              paymentSchedule: {
                type: "day",
                value: 3.14,
              },
              reservationDuration: {
                type: "day",
                value: 3.14,
              },
              vmPrices: {
                patternProperties: {
                  "key": {
                    quantity: 3.14,
                    unitPricePerPaymentPeriodInUsd: 3.14,
                  },
                },
              },
            },
            validations: [
              {
                schema: "schema_example",
                code: "businessValidationError",
                level: "informational",
                message: "message_example",
                resourceId: "resourceId_example",
              },
            ],
            visibility: "visible",
          },
        ],
        properties: [
          {
            additionalCategories: [
              "additionalCategories_example",
            ],
            appVersion: "appVersion_example",
            applicableProducts: [
              "applicableProducts_example",
            ],
            categories: [
              "categories_example",
            ],
            customAmendments: [
              "customAmendments_example",
            ],
            extendedProperties: [
              "extendedProperties_example",
            ],
            globalAmendmentTerms: "globalAmendmentTerms_example",
            hideKeys: [
              "hideKeys_example",
            ],
            id: "id_example",
            industries: [
              "industries_example",
            ],
            leveledCategories: {},
            leveledIndustries: {},
            marketingOnlyChange: true,
            productTags: [
              "productTags_example",
            ],
            resourceType: "resourceType_example",
            submissionVersion: "submissionVersion_example",
            termsOfUse: "termsOfUse_example",
            useEnterpriseContract: true,
          },
        ],
        resourceType: "resourceType_example",
        setup: ,
        submissions: [
          {
            areResourcesReady: true,
            friendlyName: "friendlyName_example",
            id: "id_example",
            pendingUpdateInfo: {
              status: "status_example",
              updateType: "updateType_example",
            },
            publishedTimeInUtc: new Date('1970-01-01T00:00:00.00Z'),
            releaseNumber: 1,
            resourceType: "Submission",
            resources: [
              {
                type: "type_example",
                value: "value_example",
              },
            ],
            state: "Inprogress",
            subState: "InDraft",
            targets: [
              {
                type: "type_example",
                value: "value_example",
              },
            ],
            variantResources: [
              {
                resources: [
                  {
                    type: "type_example",
                    value: "value_example",
                  },
                ],
                variantID: "variantID_example",
              },
            ],
          },
        ],
        variants: [
          {
            azureGovernmentCertifications: [
              {
                title: "title_example",
                uri: "uri_example",
                validationResults: [
                  {
                    errorMessage: "errorMessage_example",
                    memberNames: [
                      "memberNames_example",
                    ],
                  },
                ],
              },
            ],
            cloudAvailabilities: [
              "cloudAvailabilities_example",
            ],
            conversionPaths: "conversionPaths_example",
            extendedProperties: [
              {
                type: "type_example",
                value: "value_example",
              },
            ],
            externalID: "externalID_example",
            featureAvailabilities: [
              {
                customMeters: [
                  {
                    displayName: "displayName_example",
                    id: "id_example",
                    includedBaseQuantities: [
                      {
                        isInfinite: true,
                        quantity: 3.14,
                        recurringUnit: "Monthly",
                      },
                    ],
                    isEnabled: true,
                    priceInUsd: 3.14,
                    uniqueID: "uniqueID_example",
                    unitOfMeasure: "unitOfMeasure_example",
                  },
                ],
                id: "id_example",
                isHidden: true,
                marketStates: [
                  {
                    marketCode: "marketCode_example",
                    state: "Disabled",
                  },
                ],
                markets: [
                  {
                    friendlyName: "friendlyName_example",
                    marketCode: "marketCode_example",
                  },
                ],
                priceSchedules: [
                  {
                    dateTimeRange: {
                      endAt: {
                        dateTimeInUtc: "dateTimeInUtc_example",
                        localizePerMarket: true,
                      },
                      startAt: {
                        dateTimeInUtc: "dateTimeInUtc_example",
                        localizePerMarket: true,
                      },
                    },
                    friendlyName: "friendlyName_example",
                    isBaseSchedule: true,
                    marketCodes: [
                      "marketCodes_example",
                    ],
                    schedules: [
                      {
                        priceCadence: {
                          type: "Month",
                          value: 1,
                        },
                        pricingModel: "Flat",
                        pricingUnits: [
                          {
                            isUnlimitedUnit: true,
                            lowerUnit: 1,
                            name: "sharedcore",
                            unitType: "unitType_example",
                            upperUnit: 1,
                          },
                        ],
                        retailPrice: {
                          currencyCode: "currencyCode_example",
                          openPrice: 3.14,
                          priceTierID: "priceTierID_example",
                        },
                      },
                    ],
                  },
                ],
                properties: [
                  {
                    type: "type_example",
                    value: "value_example",
                  },
                ],
                resourceType: "resourceType_example",
                subscriptionAudiences: [
                  {
                    description: "description_example",
                    id: "id_example",
                  },
                ],
                tenantAudiences: [
                  {
                    description: "description_example",
                    id: "id_example",
                  },
                ],
                trial: {
                  dateTimeRange: {
                    endAt: {
                      dateTimeInUtc: "dateTimeInUtc_example",
                      localizePerMarket: true,
                    },
                    startAt: {
                      dateTimeInUtc: "dateTimeInUtc_example",
                      localizePerMarket: true,
                    },
                  },
                  duration: 1,
                  durationType: "Minute",
                  type: "NoTrial",
                },
                visibility: "Public",
              },
            ],
            friendlyName: "friendlyName_example",
            id: "id_example",
            leadGenID: "leadGenID_example",
            referenceVariantID: "referenceVariantID_example",
            resourceType: "AzureSkuVariant",
            state: "InActive",
          },
        ],
      },
      azureProductResource: {
        customerLeads: {
          schema: "schema_example",
          blobLeadConfiguration: {},
          dynamicsLeadConfiguration: {},
          emailLeadConfiguration: {},
          httpsEndpointLeadConfiguration: {},
          id: "id_example",
          leadDestination: "none",
          marketoLeadConfiguration: {},
          product: "product_example",
          resourceName: "resourceName_example",
          salesforceLeadConfiguration: {},
          tableLeadConfiguration: {},
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        listing: {
          schema: "schema_example",
          cloudSolutionProviderContact: {
            email: "email_example",
            name: "name_example",
            phone: "phone_example",
            url: "url_example",
          },
          cloudSolutionProviderMarketingMaterials: "cloudSolutionProviderMarketingMaterials_example",
          description: "description_example",
          engineeringContact: {
            email: "email_example",
            name: "name_example",
            phone: "phone_example",
            url: "url_example",
          },
          generalLinks: [
            {
              displayText: "displayText_example",
              link: "link_example",
            },
          ],
          gettingStartedInstructions: "gettingStartedInstructions_example",
          gloabalSupportWebsite: "gloabalSupportWebsite_example",
          governmentSupportWebsite: "governmentSupportWebsite_example",
          id: "id_example",
          kind: "azureSaaS",
          languageId: "languageId_example",
          lifecycleState: ,
          privacyPolicyLink: "privacyPolicyLink_example",
          product: "product_example",
          resourceName: "resourceName_example",
          searchKeywords: [
            "searchKeywords_example",
          ],
          searchResultSummary: "searchResultSummary_example",
          shortDescription: "shortDescription_example",
          supportContact: {
            email: "email_example",
            name: "name_example",
            phone: "phone_example",
            url: "url_example",
          },
          title: "title_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        listingAssets: [
          {
            schema: "schema_example",
            description: "description_example",
            displayOrder: 1,
            fileName: "fileName_example",
            friendlyName: "friendlyName_example",
            id: "id_example",
            kind: "azure",
            languageId: "languageId_example",
            lifecycleState: ,
            listing: "listing_example",
            product: "product_example",
            resourceName: "resourceName_example",
            type: "azureLogoSmall",
            url: "url_example",
            validations: [
              {
                schema: "schema_example",
                code: "businessValidationError",
                level: "informational",
                message: "message_example",
                resourceId: "resourceId_example",
              },
            ],
          },
        ],
        plans: [
          {
            plan: {
              schema: "schema_example",
              alias: "alias_example",
              azureGovernmentCertifications: [
                {
                  link: "link_example",
                  name: "name_example",
                },
              ],
              azureRegions: [
                "azureRegions_example",
              ],
              deprecationSchedule: {
                schema: "schema_example",
                alternative: {
                  plan: {},
                  product: {},
                },
                date: "date_example",
                dateOffset: "dateOffset_example",
                reason: "criticalSecurityIssue",
              },
              displayRank: 1,
              id: "id_example",
              identity: {
                externalId: "externalId_example",
              },
              lifecycleState: "notAvailable",
              product: "product_example",
              resourceName: "resourceName_example",
              subtype: "managedApplication",
              validations: [
                {
                  schema: "schema_example",
                  code: "businessValidationError",
                  level: "informational",
                  message: "message_example",
                  resourceId: "resourceId_example",
                },
              ],
            },
            planListing: {
              schema: "schema_example",
              description: "description_example",
              id: "id_example",
              kind: "azureVM-plan",
              languageId: "languageId_example",
              lifecycleState: "notAvailable",
              name: "name_example",
              plan: "plan_example",
              product: "product_example",
              resourceName: "resourceName_example",
              summary: "summary_example",
              validations: [
                {
                  schema: "schema_example",
                  code: "businessValidationError",
                  level: "informational",
                  message: "message_example",
                  resourceId: "resourceId_example",
                },
              ],
            },
            priceAndAvailabilityPlan: {
              schema: "schema_example",
              audience: "public",
              billingTag: "billingTag_example",
              id: "id_example",
              markets: [
                "markets_example",
              ],
              meterDefine: "meterDefine_example",
              plan: "plan_example",
              pricing: {
                corePricing: {
                  price: 3.14,
                  priceInputOption: "free",
                  pricePerCore: 3.14,
                  pricePerCoreSize: {},
                  prices: [
                    {
                      currency: "currency_example",
                      markets: [
                        "markets_example",
                      ],
                      price: 3.14,
                    },
                  ],
                },
                customMeters: {
                  meters: {
                    "key": {
                      billingTerm: {
                        type: "day",
                        value: 3.14,
                      },
                      includedQuantities: [
                        {
                          billingTerm: {
                            type: "day",
                            value: 3.14,
                          },
                          isInfinite: true,
                          quantity: 3.14,
                        },
                      ],
                      paymentOption: {
                        type: "day",
                        value: 3.14,
                      },
                      pricePerPaymentInUsd: 3.14,
                      prices: [
                        {
                          pricePerPaymentInUsd: 3.14,
                          prices: [
                            {
                              currency: "currency_example",
                              markets: [
                                "markets_example",
                              ],
                              price: 3.14,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  priceInputOption: "perMarket",
                },
                licenseModel: "byol",
                recurrentPrice: {
                  priceInputOption: "perMarket",
                  prices: [
                    {
                      billingTerm: {
                        type: "day",
                        value: 3.14,
                      },
                      paymentOption: {
                        type: "day",
                        value: 3.14,
                      },
                      pricePerPaymentInUsd: 3.14,
                      prices: [
                        {
                          currency: "currency_example",
                          markets: [
                            "markets_example",
                          ],
                          price: 3.14,
                        },
                      ],
                    },
                  ],
                  recurrentPriceMode: "flatRate",
                  userLimits: {
                    max: 3.14,
                    min: 3.14,
                  },
                },
                systemMeterPricing: {
                  price: 3.14,
                  priceInputOption: "perCore",
                  prices: [
                    {
                      currency: "currency_example",
                      markets: [
                        "markets_example",
                      ],
                      price: 3.14,
                    },
                  ],
                },
              },
              privateAudiences: [
                {
                  id: "id_example",
                  label: "label_example",
                  type: "none",
                },
              ],
              product: "product_example",
              resourceName: "resourceName_example",
              softwareReservation: [
                {
                  percentageSave: 3.14,
                  term: 3.14,
                  type: "month",
                },
              ],
              trial: {
                type: "day",
                value: 3.14,
              },
              validations: [
                {
                  schema: "schema_example",
                  code: "businessValidationError",
                  level: "informational",
                  message: "message_example",
                  resourceId: "resourceId_example",
                },
              ],
              visibility: "visible",
            },
          },
        ],
        priceAndAvailabilityCustomMeter: {
          schema: "schema_example",
          customMeters: {
            "key": {
              displayName: "displayName_example",
              price: 3.14,
              unitOfMeasure: "unitOfMeasure_example",
            },
          },
          id: "id_example",
          product: "product_example",
          resourceName: "resourceName_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        priceAndAvailabilityOffer: {
          schema: "schema_example",
          id: "id_example",
          previewAudiences: [
            {
              id: "id_example",
              label: "label_example",
              type: "none",
            },
          ],
          product: "product_example",
          resourceName: "resourceName_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        product: {
          schema: "schema_example",
          alias: "alias_example",
          id: "id_example",
          identity: {
            externalId: "externalId_example",
          },
          lifecycleState: "notAvailable",
          productGroup: "productGroup_example",
          resourceName: "resourceName_example",
          type: "azureApplication",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        property: {
          schema: "schema_example",
          appVersion: "appVersion_example",
          categories: {
            "key": [
              "key_example",
            ],
          },
          cloudIndustries: {
            "key": [
              "key_example",
            ],
          },
          customAmendments: [
            {
              tenants: {
                manualEntries: [
                  {
                    description: "description_example",
                    id: "id_example",
                  },
                ],
              },
              terms: "terms_example",
            },
          ],
          id: "id_example",
          industries: {
            "key": [
              "key_example",
            ],
          },
          kind: "azureSaaS",
          lifecycleState: "notAvailable",
          product: "product_example",
          resourceName: "resourceName_example",
          standardContractAmendment: "standardContractAmendment_example",
          termsConditions: "custom",
          termsOfUse: "termsOfUse_example",
          termsOfUseUrl: "termsOfUseUrl_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        reseller: {
          schema: "schema_example",
          audiences: [
            {
              description: "description_example",
              resourceId: "resourceId_example",
              type: "subscription",
            },
          ],
          id: "id_example",
          product: "product_example",
          resellerChannelState: "resellerChannelState_example",
          resourceName: "resourceName_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        setup: {
          schema: "schema_example",
          accessUrl: "accessUrl_example",
          callToAction: "free",
          id: "id_example",
          product: "product_example",
          requireLicenseForInstall: true,
          resourceName: "resourceName_example",
          sellThroughMicrosoft: true,
          useMicrosoftLicenseManagementService: true,
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        submission: {
          schema: "schema_example",
          created: "created_example",
          deprecationSchedule: {
            schema: "schema_example",
            alternative: {
              plan: {},
              product: {},
            },
            date: "date_example",
            dateOffset: "dateOffset_example",
            reason: "criticalSecurityIssue",
          },
          id: "id_example",
          lifecycleState: "notAvailable",
          product: "product_example",
          resourceName: "resourceName_example",
          result: "succeeded",
          status: "notStarted",
          target: {
            targetId: "targetId_example",
            targetType: "flight",
          },
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        technicalConfiguration: {
          schema: "schema_example",
          azureAdAppId: "azureAdAppId_example",
          azureAdTenantId: "azureAdTenantId_example",
          connectionWebhook: "connectionWebhook_example",
          id: "id_example",
          landingPageUrl: "landingPageUrl_example",
          product: "product_example",
          resourceName: "resourceName_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
      },
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
      eulaType: ,
      eulaUrl: "eulaUrl_example",
      gcpProduct: {
        createTime: new Date('1970-01-01T00:00:00.00Z'),
        derivedDiscoveryState: {
          accessState: "ALLUSERS_ACCESSIBLE",
          searchState: "ADMIN_OVERRIDE_UNSEARCHABLE",
        },
        id: "id_example",
        lastPublishTime: new Date('1970-01-01T00:00:00.00Z'),
        listingSpec: {
          externalAccountSpec: {
            loginUri: "loginUri_example",
            signupUri: "signupUri_example",
            singleSignOnUri: "singleSignOnUri_example",
          },
          listingType: "BillingIntegratedManagedService",
          marketingSpec: {
            description: "description_example",
            displayNames: [
              "displayNames_example",
            ],
            documentationSpecs: [
              {
                description: "description_example",
                title: "title_example",
                uri: "uri_example",
              },
            ],
            eulaUrl: "eulaUrl_example",
            externalLicenseSpecs: [
              {
                description: "description_example",
                uri: "uri_example",
              },
            ],
            externalMarketingUrl: "externalMarketingUrl_example",
            icon: "icon_example",
            searchCategories: [
              "searchCategories_example",
            ],
            searchDescription: "searchDescription_example",
            searchKeywords: [
              "searchKeywords_example",
            ],
            signupUri: "signupUri_example",
            supportSpec: {
              description: "description_example",
              email: "email_example",
              uri: "uri_example",
            },
            tagLine: "tagLine_example",
            title: "title_example",
          },
          purchaseSpec: {
            features: [
              {
                description: "description_example",
                name: "name_example",
                title: "title_example",
              },
            ],
            metrics: [
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
            purchaseOptionSpecs: [
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
          },
          termsSpec: {
            eulaUri: "eulaUri_example",
            inlineEula: {},
            standardEula: {},
          },
        },
        marketplace: "marketplaces/google-cloud",
        name: "name_example",
        revisionCreateTime: new Date('1970-01-01T00:00:00.00Z'),
        revisionId: "revisionId_example",
        service: "service_example",
        serviceConfig: {
          billing: {
            metrics: [
              "metrics_example",
            ],
          },
          metrics: [
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
          name: "name_example",
          producerProjectId: "producerProjectId_example",
          title: "title_example",
        },
        validationSummary: {},
      },
      refundCancellationPolicy: "refundCancellationPolicy_example",
      sellerNotes: "sellerNotes_example",
      snowflakeProduct: {
        comment: {
          string: "string_example",
          valid: true,
        },
        createdOn: {
          time: "time_example",
          valid: true,
        },
        detailedTargetAccounts: {
          string: "string_example",
          valid: true,
        },
        distribution: {
          string: "string_example",
          valid: true,
        },
        globalName: {
          string: "string_example",
          valid: true,
        },
        isApplication: {
          bool: true,
          valid: true,
        },
        isByRequest: {
          bool: true,
          valid: true,
        },
        isLimitedTrial: {
          bool: true,
          valid: true,
        },
        isMonetized: {
          bool: true,
          valid: true,
        },
        isMountlessQueryable: {
          bool: true,
          valid: true,
        },
        isTargeted: {
          bool: true,
          valid: true,
        },
        owner: {
          string: "string_example",
          valid: true,
        },
        ownerRoleType: {
          string: "string_example",
          valid: true,
        },
        profile: {
          string: "string_example",
          valid: true,
        },
        publishedOn: {
          time: "time_example",
          valid: true,
        },
        regions: {
          string: "string_example",
          valid: true,
        },
        rejectedOn: {
          time: "time_example",
          valid: true,
        },
        reviewState: {
          string: "string_example",
          valid: true,
        },
        state: {
          string: "string_example",
          valid: true,
        },
        subtitle: {
          string: "string_example",
          valid: true,
        },
        targetAccounts: {
          string: "string_example",
          valid: true,
        },
        title: {
          string: "string_example",
          valid: true,
        },
        uniformListingLocator: {
          string: "string_example",
          valid: true,
        },
        updatedOn: {
          time: "time_example",
          valid: true,
        },
        name: {
          string: "string_example",
          valid: true,
        },
        organizationProfileName: {
          string: "string_example",
          valid: true,
        },
      },
      stripeProduct: {
        active: true,
        created: 1,
        description: "description_example",
        id: "id_example",
        images: [
          "images_example",
        ],
        livemode: true,
        marketingFeatures: [
          {
            name: "name_example",
          },
        ],
        metadata: {
          "key": "key_example",
        },
        name: "name_example",
        object: "object_example",
        packageDimensions: ,
        shippable: true,
        statementDescriptor: "statementDescriptor_example",
        taxCode: {},
        unitLabel: "unitLabel_example",
        updated: 1,
        url: "url_example",
      },
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
      renewalOfferType: ,
      replacedOfferEndTime: new Date('1970-01-01T00:00:00.00Z'),
      replacedOfferResourceName: "replacedOfferResourceName_example",
      salesforceEntitlementURL: "salesforceEntitlementURL_example",
      salesforceOpportunityId: "salesforceOpportunityId_example",
      testUsageMeteringEndTime: new Date('1970-01-01T00:00:00.00Z'),
      updateMessage: "updateMessage_example",
    },
    name: "name_example",
    organizationID: "organizationID_example",
    partner: "",
    partnerID: "partnerID_example",
    productType: "UNKNOWN",
    service: "DEFAULT",
    status: "status_example",
  },
};

const data = await apiInstance.publishProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **WorkloadProduct**| the product to publish |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **productId** | [**string**] | Product ID | defaults to undefined


### Return type

**WorkloadProduct**

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
**404** | Not found error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateProduct**
> WorkloadProduct updateProduct(data)

update product info, no price update is allowed via this API.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiUpdateProductRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiUpdateProductRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Product ID
  productId: "productId_example",
    // the product to update
  data: {
    createdBy: "createdBy_example",
    creationTime: new Date('1970-01-01T00:00:00.00Z'),
    externalID: "externalID_example",
    fulfillmentUrl: "fulfillmentUrl_example",
    id: "id_example",
    info: {
      alibabaProduct: {
        auditFailMsg: "auditFailMsg_example",
        auditStatus: "auditStatus_example",
        auditTime: 1,
        code: "code_example",
        description: "description_example",
        frontCategoryId: 1,
        gmtCreated: 1,
        gmtModified: 1,
        name: "name_example",
        picUrl: "picUrl_example",
        productExtras: {
          productExtra: [
            {
              key: "key_example",
              label: "label_example",
              order: 1,
              type: "type_example",
              values: {},
            },
          ],
        },
        productSkus: {
          productSku: [
            {
              chargeType: "chargeType_example",
              code: "code_example",
              constraints: "constraints_example",
              hidden: true,
              modules: {
                module: [
                  {
                    code: "code_example",
                    id: "id_example",
                    name: "name_example",
                    properties: {
                      property: [
                        {
                          displayUnit: "displayUnit_example",
                          key: "key_example",
                          name: "name_example",
                          propertyValues: {
                            propertyValue: [
                              {
                                displayName: "displayName_example",
                                max: "max_example",
                                min: "min_example",
                                remark: "remark_example",
                                step: "step_example",
                                type: "type_example",
                                value: "value_example",
                              },
                            ],
                          },
                          showType: "showType_example",
                        },
                      ],
                    },
                  },
                ],
              },
              name: "name_example",
              orderPeriods: {
                orderPeriod: [
                  {
                    name: "name_example",
                    periodType: "periodType_example",
                  },
                ],
              },
            },
          ],
        },
        requestId: "requestId_example",
        score: 3.14,
        shopInfo: {
          emails: "emails_example",
          id: 1,
          name: "name_example",
          telephones: {
            telephone: [
              "telephone_example",
            ],
          },
          wangWangs: {
            wangWang: [
              {
                remark: "remark_example",
                userName: "userName_example",
              },
            ],
          },
        },
        shortDescription: "shortDescription_example",
        status: "status_example",
        supplierPk: 1,
        type: "type_example",
        useCount: 1,
      },
      attributes: {
        "key": "key_example",
      },
      awsAmiProduct: {
        description: {
          associatedProducts: {},
          categories: [
            "categories_example",
          ],
          euW8Submitted: true,
          highlights: [
            "highlights_example",
          ],
          longDescription: "longDescription_example",
          manufacturer: "manufacturer_example",
          productCode: "productCode_example",
          productTitle: "productTitle_example",
          registered: true,
          searchKeywords: [
            "searchKeywords_example",
          ],
          shortDescription: "shortDescription_example",
          sku: "sku_example",
          usW9Submitted: true,
          visibility: "Limited",
        },
        dimensions: [
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
        promotionalResources: {
          additionalResources: [
            {
              text: "text_example",
              type: "type_example",
              url: "url_example",
            },
          ],
          logoUrl: "logoUrl_example",
          videoUrls: [
            "videoUrls_example",
          ],
        },
        repositories: [
          {
            type: "type_example",
            url: "url_example",
          },
        ],
        signatureVerificationKeys: [
          {
            publicKey: "publicKey_example",
            publicKeyVersion: 1,
            status: "status_example",
          },
        ],
        supportInformation: {
          description: "description_example",
        },
        versions: [
          {
            creationDate: new Date('1970-01-01T00:00:00.00Z'),
            deliveryOptions: [
              {
                amiAlias: "amiAlias_example",
                fulfillmentUrl: "fulfillmentUrl_example",
                id: "id_example",
                recommendations: {},
                shortDescription: "shortDescription_example",
                sourceId: "sourceId_example",
                title: "title_example",
                type: "type_example",
                visibility: "visibility_example",
              },
            ],
            id: "id_example",
            releaseNotes: "releaseNotes_example",
            versionTitle: "versionTitle_example",
          },
        ],
        dataFeedProductId: "dataFeedProductId_example",
        productId: "productId_example",
      },
      awsContainerProduct: {
        description: {
          associatedProducts: {},
          categories: [
            "categories_example",
          ],
          euW8Submitted: true,
          highlights: [
            "highlights_example",
          ],
          longDescription: "longDescription_example",
          manufacturer: "manufacturer_example",
          productCode: "productCode_example",
          productTitle: "productTitle_example",
          registered: true,
          searchKeywords: [
            "searchKeywords_example",
          ],
          shortDescription: "shortDescription_example",
          sku: "sku_example",
          usW9Submitted: true,
          visibility: "Limited",
        },
        dimensions: [
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
        promotionalResources: {
          additionalResources: [
            {
              text: "text_example",
              type: "type_example",
              url: "url_example",
            },
          ],
          logoUrl: "logoUrl_example",
          videoUrls: [
            "videoUrls_example",
          ],
        },
        repositories: [
          {
            type: "type_example",
            url: "url_example",
          },
        ],
        signatureVerificationKeys: [
          {
            publicKey: "publicKey_example",
            publicKeyVersion: 1,
            status: "status_example",
          },
        ],
        supportInformation: {
          description: "description_example",
        },
        versions: [
          {
            creationDate: new Date('1970-01-01T00:00:00.00Z'),
            deliveryOptions: [
              {
                amiAlias: "amiAlias_example",
                fulfillmentUrl: "fulfillmentUrl_example",
                id: "id_example",
                recommendations: {},
                shortDescription: "shortDescription_example",
                sourceId: "sourceId_example",
                title: "title_example",
                type: "type_example",
                visibility: "visibility_example",
              },
            ],
            id: "id_example",
            releaseNotes: "releaseNotes_example",
            versionTitle: "versionTitle_example",
          },
        ],
        dataFeedProductId: "dataFeedProductId_example",
        productId: "productId_example",
      },
      awsProfessionalServicesProduct: {
        description: {
          associatedProducts: {},
          categories: [
            "categories_example",
          ],
          euW8Submitted: true,
          highlights: [
            "highlights_example",
          ],
          longDescription: "longDescription_example",
          manufacturer: "manufacturer_example",
          productCode: "productCode_example",
          productTitle: "productTitle_example",
          registered: true,
          searchKeywords: [
            "searchKeywords_example",
          ],
          shortDescription: "shortDescription_example",
          sku: "sku_example",
          usW9Submitted: true,
          visibility: "Limited",
        },
        dimensions: [
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
        promotionalResources: {
          additionalResources: [
            {
              text: "text_example",
              type: "type_example",
              url: "url_example",
            },
          ],
          logoUrl: "logoUrl_example",
          videoUrls: [
            "videoUrls_example",
          ],
        },
        repositories: [
          {
            type: "type_example",
            url: "url_example",
          },
        ],
        signatureVerificationKeys: [
          {
            publicKey: "publicKey_example",
            publicKeyVersion: 1,
            status: "status_example",
          },
        ],
        supportInformation: {
          description: "description_example",
        },
        versions: [
          {
            creationDate: new Date('1970-01-01T00:00:00.00Z'),
            deliveryOptions: [
              {
                amiAlias: "amiAlias_example",
                fulfillmentUrl: "fulfillmentUrl_example",
                id: "id_example",
                recommendations: {},
                shortDescription: "shortDescription_example",
                sourceId: "sourceId_example",
                title: "title_example",
                type: "type_example",
                visibility: "visibility_example",
              },
            ],
            id: "id_example",
            releaseNotes: "releaseNotes_example",
            versionTitle: "versionTitle_example",
          },
        ],
        dataFeedProductId: "dataFeedProductId_example",
        productId: "productId_example",
      },
      awsSaasProduct: {
        description: {
          associatedProducts: {},
          categories: [
            "categories_example",
          ],
          euW8Submitted: true,
          highlights: [
            "highlights_example",
          ],
          longDescription: "longDescription_example",
          manufacturer: "manufacturer_example",
          productCode: "productCode_example",
          productTitle: "productTitle_example",
          registered: true,
          searchKeywords: [
            "searchKeywords_example",
          ],
          shortDescription: "shortDescription_example",
          sku: "sku_example",
          usW9Submitted: true,
          visibility: "Limited",
        },
        dimensions: [
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
        promotionalResources: {
          additionalResources: [
            {
              text: "text_example",
              type: "type_example",
              url: "url_example",
            },
          ],
          logoUrl: "logoUrl_example",
          videoUrls: [
            "videoUrls_example",
          ],
        },
        repositories: [
          {
            type: "type_example",
            url: "url_example",
          },
        ],
        signatureVerificationKeys: [
          {
            publicKey: "publicKey_example",
            publicKeyVersion: 1,
            status: "status_example",
          },
        ],
        supportInformation: {
          description: "description_example",
        },
        versions: [
          {
            creationDate: new Date('1970-01-01T00:00:00.00Z'),
            deliveryOptions: [
              {
                amiAlias: "amiAlias_example",
                fulfillmentUrl: "fulfillmentUrl_example",
                id: "id_example",
                recommendations: {},
                shortDescription: "shortDescription_example",
                sourceId: "sourceId_example",
                title: "title_example",
                type: "type_example",
                visibility: "visibility_example",
              },
            ],
            id: "id_example",
            releaseNotes: "releaseNotes_example",
            versionTitle: "versionTitle_example",
          },
        ],
        dataFeedProductId: "dataFeedProductId_example",
        productId: "productId_example",
      },
      awsSnsSubscriptions: [
        {
          endpoint: "endpoint_example",
          protocol: "protocol_example",
          status: "UNKNOWN",
          subscriptionArn: "subscriptionArn_example",
          topicArn: "topicArn_example",
        },
      ],
      azureProduct: {
        availabilities: [
          {
            emailAudiences: [
              {
                description: "description_example",
                id: "id_example",
              },
            ],
            enterpriseLicensing: "enterpriseLicensing_example",
            id: "id_example",
            resourceType: "resourceType_example",
            subscriptionAudiences: [
              {
                description: "description_example",
                id: "id_example",
              },
            ],
            visibility: "visibility_example",
          },
        ],
        branches: [
          {
            currentDraftInstanceID: "currentDraftInstanceID_example",
            friendlyName: "friendlyName_example",
            id: "id_example",
            module: "module_example",
            resourceType: "resourceType_example",
            type: "type_example",
            variantID: "variantID_example",
          },
        ],
        externalIDs: [
          {
            type: "type_example",
            value: "value_example",
          },
        ],
        id: "id_example",
        isModularPublishing: true,
        listings: [
          {
            accessInformation: "accessInformation_example",
            assets: [
              {
                description: "description_example",
                fileName: "fileName_example",
                fileSasUri: "fileSasUri_example",
                friendlyName: "friendlyName_example",
                id: "id_example",
                order: 1,
                publisherDefinedSasUri: "publisherDefinedSasUri_example",
                resourceType: "ListingAsset",
                state: "PendingUpload",
                type: "type_example",
              },
            ],
            compatibleProducts: [
              "compatibleProducts_example",
            ],
            description: "description_example",
            gettingStartedInstructions: "gettingStartedInstructions_example",
            id: "id_example",
            keywords: [
              "keywords_example",
            ],
            languageCode: "languageCode_example",
            listingContacts: [
              {
                email: "email_example",
                name: "name_example",
                phone: "phone_example",
                type: "CustomerSupport",
                uri: "uri_example",
              },
            ],
            listingUris: [
              {
                displayText: "displayText_example",
                subtype: "subtype_example",
                type: "type_example",
                uri: "uri_example",
              },
            ],
            productDisplayName: "productDisplayName_example",
            publisherName: "publisherName_example",
            resourceType: "AzureListing",
            shortDescription: "shortDescription_example",
            summary: "summary_example",
            title: "title_example",
          },
        ],
        name: "name_example",
        packageConfigurations: [
          {
            azureActiveDirectoryApplicationID: "azureActiveDirectoryApplicationID_example",
            azureActiveDirectoryTenantID: "azureActiveDirectoryTenantID_example",
            connectionWebhook: "connectionWebhook_example",
            id: "id_example",
            landingPageUri: "landingPageUri_example",
            resourceType: "AzureSoftwareAsAServicePackageConfiguration",
          },
        ],
        plans: [
          {
            schema: "schema_example",
            id: "id_example",
            lifecycleState: "notAvailable",
            offerPricingType: ,
            plan: "plan_example",
            planName: "planName_example",
            pricing: {
              customMeters: {
                meters: {},
                priceInputOption: "perMarket",
              },
              recurrentPrice: {
                priceInputOption: "perMarket",
                prices: [
                  {
                    billingTerm: {
                      type: "day",
                      value: 3.14,
                    },
                    paymentOption: {
                      type: "day",
                      value: 3.14,
                    },
                    pricePerPaymentInUsd: 3.14,
                    prices: [
                      {
                        currency: "currency_example",
                        markets: [
                          "markets_example",
                        ],
                        price: 3.14,
                      },
                    ],
                  },
                ],
                recurrentPriceMode: "flatRate",
                userLimits: {
                  max: 3.14,
                  min: 3.14,
                },
              },
            },
            product: "product_example",
            resourceName: "resourceName_example",
            softwareReservation: {
              paymentSchedule: {
                type: "day",
                value: 3.14,
              },
              reservationDuration: {
                type: "day",
                value: 3.14,
              },
              vmPrices: {
                patternProperties: {
                  "key": {
                    quantity: 3.14,
                    unitPricePerPaymentPeriodInUsd: 3.14,
                  },
                },
              },
            },
            validations: [
              {
                schema: "schema_example",
                code: "businessValidationError",
                level: "informational",
                message: "message_example",
                resourceId: "resourceId_example",
              },
            ],
            visibility: "visible",
          },
        ],
        properties: [
          {
            additionalCategories: [
              "additionalCategories_example",
            ],
            appVersion: "appVersion_example",
            applicableProducts: [
              "applicableProducts_example",
            ],
            categories: [
              "categories_example",
            ],
            customAmendments: [
              "customAmendments_example",
            ],
            extendedProperties: [
              "extendedProperties_example",
            ],
            globalAmendmentTerms: "globalAmendmentTerms_example",
            hideKeys: [
              "hideKeys_example",
            ],
            id: "id_example",
            industries: [
              "industries_example",
            ],
            leveledCategories: {},
            leveledIndustries: {},
            marketingOnlyChange: true,
            productTags: [
              "productTags_example",
            ],
            resourceType: "resourceType_example",
            submissionVersion: "submissionVersion_example",
            termsOfUse: "termsOfUse_example",
            useEnterpriseContract: true,
          },
        ],
        resourceType: "resourceType_example",
        setup: ,
        submissions: [
          {
            areResourcesReady: true,
            friendlyName: "friendlyName_example",
            id: "id_example",
            pendingUpdateInfo: {
              status: "status_example",
              updateType: "updateType_example",
            },
            publishedTimeInUtc: new Date('1970-01-01T00:00:00.00Z'),
            releaseNumber: 1,
            resourceType: "Submission",
            resources: [
              {
                type: "type_example",
                value: "value_example",
              },
            ],
            state: "Inprogress",
            subState: "InDraft",
            targets: [
              {
                type: "type_example",
                value: "value_example",
              },
            ],
            variantResources: [
              {
                resources: [
                  {
                    type: "type_example",
                    value: "value_example",
                  },
                ],
                variantID: "variantID_example",
              },
            ],
          },
        ],
        variants: [
          {
            azureGovernmentCertifications: [
              {
                title: "title_example",
                uri: "uri_example",
                validationResults: [
                  {
                    errorMessage: "errorMessage_example",
                    memberNames: [
                      "memberNames_example",
                    ],
                  },
                ],
              },
            ],
            cloudAvailabilities: [
              "cloudAvailabilities_example",
            ],
            conversionPaths: "conversionPaths_example",
            extendedProperties: [
              {
                type: "type_example",
                value: "value_example",
              },
            ],
            externalID: "externalID_example",
            featureAvailabilities: [
              {
                customMeters: [
                  {
                    displayName: "displayName_example",
                    id: "id_example",
                    includedBaseQuantities: [
                      {
                        isInfinite: true,
                        quantity: 3.14,
                        recurringUnit: "Monthly",
                      },
                    ],
                    isEnabled: true,
                    priceInUsd: 3.14,
                    uniqueID: "uniqueID_example",
                    unitOfMeasure: "unitOfMeasure_example",
                  },
                ],
                id: "id_example",
                isHidden: true,
                marketStates: [
                  {
                    marketCode: "marketCode_example",
                    state: "Disabled",
                  },
                ],
                markets: [
                  {
                    friendlyName: "friendlyName_example",
                    marketCode: "marketCode_example",
                  },
                ],
                priceSchedules: [
                  {
                    dateTimeRange: {
                      endAt: {
                        dateTimeInUtc: "dateTimeInUtc_example",
                        localizePerMarket: true,
                      },
                      startAt: {
                        dateTimeInUtc: "dateTimeInUtc_example",
                        localizePerMarket: true,
                      },
                    },
                    friendlyName: "friendlyName_example",
                    isBaseSchedule: true,
                    marketCodes: [
                      "marketCodes_example",
                    ],
                    schedules: [
                      {
                        priceCadence: {
                          type: "Month",
                          value: 1,
                        },
                        pricingModel: "Flat",
                        pricingUnits: [
                          {
                            isUnlimitedUnit: true,
                            lowerUnit: 1,
                            name: "sharedcore",
                            unitType: "unitType_example",
                            upperUnit: 1,
                          },
                        ],
                        retailPrice: {
                          currencyCode: "currencyCode_example",
                          openPrice: 3.14,
                          priceTierID: "priceTierID_example",
                        },
                      },
                    ],
                  },
                ],
                properties: [
                  {
                    type: "type_example",
                    value: "value_example",
                  },
                ],
                resourceType: "resourceType_example",
                subscriptionAudiences: [
                  {
                    description: "description_example",
                    id: "id_example",
                  },
                ],
                tenantAudiences: [
                  {
                    description: "description_example",
                    id: "id_example",
                  },
                ],
                trial: {
                  dateTimeRange: {
                    endAt: {
                      dateTimeInUtc: "dateTimeInUtc_example",
                      localizePerMarket: true,
                    },
                    startAt: {
                      dateTimeInUtc: "dateTimeInUtc_example",
                      localizePerMarket: true,
                    },
                  },
                  duration: 1,
                  durationType: "Minute",
                  type: "NoTrial",
                },
                visibility: "Public",
              },
            ],
            friendlyName: "friendlyName_example",
            id: "id_example",
            leadGenID: "leadGenID_example",
            referenceVariantID: "referenceVariantID_example",
            resourceType: "AzureSkuVariant",
            state: "InActive",
          },
        ],
      },
      azureProductResource: {
        customerLeads: {
          schema: "schema_example",
          blobLeadConfiguration: {},
          dynamicsLeadConfiguration: {},
          emailLeadConfiguration: {},
          httpsEndpointLeadConfiguration: {},
          id: "id_example",
          leadDestination: "none",
          marketoLeadConfiguration: {},
          product: "product_example",
          resourceName: "resourceName_example",
          salesforceLeadConfiguration: {},
          tableLeadConfiguration: {},
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        listing: {
          schema: "schema_example",
          cloudSolutionProviderContact: {
            email: "email_example",
            name: "name_example",
            phone: "phone_example",
            url: "url_example",
          },
          cloudSolutionProviderMarketingMaterials: "cloudSolutionProviderMarketingMaterials_example",
          description: "description_example",
          engineeringContact: {
            email: "email_example",
            name: "name_example",
            phone: "phone_example",
            url: "url_example",
          },
          generalLinks: [
            {
              displayText: "displayText_example",
              link: "link_example",
            },
          ],
          gettingStartedInstructions: "gettingStartedInstructions_example",
          gloabalSupportWebsite: "gloabalSupportWebsite_example",
          governmentSupportWebsite: "governmentSupportWebsite_example",
          id: "id_example",
          kind: "azureSaaS",
          languageId: "languageId_example",
          lifecycleState: ,
          privacyPolicyLink: "privacyPolicyLink_example",
          product: "product_example",
          resourceName: "resourceName_example",
          searchKeywords: [
            "searchKeywords_example",
          ],
          searchResultSummary: "searchResultSummary_example",
          shortDescription: "shortDescription_example",
          supportContact: {
            email: "email_example",
            name: "name_example",
            phone: "phone_example",
            url: "url_example",
          },
          title: "title_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        listingAssets: [
          {
            schema: "schema_example",
            description: "description_example",
            displayOrder: 1,
            fileName: "fileName_example",
            friendlyName: "friendlyName_example",
            id: "id_example",
            kind: "azure",
            languageId: "languageId_example",
            lifecycleState: ,
            listing: "listing_example",
            product: "product_example",
            resourceName: "resourceName_example",
            type: "azureLogoSmall",
            url: "url_example",
            validations: [
              {
                schema: "schema_example",
                code: "businessValidationError",
                level: "informational",
                message: "message_example",
                resourceId: "resourceId_example",
              },
            ],
          },
        ],
        plans: [
          {
            plan: {
              schema: "schema_example",
              alias: "alias_example",
              azureGovernmentCertifications: [
                {
                  link: "link_example",
                  name: "name_example",
                },
              ],
              azureRegions: [
                "azureRegions_example",
              ],
              deprecationSchedule: {
                schema: "schema_example",
                alternative: {
                  plan: {},
                  product: {},
                },
                date: "date_example",
                dateOffset: "dateOffset_example",
                reason: "criticalSecurityIssue",
              },
              displayRank: 1,
              id: "id_example",
              identity: {
                externalId: "externalId_example",
              },
              lifecycleState: "notAvailable",
              product: "product_example",
              resourceName: "resourceName_example",
              subtype: "managedApplication",
              validations: [
                {
                  schema: "schema_example",
                  code: "businessValidationError",
                  level: "informational",
                  message: "message_example",
                  resourceId: "resourceId_example",
                },
              ],
            },
            planListing: {
              schema: "schema_example",
              description: "description_example",
              id: "id_example",
              kind: "azureVM-plan",
              languageId: "languageId_example",
              lifecycleState: "notAvailable",
              name: "name_example",
              plan: "plan_example",
              product: "product_example",
              resourceName: "resourceName_example",
              summary: "summary_example",
              validations: [
                {
                  schema: "schema_example",
                  code: "businessValidationError",
                  level: "informational",
                  message: "message_example",
                  resourceId: "resourceId_example",
                },
              ],
            },
            priceAndAvailabilityPlan: {
              schema: "schema_example",
              audience: "public",
              billingTag: "billingTag_example",
              id: "id_example",
              markets: [
                "markets_example",
              ],
              meterDefine: "meterDefine_example",
              plan: "plan_example",
              pricing: {
                corePricing: {
                  price: 3.14,
                  priceInputOption: "free",
                  pricePerCore: 3.14,
                  pricePerCoreSize: {},
                  prices: [
                    {
                      currency: "currency_example",
                      markets: [
                        "markets_example",
                      ],
                      price: 3.14,
                    },
                  ],
                },
                customMeters: {
                  meters: {
                    "key": {
                      billingTerm: {
                        type: "day",
                        value: 3.14,
                      },
                      includedQuantities: [
                        {
                          billingTerm: {
                            type: "day",
                            value: 3.14,
                          },
                          isInfinite: true,
                          quantity: 3.14,
                        },
                      ],
                      paymentOption: {
                        type: "day",
                        value: 3.14,
                      },
                      pricePerPaymentInUsd: 3.14,
                      prices: [
                        {
                          pricePerPaymentInUsd: 3.14,
                          prices: [
                            {
                              currency: "currency_example",
                              markets: [
                                "markets_example",
                              ],
                              price: 3.14,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  priceInputOption: "perMarket",
                },
                licenseModel: "byol",
                recurrentPrice: {
                  priceInputOption: "perMarket",
                  prices: [
                    {
                      billingTerm: {
                        type: "day",
                        value: 3.14,
                      },
                      paymentOption: {
                        type: "day",
                        value: 3.14,
                      },
                      pricePerPaymentInUsd: 3.14,
                      prices: [
                        {
                          currency: "currency_example",
                          markets: [
                            "markets_example",
                          ],
                          price: 3.14,
                        },
                      ],
                    },
                  ],
                  recurrentPriceMode: "flatRate",
                  userLimits: {
                    max: 3.14,
                    min: 3.14,
                  },
                },
                systemMeterPricing: {
                  price: 3.14,
                  priceInputOption: "perCore",
                  prices: [
                    {
                      currency: "currency_example",
                      markets: [
                        "markets_example",
                      ],
                      price: 3.14,
                    },
                  ],
                },
              },
              privateAudiences: [
                {
                  id: "id_example",
                  label: "label_example",
                  type: "none",
                },
              ],
              product: "product_example",
              resourceName: "resourceName_example",
              softwareReservation: [
                {
                  percentageSave: 3.14,
                  term: 3.14,
                  type: "month",
                },
              ],
              trial: {
                type: "day",
                value: 3.14,
              },
              validations: [
                {
                  schema: "schema_example",
                  code: "businessValidationError",
                  level: "informational",
                  message: "message_example",
                  resourceId: "resourceId_example",
                },
              ],
              visibility: "visible",
            },
          },
        ],
        priceAndAvailabilityCustomMeter: {
          schema: "schema_example",
          customMeters: {
            "key": {
              displayName: "displayName_example",
              price: 3.14,
              unitOfMeasure: "unitOfMeasure_example",
            },
          },
          id: "id_example",
          product: "product_example",
          resourceName: "resourceName_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        priceAndAvailabilityOffer: {
          schema: "schema_example",
          id: "id_example",
          previewAudiences: [
            {
              id: "id_example",
              label: "label_example",
              type: "none",
            },
          ],
          product: "product_example",
          resourceName: "resourceName_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        product: {
          schema: "schema_example",
          alias: "alias_example",
          id: "id_example",
          identity: {
            externalId: "externalId_example",
          },
          lifecycleState: "notAvailable",
          productGroup: "productGroup_example",
          resourceName: "resourceName_example",
          type: "azureApplication",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        property: {
          schema: "schema_example",
          appVersion: "appVersion_example",
          categories: {
            "key": [
              "key_example",
            ],
          },
          cloudIndustries: {
            "key": [
              "key_example",
            ],
          },
          customAmendments: [
            {
              tenants: {
                manualEntries: [
                  {
                    description: "description_example",
                    id: "id_example",
                  },
                ],
              },
              terms: "terms_example",
            },
          ],
          id: "id_example",
          industries: {
            "key": [
              "key_example",
            ],
          },
          kind: "azureSaaS",
          lifecycleState: "notAvailable",
          product: "product_example",
          resourceName: "resourceName_example",
          standardContractAmendment: "standardContractAmendment_example",
          termsConditions: "custom",
          termsOfUse: "termsOfUse_example",
          termsOfUseUrl: "termsOfUseUrl_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        reseller: {
          schema: "schema_example",
          audiences: [
            {
              description: "description_example",
              resourceId: "resourceId_example",
              type: "subscription",
            },
          ],
          id: "id_example",
          product: "product_example",
          resellerChannelState: "resellerChannelState_example",
          resourceName: "resourceName_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        setup: {
          schema: "schema_example",
          accessUrl: "accessUrl_example",
          callToAction: "free",
          id: "id_example",
          product: "product_example",
          requireLicenseForInstall: true,
          resourceName: "resourceName_example",
          sellThroughMicrosoft: true,
          useMicrosoftLicenseManagementService: true,
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        submission: {
          schema: "schema_example",
          created: "created_example",
          deprecationSchedule: {
            schema: "schema_example",
            alternative: {
              plan: {},
              product: {},
            },
            date: "date_example",
            dateOffset: "dateOffset_example",
            reason: "criticalSecurityIssue",
          },
          id: "id_example",
          lifecycleState: "notAvailable",
          product: "product_example",
          resourceName: "resourceName_example",
          result: "succeeded",
          status: "notStarted",
          target: {
            targetId: "targetId_example",
            targetType: "flight",
          },
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
        technicalConfiguration: {
          schema: "schema_example",
          azureAdAppId: "azureAdAppId_example",
          azureAdTenantId: "azureAdTenantId_example",
          connectionWebhook: "connectionWebhook_example",
          id: "id_example",
          landingPageUrl: "landingPageUrl_example",
          product: "product_example",
          resourceName: "resourceName_example",
          validations: [
            {
              schema: "schema_example",
              code: "businessValidationError",
              level: "informational",
              message: "message_example",
              resourceId: "resourceId_example",
            },
          ],
        },
      },
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
      eulaType: ,
      eulaUrl: "eulaUrl_example",
      gcpProduct: {
        createTime: new Date('1970-01-01T00:00:00.00Z'),
        derivedDiscoveryState: {
          accessState: "ALLUSERS_ACCESSIBLE",
          searchState: "ADMIN_OVERRIDE_UNSEARCHABLE",
        },
        id: "id_example",
        lastPublishTime: new Date('1970-01-01T00:00:00.00Z'),
        listingSpec: {
          externalAccountSpec: {
            loginUri: "loginUri_example",
            signupUri: "signupUri_example",
            singleSignOnUri: "singleSignOnUri_example",
          },
          listingType: "BillingIntegratedManagedService",
          marketingSpec: {
            description: "description_example",
            displayNames: [
              "displayNames_example",
            ],
            documentationSpecs: [
              {
                description: "description_example",
                title: "title_example",
                uri: "uri_example",
              },
            ],
            eulaUrl: "eulaUrl_example",
            externalLicenseSpecs: [
              {
                description: "description_example",
                uri: "uri_example",
              },
            ],
            externalMarketingUrl: "externalMarketingUrl_example",
            icon: "icon_example",
            searchCategories: [
              "searchCategories_example",
            ],
            searchDescription: "searchDescription_example",
            searchKeywords: [
              "searchKeywords_example",
            ],
            signupUri: "signupUri_example",
            supportSpec: {
              description: "description_example",
              email: "email_example",
              uri: "uri_example",
            },
            tagLine: "tagLine_example",
            title: "title_example",
          },
          purchaseSpec: {
            features: [
              {
                description: "description_example",
                name: "name_example",
                title: "title_example",
              },
            ],
            metrics: [
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
            purchaseOptionSpecs: [
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
          },
          termsSpec: {
            eulaUri: "eulaUri_example",
            inlineEula: {},
            standardEula: {},
          },
        },
        marketplace: "marketplaces/google-cloud",
        name: "name_example",
        revisionCreateTime: new Date('1970-01-01T00:00:00.00Z'),
        revisionId: "revisionId_example",
        service: "service_example",
        serviceConfig: {
          billing: {
            metrics: [
              "metrics_example",
            ],
          },
          metrics: [
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
          name: "name_example",
          producerProjectId: "producerProjectId_example",
          title: "title_example",
        },
        validationSummary: {},
      },
      refundCancellationPolicy: "refundCancellationPolicy_example",
      sellerNotes: "sellerNotes_example",
      snowflakeProduct: {
        comment: {
          string: "string_example",
          valid: true,
        },
        createdOn: {
          time: "time_example",
          valid: true,
        },
        detailedTargetAccounts: {
          string: "string_example",
          valid: true,
        },
        distribution: {
          string: "string_example",
          valid: true,
        },
        globalName: {
          string: "string_example",
          valid: true,
        },
        isApplication: {
          bool: true,
          valid: true,
        },
        isByRequest: {
          bool: true,
          valid: true,
        },
        isLimitedTrial: {
          bool: true,
          valid: true,
        },
        isMonetized: {
          bool: true,
          valid: true,
        },
        isMountlessQueryable: {
          bool: true,
          valid: true,
        },
        isTargeted: {
          bool: true,
          valid: true,
        },
        owner: {
          string: "string_example",
          valid: true,
        },
        ownerRoleType: {
          string: "string_example",
          valid: true,
        },
        profile: {
          string: "string_example",
          valid: true,
        },
        publishedOn: {
          time: "time_example",
          valid: true,
        },
        regions: {
          string: "string_example",
          valid: true,
        },
        rejectedOn: {
          time: "time_example",
          valid: true,
        },
        reviewState: {
          string: "string_example",
          valid: true,
        },
        state: {
          string: "string_example",
          valid: true,
        },
        subtitle: {
          string: "string_example",
          valid: true,
        },
        targetAccounts: {
          string: "string_example",
          valid: true,
        },
        title: {
          string: "string_example",
          valid: true,
        },
        uniformListingLocator: {
          string: "string_example",
          valid: true,
        },
        updatedOn: {
          time: "time_example",
          valid: true,
        },
        name: {
          string: "string_example",
          valid: true,
        },
        organizationProfileName: {
          string: "string_example",
          valid: true,
        },
      },
      stripeProduct: {
        active: true,
        created: 1,
        description: "description_example",
        id: "id_example",
        images: [
          "images_example",
        ],
        livemode: true,
        marketingFeatures: [
          {
            name: "name_example",
          },
        ],
        metadata: {
          "key": "key_example",
        },
        name: "name_example",
        object: "object_example",
        packageDimensions: ,
        shippable: true,
        statementDescriptor: "statementDescriptor_example",
        taxCode: {},
        unitLabel: "unitLabel_example",
        updated: 1,
        url: "url_example",
      },
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
      renewalOfferType: ,
      replacedOfferEndTime: new Date('1970-01-01T00:00:00.00Z'),
      replacedOfferResourceName: "replacedOfferResourceName_example",
      salesforceEntitlementURL: "salesforceEntitlementURL_example",
      salesforceOpportunityId: "salesforceOpportunityId_example",
      testUsageMeteringEndTime: new Date('1970-01-01T00:00:00.00Z'),
      updateMessage: "updateMessage_example",
    },
    name: "name_example",
    organizationID: "organizationID_example",
    partner: "",
    partnerID: "partnerID_example",
    productType: "UNKNOWN",
    service: "DEFAULT",
    status: "status_example",
  },
};

const data = await apiInstance.updateProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **WorkloadProduct**| the product to update |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **productId** | [**string**] | Product ID | defaults to undefined


### Return type

**WorkloadProduct**

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

# **updateProductFulfillmentUrl**
> WorkloadProduct updateProductFulfillmentUrl(data)

update the fulfillment url of the given product

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiUpdateProductFulfillmentUrlRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiUpdateProductFulfillmentUrlRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Product ID
  productId: "productId_example",
    // Update Product Params
  data: {
    fulfillmentUrl: "fulfillmentUrl_example",
    id: "id_example",
    organizationID: "organizationID_example",
  },
};

const data = await apiInstance.updateProductFulfillmentUrl(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **UpdateProductParams**| Update Product Params |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **productId** | [**string**] | Product ID | defaults to undefined


### Return type

**WorkloadProduct**

### Authorization

[APIKeyAuth](README.md#APIKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateProductMetaInfo**
> WorkloadMetaInfo updateProductMetaInfo(data)

Update the meta info of the given product.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiUpdateProductMetaInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiUpdateProductMetaInfoRequest = {
    // Organization ID
  orgId: "orgId_example",
    // Product ID
  productId: "productId_example",
    // Product meta info to update
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
    renewalOfferType: ,
    replacedOfferEndTime: new Date('1970-01-01T00:00:00.00Z'),
    replacedOfferResourceName: "replacedOfferResourceName_example",
    salesforceEntitlementURL: "salesforceEntitlementURL_example",
    salesforceOpportunityId: "salesforceOpportunityId_example",
    testUsageMeteringEndTime: new Date('1970-01-01T00:00:00.00Z'),
    updateMessage: "updateMessage_example",
  },
};

const data = await apiInstance.updateProductMetaInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **WorkloadMetaInfo**| Product meta info to update |
 **orgId** | [**string**] | Organization ID | defaults to undefined
 **productId** | [**string**] | Product ID | defaults to undefined


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


