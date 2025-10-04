import {StyledButton, CategoriesGrid, SidebarTitle, useAppSelector} from "@/components";
import { LogOut, UserRound, ContactRound } from "lucide-react";
import React from "react";
import {useTranslation} from "react-i18next";

interface UserMenuProps {
    loginHandler: () => void;
    handleUserMenuNavigate: (path: string) => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({loginHandler, handleUserMenuNavigate }) => {
    const user = useAppSelector(state => state.auth.user);
    const {t} = useTranslation();
    return <>
        <SidebarTitle>{t("User Menu")}</SidebarTitle>
        <CategoriesGrid>
            <StyledButton onClick={loginHandler} aria-label="Toggle registration mode">
                {user ? <LogOut /> : <UserRound />}
                {user ? t("Logout") : t("Login")}
            </StyledButton>
            <StyledButton onClick={() => handleUserMenuNavigate("/about-me")}>
                <ContactRound /> {t('About me')}
            </StyledButton>
        </CategoriesGrid>
    </>
};
