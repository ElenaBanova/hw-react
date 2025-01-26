import {FC} from "react";
import {IProduct} from "../../../models/IProduct.ts";


type ProductPropsType = {
    product: IProduct
};

const Product:FC<ProductPropsType> = (({product})=> {

    return (
        <div className='my-5 border-2'>
            <h3 className='text-2xl font-bold'>{product.id} {product.title}</h3>
            <p>{product.description}</p>
            <p>{product.category}</p>
        </div>
    );
})

export default Product;