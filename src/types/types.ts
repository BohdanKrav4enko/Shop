export interface Category {
    id: number;
    name: string;
    image: string;
    slug: string;
}
export interface Product {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: Category;
    images: string[];
}
export interface ProductCreateDto {
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: string[];
}
export type OrderProduct = {
    id: number;
    title: string;
    price: number;
    quantity: number;
};

export type Order = {
    name: string;
    email: string;
    phone: string;
    products: OrderProduct[];
    total: number;
    date: string;
};
export interface Profile {
    name: string;
    surname: string;
    email: string;
    phone: string;
    isAdmin: boolean;
}