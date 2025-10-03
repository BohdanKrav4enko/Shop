import { useNavigate, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "@/api/productsApi.ts";
import { useCart, useAppDispatch, useAppSelector } from "./index.ts";
import { addCart, removeCart } from "@/features";
import { setCategory, setNotification } from "@/app/appSlice.ts";

export const useProductPage = () => {
    const { id } = useParams();
    const productId = Number(id);
    const { data, isLoading, isError} = useGetProductByIdQuery({ id: productId });
    const { inCart } = useCart();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const admin = useAppSelector(state => state.app.isAdmin);

    const existsInCart = data ? !!inCart(data.id) : false;

    const handleChangeCategory = () => {
        if (!data?.category) return;
        dispatch(setCategory(data.category.id));
        navigate(-1);
    };
    const handleAddToCart = () => {
        if (!data) return;
        dispatch(addCart(data));
        dispatch(setNotification({
            message: "The product has been successfully added to your cart",
            type: "success",
            duration: 1500
        }));
    };
    const handleRemoveFromCart = () => {
        if (!data) return;
        dispatch(removeCart(data.id));
    };
    const handleShare = async () => {
        if (!navigator.share || !data) return;
        try {
            await navigator.share({ title: `${data.title}: ${data.description}`, url: window.location.href });
        } catch {
            dispatch(setNotification({ message: "Unknown Error", type: "error" }));
        }
    };
    const handleCopyLink = () => {
        if (!data) return;
        navigator.clipboard.writeText(window.location.href);
        dispatch(setNotification({ message: "The link was copied successfully", type: "info", duration: 1500 }));
    };
    const handleBack = () => navigate(-1);

    return {
        data,
        admin,
        existsInCart,
        handleChangeCategory,
        handleAddToCart,
        handleRemoveFromCart,
        handleShare,
        handleCopyLink,
        handleBack,
        isError,
        isLoading,
    };
};
