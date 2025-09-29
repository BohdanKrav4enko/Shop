import {Link, useParams} from "react-router-dom";
import styled from "styled-components";
import {useGetProductsQuery} from "../../api/productsApi.ts";

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
    const { id } = useParams();
    const { data } = useGetProductsQuery({});

    let productName: string | null = null;
    if (id && data) {
        const product = data.find(p => p.id === Number(id));
        productName = product?.title || null;
    }

    return (
        <BreadcrumbsContainer>
            <Crumb>
                <Link to="/">Home</Link>
            </Crumb>
            {productName && <Crumb>{productName}</Crumb>}
        </BreadcrumbsContainer>
    );
};
