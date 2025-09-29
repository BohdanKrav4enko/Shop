import {ButtonsWrapper, ModalHeader} from "../styles/ModalStyle.ts";
import {StyledButton} from "../../button/StyledButton.tsx";
import {useDeleteProductMutation} from "../../../api/productsApi.ts";
import {useNavigate} from "react-router-dom";
import {setError} from "../../../app/appSlice.ts";
import {useAppDispatch} from "../../hooks/hooks.ts";
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
            navigate('/');
        } catch (err: unknown) {
            let message = "Unknown Error";
            if (err && typeof err === "object" && "data" in err) {
                const e = err as { data?: { message?: string } };
                message = e.data?.message || message;
            }
            dispatch(setError(message));
        }
    };
    const handleDisable = () => {
        onClose()
    };

    return <>
        <ModalHeader>Remove item?</ModalHeader>
        <ButtonsWrapper>
            <StyledButton children={'Yes'} onClick={handleEnable}/>
            <StyledButton children={'No'} onClick={handleDisable}/>
        </ButtonsWrapper>
    </>
};