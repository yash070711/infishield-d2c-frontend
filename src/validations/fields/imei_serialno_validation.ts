

import * as Yup from 'yup';

export const optionalIMEIValidation = (fieldName: string) => {
    return Yup.string()
        .matches(/^[0-9]+$/, `Invalid ${fieldName}`)
        .min(15, `${fieldName} must be at least 15 characters`)
        .max(17, `${fieldName} must not exceed 17 characters`)
        .transform((value) => {
            if (value !== null && value !== undefined) {
                return value.trim();
            }
            return value; 
        });
};


export const optionalSerialNoValidation = (fieldName: string) => {
    return Yup.string()
        .matches(
            /^[A-Za-z0-9]+$/,
            `${fieldName} must only contain letters and numbers`
        )
        .min(2, `${fieldName} must be at least 2 characters`)
        .max(20, `${fieldName} must not exceed 20 characters`)
        .transform((value) => {
            if (value !== null && value !== undefined) {
                return value.trim();
            }
            return value;
        });
};


