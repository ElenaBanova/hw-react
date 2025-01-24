import {Outlet} from "react-router";
import Pagination from "../components/pagination/Pagination.tsx";


const PaginationLayout = () => {
    return (
        <div>
            <Outlet/>
            <Pagination/>
        </div>
    );
};

export default PaginationLayout;