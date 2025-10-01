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
                    <StyledButton>
                        <Plus />
                    </StyledButton>
                </Link>
            )}
            <StyledButton onClick={() => setOpenModal("search")}>
                <Search />
            </StyledButton>
            <StyledButton onClick={() => setOpenModal("admin")}>
                <ShieldUser />
            </StyledButton>
            <StyledButton onClick={() => setOpenModal("favorites")}>
                <Heart />
            </StyledButton>
            <CartWrapper>
                <StyledButton onClick={() => setOpenModal("cart")}>
                    <ShoppingBasket />
                </StyledButton>
                {items.length > 0 && <Badge>{items.length}</Badge>}
            </CartWrapper>
        </HeaderButtonsWrapper>
    );
};
