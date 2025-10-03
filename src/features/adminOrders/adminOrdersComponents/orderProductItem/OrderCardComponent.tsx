import {OrderHeader, StatusDot, OrderCard, OrderDetails} from "@/features";
import type {OrderType} from "@/features/adminOrders/types/type.ts";

interface OrderCardComponentProps {
    order: OrderType;
    isOpen: boolean;
    confirmOpen: boolean;
    onToggle: () => void;
    onConfirmDelete: () => void;
    onCancelDelete: () => void;
    updateStatus: (id: string, status: string) => void;
    setConfirm: () => void;
}

export const OrderCardComponent = ({ order, isOpen, confirmOpen, onToggle, onConfirmDelete, onCancelDelete, updateStatus, setConfirm }: OrderCardComponentProps) => (
    <OrderCard key={order.id}>
        <OrderHeader onClick={onToggle}>
            <div>
                <b>{order.name}</b> ({order.email}) — ${order.total} — {order.products.length} items
            </div>
            <div>
                <StatusDot status={order.status}/>
            </div>
        </OrderHeader>
        <OrderDetails
            order={order}
            isOpen={isOpen}
            confirmOpen={confirmOpen}
            onConfirmDelete={onConfirmDelete}
            onCancelDelete={onCancelDelete}
            updateStatus={updateStatus}
            setConfirm={setConfirm}
        />
    </OrderCard>
);
