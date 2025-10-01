import {AboutContainer, AboutSection, AboutSubTitle, AboutText, AboutTitle} from "./index.ts";
import {NavigationButtons} from "@/components";

export const AboutPage = () => {
    return (
        <AboutContainer>
            <AboutTitle>About Us</AboutTitle>

            <AboutSection>
                <AboutSubTitle>Our Mission</AboutSubTitle>
                <AboutText>
                    SHOP is dedicated to providing high-quality products at affordable prices. We aim to create a seamless and enjoyable shopping experience for all our customers.
                </AboutText>
            </AboutSection>
            <AboutSection>
                <AboutSubTitle>Our Story</AboutSubTitle>
                <AboutText>
                    Founded in 2025, SHOP started as a small online store and has grown into a trusted platform for a variety of products. We value quality, trust, and customer satisfaction.
                </AboutText>
            </AboutSection>
            <AboutSection>
                <AboutSubTitle>Why Choose Us</AboutSubTitle>
                <AboutText>
                    With fast shipping, responsive support, and a wide range of products, SHOP is the trusted choice for customers who value reliability.
                </AboutText>
            </AboutSection>
            <AboutSection>
                <AboutSubTitle>Looking Ahead</AboutSubTitle>
                <AboutText>
                    We continue to expand our selection and improve our services to offer the best online shopping experience possible.
                </AboutText>
            </AboutSection>
            <AboutSection>
                <AboutSubTitle>Our Values</AboutSubTitle>
                <AboutText>
                    We prioritize customer satisfaction, honesty, and quality. Every product is carefully selected to meet our high standards.
                </AboutText>
            </AboutSection>
            <NavigationButtons/>
        </AboutContainer>
    );
};
