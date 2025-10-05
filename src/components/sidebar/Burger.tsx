import React from "react";
import {BurgerButton} from "./index.ts";
import { X, Menu  } from 'lucide-react';
import {useTheme} from "@mui/material";


interface MobileBurgerProps {
    isOpen: boolean;
    onClick: () => void;
}

export const Burger: React.FC<MobileBurgerProps> = ({ isOpen, onClick }) => {
    const theme = useTheme();
    const iconColor = theme.palette.mode === "light" ? "black" : "white";
    return (
        <BurgerButton isOpen={isOpen} onClick={onClick}>
            {isOpen ? <X style={{ color: iconColor }} /> : <Menu style={{ color: iconColor }} />}
        </BurgerButton>
    );
};