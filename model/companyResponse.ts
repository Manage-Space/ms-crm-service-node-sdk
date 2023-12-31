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
import { CompanyContactResponse } from './companyContactResponse';
import { CompanyResponseAccount } from './companyResponseAccount';
import { CompanyResponseAddress } from './companyResponseAddress';
import { CompanyResponseNote } from './companyResponseNote';

export class CompanyResponse {
    /**
    * Email address
    */
    'email': string | null;
    /**
    * Phone number
    */
    'phoneNumber': string | null;
    /**
    * Mobile number
    */
    'mobileNumber': string;
    /**
    * Fax number
    */
    'faxNumber': string | null;
    /**
    * Time of creation
    */
    'createdAt': Date;
    /**
    * Company Id
    */
    'companyId': string;
    /**
    * Company name
    */
    'companyName': string;
    /**
    * Notes about the contact
    */
    'notes': Array<CompanyResponseNote>;
    /**
    * Company contacts
    */
    'companyContacts': Array<CompanyContactResponse>;
    'address': CompanyResponseAddress | null;
    'account': CompanyResponseAccount;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "mobileNumber",
            "baseName": "mobileNumber",
            "type": "string"
        },
        {
            "name": "faxNumber",
            "baseName": "faxNumber",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "companyId",
            "baseName": "companyId",
            "type": "string"
        },
        {
            "name": "companyName",
            "baseName": "companyName",
            "type": "string"
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "Array<CompanyResponseNote>"
        },
        {
            "name": "companyContacts",
            "baseName": "companyContacts",
            "type": "Array<CompanyContactResponse>"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "CompanyResponseAddress"
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "CompanyResponseAccount"
        }    ];

    static getAttributeTypeMap() {
        return CompanyResponse.attributeTypeMap;
    }
}

