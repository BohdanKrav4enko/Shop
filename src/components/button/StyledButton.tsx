import {Button} from "./index.ts";

interface ButtonsWrapperProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}
export const StyledButton = (props: ButtonsWrapperProps) => {
    const {children, onClick, disabled} = props;
    return <Button disabled={disabled} onClick={onClick}>{children}</Button>
};