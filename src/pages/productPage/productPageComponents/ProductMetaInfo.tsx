import {FlexWrapper} from "@/components/FlexWrapper.tsx";
import {CategoryChangeButton, CategoryWrapper, ProductPrice} from "@/pages";
import type {Product} from "@/types/types.ts";
import {useTranslation} from "react-i18next";

interface ProductMetaInfoProps {
    handleChangeCategory: () => void;
    data: Product;
}

export const ProductMetaInfo = ({ data, handleChangeCategory }: ProductMetaInfoProps) => {
    const { t } = useTranslation();

    return (
        <FlexWrapper justify={'space-between'} align={'center'}>
            <ProductPrice>{t("Price")}: {data.price} $</ProductPrice>
            <CategoryWrapper>
                {t("Category")}: {data.category ? (
                <CategoryChangeButton
                    onClick={handleChangeCategory}
                    aria-label={t("Change category from", { category: data.category.name })}
                    title={t("Change category from", { category: data.category.name })}
                >
                    {data.category.name}
                </CategoryChangeButton>
            ) : t("Unknown")}
            </CategoryWrapper>
        </FlexWrapper>
    );
};