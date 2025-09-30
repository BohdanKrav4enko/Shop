import styled from "styled-components";

export const FaqContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: #555;
    font-size: 16px;
    line-height: 1.6;
`;

export const FaqTitle = styled.h1`
    font-size: 32px;
    font-weight: 700;
    color: #333;
    margin: 0;
`;

export const FaqSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const FaqSubTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin: 0;
`;

export const FaqText = styled.p`
    margin: 0;
`;
