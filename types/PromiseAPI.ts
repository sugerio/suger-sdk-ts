import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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
import { ApiClientAccessToken } from '../models/ApiClientAccessToken';
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
import { GcpAmountConstraint } from '../models/GcpAmountConstraint';
import { GcpAmountUnit } from '../models/GcpAmountUnit';
import { GcpCommitmentAmountPerPeriodTemplate } from '../models/GcpCommitmentAmountPerPeriodTemplate';
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
import { GcpMarketplacePrivateOfferPriceModel } from '../models/GcpMarketplacePrivateOfferPriceModel';
import { GcpMarketplacePrivateOfferPriceModelCommitment } from '../models/GcpMarketplacePrivateOfferPriceModelCommitment';
import { GcpMarketplacePrivateOfferPriceModelDiscount } from '../models/GcpMarketplacePrivateOfferPriceModelDiscount';
import { GcpMarketplacePrivateOfferPriceModelFixed } from '../models/GcpMarketplacePrivateOfferPriceModelFixed';
import { GcpMarketplacePrivateOfferPriceModelOverage } from '../models/GcpMarketplacePrivateOfferPriceModelOverage';
import { GcpMarketplacePrivateOfferPriceModelPayg } from '../models/GcpMarketplacePrivateOfferPriceModelPayg';
import { GcpMarketplacePrivateOfferPriceModelType } from '../models/GcpMarketplacePrivateOfferPriceModelType';
import { GcpMarketplacePrivateOfferProviderInfo } from '../models/GcpMarketplacePrivateOfferProviderInfo';
import { GcpMarketplacePrivateOfferReplacementMetadata } from '../models/GcpMarketplacePrivateOfferReplacementMetadata';
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
import { GetApiClientAccessTokenParams } from '../models/GetApiClientAccessTokenParams';
import { GetRevenueReportParams } from '../models/GetRevenueReportParams';
import { GithubComAwsAwsSdkGoV2ServiceMarketplacemeteringTypesTag } from '../models/GithubComAwsAwsSdkGoV2ServiceMarketplacemeteringTypesTag';
import { GithubComSugerioMarketplaceServiceAzureSdkMarketplacemeteringv1BatchUsageEventOkResponse } from '../models/GithubComSugerioMarketplaceServiceAzureSdkMarketplacemeteringv1BatchUsageEventOkResponse';
import { GithubComSugerioMarketplaceServiceAzureSdkMarketplacemeteringv1UsageBatchEventOkMessage } from '../models/GithubComSugerioMarketplaceServiceAzureSdkMarketplacemeteringv1UsageBatchEventOkMessage';
import { GithubComSugerioMarketplaceServiceAzureSdkMarketplacemeteringv1UsageEventConflictResponse } from '../models/GithubComSugerioMarketplaceServiceAzureSdkMarketplacemeteringv1UsageEventConflictResponse';
import { GithubComSugerioMarketplaceServiceAzureSdkMarketplacemeteringv1UsageEventConflictResponseAdditionalInfo } from '../models/GithubComSugerioMarketplaceServiceAzureSdkMarketplacemeteringv1UsageEventConflictResponseAdditionalInfo';
import { GithubComSugerioMarketplaceServiceAzureSdkMarketplacemeteringv1UsageEventOkResponse } from '../models/GithubComSugerioMarketplaceServiceAzureSdkMarketplacemeteringv1UsageEventOkResponse';
import { GithubComSugerioMarketplaceServiceAzureSdkMarketplacemeteringv1UsageEventStatusEnum } from '../models/GithubComSugerioMarketplaceServiceAzureSdkMarketplacemeteringv1UsageEventStatusEnum';
import { GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent } from '../models/GithubComSugerioMarketplaceServiceRdsDbLibBillingAwsBillingEvent';
import { GithubComSugerioMarketplaceServiceRdsDbLibBillingAzureCmaRevenue } from '../models/GithubComSugerioMarketplaceServiceRdsDbLibBillingAzureCmaRevenue';
import { GithubComSugerioMarketplaceServiceRdsDbLibBillingGcpChargeUsage } from '../models/GithubComSugerioMarketplaceServiceRdsDbLibBillingGcpChargeUsage';
import { GithubComSugerioMarketplaceServiceRdsDbLibIdentityApiClient } from '../models/GithubComSugerioMarketplaceServiceRdsDbLibIdentityApiClient';
import { GithubComSugerioMarketplaceServiceRdsDbLibUpdateEntitlementNameParams } from '../models/GithubComSugerioMarketplaceServiceRdsDbLibUpdateEntitlementNameParams';
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
import { RevenueRecord } from '../models/RevenueRecord';
import { RevenueRecordDetail } from '../models/RevenueRecordDetail';
import { RevenueRecordInfo } from '../models/RevenueRecordInfo';
import { RevenueReport } from '../models/RevenueReport';
import { RevenueReportType } from '../models/RevenueReportType';
import { ServicecontrolReportError } from '../models/ServicecontrolReportError';
import { ServicecontrolReportResponse } from '../models/ServicecontrolReportResponse';
import { ServicecontrolStatus } from '../models/ServicecontrolStatus';
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
import { ObservableAPIApi } from './ObservableAPI';

import { APIApiRequestFactory, APIApiResponseProcessor} from "../apis/APIApi";
export class PromiseAPIApi {
    private api: ObservableAPIApi

    public constructor(
        configuration: Configuration,
        requestFactory?: APIApiRequestFactory,
        responseProcessor?: APIApiResponseProcessor
    ) {
        this.api = new ObservableAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the API client by ID.
     * get api client
     * @param orgId Organization ID
     * @param apiClientId API client ID
     */
    public getApiClientWithHttpInfo(orgId: string, apiClientId: string, _options?: Configuration): Promise<HttpInfo<GithubComSugerioMarketplaceServiceRdsDbLibIdentityApiClient>> {
        const result = this.api.getApiClientWithHttpInfo(orgId, apiClientId, _options);
        return result.toPromise();
    }

    /**
     * Get the API client by ID.
     * get api client
     * @param orgId Organization ID
     * @param apiClientId API client ID
     */
    public getApiClient(orgId: string, apiClientId: string, _options?: Configuration): Promise<GithubComSugerioMarketplaceServiceRdsDbLibIdentityApiClient> {
        const result = this.api.getApiClient(orgId, apiClientId, _options);
        return result.toPromise();
    }

    /**
     * Get the Bearer Access Token by giving the Suger API Client ID & Client Secret.
     * get api access token
     * @param data Suger API Client
     */
    public getApiClientAccessTokenWithHttpInfo(data: GetApiClientAccessTokenParams, _options?: Configuration): Promise<HttpInfo<ApiClientAccessToken>> {
        const result = this.api.getApiClientAccessTokenWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * Get the Bearer Access Token by giving the Suger API Client ID & Client Secret.
     * get api access token
     * @param data Suger API Client
     */
    public getApiClientAccessToken(data: GetApiClientAccessTokenParams, _options?: Configuration): Promise<ApiClientAccessToken> {
        const result = this.api.getApiClientAccessToken(data, _options);
        return result.toPromise();
    }

    /**
     * List all API clients in the given organization.
     * list api clients
     * @param orgId Organization ID
     */
    public listApiClientsWithHttpInfo(orgId: string, _options?: Configuration): Promise<HttpInfo<Array<GithubComSugerioMarketplaceServiceRdsDbLibIdentityApiClient>>> {
        const result = this.api.listApiClientsWithHttpInfo(orgId, _options);
        return result.toPromise();
    }

    /**
     * List all API clients in the given organization.
     * list api clients
     * @param orgId Organization ID
     */
    public listApiClients(orgId: string, _options?: Configuration): Promise<Array<GithubComSugerioMarketplaceServiceRdsDbLibIdentityApiClient>> {
        const result = this.api.listApiClients(orgId, _options);
        return result.toPromise();
    }


}



import { ObservableBillingApi } from './ObservableAPI';

import { BillingApiRequestFactory, BillingApiResponseProcessor} from "../apis/BillingApi";
export class PromiseBillingApi {
    private api: ObservableBillingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BillingApiRequestFactory,
        responseProcessor?: BillingApiResponseProcessor
    ) {
        this.api = new ObservableBillingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an addon template
     * create addon
     * @param orgId Organization ID
     * @param data CreateAndUpdateAddonParams
     */
    public createAddonWithHttpInfo(orgId: string, data: CreateAndUpdateAddonParams, _options?: Configuration): Promise<HttpInfo<BillingAddon>> {
        const result = this.api.createAddonWithHttpInfo(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * Create an addon template
     * create addon
     * @param orgId Organization ID
     * @param data CreateAndUpdateAddonParams
     */
    public createAddon(orgId: string, data: CreateAndUpdateAddonParams, _options?: Configuration): Promise<BillingAddon> {
        const result = this.api.createAddon(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * create refund on the payment transaction, support partial refunds multiple times.
     * create refund.
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param paymentTransactionId Payment transaction ID
     * @param amount Refund amount
     */
    public createRefundWithHttpInfo(orgId: string, buyerId: string, paymentTransactionId: string, amount: number, _options?: Configuration): Promise<HttpInfo<BillingPaymentTransaction>> {
        const result = this.api.createRefundWithHttpInfo(orgId, buyerId, paymentTransactionId, amount, _options);
        return result.toPromise();
    }

    /**
     * create refund on the payment transaction, support partial refunds multiple times.
     * create refund.
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param paymentTransactionId Payment transaction ID
     * @param amount Refund amount
     */
    public createRefund(orgId: string, buyerId: string, paymentTransactionId: string, amount: number, _options?: Configuration): Promise<BillingPaymentTransaction> {
        const result = this.api.createRefund(orgId, buyerId, paymentTransactionId, amount, _options);
        return result.toPromise();
    }

    /**
     * Soft delete an addon template
     * delete addon
     * @param orgId Organization ID
     * @param addonId Addon ID
     */
    public deleteAddonWithHttpInfo(orgId: string, addonId: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.deleteAddonWithHttpInfo(orgId, addonId, _options);
        return result.toPromise();
    }

    /**
     * Soft delete an addon template
     * delete addon
     * @param orgId Organization ID
     * @param addonId Addon ID
     */
    public deleteAddon(orgId: string, addonId: string, _options?: Configuration): Promise<string> {
        const result = this.api.deleteAddon(orgId, addonId, _options);
        return result.toPromise();
    }

    /**
     * Get an addon template
     * get addon
     * @param orgId Organization ID
     * @param addonId Addon ID
     */
    public getAddonWithHttpInfo(orgId: string, addonId: string, _options?: Configuration): Promise<HttpInfo<BillingAddon>> {
        const result = this.api.getAddonWithHttpInfo(orgId, addonId, _options);
        return result.toPromise();
    }

    /**
     * Get an addon template
     * get addon
     * @param orgId Organization ID
     * @param addonId Addon ID
     */
    public getAddon(orgId: string, addonId: string, _options?: Configuration): Promise<BillingAddon> {
        const result = this.api.getAddon(orgId, addonId, _options);
        return result.toPromise();
    }

    /**
     * Get the invoice by ID
     * get invoice
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param invoiceId Invoice ID
     */
    public getInvoiceWithHttpInfo(orgId: string, entitlementId: string, invoiceId: string, _options?: Configuration): Promise<HttpInfo<BillingInvoice>> {
        const result = this.api.getInvoiceWithHttpInfo(orgId, entitlementId, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * Get the invoice by ID
     * get invoice
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param invoiceId Invoice ID
     */
    public getInvoice(orgId: string, entitlementId: string, invoiceId: string, _options?: Configuration): Promise<BillingInvoice> {
        const result = this.api.getInvoice(orgId, entitlementId, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * Issue the invoice immediately. It can be used for manual issue or reissue invoice.
     * issue invoice
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param invoiceId Invoice ID
     */
    public issueInvoiceWithHttpInfo(orgId: string, entitlementId: string, invoiceId: string, _options?: Configuration): Promise<HttpInfo<BillingInvoice>> {
        const result = this.api.issueInvoiceWithHttpInfo(orgId, entitlementId, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * Issue the invoice immediately. It can be used for manual issue or reissue invoice.
     * issue invoice
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param invoiceId Invoice ID
     */
    public issueInvoice(orgId: string, entitlementId: string, invoiceId: string, _options?: Configuration): Promise<BillingInvoice> {
        const result = this.api.issueInvoice(orgId, entitlementId, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * List all addon templates
     * list addons
     * @param orgId Organization ID
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listAddonsWithHttpInfo(orgId: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<Array<BillingAddon>>> {
        const result = this.api.listAddonsWithHttpInfo(orgId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * List all addon templates
     * list addons
     * @param orgId Organization ID
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listAddons(orgId: string, limit?: number, offset?: number, _options?: Configuration): Promise<Array<BillingAddon>> {
        const result = this.api.listAddons(orgId, limit, offset, _options);
        return result.toPromise();
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
    public listInvoicesWithHttpInfo(orgId: string, entitlementId?: string, buyerId?: string, status?: 'DRAFT' | 'FINALIZED' | 'CANCELED' | 'DELETED' | '', limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<Array<BillingInvoice>>> {
        const result = this.api.listInvoicesWithHttpInfo(orgId, entitlementId, buyerId, status, limit, offset, _options);
        return result.toPromise();
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
    public listInvoices(orgId: string, entitlementId?: string, buyerId?: string, status?: 'DRAFT' | 'FINALIZED' | 'CANCELED' | 'DELETED' | '', limit?: number, offset?: number, _options?: Configuration): Promise<Array<BillingInvoice>> {
        const result = this.api.listInvoices(orgId, entitlementId, buyerId, status, limit, offset, _options);
        return result.toPromise();
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
    public listPaymentTransactionsWithHttpInfo(orgId: string, buyerId?: string, entitlementId?: string, invoiceId?: string, status?: 'PENDING' | 'PROCESSING' | 'SUCCESS' | 'FAILED', type?: 'CHARGE' | 'REFUND', limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<Array<BillingPaymentTransaction>>> {
        const result = this.api.listPaymentTransactionsWithHttpInfo(orgId, buyerId, entitlementId, invoiceId, status, type, limit, offset, _options);
        return result.toPromise();
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
    public listPaymentTransactions(orgId: string, buyerId?: string, entitlementId?: string, invoiceId?: string, status?: 'PENDING' | 'PROCESSING' | 'SUCCESS' | 'FAILED', type?: 'CHARGE' | 'REFUND', limit?: number, offset?: number, _options?: Configuration): Promise<Array<BillingPaymentTransaction>> {
        const result = this.api.listPaymentTransactions(orgId, buyerId, entitlementId, invoiceId, status, type, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * list refunds of the payment transactions.
     * list refunds.
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param paymentTransactionId Payment transaction ID
     */
    public listRefundOfPaymentTransactionWithHttpInfo(orgId: string, buyerId: string, paymentTransactionId: string, _options?: Configuration): Promise<HttpInfo<Array<BillingPaymentTransaction>>> {
        const result = this.api.listRefundOfPaymentTransactionWithHttpInfo(orgId, buyerId, paymentTransactionId, _options);
        return result.toPromise();
    }

    /**
     * list refunds of the payment transactions.
     * list refunds.
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param paymentTransactionId Payment transaction ID
     */
    public listRefundOfPaymentTransaction(orgId: string, buyerId: string, paymentTransactionId: string, _options?: Configuration): Promise<Array<BillingPaymentTransaction>> {
        const result = this.api.listRefundOfPaymentTransaction(orgId, buyerId, paymentTransactionId, _options);
        return result.toPromise();
    }

    /**
     * Initiate the payment for the invoice immediately. It can be used for manual payment or retry payment.
     * pay invoice
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param invoiceId Invoice ID
     */
    public payInvoiceWithHttpInfo(orgId: string, entitlementId: string, invoiceId: string, _options?: Configuration): Promise<HttpInfo<BillingInvoice>> {
        const result = this.api.payInvoiceWithHttpInfo(orgId, entitlementId, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * Initiate the payment for the invoice immediately. It can be used for manual payment or retry payment.
     * pay invoice
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param invoiceId Invoice ID
     */
    public payInvoice(orgId: string, entitlementId: string, invoiceId: string, _options?: Configuration): Promise<BillingInvoice> {
        const result = this.api.payInvoice(orgId, entitlementId, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * Update an addon template
     * update addon
     * @param orgId Organization ID
     * @param addonId Addon ID
     * @param data CreateAndUpdateAddonParams
     */
    public updateAddonWithHttpInfo(orgId: string, addonId: string, data: CreateAndUpdateAddonParams, _options?: Configuration): Promise<HttpInfo<BillingAddon>> {
        const result = this.api.updateAddonWithHttpInfo(orgId, addonId, data, _options);
        return result.toPromise();
    }

    /**
     * Update an addon template
     * update addon
     * @param orgId Organization ID
     * @param addonId Addon ID
     * @param data CreateAndUpdateAddonParams
     */
    public updateAddon(orgId: string, addonId: string, data: CreateAndUpdateAddonParams, _options?: Configuration): Promise<BillingAddon> {
        const result = this.api.updateAddon(orgId, addonId, data, _options);
        return result.toPromise();
    }

    /**
     * Void the invoice. It can be used for manual void or cancel the invoice.
     * void invoice
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param invoiceId Invoice ID
     */
    public voidInvoiceWithHttpInfo(orgId: string, entitlementId: string, invoiceId: string, _options?: Configuration): Promise<HttpInfo<BillingInvoice>> {
        const result = this.api.voidInvoiceWithHttpInfo(orgId, entitlementId, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * Void the invoice. It can be used for manual void or cancel the invoice.
     * void invoice
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param invoiceId Invoice ID
     */
    public voidInvoice(orgId: string, entitlementId: string, invoiceId: string, _options?: Configuration): Promise<BillingInvoice> {
        const result = this.api.voidInvoice(orgId, entitlementId, invoiceId, _options);
        return result.toPromise();
    }


}



import { ObservableBuyerApi } from './ObservableAPI';

import { BuyerApiRequestFactory, BuyerApiResponseProcessor} from "../apis/BuyerApi";
export class PromiseBuyerApi {
    private api: ObservableBuyerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BuyerApiRequestFactory,
        responseProcessor?: BuyerApiResponseProcessor
    ) {
        this.api = new ObservableBuyerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Close the given credit wallet, if it\'s a payment method, sync to payment provider too. Once closed, it can\'t be used for payment.
     * close credit wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param walletId Wallet ID
     */
    public closeCreditWalletWithHttpInfo(orgId: string, buyerId: string, walletId: string, _options?: Configuration): Promise<HttpInfo<BillingWallet>> {
        const result = this.api.closeCreditWalletWithHttpInfo(orgId, buyerId, walletId, _options);
        return result.toPromise();
    }

    /**
     * Close the given credit wallet, if it\'s a payment method, sync to payment provider too. Once closed, it can\'t be used for payment.
     * close credit wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param walletId Wallet ID
     */
    public closeCreditWallet(orgId: string, buyerId: string, walletId: string, _options?: Configuration): Promise<BillingWallet> {
        const result = this.api.closeCreditWallet(orgId, buyerId, walletId, _options);
        return result.toPromise();
    }

    /**
     * create a new buyer for Stripe or Adyen under the given organization.
     * create buyer
     * @param orgId Organization ID
     * @param data CreateBuyerParams
     */
    public createBuyerWithHttpInfo(orgId: string, data: CreateBuyerParams, _options?: Configuration): Promise<HttpInfo<IdentityBuyer>> {
        const result = this.api.createBuyerWithHttpInfo(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * create a new buyer for Stripe or Adyen under the given organization.
     * create buyer
     * @param orgId Organization ID
     * @param data CreateBuyerParams
     */
    public createBuyer(orgId: string, data: CreateBuyerParams, _options?: Configuration): Promise<IdentityBuyer> {
        const result = this.api.createBuyer(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * create a new credit wallet for the buyer.
     * create credit wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     */
    public createCreditWalletWithHttpInfo(orgId: string, buyerId: string, _options?: Configuration): Promise<HttpInfo<BillingWallet>> {
        const result = this.api.createCreditWalletWithHttpInfo(orgId, buyerId, _options);
        return result.toPromise();
    }

    /**
     * create a new credit wallet for the buyer.
     * create credit wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     */
    public createCreditWallet(orgId: string, buyerId: string, _options?: Configuration): Promise<BillingWallet> {
        const result = this.api.createCreditWallet(orgId, buyerId, _options);
        return result.toPromise();
    }

    /**
     * delete a wallet of the buyer, if it\'s a payment method, sync to payment provider too.
     * delete buyer wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param walletId Wallet ID
     */
    public deleteBuyerWalletWithHttpInfo(orgId: string, buyerId: string, walletId: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.deleteBuyerWalletWithHttpInfo(orgId, buyerId, walletId, _options);
        return result.toPromise();
    }

    /**
     * delete a wallet of the buyer, if it\'s a payment method, sync to payment provider too.
     * delete buyer wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param walletId Wallet ID
     */
    public deleteBuyerWallet(orgId: string, buyerId: string, walletId: string, _options?: Configuration): Promise<string> {
        const result = this.api.deleteBuyerWallet(orgId, buyerId, walletId, _options);
        return result.toPromise();
    }

    /**
     * get buyer by the given organization and buyer id.
     * get buyer
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     */
    public getBuyerWithHttpInfo(orgId: string, buyerId: string, _options?: Configuration): Promise<HttpInfo<IdentityBuyer>> {
        const result = this.api.getBuyerWithHttpInfo(orgId, buyerId, _options);
        return result.toPromise();
    }

    /**
     * get buyer by the given organization and buyer id.
     * get buyer
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     */
    public getBuyer(orgId: string, buyerId: string, _options?: Configuration): Promise<IdentityBuyer> {
        const result = this.api.getBuyer(orgId, buyerId, _options);
        return result.toPromise();
    }

    /**
     * list all wallets of a buyer.
     * list buyer\'s wallets
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     */
    public listBuyerWalletsWithHttpInfo(orgId: string, buyerId: string, _options?: Configuration): Promise<HttpInfo<Array<BillingWallet>>> {
        const result = this.api.listBuyerWalletsWithHttpInfo(orgId, buyerId, _options);
        return result.toPromise();
    }

    /**
     * list all wallets of a buyer.
     * list buyer\'s wallets
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     */
    public listBuyerWallets(orgId: string, buyerId: string, _options?: Configuration): Promise<Array<BillingWallet>> {
        const result = this.api.listBuyerWallets(orgId, buyerId, _options);
        return result.toPromise();
    }

    /**
     * list buyers by the given organization with pagination and optional filters.
     * list buyers
     * @param orgId Organization ID
     * @param [partner] filter by partner
     * @param [contactId] filter by contactId
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listBuyersWithHttpInfo(orgId: string, partner?: string, contactId?: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<Array<IdentityBuyer>>> {
        const result = this.api.listBuyersWithHttpInfo(orgId, partner, contactId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * list buyers by the given organization with pagination and optional filters.
     * list buyers
     * @param orgId Organization ID
     * @param [partner] filter by partner
     * @param [contactId] filter by contactId
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listBuyers(orgId: string, partner?: string, contactId?: string, limit?: number, offset?: number, _options?: Configuration): Promise<Array<IdentityBuyer>> {
        const result = this.api.listBuyers(orgId, partner, contactId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * set a payment method wallet as buyer\'s default wallet.
     * set buyer default wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param walletId Wallet ID
     */
    public setBuyerDefaultWalletWithHttpInfo(orgId: string, buyerId: string, walletId: string, _options?: Configuration): Promise<HttpInfo<IdentityBuyer>> {
        const result = this.api.setBuyerDefaultWalletWithHttpInfo(orgId, buyerId, walletId, _options);
        return result.toPromise();
    }

    /**
     * set a payment method wallet as buyer\'s default wallet.
     * set buyer default wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param walletId Wallet ID
     */
    public setBuyerDefaultWallet(orgId: string, buyerId: string, walletId: string, _options?: Configuration): Promise<IdentityBuyer> {
        const result = this.api.setBuyerDefaultWallet(orgId, buyerId, walletId, _options);
        return result.toPromise();
    }

    /**
     * update buyer by the given organization and buyer id.
     * update buyer
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param data UpdateBuyerParams
     */
    public updateBuyerWithHttpInfo(orgId: string, buyerId: string, data: UpdateBuyerParams, _options?: Configuration): Promise<HttpInfo<IdentityBuyer>> {
        const result = this.api.updateBuyerWithHttpInfo(orgId, buyerId, data, _options);
        return result.toPromise();
    }

    /**
     * update buyer by the given organization and buyer id.
     * update buyer
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param data UpdateBuyerParams
     */
    public updateBuyer(orgId: string, buyerId: string, data: UpdateBuyerParams, _options?: Configuration): Promise<IdentityBuyer> {
        const result = this.api.updateBuyer(orgId, buyerId, data, _options);
        return result.toPromise();
    }

    /**
     * update startTime or expireTime of the wallet.
     * update credit wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param walletId Wallet ID
     */
    public updateCreditWalletWithHttpInfo(orgId: string, buyerId: string, walletId: string, _options?: Configuration): Promise<HttpInfo<BillingWallet>> {
        const result = this.api.updateCreditWalletWithHttpInfo(orgId, buyerId, walletId, _options);
        return result.toPromise();
    }

    /**
     * update startTime or expireTime of the wallet.
     * update credit wallet
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param walletId Wallet ID
     */
    public updateCreditWallet(orgId: string, buyerId: string, walletId: string, _options?: Configuration): Promise<BillingWallet> {
        const result = this.api.updateCreditWallet(orgId, buyerId, walletId, _options);
        return result.toPromise();
    }


}



import { ObservableContactApi } from './ObservableAPI';

import { ContactApiRequestFactory, ContactApiResponseProcessor} from "../apis/ContactApi";
export class PromiseContactApi {
    private api: ObservableContactApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContactApiRequestFactory,
        responseProcessor?: ContactApiResponseProcessor
    ) {
        this.api = new ObservableContactApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * add contact to buyer by the given organization, buyer id and contact id.
     * add contact to buyer
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param contactId Contact ID
     */
    public addContactToBuyerWithHttpInfo(orgId: string, buyerId: string, contactId: string, _options?: Configuration): Promise<HttpInfo<IdentityBuyer>> {
        const result = this.api.addContactToBuyerWithHttpInfo(orgId, buyerId, contactId, _options);
        return result.toPromise();
    }

    /**
     * add contact to buyer by the given organization, buyer id and contact id.
     * add contact to buyer
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param contactId Contact ID
     */
    public addContactToBuyer(orgId: string, buyerId: string, contactId: string, _options?: Configuration): Promise<IdentityBuyer> {
        const result = this.api.addContactToBuyer(orgId, buyerId, contactId, _options);
        return result.toPromise();
    }

    /**
     * add contact to offer by the given organization, offer id and contact id.
     * add contact to offer
     * @param orgId Organization ID
     * @param contactId Contact ID
     * @param offerId Offer ID
     */
    public addContactToOfferWithHttpInfo(orgId: string, contactId: string, offerId: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.addContactToOfferWithHttpInfo(orgId, contactId, offerId, _options);
        return result.toPromise();
    }

    /**
     * add contact to offer by the given organization, offer id and contact id.
     * add contact to offer
     * @param orgId Organization ID
     * @param contactId Contact ID
     * @param offerId Offer ID
     */
    public addContactToOffer(orgId: string, contactId: string, offerId: string, _options?: Configuration): Promise<string> {
        const result = this.api.addContactToOffer(orgId, contactId, offerId, _options);
        return result.toPromise();
    }

    /**
     * Create multiple contacts under the given organization. If an email address already exists, return the existing contact.
     * batch create contacts
     * @param orgId Organization ID
     * @param data RequestBody
     */
    public batchCreateContactsWithHttpInfo(orgId: string, data: Array<IdentityContact>, _options?: Configuration): Promise<HttpInfo<Array<Array<IdentityContact>>>> {
        const result = this.api.batchCreateContactsWithHttpInfo(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * Create multiple contacts under the given organization. If an email address already exists, return the existing contact.
     * batch create contacts
     * @param orgId Organization ID
     * @param data RequestBody
     */
    public batchCreateContacts(orgId: string, data: Array<IdentityContact>, _options?: Configuration): Promise<Array<Array<IdentityContact>>> {
        const result = this.api.batchCreateContacts(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * Create a contact under the given organization. If the email address already exists, return the existing contact.
     * create contact
     * @param orgId Organization ID
     * @param data RequestBody
     */
    public createContactWithHttpInfo(orgId: string, data: IdentityContact, _options?: Configuration): Promise<HttpInfo<IdentityContact>> {
        const result = this.api.createContactWithHttpInfo(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * Create a contact under the given organization. If the email address already exists, return the existing contact.
     * create contact
     * @param orgId Organization ID
     * @param data RequestBody
     */
    public createContact(orgId: string, data: IdentityContact, _options?: Configuration): Promise<IdentityContact> {
        const result = this.api.createContact(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * Get the Contact by the given contact ID.
     * get contact
     * @param orgId Organization ID
     * @param contactId Contact ID
     */
    public getContactWithHttpInfo(orgId: string, contactId: string, _options?: Configuration): Promise<HttpInfo<IdentityContact>> {
        const result = this.api.getContactWithHttpInfo(orgId, contactId, _options);
        return result.toPromise();
    }

    /**
     * Get the Contact by the given contact ID.
     * get contact
     * @param orgId Organization ID
     * @param contactId Contact ID
     */
    public getContact(orgId: string, contactId: string, _options?: Configuration): Promise<IdentityContact> {
        const result = this.api.getContact(orgId, contactId, _options);
        return result.toPromise();
    }

    /**
     * List all contacts under the given organization.
     * list contacts by organization
     * @param orgId Organization ID
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listContactsByOrganizationWithHttpInfo(orgId: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<Array<IdentityContact>>> {
        const result = this.api.listContactsByOrganizationWithHttpInfo(orgId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * List all contacts under the given organization.
     * list contacts by organization
     * @param orgId Organization ID
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listContactsByOrganization(orgId: string, limit?: number, offset?: number, _options?: Configuration): Promise<Array<IdentityContact>> {
        const result = this.api.listContactsByOrganization(orgId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * remove contact from buyer by the given organization, buyer id and contact id.
     * remove contact from buyer
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param contactId Contact ID
     */
    public removeContactFromBuyerWithHttpInfo(orgId: string, buyerId: string, contactId: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.removeContactFromBuyerWithHttpInfo(orgId, buyerId, contactId, _options);
        return result.toPromise();
    }

    /**
     * remove contact from buyer by the given organization, buyer id and contact id.
     * remove contact from buyer
     * @param orgId Organization ID
     * @param buyerId Buyer ID
     * @param contactId Contact ID
     */
    public removeContactFromBuyer(orgId: string, buyerId: string, contactId: string, _options?: Configuration): Promise<string> {
        const result = this.api.removeContactFromBuyer(orgId, buyerId, contactId, _options);
        return result.toPromise();
    }

    /**
     * remove contact from offer by given organization, offer id and contact id.
     * remove contact from offer
     * @param orgId Organization ID
     * @param contactId Contact ID
     * @param offerId Offer ID
     */
    public removeContactFromOfferWithHttpInfo(orgId: string, contactId: string, offerId: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.removeContactFromOfferWithHttpInfo(orgId, contactId, offerId, _options);
        return result.toPromise();
    }

    /**
     * remove contact from offer by given organization, offer id and contact id.
     * remove contact from offer
     * @param orgId Organization ID
     * @param contactId Contact ID
     * @param offerId Offer ID
     */
    public removeContactFromOffer(orgId: string, contactId: string, offerId: string, _options?: Configuration): Promise<string> {
        const result = this.api.removeContactFromOffer(orgId, contactId, offerId, _options);
        return result.toPromise();
    }

    /**
     * update contact by the given organization and buyer id. The given name and information should be complete. Please note that this function does not support partial updates.
     * update contact
     * @param orgId Organization ID
     * @param contactId Contact ID
     * @param data Request Body
     */
    public updateContactWithHttpInfo(orgId: string, contactId: string, data: IdentityContact, _options?: Configuration): Promise<HttpInfo<IdentityContact>> {
        const result = this.api.updateContactWithHttpInfo(orgId, contactId, data, _options);
        return result.toPromise();
    }

    /**
     * update contact by the given organization and buyer id. The given name and information should be complete. Please note that this function does not support partial updates.
     * update contact
     * @param orgId Organization ID
     * @param contactId Contact ID
     * @param data Request Body
     */
    public updateContact(orgId: string, contactId: string, data: IdentityContact, _options?: Configuration): Promise<IdentityContact> {
        const result = this.api.updateContact(orgId, contactId, data, _options);
        return result.toPromise();
    }


}



import { ObservableEntitlementApi } from './ObservableAPI';

import { EntitlementApiRequestFactory, EntitlementApiResponseProcessor} from "../apis/EntitlementApi";
export class PromiseEntitlementApi {
    private api: ObservableEntitlementApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EntitlementApiRequestFactory,
        responseProcessor?: EntitlementApiResponseProcessor
    ) {
        this.api = new ObservableEntitlementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add the credit amount to the given Entitlement. The credit amount is accumulated & saved in the current Entitlement Term of the gvien Entitlement.
     * add entitlement credit
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public addEntitlementCreditWithHttpInfo(orgId: string, entitlementId: string, data: AddEntitlementCreditParams, _options?: Configuration): Promise<HttpInfo<AddEntitlementCreditResponse>> {
        const result = this.api.addEntitlementCreditWithHttpInfo(orgId, entitlementId, data, _options);
        return result.toPromise();
    }

    /**
     * Add the credit amount to the given Entitlement. The credit amount is accumulated & saved in the current Entitlement Term of the gvien Entitlement.
     * add entitlement credit
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public addEntitlementCredit(orgId: string, entitlementId: string, data: AddEntitlementCreditParams, _options?: Configuration): Promise<AddEntitlementCreditResponse> {
        const result = this.api.addEntitlementCredit(orgId, entitlementId, data, _options);
        return result.toPromise();
    }

    /**
     * Apply one billing addon to the given Entitlement. The entitlement status must be ACTIVE.
     * apply addon to entitlement
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public applyAddonToEntitlementWithHttpInfo(orgId: string, entitlementId: string, data: BillingAddonRecord, _options?: Configuration): Promise<HttpInfo<WorkloadEntitlement>> {
        const result = this.api.applyAddonToEntitlementWithHttpInfo(orgId, entitlementId, data, _options);
        return result.toPromise();
    }

    /**
     * Apply one billing addon to the given Entitlement. The entitlement status must be ACTIVE.
     * apply addon to entitlement
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public applyAddonToEntitlement(orgId: string, entitlementId: string, data: BillingAddonRecord, _options?: Configuration): Promise<WorkloadEntitlement> {
        const result = this.api.applyAddonToEntitlement(orgId, entitlementId, data, _options);
        return result.toPromise();
    }

    /**
     * Approve the given Entitlement. Only applicable to the Azure or GCP Entitlements with the status of \"PENDING_START\". Return 200 if the entitlement is already active.
     * approve entitlement
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public approveEntitlementWithHttpInfo(orgId: string, entitlementId: string, _options?: Configuration): Promise<HttpInfo<WorkloadEntitlement>> {
        const result = this.api.approveEntitlementWithHttpInfo(orgId, entitlementId, _options);
        return result.toPromise();
    }

    /**
     * Approve the given Entitlement. Only applicable to the Azure or GCP Entitlements with the status of \"PENDING_START\". Return 200 if the entitlement is already active.
     * approve entitlement
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public approveEntitlement(orgId: string, entitlementId: string, _options?: Configuration): Promise<WorkloadEntitlement> {
        const result = this.api.approveEntitlement(orgId, entitlementId, _options);
        return result.toPromise();
    }

    /**
     * Cancel the active subscription in Azure Marketplace.
     * cancel entitlement
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public cancelEntitlementWithHttpInfo(orgId: string, entitlementId: string, _options?: Configuration): Promise<HttpInfo<WorkloadEntitlement>> {
        const result = this.api.cancelEntitlementWithHttpInfo(orgId, entitlementId, _options);
        return result.toPromise();
    }

    /**
     * Cancel the active subscription in Azure Marketplace.
     * cancel entitlement
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public cancelEntitlement(orgId: string, entitlementId: string, _options?: Configuration): Promise<WorkloadEntitlement> {
        const result = this.api.cancelEntitlement(orgId, entitlementId, _options);
        return result.toPromise();
    }

    /**
     * Create an new entitlement for the given buyer & offer. Only applicable to non cloud billing partners.
     * create entitlement
     * @param orgId Organization ID
     * @param data RequestBody
     */
    public createEntitlementWithHttpInfo(orgId: string, data: CreateEntitlementParams, _options?: Configuration): Promise<HttpInfo<WorkloadEntitlement>> {
        const result = this.api.createEntitlementWithHttpInfo(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * Create an new entitlement for the given buyer & offer. Only applicable to non cloud billing partners.
     * create entitlement
     * @param orgId Organization ID
     * @param data RequestBody
     */
    public createEntitlement(orgId: string, data: CreateEntitlementParams, _options?: Configuration): Promise<WorkloadEntitlement> {
        const result = this.api.createEntitlement(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * Delete the entitlement term by the given entitlement ID and entitlement term ID. Only allow to delete the divided entitlement term.
     * delete entitlement term
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param entitlementTermId Entitlement Term ID
     */
    public deleteEntitlementTermWithHttpInfo(orgId: string, entitlementId: string, entitlementTermId: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.deleteEntitlementTermWithHttpInfo(orgId, entitlementId, entitlementTermId, _options);
        return result.toPromise();
    }

    /**
     * Delete the entitlement term by the given entitlement ID and entitlement term ID. Only allow to delete the divided entitlement term.
     * delete entitlement term
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param entitlementTermId Entitlement Term ID
     */
    public deleteEntitlementTerm(orgId: string, entitlementId: string, entitlementTermId: string, _options?: Configuration): Promise<string> {
        const result = this.api.deleteEntitlementTerm(orgId, entitlementId, entitlementTermId, _options);
        return result.toPromise();
    }

    /**
     * Divide the commit equally from the given entitlement into sub entitlement terms based on the given time periods.
     * divide entitlement commit
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public divideEntitlementCommitWithHttpInfo(orgId: string, entitlementId: string, data: DivideEntitlementCommitParams, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.divideEntitlementCommitWithHttpInfo(orgId, entitlementId, data, _options);
        return result.toPromise();
    }

    /**
     * Divide the commit equally from the given entitlement into sub entitlement terms based on the given time periods.
     * divide entitlement commit
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public divideEntitlementCommit(orgId: string, entitlementId: string, data: DivideEntitlementCommitParams, _options?: Configuration): Promise<string> {
        const result = this.api.divideEntitlementCommit(orgId, entitlementId, data, _options);
        return result.toPromise();
    }

    /**
     * Get the entitlement by ID.
     * get entitlement
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public getEntitlementWithHttpInfo(orgId: string, entitlementId: string, _options?: Configuration): Promise<HttpInfo<WorkloadEntitlement>> {
        const result = this.api.getEntitlementWithHttpInfo(orgId, entitlementId, _options);
        return result.toPromise();
    }

    /**
     * Get the entitlement by ID.
     * get entitlement
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public getEntitlement(orgId: string, entitlementId: string, _options?: Configuration): Promise<WorkloadEntitlement> {
        const result = this.api.getEntitlement(orgId, entitlementId, _options);
        return result.toPromise();
    }

    /**
     * Get the entitlement term by ID.
     * get entitlement term
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param entitlementTermId Entitlement Term ID
     */
    public getEntitlementTermWithHttpInfo(orgId: string, entitlementId: string, entitlementTermId: string, _options?: Configuration): Promise<HttpInfo<WorkloadEntitlementTerm>> {
        const result = this.api.getEntitlementTermWithHttpInfo(orgId, entitlementId, entitlementTermId, _options);
        return result.toPromise();
    }

    /**
     * Get the entitlement term by ID.
     * get entitlement term
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param entitlementTermId Entitlement Term ID
     */
    public getEntitlementTerm(orgId: string, entitlementId: string, entitlementTermId: string, _options?: Configuration): Promise<WorkloadEntitlementTerm> {
        const result = this.api.getEntitlementTerm(orgId, entitlementId, entitlementTermId, _options);
        return result.toPromise();
    }

    /**
     * List all Entitlement Terms of the given Entitlement.
     * list entitlement terms
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public listEntitlementTermsWithHttpInfo(orgId: string, entitlementId: string, _options?: Configuration): Promise<HttpInfo<Array<WorkloadEntitlementTerm>>> {
        const result = this.api.listEntitlementTermsWithHttpInfo(orgId, entitlementId, _options);
        return result.toPromise();
    }

    /**
     * List all Entitlement Terms of the given Entitlement.
     * list entitlement terms
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public listEntitlementTerms(orgId: string, entitlementId: string, _options?: Configuration): Promise<Array<WorkloadEntitlementTerm>> {
        const result = this.api.listEntitlementTerms(orgId, entitlementId, _options);
        return result.toPromise();
    }

    /**
     * List entitlements under the given organization with pagination and optional filters.
     * list entitlements
     * @param orgId Organization ID
     * @param [partner] filter by partner
     * @param [productId] filter by productId
     * @param [offerId] filter by offerId
     * @param [buyerId] filter by buyerId
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listEntitlementsWithHttpInfo(orgId: string, partner?: string, productId?: string, offerId?: string, buyerId?: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<Array<WorkloadEntitlement>>> {
        const result = this.api.listEntitlementsWithHttpInfo(orgId, partner, productId, offerId, buyerId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * List entitlements under the given organization with pagination and optional filters.
     * list entitlements
     * @param orgId Organization ID
     * @param [partner] filter by partner
     * @param [productId] filter by productId
     * @param [offerId] filter by offerId
     * @param [buyerId] filter by buyerId
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listEntitlements(orgId: string, partner?: string, productId?: string, offerId?: string, buyerId?: string, limit?: number, offset?: number, _options?: Configuration): Promise<Array<WorkloadEntitlement>> {
        const result = this.api.listEntitlements(orgId, partner, productId, offerId, buyerId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * Schedule the cancellation of the given Entitlement.
     * schedule entitlement cancellation
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public scheduleEntitlementCancellationWithHttpInfo(orgId: string, entitlementId: string, data: CancellationSchedule, _options?: Configuration): Promise<HttpInfo<WorkloadEntitlement>> {
        const result = this.api.scheduleEntitlementCancellationWithHttpInfo(orgId, entitlementId, data, _options);
        return result.toPromise();
    }

    /**
     * Schedule the cancellation of the given Entitlement.
     * schedule entitlement cancellation
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public scheduleEntitlementCancellation(orgId: string, entitlementId: string, data: CancellationSchedule, _options?: Configuration): Promise<WorkloadEntitlement> {
        const result = this.api.scheduleEntitlementCancellation(orgId, entitlementId, data, _options);
        return result.toPromise();
    }

    /**
     * Unschedule the cancellation of the given Entitlement.
     * unschedule entitlement cancellation
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public unscheduleEntitlementCancellationWithHttpInfo(orgId: string, entitlementId: string, _options?: Configuration): Promise<HttpInfo<WorkloadEntitlement>> {
        const result = this.api.unscheduleEntitlementCancellationWithHttpInfo(orgId, entitlementId, _options);
        return result.toPromise();
    }

    /**
     * Unschedule the cancellation of the given Entitlement.
     * unschedule entitlement cancellation
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     */
    public unscheduleEntitlementCancellation(orgId: string, entitlementId: string, _options?: Configuration): Promise<WorkloadEntitlement> {
        const result = this.api.unscheduleEntitlementCancellation(orgId, entitlementId, _options);
        return result.toPromise();
    }

    /**
     * Update the meta info of the given entitlement.
     * update entitlement meta info
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data Entitlement meta info to update
     */
    public updateEntitlementMetaInfoWithHttpInfo(orgId: string, entitlementId: string, data: WorkloadMetaInfo, _options?: Configuration): Promise<HttpInfo<WorkloadMetaInfo>> {
        const result = this.api.updateEntitlementMetaInfoWithHttpInfo(orgId, entitlementId, data, _options);
        return result.toPromise();
    }

    /**
     * Update the meta info of the given entitlement.
     * update entitlement meta info
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data Entitlement meta info to update
     */
    public updateEntitlementMetaInfo(orgId: string, entitlementId: string, data: WorkloadMetaInfo, _options?: Configuration): Promise<WorkloadMetaInfo> {
        const result = this.api.updateEntitlementMetaInfo(orgId, entitlementId, data, _options);
        return result.toPromise();
    }

    /**
     * Update the name of the given Entitlement.
     * update entitlement name
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data UpdateEntitlementNameParams
     */
    public updateEntitlementNameWithHttpInfo(orgId: string, entitlementId: string, data: GithubComSugerioMarketplaceServiceRdsDbLibUpdateEntitlementNameParams, _options?: Configuration): Promise<HttpInfo<WorkloadEntitlement>> {
        const result = this.api.updateEntitlementNameWithHttpInfo(orgId, entitlementId, data, _options);
        return result.toPromise();
    }

    /**
     * Update the name of the given Entitlement.
     * update entitlement name
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data UpdateEntitlementNameParams
     */
    public updateEntitlementName(orgId: string, entitlementId: string, data: GithubComSugerioMarketplaceServiceRdsDbLibUpdateEntitlementNameParams, _options?: Configuration): Promise<WorkloadEntitlement> {
        const result = this.api.updateEntitlementName(orgId, entitlementId, data, _options);
        return result.toPromise();
    }

    /**
     * Update the seat number for the active AZURE subscription.
     * update seat for the active AZURE subscription
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param newSeat New seat number
     */
    public updateEntitlementSeatWithHttpInfo(orgId: string, entitlementId: string, newSeat: number, _options?: Configuration): Promise<HttpInfo<WorkloadEntitlement>> {
        const result = this.api.updateEntitlementSeatWithHttpInfo(orgId, entitlementId, newSeat, _options);
        return result.toPromise();
    }

    /**
     * Update the seat number for the active AZURE subscription.
     * update seat for the active AZURE subscription
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param newSeat New seat number
     */
    public updateEntitlementSeat(orgId: string, entitlementId: string, newSeat: number, _options?: Configuration): Promise<WorkloadEntitlement> {
        const result = this.api.updateEntitlementSeat(orgId, entitlementId, newSeat, _options);
        return result.toPromise();
    }


}



import { ObservableMeteringApi } from './ObservableAPI';

import { MeteringApiRequestFactory, MeteringApiResponseProcessor} from "../apis/MeteringApi";
export class PromiseMeteringApi {
    private api: ObservableMeteringApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MeteringApiRequestFactory,
        responseProcessor?: MeteringApiResponseProcessor
    ) {
        this.api = new ObservableMeteringApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Batch report new usage record groups.
     * batch report usageRecordGroups
     * @param orgId Organization ID
     * @param usageRecordGroups Array of new usage record groups to report
     */
    public batchReportUsageRecordGroupsWithHttpInfo(orgId: string, usageRecordGroups: Array<NewUsageRecordGroup>, _options?: Configuration): Promise<HttpInfo<Array<MeteringUsageRecordGroup>>> {
        const result = this.api.batchReportUsageRecordGroupsWithHttpInfo(orgId, usageRecordGroups, _options);
        return result.toPromise();
    }

    /**
     * Batch report new usage record groups.
     * batch report usageRecordGroups
     * @param orgId Organization ID
     * @param usageRecordGroups Array of new usage record groups to report
     */
    public batchReportUsageRecordGroups(orgId: string, usageRecordGroups: Array<NewUsageRecordGroup>, _options?: Configuration): Promise<Array<MeteringUsageRecordGroup>> {
        const result = this.api.batchReportUsageRecordGroups(orgId, usageRecordGroups, _options);
        return result.toPromise();
    }

    /**
     * Provide a batch of usage record groups and validate each individual usage record group one by one.
     * batch validate usageRecordGroups
     * @param orgId Organization ID
     * @param data Array of usage record groups to be validated
     */
    public batchValidateUsageRecordGroupsWithHttpInfo(orgId: string, data: Array<NewUsageRecordGroup>, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.batchValidateUsageRecordGroupsWithHttpInfo(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * Provide a batch of usage record groups and validate each individual usage record group one by one.
     * batch validate usageRecordGroups
     * @param orgId Organization ID
     * @param data Array of usage record groups to be validated
     */
    public batchValidateUsageRecordGroups(orgId: string, data: Array<NewUsageRecordGroup>, _options?: Configuration): Promise<string> {
        const result = this.api.batchValidateUsageRecordGroups(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * Create a new billable metric for the given organization.
     * create billable metric
     * @param orgId Organization ID
     * @param data RequestBody
     */
    public createBillableMetricWithHttpInfo(orgId: string, data: BillableMetric, _options?: Configuration): Promise<HttpInfo<BillableMetric>> {
        const result = this.api.createBillableMetricWithHttpInfo(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * Create a new billable metric for the given organization.
     * create billable metric
     * @param orgId Organization ID
     * @param data RequestBody
     */
    public createBillableMetric(orgId: string, data: BillableMetric, _options?: Configuration): Promise<BillableMetric> {
        const result = this.api.createBillableMetric(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * delete the UsageRecordGroup for the given organization and usageRecordGroup ID. Only usageRecordGroup with status \"CREATED\" or \"INVALID\" can be deleted.
     * delete usageRecordGroup
     * @param orgId Organization ID
     * @param usageRecordGroupId UsageRecordGroup ID
     */
    public deleteUsageRecordGroupWithHttpInfo(orgId: string, usageRecordGroupId: string, _options?: Configuration): Promise<HttpInfo<MeteringUsageRecordGroup>> {
        const result = this.api.deleteUsageRecordGroupWithHttpInfo(orgId, usageRecordGroupId, _options);
        return result.toPromise();
    }

    /**
     * delete the UsageRecordGroup for the given organization and usageRecordGroup ID. Only usageRecordGroup with status \"CREATED\" or \"INVALID\" can be deleted.
     * delete usageRecordGroup
     * @param orgId Organization ID
     * @param usageRecordGroupId UsageRecordGroup ID
     */
    public deleteUsageRecordGroup(orgId: string, usageRecordGroupId: string, _options?: Configuration): Promise<MeteringUsageRecordGroup> {
        const result = this.api.deleteUsageRecordGroup(orgId, usageRecordGroupId, _options);
        return result.toPromise();
    }

    /**
     * Get the billable metric for the given organization and billable metric ID.
     * get billable metric
     * @param orgId Organization ID
     * @param billableMetricId Billable Metric ID
     */
    public getBillableMetricWithHttpInfo(orgId: string, billableMetricId: string, _options?: Configuration): Promise<HttpInfo<BillableMetric>> {
        const result = this.api.getBillableMetricWithHttpInfo(orgId, billableMetricId, _options);
        return result.toPromise();
    }

    /**
     * Get the billable metric for the given organization and billable metric ID.
     * get billable metric
     * @param orgId Organization ID
     * @param billableMetricId Billable Metric ID
     */
    public getBillableMetric(orgId: string, billableMetricId: string, _options?: Configuration): Promise<BillableMetric> {
        const result = this.api.getBillableMetric(orgId, billableMetricId, _options);
        return result.toPromise();
    }

    /**
     * Get the usage metering config info of the given organization.
     * get usage metering config info
     * @param orgId Organization ID
     */
    public getUsageMeteringConfigInfoWithHttpInfo(orgId: string, _options?: Configuration): Promise<HttpInfo<UsageMeteringConfigInfo>> {
        const result = this.api.getUsageMeteringConfigInfoWithHttpInfo(orgId, _options);
        return result.toPromise();
    }

    /**
     * Get the usage metering config info of the given organization.
     * get usage metering config info
     * @param orgId Organization ID
     */
    public getUsageMeteringConfigInfo(orgId: string, _options?: Configuration): Promise<UsageMeteringConfigInfo> {
        const result = this.api.getUsageMeteringConfigInfo(orgId, _options);
        return result.toPromise();
    }

    /**
     * list billable metrics for the given organization.
     * list billable metrics
     * @param orgId Organization ID
     * @param [status] Status of the billable metric
     */
    public listBillableMetricsWithHttpInfo(orgId: string, status?: string, _options?: Configuration): Promise<HttpInfo<Array<BillableMetric>>> {
        const result = this.api.listBillableMetricsWithHttpInfo(orgId, status, _options);
        return result.toPromise();
    }

    /**
     * list billable metrics for the given organization.
     * list billable metrics
     * @param orgId Organization ID
     * @param [status] Status of the billable metric
     */
    public listBillableMetrics(orgId: string, status?: string, _options?: Configuration): Promise<Array<BillableMetric>> {
        const result = this.api.listBillableMetrics(orgId, status, _options);
        return result.toPromise();
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
    public listUsageRecordGroupsWithHttpInfo(orgId: string, partner?: 'AWS' | 'AZURE' | 'GCP', buyerId?: string, entitlementId?: string, status?: 'CREATED' | 'DELETED' | 'INVALID' | 'REPORTED' | 'REPORT_PENDING' | 'REPORT_FAILED', source?: '' | 'API' | 'INTERNAL' | 'METRONOME' | 'ORB' | 'LAGO', metaInfo?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ListUsageRecordGroupsResponse>> {
        const result = this.api.listUsageRecordGroupsWithHttpInfo(orgId, partner, buyerId, entitlementId, status, source, metaInfo, startDate, endDate, limit, offset, _options);
        return result.toPromise();
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
    public listUsageRecordGroups(orgId: string, partner?: 'AWS' | 'AZURE' | 'GCP', buyerId?: string, entitlementId?: string, status?: 'CREATED' | 'DELETED' | 'INVALID' | 'REPORTED' | 'REPORT_PENDING' | 'REPORT_FAILED', source?: '' | 'API' | 'INTERNAL' | 'METRONOME' | 'ORB' | 'LAGO', metaInfo?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: Configuration): Promise<ListUsageRecordGroupsResponse> {
        const result = this.api.listUsageRecordGroups(orgId, partner, buyerId, entitlementId, status, source, metaInfo, startDate, endDate, limit, offset, _options);
        return result.toPromise();
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
    public listUsageRecordReportsWithHttpInfo(orgId: string, partner?: 'AWS' | 'AZURE' | 'GCP', buyerId?: string, entitlementId?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ListUsageRecordReportsResponse>> {
        const result = this.api.listUsageRecordReportsWithHttpInfo(orgId, partner, buyerId, entitlementId, startDate, endDate, limit, offset, _options);
        return result.toPromise();
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
    public listUsageRecordReports(orgId: string, partner?: 'AWS' | 'AZURE' | 'GCP', buyerId?: string, entitlementId?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: Configuration): Promise<ListUsageRecordReportsResponse> {
        const result = this.api.listUsageRecordReports(orgId, partner, buyerId, entitlementId, startDate, endDate, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * It is recommended to provide the ID in the request body CreateUsageRecordGroupParams, so the report can be deduplicated. All duplicate report will return error code 409.
     * report usageRecordGroup
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public reportUsageRecordGroupWithHttpInfo(orgId: string, entitlementId: string, data: CreateUsageRecordGroupParams, _options?: Configuration): Promise<HttpInfo<MeteringUsageRecordGroup>> {
        const result = this.api.reportUsageRecordGroupWithHttpInfo(orgId, entitlementId, data, _options);
        return result.toPromise();
    }

    /**
     * It is recommended to provide the ID in the request body CreateUsageRecordGroupParams, so the report can be deduplicated. All duplicate report will return error code 409.
     * report usageRecordGroup
     * @param orgId Organization ID
     * @param entitlementId Entitlement ID
     * @param data RequestBody
     */
    public reportUsageRecordGroup(orgId: string, entitlementId: string, data: CreateUsageRecordGroupParams, _options?: Configuration): Promise<MeteringUsageRecordGroup> {
        const result = this.api.reportUsageRecordGroup(orgId, entitlementId, data, _options);
        return result.toPromise();
    }

    /**
     * Retry the given UsageRecordGroup by setting from status \"REPORT_FAILED\" to \"CREATED\", and it will be ready for the next hourly report. Only usageRecordGroup with status \"REPORT_FAILED\" can be retried.
     * retry usageRecordGroup
     * @param orgId Organization ID
     * @param usageRecordGroupId UsageRecordGroup ID
     */
    public retryUsageRecordGroupWithHttpInfo(orgId: string, usageRecordGroupId: string, _options?: Configuration): Promise<HttpInfo<MeteringUsageRecordGroup>> {
        const result = this.api.retryUsageRecordGroupWithHttpInfo(orgId, usageRecordGroupId, _options);
        return result.toPromise();
    }

    /**
     * Retry the given UsageRecordGroup by setting from status \"REPORT_FAILED\" to \"CREATED\", and it will be ready for the next hourly report. Only usageRecordGroup with status \"REPORT_FAILED\" can be retried.
     * retry usageRecordGroup
     * @param orgId Organization ID
     * @param usageRecordGroupId UsageRecordGroup ID
     */
    public retryUsageRecordGroup(orgId: string, usageRecordGroupId: string, _options?: Configuration): Promise<MeteringUsageRecordGroup> {
        const result = this.api.retryUsageRecordGroup(orgId, usageRecordGroupId, _options);
        return result.toPromise();
    }

    /**
     * Update the name, description and status of the billable metric for the given organization.
     * update billable metric
     * @param orgId Organization ID
     * @param billableMetricId Billable Metric ID
     * @param data RequestBody
     */
    public updateBillableMetricWithHttpInfo(orgId: string, billableMetricId: string, data: UpdateBillableMetricParams, _options?: Configuration): Promise<HttpInfo<BillableMetric>> {
        const result = this.api.updateBillableMetricWithHttpInfo(orgId, billableMetricId, data, _options);
        return result.toPromise();
    }

    /**
     * Update the name, description and status of the billable metric for the given organization.
     * update billable metric
     * @param orgId Organization ID
     * @param billableMetricId Billable Metric ID
     * @param data RequestBody
     */
    public updateBillableMetric(orgId: string, billableMetricId: string, data: UpdateBillableMetricParams, _options?: Configuration): Promise<BillableMetric> {
        const result = this.api.updateBillableMetric(orgId, billableMetricId, data, _options);
        return result.toPromise();
    }

    /**
     * Update the usage metering config info of the given organization.
     * update usage metering config info
     * @param orgId Organization ID
     * @param data The usage metering config info to be updated
     */
    public updateUsageMeteringConfigInfoWithHttpInfo(orgId: string, data: UsageMeteringConfigInfo, _options?: Configuration): Promise<HttpInfo<UsageMeteringConfigInfo>> {
        const result = this.api.updateUsageMeteringConfigInfoWithHttpInfo(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * Update the usage metering config info of the given organization.
     * update usage metering config info
     * @param orgId Organization ID
     * @param data The usage metering config info to be updated
     */
    public updateUsageMeteringConfigInfo(orgId: string, data: UsageMeteringConfigInfo, _options?: Configuration): Promise<UsageMeteringConfigInfo> {
        const result = this.api.updateUsageMeteringConfigInfo(orgId, data, _options);
        return result.toPromise();
    }


}



import { ObservableNotificationApi } from './ObservableAPI';

import { NotificationApiRequestFactory, NotificationApiResponseProcessor} from "../apis/NotificationApi";
export class PromiseNotificationApi {
    private api: ObservableNotificationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NotificationApiRequestFactory,
        responseProcessor?: NotificationApiResponseProcessor
    ) {
        this.api = new ObservableNotificationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the notification message of the organization & notification message ID.
     * get notification message
     * @param orgId Organization ID
     * @param notificationMessageId Notification Message ID
     */
    public getNotificationMessageWithHttpInfo(orgId: string, notificationMessageId: string, _options?: Configuration): Promise<HttpInfo<NotificationMessage>> {
        const result = this.api.getNotificationMessageWithHttpInfo(orgId, notificationMessageId, _options);
        return result.toPromise();
    }

    /**
     * Get the notification message of the organization & notification message ID.
     * get notification message
     * @param orgId Organization ID
     * @param notificationMessageId Notification Message ID
     */
    public getNotificationMessage(orgId: string, notificationMessageId: string, _options?: Configuration): Promise<NotificationMessage> {
        const result = this.api.getNotificationMessage(orgId, notificationMessageId, _options);
        return result.toPromise();
    }

    /**
     * List the notification events of the given organization with pagination and optional filters.
     * list notification events
     * @param orgId Organization ID
     * @param [startDate] start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * @param [endDate] end date (UTC) in YYYY-MM-DD format, default is today
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     * @param [priorities] Filter by priorities, empty means all priorities. Valid values are: LOW, MEDIUM, HIGH, CRITICAL. Multiple values are supported, separated by comma.
     */
    public listNotificationEventsWithHttpInfo(orgId: string, startDate?: string, endDate?: string, limit?: number, offset?: number, priorities?: string, _options?: Configuration): Promise<HttpInfo<ListNotificationEventsResponse>> {
        const result = this.api.listNotificationEventsWithHttpInfo(orgId, startDate, endDate, limit, offset, priorities, _options);
        return result.toPromise();
    }

    /**
     * List the notification events of the given organization with pagination and optional filters.
     * list notification events
     * @param orgId Organization ID
     * @param [startDate] start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * @param [endDate] end date (UTC) in YYYY-MM-DD format, default is today
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     * @param [priorities] Filter by priorities, empty means all priorities. Valid values are: LOW, MEDIUM, HIGH, CRITICAL. Multiple values are supported, separated by comma.
     */
    public listNotificationEvents(orgId: string, startDate?: string, endDate?: string, limit?: number, offset?: number, priorities?: string, _options?: Configuration): Promise<ListNotificationEventsResponse> {
        const result = this.api.listNotificationEvents(orgId, startDate, endDate, limit, offset, priorities, _options);
        return result.toPromise();
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
    public listNotificationEventsByEntityWithHttpInfo(orgId: string, entityType: string, entityId: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ListNotificationEventsResponse>> {
        const result = this.api.listNotificationEventsByEntityWithHttpInfo(orgId, entityType, entityId, limit, offset, _options);
        return result.toPromise();
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
    public listNotificationEventsByEntity(orgId: string, entityType: string, entityId: string, limit?: number, offset?: number, _options?: Configuration): Promise<ListNotificationEventsResponse> {
        const result = this.api.listNotificationEventsByEntity(orgId, entityType, entityId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * List the notification messages of the given organization with pagination.
     * list notification messages
     * @param orgId Organization ID
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listNotificationMessagesWithHttpInfo(orgId: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ListNotificationMessagesResponse>> {
        const result = this.api.listNotificationMessagesWithHttpInfo(orgId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * List the notification messages of the given organization with pagination.
     * list notification messages
     * @param orgId Organization ID
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listNotificationMessages(orgId: string, limit?: number, offset?: number, _options?: Configuration): Promise<ListNotificationMessagesResponse> {
        const result = this.api.listNotificationMessages(orgId, limit, offset, _options);
        return result.toPromise();
    }


}



import { ObservableOfferApi } from './ObservableAPI';

import { OfferApiRequestFactory, OfferApiResponseProcessor} from "../apis/OfferApi";
export class PromiseOfferApi {
    private api: ObservableOfferApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OfferApiRequestFactory,
        responseProcessor?: OfferApiResponseProcessor
    ) {
        this.api = new ObservableOfferApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Only the offer with status = \"PENDING_ACCEPTANCE\", \"PENDING_CANCEL\", \"ACTIVE\" or \"USED\" is allowed to cancel.
     * cancel offer
     * @param orgId Organization ID
     * @param offerId Offer ID
     */
    public cancelOfferWithHttpInfo(orgId: string, offerId: string, _options?: Configuration): Promise<HttpInfo<WorkloadOffer>> {
        const result = this.api.cancelOfferWithHttpInfo(orgId, offerId, _options);
        return result.toPromise();
    }

    /**
     * Only the offer with status = \"PENDING_ACCEPTANCE\", \"PENDING_CANCEL\", \"ACTIVE\" or \"USED\" is allowed to cancel.
     * cancel offer
     * @param orgId Organization ID
     * @param offerId Offer ID
     */
    public cancelOffer(orgId: string, offerId: string, _options?: Configuration): Promise<WorkloadOffer> {
        const result = this.api.cancelOffer(orgId, offerId, _options);
        return result.toPromise();
    }

    /**
     * Create a private offer under the given organization.
     * create offer
     * @param orgId Organization ID
     * @param data Offer to create
     */
    public createOfferWithHttpInfo(orgId: string, data: WorkloadOffer, _options?: Configuration): Promise<HttpInfo<WorkloadOffer>> {
        const result = this.api.createOfferWithHttpInfo(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * Create a private offer under the given organization.
     * create offer
     * @param orgId Organization ID
     * @param data Offer to create
     */
    public createOffer(orgId: string, data: WorkloadOffer, _options?: Configuration): Promise<WorkloadOffer> {
        const result = this.api.createOffer(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * Create a new draft offer or update the existing draft offer. When updating draft offer, the offer.ID is required.
     * create or update draft offer
     * @param orgId Organization ID
     * @param data the draft offer to create
     */
    public createOrUpdateDraftOfferWithHttpInfo(orgId: string, data: WorkloadOffer, _options?: Configuration): Promise<HttpInfo<WorkloadOffer>> {
        const result = this.api.createOrUpdateDraftOfferWithHttpInfo(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * Create a new draft offer or update the existing draft offer. When updating draft offer, the offer.ID is required.
     * create or update draft offer
     * @param orgId Organization ID
     * @param data the draft offer to create
     */
    public createOrUpdateDraftOffer(orgId: string, data: WorkloadOffer, _options?: Configuration): Promise<WorkloadOffer> {
        const result = this.api.createOrUpdateDraftOffer(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * The offer is soft deleted (marked as DELETED status) in Suger service. Only the offer with status = \"DRAFT\", \"CREATE_FAILED\", \"EXPIRED\" or \"CANCELLED\" is allowed to be deleted.
     * delete offer
     * @param orgId Organization ID
     * @param offerId Offer ID
     */
    public deleteOfferWithHttpInfo(orgId: string, offerId: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.deleteOfferWithHttpInfo(orgId, offerId, _options);
        return result.toPromise();
    }

    /**
     * The offer is soft deleted (marked as DELETED status) in Suger service. Only the offer with status = \"DRAFT\", \"CREATE_FAILED\", \"EXPIRED\" or \"CANCELLED\" is allowed to be deleted.
     * delete offer
     * @param orgId Organization ID
     * @param offerId Offer ID
     */
    public deleteOffer(orgId: string, offerId: string, _options?: Configuration): Promise<string> {
        const result = this.api.deleteOffer(orgId, offerId, _options);
        return result.toPromise();
    }

    /**
     * Only the offer with status = \"PENDING_ACCEPTANCE\", \"EXPIRED\" or \"ACCEPTED\" is allowed to extend expiry date.
     * extend offer expiry date
     * @param orgId Organization ID
     * @param offerId Offer ID
     * @param newExpiryDate new expiry date in YYYY-MM-DD format
     */
    public extendPrivateOfferExpiryDateWithHttpInfo(orgId: string, offerId: string, newExpiryDate: string, _options?: Configuration): Promise<HttpInfo<WorkloadOffer>> {
        const result = this.api.extendPrivateOfferExpiryDateWithHttpInfo(orgId, offerId, newExpiryDate, _options);
        return result.toPromise();
    }

    /**
     * Only the offer with status = \"PENDING_ACCEPTANCE\", \"EXPIRED\" or \"ACCEPTED\" is allowed to extend expiry date.
     * extend offer expiry date
     * @param orgId Organization ID
     * @param offerId Offer ID
     * @param newExpiryDate new expiry date in YYYY-MM-DD format
     */
    public extendPrivateOfferExpiryDate(orgId: string, offerId: string, newExpiryDate: string, _options?: Configuration): Promise<WorkloadOffer> {
        const result = this.api.extendPrivateOfferExpiryDate(orgId, offerId, newExpiryDate, _options);
        return result.toPromise();
    }

    /**
     * Get the offer by the given offer ID.
     * get offer
     * @param orgId Organization ID
     * @param offerId Offer ID
     */
    public getOfferWithHttpInfo(orgId: string, offerId: string, _options?: Configuration): Promise<HttpInfo<WorkloadOffer>> {
        const result = this.api.getOfferWithHttpInfo(orgId, offerId, _options);
        return result.toPromise();
    }

    /**
     * Get the offer by the given offer ID.
     * get offer
     * @param orgId Organization ID
     * @param offerId Offer ID
     */
    public getOffer(orgId: string, offerId: string, _options?: Configuration): Promise<WorkloadOffer> {
        const result = this.api.getOffer(orgId, offerId, _options);
        return result.toPromise();
    }

    /**
     * Get the offer by the given offer external ID.
     * get offer by external ID
     * @param orgId Organization ID
     * @param offerExternalId Offer External ID
     */
    public getOfferByExternalIdWithHttpInfo(orgId: string, offerExternalId: string, _options?: Configuration): Promise<HttpInfo<WorkloadOffer>> {
        const result = this.api.getOfferByExternalIdWithHttpInfo(orgId, offerExternalId, _options);
        return result.toPromise();
    }

    /**
     * Get the offer by the given offer external ID.
     * get offer by external ID
     * @param orgId Organization ID
     * @param offerExternalId Offer External ID
     */
    public getOfferByExternalId(orgId: string, offerExternalId: string, _options?: Configuration): Promise<WorkloadOffer> {
        const result = this.api.getOfferByExternalId(orgId, offerExternalId, _options);
        return result.toPromise();
    }

    /**
     * Get the EULA file of the given offer ID.
     * get offer EULA
     * @param orgId Organization ID
     * @param offerId Offer ID
     * @param [format] response format in JSON or string
     */
    public getOfferEulaWithHttpInfo(orgId: string, offerId: string, format?: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.getOfferEulaWithHttpInfo(orgId, offerId, format, _options);
        return result.toPromise();
    }

    /**
     * Get the EULA file of the given offer ID.
     * get offer EULA
     * @param orgId Organization ID
     * @param offerId Offer ID
     * @param [format] response format in JSON or string
     */
    public getOfferEula(orgId: string, offerId: string, format?: string, _options?: Configuration): Promise<string> {
        const result = this.api.getOfferEula(orgId, offerId, format, _options);
        return result.toPromise();
    }

    /**
     * Get the Reseller EULA file of the given offer ID.
     * get offer reseller EULA
     * @param orgId Organization ID
     * @param offerId Offer ID
     */
    public getOfferResellerEulaWithHttpInfo(orgId: string, offerId: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.getOfferResellerEulaWithHttpInfo(orgId, offerId, _options);
        return result.toPromise();
    }

    /**
     * Get the Reseller EULA file of the given offer ID.
     * get offer reseller EULA
     * @param orgId Organization ID
     * @param offerId Offer ID
     */
    public getOfferResellerEula(orgId: string, offerId: string, _options?: Configuration): Promise<string> {
        const result = this.api.getOfferResellerEula(orgId, offerId, _options);
        return result.toPromise();
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
    public listOffersWithHttpInfo(orgId: string, status?: string, partner?: string, offerType?: string, productId?: string, buyerId?: string, hubspotDealId?: string, contactId?: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<Array<WorkloadOffer>>> {
        const result = this.api.listOffersWithHttpInfo(orgId, status, partner, offerType, productId, buyerId, hubspotDealId, contactId, limit, offset, _options);
        return result.toPromise();
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
    public listOffers(orgId: string, status?: string, partner?: string, offerType?: string, productId?: string, buyerId?: string, hubspotDealId?: string, contactId?: string, limit?: number, offset?: number, _options?: Configuration): Promise<Array<WorkloadOffer>> {
        const result = this.api.listOffers(orgId, status, partner, offerType, productId, buyerId, hubspotDealId, contactId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * Send offer notifications to the given contact ids. If contactIds is empty, send notifications to all contacts of the offer.
     * notify offer contacts
     * @param orgId Organization ID
     * @param offerId Offer ID
     * @param [contactIds] List of Contact IDs, if emoty or nil, send notifications to all contacts of the offer
     */
    public sendOfferNotificationsWithHttpInfo(orgId: string, offerId: string, contactIds?: Array<string>, _options?: Configuration): Promise<HttpInfo<NotificationEvent>> {
        const result = this.api.sendOfferNotificationsWithHttpInfo(orgId, offerId, contactIds, _options);
        return result.toPromise();
    }

    /**
     * Send offer notifications to the given contact ids. If contactIds is empty, send notifications to all contacts of the offer.
     * notify offer contacts
     * @param orgId Organization ID
     * @param offerId Offer ID
     * @param [contactIds] List of Contact IDs, if emoty or nil, send notifications to all contacts of the offer
     */
    public sendOfferNotifications(orgId: string, offerId: string, contactIds?: Array<string>, _options?: Configuration): Promise<NotificationEvent> {
        const result = this.api.sendOfferNotifications(orgId, offerId, contactIds, _options);
        return result.toPromise();
    }

    /**
     * Update the meta info of the given offer.
     * update offer meta info
     * @param orgId Organization ID
     * @param offerId Offer ID
     * @param data Offer meta info to update
     */
    public updateOfferMetaInfoWithHttpInfo(orgId: string, offerId: string, data: WorkloadMetaInfo, _options?: Configuration): Promise<HttpInfo<WorkloadMetaInfo>> {
        const result = this.api.updateOfferMetaInfoWithHttpInfo(orgId, offerId, data, _options);
        return result.toPromise();
    }

    /**
     * Update the meta info of the given offer.
     * update offer meta info
     * @param orgId Organization ID
     * @param offerId Offer ID
     * @param data Offer meta info to update
     */
    public updateOfferMetaInfo(orgId: string, offerId: string, data: WorkloadMetaInfo, _options?: Configuration): Promise<WorkloadMetaInfo> {
        const result = this.api.updateOfferMetaInfo(orgId, offerId, data, _options);
        return result.toPromise();
    }


}



import { ObservableProductApi } from './ObservableAPI';

import { ProductApiRequestFactory, ProductApiResponseProcessor} from "../apis/ProductApi";
export class PromiseProductApi {
    private api: ObservableProductApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductApiRequestFactory,
        responseProcessor?: ProductApiResponseProcessor
    ) {
        this.api = new ObservableProductApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new draft product or update the existing draft product. When updating draft product, the product.ID is required.
     * create or update draft product
     * @param orgId Organization ID
     * @param data the draft product to create
     */
    public createOrUpdateDraftProductWithHttpInfo(orgId: string, data: WorkloadProduct, _options?: Configuration): Promise<HttpInfo<WorkloadProduct>> {
        const result = this.api.createOrUpdateDraftProductWithHttpInfo(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * Create a new draft product or update the existing draft product. When updating draft product, the product.ID is required.
     * create or update draft product
     * @param orgId Organization ID
     * @param data the draft product to create
     */
    public createOrUpdateDraftProduct(orgId: string, data: WorkloadProduct, _options?: Configuration): Promise<WorkloadProduct> {
        const result = this.api.createOrUpdateDraftProduct(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * create a new product in the marketplace
     * create product
     * @param orgId Organization ID
     * @param data the product to create
     */
    public createProductWithHttpInfo(orgId: string, data: WorkloadProduct, _options?: Configuration): Promise<HttpInfo<WorkloadProduct>> {
        const result = this.api.createProductWithHttpInfo(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * create a new product in the marketplace
     * create product
     * @param orgId Organization ID
     * @param data the product to create
     */
    public createProduct(orgId: string, data: WorkloadProduct, _options?: Configuration): Promise<WorkloadProduct> {
        const result = this.api.createProduct(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * The product is soft deleted (marked as DELETED status) in Suger service. only the products with non PUBLIC status are allowed to be deleted.
     * delete product
     * @param orgId Organization ID
     * @param productId Product ID
     */
    public deleteProductWithHttpInfo(orgId: string, productId: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.deleteProductWithHttpInfo(orgId, productId, _options);
        return result.toPromise();
    }

    /**
     * The product is soft deleted (marked as DELETED status) in Suger service. only the products with non PUBLIC status are allowed to be deleted.
     * delete product
     * @param orgId Organization ID
     * @param productId Product ID
     */
    public deleteProduct(orgId: string, productId: string, _options?: Configuration): Promise<string> {
        const result = this.api.deleteProduct(orgId, productId, _options);
        return result.toPromise();
    }

    /**
     * get product by product id
     * get product
     * @param orgId Organization ID
     * @param productId Product ID
     */
    public getProductWithHttpInfo(orgId: string, productId: string, _options?: Configuration): Promise<HttpInfo<WorkloadProduct>> {
        const result = this.api.getProductWithHttpInfo(orgId, productId, _options);
        return result.toPromise();
    }

    /**
     * get product by product id
     * get product
     * @param orgId Organization ID
     * @param productId Product ID
     */
    public getProduct(orgId: string, productId: string, _options?: Configuration): Promise<WorkloadProduct> {
        const result = this.api.getProduct(orgId, productId, _options);
        return result.toPromise();
    }

    /**
     * list all metering dimensions of the given product
     * list metering dimensions of product
     * @param orgId Organization ID
     * @param productId Product ID
     */
    public listProductMeteringDimensionsWithHttpInfo(orgId: string, productId: string, _options?: Configuration): Promise<HttpInfo<Array<MeteringDimension>>> {
        const result = this.api.listProductMeteringDimensionsWithHttpInfo(orgId, productId, _options);
        return result.toPromise();
    }

    /**
     * list all metering dimensions of the given product
     * list metering dimensions of product
     * @param orgId Organization ID
     * @param productId Product ID
     */
    public listProductMeteringDimensions(orgId: string, productId: string, _options?: Configuration): Promise<Array<MeteringDimension>> {
        const result = this.api.listProductMeteringDimensions(orgId, productId, _options);
        return result.toPromise();
    }

    /**
     * list all products under the given organization
     * list products by organization
     * @param orgId Organization ID
     */
    public listProductsByOrganizationWithHttpInfo(orgId: string, _options?: Configuration): Promise<HttpInfo<Array<WorkloadProduct>>> {
        const result = this.api.listProductsByOrganizationWithHttpInfo(orgId, _options);
        return result.toPromise();
    }

    /**
     * list all products under the given organization
     * list products by organization
     * @param orgId Organization ID
     */
    public listProductsByOrganization(orgId: string, _options?: Configuration): Promise<Array<WorkloadProduct>> {
        const result = this.api.listProductsByOrganization(orgId, _options);
        return result.toPromise();
    }

    /**
     * list all products under the given organization and cloud partner
     * list products by partner
     * @param orgId Organization ID
     * @param partner Cloud Partner
     */
    public listProductsByPartnerWithHttpInfo(orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', _options?: Configuration): Promise<HttpInfo<Array<WorkloadProduct>>> {
        const result = this.api.listProductsByPartnerWithHttpInfo(orgId, partner, _options);
        return result.toPromise();
    }

    /**
     * list all products under the given organization and cloud partner
     * list products by partner
     * @param orgId Organization ID
     * @param partner Cloud Partner
     */
    public listProductsByPartner(orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', _options?: Configuration): Promise<Array<WorkloadProduct>> {
        const result = this.api.listProductsByPartner(orgId, partner, _options);
        return result.toPromise();
    }

    /**
     * publish the given product to the public status in the marketplace
     * publish product
     * @param orgId Organization ID
     * @param productId Product ID
     * @param data the product to publish
     */
    public publishProductWithHttpInfo(orgId: string, productId: string, data: WorkloadProduct, _options?: Configuration): Promise<HttpInfo<WorkloadProduct>> {
        const result = this.api.publishProductWithHttpInfo(orgId, productId, data, _options);
        return result.toPromise();
    }

    /**
     * publish the given product to the public status in the marketplace
     * publish product
     * @param orgId Organization ID
     * @param productId Product ID
     * @param data the product to publish
     */
    public publishProduct(orgId: string, productId: string, data: WorkloadProduct, _options?: Configuration): Promise<WorkloadProduct> {
        const result = this.api.publishProduct(orgId, productId, data, _options);
        return result.toPromise();
    }

    /**
     * update product info, no price update is allowed via this API.
     * update product
     * @param orgId Organization ID
     * @param productId Product ID
     * @param data the product to update
     */
    public updateProductWithHttpInfo(orgId: string, productId: string, data: WorkloadProduct, _options?: Configuration): Promise<HttpInfo<WorkloadProduct>> {
        const result = this.api.updateProductWithHttpInfo(orgId, productId, data, _options);
        return result.toPromise();
    }

    /**
     * update product info, no price update is allowed via this API.
     * update product
     * @param orgId Organization ID
     * @param productId Product ID
     * @param data the product to update
     */
    public updateProduct(orgId: string, productId: string, data: WorkloadProduct, _options?: Configuration): Promise<WorkloadProduct> {
        const result = this.api.updateProduct(orgId, productId, data, _options);
        return result.toPromise();
    }

    /**
     * update the fulfillment url of the given product
     * update product fulfillment url
     * @param orgId Organization ID
     * @param productId Product ID
     * @param data Update Product Params
     */
    public updateProductFulfillmentUrlWithHttpInfo(orgId: string, productId: string, data: UpdateProductParams, _options?: Configuration): Promise<HttpInfo<WorkloadProduct>> {
        const result = this.api.updateProductFulfillmentUrlWithHttpInfo(orgId, productId, data, _options);
        return result.toPromise();
    }

    /**
     * update the fulfillment url of the given product
     * update product fulfillment url
     * @param orgId Organization ID
     * @param productId Product ID
     * @param data Update Product Params
     */
    public updateProductFulfillmentUrl(orgId: string, productId: string, data: UpdateProductParams, _options?: Configuration): Promise<WorkloadProduct> {
        const result = this.api.updateProductFulfillmentUrl(orgId, productId, data, _options);
        return result.toPromise();
    }

    /**
     * Update the meta info of the given product.
     * update product meta info
     * @param orgId Organization ID
     * @param productId Product ID
     * @param data Product meta info to update
     */
    public updateProductMetaInfoWithHttpInfo(orgId: string, productId: string, data: WorkloadMetaInfo, _options?: Configuration): Promise<HttpInfo<WorkloadMetaInfo>> {
        const result = this.api.updateProductMetaInfoWithHttpInfo(orgId, productId, data, _options);
        return result.toPromise();
    }

    /**
     * Update the meta info of the given product.
     * update product meta info
     * @param orgId Organization ID
     * @param productId Product ID
     * @param data Product meta info to update
     */
    public updateProductMetaInfo(orgId: string, productId: string, data: WorkloadMetaInfo, _options?: Configuration): Promise<WorkloadMetaInfo> {
        const result = this.api.updateProductMetaInfo(orgId, productId, data, _options);
        return result.toPromise();
    }


}



import { ObservableReportApi } from './ObservableAPI';

import { ReportApiRequestFactory, ReportApiResponseProcessor} from "../apis/ReportApi";
export class PromiseReportApi {
    private api: ObservableReportApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReportApiRequestFactory,
        responseProcessor?: ReportApiResponseProcessor
    ) {
        this.api = new ObservableReportApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the revenue report of the given organization, product, entitlement, or buyer.
     * get revenue report
     * @param orgId Organization ID
     * @param data Get Revenue Report Params
     */
    public getRevenueReportWithHttpInfo(orgId: string, data: GetRevenueReportParams, _options?: Configuration): Promise<HttpInfo<RevenueReport>> {
        const result = this.api.getRevenueReportWithHttpInfo(orgId, data, _options);
        return result.toPromise();
    }

    /**
     * Get the revenue report of the given organization, product, entitlement, or buyer.
     * get revenue report
     * @param orgId Organization ID
     * @param data Get Revenue Report Params
     */
    public getRevenueReport(orgId: string, data: GetRevenueReportParams, _options?: Configuration): Promise<RevenueReport> {
        const result = this.api.getRevenueReport(orgId, data, _options);
        return result.toPromise();
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
    public listDailyRevenueRecordsWithHttpInfo(orgId: string, partner?: 'AWS' | 'AZURE' | 'GCP', productId?: string, buyerId?: string, entitlementId?: string, startDate?: string, endDate?: string, _options?: Configuration): Promise<HttpInfo<Array<RevenueRecord>>> {
        const result = this.api.listDailyRevenueRecordsWithHttpInfo(orgId, partner, productId, buyerId, entitlementId, startDate, endDate, _options);
        return result.toPromise();
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
    public listDailyRevenueRecords(orgId: string, partner?: 'AWS' | 'AZURE' | 'GCP', productId?: string, buyerId?: string, entitlementId?: string, startDate?: string, endDate?: string, _options?: Configuration): Promise<Array<RevenueRecord>> {
        const result = this.api.listDailyRevenueRecords(orgId, partner, productId, buyerId, entitlementId, startDate, endDate, _options);
        return result.toPromise();
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
    public listRevenueRecordDetailsWithHttpInfo(orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', productId?: string, buyerId?: string, entitlementId?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ListRevenueRecordDetailsResponse>> {
        const result = this.api.listRevenueRecordDetailsWithHttpInfo(orgId, partner, productId, buyerId, entitlementId, startDate, endDate, limit, offset, _options);
        return result.toPromise();
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
    public listRevenueRecordDetails(orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', productId?: string, buyerId?: string, entitlementId?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: Configuration): Promise<ListRevenueRecordDetailsResponse> {
        const result = this.api.listRevenueRecordDetails(orgId, partner, productId, buyerId, entitlementId, startDate, endDate, limit, offset, _options);
        return result.toPromise();
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
    public listRevenueRecordsWithHttpInfo(orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', productId?: string, entitlementId?: string, buyerId?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ListRevenueRecordsResponse>> {
        const result = this.api.listRevenueRecordsWithHttpInfo(orgId, partner, productId, entitlementId, buyerId, startDate, endDate, limit, offset, _options);
        return result.toPromise();
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
    public listRevenueRecords(orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', productId?: string, entitlementId?: string, buyerId?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: Configuration): Promise<ListRevenueRecordsResponse> {
        const result = this.api.listRevenueRecords(orgId, partner, productId, entitlementId, buyerId, startDate, endDate, limit, offset, _options);
        return result.toPromise();
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
    public listUsageMeteringDailyRecordsWithHttpInfo(orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', buyerId?: string, entitlementId?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ListUsageMeteringDailyRecordsResponse>> {
        const result = this.api.listUsageMeteringDailyRecordsWithHttpInfo(orgId, partner, buyerId, entitlementId, startDate, endDate, limit, offset, _options);
        return result.toPromise();
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
    public listUsageMeteringDailyRecords(orgId: string, partner: 'AWS' | 'AZURE' | 'GCP', buyerId?: string, entitlementId?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, _options?: Configuration): Promise<ListUsageMeteringDailyRecordsResponse> {
        const result = this.api.listUsageMeteringDailyRecords(orgId, partner, buyerId, entitlementId, startDate, endDate, limit, offset, _options);
        return result.toPromise();
    }


}



import { ObservableSupportApi } from './ObservableAPI';

import { SupportApiRequestFactory, SupportApiResponseProcessor} from "../apis/SupportApi";
export class PromiseSupportApi {
    private api: ObservableSupportApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SupportApiRequestFactory,
        responseProcessor?: SupportApiResponseProcessor
    ) {
        this.api = new ObservableSupportApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * close suuport ticket
     * close support ticket
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     */
    public closeSupportTicketWithHttpInfo(orgId: string, ticketId: string, _options?: Configuration): Promise<HttpInfo<SupportTicket>> {
        const result = this.api.closeSupportTicketWithHttpInfo(orgId, ticketId, _options);
        return result.toPromise();
    }

    /**
     * close suuport ticket
     * close support ticket
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     */
    public closeSupportTicket(orgId: string, ticketId: string, _options?: Configuration): Promise<SupportTicket> {
        const result = this.api.closeSupportTicket(orgId, ticketId, _options);
        return result.toPromise();
    }

    /**
     * create support ticket
     * create support ticket
     * @param orgId Organization ID
     * @param body Ticket create request
     */
    public createSupportTicketWithHttpInfo(orgId: string, body: SupportTicket, _options?: Configuration): Promise<HttpInfo<SupportTicket>> {
        const result = this.api.createSupportTicketWithHttpInfo(orgId, body, _options);
        return result.toPromise();
    }

    /**
     * create support ticket
     * create support ticket
     * @param orgId Organization ID
     * @param body Ticket create request
     */
    public createSupportTicket(orgId: string, body: SupportTicket, _options?: Configuration): Promise<SupportTicket> {
        const result = this.api.createSupportTicket(orgId, body, _options);
        return result.toPromise();
    }

    /**
     * create support ticket attachment
     * create support ticket attachment
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     * @param file File to upload
     */
    public createSupportTicketAttachmentWithHttpInfo(orgId: string, ticketId: string, file: HttpFile, _options?: Configuration): Promise<HttpInfo<Array<SupportTicketAttachment>>> {
        const result = this.api.createSupportTicketAttachmentWithHttpInfo(orgId, ticketId, file, _options);
        return result.toPromise();
    }

    /**
     * create support ticket attachment
     * create support ticket attachment
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     * @param file File to upload
     */
    public createSupportTicketAttachment(orgId: string, ticketId: string, file: HttpFile, _options?: Configuration): Promise<Array<SupportTicketAttachment>> {
        const result = this.api.createSupportTicketAttachment(orgId, ticketId, file, _options);
        return result.toPromise();
    }

    /**
     * create support ticket comment
     * create support ticket comment
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     * @param body Ticket create request
     */
    public createSupportTicketCommentWithHttpInfo(orgId: string, ticketId: string, body: SupportTicketComment, _options?: Configuration): Promise<HttpInfo<SupportTicketComment>> {
        const result = this.api.createSupportTicketCommentWithHttpInfo(orgId, ticketId, body, _options);
        return result.toPromise();
    }

    /**
     * create support ticket comment
     * create support ticket comment
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     * @param body Ticket create request
     */
    public createSupportTicketComment(orgId: string, ticketId: string, body: SupportTicketComment, _options?: Configuration): Promise<SupportTicketComment> {
        const result = this.api.createSupportTicketComment(orgId, ticketId, body, _options);
        return result.toPromise();
    }

    /**
     * get support ticket
     * get support ticket
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     */
    public getSupportTicketWithHttpInfo(orgId: string, ticketId: string, _options?: Configuration): Promise<HttpInfo<SupportTicket>> {
        const result = this.api.getSupportTicketWithHttpInfo(orgId, ticketId, _options);
        return result.toPromise();
    }

    /**
     * get support ticket
     * get support ticket
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     */
    public getSupportTicket(orgId: string, ticketId: string, _options?: Configuration): Promise<SupportTicket> {
        const result = this.api.getSupportTicket(orgId, ticketId, _options);
        return result.toPromise();
    }

    /**
     * list support tickets
     * list support tickets
     * @param orgId Organization ID
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listSupportTicketsWithHttpInfo(orgId: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<ListSupportTicketsResponse>> {
        const result = this.api.listSupportTicketsWithHttpInfo(orgId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * list support tickets
     * list support tickets
     * @param orgId Organization ID
     * @param [limit] List pagination size, default 1000, max value is 1000
     * @param [offset] List pagination offset, default 0
     */
    public listSupportTickets(orgId: string, limit?: number, offset?: number, _options?: Configuration): Promise<ListSupportTicketsResponse> {
        const result = this.api.listSupportTickets(orgId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * reopen support ticket
     * reopen support ticket
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     */
    public reopenSupportTicketWithHttpInfo(orgId: string, ticketId: string, _options?: Configuration): Promise<HttpInfo<SupportTicket>> {
        const result = this.api.reopenSupportTicketWithHttpInfo(orgId, ticketId, _options);
        return result.toPromise();
    }

    /**
     * reopen support ticket
     * reopen support ticket
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     */
    public reopenSupportTicket(orgId: string, ticketId: string, _options?: Configuration): Promise<SupportTicket> {
        const result = this.api.reopenSupportTicket(orgId, ticketId, _options);
        return result.toPromise();
    }

    /**
     * update support ticket
     * update support ticket
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     * @param body Ticket create request
     */
    public updateSupportTicketWithHttpInfo(orgId: string, ticketId: string, body: UpdateSupportTicketRequest, _options?: Configuration): Promise<HttpInfo<SupportTicket>> {
        const result = this.api.updateSupportTicketWithHttpInfo(orgId, ticketId, body, _options);
        return result.toPromise();
    }

    /**
     * update support ticket
     * update support ticket
     * @param orgId Organization ID
     * @param ticketId Ticket ID
     * @param body Ticket create request
     */
    public updateSupportTicket(orgId: string, ticketId: string, body: UpdateSupportTicketRequest, _options?: Configuration): Promise<SupportTicket> {
        const result = this.api.updateSupportTicket(orgId, ticketId, body, _options);
        return result.toPromise();
    }


}



