import {StyledButton} from "@/components";
import {Input, Textarea, ButtonGroup, ActionButtons, Title, Select} from "@/pages";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useGetCategoriesQuery} from "@/api/productsApi.ts";
import {PATH} from "@/routes/paths.ts";
import {useTranslation} from "react-i18next";

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
    const { t } = useTranslation();

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
            <Title>{isEdit ? t("Edit Product") : t("Add Product")}</Title>

            <label htmlFor="product-title">{t("Product Name")}</label>
            <Input value={title} onChange={e => setTitle(e.target.value)} placeholder={t("Enter the product name")} />

            <label htmlFor="product-image">{t("Product Image URL")}</label>
            <Input value={image} onChange={e => setImage([e.target.value])} placeholder={t("Enter the product image URL")} />

            <label htmlFor="product-description">{t("Description")}</label>
            <Textarea value={description} onChange={e => setDescription(e.target.value)} placeholder={t("Enter a product description")} />

            {!isEdit && <>
                <label htmlFor="product-category">{t("Category")}</label>
                <Select value={selectedCategory} onChange={e => setSelectedCategory(Number(e.target.value))}>
                    {categoriesLoading && <option>{t("Loading...")}</option>}
                    {categories?.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </Select>
            </>}

            <label htmlFor="product-price">{t("Price")}</label>
            <Input
                type="number"
                value={price === 0 ? "" : price}
                onChange={e => setPrice(Number(e.target.value) || 0)}
                placeholder={t("Enter the price of the product")}
            />

            <ButtonGroup>
                {isEdit && onDelete && <StyledButton onClick={onDelete}>{t("Delete")}</StyledButton>}
                <ActionButtons>
                    <StyledButton onClick={handleSave}>{t("Save")}</StyledButton>
                    <StyledButton onClick={() => navigate(PATH.HOME)}>{t("Cancel")}</StyledButton>
                </ActionButtons>
            </ButtonGroup>
        </>
    );
};
