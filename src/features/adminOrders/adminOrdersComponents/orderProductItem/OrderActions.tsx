import { ActionButton, ActionsContainer } from "@/features";
import {useTranslation} from "react-i18next";

interface OrderActionsProps {
    id: string;
    updateStatus: (id: string, status: string) => void;
    onDelete: () => void;
}

export const OrderActions = ({ id, updateStatus, onDelete }: OrderActionsProps) => {
    const { t } = useTranslation();

    return (
        <ActionsContainer>
            <ActionButton color="#3498db" onClick={() => updateStatus(id, "New")}>
                {t("New")}
            </ActionButton>
            <ActionButton color="#f39c12" onClick={() => updateStatus(id, "Processing")}>
                {t("Processing")}
            </ActionButton>
            <ActionButton color="#2ecc71" onClick={() => updateStatus(id, "Completed")}>
                {t("Completed")}
            </ActionButton>
            <ActionButton color="#e74c3c" onClick={() => updateStatus(id, "Cancelled")}>
                {t("Cancelled")}
            </ActionButton>
            <ActionButton color="#7f8c8d" onClick={onDelete}>
                {t("Delete")}
            </ActionButton>
        </ActionsContainer>
    );
};
