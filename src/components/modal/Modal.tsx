import React, { useEffect } from "react";
import { Overlay, ModalContainer, CloseButton } from "./styles/ModalStyle";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    useEffect(() => {
        const html = document.documentElement;
        html.style.overflow = isOpen ? "hidden" : "";
        return () => { html.style.overflow = ""; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <Overlay isOpen={isOpen} onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose} aria-label="Close modal"/>
                {children}
            </ModalContainer>
        </Overlay>
    );
};
