import * as Yup from 'yup';

export const requiredDateValidation = (fieldName: string) => {
    return Yup.string()
        .required(`${fieldName} is required`)
        .transform((value, originalValue) => {
            if (originalValue && typeof originalValue === 'string') {
                return originalValue.trim();
            }
            return value;
        });
}

export const optionalDateValidation = (fieldName: string) => {
    return Yup.string()
        .transform((value, originalValue) => {
            if (originalValue && typeof originalValue === 'string') {
                return originalValue.trim();
            }
            return value;
        });
}