import styled from "styled-components";
import img from "../../assets/404.svg";
import {StyledButton} from "@/components";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {PATH} from "@/routes/paths.ts";

const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: #f5f5f5;
    button{
        margin-top: 20px;
        width: 80%;
    }
`;

const ErrorImage = styled.img`
  width: 90%;
  max-width: 90vw;
  max-height: 90%;
  object-fit: contain;
`;

export const ErrorPage = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();

    return (
        <ErrorWrapper>
            <ErrorImage src={img} alt="404" />
            <StyledButton onClick={()=>navigate(PATH.HOME)}>{t("Home")}</StyledButton>
        </ErrorWrapper>
    );
};
