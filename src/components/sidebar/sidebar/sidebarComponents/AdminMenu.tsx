import { StyledButton, CategoriesGrid, SidebarTitle } from "@/components";
import { Plus, ListOrdered } from "lucide-react";
import { PATH } from "@/routes/paths.ts";

interface AdminMenuProps {
    handleNavigate: (path: string) => void;
}

export const AdminMenu: React.FC<AdminMenuProps> = ({ handleNavigate }) => (
    <>
        <SidebarTitle>Admin Menu</SidebarTitle>
        <CategoriesGrid>
            <StyledButton onClick={() => handleNavigate(PATH.ADD_PRODUCT)} aria-label="Add new product">
                <Plus /> Add product
            </StyledButton>
            <StyledButton onClick={() => handleNavigate(PATH.ORDERS_PAGE)} aria-label="Orders page">
                <ListOrdered /> Orders page
            </StyledButton>
        </CategoriesGrid>
    </>
);
