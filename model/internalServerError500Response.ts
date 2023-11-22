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
import { InternalServerError500ResponseError } from './internalServerError500ResponseError';

export class InternalServerError500Response {
    'data': Array<string>;
    'success': boolean;
    'error': InternalServerError500ResponseError;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<string>"
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "InternalServerError500ResponseError"
        }    ];

    static getAttributeTypeMap() {
        return InternalServerError500Response.attributeTypeMap;
    }
}
