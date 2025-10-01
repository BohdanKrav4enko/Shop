import {Modal, ShoppingCart, SearchModal, AdminModal, Favorites} from "../../modal";
import React from "react";

interface HeaderModalsProps {
    openModal: "cart" | "admin" | "search" | "favorites" | null;
    setOpenModal: (type: "cart" | "admin" | "search" | "favorites" | null) => void;
}

export const HeaderModals: React.FC<HeaderModalsProps> = ({ openModal, setOpenModal }) => {
    if (!openModal) return null;

    const modals = {
        cart: <ShoppingCart onClose={() => setOpenModal(null)} />,
        admin: <AdminModal onClose={() => setOpenModal(null)} />,
        search: <SearchModal onClose={() => setOpenModal(null)} />,
        favorites: <Favorites onClose={() => setOpenModal(null)} />,
    };

    return (
        <Modal isOpen onClose={() => setOpenModal(null)}>
            {modals[openModal]}
        </Modal>
    );
};
