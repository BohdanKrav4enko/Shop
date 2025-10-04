import {
    PrivacyContainer,
    PrivacySection,
    PrivacySubTitle,
    PrivacyText,
    PrivacyTitle
} from "./index.ts";
import { NavigationButtons } from "@/components";
import { useTranslation } from "react-i18next";

export const PrivacyPage = () => {
    const { t } = useTranslation();

    return (
        <PrivacyContainer>
            <PrivacyTitle>{t("Privacy Policy")}</PrivacyTitle>

            <PrivacySection>
                <PrivacySubTitle>{t("Information Collection")}</PrivacySubTitle>
                <PrivacyText>
                    {t("We respect your privacy. Any personal information collected on this website, such as email or order details, is used only to process orders and improve your shopping experience.")}
                </PrivacyText>
            </PrivacySection>

            <PrivacySection>
                <PrivacySubTitle>{t("Information Usage")}</PrivacySubTitle>
                <PrivacyText>
                    {t("We do not sell or share your information with third parties. Your information is kept safe and used only for purposes related to your purchases.")}
                </PrivacyText>
            </PrivacySection>

            <PrivacySection>
                <PrivacySubTitle>{t("Cookies")}</PrivacySubTitle>
                <PrivacyText>
                    {t("Our website uses cookies to enhance user experience, track site usage, and improve our services. Cookies do not store sensitive personal information.")}
                </PrivacyText>
            </PrivacySection>

            <PrivacySection>
                <PrivacySubTitle>{t("Third-Party Services")}</PrivacySubTitle>
                <PrivacyText>
                    {t("We may use third-party services to process orders or send emails. These services are bound by privacy agreements and do not use your data for unrelated purposes.")}
                </PrivacyText>
            </PrivacySection>

            <PrivacySection>
                <PrivacySubTitle>{t("Agreement")}</PrivacySubTitle>
                <PrivacyText>
                    {t("By using our website, you agree to the collection and use of information according to this policy.")}
                </PrivacyText>
            </PrivacySection>
            <NavigationButtons/>
        </PrivacyContainer>
    );
};
