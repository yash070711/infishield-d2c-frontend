// import { forbiddenEmails } from '@/constants/application';
// import * as Yup from 'yup';

// export const requiredEmailValidation = (fieldName: string) => {
//     var blockEmail 
//     if(typeof window !== 'undefined') {
//         const blockData = sessionStorage.getItem('blockEmail')
//         blockEmail = (blockData && blockData != undefined) ? JSON.parse(blockData) : []
//     }
    
//     return Yup.string()
//         .required(`${fieldName} is required`)
//         .email(`Invalid ${fieldName}`)
//         .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, `Invalid ${fieldName}`)
//         .trim()
//         // .min(5, `${fieldName} must be at least 5 characters`)
//         .max(100, `${fieldName} must not exceed 100 characters`)
//         .transform((value) => {
//             if (value !== null && value !== undefined) {
//                 return value.trim();
//             }
//             return value;
//         })
//         //.notOneOf(forbiddenEmails, `${fieldName} is not allowed`);
//         .notOneOf((Array.isArray(blockEmail) && blockEmail?.length) ? blockEmail : forbiddenEmails, `${fieldName} is not allowed`)
        
// };

// export const emailOptionalValidation = (fieldName: string) => {
//     return Yup.string()
//         .email(`Invalid ${fieldName}`)
//         .trim()
//         .min(5, `${fieldName} must be at least 5 characters`)
//         .max(100, `${fieldName} must not exceed 100 characters`)
//         .transform((value) => {
//             if (value !== null && value !== undefined) {
//                 return value.trim();
//             }
//             return value;
//         })
//         .notOneOf(forbiddenEmails, `${fieldName} is not allowed`);
// };
