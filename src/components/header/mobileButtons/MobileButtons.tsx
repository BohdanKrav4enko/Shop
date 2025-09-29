import {Badge, ButtonsWrapperModile, CartWrapper} from "../styles/HeaderStyle.ts";
import {Link} from "react-router-dom";
import {StyledButton} from "../../button/StyledButton.tsx";
import {useAppSelector} from "../../hooks/hooks.ts";
import type {Product} from "../../../types/types.ts";
import type {ModalType} from "../Header.tsx";

interface MobileButtonsProps {
    setOpenModal: React.Dispatch<React.SetStateAction<ModalType>>
    items: Product[]
}

export const MobileButtons = (props: MobileButtonsProps) => {
    const admin = useAppSelector(state => state.app.isAdmin);
    const {items, setOpenModal} = props

    return (
        <ButtonsWrapperModile>
            {admin &&<Link to={`/add-product/`}><StyledButton children={'➕'}/></Link>}
            <StyledButton onClick={() => setOpenModal("search")}>🔍</StyledButton>
            <StyledButton onClick={() => setOpenModal("admin")}>💼</StyledButton>
            <CartWrapper>
                <StyledButton onClick={() => setOpenModal("cart")}>🛒</StyledButton>
                {items.length !== 0 && <Badge>{items.length}</Badge>}
            </CartWrapper>
        </ButtonsWrapperModile>
    );
};

