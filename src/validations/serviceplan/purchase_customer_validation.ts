import * as Yup from 'yup';
import { optionalLettersNumberValidation, requiredInvoiceNoValidation, requiredTextValidation } from '../fields/text_validation';
import { requiredDateValidation } from '../fields/date_validation';
import { optionalIMEIValidation, optionalSerialNoValidation } from '../fields/imei_serialno_validation';
import { mobileOptionalValidation, requiredMobileValidation } from '../fields/mobile_validation';
import { emailOptionalValidation, requiredEmailValidation } from '../fields/email_validation';
import { optionalAmountValidation, requiredAmountValidation, requiredNumberStringValidation, requiredSixDigitsValidation } from '../fields/number_validation';
import { PurchaseServicePlanSchema } from './purchase_serviceplan_validation';
import { optionalTextAreaValidation, requiredTextAreaValidation } from '../fields/textarea_validation';

export const PurchaseCustomerValidationSchema = Yup.object().shape({
    customername: requiredTextValidation('Name'),
    addressline1: requiredTextAreaValidation('Address'),
    addressline2: requiredTextAreaValidation('Address'),
    addressline3: optionalTextAreaValidation('Landmark'),
    city: requiredTextValidation('City'),
    state: requiredTextValidation('State'),
    pincode: requiredSixDigitsValidation('Pincode'),
    mobileno: requiredMobileValidation('Mobile'),
    landlineno: mobileOptionalValidation('Alternative Phone'),
    emailidaddress: requiredEmailValidation('Email'),
    alternateEmailId : emailOptionalValidation('Alternative Email'),
    // ClientID: requiredNumberStringValidation('Client'),
    // InvoiceAmount: requiredAmountValidation('Amount'),
    // PlanPrice: requiredAmountValidation('Price'),
    // RetailerID: requiredNumberStringValidation('Retailer'),
    // tds_amt: optionalAmountValidation('TDS'),
    // gst_amt: optionalAmountValidation('GST'),
    TotalAmountpay: requiredAmountValidation('Total'),
    // DiscountAmt: optionalAmountValidation('Discount'),
    AmountPayBy: optionalAmountValidation('Payment'),
    PayBy: requiredTextValidation('Payment Type'),
    useableAmountAccount: optionalAmountValidation('Wallet Amount'),
    amountPayAccount: requiredAmountValidation('Pay Account'),
    // cartItems : Yup.array()
    // .of(PurchaseServicePlanSchema)
    // .min(1, "At least one user is required")
});