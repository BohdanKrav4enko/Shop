import type {Order} from "@/types/types.ts";

export const sendOrder = async (order: Order) => {
    const response = await fetch("https://script.google.com/macros/s/AKfycbyk88NUT4TCY1cUQNSCdnHqvZ1aPHM7aHmlp8wcoIqoEdZ50BJ_ia8Bj8ptVNPSNa4Wpg/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
    });

    if (!response.ok) {
        throw new Error(`Network error: ${response.status}`);
    }

    const result = await response.json();

    if (result.status !== "ok") {
        throw new Error(result.message || "Unknown error from server");
    }
    return result;
};