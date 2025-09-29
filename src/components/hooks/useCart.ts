import {useAppSelector} from "./hooks.ts";

export const useCart = () => {
    const items = useAppSelector(state => state.cart.items);
    const inCart  = (id: number) => items.find(el => el.id === id);
    return {items, inCart }
}