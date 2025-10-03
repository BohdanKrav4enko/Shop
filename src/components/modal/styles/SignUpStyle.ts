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
export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    gap: 12px;
    padding: 12px;
    box-sizing: border-box;
    button {
        background: rgb(96, 104, 99);
        color: #fff;
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 500;

        &:hover {
            background: rgb(80, 88, 84);
        }

        &:active {
            background: rgb(70, 78, 74);
        }
    }
`
export const FormInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

`
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