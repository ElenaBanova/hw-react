import {useEffect, useState} from "react";
import {IUser} from "../../models/users-page-models/IUser.ts";
import {getUsers} from "../../api/apiServices.ts";
import {BaseModelType} from "../../models/BaseModelType.ts";


export const useUsersList = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getUsers
            .then(({users}: BaseModelType) => {
                setUsers(users);
            });
    }, []);
    return {users}
}