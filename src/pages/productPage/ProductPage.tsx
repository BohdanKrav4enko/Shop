import img from '../../assets/placeholder.webp';
import {Breadcrumbs, ProductPageSkeleton, StyledButton, useProductPage} from "@/components";
import {
    ProductActions,
    ProductContainer,
    ProductDescription,
    ProductHeader,
    ProductImage,
    ProductItemWrapperFooter,
    ProductMetaInfo,
    ProductShare
} from "./index.ts";
import {ArrowLeft} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {PATH} from "@/routes/paths.ts";
import {useTranslation} from "react-i18next";

export const ProductPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const {
        data,
        admin,
        existsInCart,
        handleChangeCategory,
        handleAddToCart,
        handleRemoveFromCart,
        handleShare,
        handleCopyLink,
        handleBack,
        isLoading,
        isError
    } = useProductPage();

    if (isLoading) return <ProductPageSkeleton />;
    if (isError || !data) {
        navigate(PATH.ERROR_PAGE, { replace: true })
        return null;
    }

    return (
        <ProductContainer>
            <Breadcrumbs/>
            <ProductHeader title={data.title} admin={admin} productId={data.id}/>
            <ProductImage
                src={data.images?.[0]}
                alt={data.title || "Product image"}
                onError={e => (e.currentTarget.src = img)}
                height="500"
                width="500"
                sizes="(max-width: 600px) 200px, 500px"
                srcSet={`
                ${data.images?.[0]}?w=200 200w,
                ${data.images?.[0]}?w=500 500w`}
            />
            <ProductActions
                data={data}
                existsInCart={existsInCart}
                onAdd={handleAddToCart}
                onRemove={handleRemoveFromCart}
            />
            <ProductMetaInfo data={data} handleChangeCategory={handleChangeCategory}/>
            <ProductDescription>{data.description}</ProductDescription>
            <ProductItemWrapperFooter>
                <ProductShare onShare={handleShare} onCopy={handleCopyLink}/>
            </ProductItemWrapperFooter>
            <StyledButton onClick={handleBack}>
                <ArrowLeft />
                {t("Back")}
            </StyledButton>
        </ProductContainer>
    );
};

