
import CryptoJS, { enc, SHA256, AES } from 'crypto-js';
const secretKey = '4deaa2f878037f0185126d481ede331ed3de0a11d639b73f050b19d157a64125';

export const convertStringToTitleCase = async (str: string): Promise<string> => {
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
        const bytes = CryptoJS.AES.decrypt(str, secretKey);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
        return parseInt(decrypted);
    } catch (e) {
        console.log('error', e);

        return null;
    }
}

export const numberToHex = (numValue: number) => {
    const encryptedData = AES.encrypt(numValue.toString(), secretKey).toString();
    const base64Data = btoa(encryptedData);
    return base64Data;
};

export const stringToNumber = (inputValue: string) => {
    const sanitizedInput = inputValue.replace(/-/g, '+').replace(/_/g, '/');
    
    try {
        const decryptedData = atob(sanitizedInput);
        const decryptedBytes = AES.decrypt(decryptedData, secretKey);
        const decryptedNumber = parseInt(decryptedBytes.toString(enc.Utf8), 10);
        return decryptedNumber;
    } catch (error) {
        console.error("Error decoding the input:", error);
        return null; 
    }
};

export const allowOnlyMobileNumber = (originalValue: string) => {
    var transformValue = originalValue.replace(/d{10}/g, '')
    transformValue = transformValue.replace(/\D/g, '')
    transformValue = transformValue.replace(/\s/g, "");
    return transformValue
}
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
    transformValue = transformValue.replace(/\w\S*/g, (word) => {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
    return transformValue;
}

export const uppercaseTransformedString = (originalValue: string) => {
    var transformedValue = originalValue.replace(/\s/g, '');
    transformedValue = transformedValue.replace(/[^a-zA-Z0-9]/g, '');
    return transformedValue.toUpperCase();
}

export const keepAlphanumericString = (originalValue: string) => {
    var transformedValue = originalValue.replace(/\s/g, '');
    transformedValue = transformedValue.replace(/[^a-zA-Z0-9]/g, '');
    return transformedValue;
}

export const keepAlphaInString = async (originalValue: string) => {
    let transformValue = originalValue.replace(/[^a-zA-Z0-9 .]/g, '');
    transformValue = transformValue.replace(/\s+/g, ' ');
    return transformValue;
}

export const allowOnlyTextInput = async (originalValue: string) => {
    let transformValue = originalValue.replace(/[^a-zA-Z0-9 .]/g, '');
    transformValue = transformValue.replace(/\s+/g, ' ');
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

export const transformedPassword = (originalValue: string) => {
    return originalValue
}
export const transformedStringAlphaNumeric = (originalValue: string) => {
    return originalValue
}

export const stringArrayToSelectOptions = async (iArray: []) => {
    const data = iArray.map(item => ({
        value: item,
        label: item,
    }));
    const filteredData = await filterUniqueValues(data);
    return filteredData;
}

export const transformedDropdownArray = async (iArray: [], value: string, label: string) => {
    const data = iArray.map(item => ({
        value: item[value],
        label: item[label],
    }));
    const filteredData = await filterUniqueValues(data);
    return filteredData;
}

export const filterUniqueValues = async (data: any[]) => {
    return new Promise<any[]>((resolve) => {
        const uniqueDataWithValueZero = data.filter((item, index, array) => {
            return array.findIndex((i) => i.value == item.value) == index;
        });
        resolve(uniqueDataWithValueZero);
    });
};

export const filterUniqueDropdownArray = (data: any[], value: string, label: string) => {
    const uniqueDataWithValueZero = data.filter((item, index, array) => {
        return array.findIndex((i) => i[value] === item[value]) === index;
    });
    return uniqueDataWithValueZero.map((item) => ({
        value: item[value],
        label: item[label],
    })).sort((a, b) => a.label.localeCompare(b.label));;
};

export const debounce = (func: Function, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

export const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
