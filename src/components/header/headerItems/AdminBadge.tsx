import {BadgeCheck} from "lucide-react";
import {useAppSelector, TextAdmin} from "../../index.ts";

export const AdminBadge = () => {
    const admin = useAppSelector(state => state.app.isAdmin);

    return admin ? (
        <TextAdmin>
            <BadgeCheck style={{width: "40px"}}/>
        </TextAdmin>
    ) : null;
};