import { NextApiResponse } from "next";
import { get, post, put, del } from "./instance"

export const getProductSubcategoryList = async (): Promise<any> => {
    return await get('product/subcategorylist')
};
