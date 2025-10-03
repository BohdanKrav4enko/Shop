import {AdminModalButtonsWrapper, ModalHeader, StyledButton} from "../../index.ts";

interface ConfirmModalProps {
    title: string;
    isOpen: boolean;
    onConfirm: () => void;
    onClose: () => void;
}

export const ConfirmModal = ({ title, isOpen, onConfirm, onClose }: ConfirmModalProps) => {
    if (!isOpen) return null;

    return (
        <>
            <ModalHeader id="confirm-modal-title">{title}</ModalHeader>
            <AdminModalButtonsWrapper role="dialog" aria-modal="true" aria-labelledby="confirm-modal-title">
                <StyledButton onClick={() => { onConfirm(); onClose(); }}>Yes</StyledButton>
                <StyledButton onClick={onClose}>No</StyledButton>
            </AdminModalButtonsWrapper>
        </>
    );
};
