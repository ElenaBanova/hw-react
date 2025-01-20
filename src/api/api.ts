import {IUserResponse} from "../models/IUserResponse.ts";
import {ICartsResponse} from "../models/ICarts.ts";

export const apiUrl = import.meta.env.VITE_API_URL;

const getAll = async (endUrl: string): Promise<IUserResponse> => {
    return await fetch(`${apiUrl}${endUrl}`)
        .then(value => value.json())
};

export const getUsers = getAll('/users');

export const getCarts = async (userId: string): Promise<ICartsResponse> => {
    return await fetch(`${apiUrl}/carts/user/` + userId)
        .then(value => value.json())
}
