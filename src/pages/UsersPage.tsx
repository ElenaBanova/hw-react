import UsersList from "../components/users-components/user-list/UsersList.tsx";
import {Outlet} from "react-router";


const UsersPage = () => {
    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            <UsersList/>
        </div>
    );
};

export default UsersPage;