import { NavigationButtons } from "@/components";
import { useTranslation } from "react-i18next";
import { MapComponent } from "@/components";
import {PageContainer, PageSection, PageSubTitle, PageText, PageTitle} from "@/pages";

export const ContactPage = () => {
    const { t } = useTranslation();

    return (
        <PageContainer>
            <PageTitle>{t("Contact Us")}</PageTitle>

            <PageSection>
                <PageSubTitle>{t("Email")}</PageSubTitle>
                <PageText>bohdan.krav4enko@gmail.com</PageText>
            </PageSection>

            <PageSection>
                <PageSubTitle>{t("Phone")}</PageSubTitle>
                <PageText>+380 (66) 082-7985</PageText>
            </PageSection>

            <PageSection>
                <PageSubTitle>{t("Address")}</PageSubTitle>
                <PageText>123 SHOP Hlib Babich Street, 105, Mykolaiv, Ukraine</PageText>
            </PageSection>

            <MapComponent />
            <NavigationButtons />
        </PageContainer>
    );
};
