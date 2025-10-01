import {FlexWrapper} from "@/components/FlexWrapper.tsx";
import {CategoryChangeButton, CategoryWrapper, ProductPrice} from "@/pages";
import type {Product} from "@/types/types.ts";

interface ProductMetaInfoProps {
    handleChangeCategory: () => void;
    data: Product;
}

export const ProductMetaInfo = ({data, handleChangeCategory}: ProductMetaInfoProps) => {
    return (
        <FlexWrapper justify={'space-between'} align={'center'}>
            <ProductPrice>Price: {data.price} $</ProductPrice>
            <CategoryWrapper>
                Category: {data.category ? (
                <CategoryChangeButton
                    onClick={handleChangeCategory}
                    aria-label={`Change category from ${data.category.name}`}
                    title={`Change category from ${data.category.name}`}
                >
                    {data.category.name}
                </CategoryChangeButton>
            ) : "Unknown"}
            </CategoryWrapper>
        </FlexWrapper>
    );
};
