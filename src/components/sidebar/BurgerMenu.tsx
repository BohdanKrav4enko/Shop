import { useState } from "react";
import {Burger, Sidebar} from "./index.ts";

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onCloseHandler = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    return (
        <>
            <Burger isOpen={isOpen} onClick={onCloseHandler} />
            <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};
