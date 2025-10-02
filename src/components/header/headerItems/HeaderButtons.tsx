import {Link} from "react-router-dom";
import {ShoppingBasket, Plus, UserRound, Search, Heart, LogOut} from "lucide-react";
import {useAppSelector, StyledButton, HeaderButtonsWrapper, CartWrapper, Badge, useAppDispatch} from "../../index.ts";
import {logout} from "@/app/authSlice.ts";
import {setNotification} from "@/app/appSlice.ts";
import {setOpenModal} from "@/app/modalSlice.ts";
import {getAuth, signOut} from "firebase/auth";


export const HeaderButtons = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(state => state.cart.items);
    const admin = useAppSelector(state => state.app.isAdmin);
    const user = useAppSelector(state => state.auth.user);
    const auth = getAuth();

    const cartHandler = () => dispatch(setOpenModal("cart"))
    const searchHandler = () => dispatch(setOpenModal("search"))
    const favoritesHandler = () => dispatch(setOpenModal("favorites"))
    const loginHandler = () => {
        if (user) {
            signOut(auth)
                .then(() => {
                    dispatch(logout());
                    dispatch(setNotification({type: "info", message: "You have successfully logged out of your account."}))
                })
                .catch((error) => {
                    dispatch(setNotification({type: "info", message: `Logout error: ${error}`, }))
                });
        } else {
            dispatch(setOpenModal("registration"))
        }
    }


    return (
        <HeaderButtonsWrapper>
            <StyledButton
                onClick={loginHandler}
                aria-label="Toggle registration mode"
            >
                {user ? <LogOut/> : <UserRound/>}
            </StyledButton>
            {admin && (
                <Link to="/add-product/">
                    <StyledButton aria-label="Add new product">
                        <Plus/>
                    </StyledButton>
                </Link>
            )}
            <StyledButton
                onClick={searchHandler}
                aria-label="Open search modal"
            >
                <Search/>
            </StyledButton>
            <StyledButton
                onClick={favoritesHandler}
                aria-label="Open favorites modal"
            >
                <Heart/>
            </StyledButton>
            <CartWrapper>
                <StyledButton
                    onClick={cartHandler}
                    aria-label={`Open cart modal, ${items.length} items`}
                >
                    <ShoppingBasket/>
                </StyledButton>
                {items.length > 0 && <Badge>{items.length}</Badge>}
            </CartWrapper>
        </HeaderButtonsWrapper>
    );
};
