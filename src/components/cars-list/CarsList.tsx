import Car from "../car/Car.tsx";
import UseCarList from "./useCarList.ts";


const CarsList = () => {
    const cars = UseCarList()
    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export default CarsList;