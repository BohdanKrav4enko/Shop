import {Link, useNavigate, useParams} from "react-router-dom";
import {useGetProductByIdQuery} from "../../api/productsApi.ts";
import {
    CategoryChangeButton,
    CategoryWrapper,
    ProductContainer,
    ProductDescription,
    ProductImage,
    ProductItemWrapper, ProductItemWrapperFooter,
    ProductPrice,
    ProductTitle
} from "./ProductPageStyle.ts";
import {StyledButton} from "../../components/button/StyledButton.tsx";
import {Breadcrumbs} from "../../components/breadcrumbs/Breadcrumbs.tsx";
import {useAppDispatch, useAppSelector} from "../../components/hooks/hooks.ts";
import {addCart, removeCart} from "../../features/cart/cartSlice.ts";
import {ProductCardSkeleton} from "../../components/skeletons/ProductPageSkeleton.tsx";
import {useCart} from "../../components/hooks/useCart.ts";
import img from '../../assets/placeholder.webp'
import {ArrowLeft, CircleDollarSign, Link2, Pen, Share, ShoppingBasket} from "lucide-react";
import {setCategory, setError} from "../../app/appSlice.ts";


export const ProductPage = () => {
    const {id} = useParams();
    const productId = Number(id);
    const {data} = useGetProductByIdQuery({id: productId});
    const {inCart} = useCart();
    const navigate = useNavigate();
    const admin = useAppSelector(state => state.app.isAdmin);
    const dispatch = useAppDispatch();
    if (!data) return <ProductCardSkeleton/>
    const exists = inCart(data!.id);

    const changeCategoryHandler = () => {
        dispatch(setCategory(data.category.id))
        navigate(-1)
    }
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "SHOP",
                    url: window.location.href,
                });
            } catch (err: unknown) {
                let message = "Unknown Error";
                if (err && typeof err === "object" && "data" in err) {
                    const e = err as { data?: { message?: string } };
                    message = e.data?.message || message;
                }
                dispatch(setError(message));
            }
        }
    };

    return (
        <ProductContainer>
            <Breadcrumbs/>
            <ProductItemWrapper>
                <ProductTitle>{data.title}</ProductTitle>
                {admin && <Link to={`/edit-product/${data.id}`}><StyledButton>Edit<Pen
                    style={{width: '14px'}}/></StyledButton></Link>}
            </ProductItemWrapper>
            <ProductImage
                src={data.images?.[0]}
                alt={data.title || "Product image"}
                onError={e => (e.currentTarget.src = img)}
            />
            <ProductItemWrapper>
                <ProductPrice>Price: {data.price} $</ProductPrice>
                {exists
                    ? <StyledButton onClick={() => {
                        dispatch(removeCart(data.id))
                    }}>
                        In the basket<ShoppingBasket/>
                    </StyledButton>
                    : <StyledButton onClick={() => {
                        dispatch(addCart(data))
                    }}>
                        Buy<CircleDollarSign/>
                    </StyledButton>}
            </ProductItemWrapper>
            <CategoryWrapper>
                Category: {data.category ? (
                <CategoryChangeButton onClick={changeCategoryHandler}>
                    {data.category.name}
                </CategoryChangeButton>
            ) : "Unknown"}
            </CategoryWrapper>
            <ProductDescription>{data.description}</ProductDescription>
            <ProductItemWrapperFooter>
                <StyledButton onClick={handleShare}>
                    <Share /> Share
                </StyledButton>
                <StyledButton onClick={() => navigator.clipboard.writeText(window.location.href)}>
                    <Link2/> Copy link
                </StyledButton>
            </ProductItemWrapperFooter>
            <StyledButton onClick={() => navigate(-1)}>
                <ArrowLeft/> Back
            </StyledButton>
        </ProductContainer>
    );
};
