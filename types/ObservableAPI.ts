import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AddEntitlementCreditParams } from '../models/AddEntitlementCreditParams';
import { AddEntitlementCreditResponse } from '../models/AddEntitlementCreditResponse';
import { AdyenBuyer } from '../models/AdyenBuyer';
import { AggregatedMeteringUsageRecord } from '../models/AggregatedMeteringUsageRecord';
import { AlibabaMarketplaceProduct } from '../models/AlibabaMarketplaceProduct';
import { AlibabaMarketplaceProductExtra } from '../models/AlibabaMarketplaceProductExtra';
import { AlibabaMarketplaceProductExtras } from '../models/AlibabaMarketplaceProductExtras';
import { AlibabaMarketplaceProductShopInfo } from '../models/AlibabaMarketplaceProductShopInfo';
import { AlibabaMarketplaceProductShopInfoTelephones } from '../models/AlibabaMarketplaceProductShopInfoTelephones';
import { AlibabaMarketplaceProductShopInfoWangWang } from '../models/AlibabaMarketplaceProductShopInfoWangWang';
import { AlibabaMarketplaceProductShopInfoWangWangs } from '../models/AlibabaMarketplaceProductShopInfoWangWangs';
import { AlibabaMarketplaceProductSku } from '../models/AlibabaMarketplaceProductSku';
import { AlibabaMarketplaceProductSkuModule } from '../models/AlibabaMarketplaceProductSkuModule';
import { AlibabaMarketplaceProductSkuModuleProperties } from '../models/AlibabaMarketplaceProductSkuModuleProperties';
import { AlibabaMarketplaceProductSkuModuleProperty } from '../models/AlibabaMarketplaceProductSkuModuleProperty';
import { AlibabaMarketplaceProductSkuModulePropertyValue } from '../models/AlibabaMarketplaceProductSkuModulePropertyValue';
import { AlibabaMarketplaceProductSkuModulePropertyValues } from '../models/AlibabaMarketplaceProductSkuModulePropertyValues';
import { AlibabaMarketplaceProductSkuModules } from '../models/AlibabaMarketplaceProductSkuModules';
import { AlibabaMarketplaceProductSkuOrderPeriod } from '../models/AlibabaMarketplaceProductSkuOrderPeriod';
import { AlibabaMarketplaceProductSkuOrderPeriods } from '../models/AlibabaMarketplaceProductSkuOrderPeriods';
import { AlibabaMarketplaceProductSkus } from '../models/AlibabaMarketplaceProductSkus';
import { AuditingEventPriority } from '../models/AuditingEventPriority';
import { AwsAccountIdentifier } from '../models/AwsAccountIdentifier';
import { AwsChannelPartner } from '../models/AwsChannelPartner';
import { AwsMarketplaceAgreementStatus } from '../models/AwsMarketplaceAgreementStatus';
import { AwsMarketplaceAgreementV2 } from '../models/AwsMarketplaceAgreementV2';
import { AwsMarketplaceBuyerAccount } from '../models/AwsMarketplaceBuyerAccount';
import { AwsMarketplaceCatalogLegalTermDocument } from '../models/AwsMarketplaceCatalogLegalTermDocument';
import { AwsMarketplaceCatalogLegalTermDocumentType } from '../models/AwsMarketplaceCatalogLegalTermDocumentType';
import { AwsMarketplaceCatalogPricingModel } from '../models/AwsMarketplaceCatalogPricingModel';
import { AwsMarketplaceCatalogPricingTermRateCard } from '../models/AwsMarketplaceCatalogPricingTermRateCard';
import { AwsMarketplaceCatalogPricingTermRateCardConstraints } from '../models/AwsMarketplaceCatalogPricingTermRateCardConstraints';
import { AwsMarketplaceCatalogPricingTermRateCardItem } from '../models/AwsMarketplaceCatalogPricingTermRateCardItem';
import { AwsMarketplaceCatalogPricingTermRateCardSelector } from '../models/AwsMarketplaceCatalogPricingTermRateCardSelector';
import { AwsMarketplaceCppoDiscountType } from '../models/AwsMarketplaceCppoDiscountType';
import { AwsMarketplaceCppoDurationType } from '../models/AwsMarketplaceCppoDurationType';
import { AwsMarketplaceCppoOpportunity } from '../models/AwsMarketplaceCppoOpportunity';
import { AwsMarketplaceCppoOpportunityNegativeTargeting } from '../models/AwsMarketplaceCppoOpportunityNegativeTargeting';
import { AwsMarketplaceCppoOpportunityOfferDetails } from '../models/AwsMarketplaceCppoOpportunityOfferDetails';
import { AwsMarketplaceCppoOpportunityPaymentSchedule } from '../models/AwsMarketplaceCppoOpportunityPaymentSchedule';
import { AwsMarketplaceCppoOpportunityPositiveTargeting } from '../models/AwsMarketplaceCppoOpportunityPositiveTargeting';
import { AwsMarketplaceCppoOpportunityRule } from '../models/AwsMarketplaceCppoOpportunityRule';
import { AwsMarketplaceCppoOpportunityRuleType } from '../models/AwsMarketplaceCppoOpportunityRuleType';
import { AwsMarketplaceCppoOpportunityTerm } from '../models/AwsMarketplaceCppoOpportunityTerm';
import { AwsMarketplaceCppoOpportunityTermType } from '../models/AwsMarketplaceCppoOpportunityTermType';
import { AwsMarketplaceCppoOpportunityUpfrontPriceGrant } from '../models/AwsMarketplaceCppoOpportunityUpfrontPriceGrant';
import { AwsMarketplaceEventBridgeEventAccount } from '../models/AwsMarketplaceEventBridgeEventAccount';
import { AwsMarketplaceEventBridgeEventDetail } from '../models/AwsMarketplaceEventBridgeEventDetail';
import { AwsMarketplaceEventBridgeEventOffer } from '../models/AwsMarketplaceEventBridgeEventOffer';
import { AwsMarketplaceEventBridgeEventProduct } from '../models/AwsMarketplaceEventBridgeEventProduct';
import { AwsMarketplaceMeteringBatchMeterUsageInput } from '../models/AwsMarketplaceMeteringBatchMeterUsageInput';
import { AwsMarketplaceMeteringTag } from '../models/AwsMarketplaceMeteringTag';
import { AwsMarketplaceMeteringUsageAllocation } from '../models/AwsMarketplaceMeteringUsageAllocation';
import { AwsMarketplaceMeteringUsageRecord } from '../models/AwsMarketplaceMeteringUsageRecord';
import { AwsMarketplacePreExistingAgreement } from '../models/AwsMarketplacePreExistingAgreement';
import { AwsMarketplaceProductVisibility } from '../models/AwsMarketplaceProductVisibility';
import { AwsProduct } from '../models/AwsProduct';
import { AwsProductAdditionalResource } from '../models/AwsProductAdditionalResource';
import { AwsProductDeliveryOption } from '../models/AwsProductDeliveryOption';
import { AwsProductDescription } from '../models/AwsProductDescription';
import { AwsProductDimension } from '../models/AwsProductDimension';
import { AwsProductPromotionalResources } from '../models/AwsProductPromotionalResources';
import { AwsProductRepository } from '../models/AwsProductRepository';
import { AwsProductSignatureVerificationKey } from '../models/AwsProductSignatureVerificationKey';
import { AwsProductSupportInformation } from '../models/AwsProductSupportInformation';
import { AwsProductVersion } from '../models/AwsProductVersion';
import { AwsProductVideo } from '../models/AwsProductVideo';
import { AwsRenewalOfferType } from '../models/AwsRenewalOfferType';
import { AwsSnsSubscription } from '../models/AwsSnsSubscription';
import { AwsSnsSubscriptionStatus } from '../models/AwsSnsSubscriptionStatus';
import { AzureADIdentifier } from '../models/AzureADIdentifier';
import { AzureAudience } from '../models/AzureAudience';
import { AzureCommercialMarketplaceSetup } from '../models/AzureCommercialMarketplaceSetup';
import { AzureGovernmentCertification } from '../models/AzureGovernmentCertification';
import { AzureIncludedBaseQuantity } from '../models/AzureIncludedBaseQuantity';
import { AzureListingContact } from '../models/AzureListingContact';
import { AzureListingUri } from '../models/AzureListingUri';
import { AzureLocalizedDateTime } from '../models/AzureLocalizedDateTime';
import { AzureLocalizedTimeRange } from '../models/AzureLocalizedTimeRange';
import { AzureMarket } from '../models/AzureMarket';
import { AzureMarketState } from '../models/AzureMarketState';
import { AzureMarketplaceContact } from '../models/AzureMarketplaceContact';
import { AzureMarketplaceCustomAmendment } from '../models/AzureMarketplaceCustomAmendment';
import { AzureMarketplaceCustomAmendmentTenant } from '../models/AzureMarketplaceCustomAmendmentTenant';
import { AzureMarketplaceCustomAmendmentTenantManualEntry } from '../models/AzureMarketplaceCustomAmendmentTenantManualEntry';
import { AzureMarketplaceCustomerLeads } from '../models/AzureMarketplaceCustomerLeads';
import { AzureMarketplaceDeprecationSchedule } from '../models/AzureMarketplaceDeprecationSchedule';
import { AzureMarketplaceDeprecationScheduleAlternative } from '../models/AzureMarketplaceDeprecationScheduleAlternative';
import { AzureMarketplaceGeneralLink } from '../models/AzureMarketplaceGeneralLink';
import { AzureMarketplaceGovernmentCertification } from '../models/AzureMarketplaceGovernmentCertification';
import { AzureMarketplaceIdentity } from '../models/AzureMarketplaceIdentity';
import { AzureMarketplaceListing } from '../models/AzureMarketplaceListing';
import { AzureMarketplaceListingAsset } from '../models/AzureMarketplaceListingAsset';
import { AzureMarketplaceListingAssetType } from '../models/AzureMarketplaceListingAssetType';
import { AzureMarketplaceMeteringBatchUsageEvent } from '../models/AzureMarketplaceMeteringBatchUsageEvent';
import { AzureMarketplaceMeteringUsageEvent } from '../models/AzureMarketplaceMeteringUsageEvent';
import { AzureMarketplaceOfferPricingType } from '../models/AzureMarketplaceOfferPricingType';
import { AzureMarketplacePlan } from '../models/AzureMarketplacePlan';
import { AzureMarketplacePlanListing } from '../models/AzureMarketplacePlanListing';
import { AzureMarketplacePlanResource } from '../models/AzureMarketplacePlanResource';
import { AzureMarketplacePreviewAudience } from '../models/AzureMarketplacePreviewAudience';
import { AzureMarketplacePrice } from '../models/AzureMarketplacePrice';
import { AzureMarketplacePriceAndAvailabilityAudience } from '../models/AzureMarketplacePriceAndAvailabilityAudience';
import { AzureMarketplacePriceAndAvailabilityCorePrice } from '../models/AzureMarketplacePriceAndAvailabilityCorePrice';
import { AzureMarketplacePriceAndAvailabilityCustomMeter } from '../models/AzureMarketplacePriceAndAvailabilityCustomMeter';
import { AzureMarketplacePriceAndAvailabilityCustomMeterItem } from '../models/AzureMarketplacePriceAndAvailabilityCustomMeterItem';
import { AzureMarketplacePriceAndAvailabilityCustomMeterPrice } from '../models/AzureMarketplacePriceAndAvailabilityCustomMeterPrice';
import { AzureMarketplacePriceAndAvailabilityCustomMeterPriceIncludedQuantityItem } from '../models/AzureMarketplacePriceAndAvailabilityCustomMeterPriceIncludedQuantityItem';
import { AzureMarketplacePriceAndAvailabilityCustomMeterPriceMeterItem } from '../models/AzureMarketplacePriceAndAvailabilityCustomMeterPriceMeterItem';
import { AzureMarketplacePriceAndAvailabilityCustomMeterPriceMeterItemPriceItem } from '../models/AzureMarketplacePriceAndAvailabilityCustomMeterPriceMeterItemPriceItem';
import { AzureMarketplacePriceAndAvailabilityOffer } from '../models/AzureMarketplacePriceAndAvailabilityOffer';
import { AzureMarketplacePriceAndAvailabilityPlan } from '../models/AzureMarketplacePriceAndAvailabilityPlan';
import { AzureMarketplacePriceAndAvailabilityPrice } from '../models/AzureMarketplacePriceAndAvailabilityPrice';
import { AzureMarketplacePriceAndAvailabilityPrivateOfferCustomMeters } from '../models/AzureMarketplacePriceAndAvailabilityPrivateOfferCustomMeters';
import { AzureMarketplacePriceAndAvailabilityPrivateOfferPlan } from '../models/AzureMarketplacePriceAndAvailabilityPrivateOfferPlan';
import { AzureMarketplacePriceAndAvailabilityPrivateOfferPlanSoftwareReservation } from '../models/AzureMarketplacePriceAndAvailabilityPrivateOfferPlanSoftwareReservation';
import { AzureMarketplacePriceAndAvailabilityPrivateOfferPrice } from '../models/AzureMarketplacePriceAndAvailabilityPrivateOfferPrice';
import { AzureMarketplacePriceAndAvailabilityRecurrentPrice } from '../models/AzureMarketplacePriceAndAvailabilityRecurrentPrice';
import { AzureMarketplacePriceAndAvailabilityRecurrentPriceItem } from '../models/AzureMarketplacePriceAndAvailabilityRecurrentPriceItem';
import { AzureMarketplacePriceAndAvailabilityRecurrentPriceUserLimit } from '../models/AzureMarketplacePriceAndAvailabilityRecurrentPriceUserLimit';
import { AzureMarketplacePriceAndAvailabilitySoftwareReservation } from '../models/AzureMarketplacePriceAndAvailabilitySoftwareReservation';
import { AzureMarketplacePriceAndAvailabilitySystemMeterPrice } from '../models/AzureMarketplacePriceAndAvailabilitySystemMeterPrice';
import { AzureMarketplacePriceBillingSchedule } from '../models/AzureMarketplacePriceBillingSchedule';
import { AzureMarketplacePriceFlexibleSchedule } from '../models/AzureMarketplacePriceFlexibleSchedule';
import { AzureMarketplacePriceInitialCharge } from '../models/AzureMarketplacePriceInitialCharge';
import { AzureMarketplacePrivateOffer } from '../models/AzureMarketplacePrivateOffer';
import { AzureMarketplacePrivateOfferAcceptanceLink } from '../models/AzureMarketplacePrivateOfferAcceptanceLink';
import { AzureMarketplacePrivateOfferBeneficiary } from '../models/AzureMarketplacePrivateOfferBeneficiary';
import { AzureMarketplacePrivateOfferBeneficiaryRecipient } from '../models/AzureMarketplacePrivateOfferBeneficiaryRecipient';
import { AzureMarketplacePrivateOfferPartner } from '../models/AzureMarketplacePrivateOfferPartner';
import { AzureMarketplacePrivateOfferPricing } from '../models/AzureMarketplacePrivateOfferPricing';
import { AzureMarketplacePrivateOfferPricingNewPlanDetails } from '../models/AzureMarketplacePrivateOfferPricingNewPlanDetails';
import { AzureMarketplacePrivateOfferPromotionReference } from '../models/AzureMarketplacePrivateOfferPromotionReference';
import { AzureMarketplacePrivateOfferState } from '../models/AzureMarketplacePrivateOfferState';
import { AzureMarketplacePrivateOfferSubState } from '../models/AzureMarketplacePrivateOfferSubState';
import { AzureMarketplacePrivateOfferTermsDoc } from '../models/AzureMarketplacePrivateOfferTermsDoc';
import { AzureMarketplacePrivateOfferType } from '../models/AzureMarketplacePrivateOfferType';
import { AzureMarketplaceProduct } from '../models/AzureMarketplaceProduct';
import { AzureMarketplaceProductResource } from '../models/AzureMarketplaceProductResource';
import { AzureMarketplaceProductType } from '../models/AzureMarketplaceProductType';
import { AzureMarketplaceProperty } from '../models/AzureMarketplaceProperty';
import { AzureMarketplaceReseller } from '../models/AzureMarketplaceReseller';
import { AzureMarketplaceResourceLifecycleState } from '../models/AzureMarketplaceResourceLifecycleState';
import { AzureMarketplaceResourceTarget } from '../models/AzureMarketplaceResourceTarget';
import { AzureMarketplaceSaasTechnicalConfiguration } from '../models/AzureMarketplaceSaasTechnicalConfiguration';
import { AzureMarketplaceSubmission } from '../models/AzureMarketplaceSubmission';
import { AzureMarketplaceSubscription } from '../models/AzureMarketplaceSubscription';
import { AzureMarketplaceSubscriptionStatus } from '../models/AzureMarketplaceSubscriptionStatus';
import { AzureMarketplaceTerm } from '../models/AzureMarketplaceTerm';
import { AzureMarketplaceValidation } from '../models/AzureMarketplaceValidation';
import { AzureMarketplaceVmPrice } from '../models/AzureMarketplaceVmPrice';
import { AzureMarketplaceVmPricePropertyItem } from '../models/AzureMarketplaceVmPricePropertyItem';
import { AzurePendingUpdateInfo } from '../models/AzurePendingUpdateInfo';
import { AzurePrice } from '../models/AzurePrice';
import { AzurePriceCadence } from '../models/AzurePriceCadence';
import { AzurePriceSchedule } from '../models/AzurePriceSchedule';
import { AzurePricingUnit } from '../models/AzurePricingUnit';
import { AzureProduct } from '../models/AzureProduct';
import { AzureProductAvailability } from '../models/AzureProductAvailability';
import { AzureProductBranch } from '../models/AzureProductBranch';
import { AzureProductFeatureAvailability } from '../models/AzureProductFeatureAvailability';
import { AzureProductListing } from '../models/AzureProductListing';
import { AzureProductListingAsset } from '../models/AzureProductListingAsset';
import { AzureProductPackageConfiguration } from '../models/AzureProductPackageConfiguration';
import { AzureProductProperty } from '../models/AzureProductProperty';
import { AzureProductSetup } from '../models/AzureProductSetup';
import { AzureProductSubmission } from '../models/AzureProductSubmission';
import { AzureProductVariant } from '../models/AzureProductVariant';
import { AzureProductVariantCustomMeter } from '../models/AzureProductVariantCustomMeter';
import { AzureProductVariantPriceSchedule } from '../models/AzureProductVariantPriceSchedule';
import { AzureProductVariantTrial } from '../models/AzureProductVariantTrial';
import { AzureTerm } from '../models/AzureTerm';
import { AzureTypeValue } from '../models/AzureTypeValue';
import { AzureValidationResult } from '../models/AzureValidationResult';
import { AzureVariantResource } from '../models/AzureVariantResource';
import { BillableDimension } from '../models/BillableDimension';
import { BillableDimensionFeeDetail } from '../models/BillableDimensionFeeDetail';
import { BillableDimensionPriceModelDetail } from '../models/BillableDimensionPriceModelDetail';
import { BillableDimensionUsageDailyRevenue } from '../models/BillableDimensionUsageDailyRevenue';
import { BillableMetric } from '../models/BillableMetric';
import { BillableMetricAggregationType } from '../models/BillableMetricAggregationType';
import { BillableMetricFilter } from '../models/BillableMetricFilter';
import { BillableMetricFilterGroup } from '../models/BillableMetricFilterGroup';
import { BillableMetricFilterOperation } from '../models/BillableMetricFilterOperation';
import { BillableMetricFilterValueType } from '../models/BillableMetricFilterValueType';
import { BillableMetricInfo } from '../models/BillableMetricInfo';
import { BillableMetricStatus } from '../models/BillableMetricStatus';
import { BillingAddon } from '../models/BillingAddon';
import { BillingAddonInfo } from '../models/BillingAddonInfo';
import { BillingAddonRecord } from '../models/BillingAddonRecord';
import { BillingAddonStatus } from '../models/BillingAddonStatus';
import { BillingCycle } from '../models/BillingCycle';
import { BillingDiscount } from '../models/BillingDiscount';
import { BillingDiscountType } from '../models/BillingDiscountType';
import { BillingInvoice } from '../models/BillingInvoice';
import { BillingInvoiceInfo } from '../models/BillingInvoiceInfo';
import { BillingInvoiceStatus } from '../models/BillingInvoiceStatus';
import { BillingInvoiceType } from '../models/BillingInvoiceType';
import { BillingMinimumCommitScope } from '../models/BillingMinimumCommitScope';
import { BillingPaymentInstallmentDetail } from '../models/BillingPaymentInstallmentDetail';
import { BillingPaymentStatus } from '../models/BillingPaymentStatus';
import { BillingPaymentTransaction } from '../models/BillingPaymentTransaction';
import { BillingPaymentTransactionInfo } from '../models/BillingPaymentTransactionInfo';
import { BillingPaymentTransactionType } from '../models/BillingPaymentTransactionType';
import { BillingWallet } from '../models/BillingWallet';
import { BillingWalletInfo } from '../models/BillingWalletInfo';
import { BillingWalletStatus } from '../models/BillingWalletStatus';
import { BillingWalletType } from '../models/BillingWalletType';
import { BuyerInfo } from '../models/BuyerInfo';
import { CancellationSchedule } from '../models/CancellationSchedule';
import { CancellationScheduleType } from '../models/CancellationScheduleType';
import { ClientDescribeInstanceResponseBody } from '../models/ClientDescribeInstanceResponseBody';
import { ClientDescribeInstanceResponseBodyModules } from '../models/ClientDescribeInstanceResponseBodyModules';
import { ClientDescribeInstanceResponseBodyModulesModule } from '../models/ClientDescribeInstanceResponseBodyModulesModule';
import { ClientDescribeInstanceResponseBodyModulesModuleProperties } from '../models/ClientDescribeInstanceResponseBodyModulesModuleProperties';
import { ClientDescribeInstanceResponseBodyModulesModulePropertiesProperty } from '../models/ClientDescribeInstanceResponseBodyModulesModulePropertiesProperty';
import { ClientDescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValues } from '../models/ClientDescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValues';
import { ClientDescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValuesPropertyValue } from '../models/ClientDescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValuesPropertyValue';
import { ClientDescribeInstanceResponseBodyRelationalData } from '../models/ClientDescribeInstanceResponseBodyRelationalData';
import { ClientDescribeOrderResponseBody } from '../models/ClientDescribeOrderResponseBody';
import { ClientDescribeOrderResponseBodyInstanceIds } from '../models/ClientDescribeOrderResponseBodyInstanceIds';
import { ClientDescribeOrderResponseBodySupplierTelephones } from '../models/ClientDescribeOrderResponseBodySupplierTelephones';
import { ClientPushMeteringDataRequest } from '../models/ClientPushMeteringDataRequest';
import { ClientPushMeteringDataResponseBody } from '../models/ClientPushMeteringDataResponseBody';
import { CommitDimension } from '../models/CommitDimension';
import { CommitDimensionType } from '../models/CommitDimensionType';
import { CommitRevenueDetail } from '../models/CommitRevenueDetail';
import { CompanyInfo } from '../models/CompanyInfo';
import { Contact } from '../models/Contact';
import { CreateAndUpdateAddonParams } from '../models/CreateAndUpdateAddonParams';
import { CreateBuyerParams } from '../models/CreateBuyerParams';
import { CreateEntitlementParams } from '../models/CreateEntitlementParams';
import { CreateUsageRecordGroupParams } from '../models/CreateUsageRecordGroupParams';
import { DatabaseSqlNullTime } from '../models/DatabaseSqlNullTime';
import { DivideEntitlementCommitParams } from '../models/DivideEntitlementCommitParams';
import { EntitlementInfo } from '../models/EntitlementInfo';
import { EntitlementStatus } from '../models/EntitlementStatus';
import { EntitlementTermInfo } from '../models/EntitlementTermInfo';
import { EntitlementTermType } from '../models/EntitlementTermType';
import { EntityType } from '../models/EntityType';
import { EulaType } from '../models/EulaType';
import { GcpAgreementDocument } from '../models/GcpAgreementDocument';
import { GcpAmountConstraint } from '../models/GcpAmountConstraint';
import { GcpAmountUnit } from '../models/GcpAmountUnit';
import { GcpCommitmentAmountPerPeriodTemplate } from '../models/GcpCommitmentAmountPerPeriodTemplate';
import { GcpMarketplaceAgreementDocument } from '../models/GcpMarketplaceAgreementDocument';
import { GcpMarketplaceConsumer } from '../models/GcpMarketplaceConsumer';
import { GcpMarketplaceDocument } from '../models/GcpMarketplaceDocument';
import { GcpMarketplaceEntitlement } from '../models/GcpMarketplaceEntitlement';
import { GcpMarketplaceEntitlementState } from '../models/GcpMarketplaceEntitlementState';
import { GcpMarketplaceExistingOfferData } from '../models/GcpMarketplaceExistingOfferData';
import { GcpMarketplaceExistingPrivateOffer } from '../models/GcpMarketplaceExistingPrivateOffer';
import { GcpMarketplaceExternalGoogleLink } from '../models/GcpMarketplaceExternalGoogleLink';
import { GcpMarketplaceIsvInfo } from '../models/GcpMarketplaceIsvInfo';
import { GcpMarketplaceMeteringMetricValue } from '../models/GcpMarketplaceMeteringMetricValue';
import { GcpMarketplaceMeteringMetricValueSet } from '../models/GcpMarketplaceMeteringMetricValueSet';
import { GcpMarketplaceMeteringMoney } from '../models/GcpMarketplaceMeteringMoney';
import { GcpMarketplaceMeteringOperation } from '../models/GcpMarketplaceMeteringOperation';
import { GcpMarketplaceOfferDealType } from '../models/GcpMarketplaceOfferDealType';
import { GcpMarketplaceOfferProration } from '../models/GcpMarketplaceOfferProration';
import { GcpMarketplaceOfferStartPolicy } from '../models/GcpMarketplaceOfferStartPolicy';
import { GcpMarketplaceOfferTemplatePolicies } from '../models/GcpMarketplaceOfferTemplatePolicies';
import { GcpMarketplacePriceModel } from '../models/GcpMarketplacePriceModel';
import { GcpMarketplacePrivateOffer } from '../models/GcpMarketplacePrivateOffer';
import { GcpMarketplacePrivateOfferCustomerInfo } from '../models/GcpMarketplacePrivateOfferCustomerInfo';
import { GcpMarketplacePrivateOfferInstallment } from '../models/GcpMarketplacePrivateOfferInstallment';
import { GcpMarketplacePrivateOfferInstallmentTimeline } from '../models/GcpMarketplacePrivateOfferInstallmentTimeline';
import { GcpMarketplacePrivateOfferMetricDetail } from '../models/GcpMarketplacePrivateOfferMetricDetail';
import { GcpMarketplacePrivateOfferMetricInformation } from '../models/GcpMarketplacePrivateOfferMetricInformation';
import { GcpMarketplacePrivateOfferMigrationMetadata } from '../models/GcpMarketplacePrivateOfferMigrationMetadata';
import { GcpMarketplacePrivateOfferPolicies } from '../models/GcpMarketplacePrivateOfferPolicies';
import { GcpMarketplacePrivateOfferPriceModel } from '../models/GcpMarketplacePrivateOfferPriceModel';
import { GcpMarketplacePrivateOfferPriceModelCommitment } from '../models/GcpMarketplacePrivateOfferPriceModelCommitment';
import { GcpMarketplacePrivateOfferPriceModelDiscount } from '../models/GcpMarketplacePrivateOfferPriceModelDiscount';
import { GcpMarketplacePrivateOfferPriceModelFixed } from '../models/GcpMarketplacePrivateOfferPriceModelFixed';
import { GcpMarketplacePrivateOfferPriceModelOverage } from '../models/GcpMarketplacePrivateOfferPriceModelOverage';
import { GcpMarketplacePrivateOfferPriceModelPayg } from '../models/GcpMarketplacePrivateOfferPriceModelPayg';
import { GcpMarketplacePrivateOfferPriceModelType } from '../models/GcpMarketplacePrivateOfferPriceModelType';
import { GcpMarketplacePrivateOfferProviderInfo } from '../models/GcpMarketplacePrivateOfferProviderInfo';
import { GcpMarketplacePrivateOfferReplacementMetadata } from '../models/GcpMarketplacePrivateOfferReplacementMetadata';
import { GcpMarketplacePrivateOfferRevenueShare } from '../models/GcpMarketplacePrivateOfferRevenueShare';
import { GcpMarketplacePrivateOfferState } from '../models/GcpMarketplacePrivateOfferState';
import { GcpMarketplacePrivateOfferTerm } from '../models/GcpMarketplacePrivateOfferTerm';
import { GcpMarketplacePrivateOfferTermDurationConstraint } from '../models/GcpMarketplacePrivateOfferTermDurationConstraint';
import { GcpMarketplacePrivateOfferTermTemplate } from '../models/GcpMarketplacePrivateOfferTermTemplate';
import { GcpMarketplaceProduct } from '../models/GcpMarketplaceProduct';
import { GcpMarketplaceProductAccessState } from '../models/GcpMarketplaceProductAccessState';
import { GcpMarketplaceProductDerivedDiscoveryState } from '../models/GcpMarketplaceProductDerivedDiscoveryState';
import { GcpMarketplaceProductDocumentationSpec } from '../models/GcpMarketplaceProductDocumentationSpec';
import { GcpMarketplaceProductExternalAccountSpec } from '../models/GcpMarketplaceProductExternalAccountSpec';
import { GcpMarketplaceProductFeature } from '../models/GcpMarketplaceProductFeature';
import { GcpMarketplaceProductFeatureValue } from '../models/GcpMarketplaceProductFeatureValue';
import { GcpMarketplaceProductInfo } from '../models/GcpMarketplaceProductInfo';
import { GcpMarketplaceProductLicenseSpec } from '../models/GcpMarketplaceProductLicenseSpec';
import { GcpMarketplaceProductListingSpec } from '../models/GcpMarketplaceProductListingSpec';
import { GcpMarketplaceProductMarketingSpec } from '../models/GcpMarketplaceProductMarketingSpec';
import { GcpMarketplaceProductMeteringMetric } from '../models/GcpMarketplaceProductMeteringMetric';
import { GcpMarketplaceProductPriceInfo } from '../models/GcpMarketplaceProductPriceInfo';
import { GcpMarketplaceProductPurchaseOptionSpec } from '../models/GcpMarketplaceProductPurchaseOptionSpec';
import { GcpMarketplaceProductPurchaseSpec } from '../models/GcpMarketplaceProductPurchaseSpec';
import { GcpMarketplaceProductServiceConfig } from '../models/GcpMarketplaceProductServiceConfig';
import { GcpMarketplaceProductServiceConfigBilling } from '../models/GcpMarketplaceProductServiceConfigBilling';
import { GcpMarketplaceProductSubscriptionPlan } from '../models/GcpMarketplaceProductSubscriptionPlan';
import { GcpMarketplaceProductSupportSpec } from '../models/GcpMarketplaceProductSupportSpec';
import { GcpMarketplaceProductTermsSpec } from '../models/GcpMarketplaceProductTermsSpec';
import { GcpMarketplaceProductUsageFee } from '../models/GcpMarketplaceProductUsageFee';
import { GcpMarketplacePurchaseChannel } from '../models/GcpMarketplacePurchaseChannel';
import { GcpMarketplaceResellerInfo } from '../models/GcpMarketplaceResellerInfo';
import { GcpMarketplaceResellerPrivateOfferPlan } from '../models/GcpMarketplaceResellerPrivateOfferPlan';
import { GcpMarketplaceResellerPrivateOfferPlanAgreementDocuments } from '../models/GcpMarketplaceResellerPrivateOfferPlanAgreementDocuments';
import { GcpMarketplaceResellerPrivateOfferPlanDurationConfig } from '../models/GcpMarketplaceResellerPrivateOfferPlanDurationConfig';
import { GcpMarketplaceResellerPrivateOfferPlanInstallmentTemplate } from '../models/GcpMarketplaceResellerPrivateOfferPlanInstallmentTemplate';
import { GcpMarketplaceResellerPrivateOfferPlanInstallmentTimelineTemplate } from '../models/GcpMarketplaceResellerPrivateOfferPlanInstallmentTimelineTemplate';
import { GcpMarketplaceResellerPrivateOfferPlanMargin } from '../models/GcpMarketplaceResellerPrivateOfferPlanMargin';
import { GcpMarketplaceResellerPrivateOfferPlanMarginPercentage } from '../models/GcpMarketplaceResellerPrivateOfferPlanMarginPercentage';
import { GcpMarketplaceResellerPrivateOfferPlanMetainfo } from '../models/GcpMarketplaceResellerPrivateOfferPlanMetainfo';
import { GcpMarketplaceResellerPrivateOfferPlanNewState } from '../models/GcpMarketplaceResellerPrivateOfferPlanNewState';
import { GcpMarketplaceResellerPrivateOfferPlanPriceModelSkuList } from '../models/GcpMarketplaceResellerPrivateOfferPlanPriceModelSkuList';
import { GcpMarketplaceResellerPrivateOfferPlanPriceModelSkuRepresentation } from '../models/GcpMarketplaceResellerPrivateOfferPlanPriceModelSkuRepresentation';
import { GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplate } from '../models/GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplate';
import { GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateCommitment } from '../models/GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateCommitment';
import { GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateFixedPrice } from '../models/GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateFixedPrice';
import { GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateOverage } from '../models/GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplateOverage';
import { GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplatePayg } from '../models/GcpMarketplaceResellerPrivateOfferPlanPriceModelTemplatePayg';
import { GcpMarketplaceResellerPrivateOfferPlanReusePolicy } from '../models/GcpMarketplaceResellerPrivateOfferPlanReusePolicy';
import { GcpMarketplaceResellerPrivateOfferPlanState } from '../models/GcpMarketplaceResellerPrivateOfferPlanState';
import { GcpMarketplaceResellerPrivateOfferPlanStateTransition } from '../models/GcpMarketplaceResellerPrivateOfferPlanStateTransition';
import { GcpMarketplaceResellerPrivateOfferPlanStateType } from '../models/GcpMarketplaceResellerPrivateOfferPlanStateType';
import { GcpMarketplaceRevenueShareChange } from '../models/GcpMarketplaceRevenueShareChange';
import { GcpMarketplaceRevenueShareType } from '../models/GcpMarketplaceRevenueShareType';
import { GcpMarketplaceRevenueShareValue } from '../models/GcpMarketplaceRevenueShareValue';
import { GcpMarketplaceStartPolicy } from '../models/GcpMarketplaceStartPolicy';
import { GcpMarketplaceUnstructuredDocument } from '../models/GcpMarketplaceUnstructuredDocument';
import { GcpMarketplaceUsagePlanPriceModel } from '../models/GcpMarketplaceUsagePlanPriceModel';
import { GcpMarketplaceUserAccount } from '../models/GcpMarketplaceUserAccount';
import { GcpMarketplaceUserAccountApproval } from '../models/GcpMarketplaceUserAccountApproval';
import { GcpMarketplaceUserAccountApprovalState } from '../models/GcpMarketplaceUserAccountApprovalState';
import { GcpMarketplaceUserAccountState } from '../models/GcpMarketplaceUserAccountState';
import { GcpPeriodDuration } from '../models/GcpPeriodDuration';
import { GcpPeriodDurationUnit } from '../models/GcpPeriodDurationUnit';
import { GcpPriceModelDiscountTemplate } from '../models/GcpPriceModelDiscountTemplate';
import { GcpPriceTier } from '../models/GcpPriceTier';
import { GcpPriceValue } from '../models/GcpPriceValue';
import { GcpUserInfo } from '../models/GcpUserInfo';
import { GetRevenueReportParams } from '../models/GetRevenueReportParams';
import { GithubComAwsAwsSdkGoV2ServiceMarketplacemeteringTypesTag } from '../models/GithubComAwsAwsSdkGoV2ServiceMarketplacemeteringTypesTag';
import { GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibBillingAwsBillingEvent } from '../models/GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibBillingAwsBillingEvent';
import { GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibBillingAzureCmaRevenue } from '../models/GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibBillingAzureCmaRevenue';
import { GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibBillingGcpChargeUsage } from '../models/GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibBillingGcpChargeUsage';
import { GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient } from '../models/GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient';
import { GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibUpdateEntitlementNameParams } from '../models/GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibUpdateEntitlementNameParams';
import { GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1BatchUsageEventOkResponse } from '../models/GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1BatchUsageEventOkResponse';
import { GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1UsageBatchEventOkMessage } from '../models/GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1UsageBatchEventOkMessage';
import { GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1UsageEventConflictResponse } from '../models/GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1UsageEventConflictResponse';
import { GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1UsageEventConflictResponseAdditionalInfo } from '../models/GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1UsageEventConflictResponseAdditionalInfo';
import { GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1UsageEventOkResponse } from '../models/GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1UsageEventOkResponse';
import { GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1UsageEventStatusEnum } from '../models/GithubComSugerioMarketplaceServiceThirdPartyAzureSdkMarketplacemeteringv1UsageEventStatusEnum';
import { GroupByInterval } from '../models/GroupByInterval';
import { IdentityBuyer } from '../models/IdentityBuyer';
import { IdentityConctactInfo } from '../models/IdentityConctactInfo';
import { IdentityContact } from '../models/IdentityContact';
import { InvoiceAddFixedFee } from '../models/InvoiceAddFixedFee';
import { InvoiceAdjustDiscountByDimension } from '../models/InvoiceAdjustDiscountByDimension';
import { InvoiceAdjustMinimumSpendByDimension } from '../models/InvoiceAdjustMinimumSpendByDimension';
import { InvoiceAdjustOverallDiscount } from '../models/InvoiceAdjustOverallDiscount';
import { InvoiceAdjustOverallMinimumSpend } from '../models/InvoiceAdjustOverallMinimumSpend';
import { LastModifiedBy } from '../models/LastModifiedBy';
import { ListNotificationEventsResponse } from '../models/ListNotificationEventsResponse';
import { ListNotificationMessagesResponse } from '../models/ListNotificationMessagesResponse';
import { ListRevenueRecordDetailsResponse } from '../models/ListRevenueRecordDetailsResponse';
import { ListRevenueRecordsResponse } from '../models/ListRevenueRecordsResponse';
import { ListSupportTicketsResponse } from '../models/ListSupportTicketsResponse';
import { ListUsageMeteringDailyRecordsResponse } from '../models/ListUsageMeteringDailyRecordsResponse';
import { ListUsageRecordGroupsResponse } from '../models/ListUsageRecordGroupsResponse';
import { ListUsageRecordReportsResponse } from '../models/ListUsageRecordReportsResponse';
import { MarketplacemeteringBatchMeterUsageOutput } from '../models/MarketplacemeteringBatchMeterUsageOutput';
import { MeteringDimension } from '../models/MeteringDimension';
import { MeteringUsageRecord } from '../models/MeteringUsageRecord';
import { MeteringUsageRecordGroup } from '../models/MeteringUsageRecordGroup';
import { MeteringUsageRecordGroupByKey } from '../models/MeteringUsageRecordGroupByKey';
import { MeteringUsageRecordGroupMetaInfo } from '../models/MeteringUsageRecordGroupMetaInfo';
import { MeteringUsageRecordReport } from '../models/MeteringUsageRecordReport';
import { MeteringUsageRecordReportInfo } from '../models/MeteringUsageRecordReportInfo';
import { NewUsageRecordGroup } from '../models/NewUsageRecordGroup';
import { NotificationChannel } from '../models/NotificationChannel';
import { NotificationEvent } from '../models/NotificationEvent';
import { NotificationEventAction } from '../models/NotificationEventAction';
import { NotificationEventStatus } from '../models/NotificationEventStatus';
import { NotificationMessage } from '../models/NotificationMessage';
import { NotificationMessageInfo } from '../models/NotificationMessageInfo';
import { OfferInfo } from '../models/OfferInfo';
import { OfferStatus } from '../models/OfferStatus';
import { OfferType } from '../models/OfferType';
import { Partner } from '../models/Partner';
import { PartnerService } from '../models/PartnerService';
import { PartnerUsageMeteringConfig } from '../models/PartnerUsageMeteringConfig';
import { PaymentConfig } from '../models/PaymentConfig';
import { PaymentInstallment } from '../models/PaymentInstallment';
import { PaymentScheduleType } from '../models/PaymentScheduleType';
import { PriceModelBasic } from '../models/PriceModelBasic';
import { PriceModelBulk } from '../models/PriceModelBulk';
import { PriceModelCategory } from '../models/PriceModelCategory';
import { PriceModelMatrix } from '../models/PriceModelMatrix';
import { PriceModelMatrixConfigGroup } from '../models/PriceModelMatrixConfigGroup';
import { PriceModelMatrixProperty } from '../models/PriceModelMatrixProperty';
import { PriceModelPercentage } from '../models/PriceModelPercentage';
import { PriceModelTiered } from '../models/PriceModelTiered';
import { PriceModelTieredConfig } from '../models/PriceModelTieredConfig';
import { PriceModelTieredPercentage } from '../models/PriceModelTieredPercentage';
import { PriceModelTieredPercentageConfig } from '../models/PriceModelTieredPercentageConfig';
import { PriceModelVolume } from '../models/PriceModelVolume';
import { PriceModelVolumeConfig } from '../models/PriceModelVolumeConfig';
import { PrivateOfferDiscountType } from '../models/PrivateOfferDiscountType';
import { ProductInfo } from '../models/ProductInfo';
import { RevenueBillingModel } from '../models/RevenueBillingModel';
import { RevenueChannel } from '../models/RevenueChannel';
import { RevenueRecord } from '../models/RevenueRecord';
import { RevenueRecordDetail } from '../models/RevenueRecordDetail';
import { RevenueRecordInfo } from '../models/RevenueRecordInfo';
import { RevenueReport } from '../models/RevenueReport';
import { RevenueReportType } from '../models/RevenueReportType';
import { ServicecontrolReportError } from '../models/ServicecontrolReportError';
import { ServicecontrolReportResponse } from '../models/ServicecontrolReportResponse';
import { ServicecontrolStatus } from '../models/ServicecontrolStatus';
import { SnowflakeMarketplaceBuyer } from '../models/SnowflakeMarketplaceBuyer';
import { SnowflakeMarketplaceOffer } from '../models/SnowflakeMarketplaceOffer';
import { SnowflakeMarketplaceOfferPaymentTerms } from '../models/SnowflakeMarketplaceOfferPaymentTerms';
import { SnowflakeMarketplaceOfferTermsOfService } from '../models/SnowflakeMarketplaceOfferTermsOfService';
import { SnowflakeMarketplacePlanInstallment } from '../models/SnowflakeMarketplacePlanInstallment';
import { SnowflakeMarketplacePlanInstallmentSchedule } from '../models/SnowflakeMarketplacePlanInstallmentSchedule';
import { SnowflakeMarketplacePricingPlanUsageDetails } from '../models/SnowflakeMarketplacePricingPlanUsageDetails';
import { SnowflakeMarketplaceProduct } from '../models/SnowflakeMarketplaceProduct';
import { SnowflakeMarketplaceProductDefaultPricingPlan } from '../models/SnowflakeMarketplaceProductDefaultPricingPlan';
import { SnowflakeMarketplaceProductDetailedTargetAccount } from '../models/SnowflakeMarketplaceProductDetailedTargetAccount';
import { SnowflakeMarketplaceProductMetadata } from '../models/SnowflakeMarketplaceProductMetadata';
import { SnowflakeMarketplaceProductPricingPlan } from '../models/SnowflakeMarketplaceProductPricingPlan';
import { SnowflakeMarketplaceTrialDetails } from '../models/SnowflakeMarketplaceTrialDetails';
import { StripeBalanceTransaction } from '../models/StripeBalanceTransaction';
import { StripeBalanceTransactionFeeDetail } from '../models/StripeBalanceTransactionFeeDetail';
import { StripeCustomer } from '../models/StripeCustomer';
import { StripeCustomerAddress } from '../models/StripeCustomerAddress';
import { StripeDispute } from '../models/StripeDispute';
import { StripeError } from '../models/StripeError';
import { StripePaymentIntent } from '../models/StripePaymentIntent';
import { StripePaymentIntentStatus } from '../models/StripePaymentIntentStatus';
import { StripePaymentMethod } from '../models/StripePaymentMethod';
import { StripePaymentMethodBACSDebit } from '../models/StripePaymentMethodBACSDebit';
import { StripePaymentMethodCard } from '../models/StripePaymentMethodCard';
import { StripePaymentMethodSEPADebit } from '../models/StripePaymentMethodSEPADebit';
import { StripePaymentMethodUSBankAccount } from '../models/StripePaymentMethodUSBankAccount';
import { StripeProduct } from '../models/StripeProduct';
import { StripeProductMarketingFeature } from '../models/StripeProductMarketingFeature';
import { StripeProductPackageDimensions } from '../models/StripeProductPackageDimensions';
import { StripeRefund } from '../models/StripeRefund';
import { StripeRefundDestinationDetails } from '../models/StripeRefundDestinationDetails';
import { StripeRefundDestinationDetailsCard } from '../models/StripeRefundDestinationDetailsCard';
import { StripeRefundDestinationDetailsUSBankTransfer } from '../models/StripeRefundDestinationDetailsUSBankTransfer';
import { StripeRefundStatus } from '../models/StripeRefundStatus';
import { SupportTicket } from '../models/SupportTicket';
import { SupportTicketAttachment } from '../models/SupportTicketAttachment';
import { SupportTicketComment } from '../models/SupportTicketComment';
import { SupportTicketCommentDetail } from '../models/SupportTicketCommentDetail';
import { SupportTicketFrame } from '../models/SupportTicketFrame';
import { SupportTicketImage } from '../models/SupportTicketImage';
import { SupportTicketPriority } from '../models/SupportTicketPriority';
import { SupportTicketStatus } from '../models/SupportTicketStatus';
import { SupportTicketTaskType } from '../models/SupportTicketTaskType';
import { SupportTicketUser } from '../models/SupportTicketUser';
import { TimeUnit } from '../models/TimeUnit';
import { TrackEvent } from '../models/TrackEvent';
import { TrackEventActionType } from '../models/TrackEventActionType';
import { TrialConfig } from '../models/TrialConfig';
import { TypesEntitlement } from '../models/TypesEntitlement';
import { TypesEntitlementValue } from '../models/TypesEntitlementValue';
import { TypesUsageAllocation } from '../models/TypesUsageAllocation';
import { TypesUsageRecord } from '../models/TypesUsageRecord';
import { TypesUsageRecordResult } from '../models/TypesUsageRecordResult';
import { TypesUsageRecordResultStatus } from '../models/TypesUsageRecordResultStatus';
import { UniqueCountAggregationResult } from '../models/UniqueCountAggregationResult';
import { UpdateBillableMetricParams } from '../models/UpdateBillableMetricParams';
import { UpdateBuyerParams } from '../models/UpdateBuyerParams';
import { UpdateEntitlementPriceModelParams } from '../models/UpdateEntitlementPriceModelParams';
import { UpdateInvoiceInfoRequest } from '../models/UpdateInvoiceInfoRequest';
import { UpdateProductParams } from '../models/UpdateProductParams';
import { UpdateSupportTicketRequest } from '../models/UpdateSupportTicketRequest';
import { UsageCount } from '../models/UsageCount';
import { UsageMeteringConfigInfo } from '../models/UsageMeteringConfigInfo';
import { UsageMeteringDailyRecord } from '../models/UsageMeteringDailyRecord';
import { UsageMeteringDimensionMappingMode } from '../models/UsageMeteringDimensionMappingMode';
import { UsageMeteringDimensionMappingValue } from '../models/UsageMeteringDimensionMappingValue';
import { UsageRecordGroupSource } from '../models/UsageRecordGroupSource';
import { UsageRecordReportStatus } from '../models/UsageRecordReportStatus';
import { ValueType } from '../models/ValueType';
import { WorkloadEntitlement } from '../models/WorkloadEntitlement';
import { WorkloadEntitlementTerm } from '../models/WorkloadEntitlementTerm';
import { WorkloadMetaInfo } from '../models/WorkloadMetaInfo';
import { WorkloadOffer } from '../models/WorkloadOffer';
import { WorkloadProduct } from '../models/WorkloadProduct';

import { APIApiRequestFactory, APIApiResponseProcessor} from "../apis/APIApi";
export class ObservableAPIApi {
    private requestFactory: APIApiRequestFactory;
    private responseProcessor: APIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: APIApiRequestFactory,
        responseProcessor?: APIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new APIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new APIApiResponseProcessor();
    }

    /**
     * Get the API client by ID.
     * get api client
     * @param orgId Organization ID
     * @param apiClientId API client ID
     */
    public getApiClientWithHttpInfo(orgId: string, apiClientId: string, _options?: ConfigurationOptions): Observable<HttpInfo<GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getApiClient(orgId, apiClientId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiClientWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the API client by ID.
     * get api client
     * @param orgId Organization ID
     * @param apiClientId API client ID
     */
    public getApiClient(orgId: string, apiClientId: string, _options?: ConfigurationOptions): Observable<GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient> {
        return this.getApiClientWithHttpInfo(orgId, apiClientId, _options).pipe(map((apiResponse: HttpInfo<GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient>) => apiResponse.data));
    }

    /**
     * List all API clients in the given organization.
     * list api clients
     * @param orgId Organization ID
     */
    public listApiClientsWithHttpInfo(orgId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listApiClients(orgId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listApiClientsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all API clients in the given organization.
     * list api clients
     * @param orgId Organization ID
     */
    public listApiClients(orgId: string, _options?: ConfigurationOptions): Observable<Array<GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient>> {
        return this.listApiClientsWithHttpInfo(orgId, _options).pipe(map((apiResponse: HttpInfo<Array<GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient>>) => apiResponse.data));
    }

}

import { BillingApiRequestFactory, BillingApiResponseProcessor} from "../apis/BillingApi";
export class ObservableBillingApi {
    private requestFactory: BillingApiRequestFactory;
    private responseProcessor: BillingApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BillingApiRequestFactory,
        responseProcessor?: BillingApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BillingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BillingApiResponseProcessor();
    }

    /**
     * Create an addon template
     * create addon
     * @param orgId Organization ID
     * @param data CreateAndUpdateAddonParams
     */
    public createAddonWithHttpInfo(orgId: string, data: CreateAndUpdateAddonParams, _options?: ConfigurationOptions): Observable<HttpInfo<BillingAddon>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createAddon(orgId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAddonWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create an addon template
     * create addon
     * @param orgId Organization ID
     * @param data CreateAndUpdateAddonParams
     */
    public createAddon(orgId: string, data: CreateAndUpdateAddonParams, _options?: ConfigurationOptions): Observable<BillingAddon> {
        return this.createAddonWithHttpInfo(orgId, data, _options).pipe(map((apiResponse: HttpInfo<BillingAddon>) => apiResponse.data));
    }

    /**
     * create refund on the payment transaction, support partial refunds multiple times.
     * create refund.
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param paymentTransactionId Payment transaction ID
     * @param amount Refund amount
     */
    public createRefundWithHttpInfo(orgId: string, buyerId: string, paymentTransactionId: string, amount: number, _options?: ConfigurationOptions): Observable<HttpInfo<BillingPaymentTransaction>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createRefund(orgId, buyerId, paymentTransactionId, amount, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRefundWithHttpInfo(rsp)));
            }));
    }

    /**
     * create refund on the payment transaction, support partial refunds multiple times.
     * create refund.
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param paymentTransactionId Payment transaction ID
     * @param amount Refund amount
     */
    public createRefund(orgId: string, buyerId: string, paymentTransactionId: string, amount: number, _options?: ConfigurationOptions): Observable<BillingPaymentTransaction> {
        return this.createRefundWithHttpInfo(orgId, buyerId, paymentTransactionId, amount, _options).pipe(map((apiResponse: HttpInfo<BillingPaymentTransaction>) => apiResponse.data));
    }

    /**
     * Soft delete an addon template
     * delete addon
     * @param orgId Organization ID
     * @param addonId Addon ID
     */
    public deleteAddonWithHttpInfo(orgId: string, addonId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteAddon(orgId, addonId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAddonWithHttpInfo(rsp)));
            }));
    }

    /**
     * Soft delete an addon template
     * delete addon
     * @param orgId Organization ID
     * @param addonId Addon ID
     */
    public deleteAddon(orgId: string, addonId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.deleteAddonWithHttpInfo(orgId, addonId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Get an addon template
     * get addon
     * @param orgId Organization ID
     * @param addonId Addon ID
     */
    public getAddonWithHttpInfo(orgId: string, addonId: string, _options?: ConfigurationOptions): Observable<HttpInfo<BillingAddon>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAddon(orgId, addonId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAddonWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get an addon template
     * get addon
     * @param orgId Organization ID
     * @param addonId Addon ID
     */
    public getAddon(orgId: string, addonId: string, _options?: ConfigurationOptions): Observable<BillingAddon> {
        return this.getAddonWithHttpInfo(orgId, addonId, _options).pipe(map((apiResponse: HttpInfo<BillingAddon>) => apiResponse.data));
    }

    /**
     * Get the invoice by ID
     * get invoice
     * @param orgId Organization ID
     * @param invoiceId Invoice ID
     */
    public getInvoiceWithHttpInfo(orgId: string, invoiceId: string, _options?: ConfigurationOptions): Observable<HttpInfo<BillingInvoice>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getInvoice(orgId, invoiceId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the invoice by ID
     * get invoice
     * @param orgId Organization ID
     * @param invoiceId Invoice ID
     */
    public getInvoice(orgId: string, invoiceId: string, _options?: ConfigurationOptions): Observable<BillingInvoice> {
        return this.getInvoiceWithHttpInfo(orgId, invoiceId, _options).pipe(map((apiResponse: HttpInfo<BillingInvoice>) => apiResponse.data));
    }

    /**
     * Issue the invoice immediately. It can be used for manual issue or reissue invoice.
     * issue invoice
     * @param orgId Organization ID
     * @param invoiceId Invoice ID
     * @param [contactIds] List of Contact IDs
     */
    public issueInvoiceWithHttpInfo(orgId: string, invoiceId: string, contactIds?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<BillingInvoice>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.issueInvoice(orgId, invoiceId, contactIds, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.issueInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Issue the invoice immediately. It can be used for manual issue or reissue invoice.
     * issue invoice
     * @param orgId Organization ID
     * @param invoiceId Invoice ID
     * @param [contactIds] List of Contact IDs
     */
    public issueInvoice(orgId: string, invoiceId: string, contactIds?: Array<string>, _options?: ConfigurationOptions): Observable<BillingInvoice> {
        return this.issueInvoiceWithHttpInfo(orgId, invoiceId, contactIds, _options).pipe(map((apiResponse: HttpInfo<BillingInvoice>) => apiResponse.data));
    }

    /**
     * List all addon templates
     * list addons
     * @param orgId Organization ID
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listAddonsWithHttpInfo(orgId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<BillingAddon>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAddons(orgId, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAddonsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all addon templates
     * list addons
     * @param orgId Organization ID
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listAddons(orgId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<Array<BillingAddon>> {
        return this.listAddonsWithHttpInfo(orgId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<Array<BillingAddon>>) => apiResponse.data));
    }

    /**
     * List invoices with pagination and filter by status (optional)
     * list invoices
     * @param orgId Organization ID
     * @param [entitlementId] Optional, filter by the entitlement ID
     * @param [buyerId] Optional, filter by the given buyer ID
     * @param [status] Optional, filter by invoice status as filter, if not provided, all status invoices are returned
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listInvoicesWithHttpInfo(orgId: string, entitlementId?: string, buyerId?: string, status?: 'DRAFT' | 'FINALIZED' | 'CANCELED' | 'DELETED' | '', limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<BillingInvoice>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listInvoices(orgId, entitlementId, buyerId, status, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listInvoicesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List invoices with pagination and filter by status (optional)
     * list invoices
     * @param orgId Organization ID
     * @param [entitlementId] Optional, filter by the entitlement ID
     * @param [buyerId] Optional, filter by the given buyer ID
     * @param [status] Optional, filter by invoice status as filter, if not provided, all status invoices are returned
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listInvoices(orgId: string, entitlementId?: string, buyerId?: string, status?: 'DRAFT' | 'FINALIZED' | 'CANCELED' | 'DELETED' | '', limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<Array<BillingInvoice>> {
        return this.listInvoicesWithHttpInfo(orgId, entitlementId, buyerId, status, limit, offset, _options).pipe(map((apiResponse: HttpInfo<Array<BillingInvoice>>) => apiResponse.data));
    }

    /**
     * List payment transactions with pagination and filters
     * list payment transactions
     * @param orgId Organization ID
     * @param [buyerId] Optional, filter by the given buyer ID
     * @param [entitlementId] Optional, filter by the given entitlement ID
     * @param [invoiceId] Optional, filter by the given invoice ID
     * @param [status] Optional, filter by status
     * @param [type] Optional, filter by transaction type
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listPaymentTransactionsWithHttpInfo(orgId: string, buyerId?: string, entitlementId?: string, invoiceId?: string, status?: 'PENDING' | 'PROCESSING' | 'SUCCESS' | 'FAILED', type?: 'CHARGE' | 'REFUND', limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<BillingPaymentTransaction>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listPaymentTransactions(orgId, buyerId, entitlementId, invoiceId, status, type, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPaymentTransactionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List payment transactions with pagination and filters
     * list payment transactions
     * @param orgId Organization ID
     * @param [buyerId] Optional, filter by the given buyer ID
     * @param [entitlementId] Optional, filter by the given entitlement ID
     * @param [invoiceId] Optional, filter by the given invoice ID
     * @param [status] Optional, filter by status
     * @param [type] Optional, filter by transaction type
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listPaymentTransactions(orgId: string, buyerId?: string, entitlementId?: string, invoiceId?: string, status?: 'PENDING' | 'PROCESSING' | 'SUCCESS' | 'FAILED', type?: 'CHARGE' | 'REFUND', limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<Array<BillingPaymentTransaction>> {
        return this.listPaymentTransactionsWithHttpInfo(orgId, buyerId, entitlementId, invoiceId, status, type, limit, offset, _options).pipe(map((apiResponse: HttpInfo<Array<BillingPaymentTransaction>>) => apiResponse.data));
    }

    /**
     * list refunds of the payment transactions.
     * list refunds.
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param paymentTransactionId Payment transaction ID
     */
    public listRefundOfPaymentTransactionWithHttpInfo(orgId: string, buyerId: string, paymentTransactionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<BillingPaymentTransaction>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listRefundOfPaymentTransaction(orgId, buyerId, paymentTransactionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listRefundOfPaymentTransactionWithHttpInfo(rsp)));
            }));
    }

    /**
     * list refunds of the payment transactions.
     * list refunds.
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param paymentTransactionId Payment transaction ID
     */
    public listRefundOfPaymentTransaction(orgId: string, buyerId: string, paymentTransactionId: string, _options?: ConfigurationOptions): Observable<Array<BillingPaymentTransaction>> {
        return this.listRefundOfPaymentTransactionWithHttpInfo(orgId, buyerId, paymentTransactionId, _options).pipe(map((apiResponse: HttpInfo<Array<BillingPaymentTransaction>>) => apiResponse.data));
    }

    /**
     * Initiate the payment for the invoice immediately. It can be used for manual payment or retry payment.
     * pay invoice
     * @param orgId Organization ID
     * @param invoiceId Invoice ID
     */
    public payInvoiceWithHttpInfo(orgId: string, invoiceId: string, _options?: ConfigurationOptions): Observable<HttpInfo<BillingInvoice>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.payInvoice(orgId, invoiceId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.payInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Initiate the payment for the invoice immediately. It can be used for manual payment or retry payment.
     * pay invoice
     * @param orgId Organization ID
     * @param invoiceId Invoice ID
     */
    public payInvoice(orgId: string, invoiceId: string, _options?: ConfigurationOptions): Observable<BillingInvoice> {
        return this.payInvoiceWithHttpInfo(orgId, invoiceId, _options).pipe(map((apiResponse: HttpInfo<BillingInvoice>) => apiResponse.data));
    }

    /**
     * Returns the preview HTML content of the invoice issued email.
     * preview invoice email
     * @param orgId Organization ID
     * @param invoiceId Invoice ID
     */
    public previewInvoiceEmailWithHttpInfo(orgId: string, invoiceId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.previewInvoiceEmail(orgId, invoiceId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.previewInvoiceEmailWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the preview HTML content of the invoice issued email.
     * preview invoice email
     * @param orgId Organization ID
     * @param invoiceId Invoice ID
     */
    public previewInvoiceEmail(orgId: string, invoiceId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.previewInvoiceEmailWithHttpInfo(orgId, invoiceId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Update an addon template
     * update addon
     * @param orgId Organization ID
     * @param addonId Addon ID
     * @param data CreateAndUpdateAddonParams
     */
    public updateAddonWithHttpInfo(orgId: string, addonId: string, data: CreateAndUpdateAddonParams, _options?: ConfigurationOptions): Observable<HttpInfo<BillingAddon>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateAddon(orgId, addonId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAddonWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an addon template
     * update addon
     * @param orgId Organization ID
     * @param addonId Addon ID
     * @param data CreateAndUpdateAddonParams
     */
    public updateAddon(orgId: string, addonId: string, data: CreateAndUpdateAddonParams, _options?: ConfigurationOptions): Observable<BillingAddon> {
        return this.updateAddonWithHttpInfo(orgId, addonId, data, _options).pipe(map((apiResponse: HttpInfo<BillingAddon>) => apiResponse.data));
    }

    /**
     * Update a draft invoice. Only DueDate, OverallDiscount, and Memo can be updated.
     * update invoice info
     * @param orgId Organization ID
     * @param invoiceId Invoice ID
     * @param data Update Invoice Info Request Params
     */
    public updateInvoiceInfoWithHttpInfo(orgId: string, invoiceId: string, data: UpdateInvoiceInfoRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BillingInvoiceInfo>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateInvoiceInfo(orgId, invoiceId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateInvoiceInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a draft invoice. Only DueDate, OverallDiscount, and Memo can be updated.
     * update invoice info
     * @param orgId Organization ID
     * @param invoiceId Invoice ID
     * @param data Update Invoice Info Request Params
     */
    public updateInvoiceInfo(orgId: string, invoiceId: string, data: UpdateInvoiceInfoRequest, _options?: ConfigurationOptions): Observable<BillingInvoiceInfo> {
        return this.updateInvoiceInfoWithHttpInfo(orgId, invoiceId, data, _options).pipe(map((apiResponse: HttpInfo<BillingInvoiceInfo>) => apiResponse.data));
    }

    /**
     * Void the invoice. It can be used for manual void or cancel the invoice.
     * void invoice
     * @param orgId Organization ID
     * @param invoiceId Invoice ID
     */
    public voidInvoiceWithHttpInfo(orgId: string, invoiceId: string, _options?: ConfigurationOptions): Observable<HttpInfo<BillingInvoice>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.voidInvoice(orgId, invoiceId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.voidInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Void the invoice. It can be used for manual void or cancel the invoice.
     * void invoice
     * @param orgId Organization ID
     * @param invoiceId Invoice ID
     */
    public voidInvoice(orgId: string, invoiceId: string, _options?: ConfigurationOptions): Observable<BillingInvoice> {
        return this.voidInvoiceWithHttpInfo(orgId, invoiceId, _options).pipe(map((apiResponse: HttpInfo<BillingInvoice>) => apiResponse.data));
    }

}

import { BuyerApiRequestFactory, BuyerApiResponseProcessor} from "../apis/BuyerApi";
export class ObservableBuyerApi {
    private requestFactory: BuyerApiRequestFactory;
    private responseProcessor: BuyerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BuyerApiRequestFactory,
        responseProcessor?: BuyerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BuyerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BuyerApiResponseProcessor();
    }

    /**
     * Close the given credit wallet, if it\'s a payment method, sync to payment provider too. Once closed, it can\'t be used for payment.
     * close credit wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param walletId Wallet ID
     */
    public closeCreditWalletWithHttpInfo(orgId: string, buyerId: string, walletId: string, _options?: ConfigurationOptions): Observable<HttpInfo<BillingWallet>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.closeCreditWallet(orgId, buyerId, walletId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.closeCreditWalletWithHttpInfo(rsp)));
            }));
    }

    /**
     * Close the given credit wallet, if it\'s a payment method, sync to payment provider too. Once closed, it can\'t be used for payment.
     * close credit wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param walletId Wallet ID
     */
    public closeCreditWallet(orgId: string, buyerId: string, walletId: string, _options?: ConfigurationOptions): Observable<BillingWallet> {
        return this.closeCreditWalletWithHttpInfo(orgId, buyerId, walletId, _options).pipe(map((apiResponse: HttpInfo<BillingWallet>) => apiResponse.data));
    }

    /**
     * create a new buyer for Stripe or Adyen under the given organization.
     * create buyer
     * @param orgId Organization ID
     * @param data CreateBuyerParams
     */
    public createBuyerWithHttpInfo(orgId: string, data: CreateBuyerParams, _options?: ConfigurationOptions): Observable<HttpInfo<IdentityBuyer>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createBuyer(orgId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBuyerWithHttpInfo(rsp)));
            }));
    }

    /**
     * create a new buyer for Stripe or Adyen under the given organization.
     * create buyer
     * @param orgId Organization ID
     * @param data CreateBuyerParams
     */
    public createBuyer(orgId: string, data: CreateBuyerParams, _options?: ConfigurationOptions): Observable<IdentityBuyer> {
        return this.createBuyerWithHttpInfo(orgId, data, _options).pipe(map((apiResponse: HttpInfo<IdentityBuyer>) => apiResponse.data));
    }

    /**
     * create a new credit wallet for the buyer.
     * create credit wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     */
    public createCreditWalletWithHttpInfo(orgId: string, buyerId: string, _options?: ConfigurationOptions): Observable<HttpInfo<BillingWallet>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createCreditWallet(orgId, buyerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCreditWalletWithHttpInfo(rsp)));
            }));
    }

    /**
     * create a new credit wallet for the buyer.
     * create credit wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     */
    public createCreditWallet(orgId: string, buyerId: string, _options?: ConfigurationOptions): Observable<BillingWallet> {
        return this.createCreditWalletWithHttpInfo(orgId, buyerId, _options).pipe(map((apiResponse: HttpInfo<BillingWallet>) => apiResponse.data));
    }

    /**
     * delete a wallet of the buyer, if it\'s a payment method, sync to payment provider too.
     * delete buyer wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param walletId Wallet ID
     */
    public deleteBuyerWalletWithHttpInfo(orgId: string, buyerId: string, walletId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteBuyerWallet(orgId, buyerId, walletId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBuyerWalletWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete a wallet of the buyer, if it\'s a payment method, sync to payment provider too.
     * delete buyer wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param walletId Wallet ID
     */
    public deleteBuyerWallet(orgId: string, buyerId: string, walletId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.deleteBuyerWalletWithHttpInfo(orgId, buyerId, walletId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * get buyer by the given organization and buyer id.
     * get buyer
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     */
    public getBuyerWithHttpInfo(orgId: string, buyerId: string, _options?: ConfigurationOptions): Observable<HttpInfo<IdentityBuyer>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBuyer(orgId, buyerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuyerWithHttpInfo(rsp)));
            }));
    }

    /**
     * get buyer by the given organization and buyer id.
     * get buyer
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     */
    public getBuyer(orgId: string, buyerId: string, _options?: ConfigurationOptions): Observable<IdentityBuyer> {
        return this.getBuyerWithHttpInfo(orgId, buyerId, _options).pipe(map((apiResponse: HttpInfo<IdentityBuyer>) => apiResponse.data));
    }

    /**
     * list all wallets of a buyer.
     * list buyer\'s wallets
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     */
    public listBuyerWalletsWithHttpInfo(orgId: string, buyerId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<BillingWallet>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listBuyerWallets(orgId, buyerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listBuyerWalletsWithHttpInfo(rsp)));
            }));
    }

    /**
     * list all wallets of a buyer.
     * list buyer\'s wallets
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     */
    public listBuyerWallets(orgId: string, buyerId: string, _options?: ConfigurationOptions): Observable<Array<BillingWallet>> {
        return this.listBuyerWalletsWithHttpInfo(orgId, buyerId, _options).pipe(map((apiResponse: HttpInfo<Array<BillingWallet>>) => apiResponse.data));
    }

    /**
     * list buyers by the given organization with pagination and optional filters.
     * list buyers
     * @param orgId Organization ID
     * @param [partner] filter by partner
     * @param [contactId] filter by contactId
     * @param [awsAccountId] filter by awsAccountId
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listBuyersWithHttpInfo(orgId: string, partner?: string, contactId?: string, awsAccountId?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<IdentityBuyer>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listBuyers(orgId, partner, contactId, awsAccountId, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listBuyersWithHttpInfo(rsp)));
            }));
    }

    /**
     * list buyers by the given organization with pagination and optional filters.
     * list buyers
     * @param orgId Organization ID
     * @param [partner] filter by partner
     * @param [contactId] filter by contactId
     * @param [awsAccountId] filter by awsAccountId
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listBuyers(orgId: string, partner?: string, contactId?: string, awsAccountId?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<Array<IdentityBuyer>> {
        return this.listBuyersWithHttpInfo(orgId, partner, contactId, awsAccountId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<Array<IdentityBuyer>>) => apiResponse.data));
    }

    /**
     * set a payment method wallet as buyer\'s default wallet.
     * set buyer default wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param walletId Wallet ID
     */
    public setBuyerDefaultWalletWithHttpInfo(orgId: string, buyerId: string, walletId: string, _options?: ConfigurationOptions): Observable<HttpInfo<IdentityBuyer>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.setBuyerDefaultWallet(orgId, buyerId, walletId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setBuyerDefaultWalletWithHttpInfo(rsp)));
            }));
    }

    /**
     * set a payment method wallet as buyer\'s default wallet.
     * set buyer default wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param walletId Wallet ID
     */
    public setBuyerDefaultWallet(orgId: string, buyerId: string, walletId: string, _options?: ConfigurationOptions): Observable<IdentityBuyer> {
        return this.setBuyerDefaultWalletWithHttpInfo(orgId, buyerId, walletId, _options).pipe(map((apiResponse: HttpInfo<IdentityBuyer>) => apiResponse.data));
    }

    /**
     * update buyer by the given organization and buyer id.
     * update buyer
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param data UpdateBuyerParams
     */
    public updateBuyerWithHttpInfo(orgId: string, buyerId: string, data: UpdateBuyerParams, _options?: ConfigurationOptions): Observable<HttpInfo<IdentityBuyer>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateBuyer(orgId, buyerId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBuyerWithHttpInfo(rsp)));
            }));
    }

    /**
     * update buyer by the given organization and buyer id.
     * update buyer
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param data UpdateBuyerParams
     */
    public updateBuyer(orgId: string, buyerId: string, data: UpdateBuyerParams, _options?: ConfigurationOptions): Observable<IdentityBuyer> {
        return this.updateBuyerWithHttpInfo(orgId, buyerId, data, _options).pipe(map((apiResponse: HttpInfo<IdentityBuyer>) => apiResponse.data));
    }

    /**
     * update startTime or expireTime of the wallet.
     * update credit wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param walletId Wallet ID
     */
    public updateCreditWalletWithHttpInfo(orgId: string, buyerId: string, walletId: string, _options?: ConfigurationOptions): Observable<HttpInfo<BillingWallet>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCreditWallet(orgId, buyerId, walletId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCreditWalletWithHttpInfo(rsp)));
            }));
    }

    /**
     * update startTime or expireTime of the wallet.
     * update credit wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param walletId Wallet ID
     */
    public updateCreditWallet(orgId: string, buyerId: string, walletId: string, _options?: ConfigurationOptions): Observable<BillingWallet> {
        return this.updateCreditWalletWithHttpInfo(orgId, buyerId, walletId, _options).pipe(map((apiResponse: HttpInfo<BillingWallet>) => apiResponse.data));
    }

}

import { ContactApiRequestFactory, ContactApiResponseProcessor} from "../apis/ContactApi";
export class ObservableContactApi {
    private requestFactory: ContactApiRequestFactory;
    private responseProcessor: ContactApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContactApiRequestFactory,
        responseProcessor?: ContactApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContactApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContactApiResponseProcessor();
    }

    /**
     * add contact to buyer by the given organization, buyer id and contact id.
     * add contact to buyer
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param contactId Contact ID
     */
    public addContactToBuyerWithHttpInfo(orgId: string, buyerId: string, contactId: string, _options?: ConfigurationOptions): Observable<HttpInfo<IdentityBuyer>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addContactToBuyer(orgId, buyerId, contactId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addContactToBuyerWithHttpInfo(rsp)));
            }));
    }

    /**
     * add contact to buyer by the given organization, buyer id and contact id.
     * add contact to buyer
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param contactId Contact ID
     */
    public addContactToBuyer(orgId: string, buyerId: string, contactId: string, _options?: ConfigurationOptions): Observable<IdentityBuyer> {
        return this.addContactToBuyerWithHttpInfo(orgId, buyerId, contactId, _options).pipe(map((apiResponse: HttpInfo<IdentityBuyer>) => apiResponse.data));
    }

    /**
     * add contact to offer by the given organization, offer id and contact id.
     * add contact to offer
     * @param orgId Organization ID
     * @param contactId Contact ID
     * @param offerId Offer ID
     */
    public addContactToOfferWithHttpInfo(orgId: string, contactId: string, offerId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addContactToOffer(orgId, contactId, offerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addContactToOfferWithHttpInfo(rsp)));
            }));
    }

    /**
     * add contact to offer by the given organization, offer id and contact id.
     * add contact to offer
     * @param orgId Organization ID
     * @param contactId Contact ID
     * @param offerId Offer ID
     */
    public addContactToOffer(orgId: string, contactId: string, offerId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.addContactToOfferWithHttpInfo(orgId, contactId, offerId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Create multiple contacts under the given organization. If an email address already exists, return the existing contact.
     * batch create contacts
     * @param orgId Organization ID
     * @param data RequestBody
     */
    public batchCreateContactsWithHttpInfo(orgId: string, data: Array<IdentityContact>, _options?: ConfigurationOptions): Observable<HttpInfo<Array<Array<IdentityContact>>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.batchCreateContacts(orgId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchCreateContactsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create multiple contacts under the given organization. If an email address already exists, return the existing contact.
     * batch create contacts
     * @param orgId Organization ID
     * @param data RequestBody
     */
    public batchCreateContacts(orgId: string, data: Array<IdentityContact>, _options?: ConfigurationOptions): Observable<Array<Array<IdentityContact>>> {
        return this.batchCreateContactsWithHttpInfo(orgId, data, _options).pipe(map((apiResponse: HttpInfo<Array<Array<IdentityContact>>>) => apiResponse.data));
    }

    /**
     * Create a contact under the given organization. If the email address already exists, return the existing contact.
     * create contact
     * @param orgId Organization ID
     * @param data RequestBody
     */
    public createContactWithHttpInfo(orgId: string, data: IdentityContact, _options?: ConfigurationOptions): Observable<HttpInfo<IdentityContact>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createContact(orgId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createContactWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a contact under the given organization. If the email address already exists, return the existing contact.
     * create contact
     * @param orgId Organization ID
     * @param data RequestBody
     */
    public createContact(orgId: string, data: IdentityContact, _options?: ConfigurationOptions): Observable<IdentityContact> {
        return this.createContactWithHttpInfo(orgId, data, _options).pipe(map((apiResponse: HttpInfo<IdentityContact>) => apiResponse.data));
    }

    /**
     * Get the Contact by the given contact ID.
     * get contact
     * @param orgId Organization ID
     * @param contactId Contact ID
     */
    public getContactWithHttpInfo(orgId: string, contactId: string, _options?: ConfigurationOptions): Observable<HttpInfo<IdentityContact>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getContact(orgId, contactId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContactWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the Contact by the given contact ID.
     * get contact
     * @param orgId Organization ID
     * @param contactId Contact ID
     */
    public getContact(orgId: string, contactId: string, _options?: ConfigurationOptions): Observable<IdentityContact> {
        return this.getContactWithHttpInfo(orgId, contactId, _options).pipe(map((apiResponse: HttpInfo<IdentityContact>) => apiResponse.data));
    }

    /**
     * List all contacts under the given organization.
     * list contacts by organization
     * @param orgId Organization ID
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listContactsByOrganizationWithHttpInfo(orgId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<IdentityContact>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listContactsByOrganization(orgId, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listContactsByOrganizationWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all contacts under the given organization.
     * list contacts by organization
     * @param orgId Organization ID
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listContactsByOrganization(orgId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<Array<IdentityContact>> {
        return this.listContactsByOrganizationWithHttpInfo(orgId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<Array<IdentityContact>>) => apiResponse.data));
    }

    /**
     * remove contact from buyer by the given organization, buyer id and contact id.
     * remove contact from buyer
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param contactId Contact ID
     */
    public removeContactFromBuyerWithHttpInfo(orgId: string, buyerId: string, contactId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.removeContactFromBuyer(orgId, buyerId, contactId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeContactFromBuyerWithHttpInfo(rsp)));
            }));
    }

    /**
     * remove contact from buyer by the given organization, buyer id and contact id.
     * remove contact from buyer
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param contactId Contact ID
     */
    public removeContactFromBuyer(orgId: string, buyerId: string, contactId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.removeContactFromBuyerWithHttpInfo(orgId, buyerId, contactId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * remove contact from offer by given organization, offer id and contact id.
     * remove contact from offer
     * @param orgId Organization ID
     * @param contactId Contact ID
     * @param offerId Offer ID
     */
    public removeContactFromOfferWithHttpInfo(orgId: string, contactId: string, offerId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.removeContactFromOffer(orgId, contactId, offerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeContactFromOfferWithHttpInfo(rsp)));
            }));
    }

    /**
     * remove contact from offer by given organization, offer id and contact id.
     * remove contact from offer
     * @param orgId Organization ID
     * @param contactId Contact ID
     * @param offerId Offer ID
     */
    public removeContactFromOffer(orgId: string, contactId: string, offerId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.removeContactFromOfferWithHttpInfo(orgId, contactId, offerId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Update the contact for the given organization and contact ID. This endpoint supports partial updates. Only the fields provided in the request body will be updated. To clear a field, provide it with an empty value (e.g., \"\" for name, or {} for info).
     * update contact
     * @param orgId Organization ID
     * @param contactId Contact ID
     * @param data Request Body
     */
    public updateContactWithHttpInfo(orgId: string, contactId: string, data: IdentityContact, _options?: ConfigurationOptions): Observable<HttpInfo<IdentityContact>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateContact(orgId, contactId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateContactWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the contact for the given organization and contact ID. This endpoint supports partial updates. Only the fields provided in the request body will be updated. To clear a field, provide it with an empty value (e.g., \"\" for name, or {} for info).
     * update contact
     * @param orgId Organization ID
     * @param contactId Contact ID
     * @param data Request Body
     */
    public updateContact(orgId: string, contactId: string, data: IdentityContact, _options?: ConfigurationOptions): Observable<IdentityContact> {
        return this.updateContactWithHttpInfo(orgId, contactId, data, _options).pipe(map((apiResponse: HttpInfo<IdentityContact>) => apiResponse.data));
    }

}

import { EntitlementApiRequestFactory, EntitlementApiResponseProcessor} from "../apis/EntitlementApi";
export class ObservableEntitlementApi {
    private requestFactory: EntitlementApiRequestFactory;
    private responseProcessor: EntitlementApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EntitlementApiRequestFactory,
        responseProcessor?: EntitlementApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EntitlementApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EntitlementApiResponseProcessor();
    }

    /**
     * Add the credit amount to the given Entitlement. The credit amount is accumulated & saved in the current Entitlement Term of the gvien Entitlement.
     * add entitlement credit
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public addEntitlementCreditWithHttpInfo(orgId: string, entitlementId: string, data: AddEntitlementCreditParams, _options?: ConfigurationOptions): Observable<HttpInfo<AddEntitlementCreditResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addEntitlementCredit(orgId, entitlementId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addEntitlementCreditWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add the credit amount to the given Entitlement. The credit amount is accumulated & saved in the current Entitlement Term of the gvien Entitlement.
     * add entitlement credit
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public addEntitlementCredit(orgId: string, entitlementId: string, data: AddEntitlementCreditParams, _options?: ConfigurationOptions): Observable<AddEntitlementCreditResponse> {
        return this.addEntitlementCreditWithHttpInfo(orgId, entitlementId, data, _options).pipe(map((apiResponse: HttpInfo<AddEntitlementCreditResponse>) => apiResponse.data));
    }

    /**
     * Apply one billing addon to the given Entitlement. The entitlement status must be ACTIVE.
     * apply addon to entitlement
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public applyAddonToEntitlementWithHttpInfo(orgId: string, entitlementId: string, data: BillingAddonRecord, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadEntitlement>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.applyAddonToEntitlement(orgId, entitlementId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applyAddonToEntitlementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Apply one billing addon to the given Entitlement. The entitlement status must be ACTIVE.
     * apply addon to entitlement
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public applyAddonToEntitlement(orgId: string, entitlementId: string, data: BillingAddonRecord, _options?: ConfigurationOptions): Observable<WorkloadEntitlement> {
        return this.applyAddonToEntitlementWithHttpInfo(orgId, entitlementId, data, _options).pipe(map((apiResponse: HttpInfo<WorkloadEntitlement>) => apiResponse.data));
    }

    /**
     * Approve the given Entitlement. Only applicable to the Azure or GCP Entitlements with the status of \"PENDING_START\". Return 200 if the entitlement is already active.
     * approve entitlement
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public approveEntitlementWithHttpInfo(orgId: string, entitlementId: string, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadEntitlement>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.approveEntitlement(orgId, entitlementId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.approveEntitlementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Approve the given Entitlement. Only applicable to the Azure or GCP Entitlements with the status of \"PENDING_START\". Return 200 if the entitlement is already active.
     * approve entitlement
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public approveEntitlement(orgId: string, entitlementId: string, _options?: ConfigurationOptions): Observable<WorkloadEntitlement> {
        return this.approveEntitlementWithHttpInfo(orgId, entitlementId, _options).pipe(map((apiResponse: HttpInfo<WorkloadEntitlement>) => apiResponse.data));
    }

    /**
     * Cancel the active subscription in Azure Marketplace.
     * cancel entitlement
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public cancelEntitlementWithHttpInfo(orgId: string, entitlementId: string, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadEntitlement>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.cancelEntitlement(orgId, entitlementId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelEntitlementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Cancel the active subscription in Azure Marketplace.
     * cancel entitlement
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public cancelEntitlement(orgId: string, entitlementId: string, _options?: ConfigurationOptions): Observable<WorkloadEntitlement> {
        return this.cancelEntitlementWithHttpInfo(orgId, entitlementId, _options).pipe(map((apiResponse: HttpInfo<WorkloadEntitlement>) => apiResponse.data));
    }

    /**
     * Create an new entitlement for the given buyer & offer. Only applicable to non cloud billing partners.
     * create entitlement
     * @param orgId Organization ID
     * @param data RequestBody
     */
    public createEntitlementWithHttpInfo(orgId: string, data: CreateEntitlementParams, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadEntitlement>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createEntitlement(orgId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEntitlementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create an new entitlement for the given buyer & offer. Only applicable to non cloud billing partners.
     * create entitlement
     * @param orgId Organization ID
     * @param data RequestBody
     */
    public createEntitlement(orgId: string, data: CreateEntitlementParams, _options?: ConfigurationOptions): Observable<WorkloadEntitlement> {
        return this.createEntitlementWithHttpInfo(orgId, data, _options).pipe(map((apiResponse: HttpInfo<WorkloadEntitlement>) => apiResponse.data));
    }

    /**
     * Delete the entitlement term by the given entitlement ID and entitlement term ID. Only allow to delete the divided entitlement term.
     * delete entitlement term
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param entitlementTermId Entitlement Term ID
     */
    public deleteEntitlementTermWithHttpInfo(orgId: string, entitlementId: string, entitlementTermId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteEntitlementTerm(orgId, entitlementId, entitlementTermId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEntitlementTermWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete the entitlement term by the given entitlement ID and entitlement term ID. Only allow to delete the divided entitlement term.
     * delete entitlement term
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param entitlementTermId Entitlement Term ID
     */
    public deleteEntitlementTerm(orgId: string, entitlementId: string, entitlementTermId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.deleteEntitlementTermWithHttpInfo(orgId, entitlementId, entitlementTermId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Divide the commit equally from the given entitlement into sub entitlement terms based on the given time periods.
     * divide entitlement commit
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public divideEntitlementCommitWithHttpInfo(orgId: string, entitlementId: string, data: DivideEntitlementCommitParams, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.divideEntitlementCommit(orgId, entitlementId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.divideEntitlementCommitWithHttpInfo(rsp)));
            }));
    }

    /**
     * Divide the commit equally from the given entitlement into sub entitlement terms based on the given time periods.
     * divide entitlement commit
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public divideEntitlementCommit(orgId: string, entitlementId: string, data: DivideEntitlementCommitParams, _options?: ConfigurationOptions): Observable<string> {
        return this.divideEntitlementCommitWithHttpInfo(orgId, entitlementId, data, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Get the entitlement by ID.
     * get entitlement
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public getEntitlementWithHttpInfo(orgId: string, entitlementId: string, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadEntitlement>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getEntitlement(orgId, entitlementId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEntitlementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the entitlement by ID.
     * get entitlement
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public getEntitlement(orgId: string, entitlementId: string, _options?: ConfigurationOptions): Observable<WorkloadEntitlement> {
        return this.getEntitlementWithHttpInfo(orgId, entitlementId, _options).pipe(map((apiResponse: HttpInfo<WorkloadEntitlement>) => apiResponse.data));
    }

    /**
     * Get the entitlement term by ID.
     * get entitlement term
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param entitlementTermId Entitlement Term ID
     */
    public getEntitlementTermWithHttpInfo(orgId: string, entitlementId: string, entitlementTermId: string, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadEntitlementTerm>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getEntitlementTerm(orgId, entitlementId, entitlementTermId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEntitlementTermWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the entitlement term by ID.
     * get entitlement term
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param entitlementTermId Entitlement Term ID
     */
    public getEntitlementTerm(orgId: string, entitlementId: string, entitlementTermId: string, _options?: ConfigurationOptions): Observable<WorkloadEntitlementTerm> {
        return this.getEntitlementTermWithHttpInfo(orgId, entitlementId, entitlementTermId, _options).pipe(map((apiResponse: HttpInfo<WorkloadEntitlementTerm>) => apiResponse.data));
    }

    /**
     * List all Entitlement Terms of the given Entitlement.
     * list entitlement terms
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public listEntitlementTermsWithHttpInfo(orgId: string, entitlementId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<WorkloadEntitlementTerm>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listEntitlementTerms(orgId, entitlementId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listEntitlementTermsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all Entitlement Terms of the given Entitlement.
     * list entitlement terms
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public listEntitlementTerms(orgId: string, entitlementId: string, _options?: ConfigurationOptions): Observable<Array<WorkloadEntitlementTerm>> {
        return this.listEntitlementTermsWithHttpInfo(orgId, entitlementId, _options).pipe(map((apiResponse: HttpInfo<Array<WorkloadEntitlementTerm>>) => apiResponse.data));
    }

    /**
     * List entitlements under the given organization with pagination and optional filters.
     * list entitlements
     * @param orgId Organization ID
     * @param [partner] filter by partner
     * @param [productId] filter by productId
     * @param [offerId] filter by offerId
     * @param [buyerId] filter by buyerId
     * @param [externalId] filter by externalId
     * @param [buyerAccountId] filter by buyerAccountId is currently supported only for AWS
     * @param [contactId] filter by contactId
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listEntitlementsWithHttpInfo(orgId: string, partner?: string, productId?: string, offerId?: string, buyerId?: string, externalId?: string, buyerAccountId?: string, contactId?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<WorkloadEntitlement>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listEntitlements(orgId, partner, productId, offerId, buyerId, externalId, buyerAccountId, contactId, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listEntitlementsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List entitlements under the given organization with pagination and optional filters.
     * list entitlements
     * @param orgId Organization ID
     * @param [partner] filter by partner
     * @param [productId] filter by productId
     * @param [offerId] filter by offerId
     * @param [buyerId] filter by buyerId
     * @param [externalId] filter by externalId
     * @param [buyerAccountId] filter by buyerAccountId is currently supported only for AWS
     * @param [contactId] filter by contactId
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listEntitlements(orgId: string, partner?: string, productId?: string, offerId?: string, buyerId?: string, externalId?: string, buyerAccountId?: string, contactId?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<Array<WorkloadEntitlement>> {
        return this.listEntitlementsWithHttpInfo(orgId, partner, productId, offerId, buyerId, externalId, buyerAccountId, contactId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<Array<WorkloadEntitlement>>) => apiResponse.data));
    }

    /**
     * Schedule the cancellation of the given Entitlement.
     * schedule entitlement cancellation
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public scheduleEntitlementCancellationWithHttpInfo(orgId: string, entitlementId: string, data: CancellationSchedule, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadEntitlement>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.scheduleEntitlementCancellation(orgId, entitlementId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.scheduleEntitlementCancellationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Schedule the cancellation of the given Entitlement.
     * schedule entitlement cancellation
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public scheduleEntitlementCancellation(orgId: string, entitlementId: string, data: CancellationSchedule, _options?: ConfigurationOptions): Observable<WorkloadEntitlement> {
        return this.scheduleEntitlementCancellationWithHttpInfo(orgId, entitlementId, data, _options).pipe(map((apiResponse: HttpInfo<WorkloadEntitlement>) => apiResponse.data));
    }

    /**
     * Unschedule the cancellation of the given Entitlement.
     * unschedule entitlement cancellation
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public unscheduleEntitlementCancellationWithHttpInfo(orgId: string, entitlementId: string, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadEntitlement>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.unscheduleEntitlementCancellation(orgId, entitlementId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unscheduleEntitlementCancellationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unschedule the cancellation of the given Entitlement.
     * unschedule entitlement cancellation
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public unscheduleEntitlementCancellation(orgId: string, entitlementId: string, _options?: ConfigurationOptions): Observable<WorkloadEntitlement> {
        return this.unscheduleEntitlementCancellationWithHttpInfo(orgId, entitlementId, _options).pipe(map((apiResponse: HttpInfo<WorkloadEntitlement>) => apiResponse.data));
    }

    /**
     * Update the meta info of the given entitlement.
     * update entitlement meta info
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data Entitlement meta info to update
     */
    public updateEntitlementMetaInfoWithHttpInfo(orgId: string, entitlementId: string, data: WorkloadMetaInfo, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadMetaInfo>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateEntitlementMetaInfo(orgId, entitlementId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateEntitlementMetaInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the meta info of the given entitlement.
     * update entitlement meta info
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data Entitlement meta info to update
     */
    public updateEntitlementMetaInfo(orgId: string, entitlementId: string, data: WorkloadMetaInfo, _options?: ConfigurationOptions): Observable<WorkloadMetaInfo> {
        return this.updateEntitlementMetaInfoWithHttpInfo(orgId, entitlementId, data, _options).pipe(map((apiResponse: HttpInfo<WorkloadMetaInfo>) => apiResponse.data));
    }

    /**
     * Update the name of the given Entitlement.
     * update entitlement name
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data UpdateEntitlementNameParams
     */
    public updateEntitlementNameWithHttpInfo(orgId: string, entitlementId: string, data: GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibUpdateEntitlementNameParams, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadEntitlement>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateEntitlementName(orgId, entitlementId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateEntitlementNameWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the name of the given Entitlement.
     * update entitlement name
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data UpdateEntitlementNameParams
     */
    public updateEntitlementName(orgId: string, entitlementId: string, data: GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibUpdateEntitlementNameParams, _options?: ConfigurationOptions): Observable<WorkloadEntitlement> {
        return this.updateEntitlementNameWithHttpInfo(orgId, entitlementId, data, _options).pipe(map((apiResponse: HttpInfo<WorkloadEntitlement>) => apiResponse.data));
    }

    /**
     * Update the price model of the given entitlement, such as recurring commits, billable dimensions. Only applicable to non cloud billing partners.
     * update entitlement price model
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data Entitlement price model update params
     */
    public updateEntitlementPriceModelWithHttpInfo(orgId: string, entitlementId: string, data: UpdateEntitlementPriceModelParams, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadEntitlement>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateEntitlementPriceModel(orgId, entitlementId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateEntitlementPriceModelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the price model of the given entitlement, such as recurring commits, billable dimensions. Only applicable to non cloud billing partners.
     * update entitlement price model
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data Entitlement price model update params
     */
    public updateEntitlementPriceModel(orgId: string, entitlementId: string, data: UpdateEntitlementPriceModelParams, _options?: ConfigurationOptions): Observable<WorkloadEntitlement> {
        return this.updateEntitlementPriceModelWithHttpInfo(orgId, entitlementId, data, _options).pipe(map((apiResponse: HttpInfo<WorkloadEntitlement>) => apiResponse.data));
    }

    /**
     * Update the seat number for the active AZURE subscription.
     * update seat for the active AZURE subscription
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param newSeat New seat number
     */
    public updateEntitlementSeatWithHttpInfo(orgId: string, entitlementId: string, newSeat: number, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadEntitlement>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateEntitlementSeat(orgId, entitlementId, newSeat, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateEntitlementSeatWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the seat number for the active AZURE subscription.
     * update seat for the active AZURE subscription
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param newSeat New seat number
     */
    public updateEntitlementSeat(orgId: string, entitlementId: string, newSeat: number, _options?: ConfigurationOptions): Observable<WorkloadEntitlement> {
        return this.updateEntitlementSeatWithHttpInfo(orgId, entitlementId, newSeat, _options).pipe(map((apiResponse: HttpInfo<WorkloadEntitlement>) => apiResponse.data));
    }

}

import { MeteringApiRequestFactory, MeteringApiResponseProcessor} from "../apis/MeteringApi";
export class ObservableMeteringApi {
    private requestFactory: MeteringApiRequestFactory;
    private responseProcessor: MeteringApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MeteringApiRequestFactory,
        responseProcessor?: MeteringApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MeteringApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MeteringApiResponseProcessor();
    }

    /**
     * Batch report new usage record groups.
     * batch report usageRecordGroups
     * @param orgId Organization ID
     * @param usageRecordGroups Array of new usage record groups to report
     */
    public batchReportUsageRecordGroupsWithHttpInfo(orgId: string, usageRecordGroups: Array<NewUsageRecordGroup>, _options?: ConfigurationOptions): Observable<HttpInfo<Array<MeteringUsageRecordGroup>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.batchReportUsageRecordGroups(orgId, usageRecordGroups, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchReportUsageRecordGroupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Batch report new usage record groups.
     * batch report usageRecordGroups
     * @param orgId Organization ID
     * @param usageRecordGroups Array of new usage record groups to report
     */
    public batchReportUsageRecordGroups(orgId: string, usageRecordGroups: Array<NewUsageRecordGroup>, _options?: ConfigurationOptions): Observable<Array<MeteringUsageRecordGroup>> {
        return this.batchReportUsageRecordGroupsWithHttpInfo(orgId, usageRecordGroups, _options).pipe(map((apiResponse: HttpInfo<Array<MeteringUsageRecordGroup>>) => apiResponse.data));
    }

    /**
     * Provide a batch of usage record groups and validate each individual usage record group one by one.
     * batch validate usageRecordGroups
     * @param orgId Organization ID
     * @param data Array of usage record groups to be validated
     */
    public batchValidateUsageRecordGroupsWithHttpInfo(orgId: string, data: Array<NewUsageRecordGroup>, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.batchValidateUsageRecordGroups(orgId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchValidateUsageRecordGroupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Provide a batch of usage record groups and validate each individual usage record group one by one.
     * batch validate usageRecordGroups
     * @param orgId Organization ID
     * @param data Array of usage record groups to be validated
     */
    public batchValidateUsageRecordGroups(orgId: string, data: Array<NewUsageRecordGroup>, _options?: ConfigurationOptions): Observable<string> {
        return this.batchValidateUsageRecordGroupsWithHttpInfo(orgId, data, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Create a new billable metric for the given organization.
     * create billable metric
     * @param orgId Organization ID
     * @param data RequestBody
     */
    public createBillableMetricWithHttpInfo(orgId: string, data: BillableMetric, _options?: ConfigurationOptions): Observable<HttpInfo<BillableMetric>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createBillableMetric(orgId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBillableMetricWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new billable metric for the given organization.
     * create billable metric
     * @param orgId Organization ID
     * @param data RequestBody
     */
    public createBillableMetric(orgId: string, data: BillableMetric, _options?: ConfigurationOptions): Observable<BillableMetric> {
        return this.createBillableMetricWithHttpInfo(orgId, data, _options).pipe(map((apiResponse: HttpInfo<BillableMetric>) => apiResponse.data));
    }

    /**
     * delete the UsageRecordGroup for the given organization and usageRecordGroup ID. Only usageRecordGroup with status \"CREATED\" or \"INVALID\" can be deleted.
     * delete usageRecordGroup
     * @param orgId Organization ID
     * @param usageRecordGroupId UsageRecordGroup ID
     * @param [creationDate] UsageRecordGroup\&#39;s creation date (UTC) in YYYY-MM-DD format
     */
    public deleteUsageRecordGroupWithHttpInfo(orgId: string, usageRecordGroupId: string, creationDate?: string, _options?: ConfigurationOptions): Observable<HttpInfo<MeteringUsageRecordGroup>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteUsageRecordGroup(orgId, usageRecordGroupId, creationDate, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteUsageRecordGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete the UsageRecordGroup for the given organization and usageRecordGroup ID. Only usageRecordGroup with status \"CREATED\" or \"INVALID\" can be deleted.
     * delete usageRecordGroup
     * @param orgId Organization ID
     * @param usageRecordGroupId UsageRecordGroup ID
     * @param [creationDate] UsageRecordGroup\&#39;s creation date (UTC) in YYYY-MM-DD format
     */
    public deleteUsageRecordGroup(orgId: string, usageRecordGroupId: string, creationDate?: string, _options?: ConfigurationOptions): Observable<MeteringUsageRecordGroup> {
        return this.deleteUsageRecordGroupWithHttpInfo(orgId, usageRecordGroupId, creationDate, _options).pipe(map((apiResponse: HttpInfo<MeteringUsageRecordGroup>) => apiResponse.data));
    }

    /**
     * Get the billable metric for the given organization and billable metric ID.
     * get billable metric
     * @param orgId Organization ID
     * @param billableMetricId Billable Metric ID
     */
    public getBillableMetricWithHttpInfo(orgId: string, billableMetricId: string, _options?: ConfigurationOptions): Observable<HttpInfo<BillableMetric>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBillableMetric(orgId, billableMetricId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBillableMetricWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the billable metric for the given organization and billable metric ID.
     * get billable metric
     * @param orgId Organization ID
     * @param billableMetricId Billable Metric ID
     */
    public getBillableMetric(orgId: string, billableMetricId: string, _options?: ConfigurationOptions): Observable<BillableMetric> {
        return this.getBillableMetricWithHttpInfo(orgId, billableMetricId, _options).pipe(map((apiResponse: HttpInfo<BillableMetric>) => apiResponse.data));
    }

    /**
     * Get the usage metering config info of the given organization.
     * get usage metering config info
     * @param orgId Organization ID
     */
    public getUsageMeteringConfigInfoWithHttpInfo(orgId: string, _options?: ConfigurationOptions): Observable<HttpInfo<UsageMeteringConfigInfo>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getUsageMeteringConfigInfo(orgId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUsageMeteringConfigInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the usage metering config info of the given organization.
     * get usage metering config info
     * @param orgId Organization ID
     */
    public getUsageMeteringConfigInfo(orgId: string, _options?: ConfigurationOptions): Observable<UsageMeteringConfigInfo> {
        return this.getUsageMeteringConfigInfoWithHttpInfo(orgId, _options).pipe(map((apiResponse: HttpInfo<UsageMeteringConfigInfo>) => apiResponse.data));
    }

    /**
     * list billable metrics for the given organization.
     * list billable metrics
     * @param orgId Organization ID
     * @param [status] Status of the billable metric
     */
    public listBillableMetricsWithHttpInfo(orgId: string, status?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<BillableMetric>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listBillableMetrics(orgId, status, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listBillableMetricsWithHttpInfo(rsp)));
            }));
    }

    /**
     * list billable metrics for the given organization.
     * list billable metrics
     * @param orgId Organization ID
     * @param [status] Status of the billable metric
     */
    public listBillableMetrics(orgId: string, status?: string, _options?: ConfigurationOptions): Observable<Array<BillableMetric>> {
        return this.listBillableMetricsWithHttpInfo(orgId, status, _options).pipe(map((apiResponse: HttpInfo<Array<BillableMetric>>) => apiResponse.data));
    }

    /**
     * List UsageRecordGroups by the given organization, partner, product, entitlement or buyer. Only provide one or none of the optional query parameters: partner, productId, entitlementId & buyerId .
     * list usageRecordGroups
     * @param orgId Organization ID
     * @param [partner] Cloud Partner
     * @param [buyerId] filter by buyer ID, default no filter by buyerId if not provided
     * @param [entitlementId] filter by entitlement ID, default no filter by entitlementId if not provided
     * @param [status] The status of the usage record group, default no filter by status if not provided
     * @param [source] The source of the usage record group, default no filter by source if not provided
     * @param [metaInfo] metaInfo filter
     * @param [startDate] start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * @param [endDate] end date (UTC) in YYYY-MM-DD format, default is today
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listUsageRecordGroupsWithHttpInfo(orgId: string, partner?: 'AWS' | 'AZURE' | 'GCP', buyerId?: string, entitlementId?: string, status?: 'CREATED' | 'DELETED' | 'INVALID' | 'REPORTED' | 'REPORT_PENDING' | 'REPORT_FAILED', source?: '' | 'API' | 'INTERNAL' | 'LAGO' | 'METRONOME' | 'ORB' | 'STRIPE', metaInfo?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListUsageRecordGroupsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listUsageRecordGroups(orgId, partner, buyerId, entitlementId, status, source, metaInfo, startDate, endDate, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listUsageRecordGroupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List UsageRecordGroups by the given organization, partner, product, entitlement or buyer. Only provide one or none of the optional query parameters: partner, productId, entitlementId & buyerId .
     * list usageRecordGroups
     * @param orgId Organization ID
     * @param [partner] Cloud Partner
     * @param [buyerId] filter by buyer ID, default no filter by buyerId if not provided
     * @param [entitlementId] filter by entitlement ID, default no filter by entitlementId if not provided
     * @param [status] The status of the usage record group, default no filter by status if not provided
     * @param [source] The source of the usage record group, default no filter by source if not provided
     * @param [metaInfo] metaInfo filter
     * @param [startDate] start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * @param [endDate] end date (UTC) in YYYY-MM-DD format, default is today
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listUsageRecordGroups(orgId: string, partner?: 'AWS' | 'AZURE' | 'GCP', buyerId?: string, entitlementId?: string, status?: 'CREATED' | 'DELETED' | 'INVALID' | 'REPORTED' | 'REPORT_PENDING' | 'REPORT_FAILED', source?: '' | 'API' | 'INTERNAL' | 'LAGO' | 'METRONOME' | 'ORB' | 'STRIPE', metaInfo?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ListUsageRecordGroupsResponse> {
        return this.listUsageRecordGroupsWithHttpInfo(orgId, partner, buyerId, entitlementId, status, source, metaInfo, startDate, endDate, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ListUsageRecordGroupsResponse>) => apiResponse.data));
    }

    /**
     * List usageRecordReports under the given organization, partner, entitlement or buyer, within the given time range and pagination.
     * list usageRecordReports
     * @param orgId Organization ID
     * @param [partner] Cloud Partner
     * @param [buyerId] buyer ID
     * @param [entitlementId] entitlement ID
     * @param [startDate] start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * @param [endDate] end date (UTC) in YYYY-MM-DD format, default is today
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listUsageRecordReportsWithHttpInfo(orgId: string, partner?: 'AWS' | 'AZURE' | 'GCP', buyerId?: string, entitlementId?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListUsageRecordReportsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listUsageRecordReports(orgId, partner, buyerId, entitlementId, startDate, endDate, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listUsageRecordReportsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List usageRecordReports under the given organization, partner, entitlement or buyer, within the given time range and pagination.
     * list usageRecordReports
     * @param orgId Organization ID
     * @param [partner] Cloud Partner
     * @param [buyerId] buyer ID
     * @param [entitlementId] entitlement ID
     * @param [startDate] start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * @param [endDate] end date (UTC) in YYYY-MM-DD format, default is today
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listUsageRecordReports(orgId: string, partner?: 'AWS' | 'AZURE' | 'GCP', buyerId?: string, entitlementId?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ListUsageRecordReportsResponse> {
        return this.listUsageRecordReportsWithHttpInfo(orgId, partner, buyerId, entitlementId, startDate, endDate, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ListUsageRecordReportsResponse>) => apiResponse.data));
    }

    /**
     * It is recommended to provide the ID in the request body CreateUsageRecordGroupParams, so the report can be deduplicated. All duplicate report will return error code 409.
     * report usageRecordGroup
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public reportUsageRecordGroupWithHttpInfo(orgId: string, entitlementId: string, data: CreateUsageRecordGroupParams, _options?: ConfigurationOptions): Observable<HttpInfo<MeteringUsageRecordGroup>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.reportUsageRecordGroup(orgId, entitlementId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.reportUsageRecordGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * It is recommended to provide the ID in the request body CreateUsageRecordGroupParams, so the report can be deduplicated. All duplicate report will return error code 409.
     * report usageRecordGroup
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public reportUsageRecordGroup(orgId: string, entitlementId: string, data: CreateUsageRecordGroupParams, _options?: ConfigurationOptions): Observable<MeteringUsageRecordGroup> {
        return this.reportUsageRecordGroupWithHttpInfo(orgId, entitlementId, data, _options).pipe(map((apiResponse: HttpInfo<MeteringUsageRecordGroup>) => apiResponse.data));
    }

    /**
     * Retry the given UsageRecordGroup by setting from status \"REPORT_FAILED\" to \"CREATED\", and it will be ready for the next hourly report. Only usageRecordGroup with status \"REPORT_FAILED\" can be retried.
     * retry usageRecordGroup
     * @param orgId Organization ID
     * @param usageRecordGroupId UsageRecordGroup ID
     * @param [creationDate] UsageRecordGroup\&#39;s creation date (UTC) in YYYY-MM-DD format
     */
    public retryUsageRecordGroupWithHttpInfo(orgId: string, usageRecordGroupId: string, creationDate?: string, _options?: ConfigurationOptions): Observable<HttpInfo<MeteringUsageRecordGroup>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.retryUsageRecordGroup(orgId, usageRecordGroupId, creationDate, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retryUsageRecordGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retry the given UsageRecordGroup by setting from status \"REPORT_FAILED\" to \"CREATED\", and it will be ready for the next hourly report. Only usageRecordGroup with status \"REPORT_FAILED\" can be retried.
     * retry usageRecordGroup
     * @param orgId Organization ID
     * @param usageRecordGroupId UsageRecordGroup ID
     * @param [creationDate] UsageRecordGroup\&#39;s creation date (UTC) in YYYY-MM-DD format
     */
    public retryUsageRecordGroup(orgId: string, usageRecordGroupId: string, creationDate?: string, _options?: ConfigurationOptions): Observable<MeteringUsageRecordGroup> {
        return this.retryUsageRecordGroupWithHttpInfo(orgId, usageRecordGroupId, creationDate, _options).pipe(map((apiResponse: HttpInfo<MeteringUsageRecordGroup>) => apiResponse.data));
    }

    /**
     * Update the name, description and status of the billable metric for the given organization.
     * update billable metric
     * @param orgId Organization ID
     * @param billableMetricId Billable Metric ID
     * @param data RequestBody
     */
    public updateBillableMetricWithHttpInfo(orgId: string, billableMetricId: string, data: UpdateBillableMetricParams, _options?: ConfigurationOptions): Observable<HttpInfo<BillableMetric>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateBillableMetric(orgId, billableMetricId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBillableMetricWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the name, description and status of the billable metric for the given organization.
     * update billable metric
     * @param orgId Organization ID
     * @param billableMetricId Billable Metric ID
     * @param data RequestBody
     */
    public updateBillableMetric(orgId: string, billableMetricId: string, data: UpdateBillableMetricParams, _options?: ConfigurationOptions): Observable<BillableMetric> {
        return this.updateBillableMetricWithHttpInfo(orgId, billableMetricId, data, _options).pipe(map((apiResponse: HttpInfo<BillableMetric>) => apiResponse.data));
    }

    /**
     * Update the usage metering config info of the given organization.
     * update usage metering config info
     * @param orgId Organization ID
     * @param data The usage metering config info to be updated
     */
    public updateUsageMeteringConfigInfoWithHttpInfo(orgId: string, data: UsageMeteringConfigInfo, _options?: ConfigurationOptions): Observable<HttpInfo<UsageMeteringConfigInfo>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateUsageMeteringConfigInfo(orgId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateUsageMeteringConfigInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the usage metering config info of the given organization.
     * update usage metering config info
     * @param orgId Organization ID
     * @param data The usage metering config info to be updated
     */
    public updateUsageMeteringConfigInfo(orgId: string, data: UsageMeteringConfigInfo, _options?: ConfigurationOptions): Observable<UsageMeteringConfigInfo> {
        return this.updateUsageMeteringConfigInfoWithHttpInfo(orgId, data, _options).pipe(map((apiResponse: HttpInfo<UsageMeteringConfigInfo>) => apiResponse.data));
    }

}

import { NotificationApiRequestFactory, NotificationApiResponseProcessor} from "../apis/NotificationApi";
export class ObservableNotificationApi {
    private requestFactory: NotificationApiRequestFactory;
    private responseProcessor: NotificationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NotificationApiRequestFactory,
        responseProcessor?: NotificationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NotificationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NotificationApiResponseProcessor();
    }

    /**
     * Get the notification message of the organization & notification message ID.
     * get notification message
     * @param orgId Organization ID
     * @param notificationMessageId Notification Message ID
     */
    public getNotificationMessageWithHttpInfo(orgId: string, notificationMessageId: string, _options?: ConfigurationOptions): Observable<HttpInfo<NotificationMessage>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getNotificationMessage(orgId, notificationMessageId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNotificationMessageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the notification message of the organization & notification message ID.
     * get notification message
     * @param orgId Organization ID
     * @param notificationMessageId Notification Message ID
     */
    public getNotificationMessage(orgId: string, notificationMessageId: string, _options?: ConfigurationOptions): Observable<NotificationMessage> {
        return this.getNotificationMessageWithHttpInfo(orgId, notificationMessageId, _options).pipe(map((apiResponse: HttpInfo<NotificationMessage>) => apiResponse.data));
    }

    /**
     * List the notification events of the given organization with pagination and optional filters.
     * list notification events
     * @param orgId Organization ID
     * @param [startDate] start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * @param [endDate] end date (UTC) in YYYY-MM-DD format, default is today
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     * @param [priorities] Filter by priorities, empty means HIGH and CRITICAL only. Valid values are: LOW, MEDIUM, HIGH, CRITICAL. Multiple values are supported, separated by comma.
     * @param [message] Filter by event message containing the specified string, case-insensitive.
     */
    public listNotificationEventsWithHttpInfo(orgId: string, startDate?: string, endDate?: string, limit?: number, offset?: number, priorities?: string, message?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListNotificationEventsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listNotificationEvents(orgId, startDate, endDate, limit, offset, priorities, message, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listNotificationEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List the notification events of the given organization with pagination and optional filters.
     * list notification events
     * @param orgId Organization ID
     * @param [startDate] start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * @param [endDate] end date (UTC) in YYYY-MM-DD format, default is today
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     * @param [priorities] Filter by priorities, empty means HIGH and CRITICAL only. Valid values are: LOW, MEDIUM, HIGH, CRITICAL. Multiple values are supported, separated by comma.
     * @param [message] Filter by event message containing the specified string, case-insensitive.
     */
    public listNotificationEvents(orgId: string, startDate?: string, endDate?: string, limit?: number, offset?: number, priorities?: string, message?: string, _options?: ConfigurationOptions): Observable<ListNotificationEventsResponse> {
        return this.listNotificationEventsWithHttpInfo(orgId, startDate, endDate, limit, offset, priorities, message, _options).pipe(map((apiResponse: HttpInfo<ListNotificationEventsResponse>) => apiResponse.data));
    }

    /**
     * List the notification events of the given organization and entity with pagination.
     * list notification events by entity
     * @param orgId Organization ID
     * @param entityType Entity type, valid values are: PRODUCT, OFFER, ENTITLEMENT, INTEGRATION etc.
     * @param entityId Entity ID
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listNotificationEventsByEntityWithHttpInfo(orgId: string, entityType: string, entityId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListNotificationEventsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listNotificationEventsByEntity(orgId, entityType, entityId, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listNotificationEventsByEntityWithHttpInfo(rsp)));
            }));
    }

    /**
     * List the notification events of the given organization and entity with pagination.
     * list notification events by entity
     * @param orgId Organization ID
     * @param entityType Entity type, valid values are: PRODUCT, OFFER, ENTITLEMENT, INTEGRATION etc.
     * @param entityId Entity ID
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listNotificationEventsByEntity(orgId: string, entityType: string, entityId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ListNotificationEventsResponse> {
        return this.listNotificationEventsByEntityWithHttpInfo(orgId, entityType, entityId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ListNotificationEventsResponse>) => apiResponse.data));
    }

    /**
     * List the notification messages of the given organization with pagination.
     * list notification messages
     * @param orgId Organization ID
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listNotificationMessagesWithHttpInfo(orgId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListNotificationMessagesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listNotificationMessages(orgId, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listNotificationMessagesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List the notification messages of the given organization with pagination.
     * list notification messages
     * @param orgId Organization ID
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listNotificationMessages(orgId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ListNotificationMessagesResponse> {
        return this.listNotificationMessagesWithHttpInfo(orgId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ListNotificationMessagesResponse>) => apiResponse.data));
    }

}

import { OfferApiRequestFactory, OfferApiResponseProcessor} from "../apis/OfferApi";
export class ObservableOfferApi {
    private requestFactory: OfferApiRequestFactory;
    private responseProcessor: OfferApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OfferApiRequestFactory,
        responseProcessor?: OfferApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OfferApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OfferApiResponseProcessor();
    }

    /**
     * Only the offer with status = \"PENDING_ACCEPTANCE\", \"PENDING_CANCEL\", \"ACTIVE\" or \"USED\" is allowed to cancel.
     * cancel offer
     * @param orgId Organization ID
     * @param offerId Offer ID
     */
    public cancelOfferWithHttpInfo(orgId: string, offerId: string, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadOffer>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.cancelOffer(orgId, offerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelOfferWithHttpInfo(rsp)));
            }));
    }

    /**
     * Only the offer with status = \"PENDING_ACCEPTANCE\", \"PENDING_CANCEL\", \"ACTIVE\" or \"USED\" is allowed to cancel.
     * cancel offer
     * @param orgId Organization ID
     * @param offerId Offer ID
     */
    public cancelOffer(orgId: string, offerId: string, _options?: ConfigurationOptions): Observable<WorkloadOffer> {
        return this.cancelOfferWithHttpInfo(orgId, offerId, _options).pipe(map((apiResponse: HttpInfo<WorkloadOffer>) => apiResponse.data));
    }

    /**
     * Create a private offer under the given organization.
     * create offer
     * @param orgId Organization ID
     * @param data Offer to create
     */
    public createOfferWithHttpInfo(orgId: string, data: WorkloadOffer, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadOffer>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOffer(orgId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOfferWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a private offer under the given organization.
     * create offer
     * @param orgId Organization ID
     * @param data Offer to create
     */
    public createOffer(orgId: string, data: WorkloadOffer, _options?: ConfigurationOptions): Observable<WorkloadOffer> {
        return this.createOfferWithHttpInfo(orgId, data, _options).pipe(map((apiResponse: HttpInfo<WorkloadOffer>) => apiResponse.data));
    }

    /**
     * Create a new draft offer or update the existing draft offer. When updating draft offer, the offer.ID is required.
     * create or update draft offer
     * @param orgId Organization ID
     * @param data the draft offer to create
     */
    public createOrUpdateDraftOfferWithHttpInfo(orgId: string, data: WorkloadOffer, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadOffer>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOrUpdateDraftOffer(orgId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrUpdateDraftOfferWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new draft offer or update the existing draft offer. When updating draft offer, the offer.ID is required.
     * create or update draft offer
     * @param orgId Organization ID
     * @param data the draft offer to create
     */
    public createOrUpdateDraftOffer(orgId: string, data: WorkloadOffer, _options?: ConfigurationOptions): Observable<WorkloadOffer> {
        return this.createOrUpdateDraftOfferWithHttpInfo(orgId, data, _options).pipe(map((apiResponse: HttpInfo<WorkloadOffer>) => apiResponse.data));
    }

    /**
     * The offer is soft deleted (marked as DELETED status) in Suger service. Only the offer with status = \"DRAFT\", \"CREATE_FAILED\", \"EXPIRED\" or \"CANCELLED\" is allowed to be deleted.
     * delete offer
     * @param orgId Organization ID
     * @param offerId Offer ID
     */
    public deleteOfferWithHttpInfo(orgId: string, offerId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteOffer(orgId, offerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOfferWithHttpInfo(rsp)));
            }));
    }

    /**
     * The offer is soft deleted (marked as DELETED status) in Suger service. Only the offer with status = \"DRAFT\", \"CREATE_FAILED\", \"EXPIRED\" or \"CANCELLED\" is allowed to be deleted.
     * delete offer
     * @param orgId Organization ID
     * @param offerId Offer ID
     */
    public deleteOffer(orgId: string, offerId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.deleteOfferWithHttpInfo(orgId, offerId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Only the offer with status = \"PENDING_ACCEPTANCE\", \"EXPIRED\" or \"ACCEPTED\" is allowed to extend expiry date.
     * extend offer expiry date
     * @param orgId Organization ID
     * @param offerId Offer ID
     * @param newExpiryDate new expiry date in YYYY-MM-DD format
     */
    public extendPrivateOfferExpiryDateWithHttpInfo(orgId: string, offerId: string, newExpiryDate: string, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadOffer>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.extendPrivateOfferExpiryDate(orgId, offerId, newExpiryDate, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.extendPrivateOfferExpiryDateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Only the offer with status = \"PENDING_ACCEPTANCE\", \"EXPIRED\" or \"ACCEPTED\" is allowed to extend expiry date.
     * extend offer expiry date
     * @param orgId Organization ID
     * @param offerId Offer ID
     * @param newExpiryDate new expiry date in YYYY-MM-DD format
     */
    public extendPrivateOfferExpiryDate(orgId: string, offerId: string, newExpiryDate: string, _options?: ConfigurationOptions): Observable<WorkloadOffer> {
        return this.extendPrivateOfferExpiryDateWithHttpInfo(orgId, offerId, newExpiryDate, _options).pipe(map((apiResponse: HttpInfo<WorkloadOffer>) => apiResponse.data));
    }

    /**
     * Get the offer by the given offer ID.
     * get offer
     * @param orgId Organization ID
     * @param offerId Offer ID
     */
    public getOfferWithHttpInfo(orgId: string, offerId: string, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadOffer>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOffer(orgId, offerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOfferWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the offer by the given offer ID.
     * get offer
     * @param orgId Organization ID
     * @param offerId Offer ID
     */
    public getOffer(orgId: string, offerId: string, _options?: ConfigurationOptions): Observable<WorkloadOffer> {
        return this.getOfferWithHttpInfo(orgId, offerId, _options).pipe(map((apiResponse: HttpInfo<WorkloadOffer>) => apiResponse.data));
    }

    /**
     * Get the offer by the given offer external ID.
     * get offer by external ID
     * @param orgId Organization ID
     * @param offerExternalId Offer External ID
     */
    public getOfferByExternalIdWithHttpInfo(orgId: string, offerExternalId: string, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadOffer>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOfferByExternalId(orgId, offerExternalId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOfferByExternalIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the offer by the given offer external ID.
     * get offer by external ID
     * @param orgId Organization ID
     * @param offerExternalId Offer External ID
     */
    public getOfferByExternalId(orgId: string, offerExternalId: string, _options?: ConfigurationOptions): Observable<WorkloadOffer> {
        return this.getOfferByExternalIdWithHttpInfo(orgId, offerExternalId, _options).pipe(map((apiResponse: HttpInfo<WorkloadOffer>) => apiResponse.data));
    }

    /**
     * Get the EULA file of the given offer ID.
     * get offer EULA
     * @param orgId Organization ID
     * @param offerId Offer ID
     * @param [format] response format in JSON or string
     */
    public getOfferEulaWithHttpInfo(orgId: string, offerId: string, format?: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOfferEula(orgId, offerId, format, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOfferEulaWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the EULA file of the given offer ID.
     * get offer EULA
     * @param orgId Organization ID
     * @param offerId Offer ID
     * @param [format] response format in JSON or string
     */
    public getOfferEula(orgId: string, offerId: string, format?: string, _options?: ConfigurationOptions): Observable<string> {
        return this.getOfferEulaWithHttpInfo(orgId, offerId, format, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Get the Reseller EULA file of the given offer ID.
     * get offer reseller EULA
     * @param orgId Organization ID
     * @param offerId Offer ID
     */
    public getOfferResellerEulaWithHttpInfo(orgId: string, offerId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOfferResellerEula(orgId, offerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOfferResellerEulaWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the Reseller EULA file of the given offer ID.
     * get offer reseller EULA
     * @param orgId Organization ID
     * @param offerId Offer ID
     */
    public getOfferResellerEula(orgId: string, offerId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.getOfferResellerEulaWithHttpInfo(orgId, offerId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * List offers under the given organization with pagination and optional filter.
     * list offers
     * @param orgId Organization ID
     * @param [status] filter by offer status
     * @param [partner] filter by partner
     * @param [offerType] filter by offerType
     * @param [productId] filter by productId
     * @param [buyerId] filter by buyerId
     * @param [hubspotDealId] filter by hubspotDealId
     * @param [contactId] filter by contactId
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listOffersWithHttpInfo(orgId: string, status?: string, partner?: string, offerType?: string, productId?: string, buyerId?: string, hubspotDealId?: string, contactId?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<WorkloadOffer>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listOffers(orgId, status, partner, offerType, productId, buyerId, hubspotDealId, contactId, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOffersWithHttpInfo(rsp)));
            }));
    }

    /**
     * List offers under the given organization with pagination and optional filter.
     * list offers
     * @param orgId Organization ID
     * @param [status] filter by offer status
     * @param [partner] filter by partner
     * @param [offerType] filter by offerType
     * @param [productId] filter by productId
     * @param [buyerId] filter by buyerId
     * @param [hubspotDealId] filter by hubspotDealId
     * @param [contactId] filter by contactId
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listOffers(orgId: string, status?: string, partner?: string, offerType?: string, productId?: string, buyerId?: string, hubspotDealId?: string, contactId?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<Array<WorkloadOffer>> {
        return this.listOffersWithHttpInfo(orgId, status, partner, offerType, productId, buyerId, hubspotDealId, contactId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<Array<WorkloadOffer>>) => apiResponse.data));
    }

    /**
     * Send offer notifications to the given contact ids. If contactIDs is empty, send notifications to all contacts of the offer.
     * notify offer contacts
     * @param orgId Organization ID
     * @param offerId Offer ID
     * @param [contactIDs] List of Contact IDs, if emoty or nil, send notifications to all contacts of the offer
     */
    public sendOfferNotificationsWithHttpInfo(orgId: string, offerId: string, contactIDs?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.sendOfferNotifications(orgId, offerId, contactIDs, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendOfferNotificationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Send offer notifications to the given contact ids. If contactIDs is empty, send notifications to all contacts of the offer.
     * notify offer contacts
     * @param orgId Organization ID
     * @param offerId Offer ID
     * @param [contactIDs] List of Contact IDs, if emoty or nil, send notifications to all contacts of the offer
     */
    public sendOfferNotifications(orgId: string, offerId: string, contactIDs?: Array<string>, _options?: ConfigurationOptions): Observable<string> {
        return this.sendOfferNotificationsWithHttpInfo(orgId, offerId, contactIDs, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Update the meta info of the given offer.
     * update offer meta info
     * @param orgId Organization ID
     * @param offerId Offer ID
     * @param data Offer meta info to update
     */
    public updateOfferMetaInfoWithHttpInfo(orgId: string, offerId: string, data: WorkloadMetaInfo, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadMetaInfo>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateOfferMetaInfo(orgId, offerId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOfferMetaInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the meta info of the given offer.
     * update offer meta info
     * @param orgId Organization ID
     * @param offerId Offer ID
     * @param data Offer meta info to update
     */
    public updateOfferMetaInfo(orgId: string, offerId: string, data: WorkloadMetaInfo, _options?: ConfigurationOptions): Observable<WorkloadMetaInfo> {
        return this.updateOfferMetaInfoWithHttpInfo(orgId, offerId, data, _options).pipe(map((apiResponse: HttpInfo<WorkloadMetaInfo>) => apiResponse.data));
    }

}

import { ProductApiRequestFactory, ProductApiResponseProcessor} from "../apis/ProductApi";
export class ObservableProductApi {
    private requestFactory: ProductApiRequestFactory;
    private responseProcessor: ProductApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductApiRequestFactory,
        responseProcessor?: ProductApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductApiResponseProcessor();
    }

    /**
     * Create a new draft product or update the existing draft product. When updating draft product, the product.ID is required.
     * create or update draft product
     * @param orgId Organization ID
     * @param data the draft product to create
     */
    public createOrUpdateDraftProductWithHttpInfo(orgId: string, data: WorkloadProduct, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadProduct>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOrUpdateDraftProduct(orgId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrUpdateDraftProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new draft product or update the existing draft product. When updating draft product, the product.ID is required.
     * create or update draft product
     * @param orgId Organization ID
     * @param data the draft product to create
     */
    public createOrUpdateDraftProduct(orgId: string, data: WorkloadProduct, _options?: ConfigurationOptions): Observable<WorkloadProduct> {
        return this.createOrUpdateDraftProductWithHttpInfo(orgId, data, _options).pipe(map((apiResponse: HttpInfo<WorkloadProduct>) => apiResponse.data));
    }

    /**
     * create a new product in the marketplace
     * create product
     * @param orgId Organization ID
     * @param data the product to create
     */
    public createProductWithHttpInfo(orgId: string, data: WorkloadProduct, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadProduct>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createProduct(orgId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * create a new product in the marketplace
     * create product
     * @param orgId Organization ID
     * @param data the product to create
     */
    public createProduct(orgId: string, data: WorkloadProduct, _options?: ConfigurationOptions): Observable<WorkloadProduct> {
        return this.createProductWithHttpInfo(orgId, data, _options).pipe(map((apiResponse: HttpInfo<WorkloadProduct>) => apiResponse.data));
    }

    /**
     * The product is soft deleted (marked as DELETED status) in Suger service. only the products with non PUBLIC status are allowed to be deleted.
     * delete product
     * @param orgId Organization ID
     * @param productId Product ID
     */
    public deleteProductWithHttpInfo(orgId: string, productId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteProduct(orgId, productId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * The product is soft deleted (marked as DELETED status) in Suger service. only the products with non PUBLIC status are allowed to be deleted.
     * delete product
     * @param orgId Organization ID
     * @param productId Product ID
     */
    public deleteProduct(orgId: string, productId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.deleteProductWithHttpInfo(orgId, productId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * get product by product id
     * get product
     * @param orgId Organization ID
     * @param productId Product ID
     */
    public getProductWithHttpInfo(orgId: string, productId: string, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadProduct>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getProduct(orgId, productId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * get product by product id
     * get product
     * @param orgId Organization ID
     * @param productId Product ID
     */
    public getProduct(orgId: string, productId: string, _options?: ConfigurationOptions): Observable<WorkloadProduct> {
        return this.getProductWithHttpInfo(orgId, productId, _options).pipe(map((apiResponse: HttpInfo<WorkloadProduct>) => apiResponse.data));
    }

    /**
     * list all metering dimensions of the given product
     * list metering dimensions of product
     * @param orgId Organization ID
     * @param productId Product ID
     */
    public listProductMeteringDimensionsWithHttpInfo(orgId: string, productId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<MeteringDimension>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listProductMeteringDimensions(orgId, productId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProductMeteringDimensionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * list all metering dimensions of the given product
     * list metering dimensions of product
     * @param orgId Organization ID
     * @param productId Product ID
     */
    public listProductMeteringDimensions(orgId: string, productId: string, _options?: ConfigurationOptions): Observable<Array<MeteringDimension>> {
        return this.listProductMeteringDimensionsWithHttpInfo(orgId, productId, _options).pipe(map((apiResponse: HttpInfo<Array<MeteringDimension>>) => apiResponse.data));
    }

    /**
     * list all products under the given organization
     * list products
     * @param orgId Organization ID
     * @param [partner] filter by partner
     * @param [limit] List pagination size, default 100, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listProductsWithHttpInfo(orgId: string, partner?: 'AWS' | 'AZURE' | 'GCP' | 'STRIPE', limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<WorkloadProduct>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listProducts(orgId, partner, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProductsWithHttpInfo(rsp)));
            }));
    }

    /**
     * list all products under the given organization
     * list products
     * @param orgId Organization ID
     * @param [partner] filter by partner
     * @param [limit] List pagination size, default 100, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listProducts(orgId: string, partner?: 'AWS' | 'AZURE' | 'GCP' | 'STRIPE', limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<Array<WorkloadProduct>> {
        return this.listProductsWithHttpInfo(orgId, partner, limit, offset, _options).pipe(map((apiResponse: HttpInfo<Array<WorkloadProduct>>) => apiResponse.data));
    }

    /**
     * list all products under the given organization and cloud partner
     * list products by partner
     * @param orgId Organization ID
     * @param partner Cloud Partner
     */
    public listProductsByPartnerWithHttpInfo(orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', _options?: ConfigurationOptions): Observable<HttpInfo<Array<WorkloadProduct>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listProductsByPartner(orgId, partner, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProductsByPartnerWithHttpInfo(rsp)));
            }));
    }

    /**
     * list all products under the given organization and cloud partner
     * list products by partner
     * @param orgId Organization ID
     * @param partner Cloud Partner
     */
    public listProductsByPartner(orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', _options?: ConfigurationOptions): Observable<Array<WorkloadProduct>> {
        return this.listProductsByPartnerWithHttpInfo(orgId, partner, _options).pipe(map((apiResponse: HttpInfo<Array<WorkloadProduct>>) => apiResponse.data));
    }

    /**
     * publish the given product to the public status in the marketplace
     * publish product
     * @param orgId Organization ID
     * @param productId Product ID
     * @param data the product to publish
     */
    public publishProductWithHttpInfo(orgId: string, productId: string, data: WorkloadProduct, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadProduct>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.publishProduct(orgId, productId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publishProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * publish the given product to the public status in the marketplace
     * publish product
     * @param orgId Organization ID
     * @param productId Product ID
     * @param data the product to publish
     */
    public publishProduct(orgId: string, productId: string, data: WorkloadProduct, _options?: ConfigurationOptions): Observable<WorkloadProduct> {
        return this.publishProductWithHttpInfo(orgId, productId, data, _options).pipe(map((apiResponse: HttpInfo<WorkloadProduct>) => apiResponse.data));
    }

    /**
     * update product info, no price update is allowed via this API.
     * update product
     * @param orgId Organization ID
     * @param productId Product ID
     * @param data the product to update
     */
    public updateProductWithHttpInfo(orgId: string, productId: string, data: WorkloadProduct, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadProduct>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateProduct(orgId, productId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * update product info, no price update is allowed via this API.
     * update product
     * @param orgId Organization ID
     * @param productId Product ID
     * @param data the product to update
     */
    public updateProduct(orgId: string, productId: string, data: WorkloadProduct, _options?: ConfigurationOptions): Observable<WorkloadProduct> {
        return this.updateProductWithHttpInfo(orgId, productId, data, _options).pipe(map((apiResponse: HttpInfo<WorkloadProduct>) => apiResponse.data));
    }

    /**
     * update the fulfillment url of the given product
     * update product fulfillment url
     * @param orgId Organization ID
     * @param productId Product ID
     * @param data Update Product Params
     */
    public updateProductFulfillmentUrlWithHttpInfo(orgId: string, productId: string, data: UpdateProductParams, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadProduct>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateProductFulfillmentUrl(orgId, productId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductFulfillmentUrlWithHttpInfo(rsp)));
            }));
    }

    /**
     * update the fulfillment url of the given product
     * update product fulfillment url
     * @param orgId Organization ID
     * @param productId Product ID
     * @param data Update Product Params
     */
    public updateProductFulfillmentUrl(orgId: string, productId: string, data: UpdateProductParams, _options?: ConfigurationOptions): Observable<WorkloadProduct> {
        return this.updateProductFulfillmentUrlWithHttpInfo(orgId, productId, data, _options).pipe(map((apiResponse: HttpInfo<WorkloadProduct>) => apiResponse.data));
    }

    /**
     * Update the meta info of the given product.
     * update product meta info
     * @param orgId Organization ID
     * @param productId Product ID
     * @param data Product meta info to update
     */
    public updateProductMetaInfoWithHttpInfo(orgId: string, productId: string, data: WorkloadMetaInfo, _options?: ConfigurationOptions): Observable<HttpInfo<WorkloadMetaInfo>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateProductMetaInfo(orgId, productId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductMetaInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the meta info of the given product.
     * update product meta info
     * @param orgId Organization ID
     * @param productId Product ID
     * @param data Product meta info to update
     */
    public updateProductMetaInfo(orgId: string, productId: string, data: WorkloadMetaInfo, _options?: ConfigurationOptions): Observable<WorkloadMetaInfo> {
        return this.updateProductMetaInfoWithHttpInfo(orgId, productId, data, _options).pipe(map((apiResponse: HttpInfo<WorkloadMetaInfo>) => apiResponse.data));
    }

}

import { ReportApiRequestFactory, ReportApiResponseProcessor} from "../apis/ReportApi";
export class ObservableReportApi {
    private requestFactory: ReportApiRequestFactory;
    private responseProcessor: ReportApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ReportApiRequestFactory,
        responseProcessor?: ReportApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ReportApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ReportApiResponseProcessor();
    }

    /**
     * Get the revenue report of the given organization, product, entitlement, or buyer.
     * get revenue report
     * @param orgId Organization ID
     * @param data Get Revenue Report Params
     */
    public getRevenueReportWithHttpInfo(orgId: string, data: GetRevenueReportParams, _options?: ConfigurationOptions): Observable<HttpInfo<RevenueReport>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRevenueReport(orgId, data, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRevenueReportWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the revenue report of the given organization, product, entitlement, or buyer.
     * get revenue report
     * @param orgId Organization ID
     * @param data Get Revenue Report Params
     */
    public getRevenueReport(orgId: string, data: GetRevenueReportParams, _options?: ConfigurationOptions): Observable<RevenueReport> {
        return this.getRevenueReportWithHttpInfo(orgId, data, _options).pipe(map((apiResponse: HttpInfo<RevenueReport>) => apiResponse.data));
    }

    /**
     * list daily revenue records for the given organization, partner, entitlement, or buyer, within the given date range.
     * list daily revenue records
     * @param orgId Organization ID
     * @param [partner] Cloud Partner
     * @param [productId] Filter daily revenue records by the given product ID
     * @param [buyerId] Filter daily revenue records by the given buyer ID
     * @param [entitlementId] Filter daily revenue records by the given entitlement ID
     * @param [startDate] start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * @param [endDate] end date (UTC) in YYYY-MM-DD format, default is today
     */
    public listDailyRevenueRecordsWithHttpInfo(orgId: string, partner?: 'AWS' | 'AZURE' | 'GCP', productId?: string, buyerId?: string, entitlementId?: string, startDate?: string, endDate?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<RevenueRecord>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listDailyRevenueRecords(orgId, partner, productId, buyerId, entitlementId, startDate, endDate, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listDailyRevenueRecordsWithHttpInfo(rsp)));
            }));
    }

    /**
     * list daily revenue records for the given organization, partner, entitlement, or buyer, within the given date range.
     * list daily revenue records
     * @param orgId Organization ID
     * @param [partner] Cloud Partner
     * @param [productId] Filter daily revenue records by the given product ID
     * @param [buyerId] Filter daily revenue records by the given buyer ID
     * @param [entitlementId] Filter daily revenue records by the given entitlement ID
     * @param [startDate] start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * @param [endDate] end date (UTC) in YYYY-MM-DD format, default is today
     */
    public listDailyRevenueRecords(orgId: string, partner?: 'AWS' | 'AZURE' | 'GCP', productId?: string, buyerId?: string, entitlementId?: string, startDate?: string, endDate?: string, _options?: ConfigurationOptions): Observable<Array<RevenueRecord>> {
        return this.listDailyRevenueRecordsWithHttpInfo(orgId, partner, productId, buyerId, entitlementId, startDate, endDate, _options).pipe(map((apiResponse: HttpInfo<Array<RevenueRecord>>) => apiResponse.data));
    }

    /**
     * list the raw revenue record details for the given organization, partner, product, entitlement, or buyer.
     * list revenue record details
     * @param orgId Organization ID
     * @param partner Cloud Partner
     * @param [productId] Filter revenue record details by the given product ID
     * @param [buyerId] Filter revenue record details by the given buyer ID
     * @param [entitlementId] Filter revenue record details by the given entitlement ID
     * @param [startDate] start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * @param [endDate] end date (UTC) in YYYY-MM-DD format, default is today
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listRevenueRecordDetailsWithHttpInfo(orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', productId?: string, buyerId?: string, entitlementId?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListRevenueRecordDetailsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listRevenueRecordDetails(orgId, partner, productId, buyerId, entitlementId, startDate, endDate, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listRevenueRecordDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * list the raw revenue record details for the given organization, partner, product, entitlement, or buyer.
     * list revenue record details
     * @param orgId Organization ID
     * @param partner Cloud Partner
     * @param [productId] Filter revenue record details by the given product ID
     * @param [buyerId] Filter revenue record details by the given buyer ID
     * @param [entitlementId] Filter revenue record details by the given entitlement ID
     * @param [startDate] start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * @param [endDate] end date (UTC) in YYYY-MM-DD format, default is today
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listRevenueRecordDetails(orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', productId?: string, buyerId?: string, entitlementId?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ListRevenueRecordDetailsResponse> {
        return this.listRevenueRecordDetailsWithHttpInfo(orgId, partner, productId, buyerId, entitlementId, startDate, endDate, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ListRevenueRecordDetailsResponse>) => apiResponse.data));
    }

    /**
     * list the revenue records for the given organization, product, entitlement, or buyer.
     * list revenue records
     * @param orgId Organization ID
     * @param partner Cloud Partner
     * @param [productId] Filter revenue records by the given product ID
     * @param [entitlementId] Filter revenue records by the given entitlement ID
     * @param [buyerId] Filter revenue records by the given buyer ID
     * @param [startDate] start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * @param [endDate] end date (UTC) in YYYY-MM-DD format, default is today
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listRevenueRecordsWithHttpInfo(orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', productId?: string, entitlementId?: string, buyerId?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListRevenueRecordsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listRevenueRecords(orgId, partner, productId, entitlementId, buyerId, startDate, endDate, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listRevenueRecordsWithHttpInfo(rsp)));
            }));
    }

    /**
     * list the revenue records for the given organization, product, entitlement, or buyer.
     * list revenue records
     * @param orgId Organization ID
     * @param partner Cloud Partner
     * @param [productId] Filter revenue records by the given product ID
     * @param [entitlementId] Filter revenue records by the given entitlement ID
     * @param [buyerId] Filter revenue records by the given buyer ID
     * @param [startDate] start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * @param [endDate] end date (UTC) in YYYY-MM-DD format, default is today
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listRevenueRecords(orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', productId?: string, entitlementId?: string, buyerId?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ListRevenueRecordsResponse> {
        return this.listRevenueRecordsWithHttpInfo(orgId, partner, productId, entitlementId, buyerId, startDate, endDate, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ListRevenueRecordsResponse>) => apiResponse.data));
    }

    /**
     * list the daily records of the usage metering from the cloud marketplace for the given organization, entitlement, or buyer.
     * list usage metering daily records
     * @param orgId Organization ID
     * @param partner Filter by the Cloud Partner
     * @param [buyerId] Filter usage metering daily records by the given buyer ID
     * @param [entitlementId] Filter usage metering daily records by the given entitlement ID
     * @param [startDate] start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * @param [endDate] end date (UTC) in YYYY-MM-DD format, default is today
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listUsageMeteringDailyRecordsWithHttpInfo(orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', buyerId?: string, entitlementId?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListUsageMeteringDailyRecordsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listUsageMeteringDailyRecords(orgId, partner, buyerId, entitlementId, startDate, endDate, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listUsageMeteringDailyRecordsWithHttpInfo(rsp)));
            }));
    }

    /**
     * list the daily records of the usage metering from the cloud marketplace for the given organization, entitlement, or buyer.
     * list usage metering daily records
     * @param orgId Organization ID
     * @param partner Filter by the Cloud Partner
     * @param [buyerId] Filter usage metering daily records by the given buyer ID
     * @param [entitlementId] Filter usage metering daily records by the given entitlement ID
     * @param [startDate] start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * @param [endDate] end date (UTC) in YYYY-MM-DD format, default is today
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listUsageMeteringDailyRecords(orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', buyerId?: string, entitlementId?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ListUsageMeteringDailyRecordsResponse> {
        return this.listUsageMeteringDailyRecordsWithHttpInfo(orgId, partner, buyerId, entitlementId, startDate, endDate, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ListUsageMeteringDailyRecordsResponse>) => apiResponse.data));
    }

}

import { SupportApiRequestFactory, SupportApiResponseProcessor} from "../apis/SupportApi";
export class ObservableSupportApi {
    private requestFactory: SupportApiRequestFactory;
    private responseProcessor: SupportApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SupportApiRequestFactory,
        responseProcessor?: SupportApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SupportApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SupportApiResponseProcessor();
    }

    /**
     * close suuport ticket
     * close support ticket
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     */
    public closeSupportTicketWithHttpInfo(orgId: string, ticketId: string, _options?: ConfigurationOptions): Observable<HttpInfo<SupportTicket>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.closeSupportTicket(orgId, ticketId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.closeSupportTicketWithHttpInfo(rsp)));
            }));
    }

    /**
     * close suuport ticket
     * close support ticket
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     */
    public closeSupportTicket(orgId: string, ticketId: string, _options?: ConfigurationOptions): Observable<SupportTicket> {
        return this.closeSupportTicketWithHttpInfo(orgId, ticketId, _options).pipe(map((apiResponse: HttpInfo<SupportTicket>) => apiResponse.data));
    }

    /**
     * create support ticket
     * create support ticket
     * @param orgId Organization ID
     * @param body Ticket create request
     */
    public createSupportTicketWithHttpInfo(orgId: string, body: SupportTicket, _options?: ConfigurationOptions): Observable<HttpInfo<SupportTicket>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createSupportTicket(orgId, body, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSupportTicketWithHttpInfo(rsp)));
            }));
    }

    /**
     * create support ticket
     * create support ticket
     * @param orgId Organization ID
     * @param body Ticket create request
     */
    public createSupportTicket(orgId: string, body: SupportTicket, _options?: ConfigurationOptions): Observable<SupportTicket> {
        return this.createSupportTicketWithHttpInfo(orgId, body, _options).pipe(map((apiResponse: HttpInfo<SupportTicket>) => apiResponse.data));
    }

    /**
     * create support ticket attachment
     * create support ticket attachment
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     * @param file File to upload
     */
    public createSupportTicketAttachmentWithHttpInfo(orgId: string, ticketId: string, file: HttpFile, _options?: ConfigurationOptions): Observable<HttpInfo<Array<SupportTicketAttachment>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createSupportTicketAttachment(orgId, ticketId, file, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSupportTicketAttachmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * create support ticket attachment
     * create support ticket attachment
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     * @param file File to upload
     */
    public createSupportTicketAttachment(orgId: string, ticketId: string, file: HttpFile, _options?: ConfigurationOptions): Observable<Array<SupportTicketAttachment>> {
        return this.createSupportTicketAttachmentWithHttpInfo(orgId, ticketId, file, _options).pipe(map((apiResponse: HttpInfo<Array<SupportTicketAttachment>>) => apiResponse.data));
    }

    /**
     * create support ticket comment
     * create support ticket comment
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     * @param body Ticket create request
     */
    public createSupportTicketCommentWithHttpInfo(orgId: string, ticketId: string, body: SupportTicketComment, _options?: ConfigurationOptions): Observable<HttpInfo<SupportTicketComment>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createSupportTicketComment(orgId, ticketId, body, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSupportTicketCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * create support ticket comment
     * create support ticket comment
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     * @param body Ticket create request
     */
    public createSupportTicketComment(orgId: string, ticketId: string, body: SupportTicketComment, _options?: ConfigurationOptions): Observable<SupportTicketComment> {
        return this.createSupportTicketCommentWithHttpInfo(orgId, ticketId, body, _options).pipe(map((apiResponse: HttpInfo<SupportTicketComment>) => apiResponse.data));
    }

    /**
     * get support ticket
     * get support ticket
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     */
    public getSupportTicketWithHttpInfo(orgId: string, ticketId: string, _options?: ConfigurationOptions): Observable<HttpInfo<SupportTicket>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSupportTicket(orgId, ticketId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSupportTicketWithHttpInfo(rsp)));
            }));
    }

    /**
     * get support ticket
     * get support ticket
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     */
    public getSupportTicket(orgId: string, ticketId: string, _options?: ConfigurationOptions): Observable<SupportTicket> {
        return this.getSupportTicketWithHttpInfo(orgId, ticketId, _options).pipe(map((apiResponse: HttpInfo<SupportTicket>) => apiResponse.data));
    }

    /**
     * list support tickets
     * list support tickets
     * @param orgId Organization ID
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listSupportTicketsWithHttpInfo(orgId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListSupportTicketsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listSupportTickets(orgId, limit, offset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSupportTicketsWithHttpInfo(rsp)));
            }));
    }

    /**
     * list support tickets
     * list support tickets
     * @param orgId Organization ID
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listSupportTickets(orgId: string, limit?: number, offset?: number, _options?: ConfigurationOptions): Observable<ListSupportTicketsResponse> {
        return this.listSupportTicketsWithHttpInfo(orgId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<ListSupportTicketsResponse>) => apiResponse.data));
    }

    /**
     * reopen support ticket
     * reopen support ticket
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     */
    public reopenSupportTicketWithHttpInfo(orgId: string, ticketId: string, _options?: ConfigurationOptions): Observable<HttpInfo<SupportTicket>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.reopenSupportTicket(orgId, ticketId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.reopenSupportTicketWithHttpInfo(rsp)));
            }));
    }

    /**
     * reopen support ticket
     * reopen support ticket
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     */
    public reopenSupportTicket(orgId: string, ticketId: string, _options?: ConfigurationOptions): Observable<SupportTicket> {
        return this.reopenSupportTicketWithHttpInfo(orgId, ticketId, _options).pipe(map((apiResponse: HttpInfo<SupportTicket>) => apiResponse.data));
    }

    /**
     * update support ticket
     * update support ticket
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     * @param body Ticket create request
     */
    public updateSupportTicketWithHttpInfo(orgId: string, ticketId: string, body: UpdateSupportTicketRequest, _options?: ConfigurationOptions): Observable<HttpInfo<SupportTicket>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateSupportTicket(orgId, ticketId, body, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSupportTicketWithHttpInfo(rsp)));
            }));
    }

    /**
     * update support ticket
     * update support ticket
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     * @param body Ticket create request
     */
    public updateSupportTicket(orgId: string, ticketId: string, body: UpdateSupportTicketRequest, _options?: ConfigurationOptions): Observable<SupportTicket> {
        return this.updateSupportTicketWithHttpInfo(orgId, ticketId, body, _options).pipe(map((apiResponse: HttpInfo<SupportTicket>) => apiResponse.data));
    }

}
