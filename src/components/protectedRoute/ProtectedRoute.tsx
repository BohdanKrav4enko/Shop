import { Navigate, Outlet } from "react-router-dom";
import {useAppSelector } from "@/components";
import React from "react";
import {PATH} from "@/routes/paths.ts";

interface ProtectedRouteProps {
    redirectPath?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectPath = PATH.HOME }) => {
    const user = useAppSelector(state => state.auth.user);

    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};
