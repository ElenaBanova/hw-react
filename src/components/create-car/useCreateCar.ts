import {useForm} from "react-hook-form";
import {ICar} from "../../models/ICar.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validator/carValidator.ts";
import {addCar} from "../../api/Api.ts";


const UseCreateCar = () => {
    const {handleSubmit, register, formState: {errors}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });
    const createHandler = (data: ICar) => {
        addCar(data);
    }
    return {handleSubmit, register, createHandler, errors}
};

export default UseCreateCar;