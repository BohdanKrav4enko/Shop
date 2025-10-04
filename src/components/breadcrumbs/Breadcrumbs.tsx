import {Link, useParams} from "react-router-dom";
import styled from "styled-components";
import {useGetProductByIdQuery} from "@/api/productsApi.ts";
import {useTranslation} from "react-i18next";

const BreadcrumbsContainer = styled.nav`
  font-size: 14px;
  color: #555;
  margin-bottom: 16px;
`;

const Crumb = styled.span`
  &:not(:last-child)::after {
    content: " / ";
    margin: 0 4px;
    color: #999;
  }
`;

export const Breadcrumbs = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const productId = Number(id);
    const { data } = useGetProductByIdQuery({id: productId});

    let productName: string | null = null;
    if (id && data) {
        productName = data?.title || null;
    }

    return (
        <BreadcrumbsContainer>
            <Crumb>
                <Link to="/">{t("Home")}</Link>
            </Crumb>
            {productName && <Crumb>{productName}</Crumb>}
        </BreadcrumbsContainer>
    );
};
