import {apiUrl} from "../api-constants/apiConstant.ts";
import {BaseModelType} from "../models/BaseModelType.ts";


// export const getList = async () => {
//    return fetch(`${apiUrl}/users`)
//         .then(value => value.json());
//
// }
//
// export const getList = async () => {
//    return fetch(apiUrl + '/posts')
//         .then(value => value.json());
// }

export const getAll = async <T, >(endpoint: string): Promise<T> => {
    return await fetch(`${apiUrl}${endpoint}`)
        .then(value => value.json());
}

export const getUsers = getAll<BaseModelType>('/users');
export const getPosts = getAll<BaseModelType>('/posts');
