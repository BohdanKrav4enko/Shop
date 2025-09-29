import styled from "styled-components";

export const PaginationWrapper = styled.div`
    position: fixed;
    bottom: 16px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    z-index: 900;
`
export const StyledPaginationButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: inherit;
    padding: 8px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease, transform 0.1s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
        transform: scale(1.05);
    }
    &:active {
        transform: scale(0.95);
    }
    &:disabled {
        cursor: not-allowed;
        opacity: 0.4;
        background-color: inherit;
        transform: none;
    }
`
export const PageNumber = styled.span`
    display: flex;
    align-items: center;
    font-weight: 500;
`