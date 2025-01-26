import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProducts} from "../models/IProducts.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

type LoginData = {
    username: string,
    password: string,
    expiresInMins: number,
}

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}//то что возвращает юрл, если пусто, возвращает все компоненты что в него входят
});


//перехоплення всі гетові запити
axiosInstance.interceptors.request.use((reqObj) => {
    if (reqObj.method?.toUpperCase() === 'GET') { //перевод к большим буквам toUpperCase, реагирует только на гетовые запросы
        reqObj.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return reqObj
})

export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
        const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {
            username,
            password,
            expiresInMins
        });//стринг путь, дальше указано что именно мы будем передавать
        //переназвали data
        //посмотреть в документации какой правильный путь для внесения логина
        //усі запити аутентифікації є постовими!!!
        console.log(userWithTokens);
        localStorage.setItem('user', JSON.stringify(userWithTokens));
        return userWithTokens;
    }
;


export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data: {products}} = await axiosInstance.get<IProducts>('/products');
    return products
}

//если прошло время и токин не действителен. информацию доп получать из документаии о юрл

export const refresh = async () => {
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh',
        {
            refreshToken: iUserWithTokens.refreshToken,
            expiresInMin: 1
        })
    iUserWithTokens.accessToken = accessToken; //заменяем на новые в памяти
    iUserWithTokens.refreshToken = refreshToken; //заменяем на новые в памяти
    localStorage.setItem('user', JSON.stringify(iUserWithTokens))
}