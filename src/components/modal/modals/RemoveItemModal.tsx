import {useDeleteProductMutation} from "@/api/productsApi.ts";
import {useNavigate} from "react-router-dom";
import {setNotification} from "@/app/appSlice.ts";
import {PATH} from "@/routes/paths.ts";
import { useAppDispatch, StyledButton, AdminModalButtonsWrapper, ModalHeader } from "../../index.ts";
interface ModalProps {
    onClose: () => void;
    id: number;
}
export const RemoveItemModal = (props: ModalProps) => {
    const {onClose, id} = props;
    const [deleteProduct] = useDeleteProductMutation()
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleEnable = async () => {
        try {
            await deleteProduct({ id }).unwrap();
            onClose();
            dispatch(setNotification({message: "The product has been successfully removed.", type: "success"}));
            navigate(PATH.HOME);
        } catch (err: unknown) {
            let message = "Unknown Error";
            if (err && typeof err === "object" && "data" in err) {
                const e = err as { data?: { message?: string } };
                message = e.data?.message || message;
            }
            dispatch(setNotification({message, type: "error"}));
        }
    };
    const handleDisable = () => {
        onClose()
    };

    return <>
        <ModalHeader>Remove item?</ModalHeader>
        <AdminModalButtonsWrapper>
            <StyledButton children={'Yes'} onClick={handleEnable}/>
            <StyledButton children={'No'} onClick={handleDisable}/>
        </AdminModalButtonsWrapper>
    </>
};