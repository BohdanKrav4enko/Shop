import { NavigationButtons } from "@/components";
import { useTranslation } from "react-i18next";
import {PageContainer, PageSection, PageSubTitle, PageText, PageTitle} from "@/pages";

export const FaqPage = () => {
    const { t } = useTranslation();

    return (
        <PageContainer>
            <PageTitle>{t("FAQ")}</PageTitle>
            <PageSection>
                <PageSubTitle>{t("How do I place an order?")}</PageSubTitle>
                <PageText>{t("To place an order, select the products you want, add them to your cart, and proceed to checkout.")}</PageText>
            </PageSection>
            <PageSection>
                <PageSubTitle>{t("What payment methods are available?")}</PageSubTitle>
                <PageText>{t("We accept credit cards, PayPal, and cash on delivery (where available).")}</PageText>
            </PageSection>
            <PageSection>
                <PageSubTitle>{t("How long will delivery take?")}</PageSubTitle>
                <PageText>{t("Delivery usually takes 3–5 business days depending on your location.")}</PageText>
            </PageSection>
            <PageSection>
                <PageSubTitle>{t("Can I return a product?")}</PageSubTitle>
                <PageText>{t("Yes, you can return any product within 14 days, provided it’s in its original condition.")}</PageText>
            </PageSection>
            <PageSection>
                <PageSubTitle>{t("How can I contact support?")}</PageSubTitle>
                <PageText>{t("You can reach our support team via the Contact page or by emailing support@shop.com.")}</PageText>
            </PageSection>
            <NavigationButtons />
        </PageContainer>
    );
};
