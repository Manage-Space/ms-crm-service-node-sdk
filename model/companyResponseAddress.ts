/**
 * ManageSpace CRM API
 * ManageSpace CRM API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* Company address
*/
export class CompanyResponseAddress {
    /**
    * First line of the address, typically includes street number and name
    */
    'addressLineOne': string;
    /**
    * Second line of the address, typically includes apartment, suite or unit number
    */
    'addressLineTwo': string | null;
    /**
    * City or town where the address is located
    */
    'city': string;
    /**
    * State, province or region where the address is located
    */
    'province': string;
    /**
    * Postal or zip code for the address
    */
    'postalCode': string;
    /**
    * Country where the address is located
    */
    'country': string;
    /**
    * company address Id
    */
    'companyAddressId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addressLineOne",
            "baseName": "addressLineOne",
            "type": "string"
        },
        {
            "name": "addressLineTwo",
            "baseName": "addressLineTwo",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "province",
            "baseName": "province",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "companyAddressId",
            "baseName": "companyAddressId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CompanyResponseAddress.attributeTypeMap;
    }
}

