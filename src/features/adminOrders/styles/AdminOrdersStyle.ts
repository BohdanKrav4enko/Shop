import styled from "styled-components";

export const OrderContainer = styled.div`
  max-width: 900px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
`;
export const OrderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const OrderCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 15px 0;
  padding: 15px;
  background-color: #fafafa;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;
export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
export const OrderProductsList = styled.div<{isOpen: boolean}>`
  margin-top: 10px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  border-top: 1px solid #ddd;
  padding-top: 10px;
`;
export const ProductItem = styled.div`
  margin-bottom: 10px;
  p {
    margin: 3px 0;
  }
`;
export const StatusDot = styled.span<{ status: string }>`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-left: 10px;
  background-color: ${({ status }) => {
    switch (status) {
        case "new":
            return "#3498db";
        case "processing":
            return "#f39c12";
        case "completed":
            return "#2ecc71";
        case "cancelled":
            return "#e74c3c";
        default:
            return "#bdc3c7";
    }
}}
`
export const ActionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
`;
export const ActionButton = styled.button<{ color?: string }>`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: ${({color}) => color || "#3498db"};
    color: white;
    cursor: pointer;
    font-size: 12px;
    flex-shrink: 1;
    @media (max-width: 450px) {
        padding: 5px 4px;
    }
    &:hover {
        opacity: 0.8;
    }
`;