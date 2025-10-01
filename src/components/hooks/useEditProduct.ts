import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "./hooks.ts";
import { setNotification } from "@/app/appSlice.ts";
import { useGetProductByIdQuery, useUpdateProductMutation, useCreateProductMutation } from "@/api/productsApi.ts";

export const useEditProduct = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const productId = Number(id);
    const isEdit = Boolean(id);
    const navigate = useNavigate();

    const { data: product, isLoading } = useGetProductByIdQuery({ id: productId }, { skip: !isEdit });

    const [updateProduct] = useUpdateProductMutation();
    const [createProduct] = useCreateProductMutation();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<number>(product?.category?.id || 1);

    const handleSave = async (data: { title: string; description: string; price: number; images: string[] }) => {
        try {
            if (isEdit && product) {
                await updateProduct({ id: product.id, ...data }).unwrap();
                dispatch(setNotification({ message: "Product changed successfully", type: "success" }));
                navigate(`/product/${product.id}`);
            } else {
                await createProduct({ ...data, categoryId: selectedCategory }).unwrap();
                dispatch(setNotification({ message: "Product added successfully", type: "success" }));
                navigate(`/`);
            }
        } catch (err: unknown) {
            let message = "Unknown Error";
            if (err && typeof err === "object" && "data" in err) {
                const e = err as { data?: { message?: string } };
                message = e.data?.message || message;
            }
            dispatch(setNotification({ message, type: "error" }));
        }
    };

    const handleDelete = () => setIsOpenModal(true);

    return {
        product,
        isLoading,
        isEdit,
        isOpenModal,
        selectedCategory,
        setSelectedCategory,
        handleSave,
        handleDelete,
        setIsOpenModal
    };
};
