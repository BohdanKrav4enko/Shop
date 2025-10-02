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

export const SignUpModal = () => {
    const dispatch = useAppDispatch();
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
            <ModalHeader>{signUpMode ? "Sign up" : "Sign in"}</ModalHeader>
            <ModalSignUpInputsContainer as="form"
                                        onSubmit={signUpMode ? signUpForm.handleSubmit(handleSignUp) : signInForm.handleSubmit(handleSignIn)}>
                {signUpMode
                    ? <SignUpForm errors={signUpForm.formState.errors} {...signUpForm}  />
                    : <SignInForm errors={signInForm.formState.errors} {...signInForm} />}
            </ModalSignUpInputsContainer>
            <AdminModalButtonsWrapper>
                <ModalText>Or</ModalText>
                <StyledButton type="button" onClick={() => {
                    setSignUpMode(!signUpMode);
                    signUpForm.reset();
                    signInForm.reset();
                }}>
                    {signUpMode ? "Sign In" : "Sign up"}
                </StyledButton>
                <StyledButton type="button" onClick={()=>{dispatch(closeModal())}}>Back</StyledButton>
            </AdminModalButtonsWrapper>
        </AdminModalWrapper>
    );
};
