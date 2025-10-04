import {StyledButton, CategoriesGrid, SidebarTitle} from "@/components";
import {PATH} from "@/routes/paths.ts";
import React from "react";
import {useTranslation} from "react-i18next";

interface InformationLinksProps {
    handleNavigate: (path: string) => void;
}

export const InformationLinks: React.FC<InformationLinksProps> = ({handleNavigate}) => {
    const {t} = useTranslation();
    return (
        <>
            <SidebarTitle>{t("Information")}</SidebarTitle>
            <CategoriesGrid>
                <StyledButton onClick={() => handleNavigate(PATH.ABOUT_PAGE)}>{t('About')}</StyledButton>
                <StyledButton onClick={() => handleNavigate(PATH.CONTACT_PAGE)}>{t('Contact')}</StyledButton>
                <StyledButton onClick={() => handleNavigate(PATH.PRIVACY_PAGE)}>{t('Privacy Policy')}</StyledButton>
                <StyledButton onClick={() => handleNavigate(PATH.FAQ_PAGE)}>{t('FAQ')}</StyledButton>
            </CategoriesGrid>
        </>
    )
};
