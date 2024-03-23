import React, { FocusEvent, KeyboardEvent, MutableRefObject, ChangeEvent } from 'react';

export interface CommonInputInterfaces {
    fieldName: string;
    value: any;
    labelName?: string,
    placeholder?: string;
    inputFieldRef?: MutableRefObject<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLDivElement | any | null>
    isDisabled?: boolean
    isReadOnly?: boolean
    isRequired?: boolean
    className?:any
    type?: any
}

export interface InputFieldInterfaces extends CommonInputInterfaces {
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleKeyDown?: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleOnBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleOnFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export interface InputTextFieldInterfaces extends InputFieldInterfaces {
    maxLength?: number,
    minLength?: number,
    rows?: number,
}

export interface SelectOptionInterfaces {
    value: string;
    label: string;
}
export interface HandleSelectChange {
    (fieldName: string): (selectedOption: any) => void;
}

export interface Serviceinfo {
    mid: string;
    GSTIN: string;
    PanNo: string;
}


export interface MultiSelectCheckboxInterfaces extends CommonInputInterfaces {
    handleOnChange: (selectedOption: any, fieldName: string) => void;
    handleOnBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleOnFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    options: SelectOptionInterfaces[];
    isMultiple?: boolean
    isSearchable?: boolean;
}

export interface SelectInputInterfaces extends CommonInputInterfaces {
    handleOnChange: HandleSelectChange;
    handleOnBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleOnFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    options: SelectOptionInterfaces[];
    isMultiple?: boolean
    isSearchable?: boolean;
}

export interface DateChangeHandler {
    (date: Date | null): void;
}
export interface DatePickerInterfaces {
    value: Date | null;
    fieldName: string;
    handleOnChange?: DateChangeHandler;
    handleKeyDown?: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleOnBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleOnFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    fieldRef: React.RefObject<any>
    isDisabled?: boolean
}

export interface InputRadioFieldInterfaces extends InputFieldInterfaces {
    fieldValue: number | string,
}
export interface STDCodeInputInterfaces extends SelectInputInterfaces {
    countryCode: number | string,
}

export interface InputCheckBoxFieldInterfaces extends CommonInputInterfaces {
    fieldValue: number | string,
    handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    handleOnFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    handleOnBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

export interface TabContentInterfaces {
    eventKey: string;
    tabLabel: string;
}




export interface Product {
    productname: any;
    subcategoryid: number;
    subcategoryname: string;
    image: string;
    productnewid: number;
    product: any;
    index: any;
    
}

export type NewProductList = Product[];

 export interface RequestServicePlanInterfaces {
    ProductSubCatgID: number | undefined;
    invoiceamount: string;
    invoicedate: string;
    Status: string;
    subcategoryid: string | undefined;
   

  }
  
  export interface ReducerStateInterfaces {
    data: any;
    loading: boolean;
    error: string | null;
  }
  export const initialState: ReducerStateInterfaces = {
    data: null,
    loading: false,
    error: null,
  };


  export interface CartItem {
    productName: string;
    brand: string;
    invoiceamount: number;
    Plan: string;
    Price: string;
}
export interface PurchaseServiceInterface {
    productId: string;
    productName: string;
    productSubCatgId: string;
    productCatgId : string;
    brand: string;
    IMEINo: string;
    serialno: string;
    invoicedate_productdetails: string;
    invoiceamount_productdetails: number ;
    invoiceno_productdetails: string;
    Price: string
    planName: string
    planid: string
    promoCode: string
    DiscountAmt: number,
    ActualProductPrice: string;
    qty: 1;
    PlanPrice: string
    InvoiceAmount: number,
    tds_amt: number,
    gst_amt: number,
    promoDiscount: number,
    
}
export interface MultiplePurchaseServiceInterface {
    mobile: string | number | readonly string[] | undefined;
    email: string | number | readonly string[] | undefined;
    mobileno: string;
    emailidaddress: string;
    ClientID: string;
    RetailerID: number;
    customername: string;
    addressline1: string;
    addressline2: string;
    addressline3: string;
    city: string;
    state: string;
    pincode: number | undefined;
    landlineno: string;
    alternateEmailId: string;
    useableAmountAccount: number;
    amountPayAccount: number;
    TotalAmountpay: number
    AmountPayBy: number;
    PayBy : string
    tdsAmount: number;
    gstAmount: number;
    discountAmount: number;
    services: PurchaseServiceInterface[]
}

export const initialPolicyPurchase: MultiplePurchaseServiceInterface = {
    mobileno: '',
    emailidaddress: '',
    ClientID: '',
    RetailerID: 0,
    customername: '',
    addressline1: '',
    addressline2: '',
    addressline3: '',
    city: '',
    state: '',
    pincode: undefined,
    landlineno: '',
    alternateEmailId: '',
    TotalAmountpay: 0,
    AmountPayBy: 0,
    PayBy: '',
    useableAmountAccount: 0,
    amountPayAccount: 0,
    tdsAmount: 0,
    gstAmount: 0,
    discountAmount: 0,
    services: [],
    mobile: undefined,
    email: undefined
}













export interface SelectComponentInterfaces {
    options: SelectOptionInterfaces[];
    value: any;
    onChange: () => void;
    name: string
    isMulti?: boolean;
    isSearchable?: boolean;
    placeholder?: string;
}

export interface MultiSelectWithCheckInterfaces {
    options: SelectOptionInterfaces[];
    selectedOptions: SelectOptionInterfaces[];
    onChange: (newValue: SelectOptionInterfaces[]) => void;
    name: string;
    isSearchable?: boolean;
    placeholder?: string;
}



