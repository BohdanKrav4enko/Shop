import {ButtonsWrapper, ModalHeader} from "../styles/ModalStyle.ts";
import {StyledButton} from "../../button/StyledButton.tsx";
import type {ModalProps} from "./type.ts";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks.ts";
import {setAdmin} from "../../../app/appSlice.ts";

export const AdminModal = (props: ModalProps) => {
    const {onClose} = props;
    const dispatch = useAppDispatch();
    const isAdmin = useAppSelector((state) => state.app.isAdmin);

    const handleEnable = () => {
        dispatch(setAdmin(true))
        onClose()
    };
    const handleDisable = () => {
        dispatch(setAdmin(false))
        onClose()
    };

    return <>
        <ModalHeader>{isAdmin? 'Disable' : 'Enable' } administrator mode?</ModalHeader>
        <ButtonsWrapper>
                <StyledButton children={'Yes'} onClick={isAdmin? handleDisable : handleEnable }/>
                <StyledButton children={'No'} onClick={isAdmin? handleEnable : handleDisable }/>
        </ButtonsWrapper>
    </>

};

