import { db } from "@/app/firebase/firebase";
import type { Order } from "@/types/types";
import { addDoc, collection, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";

export const sendOrder = async (order: Order) => {
    await addDoc(collection(db, "orders"), {
        ...order,
        createdAt: serverTimestamp(),
        status: "new",
    });
};
export const getOrders = async () => {
    const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
