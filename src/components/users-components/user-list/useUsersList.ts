import {useEffect, useState} from "react";
import {IUser} from "../../../models/IUsers.ts";
import {IUserResponse} from "../../../models/IUserResponse.ts";
import {getUsers} from "../../../api/api.ts";


const UseUsersList = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getUsers
            .then(({users}: IUserResponse) => {
                setUsers(users)
            })
    }, []);
    return users
};

export default UseUsersList;