import {IUsersResponse} from "../model/IUsersResponse.ts";

const apiUrl = import.meta.env.VITE_API_URL;

const getUser = async (page:string):Promise<IUsersResponse> => {
    const limit = 30;
        const skip = limit * (+page) - limit;
        return await fetch(apiUrl + '/users' + '?skip=' + skip)
            .then(usersResp => usersResp.json())
    };

export default getUser;