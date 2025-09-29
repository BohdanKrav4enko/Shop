import styled from "styled-components";
export const CartLayout = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 80vh;
    height: auto; 
`
export const Content = styled.div`
    overflow-y: auto;
    max-height: 80vh;
    height: 80vh;
    min-height: 80%;
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
`
export const Footer = styled.div`
    border-top: 1px solid #eee;
    margin-top: auto;
    padding: 10px;
    background: #fff;
    position: sticky;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
`
export const Total = styled.p`
    font-weight: 700;
    font-size: 18px;
    text-align: right;
`
export const TotalContainer = styled.div`
   width: 120px;
    display: flex;
    justify-content: flex-start;
`
export const ClearButton = styled.button`
    border: none;
    background: none;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
        color: red; 
    }
`