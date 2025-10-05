import styled from "styled-components";

export const PageContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 16px;
    line-height: 1.6;
`;

export const PageTitle = styled.h1`
    font-size: 32px;
    font-weight: 700;
    color: ${({ theme }) => theme.palette.text.primary};
    margin: 0;
`;

export const PageSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const PageSubTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.text.primary};
    margin: 0;
`;

export const PageText = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.palette.text.secondary};
`;
