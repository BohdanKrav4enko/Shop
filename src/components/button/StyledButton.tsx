import {Button} from "./index.ts";
import {useAppSelector} from "@/components";

interface ButtonsWrapperProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset"
}
export const StyledButton = (props: ButtonsWrapperProps) => {
    const themeMode = useAppSelector(state => state.app.themeMode);
    const {children, onClick, disabled} = props;
    return <Button themeMode={themeMode}  disabled={disabled} onClick={onClick}>{children}</Button>
};