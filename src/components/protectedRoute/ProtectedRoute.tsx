import { Navigate, Outlet } from "react-router-dom";
import {useAppDispatch, useAppSelector } from "@/components";
import React from "react";
import {PATH} from "@/routes/paths.ts";
import {setOpenModal} from "@/app/modalSlice.ts";

interface ProtectedRouteProps {
    redirectPath?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectPath = PATH.HOME }) => {
    const user = useAppSelector(state => state.auth.user);
    const dispatch = useAppDispatch();

    if (!user) {
        dispatch(setOpenModal("registration"));
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};
