
import * as Yup from 'yup';

export const requiredUserNameValidation = (fieldName: string) => {
    return Yup.string()
    .required(`${fieldName} is required`)
    .min(3, `${fieldName} must be at least 3 characters`)
    .max(50, `${fieldName} must not exceed 50 characters`)
    .matches(
      /^[a-zA-Z0-9_]*$/,
      `${fieldName} Invalid`
    )
    .test('not-all-special-chars', `${fieldName} Invalid`, (value) =>
      !/^[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/.test(value)
    )
    .transform((originalValue, currentValue) => {
      // Remove white spaces from the original value
      const transformValue = originalValue.replace(/\s/g, '');
      return transformValue;
    });
};