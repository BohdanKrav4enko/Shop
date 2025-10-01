import React from "react";
import styled from "styled-components";
import { ProductCardSkeleton } from "@/components";
import {Skeleton} from "./Skeleton.tsx";

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
    justify-items: center;
`;
const SkeletonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

interface ProductSkeletonGridProps {
    count?: number;
}

export const ProductSkeletonGrid: React.FC<ProductSkeletonGridProps> = ({ count = 16 }) => {
    return <>
        <SkeletonWrapper>
        <Skeleton width="90%" height="70px" />
        </SkeletonWrapper>
        <Grid>
            {Array.from({ length: count }).map((_, index) => (
                <ProductCardSkeleton key={index} />
            ))}
        </Grid>
    </>
};
