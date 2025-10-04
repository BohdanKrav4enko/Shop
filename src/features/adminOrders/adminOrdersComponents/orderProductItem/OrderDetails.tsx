import { OrderProductItem, OrderProductsList, OrderActions } from "@/features";
import { ConfirmModal } from "@/components";
import type {OrderType} from "@/features/adminOrders/types/type.ts";
import {useTranslation} from "react-i18next";

interface OrderDetailsProps {
    order: OrderType;
    isOpen: boolean;
    confirmOpen: boolean;
    onConfirmDelete: () => void;
    onCancelDelete: () => void;
    updateStatus: (id: string, status: string) => void;
    setConfirm: () => void;
}

export const OrderDetails = ({ order, isOpen, confirmOpen, onConfirmDelete, onCancelDelete, updateStatus, setConfirm }: OrderDetailsProps) => {
    const { t } = useTranslation();

    if (!isOpen) return null;

    return (
        <OrderProductsList isOpen={isOpen}>
            {confirmOpen ? (
                <ConfirmModal
                    title={t("Are you sure you want to delete this order?")}
                    isOpen={confirmOpen}
                    onConfirm={onConfirmDelete}
                    onClose={onCancelDelete}
                />
            ) : (
                <>
                    {order.products.map(p => (
                        <OrderProductItem key={p.id} {...p} />
                    ))}
                    <p>{t("Phone")}: {order.phone}</p>
                    <p>{t("Date")}: {order.createdAt.toLocaleString()}</p>
                    <p>{t("Status")}: {t(order.status)}</p>
                    <OrderActions
                        id={order.id}
                        updateStatus={updateStatus}
                        onDelete={setConfirm}
                    />
                </>
            )}
        </OrderProductsList>
    );
};

