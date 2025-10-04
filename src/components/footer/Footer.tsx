import { Link } from "react-router-dom";
import {FooterContainer, FooterLinks, FooterText} from "./index.ts";
import {PATH} from "@/routes/paths.ts";
import {useTranslation} from "react-i18next";

export const Footer = () => {
    const {t} = useTranslation();
    return (
        <FooterContainer>
            <FooterLinks>
                <Link to={PATH.ABOUT_PAGE}>{t('About')}</Link>
                <Link to={PATH.CONTACT_PAGE}>{t('Contact')}</Link>
                <Link to={PATH.PRIVACY_PAGE}>{t('Privacy Policy')}</Link>
                <Link to={PATH.FAQ_PAGE}>{t('FAQ')}</Link>
            </FooterLinks>
            <FooterText>{t("copyright")}</FooterText>
        </FooterContainer>
    );
};