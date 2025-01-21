import {useEffect, useState} from "react";
import {ICarts, ICartsResponse} from "../../../models/ICarts.ts";
import {getCarts} from "../../../api/api.ts";
import {useParams} from "react-router";
import {MainLayout} from "../../../layouts/MainLayout.tsx";

const useCartList = () => {
    const {id} = useParams()
    const [carts, setCarts] = useState<ICarts[]>([])
    useEffect(() => {
        if (id) {
            getCarts(id)
                .then(({carts}: ICartsResponse) => {
                    setCarts(carts);
                });
        } else MainLayout()
    }, [id]);
    return carts
}

export default useCartList

