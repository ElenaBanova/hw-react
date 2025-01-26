import {createBrowserRouter} from "react-router";
import CarsListPage from "../pages/CarsListPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import CreateCarForm from "../components/create-car/CreateCarForm.tsx";


export const routers = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {path: 'createNewCar', element: <CreateCarForm/>},
        {path: 'cars', element: <CarsListPage/>}
    ]
}])