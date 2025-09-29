import {useEffect, useState} from "react";
import {useCreateProductMutation, useGetProductsQuery, useUpdateProductMutation,} from "../../api/productsApi.ts";
import {useNavigate, useParams} from "react-router-dom";
import {StyledButton} from "../../components/button/StyledButton.tsx";
import {ActionButtons, ButtonGroup, Container, Input, Textarea, Title} from "./EditProductPageStyle.ts";
import {setError} from "../../app/appSlice.ts";
import {useAppDispatch} from "../../components/hooks/hooks.ts";
import {RemoveItemModal} from "../../components/modal/modals/RemoveItemModal.tsx";

export const EditProductPage = () => {
    const dispatch = useAppDispatch();
    const {id} = useParams();
    const isEdit = Boolean(id);
    const navigate = useNavigate();
    const {data: products, isLoading} = useGetProductsQuery({}, {skip: !isEdit,})
    const product = products?.find(p => p.id === Number(id));
    const [updateProduct] = useUpdateProductMutation();
    const [createProduct] = useCreateProductMutation();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState([""]);
    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        if (product) {
            setTitle(product.title);
            setDescription(product.description);
            setPrice(product.price);
            setImage(product.images);
        }
    }, [product]);
    if (isLoading) return <p>Loading...</p>;
    const handleSave = async () => {
        try {
            dispatch(setError(null))
            if (isEdit && product) {
                await updateProduct({
                    id: product.id,
                    title,
                    description,
                    price: Number(price),
                    images: image,
                }).unwrap();
                navigate(`/product/${product.id}`)
            } else {
                await createProduct({
                    title,
                    description,
                    price: Number(price),
                    images: image,
                    categoryId: 52,
                }).unwrap();
                navigate(`/`)
            }
        } catch (err: unknown) {
            let message = "Unknown Error";
            if (err && typeof err === "object" && "data" in err) {
                const e = err as { data?: { message?: string } };
                message = e.data?.message || message;
            }
            dispatch(setError(message));
        }
    };
    const handleDelete =  () => {
        setIsOpenModal(true)
    }
    return (
        <Container>
            {isOpenModal ? <RemoveItemModal id={product!.id} onClose={()=>{setIsOpenModal(false)}}/> : <>
                {isEdit? <Title>Edit Product</Title> : <Title>Add Product</Title> }
                <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter the product name"/>
                <Input value={image} onChange={(e) => setImage([e.target.value])} placeholder="Enter the product image URL"/>
                <Textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Enter a product description"/>
                <Input type="number" value={price === 0 ? "" : price} onChange={e => setPrice(Number(e.target.value) || 0)} placeholder="Enter the price of the product"/>
                <ButtonGroup>
                    {isEdit? <StyledButton onClick={handleDelete}>Delete</StyledButton> : <div/> }
                    <ActionButtons>
                        <StyledButton onClick={handleSave}>Save</StyledButton>
                        <StyledButton onClick={() => navigate(-1)}>Cancel</StyledButton>
                    </ActionButtons>
                </ButtonGroup>
            </>}
        </Container>
    );
};
