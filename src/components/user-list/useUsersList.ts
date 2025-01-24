import {useEffect, useState} from "react";
import {IUser} from "../../model/IUser.ts";
import {IUsersResponse} from "../../model/IUsersResponse.ts";
import getUser from "../../api/api.ts";
import {useSearchParams} from "react-router";

const UseUsersList = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getUser(currentPage)
            .then(({users}: IUsersResponse) =>
                setUsers(users))
    }, [searchParams])

    return users

};

export default UseUsersList;