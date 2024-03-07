
import * as Yup from 'yup';

export const requiredPasswordValidation = (fieldName: string) => {
    return Yup.string()
        .required(`${fieldName} is required`)
        .min(3, `${fieldName} must be at least 3 characters`)
        .max(20, `${fieldName} must not exceed 50 characters`)
        .transform((value) => {
            if (value !== null && value !== undefined) {
                return value.trim();
            }
            return value; 
        });
};


export const optionalPasswordValidation = (fieldName: string) => {
    return Yup.string()
        .transform((value) => {
            if (value !== null && value !== undefined) {
                return value.trim();
            }
            return value; 
        });
};