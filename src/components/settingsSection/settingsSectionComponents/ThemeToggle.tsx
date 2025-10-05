import {IconButton, useAppDispatch, useAppSelector} from "@/components";
import { toggleTheme } from "@/app/appSlice.ts";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
    const dispatch = useAppDispatch();
    const themeMode = useAppSelector((state) => state.app.themeMode);

    return (
        <IconButton onClick={() => dispatch(toggleTheme())}>
            {themeMode === "dark" ? <Sun style={{ color: "white" }} /> : <Moon style={{ color: "#333" }} />}
        </IconButton>
    );
};
