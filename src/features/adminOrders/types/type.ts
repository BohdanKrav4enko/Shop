export interface OrderType {
    id: string;
    name: string;
    email: string;
    phone: string;
    total: number;
    products: {
        id: number;
        title: string;
        price: number;
        quantity: number;
    }[];
    status: string;
    createdAt: Date;
}