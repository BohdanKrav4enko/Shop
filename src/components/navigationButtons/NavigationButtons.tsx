import { StyledButton } from "../index.ts";
import { ArrowLeft, House } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";
import {useTranslation} from "react-i18next";

interface NavigationButtonsProps {
    homePath?: string;
}
export const NavigationButtons: React.FC<NavigationButtonsProps> = ({ homePath = '/' }) => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    return (
        <>
            <StyledButton onClick={() => navigate(-1)}>
                <ArrowLeft /> {t("Back")}
            </StyledButton>
            <StyledButton onClick={() => navigate(homePath)}>
                <House /> {t("Home")}
            </StyledButton>
        </>
    );
};
