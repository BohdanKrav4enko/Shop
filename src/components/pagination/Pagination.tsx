import React from "react";
import {PageNumber, PaginationWrapper, StyledPaginationButton} from "./PaginationStyles.ts";
import {useAppDispatch} from "../hooks/hooks.ts";
import {setPage} from "../../app/appSlice.ts";
import {CircleArrowLeft, CircleArrowRight} from 'lucide-react';

interface PaginationProps {
    page: number;
    isNextDisabled?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({page, isNextDisabled}) => {
    const dispatch = useAppDispatch();

    return (
        <PaginationWrapper>
            <StyledPaginationButton onClick={() => dispatch(setPage(Math.max(page - 1, 0)))} disabled={page === 0}>
                <CircleArrowLeft/>
            </StyledPaginationButton>
            <PageNumber>Page {page + 1}</PageNumber>
            <StyledPaginationButton onClick={() => dispatch(setPage(page + 1))} disabled={isNextDisabled}>
                <CircleArrowRight/>
            </StyledPaginationButton>
        </PaginationWrapper>
    );
};

