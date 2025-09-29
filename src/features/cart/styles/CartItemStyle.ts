import styled from "styled-components";

export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    background: #fff;
    border-radius: 12px;
    padding: 8px 12px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

export const Image = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 600;
  margin-bottom: 4px;
`;

export const Price = styled.span`
  font-size: 14px;
  color: #555;
`;

export const Controls = styled.div`
  display: flex;
  gap: 4px;
`;
export const DeleteButton = styled.button`
    font-size: 24px;
    border: none;
    background: none;
    cursor: pointer;
    &:hover {
        color: red;
    }
`