import {
    ContactContainer,
    ContactSection,
    ContactSubTitle,
    ContactText,
    ContactTitle
} from "./styles/ContactPageStyle.ts";
import {MapComponent} from "../../components/mapComponent/MapComponent.tsx";
import {NavigationButtons} from "../../components/navigationButtons/NavigationButtons.tsx";

export const ContactPage = () => {
    return (
        <ContactContainer>
            <ContactTitle>Contact Us</ContactTitle>
            <ContactSection>
                <ContactSubTitle>Email</ContactSubTitle>
                <ContactText>bohdan.krav4enko@gmail.com</ContactText>
            </ContactSection>
            <ContactSection>
                <ContactSubTitle>Phone</ContactSubTitle>
                <ContactText>+380 (66) 082-7985</ContactText>
            </ContactSection>
            <ContactSection>
                <ContactSubTitle>Address</ContactSubTitle>
                <ContactText>123 SHOP Hlib Babich Street, 105, Mykolaiv, Ukraine</ContactText>
            </ContactSection>
            <MapComponent/>
            <NavigationButtons/>
        </ContactContainer>
    );
};
