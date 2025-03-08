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
import { DatabaseSqlNullBool } from '../models/DatabaseSqlNullBool';
import { DatabaseSqlNullString } from '../models/DatabaseSqlNullString';
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
import { SnowflakeMarketplaceProduct } from '../models/SnowflakeMarketplaceProduct';
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

import { ObservableAPIApi } from "./ObservableAPI";
import { APIApiRequestFactory, APIApiResponseProcessor} from "../apis/APIApi";

export interface APIApiGetApiClientRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof APIApigetApiClient
     */
    orgId: string
    /**
     * API client ID
     * Defaults to: undefined
     * @type string
     * @memberof APIApigetApiClient
     */
    apiClientId: string
}

export interface APIApiListApiClientsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof APIApilistApiClients
     */
    orgId: string
}

export class ObjectAPIApi {
    private api: ObservableAPIApi

    public constructor(configuration: Configuration, requestFactory?: APIApiRequestFactory, responseProcessor?: APIApiResponseProcessor) {
        this.api = new ObservableAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the API client by ID.
     * get api client
     * @param param the request object
     */
    public getApiClientWithHttpInfo(param: APIApiGetApiClientRequest, options?: Configuration): Promise<HttpInfo<GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient>> {
        return this.api.getApiClientWithHttpInfo(param.orgId, param.apiClientId,  options).toPromise();
    }

    /**
     * Get the API client by ID.
     * get api client
     * @param param the request object
     */
    public getApiClient(param: APIApiGetApiClientRequest, options?: Configuration): Promise<GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient> {
        return this.api.getApiClient(param.orgId, param.apiClientId,  options).toPromise();
    }

    /**
     * List all API clients in the given organization.
     * list api clients
     * @param param the request object
     */
    public listApiClientsWithHttpInfo(param: APIApiListApiClientsRequest, options?: Configuration): Promise<HttpInfo<Array<GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient>>> {
        return this.api.listApiClientsWithHttpInfo(param.orgId,  options).toPromise();
    }

    /**
     * List all API clients in the given organization.
     * list api clients
     * @param param the request object
     */
    public listApiClients(param: APIApiListApiClientsRequest, options?: Configuration): Promise<Array<GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibIdentityApiClient>> {
        return this.api.listApiClients(param.orgId,  options).toPromise();
    }

}

import { ObservableBillingApi } from "./ObservableAPI";
import { BillingApiRequestFactory, BillingApiResponseProcessor} from "../apis/BillingApi";

export interface BillingApiCreateAddonRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApicreateAddon
     */
    orgId: string
    /**
     * CreateAndUpdateAddonParams
     * @type CreateAndUpdateAddonParams
     * @memberof BillingApicreateAddon
     */
    data: CreateAndUpdateAddonParams
}

export interface BillingApiCreateRefundRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApicreateRefund
     */
    orgId: string
    /**
     * Buyer ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApicreateRefund
     */
    buyerId: string
    /**
     * Payment transaction ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApicreateRefund
     */
    paymentTransactionId: string
    /**
     * Refund amount
     * Defaults to: undefined
     * @type number
     * @memberof BillingApicreateRefund
     */
    amount: number
}

export interface BillingApiDeleteAddonRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApideleteAddon
     */
    orgId: string
    /**
     * Addon ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApideleteAddon
     */
    addonId: string
}

export interface BillingApiGetAddonRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApigetAddon
     */
    orgId: string
    /**
     * Addon ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApigetAddon
     */
    addonId: string
}

export interface BillingApiGetInvoiceV2Request {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApigetInvoiceV2
     */
    orgId: string
    /**
     * Invoice ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApigetInvoiceV2
     */
    invoiceId: string
}

export interface BillingApiIssueInvoiceV2Request {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApiissueInvoiceV2
     */
    orgId: string
    /**
     * Invoice ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApiissueInvoiceV2
     */
    invoiceId: string
    /**
     * List of Contact IDs
     * @type Array&lt;string&gt;
     * @memberof BillingApiissueInvoiceV2
     */
    contactIds?: Array<string>
}

export interface BillingApiListAddonsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApilistAddons
     */
    orgId: string
    /**
     * List pagination size, default 1000, max value is 1000
     * Defaults to: undefined
     * @type number
     * @memberof BillingApilistAddons
     */
    limit?: number
    /**
     * List pagination offset, default 0
     * Defaults to: undefined
     * @type number
     * @memberof BillingApilistAddons
     */
    offset?: number
}

export interface BillingApiListInvoicesRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApilistInvoices
     */
    orgId: string
    /**
     * Optional, filter by the entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApilistInvoices
     */
    entitlementId?: string
    /**
     * Optional, filter by the given buyer ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApilistInvoices
     */
    buyerId?: string
    /**
     * Optional, filter by invoice status as filter, if not provided, all status invoices are returned
     * Defaults to: undefined
     * @type &#39;DRAFT&#39; | &#39;FINALIZED&#39; | &#39;CANCELED&#39; | &#39;DELETED&#39; | &#39;&#39;
     * @memberof BillingApilistInvoices
     */
    status?: 'DRAFT' | 'FINALIZED' | 'CANCELED' | 'DELETED' | ''
    /**
     * List pagination size, default 1000, max value is 1000
     * Defaults to: undefined
     * @type number
     * @memberof BillingApilistInvoices
     */
    limit?: number
    /**
     * List pagination offset, default 0
     * Defaults to: undefined
     * @type number
     * @memberof BillingApilistInvoices
     */
    offset?: number
}

export interface BillingApiListPaymentTransactionsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApilistPaymentTransactions
     */
    orgId: string
    /**
     * Optional, filter by the given buyer ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApilistPaymentTransactions
     */
    buyerId?: string
    /**
     * Optional, filter by the given entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApilistPaymentTransactions
     */
    entitlementId?: string
    /**
     * Optional, filter by the given invoice ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApilistPaymentTransactions
     */
    invoiceId?: string
    /**
     * Optional, filter by status
     * Defaults to: undefined
     * @type &#39;PENDING&#39; | &#39;PROCESSING&#39; | &#39;SUCCESS&#39; | &#39;FAILED&#39;
     * @memberof BillingApilistPaymentTransactions
     */
    status?: 'PENDING' | 'PROCESSING' | 'SUCCESS' | 'FAILED'
    /**
     * Optional, filter by transaction type
     * Defaults to: undefined
     * @type &#39;CHARGE&#39; | &#39;REFUND&#39;
     * @memberof BillingApilistPaymentTransactions
     */
    type?: 'CHARGE' | 'REFUND'
    /**
     * List pagination size, default 1000, max value is 1000
     * Defaults to: undefined
     * @type number
     * @memberof BillingApilistPaymentTransactions
     */
    limit?: number
    /**
     * List pagination offset, default 0
     * Defaults to: undefined
     * @type number
     * @memberof BillingApilistPaymentTransactions
     */
    offset?: number
}

export interface BillingApiListRefundOfPaymentTransactionRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApilistRefundOfPaymentTransaction
     */
    orgId: string
    /**
     * Buyer ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApilistRefundOfPaymentTransaction
     */
    buyerId: string
    /**
     * Payment transaction ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApilistRefundOfPaymentTransaction
     */
    paymentTransactionId: string
}

export interface BillingApiPayInvoiceV2Request {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApipayInvoiceV2
     */
    orgId: string
    /**
     * Invoice ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApipayInvoiceV2
     */
    invoiceId: string
}

export interface BillingApiPreviewInvoiceEmailRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApipreviewInvoiceEmail
     */
    orgId: string
    /**
     * Invoice ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApipreviewInvoiceEmail
     */
    invoiceId: string
}

export interface BillingApiUpdateAddonRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApiupdateAddon
     */
    orgId: string
    /**
     * Addon ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApiupdateAddon
     */
    addonId: string
    /**
     * CreateAndUpdateAddonParams
     * @type CreateAndUpdateAddonParams
     * @memberof BillingApiupdateAddon
     */
    data: CreateAndUpdateAddonParams
}

export interface BillingApiUpdateInvoiceInfoV2Request {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApiupdateInvoiceInfoV2
     */
    orgId: string
    /**
     * Invoice ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApiupdateInvoiceInfoV2
     */
    invoiceId: string
    /**
     * Update Invoice Info Request Params
     * @type UpdateInvoiceInfoRequest
     * @memberof BillingApiupdateInvoiceInfoV2
     */
    data: UpdateInvoiceInfoRequest
}

export interface BillingApiVoidInvoiceV2Request {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApivoidInvoiceV2
     */
    orgId: string
    /**
     * Invoice ID
     * Defaults to: undefined
     * @type string
     * @memberof BillingApivoidInvoiceV2
     */
    invoiceId: string
}

export class ObjectBillingApi {
    private api: ObservableBillingApi

    public constructor(configuration: Configuration, requestFactory?: BillingApiRequestFactory, responseProcessor?: BillingApiResponseProcessor) {
        this.api = new ObservableBillingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an addon template
     * create addon
     * @param param the request object
     */
    public createAddonWithHttpInfo(param: BillingApiCreateAddonRequest, options?: Configuration): Promise<HttpInfo<BillingAddon>> {
        return this.api.createAddonWithHttpInfo(param.orgId, param.data,  options).toPromise();
    }

    /**
     * Create an addon template
     * create addon
     * @param param the request object
     */
    public createAddon(param: BillingApiCreateAddonRequest, options?: Configuration): Promise<BillingAddon> {
        return this.api.createAddon(param.orgId, param.data,  options).toPromise();
    }

    /**
     * create refund on the payment transaction, support partial refunds multiple times.
     * create refund.
     * @param param the request object
     */
    public createRefundWithHttpInfo(param: BillingApiCreateRefundRequest, options?: Configuration): Promise<HttpInfo<BillingPaymentTransaction>> {
        return this.api.createRefundWithHttpInfo(param.orgId, param.buyerId, param.paymentTransactionId, param.amount,  options).toPromise();
    }

    /**
     * create refund on the payment transaction, support partial refunds multiple times.
     * create refund.
     * @param param the request object
     */
    public createRefund(param: BillingApiCreateRefundRequest, options?: Configuration): Promise<BillingPaymentTransaction> {
        return this.api.createRefund(param.orgId, param.buyerId, param.paymentTransactionId, param.amount,  options).toPromise();
    }

    /**
     * Soft delete an addon template
     * delete addon
     * @param param the request object
     */
    public deleteAddonWithHttpInfo(param: BillingApiDeleteAddonRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.deleteAddonWithHttpInfo(param.orgId, param.addonId,  options).toPromise();
    }

    /**
     * Soft delete an addon template
     * delete addon
     * @param param the request object
     */
    public deleteAddon(param: BillingApiDeleteAddonRequest, options?: Configuration): Promise<string> {
        return this.api.deleteAddon(param.orgId, param.addonId,  options).toPromise();
    }

    /**
     * Get an addon template
     * get addon
     * @param param the request object
     */
    public getAddonWithHttpInfo(param: BillingApiGetAddonRequest, options?: Configuration): Promise<HttpInfo<BillingAddon>> {
        return this.api.getAddonWithHttpInfo(param.orgId, param.addonId,  options).toPromise();
    }

    /**
     * Get an addon template
     * get addon
     * @param param the request object
     */
    public getAddon(param: BillingApiGetAddonRequest, options?: Configuration): Promise<BillingAddon> {
        return this.api.getAddon(param.orgId, param.addonId,  options).toPromise();
    }

    /**
     * Get the invoice by ID
     * get invoice
     * @param param the request object
     */
    public getInvoiceV2WithHttpInfo(param: BillingApiGetInvoiceV2Request, options?: Configuration): Promise<HttpInfo<BillingInvoice>> {
        return this.api.getInvoiceV2WithHttpInfo(param.orgId, param.invoiceId,  options).toPromise();
    }

    /**
     * Get the invoice by ID
     * get invoice
     * @param param the request object
     */
    public getInvoiceV2(param: BillingApiGetInvoiceV2Request, options?: Configuration): Promise<BillingInvoice> {
        return this.api.getInvoiceV2(param.orgId, param.invoiceId,  options).toPromise();
    }

    /**
     * Issue the invoice immediately. It can be used for manual issue or reissue invoice.
     * issue invoice
     * @param param the request object
     */
    public issueInvoiceV2WithHttpInfo(param: BillingApiIssueInvoiceV2Request, options?: Configuration): Promise<HttpInfo<BillingInvoice>> {
        return this.api.issueInvoiceV2WithHttpInfo(param.orgId, param.invoiceId, param.contactIds,  options).toPromise();
    }

    /**
     * Issue the invoice immediately. It can be used for manual issue or reissue invoice.
     * issue invoice
     * @param param the request object
     */
    public issueInvoiceV2(param: BillingApiIssueInvoiceV2Request, options?: Configuration): Promise<BillingInvoice> {
        return this.api.issueInvoiceV2(param.orgId, param.invoiceId, param.contactIds,  options).toPromise();
    }

    /**
     * List all addon templates
     * list addons
     * @param param the request object
     */
    public listAddonsWithHttpInfo(param: BillingApiListAddonsRequest, options?: Configuration): Promise<HttpInfo<Array<BillingAddon>>> {
        return this.api.listAddonsWithHttpInfo(param.orgId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List all addon templates
     * list addons
     * @param param the request object
     */
    public listAddons(param: BillingApiListAddonsRequest, options?: Configuration): Promise<Array<BillingAddon>> {
        return this.api.listAddons(param.orgId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List invoices with pagination and filter by status (optional)
     * list invoices
     * @param param the request object
     */
    public listInvoicesWithHttpInfo(param: BillingApiListInvoicesRequest, options?: Configuration): Promise<HttpInfo<Array<BillingInvoice>>> {
        return this.api.listInvoicesWithHttpInfo(param.orgId, param.entitlementId, param.buyerId, param.status, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List invoices with pagination and filter by status (optional)
     * list invoices
     * @param param the request object
     */
    public listInvoices(param: BillingApiListInvoicesRequest, options?: Configuration): Promise<Array<BillingInvoice>> {
        return this.api.listInvoices(param.orgId, param.entitlementId, param.buyerId, param.status, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List payment transactions with pagination and filters
     * list payment transactions
     * @param param the request object
     */
    public listPaymentTransactionsWithHttpInfo(param: BillingApiListPaymentTransactionsRequest, options?: Configuration): Promise<HttpInfo<Array<BillingPaymentTransaction>>> {
        return this.api.listPaymentTransactionsWithHttpInfo(param.orgId, param.buyerId, param.entitlementId, param.invoiceId, param.status, param.type, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List payment transactions with pagination and filters
     * list payment transactions
     * @param param the request object
     */
    public listPaymentTransactions(param: BillingApiListPaymentTransactionsRequest, options?: Configuration): Promise<Array<BillingPaymentTransaction>> {
        return this.api.listPaymentTransactions(param.orgId, param.buyerId, param.entitlementId, param.invoiceId, param.status, param.type, param.limit, param.offset,  options).toPromise();
    }

    /**
     * list refunds of the payment transactions.
     * list refunds.
     * @param param the request object
     */
    public listRefundOfPaymentTransactionWithHttpInfo(param: BillingApiListRefundOfPaymentTransactionRequest, options?: Configuration): Promise<HttpInfo<Array<BillingPaymentTransaction>>> {
        return this.api.listRefundOfPaymentTransactionWithHttpInfo(param.orgId, param.buyerId, param.paymentTransactionId,  options).toPromise();
    }

    /**
     * list refunds of the payment transactions.
     * list refunds.
     * @param param the request object
     */
    public listRefundOfPaymentTransaction(param: BillingApiListRefundOfPaymentTransactionRequest, options?: Configuration): Promise<Array<BillingPaymentTransaction>> {
        return this.api.listRefundOfPaymentTransaction(param.orgId, param.buyerId, param.paymentTransactionId,  options).toPromise();
    }

    /**
     * Initiate the payment for the invoice immediately. It can be used for manual payment or retry payment.
     * pay invoice
     * @param param the request object
     */
    public payInvoiceV2WithHttpInfo(param: BillingApiPayInvoiceV2Request, options?: Configuration): Promise<HttpInfo<BillingInvoice>> {
        return this.api.payInvoiceV2WithHttpInfo(param.orgId, param.invoiceId,  options).toPromise();
    }

    /**
     * Initiate the payment for the invoice immediately. It can be used for manual payment or retry payment.
     * pay invoice
     * @param param the request object
     */
    public payInvoiceV2(param: BillingApiPayInvoiceV2Request, options?: Configuration): Promise<BillingInvoice> {
        return this.api.payInvoiceV2(param.orgId, param.invoiceId,  options).toPromise();
    }

    /**
     * Returns the preview HTML content of the invoice issued email.
     * preview invoice email
     * @param param the request object
     */
    public previewInvoiceEmailWithHttpInfo(param: BillingApiPreviewInvoiceEmailRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.previewInvoiceEmailWithHttpInfo(param.orgId, param.invoiceId,  options).toPromise();
    }

    /**
     * Returns the preview HTML content of the invoice issued email.
     * preview invoice email
     * @param param the request object
     */
    public previewInvoiceEmail(param: BillingApiPreviewInvoiceEmailRequest, options?: Configuration): Promise<string> {
        return this.api.previewInvoiceEmail(param.orgId, param.invoiceId,  options).toPromise();
    }

    /**
     * Update an addon template
     * update addon
     * @param param the request object
     */
    public updateAddonWithHttpInfo(param: BillingApiUpdateAddonRequest, options?: Configuration): Promise<HttpInfo<BillingAddon>> {
        return this.api.updateAddonWithHttpInfo(param.orgId, param.addonId, param.data,  options).toPromise();
    }

    /**
     * Update an addon template
     * update addon
     * @param param the request object
     */
    public updateAddon(param: BillingApiUpdateAddonRequest, options?: Configuration): Promise<BillingAddon> {
        return this.api.updateAddon(param.orgId, param.addonId, param.data,  options).toPromise();
    }

    /**
     * Update a draft invoice. Only DueDate, OverallDiscount, and Memo can be updated.
     * update invoice info
     * @param param the request object
     */
    public updateInvoiceInfoV2WithHttpInfo(param: BillingApiUpdateInvoiceInfoV2Request, options?: Configuration): Promise<HttpInfo<BillingInvoiceInfo>> {
        return this.api.updateInvoiceInfoV2WithHttpInfo(param.orgId, param.invoiceId, param.data,  options).toPromise();
    }

    /**
     * Update a draft invoice. Only DueDate, OverallDiscount, and Memo can be updated.
     * update invoice info
     * @param param the request object
     */
    public updateInvoiceInfoV2(param: BillingApiUpdateInvoiceInfoV2Request, options?: Configuration): Promise<BillingInvoiceInfo> {
        return this.api.updateInvoiceInfoV2(param.orgId, param.invoiceId, param.data,  options).toPromise();
    }

    /**
     * Void the invoice. It can be used for manual void or cancel the invoice.
     * void invoice
     * @param param the request object
     */
    public voidInvoiceV2WithHttpInfo(param: BillingApiVoidInvoiceV2Request, options?: Configuration): Promise<HttpInfo<BillingInvoice>> {
        return this.api.voidInvoiceV2WithHttpInfo(param.orgId, param.invoiceId,  options).toPromise();
    }

    /**
     * Void the invoice. It can be used for manual void or cancel the invoice.
     * void invoice
     * @param param the request object
     */
    public voidInvoiceV2(param: BillingApiVoidInvoiceV2Request, options?: Configuration): Promise<BillingInvoice> {
        return this.api.voidInvoiceV2(param.orgId, param.invoiceId,  options).toPromise();
    }

}

import { ObservableBuyerApi } from "./ObservableAPI";
import { BuyerApiRequestFactory, BuyerApiResponseProcessor} from "../apis/BuyerApi";

export interface BuyerApiCloseCreditWalletRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApicloseCreditWallet
     */
    orgId: string
    /**
     * Buyer ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApicloseCreditWallet
     */
    buyerId: string
    /**
     * Wallet ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApicloseCreditWallet
     */
    walletId: string
}

export interface BuyerApiCreateBuyerRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApicreateBuyer
     */
    orgId: string
    /**
     * CreateBuyerParams
     * @type CreateBuyerParams
     * @memberof BuyerApicreateBuyer
     */
    data: CreateBuyerParams
}

export interface BuyerApiCreateCreditWalletRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApicreateCreditWallet
     */
    orgId: string
    /**
     * Buyer ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApicreateCreditWallet
     */
    buyerId: string
}

export interface BuyerApiDeleteBuyerWalletRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApideleteBuyerWallet
     */
    orgId: string
    /**
     * Buyer ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApideleteBuyerWallet
     */
    buyerId: string
    /**
     * Wallet ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApideleteBuyerWallet
     */
    walletId: string
}

export interface BuyerApiGetBuyerRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApigetBuyer
     */
    orgId: string
    /**
     * Buyer ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApigetBuyer
     */
    buyerId: string
}

export interface BuyerApiListBuyerWalletsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApilistBuyerWallets
     */
    orgId: string
    /**
     * Buyer ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApilistBuyerWallets
     */
    buyerId: string
}

export interface BuyerApiListBuyersRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApilistBuyers
     */
    orgId: string
    /**
     * filter by partner
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApilistBuyers
     */
    partner?: string
    /**
     * filter by contactId
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApilistBuyers
     */
    contactId?: string
    /**
     * filter by awsAccountId
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApilistBuyers
     */
    awsAccountId?: string
    /**
     * List pagination size, default 1000, max value is 1000
     * Defaults to: undefined
     * @type number
     * @memberof BuyerApilistBuyers
     */
    limit?: number
    /**
     * List pagination offset, default 0
     * Defaults to: undefined
     * @type number
     * @memberof BuyerApilistBuyers
     */
    offset?: number
}

export interface BuyerApiSetBuyerDefaultWalletRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApisetBuyerDefaultWallet
     */
    orgId: string
    /**
     * Buyer ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApisetBuyerDefaultWallet
     */
    buyerId: string
    /**
     * Wallet ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApisetBuyerDefaultWallet
     */
    walletId: string
}

export interface BuyerApiUpdateBuyerRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApiupdateBuyer
     */
    orgId: string
    /**
     * Buyer ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApiupdateBuyer
     */
    buyerId: string
    /**
     * UpdateBuyerParams
     * @type UpdateBuyerParams
     * @memberof BuyerApiupdateBuyer
     */
    data: UpdateBuyerParams
}

export interface BuyerApiUpdateCreditWalletRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApiupdateCreditWallet
     */
    orgId: string
    /**
     * Buyer ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApiupdateCreditWallet
     */
    buyerId: string
    /**
     * Wallet ID
     * Defaults to: undefined
     * @type string
     * @memberof BuyerApiupdateCreditWallet
     */
    walletId: string
}

export class ObjectBuyerApi {
    private api: ObservableBuyerApi

    public constructor(configuration: Configuration, requestFactory?: BuyerApiRequestFactory, responseProcessor?: BuyerApiResponseProcessor) {
        this.api = new ObservableBuyerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Close the given credit wallet, if it\'s a payment method, sync to payment provider too. Once closed, it can\'t be used for payment.
     * close credit wallet
     * @param param the request object
     */
    public closeCreditWalletWithHttpInfo(param: BuyerApiCloseCreditWalletRequest, options?: Configuration): Promise<HttpInfo<BillingWallet>> {
        return this.api.closeCreditWalletWithHttpInfo(param.orgId, param.buyerId, param.walletId,  options).toPromise();
    }

    /**
     * Close the given credit wallet, if it\'s a payment method, sync to payment provider too. Once closed, it can\'t be used for payment.
     * close credit wallet
     * @param param the request object
     */
    public closeCreditWallet(param: BuyerApiCloseCreditWalletRequest, options?: Configuration): Promise<BillingWallet> {
        return this.api.closeCreditWallet(param.orgId, param.buyerId, param.walletId,  options).toPromise();
    }

    /**
     * create a new buyer for Stripe or Adyen under the given organization.
     * create buyer
     * @param param the request object
     */
    public createBuyerWithHttpInfo(param: BuyerApiCreateBuyerRequest, options?: Configuration): Promise<HttpInfo<IdentityBuyer>> {
        return this.api.createBuyerWithHttpInfo(param.orgId, param.data,  options).toPromise();
    }

    /**
     * create a new buyer for Stripe or Adyen under the given organization.
     * create buyer
     * @param param the request object
     */
    public createBuyer(param: BuyerApiCreateBuyerRequest, options?: Configuration): Promise<IdentityBuyer> {
        return this.api.createBuyer(param.orgId, param.data,  options).toPromise();
    }

    /**
     * create a new credit wallet for the buyer.
     * create credit wallet
     * @param param the request object
     */
    public createCreditWalletWithHttpInfo(param: BuyerApiCreateCreditWalletRequest, options?: Configuration): Promise<HttpInfo<BillingWallet>> {
        return this.api.createCreditWalletWithHttpInfo(param.orgId, param.buyerId,  options).toPromise();
    }

    /**
     * create a new credit wallet for the buyer.
     * create credit wallet
     * @param param the request object
     */
    public createCreditWallet(param: BuyerApiCreateCreditWalletRequest, options?: Configuration): Promise<BillingWallet> {
        return this.api.createCreditWallet(param.orgId, param.buyerId,  options).toPromise();
    }

    /**
     * delete a wallet of the buyer, if it\'s a payment method, sync to payment provider too.
     * delete buyer wallet
     * @param param the request object
     */
    public deleteBuyerWalletWithHttpInfo(param: BuyerApiDeleteBuyerWalletRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.deleteBuyerWalletWithHttpInfo(param.orgId, param.buyerId, param.walletId,  options).toPromise();
    }

    /**
     * delete a wallet of the buyer, if it\'s a payment method, sync to payment provider too.
     * delete buyer wallet
     * @param param the request object
     */
    public deleteBuyerWallet(param: BuyerApiDeleteBuyerWalletRequest, options?: Configuration): Promise<string> {
        return this.api.deleteBuyerWallet(param.orgId, param.buyerId, param.walletId,  options).toPromise();
    }

    /**
     * get buyer by the given organization and buyer id.
     * get buyer
     * @param param the request object
     */
    public getBuyerWithHttpInfo(param: BuyerApiGetBuyerRequest, options?: Configuration): Promise<HttpInfo<IdentityBuyer>> {
        return this.api.getBuyerWithHttpInfo(param.orgId, param.buyerId,  options).toPromise();
    }

    /**
     * get buyer by the given organization and buyer id.
     * get buyer
     * @param param the request object
     */
    public getBuyer(param: BuyerApiGetBuyerRequest, options?: Configuration): Promise<IdentityBuyer> {
        return this.api.getBuyer(param.orgId, param.buyerId,  options).toPromise();
    }

    /**
     * list all wallets of a buyer.
     * list buyer\'s wallets
     * @param param the request object
     */
    public listBuyerWalletsWithHttpInfo(param: BuyerApiListBuyerWalletsRequest, options?: Configuration): Promise<HttpInfo<Array<BillingWallet>>> {
        return this.api.listBuyerWalletsWithHttpInfo(param.orgId, param.buyerId,  options).toPromise();
    }

    /**
     * list all wallets of a buyer.
     * list buyer\'s wallets
     * @param param the request object
     */
    public listBuyerWallets(param: BuyerApiListBuyerWalletsRequest, options?: Configuration): Promise<Array<BillingWallet>> {
        return this.api.listBuyerWallets(param.orgId, param.buyerId,  options).toPromise();
    }

    /**
     * list buyers by the given organization with pagination and optional filters.
     * list buyers
     * @param param the request object
     */
    public listBuyersWithHttpInfo(param: BuyerApiListBuyersRequest, options?: Configuration): Promise<HttpInfo<Array<IdentityBuyer>>> {
        return this.api.listBuyersWithHttpInfo(param.orgId, param.partner, param.contactId, param.awsAccountId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * list buyers by the given organization with pagination and optional filters.
     * list buyers
     * @param param the request object
     */
    public listBuyers(param: BuyerApiListBuyersRequest, options?: Configuration): Promise<Array<IdentityBuyer>> {
        return this.api.listBuyers(param.orgId, param.partner, param.contactId, param.awsAccountId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * set a payment method wallet as buyer\'s default wallet.
     * set buyer default wallet
     * @param param the request object
     */
    public setBuyerDefaultWalletWithHttpInfo(param: BuyerApiSetBuyerDefaultWalletRequest, options?: Configuration): Promise<HttpInfo<IdentityBuyer>> {
        return this.api.setBuyerDefaultWalletWithHttpInfo(param.orgId, param.buyerId, param.walletId,  options).toPromise();
    }

    /**
     * set a payment method wallet as buyer\'s default wallet.
     * set buyer default wallet
     * @param param the request object
     */
    public setBuyerDefaultWallet(param: BuyerApiSetBuyerDefaultWalletRequest, options?: Configuration): Promise<IdentityBuyer> {
        return this.api.setBuyerDefaultWallet(param.orgId, param.buyerId, param.walletId,  options).toPromise();
    }

    /**
     * update buyer by the given organization and buyer id.
     * update buyer
     * @param param the request object
     */
    public updateBuyerWithHttpInfo(param: BuyerApiUpdateBuyerRequest, options?: Configuration): Promise<HttpInfo<IdentityBuyer>> {
        return this.api.updateBuyerWithHttpInfo(param.orgId, param.buyerId, param.data,  options).toPromise();
    }

    /**
     * update buyer by the given organization and buyer id.
     * update buyer
     * @param param the request object
     */
    public updateBuyer(param: BuyerApiUpdateBuyerRequest, options?: Configuration): Promise<IdentityBuyer> {
        return this.api.updateBuyer(param.orgId, param.buyerId, param.data,  options).toPromise();
    }

    /**
     * update startTime or expireTime of the wallet.
     * update credit wallet
     * @param param the request object
     */
    public updateCreditWalletWithHttpInfo(param: BuyerApiUpdateCreditWalletRequest, options?: Configuration): Promise<HttpInfo<BillingWallet>> {
        return this.api.updateCreditWalletWithHttpInfo(param.orgId, param.buyerId, param.walletId,  options).toPromise();
    }

    /**
     * update startTime or expireTime of the wallet.
     * update credit wallet
     * @param param the request object
     */
    public updateCreditWallet(param: BuyerApiUpdateCreditWalletRequest, options?: Configuration): Promise<BillingWallet> {
        return this.api.updateCreditWallet(param.orgId, param.buyerId, param.walletId,  options).toPromise();
    }

}

import { ObservableContactApi } from "./ObservableAPI";
import { ContactApiRequestFactory, ContactApiResponseProcessor} from "../apis/ContactApi";

export interface ContactApiAddContactToBuyerRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ContactApiaddContactToBuyer
     */
    orgId: string
    /**
     * Buyer ID
     * Defaults to: undefined
     * @type string
     * @memberof ContactApiaddContactToBuyer
     */
    buyerId: string
    /**
     * Contact ID
     * Defaults to: undefined
     * @type string
     * @memberof ContactApiaddContactToBuyer
     */
    contactId: string
}

export interface ContactApiAddContactToOfferRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ContactApiaddContactToOffer
     */
    orgId: string
    /**
     * Contact ID
     * Defaults to: undefined
     * @type string
     * @memberof ContactApiaddContactToOffer
     */
    contactId: string
    /**
     * Offer ID
     * Defaults to: undefined
     * @type string
     * @memberof ContactApiaddContactToOffer
     */
    offerId: string
}

export interface ContactApiBatchCreateContactsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ContactApibatchCreateContacts
     */
    orgId: string
    /**
     * RequestBody
     * @type Array&lt;IdentityContact&gt;
     * @memberof ContactApibatchCreateContacts
     */
    data: Array<IdentityContact>
}

export interface ContactApiCreateContactRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ContactApicreateContact
     */
    orgId: string
    /**
     * RequestBody
     * @type IdentityContact
     * @memberof ContactApicreateContact
     */
    data: IdentityContact
}

export interface ContactApiGetContactRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ContactApigetContact
     */
    orgId: string
    /**
     * Contact ID
     * Defaults to: undefined
     * @type string
     * @memberof ContactApigetContact
     */
    contactId: string
}

export interface ContactApiListContactsByOrganizationRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistContactsByOrganization
     */
    orgId: string
    /**
     * List pagination size, default 1000, max value is 1000
     * Defaults to: undefined
     * @type number
     * @memberof ContactApilistContactsByOrganization
     */
    limit?: number
    /**
     * List pagination offset, default 0
     * Defaults to: undefined
     * @type number
     * @memberof ContactApilistContactsByOrganization
     */
    offset?: number
}

export interface ContactApiRemoveContactFromBuyerRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ContactApiremoveContactFromBuyer
     */
    orgId: string
    /**
     * Buyer ID
     * Defaults to: undefined
     * @type string
     * @memberof ContactApiremoveContactFromBuyer
     */
    buyerId: string
    /**
     * Contact ID
     * Defaults to: undefined
     * @type string
     * @memberof ContactApiremoveContactFromBuyer
     */
    contactId: string
}

export interface ContactApiRemoveContactFromOfferRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ContactApiremoveContactFromOffer
     */
    orgId: string
    /**
     * Contact ID
     * Defaults to: undefined
     * @type string
     * @memberof ContactApiremoveContactFromOffer
     */
    contactId: string
    /**
     * Offer ID
     * Defaults to: undefined
     * @type string
     * @memberof ContactApiremoveContactFromOffer
     */
    offerId: string
}

export interface ContactApiUpdateContactRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ContactApiupdateContact
     */
    orgId: string
    /**
     * Contact ID
     * Defaults to: undefined
     * @type string
     * @memberof ContactApiupdateContact
     */
    contactId: string
    /**
     * Request Body
     * @type IdentityContact
     * @memberof ContactApiupdateContact
     */
    data: IdentityContact
}

export class ObjectContactApi {
    private api: ObservableContactApi

    public constructor(configuration: Configuration, requestFactory?: ContactApiRequestFactory, responseProcessor?: ContactApiResponseProcessor) {
        this.api = new ObservableContactApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * add contact to buyer by the given organization, buyer id and contact id.
     * add contact to buyer
     * @param param the request object
     */
    public addContactToBuyerWithHttpInfo(param: ContactApiAddContactToBuyerRequest, options?: Configuration): Promise<HttpInfo<IdentityBuyer>> {
        return this.api.addContactToBuyerWithHttpInfo(param.orgId, param.buyerId, param.contactId,  options).toPromise();
    }

    /**
     * add contact to buyer by the given organization, buyer id and contact id.
     * add contact to buyer
     * @param param the request object
     */
    public addContactToBuyer(param: ContactApiAddContactToBuyerRequest, options?: Configuration): Promise<IdentityBuyer> {
        return this.api.addContactToBuyer(param.orgId, param.buyerId, param.contactId,  options).toPromise();
    }

    /**
     * add contact to offer by the given organization, offer id and contact id.
     * add contact to offer
     * @param param the request object
     */
    public addContactToOfferWithHttpInfo(param: ContactApiAddContactToOfferRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.addContactToOfferWithHttpInfo(param.orgId, param.contactId, param.offerId,  options).toPromise();
    }

    /**
     * add contact to offer by the given organization, offer id and contact id.
     * add contact to offer
     * @param param the request object
     */
    public addContactToOffer(param: ContactApiAddContactToOfferRequest, options?: Configuration): Promise<string> {
        return this.api.addContactToOffer(param.orgId, param.contactId, param.offerId,  options).toPromise();
    }

    /**
     * Create multiple contacts under the given organization. If an email address already exists, return the existing contact.
     * batch create contacts
     * @param param the request object
     */
    public batchCreateContactsWithHttpInfo(param: ContactApiBatchCreateContactsRequest, options?: Configuration): Promise<HttpInfo<Array<Array<IdentityContact>>>> {
        return this.api.batchCreateContactsWithHttpInfo(param.orgId, param.data,  options).toPromise();
    }

    /**
     * Create multiple contacts under the given organization. If an email address already exists, return the existing contact.
     * batch create contacts
     * @param param the request object
     */
    public batchCreateContacts(param: ContactApiBatchCreateContactsRequest, options?: Configuration): Promise<Array<Array<IdentityContact>>> {
        return this.api.batchCreateContacts(param.orgId, param.data,  options).toPromise();
    }

    /**
     * Create a contact under the given organization. If the email address already exists, return the existing contact.
     * create contact
     * @param param the request object
     */
    public createContactWithHttpInfo(param: ContactApiCreateContactRequest, options?: Configuration): Promise<HttpInfo<IdentityContact>> {
        return this.api.createContactWithHttpInfo(param.orgId, param.data,  options).toPromise();
    }

    /**
     * Create a contact under the given organization. If the email address already exists, return the existing contact.
     * create contact
     * @param param the request object
     */
    public createContact(param: ContactApiCreateContactRequest, options?: Configuration): Promise<IdentityContact> {
        return this.api.createContact(param.orgId, param.data,  options).toPromise();
    }

    /**
     * Get the Contact by the given contact ID.
     * get contact
     * @param param the request object
     */
    public getContactWithHttpInfo(param: ContactApiGetContactRequest, options?: Configuration): Promise<HttpInfo<IdentityContact>> {
        return this.api.getContactWithHttpInfo(param.orgId, param.contactId,  options).toPromise();
    }

    /**
     * Get the Contact by the given contact ID.
     * get contact
     * @param param the request object
     */
    public getContact(param: ContactApiGetContactRequest, options?: Configuration): Promise<IdentityContact> {
        return this.api.getContact(param.orgId, param.contactId,  options).toPromise();
    }

    /**
     * List all contacts under the given organization.
     * list contacts by organization
     * @param param the request object
     */
    public listContactsByOrganizationWithHttpInfo(param: ContactApiListContactsByOrganizationRequest, options?: Configuration): Promise<HttpInfo<Array<IdentityContact>>> {
        return this.api.listContactsByOrganizationWithHttpInfo(param.orgId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List all contacts under the given organization.
     * list contacts by organization
     * @param param the request object
     */
    public listContactsByOrganization(param: ContactApiListContactsByOrganizationRequest, options?: Configuration): Promise<Array<IdentityContact>> {
        return this.api.listContactsByOrganization(param.orgId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * remove contact from buyer by the given organization, buyer id and contact id.
     * remove contact from buyer
     * @param param the request object
     */
    public removeContactFromBuyerWithHttpInfo(param: ContactApiRemoveContactFromBuyerRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.removeContactFromBuyerWithHttpInfo(param.orgId, param.buyerId, param.contactId,  options).toPromise();
    }

    /**
     * remove contact from buyer by the given organization, buyer id and contact id.
     * remove contact from buyer
     * @param param the request object
     */
    public removeContactFromBuyer(param: ContactApiRemoveContactFromBuyerRequest, options?: Configuration): Promise<string> {
        return this.api.removeContactFromBuyer(param.orgId, param.buyerId, param.contactId,  options).toPromise();
    }

    /**
     * remove contact from offer by given organization, offer id and contact id.
     * remove contact from offer
     * @param param the request object
     */
    public removeContactFromOfferWithHttpInfo(param: ContactApiRemoveContactFromOfferRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.removeContactFromOfferWithHttpInfo(param.orgId, param.contactId, param.offerId,  options).toPromise();
    }

    /**
     * remove contact from offer by given organization, offer id and contact id.
     * remove contact from offer
     * @param param the request object
     */
    public removeContactFromOffer(param: ContactApiRemoveContactFromOfferRequest, options?: Configuration): Promise<string> {
        return this.api.removeContactFromOffer(param.orgId, param.contactId, param.offerId,  options).toPromise();
    }

    /**
     * update contact by the given organization and buyer id. The given name and information should be complete. Please note that this function does not support partial updates.
     * update contact
     * @param param the request object
     */
    public updateContactWithHttpInfo(param: ContactApiUpdateContactRequest, options?: Configuration): Promise<HttpInfo<IdentityContact>> {
        return this.api.updateContactWithHttpInfo(param.orgId, param.contactId, param.data,  options).toPromise();
    }

    /**
     * update contact by the given organization and buyer id. The given name and information should be complete. Please note that this function does not support partial updates.
     * update contact
     * @param param the request object
     */
    public updateContact(param: ContactApiUpdateContactRequest, options?: Configuration): Promise<IdentityContact> {
        return this.api.updateContact(param.orgId, param.contactId, param.data,  options).toPromise();
    }

}

import { ObservableEntitlementApi } from "./ObservableAPI";
import { EntitlementApiRequestFactory, EntitlementApiResponseProcessor} from "../apis/EntitlementApi";

export interface EntitlementApiAddEntitlementCreditRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApiaddEntitlementCredit
     */
    orgId: string
    /**
     * Entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApiaddEntitlementCredit
     */
    entitlementId: string
    /**
     * RequestBody
     * @type AddEntitlementCreditParams
     * @memberof EntitlementApiaddEntitlementCredit
     */
    data: AddEntitlementCreditParams
}

export interface EntitlementApiApplyAddonToEntitlementRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApiapplyAddonToEntitlement
     */
    orgId: string
    /**
     * Entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApiapplyAddonToEntitlement
     */
    entitlementId: string
    /**
     * RequestBody
     * @type BillingAddonRecord
     * @memberof EntitlementApiapplyAddonToEntitlement
     */
    data: BillingAddonRecord
}

export interface EntitlementApiApproveEntitlementRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApiapproveEntitlement
     */
    orgId: string
    /**
     * Entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApiapproveEntitlement
     */
    entitlementId: string
}

export interface EntitlementApiCancelEntitlementRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApicancelEntitlement
     */
    orgId: string
    /**
     * Entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApicancelEntitlement
     */
    entitlementId: string
}

export interface EntitlementApiCreateEntitlementRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApicreateEntitlement
     */
    orgId: string
    /**
     * RequestBody
     * @type CreateEntitlementParams
     * @memberof EntitlementApicreateEntitlement
     */
    data: CreateEntitlementParams
}

export interface EntitlementApiDeleteEntitlementTermRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApideleteEntitlementTerm
     */
    orgId: string
    /**
     * Entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApideleteEntitlementTerm
     */
    entitlementId: string
    /**
     * Entitlement Term ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApideleteEntitlementTerm
     */
    entitlementTermId: string
}

export interface EntitlementApiDivideEntitlementCommitRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApidivideEntitlementCommit
     */
    orgId: string
    /**
     * Entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApidivideEntitlementCommit
     */
    entitlementId: string
    /**
     * RequestBody
     * @type DivideEntitlementCommitParams
     * @memberof EntitlementApidivideEntitlementCommit
     */
    data: DivideEntitlementCommitParams
}

export interface EntitlementApiGetEntitlementRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApigetEntitlement
     */
    orgId: string
    /**
     * Entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApigetEntitlement
     */
    entitlementId: string
}

export interface EntitlementApiGetEntitlementTermRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApigetEntitlementTerm
     */
    orgId: string
    /**
     * Entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApigetEntitlementTerm
     */
    entitlementId: string
    /**
     * Entitlement Term ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApigetEntitlementTerm
     */
    entitlementTermId: string
}

export interface EntitlementApiListEntitlementTermsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApilistEntitlementTerms
     */
    orgId: string
    /**
     * Entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApilistEntitlementTerms
     */
    entitlementId: string
}

export interface EntitlementApiListEntitlementsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApilistEntitlements
     */
    orgId: string
    /**
     * filter by partner
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApilistEntitlements
     */
    partner?: string
    /**
     * filter by productId
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApilistEntitlements
     */
    productId?: string
    /**
     * filter by offerId
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApilistEntitlements
     */
    offerId?: string
    /**
     * filter by buyerId
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApilistEntitlements
     */
    buyerId?: string
    /**
     * filter by externalId
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApilistEntitlements
     */
    externalId?: string
    /**
     * filter by buyerAccountId is currently supported only for AWS
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApilistEntitlements
     */
    buyerAccountId?: string
    /**
     * List pagination size, default 1000, max value is 1000
     * Defaults to: undefined
     * @type number
     * @memberof EntitlementApilistEntitlements
     */
    limit?: number
    /**
     * List pagination offset, default 0
     * Defaults to: undefined
     * @type number
     * @memberof EntitlementApilistEntitlements
     */
    offset?: number
}

export interface EntitlementApiScheduleEntitlementCancellationRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApischeduleEntitlementCancellation
     */
    orgId: string
    /**
     * Entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApischeduleEntitlementCancellation
     */
    entitlementId: string
    /**
     * RequestBody
     * @type CancellationSchedule
     * @memberof EntitlementApischeduleEntitlementCancellation
     */
    data: CancellationSchedule
}

export interface EntitlementApiUnscheduleEntitlementCancellationRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApiunscheduleEntitlementCancellation
     */
    orgId: string
    /**
     * Entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApiunscheduleEntitlementCancellation
     */
    entitlementId: string
}

export interface EntitlementApiUpdateEntitlementMetaInfoRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApiupdateEntitlementMetaInfo
     */
    orgId: string
    /**
     * Entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApiupdateEntitlementMetaInfo
     */
    entitlementId: string
    /**
     * Entitlement meta info to update
     * @type WorkloadMetaInfo
     * @memberof EntitlementApiupdateEntitlementMetaInfo
     */
    data: WorkloadMetaInfo
}

export interface EntitlementApiUpdateEntitlementNameRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApiupdateEntitlementName
     */
    orgId: string
    /**
     * Entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApiupdateEntitlementName
     */
    entitlementId: string
    /**
     * UpdateEntitlementNameParams
     * @type GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibUpdateEntitlementNameParams
     * @memberof EntitlementApiupdateEntitlementName
     */
    data: GithubComSugerioMarketplaceServicePkgLegacyRdsDbLibUpdateEntitlementNameParams
}

export interface EntitlementApiUpdateEntitlementSeatRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApiupdateEntitlementSeat
     */
    orgId: string
    /**
     * Entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementApiupdateEntitlementSeat
     */
    entitlementId: string
    /**
     * New seat number
     * Defaults to: undefined
     * @type number
     * @memberof EntitlementApiupdateEntitlementSeat
     */
    newSeat: number
}

export class ObjectEntitlementApi {
    private api: ObservableEntitlementApi

    public constructor(configuration: Configuration, requestFactory?: EntitlementApiRequestFactory, responseProcessor?: EntitlementApiResponseProcessor) {
        this.api = new ObservableEntitlementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add the credit amount to the given Entitlement. The credit amount is accumulated & saved in the current Entitlement Term of the gvien Entitlement.
     * add entitlement credit
     * @param param the request object
     */
    public addEntitlementCreditWithHttpInfo(param: EntitlementApiAddEntitlementCreditRequest, options?: Configuration): Promise<HttpInfo<AddEntitlementCreditResponse>> {
        return this.api.addEntitlementCreditWithHttpInfo(param.orgId, param.entitlementId, param.data,  options).toPromise();
    }

    /**
     * Add the credit amount to the given Entitlement. The credit amount is accumulated & saved in the current Entitlement Term of the gvien Entitlement.
     * add entitlement credit
     * @param param the request object
     */
    public addEntitlementCredit(param: EntitlementApiAddEntitlementCreditRequest, options?: Configuration): Promise<AddEntitlementCreditResponse> {
        return this.api.addEntitlementCredit(param.orgId, param.entitlementId, param.data,  options).toPromise();
    }

    /**
     * Apply one billing addon to the given Entitlement. The entitlement status must be ACTIVE.
     * apply addon to entitlement
     * @param param the request object
     */
    public applyAddonToEntitlementWithHttpInfo(param: EntitlementApiApplyAddonToEntitlementRequest, options?: Configuration): Promise<HttpInfo<WorkloadEntitlement>> {
        return this.api.applyAddonToEntitlementWithHttpInfo(param.orgId, param.entitlementId, param.data,  options).toPromise();
    }

    /**
     * Apply one billing addon to the given Entitlement. The entitlement status must be ACTIVE.
     * apply addon to entitlement
     * @param param the request object
     */
    public applyAddonToEntitlement(param: EntitlementApiApplyAddonToEntitlementRequest, options?: Configuration): Promise<WorkloadEntitlement> {
        return this.api.applyAddonToEntitlement(param.orgId, param.entitlementId, param.data,  options).toPromise();
    }

    /**
     * Approve the given Entitlement. Only applicable to the Azure or GCP Entitlements with the status of \"PENDING_START\". Return 200 if the entitlement is already active.
     * approve entitlement
     * @param param the request object
     */
    public approveEntitlementWithHttpInfo(param: EntitlementApiApproveEntitlementRequest, options?: Configuration): Promise<HttpInfo<WorkloadEntitlement>> {
        return this.api.approveEntitlementWithHttpInfo(param.orgId, param.entitlementId,  options).toPromise();
    }

    /**
     * Approve the given Entitlement. Only applicable to the Azure or GCP Entitlements with the status of \"PENDING_START\". Return 200 if the entitlement is already active.
     * approve entitlement
     * @param param the request object
     */
    public approveEntitlement(param: EntitlementApiApproveEntitlementRequest, options?: Configuration): Promise<WorkloadEntitlement> {
        return this.api.approveEntitlement(param.orgId, param.entitlementId,  options).toPromise();
    }

    /**
     * Cancel the active subscription in Azure Marketplace.
     * cancel entitlement
     * @param param the request object
     */
    public cancelEntitlementWithHttpInfo(param: EntitlementApiCancelEntitlementRequest, options?: Configuration): Promise<HttpInfo<WorkloadEntitlement>> {
        return this.api.cancelEntitlementWithHttpInfo(param.orgId, param.entitlementId,  options).toPromise();
    }

    /**
     * Cancel the active subscription in Azure Marketplace.
     * cancel entitlement
     * @param param the request object
     */
    public cancelEntitlement(param: EntitlementApiCancelEntitlementRequest, options?: Configuration): Promise<WorkloadEntitlement> {
        return this.api.cancelEntitlement(param.orgId, param.entitlementId,  options).toPromise();
    }

    /**
     * Create an new entitlement for the given buyer & offer. Only applicable to non cloud billing partners.
     * create entitlement
     * @param param the request object
     */
    public createEntitlementWithHttpInfo(param: EntitlementApiCreateEntitlementRequest, options?: Configuration): Promise<HttpInfo<WorkloadEntitlement>> {
        return this.api.createEntitlementWithHttpInfo(param.orgId, param.data,  options).toPromise();
    }

    /**
     * Create an new entitlement for the given buyer & offer. Only applicable to non cloud billing partners.
     * create entitlement
     * @param param the request object
     */
    public createEntitlement(param: EntitlementApiCreateEntitlementRequest, options?: Configuration): Promise<WorkloadEntitlement> {
        return this.api.createEntitlement(param.orgId, param.data,  options).toPromise();
    }

    /**
     * Delete the entitlement term by the given entitlement ID and entitlement term ID. Only allow to delete the divided entitlement term.
     * delete entitlement term
     * @param param the request object
     */
    public deleteEntitlementTermWithHttpInfo(param: EntitlementApiDeleteEntitlementTermRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.deleteEntitlementTermWithHttpInfo(param.orgId, param.entitlementId, param.entitlementTermId,  options).toPromise();
    }

    /**
     * Delete the entitlement term by the given entitlement ID and entitlement term ID. Only allow to delete the divided entitlement term.
     * delete entitlement term
     * @param param the request object
     */
    public deleteEntitlementTerm(param: EntitlementApiDeleteEntitlementTermRequest, options?: Configuration): Promise<string> {
        return this.api.deleteEntitlementTerm(param.orgId, param.entitlementId, param.entitlementTermId,  options).toPromise();
    }

    /**
     * Divide the commit equally from the given entitlement into sub entitlement terms based on the given time periods.
     * divide entitlement commit
     * @param param the request object
     */
    public divideEntitlementCommitWithHttpInfo(param: EntitlementApiDivideEntitlementCommitRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.divideEntitlementCommitWithHttpInfo(param.orgId, param.entitlementId, param.data,  options).toPromise();
    }

    /**
     * Divide the commit equally from the given entitlement into sub entitlement terms based on the given time periods.
     * divide entitlement commit
     * @param param the request object
     */
    public divideEntitlementCommit(param: EntitlementApiDivideEntitlementCommitRequest, options?: Configuration): Promise<string> {
        return this.api.divideEntitlementCommit(param.orgId, param.entitlementId, param.data,  options).toPromise();
    }

    /**
     * Get the entitlement by ID.
     * get entitlement
     * @param param the request object
     */
    public getEntitlementWithHttpInfo(param: EntitlementApiGetEntitlementRequest, options?: Configuration): Promise<HttpInfo<WorkloadEntitlement>> {
        return this.api.getEntitlementWithHttpInfo(param.orgId, param.entitlementId,  options).toPromise();
    }

    /**
     * Get the entitlement by ID.
     * get entitlement
     * @param param the request object
     */
    public getEntitlement(param: EntitlementApiGetEntitlementRequest, options?: Configuration): Promise<WorkloadEntitlement> {
        return this.api.getEntitlement(param.orgId, param.entitlementId,  options).toPromise();
    }

    /**
     * Get the entitlement term by ID.
     * get entitlement term
     * @param param the request object
     */
    public getEntitlementTermWithHttpInfo(param: EntitlementApiGetEntitlementTermRequest, options?: Configuration): Promise<HttpInfo<WorkloadEntitlementTerm>> {
        return this.api.getEntitlementTermWithHttpInfo(param.orgId, param.entitlementId, param.entitlementTermId,  options).toPromise();
    }

    /**
     * Get the entitlement term by ID.
     * get entitlement term
     * @param param the request object
     */
    public getEntitlementTerm(param: EntitlementApiGetEntitlementTermRequest, options?: Configuration): Promise<WorkloadEntitlementTerm> {
        return this.api.getEntitlementTerm(param.orgId, param.entitlementId, param.entitlementTermId,  options).toPromise();
    }

    /**
     * List all Entitlement Terms of the given Entitlement.
     * list entitlement terms
     * @param param the request object
     */
    public listEntitlementTermsWithHttpInfo(param: EntitlementApiListEntitlementTermsRequest, options?: Configuration): Promise<HttpInfo<Array<WorkloadEntitlementTerm>>> {
        return this.api.listEntitlementTermsWithHttpInfo(param.orgId, param.entitlementId,  options).toPromise();
    }

    /**
     * List all Entitlement Terms of the given Entitlement.
     * list entitlement terms
     * @param param the request object
     */
    public listEntitlementTerms(param: EntitlementApiListEntitlementTermsRequest, options?: Configuration): Promise<Array<WorkloadEntitlementTerm>> {
        return this.api.listEntitlementTerms(param.orgId, param.entitlementId,  options).toPromise();
    }

    /**
     * List entitlements under the given organization with pagination and optional filters.
     * list entitlements
     * @param param the request object
     */
    public listEntitlementsWithHttpInfo(param: EntitlementApiListEntitlementsRequest, options?: Configuration): Promise<HttpInfo<Array<WorkloadEntitlement>>> {
        return this.api.listEntitlementsWithHttpInfo(param.orgId, param.partner, param.productId, param.offerId, param.buyerId, param.externalId, param.buyerAccountId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List entitlements under the given organization with pagination and optional filters.
     * list entitlements
     * @param param the request object
     */
    public listEntitlements(param: EntitlementApiListEntitlementsRequest, options?: Configuration): Promise<Array<WorkloadEntitlement>> {
        return this.api.listEntitlements(param.orgId, param.partner, param.productId, param.offerId, param.buyerId, param.externalId, param.buyerAccountId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Schedule the cancellation of the given Entitlement.
     * schedule entitlement cancellation
     * @param param the request object
     */
    public scheduleEntitlementCancellationWithHttpInfo(param: EntitlementApiScheduleEntitlementCancellationRequest, options?: Configuration): Promise<HttpInfo<WorkloadEntitlement>> {
        return this.api.scheduleEntitlementCancellationWithHttpInfo(param.orgId, param.entitlementId, param.data,  options).toPromise();
    }

    /**
     * Schedule the cancellation of the given Entitlement.
     * schedule entitlement cancellation
     * @param param the request object
     */
    public scheduleEntitlementCancellation(param: EntitlementApiScheduleEntitlementCancellationRequest, options?: Configuration): Promise<WorkloadEntitlement> {
        return this.api.scheduleEntitlementCancellation(param.orgId, param.entitlementId, param.data,  options).toPromise();
    }

    /**
     * Unschedule the cancellation of the given Entitlement.
     * unschedule entitlement cancellation
     * @param param the request object
     */
    public unscheduleEntitlementCancellationWithHttpInfo(param: EntitlementApiUnscheduleEntitlementCancellationRequest, options?: Configuration): Promise<HttpInfo<WorkloadEntitlement>> {
        return this.api.unscheduleEntitlementCancellationWithHttpInfo(param.orgId, param.entitlementId,  options).toPromise();
    }

    /**
     * Unschedule the cancellation of the given Entitlement.
     * unschedule entitlement cancellation
     * @param param the request object
     */
    public unscheduleEntitlementCancellation(param: EntitlementApiUnscheduleEntitlementCancellationRequest, options?: Configuration): Promise<WorkloadEntitlement> {
        return this.api.unscheduleEntitlementCancellation(param.orgId, param.entitlementId,  options).toPromise();
    }

    /**
     * Update the meta info of the given entitlement.
     * update entitlement meta info
     * @param param the request object
     */
    public updateEntitlementMetaInfoWithHttpInfo(param: EntitlementApiUpdateEntitlementMetaInfoRequest, options?: Configuration): Promise<HttpInfo<WorkloadMetaInfo>> {
        return this.api.updateEntitlementMetaInfoWithHttpInfo(param.orgId, param.entitlementId, param.data,  options).toPromise();
    }

    /**
     * Update the meta info of the given entitlement.
     * update entitlement meta info
     * @param param the request object
     */
    public updateEntitlementMetaInfo(param: EntitlementApiUpdateEntitlementMetaInfoRequest, options?: Configuration): Promise<WorkloadMetaInfo> {
        return this.api.updateEntitlementMetaInfo(param.orgId, param.entitlementId, param.data,  options).toPromise();
    }

    /**
     * Update the name of the given Entitlement.
     * update entitlement name
     * @param param the request object
     */
    public updateEntitlementNameWithHttpInfo(param: EntitlementApiUpdateEntitlementNameRequest, options?: Configuration): Promise<HttpInfo<WorkloadEntitlement>> {
        return this.api.updateEntitlementNameWithHttpInfo(param.orgId, param.entitlementId, param.data,  options).toPromise();
    }

    /**
     * Update the name of the given Entitlement.
     * update entitlement name
     * @param param the request object
     */
    public updateEntitlementName(param: EntitlementApiUpdateEntitlementNameRequest, options?: Configuration): Promise<WorkloadEntitlement> {
        return this.api.updateEntitlementName(param.orgId, param.entitlementId, param.data,  options).toPromise();
    }

    /**
     * Update the seat number for the active AZURE subscription.
     * update seat for the active AZURE subscription
     * @param param the request object
     */
    public updateEntitlementSeatWithHttpInfo(param: EntitlementApiUpdateEntitlementSeatRequest, options?: Configuration): Promise<HttpInfo<WorkloadEntitlement>> {
        return this.api.updateEntitlementSeatWithHttpInfo(param.orgId, param.entitlementId, param.newSeat,  options).toPromise();
    }

    /**
     * Update the seat number for the active AZURE subscription.
     * update seat for the active AZURE subscription
     * @param param the request object
     */
    public updateEntitlementSeat(param: EntitlementApiUpdateEntitlementSeatRequest, options?: Configuration): Promise<WorkloadEntitlement> {
        return this.api.updateEntitlementSeat(param.orgId, param.entitlementId, param.newSeat,  options).toPromise();
    }

}

import { ObservableMeteringApi } from "./ObservableAPI";
import { MeteringApiRequestFactory, MeteringApiResponseProcessor} from "../apis/MeteringApi";

export interface MeteringApiBatchReportUsageRecordGroupsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApibatchReportUsageRecordGroups
     */
    orgId: string
    /**
     * Array of new usage record groups to report
     * @type Array&lt;NewUsageRecordGroup&gt;
     * @memberof MeteringApibatchReportUsageRecordGroups
     */
    usageRecordGroups: Array<NewUsageRecordGroup>
}

export interface MeteringApiBatchValidateUsageRecordGroupsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApibatchValidateUsageRecordGroups
     */
    orgId: string
    /**
     * Array of usage record groups to be validated
     * @type Array&lt;NewUsageRecordGroup&gt;
     * @memberof MeteringApibatchValidateUsageRecordGroups
     */
    data: Array<NewUsageRecordGroup>
}

export interface MeteringApiCreateBillableMetricRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApicreateBillableMetric
     */
    orgId: string
    /**
     * RequestBody
     * @type BillableMetric
     * @memberof MeteringApicreateBillableMetric
     */
    data: BillableMetric
}

export interface MeteringApiDeleteUsageRecordGroupRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApideleteUsageRecordGroup
     */
    orgId: string
    /**
     * UsageRecordGroup ID
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApideleteUsageRecordGroup
     */
    usageRecordGroupId: string
    /**
     * UsageRecordGroup\&#39;s creation date (UTC) in YYYY-MM-DD format
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApideleteUsageRecordGroup
     */
    creationDate?: string
}

export interface MeteringApiGetBillableMetricRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApigetBillableMetric
     */
    orgId: string
    /**
     * Billable Metric ID
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApigetBillableMetric
     */
    billableMetricId: string
}

export interface MeteringApiGetUsageMeteringConfigInfoRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApigetUsageMeteringConfigInfo
     */
    orgId: string
}

export interface MeteringApiListBillableMetricsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApilistBillableMetrics
     */
    orgId: string
    /**
     * Status of the billable metric
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApilistBillableMetrics
     */
    status?: string
}

export interface MeteringApiListUsageRecordGroupsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApilistUsageRecordGroups
     */
    orgId: string
    /**
     * Cloud Partner
     * Defaults to: undefined
     * @type &#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;
     * @memberof MeteringApilistUsageRecordGroups
     */
    partner?: 'AWS' | 'AZURE' | 'GCP'
    /**
     * filter by buyer ID, default no filter by buyerId if not provided
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApilistUsageRecordGroups
     */
    buyerId?: string
    /**
     * filter by entitlement ID, default no filter by entitlementId if not provided
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApilistUsageRecordGroups
     */
    entitlementId?: string
    /**
     * The status of the usage record group, default no filter by status if not provided
     * Defaults to: undefined
     * @type &#39;CREATED&#39; | &#39;DELETED&#39; | &#39;INVALID&#39; | &#39;REPORTED&#39; | &#39;REPORT_PENDING&#39; | &#39;REPORT_FAILED&#39;
     * @memberof MeteringApilistUsageRecordGroups
     */
    status?: 'CREATED' | 'DELETED' | 'INVALID' | 'REPORTED' | 'REPORT_PENDING' | 'REPORT_FAILED'
    /**
     * The source of the usage record group, default no filter by source if not provided
     * Defaults to: undefined
     * @type &#39;&#39; | &#39;API&#39; | &#39;INTERNAL&#39; | &#39;LAGO&#39; | &#39;METRONOME&#39; | &#39;ORB&#39; | &#39;STRIPE&#39;
     * @memberof MeteringApilistUsageRecordGroups
     */
    source?: '' | 'API' | 'INTERNAL' | 'LAGO' | 'METRONOME' | 'ORB' | 'STRIPE'
    /**
     * metaInfo filter
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApilistUsageRecordGroups
     */
    metaInfo?: string
    /**
     * start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApilistUsageRecordGroups
     */
    startDate?: string
    /**
     * end date (UTC) in YYYY-MM-DD format, default is today
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApilistUsageRecordGroups
     */
    endDate?: string
    /**
     * List pagination size, default 1000, max value is 1000
     * Defaults to: undefined
     * @type number
     * @memberof MeteringApilistUsageRecordGroups
     */
    limit?: number
    /**
     * List pagination offset, default 0
     * Defaults to: undefined
     * @type number
     * @memberof MeteringApilistUsageRecordGroups
     */
    offset?: number
}

export interface MeteringApiListUsageRecordReportsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApilistUsageRecordReports
     */
    orgId: string
    /**
     * Cloud Partner
     * Defaults to: undefined
     * @type &#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;
     * @memberof MeteringApilistUsageRecordReports
     */
    partner?: 'AWS' | 'AZURE' | 'GCP'
    /**
     * buyer ID
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApilistUsageRecordReports
     */
    buyerId?: string
    /**
     * entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApilistUsageRecordReports
     */
    entitlementId?: string
    /**
     * start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApilistUsageRecordReports
     */
    startDate?: string
    /**
     * end date (UTC) in YYYY-MM-DD format, default is today
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApilistUsageRecordReports
     */
    endDate?: string
    /**
     * List pagination size, default 1000, max value is 1000
     * Defaults to: undefined
     * @type number
     * @memberof MeteringApilistUsageRecordReports
     */
    limit?: number
    /**
     * List pagination offset, default 0
     * Defaults to: undefined
     * @type number
     * @memberof MeteringApilistUsageRecordReports
     */
    offset?: number
}

export interface MeteringApiReportUsageRecordGroupRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApireportUsageRecordGroup
     */
    orgId: string
    /**
     * Entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApireportUsageRecordGroup
     */
    entitlementId: string
    /**
     * RequestBody
     * @type CreateUsageRecordGroupParams
     * @memberof MeteringApireportUsageRecordGroup
     */
    data: CreateUsageRecordGroupParams
}

export interface MeteringApiRetryUsageRecordGroupRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApiretryUsageRecordGroup
     */
    orgId: string
    /**
     * UsageRecordGroup ID
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApiretryUsageRecordGroup
     */
    usageRecordGroupId: string
    /**
     * UsageRecordGroup\&#39;s creation date (UTC) in YYYY-MM-DD format
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApiretryUsageRecordGroup
     */
    creationDate?: string
}

export interface MeteringApiUpdateBillableMetricRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApiupdateBillableMetric
     */
    orgId: string
    /**
     * Billable Metric ID
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApiupdateBillableMetric
     */
    billableMetricId: string
    /**
     * RequestBody
     * @type UpdateBillableMetricParams
     * @memberof MeteringApiupdateBillableMetric
     */
    data: UpdateBillableMetricParams
}

export interface MeteringApiUpdateUsageMeteringConfigInfoRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof MeteringApiupdateUsageMeteringConfigInfo
     */
    orgId: string
    /**
     * The usage metering config info to be updated
     * @type UsageMeteringConfigInfo
     * @memberof MeteringApiupdateUsageMeteringConfigInfo
     */
    data: UsageMeteringConfigInfo
}

export class ObjectMeteringApi {
    private api: ObservableMeteringApi

    public constructor(configuration: Configuration, requestFactory?: MeteringApiRequestFactory, responseProcessor?: MeteringApiResponseProcessor) {
        this.api = new ObservableMeteringApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Batch report new usage record groups.
     * batch report usageRecordGroups
     * @param param the request object
     */
    public batchReportUsageRecordGroupsWithHttpInfo(param: MeteringApiBatchReportUsageRecordGroupsRequest, options?: Configuration): Promise<HttpInfo<Array<MeteringUsageRecordGroup>>> {
        return this.api.batchReportUsageRecordGroupsWithHttpInfo(param.orgId, param.usageRecordGroups,  options).toPromise();
    }

    /**
     * Batch report new usage record groups.
     * batch report usageRecordGroups
     * @param param the request object
     */
    public batchReportUsageRecordGroups(param: MeteringApiBatchReportUsageRecordGroupsRequest, options?: Configuration): Promise<Array<MeteringUsageRecordGroup>> {
        return this.api.batchReportUsageRecordGroups(param.orgId, param.usageRecordGroups,  options).toPromise();
    }

    /**
     * Provide a batch of usage record groups and validate each individual usage record group one by one.
     * batch validate usageRecordGroups
     * @param param the request object
     */
    public batchValidateUsageRecordGroupsWithHttpInfo(param: MeteringApiBatchValidateUsageRecordGroupsRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.batchValidateUsageRecordGroupsWithHttpInfo(param.orgId, param.data,  options).toPromise();
    }

    /**
     * Provide a batch of usage record groups and validate each individual usage record group one by one.
     * batch validate usageRecordGroups
     * @param param the request object
     */
    public batchValidateUsageRecordGroups(param: MeteringApiBatchValidateUsageRecordGroupsRequest, options?: Configuration): Promise<string> {
        return this.api.batchValidateUsageRecordGroups(param.orgId, param.data,  options).toPromise();
    }

    /**
     * Create a new billable metric for the given organization.
     * create billable metric
     * @param param the request object
     */
    public createBillableMetricWithHttpInfo(param: MeteringApiCreateBillableMetricRequest, options?: Configuration): Promise<HttpInfo<BillableMetric>> {
        return this.api.createBillableMetricWithHttpInfo(param.orgId, param.data,  options).toPromise();
    }

    /**
     * Create a new billable metric for the given organization.
     * create billable metric
     * @param param the request object
     */
    public createBillableMetric(param: MeteringApiCreateBillableMetricRequest, options?: Configuration): Promise<BillableMetric> {
        return this.api.createBillableMetric(param.orgId, param.data,  options).toPromise();
    }

    /**
     * delete the UsageRecordGroup for the given organization and usageRecordGroup ID. Only usageRecordGroup with status \"CREATED\" or \"INVALID\" can be deleted.
     * delete usageRecordGroup
     * @param param the request object
     */
    public deleteUsageRecordGroupWithHttpInfo(param: MeteringApiDeleteUsageRecordGroupRequest, options?: Configuration): Promise<HttpInfo<MeteringUsageRecordGroup>> {
        return this.api.deleteUsageRecordGroupWithHttpInfo(param.orgId, param.usageRecordGroupId, param.creationDate,  options).toPromise();
    }

    /**
     * delete the UsageRecordGroup for the given organization and usageRecordGroup ID. Only usageRecordGroup with status \"CREATED\" or \"INVALID\" can be deleted.
     * delete usageRecordGroup
     * @param param the request object
     */
    public deleteUsageRecordGroup(param: MeteringApiDeleteUsageRecordGroupRequest, options?: Configuration): Promise<MeteringUsageRecordGroup> {
        return this.api.deleteUsageRecordGroup(param.orgId, param.usageRecordGroupId, param.creationDate,  options).toPromise();
    }

    /**
     * Get the billable metric for the given organization and billable metric ID.
     * get billable metric
     * @param param the request object
     */
    public getBillableMetricWithHttpInfo(param: MeteringApiGetBillableMetricRequest, options?: Configuration): Promise<HttpInfo<BillableMetric>> {
        return this.api.getBillableMetricWithHttpInfo(param.orgId, param.billableMetricId,  options).toPromise();
    }

    /**
     * Get the billable metric for the given organization and billable metric ID.
     * get billable metric
     * @param param the request object
     */
    public getBillableMetric(param: MeteringApiGetBillableMetricRequest, options?: Configuration): Promise<BillableMetric> {
        return this.api.getBillableMetric(param.orgId, param.billableMetricId,  options).toPromise();
    }

    /**
     * Get the usage metering config info of the given organization.
     * get usage metering config info
     * @param param the request object
     */
    public getUsageMeteringConfigInfoWithHttpInfo(param: MeteringApiGetUsageMeteringConfigInfoRequest, options?: Configuration): Promise<HttpInfo<UsageMeteringConfigInfo>> {
        return this.api.getUsageMeteringConfigInfoWithHttpInfo(param.orgId,  options).toPromise();
    }

    /**
     * Get the usage metering config info of the given organization.
     * get usage metering config info
     * @param param the request object
     */
    public getUsageMeteringConfigInfo(param: MeteringApiGetUsageMeteringConfigInfoRequest, options?: Configuration): Promise<UsageMeteringConfigInfo> {
        return this.api.getUsageMeteringConfigInfo(param.orgId,  options).toPromise();
    }

    /**
     * list billable metrics for the given organization.
     * list billable metrics
     * @param param the request object
     */
    public listBillableMetricsWithHttpInfo(param: MeteringApiListBillableMetricsRequest, options?: Configuration): Promise<HttpInfo<Array<BillableMetric>>> {
        return this.api.listBillableMetricsWithHttpInfo(param.orgId, param.status,  options).toPromise();
    }

    /**
     * list billable metrics for the given organization.
     * list billable metrics
     * @param param the request object
     */
    public listBillableMetrics(param: MeteringApiListBillableMetricsRequest, options?: Configuration): Promise<Array<BillableMetric>> {
        return this.api.listBillableMetrics(param.orgId, param.status,  options).toPromise();
    }

    /**
     * List UsageRecordGroups by the given organization, partner, product, entitlement or buyer. Only provide one or none of the optional query parameters: partner, productId, entitlementId & buyerId .
     * list usageRecordGroups
     * @param param the request object
     */
    public listUsageRecordGroupsWithHttpInfo(param: MeteringApiListUsageRecordGroupsRequest, options?: Configuration): Promise<HttpInfo<ListUsageRecordGroupsResponse>> {
        return this.api.listUsageRecordGroupsWithHttpInfo(param.orgId, param.partner, param.buyerId, param.entitlementId, param.status, param.source, param.metaInfo, param.startDate, param.endDate, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List UsageRecordGroups by the given organization, partner, product, entitlement or buyer. Only provide one or none of the optional query parameters: partner, productId, entitlementId & buyerId .
     * list usageRecordGroups
     * @param param the request object
     */
    public listUsageRecordGroups(param: MeteringApiListUsageRecordGroupsRequest, options?: Configuration): Promise<ListUsageRecordGroupsResponse> {
        return this.api.listUsageRecordGroups(param.orgId, param.partner, param.buyerId, param.entitlementId, param.status, param.source, param.metaInfo, param.startDate, param.endDate, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List usageRecordReports under the given organization, partner, entitlement or buyer, within the given time range and pagination.
     * list usageRecordReports
     * @param param the request object
     */
    public listUsageRecordReportsWithHttpInfo(param: MeteringApiListUsageRecordReportsRequest, options?: Configuration): Promise<HttpInfo<ListUsageRecordReportsResponse>> {
        return this.api.listUsageRecordReportsWithHttpInfo(param.orgId, param.partner, param.buyerId, param.entitlementId, param.startDate, param.endDate, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List usageRecordReports under the given organization, partner, entitlement or buyer, within the given time range and pagination.
     * list usageRecordReports
     * @param param the request object
     */
    public listUsageRecordReports(param: MeteringApiListUsageRecordReportsRequest, options?: Configuration): Promise<ListUsageRecordReportsResponse> {
        return this.api.listUsageRecordReports(param.orgId, param.partner, param.buyerId, param.entitlementId, param.startDate, param.endDate, param.limit, param.offset,  options).toPromise();
    }

    /**
     * It is recommended to provide the ID in the request body CreateUsageRecordGroupParams, so the report can be deduplicated. All duplicate report will return error code 409.
     * report usageRecordGroup
     * @param param the request object
     */
    public reportUsageRecordGroupWithHttpInfo(param: MeteringApiReportUsageRecordGroupRequest, options?: Configuration): Promise<HttpInfo<MeteringUsageRecordGroup>> {
        return this.api.reportUsageRecordGroupWithHttpInfo(param.orgId, param.entitlementId, param.data,  options).toPromise();
    }

    /**
     * It is recommended to provide the ID in the request body CreateUsageRecordGroupParams, so the report can be deduplicated. All duplicate report will return error code 409.
     * report usageRecordGroup
     * @param param the request object
     */
    public reportUsageRecordGroup(param: MeteringApiReportUsageRecordGroupRequest, options?: Configuration): Promise<MeteringUsageRecordGroup> {
        return this.api.reportUsageRecordGroup(param.orgId, param.entitlementId, param.data,  options).toPromise();
    }

    /**
     * Retry the given UsageRecordGroup by setting from status \"REPORT_FAILED\" to \"CREATED\", and it will be ready for the next hourly report. Only usageRecordGroup with status \"REPORT_FAILED\" can be retried.
     * retry usageRecordGroup
     * @param param the request object
     */
    public retryUsageRecordGroupWithHttpInfo(param: MeteringApiRetryUsageRecordGroupRequest, options?: Configuration): Promise<HttpInfo<MeteringUsageRecordGroup>> {
        return this.api.retryUsageRecordGroupWithHttpInfo(param.orgId, param.usageRecordGroupId, param.creationDate,  options).toPromise();
    }

    /**
     * Retry the given UsageRecordGroup by setting from status \"REPORT_FAILED\" to \"CREATED\", and it will be ready for the next hourly report. Only usageRecordGroup with status \"REPORT_FAILED\" can be retried.
     * retry usageRecordGroup
     * @param param the request object
     */
    public retryUsageRecordGroup(param: MeteringApiRetryUsageRecordGroupRequest, options?: Configuration): Promise<MeteringUsageRecordGroup> {
        return this.api.retryUsageRecordGroup(param.orgId, param.usageRecordGroupId, param.creationDate,  options).toPromise();
    }

    /**
     * Update the name, description and status of the billable metric for the given organization.
     * update billable metric
     * @param param the request object
     */
    public updateBillableMetricWithHttpInfo(param: MeteringApiUpdateBillableMetricRequest, options?: Configuration): Promise<HttpInfo<BillableMetric>> {
        return this.api.updateBillableMetricWithHttpInfo(param.orgId, param.billableMetricId, param.data,  options).toPromise();
    }

    /**
     * Update the name, description and status of the billable metric for the given organization.
     * update billable metric
     * @param param the request object
     */
    public updateBillableMetric(param: MeteringApiUpdateBillableMetricRequest, options?: Configuration): Promise<BillableMetric> {
        return this.api.updateBillableMetric(param.orgId, param.billableMetricId, param.data,  options).toPromise();
    }

    /**
     * Update the usage metering config info of the given organization.
     * update usage metering config info
     * @param param the request object
     */
    public updateUsageMeteringConfigInfoWithHttpInfo(param: MeteringApiUpdateUsageMeteringConfigInfoRequest, options?: Configuration): Promise<HttpInfo<UsageMeteringConfigInfo>> {
        return this.api.updateUsageMeteringConfigInfoWithHttpInfo(param.orgId, param.data,  options).toPromise();
    }

    /**
     * Update the usage metering config info of the given organization.
     * update usage metering config info
     * @param param the request object
     */
    public updateUsageMeteringConfigInfo(param: MeteringApiUpdateUsageMeteringConfigInfoRequest, options?: Configuration): Promise<UsageMeteringConfigInfo> {
        return this.api.updateUsageMeteringConfigInfo(param.orgId, param.data,  options).toPromise();
    }

}

import { ObservableNotificationApi } from "./ObservableAPI";
import { NotificationApiRequestFactory, NotificationApiResponseProcessor} from "../apis/NotificationApi";

export interface NotificationApiGetNotificationMessageRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof NotificationApigetNotificationMessage
     */
    orgId: string
    /**
     * Notification Message ID
     * Defaults to: undefined
     * @type string
     * @memberof NotificationApigetNotificationMessage
     */
    notificationMessageId: string
}

export interface NotificationApiListNotificationEventsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof NotificationApilistNotificationEvents
     */
    orgId: string
    /**
     * start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * Defaults to: undefined
     * @type string
     * @memberof NotificationApilistNotificationEvents
     */
    startDate?: string
    /**
     * end date (UTC) in YYYY-MM-DD format, default is today
     * Defaults to: undefined
     * @type string
     * @memberof NotificationApilistNotificationEvents
     */
    endDate?: string
    /**
     * List pagination size, default 1000, max value is 1000
     * Defaults to: undefined
     * @type number
     * @memberof NotificationApilistNotificationEvents
     */
    limit?: number
    /**
     * List pagination offset, default 0
     * Defaults to: undefined
     * @type number
     * @memberof NotificationApilistNotificationEvents
     */
    offset?: number
    /**
     * Filter by priorities, empty means all priorities. Valid values are: LOW, MEDIUM, HIGH, CRITICAL. Multiple values are supported, separated by comma.
     * Defaults to: undefined
     * @type string
     * @memberof NotificationApilistNotificationEvents
     */
    priorities?: string
}

export interface NotificationApiListNotificationEventsByEntityRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof NotificationApilistNotificationEventsByEntity
     */
    orgId: string
    /**
     * Entity type, valid values are: PRODUCT, OFFER, ENTITLEMENT, INTEGRATION etc.
     * Defaults to: undefined
     * @type string
     * @memberof NotificationApilistNotificationEventsByEntity
     */
    entityType: string
    /**
     * Entity ID
     * Defaults to: undefined
     * @type string
     * @memberof NotificationApilistNotificationEventsByEntity
     */
    entityId: string
    /**
     * List pagination size, default 1000, max value is 1000
     * Defaults to: undefined
     * @type number
     * @memberof NotificationApilistNotificationEventsByEntity
     */
    limit?: number
    /**
     * List pagination offset, default 0
     * Defaults to: undefined
     * @type number
     * @memberof NotificationApilistNotificationEventsByEntity
     */
    offset?: number
}

export interface NotificationApiListNotificationMessagesRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof NotificationApilistNotificationMessages
     */
    orgId: string
    /**
     * List pagination size, default 1000, max value is 1000
     * Defaults to: undefined
     * @type number
     * @memberof NotificationApilistNotificationMessages
     */
    limit?: number
    /**
     * List pagination offset, default 0
     * Defaults to: undefined
     * @type number
     * @memberof NotificationApilistNotificationMessages
     */
    offset?: number
}

export class ObjectNotificationApi {
    private api: ObservableNotificationApi

    public constructor(configuration: Configuration, requestFactory?: NotificationApiRequestFactory, responseProcessor?: NotificationApiResponseProcessor) {
        this.api = new ObservableNotificationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the notification message of the organization & notification message ID.
     * get notification message
     * @param param the request object
     */
    public getNotificationMessageWithHttpInfo(param: NotificationApiGetNotificationMessageRequest, options?: Configuration): Promise<HttpInfo<NotificationMessage>> {
        return this.api.getNotificationMessageWithHttpInfo(param.orgId, param.notificationMessageId,  options).toPromise();
    }

    /**
     * Get the notification message of the organization & notification message ID.
     * get notification message
     * @param param the request object
     */
    public getNotificationMessage(param: NotificationApiGetNotificationMessageRequest, options?: Configuration): Promise<NotificationMessage> {
        return this.api.getNotificationMessage(param.orgId, param.notificationMessageId,  options).toPromise();
    }

    /**
     * List the notification events of the given organization with pagination and optional filters.
     * list notification events
     * @param param the request object
     */
    public listNotificationEventsWithHttpInfo(param: NotificationApiListNotificationEventsRequest, options?: Configuration): Promise<HttpInfo<ListNotificationEventsResponse>> {
        return this.api.listNotificationEventsWithHttpInfo(param.orgId, param.startDate, param.endDate, param.limit, param.offset, param.priorities,  options).toPromise();
    }

    /**
     * List the notification events of the given organization with pagination and optional filters.
     * list notification events
     * @param param the request object
     */
    public listNotificationEvents(param: NotificationApiListNotificationEventsRequest, options?: Configuration): Promise<ListNotificationEventsResponse> {
        return this.api.listNotificationEvents(param.orgId, param.startDate, param.endDate, param.limit, param.offset, param.priorities,  options).toPromise();
    }

    /**
     * List the notification events of the given organization and entity with pagination.
     * list notification events by entity
     * @param param the request object
     */
    public listNotificationEventsByEntityWithHttpInfo(param: NotificationApiListNotificationEventsByEntityRequest, options?: Configuration): Promise<HttpInfo<ListNotificationEventsResponse>> {
        return this.api.listNotificationEventsByEntityWithHttpInfo(param.orgId, param.entityType, param.entityId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List the notification events of the given organization and entity with pagination.
     * list notification events by entity
     * @param param the request object
     */
    public listNotificationEventsByEntity(param: NotificationApiListNotificationEventsByEntityRequest, options?: Configuration): Promise<ListNotificationEventsResponse> {
        return this.api.listNotificationEventsByEntity(param.orgId, param.entityType, param.entityId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List the notification messages of the given organization with pagination.
     * list notification messages
     * @param param the request object
     */
    public listNotificationMessagesWithHttpInfo(param: NotificationApiListNotificationMessagesRequest, options?: Configuration): Promise<HttpInfo<ListNotificationMessagesResponse>> {
        return this.api.listNotificationMessagesWithHttpInfo(param.orgId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List the notification messages of the given organization with pagination.
     * list notification messages
     * @param param the request object
     */
    public listNotificationMessages(param: NotificationApiListNotificationMessagesRequest, options?: Configuration): Promise<ListNotificationMessagesResponse> {
        return this.api.listNotificationMessages(param.orgId, param.limit, param.offset,  options).toPromise();
    }

}

import { ObservableOfferApi } from "./ObservableAPI";
import { OfferApiRequestFactory, OfferApiResponseProcessor} from "../apis/OfferApi";

export interface OfferApiCancelOfferRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApicancelOffer
     */
    orgId: string
    /**
     * Offer ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApicancelOffer
     */
    offerId: string
}

export interface OfferApiCreateOfferRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApicreateOffer
     */
    orgId: string
    /**
     * Offer to create
     * @type WorkloadOffer
     * @memberof OfferApicreateOffer
     */
    data: WorkloadOffer
}

export interface OfferApiCreateOrUpdateDraftOfferRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApicreateOrUpdateDraftOffer
     */
    orgId: string
    /**
     * the draft offer to create
     * @type WorkloadOffer
     * @memberof OfferApicreateOrUpdateDraftOffer
     */
    data: WorkloadOffer
}

export interface OfferApiDeleteOfferRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApideleteOffer
     */
    orgId: string
    /**
     * Offer ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApideleteOffer
     */
    offerId: string
}

export interface OfferApiExtendPrivateOfferExpiryDateRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApiextendPrivateOfferExpiryDate
     */
    orgId: string
    /**
     * Offer ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApiextendPrivateOfferExpiryDate
     */
    offerId: string
    /**
     * new expiry date in YYYY-MM-DD format
     * Defaults to: undefined
     * @type string
     * @memberof OfferApiextendPrivateOfferExpiryDate
     */
    newExpiryDate: string
}

export interface OfferApiGetOfferRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApigetOffer
     */
    orgId: string
    /**
     * Offer ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApigetOffer
     */
    offerId: string
}

export interface OfferApiGetOfferByExternalIdRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApigetOfferByExternalId
     */
    orgId: string
    /**
     * Offer External ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApigetOfferByExternalId
     */
    offerExternalId: string
}

export interface OfferApiGetOfferEulaRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApigetOfferEula
     */
    orgId: string
    /**
     * Offer ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApigetOfferEula
     */
    offerId: string
    /**
     * response format in JSON or string
     * Defaults to: undefined
     * @type string
     * @memberof OfferApigetOfferEula
     */
    format?: string
}

export interface OfferApiGetOfferResellerEulaRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApigetOfferResellerEula
     */
    orgId: string
    /**
     * Offer ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApigetOfferResellerEula
     */
    offerId: string
}

export interface OfferApiListOffersRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApilistOffers
     */
    orgId: string
    /**
     * filter by offer status
     * Defaults to: undefined
     * @type string
     * @memberof OfferApilistOffers
     */
    status?: string
    /**
     * filter by partner
     * Defaults to: undefined
     * @type string
     * @memberof OfferApilistOffers
     */
    partner?: string
    /**
     * filter by offerType
     * Defaults to: undefined
     * @type string
     * @memberof OfferApilistOffers
     */
    offerType?: string
    /**
     * filter by productId
     * Defaults to: undefined
     * @type string
     * @memberof OfferApilistOffers
     */
    productId?: string
    /**
     * filter by buyerId
     * Defaults to: undefined
     * @type string
     * @memberof OfferApilistOffers
     */
    buyerId?: string
    /**
     * filter by hubspotDealId
     * Defaults to: undefined
     * @type string
     * @memberof OfferApilistOffers
     */
    hubspotDealId?: string
    /**
     * filter by contactId
     * Defaults to: undefined
     * @type string
     * @memberof OfferApilistOffers
     */
    contactId?: string
    /**
     * List pagination size, default 1000, max value is 1000
     * Defaults to: undefined
     * @type number
     * @memberof OfferApilistOffers
     */
    limit?: number
    /**
     * List pagination offset, default 0
     * Defaults to: undefined
     * @type number
     * @memberof OfferApilistOffers
     */
    offset?: number
}

export interface OfferApiSendOfferNotificationsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApisendOfferNotifications
     */
    orgId: string
    /**
     * Offer ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApisendOfferNotifications
     */
    offerId: string
    /**
     * List of Contact IDs, if emoty or nil, send notifications to all contacts of the offer
     * @type Array&lt;string&gt;
     * @memberof OfferApisendOfferNotifications
     */
    contactIds?: Array<string>
}

export interface OfferApiUpdateOfferMetaInfoRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApiupdateOfferMetaInfo
     */
    orgId: string
    /**
     * Offer ID
     * Defaults to: undefined
     * @type string
     * @memberof OfferApiupdateOfferMetaInfo
     */
    offerId: string
    /**
     * Offer meta info to update
     * @type WorkloadMetaInfo
     * @memberof OfferApiupdateOfferMetaInfo
     */
    data: WorkloadMetaInfo
}

export class ObjectOfferApi {
    private api: ObservableOfferApi

    public constructor(configuration: Configuration, requestFactory?: OfferApiRequestFactory, responseProcessor?: OfferApiResponseProcessor) {
        this.api = new ObservableOfferApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Only the offer with status = \"PENDING_ACCEPTANCE\", \"PENDING_CANCEL\", \"ACTIVE\" or \"USED\" is allowed to cancel.
     * cancel offer
     * @param param the request object
     */
    public cancelOfferWithHttpInfo(param: OfferApiCancelOfferRequest, options?: Configuration): Promise<HttpInfo<WorkloadOffer>> {
        return this.api.cancelOfferWithHttpInfo(param.orgId, param.offerId,  options).toPromise();
    }

    /**
     * Only the offer with status = \"PENDING_ACCEPTANCE\", \"PENDING_CANCEL\", \"ACTIVE\" or \"USED\" is allowed to cancel.
     * cancel offer
     * @param param the request object
     */
    public cancelOffer(param: OfferApiCancelOfferRequest, options?: Configuration): Promise<WorkloadOffer> {
        return this.api.cancelOffer(param.orgId, param.offerId,  options).toPromise();
    }

    /**
     * Create a private offer under the given organization.
     * create offer
     * @param param the request object
     */
    public createOfferWithHttpInfo(param: OfferApiCreateOfferRequest, options?: Configuration): Promise<HttpInfo<WorkloadOffer>> {
        return this.api.createOfferWithHttpInfo(param.orgId, param.data,  options).toPromise();
    }

    /**
     * Create a private offer under the given organization.
     * create offer
     * @param param the request object
     */
    public createOffer(param: OfferApiCreateOfferRequest, options?: Configuration): Promise<WorkloadOffer> {
        return this.api.createOffer(param.orgId, param.data,  options).toPromise();
    }

    /**
     * Create a new draft offer or update the existing draft offer. When updating draft offer, the offer.ID is required.
     * create or update draft offer
     * @param param the request object
     */
    public createOrUpdateDraftOfferWithHttpInfo(param: OfferApiCreateOrUpdateDraftOfferRequest, options?: Configuration): Promise<HttpInfo<WorkloadOffer>> {
        return this.api.createOrUpdateDraftOfferWithHttpInfo(param.orgId, param.data,  options).toPromise();
    }

    /**
     * Create a new draft offer or update the existing draft offer. When updating draft offer, the offer.ID is required.
     * create or update draft offer
     * @param param the request object
     */
    public createOrUpdateDraftOffer(param: OfferApiCreateOrUpdateDraftOfferRequest, options?: Configuration): Promise<WorkloadOffer> {
        return this.api.createOrUpdateDraftOffer(param.orgId, param.data,  options).toPromise();
    }

    /**
     * The offer is soft deleted (marked as DELETED status) in Suger service. Only the offer with status = \"DRAFT\", \"CREATE_FAILED\", \"EXPIRED\" or \"CANCELLED\" is allowed to be deleted.
     * delete offer
     * @param param the request object
     */
    public deleteOfferWithHttpInfo(param: OfferApiDeleteOfferRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.deleteOfferWithHttpInfo(param.orgId, param.offerId,  options).toPromise();
    }

    /**
     * The offer is soft deleted (marked as DELETED status) in Suger service. Only the offer with status = \"DRAFT\", \"CREATE_FAILED\", \"EXPIRED\" or \"CANCELLED\" is allowed to be deleted.
     * delete offer
     * @param param the request object
     */
    public deleteOffer(param: OfferApiDeleteOfferRequest, options?: Configuration): Promise<string> {
        return this.api.deleteOffer(param.orgId, param.offerId,  options).toPromise();
    }

    /**
     * Only the offer with status = \"PENDING_ACCEPTANCE\", \"EXPIRED\" or \"ACCEPTED\" is allowed to extend expiry date.
     * extend offer expiry date
     * @param param the request object
     */
    public extendPrivateOfferExpiryDateWithHttpInfo(param: OfferApiExtendPrivateOfferExpiryDateRequest, options?: Configuration): Promise<HttpInfo<WorkloadOffer>> {
        return this.api.extendPrivateOfferExpiryDateWithHttpInfo(param.orgId, param.offerId, param.newExpiryDate,  options).toPromise();
    }

    /**
     * Only the offer with status = \"PENDING_ACCEPTANCE\", \"EXPIRED\" or \"ACCEPTED\" is allowed to extend expiry date.
     * extend offer expiry date
     * @param param the request object
     */
    public extendPrivateOfferExpiryDate(param: OfferApiExtendPrivateOfferExpiryDateRequest, options?: Configuration): Promise<WorkloadOffer> {
        return this.api.extendPrivateOfferExpiryDate(param.orgId, param.offerId, param.newExpiryDate,  options).toPromise();
    }

    /**
     * Get the offer by the given offer ID.
     * get offer
     * @param param the request object
     */
    public getOfferWithHttpInfo(param: OfferApiGetOfferRequest, options?: Configuration): Promise<HttpInfo<WorkloadOffer>> {
        return this.api.getOfferWithHttpInfo(param.orgId, param.offerId,  options).toPromise();
    }

    /**
     * Get the offer by the given offer ID.
     * get offer
     * @param param the request object
     */
    public getOffer(param: OfferApiGetOfferRequest, options?: Configuration): Promise<WorkloadOffer> {
        return this.api.getOffer(param.orgId, param.offerId,  options).toPromise();
    }

    /**
     * Get the offer by the given offer external ID.
     * get offer by external ID
     * @param param the request object
     */
    public getOfferByExternalIdWithHttpInfo(param: OfferApiGetOfferByExternalIdRequest, options?: Configuration): Promise<HttpInfo<WorkloadOffer>> {
        return this.api.getOfferByExternalIdWithHttpInfo(param.orgId, param.offerExternalId,  options).toPromise();
    }

    /**
     * Get the offer by the given offer external ID.
     * get offer by external ID
     * @param param the request object
     */
    public getOfferByExternalId(param: OfferApiGetOfferByExternalIdRequest, options?: Configuration): Promise<WorkloadOffer> {
        return this.api.getOfferByExternalId(param.orgId, param.offerExternalId,  options).toPromise();
    }

    /**
     * Get the EULA file of the given offer ID.
     * get offer EULA
     * @param param the request object
     */
    public getOfferEulaWithHttpInfo(param: OfferApiGetOfferEulaRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.getOfferEulaWithHttpInfo(param.orgId, param.offerId, param.format,  options).toPromise();
    }

    /**
     * Get the EULA file of the given offer ID.
     * get offer EULA
     * @param param the request object
     */
    public getOfferEula(param: OfferApiGetOfferEulaRequest, options?: Configuration): Promise<string> {
        return this.api.getOfferEula(param.orgId, param.offerId, param.format,  options).toPromise();
    }

    /**
     * Get the Reseller EULA file of the given offer ID.
     * get offer reseller EULA
     * @param param the request object
     */
    public getOfferResellerEulaWithHttpInfo(param: OfferApiGetOfferResellerEulaRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.getOfferResellerEulaWithHttpInfo(param.orgId, param.offerId,  options).toPromise();
    }

    /**
     * Get the Reseller EULA file of the given offer ID.
     * get offer reseller EULA
     * @param param the request object
     */
    public getOfferResellerEula(param: OfferApiGetOfferResellerEulaRequest, options?: Configuration): Promise<string> {
        return this.api.getOfferResellerEula(param.orgId, param.offerId,  options).toPromise();
    }

    /**
     * List offers under the given organization with pagination and optional filter.
     * list offers
     * @param param the request object
     */
    public listOffersWithHttpInfo(param: OfferApiListOffersRequest, options?: Configuration): Promise<HttpInfo<Array<WorkloadOffer>>> {
        return this.api.listOffersWithHttpInfo(param.orgId, param.status, param.partner, param.offerType, param.productId, param.buyerId, param.hubspotDealId, param.contactId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List offers under the given organization with pagination and optional filter.
     * list offers
     * @param param the request object
     */
    public listOffers(param: OfferApiListOffersRequest, options?: Configuration): Promise<Array<WorkloadOffer>> {
        return this.api.listOffers(param.orgId, param.status, param.partner, param.offerType, param.productId, param.buyerId, param.hubspotDealId, param.contactId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Send offer notifications to the given contact ids. If contactIds is empty, send notifications to all contacts of the offer.
     * notify offer contacts
     * @param param the request object
     */
    public sendOfferNotificationsWithHttpInfo(param: OfferApiSendOfferNotificationsRequest, options?: Configuration): Promise<HttpInfo<NotificationEvent>> {
        return this.api.sendOfferNotificationsWithHttpInfo(param.orgId, param.offerId, param.contactIds,  options).toPromise();
    }

    /**
     * Send offer notifications to the given contact ids. If contactIds is empty, send notifications to all contacts of the offer.
     * notify offer contacts
     * @param param the request object
     */
    public sendOfferNotifications(param: OfferApiSendOfferNotificationsRequest, options?: Configuration): Promise<NotificationEvent> {
        return this.api.sendOfferNotifications(param.orgId, param.offerId, param.contactIds,  options).toPromise();
    }

    /**
     * Update the meta info of the given offer.
     * update offer meta info
     * @param param the request object
     */
    public updateOfferMetaInfoWithHttpInfo(param: OfferApiUpdateOfferMetaInfoRequest, options?: Configuration): Promise<HttpInfo<WorkloadMetaInfo>> {
        return this.api.updateOfferMetaInfoWithHttpInfo(param.orgId, param.offerId, param.data,  options).toPromise();
    }

    /**
     * Update the meta info of the given offer.
     * update offer meta info
     * @param param the request object
     */
    public updateOfferMetaInfo(param: OfferApiUpdateOfferMetaInfoRequest, options?: Configuration): Promise<WorkloadMetaInfo> {
        return this.api.updateOfferMetaInfo(param.orgId, param.offerId, param.data,  options).toPromise();
    }

}

import { ObservableProductApi } from "./ObservableAPI";
import { ProductApiRequestFactory, ProductApiResponseProcessor} from "../apis/ProductApi";

export interface ProductApiCreateOrUpdateDraftProductRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ProductApicreateOrUpdateDraftProduct
     */
    orgId: string
    /**
     * the draft product to create
     * @type WorkloadProduct
     * @memberof ProductApicreateOrUpdateDraftProduct
     */
    data: WorkloadProduct
}

export interface ProductApiCreateProductRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ProductApicreateProduct
     */
    orgId: string
    /**
     * the product to create
     * @type WorkloadProduct
     * @memberof ProductApicreateProduct
     */
    data: WorkloadProduct
}

export interface ProductApiDeleteProductRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ProductApideleteProduct
     */
    orgId: string
    /**
     * Product ID
     * Defaults to: undefined
     * @type string
     * @memberof ProductApideleteProduct
     */
    productId: string
}

export interface ProductApiGetProductRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ProductApigetProduct
     */
    orgId: string
    /**
     * Product ID
     * Defaults to: undefined
     * @type string
     * @memberof ProductApigetProduct
     */
    productId: string
}

export interface ProductApiListProductMeteringDimensionsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ProductApilistProductMeteringDimensions
     */
    orgId: string
    /**
     * Product ID
     * Defaults to: undefined
     * @type string
     * @memberof ProductApilistProductMeteringDimensions
     */
    productId: string
}

export interface ProductApiListProductsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ProductApilistProducts
     */
    orgId: string
    /**
     * filter by partner
     * Defaults to: undefined
     * @type &#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39; | &#39;STRIPE&#39;
     * @memberof ProductApilistProducts
     */
    partner?: 'AWS' | 'AZURE' | 'GCP' | 'STRIPE'
    /**
     * List pagination size, default 100, max value is 1000
     * Defaults to: undefined
     * @type number
     * @memberof ProductApilistProducts
     */
    limit?: number
    /**
     * List pagination offset, default 0
     * Defaults to: undefined
     * @type number
     * @memberof ProductApilistProducts
     */
    offset?: number
}

export interface ProductApiListProductsByPartnerRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ProductApilistProductsByPartner
     */
    orgId: string
    /**
     * Cloud Partner
     * Defaults to: undefined
     * @type &#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;
     * @memberof ProductApilistProductsByPartner
     */
    partner: 'AWS' | 'AZURE' | 'GCP'
}

export interface ProductApiPublishProductRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ProductApipublishProduct
     */
    orgId: string
    /**
     * Product ID
     * Defaults to: undefined
     * @type string
     * @memberof ProductApipublishProduct
     */
    productId: string
    /**
     * the product to publish
     * @type WorkloadProduct
     * @memberof ProductApipublishProduct
     */
    data: WorkloadProduct
}

export interface ProductApiUpdateProductRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiupdateProduct
     */
    orgId: string
    /**
     * Product ID
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiupdateProduct
     */
    productId: string
    /**
     * the product to update
     * @type WorkloadProduct
     * @memberof ProductApiupdateProduct
     */
    data: WorkloadProduct
}

export interface ProductApiUpdateProductFulfillmentUrlRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiupdateProductFulfillmentUrl
     */
    orgId: string
    /**
     * Product ID
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiupdateProductFulfillmentUrl
     */
    productId: string
    /**
     * Update Product Params
     * @type UpdateProductParams
     * @memberof ProductApiupdateProductFulfillmentUrl
     */
    data: UpdateProductParams
}

export interface ProductApiUpdateProductMetaInfoRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiupdateProductMetaInfo
     */
    orgId: string
    /**
     * Product ID
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiupdateProductMetaInfo
     */
    productId: string
    /**
     * Product meta info to update
     * @type WorkloadMetaInfo
     * @memberof ProductApiupdateProductMetaInfo
     */
    data: WorkloadMetaInfo
}

export class ObjectProductApi {
    private api: ObservableProductApi

    public constructor(configuration: Configuration, requestFactory?: ProductApiRequestFactory, responseProcessor?: ProductApiResponseProcessor) {
        this.api = new ObservableProductApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new draft product or update the existing draft product. When updating draft product, the product.ID is required.
     * create or update draft product
     * @param param the request object
     */
    public createOrUpdateDraftProductWithHttpInfo(param: ProductApiCreateOrUpdateDraftProductRequest, options?: Configuration): Promise<HttpInfo<WorkloadProduct>> {
        return this.api.createOrUpdateDraftProductWithHttpInfo(param.orgId, param.data,  options).toPromise();
    }

    /**
     * Create a new draft product or update the existing draft product. When updating draft product, the product.ID is required.
     * create or update draft product
     * @param param the request object
     */
    public createOrUpdateDraftProduct(param: ProductApiCreateOrUpdateDraftProductRequest, options?: Configuration): Promise<WorkloadProduct> {
        return this.api.createOrUpdateDraftProduct(param.orgId, param.data,  options).toPromise();
    }

    /**
     * create a new product in the marketplace
     * create product
     * @param param the request object
     */
    public createProductWithHttpInfo(param: ProductApiCreateProductRequest, options?: Configuration): Promise<HttpInfo<WorkloadProduct>> {
        return this.api.createProductWithHttpInfo(param.orgId, param.data,  options).toPromise();
    }

    /**
     * create a new product in the marketplace
     * create product
     * @param param the request object
     */
    public createProduct(param: ProductApiCreateProductRequest, options?: Configuration): Promise<WorkloadProduct> {
        return this.api.createProduct(param.orgId, param.data,  options).toPromise();
    }

    /**
     * The product is soft deleted (marked as DELETED status) in Suger service. only the products with non PUBLIC status are allowed to be deleted.
     * delete product
     * @param param the request object
     */
    public deleteProductWithHttpInfo(param: ProductApiDeleteProductRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.deleteProductWithHttpInfo(param.orgId, param.productId,  options).toPromise();
    }

    /**
     * The product is soft deleted (marked as DELETED status) in Suger service. only the products with non PUBLIC status are allowed to be deleted.
     * delete product
     * @param param the request object
     */
    public deleteProduct(param: ProductApiDeleteProductRequest, options?: Configuration): Promise<string> {
        return this.api.deleteProduct(param.orgId, param.productId,  options).toPromise();
    }

    /**
     * get product by product id
     * get product
     * @param param the request object
     */
    public getProductWithHttpInfo(param: ProductApiGetProductRequest, options?: Configuration): Promise<HttpInfo<WorkloadProduct>> {
        return this.api.getProductWithHttpInfo(param.orgId, param.productId,  options).toPromise();
    }

    /**
     * get product by product id
     * get product
     * @param param the request object
     */
    public getProduct(param: ProductApiGetProductRequest, options?: Configuration): Promise<WorkloadProduct> {
        return this.api.getProduct(param.orgId, param.productId,  options).toPromise();
    }

    /**
     * list all metering dimensions of the given product
     * list metering dimensions of product
     * @param param the request object
     */
    public listProductMeteringDimensionsWithHttpInfo(param: ProductApiListProductMeteringDimensionsRequest, options?: Configuration): Promise<HttpInfo<Array<MeteringDimension>>> {
        return this.api.listProductMeteringDimensionsWithHttpInfo(param.orgId, param.productId,  options).toPromise();
    }

    /**
     * list all metering dimensions of the given product
     * list metering dimensions of product
     * @param param the request object
     */
    public listProductMeteringDimensions(param: ProductApiListProductMeteringDimensionsRequest, options?: Configuration): Promise<Array<MeteringDimension>> {
        return this.api.listProductMeteringDimensions(param.orgId, param.productId,  options).toPromise();
    }

    /**
     * list all products under the given organization
     * list products
     * @param param the request object
     */
    public listProductsWithHttpInfo(param: ProductApiListProductsRequest, options?: Configuration): Promise<HttpInfo<Array<WorkloadProduct>>> {
        return this.api.listProductsWithHttpInfo(param.orgId, param.partner, param.limit, param.offset,  options).toPromise();
    }

    /**
     * list all products under the given organization
     * list products
     * @param param the request object
     */
    public listProducts(param: ProductApiListProductsRequest, options?: Configuration): Promise<Array<WorkloadProduct>> {
        return this.api.listProducts(param.orgId, param.partner, param.limit, param.offset,  options).toPromise();
    }

    /**
     * list all products under the given organization and cloud partner
     * list products by partner
     * @param param the request object
     */
    public listProductsByPartnerWithHttpInfo(param: ProductApiListProductsByPartnerRequest, options?: Configuration): Promise<HttpInfo<Array<WorkloadProduct>>> {
        return this.api.listProductsByPartnerWithHttpInfo(param.orgId, param.partner,  options).toPromise();
    }

    /**
     * list all products under the given organization and cloud partner
     * list products by partner
     * @param param the request object
     */
    public listProductsByPartner(param: ProductApiListProductsByPartnerRequest, options?: Configuration): Promise<Array<WorkloadProduct>> {
        return this.api.listProductsByPartner(param.orgId, param.partner,  options).toPromise();
    }

    /**
     * publish the given product to the public status in the marketplace
     * publish product
     * @param param the request object
     */
    public publishProductWithHttpInfo(param: ProductApiPublishProductRequest, options?: Configuration): Promise<HttpInfo<WorkloadProduct>> {
        return this.api.publishProductWithHttpInfo(param.orgId, param.productId, param.data,  options).toPromise();
    }

    /**
     * publish the given product to the public status in the marketplace
     * publish product
     * @param param the request object
     */
    public publishProduct(param: ProductApiPublishProductRequest, options?: Configuration): Promise<WorkloadProduct> {
        return this.api.publishProduct(param.orgId, param.productId, param.data,  options).toPromise();
    }

    /**
     * update product info, no price update is allowed via this API.
     * update product
     * @param param the request object
     */
    public updateProductWithHttpInfo(param: ProductApiUpdateProductRequest, options?: Configuration): Promise<HttpInfo<WorkloadProduct>> {
        return this.api.updateProductWithHttpInfo(param.orgId, param.productId, param.data,  options).toPromise();
    }

    /**
     * update product info, no price update is allowed via this API.
     * update product
     * @param param the request object
     */
    public updateProduct(param: ProductApiUpdateProductRequest, options?: Configuration): Promise<WorkloadProduct> {
        return this.api.updateProduct(param.orgId, param.productId, param.data,  options).toPromise();
    }

    /**
     * update the fulfillment url of the given product
     * update product fulfillment url
     * @param param the request object
     */
    public updateProductFulfillmentUrlWithHttpInfo(param: ProductApiUpdateProductFulfillmentUrlRequest, options?: Configuration): Promise<HttpInfo<WorkloadProduct>> {
        return this.api.updateProductFulfillmentUrlWithHttpInfo(param.orgId, param.productId, param.data,  options).toPromise();
    }

    /**
     * update the fulfillment url of the given product
     * update product fulfillment url
     * @param param the request object
     */
    public updateProductFulfillmentUrl(param: ProductApiUpdateProductFulfillmentUrlRequest, options?: Configuration): Promise<WorkloadProduct> {
        return this.api.updateProductFulfillmentUrl(param.orgId, param.productId, param.data,  options).toPromise();
    }

    /**
     * Update the meta info of the given product.
     * update product meta info
     * @param param the request object
     */
    public updateProductMetaInfoWithHttpInfo(param: ProductApiUpdateProductMetaInfoRequest, options?: Configuration): Promise<HttpInfo<WorkloadMetaInfo>> {
        return this.api.updateProductMetaInfoWithHttpInfo(param.orgId, param.productId, param.data,  options).toPromise();
    }

    /**
     * Update the meta info of the given product.
     * update product meta info
     * @param param the request object
     */
    public updateProductMetaInfo(param: ProductApiUpdateProductMetaInfoRequest, options?: Configuration): Promise<WorkloadMetaInfo> {
        return this.api.updateProductMetaInfo(param.orgId, param.productId, param.data,  options).toPromise();
    }

}

import { ObservableReportApi } from "./ObservableAPI";
import { ReportApiRequestFactory, ReportApiResponseProcessor} from "../apis/ReportApi";

export interface ReportApiGetRevenueReportRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ReportApigetRevenueReport
     */
    orgId: string
    /**
     * Get Revenue Report Params
     * @type GetRevenueReportParams
     * @memberof ReportApigetRevenueReport
     */
    data: GetRevenueReportParams
}

export interface ReportApiListDailyRevenueRecordsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistDailyRevenueRecords
     */
    orgId: string
    /**
     * Cloud Partner
     * Defaults to: undefined
     * @type &#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;
     * @memberof ReportApilistDailyRevenueRecords
     */
    partner?: 'AWS' | 'AZURE' | 'GCP'
    /**
     * Filter daily revenue records by the given product ID
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistDailyRevenueRecords
     */
    productId?: string
    /**
     * Filter daily revenue records by the given buyer ID
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistDailyRevenueRecords
     */
    buyerId?: string
    /**
     * Filter daily revenue records by the given entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistDailyRevenueRecords
     */
    entitlementId?: string
    /**
     * start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistDailyRevenueRecords
     */
    startDate?: string
    /**
     * end date (UTC) in YYYY-MM-DD format, default is today
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistDailyRevenueRecords
     */
    endDate?: string
}

export interface ReportApiListRevenueRecordDetailsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistRevenueRecordDetails
     */
    orgId: string
    /**
     * Cloud Partner
     * Defaults to: undefined
     * @type &#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;
     * @memberof ReportApilistRevenueRecordDetails
     */
    partner: 'AWS' | 'AZURE' | 'GCP'
    /**
     * Filter revenue record details by the given product ID
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistRevenueRecordDetails
     */
    productId?: string
    /**
     * Filter revenue record details by the given buyer ID
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistRevenueRecordDetails
     */
    buyerId?: string
    /**
     * Filter revenue record details by the given entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistRevenueRecordDetails
     */
    entitlementId?: string
    /**
     * start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistRevenueRecordDetails
     */
    startDate?: string
    /**
     * end date (UTC) in YYYY-MM-DD format, default is today
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistRevenueRecordDetails
     */
    endDate?: string
    /**
     * List pagination size, default 1000, max value is 1000
     * Defaults to: undefined
     * @type number
     * @memberof ReportApilistRevenueRecordDetails
     */
    limit?: number
    /**
     * List pagination offset, default 0
     * Defaults to: undefined
     * @type number
     * @memberof ReportApilistRevenueRecordDetails
     */
    offset?: number
}

export interface ReportApiListRevenueRecordsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistRevenueRecords
     */
    orgId: string
    /**
     * Cloud Partner
     * Defaults to: undefined
     * @type &#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;
     * @memberof ReportApilistRevenueRecords
     */
    partner: 'AWS' | 'AZURE' | 'GCP'
    /**
     * Filter revenue records by the given product ID
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistRevenueRecords
     */
    productId?: string
    /**
     * Filter revenue records by the given entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistRevenueRecords
     */
    entitlementId?: string
    /**
     * Filter revenue records by the given buyer ID
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistRevenueRecords
     */
    buyerId?: string
    /**
     * start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistRevenueRecords
     */
    startDate?: string
    /**
     * end date (UTC) in YYYY-MM-DD format, default is today
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistRevenueRecords
     */
    endDate?: string
    /**
     * List pagination size, default 1000, max value is 1000
     * Defaults to: undefined
     * @type number
     * @memberof ReportApilistRevenueRecords
     */
    limit?: number
    /**
     * List pagination offset, default 0
     * Defaults to: undefined
     * @type number
     * @memberof ReportApilistRevenueRecords
     */
    offset?: number
}

export interface ReportApiListUsageMeteringDailyRecordsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistUsageMeteringDailyRecords
     */
    orgId: string
    /**
     * Filter by the Cloud Partner
     * Defaults to: undefined
     * @type &#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;
     * @memberof ReportApilistUsageMeteringDailyRecords
     */
    partner: 'AWS' | 'AZURE' | 'GCP'
    /**
     * Filter usage metering daily records by the given buyer ID
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistUsageMeteringDailyRecords
     */
    buyerId?: string
    /**
     * Filter usage metering daily records by the given entitlement ID
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistUsageMeteringDailyRecords
     */
    entitlementId?: string
    /**
     * start date (UTC) in YYYY-MM-DD format, default is 30 days before the endDate
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistUsageMeteringDailyRecords
     */
    startDate?: string
    /**
     * end date (UTC) in YYYY-MM-DD format, default is today
     * Defaults to: undefined
     * @type string
     * @memberof ReportApilistUsageMeteringDailyRecords
     */
    endDate?: string
    /**
     * List pagination size, default 1000, max value is 1000
     * Defaults to: undefined
     * @type number
     * @memberof ReportApilistUsageMeteringDailyRecords
     */
    limit?: number
    /**
     * List pagination offset, default 0
     * Defaults to: undefined
     * @type number
     * @memberof ReportApilistUsageMeteringDailyRecords
     */
    offset?: number
}

export class ObjectReportApi {
    private api: ObservableReportApi

    public constructor(configuration: Configuration, requestFactory?: ReportApiRequestFactory, responseProcessor?: ReportApiResponseProcessor) {
        this.api = new ObservableReportApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the revenue report of the given organization, product, entitlement, or buyer.
     * get revenue report
     * @param param the request object
     */
    public getRevenueReportWithHttpInfo(param: ReportApiGetRevenueReportRequest, options?: Configuration): Promise<HttpInfo<RevenueReport>> {
        return this.api.getRevenueReportWithHttpInfo(param.orgId, param.data,  options).toPromise();
    }

    /**
     * Get the revenue report of the given organization, product, entitlement, or buyer.
     * get revenue report
     * @param param the request object
     */
    public getRevenueReport(param: ReportApiGetRevenueReportRequest, options?: Configuration): Promise<RevenueReport> {
        return this.api.getRevenueReport(param.orgId, param.data,  options).toPromise();
    }

    /**
     * list daily revenue records for the given organization, partner, entitlement, or buyer, within the given date range.
     * list daily revenue records
     * @param param the request object
     */
    public listDailyRevenueRecordsWithHttpInfo(param: ReportApiListDailyRevenueRecordsRequest, options?: Configuration): Promise<HttpInfo<Array<RevenueRecord>>> {
        return this.api.listDailyRevenueRecordsWithHttpInfo(param.orgId, param.partner, param.productId, param.buyerId, param.entitlementId, param.startDate, param.endDate,  options).toPromise();
    }

    /**
     * list daily revenue records for the given organization, partner, entitlement, or buyer, within the given date range.
     * list daily revenue records
     * @param param the request object
     */
    public listDailyRevenueRecords(param: ReportApiListDailyRevenueRecordsRequest, options?: Configuration): Promise<Array<RevenueRecord>> {
        return this.api.listDailyRevenueRecords(param.orgId, param.partner, param.productId, param.buyerId, param.entitlementId, param.startDate, param.endDate,  options).toPromise();
    }

    /**
     * list the raw revenue record details for the given organization, partner, product, entitlement, or buyer.
     * list revenue record details
     * @param param the request object
     */
    public listRevenueRecordDetailsWithHttpInfo(param: ReportApiListRevenueRecordDetailsRequest, options?: Configuration): Promise<HttpInfo<ListRevenueRecordDetailsResponse>> {
        return this.api.listRevenueRecordDetailsWithHttpInfo(param.orgId, param.partner, param.productId, param.buyerId, param.entitlementId, param.startDate, param.endDate, param.limit, param.offset,  options).toPromise();
    }

    /**
     * list the raw revenue record details for the given organization, partner, product, entitlement, or buyer.
     * list revenue record details
     * @param param the request object
     */
    public listRevenueRecordDetails(param: ReportApiListRevenueRecordDetailsRequest, options?: Configuration): Promise<ListRevenueRecordDetailsResponse> {
        return this.api.listRevenueRecordDetails(param.orgId, param.partner, param.productId, param.buyerId, param.entitlementId, param.startDate, param.endDate, param.limit, param.offset,  options).toPromise();
    }

    /**
     * list the revenue records for the given organization, product, entitlement, or buyer.
     * list revenue records
     * @param param the request object
     */
    public listRevenueRecordsWithHttpInfo(param: ReportApiListRevenueRecordsRequest, options?: Configuration): Promise<HttpInfo<ListRevenueRecordsResponse>> {
        return this.api.listRevenueRecordsWithHttpInfo(param.orgId, param.partner, param.productId, param.entitlementId, param.buyerId, param.startDate, param.endDate, param.limit, param.offset,  options).toPromise();
    }

    /**
     * list the revenue records for the given organization, product, entitlement, or buyer.
     * list revenue records
     * @param param the request object
     */
    public listRevenueRecords(param: ReportApiListRevenueRecordsRequest, options?: Configuration): Promise<ListRevenueRecordsResponse> {
        return this.api.listRevenueRecords(param.orgId, param.partner, param.productId, param.entitlementId, param.buyerId, param.startDate, param.endDate, param.limit, param.offset,  options).toPromise();
    }

    /**
     * list the daily records of the usage metering from the cloud marketplace for the given organization, entitlement, or buyer.
     * list usage metering daily records
     * @param param the request object
     */
    public listUsageMeteringDailyRecordsWithHttpInfo(param: ReportApiListUsageMeteringDailyRecordsRequest, options?: Configuration): Promise<HttpInfo<ListUsageMeteringDailyRecordsResponse>> {
        return this.api.listUsageMeteringDailyRecordsWithHttpInfo(param.orgId, param.partner, param.buyerId, param.entitlementId, param.startDate, param.endDate, param.limit, param.offset,  options).toPromise();
    }

    /**
     * list the daily records of the usage metering from the cloud marketplace for the given organization, entitlement, or buyer.
     * list usage metering daily records
     * @param param the request object
     */
    public listUsageMeteringDailyRecords(param: ReportApiListUsageMeteringDailyRecordsRequest, options?: Configuration): Promise<ListUsageMeteringDailyRecordsResponse> {
        return this.api.listUsageMeteringDailyRecords(param.orgId, param.partner, param.buyerId, param.entitlementId, param.startDate, param.endDate, param.limit, param.offset,  options).toPromise();
    }

}

import { ObservableSupportApi } from "./ObservableAPI";
import { SupportApiRequestFactory, SupportApiResponseProcessor} from "../apis/SupportApi";

export interface SupportApiCloseSupportTicketRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof SupportApicloseSupportTicket
     */
    orgId: string
    /**
     * Ticket ID
     * Defaults to: undefined
     * @type string
     * @memberof SupportApicloseSupportTicket
     */
    ticketId: string
}

export interface SupportApiCreateSupportTicketRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof SupportApicreateSupportTicket
     */
    orgId: string
    /**
     * Ticket create request
     * @type SupportTicket
     * @memberof SupportApicreateSupportTicket
     */
    body: SupportTicket
}

export interface SupportApiCreateSupportTicketAttachmentRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof SupportApicreateSupportTicketAttachment
     */
    orgId: string
    /**
     * Ticket ID
     * Defaults to: undefined
     * @type string
     * @memberof SupportApicreateSupportTicketAttachment
     */
    ticketId: string
    /**
     * File to upload
     * Defaults to: undefined
     * @type HttpFile
     * @memberof SupportApicreateSupportTicketAttachment
     */
    file: HttpFile
}

export interface SupportApiCreateSupportTicketCommentRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof SupportApicreateSupportTicketComment
     */
    orgId: string
    /**
     * Ticket ID
     * Defaults to: undefined
     * @type string
     * @memberof SupportApicreateSupportTicketComment
     */
    ticketId: string
    /**
     * Ticket create request
     * @type SupportTicketComment
     * @memberof SupportApicreateSupportTicketComment
     */
    body: SupportTicketComment
}

export interface SupportApiGetSupportTicketRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof SupportApigetSupportTicket
     */
    orgId: string
    /**
     * Ticket ID
     * Defaults to: undefined
     * @type string
     * @memberof SupportApigetSupportTicket
     */
    ticketId: string
}

export interface SupportApiListSupportTicketsRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof SupportApilistSupportTickets
     */
    orgId: string
    /**
     * List pagination size, default 1000, max value is 1000
     * Defaults to: undefined
     * @type number
     * @memberof SupportApilistSupportTickets
     */
    limit?: number
    /**
     * List pagination offset, default 0
     * Defaults to: undefined
     * @type number
     * @memberof SupportApilistSupportTickets
     */
    offset?: number
}

export interface SupportApiReopenSupportTicketRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof SupportApireopenSupportTicket
     */
    orgId: string
    /**
     * Ticket ID
     * Defaults to: undefined
     * @type string
     * @memberof SupportApireopenSupportTicket
     */
    ticketId: string
}

export interface SupportApiUpdateSupportTicketRequest {
    /**
     * Organization ID
     * Defaults to: undefined
     * @type string
     * @memberof SupportApiupdateSupportTicket
     */
    orgId: string
    /**
     * Ticket ID
     * Defaults to: undefined
     * @type string
     * @memberof SupportApiupdateSupportTicket
     */
    ticketId: string
    /**
     * Ticket create request
     * @type UpdateSupportTicketRequest
     * @memberof SupportApiupdateSupportTicket
     */
    body: UpdateSupportTicketRequest
}

export class ObjectSupportApi {
    private api: ObservableSupportApi

    public constructor(configuration: Configuration, requestFactory?: SupportApiRequestFactory, responseProcessor?: SupportApiResponseProcessor) {
        this.api = new ObservableSupportApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * close suuport ticket
     * close support ticket
     * @param param the request object
     */
    public closeSupportTicketWithHttpInfo(param: SupportApiCloseSupportTicketRequest, options?: Configuration): Promise<HttpInfo<SupportTicket>> {
        return this.api.closeSupportTicketWithHttpInfo(param.orgId, param.ticketId,  options).toPromise();
    }

    /**
     * close suuport ticket
     * close support ticket
     * @param param the request object
     */
    public closeSupportTicket(param: SupportApiCloseSupportTicketRequest, options?: Configuration): Promise<SupportTicket> {
        return this.api.closeSupportTicket(param.orgId, param.ticketId,  options).toPromise();
    }

    /**
     * create support ticket
     * create support ticket
     * @param param the request object
     */
    public createSupportTicketWithHttpInfo(param: SupportApiCreateSupportTicketRequest, options?: Configuration): Promise<HttpInfo<SupportTicket>> {
        return this.api.createSupportTicketWithHttpInfo(param.orgId, param.body,  options).toPromise();
    }

    /**
     * create support ticket
     * create support ticket
     * @param param the request object
     */
    public createSupportTicket(param: SupportApiCreateSupportTicketRequest, options?: Configuration): Promise<SupportTicket> {
        return this.api.createSupportTicket(param.orgId, param.body,  options).toPromise();
    }

    /**
     * create support ticket attachment
     * create support ticket attachment
     * @param param the request object
     */
    public createSupportTicketAttachmentWithHttpInfo(param: SupportApiCreateSupportTicketAttachmentRequest, options?: Configuration): Promise<HttpInfo<Array<SupportTicketAttachment>>> {
        return this.api.createSupportTicketAttachmentWithHttpInfo(param.orgId, param.ticketId, param.file,  options).toPromise();
    }

    /**
     * create support ticket attachment
     * create support ticket attachment
     * @param param the request object
     */
    public createSupportTicketAttachment(param: SupportApiCreateSupportTicketAttachmentRequest, options?: Configuration): Promise<Array<SupportTicketAttachment>> {
        return this.api.createSupportTicketAttachment(param.orgId, param.ticketId, param.file,  options).toPromise();
    }

    /**
     * create support ticket comment
     * create support ticket comment
     * @param param the request object
     */
    public createSupportTicketCommentWithHttpInfo(param: SupportApiCreateSupportTicketCommentRequest, options?: Configuration): Promise<HttpInfo<SupportTicketComment>> {
        return this.api.createSupportTicketCommentWithHttpInfo(param.orgId, param.ticketId, param.body,  options).toPromise();
    }

    /**
     * create support ticket comment
     * create support ticket comment
     * @param param the request object
     */
    public createSupportTicketComment(param: SupportApiCreateSupportTicketCommentRequest, options?: Configuration): Promise<SupportTicketComment> {
        return this.api.createSupportTicketComment(param.orgId, param.ticketId, param.body,  options).toPromise();
    }

    /**
     * get support ticket
     * get support ticket
     * @param param the request object
     */
    public getSupportTicketWithHttpInfo(param: SupportApiGetSupportTicketRequest, options?: Configuration): Promise<HttpInfo<SupportTicket>> {
        return this.api.getSupportTicketWithHttpInfo(param.orgId, param.ticketId,  options).toPromise();
    }

    /**
     * get support ticket
     * get support ticket
     * @param param the request object
     */
    public getSupportTicket(param: SupportApiGetSupportTicketRequest, options?: Configuration): Promise<SupportTicket> {
        return this.api.getSupportTicket(param.orgId, param.ticketId,  options).toPromise();
    }

    /**
     * list support tickets
     * list support tickets
     * @param param the request object
     */
    public listSupportTicketsWithHttpInfo(param: SupportApiListSupportTicketsRequest, options?: Configuration): Promise<HttpInfo<ListSupportTicketsResponse>> {
        return this.api.listSupportTicketsWithHttpInfo(param.orgId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * list support tickets
     * list support tickets
     * @param param the request object
     */
    public listSupportTickets(param: SupportApiListSupportTicketsRequest, options?: Configuration): Promise<ListSupportTicketsResponse> {
        return this.api.listSupportTickets(param.orgId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * reopen support ticket
     * reopen support ticket
     * @param param the request object
     */
    public reopenSupportTicketWithHttpInfo(param: SupportApiReopenSupportTicketRequest, options?: Configuration): Promise<HttpInfo<SupportTicket>> {
        return this.api.reopenSupportTicketWithHttpInfo(param.orgId, param.ticketId,  options).toPromise();
    }

    /**
     * reopen support ticket
     * reopen support ticket
     * @param param the request object
     */
    public reopenSupportTicket(param: SupportApiReopenSupportTicketRequest, options?: Configuration): Promise<SupportTicket> {
        return this.api.reopenSupportTicket(param.orgId, param.ticketId,  options).toPromise();
    }

    /**
     * update support ticket
     * update support ticket
     * @param param the request object
     */
    public updateSupportTicketWithHttpInfo(param: SupportApiUpdateSupportTicketRequest, options?: Configuration): Promise<HttpInfo<SupportTicket>> {
        return this.api.updateSupportTicketWithHttpInfo(param.orgId, param.ticketId, param.body,  options).toPromise();
    }

    /**
     * update support ticket
     * update support ticket
     * @param param the request object
     */
    public updateSupportTicket(param: SupportApiUpdateSupportTicketRequest, options?: Configuration): Promise<SupportTicket> {
        return this.api.updateSupportTicket(param.orgId, param.ticketId, param.body,  options).toPromise();
    }

}
