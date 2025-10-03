import { ProductItem } from "@/features";

interface OrderProductItemProps {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

export const OrderProductItem = ({ id, title, price, quantity }: OrderProductItemProps) => (
    <ProductItem key={id}>
        <p><b>{title}</b></p>
        <div style={{ display: "flex", gap: "15px" }}>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
        </div>
    </ProductItem>
);
