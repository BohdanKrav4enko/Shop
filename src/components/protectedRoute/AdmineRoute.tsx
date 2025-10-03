import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@/components";
import React from "react";
import { PATH } from "@/routes/paths";

interface AdminRouteProps {
    redirectPath?: string;
}

export const AdminRoute: React.FC<AdminRouteProps> = ({ redirectPath = PATH.HOME }) => {
    const isAdmin = useAppSelector(state => state.app.isAdmin);

    if (!isAdmin) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};
