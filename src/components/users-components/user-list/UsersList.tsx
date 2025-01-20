import User from "../User.tsx";
import UseUsersList from "./useUsersList.ts";


const UsersList = () => {
    const users = UseUsersList()

    return (
        <div>
            {
                users.map(user => <User key={user.id} item={user}/>)
            }

        </div>
    );
};

export default UsersList;