interface CategoryModel {
    _id: string;
    title: string;
}

export interface ProductModel {
    _id: string;
    title: string;
    image: string;
    description: string;
    price: number;
    quantity: number;
    _catId: CategoryModel;
}