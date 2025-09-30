import styled from "styled-components";

export const Overlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.68);
    display: ${({isOpen}) => (isOpen ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 20px;
`;

export const ModalContainer = styled.div`
    max-width: 800px;
    width: 100%;
    overflow-y: auto;
    max-height: 90vh;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 24px 24px 0 24px;
    z-index: 900;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid #ddd;
    background: #fff;
    color: #333;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 36px;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

    &:hover {
        background: #f5f5f5;
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
    border: 1px solid #ccc;
    font-size: 16px;
    color: #333;
    background-color: #fff;
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        border-color: #bbb;
    }
    &:focus {
        border-color: #888;
        box-shadow: 0 0 0 3px rgba(100, 100, 100, 0.15);
    }
    &::placeholder {
        color: #aaa;
    }
`

export const ModalHeader = styled.h3`
    margin: 0 0 12px 0;
    font-size: 22px;
    font-weight: 700;
    color: #222;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 8px;
`;

export const ModalText = styled.p`
    margin: 0 auto;
    font-size: 16px;
    line-height: 1.4;
    color: #555;
`;
export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 30px;
    button{
        width: 100%;
    }
`
export const InputWrapper = styled.div`
    display: flex;
    gap: 1rem;
    padding-bottom: 30px;
`