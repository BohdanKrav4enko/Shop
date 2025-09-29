import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #f9f9f9;
    border-top: 1px solid #e0e0e0;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    font-size: 14px;
    color: #555;
`;

export const FooterLinks = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;

    a {
        color: #333;
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
            color: #079a0e;
        }
    }
`;

export const FooterText = styled.p`
    margin: 0;
    text-align: center;
    color: #777;
`;
