import {FC} from "react";
import {IUser} from "../../models/users-page-models/IUser.ts";


type IUserProp = {
    item: IUser
}

const User: FC<IUserProp> = ({item}) => {

    return (
        <div className='my-5 border-2'>
            <h3 className='font-bold text-3xl'>{item.firstName} {item.lastName} {item.maidenName}</h3>
        </div>
    );
};

export default User;