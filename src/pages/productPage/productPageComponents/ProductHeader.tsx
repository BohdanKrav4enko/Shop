import { Link } from "react-router-dom";
import { Pen } from "lucide-react";
import { StyledButton } from "@/components";
import {ProductItemWrapper, ProductTitle} from "@/pages";

interface ProductHeaderProps {
    title: string;
    admin: boolean;
    productId: number;
}

export const ProductHeader = ({ title, admin, productId }: ProductHeaderProps) => (
    <ProductItemWrapper>
        <ProductTitle>{title}</ProductTitle>
        {admin && (
            <Link to={`/edit-product/${productId}`}>
                <StyledButton>
                    Edit <Pen style={{ width: '14px' }} />
                </StyledButton>
            </Link>
        )}
    </ProductItemWrapper>
);
