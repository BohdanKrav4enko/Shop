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
                <CategoryChangeButton onClick={handleChangeCategory}>
                    {data.category.name}
                </CategoryChangeButton>
            ) : "Unknown"}
            </CategoryWrapper>
        </FlexWrapper>
    );
};

