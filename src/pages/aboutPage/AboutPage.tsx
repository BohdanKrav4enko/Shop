import {useTranslation} from "react-i18next";
import {NavigationButtons} from "@/components";
import {PageContainer, PageSection, PageSubTitle, PageText, PageTitle} from "@/pages";

export const AboutPage = () => {
    const {t} = useTranslation();
    return (
        <PageContainer>
            <PageTitle>{t("About Us")}</PageTitle>
            <PageSection>
                <PageSubTitle>{t("Our Mission")}</PageSubTitle>
                <PageText>{t("SHOP is dedicated to providing high-quality products at affordable prices. We aim to create a seamless and enjoyable shopping experience for all our customers.")}</PageText>
            </PageSection>
            <PageSection>
                <PageSubTitle>{t("Our Story")}</PageSubTitle>
                <PageText>{t("Founded in 2025, SHOP started as a small online store and has grown into a trusted platform for a variety of products. We value quality, trust, and customer satisfaction.")}</PageText>
            </PageSection>
            <PageSection>
                <PageSubTitle>{t("Why Choose Us")}</PageSubTitle>
                <PageText>{t("With fast shipping, responsive support, and a wide range of products, SHOP is the trusted choice for customers who value reliability.")}</PageText>
            </PageSection>
            <PageSection>
                <PageSubTitle>{t("Looking Ahead")}</PageSubTitle>
                <PageText>{t("We continue to expand our selection and improve our services to offer the best online shopping experience possible.")}</PageText>
            </PageSection>
            <PageSection>
                <PageSubTitle>{t("Our Values")}</PageSubTitle>
                <PageText>{t("We prioritize customer satisfaction, honesty, and quality. Every product is carefully selected to meet our high standards.")}</PageText>
            </PageSection>
            <NavigationButtons/>
        </PageContainer>
    );
};
