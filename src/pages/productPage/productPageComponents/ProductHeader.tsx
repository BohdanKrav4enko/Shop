import { Link } from "react-router-dom";
import { Pen } from "lucide-react";
import { StyledButton } from "@/components";
import {ProductItemWrapper, ProductTitle} from "@/pages";
import {useTranslation} from "react-i18next";

interface ProductHeaderProps {
    title: string;
    admin: boolean;
    productId: number;
}
export const ProductHeader = ({ title, admin, productId }: ProductHeaderProps) => {
    const { t } = useTranslation();

    return (
        <ProductItemWrapper>
            <ProductTitle>{title}</ProductTitle>
            {admin && (
                <Link to={`/edit-product/${productId}`}>
                    <StyledButton>
                        {t("Edit")} <Pen style={{ width: '14px' }} />
                    </StyledButton>
                </Link>
            )}
        </ProductItemWrapper>
    );
};