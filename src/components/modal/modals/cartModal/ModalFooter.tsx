import {ModalFooterContainer, StyledButton, useAppDispatch} from "@/components";
import type {ReactNode} from "react";
import {clearFavorite} from "@/app/appSlice.ts";
import {useTranslation} from "react-i18next";

export interface ModalFooterProps {
    onClose: () => void;
    children?: ReactNode;
}

export const ModalFooter = (props: ModalFooterProps) => {
    const dispatch = useAppDispatch();
    const {onClose, children} = props;
    const {t} = useTranslation();
    return (
        <ModalFooterContainer>
            <div/>
            <StyledButton onClick={onClose}>{t("Return to shopping")}</StyledButton>
            <div onClick={()=>{dispatch(clearFavorite())}}>{children}</div>
        </ModalFooterContainer>
    );
};

