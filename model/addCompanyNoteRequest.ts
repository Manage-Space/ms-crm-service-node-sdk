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

export class AddCompanyNoteRequest {
    /**
    * Additional note
    */
    'note': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "note",
            "baseName": "note",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AddCompanyNoteRequest.attributeTypeMap;
    }
}

