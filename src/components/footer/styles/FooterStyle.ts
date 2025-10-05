import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: ${({ theme }) => theme.palette.background.paper};
    border-top: 1px solid ${({ theme }) => theme.palette.divider};
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    font-size: 14px;
    color: ${({ theme }) => theme.palette.text.secondary};
`;

export const FooterLinks = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;

    a {
        color: ${({ theme }) => theme.palette.text.primary};
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
            color: ${({ theme }) => theme.palette.success.main};
        }
    }
`;

export const FooterText = styled.p`
    margin: 0;
    text-align: center;
    color: ${({ theme }) => theme.palette.text.secondary};
`;
