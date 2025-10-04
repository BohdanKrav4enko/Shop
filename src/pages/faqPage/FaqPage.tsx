import { FaqContainer, FaqSection, FaqSubTitle, FaqText, FaqTitle } from "./index.ts";
import { NavigationButtons } from "@/components";
import { useTranslation } from "react-i18next";

export const FaqPage = () => {
    const { t } = useTranslation();

    return (
        <FaqContainer>
            <FaqTitle>{t("FAQ")}</FaqTitle>
            <FaqSection>
                <FaqSubTitle>{t("How do I place an order?")}</FaqSubTitle>
                <FaqText>{t("To place an order, select the products you want, add them to your cart, and proceed to checkout.")}</FaqText>
            </FaqSection>
            <FaqSection>
                <FaqSubTitle>{t("What payment methods are available?")}</FaqSubTitle>
                <FaqText>{t("We accept credit cards, PayPal, and cash on delivery (where available).")}</FaqText>
            </FaqSection>
            <FaqSection>
                <FaqSubTitle>{t("How long will delivery take?")}</FaqSubTitle>
                <FaqText>{t("Delivery usually takes 3–5 business days depending on your location.")}</FaqText>
            </FaqSection>
            <FaqSection>
                <FaqSubTitle>{t("Can I return a product?")}</FaqSubTitle>
                <FaqText>{t("Yes, you can return any product within 14 days, provided it’s in its original condition.")}</FaqText>
            </FaqSection>
            <FaqSection>
                <FaqSubTitle>{t("How can I contact support?")}</FaqSubTitle>
                <FaqText>{t("You can reach our support team via the Contact page or by emailing support@shop.com.")}</FaqText>
            </FaqSection>
            <NavigationButtons />
        </FaqContainer>
    );
};
