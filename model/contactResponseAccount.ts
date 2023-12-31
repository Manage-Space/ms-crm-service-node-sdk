/**
 * ManageSpace CRM API
 * ManageSpace CRM API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class ContactResponseAccount {
    /**
    * Account Id
    */
    'accountId': string;
    /**
    * Account Name
    */
    'accountName': string;
    /**
    * Organization Id
    */
    'orgId': string;
    /**
    * Payment provider ID
    */
    'paymentProviderId': string;
    /**
    * Created at
    */
    'createdAt': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string"
        },
        {
            "name": "accountName",
            "baseName": "accountName",
            "type": "string"
        },
        {
            "name": "orgId",
            "baseName": "orgId",
            "type": "string"
        },
        {
            "name": "paymentProviderId",
            "baseName": "paymentProviderId",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return ContactResponseAccount.attributeTypeMap;
    }
}

