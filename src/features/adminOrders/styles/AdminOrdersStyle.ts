import styled from "styled-components";

export const OrderContainer = styled.div`
    max-width: 900px;
    margin: 20px auto;
    font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export const OrderTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.palette.text.primary};
`;

export const OrderCard = styled.div`
    border: 1px solid ${({ theme }) => theme.palette.divider};
    border-radius: 8px;
    margin: 15px 0;
    padding: 15px;
    background-color: ${({ theme }) => theme.palette.background.paper};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

export const OrderHeader = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    color: ${({ theme }) => theme.palette.text.primary};
`;

export const OrderProductsList = styled.div<{ isOpen: boolean }>`
    margin-top: 10px;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    border-top: 1px solid ${({ theme }) => theme.palette.divider};
    padding-top: 10px;
`;

export const ProductItem = styled.div`
    margin-bottom: 10px;
    p {
        margin: 3px 0;
        color: ${({ theme }) => theme.palette.text.primary};
    }
`;

export const EmptyOrdersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    color: ${({ theme }) => theme.palette.text.secondary};
    gap: 16px;
`;

export const EmptyOrdersTitle = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.text.primary};
`;

export const EmptyOrdersSubtitle = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StatusDot = styled.span<{ status: string }>`
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-left: 10px;
    background-color: ${({ status, theme }) => {
        switch (status) {
            case "New":
                return theme.palette.info.main;
            case "Processing":
                return theme.palette.warning.main;
            case "Completed":
                return theme.palette.success.main;
            case "Cancelled":
                return theme.palette.error.main;
            default:
                return theme.palette.divider;
        }
    }};
`;

export const ActionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;

    @media (max-width: 520px) {
        gap: 2px;
    }
`;

export const ActionButton = styled.button<{ color?: string }>`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: ${({ color, theme }) => color || theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    cursor: pointer;
    font-size: 12px;
    flex-shrink: 1;

    @media (max-width: 520px) {
        padding: 5px 4px;
    }

    &:hover {
        opacity: 0.8;
    }
`;
