
import * as Yup from 'yup';

export const requiredMobileValidation = (fieldName: string) => {
    return Yup.string()
        .required(`${fieldName} is required`)
        .matches(/^[0-9]{10}$/, `Invalid ${fieldName}`)
        .matches(/^(?!2{10}|3{10}|4{10}|5{10}|6{10}|7{10}|8{10}|9{10})\d{10}$/, `Invalid ${fieldName}`)
        .matches(/^\d+$/, `Invalid ${fieldName}`)
        .transform((value) => {
            if (value !== null && value !== undefined) {
                return value.trim();
            }
            return value;
        })
        .test('min-value', `Invalid ${fieldName}`, (value) => {
            const numericValue = parseInt(value, 10);
            return numericValue >= 2000000000;
        });
};


export const mobileOptionalValidation = (fieldName: string) => {
    return Yup.string()
        .matches(/^[0-9]{10}$/, `Invalid ${fieldName}`)
        .matches(/^\d+$/, `Invalid ${fieldName}`)
        .transform((value) => {
            if (value !== null && value !== undefined) {
                return value.trim();
            }
            return value;
        });
};

export const landLineOptionalValidation = (fieldName: string) => {
    return Yup.string()
        .matches(/^[0-9]{6,10}$/, `Invalid ${fieldName}`)
        .transform((value) => {
            if (value !== null && value !== undefined) {
                return value.trim();
            }
            return value;
        });
};