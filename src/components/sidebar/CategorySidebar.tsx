import { useGetCategoriesQuery } from "../../api/productsApi";
import { CategoryItem, SidebarContainer } from "./styles/CategorySidebarStyle";
import { setCategory } from "../../app/appSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

export const CategorySidebar = () => {
    const { data: categories, isLoading } = useGetCategoriesQuery();
    const dispatch = useAppDispatch();
    const selectedCategory = useAppSelector(state => state.app.categoryId);

    if (isLoading) return <SidebarContainer>Loading...</SidebarContainer>;
    if (!categories) return <SidebarContainer>No categories found</SidebarContainer>;

    const categoriesToShow = categories.slice(0, 5);

    return (
        <SidebarContainer>
            <CategoryItem
                key={0}
                active={selectedCategory === 0}
                onClick={() => dispatch(setCategory(0))}
            >
                All
            </CategoryItem>
            {categoriesToShow.map(cat => (
                <CategoryItem
                    key={cat.id}
                    active={cat.id === selectedCategory}
                    onClick={() => dispatch(setCategory(cat.id))}
                >
                    {cat.name}
                </CategoryItem>
            ))}
        </SidebarContainer>
    );
};
