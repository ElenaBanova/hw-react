import {useEffect, useState} from "react";
import {ICar} from "../../models/ICar.ts";
import {getAllCars} from "../../api/Api.ts";


const UseCarList = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        getAllCars().then(res => setCars(res))
    }, [])
    return cars
};

export default UseCarList;