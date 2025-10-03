import {ErrorIcon, ErrorMessage, ErrorWrapper, RetryButton} from "@/components";

export const ErrorFetch = ({ onRetry }: { onRetry?: () => void }) => {
    return (
        <ErrorWrapper>
            <ErrorIcon />
            <ErrorMessage>Oops! Something went wrong.</ErrorMessage>
            {onRetry && <RetryButton onClick={onRetry}>Try again</RetryButton>}
        </ErrorWrapper>
    );
};
