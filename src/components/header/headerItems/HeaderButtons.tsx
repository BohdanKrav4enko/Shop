import {ContactRound, Heart, Search, ShoppingBasket} from "lucide-react";
import {
    Badge,
    ButtonLabel,
    CartWrapper,
    HeaderButtonsWrapper,
    StyledButton,
    useAppDispatch,
    useAppSelector,
} from "../../index.ts";
import {setOpenModal} from "@/app/modalSlice.ts";
import {PATH} from "@/routes/paths.ts";
import {useNavigate} from "react-router-dom";

export const HeaderButtons = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const items = useAppSelector(state => state.cart.items);
    const user = useAppSelector(state => state.auth.user);


    const cartHandler = () => dispatch(setOpenModal("cart"))
    const searchHandler = () => dispatch(setOpenModal("search"))
    const favoritesHandler = () => dispatch(setOpenModal("favorites"))

    const handleMeNavigate = () => {
        if (user) {
            navigate(PATH.ABOUT_ME_PAGE)
        } else {
            dispatch(setOpenModal("registration"))
        }

    }

    return (
        <HeaderButtonsWrapper>
            <StyledButton onClick={handleMeNavigate}>
                <ContactRound/>
                <ButtonLabel>Profile</ButtonLabel>
            </StyledButton>
            <StyledButton
                onClick={searchHandler}
                aria-label="Open search modal"
            >
                <Search/>
                <ButtonLabel>Search</ButtonLabel>
            </StyledButton>
            <StyledButton
                onClick={favoritesHandler}
                aria-label="Open favorites modal"
            >
                <Heart/>
                <ButtonLabel>Favorites</ButtonLabel>
            </StyledButton>
            <CartWrapper>
                <StyledButton
                    onClick={cartHandler}
                    aria-label={`Open cart modal, ${items.length} items`}
                >
                    <ShoppingBasket/>
                    <ButtonLabel>Basket</ButtonLabel>
                </StyledButton>
                {items.length > 0 && <Badge>{items.length}</Badge>}
            </CartWrapper>
        </HeaderButtonsWrapper>
    );
};


