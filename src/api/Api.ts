import axios from "axios";
import {ICar} from "../models/ICar.ts";


const baseURL = import.meta.env.VITE_API_URL;


const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {"Content-Type": 'application/json'}
});


export const getAllCars = async (): Promise<ICar[]> => {
    const {data} = await axiosInstance.get<ICar[]>('/cars');
    return data
}

export const addCar = async (car: ICar) => {
    await axiosInstance.post<ICar>('/cars', car)
}




