import {Outlet} from "react-router";
import Menu from "../components/menu/Menu.tsx";


const MainLayouts = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    );
};

export default MainLayouts;