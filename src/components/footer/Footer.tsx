import { Link } from "react-router-dom";
import {FooterContainer, FooterLinks, FooterText} from "./index.ts";
import {PATH} from "@/routes/paths.ts";

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinks>
                <Link to={PATH.ABOUT_PAGE}>About</Link>
                <Link to={PATH.CONTACT_PAGE}>Contact</Link>
                <Link to={PATH.PRIVACY_PAGE}>Privacy Policy</Link>
                <Link to={PATH.FAQ_PAGE}>FAQ</Link>
            </FooterLinks>
            <FooterText>© 2025 SHOP. All rights reserved.</FooterText>
        </FooterContainer>
    );
};