import { StyledButton } from "../../components/button/StyledButton";
import { Input, Textarea, ButtonGroup, ActionButtons, Title } from "./EditProductPageStyle";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProductFormProps {
    initialTitle?: string;
    initialDescription?: string;
    initialPrice?: number;
    initialImage?: string[];
    onSave: (data: { title: string; description: string; price: number; images: string[] }) => void;
    isEdit?: boolean;
    onDelete?: () => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({
                                                            initialTitle = "",
                                                            initialDescription = "",
                                                            initialPrice = 0,
                                                            initialImage = [""],
                                                            onSave,
                                                            isEdit = false,
                                                            onDelete,
                                                        }) => {
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);
    const [price, setPrice] = useState(initialPrice);
    const [image, setImage] = useState(initialImage);
    const navigate = useNavigate();

    useEffect(() => {
        setTitle(initialTitle);
        setDescription(initialDescription);
        setPrice(initialPrice);
        setImage(initialImage);
    }, []);

    const handleSave = () => {
        onSave({ title, description, price: Number(price), images: image });
    };

    return (
        <>
            <Title>{isEdit ? "Edit Product" : "Add Product"}</Title>
            <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter the product name" />
            <Input value={image} onChange={e => setImage([e.target.value])} placeholder="Enter the product image URL" />
            <Textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Enter a product description" />
            <Input
                type="number"
                value={price === 0 ? "" : price}
                onChange={e => setPrice(Number(e.target.value) || 0)}
                placeholder="Enter the price of the product"
            />
            <ButtonGroup>
                {isEdit && onDelete && <StyledButton onClick={onDelete}>Delete</StyledButton>}
                <ActionButtons>
                    <StyledButton onClick={handleSave}>Save</StyledButton>
                    <StyledButton onClick={() => navigate(-1)}>Cancel</StyledButton>
                </ActionButtons>
            </ButtonGroup>
        </>
    );
};
