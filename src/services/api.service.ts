import {ITodo} from "../model/ITodo.ts";

const baseURL = import.meta.env.VITE_API_URL;

export const getUsers = async (): Promise<ITodo[]> => {
    return await fetch(baseURL)
        .then(value => value.json());
}