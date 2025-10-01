import {ModalFooterContainer, StyledButton, useAppDispatch} from "@/components";
import type {ReactNode} from "react";
import {clearFavorite} from "@/app/appSlice.ts";

export interface ModalFooterProps {
    onClose: () => void;
    children?: ReactNode;
}

export const ModalFooter = (props: ModalFooterProps) => {
    const dispatch = useAppDispatch();
    const {onClose, children} = props;
    return (
        <ModalFooterContainer>
            <div/>
            <StyledButton onClick={onClose}>Return to shopping</StyledButton>
            <div onClick={()=>{dispatch(clearFavorite())}}>{children}</div>
        </ModalFooterContainer>
    );
};

