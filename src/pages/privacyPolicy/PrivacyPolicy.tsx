import {
    PrivacyContainer,
    PrivacySection,
    PrivacySubTitle,
    PrivacyText,
    PrivacyTitle
} from "./index.ts";
import {NavigationButtons} from "@/components";

export const PrivacyPage = () => {
    return (
        <PrivacyContainer>
            <PrivacyTitle>Privacy Policy</PrivacyTitle>

            <PrivacySection>
                <PrivacySubTitle>Information Collection</PrivacySubTitle>
                <PrivacyText>
                    We respect your privacy. Any personal information collected on this website, such as email or order details, is used only to process orders and improve your shopping experience.
                </PrivacyText>
            </PrivacySection>

            <PrivacySection>
                <PrivacySubTitle>Information Usage</PrivacySubTitle>
                <PrivacyText>
                    We do not sell or share your information with third parties. Your information is kept safe and used only for purposes related to your purchases.
                </PrivacyText>
            </PrivacySection>

            <PrivacySection>
                <PrivacySubTitle>Cookies</PrivacySubTitle>
                <PrivacyText>
                    Our website uses cookies to enhance user experience, track site usage, and improve our services. Cookies do not store sensitive personal information.
                </PrivacyText>
            </PrivacySection>

            <PrivacySection>
                <PrivacySubTitle>Third-Party Services</PrivacySubTitle>
                <PrivacyText>
                    We may use third-party services to process orders or send emails. These services are bound by privacy agreements and do not use your data for unrelated purposes.
                </PrivacyText>
            </PrivacySection>

            <PrivacySection>
                <PrivacySubTitle>Agreement</PrivacySubTitle>
                <PrivacyText>
                    By using our website, you agree to the collection and use of information according to this policy.
                </PrivacyText>
            </PrivacySection>
            <NavigationButtons/>
        </PrivacyContainer>
    );
};
