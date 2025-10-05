import styled from "styled-components";

export const ModalSignUpInputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px 24px;
    margin: 30px auto;
    width: 80%;

    @media (max-width: 480px) {
        width: 100%;
    }

    @media (max-height: 900px) {
        margin: 0 auto;
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
        background: ${({ theme }) => theme.palette.primary.main};
        color: ${({ theme }) => theme.palette.primary.contrastText};
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 500;
        border: none;
        cursor: pointer;
        transition: background 0.2s ease, transform 0.15s ease;

        &:hover {
            background: ${({ theme }) => theme.palette.primary.dark};
        }

        &:active {
            background: ${({ theme }) => theme.palette.primary.light};
        }
    }
`;

export const FormInputWrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    box-sizing: border-box;
    @media (max-height: 800px) {
        gap: 2px;
    }
`;

export const StyledSignUpInput = styled.input<{ hasError?: boolean }>`
    width: 100%;
    padding: 10px 14px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.palette.divider};
    font-size: 15px;
    color: ${({ theme }) => theme.palette.text.primary};
    background: ${({ theme }) => theme.palette.background.paper};
    transition: border-color 0.2s ease, background 0.2s ease;
    margin-bottom: 0;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.palette.primary.main};
        background: ${({ theme }) => theme.palette.background.default};
    }

    &::placeholder {
        color: ${({ theme }) => theme.palette.text.secondary};
    }
`;

export const InputError = styled.span`
    display: block;
    font-size: 10px;
    color: ${({ theme }) => theme.palette.error.main};
`;
