import { MobileCategoryItem, CategoriesGrid, SidebarTitle, useAppSelector } from "@/components";
import React from "react";

interface CategoriesListProps {
    handleCategoryClick: (id: number) => void;
    categories: { id: number; name: string }[];
}

export const CategoriesList: React.FC<CategoriesListProps> = ({ handleCategoryClick, categories }) => {
    const selectedCategory = useAppSelector(state => state.app.categoryId);

    return (
        <>
            <SidebarTitle>Category</SidebarTitle>
            <CategoriesGrid>
                <MobileCategoryItem active={selectedCategory === 0} onClick={() => handleCategoryClick(0)}>
                    All
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
