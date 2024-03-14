import { NextApiResponse } from "next";
import { get, post, put, del } from "./instance"

export const getProductSubcategoryList = async (): Promise<any> => {
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
 

 
 