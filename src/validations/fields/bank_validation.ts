
import * as Yup from 'yup';

export const requiredBankNameValidation = (fieldName: string) => {
  return Yup.string()
    .required('Input is required')
    .matches(/^[a-zA-Z& ]+$/, 'Input must consist of alphabetic characters, "&", and spaces')
    .matches(/^.{5,50}$/, 'Input must be between 5 and 50 characters')
    .transform((value) => value && value.charAt(0).toUpperCase() + value.slice(1));
};

export const requiredBankIFSCValidation = (fieldName: string) => {
  return Yup.string()
    .required('Input is required')
    .matches(/^[A-Za-z0-9]+$/, 'Input must consist only of alphanumeric characters')
    .matches(/^[A-Z0-9]+$/, 'Input must consist only of capital letters and digits')
    .test('no-special-characters', 'Input must not contain special characters', (value) => {
      return /^[A-Za-z0-9]+$/.test(value);
    })
    .test('no-spaces', 'Input must not contain spaces', (value: string) => {
      return !value || (value.length === 11 && !/\s/.test(value));
    })
    .transform((value) => value && value.toUpperCase());
}




export const requiredBankAccountNoValidation = (fieldName: string) => {
    return Yup.string()
    .required('Input is required')
    .matches(/^[0-9]{9,16}$/, 'Input must consist of 11 to 16 digits (0-9)') 
    .test('no-alphanumeric-special-chars', 'Input must not contain alphabetic or special characters', (value) => {
      return /^[0-9]*$/.test(value);
    })
    .matches(/^[\S]*$/, 'Input must not contain spaces')
}

export const requiredBankTextAreaValidation = (fieldName: string) => {
  return Yup.string()
      .required(`${fieldName} is required`)
      .test('has-alphabetical-character', `${fieldName} must contain characters`,
          (value) => {
              // Allow alphabetic characters and commas
              return /[a-zA-Z,]/.test(value);
          }
      );
};


