// EditProductPageStyle.ts
import styled from "styled-components";

export const Container = styled.div`
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 10px;
`;

export const Input = styled.input`
    padding: 10px 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

export const Textarea = styled.textarea`
    padding: 10px 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    min-height: 120px;
    resize: vertical;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;
export const ActionButtons = styled.div`
    display: flex;
    gap: 15px;
`

export const FileInput = styled.input`
    padding: 6px 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;

    &:hover {
        border-color: #007bff;
    }

    &::-webkit-file-upload-button {
        cursor: pointer;
        padding: 6px 12px;
        margin-right: 10px;
        border: none;
        border-radius: 6px;
        background: linear-gradient(135deg, rgba(12, 11, 11, 0.67), rgba(40, 40, 40, 0.85));
        color: #fff;
        font-size: 14px;
    }
`;