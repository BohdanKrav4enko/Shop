import {Link, useNavigate, useParams} from "react-router-dom";
import {useGetProductsQuery} from "../../api/productsApi.ts";
import {
    ProductContainer,
    ProductDescription,
    ProductImage,
    ProductPrice,
    ProductTitle,
    ProductItemWrapper
} from "./ProductPageStyle.ts";
import {StyledButton} from "../../components/button/StyledButton.tsx";
import {Breadcrumbs} from "../../components/breadcrumbs/Breadcrumbs.tsx";
import {useAppDispatch, useAppSelector} from "../../components/hooks/hooks.ts";
import {addCart, removeCart} from "../../features/cart/cartSlice.ts";
import {ProductCardSkeleton} from "../../components/skeletons/ProductPageSkeleton.tsx";
import {useCart} from "../../components/hooks/useCart.ts";
import img from '../../assets/placeholder.webp'
import {ArrowLeft, CircleDollarSign, Link2, Pen, ShoppingBasket} from "lucide-react";


export const ProductPage = () => {
    const {id} = useParams();
    const {data} = useGetProductsQuery({});
    const {inCart} = useCart();
    const navigate = useNavigate();
    const admin = useAppSelector(state => state.app.isAdmin);
    const dispatch = useAppDispatch();
    const product = data?.find((p) => p.id === Number(id));
    if (!product) return <ProductCardSkeleton/>
    const exists = inCart(product!.id);


    return (
        <ProductContainer>
            <Breadcrumbs/>
            <ProductItemWrapper>
                <ProductTitle>{product.title}</ProductTitle>
                {admin && <Link to={`/edit-product/${product.id}`}><StyledButton>Edit<Pen
                    style={{width: '14px'}}/></StyledButton></Link>}
            </ProductItemWrapper>
            <ProductImage
                src={product.images?.[0]}
                alt={product.title || "Product image"}
                onError={e => (e.currentTarget.src = img)}
            />
            <ProductItemWrapper>
                <ProductPrice>Price: {product.price} $</ProductPrice>
                {exists
                    ? <StyledButton onClick={() => {
                        dispatch(removeCart(product.id))
                    }}>
                        In the basket<ShoppingBasket/>
                    </StyledButton>
                    : <StyledButton onClick={() => {
                        dispatch(addCart(product))
                    }}>
                        Buy<CircleDollarSign/>
                    </StyledButton>}
            </ProductItemWrapper>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductItemWrapper>
                <StyledButton onClick={() => navigate(-1)}>
                    <ArrowLeft/> Back
                </StyledButton>
                <StyledButton onClick={() => navigator.clipboard.writeText(window.location.href)}>
                    <Link2/> Copy link
                </StyledButton>
            </ProductItemWrapper>
        </ProductContainer>
    );
};
