import {
    AdminModalButtonsWrapper,
    AdminModalWrapper,
    ModalHeader,
    ModalSignUpInputsContainer,
    ModalText,
    SignInForm,
    SignUpForm,
    StyledButton, useAppDispatch,
    useAuthForms
} from "@/components";
import {closeModal} from "@/app/modalSlice.ts";
import {useTranslation} from "react-i18next";

export const SignUpModal = () => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const {
        signUpMode,
        setSignUpMode,
        signUpForm,
        signInForm,
        handleSignUp,
        handleSignIn
    } = useAuthForms();

    return (
        <AdminModalWrapper role="dialog" aria-modal="true">
            <ModalHeader>{signUpMode ? t("Sign up") : t("Sign in")}</ModalHeader>
            <ModalSignUpInputsContainer as="form"
                                        onSubmit={signUpMode ? signUpForm.handleSubmit(handleSignUp) : signInForm.handleSubmit(handleSignIn)}>
                {signUpMode
                    ? <SignUpForm errors={signUpForm.formState.errors} {...signUpForm}  />
                    : <SignInForm errors={signInForm.formState.errors} {...signInForm} />}
            </ModalSignUpInputsContainer>
            <AdminModalButtonsWrapper>
                <ModalText>{t("Or")}</ModalText>
                <StyledButton type="button" onClick={() => {
                    setSignUpMode(!signUpMode);
                    signUpForm.reset();
                    signInForm.reset();
                }}>
                    {signUpMode ? t("Sign in") : t("Sign up")}
                </StyledButton>
                <StyledButton type="button" onClick={()=>{dispatch(closeModal())}}>{t("Back")}</StyledButton>
            </AdminModalButtonsWrapper>
        </AdminModalWrapper>
    );
};
