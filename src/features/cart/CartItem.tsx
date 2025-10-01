import {StyledButton, useAppDispatch} from "@/components";
import type {Product} from "@/types/types.ts";
import img from "../../assets/placeholder.webp";
import {
    ItemControls,
    DeleteButton,
    ItemInfo,
    ItemContainer,
    ItemPrice,
    ItemTitle,
    ItemImage,
    addCart,
    decrementCart,
    removeCart
} from "./index.ts";

interface CartItemProps {
    item: Product & { quantity: number };
}

export const CartItem = ({item}: CartItemProps) => {
    const dispatch = useAppDispatch();

    return (
        <ItemContainer>
            <DeleteButton onClick={() => {
                dispatch(removeCart(item.id))
            }}>×</DeleteButton>
            <ItemImage src={item.images[0]} alt={item.title} onError={e => (e.currentTarget.src = img)}/>
            <ItemInfo>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemPrice>${item.price} x {item.quantity}</ItemPrice>
            </ItemInfo>
            <ItemControls>
                <StyledButton onClick={() => dispatch(addCart(item))}>+</StyledButton>
                <StyledButton onClick={() => dispatch(decrementCart(item.id))}>-</StyledButton>
            </ItemControls>
        </ItemContainer>
    );
};

