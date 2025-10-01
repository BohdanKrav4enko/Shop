import { StyledButton } from "../index.ts";
import { ArrowLeft, House } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";

interface NavigationButtonsProps {
    homePath?: string;
}
export const NavigationButtons: React.FC<NavigationButtonsProps> = ({ homePath = '/' }) => {
    const navigate = useNavigate();
    return (
        <>
            <StyledButton onClick={() => navigate(-1)}>
                <ArrowLeft /> Back
            </StyledButton>
            <StyledButton onClick={() => navigate(homePath)}>
                <House /> Home
            </StyledButton>
        </>
    );
};
