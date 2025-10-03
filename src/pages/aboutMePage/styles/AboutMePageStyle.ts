import styled from "styled-components";

export const AboutMeContainer = styled.div`
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

export const AboutMeTitle = styled.h1`
    font-size: 32px;
    font-weight: 700;
    color: #333;
    margin: 0;
`;

export const AboutMeSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const AboutMeSubTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin: 0;
`;

export const AboutMeText = styled.p`
    margin: 0;
`;
export const AboutMeInput = styled.input<{ disabled?: boolean }>`
    background: ${({ disabled }) => (disabled ? "#f2f2f2" : "#f9f9f9")};
    color: ${({ disabled }) => (disabled ? "#aaa" : "#333")};
    border: 1px solid ${({ disabled }) => (disabled ? "#ddd" : "#ccc")};
    padding: 8px 12px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 400;
    outline: none;
    transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        background: ${({ disabled }) => (disabled ? "#f2f2f2" : "#f0f0f0")};
        border-color: ${({ disabled }) => (disabled ? "#ddd" : "#bbb")};
    }

    &:focus {
        border-color: #999;
        background: #fff;
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    }

    &:disabled {
        cursor: not-allowed;
    }
`;
export const StyleMeError = styled.p`
    font-size: 12px;
    color: red;
`
