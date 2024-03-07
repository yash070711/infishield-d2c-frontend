import { LoginInterface } from "@/interfaces/AuthInterfaces";
import { get, post, put, del } from "./instance"

export const login = async (loginParams: LoginInterface): Promise<any> => {

    return await post('customer/login', {
        loginParams
    })
};
