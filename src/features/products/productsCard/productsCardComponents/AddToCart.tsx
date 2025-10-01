import {addCart, Badge, BuyButton, CartWrapper, removeCart} from "@/features";
import {CircleCheckBig, ShoppingCart} from "lucide-react";
import {useAppDispatch, useCart} from "@/components";
import {setNotification} from "@/app/appSlice.ts";
import type {Product} from "@/types/types.ts";

export const AddToCart = ({product}: { product: Product }) => {
    const dispatch = useAppDispatch();
    const { inCart } = useCart();
    const exists = inCart(product.id);


    const handleCartClick = () => {
        if (exists) {
            dispatch(removeCart(product.id));
        } else {
            dispatch(addCart(product));
            dispatch(setNotification({message: "The product has been successfully added to your cart.", type: "success", duration: 1500}));
        }
    };
    return (
        <CartWrapper onClick={handleCartClick}>
            <BuyButton aria-label="Add to cart"><ShoppingCart /></BuyButton>
            {exists && <Badge><CircleCheckBig /></Badge>}
        </CartWrapper>
    );
};

