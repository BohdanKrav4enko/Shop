import { HeaderContainer } from "./styles/HeaderStyle";
import { useState } from "react";
import {AdminBadge} from "./headerItems/AdminBadge.tsx";
import {HeaderLogo} from "./headerItems/HeaderLogo.tsx";
import {HeaderButtons} from "./headerItems/HeaderButtons.tsx";
import {HeaderModals} from "./headerItems/HeaderModals.tsx";

export type ModalType = "cart" | "admin" | "search" | null;

export const Header = () => {
    const [openModal, setOpenModal] = useState<ModalType>(null);

    return (
        <>
            <HeaderContainer>
                <AdminBadge />
                <HeaderLogo />
                <HeaderButtons setOpenModal={setOpenModal} />
            </HeaderContainer>
            <HeaderModals openModal={openModal} setOpenModal={setOpenModal} />
        </>
    );
};
