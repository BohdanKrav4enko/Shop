import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

export const ProductTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin: 0;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
`;

export const ProductPrice = styled.p`
    font-size: 30px;
    font-weight: 600;
    color: #079a0e;
`;

export const ProductImage = styled.img`
    width: 100%;
    max-width: 500px;
    height: 500px;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;
export const PriceButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
    @media (max-width: 480px) {
        flex-direction: column;
        gap: 16px;
    }
`;
export const TitleWrapper = styled.div`
        display: flex;
        justify-content: space-between;
    `