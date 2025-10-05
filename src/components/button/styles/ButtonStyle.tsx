import styled from "styled-components";
import {darkTheme, lightTheme} from "@/theme";

export const Button = styled.button<{ disabled?: boolean; themeMode?: "light" | "dark" }>`
  ${({ disabled, themeMode = "light" }) => {
    const theme = themeMode === "light" ? lightTheme : darkTheme;

    return `
      background: ${disabled ? theme.palette.action?.disabledBackground || "#f2f2f2" : theme.palette.background.paper};
      color: ${disabled ? theme.palette.action?.disabled || "#aaa" : theme.palette.text.primary};
      border: 1px solid ${disabled ? "#ddd" : theme.palette.divider || "#ccc"};
      padding: 8px 16px;
      border-radius: 10px;
      cursor: ${disabled ? "not-allowed" : "pointer"};
      font-size: 15px;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease;

      &:hover {
        background: ${disabled ? theme.palette.action?.disabledBackground || "#f2f2f2" : theme.palette.action?.hover || theme.palette.background.paper};
        border-color: ${disabled ? "#ddd" : theme.palette.divider || "#bbb"};
        transform: ${disabled ? "none" : "translateY(-1px)"};
      }

      &:active {
        background: ${disabled ? theme.palette.action?.disabledBackground || "#f2f2f2" : theme.palette.action?.selected || theme.palette.background.paper};
        transform: translateY(0);
      }
    `;
}}
`;
