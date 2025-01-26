import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import AuthResourcesPage from "../pages/AuthResourcesPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children:[
            {index:true, element: <HomePage/>},
            {path:'login',element:<LoginPage/>}, // ссылка на страницу логинации
            {path: 'auth/resources', element:<AuthResourcesPage/>}, //страница утентификации пользователя
        ]}
])