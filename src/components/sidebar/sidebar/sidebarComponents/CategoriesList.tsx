import { MobileCategoryItem, CategoriesGrid, SidebarTitle, useAppSelector } from "@/components";
import React from "react";
import {useTranslation} from "react-i18next";

interface CategoriesListProps {
    handleCategoryClick: (id: number) => void;
    categories: { id: number; name: string }[];
}

export const CategoriesList: React.FC<CategoriesListProps> = ({ handleCategoryClick, categories }) => {
    const selectedCategory = useAppSelector(state => state.app.categoryId);
    const {t} = useTranslation();
    return (
        <>
            <SidebarTitle>{t('Category')}</SidebarTitle>
            <CategoriesGrid>
                <MobileCategoryItem active={selectedCategory === 0} onClick={() => handleCategoryClick(0)}>
                    {t('All')}
                </MobileCategoryItem>
                {categories.slice(0, 5).map(cat => (
                    <MobileCategoryItem
                        key={cat.id}
                        active={cat.id === selectedCategory}
                        onClick={() => handleCategoryClick(cat.id)}
                    >
                        {cat.name}
                    </MobileCategoryItem>
                ))}
            </CategoriesGrid>
        </>
    );
};
