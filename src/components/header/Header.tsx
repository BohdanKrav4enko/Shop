import {Badge, ButtonsWrapper, CartWrapper, HeaderContainer, TextAdmin, Title} from "./styles/HeaderStyle.ts";
import {useState} from "react";
import {Modal} from "../modal/Modal.tsx";
import {AdminModal} from "../modal/modals/AdminModal.tsx";
import {StyledButton} from "../button/StyledButton.tsx";
import {SearchModal} from "../modal/modals/SearchModal.tsx";
import {Link} from "react-router-dom";
import {useAppSelector} from "../hooks/hooks.ts";
import {ShoppingCart} from "../modal/modals/ShoppingCart.tsx";
import {MobileButtons} from "./mobileButtons/MobileButtons.tsx";

export type ModalType = "cart" | "admin" | 'search' | null;

export const Header = () => {
    const [openModal, setOpenModal] = useState<ModalType>(null);
    const items = useAppSelector(state => state.cart.items);
    const admin = useAppSelector(state => state.app.isAdmin);

    const modals = {
        cart: <ShoppingCart onClose={() => setOpenModal(null)}/>,
        admin: <AdminModal onClose={() => setOpenModal(null)}/>,
        search: <SearchModal onClose={() => setOpenModal(null)}/>,
    };

    return (
        <>
            <HeaderContainer>
                <div/>
                <Link style={{position: 'relative'}} to="/">
                    <Title>SHOP</Title>
                    {admin && <TextAdmin>Admin</TextAdmin>}
                </Link>
                <ButtonsWrapper>
                    {admin &&<Link to={`/add-product/`}><StyledButton children={'➕'}/></Link>}
                    <StyledButton onClick={() => setOpenModal("search")}>🔍</StyledButton>
                    <StyledButton onClick={() => setOpenModal("admin")}>💼</StyledButton>
                    <CartWrapper>
                        <StyledButton onClick={() => setOpenModal("cart")}>🛒</StyledButton>
                        {items.length !== 0 && <Badge>{items.length}</Badge>}
                    </CartWrapper>
                </ButtonsWrapper>
            </HeaderContainer>
            <MobileButtons items={items} setOpenModal={setOpenModal}/>
            {(openModal && (
                <Modal isOpen={true} onClose={() => setOpenModal(null)}>
                    {modals[openModal]}
                </Modal>
            ))}
        </>
    );
};
