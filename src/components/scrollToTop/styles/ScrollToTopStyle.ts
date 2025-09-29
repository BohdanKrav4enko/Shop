import styled from "styled-components";

export const ArrowButton = styled.button<{ visible: boolean }>`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(12,11,11,0.67), rgba(40,40,40,0.85));
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 24px;
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
    transition: opacity 0.3s ease, transform 0.2s ease, background 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(12,11,11,0.67);
    z-index: 950;

    &:hover {
        transform: scale(1.1);
        background: linear-gradient(135deg, rgba(20,20,20,0.75), rgba(60,60,60,0.9));
        box-shadow: 0 6px 16px rgba(12,11,11,0.75);
    }

    &:active {
        transform: scale(1);
        box-shadow: 0 4px 12px rgba(12,11,11,0.67);
    }
`;
