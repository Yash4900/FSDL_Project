import { ProductModel } from './product.model';

export interface CartModel {
    total: number;
    data: [
        {
            product: ProductModel,
            numInCart: number
        }
    ];
} 