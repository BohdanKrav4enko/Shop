import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",

        primary: {
            main: "#ffffff",
            contrastText: "#121212",
        },

        secondary: {
            main: "#f48fb1",
            contrastText: "#121212",
        },

        background: {
            default: "#121212",
            paper: "#1e1e1e",
        },

        text: {
            primary: "#ffffff",
            secondary: "#bbbbbb",
            disabled: "#555555",
        },

        divider: "#333333",
        action: {
            active: "#ffffff",
            hover: "#1a1a1a",
            selected: "#2a2a2a",
            disabled: "#555555",
            disabledBackground: "#2a2a2a",
        },
        skeleton: {
            start: "#3a3a3a",
            middle: "#555"
        },
    },
    typography: {
        fontFamily: "'Roboto', sans-serif",
    },

    shape: {
        borderRadius: 10,
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            },
        },
    },
});
