import styled from "styled-components";
export const CartLayout = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%; 
`
export const CartContent = styled.div`
    overflow-y: auto;
    height: 100%;
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
`
export const ModalFooterContainer = styled.div`
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
    @media (max-width: 500px) {
        button{
            font-size: 12px;
        }
    }
`
export const CartTotal = styled.p`
    font-weight: 700;
    font-size: 18px;
    text-align: right;
`
export const TotalContainer = styled.div`
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