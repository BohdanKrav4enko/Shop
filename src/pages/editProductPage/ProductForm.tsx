import {StyledButton} from "@/components";
import {Input, Textarea, ButtonGroup, ActionButtons, Title, Select} from "@/pages";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useGetCategoriesQuery} from "@/api/productsApi.ts";

interface ProductFormProps {
    initialTitle?: string;
    initialDescription?: string;
    initialPrice?: number;
    initialImage?: string[];
    onSave: (data: { title: string; description: string; price: number; images: string[] }) => void;
    isEdit?: boolean;
    onDelete?: () => void;
    selectedCategory: number;
    setSelectedCategory: (id: number) => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({
                                                            initialTitle = "",
                                                            initialDescription = "",
                                                            initialPrice = 0,
                                                            initialImage = [""],
                                                            onSave,
                                                            isEdit = false,
                                                            onDelete,
                                                            selectedCategory,
                                                            setSelectedCategory
                                                        }) => {
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);
    const [price, setPrice] = useState(initialPrice);
    const [image, setImage] = useState(initialImage);
    const navigate = useNavigate();
    const {data: categories, isLoading: categoriesLoading} = useGetCategoriesQuery();

    useEffect(() => {
        setTitle(initialTitle);
        setDescription(initialDescription);
        setPrice(initialPrice);
        setImage(initialImage);
    }, []);

    const handleSave = () => {
        onSave({title, description, price: Number(price), images: image});
    };

    return (
        <>
            <Title>{isEdit ? "Edit Product" : "Add Product"}</Title>
            <label htmlFor="product-title">Product Name</label>
            <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter the product name"/>
            <label htmlFor="product-image">Product Image URL</label>
            <Input value={image} onChange={e => setImage([e.target.value])} placeholder="Enter the product image URL"/>
            <label htmlFor="product-description">Description</label>
            <Textarea value={description} onChange={e => setDescription(e.target.value)}
                      placeholder="Enter a product description"/>

            {!isEdit && <>
                <label htmlFor="product-category">Category</label>
                <Select value={selectedCategory} onChange={e => setSelectedCategory(Number(e.target.value))}>
                    {categoriesLoading && <option>Loading...</option>}
                    {categories?.map(cat => (
                        <option key={cat.id} value={cat.id}>
                            {cat.name}
                        </option>))}
                </Select></>}
            <label htmlFor="product-price">Price</label>
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
