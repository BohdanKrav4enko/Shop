import { EmptyIcon, EmptyStateWrapper, EmptySubtitle, EmptyTitle } from "./styles/EmptyStateStyle";

export const EmptyState = () => {
    return (
        <EmptyStateWrapper>
            <EmptyIcon />
            <EmptyTitle>No products found</EmptyTitle>
            <EmptySubtitle>Try selecting a different category or refreshing the page.</EmptySubtitle>
        </EmptyStateWrapper>
    );
};

