import styled from "styled-components";

export const ShowMoreButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

export const ShowMoreButton = styled.button<{ disabled?: boolean }>`
    background: ${({ theme, disabled }) =>
            disabled ? theme.palette.action.disabledBackground : theme.palette.background.paper};
    color: ${({ theme, disabled }) =>
            disabled ? theme.palette.action.disabled : theme.palette.text.primary};
    border: 1px solid
    ${({ theme, disabled }) =>
            disabled ? theme.palette.divider : theme.palette.action.active};
    padding: 10px 20px;
    border-radius: 10px;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    font-size: 15px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    transition: all 0.2s ease;

    &:hover {
        background: ${({ theme, disabled }) =>
                disabled ? theme.palette.action.disabledBackground : theme.palette.action.hover};
        border-color: ${({ theme, disabled }) =>
                disabled ? theme.palette.divider : theme.palette.action.active};
        transform: ${({ disabled }) => (disabled ? "none" : "translateY(-1px)")};
    }

    &:active {
        background: ${({ theme, disabled }) =>
                disabled ? theme.palette.action.disabledBackground : theme.palette.action.selected};
        transform: translateY(0);
    }
`;
