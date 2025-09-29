import { TextAdmin } from "../styles/HeaderStyle";
import { BadgeCheck } from "lucide-react";
import { useAppSelector } from "../../hooks/hooks.ts";

export const AdminBadge = () => {
    const admin = useAppSelector(state => state.app.isAdmin);

    return admin ? (
        <TextAdmin>
            Admin <BadgeCheck style={{ width: "20px" }} />
        </TextAdmin>
    ) : null;
};