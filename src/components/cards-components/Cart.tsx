import {FC} from "react";
import {ICarts} from "../../models/ICarts.ts";
import {IProducts} from "../../models/IProducts.ts";
import Product from "./Product.tsx";


type CartPropType = {
    item: ICarts,
    products: IProducts[]
}

const Cart: FC<CartPropType> = ({item, products}) => {
    return (
        <div>
            <h3 className='text-2xl'>{item.totalProducts} {item.id}</h3>
            {products.map(product => <Product key={product.id} product={product}/>)}
        </div>
    );
};


export default Cart;