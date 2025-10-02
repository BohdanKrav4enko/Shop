import { useAppSelector } from "@/components";
import styled from "styled-components";

const StatusContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: sans-serif;
    margin-bottom: 20px;
`;

const StatusBlock = styled.div<{ isAdmin: boolean }>`
  padding: 8px 16px;
  border-radius: 8px;
  color: ${props => (props.isAdmin ? "#28a745" : "#dc3545")};
  font-weight: bold;
`;

export const UserRoleStatus = () => {
    const isAdmin = useAppSelector(state => state.app.isAdmin);

    return (
        <StatusContainer>
            <span>User Role:</span>
            <StatusBlock
                isAdmin={isAdmin}
                aria-label={`Current user role: ${isAdmin ? 'Administrator' : 'Regular User'}`}
                aria-live="polite"
            >
                {isAdmin ? "Administrator" : "Regular User"}
            </StatusBlock>
        </StatusContainer>
    );
};
