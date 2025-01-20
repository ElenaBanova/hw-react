
import {IProducts} from "../../models/IProducts.ts";
import {FC} from "react";

type ProductPropType = {
    product: IProducts
}
const Product:FC<ProductPropType> = ({product}) => {
    return (
        <div>
            <div className='my-5'>
                <p className='text-2xl font-bold'>{product.title}</p>
                <p>{product.price}</p>
            </div>
        </div>
    );
};

export default Product;