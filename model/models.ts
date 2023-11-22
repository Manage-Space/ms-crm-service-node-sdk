import localVarRequest from 'request';

export * from './accountResponse';
export * from './accountResponseCompany';
export * from './accountResponseContact';
export * from './addCompanyNoteRequest';
export * from './addContactNoteRequest';
export * from './badRequestError400Response';
export * from './badRequestError400ResponseError';
export * from './baseError';
export * from './batchGetAccountsRequest';
export * from './companyAddressRequest';
export * from './companyAddressResponse';
export * from './companyContactResponse';
export * from './companyRequest';
export * from './companyResponse';
export * from './companyResponseAccount';
export * from './companyResponseAddress';
export * from './companyResponseNote';
export * from './contactAddressRequest';
export * from './contactAddressResponse';
export * from './contactRequest';
export * from './contactResponse';
export * from './contactResponseAccount';
export * from './contactResponseAddress';
export * from './contactResponseCompany';
export * from './contactResponseNote';
export * from './createCompaniesRequest';
export * from './createCompanyRequest';
export * from './createContactRequest';
export * from './createContactsRequest';
export * from './forbiddenError403Response';
export * from './forbiddenError403ResponseError';
export * from './getAccount200Response';
export * from './getCompanyWithAccount200Response';
export * from './getContactWithAccount200Response';
export * from './internalServerError500Response';
export * from './internalServerError500ResponseError';
export * from './unauthorizedError401Response';
export * from './unauthorizedError401ResponseError';
export * from './updateCompanyNoteRequest';
export * from './updateCompanyRequest';
export * from './updateContactNoteRequest';
export * from './updateContactRequest';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccountResponse } from './accountResponse';
import { AccountResponseCompany } from './accountResponseCompany';
import { AccountResponseContact } from './accountResponseContact';
import { AddCompanyNoteRequest } from './addCompanyNoteRequest';
import { AddContactNoteRequest } from './addContactNoteRequest';
import { BadRequestError400Response } from './badRequestError400Response';
import { BadRequestError400ResponseError } from './badRequestError400ResponseError';
import { BaseError } from './baseError';
import { BatchGetAccountsRequest } from './batchGetAccountsRequest';
import { CompanyAddressRequest } from './companyAddressRequest';
import { CompanyAddressResponse } from './companyAddressResponse';
import { CompanyContactResponse } from './companyContactResponse';
import { CompanyRequest } from './companyRequest';
import { CompanyResponse } from './companyResponse';
import { CompanyResponseAccount } from './companyResponseAccount';
import { CompanyResponseAddress } from './companyResponseAddress';
import { CompanyResponseNote } from './companyResponseNote';
import { ContactAddressRequest } from './contactAddressRequest';
import { ContactAddressResponse } from './contactAddressResponse';
import { ContactRequest } from './contactRequest';
import { ContactResponse } from './contactResponse';
import { ContactResponseAccount } from './contactResponseAccount';
import { ContactResponseAddress } from './contactResponseAddress';
import { ContactResponseCompany } from './contactResponseCompany';
import { ContactResponseNote } from './contactResponseNote';
import { CreateCompaniesRequest } from './createCompaniesRequest';
import { CreateCompanyRequest } from './createCompanyRequest';
import { CreateContactRequest } from './createContactRequest';
import { CreateContactsRequest } from './createContactsRequest';
import { ForbiddenError403Response } from './forbiddenError403Response';
import { ForbiddenError403ResponseError } from './forbiddenError403ResponseError';
import { GetAccount200Response } from './getAccount200Response';
import { GetCompanyWithAccount200Response } from './getCompanyWithAccount200Response';
import { GetContactWithAccount200Response } from './getContactWithAccount200Response';
import { InternalServerError500Response } from './internalServerError500Response';
import { InternalServerError500ResponseError } from './internalServerError500ResponseError';
import { UnauthorizedError401Response } from './unauthorizedError401Response';
import { UnauthorizedError401ResponseError } from './unauthorizedError401ResponseError';
import { UpdateCompanyNoteRequest } from './updateCompanyNoteRequest';
import { UpdateCompanyRequest } from './updateCompanyRequest';
import { UpdateContactNoteRequest } from './updateContactNoteRequest';
import { UpdateContactRequest } from './updateContactRequest';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
}

let typeMap: {[index: string]: any} = {
    "AccountResponse": AccountResponse,
    "AccountResponseCompany": AccountResponseCompany,
    "AccountResponseContact": AccountResponseContact,
    "AddCompanyNoteRequest": AddCompanyNoteRequest,
    "AddContactNoteRequest": AddContactNoteRequest,
    "BadRequestError400Response": BadRequestError400Response,
    "BadRequestError400ResponseError": BadRequestError400ResponseError,
    "BaseError": BaseError,
    "BatchGetAccountsRequest": BatchGetAccountsRequest,
    "CompanyAddressRequest": CompanyAddressRequest,
    "CompanyAddressResponse": CompanyAddressResponse,
    "CompanyContactResponse": CompanyContactResponse,
    "CompanyRequest": CompanyRequest,
    "CompanyResponse": CompanyResponse,
    "CompanyResponseAccount": CompanyResponseAccount,
    "CompanyResponseAddress": CompanyResponseAddress,
    "CompanyResponseNote": CompanyResponseNote,
    "ContactAddressRequest": ContactAddressRequest,
    "ContactAddressResponse": ContactAddressResponse,
    "ContactRequest": ContactRequest,
    "ContactResponse": ContactResponse,
    "ContactResponseAccount": ContactResponseAccount,
    "ContactResponseAddress": ContactResponseAddress,
    "ContactResponseCompany": ContactResponseCompany,
    "ContactResponseNote": ContactResponseNote,
    "CreateCompaniesRequest": CreateCompaniesRequest,
    "CreateCompanyRequest": CreateCompanyRequest,
    "CreateContactRequest": CreateContactRequest,
    "CreateContactsRequest": CreateContactsRequest,
    "ForbiddenError403Response": ForbiddenError403Response,
    "ForbiddenError403ResponseError": ForbiddenError403ResponseError,
    "GetAccount200Response": GetAccount200Response,
    "GetCompanyWithAccount200Response": GetCompanyWithAccount200Response,
    "GetContactWithAccount200Response": GetContactWithAccount200Response,
    "InternalServerError500Response": InternalServerError500Response,
    "InternalServerError500ResponseError": InternalServerError500ResponseError,
    "UnauthorizedError401Response": UnauthorizedError401Response,
    "UnauthorizedError401ResponseError": UnauthorizedError401ResponseError,
    "UpdateCompanyNoteRequest": UpdateCompanyNoteRequest,
    "UpdateCompanyRequest": UpdateCompanyRequest,
    "UpdateContactNoteRequest": UpdateContactNoteRequest,
    "UpdateContactRequest": UpdateContactRequest,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
