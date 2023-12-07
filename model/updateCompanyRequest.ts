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
import { CompanyAddressRequest } from './companyAddressRequest';
import { ContactRequest } from './contactRequest';

export class UpdateCompanyRequest {
    /**
    * Email address
    */
    'email'?: string;
    /**
    * Phone number
    */
    'phoneNumber'?: string;
    /**
    * Mobile number
    */
    'mobileNumber': string;
    /**
    * Fax number
    */
    'faxNumber'?: string;
    /**
    * Company name
    */
    'companyName': string;
    /**
    * Account holder(s)
    */
    'companyContacts'?: Array<ContactRequest>;
    'address'?: CompanyAddressRequest;
    /**
    * Company ID
    */
    'companyId'?: string;

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
            "name": "companyName",
            "baseName": "companyName",
            "type": "string"
        },
        {
            "name": "companyContacts",
            "baseName": "companyContacts",
            "type": "Array<ContactRequest>"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "CompanyAddressRequest"
        },
        {
            "name": "companyId",
            "baseName": "companyId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateCompanyRequest.attributeTypeMap;
    }
}

