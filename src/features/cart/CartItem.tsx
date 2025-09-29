import {StyledButton} from "../../components/button/StyledButton.tsx";
import {useAppDispatch} from "../../components/hooks/hooks.ts";
import {addCart, decrementCart, removeCart} from "./cartSlice.ts";
import type {Product} from "../../types/types.ts";
import {Controls, DeleteButton, Info, ItemContainer, Price, Title, Image} from "./styles/CartItemStyle.ts";

interface CartItemProps {
    item: Product & { quantity: number };
}
export const CartItem = ({ item }: CartItemProps) => {
    const dispatch = useAppDispatch();

    return (
        <ItemContainer>
            <DeleteButton onClick={()=>{dispatch(removeCart(item.id))}}>×</DeleteButton>
            <Image src={item.images[0]} alt={item.title} />
            <Info>
                <Title>{item.title}</Title>
                <Price>${item.price} x {item.quantity}</Price>
            </Info>
            <Controls>
                <StyledButton onClick={() => dispatch(addCart(item))}>+</StyledButton>
                <StyledButton onClick={() => dispatch(decrementCart(item.id))}>-</StyledButton>
            </Controls>
        </ItemContainer>
    );
};

