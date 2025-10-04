import { StyledButton, CategoriesGrid, SidebarTitle } from "@/components";
import { Plus, ListOrdered } from "lucide-react";
import { PATH } from "@/routes/paths.ts";
import {useTranslation} from "react-i18next";

interface AdminMenuProps {
    handleNavigate: (path: string) => void;
}

export const AdminMenu: React.FC<AdminMenuProps> = ({ handleNavigate }) => {
    const {t} = useTranslation();
    return (
    <>
        <SidebarTitle>{t('Admin Menu')}</SidebarTitle>
        <CategoriesGrid>
            <StyledButton onClick={() => handleNavigate(PATH.ADD_PRODUCT)} aria-label="Add new product">
                <Plus /> {t('Add product')}
            </StyledButton>
            <StyledButton onClick={() => handleNavigate(PATH.ORDERS_PAGE)} aria-label="Orders page">
                <ListOrdered /> {t('Orders page')}
            </StyledButton>
        </CategoriesGrid>
    </>
)};
