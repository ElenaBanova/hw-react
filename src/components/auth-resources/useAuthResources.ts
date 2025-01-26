import {useEffect, useState} from "react";
import {loadAuthProducts, refresh} from "../../api/api.ts";
import {IProduct} from "../../models/IProduct.ts";


const useAuthResources = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        loadAuthProducts().then((products) => {console.log(products); setProducts(products)}).catch(reason => {
            console.log(reason);
            refresh().then(() => loadAuthProducts()).then((value) => {console.log(value); setProducts(value)})
        })
    }, [])
    return products
};

export default useAuthResources;