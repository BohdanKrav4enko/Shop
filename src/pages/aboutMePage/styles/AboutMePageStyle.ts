import { Button } from "@/components";
import styled from "styled-components";

export const AboutMeInput = styled.input<{ disabled?: boolean }>`
    background: ${({ theme, disabled }) =>
            disabled ? theme.palette.action.disabledBackground : theme.palette.background.paper};
    color: ${({ theme, disabled }) =>
            disabled ? theme.palette.text.disabled : theme.palette.text.primary};
    border: 1px solid ${({ theme, disabled }) =>
            disabled ? theme.palette.divider : theme.palette.divider};
    padding: 8px 12px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 400;
    outline: none;
    transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        background: ${({ theme, disabled }) =>
                disabled ? theme.palette.action.disabledBackground : theme.palette.action.hover};
        border-color: ${({ theme, disabled }) =>
                disabled ? theme.palette.divider : theme.palette.divider};
    }
    &:focus {
        border-color: ${({ theme }) => theme.palette.primary.main};
        background: ${({ theme }) => theme.palette.background.paper};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.primary.light};
    }
    &:disabled {
        cursor: not-allowed;
    }
`;
export const StyleMeError = styled.p`
    font-size: 12px;
    color: ${({ theme }) => theme.palette.error.main};
`;
export const ProfileLogOutButton = styled(Button)`
    border: none;
    background-color: ${({ theme }) => theme.palette.error.main};
    color: ${({ theme }) => theme.palette.getContrastText(theme.palette.error.main)};

    &:hover {
        background-color: ${({ theme }) => theme.palette.error.dark};
        box-shadow: 0 4px 10px rgba(229, 57, 53, 0.3);
    }
`;

