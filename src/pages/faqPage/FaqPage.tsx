import {FaqContainer, FaqSection, FaqSubTitle, FaqText, FaqTitle} from "./styles/FaqPageStyle.tsx";
import {NavigationButtons} from "../../components/navigationButtons/NavigationButtons.tsx";

export const FaqPage = () => {
    return (
        <FaqContainer>
            <FaqTitle>FAQ</FaqTitle>

            <FaqSection>
                <FaqSubTitle>How do I place an order?</FaqSubTitle>
                <FaqText>
                    To place an order, select the products you want, add them to your cart, and proceed to checkout.
                </FaqText>
            </FaqSection>

            <FaqSection>
                <FaqSubTitle>What payment methods are available?</FaqSubTitle>
                <FaqText>
                    We accept credit cards, PayPal, and cash on delivery (where available).
                </FaqText>
            </FaqSection>

            <FaqSection>
                <FaqSubTitle>How long will delivery take?</FaqSubTitle>
                <FaqText>
                    Delivery usually takes 3–5 business days depending on your location.
                </FaqText>
            </FaqSection>

            <FaqSection>
                <FaqSubTitle>Can I return a product?</FaqSubTitle>
                <FaqText>
                    Yes, you can return any product within 14 days, provided it’s in its original condition.
                </FaqText>
            </FaqSection>

            <FaqSection>
                <FaqSubTitle>How can I contact support?</FaqSubTitle>
                <FaqText>
                    You can reach our support team via the Contact page or by emailing support@shop.com.
                </FaqText>
            </FaqSection>

            <NavigationButtons />
        </FaqContainer>
    );
};
