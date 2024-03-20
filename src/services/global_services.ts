import { NextApiResponse } from "next";
import { get, post, put, del } from "./instance"

export const getProductSubcategoryList = async (searchTerm: string): Promise<any> => {
    return await get('product/subcategorylist')
};

export const subscribeNewsletter = async (email: string): Promise<any> => {
    return await post('subscribe-newsletter', {
        email
    });
}
export const getAllnewproductcategory = async (): Promise<any> => {
    return await get('/product/newproductlist');
};

export const getAllbrandlist = async (): Promise<any> => {
    return await get('/product/brandlist');
};
 
export const getSubcategoryByProducts = async (subcategoryid : any): Promise<any> => {
    return await get(`product/subcategorybyproducts/${subcategoryid}`);
};

export const getBrandsByProducts = async (subCatgID : any): Promise<any> => {
    return await get(`product/brandsbyproducts/${subCatgID}`);
};
 
export const getServicePlanOptions = async (iData: any): Promise<any> => {
    return await post('/policy/service-plan-options',iData);
}