import { Link } from "react-router-dom";
import {FooterContainer, FooterLinks, FooterText} from "./styles/FooterStyle.ts";

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinks>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/privacy">Privacy Policy</Link>
            </FooterLinks>
            <FooterText>© 2025 SHOP. All rights reserved.</FooterText>
        </FooterContainer>
    );
};