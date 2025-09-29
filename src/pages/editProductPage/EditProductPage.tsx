import { Container } from "./EditProductPageStyle";
import { useParams, useNavigate } from "react-router-dom";
import { useGetProductsQuery, useUpdateProductMutation, useCreateProductMutation } from "../../api/productsApi";
import { useAppDispatch } from "../../components/hooks/hooks";
import { setError } from "../../app/appSlice";
import { useState } from "react";
import { ProductForm } from "./ProductForm";
import { RemoveItemModal } from "../../components/modal/modals/RemoveItemModal";

export const EditProductPage = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const isEdit = Boolean(id);
    const navigate = useNavigate();

    const { data: products, isLoading } = useGetProductsQuery({}, { skip: !isEdit });
    const product = products?.find(p => p.id === Number(id));

    const [updateProduct] = useUpdateProductMutation();
    const [createProduct] = useCreateProductMutation();
    const [isOpenModal, setIsOpenModal] = useState(false);

    if (isLoading) return <p>Loading...</p>;

    const handleSave = async (data: { title: string; description: string; price: number; images: string[] }) => {
        try {
            dispatch(setError(null));
            if (isEdit && product) {
                await updateProduct({ id: product.id, ...data }).unwrap();
                navigate(`/product/${product.id}`);
            } else {
                await createProduct({ ...data, categoryId: 52 }).unwrap();
                navigate(`/`);
            }
        } catch (err: unknown) {
            let message = "Unknown Error";
            if (err && typeof err === "object" && "data" in err) {
                const e = err as { data?: { message?: string } };
                message = e.data?.message || message;
            }
            dispatch(setError(message));
        }
    }
    const handleDelete = () => setIsOpenModal(true);

    return (
        <Container>
            {isOpenModal && product ? (
                <RemoveItemModal id={product.id} onClose={() => setIsOpenModal(false)} />
            ) : (
                <ProductForm
                    initialTitle={product?.title}
                    initialDescription={product?.description}
                    initialPrice={product?.price}
                    initialImage={product?.images}
                    isEdit={isEdit}
                    onSave={handleSave}
                    onDelete={handleDelete}
                />
            )}
        </Container>
    )
}
