
import * as Yup from 'yup';

export const requiredTextValidation = (fieldName: string) => {
    return Yup.string()
        .required(`${fieldName} is required`)
        .min(2, `${fieldName} must be at least 2 characters`)
        .max(100, `${fieldName} must not exceed 100 characters`)
        .transform((value) => {
            if (value !== null && value !== undefined && typeof value === 'string') {
                return value.trim();
            }
            return value;
        });
};

export const optionalTextValidation = (fieldName: string) => {
    return Yup.string()
        .min(2, `${fieldName} must be at least 3 characters`)
        .max(100, `${fieldName} must not exceed 100 characters`)
        .transform((value) => {
            if (value !== null && value !== undefined) {
                return value.trim();
            }
            return value;
        });
};

export const requiredInvoiceNoValidation = (fieldName: string) => {
    return Yup.string()
        .required(`${fieldName} is required`)
        .matches(
            /^(?=.*[0-9])[A-Za-z0-9\-_]+$/,
            `${fieldName} must only contain letters, numbers, hyphens, and underscores, and at least one numeric character is required`
        )
        .min(1, `${fieldName} must be at least 5 characters`)
        .max(20, `${fieldName} must not exceed 20 characters`)
        .transform((value) => {
            if (value !== null && value !== undefined) {
                return value.trim();
            }
            return value;
        });
};

export const requiredLettersNumberValidation = (fieldName: string) => {
    return Yup.string()
        .required(`${fieldName} is required`)
        .matches(
            /^[A-Za-z0-9]+$/, // Allow letters, numbers
            `${fieldName} must only contain letters, numbers`
        )
        .min(4, `${fieldName} must be at least 4 characters`)
        .max(20, `${fieldName} must not exceed 20 characters`)
        .transform((value) => {
            if (value !== null && value !== undefined) {
                return value.trim();
            }
            return value;
        });
};

export const optionalLettersNumberValidation = (fieldName: string) => {
    return Yup.string()
        .matches(
            /^[A-Za-z0-9]+$/, // Allow letters, numbers
            `${fieldName} must only contain letters, numbers`
        )
        .min(4, `${fieldName} must be at least 4 characters`)
        .max(20, `${fieldName} must not exceed 20 characters`)
        .transform((value) => {
            if (value !== null && value !== undefined) {
                return value.trim();
            }
            return value;
        });
};

export const requiredPanNoValidation = (fieldName: string) => {
    return Yup.string()
        .required(`${fieldName} is required`)
        .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i, `Invalid ${fieldName}`)
        .transform((value) => {
            if (value !== null && value !== undefined) {
                return value.trim();
            }
            return value;
        });
};

export const optionalPanNoValidation = (fieldName: string) => {
    return Yup.string()
        .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i, `Invalid ${fieldName}`)
        .transform((value) => {
            if (value !== null && value !== undefined) {
                return value.trim();
            }
            return value;
        });
};

export const optionalCINNoValidation = (fieldName: string) => {
    return Yup.string()
        .matches(/^[A-Z]{1}[0-9]{5}[A-Z]{2}[0-9]{4}[A-Z]{3}[0-9]{6}$/, `Invalid ${fieldName}`)
        .transform((value) => {
            if (value !== null && value !== undefined) {
                return value.trim();
            }
            return value;
        });
};

export const optionalRegNoValidation = (fieldName: string) => {
    return Yup.string()
        // .matches(/^[A-Za-z][0-9]$/, `Invalid ${fieldName}`)
        .transform((value) => {
            if (value !== null && value !== undefined) {
                return value.trim();
            }
            return value;
        });
};

export const optionalGSTINNoValidation = (fieldName: string) => {
    return Yup.string()
        .matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/i, `Invalid ${fieldName}`)
        .length(15, `${fieldName} must be 15 characters long`)
        .transform((value) => {
            if (value !== null && value !== undefined) {
                return value.trim();
            }
            return value;
        });
};

export const optionalMediumTextValidation = (fieldName: string) => {
    return Yup.string()
        .max(200, `${fieldName} must not exceed 100 characters`)
        .transform((value) => {
            if (value !== null && value !== undefined && typeof value === 'string') {
                return value.trim();
            }
            return value;
        });
};


