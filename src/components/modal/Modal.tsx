import React, {useEffect} from "react";
import {CloseButton, ModalContainer, Overlay} from "./index.ts";
import {useAppDispatch, useAppSelector} from "@/components";
import {closeModal} from "@/app/modalSlice.ts";

export const Modal = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector(state => state.modal.openModal !== null);

    const onClose = () => dispatch(closeModal());

    useEffect(() => {
        const html = document.documentElement;
        html.style.overflow = isOpen ? "hidden" : "";
        return () => { html.style.overflow = ""; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <Overlay
            isOpen={isOpen}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose} aria-label="Close modal" />
                {children}
            </ModalContainer>
        </Overlay>
    );
};
