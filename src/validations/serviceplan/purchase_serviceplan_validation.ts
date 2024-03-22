import * as Yup from 'yup';
import { optionalLettersNumberValidation, optionalTextValidation, requiredInvoiceNoValidation, requiredTextValidation } from '../fields/text_validation';
import { optionalDateValidation, requiredDateValidation } from '../fields/date_validation';
import { optionalIMEIValidation, optionalSerialNoValidation } from '../fields/imei_serialno_validation';
import { mobileOptionalValidation, requiredMobileValidation } from '../fields/mobile_validation';
import { optionalAmountValidation, optionalNumberStringValidation, requiredAmountValidation, requiredNumberStringValidation, requiredSixDigitsValidation } from '../fields/number_validation';
import { optionalTextAreaValidation, requiredTextAreaValidation } from '../fields/textarea_validation';
import { requiredEmailValidation } from '../fields/email_validation';

export const PurchaseServicePlanSchema = Yup.object().shape({
    productId: requiredNumberStringValidation('Product'),
    productSubCatgId: requiredNumberStringValidation('Subcategory'),
    productCatgId: optionalNumberStringValidation('Category'),
    brand: requiredTextValidation('Brand'),
    serialno: optionalSerialNoValidation('Serial No'),
    IMEINo: optionalIMEIValidation('IMEINo'),
    invoicedate_productdetails: requiredDateValidation('Purchase Date'),
    invoiceamount_productdetails: requiredAmountValidation('Purchase Price'),
    invoiceno_productdetails: requiredInvoiceNoValidation('Purchase Invoice'),
    planid: requiredNumberStringValidation('Plan'),
    planName: optionalTextValidation('Plan Name'),
    Price: optionalAmountValidation('Price'),
    DiscountAmt: optionalAmountValidation('Discount'),
    promoDiscount: optionalAmountValidation('Discount'),
    promoCode: optionalLettersNumberValidation('Promo Code'),
    ActualProductPrice: optionalAmountValidation('Product Price'),
    InvoiceAmount: requiredAmountValidation('Amount'),
    PlanPrice: optionalAmountValidation('Price'),
    tds_amt: optionalAmountValidation('TDS'),
    gst_amt: optionalAmountValidation('GST'),
    manufacturewarrantystartdate : optionalDateValidation('Manufacture Warranty Start Date'),
    manufacturewarrantyenddate : optionalDateValidation('Manufacture Warranty End Date'),
    extendedwarrantystartdate : optionalDateValidation('Extended Warranty Start Date'),
    extendedwarrantyenddate : optionalDateValidation('Extended Warranty End Date'),
    adpstartdate : optionalDateValidation('ADP Start Date'),
    adpenddate : optionalDateValidation('ADP End Date')
});

export const multipleServicePlanSchema = Yup.object().shape({
    mobileno: requiredMobileValidation('mobile'),
    emailidaddress: requiredEmailValidation('Email'),
  
    services: Yup.array().of(PurchaseServicePlanSchema)
})
