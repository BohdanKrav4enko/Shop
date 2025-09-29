import {AdminModal} from "../../modal/modals/AdminModal.tsx";
import {SearchModal} from "../../modal/modals/SearchModal.tsx";
import {Modal} from "../../modal/Modal.tsx";
import {ShoppingCart} from "../../modal/modals/ShoppingCart.tsx";

interface HeaderModalsProps {
    openModal: "cart" | "admin" | "search" | null;
    setOpenModal: (type: "cart" | "admin" | "search" | null) => void;
}

export const HeaderModals: React.FC<HeaderModalsProps> = ({ openModal, setOpenModal }) => {
    if (!openModal) return null;

    const modals = {
        cart: <ShoppingCart onClose={() => setOpenModal(null)} />,
        admin: <AdminModal onClose={() => setOpenModal(null)} />,
        search: <SearchModal onClose={() => setOpenModal(null)} />,
    };

    return (
        <Modal isOpen onClose={() => setOpenModal(null)}>
            {modals[openModal]}
        </Modal>
    );
};
