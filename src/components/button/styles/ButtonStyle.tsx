import styled from "styled-components";

export const Button = styled.button<{ disabled?: boolean }>`
    background: ${({ disabled }) =>
    disabled
        ? "rgba(40,40,40,0.4)"
        : "linear-gradient(135deg, rgba(12,11,11,0.67), rgba(40,40,40,0.85))"};
    color: #fff;
    border: none;
    padding: 10px 16px;
    border-radius: 12px;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    font-size: 18px;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(12,11,11,0.67);
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

    &:hover {
        background: ${({ disabled }) =>
    disabled
        ? "rgba(40,40,40,0.4)"
        : "linear-gradient(135deg, rgba(20,20,20,0.75), rgba(60,60,60,0.9))"};
        transform: ${({ disabled }) => (disabled ? "none" : "translateY(-2px) scale(1.05)")};
        box-shadow: ${({ disabled }) =>
    disabled ? "0 4px 12px rgba(12,11,11,0.67)" : "0 6px 16px rgba(12,11,11,0.75)"};
    }

    &:active {
        transform: translateY(0) scale(1);
        box-shadow: 0 4px 12px rgba(12,11,11,0.67);
    }
`;
