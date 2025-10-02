import {Modal, ShoppingCart, SearchModal, SignUpModal, Favorites} from "../../modal";
import React from "react";

interface HeaderModalsProps {
    openModal: "cart" | "registration" | "search" | "favorites" | null;
    setOpenModal: (type: "cart" | "registration" | "search" | "favorites" | null) => void;
}

export const HeaderModals: React.FC<HeaderModalsProps> = ({ openModal, setOpenModal }) => {
    if (!openModal) return null;

    const modals = {
        cart: <ShoppingCart onClose={() => setOpenModal(null)} />,
        registration: <SignUpModal onClose={() => setOpenModal(null)} />,
        search: <SearchModal onClose={() => setOpenModal(null)} />,
        favorites: <Favorites onClose={() => setOpenModal(null)} />,
    };

    return (
        <Modal isOpen onClose={() => setOpenModal(null)}>
            {modals[openModal]}
        </Modal>
    );
};
