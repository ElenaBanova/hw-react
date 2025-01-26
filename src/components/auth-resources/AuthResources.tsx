import useAuthResources from "./useAuthResources.ts";
import Product from "./products/Product.tsx";


const AuthResources = () => {
    const products = useAuthResources()

    return (
        <div>
            {
                products.map(product =><Product key={product.id} product={product}/>)
            }
        </div>
    );
};

export default AuthResources;