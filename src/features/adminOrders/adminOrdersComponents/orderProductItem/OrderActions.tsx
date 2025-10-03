import { ActionButton, ActionsContainer } from "@/features";

interface OrderActionsProps {
    id: string;
    updateStatus: (id: string, status: string) => void;
    onDelete: () => void;
}

export const OrderActions = ({ id, updateStatus, onDelete }: OrderActionsProps) => (
    <ActionsContainer>
        <ActionButton color="#3498db" onClick={() => updateStatus(id, "new")}>New</ActionButton>
        <ActionButton color="#f39c12" onClick={() => updateStatus(id, "processing")}>Processing</ActionButton>
        <ActionButton color="#2ecc71" onClick={() => updateStatus(id, "completed")}>Completed</ActionButton>
        <ActionButton color="#e74c3c" onClick={() => updateStatus(id, "cancelled")}>Cancelled</ActionButton>
        <ActionButton color="#7f8c8d" onClick={onDelete}>Delete</ActionButton>
    </ActionsContainer>
);
