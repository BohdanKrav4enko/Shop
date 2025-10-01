import React, { useState, useEffect } from "react";
import {AlertWrapper, CloseNotificationButton} from "./index.ts";

interface NotificationAlertProps {
    message: string;
    duration?: number;
    type: "success" | "error" | "info";
}
export const Notification: React.FC<NotificationAlertProps> = ({type, message, duration = 5000 }) => {
    const [visible, setVisible] = useState(true);
    const [leaving, setLeaving] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLeaving(true), duration - 400);
        const removeTimer = setTimeout(() => setVisible(false), duration);
        return () => {
            clearTimeout(timer);
            clearTimeout(removeTimer);
        };
    }, [duration]);
    if (!visible) return null;
    return (
        <AlertWrapper type={type} leaving={leaving}>
            <span>{message}</span>
            <CloseNotificationButton onClick={() => setLeaving(true)}>×</CloseNotificationButton>
        </AlertWrapper>
    );
};
