import {clearCart, CartItem} from "@/features";
import {sendOrder} from "@/api/ordersApi.ts";
import {setNotification} from "@/app/appSlice.ts";
import type {ModalProps} from "@/types/types.ts";
import {
    StyledButton,
    CartLayout,
    ClearButton,
    CartContent,
    ModalFooterContainer,
    CartTotal,
    TotalContainer,
    ModalHeader,
    ModalText,
    useAppDispatch,
    useAppSelector,
    ModalFooter
} from "@/components";

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
            name: "User",
            email: "example@mail.com",
            products,
            total,
            date: new Date().toISOString()
        };
    };

    const handleOrder = () => {
        const order = prepareOrder();
        sendOrder(order)
            .then(() => dispatch(setNotification({
                message: 'The order has been sent successfully.',
                type: "success",
                duration: 1500
            })))
            .catch((error: Error) => dispatch(setNotification({
                message: error.message || 'Something went wrong',
                type: "error",
                duration: 1500
            })))
    };

    return (
        items.length > 0 ? (
            <CartLayout role="dialog" aria-modal="true" aria-labelledby="cart-modal-title">
                <ModalHeader id="cart-modal-title">Shopping Cart</ModalHeader>
                <CartContent>
                    {items.map(item => <CartItem key={item.id} item={item}/>)}
                </CartContent>
                <ModalFooterContainer>
                    <TotalContainer>
                        <CartTotal>${total}</CartTotal>
                    </TotalContainer>
                    <StyledButton aria-label="Place an order" onClick={handleOrder}>Place an order</StyledButton>
                    <ClearButton aria-label="Clear cart" onClick={() => dispatch(clearCart())}>Clear Cart</ClearButton>
                </ModalFooterContainer>
            </CartLayout>
        ) : (
            <CartLayout>
                <ModalHeader>Shopping Cart</ModalHeader>
                <CartContent>
                    <ModalText aria-live="polite">There's nothing here yet.</ModalText>
                </CartContent>
                <ModalFooter onClose={onClose}/>
            </CartLayout>
        )
    );
};


