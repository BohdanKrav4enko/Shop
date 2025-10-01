import { Link } from "react-router-dom";
import {ShoppingBasket, Plus, ShieldUser, Search, Heart} from "lucide-react";
import {useAppSelector, StyledButton, HeaderButtonsWrapper, CartWrapper, Badge} from "../../index.ts";
import React from "react";

interface HeaderButtonsProps {
    setOpenModal: (type: "cart" | "admin" | "search" | "favorites" | null) => void;
}

export const HeaderButtons: React.FC<HeaderButtonsProps> = ({ setOpenModal }) => {
    const items = useAppSelector(state => state.cart.items);
    const admin = useAppSelector(state => state.app.isAdmin);

    return (
        <HeaderButtonsWrapper>
            {admin && (
                <Link to="/add-product/">
                    <StyledButton aria-label="Add new product">
                        <Plus />
                    </StyledButton>
                </Link>
            )}
            <StyledButton
                onClick={() => setOpenModal("search")}
                aria-label="Open search modal"
            >
                <Search />
            </StyledButton>
            <StyledButton
                onClick={() => setOpenModal("admin")}
                aria-label="Toggle admin mode"
            >
                <ShieldUser />
            </StyledButton>
            <StyledButton
                onClick={() => setOpenModal("favorites")}
                aria-label="Open favorites modal"
            >
                <Heart />
            </StyledButton>
            <CartWrapper>
                <StyledButton
                    onClick={() => setOpenModal("cart")}
                    aria-label={`Open cart modal, ${items.length} items`}
                >
                    <ShoppingBasket />
                </StyledButton>
                {items.length > 0 && <Badge>{items.length}</Badge>}
            </CartWrapper>
        </HeaderButtonsWrapper>
    );
};
