import styled from "styled-components";

export const Overlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.68);
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    z-index: 1200;
    padding: 20px;
`;

export const ModalContainer = styled.div`
    max-width: 800px;
    width: 100%;
    overflow-y: auto;
    height: 80vh;
    background: ${({ theme }) => theme.palette.background.paper};
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 24px 24px 0 24px;
    z-index: 1200;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.palette.divider};
    background: ${({ theme }) => theme.palette.background.paper};
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 36px;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

    &:hover {
        background: ${({ theme }) => theme.palette.action.hover};
        transform: scale(1.1);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    &:active {
        transform: scale(1);
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    }

    &::before {
        content: "×";
        display: block;
        transform: translateY(-1px);
    }
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.palette.divider};
    font-size: 16px;
    color: ${({ theme }) => theme.palette.text.primary};
    background-color: ${({ theme }) => theme.palette.background.paper};
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        border-color: ${({ theme }) => theme.palette.text.secondary};
    }
    &:focus {
        border-color: ${({ theme }) => theme.palette.primary.main};
        box-shadow: 0 0 0 3px rgba(100, 100, 100, 0.15);
    }
    &::placeholder {
        color: ${({ theme }) => theme.palette.text.secondary};
    }
`;

export const ModalHeader = styled.h3`
    margin: 0 0 12px 0;
    font-size: 22px;
    font-weight: 700;
    color: ${({ theme }) => theme.palette.text.primary};
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
    padding-bottom: 8px;
`;

export const ModalText = styled.p`
    margin: 0 auto;
    font-size: 16px;
    line-height: 1.4;
    color: ${({ theme }) => theme.palette.text.secondary};
    word-break: break-word;

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

export const AdminModalButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    padding: 20px;

    button {
        width: 80%;
    }

    @media (max-width: 480px) {
        button {
            width: 100%;
        }
    }
`;

export const AdminModalWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
`;

export const InputWrapper = styled.div`
    display: flex;
    gap: 1rem;
    padding-bottom: 30px;
`;
