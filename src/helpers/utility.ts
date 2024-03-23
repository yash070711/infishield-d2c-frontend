
import CryptoJS from 'crypto-js';
const secretKey = '4deaa2f878037f0185126d481ede331ed3de0a11d639b73f050b19d157a64125';
import { setCookie, getCookie } from 'cookies-next';

export const convertStringToTitleCase = async (str: string) => {
    return str.replace(/\w\S*/g, (word) => {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
};

export const encryptNumber = async (number: number) => {
    const encrypted = await CryptoJS.AES.encrypt(String(number), secretKey);
    return encrypted.toString();
}

export const decryptNumber = async (str: any) => {
    try {
        const bytes = await CryptoJS.AES.decrypt(str, secretKey);
        const decrypted = await bytes.toString(CryptoJS.enc.Utf8);
        return parseInt(decrypted);
    } catch (e) {
        return null;
    }
}

export const setCookieData = async (keyname: string, data: any, times: number, path: string) => {
    return await setCookie(keyname, data, {
        maxAge: times,
    });
}

export const getCookieData = async (keyname: string) => {
    return await getCookie(keyname);
}

export const amountFiltered = async (value: string) => {
    var regex = /[^0-9.]/g;
    var newValue = value.replace(/[^0-9.]/g, '');
    newValue = newValue.replace(regex, '');
    var splitValue = await newValue.split('.');
    if (splitValue.length > 1) {
        splitValue.splice(2);
    }
    if (splitValue[1] && splitValue[1].length > 2) {
        splitValue[1] = splitValue[1].substring(0, 2);
    }
    return await splitValue.join('.')
}

export const calculatePercentage = async (amount: number, percentage: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        if (percentage < 0 || percentage > 100) {
            reject(new Error('Percentage must be between 0 and 100'));
        } else {
            const result = (amount * percentage) / 100;
            resolve(result);
        }
    });
}
export const calculateTotalByProperty = async (data: any, propertyName: string): Promise<number> => {
    return Array.isArray(data)
        ? data.reduce((total, item) => {
            const propertyValue = parseFloat(item[propertyName]);
            return isNaN(propertyValue) ? total : total + propertyValue;
        }, 0)
        : 0;
}

export const splitFullName = (fullName: string) => {
    const parts = fullName.split(' ');
    if (parts.length >= 2) {
        const firstName = parts[0];
        const lastName = parts.slice(1).join(' ');
        return { firstName, lastName };
    } else {
        return { firstName: fullName, lastName: '' };
    }
}

export const transformedStringAlphaNumeric = (originalValue: string) => {
    var transformValue = originalValue.replace(/[^a-zA-Z0-9_@]/g, '')
    transformValue = transformValue.replace(/\s/g, "");
    return transformValue
}

export const transformedPassword = (originalValue: string) => {
    var transformValue = originalValue.replace(/\s/g, "");
    return transformValue
}

export const allowLettersNumbersInput = (originalValue: string) => {
    var transformValue = originalValue.replace(/[^a-zA-Z0-9]/g, '')
    transformValue = transformValue.replace(/\s/g, "");
    return transformValue
}
export const allowLettersNumbersHyphensUnderscores = (originalValue: string) => {
    var transformValue = originalValue.replace(/[^A-Za-z0-9\-_\/]/g, '');
    transformValue = transformValue.replace(/\s/g, '');
    return transformValue;
  };

export const allowOnlyMobileNumber = (originalValue: string) => {
    var transformValue = originalValue.replace(/d{10}/g, '')
    transformValue = transformValue.replace(/\D/g, '')
    transformValue = transformValue.replace(/\s/g, "");
    return transformValue
}
export const allowOnlyYearmonth = (originalValue: string) => {
    const digitsOnly = originalValue.replace(/[^\d]/g, '');
    const yearPart = digitsOnly.slice(0, 2);
    const monthPart = digitsOnly.length >= 4 ? '/' : '';
    const transformedValue = `${yearPart}${monthPart}${digitsOnly.slice(2, 4)}`;
    return transformedValue;
  };
export const allowOnlyEmailAddresses = (originalValue: string) => {
    var transformValue = originalValue.toLowerCase();
    transformValue = transformValue.replace(/[^A-Za-z0-9\-_.@]/g, '')
    transformValue = transformValue.replace(/\s/g, "");
    return transformValue
}

export const allowOnlyNameInput = async (originalValue: string) => {
    let transformValue = originalValue.replace(/[^a-zA-Z0-9 .]/g, '');
    transformValue = transformValue.replace(/\s+/g, ' ');
    transformValue = transformValue.toLowerCase();
    //transformValue = transformValue.replace(/^(.)/, (match) => match.toUpperCase()); // Capitalize the first character
    transformValue = transformValue.replace(/\w\S*/g, (word) => {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
    return transformValue;
}

export const allowOnlyAddressInput = async (originalValue: string) => {
    let transformValue = originalValue.replace(/[^A-Za-z0-9\-_ .@$&\/#]/g, '')
    transformValue = transformValue.replace(/\s+/g, ' ');
    return transformValue;
}

export const allowOnlyPincode = (originalValue: string) => {
    var transformValue = originalValue.replace(/d{6}/g, '')
    transformValue = transformValue.replace(/\D/g, '')
    transformValue = transformValue.replace(/\s/g, "");
    return transformValue
}

export const formatDateTOString = (originalDate: Date | string) => {
    const date = new Date(originalDate)
    const day = date.getDate().toString().padStart(2, '0'); // Add leading zero if needed
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export const displayDateFormat = (originalDate: any) => {
    const date = new Date(originalDate)
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    if (day && month && year) {
        return `${day}/${month}/${year}`;
    } else {
        return originalDate;
    }
}

export const  daysToAddInDate = (date : string, daysToAdd: number) => {
    var currentDate = new Date();
    if(date){
        const [dayDate, monthDate, yearDate] = date.split('/');
        currentDate = new Date(`${yearDate}-${monthDate}-${dayDate}`);
    }
    currentDate.setDate(currentDate.getDate() + daysToAdd);
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(month).padStart(2, '0');
    return `${formattedDay}/${formattedMonth}/${year}`;
}


export function debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | undefined;

    return function (...args: Parameters<T>) {
        clearTimeout(timeout!);
        timeout = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

export function getPeriodDates(title: string) {
    const currentDate = new Date();
    var startDate = new Date(currentDate);
    var endDate = new Date(currentDate);
    switch (title) {
        case 'Today Sales':
            startDate.setHours(0, 0, 0, 0);
            endDate.setHours(23, 59, 59, 999);
            break;
        case 'Monthly Sales':
            startDate.setDate(1);
            const nextMonth = new Date(currentDate);
            nextMonth.setMonth(nextMonth.getMonth() + 1);
            endDate = new Date(nextMonth)
            break;
        case 'Quartly Sales':
            startDate.setMonth(Math.floor(currentDate.getMonth() / 3) * 3);
            startDate = new Date(startDate);
            endDate.setMonth(endDate.getMonth() + 3);
            endDate = new Date(endDate);
            break;
        case 'Yearly Sales':
            const currentYear = currentDate.getFullYear();
            startDate = new Date(currentYear, 3, 1);
            const nextFiscalYear = new Date(startDate);
            nextFiscalYear.setFullYear(nextFiscalYear.getFullYear() + 1);
            endDate = new Date(nextFiscalYear);
            break;
        default:
            startDate = new Date(2015, 3, 1);
            endDate = new Date(endDate);
            break;
    }
    return { startDate, endDate };
}

export function removeDecimalIfZero(value: any) {
    if (Number.isInteger(value)) {
        return value.toString();
    } else {

        return parseFloat(value).toFixed(2).replace(/\.0*$/, '');
    }
}

