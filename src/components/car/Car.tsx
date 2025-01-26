import {FC} from "react";
import {ICar} from "../../models/ICar.ts";


type CarProp = {
    car: ICar;
};

const Car: FC<CarProp> = (({car}) => {
    return (
        <div className='my-5'>
            {car.id} {car.brand} {car.price} {car.year}
        </div>
    )
});

export default Car;