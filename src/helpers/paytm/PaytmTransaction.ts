import axios from 'axios';
import PaytmChecksum from './PaytmChecksum';
const paytmMerchantKey = "Xv#3x9vZ%cawdcD1"
const paytmMerchantID = "InfinA73791511910258"
const paytmWebsiteName = "InfinAWEB"
const paytmCustId = "250"
interface PaymentData {
    orderId: string;
    amount: string;
    mobile: string;
    email: string;
    firstName: string;
    lastName: string;
}

export const createPaytmOrderID = () => {
    return "INFY_" + Date.now()
}

export const createPaymentData = (data: PaymentData) => {
    return {
        requestType: 'NATIVE',
        mid: paytmMerchantID,
        orderId: data.orderId,
        callbackUrl: 'http://localhost:3000/payment/callback',
        websiteName: paytmWebsiteName,
        txnAmount: { value: data.amount, currency: 'INR' },
        userInfo: {
            custId: paytmCustId,
            mobile: data.mobile,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
        },
        paymentMode : "BALANCE", 
    };
}
export const createQRPaymentData = (data: PaymentData) => {
    return {
        mid  : paytmMerchantID,
        merchantOrderId : data.orderId,
        amount  : data.amount,
        posId   : "S1234_P1235",
        userPhoneNo : "7777777777"
    };
}

export const createPaymentProcessData = (data: any) => {
    return {
        requestType: 'NATIVE',
        mid: paytmMerchantID,
        orderId: data.orderId,
        paymentMode: "BALANCE",
    };
}

export const generatePaytmSignature = (data: any): Promise<string> => {
    try {
        return PaytmChecksum.generateSignature(JSON.stringify(data), paytmMerchantKey);
    } catch (error) {
        throw error;
    }
}


export const initiatePaytmTransaction = async (data: any, checksum: string): Promise<string> => {
    try {
  
        const paytmParams = {
            body: data,
            head: {
                version: 'v1',
                channelId: 'WEB',
                requestTimestamp: new Date().getTime(),
                signature: checksum,
            }
        };
        const post_data = JSON.stringify(paytmParams);
        const response = await axios.post(
            `https://securegw.paytm.in/theia/api/v1/initiateTransaction?mid=${paytmMerchantID}&orderId=${data.orderId}`,
            post_data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length.toString(),
                },
            }
        );

        if(response && response.data && response.data.body){
            const { resultInfo, txnToken } = response.data.body
            if(resultInfo.resultStatus === 'S'){
                return Promise.resolve(txnToken);
            }
            else{
                return Promise.reject(resultInfo.resultMsg);
            }
        }
        return Promise.reject(response);
    } catch (error) {
        return Promise.reject(error);
    }
};

export const paytmOrderProcess = async (data: any, txnToken: string): Promise<string> => {
    try {
        const paytmParams = {
            body: data,
            head: {
                txnToken: txnToken,
            }
        };
        const post_data = JSON.stringify(paytmParams);
        const response = await axios.post(
            `https://securegw.paytm.in/theia/api/v1/processTransaction?mid=${paytmMerchantID}&orderId=${data.orderId}`,
            post_data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length.toString(),
                },
            }
        );

        return Promise.resolve(response.data);
    } catch (error) {
        return Promise.reject(error);
    }
};

export const processPaytmTransaction = async (data: any, txnToken: string): Promise<string> => {
    try {
        const paytmParams = {
            body: data,
            head: {
                txnToken: txnToken,
            }
        };
        const post_data = JSON.stringify(paytmParams);        
        const response = await axios.post(
            `https://securegw.paytm.in/theia/api/v1/processTransaction?mid=${paytmMerchantID}&orderId=${data.orderId}`,
            post_data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length.toString(),
                },
            }
        );
        return Promise.resolve(response.data);
    } catch (error) {
        return Promise.reject(error);
    }
};

export const paytmCreateQRCode = async (data: any, checksum: string): Promise<string> => {
    try {
        const paytmParams = {
            body: data,
            head: {
                clientId	: "C11",
                version: 'v1',
                signature: checksum,
            }
        };
        const post_data = JSON.stringify(paytmParams);
        const response = await axios.post(
            `https://secure.paytm.in/oltp-web/processTransaction`,
            post_data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length.toString(),
                },
            }
        );

        if(response && response.data && response.data.body){
            const { resultInfo, txnToken } = response.data.body
            if(resultInfo.resultStatus === 'S'){
                return Promise.resolve(txnToken);
            }
            else{
                return Promise.reject(resultInfo.resultMsg);
            }
        }
        return Promise.reject(response);
    } catch (error) {
        return Promise.reject(error);
    }
};

export const paytmSendPaymentRequest = async (data: any, checksum: string): Promise<string> => {
    try {
        const paytmParams = {
            body: data,
            head: {
                clientId	: "C11",
                version: 'v1',
                signature: checksum,
            }
        };
        const post_data = JSON.stringify(paytmParams);
        const response = await axios.post(
            `https://securegw.paytm.in/order/sendpaymentrequest`,
            post_data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length.toString(),
                },
            }
        );
        
        if(response && response.data && response.data.body){
            const { resultInfo, txnToken } = response.data.body
            if(resultInfo.resultStatus === 'S'){
                return Promise.resolve(txnToken);
            }
            else{
                return Promise.reject(resultInfo.resultMsg);
            }
        }
        return Promise.reject(response);
    } catch (error) {
        return Promise.reject(error);
    }
};