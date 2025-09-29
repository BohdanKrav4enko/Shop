import { ButtonsWrapper, CartWrapper, Badge } from "../styles/HeaderStyle";
import { Link } from "react-router-dom";
import { ShoppingBasket, Plus, ShieldUser, Search } from "lucide-react";
import {useAppSelector} from "../../hooks/hooks.ts";
import { StyledButton } from "../../button/StyledButton.tsx";

interface HeaderButtonsProps {
    setOpenModal: (type: "cart" | "admin" | "search" | null) => void;
}

export const HeaderButtons: React.FC<HeaderButtonsProps> = ({ setOpenModal }) => {
    const items = useAppSelector(state => state.cart.items);
    const admin = useAppSelector(state => state.app.isAdmin);

    return (
        <ButtonsWrapper>
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
            <CartWrapper>
                <StyledButton onClick={() => setOpenModal("cart")}>
                    <ShoppingBasket />
                </StyledButton>
                {items.length > 0 && <Badge>{items.length}</Badge>}
            </CartWrapper>
        </ButtonsWrapper>
    );
};
