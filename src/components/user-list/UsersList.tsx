
import User from "../user/User.tsx";
import UseUsersList from "./useUsersList.ts";


const UsersList = () => {
    const users = UseUsersList()
    return (
        <div>{
            users.map(user => <User key={user.id} user={user}/>)
        }
        </div>
    );
};

export default UsersList;