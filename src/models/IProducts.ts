import {IProduct} from "./IProduct.ts";

export interface IProducts {
	products: IProduct[];
	total: number;
	skip: number;
	limit: number;
}
