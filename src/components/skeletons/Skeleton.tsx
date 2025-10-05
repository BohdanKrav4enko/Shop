import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
    0% {
        background-position: -400px 0;
    }
    100% {
        background-position: 400px 0;
    }
`;

const SkeletonWrapper = styled.div<{ width?: string; height?: string }>`
    display: inline-block;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "20px"};
    border-radius: 4px;
    background-image: linear-gradient(
            90deg,
            ${({ theme }) => theme.palette.skeleton.start} 0px,
            ${({ theme }) => theme.palette.skeleton.middle} 40px,
            ${({ theme }) => theme.palette.skeleton.start} 80px
    );
    background-size: 400px 100%;
    animation: ${shimmer} 1.2s infinite linear;
`;

interface SkeletonProps {
    width?: string;
    height?: string;
}
export const Skeleton: React.FC<SkeletonProps> = ({ width, height }) => {
    return <SkeletonWrapper width={width} height={height} />;
};