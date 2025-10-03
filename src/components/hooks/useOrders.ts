import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query, type DocumentData } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";
import type { OrderType } from "@/features/adminOrders/types/type.ts";

export const useOrders = () => {
    const [orders, setOrders] = useState<OrderType[]>([]);

    useEffect(() => {
        const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, snapshot => {
            const ordersData: OrderType[] = snapshot.docs.map(doc => {
                const data = doc.data() as DocumentData;
                return {
                    id: doc.id,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    total: data.total,
                    products: data.products,
                    status: data.status ?? "new",
                    createdAt: data.createdAt?.toDate() ?? new Date(),
                };
            });
            setOrders(ordersData);
        });
        return () => unsubscribe();
    }, []);

    return orders;
};
