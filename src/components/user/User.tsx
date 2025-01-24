import {IUser} from "../../model/IUser.ts";
import {FC} from "react";

type UserTypeProp = {
    user: IUser,
};

const User: FC<UserTypeProp> = ({user}) => {
    return (
        <div className='my-5 font-bold border-2'>
            <p>{user.id} {user.firstName} {user.lastName} {user.maidenName}</p>
            <p>{user.birthDate} {user.address.address}</p>
        </div>
    );
}

export default User;