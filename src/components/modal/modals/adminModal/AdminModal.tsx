import {
    useAppDispatch,
    UserRoleStatus,
    useAppSelector,
    StyledButton,
    ModalHeader,
    ModalText,
    ModalTextContainer,
    AdminModalButtonsWrapper, AdminModalWrapper
} from "@/components";
import {setAdmin, setNotification} from "@/app/appSlice.ts";
import type {ModalProps} from "@/types/types.ts";


export const AdminModal = (props: ModalProps) => {
    const {onClose} = props;
    const dispatch = useAppDispatch();
    const isAdmin = useAppSelector((state) => state.app.isAdmin);

    const handleEnable = () => {
        dispatch(setAdmin(true))
        if (!isAdmin) dispatch(setNotification({message: "Administrator mode is enabled", type: "info"}));
        onClose()
    };
    const handleDisable = () => {
        dispatch(setAdmin(false))
        if (isAdmin) dispatch(setNotification({message: "Administrator mode is disabled", type: "info"}));
        onClose()
    };

    return <>
        <ModalHeader id="admin-modal-title">{isAdmin ? 'Disable' : 'Enable'} administrator mode?</ModalHeader>
        <AdminModalWrapper role="dialog" aria-modal="true" aria-labelledby="admin-modal-title">
            <ModalTextContainer>
                <UserRoleStatus/>
                <ModalText>In administrator mode, you can manage your products: add new items, edit existing ones, and
                    delete
                    unnecessary ones.</ModalText>
            </ModalTextContainer>
            <AdminModalButtonsWrapper>
                <StyledButton children={'Yes'}
                              onClick={isAdmin ? handleDisable : handleEnable}
                              aria-label={isAdmin ? 'Disable administrator mode' : 'Enable administrator mode'}
                />
                <StyledButton children={'No'}
                              onClick={isAdmin ? handleEnable : handleDisable}
                              aria-label="Cancel administrator mode change"
                />
            </AdminModalButtonsWrapper>
        </AdminModalWrapper>
    </>
};


