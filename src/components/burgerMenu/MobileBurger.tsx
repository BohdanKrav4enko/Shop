import React from "react";
import {BurgerButton} from "./style/MobileBurgerStyle.ts";
import { X, Menu  } from 'lucide-react';


interface MobileBurgerProps {
    isOpen: boolean;
    onClick: () => void;
}

export const MobileBurger: React.FC<MobileBurgerProps> = ({ isOpen, onClick }) => {
    return (
        <BurgerButton isOpen={isOpen} onClick={onClick}>
            {isOpen? <X style={{color: 'black'}}/> : <Menu style={{color: 'black'}}/>}
        </BurgerButton>
    );
};
