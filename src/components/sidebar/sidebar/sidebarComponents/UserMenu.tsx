import {StyledButton, CategoriesGrid, SidebarTitle, useAppSelector} from "@/components";
import { LogOut, UserRound, ContactRound } from "lucide-react";
import React from "react";

interface UserMenuProps {
    loginHandler: () => void;
    handleUserMenuNavigate: (path: string) => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({loginHandler, handleUserMenuNavigate }) => {
    const user = useAppSelector(state => state.auth.user);
    return <>
        <SidebarTitle>User Menu</SidebarTitle>
        <CategoriesGrid>
            <StyledButton onClick={loginHandler} aria-label="Toggle registration mode">
                {user ? <LogOut /> : <UserRound />}
                {user ? "Logout" : "Login"}
            </StyledButton>
            <StyledButton onClick={() => handleUserMenuNavigate("/about-me")}>
                <ContactRound /> About me
            </StyledButton>
        </CategoriesGrid>
    </>
};
