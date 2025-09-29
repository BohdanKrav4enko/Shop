import styled from "styled-components";

export const PaginationWrapper = styled.div`
    position: fixed;
    bottom: 16px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 12px;
    z-index: 1000;
`

export const PageNumber = styled.span`
    display: flex;
    align-items: center;
    font-weight: 500;
`