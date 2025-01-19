import {createBrowserRouter} from "react-router";
import MainLayouts from "../layouts/MainLayouts.tsx";
import UsersPage from "../pages/users-page/UsersPage.tsx";
import PostsPage from "../pages/posts-page/PostsPage.tsx";

export const routers = createBrowserRouter([
    {
        path: '/', element: <MainLayouts/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>}
        ]
    }
])