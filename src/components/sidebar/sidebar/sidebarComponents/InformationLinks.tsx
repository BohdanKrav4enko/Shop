import { StyledButton, CategoriesGrid, SidebarTitle } from "@/components";
import { PATH } from "@/routes/paths.ts";
import React from "react";

interface InformationLinksProps {
    handleNavigate: (path: string) => void;
}

export const InformationLinks: React.FC<InformationLinksProps> = ({ handleNavigate }) => (
    <>
        <SidebarTitle>Information</SidebarTitle>
        <CategoriesGrid>
            <StyledButton onClick={() => handleNavigate(PATH.ABOUT_PAGE)}>About</StyledButton>
            <StyledButton onClick={() => handleNavigate(PATH.CONTACT_PAGE)}>Contact</StyledButton>
            <StyledButton onClick={() => handleNavigate(PATH.PRIVACY_PAGE)}>Privacy Policy</StyledButton>
            <StyledButton onClick={() => handleNavigate(PATH.FAQ_PAGE)}>FAQ</StyledButton>
        </CategoriesGrid>
    </>
);
