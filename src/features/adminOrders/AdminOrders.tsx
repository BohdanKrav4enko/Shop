import {useState} from "react";
import {deleteDoc, doc, updateDoc} from "firebase/firestore";
import {db} from "@/app/firebase/firebase";
import {useAppDispatch} from "@/components";
import {RefreshCcw} from "lucide-react";
import {
    EmptyOrdersSubtitle,
    EmptyOrdersTitle,
    EmptyOrdersWrapper,
    OrderCardComponent,
    OrderContainer
} from "@/features";
import {useOrders} from "@/components/hooks/useOrders";
import {setNotification} from "@/app/appSlice.ts";
import {useTranslation} from "react-i18next";
import {OrderHeader} from "@/pages/ordersPage/ordersPageComponents/OrderHeader.tsx";

export const AdminOrders = () => {
    const orders = useOrders();
    const [openOrders, setOpenOrders] = useState<Record<string, boolean>>({});
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [orderToDelete, setOrderToDelete] = useState<string | null>(null);

    const dispatch = useAppDispatch();
    const {t} = useTranslation();

    const updateStatus = async (id: string, status: string) => {
        try {
            await updateDoc(doc(db, "orders", id), {status});
        } catch (err) {
            dispatch(setNotification({type: "error", message: t("Update error consequences") + `: ${err}`}))
        }
    };

    return (
        <OrderContainer>
            <OrderHeader/>
            {orders.map(order => (
                <OrderCardComponent
                    key={order.id}
                    order={order}
                    isOpen={!!openOrders[order.id]}
                    confirmOpen={confirmOpen && orderToDelete === order.id}
                    onToggle={() => setOpenOrders(prev => ({...prev, [order.id]: !prev[order.id]}))}
                    onConfirmDelete={async () => {
                        if (!orderToDelete) return;
                        try {
                            await deleteDoc(doc(db, "orders", orderToDelete));
                        } catch (err) {
                            dispatch(setNotification({type: "error", message: t("Error deleting order") + `: ${err}`}))
                        } finally {
                            setOrderToDelete(null);
                            setConfirmOpen(false);
                        }
                    }}
                    onCancelDelete={() => {
                        setOrderToDelete(null);
                        setConfirmOpen(false);
                    }}
                    updateStatus={updateStatus}
                    setConfirm={() => {
                        setOrderToDelete(order.id);
                        setConfirmOpen(true);
                    }}
                />
            ))}
            {orders.length === 0 && (
                <EmptyOrdersWrapper>
                    <RefreshCcw size={48} color="#ccc"/>
                    <EmptyOrdersTitle>{t("No orders yet")}</EmptyOrdersTitle>
                    <EmptyOrdersSubtitle>{t("Please refresh the page or check back later")}</EmptyOrdersSubtitle>
                </EmptyOrdersWrapper>
            )}
        </OrderContainer>
    );
};