import {useEffect} from "react";
import {setAdmin, setCategory, setNotification} from "@/app/appSlice.ts";
import {PATH} from "@/routes/paths.ts";
import {setOpenModal} from "@/app/modalSlice.ts";
import {getAuth, signOut} from "firebase/auth";
import {logout} from "@/app/authSlice.ts";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "@/components";
import type {SidebarProps} from "@/components/sidebar/type/type.ts";
import {useTranslation} from "react-i18next";

export const useSidebar = (props: SidebarProps) => {
    const {isOpen, onClose} = props
    const navigate = useNavigate();
    const auth = getAuth();
    const dispatch = useAppDispatch();
    const admin = useAppSelector(state => state.app.isAdmin);
    const user = useAppSelector(state => state.auth.user);
    const selectedCategory = useAppSelector(state => state.app.categoryId);
    const { t } = useTranslation();


    useEffect(() => {
        const html = document.documentElement;
        html.style.overflow = isOpen ? "hidden" : "";
        return () => {
            html.style.overflow = "";
        };
    }, [isOpen]);


    const handleCategoryClick = (id: number) => {
        dispatch(setCategory(id));
        navigate(PATH.HOME)
        onClose();
    };

    const handleUserMenuNavigate = (path: string) => {
        if (user) {
            onClose();
            navigate(path);
        } else {
            onClose();
            dispatch(setOpenModal("registration"))
        }
    };
    const loginHandler = () => {
        if (user) {
            signOut(auth)
                .then(() => {
                    navigate(PATH.HOME);
                    dispatch(logout());
                    onClose();
                    dispatch(setAdmin(false))
                    dispatch(setNotification({
                        type: "info",
                        message: t("You have successfully logged out of your account.")
                    }))
                })
                .catch((error) => {
                    dispatch(setNotification({
                        type: "error",
                        message: t("Logout error", { error: error instanceof Error ? error.message : String(error) })}));
                });
        } else {
            onClose();
            dispatch(setOpenModal("registration"))
        }
    }
    const handleNavigate = (path: string) => {
        onClose();
        navigate(path);
    };

    return {
        handleCategoryClick,
        handleNavigate,
        loginHandler,
        handleUserMenuNavigate,
        user,
        admin,
        selectedCategory
    };
};
