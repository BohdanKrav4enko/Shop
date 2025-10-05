import { Skeleton } from "./Skeleton";
import styled from "styled-components";

const Card = styled.div`
    width: 300px;
    padding: 16px;
    border-radius: 12px;
    background: ${({theme}) => theme.palette.background.paper};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const ProductCardSkeleton = () => {
    return (
        <Card>
            <Skeleton width="100%" height="300px" />
            <Skeleton width="80%" height="40px" />
            <Skeleton width="50%" height="30px" />
        </Card>
    );
};
