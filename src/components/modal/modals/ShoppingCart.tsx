import { ModalHeader, ModalText } from "../styles/ModalStyle.ts";
import { StyledButton } from "../../button/StyledButton.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import { clearCart } from "../../../features/cart/cartSlice.ts";
import { CartItem } from "../../../features/cart/CartItem.tsx";
import {
    CartLayout,
    ClearButton,
    Content,
    Footer,
    Total,
    TotalContainer
} from "../styles/ShoppingCartStyle.ts";
import type {ModalProps} from "./type.ts";
import { sendOrder } from "../../../api/ordersApi.ts";

export const ShoppingCart = (props: ModalProps) => {
    const {onClose} = props;
    const items = useAppSelector((state) => state.cart.items);
    const dispatch = useAppDispatch();
    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

    const prepareOrder = () => {
        const products = items.map(item => ({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity
        }));

        return {
            name: "Богдан",
            email: "example@mail.com",
            products,
            total,
            date: new Date().toISOString()
        };
    };

    const handleOrder = () => {
        const order = prepareOrder();
        sendOrder(order);
    };

    return (
        items.length > 0 ? (
            <CartLayout>
                <ModalHeader>Shopping Cart</ModalHeader>
                <Content>
                    {items.map(item => <CartItem key={item.id} item={item} />)}
                </Content>
                <Footer>
                    <TotalContainer>
                        <Total>${total}</Total>
                    </TotalContainer>
                    <StyledButton onClick={handleOrder}>Place an order</StyledButton>
                    <ClearButton onClick={() => dispatch(clearCart())}>Clear Cart</ClearButton>
                </Footer>
            </CartLayout>
        ) : (
            <CartLayout>
                <ModalHeader>Shopping Cart</ModalHeader>
                <Content>
                    <ModalText>There's nothing here yet.</ModalText>
                </Content>
                <Footer>
                    <div/>
                    <StyledButton onClick={() =>{onClose()}}>Return to shopping</StyledButton>
                    <div/>
                </Footer>
            </CartLayout>
        )
    );
};


