import styled from "styled-components";

export const ProductItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2px;

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 16px;
        button {
            width: 100%;
        }
    }
`;
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

export const ProductItemWrapperFooter = styled(ProductItemWrapper)`
    button {
        width: 100%;
    }
`

export const CategoryWrapper = styled.div`
    font-size: 16px;
    margin: 10px 0;
    color: #555;
`;
export const CategoryChangeButton = styled.button`
    background: inherit;
    border: none;
    display: flex;
    font-size: 16px;
    color: #007bff;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
        color: #0056b3;
    }
`;
