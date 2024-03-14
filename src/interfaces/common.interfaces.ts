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




  interface Product {
    map(arg0: (product: any, index: number) => React.JSX.Element): React.ReactNode;
    subcategoryid: number;
    subcategoryname: string;
    image: string;
    productnewid: number;
    product: any;
    index :any;
  
  }
  
  type NewProductList = Product[];




















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



