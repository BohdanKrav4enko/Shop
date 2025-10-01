import {CircleDollarSign, ShoppingBasket} from "lucide-react";
import {StyledButton} from "@/components";
import {AddToFavoriteButton} from "@/pages";
import type {Product} from "@/types/types.ts";
import styled from "styled-components";

interface ProductActionsProps {
    existsInCart: boolean;
    onAdd: () => void;
    onRemove: () => void;
    data: Product;
}
const StyledProductItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2px;
    button{
        font-size: 20px;
    }
    @media (max-width: 480px) {
        flex-direction: row;
        gap: 16px;
        button {
            width: 50%;
            font-size: 12px;
        }
    }
`
export const ProductActions = ({ existsInCart, onAdd, onRemove, data }: ProductActionsProps) => (
    <StyledProductItemWrapper>
        {existsInCart ? (
            <StyledButton onClick={onRemove} aria-label="Remove from cart">
                <ShoppingBasket /> In the basket
            </StyledButton>
        ) : (
            <StyledButton onClick={onAdd} aria-label="Add to cart">
                <CircleDollarSign /> Buy
            </StyledButton>
        )}
        <AddToFavoriteButton product={data} aria-label="Add to favorites" />
    </StyledProductItemWrapper>
);

