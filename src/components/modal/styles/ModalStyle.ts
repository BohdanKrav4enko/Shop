import styled from "styled-components";

export const Overlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
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
    border: none;
    background: linear-gradient(135deg, rgba(12, 11, 11, 0.67), rgba(40, 40, 40, 0.85));
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 36px;
    box-shadow: 0 4px 12px rgba(12, 11, 11, 0.67);
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

    &:hover {
        background: linear-gradient(135deg, rgba(20, 20, 20, 0.75), rgba(60, 60, 60, 0.9));
        transform: scale(1.1);
        box-shadow: 0 6px 16px rgba(12, 11, 11, 0.75);
    }

    &:active {
        transform: scale(1);
        box-shadow: 0 4px 12px rgba(12, 11, 11, 0.67);
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
    border: 1px solid rgba(12, 11, 11, 0.5);
    font-size: 16px;
    color: #fff;
    background-color: rgba(12, 11, 11, 0.67);
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &:focus {
        border-color: rgba(50, 50, 50, 0.8);
        box-shadow: 0 0 0 3px rgba(50, 50, 50, 0.3);
    }

    &::placeholder {
        color: rgba(200, 200, 200, 0.5);
    }
`;


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
        width: 40%;
    }
`
export const InputWrapper = styled.div`
    display: flex;
    gap: 1rem;
    padding-bottom: 30px;
`