import Cart from "../Cart.tsx";
import useCartList from "./useCartList.ts";


const CartList = () => {
    const {carts} = useCartList()

    return (
        <div>
            {
                carts.map((cart) => <Cart key={cart.id} item={cart} products={cart.products}/>)
            }
        </div>
    );
};

export default CartList;