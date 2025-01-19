import User from "./User.tsx";
import {useUsersList} from "./useUsersList.ts";


const UsersList = () => {
    const {users} = useUsersList()

    return (
        <div>
            {
                users.map(user => <User key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersList;