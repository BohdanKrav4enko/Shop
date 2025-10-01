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
            <Link to={`/product/${product.id}`}>
                <ImageWrapper>
                        <img src={product.images[0]}
                             alt={product.title}
                             onError={e => (e.currentTarget.src = img)}
                        />
                </ImageWrapper>
            </Link>
                <Title>{product.title}</Title>
            <FlexWrapper justify={'space-between'} align={'center'}>
            {product.category ? (
                <CategoryChangeButton onClick={()=>{dispatch(setCategory(product.category.id))}}>
                    {product.category.name}
                </CategoryChangeButton>
            ) : "Unknown"}
                <AddToFavorite product={product} />
            </FlexWrapper>
            <Footer>
                <Price>{product.price} $</Price>
                <AddToCart product={product} />
            </Footer>
        </Card>
    );
};
