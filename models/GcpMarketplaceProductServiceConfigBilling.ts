/**
 * Suger API
 * CRUD operations on a set of resources, including organizations, products, offers, entitlements, usage record groups for meterting, etc.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@suger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class GcpMarketplaceProductServiceConfigBilling {
    /**
    * The list of metrics that are available for billing for the product. In format of \"product-name.endpoints.gcp-project-id.cloud.goog/plan_name_metric_name\"
    */
    'metrics'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "metrics",
            "baseName": "metrics",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GcpMarketplaceProductServiceConfigBilling.attributeTypeMap;
    }

    public constructor() {
    }
}
