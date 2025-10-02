import { useState } from "react";
import {AdminBadge, HeaderButtons, HeaderModals, HeaderLogo, HeaderContainer} from "./index.ts";

export type ModalType = "cart" | "registration" | "search" | "favorites" | null;

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
