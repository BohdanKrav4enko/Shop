import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "rgba(41,39,39,0.93)",
            contrastText: "#fff",
        },
        secondary: {
            main: "#f50057",
            contrastText: "#fff",
        },
        background: {
            default: "#f5f5f5",
            paper: "#fff",
        },
        text: {
            primary: "#000",
            secondary: "#555",
            disabled: "#aaa",
        },
        divider: "#ccc",
        action: {
            hover: "#f0f0f0",
            selected: "#e6e6e6",
            disabled: "#f2f2f2",
            disabledBackground: "#f2f2f2",
        },
        skeleton: {
            start: "#e0e0e0",
            middle: "#f0f0f0"
        },
    },
});
