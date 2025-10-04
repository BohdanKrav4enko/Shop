import {AdminModalButtonsWrapper, ModalHeader, StyledButton} from "../../index.ts";
import {useTranslation} from "react-i18next";

interface ConfirmModalProps {
    title: string;
    isOpen: boolean;
    onConfirm: () => void;
    onClose: () => void;
}

export const ConfirmModal = ({ title, isOpen, onConfirm, onClose }: ConfirmModalProps) => {
    const {t} = useTranslation();
    if (!isOpen) return null;

    return (
        <>
            <ModalHeader id="confirm-modal-title">{title}</ModalHeader>
            <AdminModalButtonsWrapper role="dialog" aria-modal="true" aria-labelledby="confirm-modal-title">
                <StyledButton onClick={() => { onConfirm(); onClose(); }}>{t("Yes")}</StyledButton>
                <StyledButton onClick={onClose}>{t("No")}</StyledButton>
            </AdminModalButtonsWrapper>
        </>
    );
};
