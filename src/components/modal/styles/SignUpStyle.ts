import styled, {css} from "styled-components";

export const ModalSignUpInputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px 24px;
    margin: 30px auto 30px auto;
    width: 80%;
    @media (max-width: 480px) {
        width: 100%;
    }
    @media (max-height: 900px) {
        margin: 0 auto 0 auto;
    }
`;

export const StyledSignUpInput = styled.input<{ hasError?: boolean }>`
    width: 100%;
    padding: 10px 14px;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 15px;
    color: #333;
    background: #f9f9f9;
    transition: border-color 0.2s ease, background 0.2s ease;
    margin-bottom: 0;

    &:focus {
        outline: none;
        border-color: #999;
        background: #fff;
    }

    &::placeholder {
        color: #aaa;
    }

    ${props => props.hasError && css`
        border-color: #ff4d4f;
        background: #fff1f0;
    `}
`;

export const InputError = styled.span`
    display: block;
    font-size: 10px;
    color: #ff4d4f;
`;