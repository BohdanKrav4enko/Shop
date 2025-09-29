import React from "react";
import styled from "styled-components";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 20px;
    padding: 20px;
    justify-items: center;
`;

interface ProductSkeletonGridProps {
    count?: number;
}

export const ProductSkeletonGrid: React.FC<ProductSkeletonGridProps> = ({ count = 16 }) => {
    return (
        <Grid>
            {Array.from({ length: count }).map((_, index) => (
                <ProductCardSkeleton key={index} />
            ))}
        </Grid>
    );
};
