import {createBrowserRouter} from "react-router";
import MainLayout from "../layout/MainLayout.tsx";
import PaginationLayout from "../layout/PaginationLayout.tsx";
import UserPage from "../pages/UserPage.tsx";

export const routers = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children:[{
        path: '', element: <PaginationLayout/>, children:[{
                path: 'users', element: <UserPage/>
            }]
    }]}])

