import {IProducts} from "./IProducts.ts";

export interface ICartsResponse {
    carts: ICarts[];
    total: number;
    skip: number;
    limit: number;
}

export interface ICarts {
    id: number;
    products: IProducts[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}