import {Link, useParams} from "react-router-dom";
import {useGetProductsQuery} from "../../api/productsApi.ts";
import {
    PriceButtonWrapper,
    ProductContainer,
    ProductDescription,
    ProductImage,
    ProductPrice,
    ProductTitle,
    TitleWrapper
} from "./ProductPageStyle.ts";
import {StyledButton} from "../../components/button/StyledButton.tsx";
import {Breadcrumbs} from "../../components/breadcrumbs/Breadcrumbs.tsx";
import {useAppDispatch, useAppSelector} from "../../components/hooks/hooks.ts";
import {addCart, removeCart} from "../../features/cart/cartSlice.ts";
import {ProductCardSkeleton} from "../../components/skeletons/ProductPageSkeleton.tsx";
import {useCart} from "../../components/hooks/useCart.ts";
import img from '../../assets/placeholder.webp'


export const ProductPage = () => {
    const { id } = useParams();
    const { data } = useGetProductsQuery({});
    const { inCart } = useCart();
    const admin = useAppSelector(state => state.app.isAdmin);
    const dispatch = useAppDispatch();
    const product = data?.find((p) => p.id === Number(id));
    if (!product) return <ProductCardSkeleton/>
    const exists = inCart(product!.id);


    return (
            <ProductContainer>
                <Breadcrumbs/>
                <TitleWrapper>
                    <ProductTitle>{product.title}</ProductTitle>
                    {admin && <Link to={`/edit-product/${product.id}`}><StyledButton children={'Edit'}/></Link>}
                </TitleWrapper>
                <ProductImage
                    src={product.images?.[0]}
                    alt={product.title || "Product image"}
                    onError={e => (e.currentTarget.src = img)}
                />
                <PriceButtonWrapper>
                    <ProductPrice>Price: {product.price} $</ProductPrice>
                    {exists
                        ? <StyledButton children={'In the basket✔️️'} onClick={()=>{dispatch(removeCart(product.id))}}/>
                        : <StyledButton children={'Buy🏷️'} onClick={()=>{dispatch(addCart(product))}}/>}
                </PriceButtonWrapper>
                <ProductDescription>{product.description}</ProductDescription>
            </ProductContainer>
    );
};
