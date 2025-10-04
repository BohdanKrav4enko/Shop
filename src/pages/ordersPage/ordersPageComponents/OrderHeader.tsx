import {StyledButton} from "@/components";
import {PATH} from "@/routes/paths.ts";
import {ArrowLeft, RefreshCcw} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const OrderHeaderContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
   
`
export const OrderHeaderButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    padding: 10px;
    button{
        width: 100%;
    }
    @media (max-width: 500px) {
        flex-direction: column;
    }
 
`

export const OrderHeader = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    return ( <>
        <OrderHeaderContainer>
            <h1>{t("Orders")}</h1>
            <OrderHeaderButtonContainer style={{ width: "100%" }}>
                <StyledButton onClick={() => navigate(PATH.HOME)}><ArrowLeft />{t("Back")}</StyledButton>
                <StyledButton onClick={() => window.location.reload()}><RefreshCcw />{t("Refresh")}</StyledButton>
            </OrderHeaderButtonContainer>
        </OrderHeaderContainer>
    </>);
};


