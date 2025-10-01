import { ProductForm, Container } from "./index.ts";
import { RemoveItemModal, useEditProduct } from "@/components";
export const EditProductPage = () => {
    const {
        product,
        isLoading,
        isEdit,
        isOpenModal,
        selectedCategory,
        setSelectedCategory,
        handleSave,
        handleDelete,
        setIsOpenModal
    } = useEditProduct();

    if (isLoading) return <p>Loading...</p>;

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
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            )}
        </Container>
    );
};
