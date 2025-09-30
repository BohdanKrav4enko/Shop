import type {Order} from "../components/modal/modals/type.ts";

export const sendOrder = async (order: Order) => {
    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbxHo42CMYxwg0KcNoDMR7ZwASu9ZeMK8qfnDIzVGLpbxf9lghNcEyl9Z-MOFL5dNu2Hag/exec", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(order),
        });

        const result = await response.json();

        if (result.status === "ok") {
            alert("Заказ успешно отправлен!");
        } else {
            alert(result.message)
        }
    } catch (err: unknown) {
        alert(err)
    }
}