import {useGetCategoriesQuery} from "@/api/productsApi.ts";
import type {MobileSidebarProps} from "@/components/burgerMenu/type/type.ts";
import React from "react";
import {
    AdminMenu,
    CategoriesList,
    Container,
    InformationLinks,
    MobileSidebarContainer,
    UserMenu,
    useSidebar,
} from "../../index.ts";


export const Sidebar: React.FC<MobileSidebarProps> = ({isOpen, onClose}) => {
    const {data: categories, isLoading} = useGetCategoriesQuery();
    const {
        admin,
        user,
        handleUserMenuNavigate,
        handleCategoryClick,
        handleNavigate,
        loginHandler
    } = useSidebar({isOpen, onClose})


    if (isLoading) return null;
    if (!categories) return <></>;
    if (!isOpen) return null;

    return (
        <MobileSidebarContainer isOpen={isOpen}>
            <Container>
                {user && admin && <AdminMenu handleNavigate={handleNavigate} />}
                <UserMenu loginHandler={loginHandler} handleUserMenuNavigate={handleUserMenuNavigate} />
                <CategoriesList categories={categories} handleCategoryClick={handleCategoryClick} />
                <InformationLinks handleNavigate={handleNavigate} />
            </Container>
        </MobileSidebarContainer>
    );
};
