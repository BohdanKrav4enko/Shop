import styled, {keyframes} from "styled-components";
import {Box} from "lucide-react";

const bounce = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
`;

export const EmptyStateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    color: #777;
`;

export const EmptyIcon = styled(Box)`
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
    color: #ccc;
    animation: ${bounce} 1.5s infinite;
`;

export const EmptyTitle = styled.h2`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #333;
`;

export const EmptySubtitle = styled.p`
    text-align: center;
    font-size: 16px;
    color: #555;
`;