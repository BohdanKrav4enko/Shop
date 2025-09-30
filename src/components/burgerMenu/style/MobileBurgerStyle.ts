import styled from "styled-components";

export const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: 20px;
    left: 16px;
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 1001;
    padding: 8px;
`;
