import { Skeleton } from "./Skeleton";
import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    padding: 20px;
    margin: 0 auto;
    max-width: 900px;
`;

export const ProductCardSkeleton = () => {
    return (
        <Card>
            <Skeleton width="70%" height="40px" />
            <Skeleton width="50%" height="50px" />
            <Skeleton width="90%" height="400px" />
            <Skeleton height="40px" />
            <Skeleton height="160px" />
        </Card>
    );
};
