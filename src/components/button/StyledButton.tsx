import {Button} from "./styles/ButtonStyle.tsx";

interface ButtonsWrapperProps {
    children: string,
    onClick?: () => void;
    disabled?: boolean;
}
export const StyledButton = (props: ButtonsWrapperProps) => {
    const {children, onClick, disabled} = props;
    return <Button disabled={disabled} onClick={onClick}>{children}</Button>
};