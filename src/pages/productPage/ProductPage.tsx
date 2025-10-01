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

export const ProductPage = () => {
    const {
        data,
        admin,
        existsInCart,
        handleChangeCategory,
        handleAddToCart,
        handleRemoveFromCart,
        handleShare,
        handleCopyLink,
        handleBack
    } = useProductPage();

    if (!data) return <ProductPageSkeleton/>

    return (
        <ProductContainer>
            <Breadcrumbs/>
            <ProductHeader title={data.title} admin={admin} productId={data.id}/>
            <ProductImage
                src={data.images?.[0]}
                alt={data.title || "Product image"}
                onError={e => (e.currentTarget.src = img)}
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
            <StyledButton onClick={handleBack}>Back</StyledButton>
        </ProductContainer>
    );
};

