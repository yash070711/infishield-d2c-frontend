import * as Yup from 'yup';
import { optionalTextValidation, requiredTextValidation } from '../fields/text_validation';
import { requiredMobileValidation } from '../fields/mobile_validation';
import { requiredEmailValidation } from '../fields/email_validation';
import { requiredNumberStringValidation, requiredSixDigitsValidation } from '../fields/number_validation';
import { optionalTextAreaValidation, requiredTextAreaValidation } from '../fields/textarea_validation';
import { requiredBankAccountNoValidation, requiredBankIFSCValidation, requiredBankNameValidation } from '../fields/bank_validation';

export const contactPersonsSchema = Yup.object().shape({
    fullname: requiredTextValidation('Name'),
    mobileno: requiredMobileValidation('Mobile No.'),
    emailid: requiredEmailValidation('Email'),
    designation:optionalTextValidation('Designation'),
    department:optionalTextValidation('Department'),
    landlineno:optionalTextValidation('LandLine No'),
});

export const branchContactPersonsSchema = Yup.object().shape({
    branchid: requiredNumberStringValidation('Retailer'),
    contactpersons: Yup.array().of(contactPersonsSchema)
})


export const retailerAddressSchema = Yup.object().shape({
    branchid: requiredNumberStringValidation('Retailer'),
    addressline1: requiredTextAreaValidation('Address'),
    addressline2: requiredTextAreaValidation('Address'),
    addressline3: optionalTextAreaValidation('Landmark'),
    city: requiredTextValidation('City'),
    state: requiredTextValidation('State'),
    pincode: requiredSixDigitsValidation('Pincode'),
})

export const retailerBankSchema = Yup.object().shape({
    branchid: requiredNumberStringValidation('Retailer'),
    bankname: requiredBankNameValidation('bankname'),
    accountholdername: requiredTextValidation('AccountHolderName'),
    bankacoountno: requiredBankAccountNoValidation('BankNo'),
    bankaddressline1: requiredTextAreaValidation('BankAddress'),
    ifsccode: requiredBankIFSCValidation('IFSC'),
})
