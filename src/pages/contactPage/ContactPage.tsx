import { ContactContainer, ContactTitle, ContactSection, ContactSubTitle, ContactText } from "./index.ts";
import { NavigationButtons } from "@/components";
import { useTranslation } from "react-i18next";
import { MapComponent } from "@/components";

export const ContactPage = () => {
    const { t } = useTranslation();

    return (
        <ContactContainer>
            <ContactTitle>{t("Contact Us")}</ContactTitle>

            <ContactSection>
                <ContactSubTitle>{t("Email")}</ContactSubTitle>
                <ContactText>bohdan.krav4enko@gmail.com</ContactText>
            </ContactSection>

            <ContactSection>
                <ContactSubTitle>{t("Phone")}</ContactSubTitle>
                <ContactText>+380 (66) 082-7985</ContactText>
            </ContactSection>

            <ContactSection>
                <ContactSubTitle>{t("Address")}</ContactSubTitle>
                <ContactText>123 SHOP Hlib Babich Street, 105, Mykolaiv, Ukraine</ContactText>
            </ContactSection>

            <MapComponent />
            <NavigationButtons />
        </ContactContainer>
    );
};
