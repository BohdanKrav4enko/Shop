import { OrderProductItem, OrderProductsList, OrderActions } from "@/features";
import { ConfirmModal } from "@/components";
import type {OrderType} from "@/features/adminOrders/types/type.ts";

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
    if (!isOpen) return null;

    return (
        <OrderProductsList isOpen={isOpen}>
            {confirmOpen ? (
                <ConfirmModal
                    title="Are you sure you want to delete this order?"
                    isOpen={confirmOpen}
                    onConfirm={onConfirmDelete}
                    onClose={onCancelDelete}
                />
            ) : (
                <>
                    {order.products.map(p => (
                        <OrderProductItem key={p.id} {...p} />
                    ))}
                    <p>Phone: {order.phone}</p>
                    <p>Date: {order.createdAt.toLocaleString()}</p>
                    <p>Status: {order.status}</p>
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
