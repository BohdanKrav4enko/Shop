import { useState } from "react";
import {MobileBurger, MobileSidebar} from "./index.ts";

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
            <MobileBurger isOpen={isOpen} onClick={onCloseHandler} />
            <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};
