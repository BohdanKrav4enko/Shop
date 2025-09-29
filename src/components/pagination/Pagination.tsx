import React from "react";
import { PageNumber, PaginationWrapper } from "./PaginationStyles.ts";
import { StyledButton } from "../button/StyledButton.tsx";
import {useAppDispatch} from "../hooks/hooks.ts";
import {setPage} from "../../app/appSlice.ts";

interface PaginationProps {
    page: number;
    isNextDisabled?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({ page, isNextDisabled }) => {
    const dispatch = useAppDispatch();

    return (
        <PaginationWrapper>
            <StyledButton onClick={() => dispatch(setPage(Math.max(page - 1, 0)))} disabled={page === 0}>
                Prev
            </StyledButton>
            <PageNumber>Page {page + 1}</PageNumber>
            <StyledButton onClick={() => dispatch(setPage(page + 1))} disabled={isNextDisabled}>
                Next
            </StyledButton>
        </PaginationWrapper>
    );
};
