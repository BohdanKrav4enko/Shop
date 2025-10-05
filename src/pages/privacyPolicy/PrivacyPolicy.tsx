import {NavigationButtons} from "@/components";
import {useTranslation} from "react-i18next";
import {PageContainer, PageSection, PageSubTitle, PageText, PageTitle} from "@/pages";

export const PrivacyPage = () => {
    const {t} = useTranslation();

    return (
        <PageContainer>
            <PageTitle>{t("Privacy Policy")}</PageTitle>

            <PageSection>
                <PageSubTitle>{t("Information Collection")}</PageSubTitle>
                <PageText>
                    {t("We respect your privacy. Any personal information collected on this website, such as email or order details, is used only to process orders and improve your shopping experience.")}
                </PageText>
            </PageSection>

            <PageSection>
                <PageSubTitle>{t("Information Usage")}</PageSubTitle>
                <PageText>
                    {t("We do not sell or share your information with third parties. Your information is kept safe and used only for purposes related to your purchases.")}
                </PageText>
            </PageSection>

            <PageSection>
                <PageSubTitle>{t("Cookies")}</PageSubTitle>
                <PageText>
                    {t("Our website uses cookies to enhance user experience, track site usage, and improve our services. Cookies do not store sensitive personal information.")}
                </PageText>
            </PageSection>

            <PageSection>
                <PageSubTitle>{t("Third-Party Services")}</PageSubTitle>
                <PageText>
                    {t("We may use third-party services to process orders or send emails. These services are bound by privacy agreements and do not use your data for unrelated purposes.")}
                </PageText>
            </PageSection>
            <PageSection>
                <PageSubTitle>{t("Agreement")}</PageSubTitle>
                <PageText>
                    {t("By using our website, you agree to the collection and use of information according to this policy.")}
                </PageText>
            </PageSection>
            <NavigationButtons/>
        </PageContainer>
    );
};
