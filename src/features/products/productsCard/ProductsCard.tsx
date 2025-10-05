import type {Product} from "@/types/types.ts";
import {Card, Footer, ImageWrapper, Price, AddToCart, Title, AddToFavorite} from "../index.ts";
import {Link} from "react-router-dom";
import {useAppDispatch} from "@/components";
import img from "../../../assets/placeholder.webp";
import {CategoryChangeButton} from "@/pages";
import {setCategory} from "@/app/appSlice.ts";
import {FlexWrapper} from "@/components/FlexWrapper.tsx";

export const ProductsCard = ({product}: { product: Product }) => {
    const dispatch = useAppDispatch();

    return (
        <Card>
            <Link to={`/product/${product.id}`} aria-label={`Go to ${product.title} page`}>
                <ImageWrapper>
                    <img
                        src={product.images[0]}
                        alt={`Image of ${product.title}`}
                        onError={e => (e.currentTarget.src = img)}
                        width="280"
                        height="280"
                        loading="lazy"
                        sizes="(max-width: 600px) 140px, 280px"
                        srcSet={`
                        ${product.images[0]}?w=140 140w,
                        ${product.images[0]}?w=280 280w
                        `}
                    />
                </ImageWrapper>
            </Link>
            <Title>{product.title}</Title>
            <FlexWrapper justify="space-between" align="center">
                {product.category ? (
                    <CategoryChangeButton
                        onClick={() => dispatch(setCategory(product.category.id))}
                        aria-label={`Set category to ${product.category.name}`}
                    >
                        {product.category.name}
                    </CategoryChangeButton>
                ) : "Unknown"}
                <AddToFavorite product={product} aria-label={`Add ${product.title} to favorites`}/>
            </FlexWrapper>
            <Footer>
                <Price>{product.price} $</Price>
                <AddToCart product={product} aria-label={`Add ${product.title} to cart`}/>
            </Footer>
        </Card>

    );
};
