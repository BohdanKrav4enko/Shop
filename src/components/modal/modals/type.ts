export interface ModalProps {
    onClose: () => void;
    id?: number;
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
    products: OrderProduct[];
    total: number;
    date: string;
};