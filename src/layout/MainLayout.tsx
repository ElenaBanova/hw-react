import {Link, Outlet} from "react-router";


const MainLayout = () => {
    return (
        <div>
            <Link to={'/users'}>Users List</Link>
            <Outlet/>
        </div>
    );
};

export default MainLayout;