import Menu from "../components/menu/Menu.tsx";
import {Outlet} from "react-router";


const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;