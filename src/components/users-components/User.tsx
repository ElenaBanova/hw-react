import {FC} from "react";
import {IUser} from "../../models/IUsers.ts";
import {useNavigate} from "react-router";


type IProps = {
    item: IUser
}

const User: FC<IProps> = ({item}) => {
    const navigate = useNavigate();
    const onButtonClickNavigate = () => {
        navigate('/users/' + item.id + '/carts')
    }

    return (
        <div>
            <div>{item.firstName} {item.lastName}</div>
            <button onClick={onButtonClickNavigate}>click me</button>
        </div>

    );
};

export default User;