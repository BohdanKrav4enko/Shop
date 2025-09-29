import styled from "styled-components";

export const Button = styled.button<{ disabled?: boolean }>`
    background: ${({ disabled }) => (disabled ? "#f2f2f2" : "#f9f9f9")};
    color: ${({ disabled }) => (disabled ? "#aaa" : "#333")};
    border: 1px solid ${({ disabled }) => (disabled ? "#ddd" : "#ccc")};
    padding: 8px 16px;
    border-radius: 10px;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    font-size: 15px;
    font-weight: 500;

    transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease;

    &:hover {
        background: ${({ disabled }) => (disabled ? "#f2f2f2" : "#f0f0f0")};
        border-color: ${({ disabled }) => (disabled ? "#ddd" : "#bbb")};
        transform: ${({ disabled }) => (disabled ? "none" : "translateY(-1px)")};
    }

    &:active {
        background: ${({ disabled }) => (disabled ? "#f2f2f2" : "#e6e6e6")};
        transform: translateY(0);
    }
`;
