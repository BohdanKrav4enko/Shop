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
import {Minus, Plus, X} from "lucide-react";

interface CartItemProps {
    item: Product & { quantity: number };
}

export const CartItem = ({item}: CartItemProps) => {
    const dispatch = useAppDispatch();

    return (
        <ItemContainer>
            <DeleteButton
                onClick={() => dispatch(removeCart(item.id))}
                aria-label={`Remove ${item.title} from cart`}
            >
                <X style={{width:'16px', height:'16px'}}/>
            </DeleteButton>
            <ItemImage
                src={item.images[0]}
                alt={`Image of ${item.title}`}
                onError={e => (e.currentTarget.src = img)}
            />
            <ItemInfo>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemPrice>
                    ${item.price} × {item.quantity}
                </ItemPrice>
            </ItemInfo>
            <ItemControls>
                <StyledButton
                    onClick={() => dispatch(addCart(item))}
                    aria-label={`Increase quantity of ${item.title}`}
                >
                   <Plus style={{width:'16px', height:'16px'}}/>

                </StyledButton>
                <StyledButton
                    onClick={() => dispatch(decrementCart(item.id))}
                    aria-label={`Decrease quantity of ${item.title}`}
                >
                    <Minus style={{width:'16px', height:'16px'}}/>
                </StyledButton>
            </ItemControls>
        </ItemContainer>
    );
};

