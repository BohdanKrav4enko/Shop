import {Favorites, Modal, SearchModal, ShoppingCart, SignUpModal, useAppSelector} from "@/components";

export const HeaderModals = () => {
    const openModal = useAppSelector(state => state.modal.openModal);
    if (!openModal) return null;

    const modals = {
        cart: <ShoppingCart/>,
        registration: <SignUpModal/>,
        search: <SearchModal/>,
        favorites: <Favorites/>,
    };

    return <Modal children={modals[openModal]}/>
};
