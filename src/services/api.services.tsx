import {ITodosResponse} from "../models/ITodosResponse.ts";

const baseURL = import.meta.env.VITE_API_URL;

export const getTodoComponents = async (): Promise<ITodosResponse> => {

    return await fetch(baseURL)
        .then(value => value.json())

};

export default getTodoComponents;