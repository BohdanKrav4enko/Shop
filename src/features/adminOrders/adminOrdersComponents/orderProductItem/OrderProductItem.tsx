import { ProductItem } from "@/features";
import { useTranslation } from "react-i18next";

interface OrderProductItemProps {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

export const OrderProductItem = ({ id, title, price, quantity }: OrderProductItemProps) => {
    const { t } = useTranslation();
    return (
        <ProductItem key={id}>
            <p><b>{title}</b></p>
            <div style={{ display: "flex", gap: "15px" }}>
                <p>{t("Price")}: ${price}</p>
                <p>{t("Quantity")}: {quantity}</p>
            </div>
        </ProductItem>
    );
};
