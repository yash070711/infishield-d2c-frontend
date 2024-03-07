import * as Yup from 'yup';
import { requiredTextValidation } from '../fields/text_validation';
import { requiredMobileValidation } from '../fields/mobile_validation';

export const multyFactorValidationSchema = Yup.object().shape({
    mobile: requiredMobileValidation('Mobile No.'),
    otp:requiredTextValidation('Otp'),
});